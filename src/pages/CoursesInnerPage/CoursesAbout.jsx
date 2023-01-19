import React, { useState } from 'react'
import {Tab, Tabs,TabList,TabPanel } from 'react-tabs'
import AboutCourseTab from './AboutCourseTab'
import Navbar from '../../../components/Navbar'
import SpecializationTab from './SpecializationTab'
import EligibilityTab from './EligibilityTab'
import AfterCourseTab from './AfterCourseTab'
import AfterCareerTab from './AfterCareerTab'
import ExamBookTab from './ExamBookTab'
import AverageFeesTab from './AverageFeesTab'
import SalaryTrendTab from './SalaryTrendTab'
import TopRecruiterTab from './TopRecruiterTab'

const CoursesAbout = () => {
  const [tabIndex,setTabIndex] = useState(0)
  return (
    <>
    <Navbar/>
     <Tabs tabIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
        {/* COurses inner menu */}
        <TabList className='flex lg:flex-col flex-row lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-auto h-fit lg:w-72 w-[360px] lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2'>
        <Tab><div className={`${tabIndex === 0 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer px-5 lg:[&>p:hover]:text-t1 lg:hover:bg-t1/20`}><p className='text-t3 w-max'>ABOUT B.ARCH</p></div></Tab>
        <Tab><div className={`${tabIndex === 1 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>SPECIALIZAITON</p></div></Tab>
        <Tab><div className={`${tabIndex === 2 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>ELIGIBILITY</p></div></Tab>
        <Tab><div className={`${tabIndex === 3 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>COURSE AFTER B.ARCH</p></div></Tab>
        <Tab><div className={`${tabIndex === 4 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>CAREER AFTER B.ARCH</p></div></Tab>
        <Tab><div className={`${tabIndex === 5 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>IMPORTANT EXAM BOOKS</p></div></Tab>
        <Tab><div className={`${tabIndex === 6 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>AVERAGE FEE</p></div></Tab>
        <Tab><div className={`${tabIndex === 7 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>SALARY TRENDS</p></div></Tab>
        <Tab><div className={`${tabIndex === 8 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>TOP RECRUITERS</p></div></Tab>
        </TabList>
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      <TabPanel><AboutCourseTab/></TabPanel>
      <TabPanel><SpecializationTab/></TabPanel>
      <TabPanel><EligibilityTab/></TabPanel>
      <TabPanel><AfterCourseTab/></TabPanel>
      <TabPanel><AfterCareerTab/></TabPanel>
      <TabPanel><ExamBookTab/></TabPanel>
      <TabPanel><AverageFeesTab/></TabPanel>
      <TabPanel><SalaryTrendTab/></TabPanel>
      <TabPanel><TopRecruiterTab/></TabPanel> 
      </main>

    </div>
     </Tabs>
    </>
  )
}

export default CoursesAbout