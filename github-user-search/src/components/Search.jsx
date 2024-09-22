import React, { useState, useTransition } from 'react'
import { fetchUserData } from '../services/githubService'

const search = ({ onSearch, users }) => {
  const [username, setUsename] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState()
  const [repoCount, setRepoCount] = useState()

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setUserData(null)
    setLoading(true)

    // Call the fetchUserData function to get the user data
    try {
      const data = await fetchUserData(username);
      setUserData(data)
    } catch (error) {
      setError("Looks like we cant find the user") /* Error handling display Message*/
    } finally {
      setLoading(false) /*state update to handle loading*/
    }


  };


  return (
    <div>
      <form onSubmit={handleSearch} className='btn gap-3 '>
        <div>
          <input className='in border rounded border-stone-950'
            type="text" value={username}
            onChange={(e) => setUsename(e.target.value)}
            placeholder='Enter GitHub username' required
          />
        </div>
        <div className='mb-4'>
          <label className='w-full p-2 block text-sm'>Location:</label>
          <input className='border rounded border-stone-950 '
            type="location" value={location}
            placeholder='Enter location'
            onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className=''>Minimum Repositories</label>
          <input
            type="number"
            className="w-full p-2 border rounded border-stone-950"
            value={repoCount}
            onChange={(e) => setRepoCount(e.target.value)}
            placeholder="Enter minimum repo count"
          />
        </div>
        <button type='submit' onClick={handleSearch} className='border rounded border-amber-200 w-20 bg-sky-500 hover:bg-sky-700 ...'>Search</button>
        {loading && <p>Loading...</p>}
        {error && <p> {error}</p>}
        {userData && (
          <ul>
            {users.map((user) => {
              <li key={user.id} className='border p-4 rounded-lg'>
                <h3>{user.login}</h3>
                <p className='font-bold'>{userData.bio}</p>
                <a href={userData.html_url} target='_blank'
                  rel="noopener noreferrer">View Profile</a>
              </li>
            })}
          </ul>
        )}
      </form>
    </div>
  )
};

export default search;