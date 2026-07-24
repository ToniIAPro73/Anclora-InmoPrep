"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { getMasteryLabel, getMasteryTone } from "@/lib/mastery";
import type { Module, UserProgress } from "@/lib/types";

export function ModuleCard({ module, progress }: { module: Module; progress?: UserProgress }) {
  const mastery = progress?.masteryScore ?? 0;
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{module.code}</p>
          <h2 className="mt-1 text-lg font-bold">{module.title}</h2>
        </div>
        <span className={`rounded-md border px-2 py-1 text-xs ${getMasteryTone(mastery)}`}>
          {getMasteryLabel(mastery)}
        </span>
      </div>
      <p className="mb-4 min-h-12 text-sm leading-6 text-slate-600">{module.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Dominio</span>
          <span>{mastery}%</span>
        </div>
        <ProgressBar value={mastery} />
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700">
          {module.difficulty}
        </span>
        <Link
          href={`/modulos/${module.id}`}
          className="focus-ring inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-3 py-2 font-semibold text-ink hover:bg-gold/20 dark:border-transparent dark:bg-white dark:text-[#090d16]"
        >
          Estudiar
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
