import React, { useState } from 'react'
import { RiImageAddLine,RiAtLine, RiLink } from 'react-icons/ri'
import {RxDotsVertical} from 'react-icons/rx'
const CommentBox = () => {
  const [commentMenu,setCommentMenu] = useState(false)
  return (
    <div className='flex lg:flex-row shadow-xl flex-col items-center lg:border-2 lg:border-t3/20 rounded-md px-3 lg:px-10 py-3'>
      <div className='flex items-center w-full'>
      <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-9 h-8 rounded-full'/>
      <input type="text" placeholder="What's in your mind, Argha?" className='text-xs border-none w-full h-5 outline-none text-t2 px-2'/>     
      
      {/* Comment Box Menu */}
      <div className='block'>
       <RxDotsVertical onClick={()=>setCommentMenu(true)}  className='lg:hidden'/>
       <div onMouseLeave={()=>setCommentMenu(false)} className={`${commentMenu ?'absolute' :'hidden'} lg:right-96 right-10 w-fit h-fit shadow-xl bg-white px-5 py-3`}>
        <div className='flex flex-col'>
         <a className='cursor-pointer hover:underline text-xs'>Post</a>
         <a className='cursor-pointer hover:underline text-xs'>Hire</a>
         <a className='cursor-pointer hover:underline text-xs'>Question</a>
         <a className='cursor-pointer hover:underline text-xs'>Announcement</a>
         <a className='cursor-pointer hover:underline text-xs'>Offer Services</a>
        </div> 
       </div>
      </div>
      

      </div>
      <div className='flex space-x-3 border-t-2 lg:w-fit w-full text-xl lg:py-0 lg:mt-0 py-2 mt-2'>
        <RiLink className='hover:text-t1 cursor-pointer'/>
        <RiImageAddLine className='hover:text-t1 cursor-pointer'/>
        <RiAtLine className='hover:text-t1 cursor-pointer'/>
        {/* Comment Box Menu */}
      <div  className='block'>
       {commentMenu ? <RxDotsVertical onClick={()=>setCommentMenu(false)} className='hidden lg:flex hover:text-t1 cursor-pointer'/>:<RxDotsVertical onClick={()=>setCommentMenu(true)} className='hidden lg:flex hover:text-t1 cursor-pointer'/>}
       <div className={`${commentMenu ?'absolute' :'hidden'} lg:right-96 right-10 w-fit h-fit shadow-xl bg-white px-5 py-3`}>
        <div onMouseLeave={()=>setCommentMenu(false)} className='flex flex-col space-y-3 w-full'>
         <a className='cursor-pointer hover:underline text-xs'>Post</a>
         <a className='cursor-pointer hover:underline text-xs'>Hire</a>
         <a className='cursor-pointer hover:underline text-xs'>Question</a>
         <a className='cursor-pointer hover:underline text-xs'>Announcement</a>
         <a className='cursor-pointer hover:underline text-xs'>Offer Services</a>
        </div> 
       </div>
      </div>
      </div>
    </div>
  )
}

export default CommentBox