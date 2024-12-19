'use client'
import Button from '@/components/Button';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

const page = () => {
  const snapY = 10;
  useEffect(() => {
  gsap.registerPlugin(Draggable);
  Draggable.create("#element", {
    type: 'y',
    bounds: "#container",
    inertia: true,
    snap: {
      y: function (value) {
        return Math.round(value / snapY) * snapY;
      }
    }
  })
  }, [])
  return (
    <>
      <div id="container" className='bg-green-50 w-96 h-96'>
        <Image id='element' src='/images/dragable.png' width={100} height={100} alt='bubble' />
        이 비누방울을 드래그 해보실래요?
      </div>
      <Link href='/next5'>
        <Button>next</Button>
      </Link>
    </>
  )
}

export default page