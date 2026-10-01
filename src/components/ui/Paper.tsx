import type { ReactNode } from "react";
export const Pill = ({ children }: { children: ReactNode }) => <span className="inline-block rounded-full bg-duck px-3 py-1 text-xs font-bold">{children}</span>;
export const Bubble = ({ children, className="" }: { children: ReactNode; className?: string }) =>
  <span className={`inline-block rounded-2xl border-2 border-ink bg-white/70 px-4 py-1 font-hand text-lg ${className}`}>{children}</span>;
/** Taped sheet of paper. Pass a rotate-* class for the tilt. */
export function PaperNote({ children, className="", tone="white" }: { children: ReactNode; className?: string; tone?: "white"|"yellow" }) {
  return (
    <div className={`relative rounded-2xl border-2 border-line p-6 shadow-[0_6px_0_rgba(235,217,143,.6)] ${tone==="yellow"?"bg-cream":"bg-white"} ${className}`}>
      <span aria-hidden className="absolute -top-3 left-8 h-6 w-20 -rotate-3 bg-duck/50" />{children}
    </div>
  );
}
