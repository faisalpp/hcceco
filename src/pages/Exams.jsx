import React from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import {RiSearch2Line} from 'react-icons/ri'
import CollapsesSideBar from '../../components/ExamComponents/CollapsesSideBar'
import SearchFilter from '../../components/CollegesComponents/SerchFilter'
import ExamCard from '../../components/ExamComponents/ExamCard'
import NotificationMenu from '../../components/NotificationMenu'
import SearchBar from '../../components/HomeComponents/SearchBar'

const Exams = () => {
  return (
    <>
    <HeadMeta title="Courses"/>
    <Navbar/>
    <NotificationMenu/>
    <SearchBar/>
    <div className='grid grid-cols-12 w-full h-auto'>
      <div className='col-start-1 col-end-4 flex flex-col items-center'>
       <form action='/search' method='post' className='flex bg-white w-60 mt-10 py-2 rounded-md text-xs px-2'><input type="search" placeholder='Search' className='border-none w-full'/><RiSearch2Line className='text-xl'/></form>
       <div className='flex text-[17px] items-center space-x-10 mt-8'><h3>Found 02 Course</h3><a className='underline text-xs'>Set Default</a></div>
        <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="green" title="Examination Type" option={['State Wise','National Wise']}/>   
        <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="orange" title="Application Mode" option={['Online','Offline','Both']}/>   
        <CollapsesSideBar formUrl="/" mehtod="post"  cardColor="red" title="Examination Mode" option={['Online','Offline','Both']}/>   
       </div>
      <main className='col-start-4 col-end-13 w-full h-auto'>
       <div className='w-full bg-white h-auto'>
       <div className='flex flex-col'>
        <h3 className='text-center mt-10 text-2xl font-semibold text-t1' >TOP ENTRANCE EXAMS OF INDIA</h3>
       <div className='flex flex-col mt-10 mb-10 space-y-10 items-center'>
        <SearchFilter filterName="Stream" streams={['Education','Engineering']}/>
        <SearchFilter filterName="Course" streams={['BDS','B.ED','B.ED','B.ED','B.ED','B.ED','B.ED']}/>
       </div>
       <div className='flex flex-col w-full mb-20'>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
        <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
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