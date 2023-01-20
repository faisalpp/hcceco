import React,{useContext, useState} from 'react'
import { Tab, TabList,TabPanel,Tabs } from 'react-tabs'
import Messages from './Messages';
import MsgLink from './MsgLink';
import {AppContext} from '../../../context/GlobalContext'

const MsgBox = () => {
  const state = useContext(AppContext);
  const [tabIndex,setTabIndex] = useState(0);
    return (
    <>
    <div className={`${state.mobMsg?'absolute':'hidden'} z-20 w-full flex-col bg-white h-screen`}>

    <Tabs tabIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <div className='flex flex-col items-center'>
      <TabList className="flex mt-5 space-x-5">
       <Tab><h3 className={`${tabIndex === 0 ? 'bg-t1/30':'bg-white'} shadow-xl px-5 py-2 rounded-md`}>Messages</h3></Tab>
       <Tab><h3 className={` ${tabIndex === 1 ? 'bg-t1/30':'bg-white'} shadow-xl px-5 py-2 rounded-md`}>Link Request</h3></Tab>
      </TabList>

     <TabPanel><Messages/></TabPanel>
     <TabPanel><MsgLink/></TabPanel>
    </div>
    </Tabs>
    </div>
    </>
  )
}

export default MsgBox