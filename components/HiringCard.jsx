import React from 'react'
import { RxDotsVertical } from 'react-icons/rx'
import { RiChat3Line,RiSendPlane2Line } from 'react-icons/ri'
import {TbSend} from 'react-icons/tb'
import {ImPriceTag} from 'react-icons/im'
import HomeCardReplay from './HomeComponents/HomeCardReplay'

const HiringCard = () => {
  return (
  <div className='flex flex-col ml-10 mr-10 border-2 border-t2/20 rounded-md mb-10'>
   <div className='flex space-x-96  items-center w-full'>
    <div className='flex items-center px-10 py-5'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col'>
      <div className='flex items-center space-x-5 ml-3'>
        <h3 className='font-bold text-xs'>Noor Fatima</h3><span className='text-t2 text-[10px]'>Created a Hiring Post</span><span className='text-t2 text-[10px]'>2 Hrs</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[10px] text-t2'>
        <h3>Student | Lyalpur college of Technology</h3><div className="flex items-center space-x-1"><ImPriceTag/><h3> Monika & <span>4</span> Others</h3></div>
      </div>
     </div>
    </div>
     <RxDotsVertical className='hover:text-t1 text-xl cursor-pointer'/> 
   </div>

   {/* Person Asked Question Hidden */}
   <div className='hidden space-x-10 items-center'>
    <div className='flex items-center  px-10 py-5'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col'>
      <div className='flex items-center space-x-5 ml-3'>
        <h3 className='font-bold text-xs'>Noor Fatima</h3><span className='text-t2 text-[10px]'>Has Asked a Question</span><span className='text-t2 text-[10px]'>2 Hrs</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[10px] text-t2'>
        <h3>Student | Lyalpur college of Technology</h3><div className="flex items-center space-x-1"><ImPriceTag/><h3> Monika & <span>4</span> Others</h3></div>
      </div>
     </div>
    </div>
   </div> 
   
   

   <div className='bg-b3/40 ml-10 mr-10 rounded-sm px-5 py-3'><h3>Graphics Designer required!</h3></div>
   <div className='ml-10 mr-10 px-5 py-3'><p className='text-xs w-full'>Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke...<span className='text-green-500'>Read More</span></p></div>
   
   {/* CARD STATES ICONS */}
   <div className='flex items-center space-x-40 ml-10 border-t-2 border-b-2 border-t2 mb-10 mr-10 py-3'>
    <div className='flex text-lg space-x-10 px-5'>
      <div className='flex items-center cursor-pointer'><RiChat3Line/><span className='hover:underline'>125</span></div>
      <div className='flex items-center'><RiChat3Line/><span>125</span></div>
      <div className='flex items-center'><TbSend/><span>125</span></div>
    </div>
    <div className='text-xs w-full'><a className='hover:underline cursor-pointer'>View Opinions</a></div>
   
   </div>
   {/* All Replys Wrapper  Hidden to be Flex*/}
   <div className='flex flex-col h-fit overflow-scroll overflow-x-hidden mb-5'>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
   </div>

   <div className='flex space-x-5 items-center ml-10 mr-10 mb-10 w-full'>
    <div><img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/></div>
    <div><input type="text" placeholder="Write an opinion.." className='text-xs w-96 outline-none text-t2'/></div>
    <div><RiSendPlane2Line className='text-xl cursor-pointer'/></div>
   </div>
  </div>
  )
}

export default HiringCard