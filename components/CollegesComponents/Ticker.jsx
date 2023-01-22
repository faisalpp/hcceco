import { data } from 'autoprefixer'
import React from 'react'

const Ticker = ({data}) => {
  return (
    <div className='flex lg:h-14 h-10 items-center bg-white'>
     <h3 className='flex items-center text-t1 border-l-2 border-r-2 border-t3/10 h-full lg:px-10 px-3 lg:text-xl text-sm'>Announcement</h3>
     <marquee className="text-red-500 text-sm" direction="left">
        {data.map((el)=>el.toString())}
     </marquee>
    </div>
  )
}

export default Ticker