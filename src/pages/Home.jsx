import React from 'react';
import CommentBox from '../../components/HomeComponents/CommentBox';
import HomeCard from '../../components/HomeComponents/HomeCard';
import PostEvent from '../../components/HomeComponents/PostEvent';
import SuggestedLinks from '../../components/HomeComponents/SuggestedLinks';
import NotificationMenu from '../../components/NotificationMenu';
import SearchBar from '../../components/SearchBar';
import Layout from './Layouts/Layout';
import {useTitle} from '../../customeHooks/useTitle'

const Home = () => {
  useTitle("Home")
  return (
    <Layout>
    <div className='flex flex-col space-y-5 ml-5 mr-5'>
    <SearchBar/>
    <PostEvent/>
    <CommentBox/>
    </div>
    <SuggestedLinks/>
    <HomeCard/>
    <HomeCard/>
    </Layout>
  )
}

export default Home