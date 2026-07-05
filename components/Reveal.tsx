"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
}

export default function Reveal({ children, width = "100%", className = "" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
