import React from 'react'
import { RiArrowDropRightFill, RiVipDiamondFill } from 'react-icons/ri'

const PopularCourseCard = () => {
  return (
    <div className='flex flex-col bg-b3/40 lg:w-full w-80 h-auto lg:px-20 px-5'>
     {/* 1st row */}
     <div className='flex lg:flex-row flex-col lg:space-x-16 space-y-3 items-center lg:mt-10 mt-5'>
      <div className='flex lg:flex-row flex-col items-center'>
        <h3 className='text-base lg:text-black text-t1 font-bold'>Bachelors of Scicence</h3>
        <div className='flex'><h3 className='lg:text-base text-[10px] font-bold'>&#91;BSC&#93;</h3><h3 className='lg:text-base text-[10px] font-bold'>&#40;Microbiology&#41;</h3></div>
        <div className='lg:hidden flex items-center text-[10px] mt-2 space-x-3'><h3 className='flex items-center'><RiVipDiamondFill className='text-green-500'/> 3 Yrs</h3><h3 className='flex items-center' ><RiVipDiamondFill className='text-green-500'/> Full Time</h3></div>
        <a className='lg:hidden text-center text-[10px] mt-2 underline text-t1'>12 Colleges Offering This Course</a>
      </div>
      <div className='flex lg:space-x-10 space-x-16'>
        <div className='flex flex-col items-center'><h3 className='flex items-center lg:text-sm text-[10px] font-bold'><RiVipDiamondFill className='lg:flex hidden text-green-500'/>Average Fees</h3><h3 className='lg:text-xs text-[10px]'>&#8377; 30,000</h3></div>
        <div className='flex flex-col items-center'><h3 className='flex items-center lg:text-sm text-[10px] font-bold'><RiVipDiamondFill className='lg:flex hidden text-red-500'/> Average Salary</h3><h3 className='lg:text-xs text-[10px]'>&#8377; 30,000</h3></div>
      </div>
     </div>
     {/* 2nd row */}
     <div className='flex lg:flex-row items-center flex-col space-x-10 mt-5 mb-10 space-y-5'>
      <div className='flex lg:mt-5 lg:space-x-10 space-x-6'>
       <h3 className='flex items-center lg:text-xs text-[10px] underline text-t1 cursor-pointer'>Overview <RiArrowDropRightFill className='lg:visible hidden text-xl'/></h3>
       <h3 className='flex items-center lg:text-xs text-[10px] underline text-t1 cursor-pointer'>Entrance Exam <RiArrowDropRightFill className='lg:visible hidden text-xl'/></h3>
       <h3 className='flex items-center lg:text-xs text-[10px] underline text-t1 cursor-pointer'>Carrier Options <RiArrowDropRightFill className='lg:visible hidden text-xl'/></h3>
      </div>
      <button className='lg:flex hidden border-2 border-t1 text-sm px-5 rounded-md py-2'><h3 className='hover:text-t1 hover:underline cursor-pointer'>12 Colleges Offering This Course</h3></button>
     </div>
    


    </div>
  )
}

export default PopularCourseCard