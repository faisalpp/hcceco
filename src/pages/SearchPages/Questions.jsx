import React from 'react'
import SearchBar from '../../../components/SearchBar'
import SearchCard from '../../../components/SearchCard'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'

const Questions = () => {
  return (
    <>
    <SearchLayout>

    <HeadMeta title="Search Profile"/>
     <div className='col-start-4 col-end-12'>
    <div className='flex flex-col bg-white w-full h-screen items-center'>
     {/* Heading Dynamic */}
     <div className='mt-10'><h3 className='text-t1 text-center text-2xl font-bold'>PROFILES</h3></div>
     {/* Wrapper Navigations plus search bar */}
     <div className='flex w-full border-b-4 border-t3/10'>
      {/* Navigation Tabs */}
      <div className='flex space-x-10 mt-10 ml-10 w-full'>
       <div className='text-t3/50 border-b-4 border-b1 py-3'><h3>All</h3></div>
       <div className='text-t3/50 py-3'><h3>People</h3></div>
       <div className='text-t3/50 py-3'><h3>College</h3></div>
      </div>
      <div className='w-1/2 mr-10'><SearchBar/></div>
     </div>
     {/* All Search Result Show Here */}
     <div className='grid grid-cols-3 mt-10 gap-5'>
       <SearchCard/>
       <SearchCard/>
       <SearchCard/>
     </div>
    </div>
     </div>
    </SearchLayout>
    </>
  )
}

export default Questions