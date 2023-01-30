import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import {Select,Option,Input} from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import MobileFloats from './MobileFloats'
import {useForm} from 'react-hook-form'
import CustomeSelect from '../../components/CustomeSelect'

const SignupCollege = () => {
  const {register,watch,handleSubmit,formState:{errors}} = useForm({mode:"onSubmit"});
  const userTypes = ['Student','College','College Ambassador','School or College Authority','Others']
  const states = ['Andhra Pradesh','Haryana','Madhya Pradesh','Rajasthan','Tripura','Maharashtra','Manipur','Goa','Uttarakhand','Telangana','Karnatka','Bihar','Tamil Nadu','West Bangal','Mizoram','Kerala','Nagaland','Jharkhand','Delhi','Utter Pradesh','Punjab','Gujarat','Odisha','Sikkim','Arunachal Pradesh','Himachal Pradesh','Chhattisgarh','Meghalaya','Jammu & Kashmir']
  const [rePassEye,setRePassEye] = useState(false);
  const [passEye,setPassEye] = useState(false);

  const title = useLocation();
  const {userType,setUserType} = useState('');
  const {state,setState} = useState('');
  const {city,setCity} = useState('');
  const {college,setCollege} = useState('');

  const onSubmit = (value) => console.log(value)

  return (
    <>
    <HeadMeta title="Signup"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col bg-white w-full h-auto items-center py-20'>
      <div className='flex flex-col lg:mt-20'>
        <h3 className='lg:flex hidden text-6xl'>LOGO</h3>
        <h3>Create your account</h3>
      </div>
      <div className='flex mt-5 lg:space-x-32 space-x-8'>
       <div className={`lg:border-b-[7px] border-b-4 ${ title.pathname === "/signup/college/step1" ?'border-t1':'border-white'} py-5 lg:px-28`}><h3 className='lg:text-2xl text-lg'>Step 1</h3></div><div className={`lg:border-b-[7px] border-b-4 ${title.pathname === "/signup/college/step2" ?'border-t1':'border-white'} py-5 lg:px-28`}><h3 className='lg:text-2xl text-lg'>Step 2</h3></div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col lg:w-2/3 space-y-10 mt-10 h-auto justify-center '>
       <div className='flex lg:flex-row lg:space-y-0 space-y-10 items-center flex-col lg:w-full lg:space-x-10'>
        <div className=' lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Select User Type</h3>
          <CustomeSelect errors={errors.user_type} options={userTypes} placeholder="Select User Type" state={userType} setState={setUserType}>
           <input type="hidden" value={userType} {...register('user_type',{required:true})}/>
           {errors.user_type && <h3 className='text-sm text-red-500'>User Type Required</h3>}
          </CustomeSelect>
        </div>
        <div className='lg:w-1/2 w-80'>
         <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Name</h3>
         <Input name="name" label="Name" {...register('name',{required:true})} type="text" style={{'borderColor':errors.name && 'red'}} className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5'/>
         {errors.name && <h3 className='text-red-500 text-sm'>Name is Required</h3>}
        </div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
         <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3>
         <Input name="mobileNo" {...register('mobile_no',{required:true})} type="text" placeholder='Mobile No' className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5' />
         {errors.mobile_no && <h3 className='text-red-500 text-sm'>Mobile No Required</h3>}
        </div>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>State</h3>
          <CustomeSelect errors={errors.state} options={states} placeholder="Select State" state={state} setState={setState}>
           <input type="hidden" value={state} {...register('state',{required:true})}/>
           {errors.state && <h3 className='text-sm text-red-500'>State Required</h3>}
          </CustomeSelect>
        </div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>City</h3>
          <CustomeSelect errors={errors.city} options={['Kolkata','Mumbai']} placeholder="Select City Type" state={city} setState={setCity}>
           <input type="hidden" value={city} {...register('city',{required:true})}/>
           {errors.city && <h3 className='text-sm text-red-500'>City Required</h3>}
          </CustomeSelect>
        </div>
        <div className='lg:w-1/2 w-80'>
         <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Website</h3>
         <Input name="website" {...register('website',{required:true})} type="text" placeholder='Website' className='lg:h-10 h-12 w-full rounded-md !outline-none focus:ring-0 px-5' />
         {errors.website && <h3 className='text-red-500 text-sm'>Website Required</h3>}
        </div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-full w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College</h3>
          <CustomeSelect errors={errors.college} options={['Lyalpur Institute of Science']} placeholder="Select College" state={college} setState={setCollege}>
           <input type="hidden" value={college} {...register('college',{required:true})}/>
           {errors.college && <h3 className='text-sm text-red-500'>College Required</h3>}
          </CustomeSelect>
        </div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3>
          <Input id="pass" style={{'borderColor':errors.password && 'red'}} label="Password" {...register('password',{required:true,min:8,pattern:{value:/a-zA-Z0-9/}})} name="password" type="password" className='outline-none focus:ring-0 w-full px-5' icon={passEye ? <button onClick={()=>{document.getElementById('pass').type='password';setPassEye(false)}} type="button"><AiFillEyeInvisible className='text-t1 text-2xl'/></button>:<button onClick={()=>{document.getElementById('pass').type='text';setPassEye(true)}} type='button'><AiFillEye className='text-t1 text-2xl'/></button>}/>
          {errors.password && <h3 className='text-red-500 text-sm'>Password Required</h3>} 
        </div>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Re-Enter Password</h3>
          <Input id="repass" style={{'borderColor':errors.confirm_password && 'red'}} name="confirm_password" {...register('confirm_password',{required:true})} label="Retype Password" type="password" className='outline-none focus:ring-0 w-full px-5' icon={rePassEye ? <button onClick={()=>{document.getElementById('repass').type='password';setRePassEye(false)}} type="button"><AiFillEyeInvisible className='text-t1 text-2xl'/></button>:<button onClick={()=>{document.getElementById('repass').type='text';setRePassEye(true)}} type='button'><AiFillEye className='text-t1 text-2xl'/></button>}/>
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

export default SignupCollege