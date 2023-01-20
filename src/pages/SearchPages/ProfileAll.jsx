import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import SearchCard from '../../../components/SearchCard'
import { useLocation } from 'react-router-dom'
import { Input } from '@material-tailwind/react'
import { RiSearch2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

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
        {/* Inner Profiles Navigation */}
        <div className='flex lg:flex-row flex-col mt-10 items-center lg:space-y-0 space-y-5 lg:space-x-96'>
        <div className='flex space-x-5 lg:border-b-2 lg:border-t3/10 w-fit lg:ml-10 py-1'>
         <NavLink to="/search/profiles/all"><h3 className={`${title.pathname === "/search/profiles/all" ? 'lg:bg-white bg-t1 lg:px-0 px-5 lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 px-5 py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >All</h3></NavLink>
         <NavLink to="/search/profiles/people"><h3 className={`${title.pathname === "/search/profiles/people" ? 'lg:bg-white bg-t1 lg:px-0 px-5 lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 px-5 py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >People</h3></NavLink>
         <NavLink to="/search/profiles/college"><h3 className={`${title.pathname === "/search/profiles/college" ? 'lg:bg-white bg-t1 lg:px-0 px-5 lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 px-5 py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >College</h3></NavLink>
        </div>
        <div><Input icon={<RiSearch2Line/>} label='Search' className='w-52'/></div>
       </div> 

       <div className='grid lg:grid-cols-3 grid-flow-row-dense ml-10 mt-10 lg:mt-10'>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
        <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="Jhon Doe" designation="Student" totalLinks="10" city="Jalandhar" state="Punjab"/>
       </div>

      </div>
     </div>
    </>
  )
}

export default ProfileAll