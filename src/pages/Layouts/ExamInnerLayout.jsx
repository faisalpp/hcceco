import React from 'react'
import Navbar from '../../../components/Navbar'
import ExamInnerNavbar from '../../../components/ExamComponents/ExamInnerNavbar'
import { NavLink,useLocation } from 'react-router-dom'

const ExamInnerLayout = ({children}) => {
  const title = useLocation();
  return (
    <>
    <Navbar/>
    <ExamInnerNavbar/>
    <div className='lg:grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
        {/*  Inner Desktop menu */}
        <div className='lg:flex flex-col hidden lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-auto h-fit lg:w-72 w-[360px] lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2'>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>DEFINITION</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>EXAM HIGHLIGHT</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>IMPORTANT DATES</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>EXAM PATTERN</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>EXAM SYLLABUS</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>IMPORTANT EXAM BOOKS</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>EXAM HELPLINE</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>EXAM PREVIOUS YEAR CUTOFF</p></div></NavLink>
         <NavLink to="/exam/defination"><div className={`${title.pathname === '/exam/defination' ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>PREVIOUS YEAR PAPERS</p></div></NavLink>
        </div>
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
       {children}
      </main>

    </div>
    </>
  )
}

export default ExamInnerLayout