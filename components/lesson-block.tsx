"use client";

import { Check, Lightbulb, MapPinned, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useStudyStore } from "@/lib/storage";
import type { Lesson } from "@/lib/types";

export function LessonBlock({ lesson }: { lesson: Lesson }) {
  const [easy, setEasy] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const markLesson = useStudyStore((state) => state.markLesson);
  const progress = useStudyStore((state) =>
    state.progress.find((item) => item.moduleId === lesson.moduleId)
  );
  const completed = progress?.completedLessonIds.includes(lesson.id) ?? false;

  return (
    <section className="space-y-5 rounded-md border border-slate-200 bg-white p-5">
      <div>
        <p className="text-xs font-semibold uppercase text-gold">Lección {lesson.order}</p>
        <h2 className="mt-1 text-2xl font-bold">{lesson.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{lesson.summary}</p>
      </div>
      <div className="space-y-3 text-sm leading-7 text-slate-800">
        {lesson.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h3 key={`${line}-${index}`} className="pt-2 text-base font-bold text-ink">
                {line.replace("## ", "")}
              </h3>
            );
          }
          if (!line.trim()) return null;
          return <p key={`${line}-${index}`}>{line}</p>;
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
          onClick={() => setEasy((value) => !value)}
        >
          <Lightbulb className="h-4 w-4" />
          Explícamelo fácil
        </button>
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium"
          onClick={() => setCaseOpen((value) => !value)}
        >
          <MapPinned className="h-4 w-4" />
          Caso Baleares
        </button>
      </div>
      {easy ? (
        <div className="rounded-md border border-emerald/30 bg-emerald/10 p-4 text-sm leading-6">
          {lesson.easyExplanation}
        </div>
      ) : null}
      {caseOpen ? (
        <div className="rounded-md border border-gold/30 bg-gold/10 p-4 text-sm leading-6">
          {lesson.balearExample}
        </div>
      ) : null}
      <div className="rounded-md border border-red-200 bg-red-50 p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-red-800">
          <TriangleAlert className="h-4 w-4" />
          Errores frecuentes
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-900">
          {lesson.frequentErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      <button
        className="focus-ring inline-flex items-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-ink hover:bg-gold/20 disabled:border-emerald disabled:bg-emerald/15 dark:border-transparent dark:bg-white dark:text-[#090d16] dark:disabled:bg-emerald"
        disabled={completed}
        onClick={() => markLesson(lesson.moduleId, lesson.id)}
      >
        <Check className="h-4 w-4" />
        {completed ? "Lección comprendida" : "Marcar lección como comprendida"}
      </button>
    </section>
  );
}
