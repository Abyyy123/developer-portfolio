"use client";
import { motion } from "framer-motion";
import { draw, viewOnce } from "@/lib/animations";
export function DoodleArrow({ className="" }: { className?:string }) {
  return (
    <motion.svg aria-hidden viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      className={className} initial="hidden" whileInView="show" viewport={viewOnce}>
      <motion.path variants={draw} d="M4 8C30 4 60 14 82 46" />
      <motion.path variants={draw} d="M66 44L83 48L86 30" />
    </motion.svg>
  );
}
