import React from 'react'
import CollegeInnerPageLayout from '../Layouts/CollegeInnerPageLayout'
import AboutSideBar from '../../../components/CollegesComponents/CollegeInnerMenu'

const CollegeIntro = () => {
  return (
    <CollegeInnerPageLayout>
    <div className='grid grid-cols-12'>
     <div className='col-start-1 col-end-4 bg-t3/2 flex h-fit items-center'><AboutSideBar/></div>
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

export default CollegeIntro