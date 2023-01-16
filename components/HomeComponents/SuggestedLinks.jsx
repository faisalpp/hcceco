import React from 'react'
import SuggestedLinksCard from './SuggestedLinksCard';
import { RiArrowLeftSLine,RiArrowRightSLine } from 'react-icons/ri';

const SuggestedLinks = () => {
  
  let crouselContainer = document.getElementById('link-crousel');
  const next = () => {
    let width = crouselContainer.clientWidth;
    crouselContainer.scrollLeft = crouselContainer.scrollLeft - 250;
  }
  const back = () => {
    let width = crouselContainer.clientWidth;
    crouselContainer.scrollLeft = crouselContainer.scrollLeft + 250;
    console.log(width);
  }

  return (
    <div id="wrapper" className='flex flex-col w-full justify-center mt-10 space-y-5 py-5 mb-5'>
     <h3 id="heading" className='text-t1 text-center text-md'>Suggested Links</h3>
      {/* Crousel Container */}
     <div className='relative overflow-hidden'>
      {/* Craousel */}
      <div className='absolute z-20 right-0 top-10 mr-3'>
        <button onClick={back} className='bw-fit h-fit rounded-full'>
         <RiArrowRightSLine className='text-3xl text-black'/>
        </button>
      </div>
      <div id="link-crousel" className='flex space-x-10 ml-20 h-52 w-[560px] overflow-x-hidden scroll-smooth'>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
      </div>
      <div className='absolute z-20 top-10 ml-3'>
        <button onClick={next} className='w-fit h-fit rounded-full'>
         <RiArrowLeftSLine className='text-3xl text-black'/>
        </button>
      </div>
     </div>        
    </div>
  )
}

export default SuggestedLinks