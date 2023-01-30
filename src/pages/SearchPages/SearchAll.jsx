import React,{useState} from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import SearchCard from '../../../components/SearchCard'
import { NavLink } from 'react-router-dom'
import HomeCard from '../../../components/HomeComponents/HomeCard/HomeCard'

const ProfileAll = () => {
  const avtar = "https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1";
  const c1 = "https://www.dropbox.com/s/jwilw7rlwh6edaw/kenny-eliason-zFSo6bnZJTw-unsplash.jpg?raw=1";
  const c2 = "https://www.dropbox.com/s/mtuyw3akr5u0vd3/post_carousel.jpg?raw=1";
  const lorem = 'Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto explicabo nemo dolores atque fugit autem sapiente? Corrupti quod consectetur, accusantium unde rem doloribus suscipit maiores, ex commodi porro non?';
  const [posts,setPosts] = useState([{'userName':'Argha Paul','subject':'What is Scope of BSC?','msg':lorem,'userType':'student','postType':'post','avtar':avtar,'userImg':[c1,c2],timeNow:'2Hrs'},
  {'userName':'Argha Paul','subject':'New Admission Open!','msg':lorem,userType:'ambassador','postType':'repost','avtar':avtar,'timeNow':'2Hrs','repostUser':{'userName':'Faisal','userType':'student','postType':'question','userImg':'https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1','timeNow':'1Hrs'}},
  {'userName':'Monika','subject':'Assitant Required!','msg':lorem,userType:'principle','postType':'hiring','avtar':avtar,'timeNow':'3Hrs'}
  ]);
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>All Search Results</h3></div>
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
       <div className='flex flex-col items-center lg:mt-10 mt-5 w-full'>
        {posts ? <div className='flex flex-col lg:w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>     
    
       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Hirings</h3>
        <div className='w-full text-sm'><NavLink to="/search/hirings"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col items-center lg:mt-10 mt-5'>
       {posts ? <div className='flex flex-col lg:w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Services</h3>
        <div className='w-full text-sm'><NavLink to="/search/services"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col items-center lg:mt-10 mt-5'>
       {posts ? <div className='flex flex-col lg:w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Announcements</h3>
        <div className='w-full text-sm'><NavLink to="/search/announcements"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col items-center lg:mt-10 mt-5'>
       {posts ? <div className='flex flex-col lg:w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>

       <div className='flex items-center w-full px-10 mt-5 lg:mt-5'>
        <h3 className='text-t1 text-xl'>Questions</h3>
        <div className='w-full text-sm'><NavLink to="/search/questions"><h3 className='text-end cursor-pointer hover:underline'>See All</h3></NavLink></div>
       </div>
       <div className='flex flex-col items-center lg:mt-10 mt-5'>
       {posts ? <div className='flex flex-col w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
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