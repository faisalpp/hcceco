import React from 'react'
import HeadMeta from '../../HeadMeta'
import Navbar from '../../../components/Navbar'
import MockTestTitle from '../../../components/CorporateComponents/MockTestTitle'
import { RiPauseCircleLine } from 'react-icons/ri'

const MockTestQuestioner = () => {
  return (
    <>
    <HeadMeta title="Search Profile"/>
    <Navbar/>
    <MockTestTitle testNo="1" subject="Reasoning" topic="Topic Name"/>
    <main className='grid grid-cols-14 bg-white'>
     
     {/* Mock Test Card */}
     <div className='col-start-1 col-end-8 ml-5'>
     <div className='flex flex-col mt-10'>
      <div className='flex'>
        <div className='flex space-x-10'><h3>Question-1</h3><h3>Marks: +0, -0</h3> <h3>0/30</h3></div>
        <button><RiPauseCircleLine/></button>
      </div>
      {/* Individual Qustion */}
      <div className='flex flex-col mt-5'>
        <h3>What is The Meaning of Reasoning?</h3>
        <img src="/public/college.jpg" className='w-10 h-10'/>
        <div>
         <div><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
         <div><input type="checkbox"/><h3>Lorem Ipsum Slit Amit</h3></div>  
        </div>
      </div>
      </div>
     </div>
     {/* Mock Test Card End Here */}
     
     <div className='col-start-8 col-end-12 flex justify-center'>
      <h3>ScoreCard</h3>
     </div>
    </main>
    </>
  )
}

export default MockTestQuestioner