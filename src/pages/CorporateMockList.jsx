import React from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import CorporateSideBar from '../../components/CorporateComponents/CorporateSideBar'
import PdfCard from '../../components/CorporateComponents/PdfCard'
import MockTestList from '../../components/CorporateComponents/MockTestCard'

const CorporateMockList = () => {
  return (
    <>
    <HeadMeta title="Corporate Mock Test List"/>
    <Navbar/>
    <div className='grid grid-cols-12 w-full h-auto'>
      <div className='col-start-1 col-end-4 flex flex-col mt-20 items-center'>
        <CorporateSideBar title='Short Tricks' cardColor="green" data={['Reasoning Short Ticks','Quantitative Aptitude Short Tricks','Verbal Ability','Soft Skills/Personality Development','Interview Preparation']}/>  
        <CorporateSideBar title='WORKSHEET FOR PRACTICE' cardColor="yellow" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='HCCECO LIBRARY FOR TRAINERS/TEACHERS' cardColor="green" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='MOCK TESTS FOR PRACTICE' cardColor="blue" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
       </div>
      <main className='col-start-4 col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-screen'>
       <div className='flex flex-col px-10 '>
        <h3 className='mt-20 text-sm font-semibold text-t1' >SHORT TRICKS / <span className='text-t3/40'>Reasoning Short Tricks</span></h3>
        {/* PDF Downlaod Card */}
        <div className='flex flex-col  mt-10 mb-10 space-y-10'>
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
         <MockTestList topic="Topic Name Show Here" testNo="02" questions="30" marks="12" mins="30" shortTrickUrl="/" startTestUrl="/" />
        </div>
      </div>
     </div>
     </main>
    </div>
    </>
  )
}

export default CorporateMockList