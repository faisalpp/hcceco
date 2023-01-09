import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const SearchBar = () => {
  return (
    <div className='flex w-3/2 h-fit border-2 border-b3 items-center rounded-md mt-5' >
        <input type="search" placeholder='Search your college activity and more' className='outline-none text-xs w-full h-fit text-t2  px-2 py-3 rounded-md'/>
        <RiSearch2Line className='text-xl mr-3'/>
    </div>
  )
}

export default SearchBar