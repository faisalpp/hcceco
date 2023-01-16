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

const Courses = () => {
  return (
    <>
    <HeadMeta title="Courses"/>
    <Navbar/>
    <SearchBar/>
    <NotificationMenu/>
    <div className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 flex flex-col items-center'>
        <div className='flex bg-white w-60 mt-10 py-2 rounded-md text-xs px-2'><input type="search" placeholder='Search' className='border-none w-full'/><RiSearch2Line className='text-xl'/></div>
        <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
        <TrendingCoursesMenu/>
        <ChoseByDreamMenu/>       
      </div>
      <main className='col-start-4 col-end-13 w-full'>
       <div className='w-full bg-white h-auto'>
        <div className='flex flex-col items-center '>
         <div className='mt-10'><h3 className='text-t1 text-2xl font-semibold'>CHOSE BY YOUR LEVEL</h3></div> 
        </div>
       <div className='grid grid-cols-3 mt-12 ml-10'>
        <a href="http://localhost:5173/college/about"><CoursesCard/></a>
        <a href="http://localhost:5173/college/about"><CoursesCard/></a>
        <a href="http://localhost:5173/college/about"><CoursesCard/></a>
        <a href="http://localhost:5173/college/about"><CoursesCard/></a>
        <a href="http://localhost:5173/college/about"><CoursesCard/></a>
       </div>
       <div className='flex flex-col mt-20'>
        <h3 className='text-center text-2xl font-semibold text-t1' >LIST OF POPULAR COURSES IN INDIA</h3>
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