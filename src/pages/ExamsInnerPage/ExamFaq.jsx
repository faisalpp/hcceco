import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { NavLink, useLocation } from 'react-router-dom'
import FaqQuestionAnswer from '../../../components/FaqQuestionAnswer'
import ExamInnerNavbar from '../../../components/ExamComponents/ExamInnerNavbar'

const ExamFaq = () => {
  const [tabIndex,setTabIndex] = useState(0)
  const title = useLocation()
  return (
    <>
    <Navbar/>
    <ExamInnerNavbar/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
        {/* COurses inner menu */}
        <div className='flex lg:flex-col flex-row lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-80 h-fit lg:w-72 w-[360px] lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2'>
        <div className={`${title.pathname === "/exam/faq" ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-t3 w-max'>GENERAL</p></div>
        </div>
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      <div className='col-start-4 col-end-13 bg-white h-screen'>
       {/* FAQ Question */}
       <div className='flex flex-col ml-20 py-10 mr-20'>
        <h3 className='text-xl text-t1'>FAQ</h3>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
       </div>
      </div>
      </main>

    </div>
    </>
  )
}

export default ExamFaq