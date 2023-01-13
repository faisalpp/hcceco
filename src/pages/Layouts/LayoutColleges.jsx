import React from 'react'
import CollegesSideBar from '../../../components/CollegesComponents/CollegesSideBar'
import Navbar from '../../../components/Navbar'
import NotificationMenu from '../../../components/NotificationMenu'
import SearchBar from '../../../components/HomeComponents/SearchBar'
import ShareCollege from '../../../components/CollegesComponents/ShareCollege'
import { Helmet } from 'react-helmet-async'

const LayoutColleges = ({children}) => {
  return (
    <>
    <Helmet>
     <meta charSet="UTF-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>Document</title>
    </Helmet>
    <ShareCollege/>
     <Navbar/>
     <NotificationMenu/>
        <SearchBar/>
     <div className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 w-full'><CollegesSideBar/></div>
      <main className='col-start-4 col-end-13 w-full'>{children}</main>
     </div>
    </>
  )
}

export default LayoutColleges