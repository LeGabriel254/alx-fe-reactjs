import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setUserData(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("User not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt="User avatar" width="100" />
          <h3>{userData.name}</h3>
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Location:</strong> {userData.location}</p>
          <p><strong>Public Repositories:</strong> {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
