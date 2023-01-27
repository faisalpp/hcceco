import React from 'react'
import { NavLink } from 'react-router-dom'

const CoursePill = ({number,degree}) => {
  return (
    <>
    <NavLink to="/course/about"><div className='flex ml-2 items-center text-t1 mt-3 cursor-pointer text-[9px] border-t1'>
    <span className='px-2 bg-t1/20 border-l-2 border-b-2 border-t-2 border-t1 rounded-l-md'>{number}</span>
    <span className='px-2 bg-white border-r-2 border-b-2 border-t-2 border-t1 rounded-r-md'>{degree}</span>
    </div></NavLink>
    </>
  )
}

export default CoursePill