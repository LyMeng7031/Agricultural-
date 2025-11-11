import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { authMiddleware } from "./middlewares/authMiddleware";
import { roleCheck } from "./middlewares/roleCheckMiddleware";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Public route
app.get("/", (req, res) => res.send("Hello World"));

// Protected route
app.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

// Admin-only route
app.get("/admin", authMiddleware, roleCheck(["admin"]), (req, res) => {
  res.send("Welcome, admin!");
});

export default app;
