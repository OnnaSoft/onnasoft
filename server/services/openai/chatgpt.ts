import OpenAI from "openai";
import { HttpError } from "http-errors-enhanced";
import { services, tools } from "&/services/openai/functions";

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

const ERROR_MESSAGES = {
  ASSISTANT_NO_RESPONSE: "Unable to get a response from the assistant.",
  MESSAGE_REQUIRED: "Message is required.",
  THREAD_CREATION: "An error occurred while creating the thread.",
  RUN_THREAD: "An error occurred while running the thread.",
  RUN_STATUS_RETRIEVE: "An error occurred while retrieving run status.",
  TOOL_CALL_PROCESS: "An error occurred while processing tool calls.",
  TOOL_OUTPUT_SUBMIT: "An error occurred while submitting tool outputs.",
  MESSAGES_RETRIEVE: "An error occurred while retrieving messages.",
};

const chatService = {
  async runThread(threadId: string, message: string) {
    if (!message) {
      throw new HttpError(400, ERROR_MESSAGES.MESSAGE_REQUIRED);
    }

    const threadMessage = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs
      .create(threadId, {
        assistant_id: ASSISTANT_ID,
        tools: tools,
      })
      .catch((error) => {
        console.error("Error running thread:", error);
        throw new HttpError(500, ERROR_MESSAGES.RUN_THREAD);
      });

    // Wait for the assistant to complete its response
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    while (
      runStatus.status !== "completed" &&
      runStatus.status !== "requires_action"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs
        .retrieve(threadId, run.id)
        .catch((error) => {
          console.error("Error retrieving run status:", error);
          throw new HttpError(500, ERROR_MESSAGES.RUN_STATUS_RETRIEVE);
        });
    }

    await this.applyThreadAction(runStatus, threadId, run);

    return { threadMessage, run };
  },

  async applyThreadAction(
    runStatus: OpenAI.Beta.Threads.Runs.Run,
    threadId: string,
    run: any
  ) {
    if (runStatus.status === "requires_action") {
      const toolCalls =
        runStatus.required_action?.submit_tool_outputs.tool_calls;
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
                  response: "Processed information for OnnaSoft Services",
                  details: JSON.parse(toolCall.function.arguments),
                }),
              };
            }
            return null;
          })
        ).catch((error) => {
          console.error("Error processing tool calls:", error);
          throw new HttpError(500, ERROR_MESSAGES.TOOL_CALL_PROCESS);
        });

        await openai.beta.threads.runs
          .submitToolOutputs(threadId, run.id, {
            tool_outputs: toolOutputs.filter((output) => output !== null),
          })
          .catch((error) => {
            console.error("Error submitting tool outputs:", error);
            throw new HttpError(500, ERROR_MESSAGES.TOOL_OUTPUT_SUBMIT);
          });

        // Wait for the assistant to process the tool output
        runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
        while (runStatus.status !== "completed") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          runStatus = await openai.beta.threads.runs
            .retrieve(threadId, run.id)
            .catch((error) => {
              console.error("Error retrieving run status:", error);
              throw new HttpError(500, ERROR_MESSAGES.RUN_STATUS_RETRIEVE);
            });
        }
      }
    }

    return runStatus;
  },
  createThread() {
    return openai.beta.threads.create().catch((error) => {
      console.error("Error creating thread:", error);
      throw new HttpError(500, ERROR_MESSAGES.THREAD_CREATION);
    });
  },
  getMessages(threadId: string) {
    return openai.beta.threads.messages.list(threadId).catch((error) => {
      console.error("Error retrieving messages:", error);
      throw new HttpError(500, ERROR_MESSAGES.MESSAGES_RETRIEVE);
    });
  },
  async findAssistantMessage(threadId: string, runId: string) {
    const messages = (await this.getMessages(threadId)).data;
    const assistantMessage = messages.find(
      (msg) => msg.role === "assistant" && msg.run_id === runId
    );
    const content = assistantMessage?.content?.[0];
    if (!content) {
      throw new HttpError(500, ERROR_MESSAGES.ASSISTANT_NO_RESPONSE);
    }

    const assistantResponse =
      assistantMessage && "text" in content
        ? content.text.value
        : ERROR_MESSAGES.ASSISTANT_NO_RESPONSE;

    return assistantResponse;
  },
};

export default chatService;
