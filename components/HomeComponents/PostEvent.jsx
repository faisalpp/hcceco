import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import {RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import PostEventCard from './PostEventCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PostEvent = () => {

  return (
    <>
    <div className='flex items-center space-x-5 py-10'>
      {/* Post Event Button */}
      <div className='flex flex-col justify-center items-center w-32 h-28 lg:w-[145px] lg:h-[130px] border-2 border-t3/20 rounded-md space-y-3 shadow-lg'>
       <BsPlusSquareFill className='text-t1 text-2xl'/>
       <h3 className='text-[10px] lg:text-sm'>Post an Event</h3>
      </div>

      {/* Desktop Event Crousel  */}
      <div className='hidden lg:flex w-full'>
      <CarouselProvider naturalSlideWidth={270} naturalSlideHeight={225} totalSlides={6} visibleSlides={3} className="relative w-full">
        <ButtonBack className='absolute bottom-16 left-0 mr-3 z-20'><div className='hidden lg:flex bg-t1/70 rounded-full text-white'><RiArrowLeftSLine className='text-2xl'/></div></ButtonBack>
        <Slider className="px-0 lg:px-3">
          <Slide index={0}><PostEventCard eventNum="1" userName="Faisal"/></Slide>
          <Slide index={1}><PostEventCard eventNum="2" userName="Faisal"/></Slide>
          <Slide index={2}><PostEventCard eventNum="3" userName="Faisal"/></Slide>
          <Slide index={3}><PostEventCard eventNum="4" userName="Faisal"/></Slide>
          <Slide index={4}><PostEventCard eventNum="5" userName="Faisal"/></Slide>
          <Slide index={5}><PostEventCard eventNum="6" userName="Faisal"/></Slide>
        </Slider>
        <ButtonNext className='absolute right-0 bottom-16'><RiArrowRightSLine className='hidden lg:flex bg-t1/70 rounded-full text-2xl text-white'/></ButtonNext>
      </CarouselProvider>
      </div>

      {/* Mobile Event Crousel  */}
      <div className='lg:hidden flex w-full'>
      <CarouselProvider naturalSlideWidth={170} naturalSlideHeight={220} totalSlides={6} visibleSlides={2} className="relative w-full">
        <Slider className="px-0">
          <Slide index={0}><PostEventCard eventNum="1" userName="Faisal"/></Slide>
          <Slide index={1}><PostEventCard eventNum="2" userName="Faisal"/></Slide>
          <Slide index={2}><PostEventCard eventNum="3" userName="Faisal"/></Slide>
          <Slide index={3}><PostEventCard eventNum="4" userName="Faisal"/></Slide>
          <Slide index={4}><PostEventCard eventNum="5" userName="Faisal"/></Slide>
          <Slide index={5}><PostEventCard eventNum="6" userName="Faisal"/></Slide>
        </Slider>
      </CarouselProvider>
      </div>

    </div>
    </>
  )
}

export default PostEvent