import { OnnaSoftServiceRequest } from "&/types/services";
import { OpenAIService } from "../services";
import { handleInformationRequest } from "./handleInformationRequest";
import { handleLeadGenerationRequest } from "./handleLeadGenerationRequest";
import { handleSchedulingRequest } from "./handleSchedulingRequest";
import { handleCustomerSupportRequest } from "./handleCustomerSupportRequest";
import { handleEducationalResourcesRequest } from "./handleEducationalResourcesRequest";
import { handleMultilingualAssistanceRequest } from "./handleMultilingualAssistanceRequest";
import { handleChatHandoffRequest } from "./handleChatHandoffRequest";
import { handlePersonalizedExperienceRequest } from "./handlePersonalizedExperienceRequest";

export { onasoftServicesFunction } from "./definition";

const serviceHandlers: {
  [key: string]: (request: OnnaSoftServiceRequest) => Promise<string>;
} = {
  information: handleInformationRequest,
  lead_generation: handleLeadGenerationRequest,
  scheduling: handleSchedulingRequest,
  customer_support: handleCustomerSupportRequest,
  educational_resources: handleEducationalResourcesRequest,
  multilingual_assistance: handleMultilingualAssistanceRequest,
  chat_handoff: handleChatHandoffRequest,
  personalized_experience: handlePersonalizedExperienceRequest,
};

export class OnnaSoftService extends OpenAIService {
  readonly function_name = "onasoft_services";
  readonly description =
    "Information about OnnaSoft services and technical assistance";

  override async processServiceRequest(request: OnnaSoftServiceRequest) {
    const handler = serviceHandlers[request.service_type];
    if (handler) {
      return handler(request);
    }
    return "Service type not supported";
  }
}
