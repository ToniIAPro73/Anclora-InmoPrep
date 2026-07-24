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
    <section className="app-card animate-rise space-y-6 rounded-xl p-5 lg:p-7">
      <div>
        <p className="app-eyebrow">Lección {lesson.order}</p>
        <h2 className="mt-1 font-display text-2xl font-bold lg:text-3xl">{lesson.title}</h2>
        <p className="app-muted mt-2 text-sm leading-6">{lesson.summary}</p>
      </div>

      {lesson.keyConcepts.length ? (
        <div className="flex flex-wrap gap-2">
          {lesson.keyConcepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {concept}
            </span>
          ))}
        </div>
      ) : null}

      <div className="space-y-4 text-sm leading-7">
        {lesson.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h3
                key={`${line}-${index}`}
                className="font-display pt-2 text-lg font-bold text-harbor"
              >
                {line.replace("## ", "")}
              </h3>
            );
          }
          if (!line.trim()) return null;
          return (
            <p key={`${line}-${index}`} className="app-muted">
              {line}
            </p>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className="app-button-ghost focus-ring inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
          onClick={() => setEasy((value) => !value)}
        >
          <Lightbulb className="h-4 w-4" />
          Explícamelo fácil
        </button>
        <button
          className="app-button-ghost focus-ring inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
          onClick={() => setCaseOpen((value) => !value)}
        >
          <MapPinned className="h-4 w-4" />
          Caso Baleares
        </button>
      </div>
      {easy ? (
        <div className="animate-rise rounded-xl border border-emerald/30 bg-emerald/10 p-4 text-sm leading-6">
          {lesson.easyExplanation}
        </div>
      ) : null}
      {caseOpen ? (
        <div className="app-warning animate-rise rounded-xl p-4 text-sm leading-6">
          {lesson.balearExample}
        </div>
      ) : null}
      <div className="app-danger rounded-xl p-4">
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
        className="app-button focus-ring inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm disabled:opacity-70"
        disabled={completed}
        onClick={() => markLesson(lesson.moduleId, lesson.id)}
      >
        <Check className="h-4 w-4" />
        {completed ? "Lección comprendida" : "Marcar lección como comprendida"}
      </button>
    </section>
  );
}
