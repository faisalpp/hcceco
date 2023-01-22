import React from 'react'
import ExamCard from '../../../components/ExamComponents/ExamCard'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'

const Exams = () => {

  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Exams</h3></div>
       <SearchNavigation/>
       <h3 className='lg:hidden mt-5 px-5 text-xl text-t1 underline'>Exams</h3>
       <div className='flex flex-col lg:mt-20 mt-5 space-y-5 mb-10'>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
       </div>

      </div>
     </div>
    </>
  )
}

export default Exams