import React from 'react'

const PostEventCard = ({eventNum,userName,img}) => {
  return (
    <div className='relative w-32 h-36 lg:w-[125px] lg:h-[133px]'>
      <span className='absolute text-white z-40 top-2 left-2 text-xs hover:underline cursor-pointer w-16 truncate overflow-hidden'>{userName}</span>
      {eventNum ? <div className='absolute lg:right-2 right-8 top-1 z-40 text-white bg-t3 w-5 h-5 text-center rounded-full lg:text-[9px] text-[8px]'><h3 className='py-1'>+{eventNum}</h3></div>:null}
     <img src={img} className='brightness-50 lg:w-32 lg:h-32 rounded-md'/>
   </div>
  )
}

export default PostEventCard