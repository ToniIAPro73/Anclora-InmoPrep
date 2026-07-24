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
      <Tabs.List className="app-card flex flex-wrap gap-2 rounded-xl p-2">
        {[
          ["lessons", "Contenido y lecciones"],
          ["exercises", "Ejercicios prácticos"],
          ["quiz", "Test de evaluación"]
        ].map(([value, label]) => (
          <Tabs.Trigger
            key={value}
            value={value}
            className="app-tab focus-ring rounded-lg border border-transparent px-3 py-2 text-sm font-semibold transition-colors"
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
