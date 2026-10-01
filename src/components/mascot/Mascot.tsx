"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { POSES, type Pose } from "@/lib/config";
import { duckAnimations, type MascotAnimation } from "./mascot-animations";

const sizes = { hero:"w-48 min-[380px]:w-56 sm:w-72 lg:w-96", large:"w-36 sm:w-52", medium:"w-32 sm:w-40", compact:"w-24", small:"w-16", tiny:"w-10", fill:"w-full" } as const;
interface Props { pose?:Pose; variant?:keyof typeof sizes; animation?:MascotAnimation; className?:string }

export function Mascot({ pose="hi", variant="medium", animation="idle", className="" }: Props) {
  const [missing,setMissing] = useState(false);
  return (
    <motion.div animate={duckAnimations[animation]} className={`${sizes[variant]} aspect-square shrink-0 ${className}`}>
      {missing ? (
        <div role="img" aria-label="Mascot placeholder" className="grid h-full w-full place-items-center rounded-full border-2 border-dashed border-ink/40 p-2 text-center font-hand text-sm leading-tight">
          add {POSES[pose]}
        </div>
      ) : (
        <Image src={POSES[pose]} alt="Nexo, the ghost mascot" width={600} height={600} priority={variant==="hero"} unoptimized
          className="h-full w-full object-contain" onError={()=>setMissing(true)} />
      )}
    </motion.div>
  );
}
