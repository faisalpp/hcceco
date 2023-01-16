import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/GlobalContext'

const Desclaimer = ({email,password,loginType}) => {
  const state = useContext(AppContext);
  const navigation = useNavigate();

  // Login Details are authenticated here
  const login = () =>{
    state.setDsclState(false);
    state.setIsLogin(true);
    navigation('/');
  }

  return (
    <>
    <div className={`${state.dsclState ? 'absolute' : 'hidden'} z-10 w-full h-full bg-t1/50`}>
     <div className='flex items-center justify-center w-full h-full bg-t1/5'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-2/3 px-5 py-10 justify-center'>
        <h3 className='text-t1 text-2xl lg:ml-28 text-center'>Desclaimer</h3>
        <div className='flex flex-col space-y-10 items-center mt-5 lg:text-xl text-sm'>
        <h3>1-Lorem ipsum dollar sit amet lorem ipsum</h3>
        <h3>2-Lorem ipsum dollar sit amet lorem ipsum</h3>
        <h3>3-Lorem ipsum dollar sit amet lorem ipsum</h3>
        </div>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
            <button onClick={()=>state.setDsclState(false)} className='bg-b2 text-t1 px-5 py-2 rounded-sm'>Decline</button>
            <button onClick={()=>login()} type="submit" className='bg-b1 text-white px-5 py-2 rounded-sm'>I Accept</button>
        </div>
      </div>
    
        </div>  
    
    </div>
    </>
  )
}

export default Desclaimer