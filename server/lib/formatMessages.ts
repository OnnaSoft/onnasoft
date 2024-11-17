import { Message } from "openai/resources/beta/threads/messages.mjs";

export const formatMessages = (messages: Message[]) => {
  return messages.map((message) => {
    const content = message.content[0];
    return {
      role: message.role,
      content: "text" in content ? content.text.value : "",
      created_at: message.created_at,
    };
  });
};
