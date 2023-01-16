import React from 'react'
import CourseCard from '../../../components/CollegesComponents/CourseCard'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import { NavLink ,useLocation} from 'react-router-dom'

const AllCourses = () => {
  const title = useLocation()
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
      <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
       {/* Courses Links SideBar */}
       <div className='flex flex-col py-5 bg-white h-screen mb-10 rounded-md mt-7'>
        <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>B.ED</h3></div></NavLink>
        <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>B.MLT</h3></div></NavLink>
        <NavLink to="/college/courses/med"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>M.ED</h3></div></NavLink>
        <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>BCS</h3></div></NavLink>
       </div>
      
      </div>
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