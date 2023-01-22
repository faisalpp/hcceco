import React from 'react'
import { NavLink,useLocation } from 'react-router-dom';

const ExamSideBar = ({data}) => {
 const title = useLocation();
  return (
    <>
    <div className='lg:flex flex-col hidden lg:space-x-0 space-x-2 lg:py-5 bg-white lg:h-auto h-fit lg:w-72 w-[360px] lg:mb-10 lg:rounded-md lg:mt-7 lg:ml-7 lg:overflow-auto overflow-scroll py-2'>
    {data.map((item,index)=><NavLink to={item.url}><div key={index} className={`${title.pathname === item.url ? 'lg:border-l-4 lg:border-b-0 border-b-4 border-t1 lg:bg-t1/20 lg:[&>p]:text-t1 [&>p]:text-black':null} lg:hover:border-l-4 lg:border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 lg:hover:bg-t1/20 group`}><p className='lg:group-hover:text-t1 text-black w-max text-sm'>{item.name}</p></div></NavLink>)}
   </div>
    </>
  )
}

export default ExamSideBar