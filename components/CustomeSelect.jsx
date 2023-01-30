import React,{useState} from 'react'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri'


const CustomeSelect = ({children,options,state,setState,errors,placeholder}) => {
    const [drp,setDrp] = useState(false);

  return (
    <div className='flex flex-col rounded-md h-auto ease-in-out delay-500'>
     <div className='relative w-full'>
      {drp ? <div onClick={()=>setDrp(false)} className={`flex text-sm text-t2/80 px-5 items-center h-10 border-t-2 border-l-2 border-r-2 ${errors && 'border-red-500'} border-t3/40 rounded-t-md`}><h3 className='w-full'>{state ? state :placeholder}</h3><div className='flex justify-end w-full'><RiArrowDropUpFill className='text-t1 text-4xl'/></div></div>:<div onClick={()=>setDrp(true)} className={`flex text-sm text-gray-600 items-center h-10 px-5 border-t-2 border-l-2 border-r-2 border-b-2 ${errors && 'border-red-500'} border-t3/40 rounded-md`}><h3 className='w-full'>{state ? state :placeholder}</h3><div className='flex justify-end w-full'><RiArrowDropDownFill className='text-t1 text-4xl'/></div></div>} 
      {children}
      <div className={` ${drp?'absolute':'hidden'} bg-white text-t2/80  text-sm z-20 px-5 mb-2 border-b-2 border-l-2 border-r-2 border-t3/40 rounded-b-md w-full py-2`}>
       {options.map((option,index)=><div key={option} className="text-white bg-t1/20 py-2 px-2 rounded-md mb-2"><input id={option} className='hidden' type="checkbox" value={option} /><label htmlFor={index} onClick={()=>{setState(document.getElementById(index).value);setDrp(false)}}>{option}</label></div>)}
      </div> 
     </div> 
    </div>
  )
}

export default CustomeSelect