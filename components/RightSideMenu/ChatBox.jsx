import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { RiLink, RiSendPlane2Fill, RiSendPlaneFill } from 'react-icons/ri'
import { TbSend } from 'react-icons/tb'

const ChatBox = () => {
  return (
    <>
    
    {/* Message */}
    <div className='absolute right-96 w-80 h-[454px] bg-white shadow-xl'>
     <div className='flex bg-t1 px-2 py-3 space-x-3'>
       <img src="/public/avtar.png" className='w-10 h-10 rounded-full'/>
      <div className='flex space-x-16'>
       <div className='flex flex-col text-white'> 
        <h3 className='text-[15px]'>A.G College Of Tech</h3>
        <h3 className='text-[11px]'>Active 2Hrs Ago</h3>
       </div>
       <AiFillCloseSquare className='text-white text-xl'/>
      </div>  
     </div>
     <div className='absolute bottom-0 bg-b4 w-full'>
      <div className='flex items-center px-2 w-full'><RiLink/><div className='flex items-center'><input type="search" placeholder='Write Message Here...' className='bg-b4 outline-none border-none w-64 text-sm'/><RiSendPlane2Fill/></div></div>
     </div>
   </div>
    </>
  )
}

export default ChatBox