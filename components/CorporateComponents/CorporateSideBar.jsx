import React from 'react'

const CorporateSideBar = ({cardColor,title,optionAction,data}) => {
  return (
    <div className='flex flex-col mt-5 bg-white h-auto w-64'>
    <h3 style={{'borderColor':cardColor}} className='text-t1 border-l-4 px-5 py-3 text-sm font-semibold rounded-sm'>{title}</h3>
    <div className='flex flex-col w-full bg-white mt-3 h-auto mb-10'>
     <form action={optionAction} className='flex flex-col space-y-3 scrollbar-thin scrollbar-thumb-t1 px-10 w-fit text-xs h-40'>
      {data.map((data)=><div key={data} className='flex text-t2 space-x-2 items-center'><input type="checkbox" className='h-3 w-3'/><h3 className='hover:underline hover:text-t1 cursor-pointer'>{data}</h3></div>)}
     </form>
    </div>
   </div>
  )
}

export default CorporateSideBar