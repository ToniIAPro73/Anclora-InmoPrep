import type { Module, GlossaryItem } from "@/lib/types";

export const m05Module: Module = {
  id: "m05",
  code: "M05",
  title: "Derecho Hipotecario",
  order: 5,
  description: "Registro de la Propiedad, notas simples, cargas, LCCI e hipotecas.",
  estimatedMinutes: 50,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m05-l1",
      moduleId: "m05",
      title: "El sistema registral español y sus fuentes",
      order: 1,
      summary:
        "El Registro de la Propiedad no crea la propiedad pero la hace segura, publicitable y financiable, y se apoya en un marco normativo concreto que el agente debe manejar con soltura.",
      content: `El Derecho Hipotecario protege las operaciones inmobiliarias antes de que lleguen al juzgado: el trabajo del agente es detectar incidencias antes de captar, reservar o escriturar. La cadena de estudio que debe seguirse siempre es: titular -> poder de disponer -> cargas -> descripción física y gráfica -> financiación -> condiciones de arras -> escritura -> presentación registral.

## Normas que hay que manejar

El temario identifica cuatro fuentes normativas clave para el agente inmobiliario. La **Ley Hipotecaria** regula el Registro, los asientos, la publicidad y la coordinación con la hipoteca, y su uso profesional es la lectura de nota simple y la resolución de incidencias. El **Reglamento Hipotecario** desarrolla técnicamente la Ley Hipotecaria y sirve de apoyo para documentos y práctica registral. La **Ley 5/2019 (LCCI)**, Ley de contratos de crédito inmobiliario, protege el crédito inmobiliario y se aplica en arras con financiación y en el acompañamiento del comprador. La **Ley de Enjuiciamiento Civil** regula la ejecución y las subastas, uso relevante en compras de inmuebles adjudicados o con riesgo ejecutivo.

## La función económica del Registro

El Registro de la Propiedad no sustituye al contrato, pero convierte la propiedad inmobiliaria en un derecho más seguro, publicitable y financiable. Sus funciones son: publicar titularidad y derechos reales sobre bienes inmuebles; permitir a un tercero conocer los derechos mediante publicidad formal; dar seguridad a quien adquiere y, si se cumplen los requisitos, protegerlo frente a defectos que no constaban; y permitir que las entidades financien sobre una garantía identificada y pública.

La clave de examen que marca el documento es que el Registro no "crea" normalmente la propiedad, pero si puede hacer que un adquirente inscrito de buena fe quede protegido frente a defectos que no constaban en él. Esta distinción — presunción de exactitud (artículo 38 LH) frente a protección del tercero de buena fe (artículo 34 LH) — es transversal a todo el módulo y debe explicarse al cliente sin generar falsa seguridad: no se debe decir "el Registro garantiza que todo está perfecto", sino "el Registro ofrece una presunción y publica las cargas inscritas; además verificaremos la realidad física, urbanística, posesoria y comunitaria".`,
      easyExplanation:
        "El Registro de la Propiedad es como un archivo público donde consta quién es dueño de cada finca y qué deudas o cargas pesan sobre ella. No inventa la propiedad, pero si compras confiando en lo que dice el Registro y cumples ciertos requisitos, la ley te protege aunque luego aparezca algo raro que no estaba anotado. El agente no debe prometer al cliente que \"está todo perfecto\" solo porque hay una nota simple limpia.",
      balearExample:
        "Un comprador de Palma quiere adquirir un piso en Santa Catalina. El agente pide la nota simple, comprueba el titular registral, revisa cargas vigentes y explica al cliente que la nota informa pero no sustituye la verificación física y urbanística de la vivienda antes de firmar arras.",
      keyConcepts: [
        "Registro de la Propiedad",
        "Ley Hipotecaria",
        "Reglamento Hipotecario",
        "Ley 5/2019 LCCI",
        "Ley de Enjuiciamiento Civil",
        "publicidad formal",
        "presunción de exactitud",
        "tercero de buena fe"
      ],
      frequentErrors: [
        "Decir al cliente que \"el Registro garantiza que todo está perfecto\" en vez de explicar que ofrece una presunción.",
        "Confundir la función del Registro (publicidad y seguridad jurídica) con la del Catastro (descripción física).",
        "No comprobar la realidad física, urbanística, posesoria y comunitaria además de la nota simple.",
        "Saltarse pasos de la cadena de estudio (titular -> cargas -> descripción -> financiación -> arras -> escritura -> presentación)."
      ],
      examples: [
        {
          id: "m05-l1-ex-a",
          title: "Lectura de nota simple en captación",
          scenario: "Agente recibe encargo de venta en Palma.",
          application:
            "Solicita nota simple antes de fijar condiciones de venta y detecta un embargo no comunicado por el propietario.",
          isBalearContext: true
        },
        {
          id: "m05-l1-ex-b",
          title: "Explicación al cliente comprador",
          scenario: "Cliente pregunta si \"estando inscrito ya no hay riesgo\".",
          application:
            "El agente explica la diferencia entre presunción de exactitud y protección del tercero de buena fe, evitando lenguaje absoluto.",
          isBalearContext: false
        },
        {
          id: "m05-l1-ex-c",
          title: "Uso de LCCI en arras con financiación",
          scenario: "Compraventa con hipoteca pendiente de concesión.",
          application:
            "El agente identifica que debe coordinar la Ley 5/2019 en el calendario de arras y escritura.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m05-l2",
      moduleId: "m05",
      title: "Registro, Catastro y realidad física — la finca registral",
      order: 2,
      summary:
        "Una operación inmobiliaria segura exige contrastar tres planos distintos — Registro, Catastro y realidad física — porque ninguno garantiza por sí solo la coincidencia con los otros dos.",
      content: `Son tres fuentes distintas, cada una con su función y sus límites: el **Registro** responde sobre titularidad, cargas y derechos inscritos, pero no garantiza que la superficie y linderos físicos sean exactos; el **Catastro** aporta descripción gráfica, superficie, uso y valor catastral, pero no garantiza que el titular catastral sea el propietario civil o registral; y la **realidad física** dice qué existe y cómo se usa de hecho, pero no garantiza que la construcción o el uso sean legales. Una operación segura solo existe cuando se contrastan las tres, nunca cuando se elige el documento que mejor encaja con el relato del vendedor.

## Qué hacer ante una discrepancia

El protocolo recomendado es: no publicitar una superficie como definitiva hasta identificar de qué fuente procede (Registro, Catastro, medición o escritura); pedir certificación catastral descriptiva y gráfica y una nota simple actualizada con CRU; y si la diferencia puede afectar a financiación, linderos, licencia o precio, derivar a un técnico y a la notaría antes de firmar arras. En Mallorca, en suelo rústico son frecuentes los desajustes entre cierre material, catastro y finca registral: nunca deben venderse "hectáreas" ni prometerse segregaciones sin comprobación urbanística previa.

## La finca registral y el folio real

La finca registral es la unidad del Registro y puede coincidir con una parcela catastral, con varias, o con una parte de ellas; nunca debe presumirse la coincidencia. Los conceptos esenciales son: la finca registral (unidad a la que se abre hoja propia en el Registro), el folio real (hoja o historial de esa finca, hoy en soporte electrónico), el número de finca y el CRU (Código Registral Único, identificadores que deben pedirse siempre) y la participación indivisa con uso exclusivo (que no es lo mismo que una plaza registral independiente). Desde la reforma registral de 2023, en vigor en este punto desde mayo de 2024, el Registro se lleva por fincas abriendo un folio real electrónico; la competencia sigue vinculada al Registro y demarcación que corresponda a la ubicación de la finca. El CRU reduce errores de identificación, especialmente en edificios con plazas, trasteros o anexos con varias referencias, y debe usarse en solicitudes y documentos de trabajo.`,
      easyExplanation:
        "Piensa en el Registro, el Catastro y la realidad como tres fotografías distintas de la misma finca: una dice quién es el dueño y qué deudas tiene, otra dice cuánto mide sobre el plano fiscal, y la tercera es lo que ves al pisar el terreno. Las tres deberían coincidir, pero a veces no lo hacen, y el agente tiene que comprobarlo antes de vender \"hectáreas\" o metros que nadie ha medido de verdad.",
      balearExample:
        "En una finca rústica de Llucmajor, el Catastro indica 15.000 m², el Registro no especifica cabida exacta y el cierre físico con muro de piedra seca ocupa solo 12.500 m². El agente exige informe topográfico y certificación catastral antes de fijar precio por metro, evitando publicitar la superficie catastral como definitiva.",
      keyConcepts: [
        "finca registral",
        "folio real",
        "CRU (Código Registral Único)",
        "Catastro",
        "certificación catastral descriptiva y gráfica",
        "nota simple actualizada",
        "reforma registral 2023",
        "suelo rústico mallorquín"
      ],
      frequentErrors: [
        "Presumir que la finca registral coincide exactamente con la parcela catastral.",
        "Publicitar una superficie como definitiva sin identificar su fuente (Registro, Catastro, medición o escritura).",
        "Vender \"hectáreas\" en rústico sin comprobación urbanística ni informe técnico.",
        "No pedir el CRU en edificios con plazas, trasteros o anexos que generan confusión de referencias."
      ],
      examples: [
        {
          id: "m05-l2-ex-a",
          title: "Discrepancia de superficie en Alcúdia",
          scenario: "Nota simple sin cabida expresa y catastro con superficie distinta a la medición del comprador.",
          application: "El agente pide informe topográfico antes de fijar el precio por metro cuadrado.",
          isBalearContext: true
        },
        {
          id: "m05-l2-ex-b",
          title: "Identificación de finca en edificio con trasteros",
          scenario: "Comprador confunde plaza de garaje con finca registral independiente.",
          application: "El agente solicita el CRU de cada elemento privativo antes de redactar el contrato de arras.",
          isBalearContext: false
        },
        {
          id: "m05-l2-ex-c",
          title: "Uso agrícola no coincidente",
          scenario: "Terreno catastrado como rústico pero con construcción no declarada.",
          application: "El agente deriva a técnico antes de admitir el encargo de venta.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m05-l3",
      moduleId: "m05",
      title: "Principios registrales — rogación, prioridad, tracto sucesivo y legitimación",
      order: 3,
      summary:
        "El Registro solo actúa a instancia de parte, respeta un orden estricto de prioridad temporal y exige que la cadena de titularidad esté completa antes de inscribir cualquier transmisión.",
      content: `El Registro no actúa por iniciativa propia. El procedimiento registral se inicia a instancia de parte mediante la presentación del título (principio de **rogación**); como agente, normalmente no se presenta la escritura, pero debe comprobarse que notaría, gestoría o cliente lo hagan y que se conserve el justificante. La **prioridad** sigue la regla *prior tempore, potior iure*: quien presenta primero un título compatible gana prioridad, no quien firmó antes un documento privado. La prioridad nace con el asiento de presentación en el Libro Diario, y un contrato privado de fecha anterior no desplaza automáticamente una escritura presentada e inscrita por un tercero protegido. En operaciones sensibles — herencias, poderes, opciones, embargos o riesgo de doble venta — la regla operativa es exigir presentación telemática inmediata o confirmación de la notaría, para evitar huecos entre firma, presentación y comprobación posterior.

## Tracto sucesivo, legalidad y especialidad

Una cadena registral rota detiene la operación: el Registro solo inscribe si el título encaja con el historial de la finca y cumple los requisitos legales. Para inscribir una transmisión, quien transmite debe figurar como titular registral o debe quedar acreditada la cadena que conecta al transmitente con el titular; la herencia no inscrita es el ejemplo típico de tracto roto. El registrador, en su calificación registral, examina formas, capacidad de otorgantes, validez del acto y obstáculos que resulten del Registro; el plazo ordinario de calificación es de 15 días hábiles, sin perjuicio de incidencias y suspensión. Ante una nota negativa, las vías son subsanar, solicitar calificación sustitutoria cuando proceda, recurrir o acudir a la vía judicial. El principio de especialidad exige que finca, derecho, titular y carga queden perfectamente determinados. En arras, si el vendedor no coincide con el titular registral, el agente no debe aceptar un simple "lo arreglamos después": debe definirse antes la ruta, los documentos y el plazo necesarios.

## Legitimación e inoponibilidad

El Registro presume que el derecho inscrito existe y pertenece a su titular (legitimación), pero esa presunción no es absoluta: es un punto de partida para notaría, comprador y financiación, no una garantía cerrada. Lo no inscrito no perjudica al tercero en los términos legales (inoponibilidad): un derecho privado no publicado puede perder eficacia frente a una adquisición protegida. La legitimación del artículo 38 de la Ley Hipotecaria es una presunción *iuris tantum*: admite prueba en contrario, y una nota simple exige lectura crítica, no confianza ciega.`,
      easyExplanation:
        "El Registro solo hace algo si alguien se lo pide (rogación), y quien presenta primero su papel gana, aunque otro haya firmado antes en privado (prioridad). Además, para inscribir una venta, el vendedor tiene que ser realmente quien figura como dueño en el Registro, o demostrar cómo llegó a serlo (tracto sucesivo) — por ejemplo, si heredó la casa pero nunca lo inscribió, hay un eslabón roto que hay que arreglar antes de vender.",
      balearExample:
        "En Inca, tres hermanos quieren vender una vivienda que sigue a nombre de su madre fallecida, sin inscribir la herencia. El agente detecta el tracto roto y exige que se inscriba la herencia antes o en paralelo a la firma, coordinando plazos con notaría para no comprometer una escritura sin la cadena de titularidad resuelta.",
      keyConcepts: [
        "rogación",
        "prioridad registral",
        "prior tempore potior iure",
        "asiento de presentación",
        "tracto sucesivo",
        "calificación registral",
        "principio de especialidad",
        "legitimación (artículo 38 LH)",
        "inoponibilidad"
      ],
      frequentErrors: [
        "Aceptar un \"lo arreglamos después\" cuando el vendedor no coincide con el titular registral.",
        "Confiar en un documento privado de fecha anterior como si desplazara automáticamente una inscripción posterior.",
        "No comprobar que la escritura se presente telemáticamente en operaciones sensibles (herencias, embargos, poderes).",
        "Tratar la legitimación registral como una garantía absoluta en vez de una presunción que admite prueba en contrario."
      ],
      examples: [
        {
          id: "m05-l3-ex-a",
          title: "Herencia sin inscribir en Sóller",
          scenario: "Vendedores herederos sin inscripción previa.",
          application: "El agente exige regularización del tracto antes de fijar fecha de escritura.",
          isBalearContext: true
        },
        {
          id: "m05-l3-ex-b",
          title: "Doble presentación de títulos",
          scenario: "Documento privado de compra de hace un año frente a escritura pública reciente de otro comprador.",
          application: "El agente explica que prevalece quien inscribió primero, no quien firmó antes.",
          isBalearContext: false
        },
        {
          id: "m05-l3-ex-c",
          title: "Nota negativa del registrador",
          scenario: "Falta de capacidad acreditada de un otorgante.",
          application: "El agente coordina la subsanación documental dentro del plazo de calificación de 15 días hábiles.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m05-l4",
      moduleId: "m05",
      title: "Publicidad registral, asientos y modificaciones de fincas",
      order: 4,
      summary:
        "Cada tipo de asiento registral (presentación, inscripción, anotación preventiva, nota marginal, cancelación) tiene una función y un plazo distintos que el agente debe saber leer en la nota simple.",
      content: `En la nota simple los asientos no pesan igual, e identificar su naturaleza permite valorar qué bloquea, qué caduca y qué necesita actuación. La **presentación** reserva prioridad al título presentado, con vigencia ordinaria de 60 días hábiles. La **inscripción** es el asiento definitivo de dominio o derecho real y permanece hasta su cancelación o rectificación. La **anotación preventiva** ofrece protección provisional (embargo, demanda, derecho hereditario) y tiene una vigencia frecuente de 4 años, con reglas de prórroga. La **nota marginal** publica un hecho secundario o coordina información, y su alcance depende de su causa. La **cancelación** elimina o extingue formalmente un asiento y debe tener título o causa legal suficiente. La lectura profesional no se conforma con la palabra "cargas": hay que leer el tipo de asiento, la fecha, el importe, el acreedor, la vigencia, la posible caducidad y si se acompaña de notas posteriores.

## Embargos, demandas y otras anotaciones

Un embargo no siempre impide vender; sí condiciona de forma decisiva el precio, la financiación y la escritura. Ante una anotación de embargo hay que verificar que la finca puede transmitirse pero el comprador no debe asumirla sin comprender la ejecución y el rango de cargas; pedir origen, organismo, importe actualizado, fecha, titular afectado y si existe prórroga; y si se cancela con cargo al precio, dejar la mecánica reflejada en arras y coordinada con notaría. La caducidad registral no es una opinión: debe verificarse con la fecha, el asiento y las posibles prórrogas. Una anotación de demanda advierte de un litigio que puede afectar a la titularidad o al derecho transmitido; el comprador posterior difícilmente podrá alegar buena fe respecto del litigio anotado. Una finca con demanda o embargo no es necesariamente invendible, pero no es "libre de cargas" hasta que la documentación y la escritura solucionen el riesgo.

## Publicidad formal y modificaciones de entidades hipotecarias

La nota simple informa; la certificación registral acredita con valor fehaciente — ambos documentos sirven, pero para decisiones distintas. La nota simple se usa en captación, reservas, arras y comprobación de cargas y titulares; la certificación registral (fehaciente, expedida por registrador) se usa en procedimientos, subastas y casos de mayor riesgo; la información registral continuada es la comunicación notarial con el Registro y sirve para escritura y control de cambios entre consulta y firma. Debe pedirse nota simple al inicio del encargo, actualizarla antes de arras y volver a comprobarla próxima a escritura, guardando en el expediente versión consultada, fecha, CRU y decisión adoptada. Agrupar, agregar, segregar y dividir cambian la configuración registral: ninguna operación debe presentarse al cliente como un mero trámite si afecta a suelo o edificabilidad. La agrupación origina una finca nueva a partir de varias (hipotecas y cargas deben distribuirse o consentirse); la agregación incorpora una finca a otra principal; la segregación separa una porción y la matriz subsiste (exige control urbanístico y representación gráfica); y la división hace desaparecer la finca matriz y nacen varias. En Mallorca, las segregaciones y divisiones exigen comprobar licencia, declaración de innecesariedad o título habilitante aplicable, y además revisar el régimen de suelo rústico, planeamiento municipal, Plan Territorial Insular y unidades mínimas de cultivo cuando proceda: nunca debe comercializarse una porción de terreno como "parcela independiente" solo porque esté vallada, tenga acceso o figure en un croquis.`,
      easyExplanation:
        "En una nota simple no todo lo que aparece pesa igual: una presentación es solo una reserva temporal, una inscripción es un asiento definitivo, una anotación preventiva (como un embargo) puede caducar con el tiempo, y una cancelación borra algo del historial. Un embargo no siempre impide vender la casa, pero sí obliga a explicar bien cómo se va a resolver antes de firmar. Y dividir o segregar un terreno no es un simple papeleo: hay que comprobar que tiene licencia y cumple las normas urbanísticas.",
      balearExample:
        "En Capdepera, un vendedor quiere segregar una parcela de su finca rústica para vender solo una parte. El agente exige la licencia municipal o la declaración de innecesariedad y comprueba las unidades mínimas de cultivo del Plan Territorial Insular antes de anunciar la parcela como \"independiente\".",
      keyConcepts: [
        "presentación",
        "inscripción",
        "anotación preventiva",
        "nota marginal",
        "cancelación",
        "certificación registral",
        "agrupación/agregación/segregación/división",
        "unidades mínimas de cultivo"
      ],
      frequentErrors: [
        "Leer solo la palabra \"cargas\" en la nota simple sin distinguir el tipo de asiento ni su vigencia.",
        "Asumir que una anotación de embargo o demanda caducada automáticamente deja de tener efecto sin comprobar fecha y prórrogas.",
        "Presentar una segregación o división como \"mero trámite\" sin control urbanístico.",
        "Anunciar una porción de terreno como \"parcela independiente\" sin título habilitante ni viabilidad comprobada."
      ],
      examples: [
        {
          id: "m05-l4-ex-a",
          title: "Embargo en piso de Manacor",
          scenario: "Nota simple con anotación de embargo de hace tres años sin nota de prórroga.",
          application: "El agente comprueba fecha exacta, posibles prórrogas y asientos posteriores antes de admitir la venta.",
          isBalearContext: true
        },
        {
          id: "m05-l4-ex-b",
          title: "Segregación en suelo rústico de Artà",
          scenario: "Propietario quiere vender media finca.",
          application: "El agente exige licencia de segregación y comprobación del Plan Territorial Insular antes de captar.",
          isBalearContext: true
        },
        {
          id: "m05-l4-ex-c",
          title: "Actualización de nota simple antes de escritura",
          scenario: "Han pasado dos meses desde la captación hasta la firma.",
          application: "El agente vuelve a pedir nota simple próxima a la escritura para detectar cambios no visibles en la primera consulta.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m05-l5",
      moduleId: "m05",
      title: "Inmatriculación, coordinación gráfica y due diligence en suelo rústico",
      order: 5,
      summary:
        "El primer acceso de una finca al Registro y la coordinación con el Catastro exigen procedimientos específicos, y en el suelo rústico mallorquín la diligencia debe ir mucho más allá de la nota simple.",
      content: `Una finca sin inmatricular no es automáticamente invendible, pero necesita más tiempo, pruebas y prudencia; en suelo rústico mallorquín es una incidencia recurrente. Las vías relevantes para el primer acceso al Registro son: el expediente notarial de dominio del artículo 203 LH (procedimiento de dominio con citaciones y publicidad, que exige controlar tiempo, colindantes y prueba de titularidad); el doble título del artículo 205 LH (dos títulos públicos con adquisición previa en la cadena, que exige verificar el intervalo legal y la coincidencia catastral); y vías administrativas o judiciales para supuestos tasados que requieren analizar el título habilitante específico. Un punto que debe memorizarse: la inmatriculación puede activar una limitación temporal de dos años de la fe pública registral en los supuestos del artículo 207 LH; esto no debe confundirse con la derogación del antiguo artículo 28 LH sobre ciertas herencias (la supresión del antiguo artículo 28 LH afecta a determinadas herencias, y no debe confundirse con el plazo protector de dos años que sigue existiendo para ciertas inmatriculaciones del artículo 207). En una captación no debe comprometerse escritura inmediata cuando la finca necesita primer acceso registral: la duración depende de documentación, notaría, colindantes y Registro.

## Coordinación Registro-Catastro y georreferenciación

La coordinación no es un detalle técnico: reduce conflictos sobre cabida y linderos, facilita financiación y puede ser imprescindible en operaciones de modificación física. La representación gráfica georreferenciada se exige en diversos supuestos de inmatriculación, segregación, división, agrupación, reparcelación y declaración de obra cuando corresponda; puede incorporarse voluntariamente a una finca inscrita mediante los procedimientos registrales aplicables. La certificación catastral descriptiva y gráfica es una vía frecuente, pero una representación alternativa puede ser necesaria si el Catastro no refleja la realidad; la inscripción gráfica puede generar notificaciones a colindantes y suspenderse si el registrador aprecia dudas de identidad. La pregunta clave que el agente debe hacerse ante cualquier discrepancia es si la diferencia es solo numérica o si cambia el perímetro: si cambian linderos, accesos, edificaciones o afecta a un colindante, no debe tratarse como un simple "ajuste de metros".

## Cabida, linderos, exceso de superficie y due diligence en rústico

Una rectificación de superficie no sirve para legalizar una parcelación, encubrir una invasión o incorporar una finca distinta: la identidad de la finca es el límite. La ruta de análisis recomendada es: contrastar Registro, Catastro, escritura, visita y, cuando sea necesario, informe topográfico; determinar si la diferencia es inferior y compatible con la identidad de la finca o si requiere un procedimiento con mayor intervención; revisar si existe oposición de colindantes, solapamiento gráfico o riesgo de dominio público; y si hay construcciones, separar cabida del suelo, antigüedad, obra nueva y disciplina urbanística. Tasación, banco y comprador pueden utilizar superficies diferentes: no debe resolverse la diferencia "promediando" metros, sino documentando qué fuente se usa y qué procedimiento queda pendiente. El problema puede ser especialmente crítico en suelo rústico, donde una alteración de cabida puede abrir dudas sobre parcelación, segregación o edificabilidad.

La finca rústica exige más que una nota simple. El checklist ampliado de due diligence registral en rústico mallorquín incluye: CRU, descripción registral, cargas, servidumbres, alodios y notas marginales; catastro, ortofoto, delimitación gráfica, caminos, agua, pozos, derechos de paso y cerramientos; clasificación y categoría de suelo, planeamiento municipal e instrumentos insulares; existencia de edificaciones (licencia, antigüedad, obra nueva, cédula, AFO si procede y uso real); y limitaciones de costas, carreteras, patrimonio, zonas protegidas o dominio público hidráulico, además de ocupación, arrendamientos rústicos, aparcería y derechos de terceros. La disciplina exigida es no asumir que "tiene escritura" equivale a "la casa está legalizada", ni que "tiene luz" equivale a "el uso es autorizable".`,
      easyExplanation:
        "Cuando una finca nunca ha estado inscrita en el Registro (frecuente en fincas rústicas de Mallorca), inscribirla por primera vez lleva un procedimiento específico, con plazos y protecciones especiales durante los dos primeros años. Además, hay que comprobar que lo que dice el Catastro coincide con la finca real, y en el campo hay que revisar mucho más que la nota simple: si la casa tiene licencia, si el terreno es realmente edificable, si hay caminos o derechos de paso, y si existen limitaciones por estar cerca de la costa o de zonas protegidas.",
      balearExample:
        "En una possessió de Felanitx nunca inmatriculada, el comprador quiere firmar en dos semanas. El agente explica que la inmatriculación por doble título del artículo 205 LH requiere comprobar el intervalo legal entre adquisiciones y la coincidencia catastral, y que no puede comprometerse una fecha de escritura sin resolver antes ese trámite.",
      keyConcepts: [
        "inmatriculación",
        "expediente notarial de dominio (art. 203 LH)",
        "doble título (art. 205 LH)",
        "limitación de fe pública de dos años (art. 207 LH)",
        "representación gráfica georreferenciada",
        "coordinación Registro-Catastro",
        "AFO (Autorización de Funcionamiento en Obra)",
        "due diligence en suelo rústico"
      ],
      frequentErrors: [
        "Confundir la derogación del antiguo artículo 28 LH sobre herencias con el plazo protector de dos años del artículo 207 LH.",
        "Comprometer fecha de escritura inmediata en fincas que necesitan primer acceso registral.",
        "Resolver una discrepancia de cabida \"promediando\" metros sin documentar la fuente.",
        "Asumir que tener escritura o suministro de luz equivale a que la vivienda esté legalizada o el uso sea autorizable."
      ],
      examples: [
        {
          id: "m05-l5-ex-a",
          title: "Inmatriculación por doble título en Felanitx",
          scenario: "Finca rústica nunca inscrita con dos escrituras de compra sucesivas.",
          application: "El agente verifica el intervalo legal y la coincidencia catastral antes de fijar plazo de escritura.",
          isBalearContext: true
        },
        {
          id: "m05-l5-ex-b",
          title: "Coordinación gráfica en Deià",
          scenario: "Segregación de una parcela con dudas de linderos con el colindante.",
          application: "El agente anticipa que el registrador puede suspender la inscripción gráfica y notificar al colindante.",
          isBalearContext: true
        },
        {
          id: "m05-l5-ex-c",
          title: "Due diligence de possessió en Sant Llorenç",
          scenario: "Casa rústica con ampliación no declarada.",
          application: "El agente revisa licencia, antigüedad, AFO y clasificación de suelo antes de admitir la captación.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m05-l6",
      moduleId: "m05",
      title: "La hipoteca inmobiliaria — concepto, sujetos, clases y responsabilidad",
      order: 6,
      summary:
        "La hipoteca es un derecho real de garantía con caracteres propios que persigue la finca frente a quien la adquiera, y distinguir sus figuras, clases y límites de responsabilidad es esencial para no comprometer una compraventa.",
      content: `La hipoteca es un derecho real de garantía: afecta a la finca al cumplimiento de una obligación y sigue a la finca frente a quien la adquiera, salvo las reglas y rangos aplicables. Sus cinco caracteres son: **accesoria** (depende de una obligación principal); **constitutiva** (requiere escritura pública e inscripción para nacer como hipoteca); **indivisible** (la finca responde íntegramente mientras la hipoteca no se cancele, aunque se reduzca la deuda); **sin desplazamiento posesorio** (el deudor conserva uso y posesión); y **reipersecutoria** (la carga acompaña a la finca frente a terceros adquirentes). Una hipoteca pendiente no impide vender; la operación debe decidir entre cancelación con cargo al precio, subrogación del comprador si el banco consiente, o financiación nueva con cancelación de la anterior.

## Sujetos y objeto de la hipoteca

La hipoteca puede afectar a personas que no son deudores y a compradores que no asumen la deuda; identificarlos cambia por completo la negociación. El **acreedor hipotecario** tiene la garantía y el derecho de cobro y emite certificado de deuda y carta de pago; el **deudor** debe pagar el préstamo y responde en los términos del contrato y la ley; el **hipotecante no deudor** grava su finca por deuda ajena y responde con la finca, no necesariamente con toda su deuda personal; y el **tercer poseedor** compra una finca hipotecada, y la finca sigue afectada aunque no asuma el préstamo. Pueden hipotecarse inmuebles y derechos reales inmobiliarios enajenables; la extensión objetiva de la hipoteca y las mejoras deben analizarse conforme al título y a la Ley Hipotecaria, especialmente en promociones, obras en curso y ventas por unidades. La pregunta clave para la venta es si el comprador quiere asumir la deuda o solo compra una finca sobre la que se cancelará la hipoteca: nunca deben usarse ambos términos como si fueran equivalentes.

## Responsabilidad hipotecaria y deuda personal

La escritura distribuye cifras máximas de responsabilidad sobre la finca; eso no limita necesariamente la deuda personal del prestatario. El capital refleja el principal garantizado (base de la deuda y del rango); los intereses ordinarios reflejan el máximo garantizado frente a terceros (no equivale siempre a intereses devengados); los intereses de demora reflejan parte de la responsabilidad hipotecaria (con límites legales en la LCCI); y las costas y gastos reflejan un tope garantizado que afecta a la responsabilidad total de la finca. La distinción que debe recordarse: la responsabilidad hipotecaria es el límite publicado de afección de la finca frente a terceros; la deuda personal se rige por la obligación y, como regla, el deudor responde con todos sus bienes presentes y futuros, salvo pacto legalmente válido de limitación. Cuando una finca matriz se divide en viviendas, la distribución de responsabilidad hipotecaria es esencial para liberar unidades a medida que se venden.

## Clases de hipoteca útiles en la práctica

No hay que memorizar etiquetas; hay que identificar qué obligación garantizan, cómo se cancelan y si permiten vender sin dejar al comprador atrapado en la carga. La hipoteca **ordinaria** garantiza deuda existente y determinada; hay que comprobar saldo y responsabilidad. La hipoteca **de máximo** garantiza obligaciones hasta un límite; el saldo puede deducirse solo de la nota simple. La hipoteca **inversa** es financiación para mayores de 65 años o dependientes y requiere asesoramiento especializado, afectando a herederos. El **precio aplazado** es cuando el vendedor financia parte del precio, comparándose con condición resolutoria y garantías. La **subrogación/novación** cambia acreedor o condiciones, y exige analizar coste total, plazo y consentimiento bancario. Una nota simple no sustituye al certificado de deuda de la entidad: el saldo vivo, las comisiones y las condiciones se acreditan con documentación bancaria actual.

## Compraventa con hipoteca pendiente

La solución habitual no es "el comprador se queda con la hipoteca". Normalmente el vendedor la cancela con cargo al precio, y el comprador financia su parte con un préstamo nuevo. Las estructuras posibles son: cancelación económica y registral (el precio cubre la deuda, el banco emite carta de pago, se otorga escritura de cancelación y se inscribe); subrogación de deudor (el banco debe consentir que el comprador sustituya al vendedor como deudor); hipoteca nueva (el nuevo banco financia al comprador y se coordina con la cancelación del préstamo del vendedor); y retención o provisión (se reserva importe para gestoría, notaría, Registro e impuestos de la cancelación si procede). Los documentos previos a escritura imprescindibles son: certificado de deuda para fecha de firma, instrucciones de pago, situación de comisiones, carta de pago o compromiso de emisión, y estimación de gastos de cancelación; sin estos documentos, el agente no debe cerrar cifras definitivas. La cláusula de arras debe identificar la hipoteca y dejar claro quién asume el coste, cómo se cancela y qué ocurre si el certificado de deuda revela un saldo inesperado.`,
      easyExplanation:
        "La hipoteca es una garantía sobre la finca, no sobre la persona: si el propietario no paga, el banco puede ir contra la casa aunque esté en manos de otro dueño. Vender una casa con hipoteca pendiente es normal y tiene tres caminos: que el vendedor la cancele con el dinero de la venta, que el comprador se \"suba\" al mismo préstamo si el banco lo permite, o que el comprador pida una hipoteca nueva. Lo importante es no confundir \"cuánto debo\" con \"cuánto puede reclamar el banco sobre la finca\", que son cifras distintas.",
      balearExample:
        "Un comprador adquiere por 350.000 EUR una vivienda en Marratxí. El vendedor mantiene una hipoteca con saldo de 180.000 EUR, variable, con diferencial bajo. El agente ayuda a comparar subrogación de deudor frente a hipoteca nueva analizando TAE, plazo pendiente, comisión de apertura, diferencial y coste de oportunidad, sin reducir la decisión a la cuota mensual.",
      keyConcepts: [
        "hipoteca inmobiliaria",
        "accesoriedad",
        "indivisibilidad",
        "reipersecutoriedad",
        "acreedor hipotecario",
        "hipotecante no deudor",
        "tercer poseedor",
        "responsabilidad hipotecaria",
        "subrogación de deudor",
        "cancelación registral"
      ],
      frequentErrors: [
        "Confundir deuda hipotecaria (lo que se debe) con responsabilidad hipotecaria (el máximo publicado que afecta a la finca).",
        "Usar \"asumir la deuda\" y \"comprar una finca hipotecada que se cancelará\" como si fueran equivalentes.",
        "Cerrar cifras definitivas de arras sin certificado de deuda actualizado de la entidad.",
        "Reducir la comparación entre subrogación e hipoteca nueva solo a la cuota mensual, ignorando TAE, plazo y comisiones."
      ],
      examples: [
        {
          id: "m05-l6-ex-a",
          title: "Venta con hipoteca pendiente en Marratxí",
          scenario: "Comprador duda entre subrogarse o pedir hipoteca nueva.",
          application: "El agente documenta la comparación de condiciones sin percibir comisión de intermediación no regulada.",
          isBalearContext: true
        },
        {
          id: "m05-l6-ex-b",
          title: "División de finca matriz en Palmanova",
          scenario: "Promoción con hipoteca única sobre todo el edificio, venta de pisos individuales.",
          application: "El agente exige distribución de responsabilidad hipotecaria para liberar cada vivienda al venderse.",
          isBalearContext: true
        },
        {
          id: "m05-l6-ex-c",
          title: "Hipotecante no deudor en Pollença",
          scenario: "Un familiar grava su vivienda para garantizar el préstamo de otro.",
          application: "El agente explica que ese hipotecante responde con la finca pero no necesariamente con todo su patrimonio personal.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m05-l7",
      moduleId: "m05",
      title: "LCCI, protecciones del deudor, ejecución hipotecaria y cierre del expediente",
      order: 7,
      summary:
        "La Ley 5/2019 (LCCI) impone plazos, documentación y protecciones imperativas en el crédito inmobiliario, y el agente debe conocer también las vías y límites de la ejecución hipotecaria sin ejercer de abogado ni de intermediario de crédito no regulado.",
      content: `La Ley 5/2019 (LCCI) protege a la persona física que interviene como prestataria, fiadora o garante en préstamos garantizados sobre inmuebles residenciales o destinados a adquirir o conservar derechos sobre ellos. Protege a comprador, fiador o garante persona física cuando se cumplen los supuestos legales; afecta a prestamistas, intermediarios de crédito y representantes designados; no convierte a la agencia inmobiliaria en banco ni en asesor financiero independiente; y obliga a actuar con transparencia, honestidad, imparcialidad y profesionalidad dentro de la actividad regulada. El agente puede coordinar documentación, explicar calendario, detectar plazos insuficientes y derivar al banco o notario, pero no debe recomendar un producto como asesor independiente si no tiene el marco regulatorio y la información para hacerlo. Cobrar por presentar, proponer o tramitar préstamos de forma profesional puede convertir la actividad en intermediación de crédito inmobiliario regulada.

## Documentación precontractual y acta notarial

La documentación precontractual debe entregarse con al menos **diez días naturales** de antelación a la firma. La fecha de la FEIN condiciona el calendario de arras y escritura. El paquete mínimo incluye: la FEIN (ficha europea con condiciones financieras y oferta vinculante durante el plazo legal); la FiAE (advertencias sobre cláusulas y riesgos relevantes); el proyecto de contrato y documentos de reparto de gastos; información sobre seguros, productos vinculados o combinados y sus condiciones; simulaciones de cuotas en escenarios relevantes cuando el tipo sea variable; y el documento sobre asesoramiento recibido, cuando proceda, y la explicación de la obligación de acudir al notario. Para calcular la fecha, se cuentan diez días naturales completos desde la puesta a disposición válida de la documentación; no debe fijarse escritura hipotecaria antes de que venza ese plazo. El banco y el notario son quienes validan el expediente, pero el agente debe evitar que las arras creen un calendario imposible: en la práctica, arras de 30 a 45 días reducen aplazamientos evitables, aunque cada banco puede exigir más tiempo.

La comparecencia ante el notario elegido por el prestatario (acta notarial previa) no es una formalidad de última hora: forma parte del proceso de transparencia material. En el acta, el notario comprueba que la documentación se envió en plazo, explica las cláusulas relevantes y resuelve dudas del prestatario, y deja constancia de un test de comprensión; si el acta no puede autorizarse, el préstamo no debe firmarse. La secuencia recomendada es: el banco emite la FEIN (control: guardar fecha y comprobar que hay margen); el cliente elige notario (control: facilitar coordinación, sin imponer); el acta previa se realiza ante notario y cliente (control: confirmar que se otorgó antes del préstamo); y la escritura de préstamo y compra se firma con notaría, banco y partes (control: verificar fondos, condiciones y documentos). No debe programarse el acta "el día antes" por sistema: debe otorgarse dentro del plazo legal y antes de la escritura, dejando margen para subsanar documentación.

## Costes, TAE y reembolso anticipado

El reparto legal de gastos protege al prestatario: la tasación la paga el prestatario; la notaría de la escritura de préstamo la paga el prestamista (copias, quien las solicite); el Registro de la hipoteca lo paga el prestamista; la gestoría del préstamo la paga el prestamista; y el IAJD del préstamo lo paga el prestamista según el régimen vigente. En reembolso anticipado, a tipo variable el contrato puede fijar el máximo legal de comisión del 0,25% durante los tres primeros años o el 0,15% durante cinco, y después el 0%, siempre con límite de pérdida financiera; a tipo fijo, el máximo es del 2% durante los diez primeros años y del 1,5% después, con límite de pérdida financiera; y para conversión de variable a fijo, la regla legal del 0,05% durante los tres primeros años exige comprobar el supuesto concreto (las medidas temporales de comisión cero de 2023-2024 no se aplican automáticamente en 2026). La TAE permite comparar el coste total, no solo el diferencial: hay que pedir al comprador que compare FEIN completas con misma cuantía, plazo y productos asociados.

## Protecciones LCCI ante el impago

El incumplimiento hipotecario tiene reglas imperativas: no deben aceptarse explicaciones comerciales que contradigan el mínimo legal de protección. En préstamos de persona física garantizados sobre inmuebles residenciales, el interés de demora es el remuneratorio más tres puntos, y solo se devenga sobre principal vencido, sin admitir pacto en contrario. El vencimiento anticipado exige, en la primera mitad del préstamo, un impago que alcance 12 cuotas mensuales o el 3% del capital concedido; en la segunda mitad, un impago que alcance 15 cuotas o el 7% del capital concedido; además debe existir requerimiento de pago con al menos un mes de plazo y advertencia de consecuencias. Las cláusulas suelo están prohibidas en el ámbito correspondiente; las ventas vinculadas están limitadas y las combinadas tienen reglas específicas. Un banco no puede ejecutar "por dos cuotas" un préstamo sometido a estas reglas, pero ante un impago la negociación temprana evita costes y pérdida de opciones.

## Intermediación de crédito y ejecución hipotecaria

Una agencia puede colaborar con bancos de forma puntual, pero cuando la presentación, propuesta o tramitación de préstamos es actividad profesional remunerada, entra en un terreno regulado: el intermediario debe constar en el registro competente y cumplir requisitos de conocimientos, transparencia y cobertura de responsabilidad; si opera con clientes domiciliados en más de una comunidad autónoma, el Banco de España gestiona el registro correspondiente; para actividad estrictamente autonómica, la competencia puede corresponder a la comunidad autónoma según la Ley 5/2019; y el cliente debe recibir información sobre identidad, registro, vínculo con prestamistas y remuneración o incentivos. El protocolo prudente de agencia es limitarse a poner en contacto, obtener consentimiento para datos y documentar que la decisión financiera corresponde al cliente y a la entidad: el incumplimiento de registro y transparencia no es un detalle administrativo, puede generar sanción, conflicto con el consumidor y responsabilidad reputacional.

Como agente puede intervenirse en una venta previa a subasta, en una cartera REO o en una compra de adjudicado, sin sustituir a un abogado o procurador. Las vías posibles son la ejecución hipotecaria judicial (procedimiento sobre finca hipotecada con subasta electrónica, caso ordinario de impago garantizado), la venta extrajudicial notarial (exige pacto y requisitos, menos frecuente y de análisis específico) y la acción personal (reclamación sobre patrimonio del deudor, no se limita a la garantía si no hay pacto de responsabilidad limitada). La secuencia básica es: demanda y requerimiento -> certificación de cargas y nota marginal -> convocatoria y subasta electrónica -> aprobación de remate o adjudicación conforme a reglas vigentes -> posesión, inscripción y, en su caso, lanzamiento; la duración concreta depende de juzgado, oposición y situación posesoria. La normativa procesal vigente desde 2025 modifica reglas de subasta, y no deben usarse cifras ni plazos de apuntes antiguos sin confirmar el texto actual de la LEC.

La vivienda habitual tiene protección reforzada: el rol del agente no es prometer resultados judiciales, sino explicar con precisión los límites legales y derivar con urgencia. La liberación del bien y otras medidas dependen del supuesto y momento procesal y requieren asesoramiento jurídico inmediato; la LEC reformada mantiene un umbral reforzado para la vivienda habitual — no se aprueba por debajo del 70% del valor de subasta salvo reglas específicas vinculadas a la cantidad debida, con un mínimo del 60% en ese escenario; puede existir deuda remanente, y la regla de imputación de pagos y las medidas de quita deben analizarse según el caso; y el Código de Buenas Prácticas y medidas para deudores vulnerables requieren verificar adhesión de la entidad y requisitos vigentes en la fecha. Antes de captar o comprar un adjudicado, hay que revisar título de adjudicación, inscripción, cargas posteriores, ocupación, situación de lanzamiento, comunidad, IBI y estado físico: un precio bajo no compensa una posesión o carga desconocida. Nunca deben aconsejarse cortes de suministros, cambiar cerraduras o "recuperar" posesión por vías de hecho: hay que derivar a procedimiento legal y documentar el estado posesorio.

## Extinción y cancelación de la hipoteca

La deuda puede estar pagada, pero la carga sigue apareciendo hasta que se cancela registralmente; esta diferencia debe formar parte de toda hoja de encargo. Hay dos planos: la extinción económica (se paga la deuda, con certificado de deuda cero o carta de pago), la cancelación registral (se elimina la hipoteca del Registro, con escritura de cancelación y despacho registral) y la cancelación por caducidad (se cancela por transcurso del plazo legal si se cumplen requisitos, con instancia o título según artículo 82 LH y caso). La llamada cancelación por caducidad exige calcular correctamente el vencimiento de la obligación, las posibles interrupciones y el supuesto legal aplicable: el referente habitual del artículo 82.5 LH se asocia a 21 años desde el vencimiento final cuando concurren sus requisitos, pero no debe aplicarse mecánicamente. No deben llevarse a arras una finca con hipoteca "ya pagada" sin tener prevista su cancelación registral o una solución simultánea a escritura.`,
      easyExplanation:
        "La LCCI obliga al banco a entregarte toda la información del préstamo (la FEIN) al menos diez días antes de firmar, y a pasar por una cita con el notario donde te explican y te preguntan si lo has entendido. Si no cumple ese plazo, no se puede firmar todavía, así que el agente debe calcular bien el calendario de arras para no comprometer una fecha imposible. Si alguien deja de pagar la hipoteca, hay reglas estrictas sobre cuántas cuotas hay que dejar de pagar antes de que el banco pueda actuar, y la vivienda habitual tiene protección especial en la subasta. Y \"la hipoteca está pagada\" no es lo mismo que \"está cancelada en el Registro\": hay que hacer un trámite aparte para borrarla.",
      balearExample:
        "Tres herederos quieren vender una casa en Sóller. La finca sigue a nombre de la madre fallecida y el comprador necesita hipoteca. Firman arras el día 1, el banco entrega la FEIN el día 8 y se pactó escritura el día 14. El agente detecta que la FEIN exige un plazo mínimo de diez días naturales antes de la firma del préstamo, por lo que la fecha 14 resulta insuficiente si la entrega válida fue el día 8, y reformula las arras dando margen tanto a la finalización del tracto hereditario como al cumplimiento del plazo LCCI.",
      keyConcepts: [
        "LCCI (Ley 5/2019)",
        "FEIN",
        "FiAE",
        "acta notarial previa",
        "plazo de diez días naturales",
        "interés de demora",
        "vencimiento anticipado",
        "ejecución hipotecaria",
        "umbral del 70% en subasta de vivienda habitual",
        "cancelación por caducidad (art. 82.5 LH)"
      ],
      frequentErrors: [
        "Fijar fecha de escritura sin comprobar que han transcurrido los diez días naturales desde la entrega de la FEIN.",
        "Actuar como asesor financiero recomendando productos sin estar registrado como intermediario de crédito.",
        "Confundir \"hipoteca pagada\" con \"hipoteca cancelada registralmente\".",
        "Aconsejar medidas de hecho (cortar suministros, cambiar cerraduras) ante ocupación de un inmueble adjudicado.",
        "Aplicar mecánicamente el plazo de 21 años del artículo 82.5 LH sin comprobar interrupciones del cómputo."
      ],
      examples: [
        {
          id: "m05-l7-ex-a",
          title: "Calendario de arras con financiación en Sóller",
          scenario: "Arras firmadas antes de recibir la FEIN.",
          application: "El agente recalcula la fecha de escritura contando diez días naturales completos desde la FEIN.",
          isBalearContext: true
        },
        {
          id: "m05-l7-ex-b",
          title: "Compra de vivienda adjudicada en Manacor",
          scenario: "Comprador interesado en un piso procedente de ejecución hipotecaria.",
          application: "El agente revisa título de adjudicación, cargas posteriores y situación de ocupación antes de cerrar la operación.",
          isBalearContext: true
        },
        {
          id: "m05-l7-ex-c",
          title: "Impago y vencimiento anticipado en Palma",
          scenario: "Prestatario acumula 10 cuotas impagadas en el primer tercio del préstamo.",
          application: "El agente explica que el banco no puede aún declarar el vencimiento anticipado porque no se alcanza el umbral legal de 12 cuotas o el 3% del capital.",
          isBalearContext: true
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m05-e1",
      moduleId: "m05",
      type: "case",
      question:
        "Un propietario vende en documento privado un apartamento de Portals Nous a A, que paga y recibe llaves pero no inscribe. Tres meses después, el vendedor —que sigue figurando como titular registral— vende en escritura pública a B, quien desconoce la primera venta, paga e inscribe. ¿Quién queda protegido?",
      expectedAnswer:
        "B puede quedar protegido frente a la primera venta no publicada si adquiere a título oneroso del titular registral, de buena fe y con inscripción propia, cumpliendo los requisitos del artículo 34 LH; A conserva acciones personales contra el vendedor pero no frente a B.",
      explanation:
        "La entrega de llaves no sustituye a la protección registral en una operación de riesgo; solo la inscripción del artículo 34 LH otorga protección frente a terceros.",
      difficulty: "medium"
    },
    {
      id: "m05-e2",
      moduleId: "m05",
      type: "case",
      question:
        "En una captación en Inca, la nota simple muestra una anotación de embargo de 2020 sin nota de prórroga y una hipoteca de 2009 a favor de un banco absorbido. El vendedor afirma que \"todo se pagó\". ¿Qué debe comprobar el agente antes de admitir arras?",
      expectedAnswer:
        "Comprobar la fecha exacta del asiento de embargo, posibles prórrogas y asientos posteriores, y solicitar y practicar la cancelación si procede; pedir certificado bancario de deuda cero para la hipoteca (la absorción del banco no borra la carga); si se pretende caducidad hipotecaria, calcular el vencimiento final y los requisitos del artículo 82 LH, sin bastar con contar desde el año de escritura.",
      explanation:
        "\"Pagada\" no es \"cancelada\", y \"antigua\" no es \"caducada\" hasta que el Registro pueda practicar la cancelación.",
      difficulty: "medium"
    },
    {
      id: "m05-e3",
      moduleId: "m05",
      type: "decision",
      question:
        "Un comprador adquiere por 350.000 EUR una vivienda en Marratxí. El vendedor mantiene una hipoteca con saldo de 180.000 EUR, variable, con diferencial bajo. El comprador duda entre subrogarse en la hipoteca existente o constituir una hipoteca nueva. ¿Qué variables debe comparar el agente, más allá de la cuota mensual?",
      expectedAnswer:
        "TAE, plazo pendiente, comisión de apertura, diferencial, amortización anticipada, porcentaje financiado y coste de oportunidad; además, la subrogación exige consentimiento del banco y no financia automáticamente la diferencia de precio.",
      explanation: "Reducir la decisión solo a la cuota mensual esconde diferencias relevantes de coste total.",
      difficulty: "advanced"
    },
    {
      id: "m05-e4",
      moduleId: "m05",
      type: "calculation",
      question:
        "Se firman arras el día 1 para una compraventa con financiación de una casa en Sóller (tres herederos venden, finca a nombre de la madre fallecida). El banco entrega la FEIN el día 8. Las arras fijaron escritura para el día 14. ¿Es válida esa fecha según la LCCI?",
      expectedAnswer:
        "No, porque deben transcurrir al menos diez días naturales completos desde la entrega válida de la FEIN (día 8), lo que sitúa el plazo mínimo en el día 18; la fecha 14 es insuficiente. Además debe resolverse el tracto sucesivo de la herencia antes o en paralelo.",
      explanation:
        "La fecha de la FEIN condiciona el calendario de arras y escritura; ambos trámites (financiación y tracto) son caminos críticos independientes.",
      difficulty: "advanced"
    },
    {
      id: "m05-e5",
      moduleId: "m05",
      type: "comprehension",
      question:
        "Un cliente pregunta: \"Si el Registro dice que la finca no tiene cargas, ¿puedo estar tranquilo al 100%?\". ¿Cómo debe responder el agente?",
      expectedAnswer:
        "No; el Registro ofrece una presunción de exactitud (artículo 38 LH) que admite prueba en contrario, y protege al tercero de buena fe con inscripción propia (artículo 34 LH) solo si se cumplen los requisitos legales; además deben verificarse realidad física, urbanística, posesoria y comunitaria, que el Registro no garantiza por sí solo.",
      explanation: "Evita transmitir falsa seguridad y ayuda a fijar expectativas correctas del cliente.",
      difficulty: "basic"
    },
    {
      id: "m05-e6",
      moduleId: "m05",
      type: "balear_scenario",
      question:
        "Un propietario de una finca rústica en Llucmajor quiere vender \"15.000 m²\" según el Catastro, pero el cierre físico con muro de piedra seca parece ocupar menos superficie y el Registro no especifica cabida exacta. ¿Qué debe hacer el agente antes de fijar el precio por metro cuadrado?",
      expectedAnswer:
        "No publicitar la superficie catastral como definitiva; pedir certificación catastral descriptiva y gráfica y nota simple actualizada con CRU; encargar informe topográfico si la diferencia puede afectar a financiación, linderos o precio.",
      explanation:
        "En rústico mallorquín los desajustes entre Registro, Catastro y realidad física son frecuentes y no deben resolverse \"a ojo\".",
      difficulty: "medium"
    },
    {
      id: "m05-e7",
      moduleId: "m05",
      type: "decision",
      question:
        "Un comprador quiere adquirir una vivienda adjudicada tras subasta en Manacor a un precio muy por debajo de mercado. ¿Qué debe revisar el agente antes de recomendar la compra?",
      expectedAnswer:
        "Título de adjudicación, inscripción registral, cargas posteriores, situación de ocupación, situación de lanzamiento, estado de la comunidad, IBI y estado físico del inmueble.",
      explanation:
        "Un precio bajo no compensa una posesión conflictiva o una carga desconocida; nunca debe recomendarse \"recuperar\" la posesión por vías de hecho.",
      difficulty: "advanced"
    },
    {
      id: "m05-e8",
      moduleId: "m05",
      type: "comprehension",
      question:
        "Explica la diferencia entre inscripción declarativa e inscripción constitutiva, poniendo un ejemplo de cada una.",
      expectedAnswer:
        "En la inscripción declarativa (ejemplo: compraventa ordinaria con tradición) el derecho puede existir sin inscripción, pero queda expuesto frente a terceros protegidos; en la inscripción constitutiva (ejemplo: hipoteca inmobiliaria, o derecho de superficie) sin escritura e inscripción el derecho real no nace válidamente.",
      explanation:
        "La firma de escritura suele incorporar tradición instrumental, pero no equivale a inscripción; el agente debe acompañar el proceso hasta comprobar la presentación y, cuando proceda, la inscripción.",
      difficulty: "basic"
    }
  ],
  quizQuestions: [
    {
      id: "m05-q1",
      question:
        "¿Qué principio establece que el Registro solo actúa a instancia de parte mediante la presentación del título?",
      options: [
        "Principio de legalidad",
        "Principio de rogación",
        "Principio de especialidad",
        "Principio de tracto sucesivo"
      ],
      correctAnswerIndex: 1,
      explanation: "La rogación implica que el procedimiento registral se inicia siempre a instancia de parte.",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria, ficha 6 del temario",
      difficulty: "basic"
    },
    {
      id: "m05-q2",
      question: "¿Cuál es la regla que determina que quien presenta primero un título compatible gana prioridad registral?",
      options: ["Prior tempore, potior iure", "Buena fe registral", "Numerus clausus", "Tracto abreviado"],
      correctAnswerIndex: 0,
      explanation:
        "La prioridad nace con el asiento de presentación en el Libro Diario, no con la fecha de firma de un documento privado.",
      sourceModuleId: "m05",
      legalReference: "Principio de prioridad registral, Ley Hipotecaria",
      difficulty: "basic"
    },
    {
      id: "m05-q3",
      question: "Según el artículo 38 de la Ley Hipotecaria, la legitimación registral es:",
      options: [
        "Una presunción iuris et de iure (no admite prueba en contrario)",
        "Una presunción iuris tantum (admite prueba en contrario)",
        "Una garantía absoluta del Estado",
        "Un efecto solo aplicable a hipotecas"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El documento subraya expresamente que la legitimación del artículo 38 LH es iuris tantum, admite prueba en contrario.",
      sourceModuleId: "m05",
      legalReference: "Artículo 38 Ley Hipotecaria",
      difficulty: "medium"
    },
    {
      id: "m05-q4",
      question: "¿Qué requisito NO es necesario para que un tercero quede protegido por la fe pública registral (artículo 34 LH)?",
      options: [
        "Adquisición a título oneroso",
        "Buena fe",
        "Inscripción de su propio derecho",
        "Que el vendedor sea familiar del comprador"
      ],
      correctAnswerIndex: 3,
      explanation:
        "Los requisitos son adquisición onerosa, buena fe, inscripción propia y que la causa de nulidad o resolución no conste en el Registro; el parentesco es irrelevante.",
      sourceModuleId: "m05",
      legalReference: "Artículo 34 Ley Hipotecaria",
      difficulty: "medium"
    },
    {
      id: "m05-q5",
      question: "¿Cuál es el plazo ordinario de calificación registral de un título presentado?",
      options: ["5 días naturales", "10 días hábiles", "15 días hábiles", "30 días naturales"],
      correctAnswerIndex: 2,
      explanation: "El plazo ordinario de calificación es de 15 días hábiles, sin perjuicio de incidencias y suspensión.",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria / Reglamento Hipotecario",
      difficulty: "basic"
    },
    {
      id: "m05-q6",
      question: "La inscripción de una hipoteca inmobiliaria es:",
      options: ["Declarativa", "Constitutiva", "Meramente informativa", "Optativa para el acreedor"],
      correctAnswerIndex: 1,
      explanation:
        "Sin escritura pública e inscripción, no nace el derecho real de hipoteca; es uno de los cinco caracteres de la hipoteca (constitutiva).",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria, concepto de hipoteca",
      difficulty: "basic"
    },
    {
      id: "m05-q7",
      question: "¿Qué documento acredita formalmente una carga registral con valor fehaciente, a diferencia de la nota simple?",
      options: ["Certificación registral", "Ficha catastral", "Escritura privada", "Contrato de arras"],
      correctAnswerIndex: 0,
      explanation:
        "La certificación registral es fehaciente y la expide el registrador; se usa en procedimientos, subastas y casos de mayor riesgo.",
      sourceModuleId: "m05",
      legalReference: "Publicidad formal registral",
      difficulty: "basic"
    },
    {
      id: "m05-q8",
      question:
        "¿Con cuántos días naturales de antelación mínima debe entregarse la documentación precontractual LCCI (FEIN, FiAE) antes de la firma del préstamo?",
      options: ["5 días", "7 días", "10 días", "15 días"],
      correctAnswerIndex: 2,
      explanation:
        "La Ley 5/2019 (LCCI) exige al menos diez días naturales de antelación desde la entrega de la documentación hasta la firma.",
      sourceModuleId: "m05",
      legalReference: "Ley 5/2019 (LCCI), documentación precontractual",
      difficulty: "medium"
    },
    {
      id: "m05-q9",
      question:
        "En un préstamo hipotecario a persona física garantizado sobre vivienda residencial, el interés de demora legal es:",
      options: [
        "El remuneratorio más cinco puntos",
        "El remuneratorio más tres puntos",
        "Un máximo fijo del 10% anual",
        "Libremente pactable sin límite"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El interés de demora es el remuneratorio más tres puntos y solo se devenga sobre principal vencido, sin admitir pacto en contrario.",
      sourceModuleId: "m05",
      legalReference: "Ley 5/2019 (LCCI), protecciones ante impago",
      difficulty: "medium"
    },
    {
      id: "m05-q10",
      question: "Para declarar el vencimiento anticipado en la primera mitad de vida del préstamo, el impago debe alcanzar:",
      options: [
        "6 cuotas o el 1% del capital concedido",
        "12 cuotas mensuales o el 3% del capital concedido",
        "15 cuotas o el 7% del capital concedido",
        "24 cuotas sin porcentaje mínimo"
      ],
      correctAnswerIndex: 1,
      explanation:
        "En la primera mitad del préstamo, el umbral legal es 12 cuotas mensuales o el 3% del capital concedido; en la segunda mitad sube a 15 cuotas o el 7%.",
      sourceModuleId: "m05",
      legalReference: "Ley 5/2019 (LCCI), vencimiento anticipado",
      difficulty: "advanced"
    },
    {
      id: "m05-q11",
      question:
        "En la subasta judicial de la vivienda habitual, ¿por debajo de qué porcentaje del valor de subasta no se aprueba el remate, salvo reglas específicas?",
      options: ["50%", "60%", "70%", "80%"],
      correctAnswerIndex: 2,
      explanation:
        "La LEC reformada mantiene un umbral reforzado del 70% del valor de subasta para la vivienda habitual, con un mínimo del 60% en el escenario vinculado a la cantidad debida.",
      sourceModuleId: "m05",
      legalReference: "Ley de Enjuiciamiento Civil (reforma vigente)",
      difficulty: "advanced"
    },
    {
      id: "m05-q12",
      question:
        "¿Qué comisión máxima legal puede pactarse por reembolso anticipado en una hipoteca a tipo fijo durante los diez primeros años?",
      options: ["0,15%", "0,25%", "1%", "2%"],
      correctAnswerIndex: 3,
      explanation:
        "A tipo fijo, el máximo legal es 2% durante los diez primeros años y 1,5% después, con límite de pérdida financiera.",
      sourceModuleId: "m05",
      legalReference: "Ley 5/2019 (LCCI), reembolso anticipado",
      difficulty: "advanced"
    },
    {
      id: "m05-q13",
      question: "La inmatriculación por el procedimiento del artículo 207 LH puede activar:",
      options: [
        "Una limitación temporal de dos años de la fe pública registral",
        "Una limitación de cinco años sobre cualquier venta posterior",
        "La derogación automática de todas las cargas previas",
        "La obligación de inscripción gráfica georreferenciada en todo caso"
      ],
      correctAnswerIndex: 0,
      explanation:
        "El documento señala expresamente esta limitación de dos años, distinta de la derogación del antiguo artículo 28 LH sobre ciertas herencias.",
      sourceModuleId: "m05",
      legalReference: "Artículo 207 Ley Hipotecaria",
      difficulty: "advanced"
    },
    {
      id: "m05-q14",
      question: "¿Qué asiento registral tiene una vigencia ordinaria de 60 días hábiles?",
      options: ["La inscripción", "La anotación preventiva", "La presentación", "La nota marginal"],
      correctAnswerIndex: 2,
      explanation:
        "La presentación reserva prioridad al título presentado con vigencia ordinaria de 60 días hábiles.",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria, tabla de asientos registrales",
      difficulty: "basic"
    },
    {
      id: "m05-q15",
      question: "Una anotación preventiva (por ejemplo, de embargo) tiene una vigencia frecuente de:",
      options: [
        "1 año",
        "4 años, con reglas de prórroga",
        "10 años sin posibilidad de prórroga",
        "Indefinida mientras no se cancele expresamente"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Las anotaciones preventivas tienen una vigencia frecuente de 4 años, con reglas de prórroga que deben comprobarse en cada caso.",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria, asientos registrales",
      difficulty: "medium"
    },
    {
      id: "m05-q16",
      question:
        "¿Qué figura responde con la finca por una deuda ajena, sin ser necesariamente el deudor personal de esa deuda?",
      options: [
        "Tercer poseedor",
        "Hipotecante no deudor",
        "Acreedor hipotecario",
        "Fiador solidario del vendedor"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El hipotecante no deudor grava su finca por deuda ajena y responde con la finca, no necesariamente con toda su deuda personal.",
      sourceModuleId: "m05",
      legalReference: "Ley Hipotecaria, sujetos de la hipoteca",
      difficulty: "medium"
    },
    {
      id: "m05-q17",
      question:
        "¿Qué organismo gestiona el registro de intermediarios de crédito inmobiliario cuando el intermediario opera con clientes domiciliados en más de una comunidad autónoma?",
      options: ["El Colegio de Registradores", "El Banco de España", "El Ministerio de Vivienda", "La CAIB"],
      correctAnswerIndex: 1,
      explanation:
        "Si el intermediario opera en más de una comunidad autónoma, el Banco de España gestiona el registro correspondiente; para actividad estrictamente autonómica puede corresponder a la comunidad autónoma.",
      sourceModuleId: "m05",
      legalReference: "Ley 5/2019 (LCCI), registro de intermediarios y prestamistas inmobiliarios",
      difficulty: "advanced"
    },
    {
      id: "m05-q18",
      question: "El referente habitual de cancelación de hipoteca por caducidad del artículo 82.5 LH se asocia a:",
      options: [
        "5 años desde la escritura",
        "10 años desde la inscripción",
        "21 años desde el vencimiento final, cuando concurren sus requisitos",
        "30 años desde la firma del contrato de préstamo"
      ],
      correctAnswerIndex: 2,
      explanation:
        "El referente habitual del artículo 82.5 LH se asocia a 21 años desde el vencimiento final cuando concurren los requisitos, pero no debe aplicarse mecánicamente sin verificar interrupciones.",
      sourceModuleId: "m05",
      legalReference: "Artículo 82.5 Ley Hipotecaria",
      difficulty: "advanced"
    }
  ]
};

export const m05Glossary: GlossaryItem[] = [
  {
    id: "g-m05-cru-codigo-registral-unico",
    term: "CRU (Código Registral Único)",
    definition:
      "Identificador registral único asignado a cada finca que permite su localización inequívoca en el sistema registral, vinculado al folio real electrónico desde la reforma de 2023 (en vigor en este punto desde mayo de 2024).",
    easyDefinition: "Es como el \"DNI\" de la finca en el Registro; sirve para no confundirla con otra parecida.",
    relatedModuleId: "m05",
    balearContext:
      "Especialmente relevante en edificios de Mallorca con plazas de garaje, trasteros o anexos con varias referencias, donde debe pedirse siempre para evitar confusiones."
  },
  {
    id: "g-m05-tracto-sucesivo",
    term: "Tracto sucesivo",
    definition:
      "Principio registral que exige que, para inscribir una transmisión, quien transmite figure como titular registral o quede acreditada la cadena que conecta al transmitente con el titular.",
    easyDefinition:
      "Cada cambio de dueño tiene que quedar reflejado en orden, sin saltos; si un heredero no inscribió la herencia, hay un eslabón roto que hay que arreglar antes de vender.",
    relatedModuleId: "m05",
    balearContext:
      "Frecuente en herencias no inscritas de viviendas y possessions mallorquinas transmitidas entre varios hermanos."
  },
  {
    id: "g-m05-fein-ficha-europea-de-informacion-normalizada",
    term: "FEIN (Ficha Europea de Información Normalizada)",
    definition:
      "Documento precontractual obligatorio de la LCCI que recoge las condiciones financieras del préstamo hipotecario y constituye oferta vinculante durante el plazo legal, cuya entrega condiciona el cómputo de los diez días naturales previos a la firma.",
    easyDefinition:
      "Es el \"folleto oficial\" con todas las condiciones del préstamo que el banco debe darte con tiempo suficiente antes de firmar.",
    relatedModuleId: "m05"
  },
  {
    id: "g-m05-responsabilidad-hipotecaria",
    term: "Responsabilidad hipotecaria",
    definition:
      "Cifra máxima de afección de la finca frente a terceros, distribuida en la escritura entre capital, intereses ordinarios, intereses de demora y costas, distinta de la deuda personal del prestatario.",
    easyDefinition:
      "Es el límite de lo que el banco puede reclamar contra la casa, no necesariamente lo mismo que la deuda real que debes.",
    relatedModuleId: "m05"
  },
  {
    id: "g-m05-anotacion-preventiva",
    term: "Anotación preventiva",
    definition:
      "Asiento registral de protección provisional (por ejemplo, embargo, demanda o derecho hereditario) con vigencia temporal limitada (frecuentemente 4 años) sujeta a reglas de caducidad y prórroga.",
    easyDefinition:
      "Es un aviso temporal en el Registro de que algo está en trámite o en litigio sobre esa finca, y puede caducar si no se renueva.",
    relatedModuleId: "m05"
  },
  {
    id: "g-m05-vencimiento-anticipado",
    term: "Vencimiento anticipado",
    definition:
      "Facultad del acreedor hipotecario, sujeta a límites imperativos de la LCCI, de dar por vencida toda la deuda ante impago que alcance 12 cuotas o el 3% del capital concedido (primera mitad del préstamo) o 15 cuotas o el 7% (segunda mitad), previo requerimiento de pago con un mes de plazo.",
    easyDefinition:
      "Es cuando el banco puede exigir todo el préstamo de golpe por impago grave, pero solo si se supera un número mínimo de cuotas impagadas, no por una sola cuota.",
    relatedModuleId: "m05"
  }
];

export const m05Alerts: string[] = [
  "Fecha de revisión del temario: el documento está revisado con fuentes oficiales disponibles a 4 de julio de 2026; cualquier consulta debe verificar la redacción consolidada vigente en el BOE en el momento de asesorar, no confiar en cifras memorizadas de ediciones anteriores.",
  "Reforma registral 2023 / folio real electrónico: en vigor en el punto de folio real electrónico desde mayo de 2024; afecta a la forma de identificación de fincas (CRU) pero no a la demarcación registral.",
  "Ley Orgánica 1/2025: citada expresamente como fuente oficial de estudio en la ficha de cierre del módulo (ficha 37), sin más detalle específico en el cuerpo del temario; debe verificarse su contenido y aplicación concreta antes de usarla en asesoramiento.",
  "Reforma procesal de subastas (LEC) desde 2025: la normativa procesal vigente desde 2025 modifica reglas de subasta electrónica; el propio documento advierte de no usar cifras ni plazos de apuntes antiguos sin confirmar el texto actual de la LEC.",
  "Medidas temporales de comisión cero en reembolso anticipado (2023-2024): el documento advierte expresamente que estas medidas temporales no se aplican automáticamente en 2026; debe comprobarse la vigencia de cualquier régimen especial antes de asesorar sobre comisiones de amortización anticipada.",
  "Supresión del antiguo artículo 28 LH vs. plazo protector del artículo 207 LH: son dos cuestiones distintas que el temario señala como fuente frecuente de confusión: la derogación del antiguo artículo 28 LH afecta a determinadas herencias, mientras que el plazo protector de dos años del artículo 207 LH sigue existiendo para ciertas inmatriculaciones.",
  "Código de Buenas Prácticas y medidas para deudores vulnerables: requiere verificar la adhesión de la entidad concreta y los requisitos vigentes en la fecha de la operación; no debe asumirse aplicación automática."
];
