import React, { useState, useEffect } from "react";
import { fetchUserData } from "./services/githubService"


const Search = () => { 
  const [userData, setuUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('')
    setuUserData(null);


  try{
    const data = await fetchUserData(username);
    setuUserData(data);
  }catch(error){
    setError("Looks like we can't find the user")
  } finally{
    setLoading(false);
  };
};

return(
  <div>
    <form onSubmit={handleSubmit}>
  <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)}placeholder="Enter GitHub username" />
    </form>
  </div>
)
};

export default Search;