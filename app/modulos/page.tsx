"use client";

import { ModuleCard } from "@/components/module-card";
import { modules } from "@/data/modules";
import { useStudyStore } from "@/lib/storage";

export default function ModulesPage() {
  const progress = useStudyStore((state) => state.progress);
  return (
    <div className="space-y-5">
      <div>
        <p className="app-eyebrow">19 módulos oficiales</p>
        <h1 className="font-display text-3xl font-bold">Catálogo de módulos</h1>
      </div>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
            progress={progress.find((item) => item.moduleId === module.id)}
          />
        ))}
      </section>
    </div>
  );
}
