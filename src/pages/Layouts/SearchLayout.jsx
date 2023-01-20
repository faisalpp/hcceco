import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import CollegeInfoCard from '../../../components/CollegesComponents/CollegeInfoCard'
import { NavLink } from 'react-router-dom'

const SearchLayout = ({children}) => {
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Colleges</h3></div>
       
       {/* Mobile Navigation */}
       <div className='lg:hidden flex mt-5 px-6 w-80 py-3 overflow-scroll space-x-5'>
        <NavLink to="/search/all" ><h3 className='border-b-2 border-t1'>All</h3></NavLink>
        <NavLink to="/search/profiles"><h3 className='border-b-2 border-t1'>Profiles</h3></NavLink>
        <NavLink to="/search/posts"><h3 className='border-b-2 border-t1'>Posts</h3></NavLink>
        <NavLink to="/search/hirings"><h3 className='border-b-2 border-t1'>Hirings</h3></NavLink>
        <NavLink to="/search/announcements"><h3 className='border-b-2 border-t1'>Announcements</h3></NavLink>
        <NavLink to="/search/question"><h3 className='border-b-2 border-t1'>Questions</h3></NavLink>
        <NavLink to="/search/services"><h3 className='border-b-2 border-t1'>Services</h3></NavLink>
        <NavLink to="/search/colleges"><h3 className='border-b-2 border-t1'>Colleges</h3></NavLink>
        <NavLink to="/search/courses"><h3 className='border-b-2 border-t1'>Courses</h3></NavLink>
        <NavLink to="/search/exams"><h3 className='border-b-2 border-t1'>Exams</h3></NavLink>
        <NavLink to="/search/corporate"><h3 className='border-b-2 border-t1'>Corporate</h3></NavLink>
       </div>

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

export default SearchLayout