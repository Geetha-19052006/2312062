import axios from "axios";

const API = "http://localhost:3000/notifications";

export const getNotifications = async () => {
  const response = await axios.get(API);
  return response.data;
};