import React from 'react'
import { RiImageAddLine,RiAtLine } from 'react-icons/ri'
import {RxDotsVertical} from 'react-icons/rx'
const CommentBox = () => {
  return (
    <div className='flex items-center border-2 border-b3 rounded-md px-10 py-3'>
      <div className='flex items-center w-full'>
      <img src="/public/avtar.png" className='w-9 h-8 rounded-full'/>
      <input type="text" placeholder="What's in your mind, Argha?" className='text-xs border-none w-full h-5 outline-none text-t2 px-2'/>     
      </div>
      <div className='flex space-x-3 w-fit text-xl'>
        <RiImageAddLine className='hover:text-t1 cursor-pointer'/>
        <RiAtLine className='hover:text-t1 cursor-pointer'/>
        <RxDotsVertical className='hover:text-t1 cursor-pointer'/>
      </div>
    </div>
  )
}

export default CommentBox