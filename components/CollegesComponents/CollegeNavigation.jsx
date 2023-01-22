import React,{useEffect, useState} from 'react'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';
import { useLocation,NavLink } from 'react-router-dom'

const CollegeNavigation = () => {
  const title = useLocation();
  const [abMenu,setAbMenu] = useState(false);
  const [cfMenu,setCfMenu] = useState(false);
  const [anMenu,setAnMenu] = useState(false);
  const [adMenu,setAdMenu] = useState(false);
  const [deMenu,setDeMenu] = useState(false);
  const [plMenu,setPlMenu] = useState(false);
  const [skMenu,setSkMenu] = useState(false);
  const [faqMenu,setFaqMenu] = useState(false);
  return (
   <>
   <div className='lg:flex hidden bg-b1 text-white justify-center space-x-7 rounded-b px-3'>
    <NavLink to="/college/about"><h3 className={`${title.pathname.startsWith('/college/about') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>About</h3></NavLink>
    <NavLink to="/college/all-courses"><h3 className={`${title.pathname === '/college/all-courses' ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Courses & Fees</h3></NavLink>
    <NavLink to="/college/announcements"><h3 className={`${title.pathname.includes('/college/announcements') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Announcements</h3></NavLink>
    <NavLink to="/college/admission"><h3 className={`${title.pathname === '/college/admission' ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Admission</h3></NavLink>
    <NavLink to="/college/reviews"><h3 className={`${title.pathname.includes('/college/reviews') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Reviews</h3></NavLink>
    <NavLink to="/college/distance-education"><h3 className={`${title.pathname.includes('/college/distance-education') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Distance Education</h3></NavLink>
    <NavLink to="/college/placements"><h3 className={`${title.pathname.includes('/college/placements') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Placements</h3></NavLink>
    <NavLink to="/college/scholership"><h3 className={`${title.pathname.includes('/college/scholership') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>Scholership</h3></NavLink>
    <NavLink to="/college/faq"><h3 className={`${title.pathname.includes('/college/faq') ? 'border-b-4 border-white' : null}hover:border-b-4 border-white cursor-pointer py-3 h-12`}>FAQ</h3></NavLink>
   </div>

   <div className='lg:hidden flex px-2 space-x-5 bg-white py-3 text-xs overflow-scroll'>
    {/* About Link */}
     {abMenu ?<h3 onClick={()=>setAbMenu(false)} className={`flex ${title.pathname === '/college/about'?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>About <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setAbMenu(true)} className={` ${title.pathname === '/college/about'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>About <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* About Menu */}
     <div className={` ${abMenu ?'absolute':'hidden'}  bottom-1 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/about"><h3>INTRODUCTION</h3></NavLink>
       <NavLink to="/college/about"><h3>HIGHLIGHTS</h3></NavLink>
       <NavLink to="/college/about"><h3>RANKING & AWARDS</h3></NavLink>
       <NavLink to="/college/about"><h3>COURSES</h3></NavLink>
       <NavLink to="/college/about"><h3>SCHOLERHSIP PLACEMENT</h3></NavLink>
       <NavLink to="/college/about"><h3>FACILITIES</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Courses & Fees Link */}
     {cfMenu ?<h3 onClick={()=>setCfMenu(false)} className={` ${title.pathname === '/college/all-courses'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Courses & Fees <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setCfMenu(true)} className={` ${title.pathname === '/college/all-courses'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Courses & Fees <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Courses Menu */}
     <div className={` ${cfMenu ?'absolute':'hidden'}  bottom-1 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-3 px-2 w-20'>
       <NavLink to="/college/all-courses"><h3>B.ED</h3></NavLink>
       <NavLink to="/college/all-courses"><h3>MLT</h3></NavLink>
       <NavLink to="/college/all-courses"><h3>BSC</h3></NavLink>
       <NavLink to="/college/all-courses"><h3>M.ED</h3></NavLink>
       <NavLink to="/college/all-courses"><h3>BCS</h3></NavLink>
      </div> 
     </div>
     {/* Courses Menu End Here */}
    
    {/* Announcements Link */}
     {anMenu ?<h3 onClick={()=>setAnMenu(false)} className={` ${title.pathname === '/college/announcements'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Announcements <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setAnMenu(true)} className={` ${title.pathname === '/college/announcements'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Announcements <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Announcements Menu */}
     <div className={` ${anMenu ?'absolute':'hidden'}  -bottom-5 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/announcements"><h3>INTRODUCTION</h3></NavLink>
       <NavLink to="/college/announcements"><h3>ABOUT TEST</h3></NavLink>
       <NavLink to="/college/announcements"><h3>IMPORTANT DATES</h3></NavLink>
       <NavLink to="/college/announcements"><h3>ADMISSION HIGHLIGHTS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>APPLICATION PROCESS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>PHD ADMISSION PROCESS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>DOCUMENT REQUIRED</h3></NavLink>
      </div> 
     </div>
     {/* Announcements End Here */}

    {/* Admission Link */}
     {adMenu ?<h3 onClick={()=>setAdMenu(false)} className={` ${title.pathname === '/college/admission'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Admission <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setAdMenu(true)} className={` ${title.pathname === '/college/admission'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Admission <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Admission Menu */}
     <div className={` ${adMenu ?'absolute':'hidden'}  bottom-1 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/admission"><h3>INTRODUCTION</h3></NavLink>
       <NavLink to="/college/admission"><h3>HIGHLIGHTS</h3></NavLink>
       <NavLink to="/college/admission"><h3>RANKING & AWARDS</h3></NavLink>
       <NavLink to="/college/admission"><h3>COURSES</h3></NavLink>
       <NavLink to="/college/admission"><h3>SCHOLERSHIP PLACEMENT</h3></NavLink>
       <NavLink to="/college/admission"><h3>FACILITIES</h3></NavLink>
      </div> 
     </div>
     {/* Review End Here */}
     <NavLink to="/college/reviews"><h3 className={` ${title.pathname === '/college/reviews'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Reviews</h3></NavLink>
    
    {/* Distance Education Link */}
     {deMenu ?<h3 onClick={()=>setDeMenu(false)} className='flex items-center border-b-2 border-t1'>Distance Education <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setDeMenu(true)} className={` ${title.pathname === '/college/distance-education'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Distance Education <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Distance Education Menu */}
     <div className={` ${deMenu ?'absolute':'hidden'} bottom-12 bg-white shadow-lg w-fit h-32 py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/distance-education"><h3>BASIC INFORMATION</h3></NavLink>
      </div> 
     </div>
     {/* Distance Education End Here */}
    
    {/* Placement Education Link */}
     {plMenu ?<h3 onClick={()=>setPlMenu(false)} className={` ${title.pathname === '/college/placements'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Placements <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setPlMenu(true)} className={` ${title.pathname === '/college/placements'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Placements <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Placement Education Menu */}
     <div className={` ${plMenu ?'absolute':'hidden'} bottom-12 bg-white shadow-lg w-fit h-32 py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/placements"><h3>GRAPHIC DESIGNER REQUIRED</h3></NavLink>
       <NavLink to="/college/placements"><h3>GRAPHIC DESIGNER REQUIRED</h3></NavLink>
       <NavLink to="/college/placements"><h3>GRAPHIC DESIGNER REQUIRED</h3></NavLink>
       <NavLink to="/college/placements"><h3>GRAPHIC DESIGNER REQUIRED</h3></NavLink>
      </div> 
     </div>
     {/* Placement Education End Here */}

    {/* Scholership Education Link */}
     {skMenu ?<h3 onClick={()=>setSkMenu(false)} className={` ${title.pathname === '/college/scholership'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Scholership <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setSkMenu(true)} className={` ${title.pathname === '/college/scholership'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Scholership <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Scholership Education Menu */}
     <div className={` ${skMenu ?'absolute':'hidden'} bottom-12 bg-white shadow-lg w-fit h-32 py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/scholership"><h3>INTRODUCTION</h3></NavLink>
       <NavLink to="/college/scholership"><h3>BASED ON UNI EXAMS</h3></NavLink>
       <NavLink to="/college/scholership"><h3>BASED ON +2,DIPLOMA GRADE SCORE</h3></NavLink>
       <NavLink to="/college/scholership"><h3>ON BASIS OF SPORTS QUOTA</h3></NavLink>
      </div> 
     </div>
     {/* Scholership Education End Here */}

    {/* FAQ Link */}
     {faqMenu ?<h3 onClick={()=>setFaqMenu(false)} className={` ${title.pathname === '/college/faq'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>FAQs <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setSkMenu(true)} className={` ${title.pathname === '/college/faq'?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>FAQs <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* FAQ Menu */}
     <div className={` ${skMenu ?'absolute':'hidden'} bottom-12 bg-white shadow-lg w-fit h-32 py-5`}>
     <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/college/announcements"><h3>INTRODUCTION</h3></NavLink>
       <NavLink to="/college/announcements"><h3>ABOUT TEST</h3></NavLink>
       <NavLink to="/college/announcements"><h3>IMPORTANT DATES</h3></NavLink>
       <NavLink to="/college/announcements"><h3>ADMISSION HIGHLIGHTS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>APPLICATION PROCESS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>PHD ADMISSION PROCESS</h3></NavLink>
       <NavLink to="/college/announcements"><h3>DOCUMENT REQUIRED</h3></NavLink>
      </div> 
     </div>
     {/* FAQ End Here */}
    
   </div>
   </>
  )
}

export default CollegeNavigation