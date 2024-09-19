import React, { useState } from 'react'
import { fetchUserData } from '../services/githubService'

const search = () => {
  const [username, setUsename] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
      setError("Looks like we can't find the user")
    } finally {
      setLoading(false)
    }


  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='btn gap-3'>
        <input type="text" value={username} onChange={(e) => setUsename(e.target.value)} placeholder='Enter GitHub username' required className='in'/>
        <button type='submit'>Search</button>

        {loading && <p>Loading...</p>}
        {error && <p> {error}</p>}
        {userData &&(
          <div>
            <img src={userData.avatar_url} alt={userData.name} width={100} />
            <h3>{userData.name}</h3>
            <p>{userData.bio}</p>
            <a href={userData.html_url} target='_blank' rel="noopener noreferrer">View Profile</a>
          </div>
        )}
      </form>
    </div>
  )
}

export default search