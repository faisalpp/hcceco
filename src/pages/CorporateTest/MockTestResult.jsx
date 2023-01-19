import React from 'react'
import CircularProgressBar from '../../../components/CorporateComponents/CircularProgressBar'
import Navbar from '../../../components/Navbar'
import { TiTick } from 'react-icons/ti'
import { AiFillMinusCircle } from 'react-icons/ai'
import {IoMdCloseCircle} from 'react-icons/io'
import { RiArrowGoBackLine, RiArrowLeftLine } from 'react-icons/ri'

const MockTestResult = () => {
  return (
    <>
    <Navbar/>
    <div style={{'height':'calc(100vh - 105px)'}} className=' bg-white w-full'>
      <div className='text-[29px]'><h3 className='text-t1 text-center py-5'>Congratulation! You've completed the test</h3></div>
      <div className='flex w-full space-x-52 justify-center'>
      <div className='flex w-[361px] h-[361px] mt-10 ml-20'>
       <CircularProgressBar crt="80" wrg="50" skp="40"/>
      </div>
      <div className='flex flex-col'>
         {/*Score Card  */}
        <div className='bg-white shadow-2xl px-10 py-5'>
          <h3 className='font-bold text-[35px]'>Total Score: <span>44/50</span></h3>  
         <div className='flex flex-col text-lg text-t3 space-y-2'>
           <h3>Percentile: <span>44/50</span></h3>  
           <h3>Accuracy: <span>44/50</span></h3>  
           <h3>Time Take <span>01Hrs</span><span>22Mins</span><span>05Secs</span></h3>  
         </div>   
        </div>
        {/* 2nd Card */}
        <div className='flex flex-col bg-white h-auto shadow-xl mt-5 items-center py-5 space-y-5'>
         <div className='flex items-center space-x-5'><div className='bg-green-500 rounded-full'><TiTick className='text-white text-2xl'/></div><h3 className='text-green-500'>14 Correct Questions</h3></div>
         <div className='flex items-center space-x-5'><IoMdCloseCircle className='text-red-500 text-3xl'/><h3 className='text-green-500'>14 Correct Questions</h3></div>
         <div className='flex items-center space-x-5'><AiFillMinusCircle className='text-t3/50 text-3xl'/><h3 className='text-green-500'>14 Correct Questions</h3></div>
        </div>
           {/* Retake or back  */}
        <div className='flex mt-10'>
          <div>
            <h3 className='flex items-center text-lg text-t3/80'><RiArrowGoBackLine className='mr-2'/> Want to Re-Attempt the Test</h3>
            <h3 className='flex items-center text-lg text-t3/80'><RiArrowLeftLine className='mr-2'/>Back to Reasoning Page</h3>
          </div>
        </div>
      
      </div>
     </div>
     </div>
    </>
  )
}

export default MockTestResult