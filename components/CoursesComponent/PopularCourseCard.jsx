import React from 'react'
import { RiArrowDropRightFill, RiVipDiamondFill } from 'react-icons/ri'

const PopularCourseCard = () => {
  return (
    <div className='flex flex-col bg-b3/40 w-10/12 h-auto px-20'>
     {/* 1st row */}
     <div className='flex space-x-16 mt-10'>
      <div><h3 className='text-base font-bold'>Bachelors of Scicence &#91;BSC&#93; &#40;Microbiology&#41;</h3></div>
      <div className='flex space-x-10'>
        <div className='flex flex-col items-center'><h3 className='flex items-center text-sm font-bold'><RiVipDiamondFill className='text-green-500'/>Average Fees</h3><h3 className='text-xs'>&#8377; 30,000</h3></div>
        <div className='flex flex-col items-center'><h3 className='flex items-center text-sm font-bold'><RiVipDiamondFill className='text-red-500'/> Average Salary</h3><h3 className='text-xs'>&#8377; 30,000</h3></div>
      </div>
     </div>
     {/* 2nd row */}
     <div className='flex space-x-10 mt-5 mb-10 space-y-5'>
      <div className='flex mt-5 space-x-10'>
       <h3 className='flex items-center text-xs underline text-t1 cursor-pointer'>Overview <RiArrowDropRightFill className='text-xl'/></h3>
       <h3 className='flex items-center text-xs underline text-t1 cursor-pointer'>Entrance Exam <RiArrowDropRightFill className='text-xl'/></h3>
       <h3 className='flex items-center text-xs underline text-t1 cursor-pointer'>Carrier Options <RiArrowDropRightFill className='text-xl'/></h3>
      </div>
      <div className='flex border-2 border-t1 text-sm px-5 rounded-md py-2'><h3 className='hover:text-t1 hover:underline cursor-pointer'>12 Colleges Offering This Course</h3></div>
     </div>
    


    </div>
  )
}

export default PopularCourseCard