import React,{useState} from 'react'
import { TabList, TabPanel ,Tabs,Tab} from 'react-tabs'
import HccecoLinksMsg from './HccecoLinksMsg';
import HccecoLinksRequest from './HccecoLinksRequest';
import {RiUbuntuLine} from 'react-icons/ri'
import MenuSearchBar from './MenuSearchBar'


const HccecoLinks = () => {
  const [tabIndex,setTabIndex] = useState(0);
  return (
    <>
    <Tabs tabIndex={tabIndex} onSelect={setTabIndex}>
    <div id="wrapper" className='hidden lg:flex flex-col w-64 h-auto bg-white'>
     <div id="heading" className='flex items-center justify-center w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md space-x-2'><RiUbuntuLine className='text-xl'/><span>HCCECO LINKS</span></div>       
    <div className='flex flex-col px-5 mt-2 mb-5 space-y-5'>
     <TabList id="btn-wrapper" className='flex space-x-1'>
      <Tab><button className={` ${tabIndex === 0 ? 'bg-b3':'bg-white'} text-xs hover:bg-b3 px-5 py-4 rounded-l-md text-center`}>Messages</button></Tab>
      <Tab><button className={`${tabIndex === 1 ? 'bg-b3':'bg-white'} text-xs hover:bg-b3 px-3 py-4 rounded-r-md text-center w-32`}>Link Requests</button></Tab>
     </TabList> 
     <MenuSearchBar/>
     <TabPanel><HccecoLinksMsg/></TabPanel>
     <TabPanel><HccecoLinksRequest/></TabPanel>
     </div>
     </div>
     </Tabs>
     </>
     )
}

export default HccecoLinks