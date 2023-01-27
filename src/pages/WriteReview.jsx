import React from 'react'
import Navbar from '../../components/Navbar'
import { RiQuestionFill } from 'react-icons/ri'
import HeadMeta from '../HeadMeta'

import { Select,Option,Input,Textarea, Checkbox } from '@material-tailwind/react'
import MobileFloats from './MobileFloats'

const WriteReview = () => {
  
  return (
    <>
    <HeadMeta title="Write a Review"/> 
    <Navbar/>
    <MobileFloats/>
    <h3 className='text-center text-t1 text-2xl bg-white py-10'>How was your experience?</h3>
    <form className='flex flex-col space-y-10 bg-white w-full h-auto px-5 lg:px-60'>
     {/* Form Group */}
     <div className='flex flex-col w-full space-y-5'>
      {/* College Name Input  */}
      <div className='flex items-center space-x-10 w-full'>
       <div className='flex flex-col w-2/3'>
        <h3 className='text-t1 px-4 mb-2'>Chose College</h3>
        <Select label='Chose College'>
         <Option>Lyalpur Institue of Technology</Option>
        </Select>
       </div>
        <div className='flex mt-6'><h3 className='hidden lg:flex text-t1 underline items-center'>Cant't find my college?</h3><RiQuestionFill className='lg:ml-2 text-xl text-t1'/></div>
      </div>

      {/* Chose Course Name Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Chose Course</h3>
       <Select label='Chose Course' placeholder='FSC'>
        <Option>FSC</Option>
       </Select>
      </div>
     </div>
     {/* Group End */}

     <h3 className='text-t1 mt-10 text-2xl underline'>Basic Info</h3>
     {/* Form Input Group Name and Gender */}
     <div className='flex lg:flex-row items-center flex-col lg:space-x-5 mt-10'>
      {/* Chose Name Input*/}
      <div className='w-2/3'>
      <Input label='Name'/>
      </div>
     
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <Select label='Chose Gender'>
        <Option>Male</Option>
        <Option>Female</Option>
        <Option>Other</Option>
       </Select>
      </div>
     </div>
     {/* Group End Here */}

     {/* Form Input Group Email and Mobile Number */}
     <div className='flex space-x-5 mt-10'>
      {/* Chose Email Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Email</h3>
      <Input label='abc@mail.com'/>
      </div>
     
      {/* Chose Phone No Input*/}
      <div className='w-2/3'>
      <h3 className='text-t1 px-4 mb-2'>Phone No</h3>
       <Input label='034849839'/>
      </div> 
     </div>
     {/* Group End Here */}
 
     <h3 className='text-t1 mt-10 text-2xl underline'>College Info</h3>
     {/* Form Input Group */}
     <div className='flex space-x-5 mt-10'>
      {/* Chose College Name Input*/}
      <div className='w-2/3'>
      <h3 className='text-t1 px-4 mb-2'>College Name</h3>
      <Input label='College Name'/>
      </div>
     
      {/* Chose  Input*/}
      <div className='w-2/3'>
      <h3 className='text-t1 px-4 mb-2'>Enrollment Year</h3>
       <Input label='Enrollment Year'/>
      </div>
     </div>
     {/* Form Goroup End Here */}

     <h3 className='text-t1 mt-5'>Rate your college based on overall experience</h3>
    {/* Emoji Wrapper */}
    <div className='flex space-x-5'>
      <img src="/public/anger.png" className='rounded-full'/>
      <img src="/public/confused.png" className='rounded-full'/>
      <img src="/public/happy.png" className='rounded-full'/>
      <img src="/public/love.png" className='rounded-full'/>
    </div> 
    {/* Emoji Wrapper End */}

     {/* Review Title */}
     <div className='w-2/3 mt-5'>
      <h3 className='text-t1 px-4 mb-2'>Review Title</h3>
      <Input label='Give a nice title to your review..'/>
     </div>
     
     {/* Describe College Input */}
     <div className='w-full h-52 mt-5'>
      <h3 className='text-t1 px-4 mb-2'>Describe your college here</h3>
      <Textarea type="text" name="summary" label='Please share the reason to join this college and share your experience in this college..' className='px-4 py-2 w-full h-52 border-2 border-t3/30 rounded-md'></Textarea>
     </div>
     <div className='flex w-full justify-center'><button type='submit' className='text-white bg-t1 w-fit h-fit px-10 py-3 rounded-md mb-10 mt-10'>Submit</button></div>
    
    </form>
    </>
  )
}

export default WriteReview