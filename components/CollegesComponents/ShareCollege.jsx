import React, { useContext } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { AppContext} from '../../context/GlobalContext'

const ShareCollege = () => {
  const state = useContext(AppContext)
  
  return (
    <div className={`${state.share ?'absolute':'hidden'} z-10 flex-col bg-t1/50 w-full h-screen`}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
       <div className='flex flex-col space-y-5 py-2 items-center bg-white w-1/2 h-fit rounded-md px-10'>
        <div className='flex w-full justify-end'><RiCloseCircleLine className='cursor-pointer text-2xl' onClick={()=>state.setShare(false)}/></div>
        <h3 className=' text-2xl text-t1'>SHARE THIS COLLEGE</h3>
        <p>Share This College with Your Friendes</p>
        <div className='flex space-x-10'><img src="https://www.dropbox.com/s/p9csi5j5k08gei8/whatsapp.svg?raw=1"/><img src="https://www.dropbox.com/s/dmu4lw2ffo1c6qk/telegram.svg?raw=1"/></div>
        {/* Page Link */}
        <div className='flex flex-col py-5'>
         <h3 className='text-start text-xs mb-2'>Page Link</h3>
         <div className='flex w-full'>
          <input placeholder='Page Link here' className='px-3 w-96 h-10 bg-t3/20 text-xs py-2' />
          <button className='bg-t1/30 text-t1 text-xs px-5 rounded-r py-2 h-full'>Copy Link</button>
         </div>
        </div>
       
       </div> 
      </div>
    </div>
  )
}

export default ShareCollege