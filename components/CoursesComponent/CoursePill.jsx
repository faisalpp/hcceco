import React from 'react'

const CoursePill = ({number,degree}) => {
  return (
    <div className='flex ml-2 items-center text-t1 mt-3 text-[9px] border-t1'>
    <span className='px-2 bg-t1/20 border-l-2 border-b-2 border-t-2 border-t1 rounded-l-md'>{number}</span>
    <span className='px-2 bg-white border-r-2 border-b-2 border-t-2 border-t1 rounded-r-md'>{degree}</span>
   </div>
  )
}

export default CoursePill