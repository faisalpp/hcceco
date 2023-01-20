import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../../context/GlobalContext'

const BlockPopup = () => {
  const state = useContext(AppContext);
  
  const block = () =>{
    state.setBlockPopup(false);
  }
  
  return (
    <div className={`${state.blockPopup ? 'absolute lg:hidden' : 'hidden'} z-10 w-full h-full bg-t3/60`}>
     <div className='flex items-center justify-center w-full h-full bg-t1/5'>
      <div className='flex flex-col bg-white lg:w-2/4 w-72 h-52 px-5 py-10 justify-center rounded-xl'>
        <h3 className='text-xl lg:ml-28 text-center'>Are you sure you want to block Argha Paul?</h3>
        <div className='flex space-x-10 mt-12 justify-center w-full'>
          <button onClick={()=>state.setBlockPopup(false)} className='bg-t1/20 text-t1 px-5 py-2 rounded-md'>Cancel</button>
          <button onClick={()=>block()} className=' bg-b1 text-white px-8 py-2 rounded-md'>Block</button>
        </div>
      </div>
        </div>  
    </div>
  )
}

export default BlockPopup