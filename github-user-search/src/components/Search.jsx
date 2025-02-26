import React from 'react';
import useGitHubStore from '../store/useGitHubStore';

const Search = () => {
  const { username, setUsername, searchUser, userData, loading, error } = useGitHubStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Search</button>
      </form>
      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we can't find the user</p>}
      {userData && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-start">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full" />
          <h2 className="mt-2 text-lg font-bold">{userData.name || userData.login}</h2>
          <p className="mt-2 text-gray-600">Location: {userData.location || 'Not Available'}</p>
          <p className="mt-1 text-gray-600">Total Repositories: {userData.totalRepos}</p>
          <p className="mt-1 text-gray-600">Last Commited Repo: {userData.recentRepo}</p>
          <p className="mt-1 text-gray-600">Top Languages: {userData.topLanguages || 'N/A'}</p>
          <p className="mt-1 text-gray-600">Last Seen: {userData.lastUpdated ? new Date(userData.lastUpdated).toLocaleDateString() : 'N/A'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 hover:underline">Visit Profile</a>
        </div>
      )};
    </div>
  );
};

export default Search;
