import React from 'react'

const HccecoMsg = ({name,msg}) => {
  return (
      <div id="msg" className='flex items-center space-x-2 '>
        <img src="/public/avtar.png" className='w-8 h-8 rounded-full'/>
        <div className='flex flex-col text-xs'>
          <h3 className='font-bold'>{name}</h3>
          <h3 className='text-t2 text-[10]'>{msg}</h3>
        </div>
      </div>
  )
}

export default HccecoMsg