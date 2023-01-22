import React, { useState } from 'react'
import {Tab, Tabs,TabList,TabPanel } from 'react-tabs'
import Navbar from '../../../components/Navbar'
import Intro from './Intro'
import VisionMission from './VisionMission'
import OurBusiness from './OurBusiness'
import CoreValues from './CoreValues'
import HowWeWork from './HowWeWork'
import WhyShouldPartner from './WhyShouldPartner'
import PrestigiousClients from './PrestigiousClients'
import KeyFacts from './KeyFacts'
import OurTeam from './OurTeam'
import GetInTouch from './GetInTouch'
import MobileFloats from '../MobileFloats'

const AboutIndex = () => {
  const [tabIndex,setTabIndex] = useState(0)

  return (
    <>
    <Navbar/>
    <MobileFloats/>
     <Tabs tabIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
        {/* COurses inner menu */}
        <TabList className='flex lg:flex-col flex-row lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-auto h-fit lg:w-72 w-screen lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2'>
        <Tab><div className={`${tabIndex === 0 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Intro</p></div></Tab>
        <Tab><div className={`${tabIndex === 1 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Vision & Mission</p></div></Tab>
        <Tab><div className={`${tabIndex === 2 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Our Business Area</p></div></Tab>
        <Tab><div className={`${tabIndex === 3 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Our Core Values</p></div></Tab>
        <Tab><div className={`${tabIndex === 4 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>How We Work</p></div></Tab>
        <Tab><div className={`${tabIndex === 5 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-60'>Why Should You Do PatnerShip With Us</p></div></Tab>
        <Tab><div className={`${tabIndex === 6 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Our Prestigious Clients</p></div></Tab>
        <Tab><div className={`${tabIndex === 7 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Key Facts & Figurs</p></div></Tab>
        <Tab><div className={`${tabIndex === 8 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Our Team</p></div></Tab>
        <Tab><div className={`${tabIndex === 9 ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>Get In Touch</p></div></Tab>
        </TabList>
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      <TabPanel><Intro/></TabPanel>
      <TabPanel><VisionMission/></TabPanel>
      <TabPanel><OurBusiness/></TabPanel>
      <TabPanel><CoreValues/></TabPanel>
      <TabPanel><HowWeWork/></TabPanel>
      <TabPanel><WhyShouldPartner/></TabPanel>
      <TabPanel><PrestigiousClients/></TabPanel>
      <TabPanel><KeyFacts/></TabPanel>
      <TabPanel><OurTeam/></TabPanel>
      <TabPanel><GetInTouch/></TabPanel> 
      </main>

    </div>
     </Tabs>
    </>
  )
}

export default AboutIndex