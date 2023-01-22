import React from 'react'
import Navbar from '../../../components/Navbar'
import { NavLink, useLocation } from 'react-router-dom'

const CoursesAbout = ({children}) => {
  const title = useLocation();
  return (
    <>
    <Navbar/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
        {/* COurses inner menu */}
        <div className='flex lg:flex-col flex-row lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-auto h-fit lg:w-72 lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2 w-screen'>
        <NavLink to="/course/about"><div className={`${title.pathname === "/course/about" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer px-5 lg:[&>p:hover]:text-t1 lg:hover:bg-t1/20`}><p className='text-t3 w-max'>ABOUT B.ARCH</p></div></NavLink>
        <NavLink to="/course/specialization"><div className={`${title.pathname === "/course/specialization" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>SPECIALIZAITON</p></div></NavLink>
        <NavLink to="/course/eligibility"><div className={`${title.pathname === "/course/eligibility" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>ELIGIBILITY</p></div></NavLink>
        <NavLink to="/course/after-course"><div className={`${title.pathname === "/course/after-course" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>COURSE AFTER B.ARCH</p></div></NavLink>
        <NavLink to="/course/after-carrier"><div className={`${title.pathname === "/course/after-carrier" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>CAREER AFTER B.ARCH</p></div></NavLink>
        <NavLink to="/course/exam-book"><div className={`${title.pathname === "/course/exam-book" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>IMPORTANT EXAM BOOKS</p></div></NavLink>
        <NavLink to="/course/average-fees"><div className={`${title.pathname === "/course/average-fees" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>AVERAGE FEE</p></div></NavLink>
        <NavLink to="/course/salary-trends"><div className={`${title.pathname === "/course/salary-trends" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>SALARY TRENDS</p></div></NavLink>
        <NavLink to="/course/top-recruiters"><div className={`${title.pathname === "/course/top-recruiters" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>TOP RECRUITERS</p></div></NavLink>
        </div>
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      {children}
      </main>

    </div>
    </>
  )
}

export default CoursesAbout