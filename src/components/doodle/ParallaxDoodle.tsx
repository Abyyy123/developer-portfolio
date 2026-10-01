"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
/** Nudges its children slightly toward the cursor. Disabled with reduced motion. */
export function ParallaxDoodle({ children, depth=12, className="" }: { children:React.ReactNode; depth?:number; className?:string }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0), my = useMotionValue(0);
  const x = useSpring(mx,{stiffness:80,damping:15}), y = useSpring(my,{stiffness:80,damping:15});
  useEffect(()=>{
    if (reduce) return;
    const h = (e:PointerEvent)=>{ mx.set((e.clientX/innerWidth-.5)*depth*2); my.set((e.clientY/innerHeight-.5)*depth*2); };
    addEventListener("pointermove",h);
    return ()=>removeEventListener("pointermove",h);
  },[reduce,depth,mx,my]);
  return <motion.div style={{x,y}} className={className}>{children}</motion.div>;
}
