"use client";

import { useState } from "react";
import { TimerReset } from "lucide-react";
import { QuizRunner } from "@/components/quiz-runner";
import { allQuestions } from "@/data/modules";

function pickExamQuestions() {
  return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 30);
}

export default function SimulacroPage() {
  const [questions, setQuestions] = useState(() => pickExamQuestions());
  return (
    <div className="space-y-5">
      <section className="app-card rounded-xl p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="app-eyebrow">Modo examen ROAIIB</p>
            <h1 className="font-display text-3xl font-bold">Simulacro de examen</h1>
            <p className="app-muted mt-2 text-sm">
              30 preguntas, 45 minutos objetivo, feedback al finalizar.
            </p>
          </div>
          <div className="app-soft inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold">
            <TimerReset className="h-5 w-5 text-harbor" />
            45:00
          </div>
        </div>
        <button
          className="app-control focus-ring mt-4 rounded-xl px-3 py-2 text-sm font-medium"
          onClick={() => setQuestions(pickExamQuestions())}
        >
          Reiniciar simulacro
        </button>
      </section>
      <QuizRunner moduleId="simulacro" questions={questions} />
    </div>
  );
}
