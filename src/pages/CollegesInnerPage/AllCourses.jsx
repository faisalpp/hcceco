import React from 'react'
import CourseCard from '../../../components/CollegesComponents/CourseCard'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeInnerSidebar from '../../../components/CollegesComponents/CollegeInnerSideBar'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'

const AllCourses = () => {
  return (
    <>
    <HeadMeta title="College About"/>
    <Navbar/>
    <div className='w-full lg:px-20 bg-b4 h-screen'>
      <CollegeInnerPageBanner collegeName="A.G COLLEGE OF EDUCATION" city="COIMBATOR" state="Tamil Nadu" ugc="UGC" reviews="24" estd="ESTD" rank="2" img="https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1" logo="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"/>
      {/* News Ticker */}
      <Ticker data={['Announcement will show here Announcement will show here ','|',' Announcement will show here Announcement will show here']}/>
      <CollegeNavigation/>
      <div className='lg:grid lg:grid-cols-12 flex flex-col'>
       <CollegeInnerSidebar/>
       <div className='lg:col-start-4 lg:col-end-13 flex w-full bg-white lg:px-0 px-5'>
       <div className='flex flex-col lg:px-10 w-full'>
        <h3 className='text-t1 mt-10 text-[20px] mb-5'>Courses & Fees</h3>
        {/* Coures Filter */}
        <div className='flex space-x-10 border-b-4 border-t3/10 lg:w-fit w-80 overflow-scroll lg:overflow-x-hidden lg:overflow-y-hidden'>
          <h3 className='text-t3/50 text-sm hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>All</h3>
          <h3 className='text-t3/50 text-sm hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Lateral</h3>
          <h3 className='text-t3/50 text-sm hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Honours</h3>
          <h3 className='text-t3/50 text-sm hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Part Time</h3>
          <h3 className='text-t3/50 text-sm hover:text-black py-3 border-b-4 hover:border-t1 border-white cursor-pointer'>Full Time</h3>
        </div>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
       </div>
      </div>
     </div>
     </div>
     </>
  )
}

export default AllCourses