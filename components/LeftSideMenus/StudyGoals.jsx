import React from 'react'
import {RiGovernmentLine,RiEditLine,RiFileList3Line,RiArticleLine} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import {FaBook} from 'react-icons/fa'

const StudyGoals = () => {
  return (
    <div className='hidden lg:flex flex-col w-64 h-auto bg-white'>
          <div className='flex items-center justify-center space-x-2 w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'><FaBook/><span>STUDY GOALS</span></div>
          <div className='flex flex-col w-full ml-10 mt-5 space-y-8 text-sm mb-5'>
           <div className='flex space-x-2 items-center cursor-pointer'><RiGovernmentLine className='text-t2'/><NavLink to="/colleges" className='hover:text-blue-200 ease-out delay-100 hover:underline'>Top Colleges</NavLink></div>
           <div className='flex space-x-2 items-center cursor-pointer'><RiFileList3Line className='text-t2'/><NavLink to="/courses" className='hover:text-blue-200 ease-out delay-100 hover:underline'>Top Courses</NavLink></div>
           <div className='flex space-x-2 items-center cursor-pointer'><RiArticleLine className='text-t2'/><NavLink to="/exams" className='hover:text-blue-200 ease-out delay-100 hover:underline'>Top Exams</NavLink></div>
           <div className='flex space-x-2 items-center cursor-pointer'><RiEditLine className='text-t2'/><NavLink to="/write-review" className='hover:text-blue-200 ease-out delay-100 hover:underline'>Write A Review</NavLink></div>
          </div>
        </div>
  )
}

export default StudyGoals