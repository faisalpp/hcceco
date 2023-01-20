import React from 'react'
import { NavLink } from 'react-router-dom'

const MessageCard = () => {
  return (
   <NavLink to="/mob/threads"><div className='flex items-center space-x-2 mt-5'>
    <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-10 h-10 rounded-full'/>
    <div className='flex flex-col'>
      <h3 className='text-sm'>Kimi</h3>
      <p className='text-t3/50 text-xs w-52 truncate h-4'>Hello! You there Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolorem distinctio, odio deserunt ullam dicta labore enim atque natus! Distinctio iste omnis harum optio! Ut aliquam fugit eum unde nulla!</p>
    </div>
  </div>
  </NavLink>
  )
}

export default MessageCard