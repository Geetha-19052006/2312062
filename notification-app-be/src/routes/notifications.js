import express from "express";
import { fetchNotifications } from "../controllers/notificationController.js";

const router = express.Router();

// GET /notifications
router.get("/", fetchNotifications);

export default router;