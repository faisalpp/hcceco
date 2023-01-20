import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import CollegeInfoCard from '../../../components/CollegesComponents/CollegeInfoCard'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'

const Colleges = () => {
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Colleges</h3></div>
       <SearchNavigation/>

       <div className='grid lg:grid-cols-3 grid-flow-row-dense mt-10 lg:mt-20 ml-10'>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
        <CollegeInfoCard/>
       </div>
      

      </div>

     </div>
    </>
  )
}

export default Colleges