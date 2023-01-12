import React, { useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { AppContext } from '../../context/GlobalContext'

const SearchBar = () => {
   const state = useContext(AppContext)
    return (
    <div id="main-wrapper" className={` ${state.homeSearch ? 'lg:absolute' : 'hidden'} z-20 w-full h-full bg-t1/70 -mt-2`}>
     <div id="notific-panel-wrapper" className='flex justify-center w-full h-20'>
      <div id="notific-panel-body" className='flex bg-white w-full border-4 border-t1 px-5'>
       <div className='flex items-center w-full px-5 space-x-5'><RiSearch2Line className='text-2xl'/>
         <input type="search" className='w-full border-none' placeholder='Search anything here'/>
       </div>
      </div>
     </div>  
    </div>
  )
}

export default SearchBar