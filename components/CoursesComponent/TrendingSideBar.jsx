import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const TrendingSideBar = () => {
  return (
    <div className='flex flex-col px-10 py-10 mt-2 w-fit h-screen '>
    <div className='flex items-center w-fit h-fit bg-white px-2 rounded-md'><input type="search" placeholder='Search Here' className='h-fit border-none shadow-lg'/><RiSearch2Line className='text-xl'/></div>
    <div className='flex flex-col mt-5'>
       <div className='flex items-center space-x-10'><h3>Found 33 Colleges</h3><a className='text-xs mt-1 underline text-t2'>Set Default</a></div>
    </div>
    </div>
  )
}

export default TrendingSideBar