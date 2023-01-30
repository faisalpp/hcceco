import React,{useState} from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'

import HomeCard from '../../../components/HomeComponents/HomeCard/HomeCard'

const Hiring = () => {
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
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Hiring</h3></div>
       <SearchNavigation/>
       <h3 className='lg:hidden mt-5 px-5 text-xl text-t1 underline'>Hirings</h3>
       <div className='flex flex-col items-center lg:mt-20 mt-5'>
       {posts ? <div className='flex flex-col w-full'>
        {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
        </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>

      </div>
     </div>
    </>
  )
}

export default Hiring