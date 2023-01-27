import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CoursePill from './CoursePill';

const CoursesCard = ({courses}) => {
    return (
    <div className='flex flex-col shadow-xl w-[290px] h-64 mt-10 ml-3 rounded-b-md'>
     <NavLink to="/college/about"><img src="/public/college.jpg" className='w-full h-auto rounded-t-md'/></NavLink>
     {/* IF course state true Course Pill Show Else No Degree */}
     {courses ? <div className='flex flex-wrap'>
      {courses.map((course,index)=><CoursePill key={index} number={index} degree={course} />)}
     </div> :
     <div className="flex flex-col justify-center items-center h-full w-full">
      <h3 className='font-bold'>No Courses Available</h3>
     </div>
     }
    </div>
  )
}

export default CoursesCard