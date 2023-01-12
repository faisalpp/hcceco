import React from 'react'
import { RiImageAddLine,RiAtLine } from 'react-icons/ri'
import {RxDotsVertical} from 'react-icons/rx'

const MessageBox = () => {
  return (
   <div className='flex flex-col items-center border-2 border-b3 rounded-md px-10 py-3'>
    <div className='flex space-x-44 items-center'>
     <div className='flex items-center space-x-5 w-full'>
      <img src="/avtar.png" className='w-9 h-8 rounded-full'/>
      <h3 className='text-t3'>What's in your mind, Argha?</h3>
     </div>
     {/*Comment Box Actions  */}
     <div className='flex space-x-3 w-fit text-xl text-t3'>
      <RiImageAddLine className='hover:text-t1 cursor-pointer'/>
      <RiAtLine className='hover:text-t1 cursor-pointer'/>
      <RxDotsVertical className='hover:text-t1 cursor-pointer'/>
     </div> 
    </div>

    {/* Message Description */}
    <div className='border-2 border-t3/30 w-full h-12 rounded-md mt-5 px-2'>
     <input className='w-full h-full border-none' placeholder='Write Title Here..'/>     
   </div> 

    {/* Message Description */}
    <div className='border-2 border-t3/30 w-full h-52 rounded-md mt-5'>
      <textarea className='w-full h-full border-none' placeholder='Write Description Here..'></textarea>
    </div>

    {/* Message Post Button */}
    <button className='bg-t1 mt-5 text-white px-12 py-3 rounded-md'>Post</button>

    {/* Suggested Links here */}
    
   
   </div> 
  )
}

export default MessageBox