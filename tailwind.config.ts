import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { paper: "#FFFAEE", ink: "#2B2620", duck: "#FFD54A", cream: "#FCEFC0", line: "#EBD98F", pen: "#3B5BDB" },
    fontFamily: { sans: ["var(--font-sans)"], hand: ["var(--font-hand)"] },
  } },
} satisfies Config;
