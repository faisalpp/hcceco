import React from 'react'
import {BsArrowDown} from 'react-icons/bs'

const SortBy = () => {
  return (
    <div className='flex bg-t2/20 w-11/12 mt-10 rounded-lg h-fit items-center'>
    <div className='flex flex-col justify-center h-full border-r-2 border-t3/40 ml-5 py-5'><h3 className='text-sm w-28'>SORT BY:</h3></div>

  <div className='flex items-center w-11/12'>
    <div className='flex text-xs text-t2 px-5 space-x-20 w-full'>
      <button className='flex'><h3>Popularity</h3><BsArrowDown/></button>
      <button className='flex'><h3>Rating</h3><BsArrowDown/></button>
      <button className='flex'><h3>Highest Fee</h3><BsArrowDown/></button>
      <button className='flex'><h3>Lowest Fee</h3><BsArrowDown/></button>
    </div>
    
    </div>  
  
  </div>
  )
}

export default SortBy