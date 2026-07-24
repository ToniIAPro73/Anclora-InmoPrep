"use client";

import Link from "next/link";
import { ArrowRight, BookMarked, Clock, Flame, Target } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { modules } from "@/data/modules";
import { formatMinutes } from "@/lib/utils";
import { useStudyStore } from "@/lib/storage";

export function DashboardPage() {
  const progress = useStudyStore((state) => state.progress);
  const streakDays = useStudyStore((state) => state.streakDays);
  const totalStudyMinutes = useStudyStore((state) => state.totalStudyMinutes);
  const globalMastery = Math.round(
    progress.reduce((sum, item) => sum + item.masteryScore, 0) / modules.length
  );
  const mastered = progress.filter((item) => item.masteryScore >= 85).length;
  const avgQuiz = Math.round(
    progress.reduce((sum, item) => sum + item.quizBestScore, 0) / modules.length
  );
  const weak = [...progress].sort((a, b) => a.masteryScore - b.masteryScore).slice(0, 3);
  const next = weak[0];
  const nextModule = modules.find((courseModule) => courseModule.id === next?.moduleId) ?? modules[0];

  return (
    <div className="space-y-6">
      <section className="rounded-md border border-line bg-white p-6 text-ink shadow-sm dark:bg-ink dark:text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-gold">Dashboard ROAIIB</p>
            <h1 className="mt-2 text-3xl font-bold">Plan de estudio de hoy</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-200">
              Avanza módulo, practica caso balear y guarda progreso en este dispositivo.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-4 py-3 dark:border-white/10 dark:bg-white/10">
            <Flame className="h-5 w-5 text-gold" />
            <span className="font-semibold">{streakDays} días de racha</span>
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Kpi icon={Target} label="Progreso global" value={`${globalMastery}%`} />
        <Kpi icon={BookMarked} label="Módulos dominados" value={`${mastered}/19`} />
        <Kpi icon={Target} label="Nota media test" value={`${avgQuiz}%`} />
        <Kpi icon={Clock} label="Tiempo estudio" value={formatMinutes(totalStudyMinutes)} />
      </section>
      <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gold">Estudiar hoy</p>
          <h2 className="mt-2 text-2xl font-bold">
            <span className="font-sans text-xl font-bold tracking-wide">{nextModule.code}</span>
            <span>: {nextModule.title}</span>
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{nextModule.description}</p>
          <div className="mt-5">
            <ProgressBar value={next?.masteryScore ?? 0} />
          </div>
          <Link
            href={`/modulos/${nextModule.id}`}
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-ink hover:bg-gold/20 dark:border-transparent dark:bg-white dark:text-[#090d16]"
          >
            Continuar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
        <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">Puntos débiles</h2>
          <div className="mt-4 space-y-4">
            {weak.map((item) => {
              const courseModule = modules.find((entry) => entry.id === item.moduleId);
              if (!courseModule) return null;
              return (
                <Link key={item.moduleId} href={`/modulos/${item.moduleId}`} className="block">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>
                      {courseModule.code} {courseModule.title}
                    </span>
                    <span>{item.masteryScore}%</span>
                  </div>
                  <ProgressBar value={item.masteryScore} />
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}

function Kpi({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <Icon className="h-5 w-5 text-harbor" />
      <p className="mt-4 text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </article>
  );
}
