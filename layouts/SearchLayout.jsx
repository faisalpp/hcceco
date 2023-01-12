import React from 'react'
import { Helmet } from 'react-helmet-async'
import SearchSideBar from '../components/SearchSideBar'
import Navbar from '../components/Navbar'

const SearchLayout = ({children}) => {
  return (
    <>
     <Helmet>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>Search Result</title>
    </Helmet>
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