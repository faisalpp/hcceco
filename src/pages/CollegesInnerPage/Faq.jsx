import React from 'react'
import { useLocation } from 'react-router-dom'
import FaqQuestionAnswer from '../../../components/FaqQuestionAnswer'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeInnerSidebar from '../../../components/CollegesComponents/CollegeInnerSideBar'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'


const Faq = () => {
  
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
       <div className='lg:col-start-4 lg:col-end-13 flex w-full bg-white lg:px-0 px-5 h-screen'>
       {/* FAQ Question */}
       <div className='flex flex-col mt-10 lg:ml-20 lg:mr-20'>
        <h3 className='text-xl text-t1'>FAQ</h3>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
       </div>
      </div>
     </div>
     </div>
     </>
  )
}

export default Faq