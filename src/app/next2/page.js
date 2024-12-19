'use client'

import Button from '@/components/Button';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

const Page = () => {
  const windmillRef = useRef(null);

  useEffect(() => {
    console.log("Component mounted");
    
    // DOM이 완전히 로드된 후에 실행
    const element = windmillRef.current;
    if (!element) {
      console.error("Element not found");
      return;
    }

    // 기본 애니메이션 설정
    const animation = gsap.to(element, {
      rotation: 360,
      duration: 3.6,
      repeat: -1,
      ease: "none",
    });

    // Reduced Motion 체크
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateDuration = (reduced) => {
      animation.duration(reduced ? 7.2 : 3.6);
    };

    // 초기 상태 체크
    updateDuration(prefersReducedMotion.matches);
    console.log("Initial reduced motion:", prefersReducedMotion.matches);

    // 설정 변경 감지
    prefersReducedMotion.addEventListener('change', (e) => {
      console.log("Preference changed:", e.matches);
      updateDuration(e.matches);
    });

    return () => {
      animation.kill();
      // 이벤트 리스너 제거
      prefersReducedMotion.removeEventListener('change', updateDuration);
    };
  }, []);

  return (
    <>
    <div 
      ref={windmillRef}
      className='windmill w-11 h-11 bg-emerald-200 mt-4 ml-4'
    ></div>
    <Link href='/next3'>
      <Button>next</Button>
    </Link>
    </>
  )
}

export default Page