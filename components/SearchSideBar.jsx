import React from 'react'
import { RiArtboard2Fill, RiArticleLine, RiClipboardFill, RiGovernmentFill, RiGroup2Fill, RiPagesLine, RiQuestionFill, RiSpeaker2Fill, RiSpeaker3Fill, RiSpeakerFill, RiUser2Fill, RiUser3Fill, RiUserSharedLine } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'

const SearchSideBar = () => {

  const title = useLocation()

  return (
    <div className='flex flex-col items-ceter py-5 w-52 mt-10 bg-white h-fit '>
     
     {/* Profile Tab Link */}
     <NavLink to="/search/profiles/all"><div className={` ${title.pathname.startsWith("/search/profile") ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiUser3Fill className={`${title.pathname.startsWith("/search/profile")?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Profiles</h3></div></div></NavLink>
     {/* Posts Tab Link */}
     <NavLink to="/search/posts"><div className={` ${title.pathname === "/search/posts" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiArticleLine className={`${title.pathname === "/search/posts"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Posts</h3></div></div></NavLink>
     {/* Hiring Tab Link */}
     <NavLink to="/search/hirings"><div className={` ${title.pathname === "/search/hirings" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiUser2Fill className={`${title.pathname === "/search/hirings"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Hiring</h3></div></div></NavLink>
     {/* Announcements Tab Link */}
     <NavLink to="/search/announcements"><div className={` ${title.pathname === "/search/announcements" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiSpeakerFill className={`${title.pathname === "/search/announcements"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Announcements</h3></div></div></NavLink>
     {/* Questions Tab Link */}
     <NavLink to="/search/questions"><div className={`${title.pathname === "/search/questions" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiQuestionFill className={`${title.pathname === "/search/questions"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Questions</h3></div></div></NavLink>
     {/* Offer Services Tab Link */}
     <NavLink to="/search/services"><div className={`${title.pathname === "/search/services" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiArtboard2Fill className={`${title.pathname === "/search/services"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Offer Services</h3></div></div></NavLink>
     {/* Colleges Tab Link */}
     <NavLink to="/search/colleges"><div className={` ${title.pathname === "/search/colleges" ? 'border-l-4 bg-t1/40 border-t1 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiGovernmentFill className={`${title.pathname === "/search/colleges"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Colleges</h3></div></div></NavLink>
     {/* Courses Tab Link */}
     <NavLink to="/search/courses"><div className={`${title.pathname === "/search/courses" ? 'border-l-4 border-t1 bg-t1/40 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}><div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiPagesLine className={`${title.pathname === "/search/courses"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Courses</h3></div></div></NavLink>
     {/* Exams Tab Link */}
     <NavLink to="/search/exams"><div className={` ${title.pathname === "/search/exams" ? 'border-l-4 bg-t1/40 border-t1 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiClipboardFill className={`${title.pathname === "/search/exams"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Exams</h3></div>
     </div></NavLink>
     {/* Corporate Tab Link */}
     <NavLink to="/search/corporate"><div className={`${title.pathname === "/search/corporate" ? 'border-l-4 bg-t1/40 border-t1 [&>*]:text-t1':null} border-l-4 border-white hover:border-t1 w-full`}>
      <div className='flex items-center space-x-2 cursor-pointer px-5 py-2 hover:bg-t1/40 hover:text-t1 w-full group'><RiGroup2Fill className={`${title.pathname === "/search/corporate"?'text-t1':'text-t3/40'} group-hover:text-t1 text-sm`}/><h3>Corporate</h3></div>
     </div></NavLink>

    </div>
  )
}

export default SearchSideBar