import React from 'react'
import Layout from './Layouts/Layout'
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard'
import SearchBar from '../../components/SearchBar';
import PostEvent from '../../components/HomeComponents/PostEvent';
import CommentBox from '../../components/HomeComponents/CommentBox';
import MobileFloats from './MobileFloats';


const HomeLatestHiring = () => {
  
    const avtar = "https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1";
  const c1 = "https://www.dropbox.com/s/jwilw7rlwh6edaw/kenny-eliason-zFSo6bnZJTw-unsplash.jpg?raw=1";
  const c2 = "https://www.dropbox.com/s/mtuyw3akr5u0vd3/post_carousel.jpg?raw=1";
  const lorem = 'Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto explicabo nemo dolores atque fugit autem sapiente? Corrupti quod consectetur, accusantium unde rem doloribus suscipit maiores, ex commodi porro non?';
  const posts = [
    {'userName':'Argha Paul','subject':'What is Scope of BSC?','msg':lorem,'userType':'student','postType':'announcement','avtar':avtar,'userImg':[c1,c2],timeNow:'2Hrs'},
    {'userName':'Argha Paul','subject':'New Admission Open!','msg':lorem,userType:'ambassador','postType':'announcement','avtar':avtar,'timeNow':'2Hrs','repostUser':{'userName':'Faisal','userType':'student','postType':'question','userImg':'https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1','timeNow':'1Hrs'}},
    {'userName':'Monika','subject':'Assitant Required!','msg':lorem,userType:'principle','postType':'announcement','avtar':avtar,'timeNow':'3Hrs'}
    ];

  return (
    <Layout>
    <MobileFloats/>
    <div className='flex flex-col lg:space-y-12 mt-3 lg:mt-10 mb-3 lg:ml-5 lg:mr-5'>
     <div className='hidden lg:block text-center text-2xl text-t1'><h3>You are Viwing latest hirings</h3></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <SearchBar/></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <PostEvent/></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <CommentBox/></div>
     <div className='flex flex-col space-y-3'>
      {posts.map((post)=><HomeCard post={post}/>)}
     </div> 
    </div>
    </Layout>
  )
}

export default HomeLatestHiring