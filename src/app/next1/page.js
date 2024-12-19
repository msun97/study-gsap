"use client"

import Button from '@/components/Button';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() => {
  const tl = gsap.timeline({pause: true});
  tl.to(".scrubber", {x:500, duration:2})
    .to(".mask", {scaleX: 0.5, duration:2}, "<")
    .to(".text1", {autoAlpha: 1, scale: 1}, "-=0.2")

  tl.play();
  },[]);

  return (
    <>
      <div className="scrubber w-11 h-11 bg-black mt-4 ml-4"></div>
      <div className="mask w-96 h-96 bg-blue-50"></div>
      <div className="text1 text-center opacity-0 text-cyan-400 font-bold text-6xl">gsap 타임라인 예제</div>
      <Link href="/next2">
        <Button>next</Button>
      </Link>
    </>
  )
}

export default page