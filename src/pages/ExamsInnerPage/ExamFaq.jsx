import React from 'react'
import Navbar from '../../../components/Navbar'
import { useLocation } from 'react-router-dom'
import FaqQuestionAnswer from '../../../components/FaqQuestionAnswer'
import ExamInnerNavbar from '../../../components/ExamComponents/ExamInnerNavbar'
import HeadMeta from '../../HeadMeta'
import ExamSideBar from '../../../components/ExamComponents/ExamSideBar'

const ExamFaq = () => {

  const title = useLocation()
  return (
    <>
    <Navbar/>
    <HeadMeta title="Exam FAQ"/>
    <ExamInnerNavbar/>
    <div className='grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
      <ExamSideBar data={[{'name':'DEFINITION','url':'/exam/about/definition'},{'name':'EXAM HIGHLIGHTS','url':'/exam/about/exam-highlights'},{'name':'IMPORTANT DATES','url':'/exam/about/important-dates'},{'name':'EXAM PATTERN','url':'/exam/about/exam-pattern'},{'name':'EXAM SYLLABUS','url':'/exam/about/exam-syllabus'},{'name':'IMPORTANT EXAM BOOKS','url':'/exam/about/important-exam-books'},{'name':'EXAM HELPLINE','url':'/exam/about/exam-help'},{'name':'EXAM PREVIOUS YEAR CUTOFF','url':'/exam/about/previous-year-cutoff'},{'name':'PREVIOUS YEAR PAPERS','url':'/exam/about/previous-year-papers'}]}/> 
      </div>

      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      <div className='col-start-4 col-end-13 bg-white h-screen'>
       {/* FAQ Question */}
       <div className='flex flex-col lg:ml-20 ml-5 py-10 lg:mr-20 mr-5'>
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