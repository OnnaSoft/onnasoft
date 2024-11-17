import { OnnaSoftServiceRequest } from "server/types/services";

export async function handlePersonalizedExperienceRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Personalized experience request handled successfully";
}
