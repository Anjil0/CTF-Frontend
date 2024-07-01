import React from 'react'

const UserDash = () => {
  return (
    <div>
      <div className="bg-gray-200 opacity-50 h-[150px] rounded-md w-full shadow-2xl">
        <h1 className="text-black text-Left pt-10 mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">User Dashboard</h1>
        <p className='text-wblack font-regular mx-[20px]  '>A perfect place to showcase your skills.</p>
      </div>
      <div className="bg-gray-200 opacity-50 h-[70px] rounded-md ">
        <h2 className='text-black text-Left pt-7 mx-[20px] font-[verdana] font-regular text-[20px]  grid gap-[30px]'>
            Recent Rooms           
        </h2>
        <div className="h-[500px] w-[650px] bg-gray-100 shadow-2xl rounded-md hover:h-[550px]">

        </div>


      </div>
    </div>
  )
}

export default UserDash
