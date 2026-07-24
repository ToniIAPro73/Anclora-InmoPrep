# Anclora InmoPrep Balears

Preparacion ROAIIB 2026 para agentes inmobiliarios en Illes Balears.

Anclora InmoPrep Balears es una aplicacion web educativa, offline-first y centrada en estudio autonomo. Organiza el programa de 19 modulos para preparacion de agente inmobiliario en Baleares, combina lecciones guiadas, ejercicios practicos, tests, simulacro de examen, glosario tecnico y estadisticas locales de progreso.

> Estado actual: MVP funcional con datos locales iniciales y contenido contrastado parcialmente con NotebookLM. No sustituye asesoramiento juridico, fiscal, urbanistico o tecnico. La normativa balear 2026 debe verificarse contra fuentes oficiales antes de uso profesional.

## Producto

La app busca que un alumno pueda estudiar sin backend:

- Leer contenido fragmentado por modulo.
- Activar explicacion sencilla y caso practico balear.
- Resolver ejercicios de decision profesional.
- Hacer tests con feedback inmediato.
- Ejecutar un simulacro ROAIIB de 30 preguntas.
- Consultar glosario balear.
- Ver dominio por materia y repasar puntos debiles.
- Guardar progreso en el navegador.

## Stack

- Next.js 16 App Router
- React 18
- TypeScript strict
- Tailwind CSS
- Radix UI Tabs
- Lucide React
- Zustand
- localStorage
- date-fns
- Recharts

## Funcionalidades

### Dashboard

Ruta: `/`

Incluye progreso global, modulos dominados, nota media, tiempo de estudio, racha y recomendacion de estudio.

### Modulos

Ruta: `/modulos`

Catalogo completo de 19 modulos:

1. M01 Derecho de la Propiedad
2. M02 Derecho Tributario y Fiscal
3. M03 Ley de Arrendamientos Urbanos
4. M04 Regulaciones Tecnicas Inmobiliarias
5. M05 Derecho Hipotecario
6. M06 Derecho de Consumo Inmobiliario
7. M07 Derecho Urbanistico
8. M08 Valoraciones Inmobiliarias
9. M09 Derecho Profesional Inmobiliario y Vivienda
10. M10 Marketing y Comercializacion Inmobiliaria
11. M11 Conocimientos Arquitectonicos
12. M12 Gestion de Equipos Comerciales
13. M13 Etica y Buenas Practicas Inmobiliarias
14. M14 Negociacion y Cierre de Ventas
15. M15 La Captacion Inmobiliaria
16. M16 Tecnologia Inmobiliaria
17. M17 La Promocion Inmobiliaria
18. M18 Prevencion del Blanqueo de Capitales y FT
19. M19 ROAIB / ROAIIB

### Vista de modulo

Ruta: `/modulos/[id]`

Cada modulo contiene:

- Leccion principal.
- Boton `Explicamelo facil`.
- Boton `Caso Baleares`.
- Errores frecuentes.
- Checkbox de comprension.
- Ejercicio practico.
- Test con feedback.

### Ejercicios

Ruta: `/ejercicios`

Permite filtrar por modulo y tipo:

- Comprension
- Caso
- Decision
- Calculo
- Escenario balear

### Simulacro

Ruta: `/simulacro`

Simulacro de 30 preguntas con objetivo de 45 minutos. Actualmente muestra temporizador de referencia y feedback al finalizar.

### Glosario

Ruta: `/glosario`

Buscador de terminos clave como ROAIB/ROAIIB, VPL, IBAVI, Modelo 600 ATIB, SEPBLAC, titular real, FEIN, IEE Palma y arras penitenciales.

### Estadisticas

Ruta: `/estadisticas`

Grafico de dominio por modulo y accion de reinicio de progreso local.

## Diseno UX/UI

Direccion visual: notaria boutique.

La interfaz busca una sensacion premium, sobria y legible:

- Tema claro marfil, tinta y oro.
- Tema oscuro tinta profunda, laton y superficies azul noche.
- Tipografia display editorial para titulares.
- Tipografia sans sobria para lectura y UI.
- Sidebar persistente en escritorio.
- Navegacion compacta en movil.
- Toggle de tema con icono Sol/Luna.
- Contraste revisado en claro, oscuro y movil oscuro.

El tema se guarda en localStorage con la clave:

```text
anclora-inmoprep-theme
```

Tambien puede forzarse para revision visual:

```text
/?theme=light
/?theme=dark
```

## Arquitectura

```text
app/
  page.tsx
  modulos/page.tsx
  modulos/[id]/page.tsx
  ejercicios/page.tsx
  simulacro/page.tsx
  glosario/page.tsx
  estadisticas/page.tsx
components/
  app-shell.tsx
  dashboard-page.tsx
  lesson-block.tsx
  module-card.tsx
  module-tabs.tsx
  progress-bar.tsx
  providers.tsx
  quiz-runner.tsx
  theme-toggle.tsx
data/
  modules.ts
lib/
  mastery.ts
  storage.ts
  types.ts
  utils.ts
```

## Modelo de dominio

Tipos principales en `lib/types.ts`:

- `Module`
- `Lesson`
- `Exercise`
- `Question`
- `UserProgress`
- `GlossaryItem`

Calculo de dominio en `lib/mastery.ts`:

```text
M = (lecciones * 0.30) + (mejor test * 0.50) + (ejercicios * 0.20)
```

Clasificacion:

- 0-39: Debil
- 40-69: En progreso
- 70-84: Correcto
- 85-100: Dominado

Repaso espaciado:

- Test < 70%: +1 dia
- 70-84%: +3 dias
- >= 85%: +7 dias

## Persistencia

La app no requiere backend para el MVP. El progreso se guarda en localStorage:

```text
anclora-inmoprep-progress-v1
```

Se guarda:

- Lecciones completadas.
- Ejercicios revisados.
- Mejor nota por modulo.
- Dominio por modulo.
- Proxima fecha de repaso.
- Preguntas falladas.
- Racha.
- Tiempo total.
- Historial de notas.

## NotebookLM

Cuaderno usado como fuente de contenido:

```text
https://notebooklm.google.com/notebook/a461e890-3fbd-4fbf-a68d-09907bc67f7b
```

Extraccion realizada:

- Mapa normativo estatal/autonomico/municipal.
- Puntos ROAIB/ROAIIB.
- VPL.
- Ley 3/2024.
- Ley 7/2024.
- Ley 4/2025.
- Decreto-ley 4/2025.
- ITP balear 2026.
- Prevencion de blanqueo.
- Casos practicos sobre turismo, suelo rustico, titular real y LCCI.

Nota operativa: el MCP de NotebookLM requirio ejecutar via HTTP local y ajustar el lanzamiento de Chromium para ignorar un problema TLS local. La primera consulta devolvio respuesta citada. Un follow-up estructurado fallo por tooltip de citas interceptando el input.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

URL local:

```text
http://127.0.0.1:3000
```

## Calidad

Comandos:

```bash
npm run typecheck
npm run lint
npm run build
```

Estado verificado:

- Typecheck: OK
- Lint: OK
- Build: OK
- Capturas manuales: claro, oscuro y movil oscuro revisados

## Seguridad y auditoria

Las vulnerabilidades high iniciales se corrigieron migrando a Next.js 16.2.11, ESLint 9 y `eslint-config-next` 16, con `overrides` para forzar versiones transitivas parcheadas de `postcss` y `sharp`.

Estado verificado:

```bash
npm audit --audit-level=high
```

Resultado:

```text
found 0 vulnerabilities
```

## Limites conocidos

- Contenido aun es base local inicial, no corpus juridico completo.
- Simulacro muestra temporizador de referencia, no cuenta atras persistente completo.
- No hay backend ni sincronizacion multi-dispositivo.
- No hay autenticacion de usuarios.
- No hay importador automatico definitivo desde NotebookLM.
- Los datos fiscales/urbanisticos 2026 deben validarse contra BOE, BOIB, ATIB, Govern y ordenanzas municipales vigentes.

## Roadmap recomendado

1. Importar contenido completo exportado desde NotebookLM por modulo.
2. Sustituir datos genericos por lecciones exhaustivas versionadas.
3. Implementar temporizador real persistente en simulacro.
4. Anadir banco de preguntas amplio y ponderado por modulo.
5. Guardar intentos por fecha para analitica historica.
6. Crear pruebas unitarias para `mastery.ts` y `storage.ts`.
7. Sustituir overrides de seguridad cuando Next.js publique dependencias transitivas parcheadas directamente.

## Licencia

Proyecto privado de Anclora.
