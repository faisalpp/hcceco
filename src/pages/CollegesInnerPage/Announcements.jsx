import React,{useState} from 'react'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeInnerSidebar from '../../../components/CollegesComponents/CollegeInnerSideBar'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'
import MobileFloats from '../MobileFloats'
import HomeCard from '../../../components/HomeComponents/HomeCard/HomeCard';
const Announcements = () => {
  
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
    <HeadMeta title="College About"/>
    <Navbar/>
    <MobileFloats/>
    <div className='w-full lg:px-20 bg-b4 h-screen'>
      <CollegeInnerPageBanner collegeName="A.G COLLEGE OF EDUCATION" city="COIMBATOR" state="Tamil Nadu" ugc="UGC" reviews="24" estd="ESTD" rank="2" img="https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1" logo="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1"/>
      {/* News Ticker */}
      <Ticker data={['Announcement will show here Announcement will show here ','|',' Announcement will show here Announcement will show here']}/>
      <CollegeNavigation/>
      <div className='lg:grid lg:grid-cols-12 flex flex-col'>
       <CollegeInnerSidebar/>
       <div className='lg:col-start-4 lg:col-end-13 flex w-full bg-white lg:px-0 px-5'>
    {posts ? <div className='flex flex-col mt-20'>
    {posts.map((post,index)=><HomeCard key={index} width={false} post={post}/>)}
    </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
       </div>
     </div>    
     </div>
     </>
  )
}

export default Announcements