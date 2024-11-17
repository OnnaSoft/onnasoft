import express, { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors-enhanced";
import { createThread, getMessages, runThread } from "server/lib/chatgpt";

const chatRouter = express.Router();

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

// Crear un nuevo hilo
chatRouter.post(
  "/thread",
  async (
    _req: Request<{}, {}, CreateThreadRequest>,
    res: Response<CreateThreadResponse>,
    next: NextFunction
  ) => {
    try {
      const thread = await createThread().catch((error) => {
        console.error("Error creating thread:", error);
        throw new HttpError(500, "An error occurred while creating the thread");
      });
      res.json({ threadId: thread.id });
    } catch (error) {
      next(error);
    }
  }
);

// Enviar un mensaje a un hilo existente
chatRouter.post(
  "/thread/:threadId/message",
  async (
    req: Request<{ threadId: string }, {}, SendMessageRequest>,
    res: Response<SendMessageResponse>,
    next: NextFunction
  ) => {
    try {
      const { threadId } = req.params;
      const { message } = req.body;

      if (!message) {
        throw new HttpError(400, "Message is required");
      }

      const { threadMessage, run } = await runThread(threadId, message);

      // Obtener la respuesta del asistente
      const messages = await getMessages(threadId);
      const assistantMessage = messages.data.find(
        (msg) => msg.role === "assistant" && msg.run_id === run.id
      );
      const content = assistantMessage?.content?.[0];
      if (!content) {
        const msg = "No se pudo obtener una respuesta del asistente.";
        throw new HttpError(500, msg);
      }

      let assistantResponse = "No se pudo obtener una respuesta del asistente.";
      if (assistantMessage) {
        if ("text" in content) {
          assistantResponse = content.text.value;
        } else {
          assistantResponse = "";
        }
      }

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
    res: Response<GetMessagesResponse>,
    next: NextFunction
  ) => {
    try {
      const { threadId } = req.params;
      const messages = await getMessages(threadId).catch((error) => {
        console.error("Error retrieving messages:", error);
        throw new HttpError(500, "An error occurred while retrieving messages");
      });

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
      next(error);
    }
  }
);

export default chatRouter;
