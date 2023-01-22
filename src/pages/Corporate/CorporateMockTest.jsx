import React,{useState} from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'
import CorporateSideBar from '../../../components/CorporateComponents/CorporateSideBar'
import MockTestList from '../../../components/CorporateComponents/MockTestCard'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import MobileFloats from '../MobileFloats'

const CorporateMockTest = () => {

  const [drpCat,setDrpCat] = useState(false)
  const [drpSubCat,setDrpSubCat] = useState(false)

  return (
    <>
    <HeadMeta title="Corporate Mock Tests"/>
    <Navbar/>
    <MobileFloats/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full h-auto'>
      <div className='col-start-1 col-end-4 lg:flex hidden flex-col mt-20 items-center'>
        <CorporateSideBar title='Short Tricks' cardColor="green" data={['Reasoning Short Ticks','Quantitative Aptitude Short Tricks','Verbal Ability','Soft Skills/Personality Development','Interview Preparation']}/>  
        <CorporateSideBar title='WORKSHEET FOR PRACTICE' cardColor="yellow" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='HCCECO LIBRARY FOR TRAINERS/TEACHERS' cardColor="green" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
        <CorporateSideBar title='MOCK TESTS FOR PRACTICE' cardColor="blue" data={['Reasoning','Quantitative Aptitude','Verbal Ability','Interview Preparation']}/>  
       </div>
      <main className='col-start-4 col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-screen'>
       <div className='flex flex-col px-10 '>
        <h3 className='mt-20 text-sm font-semibold text-t1' >WORK SHEET FOR PRACTICE / <span className='text-t3/40'>Reasoning</span></h3>
        
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

export default CorporateMockTest