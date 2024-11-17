// Define enum for service types
export enum ServiceType {
  Information = "information",
  TechnicalAssistance = "technical_assistance",
  LeadGeneration = "lead_generation",
  Scheduling = "scheduling",
  CustomerSupport = "customer_support",
  EducationalResources = "educational_resources",
  MultilingualAssistance = "multilingual_assistance",
  FAQ = "faq",
  ChatHandoff = "chat_handoff",
  PersonalizedExperience = "personalized_experience",
}

// Define enum for user languages
export enum UserLanguage {
  English = "english",
  Spanish = "spanish",
}

// Define enum for interest levels
export enum InterestLevel {
  High = "high",
  Medium = "medium",
  Low = "low",
}

// Define interface for contact information
export interface ContactInfo {
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
export interface OnnaSoftServiceRequest {
  service_type: ServiceType;
  user_query: string;
  user_language: UserLanguage;
  user_details: UserDetails;
}
