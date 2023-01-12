import React from 'react'

const SearchCard = () => {
  return (
    <div className='flex flex-col shadow-xl w-72 h-fit mb-5'>
      <img src='/public/profile.png' className='w-full h-28 rounded-t-md'/>
      {/* Avtar */}
     <div className='flex items-center space-x-3 w-full'>
      <div><img src='/public/avtar.png' className='mb-10 w-16 h-16 rounded-full'/></div>
      <div className='flex flex-col py-5 w-full'>
       <h3>Khushpreet</h3>
       <h3 className='text-xs text-t3/60'>Student | Jalandhar, Punjab</h3>
       <h3 className='text-xs'><span className='text-green-500'>Total Links</span> 142</h3>
      </div>
     </div>
     {/* Action Buttons */}
     <div className='flex justify-center mt-5 space-x-3 text-xs w-full mb-5'>
       <button className='bg-t1/20 px-4 py-2 rounded-md'>Linked</button>
       <button className='px-3 border-2 border-t3/30 rounded-md'>Message</button>
       <button className='px-5 border-2 border-t3/30 rounded-md'>Posts</button>
     </div>
    </div>
  )
}

export default SearchCard