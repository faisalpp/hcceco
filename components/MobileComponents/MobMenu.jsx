import React,{useContext, useState} from 'react'
import {RiPencilLine,RiGroup2Line,RiArticleLine,RiFileList3Line,RiArrowDropUpLine,RiLogoutCircleRLine,RiArrowDropDownLine,RiHome3Line,RiGovernmentLine, RiQuestionLine,} from 'react-icons/ri'
import { AppContext } from '../../context/GlobalContext'
import { NavLink } from 'react-router-dom'

const MobMenu = () => {
  const state = useContext(AppContext)
  const [homeMenu,setHomeMenu] = useState(false)
  const [clgMenu,setClgMenu] = useState(false)
  const [crsMenu,setCrsMenu] = useState(false)
  const [exmMenu,setExmMenu] = useState(false)
  const [corpMenu,setCorpMenu] = useState(false)
  
  const logoutPopup = () =>{
    state.setUserMobMenu(false);
    state.setLogoutPopup(true);
  }

  return (
  <div className={`${state.userMobMenu ? 'fixed':'hidden'} lg:hidden right-0 bg-white w-fit h-full py-5 z-50 `}>
   <div className='flex flex-col space-y-2 mt-2'>
    {!state.isLogin ? <NavLink to="/login"><div className='flex items-center space-x-2 ml-5'><RiLogoutCircleRLine/><h3 className='text-lg'>Login</h3></div></NavLink>:null}
  
    {/* Home Menu */}
    <div className='lg:hidden flex flex-col border-t-2  border-t3/10'>
     {/* Home Menu Btn */}
     {homeMenu ? <button onClick={()=>setHomeMenu(false)} className='flex items-center text-lg text-t1 space-x-28 ml-5'><div className='flex space-x-2 items-center'><RiHome3Line/><h3>Home</h3></div><RiArrowDropUpLine className='text-3xl'/></button>:<button onClick={()=>setHomeMenu(true)} className='flex items-center text-lg space-x-28 ml-5'><div className='flex space-x-2 items-center'><RiHome3Line/><h3>Home</h3></div><RiArrowDropDownLine className='text-3xl'/></button>}
     {/* Home Menu Drop Down */}
     <div className={`${homeMenu ? 'flex':'hidden'} flex-col mt-5 space-y-1`}>
      <NavLink to="/"><div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Home</h3></div></NavLink>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Hirings</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Announcements</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Questions</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Write a review</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Learning Links</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Question Bank</h3></div>
     </div>     
    </div>
    {/* Home Menu End */}
   
    {/* Colleges Menu */}
    <div className='flex flex-col border-t-2 border-b-2 border-t3/10'>
     {/* Colleges Menu Btn */}
     {clgMenu ? <button onClick={()=>setClgMenu(false)} className='flex items-center text-lg text-t1 space-x-[88px] ml-5'><div className='flex space-x-2 items-center'><RiGovernmentLine/><h3>Colleges</h3></div><RiArrowDropUpLine className='text-3xl'/></button>:<button onClick={()=>setClgMenu(true)} className='flex items-center text-lg space-x-[88px] ml-5'><div className='flex space-x-2 items-center'><RiGovernmentLine/><h3>Colleges</h3></div><RiArrowDropDownLine className='text-3xl'/></button>}
     {/* Colleges Menu Drop Down */}
     <div className={`${clgMenu ? 'flex':'hidden'} flex-col mt-5 space-y-1`}>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Hirings</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Announcements</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Questions</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Write a review</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Learning Links</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Question Bank</h3></div>
     </div>     
    </div>
    {/* Colleges Menu End */}

    {/* Courses Menu */}
    <div className='flex flex-col  border-b-2 border-t3/10'>
     {/* Courses Menu Btn */}
     {crsMenu ? <button onClick={()=>setCrsMenu(false)} className='flex items-center text-lg text-t1 space-x-[93px] ml-5'><div className='flex space-x-2 items-center'><RiFileList3Line/><h3>Courses</h3></div><RiArrowDropUpLine className='text-3xl'/></button>:<button onClick={()=>setCrsMenu(true)} className='flex items-center text-lg space-x-[93px] ml-5'><div className='flex space-x-2 items-center'><RiFileList3Line/><h3>Courses</h3></div><RiArrowDropDownLine className='text-3xl'/></button>}
     {/* Courses Menu Drop Down */}
     <div className={`${crsMenu ? 'flex':'hidden'} flex-col mt-5 space-y-1`}>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Hirings</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Announcements</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Questions</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Write a review</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Learning Links</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Question Bank</h3></div>
     </div>     
    </div>
    {/* Courses Menu End */}

    {/* Exam Menu */}
    <div className='flex flex-col  border-b-2 border-t3/10'>
    {/* Exam Menu Btn */}
    {exmMenu ? <button onClick={()=>setExmMenu(false)} className='flex items-center text-lg text-t1 space-x-[93px] ml-5'><div className='flex space-x-2 items-center'><RiArticleLine/><h3>Exam</h3></div><RiArrowDropUpLine className='text-3xl'/></button>:<button onClick={()=>setExmMenu(true)} className='flex items-center text-lg space-x-[118px] ml-5'><div className='flex space-x-2 items-center'><RiArticleLine/><h3>Exam</h3></div><RiArrowDropDownLine className='text-3xl'/></button>}
    {/* Exam Menu Drop Down */}
     <div className={`${exmMenu ? 'flex':'hidden'} flex-col mt-5 space-y-1`}>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Hirings</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Announcements</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Questions</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Write a review</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Learning Links</h3></div>
      <div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Question Bank</h3></div>
     </div>     
    </div>
    {/* Exam Menu End */}
    
    {/* Corporate Menu */}
    <div className='flex flex-col  border-b-2 border-t3/10'>
    {/* Corporate Menu Btn */}
    {corpMenu ? <button onClick={()=>setCorpMenu(false)} className='flex items-center text-lg text-t1 space-x-[75px] ml-5'><div className='flex space-x-2 items-center'><RiGroup2Line/><h3>Corporate</h3></div><RiArrowDropUpLine className='text-3xl'/></button>:<button onClick={()=>setCorpMenu(true)} className='flex items-center text-lg space-x-[75px] ml-5'><div className='flex space-x-2 items-center'><RiArticleLine/><h3>Corporate</h3></div><RiArrowDropDownLine className='text-3xl'/></button>}
    {/* Corporate Menu Drop Down */}
     <div className={`${corpMenu ? 'flex':'hidden'} flex-col mt-5 space-y-1`}>
      <NavLink to='/corporate/short-tricks'><div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Short Tricks</h3></div></NavLink>
      <NavLink to='/corporate/worksheets'><div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>WorkSheets</h3></div></NavLink>
      <NavLink to="/corporate/mocktest"><div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>MockTest</h3></div></NavLink>
      <NavLink to="/corporate/library"><div className='border-l-2 border-t1 px-5 bg-b3/20 py-2'><h3>Library</h3></div></NavLink>
     </div>     
    </div>
    {/* Corporate Menu End */}
 
    {/* Edite Profile Link */}
    <div className='flex items-center space-x-2 ml-5'><RiQuestionLine/><h3 className='text-lg'>About</h3></div>
    {state.isLogin ?<NavLink to="/edite-profile"><div className='flex items-center space-x-2 ml-5'><RiPencilLine/><h3 className='text-lg'>Edite Profile</h3></div></NavLink>:null}
    {state.isLogin?<button onClick={()=>logoutPopup()} className='flex items-center space-x-2 ml-5'><RiLogoutCircleRLine/><h3 className='text-lg'>Logout</h3></button>:null}
    
   </div>  
  </div>

  )
}

export default MobMenu