import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import SearchCard from '../../../components/SearchCard'
import { useLocation } from 'react-router-dom'

const Colleges = () => {
  const title = useLocation()
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Colleges</h3></div>
       <SearchNavigation/>
       <h3 className='lg:hidden mt-5 px-5 text-xl text-t1 underline'>Colleges</h3>
       <div className='grid lg:grid-cols-3 grid-flow-row-dense ml-10 mt-10 lg:mt-20'>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       <SearchCard postLink="/jhon/posts" coverPhoto={"https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1"} avtar={"https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"} name="University of Punjab" designation="Institute" totalLinks="10" city="Jalandhar" state="Punjab"/>
       </div>

      </div>
     </div>
    </>
  )
}

export default Colleges