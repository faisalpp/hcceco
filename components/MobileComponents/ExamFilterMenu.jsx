import React,{useState} from 'react'
import { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from '../../context/GlobalContext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExamFilterBody from './ExamFilterBody';

const ExamFilterMenu = () => {
  const state = useContext(AppContext);
  const [tabIndex,setTabIndex] = useState(0);

  return (
    <div className={`lg:hidden ${state.exmFilter ? 'fixed':'hidden'} w-full h-screen bg-white z-20`}>
     <div className='flex bg-t3/10 h-16 w-full shadow-lg text-[17px]'>
        <div className='flex items-center ml-5 space-x-60'><h3 className='text-t1 text-xl'>Filter</h3><button onClick={()=>state.setExmFilter(false)}><RiCloseLine className='text-2xl'/></button></div>
     </div>
     <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>

     <div className='flex h-screen scroll overflow-scroll'>
      <div className='flex space-y-5 flex-col w-5/12 bg-t3/10 h-full py-5 text-xs'>
       <TabList>
        <div className='w-full py-2 px-5'>SORT BY</div>
        <Tab><div className={`${tabIndex === 0 ?'bg-white':null} w-full py-2 px-5`}>EXAMINATION TYPE</div></Tab>
        <Tab><div className={`${tabIndex === 1 ?'bg-white':null} w-full py-2 px-5`}>APPLICATION MODE</div></Tab>
        <Tab><div className={`${tabIndex === 2 ?'bg-white':null}w-full py-2 px-5`}>EXAMINATION MODE</div></Tab>
       </TabList>  
      </div>
      
      {/* Mobile Filter with wrapper */}
      <div className='flex flex-col w-7/12 h-screen overflow-scroll ml-2 py-5 text-[17px] '>
       <TabPanel><ExamFilterBody formUrl="/" method="post" data={[{'name':'Onlin'},{'name':'Offline'},{'name':'Both'}]}/></TabPanel>      
       <TabPanel><ExamFilterBody formUrl="/" method="post" data={[{'name':'Online'},{'name':'Offline'},{'name':'Both'}]}/></TabPanel>      
       <TabPanel><ExamFilterBody formUrl="/" method="post" data={[{'name':'Online'},{'name':'Offline'},{'name':'Both'}]}/></TabPanel>            
      </div>

     </div> 
     </Tabs>
    </div>
  )
}

export default ExamFilterMenu