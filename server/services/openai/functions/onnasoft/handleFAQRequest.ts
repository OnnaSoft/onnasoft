import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleFAQRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "FAQ request handled successfully";
}
