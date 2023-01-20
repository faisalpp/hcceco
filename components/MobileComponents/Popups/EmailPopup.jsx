import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../../context/GlobalContext'

const EmailPopup = () => {
  const state = useContext(AppContext);
  
  return (
    <div className={`${state.emailPopup ? 'absolute' : 'hidden'} z-10 w-full h-full bg-t3/60`}>
     <div className='flex items-center justify-center w-full h-full bg-t1/5'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-56 px-5 justify-center rounded-xl'>
        <h3 className='text-xl lg:ml-28 text-center'>You'll start receiving emails on your given email Id</h3>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
          <button onClick={()=>state.setEmailPopup(false)} className=' bg-b1 text-white px-10 py-2 rounded-md'>Ok</button>
        </div>
      </div>
        </div>  
    </div>
  )
}

export default EmailPopup