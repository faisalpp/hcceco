import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import { useLocation } from 'react-router-dom'
import HomeCard from '../../../components/HomeComponents/HomeCard'

const ProfileAll = () => {
  const title = useLocation()
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Posts</h3></div>
       <SearchNavigation/>
       <h3 className='lg:hidden mt-5 px-5 text-xl text-t1 underline'>Posts</h3>
       <div className='flex flex-col lg:mt-20 mt-5'>
        <HomeCard postType="Hiring"/>
        <HomeCard postType="Services"/>
        <HomeCard postType="Announcement"/>
       </div>

      </div>
     </div>
    </>
  )
}

export default ProfileAll