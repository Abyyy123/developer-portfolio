import { siPhp, siLaravel, siCodeigniter, siReact, siNextdotjs, siTypescript, siJavascript, siMysql, siPostgresql, siGit, siPostman } from "simple-icons";
import type { Skill } from "@/types/portfolio";
// Brand logos come from the simple-icons package; Java and REST API use icon fallbacks (no brand glyph).
export const skills: Skill[] = [
  { name:"PHP", icon:siPhp }, { name:"Laravel", icon:siLaravel }, { name:"CodeIgniter", icon:siCodeigniter },
  { name:"React", icon:siReact }, { name:"Next.js", icon:siNextdotjs }, { name:"TypeScript", icon:siTypescript },
  { name:"JavaScript", icon:siJavascript }, { name:"Java", fallback:"java" }, { name:"MySQL", icon:siMysql },
  { name:"Postman", icon:siPostman }, { name:"Git", icon:siGit }, { name:"REST API", fallback:"api" },
];
export const journey = [
 {year:"2024",label:"Started building real projects"},
 {year:"Projects",label:"Shipped full-stack systems"},
 {year:"Experiments",label:"Tried things just to see"},
 {year:"Portfolio",label:"This sketchbook"},
 {year:"Now",label:"Open to new work"}];
