import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta';
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar';
import { Select,Option,Input } from '@material-tailwind/react';
import { FaTrash,FaPlus } from 'react-icons/fa';
import MobileFloats from '../MobileFloats';
import { useForm } from 'react-hook-form';
import CustomeSelect from '../../../components/CustomeSelect';


const CollegeProfileS3 = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm({mode:"onSubmit"});
  const [stream,setStream] = useState('');
  const onSubmit = data => console.log(data);
  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col lg:ml-3 lg:mr-3 lg:w-4/5 w-full h-fit justify-center items-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      <CollegeProfileNavbar/>
      <h3 className='mt-5 font-bold underline text-xl'>Course -1</h3>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 mb-20 w-full h-full mt-10 items-center'>
       {/* Fom Input Group */}

       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
       <div className='flex flex-col w-full'>
        <h3 className='text-t1 text-lg font-bold mb-2'>Choose Stream</h3>
         <div className='flex lg:flex-row flex-col items-center lg:space-y-0 space-y-5 lg:space-x-5'>
          <div className='lg:w-full w-80'>
           <CustomeSelect errors={errors.stream} state={stream} setState={setStream} placeholder="Select Stream Type" options={['BA','BSC','MPHIL']}>
           <input style={{'borderColor':errors.stream && 'red'}} type="hidden" value={stream} {...register('stream',{required:true})}/>
           {errors.stream && <h3 className='text-sm text-red-500'>Stream Required</h3>}
           </CustomeSelect>
          </div>
          <div className='lg:w-1/2 w-80'>
           <Input style={{'borderColor':errors.main_stream && 'red'}} placeholder='Enter Main Stream' {...register('main_stream',{required:true})} name="clgMail" type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
           {errors.main_stream && <h3 className='text-sm text-red-500'>Main Stream Required</h3>}
          </div>
          <div className='lg:w-1/2 w-80'>
           <Input style={{'borderColor':errors.sub_stream && 'red'}} placeholder='Enter Sub Stream' {...register('sub_stream',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
           {errors.sub_stream && <h3 className='text-sm text-red-500'>Sub Stream Required</h3>}
          </div>
          <div className='flex items-center ml-2 space-x-5'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xl'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xl'/></div></div>
        </div>
        </div> 
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Type</h3>
         <Input style={{'borderColor':errors.course_type && 'red'}} placeholder='Enter Course Type' {...register('course_type',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_type && <h3 className='text-sm text-red-500'>Course Type Required</h3>}
       </div>
        <div className='lg:w-1/2 w-80'>
        <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Name</h3>
         <Input style={{'borderColor':errors.course_name && 'red'}} placeholder='Enter Course Name' {...register('course_name',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_name && <h3 className='text-sm text-red-500'>Course Name Required</h3>}
        </div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
        <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Fee Details</h3>
         <Input style={{'borderColor':errors.course_fee_details && 'red'}} placeholder='Enter Course Fee Details' {...register('course_fee_details',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_fee_details && <h3 className='text-sm text-red-500'>Course Fee Detail Required</h3>}
        </div>
        <div className='lg:w-1/2 w-80'>
        <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Fee</h3>
         <Input style={{'borderColor':errors.course_fee && 'red'}} placeholder='Enter Course Fee' {...register('course_fee',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_fee && <h3 className='text-sm text-red-500'>Course Fee Required</h3>}  
        </div>
        <div className='flex items-center ml-2 space-x-5'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xl'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xl'/></div></div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Eligibility</h3>
          <Input style={{'borderColor':errors.course_eligibility && 'red'}} placeholder='Enter Course Eligibility' {...register('course_eligibility',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_eligibility && <h3 className='text-sm text-red-500'>Course Eligibility Required</h3>} 
         </div>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Type</h3>
          <Input style={{'borderColor':errors.course_type && 'red'}} placeholder='Enter Course Type' {...register('course_fee',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_type && <h3 className='text-sm text-red-500'>Course Type Required</h3>}
          </div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Program Type</h3>
          <Input style={{'borderColor':errors.course_type && 'red'}} placeholder='Enter Type Fee' {...register('course_fee',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_type && <h3 className='text-sm text-red-500'>Course Type Required</h3>}
         </div>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Course Category</h3>
          <Input style={{'borderColor':errors.course_category && 'red'}} placeholder='Enter Course Category' {...register('course_category',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
         {errors.course_category && <h3 className='text-sm text-red-500'>Course Category Required</h3>}
         </div>
       </div> 
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Exam Accepted</h3>
          <Input style={{'borderColor':errors.exam_accepted && 'red'}} placeholder='Enter Exam Accepted' {...register('course_fee',{required:true})} type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
          {errors.exam_accepted && <h3 className='text-sm text-red-500'>Exam Accepted Required</h3>} 
          </div>
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