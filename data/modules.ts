import type { DifficultyLevel, ExerciseType, GlossaryItem, Module } from "@/lib/types";

type ModuleSeed = {
  code: string;
  title: string;
  description: string;
  concepts: string[];
  reference: string;
  examplePlace: string;
  exerciseType: ExerciseType;
  difficulty: DifficultyLevel;
  minutes: number;
};

const seeds: ModuleSeed[] = [
  {
    code: "M01",
    title: "Derecho de la Propiedad",
    description: "Titularidad, derechos reales, propiedad horizontal, usufructos, alodios y Derecho Civil Balear.",
    concepts: ["titularidad", "derechos reales", "propiedad horizontal", "usufructo", "alodio"],
    reference: "Código Civil, Ley de Propiedad Horizontal y Derecho Civil Balear",
    examplePlace: "Palma",
    exerciseType: "case",
    difficulty: "medium",
    minutes: 50
  },
  {
    code: "M02",
    title: "Derecho Tributario y Fiscal",
    description: "ITPAJD balear, IVA, IRPF, IRNR, Modelo 600 ATIB y deducciones autonómicas.",
    concepts: ["ITP", "AJD", "IVA", "IRPF", "Modelo 600 ATIB"],
    reference: "Normativa estatal tributaria y normativa autonómica balear vigente",
    examplePlace: "Inca",
    exerciseType: "calculation",
    difficulty: "advanced",
    minutes: 55
  },
  {
    code: "M03",
    title: "Ley de Arrendamientos Urbanos",
    description: "Contratos de vivienda, temporada, habitaciones, fianza en IBAVI y límites de uso turístico.",
    concepts: ["LAU", "vivienda habitual", "temporada", "fianza", "IBAVI"],
    reference: "Ley de Arrendamientos Urbanos y normativa balear de vivienda/turismo",
    examplePlace: "Ibiza",
    exerciseType: "decision",
    difficulty: "medium",
    minutes: 45
  },
  {
    code: "M04",
    title: "Regulaciones Técnicas Inmobiliarias",
    description: "LOE, CTE, habitabilidad, licencia municipal de primera ocupación, certificado energético, REBT y RITE.",
    concepts: ["LOE", "CTE", "licencia municipal", "CEE", "RITE"],
    reference: "LOE, CTE, normativa energética y Ley 7/2024 de simplificación administrativa balear",
    examplePlace: "Manacor",
    exerciseType: "comprehension",
    difficulty: "medium",
    minutes: 45
  },
  {
    code: "M05",
    title: "Derecho Hipotecario",
    description: "Registro de la Propiedad, notas simples, cargas, LCCI e hipotecas.",
    concepts: ["nota simple", "cargas", "hipoteca", "LCCI", "rango registral"],
    reference: "Ley Hipotecaria, Reglamento Hipotecario y LCCI",
    examplePlace: "Maó",
    exerciseType: "case",
    difficulty: "medium",
    minutes: 50
  },
  {
    code: "M06",
    title: "Derecho de Consumo Inmobiliario",
    description: "TRLGDCU, RD 515/1989, publicidad veraz, información precontractual y reclamaciones.",
    concepts: ["publicidad veraz", "folleto informativo", "TRLGDCU", "reclamación", "información precontractual"],
    reference: "TRLGDCU, RD 515/1989 y normativa autonómica de consumo",
    examplePlace: "Calvià",
    exerciseType: "decision",
    difficulty: "basic",
    minutes: 40
  },
  {
    code: "M07",
    title: "Derecho Urbanístico",
    description: "Clasificación del suelo LUIB, planeamiento, licencias, legalización en rústico e ITE/IEE Palma.",
    concepts: ["LUIB", "suelo rústico", "licencia", "planeamiento", "Catastro no legaliza"],
    reference: "LUIB, Ley 7/2024, planeamiento municipal e IEE/PG 2023 de Palma cuando aplique",
    examplePlace: "Sóller",
    exerciseType: "balear_scenario",
    difficulty: "advanced",
    minutes: 60
  },
  {
    code: "M08",
    title: "Valoraciones Inmobiliarias",
    description: "Métodos de comparación, coste, renta y residual aplicados al mercado insular.",
    concepts: ["comparación", "coste", "renta", "residual", "testigos"],
    reference: "Orden ECO/805/2003 como marco técnico de valoración cuando resulte aplicable",
    examplePlace: "Alcúdia",
    exerciseType: "calculation",
    difficulty: "advanced",
    minutes: 55
  },
  {
    code: "M09",
    title: "Derecho Profesional Inmobiliario y Vivienda",
    description: "Ley 5/2018, Ley 3/2024, ROAIB obligatorio, derecho a la vivienda y Viviendas de Precio Limitado.",
    concepts: ["Ley 5/2018", "Ley 3/2024", "VPL", "ROAIB obligatorio", "intermediación"],
    reference: "Ley 5/2018 y Ley 3/2024 de les Illes Balears",
    examplePlace: "Marratxí",
    exerciseType: "comprehension",
    difficulty: "advanced",
    minutes: 50
  },
  {
    code: "M10",
    title: "Marketing y Comercialización Inmobiliaria",
    description: "Captación, cualificación de compradores, portales y ficha técnica verificada.",
    concepts: ["captación", "cualificación", "ficha verificada", "portal", "embudo comercial"],
    reference: "Buenas prácticas profesionales y normativa de consumo/publicidad",
    examplePlace: "Santa Eulària",
    exerciseType: "decision",
    difficulty: "basic",
    minutes: 35
  },
  {
    code: "M11",
    title: "Conocimientos Arquitectónicos",
    description: "Sistemas constructivos, patologías en entorno marino, Libro del Edificio y conservación.",
    concepts: ["patologías", "humedad", "estructura", "Libro del Edificio", "conservación"],
    reference: "LOE, CTE y deber de conservación",
    examplePlace: "Ciutadella",
    exerciseType: "case",
    difficulty: "medium",
    minutes: 45
  },
  {
    code: "M12",
    title: "Gestión de Equipos Comerciales",
    description: "Dirección de agencia, compliance laboral, atención al cliente y liderazgo.",
    concepts: ["objetivos", "compliance laboral", "protocolo", "CRM", "calidad"],
    reference: "Normativa laboral básica y protocolos internos de agencia",
    examplePlace: "Llucmajor",
    exerciseType: "decision",
    difficulty: "basic",
    minutes: 35
  },
  {
    code: "M13",
    title: "Ética y Buenas Prácticas Inmobiliarias",
    description: "Código de conducta, transparencia y prevención de conflictos de interés.",
    concepts: ["ética", "transparencia", "conflicto de interés", "confidencialidad", "diligencia"],
    reference: "Códigos de conducta profesional y normativa de consumidores",
    examplePlace: "Formentera",
    exerciseType: "balear_scenario",
    difficulty: "basic",
    minutes: 35
  },
  {
    code: "M14",
    title: "Negociación y Cierre de Ventas",
    description: "Oferta, reserva, arras confirmatorias y penitenciales, escritura notarial.",
    concepts: ["oferta", "reserva", "arras", "notaría", "cierre"],
    reference: "Código Civil, práctica notarial y documentación precontractual",
    examplePlace: "Palma",
    exerciseType: "case",
    difficulty: "medium",
    minutes: 45
  },
  {
    code: "M15",
    title: "La Captación Inmobiliaria",
    description: "Prospección, nota de encargo, exclusiva, comprobación documental y precio.",
    concepts: ["nota de encargo", "exclusiva", "documentación", "precio", "captación"],
    reference: "Ley 3/2024 y buenas prácticas de intermediación",
    examplePlace: "Pollença",
    exerciseType: "decision",
    difficulty: "medium",
    minutes: 45
  },
  {
    code: "M16",
    title: "Tecnología Inmobiliaria",
    description: "CRM, firma digital, IA con revisión humana, RGPD y LOPDGDD.",
    concepts: ["CRM", "firma digital", "IA", "RGPD", "LOPDGDD"],
    reference: "RGPD, LOPDGDD y normativa de firma electrónica",
    examplePlace: "Eivissa",
    exerciseType: "comprehension",
    difficulty: "medium",
    minutes: 40
  },
  {
    code: "M17",
    title: "La Promoción Inmobiliaria",
    description: "Fases del desarrollo, avales de cantidades a cuenta y proyectos estratégicos residenciales.",
    concepts: ["promoción", "aval", "cantidades a cuenta", "licencia", "proyecto residencial"],
    reference: "LOE, normativa de consumidores y legislación balear de vivienda",
    examplePlace: "Campos",
    exerciseType: "case",
    difficulty: "advanced",
    minutes: 55
  },
  {
    code: "M18",
    title: "Prevención del Blanqueo de Capitales y FT",
    description: "Ley 10/2010, RD 304/2014, KYC, titular real, SEPBLAC y operaciones sospechosas.",
    concepts: ["KYC", "titular real", "SEPBLAC", "ROS", "diligencia debida"],
    reference: "Ley 10/2010 y RD 304/2014",
    examplePlace: "Andratx",
    exerciseType: "decision",
    difficulty: "advanced",
    minutes: 55
  },
  {
    code: "M19",
    title: "ROAIIB",
    description: "Requisitos del Registro Oficial de Agentes Inmobiliarios de les Illes Balears.",
    concepts: ["ROAIB/ROAIIB", "200 horas", "seguro RC", "caución", "distintivo oficial"],
    reference: "Ley 3/2024 de vivienda de les Illes Balears, trámite Govern y desarrollo aplicable",
    examplePlace: "Palma",
    exerciseType: "comprehension",
    difficulty: "medium",
    minutes: 45
  }
];

function moduleId(seed: ModuleSeed) {
  return seed.code.toLowerCase();
}

function buildModule(seed: ModuleSeed, index: number): Module {
  const id = moduleId(seed);
  const theme = seed.concepts.slice(0, 3).join(", ");
  return {
    id,
    code: seed.code,
    title: seed.title,
    order: index + 1,
    description: seed.description,
    estimatedMinutes: seed.minutes,
    difficulty: seed.difficulty,
    status: "not_started",
    progressPercentage: 0,
    score: null,
    lessons: [
      {
        id: `${id}-l1`,
        moduleId: id,
        title: `Fundamentos de ${seed.title}`,
        order: 1,
        summary: `Lectura guiada sobre ${theme} con foco profesional balear.`,
        content: `## Enfoque profesional\n\n${seed.description}\n\nPara el examen ROAIIB conviene dominar tres planos: concepto jurídico o técnico, documento que lo acredita y riesgo profesional si se informa mal al cliente. Referencia base: ${seed.reference}.\n\nEn una operación real el agente debe verificar la fuente documental antes de publicar, reservar o elevar una oferta. Si una cuestión depende de ordenanza municipal, nota registral, certificado técnico o criterio administrativo vigente, se debe dejar constancia y no convertir una estimación en certeza.`,
        easyExplanation: `Piensa en este módulo como una lista de comprobación: qué es, qué papel lo demuestra y qué problema aparece si lo ignoras. Primero identifica ${seed.concepts[0]}, luego revisa documentos y finalmente explica el riesgo al cliente en lenguaje claro.`,
        balearExample: `Caso ${seed.examplePlace}: antes de cerrar una operación, la agencia contrasta ${seed.concepts[0]} y ${seed.concepts[1]} con documentación actualizada. Si hay duda normativa local, se marca como pendiente de validación y se evita prometer un resultado.`,
        keyConcepts: seed.concepts,
        frequentErrors: [
          "Dar por válida información verbal sin soporte documental.",
          "Confundir normativa estatal con particularidades autonómicas o municipales.",
          "Usar datos desactualizados en fiscalidad, urbanismo, turismo o requisitos ROAIIB."
        ],
        examples: [
          {
            id: `${id}-ex1`,
            title: `Verificación en ${seed.examplePlace}`,
            scenario: `Cliente solicita publicar inmueble y pregunta por ${seed.concepts[0]}.`,
            application: `El agente solicita documento acreditativo, contrasta ${seed.reference} y explica límites de la información.`,
            isBalearContext: true
          }
        ],
        completed: false
      }
    ],
    exercises: [
      {
        id: `${id}-e1`,
        moduleId: id,
        type: seed.exerciseType,
        question: `En una operación en ${seed.examplePlace}, detectas una duda sobre ${seed.concepts[0]}. ¿Qué harías antes de recomendar firma o reserva?`,
        options: [
          "Publicar igualmente porque el cliente lo afirma",
          "Pedir evidencia documental, contrastar normativa aplicable y registrar la limitación",
          "Esperar a notaría sin avisar al comprador"
        ],
        expectedAnswer:
          "Pedir evidencia documental, contrastar normativa aplicable y registrar la limitación.",
        explanation: `La práctica prudente exige trazabilidad. ${seed.reference} puede requerir comprobación específica o criterio actualizado según municipio/isla.`,
        difficulty: seed.difficulty
      }
    ],
    quizQuestions: [
      {
        id: `${id}-q1`,
        question: `¿Cuál es la conducta profesional más segura ante una afirmación no documentada sobre ${seed.concepts[0]}?`,
        options: [
          "Convertirla en reclamo comercial",
          "Contrastar documento/fuente y advertir límites",
          "Omitirla hasta escritura",
          "Sustituirla por una estimación verbal"
        ],
        correctAnswerIndex: 1,
        explanation: `La intermediación profesional requiere información verificable y prudente, especialmente en contexto balear.`,
        sourceModuleId: id,
        legalReference: seed.reference,
        difficulty: seed.difficulty
      },
      {
        id: `${id}-q2`,
        question: `En ${seed.examplePlace}, ¿qué elemento conecta mejor este módulo con el servicio de agencia?`,
        options: [
          seed.concepts[0],
          "Solo decoración del anuncio",
          "La comisión sin encargo",
          "El calendario interno de visitas"
        ],
        correctAnswerIndex: 0,
        explanation: `${seed.concepts[0]} es concepto nuclear del módulo y condiciona la explicación al cliente.`,
        sourceModuleId: id,
        legalReference: seed.reference,
        difficulty: seed.difficulty
      }
    ]
  };
}

export const modules: Module[] = seeds.map(buildModule);

export const glossary: GlossaryItem[] = [
  {
    id: "g-roaiib",
    term: "ROAIB / ROAIIB",
    definition: "Registro Oficial de Agentes Inmobiliarios de les Illes Balears, de carácter público, administrativo y obligatorio según fuentes del cuaderno.",
    easyDefinition: "Registro balear obligatorio para ejercer como agente inmobiliario.",
    relatedModuleId: "m19",
    balearContext: "Vinculado a Ley 3/2024 y requisitos profesionales específicos."
  },
  {
    id: "g-vpl",
    term: "VPL",
    definition: "Vivienda de Precio Limitado, figura de política pública residencial balear.",
    easyDefinition: "Vivienda con precio condicionado por reglas públicas.",
    relatedModuleId: "m09",
    balearContext: "Debe comprobarse convocatoria, régimen y límites aplicables."
  },
  {
    id: "g-titular-real",
    term: "Titular real",
    definition: "Persona física que posee o controla directa o indirectamente más del 25% del capital o derechos de voto de una entidad.",
    easyDefinition: "La persona que realmente controla la sociedad compradora.",
    relatedModuleId: "m18",
    balearContext: "Clave en compras con sociedades extranjeras, holdings o estructuras opacas."
  },
  {
    id: "g-fein",
    term: "FEIN",
    definition: "Ficha Europea de Información Normalizada en crédito inmobiliario; condiciona el plazo precontractual mínimo antes de firmar hipoteca.",
    easyDefinition: "Oferta hipotecaria vinculante que el banco entrega antes de notaría.",
    relatedModuleId: "m05",
    balearContext: "El calendario de arras y escritura debe respetar el plazo LCCI."
  },
  {
    id: "g-iee",
    term: "IEE Palma",
    definition: "Informe de Evaluación de Edificios exigible en determinados inmuebles por antigüedad y ordenanza municipal.",
    easyDefinition: "Revisión técnica del edificio cuando toca por edad o norma municipal.",
    relatedModuleId: "m07",
    balearContext: "En Palma el cuaderno resalta el umbral de 50 años como referencia práctica."
  },
  {
    id: "g-ibavi",
    term: "IBAVI",
    definition: "Institut Balear de l'Habitatge, organismo público de vivienda.",
    easyDefinition: "Entidad balear de vivienda pública y trámites vinculados.",
    relatedModuleId: "m03",
    balearContext: "Referencia frecuente en fianzas y vivienda protegida."
  },
  {
    id: "g-atib",
    term: "Modelo 600 ATIB",
    definition: "Modelo usado ante la Agencia Tributaria de les Illes Balears para autoliquidar transmisiones y actos jurídicos documentados.",
    easyDefinition: "Formulario balear para pagar ITP/AJD cuando toca.",
    relatedModuleId: "m02",
    balearContext: "Importante en compraventas de segunda mano y determinados actos."
  },
  {
    id: "g-sepblac",
    term: "SEPBLAC",
    definition: "Servicio Ejecutivo de la Comisión de Prevención del Blanqueo de Capitales e Infracciones Monetarias.",
    easyDefinition: "Autoridad ante la que se comunican operaciones sospechosas.",
    relatedModuleId: "m18",
    balearContext: "Relevante en intermediación inmobiliaria con riesgo de blanqueo."
  },
  {
    id: "g-cne",
    term: "Certificado energético",
    definition: "Documento que informa de eficiencia energética del inmueble.",
    easyDefinition: "Etiqueta energética de la vivienda.",
    relatedModuleId: "m04",
    balearContext: "Necesario en comercialización salvo excepciones aplicables."
  },
  {
    id: "g-arras",
    term: "Arras penitenciales",
    definition: "Pacto que permite desistir perdiendo o devolviendo doblada la cantidad entregada, si se pacta expresamente.",
    easyDefinition: "Señal que permite salir del contrato con coste pactado.",
    relatedModuleId: "m14",
    balearContext: "Debe redactarse con claridad para evitar confusión con reserva o arras confirmatorias."
  },
  {
    id: "g-kyc",
    term: "KYC",
    definition: "Proceso de identificación y conocimiento del cliente en prevención de blanqueo.",
    easyDefinition: "Saber quién es el cliente y de dónde viene el dinero.",
    relatedModuleId: "m18",
    balearContext: "Crítico en operaciones con no residentes, sociedades o estructuras complejas."
  }
];

export const allQuestions = modules.flatMap((module) => module.quizQuestions);
export const allExercises = modules.flatMap((module) => module.exercises);

export const contentWarnings = [
  "NotebookLM advierte que la Ley 7/2024 suprime la cédula de habitabilidad de primera ocupación en obra nueva y la sustituye por licencia municipal; verificar caso concreto.",
  "NotebookLM señala ITP balear 2026 con escalas progresivas y cambios en umbrales de primera vivienda; confirmar en ATIB antes de asesorar.",
  "DL 4/2025 endurece oferta turística ilegal y nuevas plazas en plurifamiliares, especialmente Palma; no publicitar uso turístico sin prueba habilitante.",
  "Catastro describe y tributa, pero no legaliza metros ni usos urbanísticos.",
  "ROAIB/ROAIIB se trata como obligatorio en fuentes del cuaderno; seguros, caución y formación deben verificarse en sede Govern antes de inscripción."
];
