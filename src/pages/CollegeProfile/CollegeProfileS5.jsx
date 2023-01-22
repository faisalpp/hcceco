import React from 'react'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri'
import CollegeProfileNavbar from '../../../components/CollegesComponents/CollegeProfileNavbar'
import Navbar from '../../../components/Navbar'
import HeadMeta from '../../HeadMeta'
import MobileFloats from '../MobileFloats'

const CollegeProfileS5 = () => {
  return (
    <>
  <HeadMeta title="Edite Profile"/>
    <Navbar/>
    <MobileFloats/>
    <div className='flex flex-col py-7 bg-white items-center w-full h-screen'>
     <div className='flex flex-col lg:ml-3 lg:mr-3 w-full lg:px-20 h-fit items-center justify-center'>
     <CollegeProfileNavbar/>
     <div className='grid grid-cols-12 items-center mt-10'>
      <div className='col-start-1 col-end-3 flex lg:flex-col flex-row mb-2'>
        <h3 className='text-t1 text-lg'>Show Entries</h3>
        <div className='flex items-center border-2 border-t3/40 rounded-md w-fit'><RiArrowDropUpFill className='text-3xl text-t1'/><input value="0" type="number" className='w-12 border-none'/><RiArrowDropDownFill className='text-3xl text-t1'/></div>
      </div>
      <div className='col-start-11 lg:flex hidden'>
        <input type="search" placeholder='Search here..'  className='w-60 border-2 border-t3/40 rounded-md h-fit'/>
      </div>
     </div>
     
       
<div class="relative overflow-x-auto lg:w-full w-80 shadow-md sm:rounded-lg">
    <table class="lg:w-full w-60 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead style={{'backgroundColor':'#A66CFF'}} class="text-xs text-black uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    No.
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Enroll. Year
                </th>
                <th scope="col" class="px-6 py-3">
                  Rating
                </th>
                <th scope="col" class="px-6 py-3">
                  Review Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    01
                </th>
                <td class="px-6 py-4">
                  Faisal
                </td>
                <td class="px-6 py-4">
                  0293939
                </td>
                <td class="px-6 py-4">
                  Mf@gmai.com
                </td>
                <td class="px-6 py-4 text-right">
                  2022
                </td>
                <td class="px-6 py-4 text-right">
                  2/4
                </td>
                <td class="px-6 py-4 text-right">
                  lorem ipsum doler
                </td>
                <td class="px-6 py-4 text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aliquam pariatur esse eos molestias dolor impedit adipisci vel voluptatem provident non 
                </td>
                <td class="px-6 py-4 text-right text-green-500">
                  Delete
                </td>
            </tr>
                    </tbody>
    </table>
</div>

    
    
    </div>
    </div>    
    </>
  )
}

export default CollegeProfileS5