import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleEducationalResourcesRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Educational resources request handled successfully";
}
