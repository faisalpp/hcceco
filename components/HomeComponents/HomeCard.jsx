import React,{useState} from 'react'
import { RxDotsVertical } from 'react-icons/rx'
import { RiChat3Line,RiSendPlane2Line, RiTimeFill } from 'react-icons/ri'
import {TbSend} from 'react-icons/tb'
import {ImPriceTag} from 'react-icons/im'
import HomeCardReplay from './HomeCardReplay'

const HomeCard = () => {
  
  const [cardMenu, setCardMenu] = useState(false);
  
  return (
  <div  className='flex flex-col ml-5 mr-5 lg:ml-10 lg:mr-10 lg:border-2 lg:shadow-none shadow-2xl lg:border-t2/20 rounded-md mb-10'>
   <div className='flex lg:space-x-20 items-center'>
    <div className='flex items-center px-5 lg:px-10 py-5'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col'>
      <div className='flex items-center space-x-3 lg:space-x-5 ml-3'>
        <h3 className='font-bold text-[10px] lg:text-xs'>Noor Fatima</h3><span className='lg:flex hidden text-t2 text-[10px]'>Created a Hiring Post</span><span className='lg:hidden text-orange-500 text-[10px]'>Hiring</span><span className='flex items-center text-t2 text-[10px]'><RiTimeFill/> 2 Hrs</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[9px] lg:text-[10px] text-t2'>
        <h3>Student | Lyalpur college of Technology</h3><div className="hidden lg:flex items-center space-x-1"><ImPriceTag/><h3> Monika & <span>4</span> Others</h3></div>
      </div>
     </div>
    </div>
     <div className='block'>
     <RxDotsVertical onClick={()=>setCardMenu(true)} className='hover:text-t1 text-xl cursor-pointer'/>
     <div onMouseLeave={()=>setCardMenu(false)} className={`${cardMenu ?'absolute' :'hidden'} lg:right-96 right-10 w-fit h-fit shadow-xl bg-white px-5 py-3`}><a className='cursor-pointer hover:underline text-xs'>Report</a></div> 
     </div>  
   
   </div>

   {/* Person Asked Question Hidden */}
   <div className='flex lg:space-x-10 items-center'>
    <div className='flex items-center px-5 lg:px-10 py-5'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col'>
      <div className='flex items-center space-x-3 lg:space-x-5 ml-3'>
        <h3 className='font-bold text-[10px] lg:text-xs'>Noor Fatima</h3><span className='flex lg:text-t3 text-orange-500 text-[9px] lg:text-[10px]'>Has Asked a Question</span><span className='flex items-center text-t2 text-[10px]'><RiTimeFill/> 2 Hrs</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[9px] lg:text-[10px] text-t2'>
        <h3>Student | Lyalpur college of Technology</h3><div className="hidden lg:flex items-center space-x-1"><ImPriceTag/><h3> Monika & <span>4</span> Others</h3></div>
      </div>
     </div>
    </div>

   </div> 
   
   

   <div className='lg:bg-b3/20 ml-2 lg:ml-10 lg:mr-10 lg:border-t-0 lg:border-b-0 border-t-2 border-b-2 border-t3/10 mr-2 text-sm lg:text-lg lg:rounded-sm px-5 py-3'><h3>Graphics Designer required!</h3></div>
   <div className='ml-2 lg:ml-10 mr-3 lg:mr-10 px-5 py-3'><p className='text-xs w-full'>Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke...<span className='text-green-500'>Read More</span></p></div>
   
   {/* CARD STATES ICONS */}
   <div className='flex items-center space-x-40 ml-3 lg:ml-10 border-t-2 border-b-2 border-t2/20 lg:mb-10 mb-3 mr-3 lg:mr-10 py-3'>
    <div className='flex text-[16px] lg:text-lg space-x-10 px-5'>
      <div className='flex items-center cursor-pointer'><RiChat3Line/><span className='hover:underline'>125</span></div>
      <div className='flex items-center'><RiChat3Line/><span>125</span></div>
      <div className='flex items-center lg:p-0 px-7'><TbSend/><span>125</span></div>
    </div>
    <div className='hidden lg:flex text-xs w-full'><a className='hover:underline cursor-pointer'>View Opinions</a></div>
    
   </div>
   {/* All Replys Wrapper  Hidden to be Flex*/}
   <div className='flex flex-col h-52 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden mb-5'>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
   </div>
   
   <div className='flex lg:hidden mb-2 text-xs w-full text-t3/50 ml-5'><a className='hover:underline cursor-pointer'>View All Opinions &#40;155&#41;</a></div>
   <div className='flex space-x-3 lg:space-x-5 items-center ml-2 mr-2 lg:px-5 lg:py-2 px-2 py-2 lg:ml-10 rounded-md lg:mr-10 mb-10 bg-t3/5 lg:w-3/2'>
    <div><img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/></div>
    <div><input type="text" placeholder="Write an opinion.." className='bg-b3/5 text-xs w-40 lg:w-72 outline-none text-t2'/></div>
    <div><RiSendPlane2Line className='ml-7 text-xl cursor-pointer'/></div>
   </div>
  </div>
  )
}

export default HomeCard