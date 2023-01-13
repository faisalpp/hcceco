import React from 'react'
import HomeCard from '../../../components/HomeComponents/HomeCard'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import AnnouncementSideBar from '../../../components/CollegesComponents/AnnouncementSideBar'

const Announcements = () => {
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
     <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'><AnnouncementSideBar/></div>
      <div className='col-start-4 col-end-13 bg-white'>
       <div className='mt-10'>
         <HomeCard/>
       </div>
      </div>
     </div>    
    </CollegeInnerPageLayout>
  )
}

export default Announcements