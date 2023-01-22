import React from 'react'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeInnerSidebar from '../../../components/CollegesComponents/CollegeInnerSideBar'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'
import MobileFloats from '../MobileFloats'


const About = () => {
  
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
    
    {/* Children */}
    
    <div className='flex flex-col lg:px-10 lg:w-fit w-full lg:mb-0 mb-5'>
      <h3 className='text-t1 mt-10 text-[20px] mb-5'>Inroduction</h3>
      <p className='lg:text-[16px] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quam laboriosam earum repellat totam suscipit, cupiditate 
        voluptates alias explicabo, dolore, ad nostrum! Perferendis
        tenetur dignissimos cupiditate corrupti. Omnis doloribus 
        laboriosam corporis. Quam laboriosam earum repellat totam suscipit, cupiditate
        voluptates alias explicabo, dolore, ad nostrum! Perferendis tenetur dignissimos
        cupiditate corrupti. Omnis doloribus  laboriosam corporis. Quam laboriosam earum 
        repellat totam suscipit, cupiditate voluptates alias explicabo, dolore, ad nostrum! Perferendis
        tenetur dignissimos cupiditate corrupti. Omnis doloribus laboriosam corporis.
      </p>
     </div>

     {/* Children End */}

    </div>
    </div>
    </div>
    </>
    
  )
}

export default About