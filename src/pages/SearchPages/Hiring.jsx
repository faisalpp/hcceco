import React from 'react'
import SearchLayout from '../Layouts/SearchLayout'
import HiringCard from '../../../components/HiringCard'

const Hiring = () => {
  return (
    <SearchLayout>
    <div className='flex flex-col space-y-16 ml-5 mr-5 bg-white py-10'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Hiring</h3>
     <HiringCard/>
     <HiringCard/>
    </div>
    </SearchLayout>
  )
}

export default Hiring