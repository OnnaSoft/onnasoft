import { AssistantTool } from "openai/resources/beta/assistants.mjs";
import * as onnasoft from "&/services/openai/functions/onnasoft";
import { OpenAIService } from "&/services/openai/functions/services";

export const tools: AssistantTool[] = [
  { type: "function", function: onnasoft.onasoftServicesFunction },
];

export const services: OpenAIService[] = [new onnasoft.OnnaSoftService()];
