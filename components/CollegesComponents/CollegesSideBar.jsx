import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import SideBarCard from './SideBarCard'

const CollegesSideBar = ({numberOfColleges}) => {
  return (
    <div className='flex flex-col px-10 py-10 mt-2 w-fit h-screen '>
     <div className='flex items-center w-fit h-fit bg-white py-2 px-2 rounded-md shadow-lg'><input type="search" placeholder='Search Here' className='outline-none h-full text-sm border-none'/><RiSearch2Line className='text-xl'/></div>
     <div className='flex flex-col mt-5'>
        <div className='flex items-center space-x-10'><h3>Found {numberOfColleges} Colleges</h3><a className='text-xs mt-1 underline text-t2'>Set Default</a></div>
     </div>
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