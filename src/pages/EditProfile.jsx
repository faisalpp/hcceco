import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { RiPencilFill } from 'react-icons/ri';
import HeadMeta from '../HeadMeta';
import { Input, Textarea } from '@material-tailwind/react';

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
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col ml-3 mr-3 lg:w-4/5 h-fit justify-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
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
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Name</h3><Input label='Name' value={name} onChange={e=>setName(e.target.value)} name="name" type="text" className='w-full lg:h-14 rounded-md px-5' /></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Designation</h3><Input label='Designation' value={designation} onChange={e=>setDesignation(e.target.value)} name="designation" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex lg:flex-row flex-col space-y-10 lg:space-y-0 w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Email</h3><Input label='Email' value={email} onChange={e=>setEmail(e.target.value)} name="email" type="email" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Password</h3><Input label='Password' value={password} onChange={e=>setPassword(e.target.value)} name="password" type="password" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex lg:flex-row flex-col space-y-10 lg:space-y-0 w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Mobile Number</h3><Input label='Mobile No' value={phone} onChange={e=>setPhone(e.target.value)} name="mobileNo" type="number" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Area of Expertise</h3><Input label='Area of Experties' value={experties} onChange={e=>setExperties(e.target.value)} name="areaOfExpertise" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex lg:flex-row flex-col space-y-10 lg:space-y-0 w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Highest Education</h3><Input label='Education' value={education} onChange={e=>setEducation(e.target.value)} name="highestEducation" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Accomplishments</h3><Input label='Accomplishment' value={accomp} onChange={e=>setAccomp(e.target.value)} name="accomplishmnts" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex lg:flex-row flex-col w-full lg:space-x-10 items-center'>
        <div className='lg:w-1/2'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><Input label='Experience' value={experience} onChange={e=>setExperience(e.target.value)} name="experience" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5' /></div>
       </div> 
       {/* Form Input Group */}
       <div className='flex w-full h-fit space-x-10 items-center'>
        <div className='w-full h-fit'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Total Experience</h3><Textarea label='Summary' value={summary} onChange={e=>setSummary(e.target.value)} name="summary" type="text" className='w-full rounded-md border-2 border-t3/30 px-5 h-32 lg:h-72' /></div>
       </div> 
       {/* Form Buttons */}
       <div className='flex w-full h-fit justify-center space-x-5 lg:space-x-10 items-center'>
        <button type='submit' className='bg-t1 lg:text-sm text-xs px-5 py-3 rounded-md text-white'>Save Cahnges</button>
        <button className='text-t1 text-xs lg:text-sm'>Activate Account</button>
       </div> 
      </form>
     </div>
    </div> 
    </>
  )
}

export default EditProfile