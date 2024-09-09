import React, {useState} from 'react'

const newAge = () => {
const[age,setAge] = useState(10)
const handleClick = () =>setAge(age + 1)
  return (
    <div>
   <h1>Set age</h1>
   <button onClick={handleClick}>Get older</button>
   </div>
  )
}

export default newAge;