import React from 'react'
import { useState } from 'react'
import { AiFillCloseSquare, AiOutlineSend } from 'react-icons/ai'
import { RiLink, RiSendPlane2Fill } from 'react-icons/ri'
import ChatUser from '../ChatBoxDesk/ChatUser'

const ChatBox = () => {
  const [chatBox,setChatBox] = useState(false);
  return (
    <>
    {/* Message */}
    <div className={` ${chatBox ? 'hidden' :'absolute'} right-96 w-80 h-[454px] bg-white shadow-xl`}>
     <div className='flex bg-t1 px-2 py-3 space-x-3'>
       <img src="/public/avtar.png" className='w-10 h-10 rounded-full'/>
      <div className='flex space-x-16'>
       <div className='flex flex-col text-white'> 
        <h3 className='text-[15px]'>A.G College Of Tech</h3>
        <h3 className='text-[11px]'>Active 2Hrs Ago</h3>
       </div>
       <AiFillCloseSquare onClick={()=>setChatBox(true)} className='text-white text-xl cursor-pointer'/>
      </div>  
     </div>
     
     <div style={{'height':'calc(554px - 170px)'}} className='flex flex-col overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-t1'>
      <ChatUser replay="true"/>
      <ChatUser replay="false"/>
     </div>
     
     <div className='absolute bottom-0 bg-b4 w-full'>
      <div className='flex items-center px-2 w-full'><RiLink className='cursor-pointer'/><div className='flex items-center'><input type="search" placeholder='Write Message Here...' className='bg-b4 outline-none border-none w-64 h-12 focus:ring-0 text-sm'/><AiOutlineSend className='cursor-pointer'/></div></div>
     </div>
   </div>
    </>
  )
}

export default ChatBox