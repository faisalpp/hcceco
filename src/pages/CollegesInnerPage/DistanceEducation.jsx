import React from 'react'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import CollegeInnerPageBanner from '../../../components/CollegesComponents/CollegeInnerPageBanner'
import Ticker from '../../../components/CollegesComponents/Ticker'
import CollegeInnerSidebar from '../../../components/CollegesComponents/CollegeInnerSideBar'
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation'
import MobileFloats from '../MobileFloats'


const DistanceEducation = () => {
  
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
       <div className='flex flex-col space-y-8 lg:mt-20 mt-10 lg:ml-10 lg:mr-10 mb-5'>
        {/* Introduction */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Basic Information</h3>
         <p className='lg:text-[16px] text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus sunt, unde non ab, fuga, tempore distinctio illum doloremque earum sint reiciendis ea aperiam. Porro reiciendis qui nulla ullam laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus labore vero nemo ex explicabo omnis porro esse autem sint, nesciunt accusantium commodi id itaque vel maiores facilis obcaecati quae!</p>
        </div>
       </div>
      </div>
     </div>
     </div>
     </>
  )
}

export default DistanceEducation