import { FunctionDefinition } from "openai/resources/shared.mjs";
import { OnnaSoftServiceRequest } from "server/types/services";
import { OpenAIService } from "../services";
import { handleInformationRequest } from "./handleInformationRequest";
import { handleTechnicalAssistanceRequest } from "./handleTechnicalAssistanceRequest";
import { handleLeadGenerationRequest } from "./handleLeadGenerationRequest";
import { handleSchedulingRequest } from "./handleSchedulingRequest";
import { handleCustomerSupportRequest } from "./handleCustomerSupportRequest";
import { handleEducationalResourcesRequest } from "./handleEducationalResourcesRequest";
import { handleMultilingualAssistanceRequest } from "./handleMultilingualAssistanceRequest";
import { handleFAQRequest } from "./handleFAQRequest";
import { handleChatHandoffRequest } from "./handleChatHandoffRequest";
import { handlePersonalizedExperienceRequest } from "./handlePersonalizedExperienceRequest";

export const onasoftServicesFunction: FunctionDefinition = {
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
            required: ["full_name", "email", "phone_number"],
            properties: {
              full_name: {
                type: "string",
                description: "User's full name.",
              },
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

const serviceHandlers: {
  [key: string]: (request: OnnaSoftServiceRequest) => Promise<string>;
} = {
  information: handleInformationRequest,
  technical_assistance: handleTechnicalAssistanceRequest,
  lead_generation: handleLeadGenerationRequest,
  scheduling: handleSchedulingRequest,
  customer_support: handleCustomerSupportRequest,
  educational_resources: handleEducationalResourcesRequest,
  multilingual_assistance: handleMultilingualAssistanceRequest,
  faq: handleFAQRequest,
  chat_handoff: handleChatHandoffRequest,
  personalized_experience: handlePersonalizedExperienceRequest,
};

export class OnnaSoftService extends OpenAIService {
  readonly function_name = "onasoft_services";
  readonly description =
    "Information about OnnaSoft services and technical assistance";

  override async processServiceRequest(request: OnnaSoftServiceRequest) {
    console.log(`Processing ${request.service_type} request`);
    console.log(`User query: ${request.user_query}`);
    console.log(`User language: ${request.user_language}`);
    console.log(`Project type: ${request.user_details.project_type}`);
    console.log(`Contact email: ${request.user_details.contact_info.email}`);
    console.log(
      `Contact phone: ${request.user_details.contact_info.phone_number}`
    );
    console.log(`Interest level: ${request.user_details.interest_level}`);
    console.log("Processing request...", request.user_details);

    const handler = serviceHandlers[request.service_type];
    if (handler) {
      return handler(request);
    }
    return "Service type not supported";
  }
}
