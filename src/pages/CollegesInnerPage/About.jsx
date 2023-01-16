import React from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import { NavLink, useLocation } from 'react-router-dom'

const About = () => {
  const title = useLocation()
  return (
    <CollegeInnerPageLayout>
    <div className='grid grid-cols-12'>
     <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
       {/* Admission Links SideBar */}
       <div className='flex flex-col py-5 bg-white h-screen mb-10 rounded-md mt-7'>
        <NavLink to="/college/courses/bed"><div className={`${title.pathname === "/college/about" || title.pathname === "/college/about" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>INTRODUCTION</h3></div></NavLink>
        <NavLink to="/college/courses/bmlt"><div className={`${title.pathname === "/college/about/highlights" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>HIGHLIGHTS</h3></div></NavLink>
        <NavLink to="/college/courses/med"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>RANKING & AWARDS</h3></div></NavLink>
        <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>COURSES</h3></div></NavLink>
        <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>SCHOLERHSIP PLACEMENT</h3></div></NavLink>
        <NavLink to="/college/courses/bsc"><div className={`${title.pathname === "/college/about/ranking" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 border-white py-2 cursor-pointer hover:border-t1 px-5 [&>h3:hover]:textt-1 hover:bg-t1/20`}><h3>FACILITIES</h3></div></NavLink>
       </div>
      </div>
      <div className='col-start-4 col-end-13 bg-white'>
      
      <div className='flex flex-col px-10 w-fit'>
        <h3 className='text-t1 mt-10 text-[20px] mb-5'>Inroduction</h3>
        <p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Quam laboriosam earum repellat totam suscipit, cupiditate 
           voluptates alias explicabo, dolore, ad nostrum! Perferendis
           tenetur dignissimos cupiditate corrupti. Omnis doloribus 
           laboriosam corporis. Quam laboriosam earum repellat totam suscipit, cupiditate
           voluptates alias explicabo, dolore, ad nostrum! Perferendis tenetur dignissimos
           cupiditate corrupti. Omnis doloribus  laboriosam corporis. Quam laboriosam earum 
           repellat totam suscipit, cupiditate voluptates alias explicabo, dolore, ad nostrum! Perferendis
           tenetur dignissimos cupiditate corrupti. Omnis doloribus laboriosam corporis.
        </p>
      </div>
      </div>
      </div>
    </CollegeInnerPageLayout>
  )
}

export default About