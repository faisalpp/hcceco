import React,{useRef,useState} from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useLocation,NavLink } from 'react-router-dom'
import { RiArrowDropDownFill, RiArrowDropUpFill } from 'react-icons/ri';


const ExamInnerNavbar = () => {
  const title = useLocation()
  const ref = useRef();

  const scrollRight = () => {
    ref.current.scrollLeft += 30;
  }
  const scrollLeft = () => {
    ref.current.scrollLeft -= 30;
  }

  const [ab,setAb] = useState(false);
  const [faq,setFaq] = useState(false);
  const [reg,setReg] = useState(false);
  const [ac,setAc] = useState(false);
  const [id,setId] = useState(false);
  const [res,setRes] = useState(false);
  const [exc,setExc] = useState(false);
  const [elg,setElg] = useState(false);
  const [ept,setEpt] = useState(false);
  const [slb,setSlb] = useState(false);
  const [ptp,setPtp] = useState(false);
  const [cns,setCns] = useState(false);
  const [pclg,setPclg] = useState(false);


    return (
    <>
    <div className='lg:flex hidden w-full bg-t1 lg:justify-end '>
    <div ref={ref} className='flex lg:px-10 px-5 space-x-10 py-2 w-full lg:ml-10 mr-28 lg:rounded-b-md bg-t1 text-white overflow-hidden'>
    <button onClick={()=>scrollLeft()} className='absolute bg-white mt-2 rounded-full left-3'><RiArrowLeftSLine className='text-t1 text-3xl'/></button>
    <NavLink to="/exam/about/definition"><div className={`  ${title.pathname === "/exam/about/definition" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>About</h3></div></NavLink>
    <NavLink to="/exam/registration"><div className={`w-max ${title.pathname === "/exam/registration" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Registration</h3></div></NavLink>
    <NavLink to="/exam/admit-card"><div className={` w-max ${title.pathname === "/exam/admit-card" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Admit Card</h3></div></NavLink>
    <NavLink to="/exam/important-dates"><div className={` w-max ${title.pathname === "/exam/important-dates" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Important Dates</h3></div></NavLink>
    <NavLink to="/exam/reservation"><div className={`w-max ${title.pathname === "/exam/reservation" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Reservation</h3></div></NavLink>
    <NavLink to="/exam/exam-center"><div className={`w-max ${title.pathname === "/exam/exam-center" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Exam Centers</h3></div></NavLink>
    <NavLink to="/exam/eligibility"><div className={` w-max ${title.pathname === "/exam/eligibility" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Eligibility</h3></div></NavLink>
    <NavLink to="/exam/exam-pattern"><div className={`w-max ${title.pathname === "/exam/exam-pattern" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Exam Pattern</h3></div></NavLink>
    <NavLink to="/exam/syllabus"><div className={` w-max ${title.pathname === "/exam/syllabus" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Syllabus</h3></div></NavLink>
    <NavLink to="/exam/tips"><div className={` w-max ${title.pathname === "/exam/tips" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Preparation Tips</h3></div></NavLink>
    <NavLink to="/exam/counsling"><div className={` ${title.pathname === "/exam/counsling" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Counsling</h3></div></NavLink>
    <NavLink to="/exam/faq"><div className={` ${title.pathname === "/exam/faq" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>FAQs</h3></div></NavLink>
    <NavLink to="/exam/participating-colleges"><div className={`w-max ${title.pathname === "/exam/participating-colleges" ? 'border-b-4 border-white':'border-t1'} border-b-4 py-2 hover:border-white`}><h3>Participating Colleges</h3></div></NavLink>
    <button onClick={()=>scrollRight()} className='absolute bg-white mt-2 rounded-full right-10'><RiArrowRightSLine className='text-t1 text-3xl'/></button>
    </div>
    </div>

    <div className='lg:hidden flex px-2 space-x-5 bg-white py-3 text-xs overflow-scroll'>
    {/* Exam Definition Link */}
     {ab ?<h3 onClick={()=>setAb(false)} className={`flex ${title.pathname.startsWith('/exam/about')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>About <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setAb(true)} className={` ${title.pathname.startsWith('/exam/about')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>About <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Defintion Menu */}
     <div className={` ${ab ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/about/definition"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/about/exam-highlights"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/about/important-dates"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/about/exam-pattern"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/about/exam-syllabus"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/about/important-exam-books"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/about/exam-help"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/about/exam-previous-year-cutoff"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/about/previous-year-papers"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Exam Registration Link */}
     {reg ?<h3 onClick={()=>setReg(false)} className={`flex ${title.pathname.startsWith('/exam/registration')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Exam Registration <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setReg(true)} className={` ${title.pathname.startsWith('/exam/registration')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Registration <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Registartion Menu */}
     <div className={` ${reg ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/registration"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/registration"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/registration"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/registration"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/registration"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/registration"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/registration"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/registration"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/registration"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Exam Admit Card Link */}
     {ac ?<h3 onClick={()=>setAc(false)} className={`flex ${title.pathname.startsWith('/exam/admit-card')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center`}>Admit Card <RiArrowDropUpFill className='text-xl'/></h3>:<span onClick={()=>setAc(true)} className={` ${title.pathname.startsWith('/exam/admit-card')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Admit Card <RiArrowDropDownFill className='text-xl'/></span>}
     {/* Admit Menu */}
     <div className={` ${ac ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/admit-card"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/admit-card"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Exam Important Dates Link */}
     {id ?<h3 onClick={()=>setId(false)} className={`flex ${title.pathname.startsWith('/exam/important-dates')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Imporant Dates <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setId(true)} className={` ${title.pathname.startsWith('/exam/important-dates')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Important Dates <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Important Menu */}
     <div className={` ${id ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/important-dates"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/important-dates"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Exam Reservation Link */}
     {res ?<h3 onClick={()=>setRes(false)} className={`flex ${title.pathname.startsWith('/exam/reservation')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Reservation <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setRes(true)} className={` ${title.pathname.startsWith('/exam/reservation')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Reservation <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Reservation Menu */}
     <div className={` ${res ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/reservation"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/reservation"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}
    
    {/* Exam Centers Link */}
     {exc ?<h3 onClick={()=>setExc(false)} className={`flex ${title.pathname.startsWith('/exam/reservation')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Exam Centers <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setExc(true)} className={` ${title.pathname.startsWith('/exam/exam-centers')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Exam Centers <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Centers Menu */}
     <div className={` ${exc ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/exam-center"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/exam-center"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    {/* Exam Eligibility Link */}
     {elg ?<h3 onClick={()=>setElg(false)} className={`flex ${title.pathname.startsWith('/exam/eligibility')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Eligibility <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setElg(true)} className={` ${title.pathname.startsWith('/exam/eligibility')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Eligibility <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Eligibility Menu */}
     <div className={` ${elg ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/eligibility"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/eligibility"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    {/* Exam Pattern Link */}
     {ept ?<h3 onClick={()=>setEpt(false)} className={`flex ${title.pathname.startsWith('/exam/exam-pattern')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Exam Pattern <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setEpt(true)} className={` ${title.pathname.startsWith('/exam/exam-pattern')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Exam Pattern <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Pattern Menu */}
     <div className={` ${ept ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/exam-pattern"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/exam-pattern"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    {/* Exam Sllabus Link */}
     {slb ?<h3 onClick={()=>setSlb(false)} className={`flex ${title.pathname.startsWith('/exam/syllabus')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Syllabus <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setSlb(true)} className={` ${title.pathname.startsWith('/exam/syllabus')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Syllabus <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Pattern Menu */}
     <div className={` ${slb ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/syllabus"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/syllabus"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    {/* Exam Preparation Tips Link */}
     {ptp ?<h3 onClick={()=>setPtp(false)} className={`flex ${title.pathname.startsWith('/exam/tips')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Preparation Tips <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setPtp(true)} className={` ${title.pathname.startsWith('/exam/tips')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Preparation Tips <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Preparation Tips Menu */}
     <div className={` ${ptp ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/tips"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/tips"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/tips"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/tips"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    {/* Exam Preparation Tips Link */}
     {cns ?<h3 onClick={()=>setCns(false)} className={`flex ${title.pathname.startsWith('/exam/counsling')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Counsling <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setCns(true)} className={` ${title.pathname.startsWith('/exam/counsling')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Counsling <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Exam Preparation Tips Menu */}
     <div className={` ${cns ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/tips"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/tips"><h3>IMPORATANT DATES</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM PATTERN</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM SYLLABUS</h3></NavLink>
       <NavLink to="/exam/tips"><h3>IMPORTANT EXAM BOOKS</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM HELPLINE</h3></NavLink>
       <NavLink to="/exam/tips"><h3>EXAM PREVIOUS YEAR CUTOFF</h3></NavLink>
       <NavLink to="/exam/tips"><h3>PREVIOUS YEAR PAPERS</h3></NavLink>
      </div> 
     </div>
     {/* Reservation Menu End Here */}

    
    
    {/* Exam Participating Colleges Link */}
     {pclg ?<h3 onClick={()=>setPclg(false)} className={`flex ${title.pathname.startsWith('/exam/participating-colleges')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>Participating Colleges <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setPclg(true)} className={` ${title.pathname.startsWith('/exam/participating-colleges')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>Participating Colleges <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* Participating Colleges Menu */}
     <div className={` ${pclg ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/faq"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/faq"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/faq"><h3>IMPORATANT DATES</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    {/* Exam FAQ Link */}
     {faq ?<h3 onClick={()=>setFaq(false)} className={`flex ${title.pathname.startsWith('/exam/faq')?'text-t1 border-t1':'text-t3 border-b-2 border-white'} items-center `}>About <RiArrowDropUpFill className='text-xl'/></h3>:<h3 onClick={()=>setFaq(true)} className={` ${title.pathname.startsWith('/exam/faq')?'border-t1 text-black':'border-white text-t3'} flex items-center border-b-2`}>About <RiArrowDropDownFill className='text-xl'/></h3>}
     {/* FAQ Menu */}
     <div className={` ${faq ?'absolute':'hidden'}  top-28 bg-white shadow-lg w-fit h-fit py-5`}>
      <div className='flex flex-col space-y-2 px-2'>
       <NavLink to="/exam/faq"><h3>DEFINATION</h3></NavLink>
       <NavLink to="/exam/faq"><h3>EXAM HIGHLIGHT</h3></NavLink>
       <NavLink to="/exam/faq"><h3>IMPORATANT DATES</h3></NavLink>
      </div> 
     </div>
     {/* About Menu End Here */}
    
    
     </div>

    </>
  )
}

export default ExamInnerNavbar