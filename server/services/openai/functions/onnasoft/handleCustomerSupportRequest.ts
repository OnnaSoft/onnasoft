import resend from "server/lib/resend";
import { OnnaSoftServiceRequest } from "server/types/services";

// Ensure required environment variables are set
const requiredVars = ["FROM_EMAIL", "SUPPORT_EMAIL"];
const missingVars = requiredVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

const fromEmail = process.env.FROM_EMAIL ?? "";
const supportEmail = process.env.SUPPORT_EMAIL ?? "";

export async function handleCustomerSupportRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
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
    console.error(
      `Missing required fields for customer support request: ${missingFields.join(
        ", "
      )}`
    );
    return `Error: Missing the following required fields: ${missingFields.join(
      ", "
    )}.`;
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [supportEmail],
      subject: `Customer Support Request from ${full_name}`,
      html: `
        <h1>Customer Support Request</h1>
        <p><strong>Full Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>Query:</strong> ${user_query}</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return "Error processing your request. Please try again later.";
    }

    return `Customer support request submitted successfully. Thank you, ${full_name}.`;
  } catch (err) {
    console.error("Unexpected error in handleCustomerSupportRequest:", err);
    return "An unexpected error occurred. Please try again later.";
  }
}
