import { OnnaSoftServiceRequest } from "&/types/services";
import { OpenAIService } from "../services";
import { handleInformationRequest } from "&/services/openai/functions/onnasoft/handleInformationRequest";
import { handleLeadGenerationRequest } from "&/services/openai/functions/onnasoft/handleLeadGenerationRequest";
import { handleSchedulingRequest } from "&/services/openai/functions/onnasoft/handleSchedulingRequest";
import { handleCustomerSupportRequest } from "&/services/openai/functions/onnasoft/handleCustomerSupportRequest";
import { handleEducationalResourcesRequest } from "&/services/openai/functions/onnasoft/handleEducationalResourcesRequest";
import { handleMultilingualAssistanceRequest } from "&/services/openai/functions/onnasoft/handleMultilingualAssistanceRequest";
import { handleChatHandoffRequest } from "&/services/openai/functions/onnasoft/handleChatHandoffRequest";
import { handlePersonalizedExperienceRequest } from "&/services/openai/functions/onnasoft/handlePersonalizedExperienceRequest";
export { onasoftServicesFunction } from "&/services/openai/functions/onnasoft/definition";

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
