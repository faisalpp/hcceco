import React from 'react'

const PostEventCard = ({no}) => {
  return (
    <div className='relative overflow-hidden ml-2 mr-2 min-w-[125px] w-[125px] h-[133px]'>
    <div className='absolute top-1 z-10  text-center  text-white'><span className='ml-1 text-xs hover:underline cursor-pointer '>Manika</span><span className='relative top-1 left-14 bg-t3 w-5 h-5 px-1 py-1 rounded-full text-[10px]'>+{no}</span></div>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='brightness-50 w-32 h-32 rounded-md'/>
   </div>
  )
}

export default PostEventCard