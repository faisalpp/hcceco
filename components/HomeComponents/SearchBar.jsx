import React, { useContext } from 'react'
import { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { Navigate, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/GlobalContext'

const SearchBar = () => {
   const state = useContext(AppContext)
   const [searchTerm,setSearchTerm] = useState(''); 
   const navigate = useNavigate();
   return (
    <div className={` ${state.homeSearch ? 'lg:absolute' : 'hidden'} z-20 w-full h-full bg-t1/70 -mt-2`}>
     <div  className='flex justify-center w-full h-20'>
      <div  className='flex bg-white w-full border-4 border-t1 px-5'>
       <form onSubmit={(event)=>{navigate('/search/all');event.preventDefault()}} className='flex items-center w-full px-5 space-x-5'><RiSearch2Line className='text-2xl'/>
         <input type="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='w-full border-none !outline-none focus:ring-0' placeholder='Search anything here'/>
       </form>
      </div>
     </div>  
    </div>
  )
}

export default SearchBar