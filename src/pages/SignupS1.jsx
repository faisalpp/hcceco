import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import {Select,Option,Input,Textarea} from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'
import { RiEye2Line, RiEyeCloseLine, RiSearchEyeLine } from 'react-icons/ri'
import { AiFillEye, AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const SignupS1 = () => {

  const [userType,setUserType] = useState('');
  const [name,setName] = useState('');
  const [designation,setDesignation] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [state,setState] = useState('');
  const [type,setType] = useState('');
  const [education,setEducation] = useState('');
  const [summary,setSummary] = useState('');
  const [experties,setExperties] = useState('');
  const [accomplishment,setAccomplishment] = useState('');
  const [experience,setExperience] = useState('');
  const [profilePhoto,setProfilePhoto] = useState('');
  const [coverPhoto,setCoverPhoto] = useState('');
  const [password,setPassword] = useState('');
  const [rePass,setRePass] = useState('');

  const [reEye,setReEye] = useState(false);
  const [passEye,setPassEye] = useState(false);

  
  const handleUserType = (value) =>{
    setUserType(value)
  }

  const handleState = (value) =>{
    setState(value)
  }

  const showPass = () =>{
   document.getElementById('pass').type = "text";
   setPassEye(true);
  }

  const hidePass = () =>{
    document.getElementById('pass').type = "password";
    setPassEye(false);
  }

  const showRePass = () =>{
   document.getElementById('repass').type = "text";
   setReEye(true);
  }

  const hideRePass = () =>{
    document.getElementById('repass').type = "password";
    setReEye(false)
  }

  const title = useLocation();

  return (
    <>
    <HeadMeta title="Signup"/>
    <Navbar/>
    <div className='flex flex-col bg-white w-full h-auto items-center py-20'>
      <div className='lg:flex hidden flex-col mt-20'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Create your account</h3>
      </div>
      <div className='flex lg:mt-5 lg:space-x-32 space-x-20'>
       <div className={`lg:border-b-[7px] border-b-4 ${ title.pathname === "/signup/step1" ?'border-t1':'border-white'} py-5 lg:px-28 px-5`}><h3 className='lg:text-2xl text-lg'>Step 1</h3></div><div className={`lg:border-b-[7px] border-b-3 ${title.pathname === "/signup/step2" ?'border-t1':'border-white'} py-5 lg:px-28`}><h3 className='lg:text-2xl text-lg'>Step 2</h3></div>
      </div>
      
      <form className='flex flex-col lg:w-2/3 space-y-10 mt-10 h-auto justify-center '>
       <div className='flex lg:flex-row flex-col space-y-8 w-full lg:space-x-10'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Select User Type</h3><Select label='User Type' name="userType" value={userType} onChange={handleUserType} placeholder='Student' className='lg:h-14 h-12 w-full rounded-md'><Option>Student</Option></Select></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Name</h3><Input name="name" label='Name' value={name} onChange={e=>setName(e.target.value)}  type="text" className='lg:h-14 h-12 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Designation</h3><Input label='Designation' name="name" value={designation} onChange={e=>setDesignation(e.target.value)} type="text"  className='form-input lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Email</h3><Input label='Email' name="Email" type="text" value={email} onChange={e=>setEmail(e.target.value)} className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><Input label='Mobile Number' name="name" type="text" value={mobileNo} onChange={e=>setMobileNo(e.target.value)}  className='form-input lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>State</h3><Select name="state" label='State' value={state} onChange={handleState} className='lg:h-14 w-full rounded-md px-5'><Option>Tamil Nadu</Option></Select></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>School/College/Company</h3><Input name="type" value={type} onChange={e=>setType(e.target.value)} type="text" label='School/College/Company' className='form-input lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Highest Education</h3><Input name="education" label='Education' value={education} onChange={e=>setEducation(e.target.value)} type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='flex flex-col w-full'>
         <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Summary</h3>
         <Textarea placeholder='Summary' name="summary" value={summary} onChange={e=>setSummary(e.target.value)} className='form-textarea h-32 w-full rounded-md border-2 border-t3/30 px-5'></Textarea>
        </div> 
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Area of Experties</h3><Textarea name="experties" value={experties} onChange={e=>setExperties(e.target.value)} type="text" placeholder='Experties area in comma separated value' className='form-textarea h-32 w-full rounded-md border-2 border-t3/30 px-5'></Textarea></div>
        <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Accomplishment</h3><Textarea name='accomplishment' value={accomplishment} onChange={e=>setAccomplishment(e.target.value)} placeholder='Accomplishment in comma separated value' type="text" className='form-textarea h-32 w-full rounded-md border-2 border-t3/30 px-5'></Textarea></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><Input name="experience" type="text" value={experience} onChange={e=>setExperience(e.target.value)} placeholder='Enter Your Total Experience' className='form-text h-12 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Profile Photo</h3><input name="name" type="file" value={profilePhoto} onChange={e=>setProfilePhoto(e.target.value)} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/></div>
        <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Cover Photo</h3><input name="name" type="file" value={coverPhoto} onChange={e=>setCoverPhoto(e.target.value)} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3>
          <div className='flex items-center rounded-md border-2 border-t3/30'><Input id="pass" name="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' className='border-none h-14 w-full px-5' />{passEye ? <button type="button" onClick={hidePass}><AiFillEyeInvisible className='text-t1 text-3xl mr-2'/></button>:<button type='button' onClick={showPass}><AiFillEye className='text-t1 text-3xl mr-2'/></button>}</div>
        </div>
        <div className='lg:w-1/2 w-80'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Re-Enter Password</h3>
          <div className='flex items-center rounded-md border-2 border-t3/30'><Input id="repass" name="repass" type="password" value={rePass} onChange={e=>setRePass(e.target.value)} placeholder='Re-Enter Pssword' className='h-14 border-none w-full px-5'/>{reEye ? <button type="button" onClick={hideRePass}><AiFillEyeInvisible className='text-t1 text-3xl mr-2'/></button>:<button type='button' onClick={showRePass}><AiFillEye className='text-t1 text-3xl mr-2'/></button>}</div>
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