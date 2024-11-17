import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleTechnicalAssistanceRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Technical assistance request handled successfully";
}
