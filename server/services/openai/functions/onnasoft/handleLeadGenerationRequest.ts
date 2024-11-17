import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleLeadGenerationRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  const message = `
    We are thrilled to assist you with the technological aspects of your lead generation efforts. 
    Our services include developing your website, configuring email systems, and ensuring your technological infrastructure is optimized for successful marketing campaigns.

    Additionally, we have a valuable partnership with an agency that collaborates with over 200 TikTok influencers, including some highly successful creators. 
    If influencer marketing aligns with your business strategy, we can connect you with this agency to identify the right TikTokers for your brand.

    Please note that while we excel at handling the tech side of things, we currently lack the in-house team to manage marketing strategies directly. 
    However, we can facilitate introductions and provide the necessary technological support to complement these efforts.

    Let us know how we can tailor our services to meet your needs!
  `;

  return message.trim();
}
