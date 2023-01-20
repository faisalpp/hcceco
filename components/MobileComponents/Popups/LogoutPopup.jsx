import React, { useContext } from 'react'
import { AppContext } from '../../../context/GlobalContext'

const LogoutPopup = () => {
  const state = useContext(AppContext);
  const logout = () =>{
    state.setLogoutPopup(false);
    state.setIsLogin(false)
  }
  
  return (
    <div className={`${state.logoutPopup ? 'absolute' : 'hidden'} z-10 w-full h-full bg-t3/60`}>
     <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-52 px-5 py-10 justify-center rounded-xl'>
        <h3 className=' text-xl lg:ml-28 text-center'>Are you sure you want to logout?</h3>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
          <button onClick={()=>state.setLogoutPopup(false)} className='bg-t1/20 text-t1 px-5 py-2 rounded-md'>Decline</button>
          <button onClick={()=>logout()} className=' bg-b1 text-white px-5 py-2 rounded-md'>I Accept</button>
        </div>
      </div>
        </div>  
    </div>
  )
}

export default LogoutPopup