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
    <section className="app-card space-y-5 rounded-md p-5">
      <div>
        <p className="text-xs font-semibold uppercase text-gold">Lección {lesson.order}</p>
        <h2 className="mt-1 text-2xl font-bold">{lesson.title}</h2>
        <p className="app-muted mt-2 text-sm leading-6">{lesson.summary}</p>
      </div>
      <div className="space-y-3 text-sm leading-7">
        {lesson.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h3 key={`${line}-${index}`} className="pt-2 text-base font-bold">
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
          className="app-control focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
          onClick={() => setEasy((value) => !value)}
        >
          <Lightbulb className="h-4 w-4" />
          Explícamelo fácil
        </button>
        <button
          className="app-control focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"
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
        <div className="app-warning rounded-md p-4 text-sm leading-6">
          {lesson.balearExample}
        </div>
      ) : null}
      <div className="app-danger rounded-md p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold">
          <TriangleAlert className="h-4 w-4" />
          Errores frecuentes
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {lesson.frequentErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      <button
        className="app-button focus-ring inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm disabled:opacity-70"
        disabled={completed}
        onClick={() => markLesson(lesson.moduleId, lesson.id)}
      >
        <Check className="h-4 w-4" />
        {completed ? "Lección comprendida" : "Marcar lección como comprendida"}
      </button>
    </section>
  );
}
