import React,{useState} from 'react';
import CommentBox from '../../components/HomeComponents/CommentBox';
import HomeCard from '../../components/HomeComponents/HomeCard/HomeCard';
import PostEvent from '../../components/HomeComponents/PostEvent';
import SuggestedLinks from '../../components/HomeComponents/SuggestedLinks';
import SearchBar from '../../components/SearchBar';
import Layout from './Layouts/Layout';
import MobileFloats from './MobileFloats';

const Home = () => {
  const avtar = "https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1";
  const c1 = "https://www.dropbox.com/s/jwilw7rlwh6edaw/kenny-eliason-zFSo6bnZJTw-unsplash.jpg?raw=1";
  const c2 = "https://www.dropbox.com/s/mtuyw3akr5u0vd3/post_carousel.jpg?raw=1";
  const lorem = 'Det er et velkjent faktum at lesere distraheres av lesbart innhold på en side når man ser på dens layout. Poenget med å bruke. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto explicabo nemo dolores atque fugit autem sapiente? Corrupti quod consectetur, accusantium unde rem doloribus suscipit maiores, ex commodi porro non?';
  const [posts,setPosts] = useState([{'userName':'Argha Paul','subject':'What is Scope of BSC?','msg':lorem,'userType':'student','postType':'post','avtar':avtar,'userImg':[c1,c2],timeNow:'2Hrs'},
  {'userName':'Argha Paul','subject':'New Admission Open!','msg':lorem,userType:'ambassador','postType':'repost','avtar':avtar,'timeNow':'2Hrs','repostUser':{'userName':'Faisal','userType':'student','postType':'question','userImg':'https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1','timeNow':'1Hrs'}},
  {'userName':'Monika','subject':'Assitant Required!','msg':lorem,userType:'principle','postType':'hiring','avtar':avtar,'timeNow':'3Hrs'}
  ]);

  const [events,setEvents] = useState([{'eventNum':'1','img':avtar,'name':'faisal'},{'eventNum':'2','img':avtar,'name':'monika'},{'eventNum':'3','img':avtar,'name':'Argha Paul'},,{'eventNum':'4','img':avtar,'name':'Argha Paul'}])

  return (
    <Layout>
    <MobileFloats/>
    <div className='flex flex-col space-y-5 ml-5 mr-5'>
    <SearchBar/>
    <PostEvent events={events}/>
    <CommentBox/>
    </div>
    <SuggestedLinks/>
    {posts ? <div className='flex flex-col'>
    {posts.map((post,index)=><HomeCard key={index} width={true} post={post}/>)}
    </div>:<div className='flex border-t-2 py-10 w-full justify-center text-xs text-t3'><h3>No posts to show. Create links to start showing posts</h3></div>}
    
    </Layout>
  )
}

export default Home