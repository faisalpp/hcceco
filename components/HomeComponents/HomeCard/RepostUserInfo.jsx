import React from 'react'
import {FaUserGraduate,FaUserTie} from 'react-icons/fa'
import {GiGraduateCap,GiLaurelCrown} from 'react-icons/gi'
import {RiTimeFill} from 'react-icons/ri'
import {ImPriceTag} from 'react-icons/im'
import { NavLink } from 'react-router-dom'


const RepostUserInfo = ({userType,postType,userImg,timeNow,userName}) => {
  return (
    <div className='relative lg:space-x-20 items-center'>
    <div className='flex items-center px-5 lg:px-10 py-5'>
     <img src={userImg} className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col space-y-1'>
      <div className='flex items-center space-x-3 lg:space-x-5 ml-3'>
        <NavLink to='/posts/monika'><h3 className='font-bold text-[10px] lg:text-xs'>{userName}</h3></NavLink>
        {postType === 'post' ? <span className='flex text-t1 text-[10px] w-32'>created a post</span>:null}
        {postType === 'hiring' ? <span className='flex text-t1 text-[10px] w-32'>created a hiring post</span>:null}
        {postType === 'question' ? <span className='flex text-t1 text-[10px] w-32'>asked a question</span>:null}
        {postType === 'announcement' ? <span className='flex text-t1 text-[10px] w-32'>has created a announcement</span>:null}
        {postType === 'offered services' ? <span className='flex text-t1 text-[10px] w-32'>has created a announcement</span>:null}
        {postType === 'repost' ? <span className='flex text-t1 text-[10px] w-32'>reposted Monika's post</span>:null}
        <span className='flex text-t2 text-[10px]'><RiTimeFill className='text-xs mr-1' />{timeNow}</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[9px] lg:text-[10px] text-t2'>
      {userType === 'principle' ? <><h3 className='flex'><GiLaurelCrown className='mr-1 text-sm'/> Principle | Lyalpur college of Technology</h3></>:null}
      {userType === 'student' ? <><h3 className='flex'><FaUserGraduate className='mr-1 text-sm'/> Student | Lyalpur college of Technology</h3></>:null}
      {userType === 'college' ? <><h3 className='flex'><GiGraduateCap  className='mr-1'/> College | Chandigar | Punjab</h3></>:null}
      {userType === 'ambassador' ? <><h3 className='flex'><FaUserTie  className='mr-1'/> Campus Ambassador | Lyalpur college of Technology</h3></>:null}
      </div>
     </div>
    </div>
   
   </div>
  )
}

export default RepostUserInfo