import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import {RiSearch2Line} from 'react-icons/ri'
import CollapsesSideBar from '../../components/ExamComponents/CollapsesSideBar'
import SearchFilter from '../../components/CollegesComponents/SerchFilter'
import ExamCard from '../../components/ExamComponents/ExamCard'
import NotificationMenu from '../../components/NotificationMenu'
import SearchBar from '../../components/HomeComponents/SearchBar'
import { AiOutlineControl } from 'react-icons/ai'
import { AppContext } from '../../context/GlobalContext'
import ExamFilterMenu from '../../components/MobileComponents/ExamFilterMenu'
import MobileFloats from './MobileFloats'

const Exams = () => {
  const state = useContext(AppContext)
  return (
    <>
    <HeadMeta title="Exams"/>
    <MobileFloats/>
    <ExamFilterMenu/>
    <Navbar/>
    <NotificationMenu/>
    <SearchBar/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full h-auto'>
      <div className='col-start-1 col-end-4 lg:flex hidden flex-col items-center'>
       <form action='/search' method='post' className='flex bg-white w-60 mt-10 py-2 rounded-md text-xs px-2'><input type="search" placeholder='Search' className='border-none w-full'/><RiSearch2Line className='text-xl'/></form>
       <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
       <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="green" title="Examination Type" option={['State Wise','National Wise']}/>   
       <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="orange" title="Application Mode" option={['Online','Offline','Both']}/>   
       <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="red" title="Examination Mode" option={['Online','Offline','Both']}/>   
      </div>

      <main className='col-start-4 col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-auto'>
        <div className='flex flex-col'>
         <h3 className='text-center mt-10 text-sm lg:text-2xl font-semibold text-t1' >TOP ENTRANCE EXAMS OF INDIA</h3>
         {/* Desktop Filters */}
         <div className='lg:flex hidden flex-col mt-10 mb-10 space-y-10 items-center'>
          <SearchFilter filterName="Stream" streams={['Education','Engineering']}/>
          <SearchFilter filterName="Course" streams={['BDS','B.ED','B.ED','B.ED','B.ED','B.ED','B.ED']}/>
         </div>
         
         {/* Mobile Search Bar */}
         <div className='lg:hidden flex items-center w-fit ml-2 mt-5 space-x-2 justify-center'>
          <div className='flex items-center  w-3/4 border-2 border-t3/20 rounded-md'>
           <input type="search" placeholder="Search any College here" className='w-full text-xs h-10 px-2 outline-none'/><RiSearch2Line className='text-2xl mr-2'/>
          </div>
          <button onClick={()=>state.setExmFilter(true)}><AiOutlineControl className='text-3xl text-t1'/></button>
         </div>
         {/* Mobile Filter */}
         <div className='lg:hidden flex space-x-3 justify-center mt-5'>
       
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-full outline-none h-10 px-2 text-sm text-t3 rounded-md' placeholder='Select Stream'>
          <option>Engineering</option>
          <option>Medical</option>
          <option>Arts</option>
        </select>
        </div>
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-36 outline=none h-10 px-2 text-sm text-t3 ' placeholder='Select Course'>
          <option>BSC</option>
          <option>FA</option>
          <option>FSC</option>
        </select>
        </div>
       </div>
       
       

       <div className='flex flex-col w-full mb-20'>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       </div>

      </div>
     </div>
     </main>
    </div>
    </>
  )
}

export default Exams