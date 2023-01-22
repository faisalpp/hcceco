import React from 'react'
import { FaBook } from 'react-icons/fa';
import { RiChat3Fill, RiGovernmentFill, RiStarFill } from 'react-icons/ri';
import { IoLocation } from 'react-icons/io5';


const CollegeInnerPageBanner = ({collegeName,state,city,rank,reviews,ugc,estd,img,logo}) => {
  return (
    <div className='relative w-full'>
     <div className='absolute lg:bg-t1/30 bg-t1/40 h-full w-full text-white'>
      <div className='absolute lg:left-20 left-3 lg:top-20 top-24'>
       <div className='flex items-center lg:space-x-10 space-x-2'>
        <img src={logo} className='lg:w-24 lg:h-24 w-16 h-16 rounded-full'/>
        <div className='flex flex-col'>
         <h3 className='text-[12px] lg:text-3xl font-bold'>{collegeName},{city}</h3>
        <div className='flex lg:space-x-10 space-x-3 lg:px-5 lg:text-xs text-[6px]'>
          <h3 className='flex items-center'><IoLocation className='mr-1'/> {city},{state}</h3>
          <h3 className='flex items-center'><FaBook className='mr-1'/> {ugc}</h3>
          <h3 className='flex items-center'><RiChat3Fill className='mr-1'/>  <span>{reviews}</span> Reviews</h3>
          <h3 className='flex items-center'><RiGovernmentFill className='mr-1'/>  {estd}</h3>
          <h3 className='flex items-center space-x-1'><RiStarFill className='mr-1'/> Ranked <span>{rank}</span> by</h3>
        </div>
       </div>  
      </div>
     </div> 
    </div> 
    <img src={img} className='lg:w-full w-96 h-52 lg:h-[237px]'/>
   </div>
  )
}

export default CollegeInnerPageBanner