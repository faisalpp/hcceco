import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import HeadMeta from '../HeadMeta'
import {Select,Option} from '@material-tailwind/react'
import { useLocation } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const SignupCollege = () => {

  const [userType,setUserType] = useState('');
  const [email,setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [state,setState] = useState('');
  const [city,setCity] = useState('');
  const [website,setWebsite] = useState('');
  const [college,setCollege] = useState('');

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
  const handleCity = (value) =>{
    setCity(value)
  }
  const handleCollege = (value) =>{
    setCollege(value)
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
      <div className='flex flex-col mt-20'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Create your account</h3>
      </div>
      <div className='flex mt-5 space-x-32'>
       <div className={`border-b-[7px] ${ title.pathname === "/signup/college/step1" ?'border-t1':'border-white'} py-5 px-28`}><h3 className='text-2xl'>Step 1</h3></div><div className={`border-b-[7px] ${title.pathname === "/signup/college/step2" ?'border-t1':'border-white'} py-5 px-28`}><h3 className='text-2xl'>Step 2</h3></div>
      </div>
      
      <form className='flex flex-col w-2/3 space-y-10 mt-10 h-auto justify-center '>
       <div className='flex lg:flex-row flex-col w-full lg:space-x-10'>
        <div className=' lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Select User Type</h3><Select name="userType" value={userType} onChange={handleUserType} className='h-14 w-full rounded-md'><Option>Student</Option></Select></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Email</h3><input name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" type="email" className='h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><input name="mobileNo" value={mobileNo} onChange={e=>setMobileNo(e.target.value)} type="text" placeholder='Designation' className='form-input lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>State</h3><Select name="state" value={state} onChange={handleState} className='lg:h-14 w-full rounded-md px-5'><Option>Tamil Nadu</Option></Select></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>State</h3><Select name="state" value={city} onChange={handleCity} className='lg:h-14 w-full rounded-md px-5'><Option>Delhi</Option></Select></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Website</h3><input name="website" type="text" placeholder='College Website' value={website} onChange={e=>setWebsite(e.target.value)} className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-full'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College</h3><Select name="college" value={college} onChange={handleCollege} className='lg:h-14 w-full rounded-md px-5'><Option>Lyalpur Institute of Science</Option></Select></div>
       </div>
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3>
          <div className='flex items-center rounded-md border-2 border-t3/30'><input id="pass" name="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Password' className='border-none h-14 w-full px-5' />{passEye ? <button type="button" onClick={hidePass}><AiFillEyeInvisible className='text-t1 text-3xl mr-2'/></button>:<button type='button' onClick={showPass}><AiFillEye className='text-t1 text-3xl mr-2'/></button>}</div>
        </div>
        <div className='lg:w-1/2'>
          <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Re-Enter Password</h3>
          <div className='flex items-center rounded-md border-2 border-t3/30'><input id="repass" name="repass" type="password" value={rePass} onChange={e=>setRePass(e.target.value)} placeholder='Re-Enter Pssword' className='h-14 border-none w-full px-5'/>{reEye ? <button type="button" onClick={hideRePass}><AiFillEyeInvisible className='text-t1 text-3xl mr-2'/></button>:<button type='button' onClick={showRePass}><AiFillEye className='text-t1 text-3xl mr-2'/></button>}</div>
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