import React,{useState} from 'react'
import DropDown from '../DropDown';

const QuickLinks = () => {
  const [quickLm1, setQuickLm1] = useState(true)
  const [quickLm2, setQuickLm2] = useState(true)
  const [quickLm3, setQuickLm3] = useState(true)
  const [quickLm4, setQuickLm4] = useState(true)
  const [quickLm5, setQuickLm5] = useState(true)
  const [quickLm6, setQuickLm6] = useState(true)
  return (
    <div className='w-64 h-auto bg-white'>
     <div className='w-full text-center text-sm text-white py-3 bg-b1 rounded-t-md'>STUDY GOALS</div>
     <DropDown degree="B.Tech" setState={setQuickLm1} state={quickLm1}/>
     <DropDown degree="MBBS" setState={setQuickLm2} state={quickLm2}/>
     <DropDown degree="MBA" setState={setQuickLm3} state={quickLm3}/>
     <DropDown degree="DESIGN" setState={setQuickLm4} state={quickLm4}/>
     <DropDown degree="LAW" setState={setQuickLm5} state={quickLm5}/>
     <DropDown degree="SCIENCE" setState={setQuickLm6} state={quickLm6}/>

    </div>
  )
}

export default QuickLinks