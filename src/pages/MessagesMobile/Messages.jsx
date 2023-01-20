import React from 'react'
import MessageCard from '../../../components/MobileComponents/MessageCard'
import SearchBar from '../../../components/SearchBar'

const Messages = () => {
  return (
    <div className='flex flex-col'>
      <SearchBar/>
      <div className='flex flex-col space-y-8'>
        {/* Card */}
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
      </div>
    </div>
  )
}

export default Messages