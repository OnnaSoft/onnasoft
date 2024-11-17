import { HttpError } from "http-errors-enhanced";
import OpenAI from "openai";
import { services, tools } from "server/services/openai/functions";

const requiredEnvVars = ["OPENAI_API_KEY", "OPENAI_ASSISTANT_ID"];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID ?? "";

export async function runThread(threadId: string, message: string) {
  if (!message) {
    throw new HttpError(400, "Message is required");
  }

  const threadMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: message,
  });

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: ASSISTANT_ID,
    tools: tools,
  });

  // Esperar a que el asistente complete su respuesta
  let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
  while (
    runStatus.status !== "completed" &&
    runStatus.status !== "requires_action"
  ) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
  }

  await applyThreadAction(runStatus, threadId, run);

  return { threadMessage, run };
}

export async function applyThreadAction(
  runStatus: OpenAI.Beta.Threads.Runs.Run,
  threadId: string,
  run: any
) {
  if (runStatus.status === "requires_action") {
    const toolCalls = runStatus.required_action?.submit_tool_outputs.tool_calls;
    if (toolCalls) {
      const toolOutputs = await Promise.all(
        toolCalls.map(async (toolCall) => {
          const service = services.find(
            (s) => s.function_name === toolCall.function.name
          );

          if (service) {
            service.processServiceRequest(
              JSON.parse(toolCall.function.arguments)
            );

            return {
              tool_call_id: toolCall.id,
              output: JSON.stringify({
                response: "Información procesada para OnnaSoft Services",
                details: JSON.parse(toolCall.function.arguments),
              }),
            };
          }
          return null;
        })
      );

      await openai.beta.threads.runs.submitToolOutputs(threadId, run.id, {
        tool_outputs: toolOutputs.filter((output) => output !== null),
      });

      // Esperar a que el asistente procese la salida de la herramienta
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      }
    }
  }

  return runStatus;
}

export function createThread() {
  return openai.beta.threads.create();
}

export function getMessages(threadId: string) {
  return openai.beta.threads.messages.list(threadId);
}
