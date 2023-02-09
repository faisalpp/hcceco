import React, { useState } from 'react'
import { RiImageAddLine,RiAtLine, RiLink } from 'react-icons/ri'
import {RxDotsVertical} from 'react-icons/rx'
const CommentBox = () => {
  const [commentMenu,setCommentMenu] = useState(false)
  // Show Hide msg body
  const [showMsg,setShowMsg] = useState(false);
  const [postType,setPostType] = useState('');
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const onSubmit = (event) =>{
    event.preventDefault();
    alert('Post Type:'+''+postType+'</br>'+'Title:'+'title'+'</br>'+'Description: '+''+description);
    setTitle('');
    setDescription('');
    setPostType('');
    setShowMsg(false);
  }

  const showMsgBody = (type) => {
    setPostType(type);
    setShowMsg(true);
    setCommentMenu(false);
  }

  return (
    <div className='flex lg:shadow-xl shadow-lg flex-col lg:border-2 lg:border-t3/20 rounded-md px-3 lg:px-10 py-3'>
     <div className='flex lg:flex-row flex-col items-center'>
      <form onSubmit={(event)=>{alert(msg);event.preventDefault();setMsg('')}} className='flex items-center w-full'>
      <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-9 h-8 rounded-full'/>
      <h3 className='text-xs font-semibold border-none w-full px-2'>What's in your mind, Argha?</h3>     
      </form>
      
      <div className='flex space-x-3 lg:w-fit w-full text-xl lg:py-0 lg:mt-0 py-2 mt-2'>
        <RiLink className='hover:text-t1 cursor-pointer'/>
        <RiImageAddLine className='hover:text-t1 cursor-pointer'/>
        <RiAtLine className='hover:text-t1 cursor-pointer'/>
        {/* Comment Box Menu */}
      <div className='block'>
       {commentMenu ? <RxDotsVertical onClick={()=>setCommentMenu(false)} className='flex hover:text-t1 cursor-pointer'/>:<RxDotsVertical onClick={()=>setCommentMenu(true)} className='flex hover:text-t1 cursor-pointer'/>}
       <div className={`${commentMenu ? 'absolute' :'hidden'} lg:right-96 right-10 w-fit h-fit shadow-xl bg-white px-5 py-3 z-10`}>
        <div className='flex flex-col space-y-3 w-full'>
         <a onClick={()=>showMsgBody('post')} className='cursor-pointer hover:underline text-xs'>Post</a>
         <a onClick={()=>showMsgBody('hire')} className='cursor-pointer hover:underline text-xs'>Hire</a>
         <a onClick={()=>showMsgBody('question')} className='cursor-pointer hover:underline text-xs'>Question</a>
         <a onClick={()=>showMsgBody('announcement')} className='cursor-pointer hover:underline text-xs'>Announcement</a>
         <a onClick={()=>showMsgBody('service')} className='cursor-pointer hover:underline text-xs'>Offer Services</a>
        </div> 
       </div>
      </div>
     </div> 


      </div>
      <form onSubmit={(event)=>onSubmit(event)} className={` ${showMsg ?'flex':'hidden'} flex-col mt-2 space-y-3 ease-out delay-1000`}>
      <input type="text" value={postType} onChange={(e)=>setPostType(e.target.value)}  className='border-2 border-t3/30 rounded-md h-10 focus:ring-0 outline-none text-sm'/>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Write Title Here...'  className='border-2 border-t3/30 rounded-md h-10 focus:ring-0 outline-none text-sm'/>
      <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Write Description Here...'  className='border-2 border-t3/30 rounded-md h-32 focus:ring-0 outline-none text-sm'></textarea>
      <div className='flex justify-center w-full'><button type='submit' className='bg-t1 w-fit px-7 py-1 rounded-md text-white'>Post</button></div>
      </form>
    </div>
  )
}

export default CommentBox