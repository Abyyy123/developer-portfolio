import { Coffee, Webhook } from "lucide-react";
import { skills } from "@/data/skills";
import type { Skill } from "@/types/portfolio";
import { Mascot } from "@/components/mascot/Mascot";
import { PaperNote, Pill } from "@/components/ui/Paper";
function Logo({ s }: { s: Skill }) {
  if (s.icon) return <svg viewBox="0 0 24 24" role="img" aria-label={`${s.name} logo`} className="h-7 w-7" fill={`#${s.icon.hex}`}><path d={s.icon.path} /></svg>;
  return s.fallback==="java" ? <Coffee aria-label="Java logo" size={26} color="#ED8B00" /> : <Webhook aria-label="REST API icon" size={26} />;
}
export function Skills() {
  return (
    <section id="skills" className="section">
      <Pill>MY TOOLBOX</Pill>
      <PaperNote tone="yellow" className="-rotate-1 mt-6 max-w-2xl">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2><span className="block font-hand text-xl">Built with love using</span><span className="mark font-hand text-5xl">Next.js</span></h2>
          <Mascot pose="research" variant="large" animation="thinking" />
        </div>
      </PaperNote>
      <ul className="card mt-10 grid grid-cols-3 gap-6 p-6 text-center sm:grid-cols-4 lg:grid-cols-6">
        {skills.map((s,i)=>(<li key={s.name} className="flex flex-col items-center gap-2">
          <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-white shadow-[0_3px_0_#EBD98F] transition-transform motion-safe:hover:-translate-y-1" style={{ rotate:`${(i%3-1)*4}deg` }}><Logo s={s} /></span>
          <span className="text-sm font-semibold">{s.name}</span></li>))}
      </ul>
    </section>
  );
}
