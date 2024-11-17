import { OnnaSoftServiceRequest } from "src/types/services";

// Function definition
export const onasoftServicesFunction = {
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

export function processServiceRequest(request: OnnaSoftServiceRequest): void {
  console.log(`Processing ${request.service_type} request`);
  console.log(`User query: ${request.user_query}`);
  console.log(`User language: ${request.user_language}`);
  console.log(`Project type: ${request.user_details.project_type}`);
  console.log(`Contact email: ${request.user_details.contact_info.email}`);
  console.log(
    `Contact phone: ${request.user_details.contact_info.phone_number}`
  );
  console.log(`Interest level: ${request.user_details.interest_level}`);
}
