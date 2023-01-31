import React,{useState} from 'react'
import { Input,Select,Option } from '@material-tailwind/react'
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar';
import Navbar from '../../../components/Navbar';
import HeadMeta from '../../HeadMeta';
import { FaPlus, FaTrash } from 'react-icons/fa';
import MobileFloats from '../MobileFloats';
import { useForm } from 'react-hook-form';
import CustomeSelect from '../../../components/CustomeSelect'

const CollegeProfileS2 = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm({mode:"onSubmit"});
  const states = ['Andhra Pradesh','Haryana','Madhya Pradesh','Rajasthan','Tripura','Maharashtra','Manipur','Goa','Uttarakhand','Telangana','Karnatka','Bihar','Tamil Nadu','West Bangal','Mizoram','Kerala','Nagaland','Jharkhand','Delhi','Utter Pradesh','Punjab','Gujarat','Odisha','Sikkim','Arunachal Pradesh','Himachal Pradesh','Chhattisgarh','Meghalaya','Jammu & Kashmir']
  const [affiliation,setAffiliation] = useState('');
  const [clgName,setClgName] = useState('');
  const [clgType,setClgType] = useState('');
  const [approval,setApproval] = useState('');
  const [state,setState] = useState('');
  const [clgCity,setClgCity] = useState('');
  const [clgAgency,setClgAgency] = useState('');
  const onSubmit = data => console.log(data)
  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col lg:ml-3 lg:mr-3 lg:w-4/5 w-full h-fit justify-center items-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      {/* Navigation */}
      <CollegeProfileNavbar/>
   {/* Form */}
   <form onSubmit={handleSubmit(onSubmit)} method='post' className='flex flex-col space-y-10 mb-20 w-full h-full mt-20 items-center'>
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Choose Affiliation</h3>
      <CustomeSelect errors={errors.affiliation} state={affiliation} setState={setAffiliation} placeholder="Select Affiliation Type" options={['College','School','University']}>
      <input style={{'borderColor':errors.affiliation && 'red'}} type="hidden" value={affiliation} {...register('affiliation',{required:true})}/>
      {errors.affiliation && <h3 className='text-sm text-red-500'>Affiliation Required</h3>}
      </CustomeSelect>
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Name</h3>
      <Input style={{'borderColor':errors.clg_name && 'red'}} {...register('clg_name',{required:true})} placeholder='Enter College Name' value={clgName} onChange={e=>setClgName(e.target.value)} name="clgName" type="text" className='lg:h-10 w-full rounded-md  px-5'/>
      {errors.clg_name && <h3 className='text-sm text-red-500'>College Name Required</h3>}
     </div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Mail Id</h3>
      <Input style={{'borderColor':errors.clg_mail && 'red'}} placeholder='Enter Mail Id' {...register('clg_mail',{required:true})} name="clgMail" type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
      {errors.clg_mail && <h3 className='text-sm text-red-500'>Mail Id Required</h3>}
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Type</h3>
      <CustomeSelect errors={errors.college_type} state={clgType} setState={setClgType} placeholder="Select College Type" options={['College','School','University']}>
      <input style={{'borderColor':errors.college_type && 'red'}} type="hidden" value={clgType} {...register('college_type',{required:true})}/>
      {errors.college_type && <h3 className='text-sm text-red-500'>College Type Required</h3>}
      </CustomeSelect>
     </div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Established Date</h3>
      <Input style={{'borderColor':errors.clgDate && 'red'}} placeholder='Enter Established Date' {...register('clgDate',{required:true})} name="clgDate" type="text" className='form-input border-2 border-t3/30 w-full lg:h-12 rounded-md px-5'/>
      {errors.clgDate && <h3 className='text-sm text-red-500'>College Established Date Required</h3>}
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>Choose Approval</h3>
      <CustomeSelect errors={errors.approval} state={approval} setState={setApproval} placeholder="Select Approval Type" options={['College','School','University']}>
      <input style={{'borderColor':errors.approval && 'red'}} type="hidden" value={approval} {...register('approval',{required:true})}/>
      {errors.approval && <h3 className='text-sm text-red-500'>Approval Required</h3>}
      </CustomeSelect>
     </div>
    </div>  
    {/* Form Input Group */}
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
    <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College State</h3>
      <CustomeSelect errors={errors.state} state={state} setState={setState} placeholder="Select College State" options={states}>
      <input style={{'borderColor':errors.state && 'red'}} type="hidden" value={state} {...register('state',{required:true})}/>
      {errors.state && <h3 className='text-sm text-red-500'>College State Required</h3>}
      </CustomeSelect>
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College City</h3>
      <CustomeSelect errors={errors.clgCity} state={clgCity} setState={setClgCity} placeholder="Select College City" options={['Delhi','Mumbai']}>
      <input style={{'borderColor':errors.clgCity && 'red'}} type="hidden" value={clgCity} {...register('city',{required:true})}/>
      {errors.city && <h3 className='text-sm text-red-500'>College City Required</h3>}
      </CustomeSelect>
     </div>
    </div>  

    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='flex lg:flex-row flex-col items-center lg:w-1/2'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Agency</h3>
      <CustomeSelect errors={errors.clgAgency} state={clgAgency} setState={setClgAgency} placeholder="College Agency" options={['agency1','agency2']}>
      <input style={{'borderColor':errors.clgAgency && 'red'}} type="hidden" value={clgAgency} {...register('clgAgency',{required:true})}/>
      {errors.clgAgency && <h3 className='text-sm text-red-500'>College Agency Required</h3>}
      </CustomeSelect>
     </div>
     <div className='flex items-center justify-center lg:mt-10 h-10 w-12 bg-t1/40'>For</div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-white ml-5 font-semibold mb-2'>College City</h3>
      <CustomeSelect errors={errors.clgAgency} state={clgAgency} setState={setClgAgency} placeholder="College Agency" options={['agency1','agency2']}>
      <input style={{'borderColor':errors.clgAgency && 'red'}} type="hidden" value={clgAgency} {...register('clgAgency',{required:true})}/>
      {errors.clgAgency && <h3 className='text-sm text-red-500'>College Agency Required</h3>}
      </CustomeSelect>
     </div>
     </div>
     <div className='flex lg:flex-row flex-col items-center lg:w-1/2'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Agency</h3>
      <CustomeSelect errors={errors.clgAgency} state={clgAgency} setState={setClgAgency} placeholder="College Agency" options={['agency1','agency2']}>
      <input style={{'borderColor':errors.clgAgency && 'red'}} type="hidden" value={clgAgency} {...register('clgAgency',{required:true})}/>
      {errors.clgAgency && <h3 className='text-sm text-red-500'>College Agency Required</h3>}
      </CustomeSelect>
     </div>
     <div className='flex items-center justify-center lg:mt-10 h-10 w-14 bg-t1/40'>For</div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-white ml-5 font-semibold mb-2'>College City</h3>
      <CustomeSelect errors={errors.clgAgency} state={clgAgency} setState={setClgAgency} placeholder="College Agency" options={['agency1','agency2']}>
      <input style={{'borderColor':errors.clgAgency && 'red'}} type="hidden" value={clgAgency} {...register('clgAgency',{required:true})}/>
      {errors.clgAgency && <h3 className='text-sm text-red-500'>College Agency Required</h3>}
      </CustomeSelect>
     </div>
     <div className='flex items-center mt-8 ml-2 space-x-2'><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaPlus className='text-xs'/></div><div className='bg-white border-2 rounded-md border-t3/50 px-2 py-2'><FaTrash className='text-xs'/></div></div>
     </div>
    </div>
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College NAAC Grade</h3>
      <Input style={{'borderColor':errors.naac && 'red'}} {...register('naac',{required:true})} placeholder='Enter College NAAC' name="clgName" type="text" className='lg:h-12 w-full rounded-md border-2 border-t3/30 px-5'/>
      {errors.naac && <h3 className='text-sm text-red-500'>College NAAC Required</h3>}
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='hidden lg:flex text-t1 ml-5 font-semibold mb-2'>College Status</h3>
      <Input style={{'borderColor':errors.status && 'red'}} placeholder='Enter College Status' {...register('status',{required:true})} name="clgName" type="text" className='lg:h-10 w-full rounded-md border-2 border-t3/30 px-5'/>
      {errors.status && <h3 className='text-sm text-red-500'>College Status Required</h3>}
     </div>
    </div>  
    <div className='flex lg:flex-row space-y-10 lg:space-y-0 flex-col w-full lg:space-x-10 items-center'>
     <div className='lg:w-1/2 w-80'>
      <h3 className='text-t1 ml-5 font-semibold mb-2'>Profile Photo</h3>
      <input style={{'borderColor':errors.profile_photo && 'red'}} name="name" type="file" {...register('profile_photo',{required:true})} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/>
      {errors.profile_photo && <h3 className='text-sm text-red-500'>Profile Photo Required</h3>}
     </div>
     <div className='lg:w-1/2 w-80'>
      <h3 className='text-t1 ml-5 font-semibold mb-2'>Cover Photo</h3>
      <input style={{'borderColor':errors.cover_photo && 'red'}} name="name" type="file" {...register('cover_photo',{required:true})} className='file:bg-t1/80 file:border-none file:rounded-l-md file:px-5 file:h-12 file:text-white text-t3 h-12 w-full rounded-md border-2 border-t3/30'/>
      {errors.cover_photo && <h3 className='text-sm text-red-500'>Cover Photo Required</h3>}
     </div>
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