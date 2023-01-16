import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../../components/Navbar'
//import Ticker, { NewsTicker } from 'nice-react-ticker';
import CollegeNavigation from '../../../components/CollegesComponents/CollegeNavigation';

const CollegeInnerPageLayout = ({children}) => {
  return (
    <>
    <Helmet>
     <meta charSet="UTF-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>College Inner Page</title>
    </Helmet>
    <Navbar/>
    <div className='w-full px-20 bg-white h-screen'>
      {/* College Image Banner with Information And Logo */}
      <div className='flex w-full'>
       <img src="https://www.dropbox.com/s/kuxadvixibll95l/college.jpg?raw=1" className='w-full h-[237px]'/>
      </div>
      
      {/* Announcement */}
      <div className='flex h-14 items-center'>
       <h3 className='flex items-center text-t1 border-l-2 border-r-2 border-t3/10 h-full px-10 text-xl'>Announcement</h3>
       {/* Announcement Text Float right to left */}
        {/* <Ticker isNewsTicker={true}> 
          <NewsTicker   id="1" title="Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"/>
            <NewsTicker id="2" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"/>
            <NewsTicker id="3" title="Blue passports to be issued to Brits for the first time in decades next month" url=" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed"/>
        </Ticker> */}
      </div>

      <CollegeNavigation/>

      <main>{children}</main>
     </div>
    </>
  )
}

export default CollegeInnerPageLayout