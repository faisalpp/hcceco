import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import CarousalCard from './CarousalCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

const SuggestedLinks = () => {
  return (
    <div id="wrapper" className='flex flex-col w-full justify-center mt-10 items-center space-y-5 py-5'>
        <h3 id="heading" className='text-t1 text-center text-md'>Suggested Links</h3>
        <Carousel responsive={responsive}>
         <div>
            <CarousalCard/>
            </div>
        </Carousel>      

    </div>
  )
}

export default SuggestedLinks