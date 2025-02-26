let axios;

// Ensure compatibility for Jest testing
(async () => {
  axios = (await import('axios')).default;
})();

// Base API URL for fetching GitHub user details
const BASE_URL = 'https://api.github.com/users/';

/**
 * Fetches GitHub user data, their most recently updated repository, total repos, and top languages used.
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<object>} - An object containing user data, the most recent repo, last updated date, total repositories, and top languages.
 * @throws {Error} - Throws an error if the user is not found or the request fails.
 */
export const fetchUserData = async (username) => {
  try {
    if (!axios) axios = (await import('axios')).default; // Ensure axios is loaded

    // Fetch user profile & repositories in parallel (to optimize performance)
    const [userResponse, reposResponse] = await Promise.all([
      axios.get(`${BASE_URL}${username}`),
      axios.get(`${BASE_URL}${username}/repos?sort=updated&per_page=100`)
    ]);

    const userData = userResponse.data;
    const repos = reposResponse.data;

    // Determine the most recently updated repository
    const recentRepo = repos.length > 0 ? repos[0].name : 'No recent repositories';
    const lastUpdated = repos.length > 0 ? repos[0].updated_at : null; // Fix: Return `null` instead of 'N/A'

    // Calculate the most used programming language
    const languageCount = repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const topLanguages = Object.entries(languageCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 1)
      .map(([language]) => language)
      .join(', ') || 'N/A';

    // Return relevant user data
    return {
      avatar_url: userData.avatar_url,
      login: userData.login,
      name: userData.name || userData.login,
      location: userData.location || 'Not Available',
      html_url: userData.html_url,
      totalRepos: userData.public_repos,
      recentRepo,
      lastUpdated,
      topLanguages,
    };
  } catch (error) {
    throw new Error(`Failed to fetch data for user: ${username} - ${error.response?.status || error.message}`);
  }
};
