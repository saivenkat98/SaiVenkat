// IGNORE THIS FILE; IN PLACE FOR FUTURE UPGRADES TO THE WEBSITE

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

interface BubbleItemProps {
  index: number;
  title: string;
  href: string;
  initialTransform: string;
}

export default function BubbleItem({ index, title, href, initialTransform }: BubbleItemProps) {
  const wrapperControls = useAnimation();
  const scaleControls = useAnimation();
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoldingRef = useRef(false);
  const wrapperClass = `box is--${index}`;
  const router = useRouter();
  const holdDuration = 2000; // 2 seconds

  // Function to start the floating animation
  const startFloatingAnimation = async () => {
    await wrapperControls.set({ y: '100vh' });
    while (!isHoldingRef.current) {
      await wrapperControls.start({
        y: '-100vh',
        transition: { duration: 10, ease: 'linear' },
      });
      await wrapperControls.set({ y: '100vh' });
    }
  };

  useEffect(() => {
    startFloatingAnimation();

    return () => {
      if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    };
  }, []);

  const handleHoldStart = () => {
    console.log('Hold started');

    isHoldingRef.current = true;
    wrapperControls.stop(); // Pause the floating animation
    scaleControls.start({ scale: 1.1, transition: { duration: 0.3 } }); // Provide visual feedback

    holdTimeoutRef.current = setTimeout(() => {
        requestAnimationFrame(() => {
          console.log('Navigating to:', href);
          router.push(href);
        });
      }, holdDuration);
  };

  const handleHoldEnd = () => {
    isHoldingRef.current = false;
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    scaleControls.start({ scale: 1, transition: { duration: 0.2 } }); // Revert visual feedback
    startFloatingAnimation(); // Resume floating animation
  };

  return (
    <motion.div
      className={wrapperClass}
      animate={wrapperControls}
      initial={{ y: '100vh' }}
    >
      <motion.div
        animate={scaleControls}
        initial={{ transform: initialTransform }}
        onMouseDown={handleHoldStart}
        onTouchStart={handleHoldStart}
        onMouseUp={handleHoldEnd}
        onTouchEnd={handleHoldEnd}
        onMouseLeave={handleHoldEnd}
        className="w-full h-full cursor-pointer"
      >
        <span className="sr-only">{title}</span>
      </motion.div>
    </motion.div>
  );
}