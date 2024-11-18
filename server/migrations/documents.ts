import fs from "fs";
import logger from "&/lib/logger";
import { Document } from "../db";
import path from "path";
import chatService from "&/services/openai/chatgpt";

const documentsPath = path.join(__dirname, "../documents");

const documents: Array<{ name: string; content: string }> = fs
  .readdirSync(documentsPath)
  .map((file) => {
    const content = fs.readFileSync(path.join(documentsPath, file), "utf-8");

    return {
      name: content.split("\n")[0].replace("# ", ""),
      content,
    };
  });

export const ensureDocuments = async () => {
  try {
    await Promise.all(
      documents.map(async (document) => {
        const existingDocument = await Document.findOne({
          where: { name: document.name },
        });

        if (existingDocument) {
          if (existingDocument.content !== document.content) {
            await existingDocument.update({
              content: document.content,
              embedding: await chatService.createEmbedding(document.content),
            });
            logger.error(`Document updated: "${document.name}"`);
          } else logger.error(`Document already exists: "${document.name}"`);
        } else {
          await Document.create({
            name: document.name,
            content: document.content,
          });
          logger.info(`Document created: "${document.name}"`);
        }
      })
    );

    logger.info("All documents ensured.");
  } catch (error) {
    logger.error("Error ensuring documents:", error);
    throw error;
  }
};
