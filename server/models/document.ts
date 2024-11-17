import { DataTypes, Model, Sequelize, ModelStatic } from "sequelize";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface DocumentAttributes {
  id: string;
  content: string;
  embedding: number[];
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

const DocumentModel = (sequelize: Sequelize): DocumentModel => {
  const Document = sequelize.define<DocumentInstance>(
    "document",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
        validate: {
          notEmpty: { msg: "Embedding is required" },
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (document: DocumentInstance) => {
          if (!document.embedding) {
            document.embedding = await createEmbedding(document.content);
          }
        },
        beforeUpdate: async (document: DocumentInstance) => {
          if (document.changed("content")) {
            document.embedding = await createEmbedding(document.content);
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
    const queryEmbedding = await createEmbedding(query);

    const documents = await this.findAll({
      order: sequelize.literal(
        `embedding <-> ARRAY[${queryEmbedding.join(",")}]`
      ),
      limit,
    });

    return documents;
  };

  return Document;
};

async function createEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });
  return response.data[0].embedding;
}

export default DocumentModel;
