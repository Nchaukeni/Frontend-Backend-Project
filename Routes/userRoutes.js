import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
} from "../Controllers/userController.js";

const router = express.Router();

// Define routes
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;
