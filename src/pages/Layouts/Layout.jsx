import React from 'react'
import Navbar from '../../../components/Navbar'
import StudyGoals from '../../../components/LeftSideMenus/StudyGoals'
import LatestAnnouncement from '../../../components/RightSideMenu/LatestAnnouncement'
import LearningLinks from '../../../components/LeftSideMenus/LearningLinks'
import LatestHiring from '../../../components/RightSideMenu/LatestHiring'
import QuickLinks from '../../../components/LeftSideMenus/QuickLinks'
import HccecoLinks from '../../../components/RightSideMenu/HccecoLinks'
import NotificationMenu from '../../../components/NotificationMenu'
import SearchBar from '../../../components/HomeComponents/SearchBar'
import HeadMeta from '../../HeadMeta'

const Layout = ({children}) => {
  return (
    <>
     <HeadMeta title="Home"/>
    <Navbar/>
     <NotificationMenu/>
     <SearchBar/>
     <main className='grid lg:grid-cols-12 grid-flow-row-dense mt-2'>
     <div className='col-start-1 col-end-4 flex flex-col w-full items-center py-10 space-y-5'>
        <StudyGoals/>
        <LearningLinks/>
        <QuickLinks/>
     </div>
     <div className='lg:col-start-4 lg:col-end-10 h-auto mb-10 bg-white lg:w-full w-screen'>{children}</div>    
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