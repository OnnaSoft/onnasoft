import { OnnaSoftServiceRequest } from "server/types/services";

export async function handleMultilingualAssistanceRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  const supportedLanguages = ["english", "spanish"];
  const { user_language } = request;

  const baseMessage = `
    We strive to provide multilingual support. At the moment, we guarantee accurate communication in English and Spanish only.
    If you need your project to include other languages, we are happy to incorporate your provided translations.
    Please note that all communication with our team must currently be conducted in English or Spanish.`;

  if (!supportedLanguages.includes(user_language)) {
    return baseMessage.trim();
  }

  const responses: Record<string, string> = {
    english: `
      We strive to provide multilingual support. At the moment, we guarantee accurate communication in English and Spanish only.
      If you need your project to include other languages, we are happy to incorporate your provided translations.
      Please note that all communication with our team must currently be conducted in English or Spanish.`,
    spanish: `
      Nos esforzamos por ofrecer soporte multilingüe. Por el momento, garantizamos una comunicación precisa solo en inglés y español.
      Si necesita que su proyecto incluya otros idiomas, estaremos encantados de incorporar las traducciones que usted nos proporcione.
      Tenga en cuenta que toda comunicación con nuestro equipo debe realizarse actualmente en inglés o español.`,
  };

  return responses[user_language].trim();
}
