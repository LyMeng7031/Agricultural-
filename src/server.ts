import express from "express";
import connectDB from "./config/database";
import { setupSwagger } from "./config/swagger";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//Enable json parsing body
app.use(express.json());
setupSwagger(app);

//Enable URL-encoded parsing body parsing with extended mode
//`extended : true` allow rich objects and arrays vai query string library
app.use(express.urlencoded({ extended: true }));
connectDB();
app.listen(4000, () => {
  console.log(`server run on port 4000`);
});
