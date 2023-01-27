import React from 'react'
import { useRef } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


const SerchFilter = ({filterName,streams}) => {
  const ref = useRef();

  const scrollRight = () => {
    ref.current.scrollLeft += 30;
  }

  return (
     <div className='flex bg-t2/20 w-11/12 mt-10 rounded-lg h-fit items-center'>
     <div className='flex flex-col justify-center h-full border-r-2 border-t3/40 px-2 py-5'><h3 className='text-sm w-28'>SELECT {filterName}</h3></div>

   <div ref={ref} className='flex items-center w-9/12 overflow-hidden'>
     <form className='flex px-5 space-x-5 w-full'>
      {streams.map((stream)=><div key={stream} className='bg-white px-3 py-2 rounded-lg text-xs'>{stream}</div>)}
     </form>
     <div onClick={()=>scrollRight()} className='absolute cursor-pointer right-10 bg-t1/20 rounded-full mr-5'><RiArrowRightSLine className='text-3xl text-t1'/></div>
     </div>  
   
   </div>
  )
}

export default SerchFilter