import React from 'react'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'
import HiringCard from '../../../components/HiringCard'
import CollegeInfoCard from '../../../components/CollegesComponents/CollegeInfoCard'

const Colleges = () => {
  return (
    <>
    <SearchLayout>

    <HeadMeta title="Search Profile"/>
    <div className='flex flex-col space-y-16 ml-5 mr-5 bg-white py-10'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Colleges</h3>
     <div className='grid grid-cols-3'>
     <CollegeInfoCard/>
     <CollegeInfoCard/>
     <CollegeInfoCard/>
     <CollegeInfoCard/>
     </div>
    
    </div>
    </SearchLayout>
    </>
  )
}

export default Colleges