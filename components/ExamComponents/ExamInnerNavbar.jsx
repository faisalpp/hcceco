import React from 'react'
import { useLocation,NavLink } from 'react-router-dom'

const ExamInnerNavbar = () => {
  const title = useLocation()
  
    return (
    <div className='flex w-full lg:justify-end'>
    <div className='flex lg:px-10 px-5 space-x-10 py-2 w-full lg:ml-10 lg:rounded-b-md bg-t1 text-white overflow-scroll lg:overflow-hidden'>
    <NavLink to="/exam/about"><div className={` ${title.pathname === "/exam/about" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>About</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Exam Centers</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Eligibility</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Exam Pattern</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Syllabus</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Preparation Tips</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam/" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Counsling</h3></div></NavLink>
    <NavLink to="/exam/faq"><div className={` ${title.pathname === "/exam/faq" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>FAQ</h3></div></NavLink>
    <NavLink to="/exam"><div className={` ${title.pathname === "/exam" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Participating Colleges</h3></div></NavLink>
    </div>
    </div>
  )
}

export default ExamInnerNavbar