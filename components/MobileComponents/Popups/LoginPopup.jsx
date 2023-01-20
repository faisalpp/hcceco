import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../../context/GlobalContext'

const LoginPopup = () => {
  const state = useContext(AppContext);
  const login = () =>{
    state.setLoginPopup(false);
    Navigate('/login');
  }
  
  return (
    <div className={`${state.loginPopup ? 'absolute' : 'hidden'} z-10 w-full h-full bg-t3/60`}>
     <div className='flex items-center justify-center w-full h-full bg-t1/5'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-52 px-5 py-10 justify-center rounded-xl'>
        <h3 className='text-xl lg:ml-28 text-center'>Please Login to get Updates</h3>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
          <button onClick={()=>state.setLoginPopup(false)} className='bg-t1/20 text-t1 px-5 py-2 rounded-md'>Cancel</button>
          <button onClick={()=>login()} className=' bg-b1 text-white px-8 py-2 rounded-md'>Login</button>
        </div>
      </div>
        </div>  
    </div>
  )
}

export default LoginPopup