import React from 'react'

 function UserProfile() {
  return (
   <div  className='container bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg p-4 sm:screens and p-8 on md:screens and above max-w-xs on small screens and max-w-sm on medimu screens and above'>
   <img src="https://via.placeholder.com/150 rounded-full w-36 h-36 mx-auto w-24 h-24 on sm: screens and w-36 h-36 on md: screens and above for the profile image"  alt="User"/>
   <h1 className='Name text-xl text-blue-800 my-4 text-lg 0n sm:screens and text-xl on md:screens and aboveg'>John Doe</h1>
    <p className='about text-gray-600 text-base text-sm on sm: screens and text-base on md: screens and above'>Developer at Example Co. Loves to write code and explore new technologies</p>
   </div>
  );
}
export default UserProfile;