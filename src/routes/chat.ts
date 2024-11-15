import express, { NextFunction, Request, Response } from "express";
import OpenAI from "openai";
import { processServiceRequest } from "src/services/chat";

// Validate environment variables
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

const chatRouter = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Asegúrate de que el ASSISTANT_ID esté definido
const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID;
if (!ASSISTANT_ID) {
  throw new Error(
    "OPENAI_ASSISTANT_ID is not defined in the environment variables"
  );
}

// Interfaces
interface CreateThreadRequest {}

interface CreateThreadResponse {
  threadId: string;
}

interface SendMessageRequest {
  message: string;
}

interface SendMessageResponse {
  messageId: string;
  assistantResponse: string;
}

interface GetMessagesResponse {
  messages: Array<{
    role: string;
    content: string;
    created_at: number;
  }>;
}

interface ErrorResponse {
  error: string;
}
// Function definition
const onasoftServicesFunction = {
  name: "onasoft_services",
  description: "Information about OnnaSoft services and technical assistance",
  parameters: {
    type: "object",
    required: ["service_type", "user_query", "user_language", "user_details"],
    properties: {
      service_type: {
        type: "string",
        enum: [
          "information",
          "technical_assistance",
          "lead_generation",
          "scheduling",
          "customer_support",
          "educational_resources",
          "multilingual_assistance",
          "faq",
          "chat_handoff",
          "personalized_experience",
        ],
        description: "Type of service requested by the user.",
      },
      user_query: {
        type: "string",
        description: "User's specific query about the selected service.",
      },
      user_language: {
        type: "string",
        enum: ["english", "spanish"],
        description: "Preferred language for the response.",
      },
      user_details: {
        type: "object",
        required: ["project_type", "contact_info", "interest_level"],
        properties: {
          project_type: {
            type: "string",
            description: "Type of project the user wants to start.",
          },
          contact_info: {
            type: "object",
            required: ["email", "phone_number"],
            properties: {
              email: {
                type: "string",
                description: "User's email address.",
              },
              phone_number: {
                type: "string",
                description: "User's phone number.",
              },
            },
          },
          interest_level: {
            type: "string",
            enum: ["high", "medium", "low"],
            description: "User's level of interest in the offered services.",
          },
        },
      },
    },
  },
};

// Crear un nuevo hilo
chatRouter.post(
  "/thread",
  async (
    _req: Request<{}, {}, CreateThreadRequest>,
    res: Response<CreateThreadResponse | ErrorResponse>
  ) => {
    try {
      const thread = await openai.beta.threads.create();
      res.json({ threadId: thread.id });
    } catch (error) {
      console.error("Error creating thread:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the thread" });
    }
  }
);

// Enviar un mensaje a un hilo existente
chatRouter.post(
  "/thread/:threadId/message",
  async (
    req: Request<{ threadId: string }, {}, SendMessageRequest>,
    res: any, //Response<SendMessageResponse | ErrorResponse>,
    next: NextFunction
  ) => {
    try {
      const { threadId } = req.params;
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const threadMessage = await openai.beta.threads.messages.create(
        threadId,
        {
          role: "user",
          content: message,
        }
      );

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: ASSISTANT_ID,
        tools: [{ type: "function", function: onasoftServicesFunction }],
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

      if (runStatus.status === "requires_action") {
        const toolCalls =
          runStatus.required_action?.submit_tool_outputs.tool_calls;
        if (toolCalls) {
          const toolOutputs = await Promise.all(
            toolCalls.map(async (toolCall) => {
              if (toolCall.function.name === "onasoft_services") {
                // Aquí es donde procesarías la llamada a la función y devolverías el resultado
                // Por ahora, solo devolveremos un mensaje de ejemplo
                processServiceRequest(JSON.parse(toolCall.function.arguments));

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
            runStatus = await openai.beta.threads.runs.retrieve(
              threadId,
              run.id
            );
          }
        }
      }

      // Obtener la respuesta del asistente
      const messages = await openai.beta.threads.messages.list(threadId);
      const assistantMessage = messages.data.find(
        (msg) => msg.role === "assistant" && msg.run_id === run.id
      );
      const content = assistantMessage?.content?.[0];
      if (!content) {
        return res.status(500).json({
          error: "No se pudo obtener una respuesta del asistente",
        });
      }

      const assistantResponse = assistantMessage
        ? "text" in content
          ? content.text.value
          : ""
        : "No se pudo obtener una respuesta del asistente.";

      res.json({ messageId: threadMessage.id, assistantResponse });
    } catch (error) {
      next(error);
    }
  }
);

// Obtener mensajes de un hilo
chatRouter.get(
  "/thread/:threadId/messages",
  async (
    req: Request<{ threadId: string }>,
    res: Response<GetMessagesResponse | ErrorResponse>
  ) => {
    try {
      const { threadId } = req.params;

      const messages = await openai.beta.threads.messages.list(threadId);

      const formattedMessages = messages.data.map((message) => {
        const content = message.content[0];
        return {
          role: message.role,
          content: "text" in content ? content.text.value : "",
          created_at: message.created_at,
        };
      });

      res.json({ messages: formattedMessages });
    } catch (error) {
      console.error("Error retrieving messages:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving messages" });
    }
  }
);

export default chatRouter;
