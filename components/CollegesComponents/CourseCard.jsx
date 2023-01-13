import React, { useState } from 'react'
import { RiBookOpenFill, RiGovernmentLine, RiTimeFill,RiArticleLine, RiStarFill, RiMoonClearFill } from 'react-icons/ri'
import { FaGraduationCap, FaMoon, FaTimesCircle } from 'react-icons/fa'

const CourseCard = () => {

  const [showMore,setShowMore] = useState(false);

  return (
    <div className='flex flex-col mt-10 border-2 border-t3/30 py-5 px-5 w-full rounded-md space-y-5'>
      {/* Heading */}
      <div className='flex items-center space-x-10'>
        <h3 className='text-[16px]'>Bachelors of Computer Science &#40;B.Sc&#41; &#91;Microbiology&#93;</h3>
        <div className='flex items-center space-x-2 space-y-1 justify-center'><h3 className='text-sm'>Total Fees</h3><h3 className='text-xs text-t3'>&#8377;30,000</h3></div>
        <div>
         <select className='h-fit outline-none border-2 border-b3 w-18 rounded-md py-2'>
          <option>Gen</option>
          <option>SE</option>
          <option>ST</option>
          <option>NRI</option>
          <option>MGT</option>
         </select>
        </div>
      </div>

      {/* 2nd Row */}
      <div className='flex items-center space-x-10'>
       <div className='flex items-center space-x-2 text-sm'><RiTimeFill className='text-t1 text-sm'/><span>2 Yrs</span></div>
       <div className='flex items-center space-x-2 text-sm'><RiBookOpenFill className='text-t1 text-sm'/><span>Degree</span></div>
       <div className='flex items-center space-x-2 text-sm'><RiGovernmentLine className='text-t1 text-sm'/><span>On Campus</span></div>
       <div className='flex items-center space-x-2 text-sm'><FaGraduationCap className='text-t1 text-sm'/><span>Graduation</span></div>
       <div className='flex items-center space-x-2 text-sm'><FaMoon className='text-t1 text-sm'/><span>Full Time</span></div>
       <button className='text-sm rounded-md border-2 border-t3/50 px-2 py-1'>Apply Now</button>
      </div>
      
      {/* 3rd Row */}
      <div className='flex space-x-44'>
       <div className='flex space-x-10'>
        <div className='flex items-center space-x-3'> <h3 className='flex items-center text-t1 underline text-sm'><FaGraduationCap/>Eligibility</h3><h3 className='text-[13px]'>Graduation</h3></div>
        <div className='flex items-center space-x-3'><h3 className='flex items-center text-t1 underline text-sm'><RiArticleLine/>Exams Accepted</h3><h3 className='text-[13px]'>JE | JE | JE</h3></div>
       </div>
       <div className='flex text-sm items-center space-x-5'><div className='flex items-center'><RiStarFill className='text-t1 underline'/><span className='text-t1'>Rank</span></div><div className='flex items-center space-x-1'><span>0</span><span>by</span></div></div>
      </div>

      {/* Desription */}
      <div className='flex'>
        <div className='flex text-xs'>
         <span>11 Streams-</span>
         {/* Streams */}
         <div className='flex space-x-2'>
            <h3 className='border-r-2 border-t3 px-2'>Bilogical Science</h3>
            <h3 className='border-r-2 border-t3 px-2'>Bilogical Science</h3>
            <h3 className='border-r-2 border-t3 px-2'>Bilogical Science</h3>
            <h3 className='border-r-2 border-t3 px-2'>Bilogical Science</h3>
            <span className='text-green-500 cursor-pointer'>..View More</span>
         </div>
        </div>
      </div>

    </div>
  )
}

export default CourseCard