"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { journey } from "@/data/skills";
import { Mascot } from "@/components/mascot/Mascot";
const PATH = "M10 0C2 6 18 12 10 18S2 30 10 36S18 48 10 54S2 66 10 72S18 86 10 100";
export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target:ref, offset:["start 70%","end 60%"] });
  const top = useTransform(scrollYProgress,[0,1],["0%","100%"]);
  return (
    <section id="journey" className="section">
      <h2 className="h-hand mb-12">The Journey</h2>
      <div ref={ref} className="relative ml-2 sm:ml-10">
        <svg aria-hidden viewBox="0 0 20 100" preserveAspectRatio="none" fill="none" strokeLinecap="round" className="absolute left-0 top-0 h-full w-5">
          <path d={PATH} stroke="rgba(29,26,22,.25)" strokeWidth="2" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
          <motion.path d={PATH} stroke="#1D1A16" strokeWidth="2.5" vectorEffect="non-scaling-stroke" style={{ pathLength: scrollYProgress }} />
        </svg>
        <motion.div style={{ top }} className="absolute -left-6 z-10 -translate-y-1/2" aria-hidden><Mascot pose="late-night" variant="small" animation="walk" /></motion.div>
        <ol className="space-y-12 pl-12">
          {journey.map(j=>(<li key={j.year}><p className="font-hand text-3xl">{j.year}</p><p className="text-ink/80">{j.label}</p></li>))}
        </ol>
      </div>
    </section>
  );
}
