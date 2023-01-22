import React from 'react'
import { useLocation,NavLink } from 'react-router-dom'

const CollegeInnerNavbar = () => {
  const title = useLocation()
    return (
    <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
        {/* Admission Links SideBar */}
        <div className='lg:flex hidden flex-col py-5 bg-white h-screen mb-10 rounded-md mt-7'>
         <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>INTRODUCTION</h3></div></NavLink>
         <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>HIGHLIGHTS</h3></div></NavLink>
         <NavLink to="/college/courses/med"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>RANKING & AWARDS</h3></div></NavLink>
         <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>COURSES</h3></div></NavLink>
         <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>SCHOLERHSIP PLACEMENT</h3></div></NavLink>
         <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>FACILITIES</h3></div></NavLink>
        </div>
        </div>
  )
}

export default CollegeInnerNavbar