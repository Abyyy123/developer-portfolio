import Link from "next/link";
import { Mascot } from "@/components/mascot/Mascot";
export default function NotFound() {
  return (<main className="grid min-h-svh place-items-center px-5 text-center"><div>
    <Mascot pose="error" variant="large" animation="excited" className="mx-auto" />
    <h1 className="mt-4 font-hand text-4xl">404: this page glitched</h1>
    <Link href="/" className="mt-6 inline-block rounded-xl border-2 border-ink bg-duck px-6 py-2 font-hand text-lg">Back home</Link>
  </div></main>);
}
