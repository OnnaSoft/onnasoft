import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleMultilingualAssistanceRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Chat handoff request handled successfully";
}
