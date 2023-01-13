import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Helmet } from 'react-helmet-async'
import { RiPencilFill } from 'react-icons/ri';

const EditProfile = () => {

  const [name,setName] = useState('');
  const [designation,setDesignation] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [experties,setExperties] = useState('');
  const [education,setEducation] = useState('');
  const [accomp,setAccomp] = useState('');
  const [experience,setExperience] = useState('');
  const [summary,setSummary] = useState('');
  const [img,setImg] = useState('');
  const [banner,setBanner] = useState('');

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
      <div className='relative mt-5 w-full h-fit justify-center'>
       <img src="https://www.dropbox.com/s/knxzop1bk5103py/profile.png?raw=1" className='w-full h-full rounded-md'/>
       <button className='absolute top-56 right-5 bg-white rounded-full px-2 py-2'><RiPencilFill className='text-t1'/></button>
       <div className='absolute top-56 left-12 border-4 border-whites rounded-full bg-white'>
         <div className='relative w-fit h-fit'>
          <img src='https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1' className='w-20 h-20 rounded-full'/>
          <button className='absolute top-12 shadow-md left-14 bg-white rounded-full px-2 py-2'><RiPencilFill className='text-t1'/></button>
         </div>
       </div>
      </div>

      {/* Form */}
      <form className='flex flex-col space-y-10 mb-20 w-full h-full mt-20 items-center'>
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Name</h3><input value={name} onChange={e=>setName(e.target.value)} name="name" type="text" placeholder='Enter Name' className='w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Designation</h3><input value={designation} onChange={e=>setDesignation(e.target.value)} name="designation" type="text" placeholder='Enter Designation' className='w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Email</h3><input value={email} onChange={e=>setEmail(e.target.value)} name="email" type="email" placeholder='Noor@gmail.com' className='w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Password</h3><input value={password} onChange={e=>setPassword(e.target.value)} name="password" type="password" placeholder='01234567' className='w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><input value={phone} onChange={e=>setPhone(e.target.value)} name="mobileNo" type="number" placeholder='+92 039485968' className='w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Area of Expertise</h3><input value={experties} onChange={e=>setExperties(e.target.value)} name="areaOfExpertise" type="text" placeholder='Area of Expertise' className='w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Highest Education</h3><input value={education} onChange={e=>setEducation(e.target.value)} name="highestEducation" type="text" placeholder='F.Sc' className='w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Accomplishments</h3><input value={accomp} onChange={e=>setAccomp(e.target.value)} name="accomplishmnts" type="text" placeholder='Accomplishemnts' className='w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full space-x-10 items-center'>
        <div className='w-1/2'><h3 className='text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><input value={experience} onChange={e=>setExperience(e.target.value)} name="experience" type="text" placeholder='Experience' className='w-full rounded-md border-2 border-t3/30 px-5' /></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full h-fit space-x-10 items-center'>
        <div className='w-full h-fit'><h3 className='text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><textarea value={summary} onChange={e=>setSummary(e.target.value)} name="summary" type="text" placeholder='Write summary here..' className='w-full rounded-md border-2 border-t3/30 px-5 h-72' /></div>
       </div> 
       {/* Form Buttons */}
       <div className='flex w-full h-fit justify-center space-x-10 items-center'>
        <button type='submit' className='bg-t1 px-5 py-3 rounded-md text-white'>Save Cahnges</button>
        <button className='text-t1'>Activate Account</button>
       </div> 
      </form>
     </div>
    </div> 
    </>
  )
}

export default EditProfile