import axios from "axios";

export const fetchUserData = async (username) => {
  const GITHUB_API_URL = `https://api.github.com/users/${username}`;
  const apiKey = process.env.REACT_APP_GITHUB_API_KEY; // Fetch API key

  try {
    const response = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    return {
      avatar_url: response.data.avatar_url,
      login: response.data.login,
      name: response.data.name || "No name available",
      location: response.data.location || "No location available",
      public_repos: response.data.public_repos || 0,
      html_url: response.data.html_url,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("User not found or API error");
  }
};
