import { AssistantTool } from "openai/resources/beta/assistants.mjs";
import * as onnasoft from "./onnasoft";
import { OpenAIService } from "./services";

export const tools: AssistantTool[] = [
  { type: "function", function: onnasoft.onasoftServicesFunction },
];

export const services: OpenAIService[] = [new onnasoft.OnnaSoftService()];
