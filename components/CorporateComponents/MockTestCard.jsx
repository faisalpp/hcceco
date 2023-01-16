import React from 'react'
import { FaQuestionCircle, FaTimesCircle, FaBook, FaRegTimesCircle, FaCalendarTimes, FaHourglassStart} from 'react-icons/fa'

const MockTestCard = ({topic,testNo,questions,marks,mins,shortTrickUrl,startTestUrl,downloadWorksheet="/"}) => {
  return (
    <div className='flex items-center space-x-96 px-10 py-5 w-11/12 border-2 shadow-lg rounded-md border-t3/30'>
    <div className='flex flex-col space-y-2'>
     <h3 className='text-t1 font-bold text-[15px]'>{topic}</h3>
     <h3 className='text-t3 text-xs'>Mocktest {testNo}</h3>
     <div className='flex text-xs text-t3/50 mt-2 space-x-5'>
     <span className='flex'><FaQuestionCircle className='mr-1'/> {questions} Questions</span>
     <span className='flex'><FaBook className='mr-1'/> {marks} Marks</span>
     <span className='flex'><FaHourglassStart className='mr-1'/> {mins} Time</span>
     </div>
     <div className='flex text-green-500 space-x-5 text-xs underline'><a href={shortTrickUrl}>Learn Short Tricks</a><a href={downloadWorksheet}>Download Worksheet</a></div>
    </div> 
    <div className='flex text-[11px] space-x-10'>
      <a href={startTestUrl} className='flex border-2 bg-t1/20 px-8 py-2 rounded-md'>Start Now</a>
    </div>
   </div>
  )
}

export default MockTestCard