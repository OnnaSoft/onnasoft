import resend from "server/lib/resend";
import { OnnaSoftServiceRequest } from "server/types/services";

const requiredEnvVars = ["FROM_EMAIL", "TO_EMAIL"];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
  process.exit(1);
}

const fromEmail = process.env.FROM_EMAIL ?? "";
const toEmail = process.env.TO_EMAIL ?? "";

export async function handleSchedulingRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: "Nuevo mensaje de contacto",
    html: `
          <h1>Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${request.user_details.contact_info.full_name}</p>
          <p><strong>Email:</strong> ${request.user_details.contact_info.email}</p>
          <p><strong>Mensaje:</strong> ${request.user_details.contact_info.phone_number}</p>
      `,
  });

  if (error) {
    console.error("Error sending email", error);
    return "Error receiving data. Please try again later.";
  }

  return "Scheduling request handled successfully";
}
