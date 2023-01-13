import React from 'react'
import CourseCard from '../../../components/CollegesComponents/CourseCard'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import CoursesSideBar from '../../../components/CollegesComponents/CoursesSideBar'

const AllCourses = () => {
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
      <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'><CoursesSideBar/></div>
      <div className='col-start-4 col-end-13 bg-white'>
       <div className='flex flex-col px-10 w-full'>
        <h3 className='text-t1 mt-10 text-[20px] mb-5'>Courses & Fees</h3>
        {/* Coures Filter */}
        <div className='flex space-x-10 border-b-4 border-t3/10 w-fit'>
          <h3 className='text-t3/50 hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>All</h3>
          <h3 className='text-t3/50 hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Lateral</h3>
          <h3 className='text-t3/50 hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Honours</h3>
          <h3 className='text-t3/50 hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Part Time</h3>
          <h3 className='text-t3/50 hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Full Time</h3>
        </div>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
       </div>
      </div>
     </div>
    </CollegeInnerPageLayout>
  )
}

export default AllCourses