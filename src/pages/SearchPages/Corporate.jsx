import React from 'react'
import MockTestCard from '../../../components/CorporateComponents/MockTestCard'
import PdfCard from '../../../components/CorporateComponents/PdfCard'
import SearchBar from '../../../components/SearchBar'
import SearchCard from '../../../components/SearchCard'
import HeadMeta from '../../HeadMeta'
import SearchLayout from '../Layouts/SearchLayout'

const Corporate = () => {
  return (
    <>
    <SearchLayout>

    <HeadMeta title="Search Profile"/>
    <div className='flex flex-col space-y-10 bg-white py-10 items-center h-screen'>
     <h3 className='text-center text-t1 text-3xl font-bold mt-10'>Corporate</h3>
     <div className='flex flex-col space-y-10 w-full items-center'>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     <PdfCard topic="Short Tricks" likes="10k" views="20k" likeUrl="/" downloadUrl="/" downloads="1K"/>
     </div>  
    </div>
    </SearchLayout>
    </>
  )
}

export default Corporate