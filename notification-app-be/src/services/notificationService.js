import fs from "fs/promises";

export const getNotifications = async () => {
    const data = await fs.readFile(
        "./src/data/notifications.json",
        "utf-8"
    );

    return JSON.parse(data);
};