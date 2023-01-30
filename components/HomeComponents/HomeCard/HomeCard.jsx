import React,{useState} from 'react'
import { RiChat3Line,RiSendPlane2Line, RiTimeFill } from 'react-icons/ri'
import {TbSend} from 'react-icons/tb'
import {MdOutlineWavingHand} from 'react-icons/md'
import HomeCardReplay from '../HomeCardReplay'
import UserInfo from './UserInfo'
import RepostUserInfo from './RepostUserInfo'
import CardCarousel from './CardCarousel'

const HomeCard = ({post,width}) => {
  
  const [readMore,setReadMore] = useState(false);
  const [replay,setReplay] = useState(false);
  const [clapMenu,setClapMenu] = useState(false)
  const [comment,setComment] = useState('');

  return (
  <div  className='flex flex-col ml-2 mr-2 lg:ml-10 lg:mr-10 lg:border-2 lg:shadow-none shadow-2xl lg:border-t2/20 rounded-md mb-10'>
   {/* Available Titles : post, */}
   <UserInfo userName={post.userName} userImg={post.avtar} userType={post.userType} postType={post.postType} timeNow={post.timeNow}/>      
   {/* Repost User Details */}
   {post.postType === 'repost' ? <RepostUserInfo userName={post.repostUser.userName} userImg={post.repostUser.userImg} userType={post.repostUser.userType} postType={post.repostUser.postType} timeNow={post.repostUser.timeNow}/>:null}      
  

   <div className='lg:bg-b3/20 ml-2 lg:ml-10 lg:mr-10 lg:border-t-0 lg:border-b-0 border-t-2 border-b-2 border-t3/10 mr-2 text-xs lg:text-xs font-medium lg:rounded-sm px-5 py-3'><h3>{post.subject}</h3></div>
   <div className='ml-2 lg:ml-10 mr-3 lg:mr-10 px-5 py-3'><p className={`${readMore?'w-full':'w-full h-8 overflow-hidden'} text-[11px] w-full`}>{post.msg}</p>{readMore ?<span onClick={()=>setReadMore(false)} className='text-green-500 text-[10px] hover:underline cursor-pointer'>Read More</span> :<span onClick={()=>setReadMore(true)} className='text-green-500 text-[10px] hover:underline cursor-pointer'>Read More</span>}</div>
   {width ?<div className='flex flex-col w-full'><CardCarousel images={post.userImg}/></div>:
   <div className='flex flex-col items-center w-full'><div className='w-8/12'><CardCarousel images={post.userImg}/></div></div>} 

   {/* CARD STATES ICONS */}
   <div className='flex items-center space-x-40 ml-3 lg:ml-10 border-t-2 border-b-2 border-t2/20 lg:mb-10 mb-3 mr-3 lg:mr-10 py-3'>
    <div className='flex text-[16px] lg:text-lg space-x-10 px-5'>
       <div className='relative'>
       <div className='flex items-center cursor-pointer'>
        {/* Clap Icon */}
        {clapMenu ? <div className='flex' onClick={()=>setClapMenu(false)}><MdOutlineWavingHand className='hover:text-t1'/><span className='text-sm hover:underline'>125</span></div>:<div className='flex' onClick={()=>setClapMenu(true)}><MdOutlineWavingHand className='hover:text-t1'/><span className='text-sm hover:underline'>125</span></div>}
        {/* Clap Drop Down */}
        <div className={` ${clapMenu ?'absolute':'hidden'} top-8 bg-white w-36 shadow-xl`}>
         <div className="flex flex-col px-2 mt-2 mb-2 text-xs space-y-3 w-full">
          <h3>Noor Fatima</h3>
          <h3>Monika</h3>
          <h3>Argha Paul</h3>
          <h3>Zubair</h3>
          <h3 className='truncate'>Ag College of Tehnology</h3>
          <a className='text-[10px] hover:underline text-green-500'>View More</a> 
          </div>
        </div>
      </div>
     </div>  

      
      <div className='flex items-center cursor-pointer'><RiChat3Line className='hover:text-t1'/><span className='text-sm'>125</span></div>
      <div className='flex items-center lg:p-0 px-7 cursor-pointer'><TbSend className='hover:text-t1'/><span className='text-sm'>125</span></div>
    </div>
    <div className='hidden lg:flex justify-end text-[11px] w-full'>{replay ? <span onClick={()=>setReplay(false)} className='hover:underline cursor-pointer text-t3'>View Opinions</span>:<span onClick={()=>setReplay(true)} className='hover:underline cursor-pointer text-t3'>View Opinions</span>}</div>
   </div>
   
   <div className='flex justify-center'>
   {/* All Replys Wrapper  Hidden to be Flex*/}
   <div className={` ${replay ?'flex':'hidden'} flex-col h-52 scrollbar-thin scrollbar-thumb-t1 overflow-scroll overflow-x-hidden mb-5 w-11/12 bg-t3/5`}>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
    <HomeCardReplay/>
   </div>
   </div>
   
   <div className='flex lg:hidden mb-2 text-xs w-fit text-b4 ml-5'><a className='hover:underline cursor-pointer'>View All Opinions &#40;155&#41;</a></div>
   <div className='flex items-center w-full lg:px-5'>
    <div className='flex lg:space-x-5 items-center ml-2  mr-2 lg:py-2 px-2 py-2 rounded-md mb-10 bg-t3/5 lg:w-full'>
     <img src={post.avtar} className='w-12 h-10 rounded-full ml-2'/>
    <form onSubmit={(event)=>{alert(comment);event.preventDefault()}} className='flex w-full items-center '>
     <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" placeholder="Write an opinion.." className='bg-b4/5 text-xs lg:w-10/12 w-full outline-none focus:ring-0 border-none text-t2'/>
     <button type='submit'><RiSendPlane2Line className='text-xl cursor-pointer'/></button>
    </form> 
    
    </div>
   </div>
  
  </div>
  )
}

export default HomeCard