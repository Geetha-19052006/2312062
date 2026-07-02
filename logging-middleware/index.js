import axios from "axios";

const LOG_API = "http://4.224.186.213/evaluation-service/logs";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDYyQG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzYyNzcsImlhdCI6MTc4Mjk3NTM3NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImYzZDFlNTY4LTM1YmYtNDdkMy04YTUxLTNlOWE2YzIyN2ZiZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImdlZXRoYSBsYWtzaG1pIGsiLCJzdWIiOiJmMDNkNjI1YS00OTZlLTQ5OTMtYTM3ZS01NmU1NDI1M2I2ODIifSwiZW1haWwiOiIyMzEyMDYyQG5lYy5lZHUuaW4iLCJuYW1lIjoiZ2VldGhhIGxha3NobWkgayIsInJvbGxObyI6IjIzMTIwNjIiLCJhY2Nlc3NDb2RlIjoiRVJ6VXl4IiwiY2xpZW50SUQiOiJmMDNkNjI1YS00OTZlLTQ5OTMtYTM3ZS01NmU1NDI1M2I2ODIiLCJjbGllbnRTZWNyZXQiOiJ5RVRjTlhnVW1Ya0tydVdUIn0.VRHBk5fRz6RR2oD531H9ZRJ7vlHx9xy0GbYak6siAbA"; // Put your real token here

export async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Log created successfully");
    return response.data;
  } catch (err) {
    console.error("❌ Log API Error:", err.response?.data || err.message);
  }
}