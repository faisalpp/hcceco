import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'

const EditProfile = () => {
  return (
    <>
    <Helmet>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>Edit Profile</title>
    </Helmet>
    <Navbar/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col w-4/5 h-fit justify-center'>
      <h3 className='text-t1 text-3xl text-center'>Edit Profile</h3>
      {/* Profile Image */}
      <div className='flex mt-5 w-full h-fit justify-center'>
       <img src="/public/profile.png" className='w-full h-full rounded-md'/>
      </div>
      {/* Form */}
      <form className='flex flex-col space-y-10 mb-20 w-full h-full mt-10 items-center'>
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Name</h3><input name="name" type="text" placeholder='Enter Name' className='w-full border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Designation</h3><input name="designation" type="text" placeholder='Enter Designation' className='w-full border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Email</h3><input name="email" type="email" placeholder='Noor@gmail.com' className='w-full border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Password</h3><input name="password" type="password" placeholder='01234567' className='w-full border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><input name="mobileNo" type="number" placeholder='+92 039485968' className='w-full border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Area of Expertise</h3><input name="areaOfExpertise" type="text" placeholder='Area of Expertise' className='w-full border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Highest Education</h3><input name="highestEducation" type="text" placeholder='F.Sc' className='w-full border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Accomplishments</h3><input name="accomplishmnts" type="text" placeholder='Accomplishemnts' className='w-full border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><input name="experience" type="text" placeholder='Experience' className='w-full border-2 border-t3/30 px-5' /></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full h-fit space-x-10 items-center'>
        <div className='w-full h-fit'><h3 className='text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><textarea name="summary" type="text" placeholder='Write summary here..' className='w-full border-2 border-t3/30 px-5 h-72' /></div>
       </div> 
       {/* Form Buttons */}
       <div className='flex w-full h-fit justify-center space-x-10 items-center'>
        <button className='bg-t1 px-5 py-3 rounded-md text-white'>Save Cahnges</button>
        <button className='text-t1'>Activate Account</button>
       </div> 
      </form>
     </div>
    </div> 
    </>
  )
}

export default EditProfile