"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { getMasteryLabel, getMasteryTone } from "@/lib/mastery";
import type { Module, UserProgress } from "@/lib/types";

export function ModuleCard({ module, progress }: { module: Module; progress?: UserProgress }) {
  const mastery = progress?.masteryScore ?? 0;
  return (
    <article className="app-card rounded-md p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{module.code}</p>
          <h2 className="mt-1 text-lg font-bold">{module.title}</h2>
        </div>
        <span className={`rounded-md border px-2 py-1 text-xs ${getMasteryTone(mastery)}`}>
          {getMasteryLabel(mastery)}
        </span>
      </div>
      <p className="app-muted mb-4 min-h-12 text-sm leading-6">{module.description}</p>
      <div className="space-y-2">
        <div className="app-muted flex justify-between text-xs">
          <span>Dominio</span>
          <span>{mastery}%</span>
        </div>
        <ProgressBar value={mastery} />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="app-soft rounded-md px-2 py-1">
          {module.difficulty}
        </span>
        <Link
          href={`/modulos/${module.id}`}
          className="app-button focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2"
        >
          Estudiar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
