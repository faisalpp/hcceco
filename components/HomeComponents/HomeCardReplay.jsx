import React from 'react'
import {RiChat1Line} from 'react-icons/ri'

const HomeCardReplay = () => {
  return (
    <>
    {/* Replays */}
    <div className='flex flex-col'>
     <div className='flex space-x-32 items-center ml-10 mr-10 mb-10 w-full'>
      <div className='flex items-center space-x-2'>
       <img src="/public/avtar.png" className='w-10 h-10 rounded-full'/>
       <div className='flex flex-col text-xs'>
        <h3>Argha Paul</h3>
        <h3>What a perfect time to share!</h3>
       </div>
      </div>
      {/* Reply Icons */}
      <div className='flex space-x-10 text-t3'>
       <RiChat1Line className='text-xl cursor-pointer'/>
       <RiChat1Line className='text-xl cursor-pointer'/>
      </div>
     </div>
    </div>
    </>
  )
}

export default HomeCardReplay