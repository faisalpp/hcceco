import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const SearchBar = () => {
  return (
    <div className='flex w-3/2 h-fit lg:border-2 border-[1px] border-t3/20 items-center rounded-md mt-10' >
        <input type="search" placeholder='Search your college activity and more' className='outline-none border-none rounded-l-sm text-xs w-full h-fit text-t2 px-2 py-3'/>
        <RiSearch2Line className='text-xl mr-3'/>
    </div>
  )
}

export default SearchBar