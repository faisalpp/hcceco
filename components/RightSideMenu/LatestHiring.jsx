import React from 'react'
import { BsDot } from 'react-icons/bs'
import {RiAccountPinCircleLine} from 'react-icons/ri'


const LatestHiring = () => {
  return (
    <div id="wrapper" className='hidden lg:flex flex-col w-64 h-auto bg-white '>
    <div id="heading" className='flex items-center justify-center space-x-2 w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'><RiAccountPinCircleLine className='text-xl'/><span>LATEST HIRING</span></div>   
    {/* Announcement Link Card right Side home layout */}
    <div id="link-card" className='flex flex-col w-full mt-2 space-y-5 mb-5 '>
     
     {/* Annoucement Links Item */}
     <div id="link-item" className='flex items-center'>   
      <BsDot className='text-4xl text-t1'/>
      <div className='flex flex-col'>
       <a className='text-sm'>Apple reality pro May launch..</a>
      <div className='flex space-x-16 text-t2 text-xs'><span>Manpreet Kaur</span><span>19 Sep 22</span></div>
     </div>
    </div>
     {/* Annoucement Links Item */}
     <div id="link-item" className='flex items-center'>   
      <BsDot className='text-4xl text-t1'/>
      <div className='flex flex-col'>
       <a className='text-sm'>Apple reality pro May launch..</a>
      <div className='flex space-x-16 text-t2 text-xs'><span>Manpreet Kaur</span><span>19 Sep 22</span></div>
     </div>
    </div>
     {/* Annoucement Links Item */}
     <div id="link-item" className='flex items-center'>   
      <BsDot className='text-4xl text-t1'/>
      <div className='flex flex-col'>
       <a className='text-sm'>Apple reality pro May launch..</a>
      <div className='flex space-x-16 text-t2 text-xs'><span>Manpreet Kaur</span><span>19 Sep 22</span></div>
     </div>
    </div>
     {/* Annoucement Links Item */}
     <div id="link-item" className='flex items-center'>   
      <BsDot className='text-4xl text-t1'/>
      <div className='flex flex-col'>
       <a className='text-sm'>Apple reality pro May launch..</a>
      <div className='flex space-x-16 text-t2 text-xs'><span>Manpreet Kaur</span><span>19 Sep 22</span></div>
     </div>
    </div>


     {/* More Link */}
     <div id="more" className='text-t1 text-center text-xs underline'><a>Show More</a></div>
    </div>
  </div>
  )
}

export default LatestHiring