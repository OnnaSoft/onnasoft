import { OnnaSoftServiceRequest } from "&/types/services";

export async function handleInformationRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Information request handled successfully";
}
