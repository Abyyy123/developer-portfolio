import type { Pose } from "@/lib/config";
export interface Skill { name:string; icon?:{ path:string; hex:string }; fallback?:"java"|"api" }
export interface Project { id:string; title:string; description:string; tech:string[]; images?:string[]; github?:string; demo?:string; tilt:number; pose:Pose; corner:"bl"|"tr"|"br"; note:string; badge?:string }
export interface Profile { name:string; role:string; email:string; cvUrl?:string; links:{label:string;href:string}[] }