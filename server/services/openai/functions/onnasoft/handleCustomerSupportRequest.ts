import logger from "&/lib/logger";
import {
  ContactRequestOptions,
  handleContactRequest,
} from "&/services/openai/functions/onnasoft/utils";

const requiredVars = ["FROM_EMAIL", "SUPPORT_EMAIL"];
const missingVars = requiredVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  logger.error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

const fromEmail = process.env.FROM_EMAIL ?? "";
const supportEmail = process.env.SUPPORT_EMAIL ?? "";

const handleSchedulingReques: ContactRequestOptions = (opts) => {
  return {
    from: fromEmail,
    to: [supportEmail],
    subject: `Customer Support Request from ${opts.full_name}`,
    html: `
        <h1>Customer Support Request</h1>
        <p><strong>Full Name:</strong> ${opts.full_name}</p>
        <p><strong>Email:</strong> ${opts.email}</p>
        <p><strong>Phone Number:</strong> ${opts.phone_number}</p>
        <p><strong>Query:</strong> ${opts.user_query}</p>
    `,
  };
};

export const handleCustomerSupportRequest = handleContactRequest(
  handleSchedulingReques
);
