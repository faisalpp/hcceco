import React,{useState} from 'react'

const ChatUser = ({replay}) => {
    const [readMore,setReadMore] = useState(false);
    return (
    <div className={`flex ${replay === "true"?'flex-row-reverse space-x-reverse ml-3':'flex-row mr-5'} mt-5 items-end space-x-5 justify-end `}>
    <span className='text-[11px] py-5 text-t3'>30:50</span>
    <div className={`flex flex-col px-2 py-2 rounded-t-lg ${replay === "false" ?'rounded-l-lg' : 'rounded-r-lg'} text-xs w-52 bg-b4`}>
     <p className={`${readMore ? 'overlflow-none h-full' :'overflow-clip'} h-12 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea doloremque, hic facilis, pariatur accusantium debitis et nisi nihil officia beatae iste, aperiam facere at in nam reprehenderit harum possimus?</p>
     {readMore ? <span onClick={()=>setReadMore(false)} className='text-[10px] text-green-500 mt-1 cursor-pointer underline'>Hide</span> :<span onClick={()=>setReadMore(true)} className='text-[10px] text-green-500 cursor-pointer mt-1 underline'>Read More</span>}
    </div>
   </div>  
  )
}

export default ChatUser