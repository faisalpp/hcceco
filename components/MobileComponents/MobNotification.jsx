import React, { useContext } from 'react'
import { AppContext } from '../../context/GlobalContext'
import MobNotificationCard from './MobNotificationCard'

const MobNotification = () => {
  const state = useContext(AppContext);
  return (
    <>
    <div style={{'height':'calc(100vh - 110px)'}} className={` ${state.mobNtf ?'absolute':'hidden'} flex-col bg-white w-full z-20`}>
     <div className='flex justify-center mt-5'> <h3 className='text-t1'>Notifications</h3></div>
    
    {/* Notification Wrapper */}
    <div className='flex flex-col space-y-10 mt-5'>
     
     {/* One day Notification  */}
     <div className='flex flex-col space-y-5 ml-10 justify-center'>
      <h3 className='text-sm text-t3'>Today</h3>   
      <div className='flex flex-col'>
       <MobNotificationCard name="Argha Paul" time="09:30 am"/>
      </div> 
      <div className='flex flex-col'>   
       <MobNotificationCard name="Argha Paul" time="09:30 am"/>
      </div> 
     </div>

     {/* One day Notification  */}
     <div className='flex flex-col space-y-5 ml-10 justify-center'>
      <h3 className='text-sm text-t3'>Yesterday</h3>   
      <div className='flex flex-col'>
       <MobNotificationCard name="Argha Paul" time="09:30 am"/>
      </div> 
      <div className='flex flex-col'>   
       <MobNotificationCard name="Argha Paul" time="09:30 am"/>
      </div> 
     </div>

    </div>

    </div>
    </>
  )
}

export default MobNotification