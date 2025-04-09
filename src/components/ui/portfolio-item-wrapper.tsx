// IGNORE THIS FILE; IN PLACE FOR FUTURE UPGRADES TO THE WEBSITE

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PortfolioItem from './portfolio-item';

interface PortfolioItemWrapperProps {
  index: number;
  title: string;
  href: string;
  initialTransform: string;
}

export default function PortfolioItemWrapper({
  index,
  title,
  href,
  initialTransform,
}: PortfolioItemWrapperProps) {
  const controls = useAnimation();
  const animationRunning = useRef(true);
  const variableSpeed = index;
  // const duration = 50;
  const duration = 7 + Math.random() * variableSpeed;

  useEffect(() => {
    const animate = async () => {
      while (true) {
        if (animationRunning.current) {
          await controls.set({ top: '-50vh' });
          await controls.start({
            top: '120vh',
            transition: {
              duration,
              ease: 'linear',
            },
          });
        } else {
          await new Promise((res) => setTimeout(res, 100));
        }
      }
    };
    animate();
  }, []);

  const handlePause = () => {
    console.log('did you pause?')
    animationRunning.current = false;
    controls.stop();
  };

  const handleResume = () => {
    console.log('did you resume?')
    animationRunning.current = true;
  };

  return (
    <motion.div
      className={`box is--${index}`}
      animate={controls}
      initial={{ top: '-50vh' }}
    >
      <PortfolioItem
        title={title}
        href={href}
        onHoldStart={handlePause}
        onHoldEnd={handleResume}
        initialTransform={initialTransform}
      />
    </motion.div>
  );
}
