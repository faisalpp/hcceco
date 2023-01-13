import React from 'react'
import { RiSearch2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const CoursesSideBar = () => {

  const title = useLocation(); 
  
  return (
  <>
  <div className='flex flex-col mt-5 w-full mr-10'>
   {/* Search Bar */}
   <div className='flex items-center bg-white shadow-xl rounded-md px-2'>
    <input type="search" className='border-none text-sm h-10 w-full outline-none' placeholder='Search'/>
    <RiSearch2Line/>
   </div>
   {/* Courses Links SideBar */}
   <div className='flex flex-col py-5 bg-white h-screen mb-10 rounded-md mt-7'>
    <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>B.ED</h3></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>B.MLT</h3></div></NavLink>
    <NavLink to="/college/courses/med"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>M.ED</h3></div></NavLink>
    <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>BSC</h3></div></NavLink>
   </div>
  </div>
 </>
  )
}

export default CoursesSideBar