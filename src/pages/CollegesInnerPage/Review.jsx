import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'
import { useState } from 'react'
import ReviewCard from '../../../components/ReviewCard'
import MobileFloats from '../MobileFloats'


const Review = () => {
  const [readMore,setReadMore] = useState(false);  
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
     <div className='flex flex-col bg-white'>

     <div className='bg-white w-full h-full'>
      {/* College Rating */}
     <div className='flex mt-10 lg:space-x-[750px] space-x-24 ml-3 lg:ml-24'>
      <div><h3 className='lg:text-xl text-lg text-t1 font-bold'>College Rating</h3><div className='flex items-center'><h3 className='text-t3 lg:text[16px] text-sm'>03 Reviews Found </h3><FaPlusCircle className='lg:hidden ml-3 text-xl text-t3'/></div></div>
      <div className='flex flex-col items-center'>
       <h3 className='lg:text-[16px] text-sm'>3.4/4</h3>
       <div className='flex'>
       <img src="/public/anger.png" className='rounded-full w-4 h-4 lg:w-8 lg:h-8'/>
       <img src="/public/confused.png" className='rounded-full w-4 h-4 lg:w-8 lg:h-8'/>
       <img src="/public/happy.png" className='rounded-full w-4 h-4 lg:w-8 lg:h-8'/>
       <img src="/public/love.png" className='rounded-full w-4 h-4 lg:w-8 lg:h-8'/>
       </div>
      </div>
     </div>
     </div>

     {/* Review Card */}
     <div className='flex flex-col mb-10'>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
     </div>   
  

     </div>
     </div>
     </>
  )
}

export default Review