import React from 'react'
import SearchBar from '../../../components/SearchBar'
import SearchCard from '../../../components/SearchCard'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'
import HiringCard from '../../../components/HiringCard'

const Announcements = () => {
  return (
    <>
    <HeadMeta title="Search Profile"/>
    <SearchLayout>
    <div className='flex flex-col space-y-16 ml-5 mr-5 bg-white py-10'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Announcements</h3>
     <HiringCard/>
     <HiringCard/>
    </div>
   </SearchLayout>
    </>
  )
}

export default Announcements