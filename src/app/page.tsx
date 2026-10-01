import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WaveDivider } from "@/components/doodle/WaveDivider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Bio } from "@/components/sections/Bio";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
export default function Page() {
  return (<><Navbar /><main><Hero /><WaveDivider /><About /><Projects /><Skills /><Bio /><Journey /><Contact /></main><Footer /></>);
}
