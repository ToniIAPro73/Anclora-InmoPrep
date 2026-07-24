import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { LessonNavigator } from "@/components/lesson-navigator";
import { QuizRunner } from "@/components/quiz-runner";
import { modules } from "@/data/modules";
import { ModuleTabs } from "@/components/module-tabs";

export function generateStaticParams() {
  return modules.map((module) => ({ id: module.id }));
}

export default async function ModuleDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const courseModule = modules.find((item) => item.id === id);
  if (!courseModule) notFound();

  return (
    <div className="space-y-5">
      <Link
        href="/modulos"
        className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Módulos
      </Link>
      <div>
        <p className="app-eyebrow">{courseModule.code}</p>
        <h1 className="font-display text-3xl font-bold lg:text-4xl">{courseModule.title}</h1>
        <p className="app-muted mt-2 max-w-3xl text-sm leading-6">{courseModule.description}</p>
      </div>
      {courseModule.normativeAlerts?.length ? (
        <div className="app-warning space-y-2 rounded-xl p-4 text-sm leading-6">
          <p className="flex items-center gap-2 font-bold">
            <ShieldAlert className="h-4 w-4" />
            Avisos normativos
          </p>
          <ul className="list-disc space-y-1 pl-5">
            {courseModule.normativeAlerts.map((alert) => (
              <li key={alert}>{alert}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <ModuleTabs
        lessons={<LessonNavigator lessons={courseModule.lessons} />}
        exercises={
          <div className="grid gap-4 lg:grid-cols-2">
            {courseModule.exercises.map((exercise) => (
              <ExerciseInline key={exercise.id} exercise={exercise} />
            ))}
          </div>
        }
        quiz={<QuizRunner moduleId={courseModule.id} questions={courseModule.quizQuestions} />}
      />
    </div>
  );
}

function ExerciseInline({
  exercise
}: {
  exercise: (typeof modules)[number]["exercises"][number];
}) {
  return (
    <article className="app-card rounded-xl p-5">
      <p className="app-eyebrow">{exercise.type}</p>
      <h2 className="mt-2 font-bold leading-snug">{exercise.question}</h2>
      {exercise.options?.length ? (
        <ul className="app-muted mt-3 space-y-1 text-sm">
          {exercise.options.map((option) => (
            <li key={option} className="rounded-lg border border-line px-3 py-1.5">
              {option}
            </li>
          ))}
        </ul>
      ) : null}
      <details className="mt-4">
        <summary className="focus-ring cursor-pointer text-sm font-semibold text-harbor">
          Ver respuesta esperada
        </summary>
        <p className="app-muted mt-3 text-sm leading-6">
          <strong className="text-ink">{exercise.expectedAnswer}</strong>
          <br />
          {exercise.explanation}
        </p>
      </details>
    </article>
  );
}
