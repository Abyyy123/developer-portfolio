"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects } from "@/data/projects";
import { Pill } from "@/components/ui/Paper";
import { Gallery } from "@/components/ui/Gallery";
import { Modal } from "@/components/ui/Modal";
import { Mascot } from "@/components/mascot/Mascot";
import type { Project } from "@/types/portfolio";

const corner = { bl:"-bottom-5 -left-3", tr:"-top-7 right-4", br:"-bottom-5 -right-3" } as const;
// lucide-react's Github icon is marked deprecated, so use the brand logo from simple-icons instead.
function GithubIcon({ size=16 }: { size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden><path d={siGithub.path} /></svg>;
}

function Thumb({ p }: { p: Project }) {
  return (
    <div className="relative">
      {p.images?.length
        ? <div className="relative aspect-video overflow-hidden rounded-xl bg-cream/60">
            <Image src={p.images[0]} alt={`${p.title} preview`} fill sizes="400px" unoptimized className="object-cover" />
          </div>
        : <div className="grid aspect-video place-items-center rounded-xl bg-cream/60 font-hand text-lg text-ink/50">screenshot soon</div>}
      {p.badge && <span className="absolute -right-2 -top-2 -rotate-6 rounded-full border-2 border-ink bg-duck px-3 py-1 font-hand text-sm shadow-[0_2px_0_#2B2620]">{p.badge}</span>}
    </div>
  );
}

function Links({ p }: { p: Project }) {
  return (
    <div className="mt-4 flex gap-4 text-sm">
      {p.github ? <a className="flex items-center gap-1 underline" href={p.github} onClick={(e)=>e.stopPropagation()}><GithubIcon size={16}/>Code</a> : <span className="text-ink/40">Code link soon</span>}
      {p.demo && <a className="flex items-center gap-1 underline" href={p.demo} onClick={(e)=>e.stopPropagation()}><ExternalLink size={16}/>Live demo</a>}
    </div>
  );
}

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const [on,setOn] = useState(false);
  return (
    <motion.article onHoverStart={()=>setOn(true)} onHoverEnd={()=>setOn(false)} onFocus={()=>setOn(true)} onBlur={()=>setOn(false)}
      whileHover={{ y:-6, rotate:p.tilt }} transition={{ type:"spring", stiffness:200, damping:18 }} className="card relative p-4 pb-10">
      <button type="button" onClick={onOpen} className="block w-full text-left" aria-haspopup="dialog">
        <Thumb p={p} />
        <h3 className="mt-4 font-hand text-2xl">{p.title}</h3>
        <p className="mt-1 text-sm text-ink/75">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs">{p.tech.map(t=><li key={t} className="rounded-full border border-line px-3 py-0.5">{t}</li>)}</ul>
      </button>
      <Links p={p} />
      <div aria-hidden className={`pointer-events-none absolute ${corner[p.corner]}`}><Mascot pose={p.pose} variant="small" animation={on?"thinking":"idle"} /></div>
    </motion.article>
  );
}

function Detail({ p }: { p: Project }) {
  return (
    <div>
      {p.images?.length ? <Gallery images={p.images} alt={p.title} />
        : <div className="grid aspect-video place-items-center rounded-xl bg-cream/60 font-hand text-lg text-ink/50">screenshot soon</div>}
      <h3 id={`project-${p.id}`} className="mt-5 font-hand text-3xl">{p.title}</h3>
      <p className="mt-2 text-ink/80">{p.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs">{p.tech.map(t=><li key={t} className="rounded-full border border-line px-3 py-0.5">{t}</li>)}</ul>
      <Links p={p} />
    </div>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = projects.find(p => p.id === openId) ?? null;
  return (
    <section id="projects" className="section">
      <Pill>MY WORK</Pill>
      <h2 className="h-hand mb-12 mt-3">Things I&apos;ve Built</h2>
      <div className="grid gap-10 pb-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p=><Card key={p.id} p={p} onOpen={()=>setOpenId(p.id)} />)}
      </div>
      <Modal open={!!active} onClose={()=>setOpenId(null)} titleId={active ? `project-${active.id}` : ""}>
        {active && <Detail p={active} />}
      </Modal>
    </section>
  );
}