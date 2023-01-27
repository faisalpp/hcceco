import React from 'react'
import { RiArrowDropRightFill, RiArrowRightCircleLine, RiArrowRightFill } from 'react-icons/ri'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'
import MobileFloats from '../MobileFloats'
import { NavLink } from 'react-router-dom'
import MockTestTitle from '../../../components/CorporateComponents/MockTestTitle'

const MockTestInstructions = () => {
  return (
    <>
    <HeadMeta title="Corporate"/>
    <Navbar/>
    <MobileFloats/>
    <div className='w-full h-screen bg-white'>
       <MockTestTitle testNo="1" subject="Reasoning" topic="Topic Name"/>
       {/* Instructions */}
       <div className='flex flex-col space-y-5 mt-20 lg:ml-32 ml-3'>
          <h3 className='text-t1 lg:text-3xl text-xl'>Instructions</h3>
          <div className='flex flex-col lg:text-lg text-sm space-y-5'>
            <h4>1- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>2- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>3- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>4- The test consist of 50 questions. Each question carry equal marks</h4>
            <h4>5- The test consist of 50 questions. Each question carry equal marks</h4>
          </div>
       </div>
       <div className='flex justify-center mt-10'><NavLink to="/corporate/mocktest/question/1"><button className='flex bg-t3/40 lg:px-20 px-8 items-center rounded-md py-3 lg:text-lg text-sm'>Start Test <RiArrowDropRightFill className='lg:text-2xl text-xl'/></button></NavLink></div>
    </div>
    </>
  )
}

export default MockTestInstructions