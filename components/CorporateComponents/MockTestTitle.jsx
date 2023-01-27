import React from 'react'

const MockTestTitle = ({testNo,subject,topic}) => {
  return (
    <div className='flex bg-t1 w-full py-8 justify-center'>
     <h3 className='flex items-center text-white lg:text-3xl text-lg'>Test-{testNo} <span className='lg:text-lg text-sm'>/{subject}/{topic}</span></h3>
    </div>
  )
}

export default MockTestTitle