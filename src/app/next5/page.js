'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const page = () => {
  const tl = useRef();
  const toogleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };
  useEffect(() =>{
  const boxes = gsap.utils.toArray('.box');
  tl.current = gsap
  .timeline()
  .to(boxes[0], {x: 100, rotation:360})
  .to(boxes[1], {x: -100, rotation: -360}, '<')
  .to(boxes[2], {y: 200})
  }, [])

  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col gap-4'>
      <div>
        <button className='bg-[#E4D0D0] w-40 h-12' onClick={toogleTimeline}>Timeline</button>
      </div>
      <div className='box w-24 h-24 bg-gradient-to-r from-[#867070] to-[#D5B4B4] rounded-lg' />
      <div className='box w-24 h-24 bg-gradient-to-r from-[#867070] to-[#D5B4B4] rounded-lg' />
      <div className='box w-24 h-24 bg-gradient-to-r from-[#867070] to-[#D5B4B4] rounded-lg' />
    </div>
  )
}

export default page