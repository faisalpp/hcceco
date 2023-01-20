import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const SearchNavigation = () => {
    const title = useLocation();
  return (
    <>
    {/* Mobile Navigation */}
    <div className='lg:hidden flex mt-5 px-6 w-80 border-b-2 py-3 overflow-scroll space-x-5'>
    <NavLink to="/search/all" ><h3 className={`${title.pathname === "/search/all"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>All</h3></NavLink>
    <NavLink to="/search/profiles/all"><h3 className={`${title.pathname.startsWith("/search/profiles")?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Profiles</h3></NavLink>
    <NavLink to="/search/posts"><h3 className={`${title.pathname === "/search/posts"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Posts</h3></NavLink>
    <NavLink to="/search/hirings"><h3 className={`${title.pathname === "/search/hirings"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Hirings</h3></NavLink>
    <NavLink to="/search/announcements"><h3 className={`${title.pathname === "/search/announcements"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Announcements</h3></NavLink>
    <NavLink to="/search/question"><h3 className={`${title.pathname === "/search/questions"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Questions</h3></NavLink>
    <NavLink to="/search/services"><h3 className={`${title.pathname === "/search/services"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Services</h3></NavLink>
    <NavLink to="/search/colleges"><h3 className={`${title.pathname === "/search/colleges"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Colleges</h3></NavLink>
    <NavLink to="/search/courses"><h3 className={`${title.pathname === "/search/courses"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Courses</h3></NavLink>
    <NavLink to="/search/exams"><h3 className={`${title.pathname === "/search/exams"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Exams</h3></NavLink>
    <NavLink to="/search/corporate"><h3 className={`${title.pathname === "/search/corporate"?'border-b-2 border-t1 text-black':'text-t3/50'}`}>Corporate</h3></NavLink>
    </div>
    </>
  )
}

export default SearchNavigation