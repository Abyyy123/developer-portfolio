import { Check, Heart } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";
import { Bubble, PaperNote, Pill } from "@/components/ui/Paper";
import { DoodleUnderline } from "@/components/doodle/DoodleUnderline";
const points = ["Full-stack development","JavaScript & TypeScript","PHP, Laravel & CodeIgniter","React & Next.js", "MySQL & REST API", "Postman", "Late-night coder ♡"];
export function About() {
  return (
    <section id="about" className="section">
      <Pill>ABOUT ME</Pill>
      <h2 className="h-hand relative mt-3 inline-block">Who is Aby?<DoodleUnderline /></h2>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <p className="max-w-sm leading-8 text-ink/80">Just a developer who loves code and design. I enjoy turning messy requirements into simple, dependable systems, from recommendation engines to multi-role e-commerce platforms.</p>
        <div className="relative mx-auto">
          <Bubble className="absolute -left-4 top-0 z-10 !px-2"><Heart size={20} /></Bubble>
          <Mascot pose="hi" variant="large" animation="wave" />
        </div>
        <PaperNote className="rotate-2">
          <ul className="space-y-3 font-hand text-xl">{points.map(t=><li key={t} className="flex items-center gap-2"><Check size={16} />{t}</li>)}</ul>
        </PaperNote>
      </div>
    </section>
  );
}
