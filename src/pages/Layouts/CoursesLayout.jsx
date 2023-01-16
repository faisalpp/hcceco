import React from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'
import { RiSearch2Line } from 'react-icons/ri'
import TrendingCoursesMenu from '../../../components/CoursesComponent/SideBar/TrendingCoursesMenu'
import NotificationMenu from '../../../components/NotificationMenu'
import SearchBar from '../../../components/HomeComponents/SearchBar'

const CoursesLayout = ({children}) => {
  return (
    <>
    <HeadMeta title="Courses"/>
    <Navbar/>
    <SearchBar/>
    <NotificationMenu/>
    <main className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 flex flex-col items-center'>
        <div className='flex bg-white w-60 mt-10 py-2 rounded-md text-xs px-2'><input type="search" placeholder='Search' className='border-none w-full'/><RiSearch2Line className='text-xl'/></div>
        <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
        <TrendingCoursesMenu/>
      </div>
      <div className='col-start-4 col-end-13 w-full'>{children}</div>
     </main>
    </>
  )
}

export default CoursesLayout