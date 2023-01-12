import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import avtar from '../../src/images/avtar.png'


const PostEvent = () => {
  
  return (
    <>
    <div className='flex items-center space-x-5 justify-center'>
      {/* Post Event Button */}
      <div className='flex flex-col items-center space-y-3'>
       <BsPlusSquareFill className='text-t1 text-2xl'/>
       <h3 className='text-sm'>Post an Event</h3>
      </div>
       {/* All Events Button */}
       
       {/* Event Card */}
        <div className='relative w-42 h-36'>
         <div className='absolute top-1 z-10  text-center  text-white'><span className='ml-1 text-xs hover:underline cursor-pointer '>Manika</span><span className='relative top-1 left-14 bg-t3 w-5 h-5 px-1 py-1 rounded-full text-[10px]'>+5</span></div>
          <img id="avtar" src={avtar} className='brightness-50 w-32 h-32 rounded-md'/>
        </div>
        {/* Event Card END */}
       {/* Event Card */}
        <div className='relative w-42 h-36'>
         <div className='absolute top-1 z-10  text-center  text-white'><span className='ml-1 text-xs hover:underline cursor-pointer '>Manika</span><span className='relative top-1 left-14 bg-t3 w-5 h-5 px-1 py-1 rounded-full text-[10px]'>+5</span></div>
          <img id="avtar" src={avtar} className='brightness-50 w-32 h-32 rounded-md'/>
        </div>
        {/* Event Card END */}
       {/* Event Card */}
        <div className='relative w-42 h-36'>
         <div className='absolute top-1 z-10  text-center  text-white'><span className='ml-1 text-xs hover:underline cursor-pointer '>Manika</span><span className='relative top-1 left-14 bg-t3 w-5 h-5 px-1 py-1 rounded-full text-[10px]'>+5</span></div>
          <img id="avtar" src={avtar} className='brightness-50 w-32 h-32 rounded-md'/>
        </div>
        {/* Event Card END */}
    </div>
    </>
  )
}

export default PostEvent