import React, { useContext, useState } from 'react'
import Desclaimer from '../../components/Desclaimer'
import { AppContext } from '../../context/GlobalContext'
import HeadMeta from '../HeadMeta'
import { Input } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'
import CustomeSelect from '../../components/CustomeSelect'

const Login = () => {
  const {register,handleSubmit,watch,formState:{errors}} = useForm({mode:'onSubmit'});
  const userTypes = ['Student','College','College Ambassador','School or College Authority','Others']
  const onSubmit = data => console.log(data);
  const state = useContext(AppContext);
  const [loginType,setLoginType] = useState('');
  return (
    <>
    <HeadMeta/>
    <Desclaimer/>
     <div id="wrapper" className="hidden lg:grid grid-cols-12 w-full h-full">
      <div className='col-start-1 col-end-8 bg-white flex h-screen'> 
       <div className='flex flex-col space-y-5 w-full mt-20 items-center'>
        <h3 className='text-6xl'>LOGO</h3>
        <h3>Sign in to your account</h3>
          <img src="https://www.dropbox.com/s/frgr0uyp457kctp/Group.png?raw=1"/>
       </div>  
      </div>
      
      <div className='col-start-8 col-span-5 flex items-center bg-t1 w-full'> 

      <div className='absolute right-80'>
       <form id="loginForm" onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-10 bg-white w-[474px] h-auto mb-5 shadow-lg px-10 py-20'>
        <div className='flex flex-col'>
        <Input style={{'borderColor':errors.email && 'red'}} name="email" {...register('email',{required:true})} type="text" label='Enter Email' className='w-full h-fit outline-none border-2 focus:ring-0 border-b3 px-5 py-3 rounded-md'/> 
        {errors.email && <h3 className='text-sm text-red-500'>Email Required</h3>}
        </div>
        <div className='flex flex-col'>
        <Input style={{'borderColor':errors.password && 'red'}} name="password" {...register('password',{required:true})} type="password" label='Enter Password' className='w-full h-fit outline-none focus:ring-0 border-2 border-b3 px-5 py-3 rounded-md'/> 
        {errors.password && <h3 className='text-sm text-red-500'>Password Required</h3>}
        </div>
        <div className='flex flex-col'>
        <CustomeSelect placeholder="Select Login Type" errors={errors.login_type} options={userTypes} state={loginType} setState={setLoginType}>
        <input type="hidden" value={loginType} {...register('login_type',{required:true})}/>
        </CustomeSelect>
        {errors.login_type && <h3 className='text-sm text-red-500'>Login Type Required</h3>}
        </div>
        
        <a className='ml-60 text-t1 underline'>Forgot Password</a>
        <button type="submit" className='text-white py-5 rounded-md bg-b1'>Login</button>
        <p className='text-center'>Don't have an account?<span className='text-t1 underline'> Create Account</span></p>
       </form>  
      </div> 
      </div>
     </div>

     {/* Mobile Login Page */}
     <div id="mobile-wrapper" className='lg:hidden flex flex-col h-screen'>
     
     <div className='flex flex-col items-center text-white bg-t1 h-2/4 justify-center'>
       <div className='flex flex-col items-center mb-5'><h3 className='text-3xl'>LOGO</h3><h3 className='text-sm'>Sign in to your account</h3></div>
       <div><img src="https://www.dropbox.com/s/frgr0uyp457kctp/Group.png?raw=1" className='w-32 h-22'/></div>
     </div>

     {/* Form Wrapper */}
     <div className='flex flex-col items-center py-5 h-full bg-white'>
     {/* Form */}
     <div className='flex flex-col space-y-5 h-full'>
       {/* Input */}
      <fieldset className='border-2 boder-t1 h-14 px-5 rounded-lg'>
       <legend className='text-t1 text-sm'>Email:</legend>
       <input type="email" name="email"  className='outline-none focus:ring-0 w-56 h-6 border-none'/><br/><br/>
      </fieldset>
       {/* Input */}
      <fieldset className='border-2 boder-t1 h-14 px-5 rounded-lg'>
       <legend className='text-t1 text-sm'>Enter Password:</legend>
       <input type="password" name="password"  className='outline-none focus:ring-0 w-56 h-6 border-none'/><br/><br/>
      </fieldset>

      <div className='text-t1 underline w-full text-sm text-end'><a href="#">Forgot Password?</a></div>
       <button onClick={()=>state.setDsclState(true)} className='self-center bg-t1 w-fit h-fit text-white text-xl px-10 py-2 rounded-lg'>Login</button>
      <div className='flex w-full text-center text-t2 text-sm'><a href="#">Dont have an account?<span className='text-t1 underline ml-1'>Create Account</span></a></div>
     </div>
     </div>
     </div>
    </>
  )
}

export default Login