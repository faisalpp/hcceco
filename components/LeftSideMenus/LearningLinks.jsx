import React from 'react'
import { RiBookOpenLine } from 'react-icons/ri'

const LearningLinks = () => {
  return (
    <div className='w-64 h-auto bg-white'>
    <div className='w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'>STUDY GOALS</div>
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