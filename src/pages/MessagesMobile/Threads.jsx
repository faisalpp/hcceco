import React from 'react'
import MobNavBar from '../../../components/MobileComponents/MobNavBar'
import { RiLink, RiSendBackward } from 'react-icons/ri'
import { TbSend } from 'react-icons/tb'
import MsgBody from '../../../components/MobileComponents/MsgBody'
import MsgReplay from '../../../components/MobileComponents/MsgReplay'

const Threads = () => {
  return (
    <>
    <MobNavBar/>
    <div className='flex flex-col h-screen bg-white'>
      {/* Card */}
      <div className='flex mt-5 ml-10 space-x-2'>
        <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-12 h-12 rounded-full'/>
        <div className='flex flex-col'><h3 className='text-lg'>Maksim Smathin</h3><div className='text-t3/50 text-xs'><h4>Last active <span>17:00</span></h4></div></div>
      </div>

      <div style={{'height':'calc(100vh - 80px)'}} className='flex flex-col py-24 overflow-scroll'>
      <div className='text-center text-sm text-t3/50 mt-5'><h3 className='text-t1'>Yesterday</h3></div> 
       <MsgBody/>
       <MsgReplay/>
       <MsgBody/>
       <MsgReplay/>
      </div> 
       {/* Msg Box */}
       <div className='fixed bottom-0 h-24 w-full bg-white'>
        <div className='flex w-full items-center justify-center'>
        <div className='flex justify-center mt-4 shadow-lg border-2 w-4/5 rounded-md items-center bg-white outline-none focus:ring-0'><RiLink className='text-xl'/><input type="text" placeholder='Type a message...' className='w-52 h-14 text-sm border-none'/><TbSend className='text-xl'/></div>
        </div>
       
       </div>


    </div>
    </>
  )
}

export default Threads