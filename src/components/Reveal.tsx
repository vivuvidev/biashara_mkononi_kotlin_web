import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUpVariants,
  fadeVariants,
  baseTransition,
  reducedTransition,
  viewport,
} from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className, delay }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? fadeVariants : fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        ...(prefersReducedMotion ? reducedTransition : baseTransition),
        ...(delay != null ? { delay } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
