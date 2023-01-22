import React from 'react'
import { FaThumbsUp ,FaEye,FaDownload} from 'react-icons/fa'

const PdfCard = ({topic,likes,views,downloads,likeUrl,downloadUrl}) => {
  return (
    <div className='flex lg:flex-row flex-col space-y-5 items-center lg:space-x-60 lg:px-10 py-5 border-2 border-t3/30 rounded-md lg:w-11/12 w-80'>
    <div className='flex flex-col'>
     <h3 className='text-t1 font-bold text-[15px]'>{topic}</h3>
     <div className='flex text-xs text-t3/50 mt-2 space-x-5 lg:space-x-10'>
     <div className='flex items-center'><FaThumbsUp className='mr-1'/><div className='flex space-x-1 items-center'><span>{likes}</span><span>Likes</span></div></div>
     <div className='flex items-center'><FaEye className='mr-1'/> <sapn>{views}</sapn> <span>Views</span></div>
     <div className='flex items-center'><FaDownload className='mr-1'/><span> {downloads}</span> <span>Downloads</span></div>
     </div>
    </div> 
    <div className='flex text-[11px] space-x-10'>
      <a href={likeUrl} className='flex border-2 bg-t1/20 px-8 py-2 rounded-md'><FaThumbsUp className='mr-2'/> Like</a>
      <a hrf={downloadUrl} className='flex border-2 bg-t1/30 px-5 py-2 rounded-md'><FaDownload className='mr-2'/> Download</a>
    </div>
   </div>
  )
}

export default PdfCard