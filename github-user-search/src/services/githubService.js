import React, {useEffect} from 'react'
import axios from 'axios'

// Function to fetch user data from GitHub API
 export const fetchUserData = async (username) => {
  useEffect(() =>{
    axios.get('https://api.github.com/users/{username}') /*Make an API call using axios to get user data from Github*/
    .then(res => console.log(res))
    .catch(err => console.log(err));

  },[])
};

