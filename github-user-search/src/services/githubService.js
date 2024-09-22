import React from 'react'
import axios from 'axios'

const Api_Url = `https://api.github.com/users/{username}`
export const fetchUserData = async ({username,location,miniRepo}) => {


  searchUsers: async ({ username, location, repoCount }, page = 1) => {
    let query = [];
    if (username) query.push(`q=${username}`);
    if (location) query.push(`location:${location}`);
    if (repoCount) query.push(`repos:>=${repoCount}`);

    const queryString = query.join('+');

    const response = await axios.get(
      `https://api.github.com/search/users?q={query}`
    );
  try {

    const response = await axios.get('https://api.github.com/users/{username}') /*Api call using axios to get user data from GitHub*/
    //if Api call is successfull return response
    return response.data;
  } catch (error) {
    throw new error("user not found")
  }

 };
  
}