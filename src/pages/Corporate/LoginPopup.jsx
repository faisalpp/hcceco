import React from 'react'
import { NavLink } from 'react-router-dom'
import MobNavBar from '../../../components/MobileComponents/MobNavBar'

const LoginPopup = () => {
  return (
    <>
    <MobNavBar/>
    <div style={{'height':'calc(100vh - 138px)'}} className='flex w-full bg-white'>
     <div className='flex flex-col space-y-10 ml-10 mr-10 w-full h-full items-center justify-center'>
      <p className='ml-5 text-t3'>PLEASE LOGIN OR SIGNUP TO VIEW CONTENT OF THIS PAGE</p>
      <div className='flex space-x-10'>
        <NavLink to="/signup"><h3 className='text-t1 bg-t1/20 px-5 rounded-md py-2'>Signup</h3></NavLink>
        <NavLink to="/login"><h3 className='text-white bg-t1 px-8 rounded-md py-2'>Login</h3></NavLink>
      </div>
     </div>
    </div>
    </>
  )
}

export default LoginPopup