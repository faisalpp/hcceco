import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import { RiArrowGoForwardFill, RiArrowLeftSLine, RiArrowRightFill, RiArrowRightSFill, RiArrowRightSLine } from 'react-icons/ri'
import PostEventCard from './PostEventCard'

const PostEvent = () => {
  let crouselContainer = document.getElementById('crousel-container');
  const next = () => {
    let width = crouselContainer.clientWidth;
    crouselContainer.scrollLeft = crouselContainer.scrollLeft - width;
  }
  const back = () => {
    let width = crouselContainer.clientWidth;
    crouselContainer.scrollLeft = crouselContainer.scrollLeft + width;
    console.log(width);
  }
 

  return (
    <>
    <div className='flex justify-center space-x-5 py-10'>
      {/* Post Event Button */}
      <div className='flex flex-col justify-center items-center w-[125px] h-[130px] space-y-3 shadow-lg'>
       <BsPlusSquareFill className='text-t1 text-2xl'/>
       <h3 className='text-sm'>Post an Event</h3>
      </div>
     {/* Crousel Container */}
     <div className='relative overflow-hidden'>
      {/* Craousel */}
      <div  className='absolute z-20 right-0 top-10'>
        <button onClick={back} className='bg-t1/80 w-fit h-fit rounded-full'>
         <RiArrowRightSLine className='text-3xl text-white'/>
        </button>
      </div>
      <div id="crousel-container" className='flex flex-row-reverse w-[430px] overflow-x-hidden scroll-smooth'>
       <PostEventCard no="1"/>
       <PostEventCard no="2"/>
       <PostEventCard no="3"/>
       <PostEventCard no="4"/>
       <PostEventCard no="5"/>
       <PostEventCard no="6"/>
       <PostEventCard no="7"/>
       <PostEventCard no="8"/>
       <PostEventCard no="9"/>
      </div>
      <div className='absolute z-20 top-10'>
        <button onClick={next} className='bg-t1/80 w-fit h-fit rounded-full'>
         <RiArrowLeftSLine className='text-3xl text-white'/>
        </button>
      </div>
     </div>


    </div>
    </>
  )
}

export default PostEvent