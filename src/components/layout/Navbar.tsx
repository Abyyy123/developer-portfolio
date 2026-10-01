"use client";
import { useState } from "react";
import { Ghost, Menu, X } from "lucide-react";
import { nav } from "@/data/profile";
export function Navbar() {
  const [open,setOpen] = useState(false);
  const a = "block py-3 text-xl capitalize md:py-0 md:text-base hover:underline decoration-duck decoration-4 underline-offset-4";
  return (
    <header className="sticky top-0 z-40 bg-paper/95 font-hand">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-2xl"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-duck"><Ghost size={20} aria-hidden /></span>nexo</a>
        <ul id="menu" className={`${open?"grid":"hidden"} absolute inset-x-0 top-full border-b-2 border-line bg-paper px-5 pb-3 md:static md:flex md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
          {nav.map(n=><li key={n}><a className={a} href={n==="home"?"#top":`#${n}`} onClick={()=>setOpen(false)}>{n}</a></li>)}
        </ul>
        <a href="#contact" className="relative mr-6 hidden rounded-xl border-2 border-ink px-4 py-1.5 md:block">Let&apos;s Talk
          <Ghost aria-hidden size={22} className="absolute -right-7 -top-4 rotate-12" /></a>
        <button className="grid h-11 w-11 place-items-center md:hidden" aria-expanded={open} aria-controls="menu" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X />:<Menu />}</button>
      </nav>
    </header>
  );
}
