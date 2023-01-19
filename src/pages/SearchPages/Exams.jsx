import React from 'react'
import ExamCard from '../../../components/ExamComponents/ExamCard'
import SearchBar from '../../../components/SearchBar'
import SearchCard from '../../../components/SearchCard'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'

const Exams = () => {
  return (
    <>
    <SearchLayout>

    <HeadMeta title="Search Profile"/>
    <div className='flex flex-col space-y-10 bg-white py-10 items-center h-screen'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Courses</h3>
     <div className='flex flex-col space-y-10 w-full'>
     <ExamCard clgName="AP POLYCET" testName="Andhra Pradesh polytechnic Common Entrance Test" clgNumbers="2188" appDate="28 May 22" rsltDate="28 may 22" overviewUrl="/" syllabusUrl="/" ptrnUrl="/" updateUrl="/" applyUrl="/"/>
     </div>  
    </div>
    </SearchLayout>
    </>
  )
}

export default Exams