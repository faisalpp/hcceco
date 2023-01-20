import React, { useContext } from 'react'
import {MdLocationPin} from 'react-icons/md'
import {IoBook} from 'react-icons/io5'
import {FaRupeeSign} from 'react-icons/fa'
import {AiOutlineLike,AiOutlineUserAdd} from 'react-icons/ai'
import { TbArrowForwardUp } from 'react-icons/tb'
import {GrDocument} from 'react-icons/gr'
import { AppContext } from '../../context/GlobalContext'

const CollegeInfoCard = () => {
  const state = useContext(AppContext)
  return (
    <div className='flex flex-col w-72 h-auto mb-5 bg-white shadow-xl'>
      <img src="https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1" className='w-full h-32' />
      <div className='flex text-center py-2 text-xs bg-b3/40'>
        <h3>REM DEVI UNIVERSITY OF SCIENCE, ARTS, PARAMEDICAL...</h3>
      </div>
      <div className='flex justify-center mt-2'>
        <div className='flex space-x-10 items-center'>
          <div className='flex text-xs items-center'><MdLocationPin className="text-t1"/><h3>Combatore,Tamil Nadu</h3></div>
          <div className='flex text-xs items-center'><IoBook className='text-t1'/><h3>UGC</h3></div>
        </div>
      </div>
      
      <div className='flex justify-centers items-center mt-2 space-x-6 px-2 py-2  border-t-2 border-b-2 border-b3'>
       <div className='flex flex-col items-center text-xs'>
        <div className='flex flex-col items-center space-y-2'><h3 className='font-bold'>Courses</h3><h3 className='text-t2'>B.Ed</h3></div>
       </div>
       <div className='flex flex-col items-center text-xs'>
        <div className='flex flex-col items-center space-y-2'><h3 className='font-bold'>Feess</h3><h3 className='flex text-t2'><FaRupeeSign/>63,00</h3></div>
       </div>
       <div className='flex flex-col items-center text-xs'>
        <div className='flex flex-col items-center space-y-2'><h3 className='font-bold'>Exam</h3><h3 className='text-t2'>AKNUCET</h3></div>
       </div>
       <div className='flex flex-col items-center text-xs'>
        <div className='flex flex-col items-center space-y-2'><h3 className='font-bold'>Ranked</h3><h3 className='text-t2'>#1 by</h3></div>
       </div>
      </div>

      <div className='flex mt-4 mb-2 space-x-5 justify-center'>
       <div className="flex items-center"><AiOutlineLike className='text-t1 text-lg'/><h3 className='text-xs'>155</h3></div>
       <div className="flex items-center"><AiOutlineUserAdd className='text-t1 text-lg'/><h3 className='text-xs'>155</h3></div>
       <div className="flex items-center"><TbArrowForwardUp className='text-t1 text-lg'/><button onClick={()=>state.setShare(true)} className='text-xs'>155</button></div>
       <div className="flex items-center"><GrDocument className='text-t1 text-lg'/><h3 className='text-xs'>155</h3></div>
      </div>
    
      <div className='flex w-full text-xs mt-2'>
        <button className='bg-b3 px-5 py-5 w-full border-r-2 border-t2/50'>Courses & Fees</button>
        <button className='bg-b3 px-5 py-5 w-full'>Apply Now</button>
      </div>

    </div>
  )
}

export default CollegeInfoCard