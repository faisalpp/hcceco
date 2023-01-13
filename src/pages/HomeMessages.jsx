import React from 'react'
import Layout from './Layouts/Layout'
import SearchBar from '../../components/SearchBar'
import PostEvent from '../../components/HomeComponents/PostEvent'
import MessageBox from '../../components/HomeComponents/MessageBox'
import SuggestedLinks from '../../components/HomeComponents/SuggestedLinks'

const HomeMessages = () => {
  return (
    <Layout>
    <div className='flex flex-col space-y-16 mt-5 ml-5 mr-5'>
     <SearchBar/>
     <PostEvent/>
     <MessageBox/>
     <SuggestedLinks/>
    </div>
    </Layout>
  )
}

export default HomeMessages