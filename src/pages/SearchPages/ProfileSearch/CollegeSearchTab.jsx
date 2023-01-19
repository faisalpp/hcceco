import React from 'react'
import SearchLayout from '../../Layouts/SearchLayout'
import HiringCard from '../../../../components/HiringCard'

const CollegeSearchTab = () => {
  return (
    <SearchLayout>
    <div className='flex flex-col space-y-16 mt-5 ml-5 mr-5 bg-white'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Hiring</h3>
     <HiringCard/>
    </div>
    </SearchLayout>
  )
}

export default CollegeSearchTab