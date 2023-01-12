import React from 'react'
import 'flowbite/dist/flowbite.min.js';
import { BsDot } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DropDown = ({degree,setState,state}) => {

  return (
     <div className='flex flex-col ml-10 mt-5 text-sm'>
     <div onClick={()=>setState(false)} className='flex items-center space-x-24 cursor-pointer'>
      <div className='flex items-center'><BsDot className='text-2xl'/><h3 className='font-bold'>{degree}</h3></div>
       <RiArrowDropDownLine className='text-2xl'/>
     </div>
     <div onMouseLeave={()=>setState(true)} className={`${state ? 'hidden':'flex'} flex-col text-t2/70 bg-white ml-6 h-auto mb-2 space-y-3 mt-2  '`}>
       <a className='hover:underline cursor-pointer'>{degree} Top Colleges</a>
       <a className='hover:underline cursor-pointer'>{degree} Courses</a>
     </div>
    </div>
  )
}

export default DropDown