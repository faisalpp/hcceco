import React from 'react'
import { BsDot } from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import {HiSpeakerphone} from 'react-icons/hi'

const LatestAnnouncement = () => {
  
  const data = [{'title':'Apple reality pro May launch','name':'Manpreet Kaur','date':'19 Sep 22'},{'title':'Apple reality pro May launch','name':'Manpreet Kaur','date':'28 Jun 23'},{'title':'Sub assistant post available','name':'Faisal','date':'28 Nov 23'},{'title':'Senior vise president post available','name':'Faisal','date':'28 Nov 23'}]
  
  return (
    <div id="wrapper" className='hidden lg:flex flex-col w-64 h-auto bg-white '>
    <div id="heading" className='flex items-center justify-center space-x-2 w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'><HiSpeakerphone className='text-xl'/><span>LATEST ANNOUNCEMENT</span></div>   
    {/* Announcement Link Card right Side home layout */}
    <div id="link-card" className='flex flex-col w-full mt-2 space-y-5 mb-5 '>
     
     {/* Annoucement Links Item */}
     { data.map((item,index)=><div key={index} className='flex items-center'>   
      <BsDot className='text-4xl text-t1'/>
      <div className='flex flex-col'>
       <a className='text-sm hover:underline hover:text-blue-200 ease-out delay-100 cursor-pointer truncate overflow-hidden w-52'>{item.title}</a>
      <div className='flex space-x-16 text-t2 text-xs'><span>{item.name}</span><span>{item.date}</span></div>
     </div>
    </div>)}

     {/* More Link */}
     <div id="more" className='text-t1 text-center text-xs underline'><NavLink to="/latest-announcements">Show More</NavLink></div>
    </div>
  </div>
  )
}

export default LatestAnnouncement