import React,{ useContext, useState} from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { AppContext } from '../context/GlobalContext'

const NotificationMenu = () => {
    const state = useContext(AppContext)
  return (
    <div id="main-wrapper" className={` ${state.ntfState ? 'lg:absolute' : 'hidden'} z-30 w-full h-full bg-t1/70 -mt-2`}>
     <div id="notific-panel-wrapper" className='flex justify-end w-full h-full'>
      <div id="notific-panel-body" className='bg-white w-[450px] px-5'>
       <div  className='flex items-center space-x-64 mt-10 text-t1'>
        <h3 id="heading" className='text-t1'>Notification</h3><button onClick={()=>state.setNtfState(false)} className='cursor-pointer rounded-full px-2 py-2 w-fit shadow-xl'><RiCloseFill className='text-lg'/></button>
       </div>
    
       {/* Notification Item */}
       <div className='flex flex-col mt-10'>
        <div className='flex items-center'><BsDot className='text-t1 text-4xl'/><p className='w-72 text-xs'>Argha Paul Liked your post Argha Paul Liked your post</p><span className='text-xs text-t3'>19 Sep 22</span></div>
       </div>
 
      </div>
     </div>  
    </div>
  )
}

export default NotificationMenu