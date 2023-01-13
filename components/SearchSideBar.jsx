import React from 'react'
import { RiArtboard2Fill, RiArticleLine, RiClipboardFill, RiGovernmentFill, RiGroup2Fill, RiPagesLine, RiQuestionFill, RiSpeaker2Fill, RiSpeaker3Fill, RiSpeakerFill, RiUser2Fill, RiUser3Fill, RiUserSharedLine } from 'react-icons/ri'

const SearchSideBar = () => {
  return (
    <div className='flex flex-col items-ceter py-5 w-52 mt-10 bg-white h-fit '>
     
     {/* Profile Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center cursor-pointer space-x-2 px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiUser3Fill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Profiles</h3></div>
     </div>
     {/* Posts Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiArticleLine className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Posts</h3></div>
     </div>
     {/* Hiring Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiUser2Fill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Hiring</h3></div>
     </div>
     {/* Announcements Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiSpeakerFill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Announcements</h3></div>
     </div>
     {/* Questions Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiQuestionFill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Questions</h3></div>
     </div>
     {/* Offer Services Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiArtboard2Fill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Offer Services</h3></div>
     </div>
     {/* Colleges Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiGovernmentFill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Colleges</h3></div>
     </div>
     {/* Courses Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiPagesLine className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Courses</h3></div>
     </div>
     {/* Exams Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiClipboardFill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Exams</h3></div>
     </div>
     {/* Corporate Tab Link */}
     <div className='border-l-4 border-white hover:border-t1 w-full'>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiGroup2Fill className='text-t3/40 group-hover:text-t1 text-sm'/><h3>Corporate</h3></div>
     </div>

    </div>
  )
}

export default SearchSideBar