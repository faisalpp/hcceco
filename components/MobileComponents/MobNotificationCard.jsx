import React from 'react'

const MobNotificationCard = ({name,time}) => {
  return (
    <div className='flex items-center space-x-2'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
    <div className='flex flex-col'>
     <h3 className='text-xs'>{name} Liked you post</h3>
     <span className='text-[10px] text-t3'>{time}</span>
    </div>
    </div> 
  )
}

export default MobNotificationCard