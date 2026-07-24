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
      <section className="app-hero animate-rise rounded-2xl border border-line p-6 shadow-card lg:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="app-eyebrow">Dashboard ROAIIB</p>
            <h1 className="mt-2 font-display text-3xl font-bold lg:text-4xl">Plan de estudio de hoy</h1>
            <p className="app-muted mt-2 max-w-2xl text-sm leading-6">
              Avanza módulo, practica caso balear y guarda progreso en este dispositivo.
            </p>
          </div>
          <div className="app-soft inline-flex items-center gap-2 rounded-xl border border-line px-4 py-3">
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
        <article className="app-card animate-rise rounded-xl p-5 lg:p-6">
          <p className="app-eyebrow">Estudiar hoy</p>
          <h2 className="mt-2 font-display text-2xl font-bold">
            <span className="font-sans text-xl font-bold tracking-wide text-gold">{nextModule.code}</span>
            <span>: {nextModule.title}</span>
          </h2>
          <p className="app-muted mt-2 text-sm leading-6">{nextModule.description}</p>
          <div className="mt-5">
            <ProgressBar value={next?.masteryScore ?? 0} />
          </div>
          <Link
            href={`/modulos/${nextModule.id}`}
            className="app-button focus-ring mt-5 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
          >
            Continuar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
        <article className="app-card animate-rise rounded-xl p-5 lg:p-6">
          <h2 className="font-display text-lg font-bold">Puntos débiles</h2>
          <div className="mt-4 space-y-4">
            {weak.map((item) => {
              const courseModule = modules.find((entry) => entry.id === item.moduleId);
              if (!courseModule) return null;
              return (
                <Link
                  key={item.moduleId}
                  href={`/modulos/${item.moduleId}`}
                  className="focus-ring block rounded-lg"
                >
                  <div className="mb-1 flex justify-between text-sm">
                    <span>
                      {courseModule.code} {courseModule.title}
                    </span>
                    <span className="app-muted">{item.masteryScore}%</span>
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
    <article className="app-card-interactive animate-rise rounded-xl p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-harbor/10 text-harbor">
        <Icon className="h-5 w-5" />
      </div>
      <p className="app-muted mt-4 text-sm font-medium">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </article>
  );
}
