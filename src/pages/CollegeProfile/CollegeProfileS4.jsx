import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta';
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar';
import MobileFloats from '../MobileFloats';

const CollegeProfileS4 = () => {

  return (
    <>
     <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-auto'>
     <div className='flex flex-col ml-3 mr-3 lg:w-4/5 h-fit justify-center'>
      <h3 className='text-t1 text-lg lg:text-3xl text-center'>Edit Profile</h3>
      <CollegeProfileNavbar/>

      <div className='flex flex-col space-y-10'>
       
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College About</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>Courses & Fees</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Admission</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Announcements</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Review</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>Distance Education</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Placement</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Faculty</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>College Scholership</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Highlisghts</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Ranking & Highlights</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Courses</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Sholership</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Placements</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
       <div className='flex flex-col mt-10'>
         <h3 className='text-t1 text-lg font-bold mb-2'>University Facilities</h3>
         <div className='flex w-full border-2 border-t3/20 rounded-md px-10 py-5'>
          <p className='font-normal text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore non nesciunt eaque! Cum maiores possimus deleniti. Facilis fugit at voluptatem ipsam eius! Eaque accusantium nostrum quisquam, consequuntur natus error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ullam rem adipisci omnis id, fugit nobis provident. Natus quam ipsam dolorem ex ullam. Aliquam unde eligendi possimus? Accusamus, quis veniam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eveniet labore nemo pariatur provident ratione quas quod aliquam cupiditate, nisi assumenda dolore rerum deleniti ducimus fugit fugiat minima illum dolorum!</p>
         </div>
       </div>
        
        <button className='self-center w-fit text-lg px-10 py-3 bg-t1 rounded-md text-white'>Update</button>

      </div>

     </div>
    </div> 
    </>
  )
}

export default CollegeProfileS4