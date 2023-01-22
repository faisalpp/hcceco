import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'

import HomeCard from '../../../components/HomeComponents/HomeCard'
import PopularCourseCard from '../../../components/CoursesComponent/PopularCourseCard'

const Hiring = () => {

  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Courses</h3></div>
       <SearchNavigation/>
       <h3 className='lg:hidden mt-5 px-5 text-xl text-t1 underline'>Courses</h3>
       <div className='flex flex-col lg:mt-20 mt-5 items-center space-y-5 mb-10'>
        <PopularCourseCard/>
        <PopularCourseCard/>
        <PopularCourseCard/>
       </div>

      </div>
     </div>
    </>
  )
}

export default Hiring