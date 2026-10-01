import { Heart } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";
import { PaperNote } from "@/components/ui/Paper";
export function Bio() {
  return (
    <section className="section" aria-labelledby="bio-title">
      <PaperNote tone="yellow" className="grid items-center gap-8 p-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 id="bio-title" className="flex items-center gap-2 font-hand text-3xl">A little bit about me <Heart size={22} /></h2>
          <p className="mt-4 max-w-md leading-8 text-ink/80">I&apos;m a full stack developer who enjoys building usefull, well crafted web applications. I work across both frontend and backend, turning ideas into functional and user-friendly digital experiences.</p>
        </div>
        <div className="mx-auto w-44 rotate-3 bg-white p-3 pb-8 shadow-md sm:w-52"><div className="bg-cream/50"><Mascot pose="coffee" variant="fill" animation="idle" /></div></div>
      </PaperNote>
    </section>
  );
}
