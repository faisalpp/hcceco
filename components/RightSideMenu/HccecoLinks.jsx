import React,{useState} from 'react'
import HccecoMsg from './HccecoMsg';
import MenuSearchBar from './MenuSearchBar'


const HccecoLinks = () => {
    const [Messages, setMessages] = useState(false);
  return (
    <div id="wrapper" className='w-64 h-auto bg-white'>
     <div id="heading" className='w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'>HCCECO LINKS</div>       
    <div className='flex flex-col px-7 mt-2 mb-5 space-y-5'>
     <div id="btn-wrapper" className='flex space-x-1'>
       <button className='text-xs bg-b3 px-5 py-4 rounded-l-md text-center'>Messages</button>
       <button className='text-xs hover:bg-b3 px-5 py-4 rounded-r-md text-center'>Link Requests</button>
     </div> 
     <MenuSearchBar/>
     {Messages ? <div className='text-t2 text-sm text-center'>No Messages to Show</div>
     :
     <div id="msg-wrapper" className='flex flex-col space-y-5 h-auto max-h-80 overflow-scroll overflow-x-hidden w-full'>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
     </div>
     }
    </div> 
    
    </div>
  )
}

export default HccecoLinks