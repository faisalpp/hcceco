import React from 'react'
import PopularCourseCard from '../../components/CoursesComponent/PopularCourseCard'
import CoursesCard from '../../components/CoursesComponent/CoursesCard'
import HeadMeta from '../HeadMeta';
import Navbar from '../../components/Navbar';
import { RiSearch2Line } from 'react-icons/ri';
import TrendingCoursesMenu from '../../components/CoursesComponent/SideBar/TrendingCoursesMenu';
import ChoseByDreamMenu from '../../components/CoursesComponent/SideBar/ChoseByDreamMenu';
import MobileFloats from './MobileFloats';


const CoursesSearch = () => {
  return (
   <>
    <HeadMeta title="Courses"/>
    <Navbar/>
    <MobileFloats/>
    <div className='lg:grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 lg:flex hidden flex-col items-center'>
        <form action='/search' method='post' className='flex bg-white w-60 mt-10 py-2 rounded-md text-xs px-2'><input type="search" placeholder='Search' className='border-none w-full'/><RiSearch2Line className='text-xl'/></form>
        <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
        <TrendingCoursesMenu/>
        <ChoseByDreamMenu/>       
      </div>
      <main className='col-start-4 col-end-13 w-full'>
       <div className='w-full bg-white h-auto'>
       <div className='flex flex-col'>
        <h3 className='text-center mt-10 lg:text-2xl text-sm font-semibold text-t1' >LIST OF POPULAR COURSES IN INDIA</h3>
       <div className='flex flex-col mt-10 mb-10 px-10 space-y-10 items-center'>
        <PopularCourseCard/>
        <PopularCourseCard/>
        <PopularCourseCard/>
       </div>
      </div>
     </div>
     </main>
    </div>
    </>
  )
}

export default CoursesSearch