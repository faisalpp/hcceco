import React,{useState} from 'react'
import { RiStarFill, RiTimeFill} from 'react-icons/ri'
import { FaGraduationCap} from 'react-icons/fa'


const ReviewCard = () => {
  const [readMore,setReadMore] = useState(false);  
  return (
    <>
         <div className='flex flex-col ml-3 mr-3 lg:ml-20 mt-10 border-2 border-b4 rounded-md lg:px-10 px-2 lg:py-10 py-5 shadow-xl'>
    <div className='flex items-center lg:space-x-3 space-x-2'>
        <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-12 h-12 rounded-full'/>
        <div className='flex flex-col'>
         <div className='flex lg:space-x-80 space-x-32'><h3 className='font-bold lg:text-[16px] text-xs'>Faisal</h3><h3 className='flex lg:text-[16px] text-xs items-center'><RiStarFill className='text-yellow-500'/> <span>3.4/4</span></h3></div> 
         <div className='flex lg:space-x-10 space-x-5 lg:text-sm text-[8px] text-t3'><h3 >Enrolled 2021</h3><h3 className='flex items-center'><FaGraduationCap className='mr-2'/> Bachelor of Science</h3><h3 className='flex items-center'><RiTimeFill className='mr-2'/> July 29 2022</h3></div>
        </div>
      </div>
      <div className="flex flex-col mt-5 px-2">
        <h3 className='text-t1'>Review title of the review</h3>
        <p className={`${readMore?'null':'truncate'}  lg:text-sm text-xs`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, eaque deserunt nam temporibus eligendi minus cupiditate qui delectus alias rem consequatur quisquam! Corporis deserunt eum odit quis nam excepturi sit?</p>
        {readMore ? <h3 onClick={()=>setReadMore(false)} className='lg:text-sm text-xs text-green-500 hover:underline'>Read More</h3>:<h3 onClick={()=>setReadMore(true)} className='lg:text-sm text-xs text-green-500 hover:underline'>Read More</h3>}
      </div>
      </div>
    </>
  )
}

export default ReviewCard