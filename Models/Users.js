import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  username: { type: String, required: true },
  role: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
