import { ArrowUp } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";
export function Footer() {
  return (<footer className="bg-duck/40"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 text-sm sm:px-8">
    <span className="flex items-center gap-2"><Mascot pose="sleep" variant="tiny" />© 2026 Aby. Built with Next.js and lots of ☕ · boo.</span>
    <a href="#top" aria-label="Back to top" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-ink"><ArrowUp size={18} /></a>
  </div></footer>);
}