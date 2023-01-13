import React from 'react'
import Layout from './Layouts/Layout'
import HomeCard from '../../components/HomeComponents/HomeCard'

const HomeLatestAnnouncements = () => {
  return (
    <Layout>
    <div className='flex flex-col space-y-12 mt-10 mb-3 ml-5 mr-5'>
     <div className='text-center text-2xl text-t1'><h3>You are Viwing latest announcements</h3></div>
     <div className='flex flex-col space-y-3'>
     <HomeCard/>
     <HomeCard/>
    </div> 
    
    </div>
    </Layout>
  )
}

export default HomeLatestAnnouncements