---
name: project-course-pdf-source
description: Location and format of the raw course-module PDF sources used to enrich anclora-inmoprep module content
metadata:
  type: project
---

The anclora-inmoprep app's course modules (e.g. Módulo 19 ROAIIB) currently ship with generic, templated single-lesson content that is much shorter than the real source material. The actual detailed course content (legal requirements, fichas/bloques temáticos, casos prácticos, test questions) lives as PDF files at:

`/mnt/c/Users/antonio.ballesterosa/Downloads/Modulos-curso-agente-inmobiliario/Modulo_NN_<slug>.pdf`

Each module PDF follows a consistent internal structure: a cover page, "Ficha 00" (objetivos y mapa), then "Parte 01..05" section dividers each listing several "Ficha NN" content blocks (Desarrollo / Aplicación profesional / Secuencia operativa / Evidencia mínima / Escenario Mallorca / clave box), followed by "Casos prácticos resueltos" (Caso NN with Supuesto/Análisis/Resolución operativa/Evidencias), then "Preguntas de control" (numbered multiple choice with a), b), c), d) options) with a "Soluciones" answer key, and a final "Fuentes oficiales y resumen final" page listing the legal sources cited.

**Why:** the user asked to extract Módulo 19 content because the app version was "ridiculously short" — a single template lesson vs. 44 fichas + 5 casos + 12 preguntas in the real PDF (60 pages).

**How to apply:** For future module-enrichment tasks (Módulo NN), expect this same PDF at the same directory with the same "Ficha/Parte/Caso/Pregunta/Fuentes oficiales" structure — read in ~20-page blocks, and map "Parte 0X" groupings to 4-7 app lessons, reusing "Casos prácticos" as practical exercises and "Preguntas de control" as base test questions (expand count as needed per app spec). See [[m19-roaiib-legal-facts]] for the specific legal figures extracted for M19.
