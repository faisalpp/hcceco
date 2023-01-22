import React,{useState} from 'react'
import HccecoMsg from './HccecoMsg';
import ChatBox from './ChatBox';

const HccecoLinksMsg = () => {
    const [Messages, setMessages] = useState(false);
  return (
     <>
     {Messages ? <div className='text-t2 text-sm text-center'>No Messages to Show</div>
     :
     <div id="msg-wrapper" className='flex flex-col space-y-5 h-auto max-h-80 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden w-full'>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <ChatBox/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
      <HccecoMsg name="Kimi" msg="Hello! You There"/>
      <HccecoMsg name="Kimi" msg="No Mssages Yet"/>
     </div>
     }
    </>
    )
}

export default HccecoLinksMsg