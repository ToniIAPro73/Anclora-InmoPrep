import type { Module, GlossaryItem } from "@/lib/types";

export const m12Module: Module = {
  id: "m12",
  code: "M12",
  title: "Gestión de Equipos Comerciales",
  order: 12,
  description:
    "Dirección de agencia, compliance laboral, atención al cliente y liderazgo.",
  estimatedMinutes: 35,
  difficulty: "basic",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m12-l1",
      moduleId: "m12",
      title: "Dirección, estrategia y estructura del equipo comercial",
      order: 1,
      summary:
        "Cómo diseñar el mapa de decisión, el rol del responsable comercial, el modelo de negocio, la estructura de puestos y la matriz RACI de un equipo inmobiliario.",
      content: `Un equipo comercial inmobiliario no se dirige repartiendo contactos: se dirige diseñando un sistema que convierta actividad en valor para el cliente, el equipo y el negocio. El módulo parte de un mapa de decisión con cuatro elementos que deben quedar definidos antes de abrir una vacante o reorganizar: **personas** (quién hace qué, con qué autonomía y con qué apoyo), **proceso** (cómo se transforma un lead en visita, oferta, reserva, escritura y recomendación), **datos** (qué actividad y calidad deben medirse sin invadir la privacidad) y **evidencia** (qué dato, registro o documento demuestra que la decisión se ejecutó y puede revisarse). En Mallorca este reto se amplifica por la estacionalidad, el mercado internacional, la diversidad de producto y la presión comercial que pueden sufrir captadores y asesores.

## La función del responsable comercial

El responsable comercial no sustituye al agente en cada operación: elimina obstáculos, asegura estándares y decide con información suficiente. Funciona como diseñador de contexto, traduciendo la estrategia de la empresa en prioridades semanales y protegiendo al equipo de dos extremos — la improvisación que hace perder oportunidades y la burocracia que impide atender a clientes. En una agencia también custodia el uso correcto de la marca, la publicidad, las herramientas y la información confidencial. Debe reservar capacidad para tres niveles de intervención: resolver bloqueos inmediatos, mejorar el sistema que produjo el bloqueo, y desarrollar a quien lo afronta. Si solo apaga incendios se vuelve indispensable pero el equipo no crece; si solo planifica, pierde contacto con los riesgos reales de la operación.

## Modelo comercial y segmentación

Antes de contratar o reorganizar, hay que definir qué negocio se quiere ejecutar: venta residencial, alquiler habitual, obra nueva, producto de lujo, suelo, inversión, gestión patrimonial o una combinación acotada. Cada línea necesita conocimientos, ciclos, documentación y tiempos distintos; un equipo que atiende todo con el mismo guion suele ser mediocre en las operaciones complejas y lento en las simples. La segmentación debe ser revisable: comprueba volumen suficiente, complejidad, margen y capacidad de soporte antes de crear una unidad especializada. Segmentar no es fragmentar — funciona cuando existe una visión común de cliente, una base de datos compartida y reglas de colaboración.

## Estructura de equipo, puestos clave y matriz RACI

La estructura mínima de una unidad inmobiliaria combina dirección comercial, captación, asesoramiento comprador o arrendatario, coordinación de operaciones y soporte administrativo. Cada puesto necesita una frontera clara: el asesor puede explicar documentación existente pero no certificar legalidad urbanística; el coordinador puede verificar que falta un documento, pero no sustituir una revisión jurídica. El error habitual es crear títulos sin autoridad real o contratar perfiles comerciales para resolver tareas de coordinación que exigen método y continuidad. Para resolver estas fricciones de autoridad (quién decide precio, canal, descuento, oferta o reparto), se usa una **matriz RACI** de una página: para cada actividad relevante se designa una persona responsable de ejecutar, una que aprueba, personas consultadas y personas informadas — incluyendo un umbral para decisiones económicas y una regla de sustitución cuando quien aprueba no está disponible.`,
      easyExplanation:
        "Antes de montar o cambiar un equipo comercial hay que tener claro quién hace qué, cómo se convierte un contacto en una venta, qué datos se miden y qué pruebas quedan de cada decisión. El jefe de equipo no vende por los demás: quita obstáculos, marca el estándar y decide cuando hace falta. Especializarse por tipo de producto (lujo, alquiler, obra nueva...) solo funciona si todos comparten la misma base de datos y las mismas reglas. Una matriz RACI de una hoja evita que dos comerciales prometan cosas distintas al mismo propietario.",
      balearExample:
        "Una agencia de Palma que atiende tanto pisos de alquiler habitual en Pere Garau como villas de lujo en Portals Nous decide crear una unidad especializada en producto de lujo tras comprobar que el volumen, la complejidad documental (visados de residencia, financiación internacional) y el margen lo justifican. Antes de asignar agentes por idioma, define una matriz RACI: el captador es responsable del precio de salida, pero la aprobación de cualquier rebaja superior al 5% recae en la dirección, no en el agente que atiende al comprador.",
      keyConcepts: [
        "mapa de decisión",
        "responsable comercial",
        "matriz RACI",
        "segmentación de mercado",
        "evidencia documental",
        "autoridad de decisión",
        "estructura de puestos",
        "umbral de aprobación",
      ],
      frequentErrors: [
        "Crear títulos o \"jefaturas\" sin autoridad real para tomar decisiones.",
        "Repartir zonas o portales por costumbre en lugar de por criterios de negocio.",
        "No definir quién aprueba una rebaja de precio, dejando que cada agente improvise.",
        "Confundir especialización con fragmentación (silos sin base de datos compartida).",
        "Que el captador sea el único custodio de toda la información del encargo.",
      ],
      examples: [
        {
          id: "m12-l1-ex-a",
          title: "Bloqueo por ausencia del responsable",
          scenario:
            "El único autorizado a aprobar rebajas de precio está de vacaciones y llega una oferta urgente.",
          application:
            "La matriz RACI debe incluir una regla de sustitución previa, no una improvisación por WhatsApp.",
          isBalearContext: false,
        },
        {
          id: "m12-l1-ex-b",
          title: "Especialización revisable",
          scenario:
            "Un agente que domina el alquiler de temporada empieza a acumular toda la cartera turística.",
          application:
            "La dirección revisa trimestralmente si la especialización mejora la calidad o crea un silo que perjudica al cliente.",
          isBalearContext: false,
        },
        {
          id: "m12-l1-ex-c",
          title: "RACI en publicación de anuncios",
          scenario: "Marketing publica un anuncio sin que el asesor lo revise.",
          application:
            "Definir responsable (marketing/asesor) y aprobador (quien controla evidencia y datos) antes de publicar.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l2",
      moduleId: "m12",
      title: "Contratación, relación laboral y onboarding",
      order: 2,
      summary:
        "Cómo distinguir relación laboral, autónoma o colaborativa; cómo diseñar un plan de contratación, seleccionar con criterios objetivos e incorporar con un plan 30-60-90.",
      content: `Las agencias inmobiliarias pueden colaborar con personas empleadas, profesionales autónomos, sociedades o redes de referencia, y cada fórmula tiene efectos laborales, fiscales, organizativos y de control distintos. El responsable comercial debe evitar diseñar una colaboración que en la práctica funcione como empleo sin tratarla ni documentarla como tal. Las señales de dependencia, horario impuesto, integración plena, medios de la empresa o control directo requieren revisión especializada. El **Estatuto de los Trabajadores (Real Decreto Legislativo 2/2015, BOE-A-2015-11430)** define su ámbito de aplicación para servicios retribuidos por cuenta ajena y bajo organización y dirección empresarial; la empresa debe revisar cada modelo de colaboración con asesoramiento especializado. El profesional autónomo organiza su propia actividad, riesgo y estructura, sin simulación; el colaborador externo aporta contactos o servicios definidos mediante acuerdo, con trazabilidad y reglas de confidencialidad. Antes de dar acceso total al CRM a un externo, debe determinarse finalidad, permisos, titularidad de los datos y devolución o borrado al finalizar.

## Plan de contratación y mapa de competencias

Una vacante debe nacer de una necesidad demostrable: volumen de cartera, retraso en seguimiento, falta de una especialidad, expansión territorial o sustitución planificada. Esa necesidad se traduce en una matriz de competencias con niveles — saber explicar, ejecutar con supervisión y ejecutar con autonomía — separando competencias técnicas (documentación, CRM, producto, territorio), comerciales (escucha, cualificación, negociación, gestión de objeciones) y de conducta (integridad, orientación a servicio, disciplina documental, colaboración). Un perfil que vende mucho pero no registra información, exagera anuncios o no respeta procedimientos puede destruir valor. La oferta de empleo debe describir misión, alcance, indicadores, soporte, modelo de retribución y proceso de selección: la ambigüedad atrae a quien necesita promesas, no a quien quiere ejecutar.

## Selección estructurada y entrevistas

En equipos comerciales es fácil sobredimensionar la capacidad de persuasión de un candidato. Una entrevista estructurada reduce ese sesgo obligando a evaluar situaciones concretas: cómo se obtuvo una captación, qué ocurrió ante un problema documental, cómo se gestionó una queja o cómo se protegió la información de un cliente. La selección debe evitar preguntar por datos de salud, vida familiar, orientación, edad o cualquier información no necesaria para evaluar la idoneidad profesional, y puede incluir una prueba de ética comercial (por ejemplo, cómo respondería la persona si un propietario pide publicitar un uso turístico no verificado). Las referencias deben contrastarse con consentimiento y preguntas centradas en hechos observables.

## Onboarding 30-60-90 días

La incorporación no termina con una contraseña y una foto de equipo: debe convertir a la persona en operativa sin exponer al cliente a pruebas improvisadas. Un plan de 30-60-90 días fija qué debe conocerse, practicarse y ejecutarse en cada etapa: los primeros treinta días se priorizan producto, CRM, normativa básica, shadowing y ejercicios de casos; entre el día 31 y 60, contactos y visitas supervisadas con revisión semanal de calidad; entre 61 y 90, cartera propia acotada, objetivos razonables y evaluación de autonomía. Debe asignarse un mentor operativo sin que sustituya al responsable, y entregarse un playbook con una lista de evidencias a completar — el aprendizaje se demuestra con práctica y revisión, no con asistencia a reuniones.`,
      easyExplanation:
        "Antes de contratar hay que tener claro por qué se necesita a esa persona y qué debe saber hacer, con niveles (aprender, hacer con ayuda, hacer solo). En la entrevista se pregunta por casos reales, no solo por simpatía. Cuando alguien colabora sin ser empleado, hay que asegurarse de que realmente trabaja como autónomo o colaborador y no como un empleado disfrazado, porque eso tiene consecuencias legales. Y cuando entra alguien nuevo, se le acompaña 90 días con un plan claro antes de dejarle solo ante un cliente.",
      balearExample:
        "Una inmobiliaria de Manacor quiere incorporar a un \"colaborador freelance\" que trabajará solo con comisión, decidirá sus horarios y usará su propio coche, pero la empresa pretende exigirle horario fijo de oficina y control diario de llamadas. El responsable comercial detiene la contratación bajo esa fórmula y pide revisión laboral, porque las señales (horario impuesto, integración plena, control directo) apuntan a una relación laboral encubierta, no a autonomía real.",
      keyConcepts: [
        "Estatuto de los Trabajadores",
        "relación laboral encubierta",
        "profesional autónomo",
        "mapa de competencias",
        "entrevista estructurada",
        "plan 30-60-90",
        "mentor operativo",
        "playbook de incorporación",
      ],
      frequentErrors: [
        "Diseñar una \"falsa autonomía\" para ahorrar costes o evitar obligaciones laborales.",
        "Contratar por afinidad, disponibilidad inmediata o carisma en vez de por criterios de descarte objetivos.",
        "Dar acceso ilimitado a datos o al CRM a un colaborador externo sin definir titularidad ni devolución.",
        "Basar la contratación en frases como \"tiene experiencia\" sin evidencia verificable.",
        "Convertir el onboarding en una simple entrega de contraseñas sin acompañamiento real.",
      ],
      examples: [
        {
          id: "m12-l2-ex-a",
          title: "Falsa autonomía",
          scenario:
            "Un \"autónomo\" que factura pero cumple horario de oficina y usa exclusivamente medios de la empresa.",
          application:
            "Revisar el modelo con asesoramiento laboral antes de que escale el riesgo.",
          isBalearContext: false,
        },
        {
          id: "m12-l2-ex-b",
          title: "Prueba de ética en entrevista",
          scenario:
            "Se pregunta al candidato cómo actuaría si un propietario pide anunciar un uso turístico no autorizado.",
          application:
            "La respuesta revela criterio profesional más que la narrativa de ventas.",
          isBalearContext: false,
        },
        {
          id: "m12-l2-ex-c",
          title: "Onboarding con evidencia",
          scenario:
            "A los 60 días se revisa si el nuevo asesor completa expedientes sin pedir ayuda básica.",
          application:
            "Si no puede, se refuerza formación antes de darle cartera propia.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l3",
      moduleId: "m12",
      title: "Liderazgo, cultura y gestión del rendimiento",
      order: 3,
      summary:
        "Liderazgo situacional, cultura comercial, planificación de capacidad y territorio, KPIs, rituales de equipo, coaching 1:1 y procesos de mejora del rendimiento.",
      content: `El liderazgo situacional combina claridad y adaptación: no todos los miembros del equipo necesitan la misma dirección. A una persona nueva se le dan pasos concretos, ejemplos y revisión frecuente; a alguien competente pero inseguro se le acompaña con preguntas, práctica y feedback; a quien domina una tarea se le delega con resultado esperado y límites claros. Delegar no es desentenderse: significa conservar la responsabilidad de diseñar el sistema y verificar resultados. La delegación exige dos conversaciones — una antes de empezar, para fijar resultado y límites, y otra al terminar, para revisar criterio y aprendizaje. Antes de intervenir, el responsable debe identificar si el problema es de capacidad, conocimiento, herramientas, prioridad o motivación: dar una charla motivacional a una falta de proceso desperdicia tiempo.

## Cultura comercial y normas no negociables

Toda agencia transmite una cultura aunque no la haya escrito. Si se felicita al que cierra ocultando una carga, se aprende que el resultado justifica el método; si se documenta una advertencia difícil y se protege al cliente, se aprende que la reputación importa. La dirección debe formular pocas reglas no negociables —veracidad (no anunciar ni prometer lo que no esté confirmado por fuente fiable), trazabilidad (registrar contacto, autorización, cambio de precio, oferta y decisión relevante) y respeto (no discriminar, acosar, ridiculizar ni presionar indebidamente)— y aplicarlas de forma consistente a personas con mejor y peor rendimiento. La cultura se prueba cuando renunciar a una operación parece costoso: en ese momento el equipo necesita una regla previa, no una improvisación moral.

## Capacidad, territorios y cartera; KPIs y rituales

La planificación de capacidad combina personas disponibles, horas útiles, complejidad del producto, desplazamientos, temporada y calidad de servicio; en Mallorca el territorio añade costes de desplazamiento, horarios de vuelos, idioma y estacionalidad. Repartir zonas o leads por costumbre suele generar inequidad, abandono de cartera y discusiones sobre propiedad del cliente: la asignación debe ser explicable por reglas publicadas (disponibilidad, especialidad, idioma, territorio, carga y continuidad). Los indicadores deben distinguir **actividad** (primeras respuestas, contactos útiles, captaciones, reuniones, visitas y seguimientos completados), **calidad** (expedientes completos, anuncios verificados, satisfacción, cumplimiento de SLA y datos actualizados) y **resultado** (conversión por etapa, margen, plazo de venta, reservas y escrituras); medir solo facturación llega tarde. La cadencia mínima de reuniones combina una reunión corta de coordinación, una revisión semanal de pipeline y conversaciones individuales; cada ritual debe tener propósito, duración, preparación, responsable y salida concreta con decisiones, tareas, responsables y fecha de seguimiento.

## Coaching 1:1 y feedback correctivo

Las conversaciones individuales no son un interrogatorio ni una sesión de terapia: son una herramienta que conecta los objetivos del equipo con la realidad de la persona, revisando resultados, casos concretos, carga de trabajo, habilidades a desarrollar y apoyo necesario, y terminando con un compromiso pequeño y verificable. Un proceso de mejora del rendimiento debe separar hecho, impacto, expectativa y apoyo: primero se describe una conducta concreta y verificable; después el efecto sobre cliente, equipo, negocio o riesgo; por último se acuerda el estándar y el plan de seguimiento. Si el problema es grave —ocultar información, uso indebido de datos o conducta discriminatoria— la respuesta debe escalarse conforme a las normas internas y al asesoramiento correspondiente. Un plan de mejora debe ser proporcional: no todos los fallos requieren el mismo tratamiento.`,
      easyExplanation:
        "No todo el mundo necesita el mismo tipo de jefe: a quien empieza se le da instrucciones claras, a quien tiene experiencia se le da libertad con límites. La cultura de un equipo no es lo que se dice en un cartel, sino lo que se premia y se corrige de verdad. Repartir zonas y clientes debe hacerse con reglas escritas, no por costumbre, para evitar peleas. Medir solo la facturación llega tarde: hay que mirar también cuánta actividad y qué calidad hay detrás. Y cuando alguien comete un error, primero se habla de hechos, no de sensaciones.",
      balearExample:
        "En una oficina de Inca, un agente veterano lleva meses incumpliendo el registro de visitas a fincas rústicas aisladas alegando \"falta de tiempo\". El responsable no lo trata con una charla motivacional genérica: identifica que el problema es de proceso (falta un sistema ágil de registro móvil) y de prioridad, no de actitud, y rediseña el flujo de registro antes de exigir más disciplina.",
      keyConcepts: [
        "liderazgo situacional",
        "delegación con límites",
        "normas no negociables",
        "KPI de actividad/calidad/resultado",
        "cadencia de reuniones",
        "coaching 1:1",
        "proceso de mejora del rendimiento",
        "escalada disciplinaria",
      ],
      frequentErrors: [
        "Atribuir un bajo resultado a falta de esfuerzo sin revisar stock, precio, calidad de leads o carga.",
        "Usar rankings públicos como única palanca de motivación, generando competencia destructiva.",
        "Convertir la reunión diaria en una exposición de métricas en lugar de anticipar riesgos.",
        "Dar feedback vago (\"te falta actitud\") sin conducta observable ni impacto concreto.",
        "Mezclar una conversación de apoyo con una sanción sin avisar del cambio de naturaleza.",
      ],
      examples: [
        {
          id: "m12-l3-ex-a",
          title: "Delegación con revisión",
          scenario: "Se delega una negociación de precio a un asesor con autonomía.",
          application:
            "Se fija de antemano el margen de maniobra y se revisa el resultado después, no se abandona sin seguimiento.",
          isBalearContext: false,
        },
        {
          id: "m12-l3-ex-b",
          title: "Cultura observada",
          scenario: "Se corrige públicamente un anuncio inexacto y se explica por qué.",
          application:
            "El equipo aprende que la veracidad se exige de verdad, no solo se declara.",
          isBalearContext: false,
        },
        {
          id: "m12-l3-ex-c",
          title: "KPI que genera pregunta",
          scenario: "Muchos leads pero pocas visitas.",
          application:
            "Investigar si falla la respuesta, la cualificación o el precio antes de presionar por más leads.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l4",
      moduleId: "m12",
      title: "Proceso comercial, atención al cliente y gestión de datos",
      order: 4,
      summary:
        "El ciclo completo del lead: playbook, cualificación, atención y visitas, negociación, gestión de inventario, CRM y analítica de decisiones.",
      content: `El playbook comercial reúne la forma mínima de ejecutar cada fase: captación, validación de documentación, análisis de precio, alta en CRM, producción de anuncio, respuesta, cualificación, visita, oferta, reserva, coordinación y posventa, incluyendo plantillas, checklists, ejemplos y umbrales de escalado — qué no puede hacer el agente sin confirmación profesional, técnica o jurídica. Un playbook no convierte a las personas en robots: les libera de improvisar lo básico para aportar criterio en lo complejo, y mejora incorporando ejemplos reales anonimizados tras cada incidencia importante.

## Ciclo de vida del lead y cualificación

Un lead no es una persona "propiedad" de un agente: es una oportunidad de relación que la empresa debe gestionar de forma trazable y respetuosa, con estados inequívocos (nuevo, contactado, cualificado, en seguimiento, visita prevista, oferta, reserva, perdido, pausado o derivado) y una acción siguiente para cada uno. La cualificación comercial debe responder qué busca la persona, qué problema intenta resolver, qué presupuesto y financiación tiene, quién decide, qué plazo maneja y qué limitaciones son relevantes; en Mallorca también importan residencia, idioma, disponibilidad para visitar, fiscalidad internacional y necesidad de asesoramiento externo. No debe convertirse en un filtro arbitrario ni discriminar por nacionalidad, origen, edad o estado familiar.

## Atención, seguimiento y visitas

El nivel de servicio debe combinar velocidad y calidad: el equipo debe acordar horarios de atención, canales autorizados, responsabilidad de guardia, reglas de WhatsApp y criterios para no prometer disponibilidad, precio, licencia o rendimiento sin confirmar. La gestión de equipos debe estandarizar el antes, durante y después de la visita: antes, confirmar accesos, estado, ocupación, documentación disponible, seguridad y necesidades del cliente; durante, explicar hechos confirmados, escuchar y no afirmar lo que el expediente no respalde; después, registrar feedback, riesgos detectados y próxima acción. Las visitas a inmuebles vacíos, rústicos o aislados requieren además reglas de seguridad y coordinación.

## Ofertas, negociación, inventario, CRM y analítica

El equipo debe disponer de una hoja de oferta homogénea (identificación de inmueble, precio, plazos, financiación, arras, condiciones suspensivas, inventario, cargas y documentación pendiente y vigencia), sabiendo qué puede negociar la persona asesora y qué necesita autorización. La gestión de inventario revisa el rendimiento de cada captación con criterios de salud: tiempo en mercado, actividad, visitas, feedback, comparables, cambios de condiciones y calidad de material — no basta con "más exposición" como respuesta a un problema de precio o viabilidad. El CRM es el sistema de memoria de la organización: exige reglas de calidad de dato (campos esenciales, nomenclatura, fuentes, permisos, historial, duplicados, caducidad y cierre de oportunidades), con auditorías periódicas de muestra que sean formativas antes que punitivas. Los paneles y la analítica deben relacionar fuentes de demanda, calidad de lead, conversiones, ciclos, rentabilidad, cargas de trabajo y satisfacción, separando indicadores de control (alertan) de indicadores de aprendizaje (ayudan a descubrir por qué), y generando preguntas accionables antes que justificando decisiones ya tomadas.`,
      easyExplanation:
        "Un cliente potencial (lead) no es \"de\" un agente, es de la empresa, y debe seguirse un proceso claro desde el primer contacto hasta la firma. Antes de enseñar un piso hay que confirmar que se puede visitar y con qué documentación se cuenta; durante la visita solo se cuentan hechos comprobados. Las ofertas se recogen por escrito y con datos completos para evitar líos después. El CRM es la memoria del equipo: si algo no está registrado ahí, es como si no existiera. Y los paneles de datos sirven para hacer preguntas útiles, no para presumir de cifras.",
      balearExample:
        "En una agencia de Santa Ponça, un lead internacional pide visitar una villa aislada en temporada baja. Antes de confirmar la visita, el coordinador revisa accesos, seguridad y disponibilidad del propietario; durante la visita, el asesor aclara que la piscina no tiene licencia de uso verificada en lugar de asegurar que \"todo está en regla\"; después registra en el CRM el feedback (interesado, pero pide comprobar la licencia) como próxima acción trazable.",
      keyConcepts: [
        "playbook comercial",
        "ciclo de vida del lead",
        "cualificación responsable",
        "hoja de oferta homogénea",
        "gestión de inventario",
        "calidad de dato en CRM",
        "indicador de control vs. indicador de aprendizaje",
        "escalado documental",
      ],
      frequentErrors: [
        "Confundir \"contactado\" con \"atendido\" sin haber comprendido la necesidad real.",
        "Afirmar en una visita datos que el expediente no respalda (licencias, superficies, rentas).",
        "Presentar verbalmente una oferta incompleta como \"cerrada\".",
        "Usar solo \"más exposición\" ante un problema real de precio o documentación.",
        "Guardar información fuera del CRM (chats personales, carpetas sueltas) rompiendo la trazabilidad.",
      ],
      examples: [
        {
          id: "m12-l4-ex-a",
          title: "Reasignación de lead",
          scenario: "Se reasigna un lead inactivo tras 30 días sin actividad verificable.",
          application: "Informar al cliente del cambio y conservar el historial.",
          isBalearContext: false,
        },
        {
          id: "m12-l4-ex-b",
          title: "Hoja de oferta completa",
          scenario: "Un comprador ofrece verbalmente un precio con condiciones difusas.",
          application: "Exigir la hoja homogénea antes de considerarla una oferta formal.",
          isBalearContext: false,
        },
        {
          id: "m12-l4-ex-c",
          title: "Auditoría de CRM formativa",
          scenario: "Se detectan campos vacíos en el 20% de los expedientes.",
          application: "Corregir con formación, no con sanción, salvo incumplimiento consciente.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l5",
      moduleId: "m12",
      title: "Incentivos, colaboración entre profesionales y calidad de servicio",
      order: 5,
      summary:
        "Diseño de retribución variable, colaboración y referidos entre agentes, y gestión estructurada de quejas y calidad de servicio.",
      content: `La comisión es una herramienta de alineación, no un sustituto de salario, formación, proceso o responsabilidad. Un diseño de incentivos debe premiar resultados relevantes sin empujar a comportamientos indebidos: hay que definir qué evento devenga el derecho (captación, reserva, escritura, cobro efectivo u otro), cómo se reparte la comisión, qué ocurre si la operación se cancela, quién aprueba excepciones y qué pasa con el trabajo compartido. En relaciones laborales deben considerarse el contrato y el convenio aplicable y las reglas retributivas; en colaboraciones externas, el acuerdo mercantil y la fiscalidad correspondiente. La retribución variable debe ser comprensible para quien la recibe y verificable para quien la administra, incluyendo hitos de calidad (expediente, satisfacción, cooperación o cumplimiento), no solo volumen, y sin cambios retroactivos: las modificaciones deben comunicarse, documentarse y revisarse profesionalmente cuando proceda.

## Colaboración, referidos y reparto de operaciones

La colaboración entre agentes multiplica alcance, pero también puede generar conflicto de intereses, duplicidad y pérdida de control sobre el mensaje. En operaciones compartidas deben fijarse por escrito el origen del contacto, el encargo, las fuentes de información, la responsabilidad frente a cada parte, la confidencialidad, el reparto económico, la comunicación pública y el registro de actividad. La colaboración exige un responsable de coordinación, incluso si varias personas aportan valor: la falta de un registro común crea versiones distintas sobre clientes, visitas, comisiones y autorizaciones. La colaboración profesional no consiste en repartir tarjetas: consiste en combinar competencias sin perder trazabilidad, transparencia ni la confianza del cliente.

## Calidad de servicio y gestión de quejas

Una queja no siempre revela mala fe; a menudo revela una promesa ambigua, una falta de seguimiento o un expediente sin responsable claro. Un sistema de calidad permite recibir, clasificar y responder incidencias sin defensividad, distinguiendo petición de información, desacuerdo comercial, fallo operativo, reclamación formal y posible incumplimiento grave. La dirección debe revisar patrones: varias quejas sobre el mismo tipo de anuncio, agente, proveedor o fase indican un problema de sistema, no solo un incidente aislado. La gestión de quejas debe diferenciar reparación (resolver la situación del cliente) y prevención (que el mismo fallo no se repita): cada incidente relevante debe terminar con una decisión — actualizar plantilla, formar, cambiar una regla, revisar a un proveedor o introducir un control adicional. La confianza se recupera menos con una disculpa genérica que con una explicación precisa de lo ocurrido, una acción concreta y una prevención verificable.`,
      easyExplanation:
        "Las comisiones deben premiar resultados de calidad, no solo cerrar rápido, y deben poder explicarse con un ejemplo de cálculo claro. Cuando dos agentes colaboran en una operación, hay que dejar por escrito quién hizo qué y cómo se reparte, para no discutir después. Y cuando llega una queja de un cliente, no hay que ponerse a la defensiva: hay que investigar si es un problema puntual o algo que se repite y que hay que corregir de raíz.",
      balearExample:
        "En Alcúdia, dos agentes de la misma oficina colaboran en la venta de un chalet: uno aportó la captación y otro cerró la venta con un comprador extranjero. Antes de repartir la comisión, la dirección revisa el acuerdo escrito de colaboración firmado al inicio, que especifica el reparto 60/40 según quién aportó el contacto cualificado y quién gestionó la negociación, evitando la disputa posterior.",
      keyConcepts: [
        "retribución variable",
        "devengo de comisión",
        "co-brokerage",
        "acuerdo de colaboración por escrito",
        "reparación vs. prevención",
        "patrón de quejas",
        "incentivo perverso",
        "trazabilidad de reparto",
      ],
      frequentErrors: [
        "Diseñar sistemas opacos de reparto de comisiones que generan competencia interna desleal.",
        "Cambiar reglas de comisión con efecto retroactivo.",
        "Enviar expedientes completos a terceros colaboradores sin autorización ni necesidad.",
        "Borrar mensajes o improvisar versiones defensivas ante una queja.",
        "Cerrar una queja sin extraer ni aplicar el aprendizaje al playbook o al panel de calidad.",
      ],
      examples: [
        {
          id: "m12-l5-ex-a",
          title: "Comisión con hito de calidad",
          scenario:
            "Se añade a la comisión un componente ligado a expediente completo y satisfacción, no solo a volumen.",
          application: "Reduce presión para cerrar operaciones dudosas.",
          isBalearContext: false,
        },
        {
          id: "m12-l5-ex-b",
          title: "Acta de colaboración",
          scenario: "Tres agentes participan en una operación compleja.",
          application:
            "Se cierra la colaboración con un acta simple de resultado y reparto para evitar discusiones meses después.",
          isBalearContext: false,
        },
        {
          id: "m12-l5-ex-c",
          title: "Queja como oportunidad",
          scenario: "Varias quejas coinciden en falta de seguimiento tras la visita.",
          application: "Se revisa y corrige el protocolo de seguimiento para todo el equipo.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l6",
      moduleId: "m12",
      title: "Modelos de trabajo, sostenibilidad del rendimiento y gestión de conflictos",
      order: 6,
      summary:
        "Trabajo híbrido y remoto, prevención del desgaste comercial, gestión de conflictos internos y ética comercial bajo presión de objetivos.",
      content: `La actividad inmobiliaria mezcla oficina, visitas, llamadas, trabajo documental y desplazamientos. El modelo híbrido puede mejorar servicio y flexibilidad, pero exige reglas sobre disponibilidad, herramientas, información, reuniones, seguridad y desconexión. El trabajo a distancia regular se regula por la **Ley 10/2021**; en gestión comercial, además de productividad, deben revisarse medios, acuerdos, prevención, datos y derecho a desconexión. El responsable debe gestionar por resultados y calidad, no por presencia continua en una pantalla, determinando dónde se registra la información, cuándo se está disponible, quién cubre una ausencia y qué medios se proporcionan; quienes trabajan fuera deben tener las mismas oportunidades de información, formación y visibilidad que quienes acuden a la oficina.

## Carga de trabajo, sostenibilidad y conflictos

El desgaste comercial aparece cuando se acumulan leads sin clasificar, visitas sin preparación, expectativas de disponibilidad continua y presión por objetivos mal definidos. El responsable debe vigilar señales de sobrecarga —retrasos sistemáticos de registro, respuestas defensivas, errores repetidos, jornadas prolongadas, pérdida de atención o falta de descanso— antes de que aparezcan la baja, la rotación o el conflicto; reorganizar preventivamente es más eficaz que pedir esfuerzo extra de forma indefinida. Un equipo sostenible no trabaja menos por definición: trabaja con menos desperdicio, menos urgencias evitables y mejor capacidad para resolver lo importante. Los conflictos más habituales en equipos inmobiliarios se refieren a reparto de leads, comisiones, autoría de una captación, uso de datos, estilo de comunicación, prioridades y reconocimiento. El responsable debe actuar pronto, escuchar a cada parte, separar hechos de interpretaciones, revisar reglas y decidir con consistencia; algunas conductas pueden superar el conflicto ordinario y requerir protocolo específico por acoso, discriminación, seguridad o incumplimiento grave. Un conflicto debe tener cierre operativo: acordar "mejorar la comunicación" no basta, hay que decidir qué cambia — una asignación, un criterio, una compensación, un límite de comunicación o una formación.

## Ética comercial y gestión de la presión

El responsable comercial marca el tono de la presión. Si exige volumen sin preguntar por calidad, el equipo aprende a llenar el embudo con contactos inútiles; si penaliza la advertencia responsable, el agente tenderá a callar una carga o una incertidumbre. La presión ética se diseña desde el objetivo: si un indicador premia reservas sin tener en cuenta desistimientos, documentación o satisfacción, empuja al equipo a cerrar rápido. Añadir contrapesos de calidad y permitir que una persona eleve una duda sin que se interprete como deslealtad protege al cliente y al negocio. El rendimiento ético es más lento solo en apariencia: evita devoluciones, reclamaciones, litigios, rotación y pérdida de reputación que destruyen valor después.`,
      easyExplanation:
        "Trabajar en remoto o en horario flexible está bien, pero hay que dejar claro cuándo se está disponible, con qué herramientas y cómo se protege el descanso. Un equipo se \"quema\" cuando se acumula trabajo sin orden y sin descanso: hay que detectarlo antes de que llegue la baja o la rotación. Los conflictos entre compañeros (por comisiones, por clientes) hay que resolverlos rápido y con reglas claras, no dejarlos crecer en grupos de WhatsApp. Y presionar por resultados está bien mientras no empuje a mentir o a ocultar problemas.",
      balearExample:
        "Una asesora de una agencia de Sóller comunica en agosto que está agotada por tener que visitar sola fincas rústicas aisladas en varios municipios sin poder registrarlo todo en el CRM. En vez de interpretar esto como falta de compromiso, el responsable reorganiza rutas, limita la carga temporal, define un protocolo de visita segura y programa revisiones — evitando así un riesgo de seguridad y de salud laboral.",
      keyConcepts: [
        "trabajo a distancia",
        "Ley 10/2021",
        "derecho a desconexión",
        "desgaste comercial (burnout)",
        "gestión de conflictos",
        "protocolo de acoso",
        "presión sana vs. presión dañina",
        "incentivo perverso",
      ],
      frequentErrors: [
        "Confundir \"estar conectado\" con \"estar trabajando\" en modelos híbridos.",
        "Celebrar la disponibilidad extrema como modelo, generando dependencia y trato desigual.",
        "Resolver conflictos con acuerdos secretos que contradicen la política general.",
        "Interpretar una señal de sobrecarga como falta de compromiso en lugar de un problema de sistema.",
        "Ocultar criterios de ranking o de reparto económico, generando rumor y desconfianza.",
      ],
      examples: [
        {
          id: "m12-l6-ex-a",
          title: "Guardias claras en híbrido",
          scenario: "Un cliente llama fuera de horario un domingo.",
          application:
            "Existe un protocolo de guardia que evita la disponibilidad permanente no planificada.",
          isBalearContext: false,
        },
        {
          id: "m12-l6-ex-b",
          title: "Conflicto por atribución de captación",
          scenario: "Dos agentes reclaman la misma captación.",
          application: "Se revisan registros de CRM y se decide con reglas, no por afinidad.",
          isBalearContext: false,
        },
        {
          id: "m12-l6-ex-c",
          title: "Objetivo con contrapeso de calidad",
          scenario: "Un objetivo de reservas no considera los desistimientos.",
          application: "Se añade un indicador de calidad para evitar cierres forzados.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m12-l7",
      moduleId: "m12",
      title: "Cumplimiento normativo, protección de datos, IA, prevención y continuidad",
      order: 7,
      summary:
        "Igualdad y no discriminación, protección de datos del equipo y clientes, gobernanza del uso de IA, prevención de riesgos laborales, salida y handover, y mejora continua trimestral.",
      content: `La igualdad no es un bloque administrativo ajeno a ventas: afecta a cómo se contrata, se asignan oportunidades, se forma, se retribuye y se promociona. La dirección debe asegurar criterios objetivos de acceso, formación, evaluación, promoción y remuneración; la selección de perfiles comerciales es especialmente vulnerable a sesgos por imagen, edad, origen, idioma o situación personal, y el equipo debe atender a clientes diversos sin discriminación. El marco normativo citado incluye la **Ley Orgánica 3/2007**, los **Reales Decretos 901/2020 y 902/2020** sobre igualdad y transparencia retributiva, y el **RD 1026/2024**, que desarrolla medidas planificadas de igualdad y no discriminación LGTBI en empresas (también citado como Ley 4/2023 y RD 1026/2024 sobre igualdad y no discriminación de personas LGTBI). En empresas con umbrales legales de plantilla pueden existir obligaciones formales reforzadas de planes de igualdad; toda organización debe prevenir la discriminación aunque no alcance esos umbrales.

## Protección de datos en la gestión del equipo

Un responsable trata datos de candidatos, personas trabajadoras, colaboradores, propietarios, compradores y arrendatarios, aplicando minimización, confidencialidad, acceso limitado, conservación razonable y seguridad. En el contexto laboral la empresa puede tratar información necesaria para gestionar la relación, pero no tiene acceso ilimitado a la vida personal; en el contexto comercial, el CRM no justifica recoger datos sensibles ni compartir expedientes sin base y sin información. Los accesos deben revisarse al cambiar de puesto, proyecto o relación contractual, con revocación rápida de credenciales. El marco de referencia es el **RGPD**, la **LOPDGDD (Ley Orgánica 3/2018)** y los criterios de la **AEPD**: minimización, proporcionalidad, transparencia, seguridad y confidencialidad deben aplicarse también al CRM, la mensajería y las herramientas de supervisión.

## IA, prevención de riesgos y continuidad de cartera

Las herramientas de IA pueden resumir llamadas, proponer textos, clasificar consultas, traducir o analizar patrones, pero su uso en un equipo comercial requiere una política escrita: qué herramientas están aprobadas, qué datos se pueden introducir, cómo se revisa la salida y cuándo es obligatoria la intervención humana; una alucinación sobre superficie, licencia o precio puede acabar en publicidad engañosa o una mala decisión — nunca debe delegarse en IA una decisión que afecte a personas o a la veracidad de una operación sin supervisión humana. La prevención de riesgos laborales no se limita a obras o cascos: la **Ley 31/1995 de Prevención de Riesgos Laborales (LPRL)** reconoce el derecho a protección frente a riesgos laborales y sitúa la evaluación, información, formación y medidas preventivas dentro de la gestión ordinaria de la empresa, incluyendo desplazamientos, visitas a inmuebles aislados, pantallas, estrés, conflictos y trabajo fuera de horario. Finalmente, la salida de una persona debe activarse como proceso de continuidad —revisión de cartera, estado de operaciones, contactos críticos, documentos, llaves, accesos, comunicaciones a clientes y cierre de credenciales— y la mejora continua trimestral debe cerrar el ciclo completo: detectar, decidir, implantar, medir y comunicar, eligiendo pocas prioridades con dueño, fecha, indicador y revisión posterior.`,
      easyExplanation:
        "Contratar, formar y pagar debe hacerse con criterios justos para todo el mundo, sin favoritismos ni discriminación. Los datos de clientes, candidatos y compañeros deben tratarse con cuidado: solo se accede a lo necesario y se borra el acceso cuando alguien cambia de puesto o se va. Si se usa inteligencia artificial para redactar o clasificar, siempre debe revisarla una persona antes de publicar o decidir nada importante. La prevención de riesgos también aplica a visitas solitarias o estrés, no solo a obras. Y cuando alguien deja la empresa, hay que tener todo bien organizado para que el cliente no note la diferencia.",
      balearExample:
        "Una agencia de Marratxí incorpora una herramienta de IA para redactar borradores de anuncios a partir de las fichas de captación. El responsable establece que ningún texto se publica sin que un asesor que conozca el expediente verifique datos, fuentes y tono, tras detectar que la herramienta había inventado una superficie útil superior a la real en un anuncio de prueba.",
      keyConcepts: [
        "RD 1026/2024",
        "RGPD",
        "LOPDGDD",
        "AEPD",
        "LPRL (Ley 31/1995)",
        "gobernanza de IA",
        "minimización de datos",
        "handover de cartera",
        "plan de mejora trimestral",
      ],
      frequentErrors: [
        "Descargar listas de contactos para fines personales o enviarlas por canales no autorizados.",
        "Dar acceso ilimitado a datos sin revisar la finalidad ni el rol de quien accede.",
        "Publicar texto o imagen generado por IA sin verificación humana del expediente.",
        "Normalizar que una persona haga sola una visita que percibe insegura.",
        "Improvisar la salida de una persona sin plan de continuidad, perdiendo leads y generando reclamaciones.",
      ],
      examples: [
        {
          id: "m12-l7-ex-a",
          title: "Revisión de accesos",
          scenario: "Un agente cambia de equipo territorial.",
          application: "Se revisan y ajustan sus permisos de CRM antes de que continúe operando.",
          isBalearContext: false,
        },
        {
          id: "m12-l7-ex-b",
          title: "Prevención en visitas aisladas",
          scenario: "Una visita a una finca rústica sin cobertura móvil.",
          application:
            "Se registra ubicación, contacto de seguridad y confirmación de regreso antes de autorizarla.",
          isBalearContext: false,
        },
        {
          id: "m12-l7-ex-c",
          title: "Handover completo",
          scenario: "Un asesor deja la empresa con cartera activa.",
          application:
            "Se entrega lista de operaciones, documentos, riesgos y responsable receptor antes de revocar accesos.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m12-e1",
      moduleId: "m12",
      type: "case",
      question:
        "Una oficina recibe diez solicitudes de compradores internacionales durante una campaña. Dos agentes sostienen que los leads les pertenecen: uno afirma haber creado el contenido y otro que respondió primero. El CRM no tiene regla de asignación ni los mensajes se registraron. ¿Cómo resuelves el reparto?",
      expectedAnswer:
        "No decidir por afinidad; recuperar fuente de entrada, hora de recepción, primera respuesta efectiva e historial de CRM y reglas vigentes; si no existían reglas, declarar el vacío, asignar provisionalmente por continuidad de cliente y crear una política de rotación, especialidad, SLA, registro y reasignación.",
      explanation:
        "El reparto futuro debe basarse en evidencia verificable, no en discusiones privadas.",
      difficulty: "medium",
    },
    {
      id: "m12-e2",
      moduleId: "m12",
      type: "decision",
      question:
        "Un agente logra muchas reservas, pero publica anuncios sin tener toda la documentación y promete a compradores que una vivienda puede destinarse a alquiler turístico sin verificarlo. ¿Qué haces?",
      expectedAnswer:
        "Separar resultado y conducta; suspender de inmediato las promesas no verificadas; revisar anuncios y operaciones abiertas; informar al responsable de cumplimiento y documentar el riesgo; mantener conversación correctiva basada en hechos, impacto, estándar y plan de mejora; si la conducta es grave o se repite, activar la escalada prevista.",
      explanation:
        "La facturación no neutraliza el deber de proteger al consumidor ni la reputación de la agencia.",
      difficulty: "advanced",
    },
    {
      id: "m12-e3",
      moduleId: "m12",
      type: "case",
      question:
        "Una agencia incorpora a un profesional que trabaja desde casa y cobra por operación. Le entrega acceso completo al CRM, descarga de documentos y un teléfono corporativo. Tras seis meses se marcha con una copia de contactos y reclama comisiones sobre clientes que siguen en curso. ¿Qué falló y cómo se corrige?",
      expectedAnswer:
        "Revisar antes el acuerdo de colaboración, el alcance de acceso, la titularidad de datos, las reglas de comisión y las obligaciones de devolución o borrado; revocar accesos de inmediato, conservar evidencia y asegurar continuidad para clientes activos; derivar a asesoramiento laboral y fiscal si hay duda sobre la naturaleza de la relación.",
      explanation:
        "Acceso mínimo por rol, acuerdos claros y CRM actualizado previenen este riesgo.",
      difficulty: "advanced",
    },
    {
      id: "m12-e4",
      moduleId: "m12",
      type: "case",
      question:
        "En agosto, una asesora comunica que está agotada por tener que visitar sola fincas aisladas en varios municipios y que no puede registrar todo en el CRM. El responsable interpreta que es falta de compromiso. ¿Es correcto?",
      expectedAnswer:
        "No; el dato relevante es el sistema (volumen, desplazamientos, horarios, documentación y guardias); hay que reorganizar rutas, limitar carga temporal, definir protocolo de visita segura, proteger tiempo de registro y programar revisiones.",
      explanation:
        "Ignorar la señal puede generar errores, riesgo psicosocial, mala atención y un incidente de seguridad.",
      difficulty: "medium",
    },
    {
      id: "m12-e5",
      moduleId: "m12",
      type: "comprehension",
      question:
        "Explica la diferencia entre un KPI de actividad y un indicador de calidad, con un ejemplo de cada uno en un equipo inmobiliario.",
      expectedAnswer:
        "Actividad mide volumen de acción (p.ej. contactos, visitas realizadas); calidad mide si esa actividad se ejecuta bien (p.ej. expedientes completos, cumplimiento de SLA).",
      explanation:
        "Medir solo actividad o solo resultado sin calidad oculta problemas de proceso.",
      difficulty: "basic",
    },
    {
      id: "m12-e6",
      moduleId: "m12",
      type: "decision",
      question:
        "Redacta tres reglas objetivas para asignar un lead entrante en un equipo con tres agentes de distinta especialidad e idioma, y una condición para reasignarlo.",
      expectedAnswer:
        "Ejemplo de reglas: (1) asignar según idioma del cliente y especialidad de producto declarada; (2) respetar disponibilidad y carga actual del agente; (3) registrar la asignación con fecha y motivo en CRM. Condición de reasignación: ausencia de contacto efectivo en el plazo de SLA acordado (p.ej. 24-48h) sin justificación documentada.",
      explanation:
        "Las reglas deben ser publicadas y explicables para percibirse como justas.",
      difficulty: "medium",
    },
    {
      id: "m12-e7",
      moduleId: "m12",
      type: "case",
      question:
        "Un candidato en entrevista dice \"tengo mucha experiencia\" pero no puede explicar cómo gestionó un problema documental real. ¿Cómo procedes en una selección estructurada?",
      expectedAnswer:
        "Pedir un ejemplo con contexto, acción, resultado y aprendizaje (STAR); si no puede aportar evidencia concreta, valorarlo como señal de riesgo, no descartar solo por eso pero contrastarlo con una prueba práctica y referencias con consentimiento.",
      explanation: "La entrevista útil compara evidencia, no intuiciones.",
      difficulty: "basic",
    },
    {
      id: "m12-e8",
      moduleId: "m12",
      type: "decision",
      question:
        "Un panel de KPIs muestra muchos leads pero pocas visitas convertidas en oferta. ¿Qué pasos sigues antes de exigir más leads al equipo de marketing?",
      expectedAnswer:
        "Investigar en qué etapa se ralentiza el embudo: revisar calidad de cualificación, tiempos de respuesta, adecuación de precio y capacidad de presentación del asesor antes de concluir que falta volumen de leads.",
      explanation:
        "Un indicador es una pregunta, no una sentencia; hay que investigar la causa antes de actuar.",
      difficulty: "medium",
    },
  ],
  quizQuestions: [
    {
      id: "m12-q1",
      question:
        "Según el módulo, ¿qué elemento NO forma parte del \"mapa de decisión\" de un equipo comercial?",
      options: ["Personas", "Proceso", "Publicidad institucional", "Evidencia"],
      correctAnswerIndex: 2,
      explanation:
        "El mapa de decisión se compone de personas, proceso, datos y evidencia.",
      sourceModuleId: "m12",
      legalReference: "Ficha 01 del módulo (contenido metodológico, no normativo).",
      difficulty: "basic",
    },
    {
      id: "m12-q2",
      question: "¿Cuál es la función principal del responsable comercial según el módulo?",
      options: [
        "Sustituir al agente en cada operación",
        "Diseñar contexto, resolver bloqueos, mejorar el sistema y desarrollar personas",
        "Centralizar toda la comunicación con los clientes",
        "Fijar exclusivamente los objetivos de facturación mensual",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El responsable no sustituye al agente; elimina obstáculos, asegura estándares y decide con información suficiente.",
      sourceModuleId: "m12",
      legalReference: "Ficha 02.",
      difficulty: "basic",
    },
    {
      id: "m12-q3",
      question: "Una matriz RACI en un equipo inmobiliario sirve principalmente para:",
      options: [
        "Calcular comisiones automáticamente",
        "Convertir procesos en acuerdos visibles sobre quién decide, ejecuta, consulta e informa",
        "Sustituir la necesidad de un CRM",
        "Evaluar el desempeño anual de cada agente",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La RACI evita que dos agentes prometan respuestas distintas o que una reserva avance sin revisión documental.",
      sourceModuleId: "m12",
      legalReference: "Ficha 05.",
      difficulty: "basic",
    },
    {
      id: "m12-q4",
      question:
        "¿Qué norma define el ámbito de aplicación de las relaciones laborales por cuenta ajena en España, relevante para distinguir empleo de colaboración autónoma?",
      options: [
        "Ley 31/1995 de Prevención de Riesgos Laborales",
        "Real Decreto Legislativo 2/2015, Estatuto de los Trabajadores",
        "Ley Orgánica 3/2018 de Protección de Datos",
        "RD 1026/2024",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El Estatuto de los Trabajadores (BOE-A-2015-11430) define el ámbito de aplicación para servicios retribuidos por cuenta ajena y bajo organización y dirección empresarial.",
      sourceModuleId: "m12",
      legalReference: "RDLeg 2/2015 (Estatuto de los Trabajadores).",
      difficulty: "medium",
    },
    {
      id: "m12-q5",
      question: "Al diseñar un plan de contratación, ¿qué debe evitarse según el módulo?",
      options: [
        "Definir niveles de competencia (saber, ejecutar con supervisión, ejecutar con autonomía)",
        "Redactar ofertas ambiguas que \"vendan\" sin describir misión, alcance e indicadores",
        "Separar competencias técnicas, comerciales y de conducta",
        "Escribir criterios de descarte antes de entrevistar",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La ambigüedad en la oferta atrae a quien necesita promesas, no a quien quiere ejecutar.",
      sourceModuleId: "m12",
      legalReference: "Ficha 07.",
      difficulty: "medium",
    },
    {
      id: "m12-q6",
      question:
        "En una entrevista estructurada para perfiles comerciales, ¿qué NO se debe preguntar?",
      options: [
        "Cómo se gestionó una queja de un cliente",
        "Cómo se obtuvo una captación difícil",
        "Datos de salud, vida familiar u orientación personal",
        "Cómo respondería ante una petición de publicitar un uso no verificado",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Deben evitarse preguntas sobre información no necesaria para evaluar la idoneidad profesional.",
      sourceModuleId: "m12",
      legalReference: "Ficha 08.",
      difficulty: "basic",
    },
    {
      id: "m12-q7",
      question:
        "El plan de onboarding 30-60-90 días propone que entre los días 61 y 90 se debe:",
      options: [
        "Priorizar exclusivamente formación teórica sobre producto",
        "Revisar autonomía, calidad de registros, cumplimiento y resultados iniciales, con cartera propia acotada",
        "Asignar cartera ilimitada sin supervisión",
        "Suprimir el acompañamiento del mentor",
      ],
      correctAnswerIndex: 1,
      explanation:
        "En los últimos 30 días del onboarding se evalúa autonomía real con cartera acotada y objetivos razonables.",
      sourceModuleId: "m12",
      legalReference: "Ficha 09.",
      difficulty: "medium",
    },
    {
      id: "m12-q8",
      question:
        "Según el liderazgo situacional descrito en el módulo, ¿qué debe hacer un responsable ANTES de intervenir ante un bajo rendimiento?",
      options: [
        "Dar una charla motivacional general",
        "Identificar si el problema es de capacidad, conocimiento, herramientas, prioridad o motivación",
        "Reducir de inmediato la autonomía de la persona",
        "Aplicar el mismo tratamiento que a cualquier otro caso previo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Dar una charla motivacional a una falta de proceso desperdicia tiempo; hay que diagnosticar la causa real.",
      sourceModuleId: "m12",
      legalReference: "Ficha 10.",
      difficulty: "medium",
    },
    {
      id: "m12-q9",
      question:
        "¿Cuáles son las tres normas no negociables de cultura comercial que propone el módulo?",
      options: [
        "Veracidad, trazabilidad y respeto",
        "Rapidez, volumen y disponibilidad total",
        "Antigüedad, jerarquía y silencio",
        "Precio, comisión y territorio",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Estas normas deben aplicarse de forma consistente a personas con mejor y peor rendimiento.",
      sourceModuleId: "m12",
      legalReference: "Ficha 11.",
      difficulty: "basic",
    },
    {
      id: "m12-q10",
      question: "Un cuadro de mando comercial \"útil\" según el módulo debe distinguir:",
      options: [
        "Solo facturación total",
        "Actividad, calidad y resultado",
        "Antigüedad del equipo y horas de oficina",
        "Únicamente el número de anuncios publicados",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Medir solo facturación llega tarde; hay que ver qué parte del proceso necesita ayuda.",
      sourceModuleId: "m12",
      legalReference: "Ficha 13.",
      difficulty: "medium",
    },
    {
      id: "m12-q11",
      question:
        "Sobre la relación laboral y la colaboración externa, ¿qué debe revisarse antes de dar acceso total al CRM a un colaborador externo?",
      options: [
        "Solo su disponibilidad horaria",
        "Finalidad, permisos, titularidad de los datos y devolución o borrado al finalizar",
        "Su preferencia de canal de comunicación",
        "El número de leads que puede gestionar por semana",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Determinar estos aspectos antes evita disputas y riesgos de protección de datos al finalizar la colaboración.",
      sourceModuleId: "m12",
      legalReference: "Ficha 06.",
      difficulty: "medium",
    },
    {
      id: "m12-q12",
      question: "¿Qué ley regula el trabajo a distancia mencionada en el módulo?",
      options: ["Ley 10/2021", "Ley Orgánica 3/2007", "RD 902/2020", "Ley 31/1995"],
      correctAnswerIndex: 0,
      explanation:
        "La Ley 10/2021 regula el trabajo a distancia; en gestión comercial deben revisarse medios, acuerdos, prevención, datos y desconexión.",
      sourceModuleId: "m12",
      legalReference: "Ley 10/2021, de trabajo a distancia.",
      difficulty: "medium",
    },
    {
      id: "m12-q13",
      question:
        "¿Qué normas configuran el marco de igualdad y transparencia retributiva citado en el módulo?",
      options: [
        "LO 3/2007, RD 901/2020 y RD 902/2020",
        "RGPD y LOPDGDD",
        "Ley 31/1995 y Estatuto de los Trabajadores",
        "Ley 10/2021 y RD 1026/2024",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La Ley Orgánica 3/2007, el RD 901/2020 y el RD 902/2020 configuran el marco de igualdad y transparencia retributiva.",
      sourceModuleId: "m12",
      legalReference: "LO 3/2007, RD 901/2020, RD 902/2020.",
      difficulty: "advanced",
    },
    {
      id: "m12-q14",
      question: "¿Qué desarrolla el RD 1026/2024 según el módulo?",
      options: [
        "Medidas planificadas de igualdad y no discriminación de personas LGTBI en empresas",
        "La regulación del teletrabajo",
        "El régimen sancionador de protección de datos",
        "La prevención de riesgos laborales en desplazamientos",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El RD 1026/2024 (junto con la Ley 4/2023) desarrolla medidas de igualdad y no discriminación LGTBI en el ámbito empresarial.",
      sourceModuleId: "m12",
      legalReference: "Ley 4/2023 y RD 1026/2024.",
      difficulty: "advanced",
    },
    {
      id: "m12-q15",
      question:
        "En la protección de datos aplicada a la gestión del equipo, ¿qué principios cita expresamente el módulo?",
      options: [
        "Minimización, proporcionalidad, transparencia, seguridad y confidencialidad",
        "Máxima retención y acceso universal",
        "Anonimización obligatoria de todos los clientes",
        "Prohibición total de uso de CRM",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Estos principios, conforme al RGPD, la LOPDGDD y criterios de la AEPD, deben aplicarse también al CRM, mensajería y herramientas de supervisión.",
      sourceModuleId: "m12",
      legalReference: "RGPD; LO 3/2018 (LOPDGDD); guía AEPD.",
      difficulty: "medium",
    },
    {
      id: "m12-q16",
      question:
        "Según el módulo, ¿qué NUNCA debe delegarse en una herramienta de IA sin supervisión humana?",
      options: [
        "La clasificación de correos entrantes",
        "Una decisión que afecte a personas o a la veracidad de una operación",
        "La traducción de un texto informativo",
        "El resumen de una llamada ya revisada",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Una alucinación de la IA sobre superficie, licencia o precio puede derivar en publicidad engañosa o una mala decisión.",
      sourceModuleId: "m12",
      legalReference: "Ficha 35 (política interna de gobernanza de IA).",
      difficulty: "medium",
    },
    {
      id: "m12-q17",
      question:
        "¿Qué norma reconoce el derecho a protección frente a riesgos laborales y sitúa la evaluación, información y formación dentro de la gestión ordinaria de la empresa?",
      options: [
        "Ley 31/1995 (LPRL)",
        "Ley 10/2021",
        "RGPD",
        "Estatuto de los Trabajadores",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La LPRL aplica también a desplazamientos, visitas a inmuebles aislados, estrés y trabajo fuera de horario, no solo a obras.",
      sourceModuleId: "m12",
      legalReference: "Ley 31/1995, de Prevención de Riesgos Laborales.",
      difficulty: "medium",
    },
    {
      id: "m12-q18",
      question: "¿Cuál es el objetivo principal del \"handover\" cuando una persona deja el equipo?",
      options: [
        "Evitar pagar la última comisión pendiente",
        "Asegurar continuidad de cartera, documentos, accesos y comunicación al cliente",
        "Justificar el despido ante terceros",
        "Cerrar el CRM de forma permanente",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El handover es una prueba de madurez del sistema: si el equipo no sabe qué clientes atiende la persona saliente, la dependencia estaba oculta.",
      sourceModuleId: "m12",
      legalReference: "Ficha 37.",
      difficulty: "basic",
    },
  ],
};

export const m12Glossary: GlossaryItem[] = [
  {
    id: "g-m12-handover",
    term: "Handover",
    definition:
      "Proceso estructurado de traspaso de cartera, documentos, accesos y comunicación al cliente cuando una persona deja su puesto o rol, garantizando continuidad sin pérdida de información.",
    easyDefinition:
      "Es \"pasar el testigo\" de forma ordenada cuando alguien deja el equipo, para que el cliente no note el cambio.",
    relatedModuleId: "m12",
  },
  {
    id: "g-m12-matriz-raci",
    term: "Matriz RACI",
    definition:
      "Herramienta que asigna, para cada actividad relevante, quién es Responsable de ejecutarla, quién Aprueba, a quién se Consulta y a quién se Informa.",
    easyDefinition:
      "Una tabla que deja claro quién decide qué en el equipo, para evitar peleas de autoridad.",
    relatedModuleId: "m12",
  },
  {
    id: "g-m12-onboarding-30-60-90",
    term: "Onboarding 30-60-90",
    definition:
      "Plan de incorporación estructurado en tres fases de 30 días cada una (comprensión y formación, práctica supervisada, autonomía con cartera acotada) para nuevas personas asesoras.",
    easyDefinition:
      "Un plan de los primeros tres meses de un nuevo agente, para que aprenda paso a paso sin poner en riesgo al cliente.",
    relatedModuleId: "m12",
  },
  {
    id: "g-m12-co-brokerage",
    term: "Co-brokerage",
    definition:
      "Colaboración entre dos o más agentes o agencias para compartir la comercialización o demanda de un inmueble, con reglas explícitas de coordinación y comunicación.",
    easyDefinition:
      "Cuando dos agentes o agencias trabajan juntos en la misma operación y se reparten el trabajo y la comisión.",
    relatedModuleId: "m12",
  },
  {
    id: "g-m12-gobernanza-ia",
    term: "Gobernanza de IA",
    definition:
      "Conjunto de reglas escritas sobre qué herramientas de inteligencia artificial están aprobadas, qué datos pueden introducirse, cómo se revisa su salida y cuándo es obligatoria la supervisión humana.",
    easyDefinition:
      "Las normas internas que dicen cómo se puede usar la IA en el equipo sin que se cuelen errores o datos sensibles.",
    relatedModuleId: "m12",
  },
  {
    id: "g-m12-desgaste-comercial",
    term: "Desgaste comercial (burnout comercial)",
    definition:
      "Deterioro del rendimiento y bienestar de una persona comercial por acumulación de carga sin clasificar, presión de disponibilidad continua y objetivos mal definidos.",
    easyDefinition:
      "Cuando un agente se \"quema\" por exceso de trabajo mal organizado, antes de llegar a la baja o dejar el equipo.",
    relatedModuleId: "m12",
  },
];

export const m12Alerts: string[] = [
  "El módulo cita explícitamente el RD 1026/2024 (junto con la Ley 4/2023) sobre medidas planificadas de igualdad y no discriminación de personas LGTBI en empresas, como desarrollo normativo relativamente reciente que afecta a la gestión de personas en agencias inmobiliarias.",
  "Se recuerda expresamente que en empresas con umbrales legales de plantilla pueden existir obligaciones formales reforzadas de planes de igualdad (en relación con LO 3/2007, RD 901/2020 y RD 902/2020), y que toda organización —alcance o no esos umbrales— debe prevenir la discriminación.",
  "El documento señala como límite profesional explícito: \"este módulo forma para dirigir y detectar riesgos. No sustituye el asesoramiento laboral, fiscal, de prevención o de protección de datos aplicable a cada empresa.\" Debe advertirse a los alumnos que ante dudas sobre la naturaleza de una relación laboral/autónoma/colaborativa, retribución variable, planes de igualdad o tratamiento de datos, se requiere asesoramiento especializado caso por caso.",
  "El material fue \"revisado con fuentes oficiales disponibles a 4 de julio de 2026\" (versión 1.0), por lo que cualquier actualización posterior de las normas citadas (Estatuto de los Trabajadores, LPRL, LO 3/2007, RD 901/2020, RD 902/2020, Ley 4/2023, RD 1026/2024, Ley 10/2021, RGPD, LO 3/2018) debería verificarse contra la fuente vigente en el momento de publicar el módulo en la app.",
];
