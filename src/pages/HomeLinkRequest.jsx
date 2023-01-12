import React from 'react'
import HomeCard from '../../components/HomeComponents/HomeCard'
import MessageBox from '../../components/HomeComponents/MessageBox'
import Layout from '../Layout'
import SearchBar from '../../components/SearchBar';
import SuggestedLinks from '../../components/HomeComponents/SuggestedLinks';

const HomeLinkRequest = () => {
  return (
    <Layout>
    <div className='flex flex-col space-y-12 mt-10 mb-3 ml-5 mr-5'>
     <SearchBar/>
     <MessageBox/>
     <SuggestedLinks/>
     <div className='flex flex-col space-y-3'>
     <HomeCard/>
     <HomeCard/>
    </div> 
    
    </div>
    </Layout>
  )
}

export default HomeLinkRequest