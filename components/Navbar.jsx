import React, { useContext, useState } from 'react';
import {RiHome3Line,RiGovernmentLine,RiFileList3Line,RiArticleLine,RiGroup2Line,RiSearch2Line,RiArrowDropDownLine} from 'react-icons/ri'
import {VscBellDot,VscBell} from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/GlobalContext';
import MobNavBar from '../components/MobileComponents/MobNavBar'
import MobMenu from './MobileComponents/MobMenu';

const Navbar = () => {
  const state = useContext(AppContext)
  // Desktop States
  const [userMenu,setUserMenu] = useState(false)
  
  
  return (
  <div className='relative w-full'>
  <div className='hidden lg:grid lg:grid-cols-16 shadow-md pt-10 items-center bg-white'>
    <div className='col-start-7 flex items-center space-x-20 mb-2'>
    <NavLink to="/"><div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiHome3Line className='group-hover:text-b1'/><h3>Home</h3></div></NavLink>
    <NavLink to="/colleges"><div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiGovernmentLine className='group-hover:text-b1'/><h3>Colleges</h3></div></NavLink>
    <NavLink><div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiFileList3Line className='group-hover:text-b1'/><h3>Courses</h3></div></NavLink>
    <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiArticleLine className='group-hover:text-b1'/><h3>Exams</h3></div>
    <div className='flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group'><RiGroup2Line className='group-hover:text-b1'/><h3>Corporate</h3></div>
    </div>
      <div className='col-start-9 flex text-2xl space-x-6'>
      
      {!state.homeSearch ? <button onClick={()=>state.setHomeSearch(true)} className='hover:border-b-4 border-b1 hover:h-10'><RiSearch2Line/></button>:<button onClick={()=>state.setHomeSearch(false)} className='border-b-4 border-b1 h-10'><RiSearch2Line/></button>}
      
      {state.ntfState ? <button onClick={()=>state.setNtfState(false)} className='border-b-4 border-b1 h-10'>{state.ntfMsg ? <VscBellDot/>:<VscBell/>}</button>:<button onClick={()=>state.setNtfState(true)} className='flex hover:border-b-4 border-b1 hover:h-10 w-fit h-fit'>{state.ntfMsg ? <div><VscBell/><div className='absolute ml-4 animate-bounce delay-75 top-16 bg-t1 rounded-full w-2 h-2'></div></div>:<VscBell/>}</button>}
      </div>
    <div className='col-start-11 col-end-16 flex space-x-5'>
      <button className='border-2 border-gray-500 rounded-md w-fit h-fit px-2 py-2'>Get App</button>
    
       {/* IF false then show login btn else show logged in user image */}
      {state.isLogin ? <button className='hover:bg-b2 text-sm bg-b1 rounded-md px-5 text-white'><NavLink to="/login">Login</NavLink></button>
      :
      <div className='flex items-center space-x-1'><img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='rounded-full w-9 h-9'/><div onClick={()=> setUserMenu(true)} className='flex text-sm items-center text-t1 cursor-pointer'><h3>Argha Paul</h3><RiArrowDropDownLine className='text-2xl'/></div></div>
      }
      <div onMouseLeave={()=>setUserMenu(false)} className={`${userMenu ? 'absolute' : 'hidden'} w-fit h-fit top-24 right-10 bg-white border-2 border-t2/30 text-xs px-5 py-2`}><div className='flex flex-col items-center space-y-2 [&>a:hover]:text-t1 [&>a:hover]:cursor-pointer'><NavLink to="/edit-profile">Edite Profile</NavLink><a>Logout</a></div></div>
    
    </div>
  </div>

  {/* Mobile Navbar */}
  <MobNavBar/>
   
   {/* Mobile Menue */}
   <MobMenu/>
  
  </div>
  )
}

export default Navbar