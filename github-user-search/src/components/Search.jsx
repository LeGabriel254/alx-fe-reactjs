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
      <form onChange={handleSubmit}>

      </form>
    </div>
  )
}

export default search