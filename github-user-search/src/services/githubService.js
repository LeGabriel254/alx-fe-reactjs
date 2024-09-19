import React, {useEffect} from 'react'
import axios from 'axios'

export const fetchUserData = async (username) => {
  const Api_Url = `https://api.github.com/users/{username}`
  
  try{

    const response = await axios.get('https://api.github.com/users/{username}') /*Api call using axios to get user data from GitHub*/
   //if Api call is successfull return response
    return response.data;
  }catch(error){
   throw new error("user not found")
  }
};