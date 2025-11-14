import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./Routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "Lesson 3/public")));

//register all routes in routes directory
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is live on http://localhost:" + PORT);
});
