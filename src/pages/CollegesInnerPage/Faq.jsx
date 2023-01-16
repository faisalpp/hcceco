import React, { useState } from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import { NavLink,useLocation } from 'react-router-dom'
import FaqQuestionAnswer from '../../../components/FaqQuestionAnswer'

const Faq = () => {
  const title = useLocation()
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
      {/* Side Menu */}
      <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
       {/* FAQ Links SideBar */}
       <div className='flex flex-col py-5 bg-white w-60 h-screen mb-10 rounded-md mt-7'>
        <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>GENERAL</h3></div></NavLink>
        <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>COURSE & FEES</h3></div></NavLink>
        <NavLink to="/college/courses/med"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>SCHOLERSHIP</h3></div></NavLink>
        <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>PLACEMENTS</h3></div></NavLink>
       </div>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white'>
       {/* FAQ Question */}
       <div className='flex flex-col mt-10 ml-20 mr-20'>
        <h3 className='text-xl text-t1'>FAQ</h3>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
         <FaqQuestionAnswer question="What is Eligibility Criteria for ScholerShip" answer="       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum debitis eligendi explicabo voluptas repudiandae quasi obcaecati autem. Mollitia, molestiae porro fugit, explicabo ad deserunt, sint hic libero fugiat incidunt aspernatur."/>
       </div>
      </div>
     </div>
    </CollegeInnerPageLayout>
  )
}

export default Faq