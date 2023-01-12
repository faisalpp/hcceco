import React from 'react'

const SideBarCard = ({cardColor,title}) => {
  return (
   <div className='flex flex-col mt-5 bg-white h-auto'>
    <h3 style={{'borderColor':cardColor}} className='text-t1 border-l-4 px-5 py-3 text-xs rounded-sm'>{title}</h3>
    <div className='flex items-center w-full justify-center mt-3'>
     <input type="search" placeholder="Search" className="border-2 border-b3 rounded-md text-sm"/>
    </div>
    <div className='flex flex-col w-full bg-white mt-3 h-auto mb-10'>
     <div className='flex flex-col overflow-scroll px-10 w-fit overflow-x-hidden text-sm h-40'>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='rounded-sm h-4 w-4'/><h3>Tamil Nadu</h3><h3>1</h3></div>
     </div>
    </div>
   </div>
  )
}

export default SideBarCard