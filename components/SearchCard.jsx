import React,{useState} from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';

const SearchCard = ({coverPhoto,avtar,name,designation,city,state,totalLinks,postLink}) => {

  const [cardMenu, setCardMenu] = useState(false);
  const [cardInfo,setCardInfo] =useState(false);

  return (
    <div className='flex flex-col shadow-xl w-[275px] h-[214] mb-5'>
      <div className='relative'>
       <button onClick={()=>setCardMenu(true)} className='absolute left-60 text-red-500 py-2'><HiDotsVertical className="text-white text-2xl"/></button>
       {/* Block Menu */}
       <div onMouseLeave={()=>setCardMenu(false)} className={`${cardMenu?'absolute':'hidden'} bg-white text-[10px] w-16 h-12 right-0 top-8 rounded-md space-y-1 py-1`}>
        <h3 className='text-center hover:underline hover:text-t1 cursor-pointer'>Block</h3>
        <h3 className='text-center hover:underline hover:text-t1 cursor-pointer'>Unfollow</h3>
       </div>
       <img onClick={()=>setCardInfo(true)} src={coverPhoto} className='cursor-pointer w-full h-28 rounded-t-md'/>
      </div>
      
      {/* Avtar */}
     <div className='flex items-center px-7 space-x-3 w-full'>
      <div className='relative w-24 h-16 rounded-full bottom-10'><img src={avtar} className='absolute w-20 h-16 rounded-full'/></div>
      <div className='flex flex-col py-5 w-full'>
       <h3 className='text-sm font-bold w-[130px] truncate'>{name}</h3>
       <h3 className='text-[10px] text-t3/60'>{designation} | {city},{state}</h3>
       <h3 className='text-[10px]'><span className='text-green-500'>Total Links</span> {totalLinks}</h3>
      </div>
     </div>
     {/* Action Buttons */}
     <div className='flex justify-center mt-2 space-x-3 text-xs w-full mb-5'>
       <button className='bg-t1/20 px-4 py-2 rounded-md hover:bg-t1 hover:text-white'>Linked</button>
       <button className='px-3 border-2 border-t3/30 hover:bg-t1 hover:text-white rounded-md'>Message</button>
       <NavLink to={postLink}><h3 className='px-5 py-2 hover:bg-t1 hover:text-white border-2 border-t3/30 rounded-md'>Posts</h3></NavLink>
     </div>

     {/* Individual Card Menu */}
     <div onMouseLeave={()=>setCardInfo(false)} className={`${cardInfo ? 'absolute' : 'hidden'} bg-white px-5 py-3 space-y-3 w-[275px] h-[263px] text-[10px] overflow-scroll touch-pan-y scrollbar-thin scrollbar-thumb-t1 scrollbar-track-white overflow-x-hidden `}>
       {/*Basic Info  */}
       <div className='flex flex-col space-y-2'>
        <div className='flex items-center space-x-2'><img src="https://www.dropbox.com/s/f0qmcp0qt187z8w/basicInfo.svg?raw=1"/><h3 className='text-t1'>Basic Info</h3></div>
        <p className='text-t3'>Hello everyone. My name is Ashita. I am a student of B.Tech CSE...<span className='text-green-500'>Read More</span></p>
       </div>
       {/* Highest Education */}
       <div className='flex flex-col space-y-2'>
        <div className='flex items-center space-x-2'><img src="https://www.dropbox.com/s/6gfpcqc2hm6nixn/Education.svg?raw=1"/><h3 className='text-t1'>Highest Education</h3></div>
        <p className='text-t3'>B.TECH Computer Science and Engineering</p>
       </div>
       {/* Total Experience */}
       <div className='flex flex-col space-y-2'>
        <div className='flex items-center space-x-2'><img src="https://www.dropbox.com/s/cuykajlc3m5rqgj/experience.svg?raw=1"/><h3 className='text-t1'>Total Experience</h3></div>
        <p className='text-t3'>My total experience is 5 years</p>
       </div>
       {/* Area of Experties */}
       <div className='flex flex-col space-y-2'>
        <div className='flex items-center space-x-2'><img src="https://www.dropbox.com/s/x23fgj7thm5mrie/Experties.svg?raw=1"/><h3 className='text-t1'>Area of Experties</h3></div>
        <p className='text-t3'>I have experience in UI/UX</p>
        <p className='text-t3'>I have experience in UI/UX</p>
       </div>
       {/* Accomplishment */}
       <div className='flex flex-col space-y-2'>
        <div className='flex items-center space-x-2'><img src="https://www.dropbox.com/s/ipyyuutybtqus2y/Accomp2.svg?raw=1"/><h3 className='text-t1'>Accomplishment</h3></div>
        <p className='text-t3'>Monitor in class 6</p>
        <p className='text-t3'>House Captain</p>
       </div>
     </div>
    </div>
  )
}

export default SearchCard