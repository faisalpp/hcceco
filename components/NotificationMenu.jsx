import React,{ useContext, useState} from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { AppContext } from '../context/GlobalContext'

const NotificationMenu = () => {
    const nm = useContext(AppContext)
  return (
    <div id="main-wrapper" className={` ${nm.ntfState ? 'lg:absolute' : 'hidden'} z-20 w-full h-full bg-t1/70 -mt-2`}>
     <div id="notific-panel-wrapper" className='flex justify-end w-full h-full'>
      <div id="notific-panel-body" className='bg-white w-96 px-5'>
       <div  className='flex items-center space-x-48 mt-10 text-t1'>
        <h3 id="heading" className='text-t1'>Notification</h3><button onClick={()=>nm.setNtfState(false)} className='cursor-pointer rounded-full px-2 py-2 w-fit h-10'><RiCloseFill className='hover:text-lg'/></button>
       </div>
    
       {/* Notification Item */}
       <div className='flex flex-col mt-5'>
        <div className='flex items-center'><BsDot className='text-t1 text-4xl'/><p className='w-72 text-xs'>Argha Paul Liked your post Argha Paul Liked your post</p></div>
       </div>
 
      </div>
     </div>  
    </div>
  )
}

export default NotificationMenu