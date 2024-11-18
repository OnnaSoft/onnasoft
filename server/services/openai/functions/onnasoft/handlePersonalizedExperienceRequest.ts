import logger from "&/lib/logger";
import resend from "&/lib/resend";
import { OnnaSoftServiceRequest } from "&/types/services";

const requiredVars = ["FROM_EMAIL", "TO_EMAIL"];
const missingVars = requiredVars.filter((varName) => !process.env[varName]);
if (missingVars.length > 0) {
  logger.error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
  process.exit(1);
}

const fromEmail = process.env.FROM_EMAIL ?? "";
const toEmail = process.env.TO_EMAIL ?? "";

const emailTemplates: Record<string, string> = {
  staff_augmentation: `
    <p>We specialize in augmenting teams with top-tier talent tailored to your specific needs. Let's explore the best fit for your project.</p>
  `,
  cloud_migration: `
    <p>Our team can assist with seamless cloud migration to enhance scalability, reduce costs, and ensure high availability for your business.</p>
  `,
  ai_ml_development: `
    <p>We build AI and machine learning solutions to automate processes, derive insights, and boost efficiency in your operations.</p>
  `,
  legacy_system_optimization: `
    <p>Optimizing legacy systems is key to enhancing performance and reducing costs. We can provide tailored solutions for modernization.</p>
  `,
  data_compliance_development: `
    <p>Our expertise ensures that your applications meet critical compliance requirements such as GDPR, HIPAA, and more.</p>
  `,
  erp_services: `
    <p>We offer infrastructure support for ERP systems and can connect you with a trusted ERP provider to implement end-to-end solutions.</p>
  `,
};

export async function handlePersonalizedExperienceRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  const {
    user_details: {
      contact_info: { full_name, email },
      project_type,
    },
    user_query,
  } = request;

  // Validate required fields
  const missingFields: string[] = [];
  if (!full_name) missingFields.push("Full Name");
  if (!email) missingFields.push("Email Address");
  if (!project_type) missingFields.push("Project Type");
  if (!user_query) missingFields.push("User Query");

  if (missingFields.length > 0) {
    logger.error(
      `Missing required fields for personalized experience: ${missingFields.join(
        ", "
      )}`
    );
    return `Error: Missing the following required fields: ${missingFields.join(
      ", "
    )}.`;
  }

  const projectTemplate =
    emailTemplates[project_type] ||
    `
    <p>We have received your inquiry about "${project_type}". Our team will analyze your requirements and propose the best approach.</p>
  `;

  const emailSubject = `Personalized Assistance for ${project_type}`;
  const emailBody = `
    <h1>Personalized Assistance</h1>
    <p>Hello ${full_name},</p>
    ${projectTemplate}
    <p>Your query:</p>
    <blockquote>${user_query}</blockquote>
    <p>We will reach out to you at ${email} shortly.</p>
    <p>Best regards,</p>
    <p>The OnnaSoft Team</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: emailSubject,
      html: emailBody,
    });

    if (error) {
      logger.error("Error sending email:", error);
      return "Error processing your request. Please try again later.";
    }

    return `
      Thank you for your interest, ${full_name}. Based on your request for "${project_type}", 
      we can assist with tailored solutions to address your needs. A member of our team will reach out shortly to discuss your query:
      "${user_query}". In the meantime, feel free to reply to this message with any additional details.`;
  } catch (err) {
    logger.error(
      "Unexpected error in handlePersonalizedExperienceRequest:",
      err
    );
    return "An unexpected error occurred. Please try again later.";
  }
}
