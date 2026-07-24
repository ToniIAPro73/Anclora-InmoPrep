import type { Module, GlossaryItem } from "@/lib/types";

export const m17Module: Module = {
  id: "m17",
  code: "M17",
  title: "La Promoción Inmobiliaria",
  order: 17,
  description:
    "Fases del desarrollo, avales de cantidades a cuenta y proyectos estratégicos residenciales.",
  estimatedMinutes: 55,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m17-l1",
      moduleId: "m17",
      title: "Fundamentos, actores y decisión de promover",
      order: 1,
      summary:
        "Qué significa promover, qué fases y puertas de decisión estructuran el proceso, y qué límites de función tiene el agente frente al resto de agentes de la edificación.",
      content: `## Qué es una promoción inmobiliaria

Promover es convertir un derecho sobre suelo o edificio en un producto inmobiliario entregable, legal, financiable y comercializable. La promoción no equivale a construir: es una cadena de decisiones sobre suelo, diseño, financiación, ejecución, venta, entrega y posventa. El promotor coordina esas decisiones asumiendo riesgo económico y jurídico, y puede ser una gran sociedad, una persona física, una cooperativa, una administración o cualquiera que tenga un derecho bastante para impulsar la edificación. La rentabilidad esperada no convierte una promoción en viable si faltan títulos, capacidad técnica o permisos.

Como agente, la función es separar el relato comercial de los hechos habilitantes: preguntar quién promueve, con qué derecho sobre el inmueble, cuál es el producto autorizado, qué fase de proyecto existe y qué documentos permiten ofrecer viviendas. El agente detecta lo que falta y traslada el riesgo por escrito; no sustituye a arquitecto, notario, abogado, entidad financiera ni administración competente.

La secuencia operativa que propone el temario es: identificar promotor y título; delimitar producto y público; contrastar viabilidad urbanística, técnica y económica; establecer financiación y garantías; comercializar con información comprobada; entregar, registrar y atender defectos. Un ejemplo aplicado del propio manual: un propietario de solar anuncia una futura promoción de ocho viviendas; antes de captar reservas, el agente debe solicitar nota simple, planeamiento aplicable, anteproyecto, estimación de costes, estado de la licencia y previsión de garantía de anticipos. Si sólo existe una idea de distribución, se puede trabajar un estudio de demanda, pero no presentar la venta como producto plenamente disponible.

## Fases, hitos y puertas de decisión

El ciclo habitual de la promoción va de la identificación de oportunidad al cierre posventa: oportunidad → due diligence → control de suelo → proyecto y viabilidad → título habilitante → contratación y obra → ventas y anticipos → terminación → entrega/registro → garantía y posventa. Cada fase consume recursos y aumenta el coste de rectificar; comprar antes de investigar, o vender antes de asegurar documentación, puede convertir un proyecto atractivo en fuente de reclamaciones.

El manual distingue tres conceptos de control: el hito (resultado concreto: informe, licencia, certificado o contrato), el gate o puerta de decisión (condición de continuidad que impide iniciar la fase siguiente sin cumplirla) y el registro (evidencia que acredita fecha, versión y responsable de cada decisión). Ejemplo del manual: en una promoción de vivienda protegida, el equipo no debe lanzar campaña antes de verificar régimen, precio máximo, destinatarios y sistema de adjudicación, porque un anuncio prematuro puede captar clientes que no cumplen condiciones y obligar a rectificaciones costosas.

## Marco normativo aplicable

La promoción combina múltiples cuerpos normativos: el Texto Refundido de la Ley de Suelo y Rehabilitación Urbana (TRLSRU, RDL 7/2015), la Ley de Ordenación de la Edificación (LOE, Ley 38/1999), el Código Técnico de la Edificación (CTE, RD 314/2006), la normativa de consumo (RD 515/1989 y el texto refundido de consumidores) y la regulación de cantidades anticipadas. En Baleares se añaden la normativa urbanística y de vivienda, la evaluación ambiental y las reglas insulares y municipales — en particular la Ley de Urbanismo de las Illes Balears (LUIB, Ley 12/2017) — que determinan gran parte de la viabilidad real de cada proyecto concreto.

## Agentes de la edificación y límites de función

La LOE identifica al promotor, proyectista, constructor, director de obra, director de ejecución, entidades y laboratorios de control, suministradores, propietarios y usuarios. El agente inmobiliario puede informar con base documental, coordinar comunicaciones y detectar incoherencias, pero no certifica legalidad constructiva, calidad de estructura, adecuación normativa o validez de una licencia — esas competencias corresponden a la dirección facultativa. Un ejemplo del manual: cuando un comprador pregunta si puede cerrar una terraza comunitaria, la respuesta profesional correcta no es "seguro que sí", sino revisar título, estatutos, comunidad, proyecto, licencia y criterio técnico antes de responder.

## Viabilidad de negocio y matriz de riesgos

El análisis de viabilidad combina demanda, precio asumible, coste del suelo, construcción, financiación, impuestos, comercialización, contingencia y plazo; el margen debe resistir escenarios adversos razonables (retrasos, menor absorción, subida de costes). En paralelo, una matriz de riesgos clasifica cada riesgo del promotor (título, urbanismo, técnico, financiación, mercado, consumo, construcción, proveedor, seguridad, reputación, plazo) por probabilidad, impacto, detectabilidad y capacidad de mitigación, con responsable y fecha de revisión asignados — un riesgo sin responsable ni fecha es, según el manual, "una nota decorativa".`,
      easyExplanation:
        "Promover una vivienda no es solo construir y vender: es una cadena de decisiones (suelo, proyecto, dinero, obra, entrega) donde cada paso debe estar comprobado con documentos antes de dar el siguiente. El agente inmobiliario informa y detecta lo que falta, pero no sustituye al arquitecto, al notario ni al banco. Existen normas distintas para el suelo, la construcción y la venta al consumidor, y en Baleares se suman reglas urbanísticas propias.",
      balearExample:
        "Una promotora en Manacor anuncia \"10 viviendas listas para reservar\" apoyándose solo en una calificación urbanística residencial del PGOU. El agente detecta que falta el anteproyecto técnico, la licencia de obras y la garantía de cantidades anticipadas: recomienda no captar reservas hasta que existan esos tres documentos, evitando que la promotora incurra en publicidad engañosa y en riesgo de reclamaciones si el proyecto se retrasa.",
      keyConcepts: [
        "promotor",
        "derecho bastante",
        "hito",
        "gate (puerta de decisión)",
        "TRLSRU",
        "LOE",
        "CTE",
        "LUIB",
        "matriz de riesgos",
        "dirección facultativa",
      ],
      frequentErrors: [
        "Confundir una parcela con potencial aparente con un solar apto y listo para promover.",
        "Usar \"previsto\", \"en trámite\" o \"próximo\" como sustituto de un hito verificable en material comercial.",
        "El agente comercial certifica o interpreta materias técnicas (estructura, legalidad, licencias) que no le competen.",
        "Registrar un riesgo sin responsable ni fecha de revisión, dejándolo como mera declaración de intenciones.",
        "Lanzar campaña comercial de vivienda protegida antes de confirmar régimen, precio máximo y sistema de adjudicación.",
      ],
      examples: [
        {
          id: "m17-l1-ex1",
          title: "Solar con potencial vs. solar apto",
          scenario:
            "Un solar rústico con buena ubicación se anuncia como \"apto para 8 viviendas\".",
          application:
            "El agente debe comprobar planeamiento, licencia y viabilidad técnica antes de aceptar esa afirmación como cierta.",
          isBalearContext: false,
        },
        {
          id: "m17-l1-ex2",
          title: "El límite del comercial ante una consulta técnica",
          scenario: "Un comprador pregunta si puede eliminar un muro de carga.",
          application:
            "El agente deriva la consulta a la dirección facultativa y no da garantías propias.",
          isBalearContext: false,
        },
        {
          id: "m17-l1-ex3",
          title: "Matriz de riesgos en captación de obra nueva",
          scenario: "Una finca con posible afección hidráulica.",
          application:
            "El riesgo se registra con responsable y fecha de revisión antes de integrar el coste en la viabilidad.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m17-l2",
      moduleId: "m17",
      title: "Suelo y due diligence",
      order: 2,
      summary:
        "Cómo controlar jurídicamente el suelo, verificar titularidad y cargas, contrastar Registro/Catastro/realidad física, y analizar viabilidad urbanística, afecciones sectoriales e infraestructuras antes de decidir invertir.",
      content: `## Control del suelo: adquisición, opción y derecho a construir

Antes de pagar por un proyecto es imprescindible asegurar un derecho bastante sobre el suelo. La compra directa no es la única vía: existen la opción de compra, arras sujetas a condiciones, el derecho de superficie, la aportación a una sociedad, la permuta, la compraventa con precio aplazado o acuerdos con el propietario que distribuyen riesgo y determinan qué ocurre si no se obtienen licencias, financiación o viabilidad. Una redacción genérica de "sujeto a estudio" no basta si no define plazo, fuente de comprobación y consecuencias. Ejemplo del manual: un promotor plantea pagar una señal por un solar condicionado a que pueda construir diez viviendas; la condición debe describir aprovechamiento, plazo, informe o licencia exigida, devolución de cantidades y reparto de costes, o la señal puede convertirse en pérdida si el resultado técnico es inferior.

## Titularidad, cargas y poder de disposición

La due diligence empieza por saber quién puede transmitir o gravar y qué derechos sobreviven a la operación. La nota simple muestra titularidad, cargas, condiciones, servidumbres, afecciones y asientos vigentes, y debe contrastarse con escritura, poderes, certificado de comunidad, arrendamientos, ocupación y realidad física. Un solar puede estar hipotecado, embargado, sometido a usufructo o afectado por condición resolutoria; no todas esas circunstancias impiden promover, pero todas exigen estructura contractual y comunicación clara. El manual advierte no aceptar nunca una manifestación verbal de que "todo se cancelará": las cargas se resuelven con documentos, importes, procedimientos y responsables identificados.

## Registro, Catastro y realidad física

La finca registral no siempre coincide con la parcela catastral ni con el cierre físico sobre el terreno. Discrepancias de superficie, linderos, construcciones existentes, caminos o anejos afectan a proyecto, coste, licencia y financiación. Ejemplo citado: el Catastro señala 1.000 m² y la escritura 850 m², pero el vendedor publicita 1.100 m² de cierre; el expediente debe detener el anuncio hasta identificar qué parte es titularidad, qué parte es ocupación y qué impacto tiene en el aprovechamiento. Cuando existe duda, procede solicitar certificación catastral descriptiva y gráfica, nota simple con CRU (Coordenadas de Referenciación Única) y, si es necesario, plano topográfico encargado a técnico.

## Viabilidad urbanística, afecciones y suelo singular en Mallorca

La consulta urbanística debe responder si la parcela es solar, qué uso permite el planeamiento, cuánta edificabilidad, ocupación, altura, retranqueos, densidad, aparcamientos, cesiones, protección y cargas de urbanización existen. Una calificación residencial no garantiza por sí sola que pueda iniciarse obra de inmediato: puede faltar urbanización, reparcelación, proyecto de dotación o autorización sectorial. Además del planeamiento general, las afecciones sectoriales se superponen: costas y su zona de protección, carreteras, dominio público hidráulico, zonas inundables, patrimonio, paisaje, infraestructuras, puertos, servidumbres aeronáuticas y redes. En Mallorca son especialmente habituales las afecciones de costas y patrimonio, y el suelo rústico exige comprobación específica de construcciones existentes, antigüedad, disciplina, usos y comunidad antes de sugerir cualquier ampliación o cambio de uso.

## Infraestructuras y due diligence técnica

La viabilidad depende también de que el proyecto pueda conectarse y operar con costes asumibles: suministro eléctrico, agua, saneamiento, telecomunicaciones, accesos, residuos, movilidad y capacidad de adaptación climática. Un punto de red visible no equivale a una conexión concedida: se confirma con operadores y administración, no con la existencia visual de una acometida cercana. La due diligence técnica y geotécnica (topografía, geotecnia, estructura existente, patologías, contaminación, arbolado, accesibilidad, redes y estado de urbanización) puede revelar sobrecostes que un render nunca muestra: un solar con rellenos y pendiente puede requerir cimentación más compleja y contención que altere sustancialmente el margen.

## Análisis residual e informe de decisión

El método residual permite estimar cuánto puede pagarse por el suelo tras descontar del ingreso previsible el coste de construcción, gastos técnicos, impuestos, comercialización, financiación, contingencia y beneficio objetivo. No es una calculadora de deseo: cada partida necesita fuente y fecha, y el resultado debe someterse a un escenario adverso (precio -7%, obra +8%, retraso de seis meses en el ejemplo del manual) antes de fijar oferta. El proceso de due diligence culmina en un informe de decisión que distingue información confirmada, pendiente y descartada, y propone condiciones suspensivas —precisas, medibles y con plazo— antes de comprometerse: adquirir, condicionar, renegociar, pausar o desistir.`,
      easyExplanation:
        "Antes de comprar suelo para construir hay que comprobar quién es realmente el dueño, si tiene deudas o cargas, si lo que dicen los papeles coincide con lo que se ve en el terreno, y si el ayuntamiento permite construir lo que se promete. También hay que calcular cuánto se puede pagar por ese suelo una vez restados todos los costes de construir y vender, probando qué pasa si algo sale peor de lo esperado.",
      balearExample:
        "En Sóller, un promotor negocia una finca rústica con una vivienda antigua y varios anejos junto a un torrente. La due diligence revela una posible afección de dominio público hidráulico no reflejada en la nota simple. El agente detiene la operación hasta obtener informe de la administración hidráulica competente, evitando comprometer una compra sobre un suelo con restricciones no confirmadas.",
      keyConcepts: [
        "due diligence",
        "nota simple",
        "CRU (Coordenadas de Referenciación Única)",
        "afección sectorial",
        "análisis residual",
        "condición suspensiva",
        "derecho de superficie",
        "servidumbre de costas",
      ],
      frequentErrors: [
        "Usar una opción de compra para encubrir captación de compradores sin control real del suelo.",
        "Presentar superficie de solar, edificabilidad o número de viviendas como hecho definitivo sin fuente verificada.",
        "Confundir tasación, valoración comercial y estudio de viabilidad, que responden a preguntas distintas.",
        "Confundir un punto de red visible con una conexión de suministro efectivamente concedida.",
        "Usar una condición suspensiva imprecisa (\"si todo va bien\") que en realidad no protege la operación.",
      ],
      examples: [
        {
          id: "m17-l2-ex1",
          title: "Diferencia entre Catastro y Registro",
          scenario: "Discrepancia de superficie entre escritura y Catastro.",
          application:
            "Se pide certificación catastral y topografía antes de fijar precio o publicitar superficie.",
          isBalearContext: false,
        },
        {
          id: "m17-l2-ex2",
          title: "Opción de compra condicionada",
          scenario: "Solar rústico con incertidumbre de aprovechamiento.",
          application:
            "La opción define plazo, informe exigido y devolución de cantidades si no se obtiene licencia.",
          isBalearContext: false,
        },
        {
          id: "m17-l2-ex3",
          title: "Análisis residual con escenario adverso",
          scenario: "Residual de 2 millones con venta en 18 meses.",
          application:
            "Se recalcula con -7% de precio y +8% de coste de obra antes de decidir la oferta al propietario.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m17-l3",
      moduleId: "m17",
      title: "Proyecto, títulos habilitantes, contratación y financiación",
      order: 3,
      summary:
        "Cómo se define el producto en proyecto técnico, qué títulos habilitantes y controles de calidad exige la LOE y el CTE, cómo se contrata y planifica la obra, y cómo se estructura la financiación y las garantías del promotor.",
      content: `## Brief de producto y proyecto técnico

El proyecto arranca de una necesidad de usuario traducida en programa funcional: destinatario, tipología, número de unidades, superficies, anejos, accesibilidad, movilidad, almacenaje, eficiencia, zonas comunes, precio y experiencia de uso. El comercial aporta conocimiento de demanda trazable, no un conjunto de opiniones sueltas, y esa aportación debe transferirse por escrito al equipo de diseño antes de invertir en proyecto de ejecución. A partir de ahí, el proyecto básico define configuración y características generales necesarias para solicitar títulos habilitantes, mientras que el proyecto de ejecución desarrolla soluciones, detalles y especificaciones necesarias para construir; cambios entre ambas etapas pueden alterar coste, plazo, ventas y licencias ya solicitadas. El manual insiste en que un render o plano comercial nunca sustituye al documento técnico aprobado: si se modifica distribución, terraza o calidades, hay que comunicar el impacto y actualizar el soporte contractual.

## CTE, calidad y sostenibilidad

El Código Técnico de la Edificación estructura exigencias básicas de seguridad estructural, seguridad en caso de incendio, seguridad de utilización y accesibilidad, salubridad, protección frente al ruido y ahorro de energía. Cumplir formalmente no basta: las decisiones de envolvente, instalaciones, ventilación, acústica y accesibilidad impactan en coste, certificado energético, confort y posibles reclamaciones futuras. Las prestaciones comunicadas deben vincularse siempre a memoria y proyecto, evitando frases absolutas como "cero consumo" o "insonorización total" salvo que exista base técnica exacta que lo respalde.

## Títulos habilitantes y control municipal

Las obras y usos pueden requerir licencia, comunicación previa, declaración responsable, autorización sectorial u otros actos de control administrativo; la denominación del trámite no sustituye la comprobación real de qué acto y qué condiciones se han obtenido. El agente no debe anunciar "licencia concedida" con solo un resguardo de solicitud o un informe favorable: hay que verificar el acto administrativo o documento que corresponda, su alcance y su vigencia, y controlar si una modificación de planta, volumen o distribución exige nueva tramitación.

## Contratación de obra y control de costes

El precio de obra es inseparable del alcance, mediciones, calendario, calidad, riesgos y capacidad del contratista. La contratación puede pactarse por precio cerrado, por unidades de obra, por coste más margen u otras estructuras; un presupuesto bajo sin alcance claro suele reaparecer como modificados, retrasos o conflictos posteriores. El agente puede aportar contexto de mercado, pero no debe validar precios de construcción ni interpretar el avance de obra como certificación técnica. El presupuesto inicial separa suelo, obra, técnicos, licencias, impuestos, seguros, comercialización, financiación y contingencia; la contingencia no es beneficio oculto, es reserva destinada a riesgos identificados, y su consumo debe explicarse y decidir cómo se protege margen o plazo. El dato útil durante la ejecución es la previsión de coste final, no solo el gasto histórico acumulado.

## Planificación de obra y ruta crítica

El plazo de la promoción se gestiona por dependencias: la ruta crítica identifica las actividades que, si se retrasan, desplazan la fecha final. En Mallorca, la logística insular, la disponibilidad de mano de obra, la estacionalidad y el suministro de materiales pueden afectar el calendario de forma más marcada que en el continente. El plan debe incluir margen y escenarios de retraso, y distinguir fecha objetivo, fecha contractual e hito interno: el avance de obra no se mide por fotografías, sino por hitos que habilitan el siguiente acto y la entrega final.

## Financiación de la promoción y seguros

La estructura financiera combina recursos propios, financiación de suelo, préstamo promotor, financiación alternativa, aportaciones de socios y preventas en condiciones legales. Los financiadores revisan título, licencia, presupuesto, tasación, aportación de capital, riesgo comercial y garantías antes de conceder crédito. Las pólizas cubren riesgos distintos: construcción, responsabilidad civil, daños y el seguro decenal cuando corresponda por naturaleza del edificio. Una prevención central del manual: no presentar una reserva o campaña comercial como financiación de hecho si no se han confirmado el régimen ni las garantías; los compradores no pueden usarse como fuente de caja sin garantía, cuenta y control adecuados.`,
      easyExplanation:
        "El proyecto técnico define primero lo general (proyecto básico, para pedir licencia) y luego los detalles constructivos (proyecto de ejecución). Todo cambio de distribución o calidades debe reflejarse en documentos actualizados, no solo prometerse verbalmente. La obra se contrata con alcance y calendario claros, se financia combinando capital propio y préstamo, y nunca debe depender de usar el dinero de los compradores como si fuera caja libre sin garantías.",
      balearExample:
        "En Inca, un promotor contrata la obra de un edificio de 12 viviendas con un presupuesto \"cerrado\" que no detalla exclusiones de mediciones ni calidad de acabados. A los tres meses aparecen modificados por partidas no incluidas. El agente aprende del caso y, en la siguiente promoción, exige comparar alcance, garantías, seguros y condiciones de cambio entre las tres ofertas recibidas, no solo la cifra final.",
      keyConcepts: [
        "proyecto básico",
        "proyecto de ejecución",
        "CTE",
        "título habilitante",
        "ruta crítica",
        "contingencia presupuestaria",
        "seguro decenal",
        "préstamo promotor",
      ],
      frequentErrors: [
        "Permitir que marketing sea la primera fuente de una modificación de proyecto en lugar de la decisión técnica y jurídica aprobada.",
        "Anunciar \"licencia concedida\" a partir de un simple resguardo de solicitud o informe favorable no definitivo.",
        "Comparar presupuestos de obra solo por el importe total, sin considerar alcance, riesgo, plazo y responsabilidad.",
        "Convertir prestaciones normativas estándar (CTE) en promesas comerciales ilimitadas de confort o eficiencia.",
        "Presentar preventas o reservas como financiación de hecho sin garantías individuales activadas.",
      ],
      examples: [
        {
          id: "m17-l3-ex1",
          title: "Render vs. proyecto aprobado",
          scenario: "El render de venta incluye una pérgola no contemplada en proyecto.",
          application:
            "Se retira o se aclara como ilustrativo hasta que promotor y técnico aprueben la solución, coste y permisos.",
          isBalearContext: false,
        },
        {
          id: "m17-l3-ex2",
          title: "Comparar tres ofertas de contratista",
          scenario: "Presupuestos muy distintos para la misma obra.",
          application:
            "Se descarta la oferta más barata si traslada demasiada incertidumbre al promotor en exclusiones o garantías.",
          isBalearContext: false,
        },
        {
          id: "m17-l3-ex3",
          title: "Financiación no cerrada, campaña ya lanzada",
          scenario: "Campaña anuncia 10% a la firma sin garantías individuales emitidas.",
          application:
            "Se aplaza el cobro a comprador hasta que el circuito de garantía y cuenta especial esté completo.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m17-l4",
      moduleId: "m17",
      title: "Comercialización, venta sobre plano y protección del consumidor",
      order: 4,
      summary:
        "Cómo comercializar obra nueva con información veraz, gestionar reservas, arras y contratos, proteger cantidades anticipadas con garantías, y cumplir la normativa de consumo y VPO/VPL.",
      content: `## Estrategia comercial y dossier de venta

La comercialización debe traducir un producto ya documentado en una propuesta comprensible, sin anticipar derechos o calidades que aún no estén aprobados. La estrategia define cliente objetivo, posicionamiento, precio, unidades prioritarias, canales, ritmo de lanzamiento, material, visitas, reservas, reporting y coordinación con obra; un lanzamiento escalonado permite testar demanda y corregir precios o mensajes antes de comprometer todo el inventario. Antes de publicar, se crea un dossier comercial aprobado —planos, superficies, precio, impuestos, anexos, memoria de calidades, eficiencia, cargas relevantes y condiciones de reserva— y todos los comerciales deben trabajar con la misma versión vigente. Las imágenes, renders y mobiliario virtual no deben ocultar limitaciones ni crear una configuración que el proyecto no contempla; una piscina comunitaria "prevista" que depende de autorización pendiente se presenta como posible mejora sujeta a condiciones, o se elimina hasta su aprobación.

## Reserva, arras y contrato de compraventa sobre plano

La reserva sirve para ordenar una negociación y retirar temporalmente una unidad, pero no debe convertirse en un contrato ambiguo: el documento debe identificar partes, unidad, anejos, precio, importe entregado, plazo, destino de la cantidad, condiciones, documentación recibida y causa de devolución o imputación. El agente debe evitar plantillas que mezclan reserva, arras y contrato privado; la claridad de la estructura importa más que la denominación empleada. El contrato de compraventa sobre plano exige precisión en objeto, planos, superficie y tolerancias razonables, anejos, precio, impuestos, forma de pago, entrega, calidades, modificaciones, garantías, gastos, comunidad y subrogación financiera si existe; las arras tienen consecuencias distintas según su configuración (confirmatorias, penitenciales o penales) y no debe usarse una etiqueta automática sin analizar la intención real de las partes y las cláusulas pactadas.

## Cantidades anticipadas: la garantía como condición central

La disposición adicional primera de la LOE regula la percepción de cantidades a cuenta durante la construcción de vivienda: el promotor debe garantizar la devolución de las cantidades entregadas —incluidos los impuestos aplicables— si la construcción no se inicia o no llega a buen fin en el plazo convenido, y debe utilizar una cuenta especial separada para esas cantidades. La garantía puede instrumentarse mediante seguro de caución o aval bancario, según el régimen aplicable. Antes de recibir un pago, el comercial debe verificar que la garantía y la cuenta están operativas y que el recibo identifica promoción, unidad, concepto y saldo; si no está listo, se detiene la exigencia de pago a cuenta. El manual advierte no minimizar esta garantía llamándola "detalle bancario": es una protección central y una condición de profesionalidad en la venta sobre plano.

## Precio, impuestos y personalización

El comprador debe poder entender qué está incluido, qué tributos aplican según la operación (en obra nueva, habitualmente IVA y AJD, aunque el tratamiento depende del hecho concreto y debe validarse), qué anejos compra, qué coste de comunidad puede existir, y qué condiciones de financiación se han planteado. Las personalizaciones y mejoras del comprador deben gestionarse con catálogo, precio, plazo límite, aprobación, presupuesto y validación técnica de compatibilidad; las peticiones fuera de catálogo se tramitan como consulta formal, nunca se prometen por "hablarlo con obra" de manera informal.

## Información al consumidor y prácticas comerciales

El RD 515/1989 se aplica a la oferta, promoción y publicidad de venta o arrendamiento de viviendas realizada en el marco empresarial o profesional dirigida a consumidores; junto al texto refundido de consumidores, obliga a cuidar información, condiciones, documentación y prácticas comerciales. El deber de información no se agota con un aviso legal: afecta a precio, cargas, superficie, calidades, garantías, fechas y cualquier condición que determine la decisión de compra. Una omisión relevante puede ser tan dañina como una afirmación falsa —por ejemplo, promocionar "vistas al mar garantizadas" cuando el entorno tiene suelo pendiente de desarrollo—. El equipo comercial, las comisiones y la custodia de fondos deben regirse por un manual de ventas con dossier vigente, respuestas prohibidas, escalado técnico, gestión de datos y prohibición absoluta de manejar dinero en efectivo fuera del protocolo autorizado.

## VPO, VPL y promoción asequible

La vivienda protegida (VPO) y la vivienda de precio limitado (VPL) responden a regímenes específicos que afectan calificación, precio, destinatarios, residencia, destino habitual, transmisión, publicidad y registro. Las medidas autonómicas recientes han ampliado instrumentos para aumentar vivienda asequible, pero sus requisitos y procedimientos deben verificarse para cada promoción y convocatoria concreta. Antes de comercializar, se crea una ficha de elegibilidad con tipo de vivienda, localización, precio máximo o fórmula, requisitos del comprador, documentación y procedimiento de selección; no se aceptan reservas de personas que no pueden acceder al producto según esos requisitos.`,
      easyExplanation:
        "Vender una vivienda sobre plano exige tener siempre listos los mismos documentos que ha aprobado el promotor (planos, precio, calidades), y no prometer nada que no esté en ellos. El dinero que entrega el comprador antes de terminar la obra tiene que estar protegido con un aval o seguro y guardado en una cuenta especial: nunca se cobra \"a cuenta\" sin esa garantía activa. Además, la vivienda protegida (VPO/VPL) tiene reglas propias de precio y de a quién se puede vender.",
      balearExample:
        "En Palma, una promotora quiere lanzar campaña de un edificio de 20 viviendas anunciando \"reserva con 3.000 EUR\" antes de tener emitidas las garantías individuales de cantidades anticipadas. El agente detiene la captación de reservas hasta que la cuenta especial y el aval estén operativos, evitando exponer a los compradores y a la propia promotora a un incumplimiento de la disposición adicional primera de la LOE.",
      keyConcepts: [
        "disposición adicional primera LOE",
        "cuenta especial",
        "aval/seguro de caución",
        "arras",
        "RD 515/1989",
        "práctica comercial engañosa",
        "VPO",
        "VPL",
      ],
      frequentErrors: [
        "Cobrar cantidades a cuenta sin garantía individual ni cuenta especial operativa.",
        "Mezclar en un mismo documento reserva, arras y contrato privado sin distinguir su alcance real.",
        "Prometer mejoras o cambios de comprador de palabra, sin catálogo, presupuesto ni anexo firmado.",
        "Compensar una omisión relevante de información con un enlace o nota legal poco visible.",
        "Anunciar producto VPO/VPL sin definir régimen, precio máximo y requisitos de elegibilidad del comprador.",
      ],
      examples: [
        {
          id: "m17-l4-ex1",
          title: "Reserva sin claridad de destino del dinero",
          scenario:
            "Cliente entrega dinero para \"guardar\" una vivienda sin planos ni condiciones de pago.",
          application:
            "El agente exige documento de reserva con plazo, causa de devolución y cuenta identificada.",
          isBalearContext: false,
        },
        {
          id: "m17-l4-ex2",
          title: "Cambio de calidades por rotura de stock",
          scenario: "El proveedor no puede suministrar el pavimento previsto.",
          application:
            "Se presenta como cambio evaluado y aprobado formalmente, no como \"mejora\" sin evidencia.",
          isBalearContext: false,
        },
        {
          id: "m17-l4-ex3",
          title: "Campaña VPL con comprador no residente",
          scenario: "Comprador extranjero interesado en vivienda de precio limitado.",
          application: "Se verifican requisitos de acceso y destino antes de aceptar cualquier reserva.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m17-l5",
      moduleId: "m17",
      title: "Terminación, entrega, Registro y posventa",
      order: 5,
      summary:
        "Qué documentos y controles requiere el final de obra, cómo se formaliza la declaración de obra nueva y división horizontal, y cómo se gestiona la entrega, el Libro del Edificio y la posventa.",
      content: `## Seguimiento de obra y control de cambios

El seguimiento combina reuniones, certificaciones, fotografías, informes, cronograma, cambios, riesgos y control de calidad. Algunos cambios alteran la memoria, el precio, el plazo o la unidad vendida; la gestión correcta identifica el impacto, aprueba el cambio, lo registra y lo comunica de forma proporcionada a quienes puedan verse afectados. El área comercial nunca debe usar fotografías de obra como prueba de una entrega próxima ni comunicar cambios sin conocer si afectan al contrato o requieren consentimiento del comprador.

## Final de obra, recepción y certificaciones

La terminación física no equivale automáticamente a entrega comercial: faltan controles, documentación y habilitaciones. El final de obra se relaciona con certificación técnica, recepción entre promotor y constructor (que puede hacerse sin reservas, con reservas o rechazarse), subsanación de defectos, documentación de instalaciones, ensayos, garantías, el Libro del Edificio y el cumplimiento de las condiciones de licencia. Antes de citar a compradores, se confirma un checklist técnico: limpieza, suministros, zonas comunes, documentación, llaves y gestión de incidencias; una entrega precipitada genera más coste reputacional que retrasar una semana con comunicación transparente.

## Ocupación, habitabilidad y eficiencia energética

La documentación de terminación puede incluir el título habilitante o acto municipal aplicable, la cédula de habitabilidad o documento equivalente cuando corresponda, el certificado de eficiencia energética y otros documentos sectoriales. El detalle depende de obra, municipio y régimen de vivienda: lo importante es no convertir un trámite pendiente en "entrega lista" ni utilizar un certificado energético provisional como prueba de habitabilidad o legalidad urbanística ya cerrada.

## Obra nueva, división horizontal e inscripción

La declaración de obra nueva, la división horizontal, la descripción de elementos privativos, cuotas, anejos y estatutos se coordinan con documentación técnica, licencia o título, certificado final, seguro cuando corresponda y requisitos registrales. Las ventas individuales necesitan que la unidad esté correctamente identificada y que la realidad registral no contradiga lo ofrecido: anejos, trasteros, plazas y usos deben revisarse con especial cuidado antes de anunciarlos como fincas independientes cuando en realidad son participaciones indivisas con uso exclusivo.

## Libro del Edificio, garantías y entrega

El Libro del Edificio reúne documentación relevante de la obra, instrucciones de uso, mantenimiento y garantías. Las responsabilidades de la LOE se refieren, según su naturaleza, a daños materiales por vicios o defectos dentro de periodos habitualmente de uno, tres o diez años, sin perjuicio de un análisis jurídico concreto de cada caso; el seguro decenal es especialmente relevante en los edificios destinados principalmente a vivienda en los supuestos legalmente exigibles. La entrega se prepara con una carpeta de documentos física o digital con índice claro (llaves, planos, manuales, garantías, certificados, suministros, comunidad, contacto de posventa y proceso de incidencias) y el comprador firma la recepción de documentos sin que eso suponga renunciar indebidamente a derechos.

## Entrega, escritura, llaves y liquidación

La escritura puede coincidir con la entrega de posesión, llaves, fondos, documentación, subrogación, cambio de suministros y entrega de zonas comunes. Cada parte debe conocer qué se liquida, qué queda pendiente y qué reserva existe; las incidencias menores deben identificarse y tener plan, no esconderse detrás de una firma acelerada. Ejemplo del manual: el comprador llega a notaría y descubre que el trastero no coincide con el plano de la reserva; la operación se detiene hasta comprobar el documento correcto, porque cerrar con identificación errónea puede crear un problema registral y contractual mucho mayor.

## Posventa, incidencias y reclamaciones

Una incidencia debe clasificarse por urgencia, seguridad, habitabilidad, responsabilidad, garantía y solución; el cliente necesita acuse, plazo de análisis y canal de seguimiento, mientras el promotor necesita información para identificar patrón, proveedor o defecto recurrente. La posventa no es una concesión comercial: forma parte del cumplimiento del producto y de la prevención de litigios. El agente puede servir de punto de contacto inicial, pero no debe determinar técnicamente causa ni responsabilidad; registra la incidencia con fotos, fecha, unidad, descripción y urgencia, y deriva a posventa conservando las comunicaciones.`,
      easyExplanation:
        "Que la obra esté terminada visualmente no significa que ya se pueda entregar: hacen falta certificados, permisos de ocupación y comprobar que todo funciona. La escritura y la entrega de llaves deben coordinarse como un cierre completo (documentos, dinero, garantías), y después de entregar sigue existiendo el Libro del Edificio y la posventa para atender defectos con garantías de uno, tres o diez años según el caso.",
      balearExample:
        "En Alcúdia, tras la entrega de un edificio de apartamentos, varias unidades presentan filtraciones tras las primeras lluvias fuertes. El equipo comercial no promete \"se arreglará pronto\": abre un incidente de proyecto común, analiza si hay un patrón entre unidades y coordina la respuesta con dirección facultativa y constructora, documentando todo el proceso en el expediente de posventa.",
      keyConcepts: [
        "recepción de obra",
        "Libro del Edificio",
        "seguro decenal",
        "cédula de habitabilidad",
        "división horizontal",
        "certificado de eficiencia energética",
        "acta de entrega",
        "garantía LOE (1/3/10 años)",
      ],
      frequentErrors: [
        "Confundir el final estético de la obra con el final técnico y documental necesario para entregar.",
        "Usar fotos de obra como prueba de entrega próxima sin verificar hitos reales.",
        "Anunciar \"habitable\" sin distinguir condiciones técnicas, documentación y régimen de ocupación aplicable.",
        "Convertir la firma de entrega en una renuncia genérica a defectos futuros.",
        "Presentar anejos o participaciones indivisas como fincas independientes en material comercial.",
      ],
      examples: [
        {
          id: "m17-l5-ex1",
          title: "Trastero que no coincide con la reserva",
          scenario: "Discrepancia detectada en notaría el día de la firma.",
          application: "Se detiene la operación hasta aclarar documentalmente la unidad correcta.",
          isBalearContext: false,
        },
        {
          id: "m17-l5-ex2",
          title: "Certificado energético provisional usado como definitivo",
          scenario: "El promotor solo tiene certificado de proyecto, no del edificio terminado.",
          application:
            "No se publica calificación final hasta contar con certificado correcto del edificio construido.",
          isBalearContext: false,
        },
        {
          id: "m17-l5-ex3",
          title: "Patrón de incidencias tras la entrega",
          scenario: "Filtraciones repetidas en varias unidades.",
          application:
            "Se abre un incidente de proyecto único en lugar de resolver caso por caso de forma aislada.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m17-l6",
      moduleId: "m17",
      title: "Productos especiales, resiliencia y mejora continua",
      order: 6,
      summary:
        "Cómo se comercializan la rehabilitación, el build to rent, las cooperativas de vivienda, la segunda residencia y el turismo, y cómo se integran el riesgo climático, la sostenibilidad y el cierre de promoción con lecciones aprendidas.",
      content: `## Rehabilitación, regeneración y cambio de uso

Rehabilitar exige primero un diagnóstico de qué edificio existe, qué se puede conservar y qué intervención habilita el régimen aplicable, combinando estructura, energía, accesibilidad, instalaciones, patrimonio, comunidad, urbanismo y financiación. El cambio de uso añade una capa crítica: no basta que un espacio parezca apto, debe ser compatible con planeamiento, título, comunidad, proyecto, habitabilidad e instalaciones. Los beneficios de regeneración o incentivos no deben presumirse sin comprobación en el expediente concreto. Ejemplo del manual: un local en planta baja se vende como "convertible en vivienda"; el agente solicita informe urbanístico, consulta estatutos y verifica dimensiones, ventilación, accesibilidad y requisitos de habitabilidad antes de mantener ese mensaje comercial.

## Build to rent y producto para explotación

Promover para alquilar cambia la unidad de análisis: no se vende solo una vivienda, se diseña una operación estable con ingresos, servicio y mantenimiento a lo largo de los años. El build to rent (BTR) requiere pensar en demanda de alquiler, rotación, gestión, gastos operativos (OPEX), tecnología, servicios, fiscalidad y regulación aplicable; el modelo operativo, los contratos, la protección de datos, la selección de inquilinos y el mantenimiento deben estar definidos antes del lanzamiento. El agente no debe extrapolar precio de venta a valor de explotación sin descontar vacancia, mantenimiento, gestión, capex y regulación, ni asumir que la explotación turística flexible es libre por tratarse de un edificio nuevo: el uso real y el régimen turístico o de arrendamiento aplicable deben consultarse siempre.

## Cooperativas, autopromoción y comunidades

Las cooperativas y otras formas de autopromoción reúnen aportaciones, decisiones colectivas, contratación de suelo y obra, y adjudicación futura entre los propios socios. Requieren reglas claras sobre incorporación, bajas, costes, aportaciones, adjudicación, información, garantías, gestor y resolución de conflictos; la expectativa de ahorro no elimina riesgos de coste, retraso, financiación o incumplimiento, y una mala comunicación puede incluso aumentar el impacto emocional del riesgo. El comercial que colabora con una cooperativa debe identificar su papel real y evitar presentar un coste estimado como si fuera un precio cerrado: el socio asume un modelo distinto al del comprador ordinario, con responsabilidades y riesgos propios que deben explicarse con la máxima prudencia.

## Segunda residencia, turismo y compradores internacionales

El atractivo de Mallorca exige más precisión sobre uso, residencia, fiscalidad, idioma y expectativas de explotación. La segunda residencia no habilita automáticamente uso turístico ni actividad económica; la comercialización a compradores extranjeros debe explicar el producto sin prometer rentabilidad, licencias, permisos, financiación o fiscalidad individual no verificados. La distancia y el idioma hacen que la documentación y las visitas digitales tengan más peso, y un malentendido puede convertirse en una reclamación compleja; conviene preparar materiales bilingües consistentes, checklist del comprador internacional y protocolo de poderes, verificando siempre normativa sectorial, capacidad, comunidad y registro antes de utilizar cualquier argumento de venta relacionado con explotación turística.

## Riesgo local, sostenibilidad y resiliencia

El riesgo climático y territorial afecta al diseño y a la operación del edificio: en Mallorca, exposición solar, escasez de agua, lluvias intensas, costa, incendios, isla de calor, transporte y presión sobre infraestructuras pueden alterar el producto. La sostenibilidad no es solo un sello: se traduce en orientación, envolvente, sombra, ventilación, consumo, mantenimiento, materiales, agua, biodiversidad y capacidad de adaptación reales. El agente debe evitar el "greenwashing" —afirmaciones ambientales vagas, exageradas o no acreditadas— y comunicar prestaciones concretas y certificables, sin prometer ahorro individual no garantizable.

## Cierre de promoción y lecciones aprendidas

El último valor de una promoción no es solo venderla: es dejar un sistema que permita aprender y repetir sin heredar errores. Al cierre se comparan presupuesto, plazo, ventas, incidencias, calidad, reclamaciones, desviaciones, proveedores, documentación y satisfacción; el conocimiento debe pasar a la siguiente promoción mediante plantillas, biblioteca de costes, checklist, proveedores evaluados y registro de riesgos. La agencia comercial aporta datos sobre origen de compradores, objeciones, unidades lentas, promesas confusas y causas de cancelación o incidencias de posventa: esa información alimenta la próxima promoción y no debe quedarse en conversaciones informales.`,
      easyExplanation:
        "No todo producto inmobiliario se vende igual: rehabilitar exige comprobar primero qué existe realmente en el edificio; alquilar en bloque (build to rent) exige pensar en gastos de gestión a largo plazo, no solo en el precio de venta; las cooperativas reparten riesgo entre los propios socios; y vender a extranjeros exige explicar bien lo que su vivienda puede y no puede usarse. Además, el clima y la sostenibilidad real (no solo de marketing) afectan cada vez más al diseño de los edificios en Mallorca. Al final de cada promoción conviene anotar qué salió bien y qué salió mal para no repetir errores.",
      balearExample:
        "En Andratx, un edificio antiguo se comercializa como \"rehabilitación premium con vistas históricas y posibilidad de alquiler flexible\" a compradores extranjeros que firman reservas por videollamada. El agente detiene el lenguaje de \"posibilidad\" no validada, actualiza el dossier con el estado real de elementos protegidos y riesgos, y coordina asesoramiento independiente antes de avanzar en la reserva.",
      keyConcepts: [
        "rehabilitación",
        "cambio de uso",
        "build to rent (BTR)",
        "OPEX",
        "cooperativa de vivienda",
        "greenwashing",
        "resiliencia climática",
        "ciclo de vida del edificio",
      ],
      frequentErrors: [
        "Presentar un local como \"convertible en vivienda\" sin informe urbanístico ni comprobación de habitabilidad.",
        "Extrapolar precio de venta a valor de explotación en build to rent sin descontar vacancia ni gastos operativos.",
        "Presentar el coste estimado de una cooperativa como si fuera un precio cerrado de compraventa.",
        "Prometer rentabilidad turística o licencia de alquiler a un comprador internacional sin verificar normativa sectorial.",
        "Usar \"sostenibilidad\" o \"eco\" como adorno comercial sin decisiones de diseño medibles y certificadas.",
      ],
      examples: [
        {
          id: "m17-l6-ex1",
          title: "Local vendido como futura vivienda",
          scenario: "Comprador quiere transformar un bajo comercial.",
          application:
            "Se exige informe urbanístico y de habitabilidad antes de mantener el mensaje comercial.",
          isBalearContext: false,
        },
        {
          id: "m17-l6-ex2",
          title: "Valorar un edificio de build to rent",
          scenario: "Inversor compara precio de venta con rentas de mercado sin descontar gastos.",
          application:
            "Se construye modelo de OPEX, vacancia y mantenimiento antes de dar cifra de rentabilidad.",
          isBalearContext: false,
        },
        {
          id: "m17-l6-ex3",
          title: "Cooperativa que anuncia precio cerrado",
          scenario: "Publicidad de \"viviendas desde 250.000 EUR\" en una cooperativa.",
          application:
            "Se corrige el material para indicar que es una estimación de aportación, no un precio cerrado.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m17-e1",
      moduleId: "m17",
      type: "case",
      question:
        "Una sociedad ofrece a un promotor un solar en Mallorca anunciado como \"listo para diez viviendas\". La nota simple muestra una hipoteca. El planeamiento permite uso residencial, pero el anteproyecto técnico inicial concluye que por retranqueos, aparcamiento y condición de solar podrían resultar menos unidades. El vendedor exige arras no reembolsables en diez días.",
      expectedAnswer:
        "No firmar arras ciegas; negociar opción o contrato condicionado a verificación técnica concreta, certificación de deuda y estructura de cancelación de hipoteca, con plazo realista para informe urbanístico y topografía.",
      explanation:
        "La oportunidad tiene tres riesgos críticos: poder de disposición y carga pendiente, aprovechamiento no confirmado y plazo de diligencia insuficiente; la publicidad del vendedor no sustituye informe técnico.",
      difficulty: "advanced",
    },
    {
      id: "m17-e2",
      moduleId: "m17",
      type: "decision",
      question:
        "Una promotora inicia campaña para un bloque de viviendas con proyecto básico y financiación en negociación, pero sin garantías individuales de cantidades anticipadas. El equipo comercial quiere cobrar un 10% a cada cliente para \"demostrar tracción\" al banco.",
      expectedAnswer:
        "No cobrar cantidades a cuenta; usar lista de interés o, si procede, documento de reserva de alcance limitado, sin recibir pagos vinculados a construcción hasta activar garantía y cuenta especial.",
      explanation:
        "La disposición adicional primera de la LOE exige garantía y cuenta especial antes de recibir cantidades a cuenta de vivienda en construcción.",
      difficulty: "medium",
    },
    {
      id: "m17-e3",
      moduleId: "m17",
      type: "case",
      question:
        "Durante la obra, el proveedor comunica que el pavimento especificado en memoria no estará disponible durante meses. El director comercial sugiere anunciarlo como \"mejora\" y no informar a los compradores para evitar cancelaciones.",
      expectedAnswer:
        "Solicitar informe técnico y comparativa; el promotor aprueba o rechaza la sustitución con decisión formal, se actualizan documentos y se informa a los afectados con explicación clara.",
      explanation:
        "La memoria de calidades forma parte de la expectativa contractual; presentar un cambio como mejora sin evidencia puede constituir información engañosa.",
      difficulty: "medium",
    },
    {
      id: "m17-e4",
      moduleId: "m17",
      type: "comprehension",
      question:
        "Explica la diferencia entre proyecto básico y proyecto de ejecución, e indica qué información puede usar el equipo comercial en cada fase.",
      expectedAnswer:
        "El básico orienta configuración y tramitación (solicitud de título habilitante); el de ejecución desarrolla soluciones constructivas definitivas; el comercial solo debe difundir información basada en la versión vigente y aprobada, controlando los cambios entre ambas fases.",
      explanation:
        "Cambios entre etapas pueden alterar coste, plazo, ventas y licencias ya solicitadas.",
      difficulty: "basic",
    },
    {
      id: "m17-e5",
      moduleId: "m17",
      type: "balear_scenario",
      question:
        "Un edificio antiguo en Palma se comercializa como \"rehabilitación premium con vistas históricas y posibilidad de alquiler flexible\". Los compradores son extranjeros y firman reservas por videollamada. Todavía hay dudas sobre elementos protegidos y cerramientos de algunas unidades.",
      expectedAnswer:
        "Detener el lenguaje de \"posibilidad\" no validada, actualizar el dossier con estado real y riesgos, obtener informes técnicos y patrimoniales, y coordinar asesoramiento independiente y firma remota con identificación y documentación completa y trazable.",
      explanation:
        "El producto mezcla rehabilitación, patrimonio, propiedad horizontal y posible uso de alquiler transfronterizo; cada promesa debe tener fuente verificada.",
      difficulty: "advanced",
    },
    {
      id: "m17-e6",
      moduleId: "m17",
      type: "decision",
      question:
        "El comprador llega a notaría el día de la firma y descubre que el trastero reservado no coincide con el que figura en el plano de la escritura.",
      expectedAnswer:
        "Detener la operación hasta comprobar el documento correcto antes de firmar; no cerrar con identificación errónea.",
      explanation:
        "Cerrar con una identificación equivocada de la unidad puede crear un problema registral y contractual mucho mayor que retrasar la firma.",
      difficulty: "basic",
    },
    {
      id: "m17-e7",
      moduleId: "m17",
      type: "case",
      question:
        "Un inversor quiere adquirir un edificio para operar apartamentos con estancias cortas y servicios (build to rent / explotación turística), y compara el precio de venta directamente con rentas de mercado publicadas en portales.",
      expectedAnswer:
        "Construir un modelo que descuente vacancia, mantenimiento, gestión, capex y verifique régimen jurídico y municipal aplicable antes de evaluar rentabilidad.",
      explanation:
        "No se puede extrapolar precio de venta a valor de explotación sin descontar OPEX ni confirmar la regulación aplicable al uso pretendido.",
      difficulty: "advanced",
    },
    {
      id: "m17-e8",
      moduleId: "m17",
      type: "comprehension",
      question:
        "Diseña un cuadro de due diligence mínimo para adquirir una parcela destinada a vivienda plurifamiliar en Mallorca.",
      expectedAnswer:
        "Titularidad y cargas (nota simple, poderes), Registro/Catastro/realidad física, viabilidad urbanística y afecciones sectoriales (costas, patrimonio, aguas), infraestructuras y capacidad de suministro, due diligence técnica/geotécnica, y análisis residual con escenario adverso.",
      explanation:
        "La regla de examen del módulo ordena responder por fases: derecho y viabilidad, proyecto y título, financiación y garantías, información y contratación, entrega y posventa.",
      difficulty: "medium",
    },
  ],
  quizQuestions: [
    {
      id: "m17-q1",
      question:
        "¿Qué documento acredita, entre otros elementos, titularidad, cargas y afecciones vigentes de una finca?",
      options: [
        "Certificado de eficiencia energética",
        "Nota simple registral",
        "Cédula de habitabilidad",
        "Memoria de calidades",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La nota simple muestra titularidad, cargas, condiciones, servidumbres, afecciones y asientos vigentes de la finca.",
      sourceModuleId: "m17",
      legalReference:
        "Legislación hipotecaria y Registro de la Propiedad (contenido descrito en Ficha 09 del módulo).",
      difficulty: "basic",
    },
    {
      id: "m17-q2",
      question:
        "¿Qué norma regula la garantía y cuenta especial exigible para las cantidades anticipadas por vivienda en construcción?",
      options: [
        "El Código Técnico de la Edificación",
        "La disposición adicional primera de la Ley de Ordenación de la Edificación (LOE)",
        "La Ley de Urbanismo de las Illes Balears",
        "El Texto Refundido de la Ley de Suelo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La disposición adicional primera de la LOE regula la percepción de cantidades a cuenta durante la construcción, exigiendo garantía de devolución y cuenta especial separada.",
      sourceModuleId: "m17",
      legalReference: "Ley 38/1999, de Ordenación de la Edificación, disposición adicional primera.",
      difficulty: "medium",
    },
    {
      id: "m17-q3",
      question:
        "Un anuncio promociona un solar como \"listo para diez viviendas\" basándose solo en la calificación urbanística. ¿Qué es correcto afirmar?",
      options: [
        "La calificación residencial siempre garantiza edificabilidad inmediata",
        "Una calificación residencial no garantiza por sí sola que el solar esté listo para construir de inmediato",
        "Basta con la calificación para comercializar sin más comprobación",
        "La calificación sustituye a la licencia de obras",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Puede faltar urbanización, reparcelación, proyecto de dotación o autorización sectorial aunque el uso esté calificado como residencial.",
      sourceModuleId: "m17",
      legalReference: "Planeamiento urbanístico municipal y LUIB (Ley 12/2017, Illes Balears).",
      difficulty: "medium",
    },
    {
      id: "m17-q4",
      question: "¿Cuál es la principal diferencia entre el proyecto básico y el proyecto de ejecución?",
      options: [
        "El básico define configuración general y sirve de soporte a la solicitud de título habilitante; el de ejecución desarrolla soluciones constructivas definitivas",
        "Ambos son equivalentes y pueden usarse indistintamente",
        "El de ejecución solo se necesita para vivienda protegida",
        "El básico incluye siempre presupuesto cerrado de obra",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El proyecto básico orienta configuración y tramitación; el de ejecución desarrolla detalles constructivos que deben controlarse ante cualquier cambio.",
      sourceModuleId: "m17",
      legalReference: "Ley de Ordenación de la Edificación (LOE) y normativa de proyecto técnico.",
      difficulty: "basic",
    },
    {
      id: "m17-q5",
      question: "¿Qué exigencias estructura el Código Técnico de la Edificación (CTE)?",
      options: [
        "Solo la eficiencia energética",
        "Seguridad estructural, seguridad en caso de incendio, seguridad de utilización y accesibilidad, salubridad, protección frente al ruido y ahorro de energía",
        "Únicamente el régimen de vivienda protegida",
        "Solo aspectos de comercialización",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El CTE se estructura en varias exigencias básicas de calidad en la edificación, no solo energéticas.",
      sourceModuleId: "m17",
      legalReference: "RD 314/2006, Código Técnico de la Edificación.",
      difficulty: "medium",
    },
    {
      id: "m17-q6",
      question:
        "¿Qué norma se aplica específicamente a la oferta, promoción y publicidad de venta o arrendamiento de viviendas dirigida a consumidores?",
      options: ["RD 515/1989", "LOE", "TRLSRU", "CTE"],
      correctAnswerIndex: 0,
      explanation:
        "El RD 515/1989 regula la información al consumidor en la oferta, promoción y publicidad de venta o arrendamiento de viviendas, junto con el texto refundido de consumidores.",
      sourceModuleId: "m17",
      legalReference: "Real Decreto 515/1989.",
      difficulty: "medium",
    },
    {
      id: "m17-q7",
      question:
        "¿Qué papel tiene el agente inmobiliario respecto a la calidad técnica de la estructura o la validez de una licencia?",
      options: [
        "Puede certificarlas si tiene experiencia comercial suficiente",
        "No certifica esos aspectos; su función es informar con base documental y derivar a la dirección facultativa competente",
        "Sustituye al arquitecto en caso de urgencia comercial",
        "Solo el notario puede pronunciarse, nunca el agente ni el técnico",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La LOE distingue funciones entre agentes de la edificación; el agente inmobiliario no sustituye a arquitecto, director de obra ni administración competente.",
      sourceModuleId: "m17",
      legalReference: "Ley 38/1999 (LOE), regulación de agentes de la edificación.",
      difficulty: "basic",
    },
    {
      id: "m17-q8",
      question: "¿Qué elemento NO forma parte necesariamente del análisis residual de suelo?",
      options: [
        "Ingresos previsibles por venta o alquiler",
        "Coste de construcción, técnicos, licencias e impuestos",
        "Beneficio objetivo y contingencia",
        "El precio de publicación de una vivienda competidora sin ajustar",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El residual debe basarse en comparables y absorción real, no en precios de publicación sin analizar ni contrastar.",
      sourceModuleId: "m17",
      legalReference: "Método residual de valoración de suelo (Ficha 16 del módulo).",
      difficulty: "advanced",
    },
    {
      id: "m17-q9",
      question: "¿Qué instrumento permite controlar el suelo sin necesidad de compraventa directa e inmediata?",
      options: [
        "La declaración de obra nueva",
        "La opción de compra sujeta a condiciones",
        "El Libro del Edificio",
        "La cédula de habitabilidad",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La opción de compra, junto con otras figuras como el derecho de superficie o arras condicionadas, permite controlar el suelo con menor riesgo antes de la adquisición definitiva.",
      sourceModuleId: "m17",
      legalReference: "Derecho civil de obligaciones y contratos; práctica de suelo urbanizador.",
      difficulty: "medium",
    },
    {
      id: "m17-q10",
      question:
        "En Mallorca, ¿qué tipo de afección sectorial es especialmente habitual en fincas próximas al litoral?",
      options: [
        "Servidumbre de protección de costas",
        "Régimen de vivienda protegida obligatorio",
        "Exención total de licencia municipal",
        "Prohibición general de compraventa",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las afecciones sectoriales más habituales en Mallorca incluyen costas y su zona de protección, dominio público hidráulico y patrimonio, entre otras.",
      sourceModuleId: "m17",
      legalReference: "Legislación de costas y planeamiento sectorial aplicable en Illes Balears.",
      difficulty: "medium",
    },
    {
      id: "m17-q11",
      question: "¿Qué garantiza el seguro decenal en una promoción de vivienda?",
      options: [
        "La devolución de cantidades anticipadas",
        "La cobertura de daños materiales por vicios o defectos graves dentro del periodo de responsabilidad más largo previsto por la LOE, en los supuestos legalmente exigibles",
        "La eficiencia energética del edificio",
        "El cumplimiento del calendario comercial",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El seguro decenal cubre responsabilidad por daños asociados a vicios o defectos dentro del plazo de garantía más largo previsto en la LOE (habitualmente diez años), en los supuestos aplicables.",
      sourceModuleId: "m17",
      legalReference: "Ley 38/1999 (LOE), régimen de responsabilidades y garantías.",
      difficulty: "medium",
    },
    {
      id: "m17-q12",
      question:
        "¿Qué documento reúne la documentación relevante de obra, instrucciones de uso, mantenimiento y garantías que se entrega al comprador?",
      options: ["El Libro del Edificio", "La nota simple", "El dossier comercial", "El proyecto básico"],
      correctAnswerIndex: 0,
      explanation:
        "El Libro del Edificio recoge documentación de obra, uso, mantenimiento y garantías necesarias tras la entrega.",
      sourceModuleId: "m17",
      legalReference: "Ley 38/1999 (LOE).",
      difficulty: "basic",
    },
    {
      id: "m17-q13",
      question: "¿Qué diferencia existe entre VPO y VPL?",
      options: [
        "Son sinónimos exactos sin diferencia normativa",
        "La VPO es vivienda sometida a protección pública con régimen específico; la VPL es vivienda de precio limitado con requisitos aplicables propios",
        "La VPL nunca tiene requisitos de destinatario",
        "La VPO no tiene límites de precio",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ambas responden a regímenes específicos que afectan calificación, precio, destinatarios y transmisión, pero no son idénticas.",
      sourceModuleId: "m17",
      legalReference: "Normativa autonómica de vivienda de las Illes Balears.",
      difficulty: "medium",
    },
    {
      id: "m17-q14",
      question: "¿Qué se entiende por \"greenwashing\" en la comercialización de una promoción?",
      options: [
        "Una certificación energética válida y verificada",
        "Una afirmación ambiental vaga, exagerada o no acreditada usada como adorno comercial",
        "Un sistema de recarga de vehículo eléctrico correctamente instalado",
        "Un informe técnico de sostenibilidad completo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El manual advierte sobre comunicar sostenibilidad como adorno sin decisiones de diseño medibles y certificables.",
      sourceModuleId: "m17",
      legalReference: "Buenas prácticas comerciales y normativa de consumo (RD 515/1989, texto refundido de consumidores).",
      difficulty: "basic",
    },
    {
      id: "m17-q15",
      question:
        "¿Qué riesgo destaca especialmente el módulo respecto a la comercialización con compradores internacionales de segunda residencia?",
      options: [
        "Que la segunda residencia habilita automáticamente uso turístico",
        "Que la distancia y el idioma exigen mayor precisión documental, sin que la segunda residencia habilite automáticamente actividad turística o económica",
        "Que no se aplican controles de PBC/FT a compradores extranjeros",
        "Que la fiscalidad es siempre igual para residentes y no residentes",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La segunda residencia no habilita automáticamente uso turístico ni actividad económica; la distancia y el idioma exigen más precisión, no menos control de prevención de blanqueo.",
      sourceModuleId: "m17",
      legalReference: "Normativa sectorial turística y de PBC/FT aplicable en Illes Balears.",
      difficulty: "advanced",
    },
    {
      id: "m17-q16",
      question:
        "¿Cuál es la secuencia correcta que propone el módulo para responder ante un supuesto de examen que mezcle suelo, obra y ventas?",
      options: [
        "Ventas, obra, suelo",
        "Derecho y viabilidad, proyecto y título habilitante, financiación y garantías, información y contratación, entrega/Registro y posventa",
        "Solo financiación y garantías",
        "Cualquier orden es válido si se mencionan todas las normas",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Es la \"regla de examen\" explícita del módulo para estructurar respuestas complejas por fases.",
      sourceModuleId: "m17",
      legalReference: "Criterio metodológico del propio temario (Ficha de orientación de estudio).",
      difficulty: "medium",
    },
    {
      id: "m17-q17",
      question:
        "¿Qué debe hacer el equipo comercial si detecta una discrepancia de superficie entre Catastro y escritura antes de publicitar una promoción?",
      options: [
        "Usar la cifra mayor porque beneficia la venta",
        "Detener el anuncio hasta identificar qué parte es titularidad, qué parte es ocupación y qué impacto tiene en el aprovechamiento",
        "Ignorar la discrepancia si el precio no cambia",
        "Preguntar solo al vendedor y aceptar su respuesta verbal",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La realidad aparente no sustituye al título ni a la inscripción; debe aclararse documentalmente antes de comercializar.",
      sourceModuleId: "m17",
      legalReference: "Registro de la Propiedad y Catastro Inmobiliario (Ficha 10 del módulo).",
      difficulty: "medium",
    },
    {
      id: "m17-q18",
      question: "En un modelo de cooperativa de vivienda, ¿qué debe evitar el comercial que colabora con la entidad?",
      options: [
        "Explicar el régimen de socio y sus responsabilidades",
        "Presentar un coste estimado como si fuera un precio cerrado de compraventa",
        "Utilizar documentación aprobada por la cooperativa",
        "Informar sobre aportaciones y adjudicación futura",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El socio de una cooperativa asume un modelo distinto al comprador ordinario, con riesgos y responsabilidades propios; presentar el coste como precio cerrado es engañoso.",
      sourceModuleId: "m17",
      legalReference: "Normativa de cooperativas de vivienda y protección de consumidores.",
      difficulty: "advanced",
    },
  ],
};

export const m17Glossary: GlossaryItem[] = [
  {
    id: "g-m17-derecho-bastante",
    term: "Derecho bastante",
    definition:
      "Título jurídico suficiente (propiedad, opción, superficie u otro) que faculta al promotor para impulsar y ejecutar el proyecto sobre un suelo o edificio determinado.",
    easyDefinition:
      "Es tener realmente el derecho legal necesario para poder construir o vender, no solo un acuerdo verbal o una intención.",
    relatedModuleId: "m17",
  },
  {
    id: "g-m17-condicion-suspensiva",
    term: "Condición suspensiva",
    definition:
      "Cláusula contractual que supedita la eficacia o continuidad de una obligación (por ejemplo, una compra de suelo) a que se cumpla un hecho futuro concreto, medible y con plazo (obtención de licencia, informe favorable, cancelación de carga).",
    easyDefinition:
      "Es una condición escrita que dice \"esto se compra solo si pasa X cosa\", y esa cosa debe poder comprobarse claramente.",
    relatedModuleId: "m17",
  },
  {
    id: "g-m17-cuenta-especial",
    term: "Cuenta especial (cantidades anticipadas)",
    definition:
      "Cuenta bancaria separada que el promotor debe utilizar obligatoriamente para depositar las cantidades entregadas a cuenta por compradores de vivienda en construcción, conforme a la disposición adicional primera de la LOE.",
    easyDefinition:
      "Es una cuenta bancaria aparte donde debe guardarse el dinero que los compradores adelantan, para protegerlo si la obra no se termina.",
    relatedModuleId: "m17",
    balearContext:
      "En Baleares, esta garantía se comprueba junto con la normativa autonómica de vivienda y el régimen VPO/VPL antes de aceptar cualquier reserva.",
  },
  {
    id: "g-m17-analisis-residual",
    term: "Análisis residual",
    definition:
      "Método de valoración de suelo que calcula cuánto puede pagarse por él restando de los ingresos previsibles de venta o alquiler todos los costes de construcción, técnicos, financieros, comerciales, impuestos y el beneficio objetivo del promotor.",
    easyDefinition:
      "Es una cuenta que empieza por lo que se espera ingresar vendiendo las viviendas y va restando todos los gastos, hasta ver cuánto queda disponible para pagar el terreno.",
    relatedModuleId: "m17",
  },
  {
    id: "g-m17-build-to-rent",
    term: "Build to rent (BTR)",
    definition:
      "Modelo de promoción diseñado desde el origen para la explotación en alquiler estable, no para la venta unitaria, incorporando análisis de rotación, gastos operativos (OPEX) y gestión a largo plazo.",
    easyDefinition:
      "Es construir un edificio pensado para alquilarlo entero durante años, no para vender cada piso por separado.",
    relatedModuleId: "m17",
  },
  {
    id: "g-m17-practica-comercial-enganosa",
    term: "Práctica comercial engañosa",
    definition:
      "Acción u omisión en la publicidad o información comercial de una vivienda que induce o puede inducir a error al consumidor sobre un elemento relevante de su decisión (precio, cargas, superficie, calidades, garantías, fechas).",
    easyDefinition:
      "Es decir algo falso, o callar algo importante, de forma que el comprador se haga una idea equivocada antes de decidir comprar.",
    relatedModuleId: "m17",
  },
];

export const m17Alerts: string[] = [
  "El PDF señala expresamente que las fuentes oficiales han sido \"revisadas a 4 de julio de 2026\" y que el módulo constituye una \"versión ampliada\" del temario 2026, por lo que el contenido incorpora ya las referencias normativas actualizadas a esa fecha.",
  "Se citan explícitamente la Ley 4/2025 y la Ley 4/2026 de las Illes Balears como normas relativas a \"proyectos residenciales estratégicos y medidas de simplificación aplicables según expediente\" — el propio manual advierte que su aplicabilidad depende del expediente concreto y debe verificarse caso por caso.",
  "Nota de actualización literal del PDF (última página): \"Este módulo sirve para estudiar y ordenar una primera revisión. La promoción depende de la fecha concreta, del municipio, del planeamiento, de títulos y de documentos técnicos. Antes de asumir una obligación, verifica la versión vigente de la norma y recaba el informe profesional o administrativo que corresponda.\"",
  "El manual recomienda consulta obligatoria de BOE y BOIB consolidados antes de contratar, prometer, cobrar o iniciar cualquier trámite real, dado que el régimen normativo balear (LUIB, CAIB, Consell, ayuntamientos) puede cambiar el planeamiento vigente, informes y requisitos locales aplicables a cada promoción.",
  "Se recomienda prestar especial atención a la evolución de las medidas autonómicas de vivienda asequible (VPO/VPL) mencionadas como \"recientes\" en el propio módulo, dado que amplían instrumentos pero exigen verificación de requisitos y procedimientos para cada convocatoria concreta.",
];
