import React from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import CoursesSideBar from '../../../components/CollegesComponents/CoursesSideBar'

const Faq = () => {
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
      <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'>
        <CoursesSideBar/>
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

export default Faq