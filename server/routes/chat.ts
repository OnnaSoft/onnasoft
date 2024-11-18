import Joi from "joi";
import express, { NextFunction, Request, Response } from "express";
import chatService from "&/services/openai/chatgpt";
import { formatMessages } from "&/lib/formatMessages";
import { HTTPResponse } from "&/types/http";
import { validateRequest } from "&/middlewares/validate";

const chatRouter = express.Router();

type CreateThreadRequest = {};

type CreateThreadResponse = HTTPResponse<{
  threadId: string;
}>;

type SendMessageRequest = {
  message: string;
};

type SendMessageResponse = HTTPResponse<{
  messageId: string;
  assistantResponse: string;
}>;

type FormattedMessage = {
  role: string;
  content: string;
  created_at: number;
};

type GetMessagesResponse = HTTPResponse<{
  messages: Array<FormattedMessage>;
}>;

chatRouter.post(
  "/thread",
  async (
    _req: Request<{}, {}, CreateThreadRequest>,
    res: Response<CreateThreadResponse>,
    next: NextFunction
  ) => {
    try {
      const thread = await chatService.createThread();
      res.json({ success: true, data: { threadId: thread.id } });
    } catch (error) {
      next(error);
    }
  }
);

const sendMessageSchema = Joi.object({
  message: Joi.string().required(),
});

chatRouter.post(
  "/thread/:threadId/message",
  validateRequest(sendMessageSchema),
  async (
    req: Request<{ threadId: string }, {}, SendMessageRequest>,
    res: Response<SendMessageResponse>,
    next: NextFunction
  ) => {
    try {
      const { threadId } = req.params;
      const { message } = req.body;

      const { threadMessage, run } = await chatService.runThread(
        threadId,
        message
      );
      const assistantResponse = await chatService.findAssistantMessage(
        threadId,
        run.id
      );

      res.json({
        success: true,
        data: { messageId: threadMessage.id, assistantResponse },
      });
    } catch (error) {
      next(error);
    }
  }
);

chatRouter.get(
  "/thread/:threadId/messages",
  async (
    req: Request<{ threadId: string }>,
    res: Response<GetMessagesResponse>,
    next: NextFunction
  ) => {
    try {
      const { threadId } = req.params;
      const messages = await chatService.getMessages(threadId);
      const formattedMessages = formatMessages(messages.data);

      res.json({ success: true, data: { messages: formattedMessages } });
    } catch (error) {
      next(error);
    }
  }
);

export default chatRouter;
