import React,{useState} from 'react'
import DropDown from '../DropDown';
import {AiOutlineLink} from 'react-icons/ai'

const QuickLinks = () => {

  return (
    <div className='hidden lg:flex flex-col w-64 h-auto bg-white'>
     <div className='flex items-center justify-center space-x-2 w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'><AiOutlineLink className='text-xl'/><span>QUICK LINKS</span></div>
     <div className='mb-10'>
     <DropDown degree="B.Tech"/>
     <DropDown degree="MBBS" />
     <DropDown degree="MBA" />
     <DropDown degree="DESIGN" />
     <DropDown degree="LAW" />
     <DropDown degree="SCIENCE" />
     </div>

    </div>
  )
}

export default QuickLinks