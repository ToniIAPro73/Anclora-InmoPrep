"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useStudyStore } from "@/lib/storage";
import type { Question } from "@/lib/types";

export function QuizRunner({
  moduleId,
  questions,
  onFinish
}: {
  moduleId: string;
  questions: Question[];
  onFinish?: (score: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const submitQuiz = useStudyStore((state) => state.submitQuiz);

  const result = useMemo(() => {
    const correct = questions.filter((q) => answers[q.id] === q.correctAnswerIndex).length;
    const score = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    const failed = questions
      .filter((q) => answers[q.id] !== q.correctAnswerIndex)
      .map((q) => q.id);
    return { correct, score, failed };
  }, [answers, questions]);

  function finish() {
    submitQuiz(moduleId, result.score, result.failed);
    setFinished(true);
    onFinish?.(result.score);
  }

  return (
    <div className="space-y-4">
      {questions.map((question, index) => {
        const selected = answers[question.id];
        return (
          <article key={question.id} className="app-card rounded-md p-5">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="font-semibold">
                {index + 1}. {question.question}
              </h3>
              {finished ? (
                selected === question.correctAnswerIndex ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )
              ) : null}
            </div>
            <div className="grid gap-2">
              {question.options.map((option, optionIndex) => (
                <button
                  key={option}
                  className={`focus-ring rounded-md border px-3 py-2 text-left text-sm ${
                    selected === optionIndex
                      ? "app-button"
                      : "app-control hover:bg-[color-mix(in_srgb,var(--color-harbor)_10%,var(--color-surface))]"
                  }`}
                  onClick={() =>
                    setAnswers((current) => ({ ...current, [question.id]: optionIndex }))
                  }
                  disabled={finished}
                >
                  {option}
                </button>
              ))}
            </div>
            {finished ? (
              <div className="app-soft mt-4 rounded-md p-3 text-sm leading-6">
                <strong>Explicación:</strong> {question.explanation}
                {question.legalReference ? (
                  <span className="app-muted block text-xs">{question.legalReference}</span>
                ) : null}
              </div>
            ) : null}
          </article>
        );
      })}
      <button
        className="app-button focus-ring rounded-md px-4 py-2 text-sm disabled:opacity-50"
        disabled={Object.keys(answers).length < questions.length || finished}
        onClick={finish}
      >
        Finalizar test
      </button>
      {finished ? (
        <div className="rounded-md border border-emerald/30 bg-emerald/10 p-4 font-semibold">
          Resultado: {result.score}% ({result.correct}/{questions.length})
        </div>
      ) : null}
    </div>
  );
}
