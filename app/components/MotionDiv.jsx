'use client';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

export const defaultTransition = {
  duration: 0.5,
  ease: [0.21, 1.11, 0.81, 0.99]
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const MotionDivBase = motion.div;

export const MotionDiv = (props) => (
  <LazyMotion features={domAnimation}>
    <MotionDivBase {...props} />
  </LazyMotion>
);