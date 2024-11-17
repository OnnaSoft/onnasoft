import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleLeadGenerationRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Lead generation request handled successfully";
}
