"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Dumbbell,
  Gauge,
  GraduationCap,
  Library,
  Menu,
  RotateCcw
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/modulos", label: "Módulos", icon: BookOpen },
  { href: "/ejercicios", label: "Ejercicios", icon: Dumbbell },
  { href: "/simulacro", label: "Simulacro", icon: GraduationCap },
  { href: "/glosario", label: "Glosario", icon: Library },
  { href: "/estadisticas", label: "Estadísticas", icon: BarChart3 }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <aside
        className={cn(
          "app-sidebar fixed inset-y-0 left-0 z-40 w-72 border-r px-4 py-5 shadow-soft transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#172033] text-[#fffdf8]">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-gold">Anclora</p>
            <h1 className="text-lg font-bold leading-tight">InmoPrep Balears</h1>
          </div>
        </div>
        <nav className="space-y-1">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  active
                    ? "app-nav-active"
                    : "app-nav-link"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="app-warning mt-8 rounded-md p-3 text-xs leading-5">
          Contenido educativo mock. Verifica normas 2026 con fuentes oficiales antes de uso profesional.
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="app-topbar sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4 backdrop-blur lg:px-8">
          <button
            className="app-control focus-ring rounded-md p-2 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir navegación"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="app-muted hidden text-sm lg:block">
            Preparación autónoma ROAIIB 2026
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/estadisticas"
              className="app-control focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
            >
              <RotateCcw className="h-4 w-4" />
              Repasos
            </Link>
          </div>
        </header>
        <main className="px-4 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
