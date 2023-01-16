import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


const SerchFilter = ({filterName,streams}) => {
  return (
     <div className='flex bg-t2/20 w-4/5 mt-10 rounded-lg h-fit items-center'>
     <div className='flex flex-col justify-center h-full border-r-2 border-t3/40 px-2 py-5'><h3 className='text-sm w-28'>SELECT {filterName}</h3></div>

   <div className='flex items-center w-full'>
     <form className='flex px-5 space-x-5 w-full'>
      {streams.map((stream)=><div key={stream} className='bg-white px-3 py-2 rounded-lg text-xs'>{stream}</div>)}
     </form>
     <div className='bg-t1/20 rounded-full mr-5'><RiArrowRightSLine className='text-3xl text-t1'/></div>
   
     </div>  
   
   </div>
  )
}

export default SerchFilter