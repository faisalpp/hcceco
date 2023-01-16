import React from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import { NavLink,useLocation } from 'react-router-dom'

const DistanceEducation = () => {
  const title = useLocation()
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
      <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
         {/* Announcement Links SideBar */}
       <div className='flex flex-col py-5 bg-white h-screen mb-10 rounded-md mt-7'>
        <NavLink to="/college/about"><div className={`${title.pathname === "/college/distance-education" ? 'border-l-4 border-t1 bg-t1/20':null} hover:border-l-4 border-l-4 hover:border-t1 border-white py-2 cursor-pointer  px-5 [&>h3:hover]:textt-1 hover:bg-t1/20 `}><h3>BASIC INFORMATION</h3></div></NavLink>
       </div>
      </div>
      <div className='col-start-4 col-end-13 bg-white'>
       <div className='flex flex-col space-y-8 mt-20 ml-10 mr-10'>
        {/* Introduction */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Basic Information</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus sunt, unde non ab, fuga, tempore distinctio illum doloremque earum sint reiciendis ea aperiam. Porro reiciendis qui nulla ullam laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus labore vero nemo ex explicabo omnis porro esse autem sint, nesciunt accusantium commodi id itaque vel maiores facilis obcaecati quae!</p>
        </div>
       </div>
      </div>
     </div>
    </CollegeInnerPageLayout>
  )
}

export default DistanceEducation