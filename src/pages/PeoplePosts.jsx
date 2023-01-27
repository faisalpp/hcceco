import React from 'react'
import Layout from './Layouts/Layout'
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';

const PeoplePosts = () => {
  const avtar = "https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1";
  const c1 = "https://www.dropbox.com/s/jwilw7rlwh6edaw/kenny-eliason-zFSo6bnZJTw-unsplash.jpg?raw=1";
  const c2 = "https://www.dropbox.com/s/mtuyw3akr5u0vd3/post_carousel.jpg?raw=1";
  const lorem = 'Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto explicabo nemo dolores atque fugit autem sapiente? Corrupti quod consectetur, accusantium unde rem doloribus suscipit maiores, ex commodi porro non?';
  const posts = [
    {'userName':'Argha Paul','subject':'What is Scope of BSC?','msg':lorem,'userType':'student','postType':'post','avtar':avtar,'userImg':[c1,c2],timeNow:'2Hrs'},
    {'userName':'Argha Paul','subject':'New Admission Open!','msg':lorem,userType:'ambassador','postType':'post','avtar':avtar,'timeNow':'2Hrs','repostUser':{'userName':'Faisal','userType':'student','postType':'question','userImg':'https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1','timeNow':'1Hrs'}},
    {'userName':'Monika','subject':'Assitant Required!','msg':lorem,userType:'principle','postType':'post','avtar':avtar,'timeNow':'3Hrs'}
    ];
  return (
    <Layout>
    <div className='flex flex-col space-y-16 mt-5 ml-5 mr-5'>
     <h3 className='text-center text-t1 text-2xl mt-10'>You are viewing posts of Anshita</h3>
     {posts.map((post)=><HomeCard post={post}/>)}
    </div>
    </Layout>
  )
}

export default PeoplePosts