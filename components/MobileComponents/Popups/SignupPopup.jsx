import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../context/GlobalContext'


const SignupPopup = () => {
  const state = useContext(AppContext);  
  return (
    <div className={`${state.emailPopup ? 'absolute lg:hidden' : 'hidden'} z-10 w-full h-full bg-t3/60`}>
     <div className='flex items-center justify-center w-full h-full bg-t1/5'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-56 px-5 justify-center rounded-xl'>
        <h3 className='text-xl lg:ml-28 text-center'>Signup now to see amazing content!</h3>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
        <NavLink to="/login"><div className='bg-t1/20 text-t1 px-5 py-2 rounded-md'>Create Account</div></NavLink>
        <NavLink to="/signup"><div className=' bg-b1 text-white px-10 py-2 rounded-md'>Login</div></NavLink>
        </div>
      </div>
        </div>  
    </div>
  )
}

export default SignupPopup