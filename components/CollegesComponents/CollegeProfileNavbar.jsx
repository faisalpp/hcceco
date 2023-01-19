import React from 'react'
import { useLocation,NavLink } from 'react-router-dom'

const CollegeProfileNavbar = () => {

  const title = useLocation()

  return (
    <div className='flex mt-5 border-b-2 space-x-10'>
       <NavLink to="/college/edit-profile/s1"><h3 className={` ${title.pathname === "/college/edit-profile/s1" ? 'border-b-4 border-t1':'border-b-4 border-white'} hover:border-b-4 hover:border-t1 w-fit py-2`}>Profile</h3></NavLink>
       <NavLink to="/college/edit-profile/s2"><h3 className={` ${title.pathname === "/college/edit-profile/s2" ? 'border-b-4 border-t1':'border-b-4 border-white'} hover:border-b-4 hover:border-t1 w-fit py-2`}>College</h3></NavLink>
       <NavLink to="/college/edit-profile/s3"><h3 className={` ${title.pathname === "/college/edit-profile/s3" ? 'border-b-4 border-t1':'border-b-4 border-white'} hover:border-b-4 hover:border-t1 w-fit py-2`}>Course</h3></NavLink>
       <NavLink to="/college/edit-profile/s4"><h3 className={` ${title.pathname === "/college/edit-profile/s4" ? 'border-b-4 border-t1':'border-b-4 border-white'} hover:border-b-4 hover:border-t1 w-fit py-2`}>CMS</h3></NavLink>
       <NavLink to="/college/edit-profile/s5"><h3 className={` ${title.pathname === "/college/edit-profile/s5" ? 'border-b-4 border-t1':'border-b-4 border-white'} hover:border-b-4 hover:border-t1 w-fit py-2`}>Review</h3></NavLink>
      </div>
  )
}

export default CollegeProfileNavbar