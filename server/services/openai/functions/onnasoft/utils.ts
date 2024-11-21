import logger from "&/lib/logger";
import resend from "&/lib/resend";
import { OnnaSoftServiceRequest } from "&/types/services";
import { CreateEmailOptions } from "resend";

type ContactRequestParams = {
  full_name: string;
  email: string;
  phone_number: string;
  user_query: string;
};

export type ContactRequestOptions = (
  args: ContactRequestParams
) => CreateEmailOptions;

export function handleContactRequest(optsFactory: ContactRequestOptions) {
  return async function (request: OnnaSoftServiceRequest): Promise<string> {
    const {
      user_details: {
        contact_info: { full_name, email, phone_number },
      },
      user_query,
    } = request;

    // Validate required fields
    const missingFields: string[] = [];
    if (!full_name) missingFields.push("Full Name");
    if (!email) missingFields.push("Email Address");
    if (!phone_number) missingFields.push("Phone Number");
    if (!user_query) missingFields.push("User Query");

    if (missingFields.length > 0) {
      logger.error(
        `Missing required fields for scheduling request: ${missingFields.join(
          ", "
        )}`
      );
      return `Error: Missing the following required fields: ${missingFields.join(
        ", "
      )}.`;
    }

    try {
      const opts = optsFactory({
        full_name,
        email,
        phone_number,
        user_query,
      });
      const { error } = await resend.emails.send(opts);

      if (error) {
        logger.error("Error sending email:", error);
        return "Error processing your request. Please try again later.";
      }

      return `Scheduling request received successfully. Thank you, ${full_name}.`;
    } catch (err) {
      logger.error("Unexpected error in handleSchedulingRequest:", err);
      return "An unexpected error occurred. Please try again later.";
    }
  };
}
