import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import SearchCard from '../../../components/SearchCard'
import { useLocation } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { RiSearch2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
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
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>All Profiles</h3></div>
       <SearchNavigation/> 
        
       <div className='flex items-center w-full px-10 mt-5 lg:mt-10'>
        <h3 className='text-t1 text-xl'>Profiles</h3>
        <div className='w-full text-sm'><NavLink to="/search/profiles/all"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='grid lg:grid-cols-3 grid-flow-row-dense ml-10 mt-5 lg:mt-5'>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Posts</h3>
        <div className='w-full text-sm'><NavLink to="/search/posts"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col lg:mt-10 mt-5'>
        <HomeCard postType="Post"/>
        <HomeCard postType="Post"/>
        <HomeCard postType="Post"/>
       </div>     
    
       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Hirings</h3>
        <div className='w-full text-sm'><NavLink to="/search/hirings"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col lg:mt-10 mt-5'>
        <HomeCard postType="Hiring"/>
        <HomeCard postType="Hiring"/>
        <HomeCard postType="Hiring"/>
        <HomeCard postType="Hiring"/>
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Services</h3>
        <div className='w-full text-sm'><NavLink to="/search/services"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col lg:mt-10 mt-5'>
        <HomeCard postType="Service"/>
        <HomeCard postType="Service"/>
        <HomeCard postType="Service"/>
        <HomeCard postType="Service"/>
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Announcements</h3>
        <div className='w-full text-sm'><NavLink to="/search/announcements"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col lg:mt-10 mt-5'>
        <HomeCard postType="Announcement"/>
        <HomeCard postType="Announcement"/>
        <HomeCard postType="Announcement"/>
        <HomeCard postType="Announcement"/>
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Questions</h3>
        <div className='w-full text-sm'><NavLink to="/search/questions"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col lg:mt-10 mt-5'>
        <HomeCard postType="Question"/>
        <HomeCard postType="Question"/>
        <HomeCard postType="Question"/>
        <HomeCard postType="Question"/>
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Colleges</h3>
        <div className='w-full text-sm'><NavLink to="/search/colleges"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='grid lg:grid-cols-3 grid-flow-row-dense ml-10 mt-10 lg:mt-10'>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       </div>



      </div>
     </div>
    </>
  )
}

export default ProfileAll