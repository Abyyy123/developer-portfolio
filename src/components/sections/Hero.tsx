import { Download, Heart } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";
import { Bubble } from "@/components/ui/Paper";
import { DoodleArrow } from "@/components/doodle/DoodleArrow";
import { DoodleStar } from "@/components/doodle/DoodleStar";
import { ParallaxDoodle } from "@/components/doodle/ParallaxDoodle";
import { profile } from "@/data/profile";
export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-10 sm:px-8 md:grid-cols-2 md:pt-16">
      <div>
        <Bubble>👋 hi there!</Bubble>
        <h1 className="mt-6 font-hand text-5xl leading-tight sm:text-6xl">Hi, I&apos;m <span className="mark">Aby adinthya</span></h1>
        <p className="mt-3 font-hand text-3xl">Full-Stack Developer</p>
        <p className="mt-4 max-w-md text-lg text-ink/80">I create modern web applications with a focus on clean interfaces, functional systems, and enjoyable user experiences.</p>
        <div className="mt-8 flex flex-wrap gap-3 font-hand text-lg">
          <a href="#projects" className="rounded-xl border-2 border-ink bg-duck px-6 py-2.5 shadow-[0_3px_0_#2B2620]">View Projects</a>
          {profile.cvUrl && <a href={profile.cvUrl} download className="flex items-center gap-2 rounded-xl border-2 border-ink px-6 py-2.5">Download CV <Download size={16} /></a>}
        </div>
      </div>
      <div className="relative mx-auto pt-8">
        <ParallaxDoodle depth={14} className="absolute left-2 top-10"><DoodleStar className="h-8 w-8 text-duck" /></ParallaxDoodle>
        <ParallaxDoodle depth={20} className="absolute right-2 top-1/2"><Heart className="h-6 w-6" /></ParallaxDoodle>
        <p className="absolute right-0 top-0 -rotate-6 font-hand text-xl leading-tight sm:text-2xl">making ideas<br />come to life</p>
        <Mascot pose="code" variant="hero" animation="idle" />
        <DoodleArrow className="absolute -left-2 bottom-10 hidden h-12 w-16 -scale-x-100 sm:block" />
      </div>
    </section>
  );
}
