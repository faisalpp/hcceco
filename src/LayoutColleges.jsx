import React from 'react'
import CollegesSideBar from '../components/CollegesComponents/CollegesSideBar'
import Navbar from '../components/Navbar'
import NotificationMenu from '../components/NotificationMenu'
import SearchBar from '../components/HomeComponents/SearchBar'

const LayoutColleges = ({children}) => {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
        <title>Document</title>
    </head>
    <body>
     <Navbar/>
     <NotificationMenu/>
        <SearchBar/>
     <div className='grid grid-cols-12 w-full'>
      <div className='col-start-1 col-end-4 w-full'><CollegesSideBar/></div>
      <main className='col-start-4 col-end-13 w-full'>{children}</main>
     </div>
    </body>
    </html>
  )
}

export default LayoutColleges