import React from 'react'
import ExamSideBar from '../../../../components/ExamComponents/ExamSideBar';
import Navbar from '../../../../components/Navbar';
import HeadMeta from '../../../HeadMeta';
import ExamInnerNavbar from '../../../../components/ExamComponents/ExamInnerNavbar';


const ImportantExamBook = () => {
  return (
    <>
    <HeadMeta title="Exam Defination"/>
    <Navbar/>
    <ExamInnerNavbar/>
    <div className='lg:grid lg:grid-cols-12 grid-flow-row-dense w-full'>
      <div className='lg:col-start-1 lg:col-end-4 flex lg:flex-col flex-row items-center'>   
       {/* Desktop Page Side Bar */}
       <ExamSideBar data={[{'name':'DEFINITION','url':'/exam/about/definition'},{'name':'EXAM HIGHLIGHTS','url':'/exam/about/exam-highlights'},{'name':'IMPORTANT DATES','url':'/exam/about/important-dates'},{'name':'EXAM PATTERN','url':'/exam/about/exam-pattern'},{'name':'EXAM SYLLABUS','url':'/exam/about/exam-syllabus'},{'name':'IMPORTANT EXAM BOOKS','url':'/exam/about/important-exam-books'},{'name':'EXAM HELPLINE','url':'/exam/about/exam-help'},{'name':'EXAM PREVIOUS YEAR CUTOFF','url':'/exam/about/previous-year-cutoff'},{'name':'PREVIOUS YEAR PAPERS','url':'/exam/about/previous-year-papers'}]}/> 
      </div>
      <main className='lg:col-start-4 lg:col-end-13 w-full h-screen'>
      <div className='flex flex-col w-full bg-white h-screen lg:py-10 py-5'>
      <div className='flex flex-col space-y-5 lg:ml-20 lg:mr-20 lg:mt-10 ml-5 mr-5'>
      <h3 className='font-semibold text-t1 text-xl'>Important Exam Books</h3> 
      <p className='lg:text-[16px] text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officiis iusto labore nesciunt dicta nihil saepe quas voluptatem minus excepturi, modi ipsum commodi quasi placeat enim aspernatur, minima ex sed!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut officia perspiciatis facere aut eveniet nostrum repudiandae. Voluptas amet, nostrum maxime id repudiandae sunt inventore quo sit cum porro neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eum illum fugit. Pariatur magni, commodi aspernatur doloremque, eaque quisquam adipisci quas recusandae tempora eveniet nesciunt magnam error tenetur, aut amet!</p>
     </div>
    </div>
    </main>
    </div>
    </>
  )
}

export default ImportantExamBook