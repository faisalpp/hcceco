import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/GlobalContext'
import {RiCloseLine} from 'react-icons/ri'

const FilterSideBar = () => {
  const state = useContext(AppContext);
  return (
    <>
    <div className='flex flex-col w-52 bg-white'>
    <h3 className='text-t1 px-3 py-3'>Selected Filter</h3>
    <div className='flex flex-wrap w-full h-auto mb-5 px-5'>
     {state.filter.map((fil)=><div className='flex space-x-1 bg-t1/80 px-2 py-1 rounded-md border-2 w-fit text-xs text-white'><h3>{fil}</h3><span className='bg-t2 rounded-full w-fit h-fit px-[1px] py-[1px]' ><RiCloseLine className='text-[8px]'/></span></div>)} 
    </div> 
    </div>
    </>
  )
}

export default FilterSideBar