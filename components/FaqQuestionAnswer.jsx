import React,{useState} from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

const FaqQuestionAnswer = ({question,answer}) => {
    const [show,setShow] = useState(false);

    return (
    <>
    {/* FAQ Question */}
    <div className='flex items-center mt-10 text-[16px] space-x-5'><AiOutlinePlusCircle onClick={()=>setShow(true)} className='text-t1 text-2xl'/><h3>{question}?</h3></div>
    {/* FAQ Answer */}
    <div className={`${show?'flex':'hidden'} flex-col mt-5 text-[16px] space-x-12`}>
     <div className='flex space-x-5'>
      <AiOutlineMinusCircle onClick={()=>setShow(false)} className='text-t1 text-2xl'/>
      <h3 className='text-t1'>{question}?</h3>
     </div> 
     <p className='mt-2'>{answer}</p>
    </div>
    </>
  )
}

export default FaqQuestionAnswer