import React,{useState} from 'react'
import { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri';
import { AppContext } from '../../context/GlobalContext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FilterBody from './FilterBody';

const FilterMenu = () => {
  const state = useContext(AppContext);
  const [tabIndex,setTabIndex] = useState(0);

  return (
    <div className={`lg:hidden ${state.clgFilter ? 'fixed':'hidden'} w-full h-screen bg-white z-20`}>
     <div className='flex bg-t3/10 h-16 w-full shadow-lg text-[17px]'>
        <div className='flex items-center ml-5 space-x-60'><h3 className='text-t1 text-xl'>Filter</h3><button onClick={()=>state.setClgFilter(false)}><RiCloseLine className='text-2xl'/></button></div>
     </div>
     <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>

     <div className='flex h-screen scroll overflow-scroll'>
      <div className='flex space-y-5 flex-col w-5/12 bg-t3/10 h-full py-5 text-xs'>
       <TabList>
        <div className='w-full py-2 px-5'>SORT BY</div>
        <Tab><div className={`${tabIndex === 0 ?'bg-white':null} w-full py-2 px-5`}>STATE</div></Tab>
        <Tab><div className={`${tabIndex === 1 ?'bg-white':null} w-full py-2 px-5`}>CITY</div></Tab>
        <Tab><div className={`${tabIndex === 2 ?'bg-white':null}w-full py-2 px-5`}>STREAM</div></Tab>
        <Tab><div className={`${tabIndex === 3 ?'bg-white':null} w-full py-2 px-5`}>COURSE</div></Tab>
        <Tab><div className={`${tabIndex === 4 ?'bg-white':null} w-full py-2 px-5`}>PROGRAM TYPE</div></Tab>
        <Tab><div className={`${tabIndex === 5 ?'bg-white':null} w-full py-2 px-5`}>TYPE OF COLLEGE</div></Tab>
        <Tab><div className={`${tabIndex === 6 ?'bg-white':null} w-full py-2 px-5`}>EXAM ACCEPTED</div></Tab>
        <Tab><div className={`${tabIndex === 7 ?'bg-white':null} w-full py-2 px-5`}>AVG FEE/YEAR&#91;Rs&#93;</div></Tab>
        <Tab><div className={`${tabIndex === 8 ?'bg-white':null} w-full py-2 px-5`}>COURSE TYPE</div></Tab>
        <Tab><div className={`${tabIndex === 9 ?'bg-white':null} w-full py-2 px-5`}>AFFILIATION</div></Tab>
        <Tab><div className={`${tabIndex === 10 ?'bg-white':null} w-full py-2 px-5`}>COURSE DURATION&#91;YRS&#93;</div></Tab>
        <Tab><div className={`${tabIndex === 11 ?'bg-white':null} w-full py-2 px-5`}>AGENCY</div></Tab>
       </TabList>  
      </div>
      
      {/* Mobile Filter with wrapper */}
      <div className='flex flex-col w-7/12 h-screen overflow-scroll ml-2 py-5 text-[17px] '>
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Tamil Nadu'},{'name':'Karnatka'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Delhi'},{'name':'Mumbai'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Medical'},{'name':'Engineering'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'FA'},{'name':'BSC'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Diploma'},{'name':'Degree'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Government'},{'name':'Semi Government'},{'name':'Private'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'GATE'},{'name':'CAT'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'65000'},{'name':'80000'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Professional'},{'name':'Sub Side'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'Delhi College'},{'name':'Mumbai College'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'5 Years'},{'name':'2 Years'}]}/></TabPanel>      
       <TabPanel><FilterBody formUrl="/" method="post" data={[{'name':'5 Star'},{'name':'2 Star'}]}/></TabPanel>      
      </div>

     </div> 
     </Tabs>
    </div>
  )
}

export default FilterMenu