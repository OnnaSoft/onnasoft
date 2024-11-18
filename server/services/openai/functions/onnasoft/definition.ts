import { FunctionDefinition } from "openai/resources/shared.mjs";

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
          "lead_generation",
          "scheduling",
          "customer_support",
          "educational_resources",
          "multilingual_assistance",
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
            enum: [
              "staff_augmentation",
              "third_party_api_integration",
              "cloud_migration",
              "microservices_development",
              "cloud_cost_optimization",
              "process_automation",
              "ai_ml_development",
              "cybersecurity_consulting",
              "digital_transformation",
              "infrastructure_management",
              "data_analytics",
              "data_compliance_development",
              "devops_as_a_service",
              "microfrontends_development",
              "legacy_system_optimization",
              "cloud_native_development",
              "multilanguage_localization",
              "enterprise_architecture_consulting",
              "ci_cd_implementation",
              "automated_testing_qa",
              "erp_services",
            ],
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
