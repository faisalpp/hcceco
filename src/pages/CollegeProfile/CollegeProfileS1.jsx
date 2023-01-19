import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { RiPencilFill } from 'react-icons/ri';
import HeadMeta from '../../HeadMeta';
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar'

const CollegeProfileS1 = () => {

  const [clgWebsite,setClgWebsite] = useState('');
  const [designation,setDesignation] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [mobileNo,setMobileNo] = useState('');

  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col ml-3 mr-3 lg:w-4/5 h-fit justify-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      {/* Navigation */}
      <CollegeProfileNavbar/>
      {/* Profile Image */}
      <div className='relative mt-5 w-full h-32 lg:h-fit justify-center'>
       <img src="https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1" className='w-full h-full rounded-md'/>
       <button className='absolute top-[80px] right-2 lg:top-56 lg:right-5 bg-white rounded-full px-2 py-2'><RiPencilFill className='text-t1 text-xs lg:text-lg'/></button>
       <div className='absolute top-24 left-5 lg:top-56 lg:left-12 border-4 border-whites rounded-full bg-white'>
         <div className='relative w-fit h-fit'>
          <img src='https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1' className='w-14 h-14 lg:w-20 lg:h-20 rounded-full'/>
          <button className='absolute top-8 lg:top-12 left-9 shadow-md lg:left-14 bg-white rounded-full px-2 py-2'><RiPencilFill className='text-t1 text-xs lg:text-sm'/></button>
         </div>
       </div>
      </div>

      {/* Form */}
      <form className='flex flex-col space-y-10 mb-20 w-full h-full mt-20 items-center'>
       {/* Form Input Group */}
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Designation</h3><input placeholder='Designation' value={designation} onChange={e=>setDesignation(e.target.value)} name="designation" type="text" className='form-input border-2 border-t3/30 w-full lg:h-14 rounded-md px-5'/></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Email</h3><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} name="designation" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>  
       {/* Form Input Group */}
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3><input placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} name="password" type="text" className='form-input border-2 border-t3/30 w-full lg:h-14 rounded-md px-5'/></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><input placeholder='012344567' value={mobileNo} onChange={e=>setMobileNo(e.target.value)} name="mobileNo" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div>  
       {/* Form Input Group */}
       <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Website</h3><input placeholder='Enter College Website' value={clgWebsite} onChange={e=>setClgWebsite(e.target.value)} name="collegeWeb" type="text" className='form-input border-2 border-t3/30 w-full lg:h-14 rounded-md px-5'/></div>
       </div>  
       {/* Form Buttons */}
       <div className='flex w-full h-fit justify-center space-x-5 lg:space-x-10 items-center'>
        <button type='submit' className='bg-t1 lg:text-sm text-xs px-5 py-3 rounded-md text-white'>Save Cahnges</button>
        <button className='text-t1 text-sm px-5 rounded-md py-3 lg:text-sm bg-t1/40'>Deactivate Account</button>
       </div> 
      </form>
     </div>
    </div> 
    </>
  )
}

export default CollegeProfileS1