import React,{useState} from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

const FaqQuestionAnswer = ({question,answer}) => {
    const [show,setShow] = useState(false);

    return (
    <>
    {/* FAQ Question */}
    <div className='flex items-center mt-10 lg:text-[16px] text-xs space-x-5'><AiOutlinePlusCircle onClick={()=>setShow(true)} className='text-t1 lg:text-2xl text-xl'/><h3>{question}?</h3></div>
    {/* FAQ Answer */}
    <div className={`${show?'flex':'hidden'} flex-col mt-5 lg:text-[16px] text-xs space-x-12`}>
     <div className='flex space-x-5'>
      <AiOutlineMinusCircle onClick={()=>setShow(false)} className='text-t1 lg:text-2xl text-xl'/>
      <h3 className='text-t1'>{question}?</h3>
     </div> 
     <p className='mt-2 lg:text-sm text-xs'>{answer}</p>
    </div>
    </>
  )
}

export default FaqQuestionAnswer