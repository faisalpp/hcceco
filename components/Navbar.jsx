import React, { useContext, useState } from 'react';
import {RiHome3Line,RiGovernmentLine,RiFileList3Line,RiArticleLine,RiGroup2Line,RiSearch2Line,RiArrowDropDownLine} from 'react-icons/ri'
import {VscBell} from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/GlobalContext';
import MobNavBar from '../components/MobileComponents/MobNavBar'
import { useLocation } from 'react-router-dom';
import {ImMobile} from 'react-icons/im';
import {CgFileDocument} from 'react-icons/cg';

const Navbar = () => {
  const title = useLocation();
  const state = useContext(AppContext)
  // Desktop States
  const [userMenu,setUserMenu] = useState(false)
  
  return (
  <>
  <div className='relative'>
  <div className='hidden lg:grid grid-cols-16 shadow-md pt-10 items-center bg-white'>
    <div className='col-start-7 flex items-center space-x-20 mb-2'>
    <NavLink to="/"><div className={`${title.pathname === '/' ? 'group border-b-4 border-b1':null} flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group`}><RiHome3Line className={`${title.pathname === '/'?'text-t1':null} group-hover:text-b1`}/><h3>Home</h3></div></NavLink>
    <NavLink to="/colleges"><div className={`${title.pathname.startsWith('/colleges') || title.pathname.startsWith('/college') ? 'group border-b-4 border-b1':null} flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group`}><RiGovernmentLine className={`${title.pathname === '/colleges'?'text-t1':null} group-hover:text-b1`}/><h3>Colleges</h3></div></NavLink>
    <NavLink to="/courses"><div className={`${title.pathname.startsWith('/courses') || title.pathname.startsWith('/course') ? 'group border-b-4 border-b1':null} flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group`}><RiFileList3Line className={`${title.pathname === '/courses'?'text-t1':null} group-hover:text-b1`}/><h3>Courses</h3></div></NavLink>
    <NavLink to="/exams"><div className={`${title.pathname.startsWith('/exams') ||title.pathname.startsWith('/exam') ? 'group border-b-4 border-b1':null} flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group`}><RiArticleLine className={`${title.pathname === '/exam'?'text-t1':null} group-hover:text-b1`}/><h3>Exams</h3></div></NavLink>
    <NavLink to="/corporate/short-tricks"><div className={`${title.pathname.startsWith('/corporate') ? 'group border-b-4 border-b1':null} flex flex-col items-center text-3xl [&>h3]:text-sm hover:border-b-4 border-b1 cursor-pointer w-fit h-14 group`}><RiGroup2Line className={`${title.pathname === '/corporate'?'text-t1':null} group-hover:text-b1`}/><h3>Corporate</h3></div></NavLink>
    </div>
      <div className='col-start-9 flex text-2xl space-x-6'>
      
      {!state.homeSearch ? <button className={` ${title.pathname.startsWith("/search")?'border-b-4 border-t1':null} border-b-4 border-white py-2`} onClick={()=>state.setHomeSearch(true)}><RiSearch2Line/></button>:<button onClick={()=>state.setHomeSearch(false)} className={` ${title.pathname.startsWith("/search")?'border-b-4 border-t1':null} border-b-4 border-t1 py-2`}><RiSearch2Line /></button>}
      
      {state.ntfState ? 
      <button onClick={()=>state.setNtfState(false)} className='border-b-4 border-b1'>{state.ntfMsg ? <div><VscBell/><div className='absolute ml-4 top-[60px] bg-t1 rounded-full w-2 h-2'></div></div>:<VscBell/>}</button>
      :<button onClick={()=>state.setNtfState(true)} className='border-b-4 border-white'>{state.ntfMsg ? <div><VscBell/><div className='absolute ml-4 top-[60px] bg-t1 rounded-full w-2 h-2'></div></div>:<VscBell/>}</button>}
     
      </div>
    <div className='col-start-11 col-end-16 flex space-x-5'>
      <div>
      <button className='w-fit h-fit px-2 py-2'><CgFileDocument className='text-3xl'/> </button>
      <button className='w-fit h-fit px-2 py-2'><ImMobile className='text-3xl'/> </button>
      </div>
    
       {/* IF false then show login btn else show logged in user image */}
      {state.isLogin ? <div className='flex items-center space-x-1'><img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='rounded-full w-9 h-9'/><div onClick={()=> setUserMenu(true)} className='flex text-sm items-center text-t1 cursor-pointer'><h3>Argha Paul</h3><RiArrowDropDownLine className='text-2xl'/></div></div>
      :
      <button className='hover:bg-b2 text-sm bg-b1 rounded-md px-5 text-white'><NavLink to="/login">Login</NavLink></button>
      }
      <div onMouseLeave={()=>setUserMenu(false)} className={`${userMenu ? 'absolute' : 'hidden'} w-fit h-fit top-24 right-10 bg-white border-2 border-t2/30 text-xs px-5 py-2`}><div className='flex flex-col items-center space-y-2 [&>a:hover]:text-t1 [&>a:hover]:cursor-pointer'><NavLink to="/edite-profile">Edite Profile</NavLink><button onClick={()=>state.setIsLogin(false)}>Logout</button></div></div>
    
    </div>
  </div>

  </div>
  {/* Mobile Navbar */}
  <MobNavBar/>
  </>
  )
}

export default Navbar