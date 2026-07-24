"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { getMasteryLabel, getMasteryTone } from "@/lib/mastery";
import type { Module, UserProgress } from "@/lib/types";

const difficultyLabel: Record<Module["difficulty"], string> = {
  basic: "Básico",
  medium: "Intermedio",
  advanced: "Avanzado"
};

const difficultyTone: Record<Module["difficulty"], string> = {
  basic: "border-emerald/30 bg-emerald/10 text-emerald",
  medium: "border-gold/35 bg-gold/10 text-gold",
  advanced: "border-harbor/35 bg-harbor/10 text-harbor"
};

export function ModuleCard({ module, progress }: { module: Module; progress?: UserProgress }) {
  const mastery = progress?.masteryScore ?? 0;
  return (
    <article className="app-card-interactive animate-rise flex h-full flex-col rounded-xl p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="app-eyebrow">{module.code}</p>
          <h2 className="mt-1 font-display text-lg font-bold leading-snug">{module.title}</h2>
        </div>
        <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${getMasteryTone(mastery)}`}>
          {getMasteryLabel(mastery)}
        </span>
      </div>
      <p className="app-muted mb-4 min-h-12 flex-1 text-sm leading-6">{module.description}</p>
      <div className="space-y-2">
        <div className="app-muted flex justify-between text-xs font-medium">
          <span>Dominio</span>
          <span>{mastery}%</span>
        </div>
        <ProgressBar value={mastery} />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${difficultyTone[module.difficulty]}`}>
          {difficultyLabel[module.difficulty]}
        </span>
        <Link
          href={`/modulos/${module.id}`}
          className="app-button focus-ring inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
        >
          Estudiar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
