import React,{useState} from 'react'
import { Input,Select,Option } from '@material-tailwind/react'
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar';
import Navbar from '../../../components/Navbar';
import HeadMeta from '../../HeadMeta';
import { FaPlus, FaTrash } from 'react-icons/fa';
const CollegeProfileS2 = () => {
  
  const [affiliation,setAffiliation] = useState('');
  const [clgName,setClgName] = useState('');
  const [clgMail,setClgMail] = useState('');
  const [clgType,setClgType] = useState('');
  const [clgDate,setClgDate] = useState('');
  const [approval,setApproval] = useState('');
  const [state,setState] = useState('');
  const [clgCity,setClgCity] = useState('');
  const [clgAgency,setClgAgency] = useState('');
  const [profilePhoto,setProfilePhoto] = useState('');
  const [coverPhoto,setCoverPhoto] = useState('');

  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col lg:ml-3 lg:mr-3 lg:w-4/5 w-full h-fit justify-center items-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      {/* Navigation */}
      <CollegeProfileNavbar/>
   {/* Form */}
   <form action='/' method='post' className='flex flex-col space-y-10 mb-20 w-full h-full mt-20 items-center'>
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Choose Affiliation</h3>
      <Select label='Colleges' value={affiliation} onChange={e=>setAffiliation(e.target.value)} name="affiliation" type="text" className='w-full lg:h-14 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
     <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Name</h3><Input placeholder='Enter College Name' value={clgName} onChange={e=>setClgName(e.target.value)} name="clgName" type="text" className='lg:h-14 w-full rounded-md  px-5'/></div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Mail Id</h3><Input placeholder='Enter Mail Id' value={clgMail} onChange={e=>setClgMail(e.target.value)} name="clgMail" type="text" className='form-input border-2 border-t3/30 w-full lg:h-14 rounded-md px-5'/></div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Type</h3>
      <Select label='Affiliation' value={clgType} onChange={e=>setClgType(e.target.value)} name="affiliation" type="text" className=' w-full lg:h-14 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Established Date</h3><Input placeholder='Enter Established Date' value={clgDate} onChange={e=>setClgDate(e.target.value)} name="clgDate" type="text" className='form-input border-2 border-t3/30 w-full lg:h-14 rounded-md px-5'/></div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Choose Approval</h3>
      <Select label='Approval' value={approval} onChange={e=>setApproval(e.target.value)} name="affiliation" type="text" className=' w-full lg:h-14 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
    <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College State</h3>
      <Select label='Choose State' value={state} onChange={e=>setState(e.target.value)} name="affiliation" type="text" className='w-full lg:h-14 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College City</h3>
      <Select label='College City' value={clgCity} onChange={e=>setClgCity(e.target.value)} name="affiliation" type="text" className=' w-full lg:h-14 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
    </div>  

    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='flex lg:flex-row flex-col items-center lg:w-1/2'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College City</h3>
      <Select label='Agency' value={clgAgency} onChange={e=>setClgAgency(e.target.value)} name="affiliation" type="text" className=' w-full h-12 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
     <div className='flex items-center justify-center lg:mt-10 h-12 w-12 bg-t1/40'>For</div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-white ml-5 font-semibold mb-2'>College City</h3>
      <Select label='Agency' value={clgCity} onChange={e=>setClgCity(e.target.value)} name="affiliation" type="text" className=' w-full h-12 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
     </div>
     <div className='flex lg:flex-row flex-col items-center lg:w-1/2'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College City</h3>
      <Select label='Agency' name="affiliation" type="text" className=' w-full h-12 rounded-md px-5'>
      <Option>College</Option>
      </Select>
     </div>
     <div className='flex items-center justify-center lg:mt-10 h-12 w-14 bg-t1/40'>For</div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-white ml-5 font-semibold mb-2'>College City</h3>
      <Select label='Agency' value={clgCity} onChange={e=>setClgCity(e.target.value)} name="affiliation" type="text" className=' w-full h-12 rounded-md px-5'>
      <Option>Colleges</Option>
      </Select>
     </div>
     <div className='flex items-center mt-8 ml-2 space-x-5'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xl'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xl'/></div></div>
     </div>
    </div>
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College NAAC Grade</h3><Input placeholder='Enter College NAAC' value={clgName} onChange={e=>setClgName(e.target.value)} name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
     <div className='lg:w-1/2 w-80'><h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Status</h3><Input placeholder='Enter College Status' value={clgName} onChange={e=>setClgName(e.target.value)} name="clgName" type="text" className='lg:h-14 w-full rounded-md border-2 border-t3/30 px-5'/></div>
    </div>  
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Profile Photo</h3><input name="name" type="file" value={profilePhoto} onChange={e=>setProfilePhoto(e.target.value)} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/></div>
     <div className='lg:w-1/2 w-80'><h3 className='text-t1 ml-5 font-semibold mb-2'>Cover Photo</h3><input name="name" type="file" value={coverPhoto} onChange={e=>setCoverPhoto(e.target.value)} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/></div>
    </div>
    {/* Form Buttons */}
    <div className='flex w-full h-fit justify-center space-x-5 lg:space-x-10 items-center'>
     <button type='submit' className='bg-t1 lg:text-sm text-xs px-10 mt-5 py-3 rounded-md text-white'>Update</button>
    
    </div> 
   </form>
   </div>
   </div>
    </>
  )
}

export default CollegeProfileS2