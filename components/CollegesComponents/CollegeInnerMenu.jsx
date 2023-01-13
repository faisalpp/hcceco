import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const AboutSideBar = () => {

  const title = useLocation(); 
  
  return (
  <div className='flex flex-col py-5 bg-white h-fit mb-10 rounded-md ml-4 mr-4 mt-7'>
   <NavLink  to="/college/about/introduction"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>INTRODUCTION</h3></div></NavLink>
   <NavLink  to="/college/about/highlights"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>HIGHLIGHTS</h3></div></NavLink>
   <NavLink  to="/college/about/ranking"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>RANKING & AWARDS</h3></div></NavLink>
   <NavLink  to="/college/about/courses"><div className={`${title.pathname === "/college/about/courses" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>COURSES</h3></div></NavLink>
   <NavLink  to="/college/about/scholership"><div className={`${title.pathname === "/college/about/scholership" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>SCHOLERSHIP PLACEMENT</h3></div></NavLink>
   <NavLink  to="/college/about/facilities"><div className={`${title.pathname === "/college/about/facilities" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>FACILITIES</h3></div></NavLink>
  </div>
  )
}

export default AboutSideBar