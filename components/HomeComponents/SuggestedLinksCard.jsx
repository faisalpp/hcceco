import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';


const SuggestedLinksCard = ({name,userType,clgName,setLinks,links,id}) => {
  return (
    <div id="carousal-card" className='flex flex-col space-x-2 lg:shadow-lg shadow-lg w-[250px] h-32'>
    <span className='mt-2'><RiCloseCircleLine onClick={()=>setLinks(links.filter(link=>link.id !== id))} className='relative left-52 hover:text-t1 cursor-pointer'/></span>
    <div className='flex items-center space-x-3 ml-5'>
     <img src='https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1' className='h-10 w-10 rounded-full'/>
     <div className='flex flex-col'>
      <h3 className='font-bold text-xs'>{name}</h3>
      <p className=' text-xs text-t2 w-40'><span>{userType} </span> | {clgName}</p>
     </div>
    </div>
    <div className='flex justify-center space-x-3 text-xs mt-3'><button className='bg-b2/30 px-4 py-1 rounded-md'>Link</button><button className='px-3 py-1 border-2 border-t2/30 rounded-md'>Posts</button></div>
   </div>
  )
}

export default SuggestedLinksCard