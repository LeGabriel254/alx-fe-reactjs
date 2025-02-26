import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setError("");
    setUserData(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      {/* ✅ Ensure handleSearch is passed here */}
      <Search onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.login}</h2>
          <p>Location: {userData.location || "Not available"}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
