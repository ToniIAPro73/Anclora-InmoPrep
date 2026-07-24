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
      <section className="app-card flex flex-wrap gap-3 rounded-md p-4">
        <div className="relative min-w-72 flex-1">
          <Search className="app-muted pointer-events-none absolute left-3 top-2.5 h-4 w-4" />
          <input
            className="app-control focus-ring w-full rounded-md py-2 pl-9 pr-3 text-sm"
            placeholder="Buscar VPL, IBAVI, SEPBLAC..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <select
          className="app-control focus-ring rounded-md px-3 py-2 text-sm"
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
          <article key={item.id} className="app-card rounded-md p-5">
            <h2 className="text-xl font-bold">{item.term}</h2>
            <p className="app-muted mt-2 text-sm leading-6">{item.definition}</p>
            <p className="app-soft mt-3 rounded-md p-3 text-sm">{item.easyDefinition}</p>
            {item.balearContext ? (
              <p className="app-muted mt-3 text-xs leading-5">{item.balearContext}</p>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
