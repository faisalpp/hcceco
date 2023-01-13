import React from 'react'
import SearchLayout from './Layouts/SearchLayout'
import HiringCard from '../../components/HomeComponents/HomeCard'

const Hiring = () => {
  return (
    <SearchLayout>
    <div className='flex flex-col space-y-16 mt-5 ml-5 mr-5 bg-white'>
     <h3 className='text-center text-t1 text-2xl mt-10'>You are viewing posts of Anshita</h3>
     <HiringCard/>
    </div>
    </SearchLayout>
  )
}

export default Hiring