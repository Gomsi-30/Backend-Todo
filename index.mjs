import express from "express";
import dotenv from "dotenv";
import createTodoRoute from "./routes/todolRoute.mjs";
import { connect } from "./utils/database.mjs";
import { checkSchema } from "express-validator";
import { schoolSchema } from "./schema/todoSchema.mjs";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();

// Allow all CORS requests
app.use(cors());

dotenv.config();
connect();
app.use(express.json());

app.use("/", checkSchema(schoolSchema), createTodoRoute);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

export default app;
