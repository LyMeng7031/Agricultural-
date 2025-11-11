import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agricultural Product API",
      version: "1.0.0",
      description: "API documentation for Agricultural Product system",
    },
    servers: [
      {
        url: "http://localhost:4000", // Change if needed
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // adjust based on your project
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("✅ Swagger Docs available at: http://localhost:4000/api-docs");
}
