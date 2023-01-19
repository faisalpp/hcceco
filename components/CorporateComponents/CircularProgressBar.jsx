import React, { useState,useEffect } from 'react'

const CircularProgressBar = ({crt,wrg,skp}) => {

  useEffect(() => {
    const Progressbar = (el) =>{
        let correctCircle = document.querySelector(el);
        let correctRadius = correctCircle.r.baseVal.value;
        let correctCircum = correctRadius * 2 * Math.PI;
        correctCircle.style.strokeDasharray = correctCircum;
      }
    
      const setCrtProgress = (prg,el) =>{
        let crt = document.querySelector(el);
        crt.style.strokeDashoffset = crt.style.strokeDasharray - (prg / 100) * crt.style.strokeDasharray;
      }
      Progressbar('.correctProgress');
      setCrtProgress(crt,'.correctProgress');
      Progressbar('.wrongProgress');
      setCrtProgress(wrg,'.wrongProgress');
      Progressbar('.skippedProgress');
      setCrtProgress(skp,'.skippedProgress');
  }, [])
  


  return (
   <>
    <svg className='w-[361px] h-[361px] shadow-2xl rounded-full'>
       <g>
       <circle  r="150" cx="180" cy="180" strokeWidth="20" stroke='#00000012' fill="white"></circle> 
       <circle r="150" className='correctProgress' strokeLinecap='round' cx="180" cy="180" strokeWidth="20" stroke='#1BA643' fill="none"></circle> 
       <circle r="150" className='wrongProgress' cx="180" cy="180" strokeLinecap='round' strokeWidth="20" stroke='#F7684A' fill="none"></circle> 
       <circle r="150" className='skippedProgress' cx="180" cy="180" strokeLinecap='round' strokeWidth="20" stroke='#BEBEBE' fill="none"></circle> 
       <circle r="100" cx="180" cy="180" strokeWidth="0" stroke='white' fill="white"/>
       <text x="190" y="170" fontSize="40" stroke="black" stroke-width="1px" text-anchor="middle" alignment-baseline="central">{crt}%</text>  
       <text x="190" y="210" fontSize="22" stroke="black" stroke-width="1px" text-anchor="middle" alignment-baseline="central">Score</text>  
       </g>
    </svg>
   </>
  )
}

export default CircularProgressBar