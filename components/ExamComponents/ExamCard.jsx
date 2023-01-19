import React from 'react'
import { RiArrowDropRightFill, RiVipDiamondFill } from 'react-icons/ri'

const ExamCard = ({clgName,testName,clgNumbers,appDate,rsltDate,overviewUrl,syllabusUrl,ptrnUrl,updateUrl,applyUrl}) => {
  return (
    <div className='flex lg:w-11/12 w-80 lg:ml-10 ml-5 mt-10 mb-5 lg:px-5 lg:py-10 py-5 px-5 lg:space-x-5 bg-b3/30'>
     <img src="/public/college.jpg" className='lg:flex hidden w-16 h-16'/>
     <div className='flex flex-col w-full'>
       {/*Card Information left  */}
      <div className='flex flex-col lg:space-y-2'>
       <div className='flex lg:flex-row flex-col'>
        
        <div className='flex flex-col lg:items-start lg:space-y-0 space-y-3 items-center'>
        <h3 className='text-lg font-semibold'>{clgName}</h3>
        <p className='lg:text-sm text-[14px] text-center'>{testName}</p>
        <h3 className='flex lg:text-sm text-[14px] underline lg:text-left text-center text-t1'>{clgNumbers} Colleges Accepting this Exam</h3>
        </div>

        <div className='flex lg:space-x-12 mt-3 justify-center space-x-5'>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 lg:text-sm text-[10px] lg:font-bold font-normal'><RiVipDiamondFill className='text-green-500'/><h3>Application Date</h3></div>
         <h3 className='lg:text-xs text-[9px] text-t3'>{appDate}</h3>
        </div>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 lg:text-sm text-[10px] lg:font-bold font-normal'><RiVipDiamondFill className='text-red-500'/><h3>Exam Date</h3></div>
         <h3 className='lg:text-xs text-[9px] text-t3'>{rsltDate}</h3>
        </div>
        <div className='flex flex-col items-center'>
         <div className='flex items-center space-x-1 lg:text-sm text-[10px] lg:font-bold font-normal'><RiVipDiamondFill className='text-yellow-500'/><h3>Result Date</h3></div>
         <h3 className='lg:text-xs text-[9px] text-t3'>{rsltDate}</h3>
        </div>
       </div> 
      </div> 
      </div>
      <div className='flex flex-col space-y-12 space-x-5'>
       
      {/* Buttons */}
      <div className='flex lg:flex-row flex-col lg:items-center lg:space-x-52 space-y-3'>
      <div className='flex lg:text-xs text-[10px] lg:space-x-0 space-x-10 mt-3 justify-center'>
         <a href={overviewUrl} className='flex underline items-center'>Overview <RiArrowDropRightFill className='lg:flex hidden text-2xl'/></a>
         <a href={syllabusUrl} className='flex underline items-center'>Syllabus <RiArrowDropRightFill className='lg:flex hidden text-2xl'/></a>
         <a href={ptrnUrl} className='flex underline items-center'>Exam Pattern <RiArrowDropRightFill className='lg:flex hidden text-2xl'/></a>
      </div>
      
      <div className='flex items-center space-x-10 justify-center'>
       <a href={updateUrl} className='border-2 border-t3/20 rounded-md w-fit h-fit px-5 py-2 lg:text-sm text-[10px]'>Get Updates</a>
       <a href={applyUrl} className='bg-t1/30 w-fit h-fit px-5 py-2 rounded-md lg:text-sm text-[10px]'>How to Apply</a>
      </div>
      
      </div>
      
      </div>
     </div>
    </div>
  )
}

export default ExamCard