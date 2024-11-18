import logger from "&/lib/logger";
import { OnnaSoftServiceRequest } from "&/types/services";

export async function handleInformationRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  logger.error("Handling information request:", request);
  return "Information request handled successfully";
}
