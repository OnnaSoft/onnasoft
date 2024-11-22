import { Request } from "&/services/openai/functions/services";

// Define enum for service types
export const ServiceType = {
  Information: "information",
  TechnicalAssistance: "technical_assistance",
  LeadGeneration: "lead_generation",
  Scheduling: "scheduling",
  CustomerSupport: "customer_support",
  EducationalResources: "educational_resources",
  MultilingualAssistance: "multilingual_assistance",
  FAQ: "faq",
  ChatHandoff: "chat_handoff",
  PersonalizedExperience: "personalized_experience",
} as const;

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

// Define enum for user languages
export const UserLanguage = {
  English: "english",
  Spanish: "spanish",
} as const;

export type UserLanguage = (typeof UserLanguage)[keyof typeof UserLanguage];

// Define enum for interest levels
export const InterestLevel = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;

export type InterestLevel = (typeof InterestLevel)[keyof typeof InterestLevel];

// Define interface for contact information
export interface ContactInfo {
  full_name: string;
  email: string;
  phone_number: string;
}

// Define interface for user details
export interface UserDetails {
  project_type: string;
  contact_info: ContactInfo;
  interest_level: InterestLevel;
}

// Define the main interface for the OnnaSoft service request
export interface OnnaSoftServiceRequest extends Request {
  service_type: ServiceType;
  user_query: string;
  user_language: UserLanguage;
  user_details: UserDetails;
}
