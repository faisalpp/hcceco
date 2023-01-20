import React from 'react'

const LinksCard = () => {
  return (
    <div className='flex items-center space-x-2 mt-5'>
    <div className='flex space-x-2'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col'>
      <h3 className='text-sm'>Kimi</h3>
      <h3 className='text-t3/50 text-xs w-52 truncate h-4'>Student | Lyalpur college of Technology</h3>
      <div className='flex mt-1 space-x-3'>
        <button className='bg-t1/40 text-xs px-4 py-2 rounded-md'>Accept</button>
        <button className='border-2 border-t3/20 rounded-md px-4 py-1 text-xs'>Delete</button>
      </div>
    </div> 
    </div>
  </div>
  )
}

export default LinksCard