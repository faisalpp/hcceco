import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const AnnouncementSideBar = () => {

  const title = useLocation();

  return (
    <div className='flex flex-col py-5 bg-white h-screen w-72 mr-10 mb-10 rounded-md mt-7'>
    <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><p className='truncate overflow-clip'>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
    <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>Graphics Designer Required</p></div></NavLink>
   </div>
  )
}

export default AnnouncementSideBar