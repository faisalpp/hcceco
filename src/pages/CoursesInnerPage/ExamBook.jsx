import React from 'react'
import HeadMeta from '../../HeadMeta'
import CoursesAboutLayout from '../../pages/Layouts/CoursesAboutLayout'


const ExamBook = () => {
  return (
    <>
    <HeadMeta title="Exam Books"/>
    <CoursesAboutLayout>
    <div className='flex flex-col w-full bg-white h-screen lg:py-10 py-5'>
    <div className='flex flex-col space-y-5 lg:ml-20 lg:mr-20 lg:mt-10 ml-5 mr-5'>
     <h3 className='font-semibold text-t1 text-xl'>IMPORTANT EXAM BOOK</h3> 
     <p className='text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officiis iusto labore nesciunt dicta nihil saepe quas voluptatem minus excepturi, modi ipsum commodi quasi placeat enim aspernatur, minima ex sed!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ut officia perspiciatis facere aut eveniet nostrum repudiandae. Voluptas amet, nostrum maxime id repudiandae sunt inventore quo sit cum porro neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eum illum fugit. Pariatur magni, commodi aspernatur doloremque, eaque quisquam adipisci quas recusandae tempora eveniet nesciunt magnam error tenetur, aut amet!</p>
    </div>
   </div>
    </CoursesAboutLayout>
    </>
  )
}

export default ExamBook