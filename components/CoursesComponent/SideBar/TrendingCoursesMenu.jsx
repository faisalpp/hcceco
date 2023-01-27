import React from 'react'

const TrendingCoursesMenu = ({courses}) => {
  return (
    <>
     {/* Trending Course Menu */}
     <div className='bg-white w-72 mt-5 h-auto'>
     <h3 className='text-[17px] font-bold border-l-4 border-green-500 h-10 py-2 px-2'>TRENDING COURSES</h3>
     {/* Capsule */}
     <div className='flex flex-col w-full mb-10 h-auto'>
      {courses ? <div className='flex flex-wrap w-full h-auto px-2 space-x-2'>
      {courses.map((course,index)=><span key={index} className=' mt-2 w-fit h-fit border-2 border-t1 rounded-xl px-2 text-[9px]'>{course}</span>)}
      </div>:<h3 className='text-center text-sm mt-2 text-t1'>No Courses Available</h3>}   
     </div>        
   </div>
    </>
  )
}

export default TrendingCoursesMenu