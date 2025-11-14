import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import subjectRoutes from "./Routes/subjectRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "Lesson 3/exercise")));

app.use("/api/users", userRoutes); //user routes
app.use("/api/subjects", subjectRoutes); //subject routes

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
