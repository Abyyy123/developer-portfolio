import type { TargetAndTransition } from "framer-motion";
export type MascotAnimation = "idle"|"wave"|"walk"|"jump"|"excited"|"thinking"|"sleep";
const loop = (d:number)=>({duration:d,repeat:Infinity,ease:"easeInOut" as const});
export const duckAnimations: Record<MascotAnimation,TargetAndTransition> = {
  idle:{y:[0,-6,0],transition:loop(3.2)},
  wave:{rotate:[0,-6,6,-6,0],transition:loop(1.6)},
  walk:{y:[0,-4,0],rotate:[-2,2,-2],transition:loop(.7)},
  jump:{y:[0,-22,0],transition:loop(.9)},
  excited:{scale:[1,1.06,1],rotate:[-3,3,-3],transition:loop(.6)},
  thinking:{rotate:[0,4,0],transition:loop(2.4)},
  sleep:{scale:[1,1.03,1],transition:loop(4)},
};
