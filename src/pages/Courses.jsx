import React from 'react'
import CoursesCard from '../../components/CoursesComponent/CoursesCard'
import PopularCourseCard from '../../components/CoursesComponent/PopularCourseCard'
import HeadMeta from '../HeadMeta';
import Navbar from '../../components/Navbar';
import { RiSearch2Line } from 'react-icons/ri';
import TrendingCoursesMenu from '../../components/CoursesComponent/SideBar/TrendingCoursesMenu';
import ChoseByDreamMenu from '../../components/CoursesComponent/SideBar/ChoseByDreamMenu';
import SearchBar from '../../components/HomeComponents/SearchBar';
import NotificationMenu from '../../components/NotificationMenu';
import { AiOutlineControl } from 'react-icons/ai';
import MobileFloats from './MobileFloats';
import { useState } from 'react';

const Courses = () => {
  
  const [searchQuery,setSearchQuery] = useState('');
  
  return (
    <>
    <HeadMeta title="Courses"/>
    <Navbar/>
    <MobileFloats/>
    <SearchBar/>
    <NotificationMenu/>
    <div className='lg:grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 hidden lg:flex flex-col items-center'>
        <form onSubmit={(event)=>{alert(searchQuery);event.preventDefault();setSearchQuery('')}} className='flex items-center bg-white w-60 mt-10 rounded-md text-xs px-2'><input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="search" placeholder='Search' className='border-none w-full outline-none focus:ring-0'/><RiSearch2Line className='text-xl'/></form>
        <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
        <TrendingCoursesMenu courses={['B.ED','BSCS','MCAT','MBA','ICS','INTER']}/>
        <ChoseByDreamMenu/>       
      </div>
      <main className='col-start-4 col-end-13 w-full'>
       <div className='w-full bg-white h-auto'>
        <div className='lg:flex hidden flex-col items-center '>
         <div className='mt-10'><h3 className='text-t1 text-2xl font-semibold'>CHOSE BY YOUR LEVEL</h3></div> 
        </div>

            {/* Mobile Filters & Search Bar */}
    <div className='lg:hidden  flex flex-col w-full py-5 space-y-5'>
      <h3 className='text-t1 text-center'>Popular Colleges in India</h3>
      <div className='flex items-center w-fit ml-2 space-x-2 justify-center'>
       <div className='flex items-center  w-80 ml-3 border-2 border-t3/20 rounded-md'>
        <input type="search" placeholder="Search any College here" className='w-full text-xs h-10 px-2 outline-none'/><RiSearch2Line className='text-2xl mr-2'/></div>
       </div>

       <div className='flex space-x-3 justify-center'>
       
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-full outline-none h-10 px-2 text-sm text-t3 rounded-md' placeholder='Select Stream'>
          <option>Engineering</option>
          <option>Medical</option>
          <option>Arts</option>
        </select>
        </div>
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-36 outline=none h-10 px-2 text-sm text-t3 ' placeholder='Select Course'>
          <option>BSC</option>
          <option>FA</option>
          <option>FSC</option>
        </select>
        </div>
       </div>
    </div>

       <div className='lg:grid hidden lg:grid-cols-3 grid-flow-row-dense mt-12 ml-10'>
        <CoursesCard courses={['MEDICAL','ENGINEERING','BITECHNOLOGY']}/>
        <CoursesCard/>
        <CoursesCard courses={['MEDICAL','ENGINEERING','BITECHNOLOGY']}/>
        <CoursesCard/>
        <CoursesCard courses={['MEDICAL','ENGINEERING','BITECHNOLOGY']}/>
       </div>
       <div className='flex flex-col lg:mt-20'>
        <h3 className='lg:flex hidden lg:justify-center text-center text-2xl font-semibold text-t1' >LIST OF POPULAR COURSES IN INDIA</h3>
       <div className='flex flex-col mt-10 mb-10 space-y-10 items-center'>
       <a href="http://localhost:5173/courses/about"><PopularCourseCard/></a>
       <a href="http://localhost:5173/courses/about"><PopularCourseCard/></a>
       <a href="http://localhost:5173/courses/about"><PopularCourseCard/></a>
       </div>
      </div>
     </div>
     </main>
    </div>
    </>
  )
}

export default Courses