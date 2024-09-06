import React from 'react'

 function UserProfile() {
  return (
   <div className="use-profile bg-gray-100 p-8 mx-w-sm mx-auto, my-20 rounded-lg shadow-lg">
   <img src="https://via.placeholder.com/150 rounded-full w-36 h-36 mx-auto"  alt="User"/>
   <h1 className='Name text-xl text-blue-800 my-4'>John Doe</h1>
    <p className='about text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies</p>
   </div>
  );
}
export default UserProfile;