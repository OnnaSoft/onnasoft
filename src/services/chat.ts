import { OnnaSoftServiceRequest } from "../types/services";

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
