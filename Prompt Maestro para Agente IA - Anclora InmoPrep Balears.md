# **PROMPT MAESTRO DE INSTRUCCIÓN TÉCNICA Y DESARROLLO END-TO-END**

**PROYECTO:** Anclora InmoPrep \- Sistema Pedagógico de Preparación para el Examen de Agente Inmobiliario de las Illes Balears (ROAIIB 2026\)  
**DESTINATARIO:** Agente IA Full-Stack (Claude Code / Codex / Cursor / Devin)  
**REVISIÓN NORMATIVA:** Conforme a Ley 3/2024, Ley 5/2018, Ley 4/2025, Decreto Ley 4/2025, Ley 4/2026 y normativa tributaria balear 2026\.

## **1\. DIRECTIVA EJECUTIVA Y CONTEXTO DEL PRODUCTO**

### **1.1 Objetivo del Proyecto**

Desarrollar una aplicación web interactiva, moderna y de alto rendimiento denominada **Anclora InmoPrep**. La aplicación tiene como propósito la preparación autónoma, guiada y medible del programa de 19 módulos exigido para la acreditación oficial de Agente Inmobiliario en las Islas Baleares y la inscripción en el Registro Oficial de Agentes Inmobiliarios de las Illes Balears (ROAIIB).

### **1.2 Reglas Principales de Desarrollo**

> 1. **Foco Autonómico Balear:** Todos los contenidos, normativas y casos de estudio deben reflejar las especificaciones legislativas de las Illes Balears (Ley 3/2024 de vivienda, ITP balear 2026, normativa turística Decreto-Ley 4/2025, regulación de la fianza en IBAVI, IEE de Palma, etc.).  
> 2. **Priorización Pedagógica:** La interfaz debe evitar bloques extensos e ininterrumpidos de texto legal. El contenido se fragmentará en unidades didácticas con explicaciones simples, ejemplos reales en Mallorca/Baleares y ejercicios de toma de decisión profesional.  
> 3. **Arquitectura Offline-First / MVP Autónomo:** El sistema debe funcionar inicialmente sin dependencia obligatoria de APIs de LLM externas o backend complejas. Toda la lógica de datos, progreso y simulacros se inicializará mediante estructuras JSON tipadas localmente y se persistirá en el cliente (localStorage / IndexedDB), quedando preparada para migración a Supabase/Prisma.

## **2\. ARQUITECTURA TÉCNICA Y STACK OBLIGATORIO**

### **2.1 Stack Tecnológico**

> * **Framework Web:** Next.js 14+ (App Router, React 18, TypeScript en modo estricto).  
> * **Estilado y UI:** Tailwind CSS \+ Componentes tipo Shadcn/UI (Radix UI) \+ Lucide React (iconografía).  
> * **Gestión de Estado y Persistencia Local:** Zustand o React Context \+ localStorage con fallback resiliente.  
> * **Procesamiento de Fechas y Gráficos:** date-fns y Recharts para analítica de rendimiento.  
> * **Estructura de Archivos recomendada:**  
>   /app  
>     /(dashboard)/page.tsx  
>     /modulos/page.tsx  
>     /modulos/\[id\]/page.tsx  
>     /ejercicios/page.tsx  
>     /evaluaciones/page.tsx  
>     /simulacro/page.tsx  
>     /glosario/page.tsx  
>     /estadisticas/page.tsx  
>   /components  
>     /ui (botones, tarjetas, progresos, modales)  
>     /dashboard (cards de métricas, gráfico de radar, recomendador)  
>     /modulo (leccion-block, explicalo-facil, caso-baleares)  
>     /quiz (quiz-runner, feedback-card, temporizador)  
>   /data  
>     /modules/ (archivos json por módulo o índice unificado)  
>     /glossary.json  
>   /lib  
>     /mastery.ts (algoritmos de puntuación y repaso)  
>     /types.ts (definiciones TypeScript)  
>     /storage.ts (persistencia local)

## **3\. MODELO DE DATOS Y TIPADO RIGUROSO (TypeScript)**

El agente deberá implementar exactamente los siguientes tipos de datos en /lib/types.ts:  
export type ModuleStatus \=   
  | 'not\_started'   
  | 'in\_progress'   
  | 'practice\_pending'   
  | 'evaluated'   
  | 'mastered'   
  | 'review';

export type DifficultyLevel \= 'basic' | 'medium' | 'advanced';

export type ExerciseType \=   
  | 'comprehension'   
  | 'case'   
  | 'decision'   
  | 'calculation'   
  | 'balear\_scenario';

export interface Example {  
  id: string;  
  title: string;  
  scenario: string;  
  application: string;  
  isBalearContext: boolean;  
}

export interface Lesson {  
  id: string;  
  moduleId: string;  
  title: string;  
  order: number;  
  summary: string;  
  content: string; // Soporta Markdown  
  easyExplanation: string; // Modo "Explícamelo fácil"  
  balearExample: string; // Modo "Ejemplo Baleares"  
  keyConcepts: string\[\];  
  frequentErrors: string\[\];  
  examples: Example\[\];  
  completed: boolean;  
}

export interface Exercise {  
  id: string;  
  moduleId: string;  
  type: ExerciseType;  
  question: string;  
  options?: string\[\];  
  expectedAnswer: string;  
  explanation: string;  
  difficulty: DifficultyLevel;  
}

export interface Question {  
  id: string;  
  question: string;  
  options: string\[\];  
  correctAnswerIndex: number;  
  explanation: string;  
  sourceModuleId: string;  
  legalReference?: string;  
  difficulty: DifficultyLevel;  
}

export interface Module {  
  id: string;  
  code: string; // Ej: "M01", "M19"  
  title: string;  
  order: number;  
  description: string;  
  estimatedMinutes: number;  
  difficulty: DifficultyLevel;  
  status: ModuleStatus;  
  progressPercentage: number;  
  score: number | null;  
  lessons: Lesson\[\];  
  exercises: Exercise\[\];  
  quizQuestions: Question\[\];  
}

export interface UserProgress {  
  moduleId: string;  
  completedLessonIds: string\[\];  
  quizBestScore: number;  
  masteryScore: number; // 0 a 100  
  lastStudiedAt: string; // ISO Date  
  nextReviewAt: string; // ISO Date  
  failedQuestionIds: string\[\];  
}

export interface GlossaryItem {  
  id: string;  
  term: string;  
  definition: string;  
  easyDefinition: string;  
  relatedModuleId: string;  
  balearContext?: string;  
}

## **4\. ESTRUCTURA COMPLETA DE LOS 19 MÓDULOS OFICIALES (Datos Mock Iniciales)**

El agente deberá incorporar en la base de datos local la estructura completa de los **19 Módulos del Temario Oficial de Baleares (Edición 2026\)**, completando contenido relevante y riguroso para cada uno de ellos:

> 1. **M01: Derecho de la Propiedad** (Titularidad, derechos reales, propiedad horizontal, usufructos, alodios y Derecho Civil Balear).  
> 2. **M02: Derecho Tributario y Fiscal** (ITPAJD tramos progresivos 2026 en Balears, IVA, IRPF, IRNR, Modelo 600 ATIB y deducciones autonómicas).  
> 3. **M03: Ley de Arrendamientos Urbanos (LAU)** (Contratos de vivienda, temporada, habitaciones, fianza en IBAVI, moratoria turística en plurifamiliares).  
> 4. **M04: Regulaciones Técnicas Inmobiliarias** (LOE, CTE, Cédula de Habitabilidad, Certificado Energético, REBT/RITE).  
> 5. **M05: Derecho Hipotecario** (Registro de la Propiedad, notas simples, comprobación de cargas, LCCI e hipotecas).  
> 6. **M06: Derecho de Consumo Inmobiliario** (TRLGDCU, RD 515/1989, publicidad veraz, folleto informativo y hojas de reclamaciones).  
> 7. **M07: Derecho Urbanístico** (Clasificación del suelo LUIB, planeamiento municipal, licencias, legalización en rústico Ley 7/2024 e ITE/IEE Palma).  
> 8. **M08: Valoraciones Inmobiliarias** (Métodos de comparación, coste, renta y residual; aplicación al mercado insular).  
> 9. **M09: Derecho Profesional e Inmobiliario y Derecho a la Vivienda** (Ley 5/2018 de Vivienda de les Illes Balears, Ley 3/2024 y Viviendas de Precio Limitado \- VPL).  
> 10. **M10: Marketing y Comercialización Inmobiliaria** (Estrategia de captación, cualificación de compradores, portales y ficha técnica verificada).  
> 11. **M11: Conocimientos Arquitectónicos** (Sistemas constructivos, patologías habituales en entorno marino, Libro del Edificio y conservación).  
> 12. **M12: Gestión de Equipos Comerciales** (Dirección de agencia, compliance laboral, protocolos de atención al cliente y liderazgo).  
> 13. **M13: Ética y Buenas Prácticas Inmobiliarias** (Código de conducta profesional, transparencia, prevención de conflictos de interés).  
> 14. **M14: Negociación y Cierre de Ventas** (Proceso de oferta, documento de reserva, arras confirmatorias vs penitenciales, preparación de escritura notarial).  
> 15. **M15: La Captación Inmobiliaria** (Prospección, nota de encargo, exclusiva inmobiliaria, comprobación documental inicial y fijación de precio).  
> 16. **M16: Tecnología Inmobiliaria** (CRM inmobiliario, firma digital cualificada, IA aplicada con revisión humana, RGPD y LOPDGDD).  
> 17. **M17: La Promoción Inmobiliaria** (Fases del desarrollo, avales de cantidades entregadas a cuenta, Ley 4/2025 de proyectos estratégicos residenciales).  
> 18. **M18: Prevención del Blanqueo de Capitales y FT** (Ley 10/2010, RD 304/2014, identificación KYC, titular real, representante ante SEPBLAC y operaciones sospechosas ROS).  
> 19. **M19: Registro Oficial de Agentes Inmobiliarios de las Illes Balears (ROAIIB)** (Requisitos de ejercicio según Ley 3/2024: 200h de formación, seguro RC de 600k€, aval/caución de 60k€, nota de encargo y placa/distintivo oficial).

## **5\. LÓGICA DE NEGOCIO Y MOTOR PEDAGÓGICO DE DOMINIO**

El agente implementará las siguientes reglas en /lib/mastery.ts:

### **5.1 Algoritmo de Cálculo de Dominio (masteryScore)**

Para cada módulo, la nota de dominio $M \\in \[0, 100\]$ se calculará mediante la suma ponderada:

$$M \= (P\_{lecciones} \\times 0.30) \+ (S\_{test} \\times 0.50) \+ (E\_{ejercicios} \\times 0.20)$$  
Donde:

> * $P\_{lecciones}$: Porcentaje de lecciones marcadas como completadas ($0-100$).  
> * $S\_{test}$: Puntuación más alta obtenida en el test del módulo ($0-100$).  
> * $E\_{ejercicios}$: Porcentaje de ejercicios prácticos respondidos/revisados ($0-100$).

### **5.2 Clasificación del Estado de Dominio**

> * **0 \- 39:** Débil (Color Rojo / Badge) \-\> Requiere lectura inicial.  
> * **40 \- 69:** En progreso (Color Naranja) \-\> Practicar ejercicios.  
> * **70 \- 84:** Correcto (Color Azul) \-\> Listo para test de consolidación.  
> * **85 \- 100:** Dominado (Color Verde) \-\> Pasa a ciclo de repetición espaciada.

### **5.3 Sistema de Repetición Espaciada (Spaced Repetition)**

> * Si el alumno obtiene $\< 70\\%$ en un test, programar repaso para **mañana (+1 día)**.  
> * Si obtiene entre $70\\%$ y $85\\%$, programar repaso en **3 días**.  
> * Si la puntuación es $\\ge 85\\%$, programar repaso en **7 días**.

## **6\. ESPECIFICACIÓN DETALLADA DE PANTALLAS Y COMPONENTES UI**

### **6.1 Dashboard Principal (/app/(dashboard)/page.tsx)**

> * **Header:** Saludo profesional, estado de racha de días consecutivos (Study Streak) e indicador global de preparación para el examen oficial del ROAIIB.  
> * **KPI Cards Grid:**  
  1. *Progreso Global:* Barra circular o porcentaje (ej. 42%).  
  2. *Módulos Dominados:* N/19.  
  3. *Nota Media de Tests:* Porcentaje global.  
  4. *Tiempo de Estudio Total:* Formato horas/minutos.  
> * **Hero Widget \- "Estudiar Hoy":**  
>   Card destacado que recomienda dinámicamente la acción prioritaria: continuar con el módulo en curso o repasar un punto débil detectado.  
> * **Panel de Puntos Débiles (WeakAreasPanel):** Muestra los 3 módulos con menor masteryScore.  
> * **Próximos Repasos Programados:** Lista con fechas y accesos directos.

### **6.2 Catálogo de Módulos (/app/modulos/page.tsx)**

> * Vista de cuadrícula o lista con las 19 tarjetas de módulo (ModuleCard).  
> * Cada tarjeta muestra:  
  * Código (M01 a M19) y Título oficial.  
  * Badge de Dificultad y Estado (Dominado, Débil, En estudio).  
  * Barra de progreso horizontal.  
  * Nota obtenida en test.  
  * Botón de acción: "Estudiar Módulo".

### **6.3 Vista de Módulo y Lección (/app/modulos/\[id\]/page.tsx)**

> * **Tabs Navigacionales:**  
  1. *Contenido y Lecciones*  
  2. *Ejercicios Prácticos*  
  3. *Test de Evaluación*  
> * **Bloque de Lección (LessonBlock):**  
  * Título y resumen del bloque.  
  * Contenido principal formateado.  
  * **Botón Interactivo 1: "Explícamelo Fácil"** \-\> Despliega una tarjeta resaltada con una explicación coloquial para principiantes del sector.  
  * **Botón Interactivo 2: "Caso Práctico Baleares"** \-\> Despliega un recuadro contextualizado en Mallorca, Ibiza o Menorca.  
  * **Sección Errores Frecuentes:** Cajas de advertencia sobre fallos habituales de interpretación legal.  
  * Checkbox: "Marcar lección como comprendida".

### **6.4 Módulo de Ejercicios Prácticos (/app/ejercicios/page.tsx)**

> * Filtro por módulo y por tipo (Comprensión, Caso Real, Decisión Profesional, Escenario Balear).  
> * Tarjeta de ejercicio con pregunta, caja para desarrollo o selección de opción, y botón "Verificar Respuesta Esperada" que despliega la explicación legal detallada.

### **6.5 Evaluaciones y Simulador de Examen (/app/simulacro/page.tsx)**

> * **Modo Examen ROAIIB:**  
  * Selección de 30 preguntas aleatorias ponderadas de los 19 módulos.  
  * Temporizador inverso de 45 minutos.  
  * Navegador de preguntas (Respondida, Pendiente, Marcada para revisión).  
  * Modal de confirmación al finalizar.  
> * **Pantalla de Resultados:**  
  * Desglose por módulos (detecta qué materias fallaron más).  
  * Explicación de cada pregunta fallada con cita a la norma balear/estatal correspondiente.

### **6.6 Glosario Técnico Balear (/app/glosario/page.tsx)**

> * Buscador en tiempo real de términos clave (VPL, Cédula de Carencia, Modelo 600 ATIB, IBAVI, ROAIIB, SEPBLAC, TPO, Arras Penitenciales).  
> * Filtro por módulo vinculado.

## **7\. INSTRUCCIONES DE EJECUCIÓN PASO A PASO PARA EL AGENTE IA**

Se deberán seguir estrictamente las siguientes fases en orden secuencial:

### **FASE 1: Configuración e Infraestructura de Datos**

> 1. Crear el proyecto Next.js con Tailwind CSS y dependencias de UI (Lucide React, Radix UI / Shadcn UI).  
> 2. Definir el archivo /lib/types.ts con la totalidad de interfaces especificadas en la Sección 3\.  
> 3. Crear el archivo /data/modules.ts e insertar la estructura completa de los 19 Módulos descritos, incluyendo al menos 1 lección completa, 1 ejercicio y 2 preguntas de test exhaustivas por cada módulo con contexto balear verídico.  
> 4. Crear /lib/storage.ts para la gestión de lectura, escritura y reinicio del UserProgress en localStorage.

### **FASE 2: Desarrollo del Core UI y Layouts**

> 1. Diseñar el layout principal con sidebar responsiva y branding **Anclora InmoPrep** (estética elegante, colores azul marino, slate y toques de dorado/esmeralda).  
> 2. Desarrollar las páginas /app/(dashboard)/page.tsx y /app/modulos/page.tsx.  
> 3. Implementar la vista detallada de lecciones en /app/modulos/\[id\]/page.tsx asegurando el correcto funcionamiento de los botones interactivos "Explícamelo fácil" y "Caso Baleares".

### **FASE 3: Motores de Evaluación y Simulacro**

> 1. Implementar el motor de test interactivo (QuizRunner) con feedback inmediato y explicaciones razonadas tras responder cada pregunta.  
> 2. Construir la pantalla de Simulacro de Examen (/app/simulacro/page.tsx) con temporizador de 45 minutos, navegador de 30 preguntas aleatorias y pantalla final de desglose de notas.  
> 3. Conectar los algoritmos de /lib/mastery.ts para que cualquier test o ejercicio completado actualice automáticamente el masteryScore y programe la fecha de repetición espaciada.

### **FASE 4: Módulos Complementarios y Analítica**

> 1. Desarrollar la página de Ejercicios Prácticos (/app/ejercicios/page.tsx) con filtros por módulo y por tipo de ejercicio.  
> 2. Construir la página del Glosario Técnico Balear (/app/glosario/page.tsx) con buscador predictivo e integración de términos regulatorios insulares.  
> 3. Crear la pantalla de Estadísticas (/app/estadisticas/page.tsx) integrando gráficos con Recharts para visualizar la evolución temporal de notas y la distribución del dominio por materia.

### **FASE 5: Pulido UX, Responsive, Accesibilidad y Verificación**

> 1. Garantizar la adaptabilidad técnica completa en dispositivos móviles, tablets y monitores de alta resolución.  
> 2. Implementar estados vacíos (*empty states*), indicadores de carga (*skeleton loaders*) y modales de confirmación para acciones críticas (ej. reiniciar progreso).  
> 3. Verificar la ausencia total de errores de consola, fallos de hidratación en SSR/React y advertencias de TypeScript.

### **FASE 6: Criterios de Aceptación y Validación Final**

> 1. Comprobar que los 19 módulos están navegables y permiten completar el flujo completo: lectura \-\> ejercicio \-\> test \-\> actualización del dashboard.  
> 2. Validar que la persisencia en localStorage recupera intacta la racha de días, respuestas falladas y módulos dominados tras recargar la página.  
> 3. Asegurar que toda la terminología jurídica, fiscal y urbanística cumple con los estándares exigidos para el ejercicio profesional en las Illes Balears en 2026\.

## **8\. GUÍA DE MANTENIMIENTO E INTEGRACIÓN DE CONTENIDOS REALES**

Para sustituir los datos mock por los contenidos exportados desde NotebookLM u otras fuentes normativas:

> 1. **Ubicación de archivos de contenido:** Los módulos se almacenarán individualmente en /data/modules/module-01.json a /data/modules/module-19.json o centralizados en /data/modules.ts.  
> 2. **Estructura JSON exigida por módulo:**  
>    {  
>      "id": "m01",  
>      "code": "M01",  
>      "title": "Derecho de la Propiedad",  
>      "order": 1,  
>      "description": "Titularidad, derechos reales...",  
>      "estimatedMinutes": 45,  
>      "difficulty": "medium",  
>      "lessons": \[...\],  
>      "exercises": \[...\],  
>      "quizQuestions": \[...\]  
>    }

> 3. **Formato Markdown en lecciones:** El campo content de las lecciones acepta sintaxis Markdown estándar (\#, \#\#, \*\*negrita\*\*, \- listas), el cual se renderizará automáticamente a través de los componentes de la aplicación.

**FIN DEL PROMPT MAESTRO**