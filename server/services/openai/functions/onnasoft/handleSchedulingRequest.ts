import resend from "server/lib/resend";
import { OnnaSoftServiceRequest } from "server/types/services";

const requiredVars = ["FROM_EMAIL", "TO_EMAIL"];
const missingVars = requiredVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

const fromEmail = process.env.FROM_EMAIL ?? "";
const toEmail = process.env.TO_EMAIL ?? "";

export async function handleSchedulingRequest(
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
      `Missing required fields for scheduling request: ${missingFields.join(
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
      to: [toEmail],
      subject: `New Scheduling Request from ${full_name}`,
      html: `
        <h1>New Scheduling Request</h1>
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

    return `Scheduling request received successfully. Thank you, ${full_name}.`;
  } catch (err) {
    console.error("Unexpected error in handleSchedulingRequest:", err);
    return "An unexpected error occurred. Please try again later.";
  }
}
