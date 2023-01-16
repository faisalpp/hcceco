import React from 'react'
import HeadMeta from '../../HeadMeta'
import LayoutCoursesDetail from './LayoutCoursesDetail'

const EligibilityTab = () => {
  return (
    <>
    <LayoutCoursesDetail>
    <HeadMeta title="Eligibility Criteria"/>
    <div className='flex flex-col w-full bg-white h-full'>
    <div className='flex flex-col space-y-5 ml-20 mr-20 mt-10'>
     <h3 className='font-semibold text-t1 text-xl'>ELIGIBILITY</h3> 
     <p className='text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officiis iusto labore nesciunt dicta nihil saepe quas voluptatem minus excepturi, modi ipsum commodi quasi placeat enim aspernatur, minima ex sed!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut officia perspiciatis facere aut eveniet nostrum repudiandae. Voluptas amet, nostrum maxime id repudiandae sunt inventore quo sit cum porro neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eum illum fugit. Pariatur magni, commodi aspernatur doloremque, eaque quisquam adipisci quas recusandae tempora eveniet nesciunt magnam error tenetur, aut amet!</p>
    </div>
   </div>
    </LayoutCoursesDetail>
    </>
  )
}

export default EligibilityTab