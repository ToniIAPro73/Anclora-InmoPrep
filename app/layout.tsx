import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { Providers } from "@/components/providers";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});
const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Anclora InmoPrep Balears",
  description: "Preparación ROAIIB 2026 offline-first para agentes inmobiliarios en Illes Balears."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
try {
  var params = new URLSearchParams(window.location.search);
  var requested = params.get("theme");
  var saved = window.localStorage.getItem("anclora-inmoprep-theme");
  var prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var dark = requested ? requested === "dark" : saved ? saved === "dark" : prefers;
  document.documentElement.classList.toggle("dark", dark);
} catch (_) {}
`
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} font-sans`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
