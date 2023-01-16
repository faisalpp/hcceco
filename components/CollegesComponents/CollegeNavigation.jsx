import React,{useEffect} from 'react'
import { useLocation,NavLink } from 'react-router-dom'

const CollegeNavigation = () => {
  const title = useLocation();
  return (
    <div className='flex bg-b1 text-white justify-center space-x-7 rounded-b px-3'>
    <NavLink to="/college/about"><h3 className={`${title.pathname.startsWith('/college/about') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>About</h3></NavLink>
    <NavLink to="/college/all-courses"><h3 className={`${title.pathname === '/college/all-courses' ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Courses & Fees</h3></NavLink>
    <NavLink to="/college/announcements"><h3 className={`${title.pathname.includes('/college/announcements') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Announcements</h3></NavLink>
    <NavLink to="/college/admission"><h3 className={`${title.pathname === '/college/admission' ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Admission</h3></NavLink>
    <NavLink to="/college/reviews"><h3 className={`${title.pathname.includes('/college/reviews') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Reviews</h3></NavLink>
    <NavLink to="/college/distance-education"><h3 className={`${title.pathname.includes('/college/distance-education') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Distance Education</h3></NavLink>
    <NavLink to="/college/placements"><h3 className={`${title.pathname.includes('/college/placements') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Placements</h3></NavLink>
    <NavLink to="/college/scholership"><h3 className={`${title.pathname.includes('/college/scholership') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Scholership</h3></NavLink>
    <NavLink to="/college/faq"><h3 className={`${title.pathname.includes('/college/faq') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>FAQ</h3></NavLink>
  </div>
  )
}

export default CollegeNavigation