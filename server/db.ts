import { Sequelize } from "sequelize";
import DocumentModel from "./models/document";

// Validate environment variables
const requiredEnvVars = [
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
  "DB_HOST",
  "DB_PORT",
];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName]
);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnvVars.join(", ")}`
  );
  process.exit(1);
}

// Sequelize setup
export const sequelize = new Sequelize(
  // @ts-ignore
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "5432", 10),
    dialect: "postgres",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  }
);

export const Document = DocumentModel(sequelize);

// Define associations
const models = {
  Document,
};
Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

// @ts-ignore
sequelize.models = models;

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1);
  });

// Sync all models with database
sequelize.sync({ alter: true }).catch((err) => {
  console.error("Unable to sync database or ensure default plans:", err);
  process.exit(1);
});
