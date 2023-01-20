import React from 'react'
import LinksCard from '../../../components/MobileComponents/LinksCard'
import SearchBar from '../../../components/SearchBar'

const MsgLink = () => {
  return (
    <div className='flex flex-col'>
      <SearchBar/>
      <div className='flex flex-col space-y-8'>
        {/* Card */}
        <LinksCard/>
        <LinksCard/>
        <LinksCard/>
      </div>
    </div>
  )
}

export default MsgLink