import React from 'react'
import CollegesSideBar from '../../../components/CollegesComponents/CollegesSideBar'
import Navbar from '../../../components/Navbar'
import NotificationMenu from '../../../components/NotificationMenu'
import SearchBar from '../../../components/HomeComponents/SearchBar'
import ShareCollege from '../../../components/CollegesComponents/ShareCollege'
import HeadMeta from '../../HeadMeta'

const LayoutColleges = ({children}) => {
  return (
    <>
    {/* Helmet to insert title in head tag */}
    <HeadMeta title="Colleges"/>
    {/* Share College Popup */}
    <ShareCollege/>
    {/* Main Navbar */}
     <Navbar/>
     {/* Main Notification Menu */}
     <NotificationMenu/>
     
     {/* Main Search Bar */}
        <SearchBar/>

     <div className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 w-full'><CollegesSideBar /></div>
      <main className='col-start-4 col-end-13 w-full'>{children}</main>
     </div>
    </>
  )
}

export default LayoutColleges