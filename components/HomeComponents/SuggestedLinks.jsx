import React from 'react'
import SuggestedLinksCard from './SuggestedLinksCard';
import { RiArrowLeftSLine,RiArrowRightSLine } from 'react-icons/ri';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const SuggestedLinks = () => {

  return (
    <div id="wrapper" className='flex flex-col w-full justify-center mt-10 space-y-5 py-5 mb-5'>
     <h3 id="heading" className='text-t1 text-center text-md'>Suggested Links</h3>
     {/* Desktop Crousel */}
     <div className='hidden lg:flex w-full'>
     <CarouselProvider naturalSlideWidth={400} naturalSlideHeight={230} totalSlides={6} visibleSlides={2} className="relative w-full">
        <ButtonBack className='absolute bottom-20 left-0 z-20'><RiArrowLeftSLine className='hidden lg:flex text-2xl text-black'/></ButtonBack>
        <Slider className="lg:px-12 lg:ml-5 lg:mr-5">
          <Slide index={0}><SuggestedLinksCard/></Slide>
          <Slide index={1}><SuggestedLinksCard/></Slide>
          <Slide index={2}><SuggestedLinksCard/></Slide>
          <Slide index={3}><SuggestedLinksCard/></Slide>
          <Slide index={4}><SuggestedLinksCard/></Slide>
          <Slide index={5}><SuggestedLinksCard/></Slide>
        </Slider>
        <ButtonNext className='absolute right-0 bottom-20'><RiArrowRightSLine className='hidden lg:flex text-2xl text-black'/></ButtonNext>
      </CarouselProvider>
     </div>

     {/* Mobile Crousel */}
      {/* Desktop Crousel */}
     <div className='flex lg:hidden w-full'>
     <CarouselProvider naturalSlideWidth={350} naturalSlideHeight={200} totalSlides={6} visibleSlides={1} className="relative w-full">
        <ButtonBack className='absolute bottom-20 left-0 z-20'><RiArrowLeftSLine className='hidden lg:flex text-2xl text-black'/></ButtonBack>
        <Slider className="px-5 ml-5 mr-5">
          <Slide index={0}><SuggestedLinksCard/></Slide>
          <Slide index={1}><SuggestedLinksCard/></Slide>
          <Slide index={2}><SuggestedLinksCard/></Slide>
          <Slide index={3}><SuggestedLinksCard/></Slide>
          <Slide index={4}><SuggestedLinksCard/></Slide>
          <Slide index={5}><SuggestedLinksCard/></Slide>
        </Slider>
        <ButtonNext className='absolute right-0 bottom-20'><RiArrowRightSLine className='hidden lg:flex text-2xl text-black'/></ButtonNext>
      </CarouselProvider>
     </div>

    </div>
  )
}

export default SuggestedLinks