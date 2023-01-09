import React, { useContext, useState } from 'react';
import {RiHome3Line,RiGovernmentLine,RiFileList3Line,RiArticleLine,RiGroup2Line,RiSearch2Line} from 'react-icons/ri'
import {VscBellDot,VscBell} from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/GlobalContext';
const Navbar = () => {
  const state = useContext(AppContext)
  const [isMsg,setIsMsg] = useState(true)
  return (
  <>
  <div className='hidden lg:grid lg:grid-cols-16 shadow-xl pt-10 items-center bg-white'>
    <div className='col-start-7 flex items-center space-x-20 mb-2'>
      <NavLink to="/"><div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiHome3Line className='group-hover:text-b1'/><h3>Home</h3></div></NavLink>
      <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiGovernmentLine className='group-hover:text-b1'/><h3>Colleges</h3></div>
      <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiFileList3Line className='group-hover:text-b1'/><h3>Courses</h3></div>
      <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiArticleLine className='group-hover:text-b1'/><h3>Exams</h3></div>
      <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiGroup2Line className='group-hover:text-b1'/><h3>Corporate</h3></div>
    </div>
      <div className='col-start-9 flex text-2xl space-x-6'>
      <button><RiSearch2Line/></button>
      <button onClick={()=>state.setNtfState(true)}>{isMsg ?<VscBellDot/>:<VscBell/>}</button>
      </div>
    <div className='col-start-11 col-end-16 flex space-x-5'>
      <button className='border-2 border-gray-500 rounded-md w-fit h-fit px-2 py-2'>Get App</button>
      <button className='hover:bg-b2 text-sm bg-b1 rounded-md px-5 text-white'><NavLink to="/login">Login</NavLink></button>
    </div>
  </div>

  {/* Mobile Navabr */}
  <div className='lg:hidden'>
   <h3>Mobile Navabr</h3>
  </div>
  </>
  )
}

export default Navbar