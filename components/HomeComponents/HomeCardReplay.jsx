import React from 'react'
import {RiChat1Line} from 'react-icons/ri'
import {MdOutlineWavingHand} from 'react-icons/md'

const HomeCardReplay = () => {
  return (
    <>
    {/* Replays */}
    <div className='flex flex-col'>
     <div className='flex space-x-10 lg:space-x-32 items-center ml-3 lg:ml-10 mr-10 mb-5 lg:mb-10 w-full'>
      <div className='flex items-center space-x-2'>
       <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
       <div className='flex flex-col text-[9px] lg:text-xs'>
        <h3 className='font-bold'>Argha Paul</h3>
        <h3>What a perfect time to share!</h3>
       </div>
      </div>
      {/* Reply Icons */}
      <div className='flex space-x-5 lg:space-x-10 text-t3'>
       <MdOutlineWavingHand className='text-xl cursor-pointer'/>
       <RiChat1Line className='text-xl cursor-pointer'/>
      </div>
     </div>
    </div>
    </>
  )
}

export default HomeCardReplay