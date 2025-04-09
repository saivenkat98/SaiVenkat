// IGNORE THIS FILE; IN PLACE FOR FUTURE UPGRADES TO THE WEBSITE

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

interface PortfolioItemProps {
  title: string;
  href: string;
  initialTransform: string;
  onHoldStart: () => void;
  onHoldEnd: () => void;
}

export default function PortfolioItem({
  title,
  href,
  initialTransform,
  onHoldStart,
  onHoldEnd,
}: PortfolioItemProps) {
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHolding = useRef(false);
  const router = useRouter();

  const handleStart = () => {
    if (isHolding.current) return;
    isHolding.current = true;

    console.log('🔴 handlePause triggered');
    onHoldStart();
    controls.start({ scale: 1.08, transition: { duration: 0.3 } });

    timeoutRef.current = setTimeout(() => {
      router.push(href);
    }, 2000);
  };

  const wt = () =>{
   
  }
  const handleEnd = () => {
    if (!isHolding.current) return;
    isHolding.current = false;

    console.log('🟢 handleResume triggered');
    onHoldEnd();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    controls.start({ scale: 1 });
  };

  return (
    <motion.div
      animate={controls}
      initial={{ transform: initialTransform }}
      className="w-full h-full box_link block cursor-pointer"
      style={{ pointerEvents: 'auto' }}
      onClick={() => window.close()}
      onPointerDown={handleStart}
      onPointerUp={handleEnd}
      onPointerLeave={handleEnd}
    >
      <span className="sr-only">{title}</span>
    </motion.div>
  );
}
