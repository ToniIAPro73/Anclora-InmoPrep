import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LessonBlock } from "@/components/lesson-block";
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
      <Link href="/modulos" className="inline-flex items-center gap-2 text-sm font-medium">
        <ArrowLeft className="h-4 w-4" />
        Módulos
      </Link>
      <div>
        <p className="text-sm font-semibold text-gold">{courseModule.code}</p>
        <h1 className="text-3xl font-bold">{courseModule.title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{courseModule.description}</p>
      </div>
      <ModuleTabs
        lessons={<LessonBlock lesson={courseModule.lessons[0]} />}
        exercises={
          <div className="space-y-4">
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
    <article className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase text-gold">{exercise.type}</p>
      <h2 className="mt-2 font-bold">{exercise.question}</h2>
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium text-harbor">
          Ver respuesta esperada
        </summary>
        <p className="mt-3 text-sm leading-6 text-slate-700">{exercise.explanation}</p>
      </details>
    </article>
  );
}
