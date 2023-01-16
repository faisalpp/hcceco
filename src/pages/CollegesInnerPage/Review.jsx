import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { RiTimeFill, RiTimeLine } from 'react-icons/ri'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'

const Review = () => {
  
  return (
    <CollegeInnerPageLayout>
     <div className='bg-white w-full h-full'>
      {/* College Rating */}
     <div className='flex mt-10 space-x-[750px] ml-24'>
      <div><h3 className='text-xl text-t1 font-bold'>College Rating</h3><h3 className='text-t3 text[16px]'>03 Reviews Found</h3></div>
      <div className='flex flex-col items-center'>
       <h3 className='text-[16px]'>3.4/4</h3>
       <div className='flex'>
       <img src="/public/anger.png" className='rounded-full w-8 h-8'/>
       <img src="/public/confused.png" className='rounded-full w-8 h-8'/>
       <img src="/public/happy.png" className='rounded-full w-8 h-8'/>
       <img src="/public/love.png" className='rounded-full w-8 h-8'/>
       </div>
      </div>
     </div>

     {/* Review Card */}
     <div className='flex flex-col ml-20 mt-10 border-2 border-t3/30 px-10 py-10 shadow-xl'>
      <div className='flex items-center space-x-3'>
        <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-12 h-12 rounded-full'/>
        <div className='flex flex-col'>
          <h3 className='font-bold text-[16px]'>Faisal</h3>
         <div className='flex space-x-10 text-sm text-t3'><h3 >Enrolled 2021</h3><h3 className='flex items-center'><FaGraduationCap className='mr-2'/> Bachelor of Science</h3><h3 className='flex items-center'><RiTimeFill className='mr-2'/> July 29 2022</h3></div>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <h3 className='text-t1'>Review title of the review</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, eaque deserunt nam temporibus eligendi minus cupiditate qui delectus alias rem consequatur quisquam! Corporis deserunt eum odit quis nam excepturi sit?</p>
      </div>
     </div>   
  

     </div>
    </CollegeInnerPageLayout>
  )
}

export default Review