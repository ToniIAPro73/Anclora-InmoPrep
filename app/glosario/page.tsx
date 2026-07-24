"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { glossary, modules } from "@/data/modules";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [moduleId, setModuleId] = useState("all");
  const items = useMemo(
    () =>
      glossary.filter((item) => {
        const matchesQuery = `${item.term} ${item.definition} ${item.easyDefinition}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesQuery && (moduleId === "all" || item.relatedModuleId === moduleId);
      }),
    [moduleId, query]
  );

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold text-gold">Términos clave</p>
        <h1 className="text-3xl font-bold">Glosario técnico balear</h1>
      </div>
      <section className="flex flex-wrap gap-3 rounded-md border border-slate-200 bg-white p-4">
        <div className="relative min-w-72 flex-1">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            className="focus-ring w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm"
            placeholder="Buscar VPL, IBAVI, SEPBLAC..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <select
          className="focus-ring rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
          value={moduleId}
          onChange={(event) => setModuleId(event.target.value)}
        >
          <option value="all">Todos</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.code}
            </option>
          ))}
        </select>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-md border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-bold">{item.term}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.definition}</p>
            <p className="mt-3 rounded-md bg-slate-50 p-3 text-sm">{item.easyDefinition}</p>
            {item.balearContext ? (
              <p className="mt-3 text-xs leading-5 text-slate-500">{item.balearContext}</p>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
