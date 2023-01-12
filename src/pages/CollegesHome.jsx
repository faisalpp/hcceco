import React from 'react'
import LayoutColleges from '../LayoutColleges'
import SearchFilter from '../../components/CollegesComponents/SerchFilter'
import SortBy from '../../components/CollegesComponents/SortBy'
import CollegeInfoCard from '../../components/CollegesComponents/CollegeInfoCard'

const CollegesHome = () => {
  return (
    <LayoutColleges>
   <div className='w-full bg-white h-fit'>
    <div className='flex flex-col items-center '>
      <div className='mt-10'><h3 className='text-t1 text-2xl font-semibold'>LIST TOP COLLEGES IN INDIA BASED ON 2022 BANKING</h3></div>
      <SearchFilter filterName="COLLEGE"/>
      <SearchFilter filterName="COURSE"/>
      <SortBy/>
    </div>
    <div className='grid grid-cols-3 mt-12'>
      <CollegeInfoCard/>
      <CollegeInfoCard/>
      <CollegeInfoCard/>
      <CollegeInfoCard/>
      <CollegeInfoCard/>
    </div>
   </div>
  </LayoutColleges>
  )
}

export default CollegesHome