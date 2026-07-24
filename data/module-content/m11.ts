import type { Module, GlossaryItem } from "@/lib/types";

export const m11Module: Module = {
  id: "m11",
  code: "M11",
  title: "Conocimientos Arquitectónicos",
  order: 11,
  description: "Sistemas constructivos, patologías en entorno marino, Libro del Edificio y conservación.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m11-l1",
      moduleId: "m11",
      title: "Método de lectura del edificio y límites del agente",
      order: 1,
      summary: "El agente lee el edificio como sistema (terreno, estructura, envolvente, instalaciones, documentos) y sabe exactamente dónde termina su competencia y empieza la del técnico.",
      content: `Este módulo no convierte al agente en técnico proyectista; su finalidad es que pueda leer un inmueble con lenguaje preciso, separar una observación de un diagnóstico, y detectar cuándo una operación exige informe especializado antes de anunciar, reservar, valorar o firmar. En Mallorca el contexto intensifica el riesgo de simplificar: una vivienda puede ser antigua, estar cerca del mar, haber sufrido reformas parciales, encontrarse en suelo rústico o depender de elementos comunitarios, y el precio visible no explica por sí mismo la durabilidad, la legalidad ni el coste de mantenimiento.

## Método de las cinco capas

En cada visita se recorren cinco capas de análisis: 1) ubicación y parcela; 2) estructura y envolvente; 3) instalaciones; 4) documentos; 5) coste, riesgo y derivación. Nunca se concluye "está perfecto" o "es legal" sin soporte documental. Las tareas propias del agente son: identificar componentes del edificio y su función sin emitir diagnósticos que exigen técnico competente; leer documentación (planos, licencia, final de obra, Libro del Edificio, IAE/ITE, cédula, CEE y certificados de instalaciones); reconocer síntomas de humedad, fisuras, corrosión, aislamiento insuficiente, obsolescencia de instalaciones y falta de accesibilidad; y convertir lo observado en un informe comercial prudente: hecho, evidencia disponible, posible impacto y siguiente comprobación.

## Dónde termina la competencia del agente

El agente puede describir lo visible, recopilar documentos, formular preguntas al propietario, explicar efectos comerciales previsibles y coordinar profesionales. No debe certificar seguridad estructural, cumplimiento del CTE, legalidad de una obra, aptitud de una instalación ni coste definitivo de una reparación. Ante preguntas como "¿puedo tirar este muro?", "¿esta piscina es legal?", "¿cuánto costará rehabilitar?" o "¿la humedad es superficial?", la respuesta responsable no es una afirmación intuitiva: debe quedar documentada como consulta a técnico, ayuntamiento o profesional competente según el caso. Una fisura, flecha o grieta activa se deriva a arquitecto o arquitecto técnico (describir ubicación y evolución, no diagnosticar causa); un cambio de uso o ampliación se deriva a técnico más ayuntamiento (no prometer viabilidad por apariencia); una instalación antigua se deriva a instalador habilitado o técnico (solicitar boletín, revisión o certificado disponible); y una piscina, pozo o fosa se deriva a técnico, ayuntamiento y organismo sectorial (contrastar título, licencia y registro aplicable).

## El mapa normativo y documental

La técnica no funciona aislada: cada documento responde a una pregunta diferente. La Ley de Ordenación de la Edificación (LOE) identifica a los agentes que intervienen en el proceso de edificación y regula responsabilidades y garantías; sirve para identificar promotor, proyecto, garantías y recepción. El Código Técnico de la Edificación (CTE) establece las exigencias básicas de calidad para edificios e instalaciones; no se vende una prestación técnica sin proyecto o memoria que la respalde. La cédula de habitabilidad determina si el inmueble puede destinarse a morada en condiciones exigibles y es un filtro previo de uso residencial. El Certificado de Eficiencia Energética (CEE) informa la calificación energética documentada, útil para publicidad, pero no para prometer ahorro garantizado. El Informe de Evaluación del Edificio (IAE) y la Inspección Técnica de Edificios (ITE) anticipan obras y derramas al evaluar conservación, accesibilidad y energía. Para una operación concreta importa siempre la fecha: un edificio existente no se "actualiza" automáticamente a todos los requisitos actuales, pero una obra nueva o una reforma puede activar exigencias de la normativa vigente y de sus regímenes transitorios. Antes de afirmar que algo "cumple", se debe identificar el documento, el técnico firmante, la fecha y el alcance.`,
      easyExplanation: "El agente inmobiliario no es un técnico: no certifica que un edificio esté bien construido ni que una instalación sea segura. Su trabajo es observar con método, hacer las preguntas correctas, pedir los papeles adecuados y, si algo genera duda, derivarlo a un profesional antes de comprometer una venta. Cada documento del edificio (LOE, CTE, cédula, CEE, IAE/ITE) responde a una pregunta distinta, así que hay que saber cuál pedir según el caso.",
      balearExample: "En Manacor, un agente capta un chalet de los años 80 con una terraza cerrada recientemente. El comprador pregunta si puede convertir la terraza en un dormitorio. Siguiendo el método de las cinco capas, el agente no responde \"sí, seguro\" ni \"no, imposible\": pide la licencia o comunicación previa del cierre, revisa si consta en catastro y cédula, y deriva la pregunta de viabilidad de uso a un arquitecto técnico y al ayuntamiento antes de incluir esa posibilidad en el anuncio.",
      keyConcepts: ["método de las cinco capas", "límites de competencia del agente", "LOE", "CTE", "cédula de habitabilidad", "CEE", "IAE/ITE", "derivación técnica"],
      frequentErrors: [
        "Afirmar que una vivienda 'cumple normativa' sin identificar documento, técnico firmante, fecha y alcance",
        "Diagnosticar la causa de una grieta o fisura en vez de solo describirla y derivar",
        "Prometer viabilidad de cambio de uso o ampliación por apariencia visual",
        "Confundir el estándar de una obra nueva con la prueba de legalidad o seguridad de un edificio antiguo",
        "Responder con una afirmación intuitiva a preguntas técnicas en vez de documentar la consulta"
      ],
      examples: [
        {
          id: "m11-l1-ex1",
          title: "Pregunta sobre muro de carga",
          scenario: "Un comprador pregunta si puede tirar un tabique durante la visita",
          application: "El agente describe el elemento (tabique aparente, posible apoyo o instalación oculta) y deriva la decisión a arquitecto o arquitecto técnico",
          isBalearContext: false
        },
        {
          id: "m11-l1-ex2",
          title: "Piscina sin papeles",
          scenario: "Una finca anuncia piscina propia sin mención de licencia",
          application: "El agente contrasta título, licencia y registro aplicable antes de anunciarla como activo sin condiciones",
          isBalearContext: false
        },
        {
          id: "m11-l1-ex3",
          title: "Instalación eléctrica 'nueva'",
          scenario: "El propietario dice que el cuadro eléctrico es nuevo",
          application: "El agente solicita boletín o certificado de instalación eléctrica antes de confirmar el dato en el anuncio",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l2",
      moduleId: "m11",
      title: "Anatomía del edificio, terreno y estructura",
      order: 2,
      summary: "El edificio es un sistema interdependiente (terreno, estructura, envolvente, instalaciones, elementos comunes) cuyo ciclo de vida no se refleja solo en los acabados.",
      content: `La lectura técnica empieza por distinguir elementos que sostienen, protegen, distribuyen servicios y permiten el uso: la estructura transmite cargas al terreno; la envolvente protege de agua, viento, calor y ruido; las instalaciones aportan agua, energía, ventilación y evacuación; los acabados hacen habitable y comercialmente atractiva la vivienda, pero no sustituyen a los sistemas de fondo. El ciclo de vida importa: un edificio puede tener una cocina reciente y, a la vez, una cubierta al final de su vida útil, bajantes deterioradas o una fachada con mantenimiento pendiente. El valor de mercado debe incorporar esa diferencia mediante expectativas de gasto, no solo mediante la apariencia de una reforma. Los cinco bloques de anatomía son: terreno y cimentación (relación con humedad, pendientes, movimientos y drenaje); estructura (pilares, vigas, muros portantes, forjados y cubierta); envolvente (fachada, huecos, carpinterías, impermeabilización y aislamiento); instalaciones (electricidad, agua, saneamiento, climatización, ventilación, telecomunicaciones y protección contra incendios cuando procede); y elementos comunes (cubierta, fachada, bajantes, ascensor, garaje, piscina, instalaciones y urbanización). Cuando se valora una reforma, hay que preguntar qué se renovó exactamente: "acabados" no equivale a "instalaciones", e "integral" necesita memoria, facturas, fotografías de obra y, si procede, títulos habilitantes.

## Terreno, cimentación y entorno inmediato

El terreno condiciona la cimentación, el drenaje y la humedad. Pendientes mal resueltas, patios que acumulan agua, muros de contención, rellenos, jardineras pegadas a fachada o bajantes que descargan junto al inmueble pueden generar patologías que se manifiestan dentro de la vivienda meses después. En fincas rústicas o viviendas unifamiliares la observación debe ampliarse a accesos, escorrentías, depósitos, muros de piedra, taludes y redes de evacuación. El agente no decide la estabilidad de un terreno, pero sí debe documentar signos visibles (charcos persistentes, verdín, sumideros lentos, grietas en muros de contención, humedad en planta baja o sótano, taludes próximos) y evitar la frase "nunca se inunda" si no dispone de información verificable. En Mallorca, las lluvias intensas puntuales, la topografía y los cerramientos tradicionales hacen que el drenaje sea un punto de visita tan importante como la distribución interior.

## Estructura: qué observar sin diagnosticar

Los elementos estructurales pueden ser muros portantes, pilares, vigas, forjados y cimentación. En edificios antiguos es frecuente que las distribuciones hayan cambiado con reformas, por lo que un tabique aparente puede no ser simplemente "tirable": puede ocultar instalaciones, apoyar sobre un elemento sensible o estar vinculado a una intervención sin documentación. Las fisuras no significan siempre un problema estructural, pero su ubicación, forma, repetición y evolución son relevantes: una grieta reciente junto a un hueco, un desnivel percibido en el pavimento, puertas que rozan de forma anómala o deformaciones visibles justifican una consulta antes de cerrar precio o plazo de obra. El agente debe describir con precisión ("fisura diagonal de aproximadamente X cm situada sobre el marco"), preguntar cuándo apareció, si fue reparada, si hay informe, si hubo obra, fuga, movimiento o siniestro, conservar fotos fechadas y evitar ocultar elementos con mobiliario o edición de imagen. Si existe riesgo para seguridad o habitabilidad, la recomendación comercial se suspende hasta recibir criterio técnico. El error más frecuente en este bloque es confundir una reforma estética con una rehabilitación estructural: solo una memoria, proyecto, dirección facultativa o informe técnico permite atribuir alcance real a una intervención.`,
      easyExplanation: "Un edificio no es solo lo que se ve terminado; es un conjunto de sistemas que trabajan juntos: el terreno donde se apoya, la estructura que lo sostiene, la piel exterior que lo protege y las instalaciones que lo hacen funcionar. Una cocina bonita no dice nada sobre si la cubierta está gastada o si el terreno tiene problemas de drenaje. Ante una grieta o fisura, el agente describe lo que ve (tamaño, ubicación, si es reciente) pero nunca decide si es grave: eso lo dice un técnico.",
      balearExample: "En Sóller, una casa de piedra con jardín en pendiente muestra verdín y charcos persistentes junto a la fachada norte tras cada lluvia fuerte. El agente no promete \"nunca se inunda\": documenta el patrón, pregunta al propietario por episodios anteriores, revisa la evacuación existente y recomienda que el comprador solicite valoración técnica del drenaje antes de firmar arras.",
      keyConcepts: ["anatomía del edificio", "ciclo de vida constructivo", "cimentación y drenaje", "elementos estructurales", "fisuras y grietas", "elementos comunes", "reforma integral vs. parcial"],
      frequentErrors: [
        "Valorar una vivienda solo por acabados recientes ignorando el estado de cubierta, bajantes o fachada",
        "Asumir que un tabique es 'tirable' sin comprobar si oculta instalaciones o funciones estructurales",
        "Usar la frase 'nunca se inunda' sin información verificable",
        "No documentar con fotos fechadas la evolución de una grieta o fisura",
        "Confundir reforma estética con rehabilitación estructural sin memoria o proyecto que lo acredite"
      ],
      examples: [
        {
          id: "m11-l2-ex1",
          title: "Cocina nueva, cubierta antigua",
          scenario: "Vivienda con cocina reformada hace un año pero cubierta original de hace 40",
          application: "El agente comunica la diferencia de vida útil entre elementos y su impacto en gasto futuro",
          isBalearContext: false
        },
        {
          id: "m11-l2-ex2",
          title: "Grieta diagonal sobre ventana",
          scenario: "Aparece una fisura diagonal reciente sobre un hueco de fachada",
          application: "Se describe forma, tamaño y ubicación, se pregunta por antigüedad y reparaciones, se deriva a arquitecto técnico",
          isBalearContext: false
        },
        {
          id: "m11-l2-ex3",
          title: "Patio con acumulación de agua",
          scenario: "Patio interior en finca rústica con escorrentías mal resueltas",
          application: "El agente documenta el patrón y solicita información técnica y municipal sobre drenaje antes de anunciar",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l3",
      moduleId: "m11",
      title: "Envolvente y elementos exteriores: fachadas, cubiertas, carpinterías y piscinas",
      order: 3,
      summary: "La envolvente (fachada, cubierta, huecos, aislamiento) y los elementos exteriores determinan confort, patologías frecuentes y responsabilidades comunitarias.",
      content: `La envolvente incluye cerramientos, revocos, aislamientos, huecos, persianas, juntas y encuentros; su estado influye en consumo, condensaciones, mantenimiento y valor. En una visita conviene observar orientación, sombras, estado de pintura, desprendimientos, juntas, balcones, manchas bajo alféizares, sellados de ventanas y continuidad del aislamiento cuando sea visible. En comunidades, fachada y cubierta suelen ser elementos comunes: una vivienda con fachada deteriorada puede implicar derrama aunque el interior esté reformado, por lo que se solicitan actas, presupuesto, IAE/ITE e información sobre obras aprobadas, no solo la cuota comunitaria actual. La regla es no anunciar "aislamiento térmico" porque una ventana sea nueva: la prestación depende del conjunto de fachada, hueco, orientación, ventilación y uso.

## Cubiertas, terrazas y azoteas

La cubierta protege la parte más expuesta del edificio. En viviendas con terraza, solárium o cubierta plana se debe distinguir siempre propiedad, uso exclusivo y obligación de mantenimiento: que una terraza sea de uso exclusivo no implica que toda reparación corresponda a quien la disfruta, hay que leer título, estatutos, acuerdos y causa del daño. Las señales más útiles son manchas en techos, juntas degradadas, sumideros obstruidos, pavimentos sueltos, petos con fisuras, remates deficientes o vegetación en encuentros. Se piden actas de comunidad, últimos partes de mantenimiento, presupuesto de cubierta y posibles reclamaciones de seguro, y se diferencia mantenimiento ordinario de reparación por filtración o vicio constructivo. En áticos, se verifica si cerramientos, pérgolas o ampliaciones cuentan con autorización y título habilitante. En Mallorca, la exposición a sol, viento y lluvia intensa acelera el desgaste de impermeabilizaciones y sellados, por lo que conviene preguntar siempre por la última intervención y las garantías vigentes.

## Carpinterías, vidrios y puentes térmicos

La calidad real de un hueco depende del marco, vidrio, sellado, persiana, herrajes, orientación y encuentro con fachada. Una carpintería reciente puede mejorar confort, pero no elimina por sí sola una fachada fría, una ventilación insuficiente o el ruido procedente de un patio. En visitas se abre y cierra ventanas, se revisan holguras, condensación en vidrio, persianas, juntas y cierres de balcones. Los puentes térmicos son puntos donde se transmite más calor, como encuentros de forjados, pilares, contornos de huecos o cajas de persiana; para el agente son relevantes por sus síntomas: moho localizado, condensación recurrente y sensación de pared fría. No se diagnostican visualmente como certeza, sino que se sugiere revisión si condicionan la decisión. Nunca se garantiza aislamiento acústico o térmico por una fotografía: la promesa técnica exige medición, proyecto, ficha de producto o informe.

## Piscinas, terrazas y espacios exteriores

Una piscina, una terraza, una pérgola, una cocina exterior, una barbacoa, un cerramiento o una zona ajardinada pueden ser comunes, privativos o de uso exclusivo, y la publicidad debe respetar esa condición: una foto atractiva no demuestra que la instalación sea legal, que su uso sea exclusivo ni que exista derecho a ampliarla. En viviendas con piscina se pregunta por sistema de depuración, revisiones, fuga, revestimiento, accesos, seguridad, gasto de comunidad y restricciones comunitarias. En fincas unifamiliares se suma documentación de obra, ubicación, agua y mantenimiento. No se debe usar la expresión "piscina legalizada" sin documentar título, fecha y alcance: la seguridad y la legalidad no se presumen por la existencia física.`,
      easyExplanation: "La \"piel\" del edificio (fachada, cubierta, ventanas) protege de la lluvia, el sol, el frío y el ruido, y su estado afecta directamente al confort y al gasto energético. Una ventana nueva no arregla por sí sola una casa fría, y una terraza bonita en fotos no garantiza que sea legal o que su reparación no genere una derrama comunitaria. Antes de prometer nada sobre aislamiento, ruido o legalidad de una piscina o terraza, hay que pedir los documentos que lo acrediten.",
      balearExample: "En un apartamento en primera línea de costa en Cala Millor, la comunidad estudia sustituir carpinterías del portal y reparar parte de fachada por manchas de óxido en barandillas. El vendedor dice que \"son solo manchas por el salitre\". El agente documenta fotográficamente la corrosión, solicita actas e informes de mantenimiento, y explica al comprador que las señales pueden relacionarse con mantenimiento o estanqueidad, pero que la causa debe validarse técnicamente antes de descartar impacto en precio o de asumir una derrama futura.",
      keyConcepts: ["envolvente térmica", "puentes térmicos", "elementos comunes vs. privativos", "uso exclusivo de terraza", "impermeabilización de cubierta", "corrosión por salinidad", "legalidad de piscinas"],
      frequentErrors: [
        "Anunciar 'aislamiento térmico' solo porque las ventanas son nuevas",
        "Prometer que una terraza de uso exclusivo no generará gastos de reparación comunitaria",
        "Diagnosticar moho o condensación como certeza sin sugerir revisión técnica",
        "Usar la expresión 'piscina legalizada' sin documentar título, fecha y alcance",
        "Atribuir corrosión visible automáticamente a un único origen sin comprobación"
      ],
      examples: [
        {
          id: "m11-l3-ex1",
          title: "Vaho entre vidrios",
          scenario: "Se detecta vaho entre los vidrios de una ventana de doble acristalamiento",
          application: "Se comunica como posible fallo de la cámara y se recomienda valorar sustitución de la unidad",
          isBalearContext: false
        },
        {
          id: "m11-l3-ex2",
          title: "Ático con pérgola sin papeles",
          scenario: "Un ático anuncia solárium con pérgola reciente",
          application: "Se comprueba barandillas, acceso, evacuación de agua y si la pérgola tiene autorización antes de fotografiarla como 'zona de ocio'",
          isBalearContext: false
        },
        {
          id: "m11-l3-ex3",
          title: "Piscina comunitaria en urbanización costera",
          scenario: "Comprador pregunta si puede usar la piscina comunitaria todo el año",
          application: "Se responde según actas, mantenimiento, presupuesto y temporada, evitando promesas de disponibilidad",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l4",
      moduleId: "m11",
      title: "Instalaciones del edificio: humedades, electricidad, agua, climatización y ACS",
      order: 4,
      summary: "Las instalaciones (agua, electricidad, climatización, producción de ACS) y las humedades son las áreas donde más se confunde funcionamiento visible con legalidad, suficiencia o eficiencia real.",
      content: `Las causas más habituales de humedad son filtración desde cubierta, fachada o instalación; condensación por superficie fría y ventilación insuficiente; o fuga interior, y pueden coexistir. El agente debe describir color, ubicación, extensión, olor, estacionalidad, relación con lluvia y documentación de reparaciones, evitando adjudicar la causa sin informe. El impacto no es solo estético: puede afectar a salubridad, mobiliario, confort, valoración, financiación y negociación; en viviendas con moho, olor persistente o pintura reciente sobre manchas antiguas, la transparencia protege a todas las partes y evita que la reserva se convierta en conflicto tras la entrega. El protocolo es: fotografiar, preguntar, solicitar informes, no ordenar ocultación y condicionar cualquier descuento o compromiso a la identificación del origen cuando sea relevante.

## Instalación eléctrica

En una visita se observa el cuadro eléctrico, la identificación de circuitos, presencia de protecciones, estado de enchufes, cables visibles, humedad próxima a elementos eléctricos y señales de modificaciones improvisadas, sin abrir cuadros ni manipular instalaciones (eso corresponde a profesional habilitado). Para una compraventa se pregunta por la última reforma eléctrica, potencia contratada, certificado de instalación o boletín disponible y necesidades previstas del comprador (climatización, recarga de vehículo, inducción, piscina, taller o alquiler): una instalación que funciona para un uso básico puede resultar insuficiente para una reforma o para una vivienda de alta demanda energética. El certificado o boletín acredita una instalación en el alcance y fecha correspondientes; no sustituye una auditoría global de la vivienda. Pregunta de examen clave: una instalación visible y operativa no equivale automáticamente a instalación legalizada, suficiente ni adaptada a una ampliación futura.

## Agua, saneamiento y evacuación

La red interior comprende acometida, contadores, llaves, tuberías, presión, producción de agua caliente y aparatos; el saneamiento incluye desagües, bajantes, ventilación, arquetas, colectores y conexión a red o solución autónoma. Olores, ruidos de bajantes, retornos, baja presión, manchas y desagües lentos requieren trazabilidad. En viviendas antiguas es importante preguntar por materiales, sustituciones parciales y siniestros; en fincas rústicas, la titularidad y legalidad del abastecimiento, la depuración y la evacuación deben verificarse especialmente, ya que una fosa, pozo o aljibe no se presentan como "en regla" sin la documentación que corresponda.

## Climatización, ventilación y confort

Los sistemas de climatización pueden ser individuales o centralizados, de expansión directa, agua, biomasa u otros; se recopila marca, antigüedad, ubicación de unidades exteriores, mantenimiento y autorizaciones comunitarias si existen. Un aparato no acredita que toda la vivienda alcance una temperatura homogénea ni que el sistema pueda ampliarse sin obra. La ventilación es indispensable para la calidad del aire y el control de humedad; cerrar por completo una vivienda para ahorrar energía sin asegurar renovación de aire puede agravar condensaciones y olores. No se afirma "eficiencia alta" por ver un split reciente sin vincular la información a CEE, ficha del equipo y uso real.

## Agua caliente sanitaria y renovables

Se pregunta qué equipo produce el agua caliente, su antigüedad, energía, mantenimiento y capacidad; en instalaciones solares o fotovoltaicas se identifica propiedad, potencia, modalidad de autoconsumo, contrato, inversor, garantías, mantenimiento, permisos y relación con la comunidad. No se usa "factura cero" ni "independencia energética" como reclamo salvo que exista soporte verificable y se explique su condición: el ahorro depende de producción, consumo, tarifa, uso, sombras y mantenimiento. En edificios colectivos, la cubierta y las instalaciones comunes pueden condicionar la ampliación; conviene confirmar si son privativas, de autoconsumo colectivo, si existe compensación de excedentes y qué derechos pasan al comprador.`,
      easyExplanation: "Una casa puede tener el aire acondicionado más nuevo del mundo y aun así tener una instalación eléctrica insuficiente para cargar un coche o poner una inducción. El agente pregunta por la antigüedad y los certificados de cada instalación (luz, agua, climatización, agua caliente) en vez de asumir que \"funciona\" significa \"está en regla\" o \"es suficiente\". Las manchas de humedad se describen (dónde, desde cuándo, con qué frecuencia) pero nunca se diagnostica su causa sin informe técnico.",
      balearExample: "En una vivienda rural cerca de Felanitx, el comprador pregunta si puede instalar un cargador de vehículo eléctrico. La instalación actual, de los años 90, alimenta correctamente los electrodomésticos básicos. El agente no da por hecho que la potencia contratada sea suficiente: solicita el último boletín eléctrico, pregunta por la potencia contratada y deriva la valoración de ampliación de potencia a un instalador habilitado antes de incluir la recarga como posibilidad en la ficha comercial.",
      keyConcepts: ["clasificación de humedades", "boletín eléctrico", "cuadro eléctrico y potencia contratada", "acometida y saneamiento", "climatización individual/centralizada", "autoconsumo fotovoltaico", "producción de ACS"],
      frequentErrors: [
        "Adjudicar la causa de una mancha de humedad sin informe técnico",
        "Afirmar que una instalación eléctrica visible y operativa está legalizada y es suficiente",
        "Prometer bajo consumo energético sin datos ni facturas de respaldo",
        "Usar 'factura cero' o 'independencia energética' sin soporte verificable",
        "Confundir producción de energía fotovoltaica con ahorro garantizado"
      ],
      examples: [
        {
          id: "m11-l4-ex1",
          title: "Mancha bajo cubierta",
          scenario: "Aparece una mancha localizada bajo una cubierta tras episodios de lluvia",
          application: "Se documenta el patrón y se solicita historial de lluvia, actas de comunidad y parte de seguro antes de atribuir causa",
          isBalearContext: false
        },
        {
          id: "m11-l4-ex2",
          title: "Cuadro eléctrico con tapa reciente",
          scenario: "El propietario dice que el cuadro es nuevo por tener una tapa reciente",
          application: "Se solicita boletín o certificado de instalación con fecha y alcance, sin asumir modernización real",
          isBalearContext: false
        },
        {
          id: "m11-l4-ex3",
          title: "Placas solares en cubierta comunitaria",
          scenario: "Un piso anuncia energía solar en un edificio con cubierta comunitaria",
          application: "Se confirma titularidad, modalidad de autoconsumo (individual o colectivo) y contratos antes de anunciar ahorro",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l5",
      moduleId: "m11",
      title: "Exigencias básicas del CTE: seguridad, accesibilidad, salubridad, energía y ruido",
      order: 5,
      summary: "El Código Técnico de la Edificación organiza las exigencias básicas (SE, SI, SUA, HE, HR, HS) que el agente debe reconocer documentalmente, sin diseñar ni certificar soluciones.",
      content: `El CTE estructura exigencias básicas de seguridad estructural (SE), seguridad en caso de incendio (SI), seguridad de utilización y accesibilidad (SUA), ahorro de energía (HE), protección frente al ruido (HR) y salubridad (HS). En una respuesta de examen se identifica primero el área técnica y después qué se comprueba o quién lo acredita. Para obra nueva y reformas, el CTE no debe tratarse como un catálogo de extras: es parte del marco que condiciona proyecto, licencia, ejecución y documentación final. En un edificio existente, la aplicación depende del alcance de la intervención y de las condiciones aplicables; eso exige una lectura técnica y administrativa, no una afirmación automática del agente. Técnica de examen: cuando hay duda, la respuesta correcta es "el agente identifica el indicio y solicita documento o informe del técnico competente", que es más sólida que inventar una solución normativa.

## Seguridad en caso de incendio (DB-SI)

Afecta a evacuación, compartimentación, instalaciones de protección, acceso de bomberos y condiciones de uso. En vivienda individual el control puede ser menos visible que en garajes, edificios plurifamiliares, locales u hoteles, pero la reforma o cambio de actividad puede activar exigencias relevantes. En una visita se observan itinerarios de evacuación comprometidos, puertas de zonas comunes bloqueadas o señalización deteriorada, trasteros invadiendo pasillos, garajes con deficiencias aparentes o locales con distribución incompatible con la actividad anunciada. No se dictamina incumplimiento: se registra la situación y se solicita inspección o documentación. "Tiene extintor" no significa que un inmueble cumple seguridad contra incendios: el cumplimiento se verifica por uso, configuración, mantenimiento y normativa aplicable.

## Seguridad de utilización y accesibilidad (DB-SUA)

Establece reglas para detectar barreras, diferencias de nivel, pasillos estrechos, ascensores, iluminación, barandillas y resbaladicidad. En edificios existentes las obras de accesibilidad pueden ser obligatorias, convenientes o estar sujetas a acuerdo comunitario y a condiciones de coste. No se etiqueta una vivienda como "accesible" o "adaptada" sin conocer alcance técnico y legal; antes de vender a un comprador con necesidad específica se verifican medidas reales, dimensiones, recorridos y obra pendiente. Es preferible decir "edificio con ascensor y acceso con X escalones" que usar "apto para movilidad reducida" sin verificación técnica.

## Salubridad (DB-HS)

Conecta protección frente a humedad, calidad de aire, agua, residuos y evacuación; es un marco clave para reformas y viviendas existentes. Una vivienda puede tener buen diseño y, sin embargo, padecer olores, condensación o falta de ventilación. La mejor herramienta es un cuestionario: ¿hay olores?, ¿se ventila por huecos o sistema?, ¿hay extractor?, ¿dónde se evacúa el condensado?, ¿se han producido retornos?, ¿existen partes de seguro? Esta información no diagnostica, pero permite decidir si el comprador debe encargar revisión antes de contratar. No se normaliza olor a humedad, alcantarillado o gas; se describe y se solicita comprobación. Las soluciones temporales (deshumidificador, pintura antihumedad, ambientador) no prueban que el origen haya desaparecido.

## Ahorro de energía (DB-HE) y protección frente al ruido (DB-HR)

La eficiencia energética depende de orientación, geometría, sombra, aislamiento, estanqueidad, huecos, ventilación, climatización, agua caliente y comportamiento de uso; el certificado energético ayuda a comparar, pero no reemplaza factura, auditoría ni garantía de consumo. El marco técnico evoluciona con actualizaciones y disposiciones transitorias, por lo que ante una obra se comprueba siempre la versión del CTE aplicable a la fecha de la licencia, no la que se recuerda de un proyecto anterior. El ruido puede venir de tráfico, ocio, instalaciones, vecinos, bajantes, ascensor, locales, terrazas, obras o estructura; una visita silenciosa no prueba que un inmueble sea silencioso, ya que el horario, la temporada, el uso del entorno y la distribución influyen. En Mallorca esto es especialmente relevante en zonas turísticas, ejes de movilidad, cascos antiguos y edificios con mezcla de usos. Se evitan expresiones absolutas como "silencio total" o "aislamiento perfecto"; es mejor describir el contexto, ofrecer visitas en distintos horarios cuando sea necesario y trasladar al comprador la posibilidad de medición si el nivel de ruido es decisivo para la compra.`,
      easyExplanation: "El CTE es como un mapa de seis apartados (estructura, incendios, accesibilidad, energía, ruido, salubridad) que dicen qué debe cumplir un edificio según su uso y su reforma. El agente no tiene que memorizar cada artículo, pero sí reconocer qué apartado responde a cada pregunta y qué documento o técnico lo acredita. Nunca se dice \"cumple\" solo porque hay un extintor, un ascensor o silencio durante la visita: hay que comprobarlo con documentos.",
      balearExample: "En Palma, un local en planta baja de un edificio antiguo se anuncia para cambio de uso a apartamento turístico. El agente detecta un extintor visible y un itinerario de evacuación libre, pero no afirma que el local cumple seguridad contra incendios ni accesibilidad para el nuevo uso: solicita al propietario el certificado de mantenimiento de las instalaciones contra incendios, deriva la viabilidad del cambio de uso al ayuntamiento y a un técnico, y advierte que una reforma que altere recorridos u ocupación puede requerir proyecto y control técnico.",
      keyConcepts: ["DB-SE", "DB-SI", "DB-SUA", "DB-HE", "DB-HR", "DB-HS", "exigencias básicas del CTE", "régimen transitorio normativo"],
      frequentErrors: [
        "Afirmar que un inmueble 'cumple seguridad contra incendios' por tener un extintor visible",
        "Etiquetar una vivienda como 'accesible' o 'adaptada' sin verificación técnica y legal",
        "Normalizar olores a humedad, alcantarillado o gas en vez de describirlos y derivar",
        "Usar expresiones absolutas de ruido ('silencio total', 'aislamiento perfecto') sin medición",
        "Aplicar el CTE de un proyecto anterior en vez de comprobar la versión vigente a la fecha de licencia"
      ],
      examples: [
        {
          id: "m11-l5-ex1",
          title: "Garaje con señalización deteriorada",
          scenario: "Edificio con garaje y señalización de evacuación deteriorada",
          application: "Se registra el estado y se pregunta por mantenimiento de instalaciones contra incendios y últimas inspecciones",
          isBalearContext: false
        },
        {
          id: "m11-l5-ex2",
          title: "Ascensor sin acceso a todas las plantas",
          scenario: "Edificio con ascensor que no llega a la planta baja por dos escalones",
          application: "Se describe con precisión el recorrido real en lugar de anunciar la vivienda como accesible",
          isBalearContext: false
        },
        {
          id: "m11-l5-ex3",
          title: "Olor a humedad enmascarado con pintura",
          scenario: "Se detecta pintura reciente sobre una zona con posible mancha antigua",
          application: "Se pregunta por reformas recientes en esa zona y se solicita informe antes de descartar problema de salubridad",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l6",
      moduleId: "m11",
      title: "Documentación, certificación y legalidad del edificio",
      order: 6,
      summary: "IAE/ITE, CEE, cédula de habitabilidad, Libro del Edificio, legalidad de obras y presupuestos de reforma forman el expediente documental que sostiene cualquier operación comercial seria.",
      content: `En Illes Balears existe un registro de informes de evaluación de edificios. El IAE acredita la situación del edificio al menos en relación con conservación, accesibilidad universal y eficiencia energética; la normativa prevé que una ITE u otro instrumento análogo puede integrarse en el IAE cuando cubra exigencias equivalentes o más exigentes. Para una compraventa de vivienda en edificio colectivo, el agente pregunta si existe IAE/ITE, fecha, resultado, deficiencias, requerimientos, obras ejecutadas y derramas aprobadas: no basta saber que "pasó la inspección", interesa qué se observó, qué se subsanó y qué coste pendiente puede recaer sobre el adquirente. IAE/ITE no equivale a garantía total contra defectos: es un documento con alcance, fecha y método que debe leerse junto con actas, mantenimiento y realidad de visita.

## Certificado de eficiencia energética (CEE)

El Real Decreto 390/2021 regula el procedimiento básico de certificación energética. El certificado se pone a disposición de compradores o usuarios en los supuestos aplicables, y la información energética debe tratarse con rigor en la comercialización. El técnico competente es quien emite el certificado; el agente debe recopilarlo, comprobar que corresponde al inmueble y evitar utilizar una etiqueta de otro piso o de un proyecto distinto. La etiqueta clasifica de A a G, pero no sustituye una auditoría de rehabilitación ni garantiza una factura. Antes de usarla en un anuncio se confirma la letra, el consumo y emisiones reflejados, la vigencia, el registro autonómico y si el inmueble ha sido reformado desde su emisión de forma que haga recomendable actualizarla. No se altera la letra, no se recortan etiquetas de modo engañoso ni se usan consumos como garantía.

## Cédula de habitabilidad

El Decreto balear 145/1997, modificado posteriormente, regula condiciones de dimensionamiento, higiene e instalaciones para diseño y habitabilidad, y también remite al CTE para exigencias que este regula y no están especificadas en el propio decreto. Su aplicación debe analizarse junto con el uso, antigüedad, intervención realizada y normativa específica. La cédula es una pieza de expediente: se pide copia, se identifica si se refiere a la vivienda concreta, se revisa vigencia y se evita tratarla como sustituto de licencia de obra, título urbanístico, CEE, nota registral o comprobación de uso turístico. No se anuncia "habitable" solo por tener muebles, suministros o una ocupación histórica; y no se confunde cédula con licencia turística, declaración responsable de actividad o autorización de una reforma.

## Libro del Edificio y expediente documental

El Libro del Edificio reúne información sobre proyecto, construcción, uso, mantenimiento y reformas cuando corresponde. En edificios nuevos o rehabilitados puede incluir manuales, planos, certificados, garantías y recomendaciones de conservación; para un comprador sirve para entender no solo qué se entrega, sino cómo debe mantenerse. El agente puede convertir documentación dispersa en un expediente comercial útil: índice de documentos, fecha, emisor, alcance y pendiente de comprobación. Esto es especialmente valioso en vivienda de alto valor, fincas reformadas, promociones, activos heredados o inmuebles con obra reciente. Se presenta documentación ordenada sin convertir un dossier comercial en "certificación de legalidad"; siempre se señala qué debe validar el técnico o la Administración.

## Legalidad de obras, coherencia física y clasificación de la reforma

Una terraza cerrada, un altillo, una habitación añadida, una piscina, una ampliación o una redistribución pueden tener impacto urbanístico, registral, fiscal y de habitabilidad. El agente no resuelve la legalización, pero debe evitar publicitar como superficie útil, dormitorio, vivienda o prestación aquello que no esté respaldado por documentación y comprobación suficiente. La primera pregunta no es "¿quedó bonito?" sino "¿qué se hizo, cuándo, con qué título consta y cómo afecta a la operación?". Se contrasta escritura, nota simple, catastro, planos, cédula y realidad visible; se pide licencia, comunicación previa, proyecto, certificado final y declaración de obra nueva cuando proceda; no se llama dormitorio a un espacio sin comprobar condiciones de uso y documentación; y se incluye en arras una condición o declaración específica si la discrepancia afecta decisión, financiación o precio. La superficie que se anuncia debe identificar su fuente (registral, catastral, construida, útil, medición o proyecto), ya que mezclarlas genera reclamaciones previsibles. No toda obra tiene la misma entidad: mantenimiento, reforma interior, intervención en fachada/cubierta y cambio de uso implican distinto trámite, distintos profesionales, distinto coste y distinta documentación; la administración y la normativa municipal determinan en cada caso el título habilitante, y el agente no debe anticipar la respuesta sin confirmación. Comercialmente, una reforma se comunica correctamente con alcance definido ("renovación de cocina y baños", "actualización de instalaciones según documentación aportada") en vez de "reforma integral", que exige poder explicar qué sistemas se han intervenido y qué respaldo documental existe.

## Presupuestos, mediciones y elementos comunes

Un presupuesto útil identifica partidas, unidades, cantidades, precios, materiales, mano de obra, plazos, exclusiones, impuestos y garantías; si solo contiene un importe global, sirve como primera orientación pero no como base sólida para una decisión de compra. El agente ayuda a estructurar el expediente económico: diferenciar coste de adquisición, obra, licencias, honorarios, impuestos, comunidad y mantenimiento; solicitar varias ofertas comparables; incorporar tasas, honorarios y contingencia; y evitar que el comprador descuente del precio una cifra imaginaria. Un inmueble "para reformar" no se valora restando un coste estándar, sino considerando viabilidad, alcance, plazo, riesgo y producto final posible. En comunidades, cubierta, fachada, estructura, bajantes, ascensor, portales, garaje, piscina, instalaciones generales y urbanización pueden ser elementos comunes; el comprador necesita saber si existe obra aprobada, derrama, financiación comunitaria, subvención, litigio o informe pendiente. Se revisan las últimas actas (no solo la más reciente), se pregunta por IAE/ITE, informe de fachada, ascensor, impermeabilización y accesibilidad, y se distingue obra aprobada de obra presupuestada, en estudio y ejecutada: una derrama no es un dato anecdótico, es coste, plazo y a veces mejora de valor.`,
      easyExplanation: "Cada papel del edificio sirve para algo distinto: el CEE dice cuánta energía consume en teoría, la cédula dice si se puede vivir en él, el IAE/ITE dice en qué estado de conservación está, y el Libro del Edificio guarda el historial completo. Ninguno de estos documentos por separado certifica que \"todo está en regla\". Antes de anunciar una superficie, una reforma o un elemento común como piscina o fachada, hay que comprobar en qué documento consta, quién lo firmó y desde cuándo, porque una obra hecha sin papeles puede afectar precio, financiación e impuestos.",
      balearExample: "En Alcúdia, un piso de una promoción rehabilitada anuncia \"eficiencia energética alta\" y \"acabados premium\" antes de que el proyecto de instalaciones esté cerrado. El agente revisa el proyecto, la memoria de calidades, el título, los planos comerciales y la licencia, y explica al comprador que la eficiencia se comunicará mediante certificación cuando proceda, no como ahorro garantizado; además incluye en la reserva una condición sobre los hitos técnicos aún no cerrados (por ejemplo, si la terraza será de uso exclusivo o si podrá instalarse un punto de recarga de vehículo).",
      keyConcepts: ["IAE/ITE", "Real Decreto 390/2021", "Decreto balear 145/1997", "Libro del Edificio", "declaración de obra nueva", "superficie registral/catastral/construida/útil", "derrama comunitaria", "presupuesto de reforma"],
      frequentErrors: [
        "Confundir cédula de habitabilidad con licencia turística o autorización de reforma",
        "Usar la etiqueta de CEE de otro piso o proyecto distinto",
        "Anunciar una superficie sin identificar su fuente (registral, catastral, útil, construida)",
        "Presentar un dossier comercial ordenado como si fuera 'certificación de legalidad'",
        "Tratar una derrama comunitaria como dato anecdótico en vez de coste y plazo relevantes"
      ],
      examples: [
        {
          id: "m11-l6-ex1",
          title: "Terraza cerrada sin licencia",
          scenario: "Un piso tiene una terraza cerrada con carpintería hace años",
          application: "Se pide licencia o comunicación previa, se revisa catastro y cédula, y no se declara la superficie como habitable sin comprobación",
          isBalearContext: false
        },
        {
          id: "m11-l6-ex2",
          title: "CEE desactualizado tras reforma",
          scenario: "Vivienda con CEE de hace 8 años y reforma integral reciente",
          application: "Se recomienda actualizar el certificado antes de anunciar la calificación energética",
          isBalearContext: false
        },
        {
          id: "m11-l6-ex3",
          title: "Derrama de fachada pendiente",
          scenario: "Comunidad con obra de fachada aprobada en acta pero no ejecutada",
          application: "Se informa al comprador del coste y plazo previstos antes de cerrar la operación",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m11-l7",
      moduleId: "m11",
      title: "Due diligence, contexto balear, patologías críticas y casos prácticos",
      order: 7,
      summary: "La rutina de due diligence técnica, el contexto insular (salinidad, costa, fincas rústicas) y los casos prácticos resumen cómo aplicar todo el módulo antes, durante y después de una operación.",
      content: `La due diligence técnica de un agente consiste en una revisión razonable y trazable: identificación de finca y edificio, visita de observación, documentación del vendedor y consultas sobre obras, siniestros, comunidad y mantenimiento. Termina en un listado de datos confirmados, pendientes y riesgos que requieren técnico o Administración. Esta rutina mejora el anuncio, evita sorpresas durante tasación y permite negociar arras realistas; en inmuebles complejos, la documentación debe compartirse con el comprador antes de recibir una señal relevante, dejando constancia de qué se ha entregado y qué no se ha verificado. Cada dato se clasifica como: verificado documentalmente; observado; declarado por el vendedor; pendiente de técnico; o pendiente de Administración. Esa distinción protege el informe del agente y la decisión del cliente, en momentos clave: captación (fotos, cuestionario, nota simple, catastro, cédula, CEE → ficha inicial de riesgo), antes de publicar (contrastar superficies, uso, estado y comunidad → mensaje comercial verificable), antes de arras (actualizar documentación y pendientes críticos → condiciones suspensivas o calendario) y antes de escritura (confirmar reformas, certificados y derramas → cierre sin sorpresa técnica).

## Contexto balear: costa, humedad, salinidad y radiación solar

El entorno insular acelera algunos procesos de desgaste, sin convertir el inmueble en defectuoso, pero sí elevando la importancia del mantenimiento. La proximidad al mar puede aumentar la exposición a sales, viento, humedad y corrosión de elementos metálicos; el sol intenso y los cambios térmicos afectan sellados, persianas, impermeabilizaciones, pintura y equipos exteriores. En urbanizaciones costeras, las zonas comunes (piscinas, bombas, garajes, cerramientos y fachadas) merecen revisión documental específica. El agente comunica el entorno de forma equilibrada: la ubicación costera aporta valor y experiencia, pero no justifica ocultar mantenimiento o derramas. Se fotografía corrosión visible sin atribuirla automáticamente a un único origen; se pregunta por frecuencia de mantenimiento de fachada, piscina, bombas, cerramientos y ascensor; se valora orientación, sombras y protección solar al describir confort, sin garantizar resultados; y en primera línea se coordina con módulos de costas, urbanismo, propiedad horizontal y turismo cuando corresponda. El mantenimiento preventivo bien documentado puede ser un activo de venta en costa; la ausencia de historial es incertidumbre que debe aparecer en la negociación.

## Finca rústica y arquitectura tradicional

En Mallorca, las fincas rústicas pueden combinar vivienda, dependencias, muros de piedra, aljibes, porches, almacenes, establos, piscinas, caminos y construcciones de diferentes épocas. El atractivo patrimonial no elimina las limitaciones urbanísticas, ambientales, hídricas o registrales. Una dependencia antigua no se convierte por ello en vivienda, dormitorio, apartamento turístico o espacio habitable. La visita debe documentar qué construcciones existen, qué uso se declara, dónde constan y qué servicios las abastecen; si hay pozos, depósitos, fosa, placas, generador o camino privado, se solicita documentación específica. La reforma de arquitectura tradicional requiere además sensibilidad a materiales, técnicas y posible protección patrimonial. Una finca se comercializa con un expediente técnico y jurídico, no con imágenes: cuanto más singular sea, más importante es explicar lo acreditado y lo pendiente.

## Patologías que exigen escalado inmediato

Hay señales que no admiten una respuesta comercial rápida y suponen pausa, documentación y consulta técnica: desprendimientos, grietas de aspecto relevante o evolución reciente, humedades extensas, deterioro de elementos estructurales, olor intenso a gas o saneamiento, instalaciones expuestas, barandillas inseguras, cubierta con signos de riesgo, corrosión avanzada, daños tras inundación o cualquier circunstancia que afecte a la seguridad de personas. Escalar no significa acusar al propietario ni declarar ruina; significa registrar el hecho de forma objetiva, comunicar que se requiere revisión y evitar visitas o compromisos que puedan agravar el riesgo. El expediente debe contener fotografías, fecha, ubicación, declaraciones recibidas y decisión de la parte responsable. No se tapa, mueve ni altera el indicio antes de documentarlo; no se recomiendan "arreglos rápidos" que puedan afectar prueba, seguro o seguridad; si hay emergencia evidente se prioriza seguridad y los canales de asistencia correspondientes; y se actualiza anuncio y guion de visitas hasta que exista informe o solución documentada. La diligencia no consiste en saber reparar: consiste en no ocultar, no diagnosticar sin competencia y no continuar como si el riesgo no existiera.

## Casos prácticos resueltos en el módulo

El PDF incluye cuatro casos guiados que sintetizan el método: 1) piso reformado en Palma (1968), donde el vendedor anuncia "reforma integral 2024" pero el cuadro eléctrico "parece nuevo" y hay una obra de bajantes pendiente en el acta de comunidad — se descompone la palabra "integral" pidiendo memoria, facturas, licencias y certificados, y se refleja en la reserva conocimiento de la obra, distribución de coste, documentación entregada y condición de validación; 2) finca rústica con anexos cerca de Manacor, ofrecida como "casa con dos apartamentos independientes", donde se diferencia realidad física, uso declarado y derecho acreditado, y no se anuncian "apartamentos" ni "alquiler independiente" hasta verificar, previendo plazo técnico y jurídico si el comprador necesita financiación, reforma o explotación; 3) apartamento costero con corrosión, donde no se confirma que sea un problema superficial pese a que el vendedor dice que "son solo manchas por el salitre", documentando fotografías, actas, informes, mantenimiento y calendario comunitario; y 4) promoción o rehabilitación en venta en Sóller, donde se controla la matriz de versiones (afirmación comercial → documento fuente → versión → responsable → fecha) para evitar vender antes de definir, ya que eso multiplica rectificaciones y conflictos.`,
      easyExplanation: "Antes de anunciar una vivienda hay que hacer una revisión ordenada de documentos y estado (due diligence), clasificando cada dato según si está verificado, es una declaración del vendedor o está pendiente de un técnico. En Mallorca, la cercanía al mar acelera el desgaste de metales y sellados, así que conviene revisar el mantenimiento con más atención que en el interior. Ante señales graves (grietas importantes, olor a gas, barandillas inseguras) hay que parar, documentar y derivar de inmediato, sin intentar arreglos rápidos ni acusar a nadie.",
      balearExample: "En Manacor, una finca rústica se anuncia como \"casa con dos apartamentos independientes\" con piscina, aljibe y fosa. El agente aplica la due diligence: pide nota simple, escritura, catastro, cédula y cualquier título de piscina y anexos; no usa la palabra \"apartamentos\" hasta comprobar si existe uso residencial múltiple acreditado, y advierte al comprador que el plazo de escritura deberá prever tiempo suficiente para resolver la financiación y la comprobación técnica y jurídica.",
      keyConcepts: ["due diligence técnica", "clasificación de datos (verificado/observado/declarado/pendiente)", "corrosión por proximidad al mar", "arquitectura tradicional balear", "escalado de patologías críticas", "matriz de control de versiones comerciales"],
      frequentErrors: [
        "Compartir la documentación con el comprador solo después de recibir una señal relevante",
        "Atribuir manchas o corrosión costera a 'solo salitre' sin comprobación",
        "Anunciar dependencias de finca rústica como apartamentos o vivienda sin uso acreditado",
        "Tapar, mover o limpiar un indicio de patología antes de documentarlo",
        "Vender una promoción con planos preliminares como si fueran definitivos"
      ],
      examples: [
        {
          id: "m11-l7-ex1",
          title: "Barandilla insegura en ático",
          scenario: "Se detecta una barandilla con movimiento al apoyarse",
          application: "Se suspende la recomendación comercial, se documenta y se deriva de inmediato a técnico, evitando visitas de riesgo",
          isBalearContext: false
        },
        {
          id: "m11-l7-ex2",
          title: "Finca con fosa séptica sin mantenimiento acreditado",
          scenario: "Vendedor de finca rústica afirma que la fosa 'funciona bien' sin aportar historial",
          application: "Se solicita documentación de mantenimiento y legalidad del sistema antes de anunciar la finca como lista para uso",
          isBalearContext: false
        },
        {
          id: "m11-l7-ex3",
          title: "Promoción con planos preliminares",
          scenario: "Promotora en Sóller comercializa con un plano que aún puede cambiar",
          application: "Se aclara al comprador que el plano es preliminar y se controla versión, fecha y responsable de cada cambio",
          isBalearContext: true
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m11-e1",
      moduleId: "m11",
      type: "case",
      question: "Un comprador visita un piso de 1968 en Palma con paredes recién pintadas y pregunta si puede usar como despacho un cerramiento reciente de terraza que aparece mencionado como \"obra de bajantes\" en el acta de comunidad. Redacta los tres datos documentales mínimos que pedirías antes de responder.",
      expectedAnswer: "Memoria/factura/licencia o comunicación previa del cerramiento; título y estatutos de comunidad para confirmar si la terraza es de uso exclusivo; presupuesto y calendario de la obra de bajantes.",
      explanation: "Ninguno de los tres datos existe por defecto en un piso 'reformado'; hay que pedirlos explícitamente.",
      difficulty: "medium"
    },
    {
      id: "m11-e2",
      moduleId: "m11",
      type: "decision",
      question: "Durante una visita observas una grieta diagonal reciente sobre el marco de una ventana. ¿Qué haces?",
      options: [
        "Aseguras al comprador que es solo un asentamiento normal",
        "Describes ubicación, tamaño y evolución, preguntas por reparaciones previas y derivas a arquitecto técnico",
        "Tapas la zona con un mueble para no alarmar",
        "Recomiendas un 'arreglo rápido' de albañilería"
      ],
      expectedAnswer: "Describes ubicación, tamaño y evolución, preguntas por reparaciones previas y derivas a arquitecto técnico",
      explanation: "Describir con precisión y derivar es la única opción coherente con los límites de competencia del agente.",
      difficulty: "basic"
    },
    {
      id: "m11-e3",
      moduleId: "m11",
      type: "comprehension",
      question: "Explica la diferencia entre una observación del agente y un diagnóstico técnico, con un ejemplo de humedad.",
      expectedAnswer: "La observación describe hechos visibles (color, ubicación, extensión, relación con lluvia); el diagnóstico atribuye causa (filtración, condensación, fuga) y exige informe técnico.",
      explanation: "Esta distinción es el eje central del módulo y aparece explícitamente en el PDF (Ficha 39).",
      difficulty: "basic"
    },
    {
      id: "m11-e4",
      moduleId: "m11",
      type: "case",
      question: "Un piso con CEE letra B se anuncia con \"consumo eléctrico bajísimo garantizado\". ¿Es correcto? Justifica.",
      expectedAnswer: "No; el CEE clasifica pero no garantiza factura ni consumo real, que depende del uso, orientación, aislamiento y comportamiento de los ocupantes.",
      explanation: "Reproduce directamente la pregunta de autoevaluación del PDF (Ficha 38, pregunta 2).",
      difficulty: "medium"
    },
    {
      id: "m11-e5",
      moduleId: "m11",
      type: "decision",
      question: "Una finca rústica cerca de Manacor se anuncia como \"casa con dos apartamentos independientes\" apoyándose en que \"así lleva funcionando treinta años\". ¿Qué haces antes de publicar el anuncio?",
      options: [
        "Confías en la antigüedad del uso como prueba suficiente",
        "Verificas nota simple, escritura, catastro, cédula y título de cualquier anexo antes de usar la palabra 'apartamentos'",
        "Publicas el anuncio y corriges después si hay reclamación",
        "Preguntas solo al propietario sin más comprobación"
      ],
      expectedAnswer: "Verificas nota simple, escritura, catastro, cédula y título de cualquier anexo antes de usar la palabra 'apartamentos'",
      explanation: "El tiempo de uso no certifica legalidad, habitabilidad ni licencia turística.",
      difficulty: "advanced"
    },
    {
      id: "m11-e6",
      moduleId: "m11",
      type: "case",
      question: "Redacta en 100-150 palabras un mensaje comercial prudente para un apartamento costero con manchas de óxido en barandillas que la comunidad estudia reparar.",
      expectedAnswer: "Mensaje que describe ubicación costera y vistas, menciona que existe seguimiento comunitario de mantenimiento de fachada y barandillas, evita adjetivos técnicos no verificables ('sin corrosión', 'recién reparado') y remite a documentación disponible para el comprador interesado.",
      explanation: "Se basa en el caso práctico 3 del PDF (Ficha 36).",
      difficulty: "advanced"
    },
    {
      id: "m11-e7",
      moduleId: "m11",
      type: "comprehension",
      question: "¿Por qué una vivienda con ascensor no puede anunciarse automáticamente como \"accesible\"?",
      expectedAnswer: "Porque la accesibilidad exige verificar todo el recorrido (calle, portal, ascensor, pasillos, vivienda) y las medidas reales, no solo la existencia de un elemento; puede haber escalones, dimensiones insuficientes u obra pendiente.",
      explanation: "Corresponde a la Ficha 16 (DB-SUA) y a la pregunta 9 de autoevaluación del PDF.",
      difficulty: "medium"
    },
    {
      id: "m11-e8",
      moduleId: "m11",
      type: "decision",
      question: "Al revisar las actas de comunidad de un edificio que se anuncia como \"edificio rehabilitado\", encuentras que la última acta menciona una derrama aprobada para sustituir la impermeabilización de cubierta, aún no ejecutada. ¿Qué haces?",
      options: [
        "Omites el dato porque el anuncio ya dice 'rehabilitado'",
        "Aclaras qué se rehabilitó y en qué fecha, e informas al comprador de la derrama aprobada, su coste y calendario",
        "Aseguras que la derrama no afectará al comprador",
        "Retiras el anuncio sin explicación"
      ],
      expectedAnswer: "Aclaras qué se rehabilitó y en qué fecha, e informas al comprador de la derrama aprobada, su coste y calendario",
      explanation: "Refleja la Ficha 31 sobre elementos comunes y obras de comunidad.",
      difficulty: "medium"
    }
  ],
  quizQuestions: [
    {
      id: "m11-q1",
      question: "¿Cuál es la función principal del agente inmobiliario respecto al estado técnico de un edificio, según el módulo?",
      options: [
        "Certificar la seguridad estructural",
        "Reconocer señales, pedir documentos y derivar a técnico competente",
        "Diseñar soluciones de reforma",
        "Emitir el certificado energético"
      ],
      correctAnswerIndex: 1,
      explanation: "El propósito declarado del módulo excluye certificar y diseñar; la función es identificar, documentar y derivar.",
      sourceModuleId: "m11",
      legalReference: "Ficha 01, Propósito del módulo",
      difficulty: "basic"
    },
    {
      id: "m11-q2",
      question: "Ante la pregunta de un comprador \"¿puedo tirar este muro?\", ¿cuál es la respuesta correcta del agente?",
      options: [
        "Sí, si no es de carga visible",
        "No prometer viabilidad y derivar a arquitecto o arquitecto técnico",
        "Depende del precio de la reforma",
        "Se puede tirar si el ayuntamiento no lo prohíbe expresamente"
      ],
      correctAnswerIndex: 1,
      explanation: "La fisura, flecha o grieta y las decisiones estructurales se derivan siempre a técnico.",
      sourceModuleId: "m11",
      legalReference: "Ficha 02, tabla de derivación",
      difficulty: "basic"
    },
    {
      id: "m11-q3",
      question: "¿Qué documento identifica a los agentes que intervienen en el proceso de edificación y regula responsabilidades y garantías?",
      options: ["CTE", "CEE", "LOE", "Cédula de habitabilidad"],
      correctAnswerIndex: 2,
      explanation: "La Ley de Ordenación de la Edificación (LOE) cumple esa función.",
      sourceModuleId: "m11",
      legalReference: "Ficha 03, mapa normativo",
      difficulty: "basic"
    },
    {
      id: "m11-q4",
      question: "¿Qué establece el CTE en relación con un edificio?",
      options: [
        "Las exigencias básicas de calidad para edificios e instalaciones",
        "La titularidad registral del inmueble",
        "El precio máximo de venta",
        "La antigüedad mínima para reformar"
      ],
      correctAnswerIndex: 0,
      explanation: "El Código Técnico de la Edificación regula exigencias básicas de calidad.",
      sourceModuleId: "m11",
      legalReference: "Ficha 03 y Ficha 20",
      difficulty: "basic"
    },
    {
      id: "m11-q5",
      question: "En la anatomía de un edificio, ¿qué elementos forman parte de la 'envolvente'?",
      options: [
        "Pilares, vigas y forjados",
        "Fachada, huecos, carpinterías, impermeabilización y aislamiento",
        "Electricidad, agua y saneamiento",
        "Ascensor, garaje y urbanización"
      ],
      correctAnswerIndex: 1,
      explanation: "La envolvente es la 'piel' del edificio, distinta de estructura e instalaciones.",
      sourceModuleId: "m11",
      legalReference: "Ficha 04, anatomía del edificio",
      difficulty: "basic"
    },
    {
      id: "m11-q6",
      question: "¿Qué error frecuente señala el módulo sobre reformas?",
      options: [
        "Confundir mantenimiento con reforma estructural",
        "Confundir una reforma estética con una rehabilitación estructural",
        "Confundir cédula con licencia",
        "Confundir presupuesto con factura"
      ],
      correctAnswerIndex: 1,
      explanation: "Solo memoria, proyecto, dirección facultativa o informe técnico permiten atribuir alcance estructural a una intervención.",
      sourceModuleId: "m11",
      legalReference: "Ficha 06, error frecuente",
      difficulty: "medium"
    },
    {
      id: "m11-q7",
      question: "Una carpintería de ventana reciente, ¿garantiza por sí sola el aislamiento térmico de la vivienda?",
      options: [
        "Sí, siempre",
        "No, la prestación depende del conjunto de fachada, hueco, orientación, ventilación y uso",
        "Solo si es de PVC",
        "Solo si tiene doble acristalamiento"
      ],
      correctAnswerIndex: 1,
      explanation: "Regla explícita del módulo sobre envolvente.",
      sourceModuleId: "m11",
      legalReference: "Ficha 07, regla de fachadas",
      difficulty: "basic"
    },
    {
      id: "m11-q8",
      question: "¿Qué debe hacer el agente si encuentra un cerramiento (por ejemplo, de terraza) no documentado?",
      options: [
        "Anunciarlo como metros útiles adicionales",
        "No confirmarlo hasta obtener documentación (licencia, comunicación previa) y comprobación de título",
        "Ignorarlo porque no afecta al precio",
        "Confiar en la palabra del vendedor sin más verificación"
      ],
      correctAnswerIndex: 1,
      explanation: "Pregunta de autoevaluación del propio módulo.",
      sourceModuleId: "m11",
      legalReference: "Ficha 38, pregunta 4 y Ficha 39",
      difficulty: "medium"
    },
    {
      id: "m11-q9",
      question: "¿Qué significa que una instalación eléctrica esté 'visible y operativa'?",
      options: [
        "Que está legalizada y es suficiente para cualquier uso",
        "Que funciona, pero no acredita legalización, suficiencia ni adaptación a ampliaciones futuras",
        "Que no necesita boletín",
        "Que la potencia contratada es siempre adecuada"
      ],
      correctAnswerIndex: 1,
      explanation: "Pregunta de examen destacada explícitamente en el PDF.",
      sourceModuleId: "m11",
      legalReference: "Ficha 11, 'Pregunta de examen'",
      difficulty: "medium"
    },
    {
      id: "m11-q10",
      question: "En Illes Balears, ¿qué instrumento acredita la situación del edificio en relación con conservación, accesibilidad universal y eficiencia energética?",
      options: [
        "La cédula de habitabilidad",
        "El IAE (Informe de Evaluación del Edificio)",
        "El Libro del Edificio",
        "La licencia de obra"
      ],
      correctAnswerIndex: 1,
      explanation: "El IAE cubre estos tres aspectos y puede integrar la ITE cuando corresponda.",
      sourceModuleId: "m11",
      legalReference: "Ficha 21, IAE/ITE/IEE",
      difficulty: "medium"
    },
    {
      id: "m11-q11",
      question: "¿Qué Real Decreto regula el procedimiento básico de certificación de eficiencia energética de edificios?",
      options: [
        "Real Decreto 314/2006",
        "Real Decreto 390/2021",
        "Decreto balear 145/1997",
        "Ley 38/1999"
      ],
      correctAnswerIndex: 1,
      explanation: "Referencia normativa expresa del módulo.",
      sourceModuleId: "m11",
      legalReference: "Ficha 22 y tabla de fuentes (Ficha 39)",
      difficulty: "medium"
    },
    {
      id: "m11-q12",
      question: "¿Qué norma balear regula las condiciones de dimensionamiento, higiene e instalaciones para la habitabilidad de las viviendas?",
      options: [
        "CTE DB-HS",
        "Decreto 145/1997 y sus modificaciones",
        "Real Decreto 390/2021",
        "LOE"
      ],
      correctAnswerIndex: 1,
      explanation: "El Decreto 145/1997 (CAIB) regula la cédula de habitabilidad, remitiendo al CTE en lo no especificado.",
      sourceModuleId: "m11",
      legalReference: "Ficha 23",
      difficulty: "medium"
    },
    {
      id: "m11-q13",
      question: "¿Qué NO se puede afirmar sobre el Libro del Edificio?",
      options: [
        "Que reúne información de proyecto, construcción, uso y mantenimiento",
        "Que es útil para entender cómo debe mantenerse la vivienda",
        "Que sustituye la certificación de legalidad del inmueble",
        "Que puede incluir manuales, planos y garantías"
      ],
      correctAnswerIndex: 2,
      explanation: "El módulo advierte explícitamente de no convertir un dossier comercial en 'certificación de legalidad'.",
      sourceModuleId: "m11",
      legalReference: "Ficha 24, buena práctica",
      difficulty: "advanced"
    },
    {
      id: "m11-q14",
      question: "Ante una discrepancia entre la superficie construida y la registral de una vivienda, ¿qué debe hacer el agente al anunciarla?",
      options: [
        "Usar siempre la cifra más alta",
        "Identificar la fuente de la superficie anunciada (registral, catastral, construida, útil, medición o proyecto)",
        "Promediar ambas cifras",
        "No mencionar superficie en el anuncio"
      ],
      correctAnswerIndex: 1,
      explanation: "Mezclar fuentes de superficie genera reclamaciones previsibles, según el módulo.",
      sourceModuleId: "m11",
      legalReference: "Ficha 25, riesgo de superficie",
      difficulty: "advanced"
    },
    {
      id: "m11-q15",
      question: "¿Qué distingue a un 'mantenimiento' de una 'reforma interior' según la ficha de clasificación de intervenciones?",
      options: [
        "El coste total de la obra",
        "Si conserva sin alterar elementos relevantes o si afecta estructura, instalaciones o distribución",
        "La antigüedad del edificio",
        "El número de operarios empleados"
      ],
      correctAnswerIndex: 1,
      explanation: "La clasificación de la intervención determina título habilitante y documentación exigible.",
      sourceModuleId: "m11",
      legalReference: "Ficha 26, tabla de intervención",
      difficulty: "medium"
    },
    {
      id: "m11-q16",
      question: "Un presupuesto de reforma que solo indica un importe global, ¿qué valor tiene según el módulo?",
      options: [
        "Es una base sólida y suficiente para decidir la compra",
        "Sirve como primera orientación, pero no como base sólida para la decisión de compra",
        "No tiene ningún valor",
        "Sustituye a la necesidad de proyecto técnico"
      ],
      correctAnswerIndex: 1,
      explanation: "Un presupuesto útil detalla partidas, cantidades, precios, plazos y exclusiones.",
      sourceModuleId: "m11",
      legalReference: "Ficha 27, presupuestos y mediciones",
      difficulty: "medium"
    },
    {
      id: "m11-q17",
      question: "En el contexto balear, ¿qué factor ambiental acelera especialmente la corrosión y el desgaste de sellados e impermeabilizaciones en primera línea de costa?",
      options: [
        "La humedad interior de la vivienda",
        "La exposición a sal, viento y cambios térmicos por proximidad al mar",
        "El tipo de suelo agrícola",
        "La orientación norte exclusivamente"
      ],
      correctAnswerIndex: 1,
      explanation: "Se explicita en la ficha dedicada al contexto balear costero.",
      sourceModuleId: "m11",
      legalReference: "Ficha 29, Mallorca costa/salinidad",
      difficulty: "basic"
    },
    {
      id: "m11-q18",
      question: "¿Cuál es la actuación correcta del agente ante una señal crítica como una barandilla insegura o un olor intenso a gas?",
      options: [
        "Recomendar un arreglo rápido para no perder la venta",
        "Documentar de forma objetiva, comunicar la necesidad de revisión y suspender la actividad comercial hasta contar con informe o solución",
        "Ocultar la señal hasta después de la firma",
        "Culpar directamente al propietario por negligencia"
      ],
      correctAnswerIndex: 1,
      explanation: "Escalar no es acusar, es documentar y pausar hasta resolución técnica.",
      sourceModuleId: "m11",
      legalReference: "Ficha 33, patologías que exigen escalado inmediato",
      difficulty: "advanced"
    }
  ]
};

export const m11Glossary: GlossaryItem[] = [
  {
    id: "g-m11-iae",
    term: "IAE (Informe de Evaluación del Edificio)",
    definition: "Documento que acredita la situación de un edificio en relación con conservación, accesibilidad universal y eficiencia energética, y que en Illes Balears puede integrar la ITE cuando cubra exigencias equivalentes o más exigentes.",
    easyDefinition: "Es como una 'revisión general' del edificio que dice en qué estado está y qué le falta.",
    relatedModuleId: "m11",
    balearContext: "Registro de informes de evaluación de edificios de Illes Balears (CAIB)."
  },
  {
    id: "g-m11-puente-termico",
    term: "Puente térmico",
    definition: "Punto de la envolvente (encuentro de forjados, pilares, contornos de huecos, cajas de persiana) donde se transmite más calor o frío que en el resto del cerramiento, generando síntomas como moho localizado, condensación recurrente o sensación de pared fría.",
    easyDefinition: "Es una 'grieta invisible' por donde se escapa o entra más temperatura de la que debería.",
    relatedModuleId: "m11"
  },
  {
    id: "g-m11-due-diligence",
    term: "Due diligence técnica",
    definition: "Revisión razonable y trazable que hace el agente antes de comercializar un inmueble: identificación de finca, visita, documentación del vendedor y consultas sobre obras, siniestros, comunidad y mantenimiento, clasificando cada dato como verificado, observado, declarado o pendiente.",
    easyDefinition: "Es hacer los deberes antes de anunciar una vivienda, comprobando todo lo que se pueda comprobar.",
    relatedModuleId: "m11"
  },
  {
    id: "g-m11-derrama",
    term: "Derrama comunitaria",
    definition: "Aportación económica extraordinaria que deben pagar los propietarios de una comunidad para financiar una obra o reparación (por ejemplo, de fachada, cubierta o ascensor) que no cubre la cuota ordinaria.",
    easyDefinition: "Es un 'pago extra' que puede aparecer si el edificio necesita una reparación grande.",
    relatedModuleId: "m11"
  },
  {
    id: "g-m11-titulo-habilitante",
    term: "Título habilitante",
    definition: "Documento administrativo (licencia, comunicación previa, declaración responsable, etc.) que autoriza legalmente la ejecución de una obra o el ejercicio de una actividad.",
    easyDefinition: "Es el 'permiso oficial' que demuestra que una obra o un uso están autorizados por el ayuntamiento.",
    relatedModuleId: "m11"
  },
  {
    id: "g-m11-matriz-versiones",
    term: "Matriz de control de versiones (comercialización de promociones)",
    definition: "Registro que vincula cada afirmación comercial (planos, calidades, prestaciones) con su documento fuente, versión, responsable y fecha, para evitar vender sobre información desactualizada o preliminar.",
    easyDefinition: "Es llevar un control de 'qué se dijo, según qué plano, y cuándo cambió', para no prometer algo que después se modifica.",
    relatedModuleId: "m11",
    balearContext: "Aplicado al caso práctico de promoción/rehabilitación en venta en Sóller."
  }
];

export const m11Alerts: string[] = [
  "El contenido del módulo está 'contrastado con fuentes oficiales disponibles a 4 de julio de 2026'; el propio PDF advierte que la normativa técnica y local evoluciona, por lo que antes de cerrar una operación real se debe consultar siempre la versión consolidada oficial aplicable a la fecha, al municipio y al alcance de la obra (Ficha 39, aviso 'Mantenimiento').",
  "El CTE posee actualizaciones y disposiciones transitorias: para una obra concreta se debe comprobar siempre la versión aplicable a la fecha de la licencia, no la que se recuerde de un proyecto anterior (Ficha 18, aviso 'Normativa viva').",
  "Fuentes oficiales citadas explícitamente por el módulo: Ley 38/1999 de Ordenación de la Edificación (BOE); Real Decreto 314/2006 (CTE, BOE); Portal oficial del Código Técnico de la Edificación; Real Decreto 390/2021 (certificación de eficiencia energética, BOE); Decreto 145/1997 y modificaciones (CAIB, cédula de habitabilidad); Registro IAE/ITE de Illes Balears (CAIB) (Ficha 39, tabla de fuentes oficiales)."
];
