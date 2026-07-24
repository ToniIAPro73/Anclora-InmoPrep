"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { LessonBlock } from "@/components/lesson-block";
import { useStudyStore } from "@/lib/storage";
import type { Lesson } from "@/lib/types";

export function LessonNavigator({ lessons }: { lessons: Lesson[] }) {
  const [activeId, setActiveId] = useState(lessons[0]?.id);
  const progress = useStudyStore((state) =>
    state.progress.find((item) => item.moduleId === lessons[0]?.moduleId)
  );
  const activeLesson = lessons.find((lesson) => lesson.id === activeId) ?? lessons[0];

  if (!activeLesson) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-[15rem_1fr] lg:items-start">
      <nav className="app-card rounded-xl p-2 lg:sticky lg:top-24">
        <select
          className="app-control focus-ring w-full rounded-lg px-3 py-2 text-sm lg:hidden"
          value={activeLesson.id}
          onChange={(event) => setActiveId(event.target.value)}
        >
          {lessons.map((lesson) => (
            <option key={lesson.id} value={lesson.id}>
              Lección {lesson.order}. {lesson.title}
            </option>
          ))}
        </select>
        <ol className="hidden space-y-1 lg:block">
          {lessons.map((lesson) => {
            const completed = progress?.completedLessonIds.includes(lesson.id) ?? false;
            const active = lesson.id === activeLesson.id;
            return (
              <li key={lesson.id}>
                <button
                  onClick={() => setActiveId(lesson.id)}
                  className={`focus-ring flex w-full items-start gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    active ? "app-nav-active" : "app-nav-link"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      completed
                        ? "bg-emerald text-white"
                        : "border border-line text-muted"
                    }`}
                  >
                    {completed ? <Check className="h-3 w-3" /> : lesson.order}
                  </span>
                  <span className="leading-snug">{lesson.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
      <LessonBlock key={activeLesson.id} lesson={activeLesson} />
    </div>
  );
}
