import React, { useContext } from 'react'
import LayoutColleges from './Layouts/LayoutColleges'
import SearchFilter from '../../components/CollegesComponents/SerchFilter'
import SortBy from '../../components/CollegesComponents/SortBy'
import CollegeInfoCard from '../../components/CollegesComponents/CollegeInfoCard'
import { AiOutlineControl } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import MobFilterMenu from '../../components/MobileComponents/FilterMenu'
import { AppContext } from '../../context/GlobalContext'
import { NavLink } from 'react-router-dom'

const CollegesHome = () => {
  const state = useContext(AppContext)
  return (
    <LayoutColleges>  
   <div className='w-full bg-white h-fit'>
    
    {/* Desktop Filters */}
    <div className='hidden lg:flex flex-col items-center'>
      <div className='mt-10'><h3 className='text-t1 text-2xl font-semibold'>LIST TOP COLLEGES IN INDIA BASED ON 2022 BANKING</h3></div>
      <SearchFilter filterName="COLLEGE" streams={['Engineering','Engineering','Engineering','Engineering','Engineering','Engineering','Engineering','Engineering','Engineering',]}/>
      <SearchFilter filterName="COURSE" streams={['B.ED']}/>
      <SortBy/>
    </div>

    {/* Mobile Filters & Search Bar */}
    <div className='lg:hidden  flex flex-col w-full py-5 space-y-5'>
     <h3 className='text-t1 text-center'>Popular Colleges in India</h3>
     <div className='flex items-center  w-fit ml-2 space-x-2 justify-center'>
      <div className='flex items-center  w-3/4 border-2 border-t3/20 rounded-md'>
       <input type="search" placeholder="Search any College here" className='w-full text-xs h-10 px-2 outline-none'/><RiSearch2Line className='text-2xl mr-2'/>
      </div>
      <button onClick={()=>state.setClgFilter(true)}><AiOutlineControl className='text-3xl text-t1'/></button>
     </div>

       <div className='flex space-x-3 justify-center'>
       
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-full outline-none h-10 px-2 text-sm text-t3 rounded-md' placeholder='Select Stream'>
          <option>Engineering</option>
          <option>Medical</option>
          <option>Arts</option>
        </select>
        </div>
        {/* Stream Filter */}
        <div className='flex w-40 bg-t3/10 rounded-md px-2'>
        <select className='w-36 outline=none h-10 px-2 text-sm text-t3 ' placeholder='Select Course'>
          <option>BSC</option>
          <option>FA</option>
          <option>FSC</option>
        </select>
        </div>
       </div>
       
    </div>
    
    
    <div className='grid lg:grid-cols-3 grid-flow-row-dense lg:ml-14 ml-4 lg:mt-12 py-5'>
      <NavLink to="/college/about"><CollegeInfoCard/></NavLink>
      <NavLink to="/college/about"><CollegeInfoCard/></NavLink>
      <NavLink to="/college/about"><CollegeInfoCard/></NavLink>
      <NavLink to="/college/about"><CollegeInfoCard/></NavLink>
      <NavLink to="/college/about"><CollegeInfoCard/></NavLink>
    </div>
   </div>
  </LayoutColleges>
  )
}

export default CollegesHome