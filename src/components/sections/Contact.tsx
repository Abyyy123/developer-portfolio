import { Mail, Linkedin, Instagram, Heart } from "lucide-react";
import { siGithub } from "simple-icons";
import { profile } from "@/data/profile";
import { Mascot } from "@/components/mascot/Mascot";
import { Bubble, Pill } from "@/components/ui/Paper";
import { DoodleStar } from "@/components/doodle/DoodleStar";
// lucide-react's Github icon is marked deprecated, so use the brand logo from simple-icons instead.
function GithubIcon({ size=20 }: { size?: number }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden><path d={siGithub.path} /></svg>;
}
// Add more labels here (matching profile.ts) to support other social icons.
const socialIcons: Record<string, (size: number) => React.ReactNode> = {
  GitHub: (size) => <GithubIcon size={size} />,
  LinkedIn: (size) => <Linkedin size={size} />,
  Instagram: (size) => <Instagram size={size} />,
};
export function Contact() {
  return (
    <section id="contact" className="section grid items-center gap-10 md:grid-cols-2">
      <div>
        <Pill>LET&apos;S CONNECT</Pill>
        <h2 className="h-hand mt-3">Let&apos;s create something awesome together!</h2>
        <p className="mt-4 text-ink/80">I&apos;m open to new opportunities and exciting projects.</p>
        <a href={`mailto:${profile.email}`} className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-ink px-4 py-2"><Mail size={18} />{profile.email}</a>
        <ul className="mt-6 flex gap-3">{profile.links.map(l=>(
          <li key={l.label}><a href={l.href} aria-label={l.label} className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink">{(socialIcons[l.label] ?? socialIcons.LinkedIn)(20)}</a></li>))}</ul>
      </div>
      <div className="relative mx-auto pt-10">
        <Bubble className="absolute right-0 top-0 z-10 -rotate-3">Feel free to say hi! 👋</Bubble>
        <DoodleStar className="absolute left-0 top-12 h-7 w-7 text-duck" />
        <Heart aria-hidden className="absolute -right-2 bottom-16 h-5 w-5" />
        <Mascot pose="debug" variant="large" animation="idle" />
      </div>
    </section>
  );
}