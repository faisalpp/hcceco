import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import { useLocation } from 'react-router-dom'
import MobileFloats from './MobileFloats'
import {useForm} from 'react-hook-form';
import {Input,Textarea} from '@material-tailwind/react'
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import '@tailwindcss/forms';

const SignupS1 = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm();

  const onSubmit = data => {console.log(data);}
  const states = ['Andhra Pradesh','Haryana','Madhya Pradesh','Rajasthan','Tripura','Maharashtra','Manipur','Goa','Uttarakhand','Telangana','Karnatka','Bihar','Tamil Nadu','West Bangal','Mizoram','Kerala','Nagaland','Jharkhand','Delhi','Utter Pradesh','Punjab','Gujarat','Odisha','Sikkim','Arunachal Pradesh','Himachal Pradesh','Chhattisgarh','Meghalaya','Jammu & Kashmir']
  const [passEye,setPassEye] = useState(false);
    const showPass = () =>{
        document.getElementById(id).type = "text";
        setPassEye(true);
       }
     
       const hidePass = () =>{
         document.getElementById(id).type = "password";
         setPassEye(false);
       }

  const title = useLocation();

  return (
    <>
    <HeadMeta title="Signup"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col bg-white w-full h-auto items-center py-20'>
      <div className='lg:flex hidden flex-col mt-20'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Create your account</h3>
      </div>
      <div className='flex lg:mt-5 lg:space-x-32 space-x-20'>
       <div className={`lg:border-b-[7px] border-b-4 ${ title.pathname === "/signup/step1" ?'border-t1':'border-white'} py-5 lg:px-28 px-5`}><h3 className='lg:text-2xl text-lg'>Step 1</h3></div><div className={`lg:border-b-[7px] border-b-3 ${title.pathname === "/signup/step2" ?'border-t1':'border-white'} py-5 lg:px-28`}><h3 className='lg:text-2xl text-lg'>Step 2</h3></div>
      </div> 
      <form onSubmit={handleSubmit(onSubmit)} method="post" className='flex flex-col lg:w-2/3 space-y-10 mt-10 h-auto justify-center '>
      {/* Form Field Group */}
      <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-8 w-full lg:space-x-10'>
       {/* User Type Field */}
       <div className='lg:w-1/2 w-80'>
        <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>User Type</h3>
        <select style={{'borderColor':errors.user_type && 'red'}} label="User Type" {...register('user_type',{required:true})} className='form-select text-t3 h-10 text-sm border-t3/50 w-full rounded-md'>
         <option value=''>Select User Type</option>
         <option value='student'>Student</option>
         <option value='college'>College</option>
         <option value='college_ambassador'>College Ambassador</option>
         <option value='school_or_college_authority'>School or College Authority</option>
         <option value='others'>Others</option>
        </select>
        {errors.user_type && <h3 className='text-red-500 text-sm'>User Type Required</h3>}
       </div>
       {/* Name Field */}
       <div className='lg:w-1/2 w-80'>
        <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Name</h3>
        <Input name="name" label="Name" {...register('name',{required:true})} type="text" style={{'borderColor':errors.name && 'red'}} className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
        {errors.name && <h3 className='text-red-500 text-sm'>Name is Required</h3>}
       </div>
      </div>
      {/* Form Field Group */}
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
      {/* Designation Input Field */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Designation</h3>
       <Input style={{'borderColor':errors.designation && 'red'}} {...register('designation',{required:true})} label="Designation" type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
       {errors.designation && <h3 className='text-red-500 text-sm'>Designation Required</h3>}
      </div>
      {/* Email Input Field */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Email</h3>
       <Input style={{'borderColor':errors.email && 'red'}} name="email" {...register('email',{required:true})} label="Email" type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
       {errors.email && <h3 className='text-red-500 text-sm'>Email Required</h3>}
      </div>
     </div>
     {/* Form Field Group */}
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
      {/* Mobile No Field */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile No</h3>
       <Input name="mobile_no" style={{'borderColor':errors.mobile_no && 'red'}} {...register('mobile_no',{required:true})} label="Mobile No" type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
       {errors.mobile_no && <h3 className='text-red-500 text-sm'>Mobile No Required</h3>}
      </div>   
      {/* State Field */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>State</h3>
       <select style={{'borderColor':errors.state && 'red'}} name="state" {...register('state',{required:true})} className='form-select border-t3/50 text-sm text-t3 h-10 w-full rounded-md'>
        <option value=''>Select Satate</option>
        {states.map((state,index)=><option key={index} value={state}>{state}</option>)}
       </select>
       {errors.state && <h3 className='text-red-500 text-sm'>State Required</h3>}
      </div>  
     </div>
     {/* From Field Group */}
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
      {/* Institute Name */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Institute Name</h3>
       <Input style={{'borderColor':errors.institute_name && 'red'}} name="institute_name" label="Institue Name" {...register('institute_name',{required:true})} type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
       {errors.institute_name && <h3 className='text-red-500 text-sm'>Institute Name Required</h3>}
      </div>
      {/* Institute Name */}
      <div className='lg:w-1/2 w-80'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Highest Education</h3>
       <Input style={{'borderColor':errors.highest_education && 'red'}} name="highest_education" {...register('highest_education',{required:true})} label="Highest Education" type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
       {errors.highest_education && <h3 className='text-red-500 text-sm'>Highest Education Required</h3>}
      </div>
     </div>
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
      <div className='flex flex-col w-full'>
       <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Summary</h3>
       <Textarea style={{'borderColor':errors.summary && 'red'}} label='Summary' {...register('summary',{required:true})} name="summary" className='form-textarea h-32 w-full rounded-md !outline-none focus:ring-0 border-2 border-t3/30 px-5'></Textarea>
       {errors.summary && <h3 className='text-red-500 text-sm'>Summary Required</h3>}
      </div> 
     </div>
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
      <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Area of Experties</h3><Textarea style={{'borderColor':errors.experties && 'red'}} name="experties" {...register('experties',{required:true})} label='Experties' type="text" className='form-textarea h-32 w-full rounded-md !outline-none focus:ring-0 border-2 border-t3/30 px-5'></Textarea>{errors.experties && <h3 className='text-red-500 text-sm'>Experties Required</h3>}</div>
      <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Accomplishment</h3><Textarea style={{'borderColor':errors.accomplishment && 'red'}} name='accomplishment' {...register('accomplishment',{required:true})} label='Accomplishment' type="text" className='form-textarea h-32 w-full !outline-none focus:ring-0 rounded-md border-2 border-t3/30 px-5'></Textarea>{errors.accomplishment && <h3 className='text-red-500 text-sm'>Accomplishment Required</h3>}</div>
     </div>
     <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     {/* Total Experience */}
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Total Experience</h3>
      <Input style={{'borderColor':errors.total_experience && 'red'}} name="total_experience" {...register('total_experience',{required:true})} label="Total Experience" type="text" className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
      {errors.total_experience && <h3 className='text-red-500 text-sm'>Total Experience Required</h3>}
     </div>
    </div>
    {/* Form Field Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='text-t1 ml-5 font-semibold mb-2'>Profile Photo</h3>
      <input style={{'borderColor':errors.profile_photo && 'red'}} name="profile_photo" type="file" {...register('profile_photo',{required:true})} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 w-full rounded-md border-2 border-t3/30'/>
      {errors.profile_photo && <h3 className='text-red-500 text-sm'>Profile Photo Required</h3>}
     </div> 
     <div className='lg:w-1/2 w-80'>
      <h3 className='text-t1 ml-5 font-semibold mb-2'>Cover Photo</h3>
      <input style={{'borderColor':errors.cover_photo && 'red'}} name="cover_photo" type="file" {...register('cover_photo',{required:true})} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 w-full rounded-md border-2 border-t3/30'/>
      {errors.cover_photo && <h3 className='text-red-500 text-sm'>Cover Photo Required</h3>}
     </div> 
    </div>
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     {/* Password Feild */}
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3>
      <Input id="pass" style={{'borderColor':errors.password && 'red'}} label="Password" {...register('password',{required:true,min:8,pattern:{value:/0-9/}})} name="password" type="password" className='outline-none focus:ring-0 w-full px-5' icon={passEye ? <button type="button" onClick={hidePass}><AiFillEyeInvisible className='text-t1 text-2xl'/></button>:<button type='button' onClick={showPass}><AiFillEye className='text-t1 text-2xl'/></button>}/>
      {errors.password && <h3 className='text-red-500 text-sm'>Password Required</h3>}
     </div>
     {/* Re Password Field */}
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Re-Type Password</h3>
      <Input style={{'borderColor':errors.confirm_password && 'red'}} id="repass" name="confirm_password" {...register('confirm_password',{required:true})} label="Retype Password" type="password" className='outline-none focus:ring-0 w-full px-5' icon={passEye ? <button type="button" onClick={hidePass}><AiFillEyeInvisible className='text-t1 text-2xl'/></button>:<button type='button' onClick={showPass}><AiFillEye className='text-t1 text-2xl'/></button>}/>
      { watch('password') === watch('confirm_password') ? null :<h3 className='text-red-500 text-sm'>Confirm Password Not Matched</h3>}
     </div>
    </div>
   <div>
   <div className='flex justify-center'><button className='text-white bg-t1 rounded-md px-16 py-3'>Next Step</button></div>
  </div>
 </form>
</div>
</>
  )
}

export default SignupS1