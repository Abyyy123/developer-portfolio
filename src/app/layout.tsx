import type { Metadata } from "next";
import { Nunito, Patrick_Hand } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";
const sans = Nunito({ subsets:["latin"], variable:"--font-sans" });
const hand = Patrick_Hand({ subsets:["latin"], weight:"400", variable:"--font-hand" });
export const metadata: Metadata = { title:"Aby — Full-Stack Developer", description:"Portfolio of Aby, a full-stack developer building thoughtful web experiences." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${sans.variable} ${hand.variable}`}><body className="font-sans antialiased"><Providers>{children}</Providers></body></html>);
}
