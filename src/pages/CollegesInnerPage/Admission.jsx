import React from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import CollegeInnerMenue from '../../../components/CollegesComponents/CollegeInnerMenu'

const Admission = () => {
  return (
    <CollegeInnerPageLayout>
     <div className='grid grid-cols-12'>
     <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'><CollegeInnerMenu/></div>
     <div className='col-start-4 col-end-13 bg-white'>
      <div className='flex flex-col space-y-8 mt-20 ml-10 mr-10'>
        {/* Introduction */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Introduction</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus sunt, unde non ab, fuga, tempore distinctio illum doloremque earum sint reiciendis ea aperiam. Porro reiciendis qui nulla ullam laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus labore vero nemo ex explicabo omnis porro esse autem sint, nesciunt accusantium commodi id itaque vel maiores facilis obcaecati quae!</p>
        </div>
        {/* About Test */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>About Test</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure et molestias eos quia eveniet ratione quasi! Facere quibusdam eos reprehenderit aliquid aliquam. Blanditiis ipsa rerum odio, hic porro tenetur eius. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quisquam illum corporis, porro libero delectus voluptates consequatur praesentium voluptas assumenda sequi magni eveniet perferendis corrupti voluptatum. Incidunt at libero eos.</p>
        </div>
        {/* Important Dates */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Important Dates</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id.</p>
        </div>
        {/* Admission Process */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Admission Process</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id.</p>
        </div>
        {/* PHD Admission Process */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>PHD Admission Process</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id.</p>
        </div>
        {/* Document Required */}
        <div className='flex flex-col space-y-2'>
         <h3 className='text-t1 text-xl'>Document Required</h3>
         <p className='text-[16px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero corrupti harum aperiam quidem explicabo quibusdam similique sunt excepturi ab autem inventore, quis eaque. Incidunt atque illo odio consequatur unde id.</p>
        </div>
       </div>
      </div>
     </div>
    </CollegeInnerPageLayout>
  )
}

export default Admission