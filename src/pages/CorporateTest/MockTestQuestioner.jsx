import React from 'react'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import MockTestTitle from '../../../components/CorporateComponents/MockTestTitle'
import { RiPauseCircleLine } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { TbArrowRotaryStraight } from 'react-icons/tb'

const MockTestQuestioner = () => {
  
  const no = [...Array(49).keys()];
  var indents = [];
  
  return (
    <>
    <HeadMeta title="Search Profile"/>
    <Navbar/>
    <MockTestTitle testNo="1" subject="Reasoning" topic="Topic Name"/>
    <main style={{'height':'calc(100vh - 160px'}} className='grid grid-cols-12 bg-white'>
     
     {/* Mock Test Card */}
     <div className='col-start-1 col-end-8 ml-5'>
     <div className='flex flex-col mt-5 h-3/4 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden'>
      <div className='flex items-center space-x-80 border-b-2 border-t3/20'>
        <div className='flex space-x-10 items-center'><h3 className='text-xl text-t1'>Question-1</h3><h3 className='text-[16px] text-t3'>Marks: +0, -0</h3><h3 className='text-[16px] text-t3'>0/30</h3></div>
        <button className='flex flex-col items-center text-t1'><RiPauseCircleLine className='text-4xl'/><span>Pause</span></button>
      </div>
      {/* Individual Qustion */}
      <div className='flex flex-col mt-3'>
        <h3 className='text-[16px] font-medium'>What is The Meaning of Reasoning?</h3>
        <img src="/public/college.jpg" className='w-[700px] h-[221px]'/>
        <div className='flex flex-col space-y-5 mt-5'>
         <div className='flex items-center space-x-2'><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div className='flex items-center space-x-2'><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div className='flex items-center space-x-2'><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div className='flex items-center space-x-2'><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
        </div>
      </div>
      </div>
      <div className='flex items-center space-x-20'>
        <div className='flex mt-10 ml-5 space-x-6'>
          <button className='bg-t3/20 rounded-md px-8 py-2 text-sm'>Skip</button>
          <button className='bg-t3/20 rounded-md px-8 py-2 text-sm'>Clear Response</button>
          <button className='bg-t3/20 rounded-md px-8 py-2 text-sm'>Mark For Review</button>
        </div>
          <button className='bg-t3/50 mt-10 rounded-md px-8 py-2 h-fit text-sm'>Save & Next</button>
      </div>
     </div>
     {/* Mock Test Card End Here */}
     
     <div className='col-start-8 col-end-13 bg-t3/10 flex flex-col items-center'>
      {/* Timer */}
      <div className='flex flex-col bg-white w-1/2 mt-10'>
        <h3 className='text-center underline mt-2'>Time Left</h3>
        <div className='flex mt-2 text-sm justify-center space-x-10 mb-5'>
          <div className='flex flex-col items-center'><span className='text-t3'>01</span><span>Hours</span></div>
          <div className='flex flex-col items-center'><span className='text-t3'>60</span><span>Minuts</span></div>
          <div className='flex flex-col items-center'><span className='text-t3'>30</span><span>Seconds</span></div>
        </div>
      </div>
      {/* Test Answer Question Data */}
      <div className='flex mt-2'>
       <div className='flex flex-col text-[13px]'>
        <div className='flex items-center'><BsDot className="text-5xl text-green-500"/><span>Answered-</span><span>03</span></div>
        <div className='flex items-center'><BsDot className="text-5xl text-orange-500"/><span>Not Answered-</span><span>47</span></div>
       </div> 
       <div className='flex flex-col text-[13px]'>
        <div className='flex items-center'><BsDot className="text-5xl text-t3/60"/><span>Not Attempted-</span><span>12</span></div>
        <div className='flex items-center'><BsDot className="text-5xl text-t1"/><span>Marked For Review-</span><span>14</span></div>
       </div> 
      </div>

      {/* Question Pallete */}
      <div className='flex flex-col bg-white w-1/2'>
        <h3 className='text-t1 text-center text-[16px] mt-3'>Question Pallete</h3>
        <div className='grid grid-cols-5 mt-3 px-3 mb-10 gap-3 h-36 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden'>
          {no.map((item)=><div className='flex justify-center items-center text-white bg-green-500 w-[37px] h-[33px] rounded-md'><span>{item}</span></div>)}
        </div>
      </div>
      {/* Submit Test */}
      <div className='flex justify-center mt-10'>
        <button className='bg-t3/50 px-5 py-2 rounded-md text-sm'>Submit Test</button>
      </div>

     </div>
    </main>
    </>
  )
}

export default MockTestQuestioner