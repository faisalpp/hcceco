import React, { useContext } from 'react'
import LoginRegisterLayout from '../LoginRegisterLayout'
import Desclaimer from '../../components/Desclaimer'
import { AppContext } from '../../context/GlobalContext'

const Login = () => {
  const state = useContext(AppContext)
  return (
    <LoginRegisterLayout>
      <Desclaimer/>
     <div id="wrapper" className="grid grid-cols-12 w-full h-full">
      <div className='col-start-1 col-end-8 bg-white flex h-screen'> 
       <div className='flex flex-col space-y-5 w-full mt-20 items-center'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Sign in to your account</h3>
          <img src="/Group.png"/>
       </div>  
      </div>
      
      <div className='col-start-8 col-span-5 flex items-center bg-t1 w-full'> 

      <div className='absolute right-80'>
       <form className='flex flex-col space-y-10 bg-white w-[474px] h-auto mb-5 shadow-lg px-10 py-20'>
        <input type="text" placeholder='Enter Email' className='w-full h-fit outline-none border-2 border-b3 px-5 py-3 rounded-md'/> 
        <input type="text" placeholder='Enter Email' className='w-full h-fit outline-none border-2 border-b3 px-5 py-3 rounded-md'/> 
        <select className='w-full h-fit outline-none border-2 border-b3 px-5 py-3 rounded-md text-b2'>
         <option>Student</option>
         <option>College</option>
         <option>Campus Ambassadors</option>
         <option>School or College authorities</option>
         <option>Others</option>
        </select> 
        <a className='ml-60 text-t1 underline'>Forgot Password</a>
        <button onClick={()=>state.setDsclState(true)} className='text-white py-5 rounded-md bg-b1'>Login</button>
        <p className='text-center'>Don't have an account?<span className='text-t1 underline'> Create Account</span></p>
       </form>  
      </div> 
      </div>
     </div>
    </LoginRegisterLayout>
  )
}

export default Login