import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import MobileFloats from './MobileFloats'


const SignupS2 = () => {
  const title = useLocation()
  
  return (
    <>
    <Navbar/>
    <MobileFloats/>
    <div style={{'height':'calc(100vh - 80px)'}} className='flex flex-col bg-white w-full items-center py-10'>
    <div className='flex flex-col mt-5'>
      <h3 className='lg:flex hidden text-6xl'>LOGO</h3>
      <h3 className='lg:text-black text-t1'>Create your account</h3>
    </div>
    <div className='flex mt-5'>
     <div className={`border-b-[5px] ${ title.pathname === "/signup/college/step1" ?'border-t1':'border-t3/10'} py-5 lg:px-28 px-5`}><h3 className='lg:text-2xl text-lg px-5'>Step 1</h3></div><div className={`border-b-[5px] ${title.pathname === "/signup/step2" || title.pathname === "/signup/college/step2" ?'border-t1':'border-t3/10'} py-5 lg:px-28 px-5`}><h3 className='lg:text-2xl text-lg px-5'>Step 2</h3></div>
    </div>

     <div className='flex flex-col mt-5 items-center space-y-10'>
        <h3 className='text-green-500 lg:text-lg text-xs lg:w-full w-80'>OTP has been sent on your given mobile number or email</h3>
        <h3 className='text-t1'>Enter 6 Digit Mobile OTP</h3>
        <div className='flex space-x-5'>
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
          <div style={{'borderWidth':'1px'}} className='flex border-2 border-t3 w-fit lg:px-5 h-fit'><input type='text' placeholder='-' className='lg:w-12 w-8 border-none focus:ring-0 text-xs lg:text-4xl h-8 lg:h-20'/></div>  
        </div>
        <div><button className='text-white text-lg bg-t1 px-10 rounded-md py-2'>Verify</button></div>
     </div>


    </div>
    </>
  )
}

export default SignupS2