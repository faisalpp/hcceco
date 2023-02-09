import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import {RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import PostEventCard from './PostEventCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PostEvent = ({events}) => {

  return (
    <>
    <div className='flex items-center lg:space-x-5 space-x-2 py-10'>
      {/* Post Event Button */}
      <div className='flex flex-col justify-center items-center w-32 h-28 lg:w-[145px] lg:h-[130px] lg:border-2 border-[1px] border-t3/20 rounded-md space-y-3 shadow-lg'>
       <BsPlusSquareFill className='text-t1 text-2xl'/>
       <h3 className='text-[10px] lg:text-sm'>Post an Event</h3>
      </div>

      {/* Desktop Event Crousel  */}
      <div className='hidden lg:flex w-full'>
      <CarouselProvider naturalSlideWidth={270} naturalSlideHeight={240} totalSlides={events.length} visibleSlides={3} className="relative w-full">
        <ButtonBack className='absolute bottom-16 left-0 mr-3 z-20'><div className='hidden lg:flex bg-t1/70 rounded-full text-white'><RiArrowLeftSLine className='text-2xl'/></div></ButtonBack>
        <Slider className="px-0 lg:px-5">
         {events.map((event,index)=><Slide  index={index} key={index}><PostEventCard eventNum={event.eventNum} userName={event.name} img={event.img}/></Slide>)}
        </Slider>
        <ButtonNext className='absolute right-0 bottom-16'><RiArrowRightSLine className='hidden lg:flex bg-t1/70 rounded-full text-2xl text-white'/></ButtonNext>
      </CarouselProvider>
      </div>

      {/* Mobile Event Crousel  */}
      <div className='lg:hidden flex w-full'>
      <CarouselProvider naturalSlideWidth={170} naturalSlideHeight={220} totalSlides={events.length} visibleSlides={2} className="relative w-full">
        <Slider className="">
        {events.map((event,index)=><Slide index={index} key={index}><PostEventCard eventNum={event.eventNum} userName={event.name} img={event.img}/></Slide>)}
        </Slider>
      </CarouselProvider>
      </div>

    </div>
    </>
  )
}

export default PostEvent