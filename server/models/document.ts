import { DataTypes, Model, Sequelize, ModelStatic } from "sequelize";
import chatService from "&/services/openai/chatgpt";
import logger from "&/lib/logger";

export interface DocumentAttributes {
  id: string;
  name: string;
  content: string;
  embedding?: number[];
}

export interface DocumentCreationAttributes
  extends Omit<DocumentAttributes, "id"> {}

interface DocumentInstance
  extends Model<DocumentAttributes, DocumentCreationAttributes>,
    DocumentAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

interface DocumentModel extends ModelStatic<DocumentInstance> {
  associate: (models: { [key: string]: ModelStatic<Model> }) => void;
  findSimilarDocuments(
    query: string,
    limit?: number
  ): Promise<DocumentInstance[]>;
}

function validateEmbedding(embedding: number[]): boolean {
  return (
    Array.isArray(embedding) && embedding.every((e) => typeof e === "number")
  );
}

const DocumentModel = (sequelize: Sequelize): DocumentModel => {
  const Document = sequelize.define<DocumentInstance>(
    "document",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "Name is required" },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Content is required" },
        },
      },
      embedding: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false,
        validate: {},
      },
    },
    {
      hooks: {
        beforeCreate: async (document: DocumentInstance) => {
          try {
            if (!document.embedding?.length) {
              const embedding = await chatService.createEmbedding(
                document.content
              );
              if (!validateEmbedding(embedding)) {
                throw new Error("Invalid embedding generated");
              }
              document.embedding = embedding;
            }
          } catch (error) {
            logger.error("Error generating embedding for document:", error);
            throw error;
          }
        },
        beforeUpdate: async (document: DocumentInstance) => {
          if (document.changed("content")) {
            try {
              const embedding = await chatService.createEmbedding(
                document.content
              );
              if (!validateEmbedding(embedding)) {
                throw new Error("Invalid embedding generated");
              }
              document.embedding = embedding;
            } catch (error) {
              logger.error("Error generating embedding during update:", error);
              throw error;
            }
          }
        },
      },
    }
  ) as DocumentModel;

  Document.associate = (models: { [key: string]: ModelStatic<Model> }) => {
    // Add associations if needed
  };

  Document.findSimilarDocuments = async function (
    query: string,
    limit: number = 5
  ): Promise<DocumentInstance[]> {
    try {
      const queryEmbedding = await chatService.createEmbedding(query);
      if (!validateEmbedding(queryEmbedding)) {
        throw new Error("Invalid query embedding generated");
      }

      const documents = await this.findAll({
        order: sequelize.literal(
          `embedding <-> ARRAY[${queryEmbedding.join(",")}]`
        ),
        limit,
      });

      return documents || [];
    } catch (error) {
      logger.error("Error finding similar documents:", error);
      throw error;
    }
  };

  return Document;
};

export default DocumentModel;
