import React from 'react'
import CoursesCard from '../../../components/CoursesComponent/CoursesCard'
import PopularCourseCard from '../../../components/CoursesComponent/PopularCourseCard'
import SearchBar from '../../../components/SearchBar'
import SearchCard from '../../../components/SearchCard'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'

const Courses = () => {
  return (
    <>
    <SearchLayout>

    <HeadMeta title="Search Profile"/>
    <div className='flex flex-col space-y-16 bg-white py-10 items-center'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Courses</h3>
     <div className='flex flex-col space-y-10 w-10/12 items-center'>
      <PopularCourseCard/>
      <PopularCourseCard/>
     </div>  
    
    </div>
    </SearchLayout>
    </>
  )
}

export default Courses