import React,{useState} from 'react'
import { BsDot } from 'react-icons/bs';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const DropDown = ({degree}) => {
  const [drp,setDrp] = useState(false);
  return (
     <div className='flex flex-col items-center mt-5 mb-2 text-sm'>
     {drp ?<div onClick={()=>setDrp(false)} className='flex items-center  cursor-pointer'>
       <div className='flex items-center'><BsDot className='text-4xl text-t1'/><h3 className='w-36 hover:underline hover:text-t1'>{degree}</h3></div>
       <RiArrowDropUpLine className='text-2xl'/>
      </div>
       :
       <div onClick={()=>setDrp(true)} className='flex items-center cursor-pointer'>
       <div className='flex items-center'><BsDot className='text-4xl text-t1'/><h3 className='w-36 hover:underline hover:text-t1'>{degree}</h3></div>
       <RiArrowDropDownLine className='text-2xl'/>
      </div>
      }

     <div className={`${drp ? 'flex':'hidden'} flex-col text-t2/70 bg-white ml-6 h-auto mb-2 space-y-3 mt-2`}>
       <NavLink to="/colleges" className='hover:underline cursor-pointer'>{degree} Top Colleges</NavLink>
       <NavLink to="/courses" className='hover:underline cursor-pointer'>{degree} Courses</NavLink>
     </div>
    </div>
  )
}

export default DropDown