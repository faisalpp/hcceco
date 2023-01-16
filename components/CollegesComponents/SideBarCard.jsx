import React from 'react'

const SideBarCard = ({cardColor,title,searchAction,optionAction}) => {
  return (
   <div className='flex flex-col mt-5 bg-white h-auto'>
    <h3 style={{'borderColor':cardColor}} className='text-t1 border-l-4 px-5 py-3 text-sm rounded-sm'>{title}</h3>
    <form action={searchAction} className='flex items-center w-full justify-center mt-3'>
     <input type="search" placeholder="Search" className="py-1 px-2 border-2 border-b3 rounded-md text-sm"/>
    </form>
    <div className='flex flex-col w-full bg-white mt-3 h-auto mb-10'>
     <form action={optionAction} className='flex flex-col scrollbar-thin scrollbar-thumb-t1 px-10 w-fit text-sm h-40'>
      <div className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='outline-none h-4 w-5'/><h3>Tamil Nadu</h3><h3>&#91;1&#93;</h3></div>
     </form>
    </div>
   </div>
  )
}

export default SideBarCard