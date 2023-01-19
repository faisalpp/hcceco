import React from 'react'

const PostEventCard = ({eventNum,userName}) => {
  return (
    <div className='relative overflow-hidden lg:ml-2 lg:mr-2 w-32 h-36 lg:w-[125px] lg:h-[133px]'>
    <div className='absolute top-1 lg:right-0 right-18 z-10 text-center  text-white'><span className='ml-1 text-xs hover:underline cursor-pointer '>{userName}</span>{eventNum ? <span className='relative top-1 left-10 lg:left-14 bg-t3 w-5 h-5 px-1 py-1 rounded-full text-[10px]'>+{eventNum}</span>:null}</div>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='brightness-50 lg:w-32 lg:h-32 rounded-md'/>
   </div>
  )
}

export default PostEventCard