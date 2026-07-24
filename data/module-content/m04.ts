import type { Module, GlossaryItem } from "@/lib/types";

export const m04Module: Module = {
  id: "m04",
  code: "M04",
  title: "Regulaciones Técnicas Inmobiliarias",
  order: 4,
  description:
    "LOE, CTE, habitabilidad, licencia municipal de primera ocupación, certificado energético, REBT y RITE.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m04-l1",
      moduleId: "m04",
      title: "La Ley de Ordenación de la Edificación (LOE) y los agentes que intervienen",
      order: 1,
      summary:
        "La LOE (Ley 38/1999) organiza quién interviene en un proceso constructivo y quién responde ante qué tipo de daño, con plazos de garantía diferenciados.",
      content: `La Ley 38/1999, de 5 de noviembre, de Ordenación de la Edificación (LOE) es la norma que estructura el proceso edificatorio en España y fija quién responde de qué. El PDF (Ficha 04) resume las figuras principales: el **promotor** (impulsa y financia; puede ser persona física, sociedad, cooperativa o una Administración pública — el examen suele preguntar precisamente esto, que promotor no equivale a constructor), el **proyectista** (redacta el proyecto técnico), el **constructor** (ejecuta la obra conforme al proyecto y las órdenes de la dirección facultativa) y la **dirección facultativa** (dirige y certifica la obra: dirección de obra y dirección de ejecución de obra). El propietario/usuario cierra el ciclo conservando y usando correctamente el inmueble, con el Libro del Edificio como soporte documental (ver Lección 4).

## Responsabilidad y plazos de garantía

La LOE articula un sistema de responsabilidad por daños materiales con tres plazos distintos según la naturaleza del daño (art. 17 LOE):
- **1 año**: daños materiales por defectos de ejecución que afecten a elementos de terminación o acabado de las obras — responsabilidad del constructor.
- **3 años**: daños materiales causados por vicios o defectos que afecten a la habitabilidad (por ejemplo, defectos que causen directamente el incumplimiento de los requisitos de habitabilidad del art. 3 LOE).
- **10 años**: daños materiales causados por vicios o defectos que tengan su origen o afecten a la cimentación, los soportes, las vigas, los forjados, los muros de carga u otros elementos estructurales, comprometiendo directamente la resistencia mecánica y la estabilidad del edificio.

El **seguro decenal** (art. 19 LOE) cubre precisamente el riesgo a diez años y, en determinados supuestos (fundamentalmente vivienda para uso residencial), es exigible para poder inscribir la obra nueva en el Registro de la Propiedad y para escriturar la compraventa. El PDF advierte (Ficha 23) que no todas las obras tienen seguro decenal ni todas las garantías son equivalentes entre sí: hay que distinguir la garantía del promotor, el seguro de daños materiales y las garantías propias de instalaciones (electrodomésticos, calderas, ascensores), que se rigen por plazos comerciales distintos y no por la LOE.

Para el agente inmobiliario, el límite profesional es claro (Ficha 03): puede describir documentos existentes y sus fechas de emisión, pero no puede afirmar que un defecto es "superficial" sin informe técnico, ni asegurar que una obra "tiene seguro decenal" o que "es legal" sin comprobación documental. La frase de uso recomendado por el propio módulo es: "Con los documentos disponibles no podemos confirmar ese extremo; lo incorporamos como condición de revisión técnica antes de comprometer el precio."`,
      easyExplanation:
        "La LOE es la ley que dice quién construye, quién dirige la obra y quién responde si algo falla. Si el problema es de acabados (una baldosa mal puesta) el plazo de reclamación es de 1 año; si afecta a la habitabilidad (humedades, mala ventilación) son 3 años; si afecta a la estructura del edificio (vigas, cimentación) son 10 años, y para eso existe el seguro decenal. Como agente nunca debes decir \"esto está cubierto por el seguro\" sin haber visto la póliza.",
      balearExample:
        "En una promoción de obra nueva en Santa Ponça (Calvià), el comprador pregunta si las grietas en el garaje comunitario están cubiertas. El agente debe: (1) identificar si el promotor fue una sociedad o una cooperativa de viviendas, (2) solicitar la póliza decenal y comprobar tomador, inmueble asegurado y vigencia, y (3) no afirmar cobertura sin ese documento, derivando a la dirección facultativa si hay dudas sobre si el daño es estructural (10 años) o de acabado (1 año).",
      keyConcepts: [
        "LOE 38/1999",
        "promotor",
        "proyectista",
        "constructor",
        "dirección facultativa",
        "plazo de 1/3/10 años",
        "seguro decenal (art. 19 LOE)",
        "Libro del Edificio",
      ],
      frequentErrors: [
        "Confundir promotor con constructor (el promotor puede ser una Administración, cooperativa o sociedad, no solo quien \"hace la obra\").",
        "Asegurar que \"toda obra tiene seguro decenal\" sin comprobar la póliza.",
        "Calificar un defecto como \"superficial\" sin informe técnico que lo respalde.",
        "Confundir la garantía comercial de instalaciones con la responsabilidad decenal de la LOE.",
      ],
      examples: [
        {
          id: "m04-l1-ex1",
          title: "Grieta en fachada de un edificio de 8 años",
          scenario: "El comprador quiere saber si aún se puede reclamar.",
          application:
            "Si la grieta compromete elementos estructurales, el plazo de 10 años aún no ha vencido; se solicita informe técnico y póliza decenal antes de descartar la reclamación.",
          isBalearContext: false,
        },
        {
          id: "m04-l1-ex2",
          title: "Vivienda promovida por una cooperativa",
          scenario: "El cliente asume que \"cooperativa\" no es promotor legal.",
          application:
            "Se aclara que la LOE reconoce a la cooperativa como promotor con las mismas obligaciones documentales que una inmobiliaria.",
          isBalearContext: false,
        },
        {
          id: "m04-l1-ex3",
          title: "Reclamación por humedad a los 4 años de entrega",
          scenario: "El propietario alega vicio oculto.",
          application:
            "Al superar el plazo de 3 años de habitabilidad, se revisa si el origen es estructural (10 años) o de mantenimiento (fuera de plazo LOE), derivando a técnico.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m04-l2",
      moduleId: "m04",
      title: "El Código Técnico de la Edificación (CTE): seguridad estructural, incendios y utilización",
      order: 2,
      summary:
        "El CTE (RD 314/2006) fija las exigencias básicas de seguridad y accesibilidad de los edificios a través de sus Documentos Básicos (DB), que el agente debe reconocer sin sustituir al técnico competente.",
      content: `El Código Técnico de la Edificación, aprobado por el Real Decreto 314/2006, de 17 de marzo, es el marco reglamentario que desarrolla las exigencias básicas de la LOE en materia de edificación. Se organiza en Documentos Básicos (DB), cada uno con un ámbito de exigencia y con una consecuencia comercial concreta que el agente debe entender sin poder certificar por sí mismo (Ficha 05): "el CTE se aplica a obras y edificios en los términos de su normativa; una vivienda antigua no se evalúa como si hubiera sido construida hoy, salvo intervención que active exigencias."

## DB-SE: Seguridad Estructural

El DB-SE regula cargas, cimentación, estructura y estabilidad (Ficha 06). Grietas, flechas y humedades persistentes, así como reformas que afecten a muros de carga o cambios de distribución, son materias de comprobación técnica, no de valoración comercial. El agente debe: preguntar por reformas estructurales, proyectos y licencias asociadas; diferenciar una fisura superficial de una posible patología estructural (nunca calificarla sin informe); y, en fincas de cierta antigüedad, comprobar si existe ITE/IEE o informes de conservación. Regla de oro del módulo: "un informe de tasación no sustituye un informe estructural ni una inspección de obra."

## DB-SI: Seguridad en caso de incendio

El DB-SI regula evacuación, compartimentación y protección contra incendios (Ficha 07). En vivienda habitual, la mayor parte de las exigencias se resuelven en el proyecto y las instalaciones del edificio; en locales, cambios de uso y actividades con pública concurrencia, la seguridad contra incendios adquiere relevancia comercial directa: no se debe anunciar un local como "apto" para una actividad concreta sin verificar compatibilidad de uso y requisitos de seguridad, y en edificios en régimen de propiedad horizontal las vías de evacuación y los elementos comunes no pueden presentarse como privativos.

## DB-SUA: Seguridad de Utilización y Accesibilidad

El DB-SUA cubre seguridad de uso (resbaladicidad, desniveles, escaleras) y accesibilidad (itinerarios, ascensor, adaptación) — Ficha 08. El propio módulo marca un error de examen y de venta muy frecuente: "accesible" no equivale a "hay ascensor". Debe comprobarse el itinerario completo desde la vía pública hasta el interior de la vivienda, no solo la existencia de un elemento aislado. El "ajuste razonable" (adaptaciones para personas con discapacidad) se comunica revisando la comunidad y el técnico competente, nunca prometiendo una adaptación futura sin acuerdo comunitario.

Para el agente, el límite profesional transversal a los tres DB es el mismo que en la Lección 1: puede describir documentos y observaciones, pero no certificar seguridad estructural, uso o accesibilidad — esa competencia corresponde al arquitecto, aparejador, ingeniero o técnico habilitado, y el agente debe derivar cuando la pregunta del cliente exceda ese límite.`,
      easyExplanation:
        "El CTE es el \"reglamento técnico\" que dice cómo debe construirse un edificio para que sea seguro. Se divide en bloques: uno para que el edificio no se caiga (estructura), otro para que se pueda salir en caso de incendio, y otro para que no te resbales o para que sea accesible en silla de ruedas. Como agente puedes explicar qué documento existe, pero no puedes decir \"esto es seguro\" o \"esto es accesible\" sin que lo diga un técnico.",
      balearExample:
        "En un edificio de los años 70 en el Paseo Marítimo de Palma con reforma reciente en dos plantas, el comprador pregunta si el edificio \"cumple el CTE\". El agente explica que el CTE se aplica en los términos de su normativa histórica: el edificio original no se evalúa como si fuera de obra nueva, salvo en las partes reformadas, donde sí aplican las exigencias vigentes en el momento de la reforma; se solicita el proyecto de la reforma para verificar qué DB se activaron.",
      keyConcepts: [
        "CTE",
        "RD 314/2006",
        "Documento Básico (DB)",
        "DB-SE",
        "DB-SI",
        "DB-SUA",
        "itinerario accesible",
        "ajuste razonable",
      ],
      frequentErrors: [
        "Confundir \"tiene ascensor\" con \"es accesible\" (falta comprobar itinerario completo).",
        "Anunciar un local como apto para una actividad sin verificar compatibilidad de uso y DB-SI.",
        "Usar un informe de tasación como si acreditara seguridad estructural.",
        "Aplicar las exigencias del CTE actual a un edificio antiguo sin intervención reciente.",
      ],
      examples: [
        {
          id: "m04-l2-ex1",
          title: "Escalera comunitaria sin rellano intermedio",
          scenario: "Cliente con movilidad reducida.",
          application:
            "Se identifica el desnivel como posible incumplimiento de DB-SUA y se deriva a comprobación técnica antes de asegurar accesibilidad.",
          isBalearContext: false,
        },
        {
          id: "m04-l2-ex2",
          title: "Local comercial reconvertido en gimnasio",
          scenario: "El propietario asegura que \"no ha cambiado nada\".",
          application:
            "Se exige licencia de actividad y verificación de vías de evacuación (DB-SI) antes de anunciar el uso.",
          isBalearContext: false,
        },
        {
          id: "m04-l2-ex3",
          title: "Grietas tras una reforma de tabiquería",
          scenario: "El vendedor minimiza el hallazgo.",
          application:
            "Se solicita el proyecto de la reforma y, si afectó a elementos estructurales, se deriva a informe DB-SE.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m04-l3",
      moduleId: "m04",
      title: "Salubridad (DB-HS), eficiencia energética (DB-HE) y certificado de eficiencia energética",
      order: 3,
      summary:
        "La salubridad interior y la eficiencia energética se acreditan con documentos concretos —informe técnico y Certificado de Eficiencia Energética (CEE)— y no con apariencia o promesas comerciales.",
      content: `## DB-HS: Salubridad y condiciones interiores

El DB-HS regula ventilación, humedad, agua y residuos, condicionando la habitabilidad efectiva de una vivienda (Ficha 09). La presencia de moho, condensación, olores o filtraciones no es un "detalle estético": puede afectar a la salud, al uso y al valor de la operación. El módulo marca una regla explícita: una vivienda "reformada" no queda exenta de problemas de ventilación o humedad; la reforma debe documentarse (memoria, facturas, garantías). El agente debe preguntar por ventilación y extracción en baños y cocinas, revisar si cerramientos o reformas recientes alteraron la ventilación original, y no atribuir una humedad a una causa concreta sin informe — debe limitarse a describir lo observable ("se aprecia una mancha de humedad; recomendamos revisión técnica") y conservar fotografías fechadas y comunicaciones con la propiedad (Ficha 28, "lenguaje seguro").

## DB-HE y Certificado de Eficiencia Energética (CEE)

El DB-HE exige prestaciones energéticas para obra nueva y determinadas intervenciones (envolvente térmica, consumo, renovables). El documento clave para la comercialización, sin embargo, es el Certificado de Eficiencia Energética (CEE), regulado por el Real Decreto 390/2021, de 1 de junio, por el que se aprueba el procedimiento básico para la certificación de la eficiencia energética de los edificios. El CEE asigna una calificación en escala de letras (de A a G) y debe:
- Aparecer en la publicidad (letra y vigencia) cuando el inmueble se ofrezca en venta o arrendamiento.
- Entregarse al adquirente o arrendatario en los supuestos legalmente exigibles.
- Conservarse con fecha de emisión, técnico competente y vigencia identificables.

El propio módulo (Ficha 11) insiste en no confundir el CEE con el boletín eléctrico, la cédula de habitabilidad o la licencia de primera ocupación: son documentos distintos con funciones distintas. Si el certificado no existe o está caducado, debe programarse su obtención antes de publicar el inmueble.

## Publicidad y promesa comercial sobre eficiencia

La Ficha 29 del módulo aborda directamente el riesgo comercial de sobreprometer eficiencia: afirmaciones como "ahorra un 70%", "casa pasiva", "bajo consumo" o "lista para placas" son ambiguas o no demostradas si no están respaldadas por el CEE, la ficha del equipo de climatización o un informe técnico. Regla explícita del módulo: "no conviertas un dato técnico en una expectativa económica garantizada". La forma prudente de comunicarlo es citar la letra del CEE vigente y el sistema instalado según documentación ("vivienda con CEE letra B, según certificado vigente"), nunca prometer un ahorro económico exacto sin base objetiva y comparable.`,
      easyExplanation:
        "Si una vivienda huele a humedad o tiene manchas, no debes decir \"es solo humedad de condensación\" sin que lo confirme un técnico; solo puedes describir lo que ves. Para hablar de eficiencia energética, el único documento válido es el Certificado de Eficiencia Energética (CEE), que da una letra de la A a la G; no puedes prometer un ahorro concreto en la factura sin ese certificado y sin conocer cómo vive el ocupante.",
      balearExample:
        "En un apartamento en Portocristo (Manacor) con anuncio que dice \"vivienda de bajo consumo, ideal para todo el año\", el agente debe comprobar el CEE vigente antes de repetir la frase: si la calificación es D o E, corrige la publicidad a \"vivienda con CEE letra D, según certificado vigente\" y explica el sistema de climatización real (por ejemplo, aire acondicionado tipo split sin aislamiento reforzado), evitando la promesa de \"bajo consumo\" sin soporte documental.",
      keyConcepts: [
        "DB-HS",
        "DB-HE",
        "CEE",
        "RD 390/2021",
        "escala energética A-G",
        "lenguaje seguro",
        "ventilación y extracción",
        "envolvente térmica",
      ],
      frequentErrors: [
        "Confundir el CEE con el boletín eléctrico o la cédula de habitabilidad.",
        "Publicar un inmueble sin CEE vigente o con el certificado caducado.",
        "Prometer un porcentaje de ahorro energético sin base documental.",
        "Atribuir una humedad a una causa concreta sin informe técnico.",
      ],
      examples: [
        {
          id: "m04-l3-ex1",
          title: "Anuncio con CEE caducado",
          scenario: "El certificado tiene más de 10 años.",
          application:
            "Se programa la renovación antes de publicar y se retira cualquier letra energética desactualizada del anuncio.",
          isBalearContext: false,
        },
        {
          id: "m04-l3-ex2",
          title: "Vivienda con manchas tras nueva ventana",
          scenario: "El propietario afirma que \"no hay problema de humedad\".",
          application:
            "Se documenta con fotos fechadas, se pregunta por la ventilación tras la reforma y se recomienda revisión técnica antes de cerrar la operación.",
          isBalearContext: false,
        },
        {
          id: "m04-l3-ex3",
          title: "Promesa de \"factura eléctrica mínima\"",
          scenario: "El vendedor aporta una factura de un mes de baja ocupación.",
          application:
            "Se sustituye la afirmación por datos objetivos del CEE y se evita generalizar a partir de un único recibo.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m04-l4",
      moduleId: "m04",
      title: "Habitabilidad en Illes Balears, ITE/IEE y deber de conservación",
      order: 4,
      summary:
        "En Baleares, la cédula de habitabilidad y las inspecciones técnicas de edificios (ITE/IEE) son controles operativos que condicionan ocupar, contratar suministros y comercializar, y no deben confundirse con la licencia urbanística.",
      content: `## Cédula de habitabilidad en Illes Balears

La normativa balear de habitabilidad establece la cédula de habitabilidad (o documento equivalente) como control operativo esencial para ocupar una vivienda, contratar suministros o comercializarla en muchos supuestos (Ficha 12). El agente debe contrastar dirección, uso, superficie, número de ocupantes y fecha de vigencia del documento, y no confundir una licencia de obra o de primera ocupación con la cédula: son documentos distintos y, según la operación (venta, alquiler), puede exigirse específicamente la cédula. En viviendas antiguas o reformadas, debe consultarse la documentación técnica disponible y las posibles renovaciones de la cédula. Buena práctica del módulo: incluir la cédula en el checklist previo a publicidad, reserva, arras y contrato de alquiler.

La Ficha 02 ya anticipa esta distinción clave para el examen: la licencia urbanística autoriza un acto (construir, reformar), pero no certifica por sí sola la calidad de las instalaciones ni sustituye los controles de habitabilidad. Cada promesa comercial ("accesible", "eficiente", "reformado", "legalizado") debe relacionarse con su prueba documental concreta, nunca con una norma genérica.

## ITE / IEE y deber de conservación

Las Inspecciones Técnicas de Edificios (ITE) y los Informes de Evaluación de Edificios (IEE) permiten detectar necesidades de conservación, accesibilidad o eficiencia en un inmueble (Ficha 13). El régimen concreto (quién debe pasarlas, con qué periodicidad, en qué municipios) depende de la normativa estatal, autonómica y municipal, así como de la antigüedad y características del edificio — por lo que el agente debe verificar el ayuntamiento y la comunidad correspondientes, no asumir un régimen único para toda Mallorca.

En la práctica de intermediación, el agente debe:
- Pedir el informe existente, las actas de la comunidad de propietarios y el presupuesto de obras derivado.
- Consultar si existen requerimientos municipales o expedientes abiertos sobre el edificio.
- Informar al comprador de derramas aprobadas y previsibles con base documental (actas), nunca de memoria.
- Nunca anunciar un "edificio revisado" sin identificar el informe concreto y su fecha.

El módulo introduce aquí el concepto de debida diligencia (due diligence): la inspección técnica municipal (ITE/IEE) no sustituye una visita técnica privada del comprador cuando existen señales de patología (grietas, humedades, instalaciones antiguas). Son controles complementarios, no intercambiables.`,
      easyExplanation:
        "En Mallorca, para vender o alquilar necesitas la cédula de habitabilidad (o su documento equivalente), que certifica que la vivienda es apta para ser habitada; no es lo mismo que la licencia de obras. Además, los edificios de cierta edad pueden tener que pasar una inspección técnica (ITE/IEE) que revisa su estado de conservación; si hay obras pendientes aprobadas por la comunidad, esas derramas afectan al coste real de la compra y hay que decirlo con actas en la mano, no de oído.",
      balearExample:
        "En un edificio de 1985 en Inca con ITE pendiente de subsanaciones (fachada y cubierta), el agente debe: solicitar el informe ITE y las actas de la última junta de propietarios, verificar si existe presupuesto de obra aprobado, e informar por escrito al comprador de la derrama previsible antes de la señal de arras, evitando la frase \"el edificio está bien\" sin ese soporte documental.",
      keyConcepts: [
        "cédula de habitabilidad",
        "documento equivalente",
        "ITE",
        "IEE",
        "deber de conservación",
        "derrama",
        "acta de comunidad",
        "due diligence técnica",
      ],
      frequentErrors: [
        "Confundir la licencia urbanística con la cédula de habitabilidad.",
        "Anunciar \"edificio revisado\" sin citar informe y fecha concretos.",
        "No informar de derramas aprobadas antes de la señal de arras.",
        "Asumir que la inspección municipal sustituye una visita técnica privada cuando hay señales de patología.",
      ],
      examples: [
        {
          id: "m04-l4-ex1",
          title: "Piso sin cédula vigente en Manacor",
          scenario: "La cédula caducó hace 3 años.",
          application:
            "Se advierte al vendedor de la necesidad de renovarla antes de publicitar el alquiler, dado que puede ser exigible para contratar suministros.",
          isBalearContext: true,
        },
        {
          id: "m04-l4-ex2",
          title: "Edificio con ITE desfavorable",
          scenario: "Hay actas que aprueban una derrama de fachada.",
          application:
            "Se traslada por escrito al comprador el importe y calendario de la derrama antes de firmar arras.",
          isBalearContext: false,
        },
        {
          id: "m04-l4-ex3",
          title: "Vivienda con licencia de obra pero sin cédula",
          scenario: "El propietario asume que \"con la licencia basta\".",
          application:
            "Se explica que son documentos distintos y se gestiona la cédula antes de comercializar.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m04-l5",
      moduleId: "m04",
      title: "Instalaciones (eléctricas, térmicas, telecomunicaciones) y elementos comunes",
      order: 5,
      summary:
        "Las instalaciones de un inmueble (electricidad, climatización, ascensor, telecomunicaciones, agua) se rigen por normativa sectorial específica y su estado no se deduce del funcionamiento aparente.",
      content: `## Instalaciones eléctricas: REBT

La instalación eléctrica se rige por el Reglamento Electrotécnico para Baja Tensión (REBT) y su documentación asociada (Ficha 15). El boletín o certificado de instalación puede ser necesario para altas o modificaciones de suministro. El agente debe solicitar el boletín cuando existan reformas recientes, aumento de potencia o dudas de legalización, preguntar por el cuadro eléctrico, las protecciones, la antigüedad y las incidencias, y nunca afirmar que la instalación "cumple normativa" sin documentación competente. Alerta explícita del módulo: "un cuadro moderno no prueba que toda la instalación interior haya sido renovada correctamente."

## Instalaciones térmicas: RITE

El Reglamento de Instalaciones Térmicas en los Edificios (RITE) regula aire acondicionado, calefacción y agua caliente en los supuestos aplicables (Ficha 16). En vivienda y local conviene identificar sistema, antigüedad, mantenimiento, ubicación de unidades exteriores y autorización comunitaria o municipal cuando proceda. Debe archivarse la factura de instalación, garantías y contrato de mantenimiento si existe, y comprobar que las unidades exteriores no invaden fachada o elementos comunes sin autorización. La climatización es un argumento comercial sensible en Mallorca: debe explicarse con datos (orientación, sistema, evidencias), sin prometer "confort absoluto".

## Ascensores, garajes y elementos comunes

Los equipos comunes de un edificio requieren mantenimiento y pueden generar costes o restricciones relevantes de uso (Ficha 17): el ascensor (contrato, revisiones, derramas, riesgo de paradas o coste extraordinario), el garaje (ventilación, accesos, plaza concreta, riesgo de uso distinto al anunciado), portales y cubierta (obras, filtraciones, acuerdos, derramas o limitación de uso) y la piscina comunitaria (normas y mantenimiento, coste y horarios). Regla del módulo: "no conviertas un elemento común en una prestación privada: piscina comunitaria no es piscina privada."

## Infraestructuras comunes de telecomunicaciones (ICT) y piscinas/pozos privados

La infraestructura común de telecomunicaciones, la disponibilidad de fibra y la cobertura móvil varían por edificio y zona; la disponibilidad comercial de un operador cambia con el tiempo (Ficha 20). El agente debe indicar la información como "servicio disponible según operador" si no existe contrato probado, distinguir la instalación del edificio (ICT) de la contratación individual, y en obra nueva revisar la documentación de ICT y previsiones de entrega. Regla de marketing: "fibra" debe significar disponibilidad comprobable, no una estimación basada en el barrio.

En fincas con piscina, pozo, aljibe, depuradora o sistema de riego propios (Ficha 18), estas instalaciones singulares necesitan documentación sectorial y no se validan por su existencia física: debe comprobarse proyecto, licencia o documentación disponible, titularidad del agua y mantenimiento, sin anunciar "pozo legal" sin título, autorización o evidencia verificable, ni asumir que una piscina está legalizada solo porque aparezca en Catastro.`,
      easyExplanation:
        "Que las luces funcionen no significa que la instalación eléctrica esté al día: para eso hace falta el boletín eléctrico. Igual pasa con el aire acondicionado (regulado por el RITE) o con la fibra óptica (que depende del operador, no solo del edificio). El ascensor, el garaje o la piscina comunitaria son de todos los vecinos, no del propietario individual, y pueden generar derramas si necesitan arreglos. Si la finca tiene pozo o piscina propios, hace falta papeleo específico para que sean legales, no basta con que existan físicamente.",
      balearExample:
        "En un chalet de Bendinat (Calvià) con piscina, placas solares y pozo propio anunciado con fotos pero sin documentación, el agente debe pedir licencia/proyecto de la piscina y de las placas, diferenciar pozo de aljibe y derecho de agua, y solicitar evidencia antes de incluir esos elementos en la publicidad, incorporando una advertencia de verificación pendiente en la reserva.",
      keyConcepts: [
        "REBT",
        "boletín eléctrico",
        "RITE",
        "elementos comunes",
        "derrama por ascensor/garaje/piscina",
        "ICT",
        "pozo/aljibe/depuradora",
        "titularidad del agua",
      ],
      frequentErrors: [
        "Afirmar que una instalación eléctrica \"cumple normativa\" sin boletín.",
        "Prometer disponibilidad de fibra sin contrato u operador confirmado.",
        "Presentar una piscina o garaje comunitario como uso privativo.",
        "Anunciar \"pozo legal\" sin título o autorización administrativa verificable.",
      ],
      examples: [
        {
          id: "m04-l5-ex1",
          title: "Reforma con aumento de potencia eléctrica",
          scenario: "El propietario cambió el cuadro hace un año.",
          application:
            "Se exige el boletín de la instalación antes de afirmar que \"todo está legalizado\".",
          isBalearContext: false,
        },
        {
          id: "m04-l5-ex2",
          title: "Unidad exterior de aire acondicionado en fachada común",
          scenario: "Instalada sin permiso de la comunidad.",
          application:
            "Se comprueba si existe autorización comunitaria y se advierte del riesgo de retirada.",
          isBalearContext: false,
        },
        {
          id: "m04-l5-ex3",
          title: "Anuncio de \"fibra en todo el edificio\"",
          scenario: "Solo dos vecinos tienen contrato activo.",
          application:
            "Se corrige a \"servicio disponible según operador, sujeto a contratación individual\".",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m04-l6",
      moduleId: "m04",
      title: "Due diligence técnica, publicidad responsable y protocolo documental",
      order: 6,
      summary:
        "Antes de comercializar cualquier inmueble en Mallorca, el agente debe aplicar un protocolo documental (documento → fecha/vigencia → alcance → riesgo → acción) adaptado al tipo de inmueble y traducir esa documentación a publicidad sin extender su alcance real.",
      content: `## Protocolo de comprobación documental

El método transversal del módulo (Ficha 01) es: "para cada inmueble: documento técnico → fecha y vigencia → alcance → riesgo → acción. No conviertas una explicación oral en una garantía comercial." Este protocolo se concreta en un listado de documentos que deben entrar en el expediente antes de anunciar o formalizar una operación (Ficha 30): cédula/título equivalente (antes de alquilar o vender, para acreditar habitabilidad), CEE y etiqueta (antes de publicitar, para información energética), planos y memoria (en reforma u obra nueva, para superficies y prestaciones), licencias/certificados (en obras y cambios, para legalidad administrativa) y actas e informes de comunidad (en edificios, para riesgos y costes). Cada documento debe marcarse como disponible, pendiente, no aplicable o pendiente de verificación — evitando expedientes donde "todo parece correcto pero nadie sabe qué falta".

## Due diligence según tipo de inmueble

El módulo diferencia el checklist técnico según el tipo de activo:
- Piso en edificio (Ficha 24): cédula, CEE, planos y superficie de referencia; estado de instalaciones visibles y reformas documentadas; actas, derramas, ITE/IEE y obras aprobadas de la comunidad; uso permitido, estatutos y elementos comunes relevantes; visita técnica si hay grietas, humedades, cerramientos o reformas no claras. No basta con una foto del baño reformado: hay que comprobar ventilación, licencias de obra si existen, acabados y coherencia con la documentación.
- Vivienda unifamiliar (Ficha 25): Registro, Catastro, realidad física y superficie construida; cubierta, fachadas, drenaje, humedad y orientación; piscina, anexos, porches, garaje, placas solares y depósitos; instalaciones de agua, saneamiento, electricidad y climatización; afecciones de costas, rústico o patrimonio cuando proceda. Riesgo señalado por el módulo: la frase "todo está declarado" debe verificarse documento a documento, no por confianza.
- Finca rústica (Ficha 26): localización de edificaciones, caminos, muros, piscinas, aljibes y cierres; contraste de coordenadas, cartografía y superficie con el Catastro si hay discrepancias; información sobre agua, saneamiento, energía y telecomunicaciones; no asumir viabilidad de reforma, ampliación o uso turístico sin comprobación. Una finca atractiva puede tener limitaciones técnicas y territoriales que cambien radicalmente la decisión de compra.

## Visita técnica responsable

La visita no sustituye una inspección pericial, pero puede revelar preguntas que deben resolverse antes de ofertar (Ficha 27). Protocolo: antes de la visita, revisar documentos y la lista de dudas (checklist); durante la visita, fotografiar incidencias con autorización y registrar notas fechadas; después, cruzar lo observado con la propiedad y con el técnico si procede; antes de arras, cerrar o condicionar las incidencias detectadas mediante cláusula y anexos. Regla de conducta: no ocultar la incidencia para "no asustar" al comprador — la transparencia reduce reclamaciones.

## Reconocer patologías sin diagnosticar

Reconocer una señal (humedad, grieta, cubierta dañada, instalación antigua) no implica conocer su causa (Ficha 28). El valor profesional del agente está en describir lo observable, pedir documentación y activar una revisión adecuada, nunca en diagnosticar. Ejemplos de lenguaje seguro frente a lenguaje de riesgo: "se aprecia una mancha de humedad; recomendamos revisión técnica" es correcto; "es una filtración menor" no lo es sin informe.

## Publicidad técnica: qué se puede afirmar

La publicidad debe transformar documentos en lenguaje claro, sin extender su alcance (Ficha 31): indicar la superficie con su fuente (construida registral, catastral, útil o según plano); citar la eficiencia con la etiqueta vigente; describir una reforma indicando año y documentación disponible; nunca usar "legalizado", "sin cargas técnicas" o "reformable" sin base documental; cuando haya duda, incorporar la condición de verificación. Ejemplo del propio módulo: "Vivienda con CEE letra B, según certificado vigente; reforma de 2022 según documentación facilitada por la propiedad."

## Casos resueltos del módulo

Caso 1 — piso reformado con humedad (Ficha 32): el vendedor afirma reforma integral, el comprador detecta olor y manchas. El agente no decide si hay vicio oculto; documenta la incidencia con fotos y comunicación a la propiedad, solicita memoria, facturas, garantías y antecedentes de siniestros, y propone visita técnica o condición suspensiva en arras, evitando el término "integral" si no se conoce el alcance real de la reforma.

Caso 2 — chalet con piscina y placas (Ficha 33): el anuncio indica piscina, placas solares y pozo respaldado solo por fotos y referencia catastral. La existencia física no acredita legalidad, titularidad del agua ni alcance de la instalación energética; se pide licencia/proyecto o documentación disponible, se diferencia pozo, aljibe y derecho de agua, y se incluye advertencia de verificación en la reserva. La falta de documentación no obliga a retirar el inmueble, pero sí obliga a no prometer lo que no está acreditado.

Caso 3 — local anunciado como vivienda (Ficha 34): un local reformado se ofrece como "loft listo para vivir" y el propietario afirma que otros vecinos hacen lo mismo. Se comprueba uso urbanístico, título habilitante, proyecto, habitabilidad y Registro; se retira cualquier afirmación de uso residencial hasta obtener confirmación, explicando que la apariencia interior no cambia el uso jurídico; se deriva a técnico y ayuntamiento. Lección explícita: no comercializar un cambio de uso como hecho consumado cuando es una posibilidad pendiente de trámites.`,
      easyExplanation:
        "Antes de anunciar cualquier vivienda, local o finca, debes tener una carpeta con los documentos técnicos correctos (cédula, certificado energético, licencias, actas de la comunidad) y marcar cuáles faltan. Durante la visita, apunta y fotografía lo que veas, pero no diagnostiques ni prometas nada que no puedas demostrar con papeles. Si el vendedor dice \"está todo legal\" o \"reforma integral\", tú solo puedes repetir eso si tienes el documento que lo confirma; si no lo tienes, lo dices claramente y lo condicionas por escrito.",
      balearExample:
        "En Sóller, un apartamento turístico se anuncia como \"loft con encanto, listo para mudarse\" pero en realidad tiene uso de local comercial según el Catastro y el Ayuntamiento. El agente detecta la discrepancia al revisar el uso urbanístico, retira la palabra \"vivienda\" del anuncio, explica al propietario que necesita un cambio de uso formal antes de venderlo como residencial, y deriva la consulta al arquitecto municipal.",
      keyConcepts: [
        "protocolo documento-fecha-alcance-riesgo-acción",
        "checklist por tipo de inmueble",
        "visita técnica responsable",
        "lenguaje seguro",
        "publicidad técnica",
        "condición suspensiva en arras",
        "due diligence",
      ],
      frequentErrors: [
        "Ocultar una incidencia detectada en visita para \"no asustar\" al comprador.",
        "Usar \"legalizado\", \"integral\" o \"sin cargas técnicas\" sin documento que lo respalde.",
        "Comercializar un cambio de uso como hecho consumado sin título habilitante.",
        "Cerrar un expediente \"documentalmente completo\" sin haber marcado qué falta o qué está pendiente de verificar.",
      ],
      examples: [
        {
          id: "m04-l6-ex1",
          title: "Comprador que exige respuesta inmediata sobre una grieta",
          scenario: "Presión por cerrar la venta rápido.",
          application:
            "Se aplica la frase de reserva técnica y se incorpora condición suspensiva en el contrato de arras.",
          isBalearContext: false,
        },
        {
          id: "m04-l6-ex2",
          title: "Expediente \"completo\" sin cédula vigente",
          scenario: "La carpeta parece ordenada pero falta el documento clave.",
          application:
            "Se aplica el protocolo de marcado (disponible/pendiente/no aplicable) y se corrige antes de publicar.",
          isBalearContext: false,
        },
        {
          id: "m04-l6-ex3",
          title: "Local con vecinos ya viviendo de forma irregular",
          scenario: "El propietario usa esto como argumento de normalidad.",
          application:
            "Se explica que la irregularidad de terceros no legaliza el propio inmueble y se exige verificación del uso antes de ofertar.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m04-e1",
      moduleId: "m04",
      type: "case",
      question:
        "Un cliente pregunta si puedes afirmar que una grieta visible en el salón es \"solo estética\".",
      expectedAnswer:
        "No; se debe describir la observación, evitar el diagnóstico y proponer una revisión técnica (posible DB-SE).",
      explanation:
        "El agente no tiene competencia para diagnosticar patologías estructurales; su papel es documentar y derivar.",
      difficulty: "basic",
    },
    {
      id: "m04-e2",
      moduleId: "m04",
      type: "decision",
      question:
        "Un vendedor te entrega la escritura y el boletín eléctrico de hace 15 años, tras haber reformado el cuadro el año pasado. ¿Qué documento adicional debes exigir antes de publicitar?",
      options: [
        "Ninguno, el boletín antiguo es suficiente",
        "El boletín/certificado de la reforma reciente",
        "Solo el CEE",
        "Solo el acta de la comunidad",
      ],
      expectedAnswer: "El boletín/certificado de la reforma reciente",
      explanation:
        "El REBT exige boletín actualizado ante reformas o modificaciones relevantes de la instalación.",
      difficulty: "medium",
    },
    {
      id: "m04-e3",
      moduleId: "m04",
      type: "calculation",
      question:
        "Un edificio se entregó hace 4 años y aparece una filtración que afecta a la habitabilidad de un piso (no a la estructura). ¿Está dentro del plazo de responsabilidad LOE?",
      expectedAnswer:
        "No; el plazo aplicable a daños que afectan a la habitabilidad es de 3 años desde la recepción de la obra, ya vencido a los 4 años.",
      explanation:
        "Distinguir el plazo de 1 año (acabados), 3 años (habitabilidad) y 10 años (estructura) del art. 17 LOE.",
      difficulty: "medium",
    },
    {
      id: "m04-e4",
      moduleId: "m04",
      type: "comprehension",
      question:
        "Explica la diferencia entre cédula de habitabilidad, CEE y licencia de primera ocupación.",
      expectedAnswer:
        "La cédula acredita condiciones de habitabilidad para ocupar/contratar suministros; el CEE informa del comportamiento energético; la licencia de primera ocupación autoriza el uso tras la finalización de obra. Son documentos independientes con funciones distintas.",
      explanation:
        "Es uno de los errores de examen más citados en el módulo (Ficha 11 y 12).",
      difficulty: "basic",
    },
    {
      id: "m04-e5",
      moduleId: "m04",
      type: "balear_scenario",
      question:
        "Un anuncio de un chalet incluye piscina, placas solares y pozo, respaldados solo por fotos y referencia catastral. ¿Qué debe hacer el agente antes de publicar?",
      expectedAnswer:
        "Solicitar licencia/proyecto o documentación de piscina y placas, diferenciar pozo/aljibe/derecho de agua, y no retirar el inmueble pero sí matizar la publicidad con condición de verificación.",
      explanation:
        "La existencia física no acredita legalidad ni titularidad (Ficha 33).",
      difficulty: "advanced",
    },
    {
      id: "m04-e6",
      moduleId: "m04",
      type: "decision",
      question:
        "Un local reformado se anuncia como \"loft listo para vivir\". ¿Puedes mantener esa descripción en el anuncio?",
      expectedAnswer:
        "No, hasta verificar uso urbanístico, título habilitante, proyecto y habitabilidad; se debe retirar la afirmación de uso residencial.",
      explanation:
        "El cambio de uso no puede comercializarse como hecho consumado (Ficha 34).",
      difficulty: "medium",
    },
    {
      id: "m04-e7",
      moduleId: "m04",
      type: "calculation",
      question:
        "Un edificio tiene ITE con subsanaciones pendientes de fachada y una derrama aprobada en acta por 6.000 € por vivienda. ¿Debe comunicarse antes de las arras?",
      expectedAnswer:
        "Sí, debe informarse por escrito con base en el acta antes de la señal de arras.",
      explanation:
        "El deber de información sobre derramas aprobadas es explícito en el módulo (Ficha 13).",
      difficulty: "medium",
    },
    {
      id: "m04-e8",
      moduleId: "m04",
      type: "comprehension",
      question:
        "¿Por qué el módulo insiste en que \"un cuadro eléctrico moderno no prueba que toda la instalación esté renovada\"?",
      expectedAnswer:
        "Porque la renovación visible de un elemento (el cuadro) no acredita el estado del resto del circuito interior; se necesita el boletín completo de la instalación.",
      explanation:
        "Refuerza el principio de no deducir legalidad o seguridad de la apariencia.",
      difficulty: "basic",
    },
  ],
  quizQuestions: [
    {
      id: "m04-q1",
      question: "¿Qué ley organiza a los agentes que intervienen en el proceso de edificación en España?",
      options: [
        "Ley de Propiedad Horizontal",
        "Ley 38/1999 de Ordenación de la Edificación (LOE)",
        "Código Técnico de la Edificación",
        "Ley del Suelo",
      ],
      correctAnswerIndex: 1,
      explanation: "La LOE (art. 1 y ss.) define promotor, proyectista, constructor y dirección facultativa.",
      sourceModuleId: "m04",
      legalReference: "LOE 38/1999",
      difficulty: "basic",
    },
    {
      id: "m04-q2",
      question:
        "Según la LOE, ¿cuál es el plazo de responsabilidad por daños materiales que afectan a la estructura del edificio?",
      options: ["1 año", "3 años", "10 años", "15 años"],
      correctAnswerIndex: 2,
      explanation:
        "Art. 17 LOE, daños que comprometan cimentación, soportes, vigas, forjados o muros de carga.",
      sourceModuleId: "m04",
      legalReference: "Art. 17 LOE 38/1999",
      difficulty: "medium",
    },
    {
      id: "m04-q3",
      question:
        "¿Qué figura de la LOE puede ser una Administración pública, una cooperativa o una sociedad, y no solo una persona física?",
      options: ["Constructor", "Proyectista", "Promotor", "Director de ejecución de obra"],
      correctAnswerIndex: 2,
      explanation: "El promotor impulsa y financia; la LOE admite cualquiera de esas formas jurídicas.",
      sourceModuleId: "m04",
      legalReference: "LOE, figura del promotor",
      difficulty: "basic",
    },
    {
      id: "m04-q4",
      question: "¿Qué Real Decreto aprueba el Código Técnico de la Edificación?",
      options: ["RD 390/2021", "RD 314/2006", "RD 842/2002", "RD 1027/2007"],
      correctAnswerIndex: 1,
      explanation: "El CTE se aprueba mediante RD 314/2006, de 17 de marzo.",
      sourceModuleId: "m04",
      legalReference: "RD 314/2006",
      difficulty: "basic",
    },
    {
      id: "m04-q5",
      question:
        "¿Qué Documento Básico del CTE regula la evacuación y compartimentación frente a incendios?",
      options: ["DB-SE", "DB-SI", "DB-SUA", "DB-HE"],
      correctAnswerIndex: 1,
      explanation: "DB-SI = Seguridad en caso de Incendio.",
      sourceModuleId: "m04",
      legalReference: "CTE, DB-SI",
      difficulty: "basic",
    },
    {
      id: "m04-q6",
      question:
        "Un agente afirma que una vivienda es \"accesible\" porque el edificio tiene ascensor. ¿Es correcto?",
      options: [
        "Sí, siempre",
        "No, debe comprobarse el itinerario accesible completo desde la vía pública",
        "Sí, si el ascensor es nuevo",
        "No aplica al DB-SUA",
      ],
      correctAnswerIndex: 1,
      explanation: "La Ficha 08 marca este error de examen explícitamente.",
      sourceModuleId: "m04",
      legalReference: "CTE, DB-SUA",
      difficulty: "medium",
    },
    {
      id: "m04-q7",
      question:
        "¿Qué norma regula el procedimiento básico de certificación de eficiencia energética de los edificios en vigor?",
      options: ["RD 235/2013", "RD 390/2021", "RD 314/2006", "RD 842/2002"],
      correctAnswerIndex: 1,
      explanation: "El RD 390/2021 sustituye al RD 235/2013 y regula el CEE.",
      sourceModuleId: "m04",
      legalReference: "RD 390/2021",
      difficulty: "medium",
    },
    {
      id: "m04-q8",
      question: "¿Qué documento NO debe confundirse con el Certificado de Eficiencia Energética (CEE)?",
      options: [
        "Boletín eléctrico",
        "Cédula de habitabilidad",
        "Licencia de primera ocupación",
        "Todas las anteriores",
      ],
      correctAnswerIndex: 3,
      explanation: "El módulo insiste en diferenciar el CEE de estos tres documentos.",
      sourceModuleId: "m04",
      legalReference: "Ficha 11",
      difficulty: "basic",
    },
    {
      id: "m04-q9",
      question:
        "En Illes Balears, ¿qué documento acredita las condiciones de habitabilidad para ocupar, contratar suministros o comercializar una vivienda en muchos supuestos?",
      options: [
        "Licencia urbanística",
        "Cédula de habitabilidad (o documento equivalente)",
        "Informe de tasación",
        "Libro del Edificio",
      ],
      correctAnswerIndex: 1,
      explanation: "La cédula es un control operativo autonómico específico de habitabilidad.",
      sourceModuleId: "m04",
      legalReference: "Normativa balear de habitabilidad, Ficha 12",
      difficulty: "medium",
    },
    {
      id: "m04-q10",
      question:
        "¿Qué relación existe entre la licencia urbanística y los controles de habitabilidad de una vivienda?",
      options: [
        "Son el mismo documento",
        "La licencia autoriza un acto, pero no certifica por sí sola la calidad de las instalaciones ni sustituye los controles de habitabilidad",
        "La licencia sustituye siempre a la cédula",
        "No tienen relación",
      ],
      correctAnswerIndex: 1,
      explanation: "Es el \"anclaje\" explícito de la Ficha 02.",
      sourceModuleId: "m04",
      legalReference: "Ficha 02 del módulo",
      difficulty: "medium",
    },
    {
      id: "m04-q11",
      question: "¿Qué reglamento regula la instalación eléctrica de baja tensión en viviendas y locales?",
      options: ["RITE", "REBT", "CTE DB-HE", "LPH"],
      correctAnswerIndex: 1,
      explanation: "Reglamento Electrotécnico para Baja Tensión.",
      sourceModuleId: "m04",
      legalReference: "REBT (RD 842/2002)",
      difficulty: "basic",
    },
    {
      id: "m04-q12",
      question:
        "¿Qué reglamento regula las instalaciones térmicas (climatización, calefacción, agua caliente) en los edificios?",
      options: ["REBT", "RITE", "DB-SUA", "LOE"],
      correctAnswerIndex: 1,
      explanation: "Reglamento de Instalaciones Térmicas en los Edificios.",
      sourceModuleId: "m04",
      legalReference: "RITE (RD 1027/2007)",
      difficulty: "basic",
    },
    {
      id: "m04-q13",
      question: "Según el módulo, ¿qué NO puede afirmarse sobre una piscina comunitaria en un anuncio?",
      options: [
        "Que existe y es de uso comunitario",
        "Que tiene normas y horarios",
        "Que es una prestación privada del propietario individual",
        "Que puede generar coste vía derrama",
      ],
      correctAnswerIndex: 2,
      explanation: "\"No conviertas un elemento común en una prestación privada.\"",
      sourceModuleId: "m04",
      legalReference: "Ficha 17",
      difficulty: "medium",
    },
    {
      id: "m04-q14",
      question:
        "Un anuncio afirma \"fibra en todo el edificio\" basándose en que otros edificios de la zona la tienen. ¿Es correcto?",
      options: [
        "Sí, es una estimación razonable",
        "No, \"fibra\" debe significar disponibilidad comprobable, no estimación basada en el barrio",
        "Sí, si el edificio es nuevo",
        "No aplica a la comercialización",
      ],
      correctAnswerIndex: 1,
      explanation: "Regla de marketing explícita del módulo (Ficha 20).",
      sourceModuleId: "m04",
      legalReference: "Ficha 20",
      difficulty: "medium",
    },
    {
      id: "m04-q15",
      question:
        "¿Qué documento resume las instrucciones de uso, mantenimiento, garantías y agentes intervinientes tras la entrega de una obra?",
      options: ["CEE", "Libro del Edificio", "Cédula de habitabilidad", "Boletín eléctrico"],
      correctAnswerIndex: 1,
      explanation: "Es un activo de información, no un simple archivo.",
      sourceModuleId: "m04",
      legalReference: "LOE, Libro del Edificio, Ficha 22",
      difficulty: "basic",
    },
    {
      id: "m04-q16",
      question: "Respecto al seguro decenal, ¿qué afirmación es correcta?",
      options: [
        "Toda obra tiene seguro decenal por defecto",
        "Su existencia, alcance y obligatoriedad dependen del tipo de obra, uso y daño, y deben revisarse en la póliza",
        "Cubre solo defectos de acabado",
        "Sustituye a cualquier otra garantía de instalaciones",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 23 desmiente la generalización.",
      sourceModuleId: "m04",
      legalReference: "Art. 19 LOE, seguro decenal",
      difficulty: "advanced",
    },
    {
      id: "m04-q17",
      question: "Ante una grieta detectada durante una visita, ¿cuál es la conducta correcta del agente?",
      options: [
        "Calificarla como \"superficial\" para no alarmar",
        "Documentarla, no diagnosticarla, y recomendar revisión técnica",
        "Ignorarla si el vendedor no la menciona",
        "Prometer que se reparará antes de la entrega",
      ],
      correctAnswerIndex: 1,
      explanation: "\"Reconocer una señal no implica conocer su causa\" (Ficha 28).",
      sourceModuleId: "m04",
      legalReference: "Ficha 28, lenguaje seguro",
      difficulty: "basic",
    },
    {
      id: "m04-q18",
      question:
        "Un local con apariencia de vivienda se anuncia como \"loft listo para vivir\" porque otros vecinos hacen lo mismo. ¿Qué principio se vulnera?",
      options: [
        "DB-HE",
        "No comercializar un cambio de uso como hecho consumado cuando es una posibilidad pendiente de trámites",
        "REBT",
        "Seguro decenal",
      ],
      correctAnswerIndex: 1,
      explanation: "Lección explícita del Caso 3 (Ficha 34).",
      sourceModuleId: "m04",
      legalReference: "Ficha 34",
      difficulty: "advanced",
    },
  ],
};

export const m04Glossary: GlossaryItem[] = [
  {
    id: "g-m04-ajuste-razonable",
    term: "Ajuste razonable",
    definition:
      "Medida de adaptación exigida para garantizar accesibilidad y uso autónomo cuando no impone una carga desproporcionada, conforme a la normativa de accesibilidad y al CTE DB-SUA.",
    easyDefinition:
      "Una obra o cambio para que alguien con movilidad reducida pueda usar el edificio, siempre que sea razonable hacerlo.",
    relatedModuleId: "m04",
  },
  {
    id: "g-m04-derrama",
    term: "Derrama",
    definition:
      "Cantidad extraordinaria aprobada en junta de propietarios (Ley de Propiedad Horizontal) para financiar obras o gastos no cubiertos por la cuota ordinaria de comunidad.",
    easyDefinition:
      "Un pago extra que piden a todos los vecinos para arreglar algo del edificio, como la fachada o el ascensor.",
    relatedModuleId: "m04",
  },
  {
    id: "g-m04-boletin-electrico",
    term: "Boletín eléctrico / certificado de instalación",
    definition:
      "Documento emitido por instalador autorizado que acredita la conformidad de una instalación eléctrica con el REBT, necesario para altas o modificaciones de suministro.",
    easyDefinition:
      "El \"papel\" que certifica que el cableado y el cuadro eléctrico de una vivienda están bien hechos y son seguros.",
    relatedModuleId: "m04",
  },
  {
    id: "g-m04-iee",
    term: "Informe de Evaluación de Edificios (IEE)",
    definition:
      "Informe técnico que valora el estado de conservación, la accesibilidad y la eficiencia energética de un edificio, complementario o sucesor de la ITE según la normativa aplicable.",
    easyDefinition:
      "Una revisión completa del edificio que dice si está bien conservado, si es accesible y si gasta mucha energía.",
    relatedModuleId: "m04",
  },
  {
    id: "g-m04-titulo-habilitante",
    term: "Título habilitante",
    definition:
      "Documento administrativo (licencia, comunicación previa o declaración responsable) que autoriza legalmente un uso, obra o actividad conforme al planeamiento urbanístico.",
    easyDefinition:
      "El permiso oficial del ayuntamiento que dice que puedes hacer esa obra o usar así ese inmueble.",
    relatedModuleId: "m04",
  },
  {
    id: "g-m04-condicion-suspensiva",
    term: "Condición suspensiva",
    definition:
      "Cláusula contractual que subordina la eficacia de la venta/arras a la verificación de un hecho o documento pendiente.",
    easyDefinition:
      "Una cláusula en el contrato que dice \"esto solo se cierra si se confirma tal cosa (por ejemplo, que no hay problema estructural)\".",
    relatedModuleId: "m04",
  },
];

export const m04Alerts: string[] = [
  "El documento fuente indica que fue revisado con fuentes oficiales disponibles a 4 de julio de 2026 y advierte expresamente: \"las normas técnicas evolucionan; consulta siempre el texto consolidado y el trámite aplicable\" (Ficha 37). El agente debe verificar la vigencia de LOE, CTE, RD 390/2021 (CEE), REBT y RITE en el BOE/BOIB antes de dar por definitiva cualquier cifra o plazo ante un cliente.",
  "El RD 390/2021 (procedimiento de certificación energética) sustituyó al anterior RD 235/2013; cualquier CEE emitido bajo la norma antigua debe revisarse por vigencia y no por fecha de emisión aparente.",
  "El régimen de ITE/IEE \"depende de la normativa estatal, autonómica y municipal, así como de la antigüedad y características del edificio\" (Ficha 13) — no existe un calendario único para todos los municipios de Mallorca; debe confirmarse caso por caso con el ayuntamiento correspondiente.",
  "Las normas de habitabilidad balear y de planeamiento/ordenanzas municipales son las fuentes que rigen la cédula de habitabilidad y el control de usos locales (Ficha 37) — su consulta puntual (BOIB, ordenanza municipal) es obligatoria antes de afirmar plazos o vigencias concretas ante un cliente.",
];
