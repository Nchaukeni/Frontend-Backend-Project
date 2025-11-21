import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Lesson4DB");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
  }
}
