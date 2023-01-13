import React from 'react'
import { Helmet } from 'react-helmet-async'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'

const SearchLayout = ({children}) => {
  return (
    <>
    <HeadMeta title="Search Profile"/>
    <Navbar/>
    <main className='grid grid-cols-14 '>
     <div className='col-start-1 col-end-4 flex justify-center'>
      <SearchSideBar/>
     </div>
     <div className='col-start-4 col-end-12'>
      {children}
     </div>
    </main>
    </>
  )
}

export default SearchLayout