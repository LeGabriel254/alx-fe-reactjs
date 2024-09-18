import React, { useState } from "react";
import  fetchUserData  from './services/githubService';


const Search = () => { 
  const [userData, setuUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading
}
useEffect(() =>{
  async function fetchUserData(){
    setLoading(true);
    setError('')
    try{
      const response =await fetch(`https://api.github.com/users/{username}`)
      const data = await response.json()
      setuUserData([...data])
    }catch(error) {
     setError('Looks like we cant find the user')
    } finally{
    setLoading(false)
    }
  }
fetchUserData()
}, [])


return(
  <></>
)
};


