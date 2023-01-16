import React, { useState } from 'react'
import CoursePill from './CoursePill';

const CoursesCard = () => {
  const [courses,setCourses] = useState(false);
    return (
    <div className='flex flex-col shadow-xl w-[290px] h-64 mt-10 ml-3 rounded-b-md'>
     <img src="/public/college.jpg" className='w-full h-auto rounded-t-md'/>
     {/* IF course state true Course Pill Show Else No Degree */}
     {courses ? <div className='grid grid-cols-3 mb-10'>
      <CoursePill number="07" degree="MEDICAL" />
      <CoursePill number="07" degree="MEDICAL" />
      <CoursePill number="07" degree="MEDICAL" />
      <CoursePill number="07" degree="MEDICAL" />
     </div> :
     <div className="flex flex-col justify-center items-center h-full w-full">
      <h3 className='font-bold'>No Courses Available</h3>
     </div>
     }
    </div>
  )
}

export default CoursesCard