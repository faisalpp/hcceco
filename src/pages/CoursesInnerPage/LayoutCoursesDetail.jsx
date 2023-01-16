import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

const LayoutCoursesDetail = ({children}) => {
  const title = useLocation()
   return (
    <>
    <Navbar/>
    <div className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 flex flex-col items-center'>
        {/* COurses inner menu */}
        <div className='flex flex-col py-5 bg-white h-screen w-72 mb-10 rounded-md mt-7'>
         <NavLink to="/courses/about/"><div className={`${title.pathname.startsWith("/courses/about") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><p className='truncate overflow-clip'>ABOUT B.ARCH</p></div></NavLink>
         <NavLink to="/courses/specialization/"><div className={`${title.pathname.startsWith("/courses/specialization") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>SPECIALIZAITON</p></div></NavLink>
         <NavLink to="/courses/eligibility/"><div className={`${title.pathname.startsWith("/courses/eligibility") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>ELIGIBILITY</p></div></NavLink>
         <NavLink to="/courses/after-course/"><div className={`${title.pathname.startsWith("/courses/after-course") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>COURSE AFTER B.ARCH</p></div></NavLink>
         <NavLink to="/courses/after-career/"><div className={`${title.pathname.startsWith("/courses/after-career") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>CAREER AFTER B.ARCH</p></div></NavLink>
         <NavLink to="/courses/exam-book/"><div className={`${title.pathname.startsWith("/courses/exam-book") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>IMPORTANT EXAM BOOKS</p></div></NavLink>
         <NavLink to="/courses/average-fee/"><div className={`${title.pathname.startsWith("/courses/average-fee") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>AVERAGE FEE</p></div></NavLink>
         <NavLink to="/courses/salary-trend/"><div className={`${title.pathname.startsWith("/courses/salary-trend") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>SALARY TRENDS</p></div></NavLink>
         <NavLink to="/courses/top-recruiter/"><div className={`${title.pathname.startsWith("/courses/top-recruiter") ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><p>TOP RECRUITERS</p></div></NavLink>
        </div>


      </div>
      <main className='col-start-4 col-end-13 w-full h-screen'>
       {children}
      </main>
    </div>
    </>
  )
}

export default LayoutCoursesDetail