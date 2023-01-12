import React from 'react'
import SuggestedLinksCard from './SuggestedLinksCard';

const SuggestedLinks = () => {
  return (
    <div id="wrapper" className='flex flex-col w-full justify-center mt-10 items-center space-y-5 py-5 mb-5'>
     <h3 id="heading" className='text-t1 text-center text-md'>Suggested Links</h3>
     <div className='flex space-x-10 py-5'>
      <SuggestedLinksCard/>
      <SuggestedLinksCard/>
     </div>      
    </div>
  )
}

export default SuggestedLinks