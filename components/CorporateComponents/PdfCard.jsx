import React from 'react'
import { FaThumbsUp ,FaEye,FaDownload} from 'react-icons/fa'

const PdfCard = ({topic,likes,views,downloads,likeUrl,downloadUrl}) => {
  return (
    <div className='flex lg:flex-row flex-col space-y-5 items-center lg:space-x-72 lg:px-10 py-5 border-2 border-t3/30 rounded-md'>
    <div className='flex flex-col'>
     <h3 className='text-t1 font-bold text-[15px]'>{topic}</h3>
     <div className='flex text-xs text-t3/50 mt-2 space-x-5'>
     <a className='flex'><FaThumbsUp className='mr-1'/> {likes} Likes</a>
     <a className='flex'><FaEye className='mr-1'/> {views} Views</a>
     <a className='flex'><FaDownload className='mr-1'/> {downloads} Downloads</a>
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