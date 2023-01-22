import React from 'react'

const LinksCard = () => {
  return (
    <div className='flex flex-col space-x-2 space-y-2 bg-white border-b-2 py-2 px-1'>
     <div className='flex space-x-2'>
     <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-12 h-10 rounded-full'/> 
     <div className='flex flex-col'>
       <h3>Bharat</h3>
       <div className='flex'>
         <h3 className='text-[10px] text-t3'><span>Student </span>|<span> Lyalpur College of Technology</span>  </h3>
       </div>
     </div>
     </div>
     <div className='flex items-center space-x-5 justify-center'><button className='bg-t3/30 border-2 border-t1/10 px-2 py-1 rounded-md text-xs'>Accept</button><button className='border-2 border-t3 px-2 py-1 rounded-md text-xs'>Cancel</button></div>
    </div>
  )
}

export default LinksCard