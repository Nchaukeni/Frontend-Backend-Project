import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import subjectRoute from "./Routes/subjectRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "Lesson 4")));

app.use("/api/subject", subjectRoute);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("Lesson 4 server is live on http://localhost:" + PORT);
});
