"use client";
import { motion } from "framer-motion";
import { draw, viewOnce } from "@/lib/animations";
export function DoodleUnderline({ className="text-duck" }: { className?:string }) {
  return (<motion.svg aria-hidden viewBox="0 0 200 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
    className={`absolute -bottom-2 left-0 h-3 w-full ${className}`} initial="hidden" whileInView="show" viewport={viewOnce}>
    <motion.path variants={draw} d="M3 8C50 2 120 10 197 4" /></motion.svg>);
}
