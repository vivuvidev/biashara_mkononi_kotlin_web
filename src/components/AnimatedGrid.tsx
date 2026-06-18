import { Children, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  staggerContainerVariants,
  reducedStaggerContainerVariants,
  staggerItemVariants,
  reducedStaggerItemVariants,
  viewport,
} from "@/lib/motion";

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGrid({ children, className }: AnimatedGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? reducedStaggerContainerVariants : staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={prefersReducedMotion ? reducedStaggerItemVariants : staggerItemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
