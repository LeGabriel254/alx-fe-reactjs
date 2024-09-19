import React, { useState, useTransition } from 'react'
import { fetchUserData } from '../services/githubService'

const search = () => {
  const [username, setUsename] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
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
      <form onSubmit={handleSubmit} className='btn gap-3'>
        <div>
          <input className='in'
            type="text" value={username}
            onChange={(e) => setUsename(e.target.value)}
            placeholder='Enter GitHub username' required
          />
        </div>
        <button type='submit'>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p> {error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <h3>{userData.login}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target='_blank' rel="noopener noreferrer">View Profile</a>
        </div>
      )}

    </div>
  )
};

export default search;