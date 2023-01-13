import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Helmet } from 'react-helmet-async'
import { RiQuestionFill } from 'react-icons/ri'
import HeadMeta from '../HeadMeta'

const WriteReview = () => {
  
  //College Name
  const [clg,setClg] = useState('');
  //Course Name
  const [course,setCourse] = useState('');
  //User Name
  const [name,setName] = useState('');
  //User Gender
  const [gender,setGender] = useState('');
  // Email
  const [email,setEmail] = useState('');
  // Phone
  const [phone,setPhone] = useState('');
  // Enrollment Year
  const [enrollYear,setEnrollYear] = useState('');
  //Program Fees
  const [prgmFees,setPrgmFees] = useState('');
  //College Rating
  const [rating,setRating] = useState('');
  // Review title
  const [revTitle,setRevTitle] = useState('');
  // Review Summary
  const [review,setReview] = useState('');

  useEffect(() => {
    console.log(rating);
  }, [rating]);
  

  return (
    <>
    <HeadMeta title="Write a Review"/> 
    <Navbar/>
    <h3 className='text-center text-t1 text-2xl bg-white py-10'>How was your experience?</h3>
    <form className='flex flex-col space-y-10 bg-white w-full h-auto px-60'>
     {/* Form Group */}
     <div className='flex flex-col w-full space-y-5'>
      {/* Chose College Input  */}
      <div className='flex flex-col w-full'>
       <h3 className='text-t1 px-4 mb-2'>Chose College</h3>
       <div className='flex items-center space-x-10'>
        <select value={name} onChange={e=>setName(e.target.value)} name="collegeName" className='px-4 w-2/3 border-2 border-t3/30 rounded-md' placeholder='Chose College'>
         <option>Lyalpur Institue of Technology</option>
        </select>
        <h3 className='flex text-t1 underline items-center'>Cant't find my college?<RiQuestionFill className='ml-2 text-xl'/></h3>
       </div>
      </div>

      {/* Chose Course Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Chose Course</h3>
       <select value={course} onChange={e=>setCourse(e.target.value)} name="course" className='px-4 w-full border-2 border-t3/30 rounded-md' placeholder='Chose College'>
        <option>FSc</option>
       </select>
      </div>
     </div>
     {/* Group End */}

     <h3 className='text-t1 mt-10 text-2xl underline'>Basic Info</h3>
     {/* Form Input Group Name and Gender */}
     <div className='flex space-x-5 mt-10'>
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Name</h3>
      <input value={name} onChange={e=>setName(e.target.value)} type="text" name="name" placeholder='Name' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
      </div>
     
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Gender</h3>
       <select value={gender} onChange={e=>setGender(e.target.value)} name="gender" className='px-4 w-full border-2 border-t3/30 rounded-md' placeholder='Chose College'>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
       </select>
      </div>
     </div>
     {/* Group End Here */}

     {/* Form Input Group Email and Mobile Number */}
     <div className='flex space-x-5 mt-10'>
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Email</h3>
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder='Email' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
      </div>
     
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Gender</h3>
       <input value={phone} onChange={e=>setPhone(e.target.value)} type="number" name="phone" placeholder='01234567' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
      </div> 
     </div>
     {/* Group End Here */}
 
     <h3 className='text-t1 mt-10 text-2xl underline'>College Info</h3>
     {/* Form Input Group Name and Gender */}
     <div className='flex space-x-5 mt-10'>
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Enrollment Year</h3>
      <input value={enrollYear} onChange={e=>setEnrollYear(e.target.value)} type="text" name="enrollmentYear" placeholder='Enrollment Year' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
      </div>
     
      {/* Chose Gender Input*/}
      <div className='w-2/3'>
       <h3 className='text-t1 px-4 mb-2'>Program Fees</h3>
       <input value={prgmFees} onChange={setPrgmFees} type="number" name="programFees" placeholder='Program Fees' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
      </div>
     </div>
     {/* Form Goroup End Here */}

     <h3 className='text-t1 mt-5'>Rate your college based on overall experience</h3>
    {/* Emoji Wrapper */}
    <div className='flex space-x-5'>
     <div className='flex'>
      <label  for="myCheckbox1"><img src="/public/anger.png" className='rounded-full'/></label>
      <input value="0" onChange={e=>setRating(e.target.value)} name="rating" type="checkbox" />
     </div>
     <h3>{rating}</h3>
     <div className='flex'>
      <label for="myCheckbox1"><img src="/public/confused.png" className='rounded-full'/></label>
      <input value={rating} onChange={e=>setRating(e.target.value)} name="rating" type="checkbox" className='hidden'/>
     </div>
     <div className='flex'>
      <label for="myCheckbox1"><img src="/public/happy.png" className='rounded-full'/></label>
      <input value={rating} onChange={e=>setRating(e.target.value)} name="rating" type="checkbox" className='hidden'/>
     </div>
     <div className='flex'>
      <label for="myCheckbox1"><img src="/public/love.png" className='rounded-full'/></label>
      <input value={rating} onChange={e=>setRating(e.target.value)} name="rating" type="checkbox" className='hidden'/>
     </div>
    </div> 
    {/* Emoji Wrapper End */}

     {/* Review Title */}
     <div className='w-2/3 mt-5'>
      <h3 className='text-t1 px-4 mb-2'>Review Title</h3>
      <input type="text" name="reviewTitle" placeholder='Give a nice title to your review..' className='px-4 w-full border-2 border-t3/30 rounded-md'/>
     </div>
     
     {/* Describe College Input */}
     <div className='w-full h-52 mt-5'>
      <h3 className='text-t1 px-4 mb-2'>Describe your college here</h3>
      <textarea type="text" name="summary" placeholder='Please share the reason to join this college and share your experience in this college..' className='px-4 w-full h-full border-2 border-t3/30 rounded-md'></textarea>
     </div>
     <div className='flex w-full justify-center'><button type='submit' className='text-white bg-t1 w-fit h-fit px-10 py-3 rounded-md mb-10 mt-10'>Submit</button></div>
     
    
    </form>
    </>
  )
}

export default WriteReview