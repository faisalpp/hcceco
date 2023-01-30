import React,{useState} from 'react'
import HccecoMsg from './HccecoMsg';
const HccecoLinksMsg = () => {
    const [Messages, setMessages] = useState(false);
  return (
     <>
     {Messages ? <div className='text-t2 text-xs text-center h-52'>No Messages to Show</div>
     :
     <div id="msg-wrapper" className='flex flex-col space-y-5 h-auto max-h-80 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden w-full'>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
      <HccecoMsg name="kimi" msg="Hello how are you"/>
     </div>
     }
    </>
    )
}

export default HccecoLinksMsg