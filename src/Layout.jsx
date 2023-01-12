import React from 'react'
import Navbar from '../components/Navbar'
import StudyGoals from '../components/LeftSideMenus/StudyGoals'
import LatestAnnouncement from '../components/RightSideMenu/LatestAnnouncement'
import LearningLinks from '../components/LeftSideMenus/LearningLinks'
import LatestHiring from '../components/RightSideMenu/LatestHiring'
import QuickLinks from '../components/LeftSideMenus/QuickLinks'
import HccecoLinks from '../components/RightSideMenu/HccecoLinks'
import NotificationMenu from '../components/NotificationMenu'
import SearchBar from '../components/HomeComponents/SearchBar'
import { Helmet } from 'react-helmet-async'

const Layout = ({children}) => {
  return (
    <>
    <Helmet>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>Home</title>
    </Helmet>
    <Navbar/>
     <main className='hidden lg:grid lg:grid-cols-12 mt-2'>
     <NotificationMenu/>
     <SearchBar/>
     <div className='col-start-1 col-end-4 flex flex-col w-full items-center bg-green-5000 py-10 space-y-5'>
        <StudyGoals/>
        <LearningLinks/>
        <QuickLinks/>
     </div>
     <div className='col-start-4 col-end-10 h-auto mb-10 w-full bg-white'>{children}</div>    
     <div className='col-start-11 col-end-12 flex flex-col w-full items-center bg-green-5000 py-10 space-y-5'>
        <LatestAnnouncement/>
        <LatestHiring/>
        <HccecoLinks/>
     </div>
     </main>
    </>
    )
}

export default Layout