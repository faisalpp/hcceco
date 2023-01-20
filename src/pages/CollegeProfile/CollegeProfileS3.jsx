import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta';
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar';
import { Select,Option } from '@material-tailwind/react';
import { FaTrash,FaPlus } from 'react-icons/fa';

const CollegeProfileS3 = () => {

  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col lg:ml-3 lg:mr-3 lg:w-4/5 w-full h-fit justify-center items-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      <CollegeProfileNavbar/>
      <h3 className='mt-5 font-bold underline text-xl'>Course -1</h3>
      {/* Form */}
      <form className='flex flex-col space-y-10 mb-20 w-full h-full mt-10 items-center'>
       {/* Form Input Group */}

       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
       <div className='flex flex-col w-full'>
        <h3 className='text-t1 text-lg font-bold mb-2'>Choose Stream</h3>
         <div className='flex lg:flex-row flex-col items-center lg:space-y-0 space-y-5 lg:space-x-5'>
          <div className='lg:w-full w-80'>
          <Select label='Colleges' name="affiliation" type="text" className=' border-2 border-t3/30 lg:w-full w-80 lg:h-14 rounded-md px-5'>
          <Option>Colleges</Option>
          </Select>
          </div>
          
          <input placeholder='No Main Stream Added' name="designation" type="text" className='form-input border-2 border-t3/30 lg:w-full w-80 lg:h-14 rounded-md px-5'/>
          <input placeholder='No Main Stream Added' name="designation" type="text" className='form-input border-2 border-t3/30 lg:w-full w-80 lg:h-14 rounded-md px-5'/>
          <div className='flex items-center ml-2 space-x-5'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xl'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xl'/></div></div>
        </div>
        </div> 
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Type</h3><input placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Name</h3><input placeholder='Enter College Status' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Fee Details</h3><input placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Fee</h3><input placeholder='Enter College Status' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
        <div className='flex items-center ml-2 space-x-5'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xl'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xl'/></div></div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Eligibility</h3><input placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Type</h3><input placeholder='Enter College Status' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Program Type</h3><input placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Category</h3><input placeholder='Enter College Status' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Exam Accepted</h3><input placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
        {/* Form Buttons */}
        <div className='flex w-full h-fit justify-center space-x-5 lg:space-x-10 items-center'>
        <button className='text-t1 text-sm px-10 rounded-md py-3 lg:text-sm bg-t1/40'>Add More</button>
        <button type='submit' className='bg-t1 lg:text-sm text-xs px-10 py-3 rounded-md text-white'>Submit</button>
       </div>  
      </form>
     </div>
    </div> 
    </>
  )
}

export default CollegeProfileS3