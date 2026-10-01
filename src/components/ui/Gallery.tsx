"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Simple image gallery for the project detail modal.
 * Uses a plain <img> with object-contain (not next/image "fill") so tall or
 * wide screenshots are shown in full rather than being cropped to a fixed ratio.
 */
export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((n) => (n + d + images.length) % images.length);

  return (
    <div className="relative flex max-h-[60vh] items-center justify-center overflow-hidden rounded-xl bg-cream/60">
      {/* eslint-disable-next-line @next/next/no-img-element -- intentional: variable aspect ratios, shown via object-contain */}
      <img src={images[i]} alt={`${alt} screenshot ${i + 1} of ${images.length}`} className="max-h-[60vh] w-full object-contain" />
      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)}
            className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white/90">
            <ChevronLeft size={16} />
          </button>
          <button type="button" aria-label="Next screenshot" onClick={() => go(1)}
            className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white/90">
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, d) => (
              <button key={d} type="button" aria-label={`Go to screenshot ${d + 1}`} onClick={() => setI(d)}
                className={`h-2 w-2 rounded-full border border-ink ${d === i ? "bg-ink" : "bg-white/70"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}