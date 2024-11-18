import logger from "&/lib/logger";
import { OnnaSoftServiceRequest } from "&/types/services";
import { Document } from "&/db";

export async function handleInformationRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  logger.info("Handling information request:", request);

  try {
    if (!request.user_query) {
      throw new Error("Invalid request: user_query is required.");
    }

    const similarDocuments = await Document.findSimilarDocuments(
      request.user_query,
      3
    );

    if (similarDocuments.length === 0) {
      logger.info("No similar documents found for the query.");
      return "No relevant information found for your query.";
    }

    const response = similarDocuments
      .map((doc) => `- ${doc.name}: ${doc.content}`)
      .join("\n");

    logger.info("Found similar documents:", response);

    return `Here are some documents related to your query:\n\n${response}`;
  } catch (error) {
    logger.error("Error handling information request:", error);
    return "An error occurred while processing your request. Please try again.";
  }
}
