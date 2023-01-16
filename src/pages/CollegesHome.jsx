import React from 'react'
import LayoutColleges from './Layouts/LayoutColleges'
import SearchFilter from '../../components/CollegesComponents/SerchFilter'
import SortBy from '../../components/CollegesComponents/SortBy'
import CollegeInfoCard from '../../components/CollegesComponents/CollegeInfoCard'

const CollegesHome = () => {
  return (
    <LayoutColleges>
   <div className='w-full bg-white h-fit'>
    <div className='flex flex-col items-center '>
      <div className='mt-10'><h3 className='text-t1 text-2xl font-semibold'>LIST TOP COLLEGES IN INDIA BASED ON 2022 BANKING</h3></div>
      <SearchFilter filterName="COLLEGE" streams={['Engineering']}/>
      <SearchFilter filterName="COURSE" streams={['B.ED']}/>
      <SortBy/>
    </div>
    <div className='grid grid-cols-3 mt-12'>
      <a href="http://localhost:5173/college/about"><CollegeInfoCard/></a>
      <a href="http://localhost:5173/college/about"><CollegeInfoCard/></a>
      <a href="http://localhost:5173/college/about"><CollegeInfoCard/></a>
      <a href="http://localhost:5173/college/about"><CollegeInfoCard/></a>
      <a href="http://localhost:5173/college/about"><CollegeInfoCard/></a>
    </div>
   </div>
  </LayoutColleges>
  )
}

export default CollegesHome