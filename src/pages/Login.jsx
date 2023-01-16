import React, { useContext, useState } from 'react'
import Desclaimer from '../../components/Desclaimer'
import { AppContext } from '../../context/GlobalContext'
import HeadMeta from '../HeadMeta'
import { Select,Option } from '@material-tailwind/react'

const Login = () => {
  const state = useContext(AppContext);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loginType,setLoginType] = useState('');
  return (
    <>
    <HeadMeta/>
    <Desclaimer email={email} password={password} loginType={loginType}/>
     <div id="wrapper" className="hidden lg:grid grid-cols-12 w-full h-full">
      <div className='col-start-1 col-end-8 bg-white flex h-screen'> 
       <div className='flex flex-col space-y-5 w-full mt-20 items-center'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Sign in to your account</h3>
          <img src="https://www.dropbox.com/s/frgr0uyp457kctp/Group.png?raw=1"/>
       </div>  
      </div>
      
      <div className='col-start-8 col-span-5 flex items-center bg-t1 w-full'> 

      <div className='absolute right-80'>
       <form className='flex flex-col space-y-10 bg-white w-[474px] h-auto mb-5 shadow-lg px-10 py-20'>
        <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Email' className='w-full h-fit outline-none border-2 border-b3 px-5 py-3 rounded-md'/> 
        <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Enter Password' className='w-full h-fit outline-none border-2 border-b3 px-5 py-3 rounded-md'/> 
        <Select name="loginType" label='Select Login Type' size='lg' value={loginType} onChange={(e)=>setLoginType(e.target.value)}>
         <Option value='student'>Student</Option>
         <Option value='college'>College</Option>
         <Option value='campus_ambassadors'>Campus Ambassadors</Option>
         <Option value='school_or_college_aythorities'>School or College authorities</Option>
         <Option value='other'>Others</Option>
        </Select> 
        <a className='ml-60 text-t1 underline'>Forgot Password</a>
        <button type="button" onClick={()=>state.setDsclState(true)} className='text-white py-5 rounded-md bg-b1'>Login</button>
        <p className='text-center'>Don't have an account?<span className='text-t1 underline'> Create Account</span></p>
       </form>  
      </div> 
      </div>
     </div>

     {/* Mobile Login Page */}
     <div id="mobile-wrapper" className='lg:hidden flex flex-col h-screen'>
     
     <div className='flex flex-col items-center text-white bg-t1 h-2/4 justify-center'>
       <div className='flex flex-col items-center mb-5'><h3 className='text-3xl'>LOGO</h3><h3 className='text-sm'>Sign in to your account</h3></div>
       <div><img src="https://www.dropbox.com/s/frgr0uyp457kctp/Group.png?raw=1" className='w-32 h-22'/></div>
     </div>

     {/* Form Wrapper */}
     <div className='flex flex-col items-center py-5 h-full bg-white'>
     {/* Form */}
     <div className='flex flex-col space-y-5 h-full'>
       {/* Input */}
      <fieldset className='border-2 boder-t1 h-14 px-5 rounded-lg'>
       <legend className='text-t1 text-sm'>Email:</legend>
       <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='outline-none focus:ring-0 w-56 h-6 border-none'/><br/><br/>
      </fieldset>
       {/* Input */}
      <fieldset className='border-2 boder-t1 h-14 px-5 rounded-lg'>
       <legend className='text-t1 text-sm'>Enter Password:</legend>
       <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='outline-none focus:ring-0 w-56 h-6 border-none'/><br/><br/>
      </fieldset>
      <Select name="login_type" label='Select Login Type' size='lg' value={loginType} onChange={(e)=>setLoginType(e.target.value)}>
         <Option value='student'>Student</Option>
         <Option value='college'>College</Option>
         <Option value='campus_ambassadors'>Campus Ambassadors</Option>
         <Option value='school_or_college_aythorities'>School or College authorities</Option>
         <Option value='other'>Others</Option>
        </Select>
      <div className='text-t1 underline w-full text-sm text-end'><a href="#">Forgot Password?</a></div>
       <button onClick={()=>state.setDsclState(true)} className='self-center bg-t1 w-fit h-fit text-white text-xl px-10 py-2 rounded-lg'>Login</button>
      <div className='flex w-full text-center text-t2 text-sm'><a href="#">Dont have an account?<span className='text-t1 underline ml-1'>Create Account</span></a></div>
     </div>
     </div>
     </div>
    </>
  )
}

export default Login