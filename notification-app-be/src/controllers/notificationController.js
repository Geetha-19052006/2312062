import { getNotifications } from "../services/notificationService.js";
import { Log } from "../../../logging-middleware/index.js";

export const fetchNotifications = async (req, res) => {
  try {
    await Log(
      "backend",
      "info",
      "controller",
      "GET /notifications request received"
    );

    const notifications = await getNotifications();

    await Log(
      "backend",
      "info",
      "service",
      "Notifications fetched successfully"
    );

    res.status(200).json(notifications);
  } catch (error) {
    await Log(
      "backend",
      "error",
      "controller",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch notifications"
    });
  }
};