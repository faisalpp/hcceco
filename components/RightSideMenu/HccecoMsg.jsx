import React,{useState} from 'react'
import ChatBox from './ChatBox';

const HccecoMsg = ({name,msg}) => {
  const [chatBox,setChatBox] = useState(false);
  return (
    <>
    <div onClick={()=>setChatBox(true)} id="msg" className='flex items-center cursor-pointer space-x-2'>
        <img src="https://www.dropbox.com/s/h4an5wsqmuued7z/avtar.PNG?raw=1" className='w-8 h-8 rounded-full'/>
        <div className='flex flex-col text-xs'>
          <h3 className='font-bold'>{name}</h3>
          <h3 className='text-t2 text-[10]'>{msg}</h3>
        </div>
      </div>
      <ChatBox chatBox={chatBox} setChatBox={setChatBox}/>
    </>
  )
}

export default HccecoMsg