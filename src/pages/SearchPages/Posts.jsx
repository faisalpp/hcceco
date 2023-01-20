import React from 'react'
import HiringCard from '../../../components/HiringCard'
import SearchLayout from '../Layouts/SearchLayout'

const Posts = () => {
  return (
    <SearchLayout>
    <div className='flex flex-col space-y-16 mt-5 bg-white h-screen'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Posts</h3>
     <HiringCard/>
    </div>
    </SearchLayout>
  )
}

export default Posts