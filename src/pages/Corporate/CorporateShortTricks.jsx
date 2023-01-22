import React,{useState} from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'
import CorporateSideBar from '../../../components/CorporateComponents/CorporateSideBar'
import PdfCard from '../../../components/CorporateComponents/PdfCard'
import NotificationMenu from '../../../components/NotificationMenu'
import SearchBar from '../../../components/HomeComponents/SearchBar'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import MobileFloats from '../MobileFloats'

const CorporateShortTricks = () => {
  
  const [drpCat,setDrpCat] = useState(false)
  const [drpSubCat,setDrpSubCat] = useState(false)
  
  return (
    <>
    <HeadMeta title="Corporate Short Tricks"/>
    <Navbar/>
    <MobileFloats/>
    <NotificationMenu/>
    <SearchBar/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full h-auto'>
      <div className='col-start-1 col-end-4 lg:flex hidden flex-col mt-20 items-center'>
        <CorporateSideBar title='Short Tricks' cardColor="green" data={['Reasoning Short Ticks','Quantitative Aptitude Short Tricks','Verbal Ability','Soft Skills/Personality Development','Interview Preparation']}/>  
        <CorporateSideBar title='WORKSHEET FOR PRACTICE' cardColor="yellow" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='HCCECO LIBRARY FOR TRAINERS/TEACHERS' cardColor="green" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='MOCK TESTS FOR PRACTICE' cardColor="blue" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
       </div>
      <main className='lg:col-start-4 lg:col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-auto'>
       <div className='flex flex-col lg:px-10 px-3'>
        {/* Desktop Heading */}
        <h3 className='lg:flex hidden mt-20 text-sm font-semibold text-t1' >SHORT TRICKS / <span className='text-t3/40'>Reasoning Short Tricks</span></h3>
        {/* Mobile Heading */}
        <div className='flex justify-center'><h3 className='lg:hidden flex mt-20 text-lg text-center font-semibold text-t1' >Corport-Short tricks</h3></div>
        
        {/* Mobile Filter */}
        <div className='lg:hidden flex space-x-3 mt-5'>
         {/* Category Filter */}
         <div className='flex w-40'>
          {drpCat ? <button onClick={()=>setDrpCat(false)} className='flex items-center space-x-5 justify-center w-full py-2 bg-b4 text-[11px] text-black'><h3>Select Category</h3><RiArrowDropUpLine className='text-xl'/></button> :<button onClick={()=>setDrpCat(true)} className='flex items-center space-x-5 justify-center w-full py-2 bg-b4 text-[11px] text-black'><h3>Select Category</h3><RiArrowDropDownLine className='text-xl'/></button>}
          <ul className={` ${drpCat ?'absolute':'hidden'} top-60 bg-b4 py-2 space-y-3 text-black flex-col w-40 outline-none h-auto px-2 text-xs rounded-b-md`}>
           <li><NavLink to="/corporate/short-tricks">Short Tricks</NavLink></li>
           <li><NavLink to="/corporate/worksheets">WorkSheet for Practice</NavLink></li>
           <li><NavLink to="/corporate/library">HCCECO Library for Trainers/Teachers</NavLink></li>
           <li><NavLink to="/corporate/mocktest">Mocktest for Practice</NavLink></li>
          </ul>
         </div>
         {/* Sub Category Filter */}
         <div className='flex w-40'>
          {drpSubCat ? <button onClick={()=>setDrpSubCat(false)} className='flex items-center space-x-2 justify-center w-full py-2 bg-b4 text-[11px] text-black'><h3>Select Sub-Category</h3><RiArrowDropUpLine className='text-xl'/></button> :<button onClick={()=>setDrpSubCat(true)} className='flex items-center space-x-2 justify-center w-full py-2 bg-b4 text-[11px] text-black'><h3>Select Sub-Category</h3><RiArrowDropDownLine className='text-xl'/></button>}
          <ul className={` ${drpSubCat ?'absolute':'hidden'} top-60 bg-b4 py-4 space-y-3 text-black flex-col w-40 outline-none h-auto px-2 text-xs rounded-md`}>
           <li>Reasoning</li>
           <li>Quantitative Aptitude</li>
           <li>Verbal Ability</li>
           <li>Soft Skills/Personality Development</li>
           <li>Interview Preparation</li>
          </ul>
         </div>
        
       </div>

        {/* PDF Downlaod Card */}
        <div className='flex flex-col mt-10 mb-10 space-y-10'>
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

export default CorporateShortTricks