import React,{useState} from 'react'
import { RxDotsVertical } from 'react-icons/rx'
import {FaUserGraduate,FaUserTie} from 'react-icons/fa'
import {GiGraduateCap,GiLaurelCrown} from 'react-icons/gi'
import {RiTimeFill} from 'react-icons/ri'
import {ImPriceTag} from 'react-icons/im'
import { NavLink } from 'react-router-dom'

const UserInfo = ({userType,postType,userImg,timeNow,userName}) => {
  const [cardMenu, setCardMenu] = useState(false);
  const [fullName,setFullName] = useState(false);
  const [othersMenu,setOthersMenu] = useState(false);
  return (
    <div className='relative lg:space-x-20 items-center'>
    <div className='flex items-center px-5 lg:px-10 py-5'>
     <img src={userImg} className='w-10 h-10 rounded-full'/>
     <div className='flex flex-col space-y-1'>
      <div className='flex items-center space-x-3 lg:space-x-2 ml-3'>
       <div className='relative'><NavLink to="/posts/monika"><h3 onMouseOver={()=>setFullName(true)} onMouseLeave={()=>setFullName(false)} className=' hover:text-blue-200 font-semibold text-[10px] lg:text-xs hover:underline'>{userName}</h3></NavLink>
       <div className={`${fullName?'absolute':'hidden'} -top-5 bg-white shadow-md w-max text-xs`}><h3>{userName}</h3></div>
       </div>
        {postType === 'post' ? <span className='flex text-t1 text-[10px] lg:w-32'>created a post</span>:null}
        {postType === 'hiring' ? <span className='flex text-t1 text-[10px] lg:w-32'>created a hiring post</span>:null}
        {postType === 'question' ? <span className='flex text-t1 text-[10px] lg:w-32'>asked a question</span>:null}
        {postType === 'announcement' ? <span className='flex text-t1 text-[10px] lg:w-42'>has created a announcement</span>:null}
        {postType === 'offered services' ? <span className='flex text-t1 text-[10px] lg:w-32'>has created a announcement</span>:null}
        {postType === 'repost' ? <span className='flex text-t1 text-[10px] lg:w-32'>reposted Monika's post</span>:null}
        <span className='flex text-t2 text-[10px]'><RiTimeFill className='text-xs mr-1' />{timeNow}</span>
      </div>
      <div className='flex items-center space-x-5 ml-3 text-[9px] lg:text-[10px] text-t2'>
      {userType === 'principle' ? <><h3 className='flex'><GiLaurelCrown className='mr-1 text-sm'/>Principle | Lyalpur college of Technology</h3></>:null}
      {userType === 'student' ? <><h3 className='flex'><FaUserGraduate className='mr-1 text-sm'/> Student | Lyalpur college of Technology</h3></>:null}
      {userType === 'college' ? <><h3 className='flex'><GiGraduateCap  className='mr-1'/> College | Chandigar | Punjab</h3></>:null}
      {userType === 'ambassador' ? <><h3 className='flex'><FaUserTie  className='mr-1'/> Campus Ambassador | Lyalpur college of Technology</h3></>:null}
      <div className="hidden lg:flex items-center space-x-1">
        <div className='relative'>
         <div className='flex items-center'><ImPriceTag className='text-xs mr-1'/><h3 onMouseOver={()=>setOthersMenu(true)} className='hover:underline cursor-pointer'> {userName} & <span>4</span> Others</h3></div>
        <div onMouseLeave={()=>setOthersMenu(false)} className={`${othersMenu?'absolute':'hidden'}`}>
        <div className='flex flex-col bg-white shadow-xl px-2 py-2'>
         <h3 className='truncate overflow-clip text-black text-xs w-32'>Noor</h3>
         <h3 className='truncate overflow-clip text-black text-xs w-32'>Fatima</h3>
         <h3 className='truncate overflow-clip text-black text-xs w-32'>Argha Paul</h3>
         <h3 className='truncate overflow-clip text-black text-xs w-32'>Monika monika</h3>
         <h3 className='truncate overflow-clip text-black text-xs w-32'>AG College of Technology</h3>
        </div>
        </div>
        </div>
      
      </div>
      </div>
     </div>
    </div>
     <div className='absolute lg:right-10 top-8 right-5'>
     <RxDotsVertical onClick={()=>setCardMenu(true)} className='hover:text-t1 text-xl cursor-pointer'/>
     <div onMouseLeave={()=>setCardMenu(false)} className={`${cardMenu ?'absolute' :'hidden'} lg:right-0 right-0 w-fit h-fit shadow-xl bg-white px-5 py-3`}><div className='flex flex-col space-y-1 mt-2'><a className='cursor-pointer hover:underline text-xs'>Delete</a><a className='cursor-pointer hover:underline text-xs'>Report</a></div></div> 
     </div>  
   
   </div>
  )
}

export default UserInfo