import React from 'react'
import Layout from './Layouts/Layout'
import HomeCard from '../../components/HomeComponents/HomeCard'
import SearchBar from '../../components/SearchBar';
import PostEvent from '../../components/HomeComponents/PostEvent';
import CommentBox from '../../components/HomeComponents/CommentBox';
import MobileFloats from './MobileFloats';


const HomeLatestAnnouncements = () => {
  return (
    <Layout>
    <MobileFloats/>
    <div className='flex flex-col lg:space-y-12 mt-3 lg:mt-10 mb-3 lg:ml-5 lg:mr-5'>
     <div className='hidden lg:block text-center text-2xl text-t1'><h3>You are Viwing latest announcements</h3></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <SearchBar/></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <PostEvent/></div>
     <div className='lg:hidden flex justify-center items-center w-full lg:mb-0 mb-5'> <CommentBox/></div>
     <div className='flex flex-col space-y-3'>
      <HomeCard />
     </div> 
    
    </div>
    </Layout>
  )
}

export default HomeLatestAnnouncements