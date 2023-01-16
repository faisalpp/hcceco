import React from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import CorporateSideBar from '../../components/CorporateComponents/CorporateSideBar'
import PdfCard from '../../components/CorporateComponents/PdfCard'
import NotificationMenu from '../../components/NotificationMenu'
import SearchBar from '../../components/HomeComponents/SearchBar'

const Corporate = () => {
  return (
    <>
    <HeadMeta title="Corporate"/>
    <Navbar/>
    <NotificationMenu/>
    <SearchBar/>
    <div className='grid grid-cols-12 w-full h-auto'>
      <div className='col-start-1 col-end-4 flex flex-col mt-20 items-center'>
        <CorporateSideBar title='Short Tricks' cardColor="green" data={['Reasoning Short Ticks','Quantitative Aptitude Short Tricks','Verbal Ability','Soft Skills/Personality Development','Interview Preparation']}/>  
        <CorporateSideBar title='WORKSHEET FOR PRACTICE' cardColor="yellow" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='HCCECO LIBRARY FOR TRAINERS/TEACHERS' cardColor="green" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='MOCK TESTS FOR PRACTICE' cardColor="blue" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
       </div>
      <main className='col-start-4 col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-auto'>
       <div className='flex flex-col px-10 '>
        <h3 className='mt-20 text-sm font-semibold text-t1' >SHORT TRICKS / <span className='text-t3/40'>Reasoning Short Tricks</span></h3>
        {/* PDF Downlaod Card */}
        <div className='flex flex-col  mt-10 mb-10 space-y-10'>
         <PdfCard topic="Topic Name Here" likes="14" views="15" downloads="200" likeUrl="/" downloadUrl="/"/>
         <PdfCard topic="Topic Name Here" likes="14" views="15" downloads="200" likeUrl="/" downloadUrl="/"/>
        </div>

        {/* PDF show Here */}
        <div className='flex flex-col rounded-lg scrollbar-thin scrollbar-thumb-t1 text-t1 space-y-5 py-5 border-2 border-t3 bg-t3/20 items-center w-full h-[529px]'>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
         <h3>PDF WILL SHOW HERE</h3>
        </div>     
        
        {/* PDF Downlaod Card */}
        <div className='flex flex-col  mt-10 mb-10 space-y-10'>
         <PdfCard topic="Topic Name Here" likes="14" views="15" downloads="200" likeUrl="/" downloadUrl="/"/>
         <PdfCard topic="Topic Name Here" likes="14" views="15" downloads="200" likeUrl="/" downloadUrl="/"/>
        </div>

      </div>
     </div>
     </main>
    </div>
    </>
  )
}

export default Corporate