import React from 'react'
import { useState } from 'react'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri'

const CollapsesSideBar = ({formUrl,cardColor,title,option,method}) => {
  const [show,setShow] = useState(false)
   return (
    <div className='flex flex-col mt-5 bg-white w-60 h-auto'>
     {show ?
     <h3 onClick={()=>setShow(false)} style={{'borderColor':cardColor}} className='flex items-center text-t1 cursor-pointer border-l-4 px-5 py-3 text-sm rounded-sm'>{title} <RiArrowDropUpFill className='text-2xl ml-10'/></h3>
     :<h3 onClick={()=>setShow(true)} style={{'borderColor':cardColor}} className='flex cursor-pointer items-center text-t1 border-l-4 px-5 py-3 text-sm rounded-sm'>{title} <RiArrowDropDownFill className='text-2xl ml-10'/></h3>
     } 
     <div className={`${show ? 'flex' : 'hidden'} flex-col w-full bg-white mt-3 h-auto`}>
      <form action={formUrl} method={method} className='flex flex-col space-y-2 scrollbar-thin scrollbar-thumb-t1 px-10 w-72 text-sm h-auto mb-10'>
       {option.map((option)=><div className='flex space-x-2 items-center'><input type="checkbox" className='outline-none h-4 w-5'/><h3 className='text-xs'>{option}</h3></div>)}
      </form>
     </div>
    </div>
  )
}

export default CollapsesSideBar