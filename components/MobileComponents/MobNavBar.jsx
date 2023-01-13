import React, { useContext } from 'react'
import {RiMenuFill,RiChatSmile2Line,RiSearch2Line,RiCloseFill} from 'react-icons/ri'
import {VscBell} from 'react-icons/vsc';
import { AppContext } from '../../context/GlobalContext';

const MobNavBar = () => {
  const state = useContext(AppContext)
  return (
    // Mobile NavBar Body
    <div className='lg:hidden flex bg-b3/10 shadow-md py-5'>
      {/* Navbar Items Position */}
      <div className='grid grid-cols-14 items-center w-full'>
       {/* Navbar User Image Round */}
       <div className='col-start-2'><img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='rounded-full w-10 h-10'/></div>
       {/* Search Bar */}
       <div style={{'borderWidth':'1px'}} className='col-start-6 col-end-6 flex items-center rounded-md border-t2 bg-b3/10 w-44 h-7'><input type="search" placeholder='Search' className='border-none w-full h-fit ring-0 bg-b3/10'/><RiSearch2Line className='mr-2'/></div>
             
       {/* Notifications and Chat Icons with states */}
       <div className='col-start-9 col-end-11 flex space-x-2 text-2xl'><VscBell/><RiChatSmile2Line/></div>
       
       {/* Menu Button */}
       <div className='col-start-12 flex text-2xl'>
        {state.userMobMenu ? <button onClick={()=>state.setUserMobMenu(false)}><RiCloseFill/></button>: <button onClick={()=>state.setUserMobMenu(true)}><RiMenuFill/></button>}
       </div>
      
      </div>
     </div> 
  )
}

export default MobNavBar