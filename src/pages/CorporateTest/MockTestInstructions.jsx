import React from 'react'
import { RiArrowDropRightFill, RiArrowRightCircleLine, RiArrowRightFill } from 'react-icons/ri'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'

const MockTestInstructions = () => {
  return (
    <>
    <HeadMeta title="Corporate"/>
    <Navbar/>
    <div className='w-full h-screen bg-white'>
       <div className='flex bg-t1 w-full py-8 justify-center'>
        <h3 className='flex items-center text-white text-3xl'>Test-1 <span className='text-lg'>/Resoning/Topic Name</span></h3>
       </div>
       {/* Instructions */}
       <div className='flex flex-col space-y-5 mt-20 ml-32'>
          <h3 className='text-t1 text-3xl'>Instructions</h3>
          <div className='flex flex-col text-lg space-y-5'>
            <h4>1- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>2- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>3- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>4- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>5- The test consist of 50 questions. Each question carry equal marks</h4>
          </div>
       </div>
       <div className='flex justify-center mt-10'><button className='flex bg-t3/40 px-20 rounded-md py-3 items-center text-lg'>Start Test <RiArrowDropRightFill className='text-2xl'/></button></div>
    </div>
    </>
  )
}

export default MockTestInstructions