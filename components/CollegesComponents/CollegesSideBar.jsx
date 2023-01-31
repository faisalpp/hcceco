import React from 'react'
import { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import FilterSideBar from './FilterSideBar'
import SideBarCard from './SideBarCard'

const CollegesSideBar = ({numberOfColleges}) => {
  
  const [searchQuery,setSearchQuery] = useState('');

  return (
    <div className='flex flex-col px-10 py-10 mt-2 w-fit h-screen '>
     <form onSubmit={(event)=>{alert(searchQuery);event.preventDefault();setSearchQuery('');}} className='flex items-center w-fit h-fit bg-white px-2 rounded-md'><input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="search" placeholder='Search Here' className='outline-none h-full focus:ring-0 text-sm border-none'/><RiSearch2Line className='text-xl'/></form>
     <div className='flex flex-col mt-5'>
        <div className='flex items-center space-x-10'><h3>Found {numberOfColleges} Colleges</h3><a className='text-xs mt-1 underline text-t2'>Set Default</a></div>
     </div>
     <FilterSideBar/>
     <SideBarCard title="STATE" cardColor="green" searchAction="/" optionAction="/" />
     <SideBarCard title="CITY" cardColor="orange" searchAction="/" optionAction="/"/>
     <SideBarCard title="STREM" cardColor="red" searchAction="/" optionAction="/"/>
     <SideBarCard title="COURSE" cardColor="blue" searchAction="/" optionAction="/"/>
     <SideBarCard title="PROGRAM TYPE" cardColor="yellow" searchAction="/" optionAction="/"/>
     <SideBarCard title="TYPE OF COLLEGE" cardColor="brown" searchAction="/" optionAction="/"/>
     <SideBarCard title="ENTRANCE EXAM/EXAM ACCEPTED" cardColor="green" searchAction="/" optionAction="/"/>
     <SideBarCard title="AVERAGE FEE PER YEAR IN RUPEES" cardColor="red" searchAction="/" optionAction="/"/>
     <SideBarCard title="COURSE TYPE" cardColor="orange" searchAction="/" optionAction="/"/>
     <SideBarCard title="AFFILIATION" cardColor="brown" searchAction="/" optionAction="/"/>
     <SideBarCard title="COURSE DURATION IN YEARS" cardColor="magenta" searchAction="/" optionAction="/"/>
     <SideBarCard title="AGENCY" cardColor="red" searchAction="/" optionAction="/"/>
    </div>

    
  )
}

export default CollegesSideBar