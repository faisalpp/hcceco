import React from 'react'
import {RiHome3Line,RiGovernmentLine,RiEditLine,RiFileList3Line,RiArticleLine,RiGroup2Line,RiSearch2Line} from 'react-icons/ri'

const StudyGoals = () => {
  return (
    <div className='w-64 h-auto bg-white'>
          <div className='w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'>STUDY GOALS</div>
          <div className='flex flex-col w-full ml-10 mt-5 space-y-8 text-sm mb-5'>
            <div className='flex space-x-2 items-center cursor-pointer'><RiGovernmentLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Top Colleges</a></div>
            <div className='flex space-x-2 items-center cursor-pointer'><RiFileList3Line className='text-t2'/><a className='hover:text-t1 hover:underline'>Top Courses</a></div>
            <div className='flex space-x-2 items-center cursor-pointer'><RiArticleLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Top Exams</a></div>
            <div className='flex space-x-2 items-center cursor-pointer'><RiEditLine className='text-t2'/><NavLink to="/write-review" className='hover:text-t1 hover:underline'>Write A Review</NavLink></div>
          </div>
        </div>
  )
}

export default StudyGoals