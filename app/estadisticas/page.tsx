"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { modules } from "@/data/modules";
import { useStudyStore } from "@/lib/storage";

export default function StatsPage() {
  const progress = useStudyStore((state) => state.progress);
  const resetProgress = useStudyStore((state) => state.resetProgress);
  const data = modules.map((module) => ({
    name: module.code,
    dominio: progress.find((item) => item.moduleId === module.id)?.masteryScore ?? 0
  }));

  return (
    <div className="space-y-5">
      <div>
        <p className="app-eyebrow">Analítica local</p>
        <h1 className="font-display text-3xl font-bold">Estadísticas</h1>
      </div>
      <section className="app-card rounded-xl p-5">
        <h2 className="mb-4 text-lg font-bold">Dominio por módulo</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="dominio" fill="#1f8f74" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="app-danger rounded-xl p-5">
        <h2 className="text-lg font-bold">Reiniciar progreso</h2>
        <p className="mt-2 text-sm">
          Borra lecciones, ejercicios, notas, fallos y racha guardados en este navegador.
        </p>
        <button
          className="focus-ring mt-4 rounded-xl border border-current px-3 py-2 text-sm font-bold"
          onClick={() => {
            if (window.confirm("¿Reiniciar todo el progreso local?")) resetProgress();
          }}
        >
          Reiniciar
        </button>
      </section>
    </div>
  );
}
