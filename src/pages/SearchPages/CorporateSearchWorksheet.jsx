import React from 'react'
import SearchSideBar from '../../../components/SearchSideBar'
import Navbar from '../../../components/Navbar'
import SearchNavigation from '../../../components/MobileComponents/SearchNavigation'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PdfCard from '../../../components/CorporateComponents/PdfCard'

const CorporateSearchWorksheet = () => {
  const title = useLocation()
  return (
    <>
     <Navbar/>
     <div className='lg:grid lg:grid-cols-12 flex flex-col w-full h-auto'>
      <div className='col-start-1 col-end-4 hidden lg:flex justify-center'>
        <SearchSideBar/>
      </div>
      
      <div className='col-start-4 col-end-13 bg-white w-full h-full'>
       <div className='lg:flex hidden justify-center w-full mt-10 text-3xl text-t1'><h3>Mock Tests</h3></div>
       <SearchNavigation/>
        {/* Inner Profiles Navigation */}
        <div className='flex space-x-5 lg:border-b-2 lg:border-t3/10 lg:w-fit w-80 lg:overflow-auto overflow-scroll lg:ml-20 ml-5 py-1 mt-10'>
         <NavLink to="/search/corporate/short-tricks"><h3 className={`${title.pathname === "/search/corporate/short-tricks" ? 'lg:bg-white bg-t1 lg:px-0 text-center w-32 lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 w-32 text-center py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >Short Tricks</h3></NavLink>
         <NavLink to="/search/corporate/worksheets"><h3 className={`${title.pathname === "/search/corporate/worksheets" ? 'lg:bg-white bg-t1 lg:px-0 w-32 text-center lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 w-32 text-center py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >Work Sheets</h3></NavLink>
         <NavLink to="/search/corporate/mocktests"><h3 className={`${title.pathname === "/search/corporate/mocktests" ? 'lg:bg-white bg-t1 lg:px-0 w-32 text-center lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 w-32 text-center py-2'}  lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >Mock Tests</h3></NavLink>
         <NavLink to="/search/corporate/hcceco-library"><h3 className={`${title.pathname === "/search/corporate/hcceco-library" ? 'lg:bg-white bg-t1 lg:px-0 w-52 text-center lg:py-0 py-2 lg:text-black text-white lg:border-b-4 border-t1':'text-t3 border-2 border-t1 lg:px-0 lg:py-0 w-52 text-center py-2'} lg:border-0 border-2 lg:rounded-none rounded-full border-t1 cursor-pointer`} >HCCECO Library</h3></NavLink>
        </div>

       <div className='flex flex-col items-center space-y-5 lg:ml-10 mt-10 lg:mt-10'>
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
        <PdfCard topic="Reasoning Work Sheet" views="10k" likes="5k" downloadUrl="/" downloads="1k"  likeUrl="/" />
       </div>

      </div>
     </div>
    </>
  )
}

export default CorporateSearchWorksheet