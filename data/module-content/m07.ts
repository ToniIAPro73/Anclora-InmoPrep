import type { Module, GlossaryItem } from "@/lib/types";

export const m07Module: Module = {
  id: "m07",
  code: "M07",
  title: "Derecho Urbanístico",
  order: 7,
  description:
    "Clasificación del suelo LUIB, planeamiento, licencias, legalización en rústico e ITE/IEE Palma.",
  estimatedMinutes: 60,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m07-l1",
      moduleId: "m07",
      title: "Fundamentos del urbanismo y clasificación del suelo",
      order: 1,
      summary:
        "La propiedad del suelo no incluye un derecho ilimitado a edificar: el planeamiento decide qué se puede hacer con cada parcela, no el deseo del vendedor.",
      content: `El urbanismo es la disciplina jurídica que decide qué se puede construir, usar o transformar en un suelo o edificio; esa decisión no depende de lo que quiera vender el propietario ni de lo que prometa el comercializador, sino del régimen jurídico aplicable a esa parcela concreta (Ficha 01, "Objetivos y método de estudio"). El método de trabajo que propone el módulo es siempre el mismo: suelo → planeamiento → uso → acto previsto → título habilitante → afecciones → condición contractual. Cualquier análisis urbanístico de un inmueble en Mallorca debe recorrer esa cadena completa antes de convertir una posibilidad en un compromiso comercial.

## El estatuto jurídico de la propiedad

El TRLSRU (RDL 7/2015) establece el llamado "estatuto de la propiedad del suelo": el derecho de propiedad se ejerce dentro de los límites que fija el ordenamiento urbanístico, y son el planeamiento y la ley los que atribuyen usos y aprovechamientos concretos a cada finca, no la mera titularidad dominical (Ficha 03, "Función social y estatuto del suelo"). Esto significa, en términos prácticos para el agente, que clasificación no equivale a edificabilidad automática: que un suelo esté clasificado como urbano no garantiza que hoy mismo se pueda construir, y que un suelo esté clasificado como rústico no significa necesariamente que no admita ningún uso o edificación regulada. La obra, además, necesita normalmente proyecto técnico y título habilitante; y la infracción urbanística puede afectar tanto al valor del inmueble como a su financiabilidad y a la validez de la transmisión.

## El mapa normativo: quién manda en cada nivel

La Ficha 02 ("Mapa normativo urbanístico") fija el reparto competencial que el agente debe interiorizar antes de dar cualquier respuesta sobre un inmueble en Baleares:

- Nivel estatal: el TRLSRU fija las bases del régimen de suelo y los criterios de valoración aplicables en todo el territorio.
- Nivel autonómico: la Ley 12/2017 LUIB y las normas balear de desarrollo regulan el régimen urbanístico sustantivo y la disciplina en las Illes Balears.
- Nivel insular: el PTI de Mallorca (Plan Territorial Insular) define el modelo territorial de la isla, condicionando el planeamiento municipal.
- Nivel municipal: el PGOU, las NNSS o las ordenanzas municipales fijan los parámetros concretos de uso, edificabilidad, altura, ocupación y retranqueos de cada parcela.
- Nivel sectorial: normativa de costas, aguas, patrimonio y carreteras impone afecciones específicas que se superponen al régimen urbanístico general.

El anclaje conceptual de esta ficha es clave para el examen y para la práctica profesional: no existe "la norma de Mallorca" aplicable a un inmueble; la respuesta depende siempre de la administración competente sobre esa parcela concreta y de la afección específica que recaiga sobre ella.

## Clasificación de suelo y situación básica

La Ficha 04 distingue dos planos que con frecuencia se confunden: la clasificación urbanística (competencia autonómica y municipal: suelo urbano, urbanizable y rústico o no urbanizable) y la situación básica estatal del suelo (rural o urbanizado, categoría que usa el TRLSRU sobre todo a efectos de valoración). Un suelo urbano es aquel integrado en la trama urbana consolidada y dotado de los servicios exigidos; un suelo urbanizable es aquel previsto para su transformación futura, pero que todavía no habilita a edificar de forma inmediata; un suelo rústico o no urbanizable está sujeto a protección o a limitaciones de uso, con edificación muy condicionada. El error más frecuente que señala el propio módulo (recuadro ERROR de la Ficha 04) es llamar "urbanizable" a un suelo simplemente porque hay casas cerca o porque tiene acceso rodado: la clasificación oficial es siempre un dato documental, nunca una impresión visual.`,
      easyExplanation:
        "Que un terreno tenga casas alrededor o una carretera cerca no lo convierte en \"suelo para construir\". Lo que de verdad manda es lo que dice el papel oficial (el planeamiento del ayuntamiento, la ley balear y, si toca, el plan de la isla). Antes de decir a un cliente \"esto se puede edificar\", hay que comprobar en qué categoría oficial está esa parcela concreta, porque cada categoría trae consigo derechos y límites distintos.",
      balearExample:
        "En Santa Margalida, un agente recibe el encargo de vender una parcela con una vivienda antigua rodeada de otras casas similares y una pista asfaltada de acceso. El vendedor insiste en anunciarla como \"suelo urbano, totalmente edificable\". Antes de publicar el anuncio, el agente solicita el certificado urbanístico municipal y descubre que, según el PGOU vigente, la parcela está clasificada como suelo rústico común, no urbano: el aspecto \"de pueblo\" del entorno no tiene ningún valor jurídico frente a la clasificación oficial.",
      keyConcepts: [
        "estatuto de la propiedad del suelo",
        "TRLSRU (RDL 7/2015)",
        "Ley 12/2017 LUIB",
        "PTI de Mallorca",
        "clasificación de suelo",
        "situación básica (rural/urbanizado)",
        "suelo urbano, urbanizable y rústico",
        "competencia municipal vs. autonómica vs. sectorial",
      ],
      frequentErrors: [
        "Confundir clasificación urbanística con edificabilidad automática",
        "Llamar 'urbanizable' a un suelo por tener viviendas cerca o acceso, sin comprobar el planeamiento",
        "Asumir que existe una 'norma única de Mallorca' aplicable a cualquier inmueble",
        "No distinguir la competencia estatal (bases y valoración), autonómica (régimen sustantivo) y municipal (parámetros concretos)",
      ],
      examples: [
        {
          id: "m07-l1-ex1",
          title: "Clasificación vs. impresión visual",
          scenario: "Parcela con vivienda antigua y acceso asfaltado.",
          application:
            "Solicitar certificado municipal antes de anunciar el suelo como urbanizable.",
          isBalearContext: true,
        },
        {
          id: "m07-l1-ex2",
          title: "Reparto competencial",
          scenario: "Cliente pregunta '¿qué norma regula esto?'.",
          application:
            "Identificar primero qué nivel (estatal, autonómico, insular, municipal o sectorial) resuelve la duda concreta.",
          isBalearContext: false,
        },
        {
          id: "m07-l1-ex3",
          title: "Función social de la propiedad",
          scenario: "Propietario quiere ampliar una vivienda 'porque es suya'.",
          application:
            "Explicar que el derecho de propiedad se ejerce dentro de los límites del planeamiento vigente.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l2",
      moduleId: "m07",
      title: "Planeamiento, gestión urbanística y condición de solar",
      order: 2,
      summary:
        "Antes de anunciar que una parcela es edificable, ampliable o divisible hay que revisar el planeamiento vigente y comprobar si el suelo tiene ya la condición jurídica de solar.",
      content: `El planeamiento general (Ficha 05) es el instrumento que traduce la clasificación de suelo en parámetros concretos y exigibles: uso principal y usos compatibles, edificabilidad, ocupación, altura máxima, retranqueos respecto a linderos, dotación de aparcamiento y condiciones de parcela. También incorpora protecciones patrimoniales, paisajísticas o ambientales que pueden limitar drásticamente lo que en apariencia permitiría la clasificación de suelo. El módulo insiste en una regla de práctica profesional: la información urbanística manejada debe tener siempre fecha, fuente y alcance identificados, porque una captura de pantalla de un visor cartográfico nunca sustituye a un informe urbanístico oficial cuando existe riesgo relevante en la operación.

## Gestión urbanística: de suelo bruto a solar edificable

La Ficha 06 ("Gestión urbanística y urbanización") explica que, en áreas pendientes de desarrollo, la posibilidad real de construir no depende solo de la clasificación, sino de que se completen una serie de hitos de gestión: planificación de detalle del sector, equidistribución de cargas y beneficios entre propietarios (frecuentemente mediante juntas de compensación u otros sistemas de ejecución), ejecución material de la urbanización (viales, redes de agua, saneamiento, electricidad) y cumplimiento de los deberes legales de cesión, equidistribución y costeamiento que impone la legislación urbanística. Mientras esos hitos no se completen, el suelo puede estar formalmente clasificado como urbanizable sin que exista todavía ni un solar ni un derecho inmediato a edificar. El agente debe evitar, por tanto, presentar el planeamiento vigente como si equivaliera a un derecho de construcción ya consolidado: un precio de mercado anormalmente bajo, señala el propio módulo (recuadro ADVERTENCIA), puede reflejar precisamente que el suelo carece todavía de condición de solar o de servicios suficientes.

## La condición de solar

La Ficha 07 desarrolla el concepto técnico más determinante de todo el módulo para el agente inmobiliario: la condición de solar. Un terreno solo alcanza esta condición cuando cumple, de forma acumulativa, los requisitos de urbanización y acceso que exige la normativa urbanística aplicable (típicamente: estar dotado de acceso rodado, abastecimiento de agua, evacuación de aguas residuales, suministro de energía eléctrica y encintado de aceras, entre otros según la ordenanza municipal). La regla mnemotécnica que fija el módulo es clara: "parcela urbana" no siempre significa "solar edificable hoy". Antes de valorar o comercializar, el agente debe comprobar los servicios existentes y pendientes, las alineaciones oficiales, las cesiones exigidas y las eventuales cargas de urbanización todavía no satisfechas por el propietario.

## Títulos habilitantes: licencia, comunicación previa y declaración responsable

La Ficha 08 distingue los tres regímenes de control municipal de los actos de edificación y uso del suelo que coexisten en la práctica urbanística balear: la licencia urbanística (control preventivo previo, típicamente exigida para obra mayor, con resolución expresa, planos y condiciones); la comunicación previa o declaración responsable (régimen simplificado habitual para obra menor o determinadas actividades, en el que el titular asume la responsabilidad de que la actuación cumple la normativa, sujeto a control municipal posterior); y el control final de primera ocupación, verificado mediante certificados y comprobación de aptitud del uso previsto. La etiqueta que use el vendedor o el promotor ("esto tiene licencia", "esto está declarado") no se puede aceptar sin comprobar qué título concreto ampara la obra ejecutada y si esa obra se corresponde efectivamente con lo autorizado: el recuadro DISCIPLINA de la Ficha 08 es explícito en que no cabe afirmar que una obra "está en regla" sin verificar esa correspondencia documental.`,
      easyExplanation:
        "Antes de decir que un terreno \"se puede edificar ya\", hay que mirar dos cosas: si el planeamiento del ayuntamiento lo permite (uso, alturas, retranqueos) y si ese terreno ya tiene todos los servicios básicos (agua, luz, alcantarillado, acceso) para ser considerado legalmente un \"solar\". Y para construir, reformar o legalizar algo, hace falta el papel correcto: licencia para obra grande, y comunicación o declaración responsable para obra pequeña, comprobando siempre que ese papel coincide con lo realmente construido.",
      balearExample:
        "En Manacor, una promotora ofrece a un agente una parcela \"urbanizable, lista para construir\" a buen precio. El agente, siguiendo el método de la Ficha 06, solicita al ayuntamiento el estado de la urbanización del sector: descubre que la junta de compensación aún no ha ejecutado el saneamiento ni las aceras, por lo que la parcela no tiene todavía condición de solar. El agente informa al comprador de que el precio atractivo refleja precisamente ese estado pendiente, y condiciona cualquier reserva a la finalización de las obras de urbanización.",
      keyConcepts: [
        "planeamiento general",
        "ordenanzas municipales",
        "edificabilidad, ocupación y retranqueos",
        "gestión urbanística y equidistribución",
        "junta de compensación",
        "condición de solar",
        "licencia urbanística",
        "comunicación previa y declaración responsable",
      ],
      frequentErrors: [
        "Confundir clasificación urbanística vigente con derecho inmediato a construir",
        "Presentar un precio bajo como 'oportunidad' sin verificar si falta urbanización",
        "Aceptar la palabra 'licencia' sin comprobar a qué acto concreto corresponde y su alcance",
        "Sustituir un informe urbanístico oficial por una captura de un visor de mapas",
      ],
      examples: [
        {
          id: "m07-l2-ex1",
          title: "Suelo sin urbanizar",
          scenario: "Parcela urbanizable con precio bajo.",
          application:
            "Verificar estado de cargas de urbanización antes de valorar.",
          isBalearContext: false,
        },
        {
          id: "m07-l2-ex2",
          title: "Solar vs. parcela urbana",
          scenario: "Parcela dentro de trama urbana pero sin acera ni saneamiento.",
          application:
            "No anunciarla como solar edificable de forma inmediata.",
          isBalearContext: false,
        },
        {
          id: "m07-l2-ex3",
          title: "Título habilitante correcto",
          scenario: "Vendedor dice 'tiene licencia'.",
          application:
            "Pedir la resolución de licencia y comprobar que corresponde a la obra ejecutada.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l3",
      moduleId: "m07",
      title:
        "Situación legal de las edificaciones, fuera de ordenación y disciplina urbanística",
      order: 3,
      summary:
        "Que una vivienda esté construida, catastrada e inscrita no significa automáticamente que sea legal desde el punto de vista urbanístico.",
      content: `La Ficha 09 ("Primera ocupación y final de obra") recuerda que la terminación física de una obra no equivale, por sí sola, a su aptitud jurídica para ser ocupada, arrendada o entregada a un comprador. En obra nueva o rehabilitación, la secuencia habitual integra el certificado final de obra del técnico director, los controles municipales correspondientes, la licencia de primera ocupación o el título equivalente cuando la normativa municipal lo exija, la cédula de habitabilidad si procede, y la inscripción registral de la obra nueva. El orden concreto de estos hitos puede variar según el municipio y el tipo de actuación, pero el agente debe coordinarse con promotor, técnico y notaría, comprobar suministros, certificado de eficiencia energética (CEE) y Libro del Edificio, y nunca anunciar una fecha comercial de entrega que no dependa de hitos documentales verificables, sino de previsiones informales del promotor.

## Situación legal de edificaciones existentes

La Ficha 10 aborda uno de los focos de riesgo más habituales en la comercialización de vivienda usada en Mallorca: una casa puede estar construida, catastrada e incluso inscrita en el Registro de la Propiedad sin que ello resuelva todas las cuestiones urbanísticas. El Registro publica derechos, pero no acredita conformidad urbanística plena; el Catastro describe la realidad física a efectos tributarios, pero tampoco legaliza una edificación. La antigüedad de una construcción puede tener efectos jurídicos relevantes (por ejemplo, a efectos de prescripción de la infracción), pero requiere siempre un análisis técnico-jurídico específico, no una presunción genérica. Por eso, el módulo advierte de forma expresa (recuadro ERROR) que "está en Catastro" no es una respuesta suficiente a la pregunta "¿es legal?": hay que pedir licencia, certificado, expediente y las declaraciones de obra correspondientes.

## Fuera de ordenación y situaciones asimiladas

La Ficha 11 desarrolla el régimen de edificaciones que, existiendo legalmente, han quedado disconformes con el planeamiento sobrevenido: situaciones de fuera de ordenación, inadecuación o regímenes asimilados según la ley y el planeamiento aplicables. Estas situaciones limitan de forma significativa las posibilidades de reforma, ampliación, cambio de uso o reconstrucción tras siniestro, y tienen impacto directo en el seguro, la financiación y el valor del inmueble. La regla que fija el módulo es contundente: la comercialización responsable no oculta un régimen urbanístico incómodo, lo convierte en condición expresa de la decisión del comprador, explicando por escrito el alcance real de las limitaciones antes de cerrar cualquier operación.

## Disciplina urbanística e infracciones

La Ficha 12 cierra el bloque con la disciplina urbanística: el sistema por el cual la administración controla la legalidad de las obras y usos, inspecciona, restablece la realidad física alterada y, en su caso, sanciona. Obras sin título habilitante, usos no permitidos o incumplimientos de las condiciones de la licencia pueden dar lugar a medidas de restauración de la legalidad y a expedientes sancionadores, cuyos plazos y consecuencias dependen del supuesto concreto y de la norma vigente en cada momento (con remisión, para el marco sustantivo balear, a la Ley 12/2017 LUIB). El módulo marca un límite profesional muy claro para el agente: no debe aconsejar "esperar a que prescriba" una posible infracción sin asesoramiento experto, porque el agente no está capacitado para validar por su cuenta una prescripción urbanística; su papel es detectar la incidencia, derivarla a técnico o abogado, y reflejarla documentalmente en arras y contrato.`,
      easyExplanation:
        "Que una casa aparezca en el Catastro o incluso esté inscrita en el Registro no quiere decir que esté \"en regla\" desde el punto de vista urbanístico: son registros distintos, con finalidades distintas. Si una construcción incumple el planeamiento actual (aunque sea antigua y llevara años así), puede tener restricciones fuertes para reformarla o ampliarla, y eso hay que contarlo al comprador con claridad. Y si hay obras sin permiso o usos no autorizados, nunca hay que aconsejar \"esperar a que se olvide\": eso hay que consultarlo con un técnico o abogado.",
      balearExample:
        "En Sóller, un propietario ofrece una casa de campo construida hace 40 años, catastrada y con recibo de IBI al día, asegurando que \"al llevar tanto tiempo, ya está legalizada de hecho\". El agente solicita al ayuntamiento el expediente y comprueba que la vivienda carece de licencia de obra y que el planeamiento actual la sitúa en fuera de ordenación por afectar a una zona de protección territorial. En lugar de repetir la afirmación del propietario, el agente deriva la comprobación de una eventual prescripción a un abogado especializado y refleja la incidencia en la ficha informativa y en las arras.",
      keyConcepts: [
        "certificado final de obra",
        "licencia de primera ocupación",
        "cédula de habitabilidad",
        "Libro del Edificio",
        "situación legal de la edificación",
        "fuera de ordenación",
        "disciplina urbanística",
        "restauración de la legalidad y sanción",
      ],
      frequentErrors: [
        "Confundir estar en Catastro con tener licencia urbanística",
        "Anunciar entrega de vivienda con fecha comercial sin hitos documentales verificados",
        "No informar de un régimen de fuera de ordenación por miedo a perder la venta",
        "Aconsejar 'esperar a que prescriba' una infracción sin derivar a un técnico o abogado",
      ],
      examples: [
        {
          id: "m07-l3-ex1",
          title: "Catastro no legaliza",
          scenario: "Casa antigua catastrada sin licencia.",
          application: "Pedir expediente municipal antes de afirmar legalidad.",
          isBalearContext: false,
        },
        {
          id: "m07-l3-ex2",
          title: "Fuera de ordenación",
          scenario: "Vivienda disconforme con planeamiento sobrevenido.",
          application:
            "Explicar por escrito el alcance de la limitación antes de firmar arras.",
          isBalearContext: false,
        },
        {
          id: "m07-l3-ex3",
          title: "Límite del agente",
          scenario: "Cliente pregunta si una obra ilegal 'ya ha prescrito'.",
          application:
            "Derivar la cuestión a asesoramiento técnico/jurídico experto, nunca opinar.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l4",
      moduleId: "m07",
      title:
        "Suelo rústico y afecciones sectoriales en Mallorca (costas, patrimonio, espacios naturales, aguas, carreteras)",
      order: 4,
      summary:
        "En Mallorca, la comercialización de suelo rústico o de fincas afectadas por protecciones sectoriales exige revisar simultáneamente varias capas normativas antes de fijar un precio.",
      content: `La Ficha 13 ("Suelo rústico en Mallorca") advierte de que este tipo de suelo exige una lectura especialmente prudente: hay que verificar la categoría de protección territorial o ambiental aplicable, contrastar la unidad mínima de cultivo, los accesos, los caminos y las superficies reales de la finca, y revisar con detalle las edificaciones existentes, piscinas, anexos y cerramientos. La regla que fija el módulo (recuadro MALLORCA) es categórica: en suelo rústico, la due diligence urbanística debe empezar antes de fijar un precio de mercado, no después. Nunca se debe prometer vivienda, ampliación, segregación o uso turístico en rústico sin disponer de un informe urbanístico previo, porque estas actuaciones están fuertemente condicionadas o directamente prohibidas según la categoría de protección.

## Espacios naturales y paisaje

La Ficha 14 explica que Mallorca combina áreas protegidas, zonas de especial valor paisajístico y regulaciones sectoriales superpuestas, y que la cercanía de un inmueble a un espacio natural no es solo un argumento comercial de valor: puede implicar limitaciones reales sobre obras, usos, accesos y vegetación. El agente debe consultar la cartografía oficial y las afecciones antes de anunciar posibilidades de "ampliación" o "nueva construcción", y explicar cualquier restricción de forma neutra y verificable. La regla clave: valor paisajístico y limitación urbanística pueden coexistir perfectamente, y ambos datos deben figurar en el análisis del inmueble, no solo el primero.

## Costas y servidumbres

La Ficha 15 recuerda que la franja costera está sometida a dominio público marítimo-terrestre y a servidumbres de protección y de tránsito que condicionan el uso y las obras posibles en las fincas colindantes con el litoral. El agente debe comprobar el deslinde administrativo y las servidumbres aplicables, coordinarse con la Demarcación de Costas y con un técnico para cualquier proyecto de reforma, y nunca vender la proximidad al mar como si fuera sinónimo de libertad total de actuación. El propio módulo remite las servidumbres de costas, como concepto jurídico general, al Módulo 1 del curso, y se centra aquí en su efecto urbanístico y de gestión práctica.

## Patrimonio histórico y protección arquitectónica

La Ficha 16 aborda las viviendas catalogadas: pueden tener un valor singular y, a la vez, un control reforzado sobre obras y fachadas. La protección patrimonial puede provenir de catálogos municipales, de normativa insular o de normativa autonómica, y afecta al tipo de intervenciones permitidas, a los materiales exigidos, a las autorizaciones necesarias y a los plazos administrativos asociados. La regla del módulo es clara: antes de comercializar un inmueble protegido hay que pedir la ficha de catálogo, el nivel de protección concreto y sus condiciones; nunca se debe prometer una redistribución interior, un derribo parcial o un cambio de fachada sin verificar esas condiciones, y hay que valorar realistamente el coste y los tiempos de las autorizaciones.

## Aguas, inundación, carreteras y usos turísticos

Las Fichas 17, 18 y 19 completan el mapa de afecciones sectoriales relevantes en Baleares. Los riesgos de inundación, torrencialidad, proximidad a cauces o a la costa y drenaje deficiente pueden afectar seguros, obras y valor del inmueble; la regla es que el riesgo territorial no se elimina por contrato, se informa y se valora. El acceso físico a una finca no siempre tiene respaldo jurídico: un camino de hecho puede carecer de acceso jurídico consolidado, y las carreteras y caminos pueden generar zonas de protección, limitaciones de acceso, retranqueos y necesidad de permisos específicos; un camino tradicional, una servidumbre de paso y una pista privada son situaciones jurídicamente distintas que no deben confundirse. Por último, en el ámbito turístico, la habilitación turística de una vivienda no sustituye ni la conformidad urbanística del inmueble ni los controles de la comunidad de propietarios: el agente debe distinguir uso residencial, alojamiento turístico y actividad, comprobar el título turístico y la zonificación aplicable, no usar "Airbnb" como sinónimo de uso permitido, y actualizar cualquier publicidad si cambia la normativa turística o la licencia. El turismo en Mallorca exige, según el propio módulo, comprobar de forma acumulativa varias capas de control: urbanística, turística, civil o de comunidad de propietarios y, si aplica, registral.`,
      easyExplanation:
        "En el campo mallorquín no basta con mirar si una finca \"está clasificada como rústica\": hay que ver qué tipo de protección tiene (natural, paisajística, costera, patrimonial, de riesgo de inundación) porque cada una limita de forma distinta lo que se puede construir o ampliar. Cerca del mar hay franjas donde no se puede edificar libremente aunque la finca sea privada. Un camino que parece de siempre puede no tener ningún derecho de paso reconocido. Y alquilar por temporadas (tipo Airbnb) no arregla ni sustituye los papeles urbanísticos: son controles distintos y complementarios.",
      balearExample:
        "En Andratx, un comprador extranjero busca una finca rústica con vistas al mar para \"reformar y ampliar\". El agente comprueba primero, antes de cualquier oferta, la categoría de protección territorial del PTI de Mallorca sobre esa parcela, el deslinde y servidumbre de costas por la cercanía al litoral, y si existe algún catálogo patrimonial sobre la construcción existente. Descubre que la finca está en una zona de alto valor paisajístico con edificación muy limitada y servidumbre de protección de costas de 100 metros: informa de ello por escrito antes de fijar la reserva, evitando prometer una ampliación que probablemente no sea viable.",
      keyConcepts: [
        "categoría de protección territorial/ambiental",
        "unidad mínima de cultivo",
        "servidumbre de protección y de tránsito (costas)",
        "catálogo de protección patrimonial",
        "riesgo de inundación y torrencialidad",
        "camino de hecho vs. servidumbre de paso",
        "habilitación turística",
        "PTI de Mallorca",
      ],
      frequentErrors: [
        "Prometer vivienda, ampliación o segregación en rústico sin informe urbanístico previo",
        "Vender la proximidad al mar como libertad total de reforma sin comprobar servidumbres de costas",
        "Confundir un camino tradicional con una servidumbre de paso jurídicamente consolidada",
        "Usar 'Airbnb' como sinónimo de uso turístico permitido sin comprobar el título y la zonificación",
      ],
      examples: [
        {
          id: "m07-l4-ex1",
          title: "Rústico protegido",
          scenario: "Finca rústica con casa, piscina y anexos.",
          application:
            "Due diligence urbanística antes de fijar precio, no promesas de vivienda o ampliación.",
          isBalearContext: true,
        },
        {
          id: "m07-l4-ex2",
          title: "Servidumbre de costas",
          scenario: "Chalet en primera línea de mar.",
          application:
            "Comprobar deslinde y servidumbre antes de comprometer plazos de obra.",
          isBalearContext: true,
        },
        {
          id: "m07-l4-ex3",
          title: "Acceso sin respaldo jurídico",
          scenario: "Finca con camino de hecho.",
          application:
            "Verificar titularidad y servidumbre de acceso antes de anunciar acceso directo.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l5",
      moduleId: "m07",
      title:
        "Operaciones urbanísticas frecuentes — cambio de uso, segregación y regularización de discrepancias",
      order: 5,
      summary:
        "Cambiar el uso de un inmueble, dividir una finca o corregir discrepancias entre Registro, Catastro y realidad física son operaciones urbanísticas con consecuencias legales, no simples trámites administrativos.",
      content: `La Ficha 20 ("Cambio de uso") plantea la cadena de comprobaciones necesaria para pasar, por ejemplo, de local a vivienda, de vivienda a oficinas o de almacén a actividad: primero, si el nuevo uso es compatible con el planeamiento y la ordenanza aplicable; después, si es técnicamente viable (proyecto, cumplimiento del Código Técnico de la Edificación, habitabilidad); a continuación, qué título habilitante requiere (licencia o comunicación, según el municipio y el alcance); y, por último, si puede inscribirse (mediante escritura y la correspondiente actualización registral y catastral) y si afecta a la comunidad de propietarios (título constitutivo y estatutos). El módulo fija una regla de comunicación comercial: la expresión "posibilidad de cambio de uso" solo es aceptable si va acompañada de una comprobación objetiva del planeamiento y de una advertencia clara sobre los trámites pendientes; nunca puede presentarse como un hecho ya consumado.

## Segregación, división y parcelación

La Ficha 21 aborda una de las operaciones de mayor riesgo legal en el mercado rústico y semirrústico balear: separar una finca, física o registralmente, tiene consecuencias urbanísticas, registrales y fiscales simultáneas. La segregación no se presume posible por el mero hecho de que la superficie total sea suficiente: es necesario analizar la unidad mínima de cultivo o parcela mínima exigida, el planeamiento aplicable, si se requiere licencia o declaración municipal de parcelación, el acceso, los servicios disponibles y las eventuales prohibiciones de parcelación en suelo rústico protegido. El agente nunca debe comercializar como "parcelas" divisiones de hecho sin viabilidad jurídica confirmada, y debe coordinar siempre Registro, Catastro, técnico y ayuntamiento antes de avanzar una operación de este tipo, identificando además si existe proindiviso, uso exclusivo pactado entre comuneros o finca ya independiente. El propio módulo advierte (recuadro RIESGO) de que una operación de parcelación irregular puede bloquear la financiación hipotecaria, el otorgamiento de escritura y la reventa futura del inmueble.

## Certificados e informes urbanísticos

La Ficha 22 distingue con precisión el valor jurídico de cada documento que el agente puede manejar: un informe urbanístico es un pronunciamiento administrativo con valor para operaciones complejas; un certificado municipal acredita formalmente uso, situación o el estado de expedientes; una consulta a un visor cartográfico tiene valor meramente orientativo, útil para una primera detección de riesgos; y un informe técnico privado aporta un análisis especializado de viabilidad y riesgo. Un certificado no equivale a una consulta informal ni a la lectura de un visor de mapas: cada documento tiene un alcance distinto y el agente debe conservar siempre la fecha y el expediente de referencia de cada uno, porque el planeamiento puede cambiar y cada documento queda fechado en el momento en que se emitió.

## Due diligence urbanística del agente

La Ficha 23 define la secuencia de verificación que debe seguir el agente antes de comprometer cualquier operación: (1) identificar el inmueble, su uso y el objetivo del cliente; (2) solicitar Registro, Catastro, licencia, cédula y documentación de obras; (3) consultar el planeamiento vigente y las afecciones sectoriales aplicables; (4) detectar incoherencias entre esos documentos y derivar a técnico o abogado cuando sea necesario; y (5) incorporar reservas, condiciones y un cronograma realista en el documento de arras. El módulo insiste en que esta due diligence no es un dictamen técnico completo ni proporciona certeza absoluta, sino una secuencia de verificación que permite al agente detectar cuándo debe detenerse y derivar la operación a un profesional especializado, documentando siempre las fuentes, la fecha de la consulta y los aspectos que quedan pendientes de confirmación.

## Regularización de discrepancias

La Ficha 34 completa este bloque operativo: cuando Registro, Catastro, obra ejecutada y planeamiento no coinciden entre sí, el objetivo profesional es ordenar la discrepancia antes de vender la finca como si fuera una situación normal. Es necesario determinar qué documento describe realmente cada superficie o construcción, distinguir entre una simple rectificación descriptiva registral, una declaración de obra nueva, un procedimiento de legalización o, en su caso, un expediente de disciplina urbanística, y coordinar a técnico, notaría, Registro y ayuntamiento según el caso concreto. El módulo advierte de forma expresa contra un error habitual y comercialmente tentador: elegir la cifra de superficie más favorable para publicidad en lugar de la que resulte de la documentación real. Una discrepancia no siempre impide vender el inmueble, pero debe quedar explicada, valorada económicamente y reflejada de forma expresa en el contrato.`,
      easyExplanation:
        "Cambiar el uso de un inmueble (por ejemplo de local a vivienda) o dividir una finca en varias parcelas no son trámites simples de papeleo: hay que comprobar que el ayuntamiento lo permite, que técnicamente es viable, y qué documento (licencia o comunicación) hace falta, además de si afecta a los vecinos de la comunidad. Si al comparar el Registro, el Catastro y lo construido de verdad aparecen números distintos, hay que averiguar por qué y contarlo con claridad al comprador, no elegir la cifra que más convenga para el anuncio.",
      balearExample:
        "En Inca, un propietario quiere segregar una finca de 3.000 m² en dos parcelas de 1.500 m² para vender por separado. El agente comprueba, antes de admitir el encargo, la unidad mínima de cultivo aplicable en el planeamiento municipal y descubre que la parcela mínima exigida en esa zona rústica es de 2.000 m². En lugar de anunciar \"dos parcelas de campo listas para vender\", el agente informa al propietario de que la segregación, tal como está planteada, no es jurídicamente viable, y le propone alternativas (proindiviso con uso exclusivo pactado, o venta conjunta).",
      keyConcepts: [
        "compatibilidad de uso y planeamiento",
        "viabilidad técnica (CTE, habitabilidad)",
        "unidad mínima de cultivo/parcela mínima",
        "prohibición de parcelación",
        "informe urbanístico vs. certificado municipal vs. consulta de visor",
        "due diligence urbanística del agente",
        "rectificación descriptiva vs. legalización vs. disciplina",
      ],
      frequentErrors: [
        "Presentar el cambio de uso como un hecho consumado sin comprobar planeamiento y trámites pendientes",
        "Comercializar 'parcelas' de una segregación sin viabilidad jurídica confirmada",
        "Confundir el valor de un certificado municipal con el de una consulta informal a un visor",
        "Elegir la cifra de superficie más favorable para publicidad en vez de la que resulta de la documentación real",
      ],
      examples: [
        {
          id: "m07-l5-ex1",
          title: "Cambio de uso no consumado",
          scenario: "Local que 'podría' ser vivienda.",
          application:
            "Comprobar planeamiento y anunciar la posibilidad como condicionada.",
          isBalearContext: false,
        },
        {
          id: "m07-l5-ex2",
          title: "Segregación sin viabilidad",
          scenario: "Finca rústica con parcela mínima incumplida.",
          application:
            "Informar al propietario antes de comercializar 'parcelas' inexistentes jurídicamente.",
          isBalearContext: false,
        },
        {
          id: "m07-l5-ex3",
          title: "Discrepancia de superficies",
          scenario: "Catastro, Registro y obra real no coinciden.",
          application:
            "Aclarar el origen de la discrepancia y reflejarla en el contrato, no ocultarla.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l6",
      moduleId: "m07",
      title: "Publicidad responsable y casos prácticos de comercialización",
      order: 6,
      summary:
        "La mayor fuente de reclamaciones al agente inmobiliario es anunciar una posibilidad urbanística sin explicar los requisitos y condiciones que la hacen exigible.",
      content: `La Ficha 24 ("Publicidad de potencial urbanístico") ofrece una tabla de expresiones de riesgo y sus alternativas prudentes que debe interiorizar cualquier agente que opere en Mallorca: en lugar de "se puede ampliar", debe decirse "posibilidad sujeta a informe y licencia"; en lugar de "terreno edificable", "clasificación según planeamiento; viabilidad pendiente"; en lugar de "ideal para turismo", "uso sujeto a controles sectoriales"; y en lugar de "divisible", "segregación sujeta a requisitos y autorización". La regla de control es explícita: la publicidad debe identificar la condición desde el principio del anuncio, no esconderla al final de una llamada telefónica ni en la letra pequeña. Esta ficha conecta directamente con el régimen de responsabilidad del agente inmobiliario en la comercialización, y constituye una de las áreas de mayor exposición a reclamaciones de consumidores y a expedientes sancionadores en el sector.

## Operación en promoción

La Ficha 25 traslada estas exigencias al contexto de la vivienda de obra nueva en promoción: el agente debe comprobar el título del promotor sobre el suelo, alinear proyecto, licencia, memoria de calidades y material de comercialización (renders incluidos, que no pueden representar elementos no autorizados), no cobrar cantidades anticipadas sin la garantía legalmente exigida, y controlar los hitos reales de obra, la primera ocupación y la documentación de entrega antes de fijar cualquier fecha comercial. El desarrollo específico de la promoción se aborda en otro módulo del curso; aquí el foco es el filtro urbanístico previo que el agente debe aplicar antes de aceptar el encargo de comercialización.

## Cuatro casos prácticos resueltos

El módulo cierra el bloque operativo con cuatro casos que sintetizan los errores más comunes detectados en la práctica:

1. Finca rústica con anexos (Ficha 26): una finca se anuncia con casa, piscina, dos almacenes y "posibilidad de ampliar". La resolución correcta exige identificar cada construcción y contrastarla con Registro, Catastro, licencia y planeamiento; solicitar informe técnico y municipal antes de repetir la promesa de ampliación; explicar los límites de agua, accesos y protección territorial aplicable; y condicionar cualquier reserva al resultado de la due diligence. Conclusión clave: la superficie visible a pie de finca no equivale ni a superficie legalizada ni a un derecho de ampliación.

2. Solar urbano sin servicios (Ficha 27): una parcela figura como urbana en el planeamiento, pero la calle carece de todos los servicios exigidos y el ayuntamiento requiere urbanización previa a la edificación. La resolución exige no anunciarla como solar edificable inmediato, pedir informe de condición de solar y de las cargas de urbanización pendientes, presupuestar costes y plazos reales, y ajustar la valoración y el contrato a esa situación. Conclusión clave: la clasificación urbana es un dato de partida; la condición de solar y la licencia son pasos adicionales e independientes.

3. Local "convertible" (Ficha 28): el propietario quiere vender un local comercial como "futuro apartamento". La resolución exige verificar la compatibilidad de uso, las condiciones de habitabilidad exigibles, la normativa de la comunidad de propietarios y las obras necesarias; no publicitar el inmueble como "vivienda" hasta que exista un cambio de uso efectivo y título habilitante; y explicar costes, plazos y riesgos, derivando a técnico y ayuntamiento. Conclusión: el marketing responsable vende la realidad actual del inmueble y explica la potencialidad como condicionada, nunca como asegurada.

4. Chalet junto a costa (Ficha 29): un comprador extranjero quiere reformar y ampliar un chalet en primera línea de mar. La resolución exige comprobar el deslinde y las servidumbres de costas, revisar el planeamiento y la licencia existente junto con la protección patrimonial o ambiental aplicable, no comprometer un plazo de obra sin informes previos, e incorporar asesoramiento técnico especializado antes de firmar arras. Conclusión: la vista al mar puede aumentar el valor del inmueble, pero también incrementa notablemente la complejidad administrativa de cualquier intervención.`,
      easyExplanation:
        "Nunca hay que anunciar \"se puede ampliar\", \"es divisible\" o \"ideal para turismo\" como si fuera un hecho seguro: hay que decir siempre bajo qué condición es posible (informe, licencia, autorización) y explicarlo desde el principio del anuncio, no al final de la conversación. Los casos reales del sector demuestran que los problemas casi siempre vienen de vender una posibilidad como si fuera una certeza: una finca con \"posible ampliación\", un solar \"listo\" que en realidad no tiene todos los servicios, un local vendido ya como \"vivienda futura\", o un chalet junto al mar con obras comprometidas sin comprobar antes las servidumbres de costa.",
      balearExample:
        "En Pollença, un agente recibe el encargo de vender un chalet en primera línea de playa cuyo propietario quiere anunciar \"posibilidad de ampliar una planta con vistas al mar\". Siguiendo el caso 4 del módulo, el agente solicita primero el deslinde de costas y comprueba que el chalet está dentro de la servidumbre de protección; en el anuncio sustituye la frase original por \"ampliación sujeta a informe de Demarcación de Costas y a licencia municipal, pendiente de verificación\", y recomienda al vendedor no comprometer plazos de obra hasta disponer de esos informes.",
      keyConcepts: [
        "expresiones de riesgo en publicidad inmobiliaria",
        "alternativa prudente de comunicación",
        "título del promotor sobre el suelo",
        "garantía de cantidades anticipadas",
        "marketing responsable",
        "condición vs. certeza en la comercialización",
      ],
      frequentErrors: [
        "Anunciar 'se puede ampliar' o 'divisible' sin indicar la condición que lo hace posible",
        "Esconder la condición urbanística al final de la conversación o en letra pequeña",
        "Cobrar cantidades anticipadas de vivienda en promoción sin la garantía legal exigida",
        "Comprometer fecha de entrega u obra sin informes previos en zonas con afección de costas o patrimonio",
      ],
      examples: [
        {
          id: "m07-l6-ex1",
          title: "Reescribir un anuncio de riesgo",
          scenario: "Anuncio dice 'terreno edificable, ideal para turismo'.",
          application:
            "Sustituir por 'clasificación según planeamiento, uso sujeto a controles sectoriales, viabilidad pendiente de informe'.",
          isBalearContext: false,
        },
        {
          id: "m07-l6-ex2",
          title: "Caso solar urbano sin servicios",
          scenario: "Parcela urbana sin saneamiento ni aceras.",
          application:
            "Pedir informe de condición de solar antes de fijar precio de venta.",
          isBalearContext: false,
        },
        {
          id: "m07-l6-ex3",
          title: "Caso chalet en costa",
          scenario: "Comprador quiere ampliar chalet en primera línea.",
          application:
            "Comprobar deslinde y servidumbre de costas antes de comprometer obra.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m07-l7",
      moduleId: "m07",
      title:
        "Propiedad horizontal, valoración urbanística y actualización normativa continua",
      order: 7,
      summary:
        "El urbanismo no se memoriza de una vez: cambia con cada nuevo plan, ordenanza o resolución, y el agente debe saber qué preguntar, dónde consultar y cuándo detenerse.",
      content: `La Ficha 33 ("Propiedad horizontal y obras") recuerda que las obras que afectan a fachada, estructura, cubiertas o elementos comunes de un edificio en régimen de propiedad horizontal requieren revisar, además de la licencia municipal, el título constitutivo, los estatutos y los acuerdos de junta de la comunidad de propietarios. Es fundamental distinguir entre una obra realizada dentro del elemento privativo (vivienda o local) y una alteración de elemento común (fachada, estructura, cubierta, zonas comunes), porque el régimen de autorización exigido es distinto en cada caso. El agente nunca debe prometer cerramientos, terrazas o unidades exteriores adicionales sin comprobar la autorización comunitaria correspondiente, coordinando siempre comunidad, técnico y ayuntamiento. La regla clave: licencia municipal y acuerdo comunitario son controles independientes; uno no sustituye al otro.

## Valoración y urbanismo

La Ficha 35 conecta el bloque urbanístico con la valoración inmobiliaria (que se desarrollará con más detalle en el Módulo 8 del curso), identificando las variables urbanísticas que alimentan directamente el valor de un inmueble: un solar con cargas de urbanización pendientes tiene un valor probable menor por los costes y plazos que arrastra; un inmueble rústico protegido ve su uso y posibilidad de obra muy limitados; un régimen de fuera de ordenación implica restricciones y dificultades de financiación; y una segregación no autorizada genera riesgo de no inscribibilidad registral. El agente debe incorporar sistemáticamente estas variables al análisis de valor de cualquier inmueble, en lugar de limitarse a comparables de mercado sin depurar su situación urbanística real.

## El informe urbanístico para captación

La Ficha 36 propone una herramienta de trabajo práctica para el agente: una ficha de riesgos urbanísticos elaborada en el momento de la captación, que recoja el objeto (inmueble, referencia catastral, municipio y finalidad de la ficha), las fuentes consultadas (Registro, Catastro, visor cartográfico, planeamiento e informes disponibles), los riesgos detectados (aspectos pendientes de comprobación) y una recomendación final (condición de reserva, necesidad de informe técnico o de solicitud formal a la administración). Esta ficha bien elaborada permite comercializar con precisión sin sustituir a un dictamen técnico completo; el módulo advierte de forma expresa contra el uso de la frase "todo está legal" cuando no existe evidencia documental completa que la respalde.

## Actualización normativa y expediente vivo

La Ficha 37 cierra todo el módulo con la idea que vertebra la disciplina urbanística en su conjunto: el urbanismo cambia constantemente, a través de nuevos planes, ordenanzas, actos administrativos y criterios interpretativos de la administración. Un informe urbanístico válido hoy puede no resolver ya una operación futura si ha transcurrido tiempo suficiente. El agente debe versionar la documentación y las comunicaciones con el cliente, no reutilizar informes antiguos sin comprobar su vigencia actual, y explicar siempre los límites temporales de cualquier consulta realizada. La conclusión final del módulo resume el criterio profesional que debe guiar toda la actividad del agente en materia urbanística: la excelencia urbanística no consiste en memorizar todas las normas aplicables, sino en saber qué preguntar, dónde consultar y cuándo detenerse y derivar a un profesional especializado.`,
      easyExplanation:
        "Si un edificio tiene varios propietarios (régimen de comunidad), hacer obras en fachada o zonas comunes necesita el permiso del ayuntamiento Y el acuerdo de los vecinos: son dos controles distintos y ambos hacen falta. Cosas como que un solar tenga urbanización pendiente, que una finca esté protegida o que tenga un régimen especial (fuera de ordenación) hacen que valga menos dinero, y hay que tenerlo en cuenta al fijar el precio. Y como las normas urbanísticas cambian con el tiempo, un informe de hace dos años puede ya no servir: hay que comprobar siempre que la información esté actualizada antes de usarla en una operación nueva.",
      balearExample:
        "En Palma, un agente recupera un informe urbanístico que había solicitado hace 18 meses sobre un edificio del Casco Antiguo para retomar su comercialización. Antes de reutilizarlo, comprueba en el ayuntamiento si ha habido modificaciones del catálogo de protección o del planeamiento desde entonces; descubre que se ha aprobado una revisión del catálogo que endurece las condiciones de intervención en fachadas. En lugar de usar el informe antiguo, solicita uno actualizado y advierte al vendedor de que las condiciones de reforma han cambiado desde la última vez que se comercializó el inmueble.",
      keyConcepts: [
        "título constitutivo y estatutos de propiedad horizontal",
        "elemento privativo vs. elemento común",
        "variables urbanísticas de valoración",
        "informe urbanístico para captación",
        "vigencia temporal de un informe",
        "expediente vivo",
        "derivación a profesional especializado",
      ],
      frequentErrors: [
        "Prometer cerramientos o terrazas sin acuerdo comunitario, solo con licencia municipal",
        "Tratar licencia municipal y acuerdo de comunidad como controles equivalentes o sustitutivos",
        "No actualizar la valoración de un inmueble en función de su situación urbanística real",
        "Reutilizar un informe urbanístico antiguo sin comprobar su vigencia actual",
        "Afirmar 'todo está legal' sin evidencia documental completa",
      ],
      examples: [
        {
          id: "m07-l7-ex1",
          title: "Obra en elemento común",
          scenario:
            "Propietario quiere cerrar una terraza en un edificio en propiedad horizontal.",
          application:
            "Exigir acuerdo de junta además de licencia municipal.",
          isBalearContext: false,
        },
        {
          id: "m07-l7-ex2",
          title: "Valor condicionado por urbanismo",
          scenario: "Inmueble en fuera de ordenación.",
          application:
            "Ajustar la valoración reflejando las restricciones de financiación y obra.",
          isBalearContext: false,
        },
        {
          id: "m07-l7-ex3",
          title: "Informe caducado",
          scenario: "Informe urbanístico de hace más de un año.",
          application:
            "Solicitar actualización antes de reutilizarlo en una nueva operación.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m07-e1",
      moduleId: "m07",
      type: "case",
      question:
        "Un cliente quiere comprar una finca rústica en Llucmajor con vivienda, piscina y dos anexos, y el vendedor asegura que \"hay posibilidad de ampliar la casa\". ¿Qué pasos debe seguir el agente antes de aceptar el encargo de venta?",
      expectedAnswer:
        "Identificar cada construcción (vivienda, piscina, anexos) y contrastarla con Registro, Catastro, licencia y planeamiento vigente; solicitar informe técnico y municipal antes de repetir la promesa de ampliación; verificar categoría de protección territorial/ambiental, unidad mínima y accesos; explicar límites de agua y protección aplicable; condicionar cualquier reserva al resultado de la due diligence.",
      explanation:
        "Reproduce el método del Caso 1 (Ficha 26): la superficie visible no equivale a superficie legalizada ni a derecho de ampliación.",
      difficulty: "medium",
    },
    {
      id: "m07-e2",
      moduleId: "m07",
      type: "decision",
      question:
        "Un ayuntamiento certifica que una parcela está clasificada como suelo urbano, pero la calle donde se ubica carece de saneamiento y aceras completas. ¿Puede el agente anunciarla como \"solar edificable de inmediato\"?",
      options: [
        "Sí, porque la clasificación urbana ya garantiza la edificabilidad",
        "No, porque falta comprobar si tiene la condición de solar (servicios y urbanización completos)",
        "Sí, si el comprador acepta el riesgo verbalmente",
        "No, porque el suelo urbano nunca es edificable en Baleares",
      ],
      expectedAnswer:
        "Índice 1: No, porque falta comprobar la condición de solar.",
      explanation:
        "Clasificación urbana y condición de solar son conceptos distintos (Fichas 04 y 07); sin servicios completos no hay solar edificable inmediato.",
      difficulty: "basic",
    },
    {
      id: "m07-e3",
      moduleId: "m07",
      type: "calculation",
      question:
        "Una finca rústica de 3.000 m² quiere segregarse en dos parcelas de 1.500 m² cada una. El planeamiento municipal fija una unidad mínima de parcela rústica de 2.000 m². ¿Es viable la segregación tal como se plantea?",
      expectedAnswer:
        "No es viable: cada parcela resultante (1.500 m²) es inferior a la unidad mínima exigida (2.000 m²), por lo que la segregación en esos términos incumpliría la prohibición de parcelación.",
      explanation:
        "Aplica el criterio de la Ficha 21: la segregación no se presume posible por superficie total suficiente; depende de la unidad mínima exigida por parcela resultante.",
      difficulty: "medium",
    },
    {
      id: "m07-e4",
      moduleId: "m07",
      type: "comprehension",
      question:
        "Explica la diferencia entre un informe urbanístico municipal, un certificado municipal y una consulta a un visor cartográfico, indicando el valor jurídico de cada uno.",
      expectedAnswer:
        "El informe urbanístico es un pronunciamiento administrativo apropiado para operaciones complejas; el certificado municipal acredita formalmente una situación (uso, expedientes); la consulta a un visor tiene valor meramente orientativo y sirve solo para una primera detección de riesgos, no sustituye a los anteriores.",
      explanation: "Corresponde a la Ficha 22 ('Certificados e informes urbanísticos').",
      difficulty: "basic",
    },
    {
      id: "m07-e5",
      moduleId: "m07",
      type: "case",
      question:
        "Un propietario en Manacor quiere vender un local comercial anunciándolo como \"futuro apartamento con posibilidad de conversión inmediata\". Redacta la recomendación que el agente debe dar antes de aceptar este encargo.",
      expectedAnswer:
        "Verificar compatibilidad de uso residencial en el planeamiento y ordenanza aplicable; comprobar condiciones de habitabilidad exigibles y obras necesarias; revisar estatutos y normativa de la comunidad de propietarios; no publicitar como 'vivienda' hasta que exista cambio de uso efectivo con título habilitante; explicar costes, plazos y riesgos de la conversión; derivar a técnico y ayuntamiento antes de fijar precio de venta como vivienda.",
      explanation:
        "Reproduce el Caso 3 (Ficha 28): el marketing responsable vende la realidad actual, no la potencialidad como si fuera un hecho consumado.",
      difficulty: "advanced",
    },
    {
      id: "m07-e6",
      moduleId: "m07",
      type: "balear_scenario",
      question:
        "Un comprador extranjero quiere firmar arras para un chalet en primera línea de costa en Pollença, comprometiendo una fecha concreta de inicio de obras de ampliación. ¿Qué debe verificar el agente antes de aceptar ese compromiso de plazo?",
      expectedAnswer:
        "Comprobar el deslinde y las servidumbres de protección y tránsito de costas aplicables a la parcela; revisar el planeamiento y la licencia existente, así como cualquier protección patrimonial o ambiental; no comprometer un plazo de obra sin los informes previos de Demarcación de Costas y del ayuntamiento; incorporar asesoramiento técnico especializado a las arras.",
      explanation:
        "Reproduce el Caso 4 (Ficha 29): la proximidad al mar aumenta tanto el valor como la complejidad administrativa.",
      difficulty: "advanced",
    },
    {
      id: "m07-e7",
      moduleId: "m07",
      type: "comprehension",
      question:
        "Un edificio en propiedad horizontal en Palma quiere autorizar el cierre de una terraza de un vecino. El propietario ya tiene licencia municipal concedida. ¿Es esto suficiente para ejecutar la obra?",
      expectedAnswer:
        "No. La licencia municipal autoriza la obra desde el punto de vista urbanístico, pero si la terraza o el cerramiento afecta a un elemento común o a la fachada, se requiere además el acuerdo de la comunidad de propietarios conforme al título constitutivo y los estatutos. Licencia municipal y acuerdo comunitario son controles independientes.",
      explanation: "Corresponde a la Ficha 33 ('Propiedad horizontal y obras').",
      difficulty: "medium",
    },
    {
      id: "m07-e8",
      moduleId: "m07",
      type: "balear_scenario",
      question:
        "Redacta, en no más de 150 palabras, la ficha de riesgos urbanísticos para la captación de una vivienda rústica en Mallorca con piscina y construcciones no completamente aclaradas, sin usar la frase 'todo está legal'.",
      expectedAnswer:
        "Respuesta abierta que debe incluir: objeto (inmueble, referencia catastral, municipio, finalidad), fuentes consultadas (Registro, Catastro, visor, planeamiento, informes disponibles), riesgos detectados (construcciones pendientes de verificar, posible falta de licencia en anexos o piscina) y recomendación (condición de reserva sujeta a due diligence, solicitud de informe técnico o municipal antes de firmar arras).",
      explanation:
        "Reproduce el ejercicio de la Ficha 36 ('Informe urbanístico para captación').",
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m07-q1",
      question:
        "¿Qué establece el TRLSRU (RDL 7/2015) respecto al derecho de propiedad del suelo?",
      options: [
        "Que la propiedad incluye un derecho ilimitado a edificar",
        "Que el derecho de propiedad se ejerce dentro de los límites del ordenamiento urbanístico, que atribuye usos y aprovechamientos",
        "Que solo el Registro de la Propiedad determina lo que se puede construir",
        "Que la propiedad del suelo rústico no tiene ninguna limitación de uso",
      ],
      correctAnswerIndex: 1,
      explanation: "Recoge el estatuto de la propiedad del suelo (Ficha 03), base del TRLSRU.",
      sourceModuleId: "m07",
      legalReference: "TRLSRU, RDL 7/2015 (texto refundido de la Ley de Suelo y Rehabilitación Urbana).",
      difficulty: "basic",
    },
    {
      id: "m07-q2",
      question:
        "¿Cuál es el nivel normativo competente para fijar el régimen urbanístico sustantivo y la disciplina urbanística en las Illes Balears?",
      options: [
        "El TRLSRU estatal exclusivamente",
        "La Ley 12/2017 de Urbanismo de las Illes Balears (LUIB)",
        "El PTI de Mallorca exclusivamente",
        "El Catastro",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El mapa normativo (Ficha 02) sitúa a la Ley 12/2017 LUIB como norma autonómica de régimen urbanístico y disciplina.",
      sourceModuleId: "m07",
      legalReference: "Ley 12/2017, de Urbanismo de las Illes Balears.",
      difficulty: "basic",
    },
    {
      id: "m07-q3",
      question:
        "¿Qué instrumento define el modelo territorial insular al que debe adaptarse el planeamiento municipal en Mallorca?",
      options: [
        "El PGOU de cada municipio",
        "El PTI (Plan Territorial Insular) de Mallorca",
        "El TRLSRU",
        "La cédula de habitabilidad",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 02: nivel insular = PTI Mallorca = modelo territorial.",
      sourceModuleId: "m07",
      legalReference: "PTI de Mallorca (Plan Territorial Insular).",
      difficulty: "basic",
    },
    {
      id: "m07-q4",
      question:
        "Un terreno situado junto a una carretera con casas cercanas, ¿puede considerarse 'urbanizable' solo por esas características?",
      options: [
        "Sí, siempre que tenga acceso rodado",
        "No, la clasificación oficial del planeamiento es la única fuente válida, no el aspecto visual del entorno",
        "Sí, si el vendedor lo asegura por escrito",
        "No, porque en Baleares no existe suelo urbanizable",
      ],
      correctAnswerIndex: 1,
      explanation: "Recoge el error señalado expresamente en la Ficha 04.",
      sourceModuleId: "m07",
      legalReference: "Clasificación de suelo, TRLSRU y Ley 12/2017 LUIB.",
      difficulty: "basic",
    },
    {
      id: "m07-q5",
      question:
        "¿Qué diferencia existe entre la clasificación urbanística de una parcela y su condición de solar?",
      options: [
        "Son sinónimos jurídicos",
        "La clasificación es un dato de planeamiento; la condición de solar exige, además, urbanización y servicios completos",
        "La condición de solar depende únicamente del Catastro",
        "La clasificación urbanística caduca cada cinco años",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 07: 'parcela urbana' no siempre significa 'solar edificable hoy'.",
      sourceModuleId: "m07",
      legalReference: "Concepto de solar, normativa urbanística municipal y Ley 12/2017 LUIB.",
      difficulty: "medium",
    },
    {
      id: "m07-q6",
      question:
        "En un sector urbanizable pendiente de desarrollo, ¿qué debe comprobar el agente antes de valorar una parcela como 'lista para construir'?",
      options: [
        "Solo si el propietario tiene escritura",
        "Si se han completado los hitos de gestión: planificación de detalle, equidistribución de cargas y ejecución de la urbanización",
        "Si el precio de mercado es alto",
        "Nada, la clasificación urbanizable ya habilita a construir",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 06: un precio bajo puede reflejar precisamente que faltan servicios o condición de solar.",
      sourceModuleId: "m07",
      legalReference: "Gestión urbanística, Ley 12/2017 LUIB.",
      difficulty: "medium",
    },
    {
      id: "m07-q7",
      question:
        "¿Cuáles son los tres regímenes de control municipal de actos de edificación y uso que distingue el módulo?",
      options: [
        "Licencia, comunicación previa/declaración responsable y control final de primera ocupación",
        "Escritura, Registro y Catastro",
        "Informe, certificado y consulta de visor",
        "Deslinde, servidumbre y concesión",
      ],
      correctAnswerIndex: 0,
      explanation: "Ficha 08: cada acto exige el título habilitante que corresponda.",
      sourceModuleId: "m07",
      legalReference: "Régimen de licencias, Ley 12/2017 LUIB.",
      difficulty: "medium",
    },
    {
      id: "m07-q8",
      question:
        "¿Es suficiente que un inmueble esté catastrado para afirmar que es legal desde el punto de vista urbanístico?",
      options: [
        "Sí, el Catastro certifica la legalidad urbanística",
        "No, el Catastro describe la realidad física a efectos tributarios pero no legaliza la edificación",
        "Sí, si además paga el IBI puntualmente",
        "No, solo el Registro de la Propiedad certifica la legalidad urbanística",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 10: 'está en Catastro' no es respuesta suficiente a '¿es legal?'.",
      sourceModuleId: "m07",
      legalReference: "Situación legal de la edificación, TRLSRU y Ley 12/2017 LUIB.",
      difficulty: "basic",
    },
    {
      id: "m07-q9",
      question:
        "Ante una posible infracción urbanística que podría estar prescrita, ¿qué debe hacer el agente inmobiliario?",
      options: [
        "Aconsejar al cliente esperar a que prescriba",
        "Derivar la comprobación a un técnico o abogado especializado y documentarlo en arras y contrato",
        "Ignorar la incidencia si el precio de venta ya está fijado",
        "Certificar él mismo que la infracción ha prescrito",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 12: el agente no valida una prescripción urbanística, debe derivar y documentar.",
      sourceModuleId: "m07",
      legalReference: "Disciplina urbanística, Ley 12/2017 LUIB.",
      difficulty: "medium",
    },
    {
      id: "m07-q10",
      question:
        "¿Qué se debe hacer antes de prometer vivienda, ampliación o uso turístico en suelo rústico en Mallorca?",
      options: [
        "Nada, el suelo rústico siempre permite ampliaciones moderadas",
        "Disponer de un informe urbanístico previo que confirme la viabilidad según la categoría de protección aplicable",
        "Basta con el certificado catastral",
        "Basta con la opinión del propietario sobre el suelo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 13 (recuadro MALLORCA): la due diligence urbanística debe empezar antes de fijar precio de mercado.",
      sourceModuleId: "m07",
      legalReference: "Suelo rústico, Ley 12/2017 LUIB y PTI de Mallorca.",
      difficulty: "medium",
    },
    {
      id: "m07-q11",
      question:
        "¿Qué relación existe entre valor paisajístico y limitación urbanística en un espacio natural de Mallorca?",
      options: [
        "Son excluyentes: si hay valor paisajístico no puede haber limitación urbanística",
        "Pueden coexistir, y ambos datos deben figurar en el análisis del inmueble",
        "El valor paisajístico siempre anula la limitación urbanística",
        "La limitación urbanística solo aplica fuera de espacios naturales",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 14: valor paisajístico y limitación urbanística pueden coexistir.",
      sourceModuleId: "m07",
      legalReference: "Protección de espacios naturales, PTI de Mallorca y normativa ambiental balear.",
      difficulty: "medium",
    },
    {
      id: "m07-q12",
      question:
        "¿Qué franjas jurídicas condicionan el uso y las obras en fincas colindantes con el litoral balear?",
      options: [
        "Solo el Registro de la Propiedad",
        "El dominio público marítimo-terrestre y las servidumbres de protección y de tránsito",
        "Únicamente la normativa municipal de playas",
        "El Catastro de rústica",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 15: la costa está sometida a dominio público, servidumbres y régimen de protección.",
      sourceModuleId: "m07",
      legalReference:
        "Legislación de costas (remitida en el módulo al Módulo 1 del curso para su régimen jurídico general).",
      difficulty: "medium",
    },
    {
      id: "m07-q13",
      question:
        "Antes de comercializar un inmueble catalogado por su valor patrimonial, ¿qué debe solicitar el agente?",
      options: [
        "Solo el precio de mercado de inmuebles similares",
        "La ficha de catálogo, el nivel de protección concreto y sus condiciones",
        "El certificado de eficiencia energética únicamente",
        "Nada, la protección patrimonial no afecta a la comercialización",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 16: un edificio protegido se comercializa con historia y precisión, no con promesas de reforma ilimitada.",
      sourceModuleId: "m07",
      legalReference: "Protección del patrimonio histórico, normativa municipal, insular y autonómica balear.",
      difficulty: "medium",
    },
    {
      id: "m07-q14",
      question:
        "¿Qué distingue jurídicamente a un camino tradicional, una servidumbre de paso y una pista privada?",
      options: [
        "Nada, son sinónimos a efectos urbanísticos",
        "Son situaciones jurídicamente distintas que no deben confundirse en el análisis de acceso a una finca",
        "Solo importa si el camino está asfaltado",
        "Solo la anchura del camino determina su naturaleza jurídica",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 18: el acceso físico debe tener respaldo jurídico y sectorial, y estas tres figuras no son intercambiables.",
      sourceModuleId: "m07",
      legalReference: "Régimen de carreteras y caminos, Ley 12/2017 LUIB y normativa sectorial de carreteras.",
      difficulty: "advanced",
    },
    {
      id: "m07-q15",
      question:
        "¿Puede el agente usar 'Airbnb' como sinónimo de uso turístico permitido en la comercialización de una vivienda?",
      options: [
        "Sí, siempre que el propietario lo autorice verbalmente",
        "No, debe comprobar el título turístico y la zonificación aplicable antes de anunciarlo así",
        "Sí, porque el uso turístico está siempre permitido en Mallorca",
        "No, porque el alquiler turístico está prohibido en toda España",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 19: 'no uses Airbnb como sinónimo de uso permitido'.",
      sourceModuleId: "m07",
      legalReference: "Normativa turística balear y control urbanístico de usos.",
      difficulty: "medium",
    },
    {
      id: "m07-q16",
      question:
        "¿Qué expresión publicitaria es preferible a 'se puede ampliar' según el criterio del módulo?",
      options: [
        "'Ampliable sin restricciones'",
        "'Posibilidad sujeta a informe y licencia'",
        "'Segura ampliación garantizada'",
        "'Ampliación ya autorizada verbalmente'",
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 24: tabla de expresiones de riesgo y alternativas prudentes.",
      sourceModuleId: "m07",
      legalReference:
        "Buenas prácticas de comercialización responsable, en conexión con la normativa de protección de consumidores.",
      difficulty: "basic",
    },
    {
      id: "m07-q17",
      question:
        "En un edificio en propiedad horizontal, ¿qué controles se necesitan para cerrar una terraza o modificar la fachada?",
      options: [
        "Solo la licencia municipal",
        "Solo el acuerdo de la comunidad de propietarios",
        "Licencia municipal y acuerdo comunitario, como controles independientes",
        "Ninguno, si la terraza es de uso privativo",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Ficha 33: licencia municipal y acuerdo comunitario son controles distintos; uno no sustituye al otro.",
      sourceModuleId: "m07",
      legalReference: "Ley de Propiedad Horizontal y normativa urbanística municipal.",
      difficulty: "medium",
    },
    {
      id: "m07-q18",
      question:
        "¿Qué debe hacer el agente al reutilizar un informe urbanístico solicitado hace más de un año para una nueva operación?",
      options: [
        "Usarlo directamente, porque el urbanismo no cambia con frecuencia",
        "Comprobar su vigencia actual antes de reutilizarlo, dado que el planeamiento y los actos administrativos pueden haber cambiado",
        "Destruirlo y no informar al cliente",
        "Usarlo solo si el precio de venta no ha cambiado",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 37: un informe válido hoy puede no resolver una operación futura; hay que versionar y comprobar vigencia.",
      sourceModuleId: "m07",
      legalReference:
        "Principio de actualización normativa, Ley 12/2017 LUIB y planeamiento municipal vigente en cada momento.",
      difficulty: "medium",
    },
  ],
};

export const m07Glossary: GlossaryItem[] = [
  {
    id: "g-m07-condicion-de-solar",
    term: "Condición de solar",
    definition:
      "Situación de un terreno que cumple de forma acumulativa los requisitos de urbanización y acceso exigidos por la normativa aplicable (servicios urbanísticos completos, alineaciones, cesiones) para ser edificado de forma inmediata.",
    easyDefinition:
      "Un terreno 'de verdad listo para construir', con todos los servicios básicos ya instalados, no solo clasificado como urbano en el papel.",
    relatedModuleId: "m07",
  },
  {
    id: "g-m07-situacion-basica-del-suelo",
    term: "Situación básica del suelo (rural/urbanizado)",
    definition:
      "Categoría estatal que fija el TRLSRU para valorar el suelo, distinta de la clasificación urbanística autonómica y municipal (urbano, urbanizable, rústico).",
    easyDefinition:
      "Una forma de mirar el suelo, sobre todo para calcular su valor, que no es lo mismo que la etiqueta que le pone el ayuntamiento.",
    relatedModuleId: "m07",
  },
  {
    id: "g-m07-fuera-de-ordenacion",
    term: "Fuera de ordenación",
    definition:
      "Régimen aplicable a edificaciones legalmente existentes que han quedado disconformes con un planeamiento posterior, limitando las obras de ampliación, reforma o reconstrucción permitidas.",
    easyDefinition:
      "Una casa que se hizo bien en su momento, pero que hoy no cumple las reglas nuevas, por lo que tiene muchas limitaciones para reformarla o ampliarla.",
    relatedModuleId: "m07",
  },
  {
    id: "g-m07-equidistribucion-de-cargas-y-beneficios",
    term: "Equidistribución de cargas y beneficios",
    definition:
      "Principio de gestión urbanística por el cual los propietarios de un ámbito de actuación reparten proporcionalmente entre ellos los deberes (cesiones, costeamiento de urbanización) y los aprovechamientos que genera el desarrollo del sector.",
    easyDefinition:
      "Repartir de forma justa entre todos los dueños del terreno tanto lo que hay que pagar/ceder como lo que se gana al urbanizar la zona.",
    relatedModuleId: "m07",
  },
  {
    id: "g-m07-servidumbre-de-proteccion-costas",
    term: "Servidumbre de protección (costas)",
    definition:
      "Franja de terreno colindante con el dominio público marítimo-terrestre en la que la normativa de costas impone limitaciones de uso y edificación para proteger el litoral.",
    easyDefinition:
      "Una banda de terreno junto al mar donde no se puede construir o reformar libremente, aunque el terreno sea de propiedad privada.",
    relatedModuleId: "m07",
    balearContext:
      "En Mallorca esta franja condiciona directamente cualquier reforma o ampliación de chalets y fincas en primera línea de costa (Andratx, Pollença, Sóller).",
  },
  {
    id: "g-m07-prescripcion-urbanistica",
    term: "Prescripción urbanística",
    definition:
      "Plazo legal transcurrido el cual la administración pierde la facultad de exigir el restablecimiento de la legalidad urbanística respecto de una infracción, sujeto a excepciones y a un análisis técnico-jurídico caso por caso.",
    easyDefinition:
      "El 'tiempo límite' que tiene el ayuntamiento para actuar contra una obra ilegal; pasado ese tiempo, en general, ya no puede obligar a demolerla, pero determinarlo exige siempre asesoramiento experto, no una suposición del agente.",
    relatedModuleId: "m07",
  },
];

export const m07Alerts: string[] = [
  "El propio documento fecha su contenido como 'revisado con fuentes oficiales disponibles a 4 de julio de 2026' y advierte de forma expresa (Ficha 37, 'Actualización normativa y expediente vivo') de que el urbanismo cambia constantemente mediante nuevos planes, ordenanzas, actos administrativos y criterios interpretativos, por lo que un informe válido hoy puede no resolver una operación futura.",
  "El módulo exige comprobar siempre la vigencia actual del planeamiento municipal (PGOU/NNSS/ordenanzas) antes de reutilizar cualquier informe urbanístico o certificado, dado que estos instrumentos pueden ser objeto de modificación puntual o revisión general en cualquier momento.",
  "Se recomienda expresamente activar alertas de actualización normativa antes de cada hito material de una operación (anuncio, reserva, arras, escritura y proyecto), en lugar de confiar en la vigencia de un documento consultado en una fase anterior de la comercialización.",
  "Fuentes normativas citadas de forma expresa por el propio módulo como marco de referencia y control de actualización (Ficha 32): TRLSRU (RDL 7/2015), Ley 12/2017 LUIB, PTI de Mallorca y planeamiento/ordenanzas municipales, además de la normativa sectorial de costas, aguas y patrimonio. Se recomienda verificar en cada operación la versión vigente de cada una de estas normas en el momento de la consulta, dado que el propio módulo advierte de que ninguna de ellas debe darse por definitiva sin comprobación puntual.",
];
