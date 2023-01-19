import React from 'react'
import { Checkbox } from '@material-tailwind/react';
import {RiSearch2Line} from 'react-icons/ri'

const FilterBody = ({data,searchUrl,method}) => {
  return (
    <>
    <form action={searchUrl} method={method} className='flex items-center px-2 text-sm border-2 ml-3 border-t3/20 rounded-md w-44 mb-2'><input type="search" placeholder='Search here..' className='w-full'/><RiSearch2Line/></form>
    {data.map((data)=><div className='flex items-center mr-6'><Checkbox color="blue" className='h-4 w-4'/><h3>{data.name} &#91;12&#93;</h3></div>)}
    </>
  )
}

export default FilterBody