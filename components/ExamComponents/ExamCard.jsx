import React from 'react'
import { RiArrowDropRightFill, RiVipDiamondFill } from 'react-icons/ri'

const ExamCard = ({clgName,testName,clgNumbers,appDate,rsltDate,overviewUrl,syllabusUrl,ptrnUrl,updateUrl,applyUrl}) => {
  return (
    <div className='flex w-11/12 ml-10 mt-10 mb-5 px-5 py-10 space-x-5 bg-b3/30'>
     <img src="/public/college.jpg" className='w-16 h-16'/>
     <div className='flex'>
       {/*Card Information left  */}
      <div className='flex flex-col space-y-2'>
        <div className='flex flex-col'>
        <h3 className='text-xl font-semibold'>{clgName}</h3>
        <p className='text-sm w-[330px]'>{testName}</p>
        </div>
        
        <h3 className='text-sm text-t1'>{clgNumbers} Colleges Accepting this Exam</h3>
        <div className='flex text-xs'>
         <a href={overviewUrl} className='flex underline items-center'>Overview <RiArrowDropRightFill className='text-2xl'/></a>
         <a href={syllabusUrl} className='flex underline items-center'>Syllabus <RiArrowDropRightFill className='text-2xl'/></a>
         <a href={ptrnUrl} className='flex underline items-center'>Exam Pattern <RiArrowDropRightFill className='text-2xl'/></a>
        </div>
      </div>
      <div className='flex flex-col space-y-12 space-x-5'>
       
       <div className='flex space-x-5'>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 text-sm font-bold'><RiVipDiamondFill className='text-green-500'/><h3>Application Date</h3></div>
         <h3 className='text-xs text-t3'>{appDate}</h3>
        </div>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 text-sm font-bold'><RiVipDiamondFill className='text-red-500'/><h3>Exam Date</h3></div>
         <h3 className='text-xs text-t3'>{rsltDate}</h3>
        </div>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 text-sm font-bold'><RiVipDiamondFill className='text-yellow-500'/><h3>Result Date</h3></div>
         <h3 className='text-xs text-t3'>{rsltDate}</h3>
        </div>
       
       </div>
      {/* Buttons */}
      <div className='flex items-center px-20 space-x-5'>
       <a href={updateUrl} className='border-2 border-t3 w-fit h-fit px-5 py-2 text-sm'>Get Updates</a>
       <a href={applyUrl} className='bg-t1/40 w-fit h-fit px-5 py-2 text-sm'>How to Apply</a>
      </div>
      
      </div>
     </div>
    </div>
  )
}

export default ExamCard