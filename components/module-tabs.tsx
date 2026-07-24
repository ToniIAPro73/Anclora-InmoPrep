"use client";

import * as Tabs from "@radix-ui/react-tabs";

export function ModuleTabs({
  lessons,
  exercises,
  quiz
}: {
  lessons: React.ReactNode;
  exercises: React.ReactNode;
  quiz: React.ReactNode;
}) {
  return (
    <Tabs.Root defaultValue="lessons" className="space-y-4">
      <Tabs.List className="flex flex-wrap gap-2 rounded-md border border-slate-200 bg-white p-2">
        {[
          ["lessons", "Contenido y lecciones"],
          ["exercises", "Ejercicios prácticos"],
          ["quiz", "Test de evaluación"]
        ].map(([value, label]) => (
          <Tabs.Trigger
            key={value}
            value={value}
            className="focus-ring rounded-md border border-transparent px-3 py-2 text-sm font-medium data-[state=active]:border-gold/40 data-[state=active]:bg-gold/10 data-[state=active]:text-ink dark:data-[state=active]:border-transparent dark:data-[state=active]:bg-white dark:data-[state=active]:text-[#090d16]"
          >
            {label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value="lessons">{lessons}</Tabs.Content>
      <Tabs.Content value="exercises">{exercises}</Tabs.Content>
      <Tabs.Content value="quiz">{quiz}</Tabs.Content>
    </Tabs.Root>
  );
}
