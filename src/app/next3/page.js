'use client'

import Button from '@/components/Button'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() =>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
      scrub: 1,
      scrollTrigger: '.scrollTrigger',
      start: "top 90%",
      end: "bottom 10%",
      markers: true,
      },
    })
    tl.to(".box", {x:500, duration: 2} )
      .to(".box", {rotation: 360, duration:2})

    const tl2 = gsap.timeline({
      scrollTrigger: {
      scrub: 1,
      scrollTrigger: '.scrollTrigger2',
      start: "top 90%",
      end: "bottom 10%",
      markers: true,
      },
    })
    tl2.to("#heart-png", {
      scale: 2,
      duration: 2
      });
  },[])


  return (
    <div>
      <div className=" bg-fuchsia-900 w-screen h-screen text-white p-4 text-2xl">
        scroll trigger 예시<p/><p/>  
        스크롤을 내려보세요!!
      </div>
      <div className="scrollTrigger w-screen h-screen bg-green-400 rounded-full mx-auto mt-16">
        <div className="box w-11 h-11 bg-gray-300"></div>
      </div>
      <div className='scrollTrigger2 flex justify-center items-center w-screen h-screen bg-fuchsia-100 relative'>
        <Image id='heart-png' className='mt-' src='/images/scrolltrigger.png' alt='heart' width={100} height={100}></Image>
      </div>
      <Link className='fixed top-4 left-4' href="/next4">
        <Button>next</Button>
      </Link>
    </div>
  )
}

export default page