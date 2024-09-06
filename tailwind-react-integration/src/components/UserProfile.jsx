import React from 'react'

 function UserProfile() {
  return (
   <div  className='container bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 ms:max-w-xs o md:max-w-sm '>
   <img src="https://via.placeholder.com/150 rounded-full w-36 h-36 mx-auto"  alt="User"/>
   <h1 className='Name text-xl text-blue-800 my-4 md:text-lg sm:text-xl'>John Doe</h1>
    <p className=' text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies</p>
   </div>
  );
}
export default UserProfile;