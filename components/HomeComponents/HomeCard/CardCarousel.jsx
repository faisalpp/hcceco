import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {RiArrowLeftSLine,RiArrowRightSLine} from 'react-icons/ri'

const CardCarousel = ({images}) => {
  return (
    <>
    {/* Desktop Carousel */}
   {images ? <div className='lg:flex hidden ml-10 mr-10 mb-2'>
   <CarouselProvider naturalSlideWidth={170} naturalSlideHeight={80} totalSlides={2} visibleSlides={1} className="relative w-full">
   <ButtonBack className='absolute cursor-pointer top-28 left-3 mr-3 z-20'><div className='hidden lg:flex bg-t2/50 rounded-full text-white'><RiArrowLeftSLine className='text-2xl'/></div></ButtonBack>
    <Slider>
     {images.map((img,index)=><Slide key={index}><img src={img} className='w-full rounded-md h-[243px]'/></Slide>)}
    </Slider>
   <ButtonNext className='absolute cursor-pointer top-28 right-3 mr-3 z-20'><div className='hidden lg:flex bg-t2/50 rounded-full text-white'><RiArrowRightSLine className='text-2xl'/></div></ButtonNext> 
   </CarouselProvider>
   </div>:null}
   {/* Mobile Carousel */}
   {images ? <div className='lg:hidden flex ml-5 mr-5 mb-2'>
   <CarouselProvider naturalSlideWidth={170} naturalSlideHeight={120} totalSlides={2} visibleSlides={1} className="relative w-full">
    <Slider>
     {images.map((img,index)=><Slide key={index} innerClassName={'mobile_carousel_card'}><img src={img} className='w-full rounded-md h-[200px]'/></Slide>)}
    </Slider>
   </CarouselProvider>
   </div>:null}
    </>
  )
}

export default CardCarousel