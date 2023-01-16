import React from 'react'
import { RiBookOpenLine } from 'react-icons/ri'
import {GiArchiveResearch} from 'react-icons/gi'

const LearningLinks = () => {
  return (
    <div className='hidden lg:flex flex-col w-64 h-auto bg-white'>
    <div className='flex items-center justify-center w-full space-x-2 text-center text-sm text-white py-3 bg-b1 rounded-t-md'><GiArchiveResearch className='text-xl'/><span>LEARNING LINKS</span></div>
    <div className='flex flex-col w-full ml-10 mt-5 space-y-8 text-sm mb-5'>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Learn English</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Learn IELTS</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Learn Quants</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Learn Reasoning</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Learn Verbal Ability</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Soft Skills</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Interview Praparation</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Practice Test</a></div>
      <div className='flex space-x-2 items-center cursor-pointer'><RiBookOpenLine className='text-t2'/><a className='hover:text-t1 hover:underline'>Question Bank</a></div>
    </div>
  </div>
  )
}

export default LearningLinks