"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const boxRef = useRef();

  useGSAP (() => {
    gsap.to(boxRef.current,
      { duration: 5,
        x: 200,
        ease: "elastic.inOut",
        repeat: -1
      }
    )
  })
  return (
    <>
    <div className='bg-slate-500 w-11 h-11 mt-4 ml-4' ref={boxRef}>
    </div>
    <Link href='/next1'>
      <button className="bg-amber-950 text-white w-28 h-11 mt-10 ml-10 rounded-2xl">next</button>
    </Link>
    </>
  );
}
