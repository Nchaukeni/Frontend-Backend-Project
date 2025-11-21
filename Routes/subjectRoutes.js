import express from "express";
import {
  subjects,
  getSubjectById,
  addSubject,
} from "../Controllers/lesson4SubjectControllers.js";
const router = express.Router();

router.get("/", subjects);
router.get("/:subjectId", getSubjectById);
router.post("/", addSubject);

export default router;
