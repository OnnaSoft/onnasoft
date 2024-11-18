import logger from "&/lib/logger";
import { Document } from "../db";

const documents: { name: string; content: string }[] = [
  { name: "document1", content: "This is the first document." },
  { name: "document2", content: "This is the second document." },
  { name: "document3", content: "This is the third document." },
];

export const ensureDocuments = async () => {
  try {
    for (const document of documents) {
      const existingDocument = await Document.findOne({
        where: { name: document.name },
      });

      if (existingDocument) {
        if (existingDocument.content !== document.content) {
          await existingDocument.update({ content: document.content });
          logger.error(`Document updated: "${document.name}"`);
        } else logger.error(`Document already exists: "${document.name}"`);
      } else {
        await Document.create({
          name: document.name,
          content: document.content,
        });
        logger.info(`Document created: "${document.name}"`);
      }
    }
    logger.info("All documents ensured.");
  } catch (error) {
    logger.error("Error ensuring documents:", error);
    throw error;
  }
};
