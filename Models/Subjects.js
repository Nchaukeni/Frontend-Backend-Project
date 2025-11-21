import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  subjectTeacher: { type: String, required: true },
  subjectId: { type: Number, unique: true },
});

export const Subject = mongoose.model("Subject", subjectSchema);
