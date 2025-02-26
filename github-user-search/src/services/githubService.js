import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.response?.status, error.message);
    throw error; // This will trigger the error state in App.jsx
  }
};
