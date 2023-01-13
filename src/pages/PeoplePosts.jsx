import React from 'react'
import Layout from './Layouts/Layout'
import HomeCard from '../../components/HomeComponents/HomeCard';

const PeoplePosts = () => {
  return (
    <Layout>
    <div className='flex flex-col space-y-16 mt-5 ml-5 mr-5'>
     <h3 className='text-center text-t1 text-2xl mt-10'>You are viewing posts of Anshita</h3>
     <HomeCard/>
    </div>
    </Layout>
  )
}

export default PeoplePosts