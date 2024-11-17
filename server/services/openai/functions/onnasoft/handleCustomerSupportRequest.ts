import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleCustomerSupportRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  return "Customer support request handled successfully";
}
