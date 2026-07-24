"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, SlidersHorizontal } from "lucide-react";
import { allExercises, modules } from "@/data/modules";
import { useStudyStore } from "@/lib/storage";
import type { ExerciseType } from "@/lib/types";

const exerciseTypes: Array<ExerciseType | "all"> = [
  "all",
  "comprehension",
  "case",
  "decision",
  "calculation",
  "balear_scenario"
];

export default function ExercisesPage() {
  const [moduleId, setModuleId] = useState("all");
  const [type, setType] = useState<ExerciseType | "all">("all");
  const completed = useStudyStore((state) => state.completedExerciseIds);
  const completeExercise = useStudyStore((state) => state.completeExercise);
  const filtered = useMemo(
    () =>
      allExercises.filter(
        (exercise) =>
          (moduleId === "all" || exercise.moduleId === moduleId) &&
          (type === "all" || exercise.type === type)
      ),
    [moduleId, type]
  );

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-gold">Práctica aplicada</p>
        <h1 className="text-3xl font-bold">Ejercicios prácticos</h1>
      </div>
      <section className="app-card flex flex-wrap gap-3 rounded-md p-4">
        <SlidersHorizontal className="h-5 w-5 text-harbor" />
        <select
          className="app-control focus-ring rounded-md px-3 py-2 text-sm"
          value={moduleId}
          onChange={(event) => setModuleId(event.target.value)}
        >
          <option value="all">Todos los módulos</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.code} {module.title}
            </option>
          ))}
        </select>
        <select
          className="app-control focus-ring rounded-md px-3 py-2 text-sm"
          value={type}
          onChange={(event) => setType(event.target.value as ExerciseType | "all")}
        >
          {exerciseTypes.map((item) => (
            <option key={item} value={item}>
              {item === "all" ? "Todos los tipos" : item}
            </option>
          ))}
        </select>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        {filtered.map((exercise) => {
          const courseModule = modules.find((item) => item.id === exercise.moduleId);
          const done = completed.includes(exercise.id);
          return (
            <article key={exercise.id} className="app-card rounded-md p-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-gold">{courseModule?.code}</span>
                {done ? <CheckCircle2 className="h-5 w-5 text-emerald" /> : null}
              </div>
              <h2 className="font-bold">{exercise.question}</h2>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-harbor">
                  Verificar respuesta esperada
                </summary>
                <p className="app-muted mt-3 text-sm leading-6">{exercise.explanation}</p>
              </details>
              <button
                className="app-button focus-ring mt-4 rounded-md px-3 py-2 text-sm disabled:opacity-70"
                disabled={done}
                onClick={() => completeExercise(exercise.id)}
              >
                {done ? "Revisado" : "Marcar revisado"}
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
