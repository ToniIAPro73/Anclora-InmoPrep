import type { Module, GlossaryItem } from "@/lib/types";

export const m14Module: Module = {
  id: "m14",
  code: "M14",
  title: "Negociación y Cierre de Ventas",
  order: 14,
  description:
    "Oferta, reserva, arras confirmatorias y penitenciales, escritura notarial.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m14-l1",
      moduleId: "m14",
      title: "Preparar la venta y cualificar al comprador",
      order: 1,
      summary:
        "Antes de negociar nada, el agente debe separar interés, condición y compromiso, y construir un expediente del comprador proporcional al momento de la operación.",
      content: `La venta inmobiliaria es un proceso de decisión asistida, no una carrera hacia la firma. El módulo la define como una secuencia de "puertas de decisión": identificar la fase real (interés, visita, oferta, negociación o contrato), reunir datos comprobados antes de hablar de cierre, ordenar condiciones (precio, pagos, fechas, cargas, financiación) y documentar cada avance evitando compromisos ambiguos. El error más citado en esta fase es confundir una declaración del cliente con un dato confirmado y actuar como si ambas tuvieran el mismo valor: que la pareja visitante diga "probablemente hará una oferta" no equivale a que exista una oferta real, y el agente no debe comunicar al vendedor una expectativa no verificada.

## Representación y autoridad para negociar

Antes de negociar, el agente debe saber a quién representa y qué margen tiene cada parte: por encargo del vendedor, del comprador, en colaboración o con roles distintos. Debe confirmarse con la hoja de encargo, la titularidad, los poderes vigentes y la situación matrimonial o hereditaria. Cuando hay varios titulares, no se negocia una cifra como definitiva sin identificar el mecanismo de aceptación de todos los copropietarios. El ejemplo del PDF: dos hermanos venden una vivienda heredada; uno acepta verbalmente 420.000 euros pero el otro no ha dado consentimiento — la agencia debe comunicar que la oferta está "en estudio" y no recibir señal hasta contar con aceptación verificable de todos los titulares.

## Cualificación económica y de necesidad

La cualificación económica busca determinar si el comprador puede sostener la operación (precio + impuestos + notaría + registro + reformas + gastos comunitarios + reserva de liquidez), sin invadir la función del banco ni pedir datos innecesarios. Una preaprobación bancaria o un estudio de solvencia orientan pero no garantizan financiación. En paralelo, la cualificación de necesidad, plazo y motivación (vivienda habitual, segunda residencia, inversión, traslado laboral) permite ajustar el producto ofrecido y anticipar fechas críticas sin convertir la venta en un interrogatorio invasivo.

## Mapa de decisores y expediente del comprador

En muchas operaciones quien visita no es quien decide, quien paga no es quien habitará y quien firma no es quien negocia. Identificar el mapa de decisores (pareja, copropietarios, padres que aportan fondos, asesor fiscal, abogado, gestor patrimonial) evita que la agencia invierta semanas en una propuesta que luego se cae por una persona ausente. El expediente del comprador debe seguir el principio de minimización de datos: solicitar solo lo necesario para la fase actual, separar carpeta comercial de carpeta de cumplimiento y proteger documentos con acceso limitado y trazabilidad — pedir documentación excesiva demasiado pronto daña la confianza y aumenta el riesgo de privacidad.`,
      easyExplanation:
        'Antes de sentarse a negociar, hay que tener claro quién decide de verdad, si el comprador puede realmente pagar, y qué papeles hacen falta en cada momento — ni de más ni de menos. Confundir "dijo que quería comprar" con "puede y va a comprar" es el error número uno. Y cuando hay varios propietarios o varios familiares implicados, hay que saber quién firma antes de mover ninguna cifra.',
      balearExample:
        'En Palma, una pareja visita un piso en el Molinar y comenta que "seguramente harán una oferta esta semana". El agente, en vez de avisar al propietario de que "hay comprador seguro", pide una propuesta por escrito con precio, financiación, plazo y condiciones antes de generar cualquier expectativa.',
      keyConcepts: [
        "cualificación económica",
        "cualificación de necesidad",
        "mapa de decisores",
        "expediente del comprador",
        "minimización de datos",
        "hoja de encargo",
        "autoridad para negociar",
        "representación",
      ],
      frequentErrors: [
        "Confundir una declaración del cliente con un dato confirmado.",
        "Negociar con una persona sin verificar que tiene poder o consentimiento de todos los titulares.",
        "Pedir documentación económica o de identidad excesiva demasiado pronto, o demasiado tarde (bloqueando el cierre).",
        "Prometer que un préstamo será concedido o que una cuota será definitiva.",
      ],
      examples: [
        {
          id: "m14-l1-ex1",
          title: "Oferta verbal sin verificar",
          scenario: 'Cliente dice "probablemente compraré".',
          application:
            "Exigir propuesta escrita con precio, financiación y plazo antes de informar al vendedor.",
          isBalearContext: false,
        },
        {
          id: "m14-l1-ex2",
          title: "Copropietarios sin consentimiento unánime",
          scenario:
            "Dos hermanos, uno acepta y el otro no se pronuncia.",
          application:
            'La oferta permanece "en estudio" hasta aceptación verificable de todos.',
          isBalearContext: false,
        },
        {
          id: "m14-l1-ex3",
          title: "Comprador con presupuesto insuficiente",
          scenario: "Dispone de 90.000 € y quiere comprar por 400.000 €.",
          application:
            "No asumir que el banco financiará el resto; solicitar orientación bancaria y calcular costes reales.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l2",
      moduleId: "m14",
      title: "La visita como diagnóstico y gestión de objeciones",
      order: 2,
      summary:
        "La visita debe usarse para comprobar el ajuste real entre comprador e inmueble, y las objeciones deben tratarse como información, no como obstáculos a vencer con más discurso.",
      content: `La visita eficaz empieza antes del encuentro: revisar que el inmueble esté disponible, seguro, presentado y documentado según la fase. El agente diseña la visita por zonas y preguntas (entorno, distribución, luz, ruido, estado, almacenamiento, comunidad, gastos, próximos pasos), manteniendo el control del recorrido sin impedir que el visitante observe y pregunte. La escucha activa es central: las preguntas abiertas revelan criterios de decisión reales, mientras que las preguntas de contraste evitan suposiciones. Un ejemplo del módulo: una familia insiste en "vivir cerca del mar", pero al profundizar el agente descubre que en realidad prioriza caminar a una escuela y evita zonas turísticas ruidosas — cambia la selección de inmuebles y ahorra visitas improductivas.

## Presentar valor sin exagerar

Presentar valor no es recitar características, sino conectar una cualidad comprobable del inmueble con una necesidad concreta del comprador. El esquema recomendado es "hecho - impacto - evidencia - límite": por ejemplo, "la vivienda tiene orientación oeste y terraza; la sensación de luz se aprecia ahora, pero el comprador debe valorar su preferencia de temperatura y la documentación no permite garantizar un uso futuro distinto del residencial". Afirmaciones como "vistas permanentes", "reforma integral", "rentabilidad garantizada" son de riesgo si no se delimitan con evidencia.

## Señales de interés y de riesgo

Las señales de interés (pedir segunda visita, solicitar documentos, hablar de financiación, medir la estancia) deben interpretarse con prudencia: indican avance, no una oferta. También existen señales de riesgo: evasivas sobre presupuesto, insistencia en pagar desde un tercero, rechazo a identificarse, presión para reservar sin documentos, o contradicciones entre participantes. El agente registra hechos observables, no interpretaciones emocionales.

## Gestión de objeciones: precio, estado y comprensión

Una objeción no siempre es un "no": puede ser falta de información, desacuerdo sobre valor, una condición negociable, temor a equivocarse o rechazo definitivo. La técnica recomendada es escuchar sin interrumpir, pedir concreción ("¿qué parte le preocupa?", "¿qué tendría que comprobar para avanzar?"), clasificar el hecho o condición, y responder con evidencia o reconociendo el límite — no con más discurso. Las objeciones de precio se convierten en oferta estructurada (precio, forma de pago, calendario, financiación, condiciones); las objeciones de estado, reforma o mantenimiento se resuelven aportando información disponible (informe, presupuesto orientativo, revisión de actas comunitarias) sin minimizar ni exagerar la incidencia como "cosmética".`,
      easyExplanation:
        "Visitar un piso no es un monólogo del agente, es una conversación para averiguar si de verdad encaja con lo que el comprador necesita. Cuando alguien pone una pega (el precio, una humedad, una duda), lo peor que puedes hacer es hablar más rápido: hay que preguntar qué es exactamente lo que le preocupa y responder con datos, no con entusiasmo. Una señal de interés (pedir otra visita) no es lo mismo que una oferta.",
      balearExample:
        'En una visita en Calvià, el interesado pregunta por una mancha de humedad. El agente no la minimiza ni dice "eso no es nada": indica que se revisará documentación, se pedirá explicación al propietario y, si es material, se recomendará revisión técnica antes de seguir adelante.',
      keyConcepts: [
        "escucha activa",
        "preguntas de descubrimiento",
        "señales de interés",
        "señales de riesgo",
        "objeciones de precio",
        "esquema hecho-impacto-evidencia-límite",
        "presentar valor",
        "dossier de decisión",
      ],
      frequentErrors: [
        "Responder una objeción con más discurso en lugar de identificar qué evidencia o decisión falta.",
        "Interpretar una pregunta amable o una visita larga como señal de cierre garantizada.",
        'Usar superlativos ("ideal inversión", "rentabilidad garantizada") sin base objetiva.',
        'Neutralizar una incidencia visible calificándola de "cosmética" sin comprobación técnica.',
      ],
      examples: [
        {
          id: "m14-l2-ex1",
          title: "Objeción de precio",
          scenario: 'Comprador dice que el precio "es alto".',
          application:
            "Preguntar respecto a qué comparables y qué coste total está considerando; descubrir que en realidad le preocupa el coste de una reforma.",
          isBalearContext: false,
        },
        {
          id: "m14-l2-ex2",
          title: "Corrosión en barandilla",
          scenario: "Vivienda cerca del mar con corrosión visible.",
          application:
            "Registrar la observación, consultar documentación comunitaria y recomendar revisión, sin afirmar que es superficial.",
          isBalearContext: false,
        },
        {
          id: "m14-l2-ex3",
          title: "Comparar alternativas sin manipular",
          scenario:
            "Comprador compara una vivienda reformada en Palma con otra más grande en Marratxí.",
          application:
            "Preparar tabla objetiva de costes, estado, gasto comunitario y superficie, dejando clara la parte de preferencia personal.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l3",
      moduleId: "m14",
      title:
        "Fundamentos de la negociación profesional (BATNA, posiciones e intereses)",
      order: 3,
      summary:
        'Negociar es buscar un acuerdo posible entre intereses distintos bajo límites jurídicos, económicos y éticos, no "ganar" a la otra parte ni ocultar información material.',
      content: `Negociar en el sector inmobiliario significa facilitar alternativas y ordenar concesiones dentro de un mandato claro, sin inducir a error, usar datos confidenciales sin permiso ni atribuirse decisiones ajenas. La negociación empieza antes de la primera oferta: se prepara con precio, encargo, documentación y expectativas del vendedor, y con la cualificación del comprador. Si esos elementos son débiles, la negociación será defensiva. Una conversación complicada se controla con estructura: hecho, impacto, opciones, recomendación y decisión.

## Posiciones, intereses y criterios objetivos

La posición es lo que una persona pide literalmente ("quiero 500.000 euros", "quiero firmar ya", "no acepto financiación"). El interés es el motivo real detrás de la posición: necesidad de comprar otra vivienda, cerrar una herencia, reducir incertidumbre, evitar mudanza escolar, proteger liquidez o limitar riesgo. Trabajar sobre intereses permite crear alternativas (precio, calendario, muebles, condición financiera, entrega, retención, distribución de gastos). Los criterios objetivos (comparables, tasación, documentación, plazo bancario, coste acreditado) reducen discusiones basadas solo en voluntad. El agente debe mantener separadas tres cosas: el dato objetivo, la preferencia de su cliente y la información confidencial de la otra parte — mezclarlas produce errores.

## BATNA y punto de retirada

BATNA (Best Alternative To a Negotiated Agreement) es la mejor alternativa si no hay acuerdo: seguir buscando, alquilar, vender a otro, esperar financiación, cambiar de zona o retirar el inmueble. Conocer alternativas evita aceptar condiciones que no encajan y evita el bluffing. La zona de posible acuerdo aparece cuando las condiciones mínimas de comprador y vendedor se solapan. El agente lleva un registro de concesiones durante la negociación: qué se pidió, qué se ofreció, qué quedó condicionado y qué debe confirmarse, sin necesidad de revelar estrategia confidencial, para evitar el clásico conflicto de "yo entendí otra cosa".

## Anclaje, rangos y concesiones (precio, tiempo, condiciones)

El anclaje es la primera cifra que influye en la conversación. Debe apoyarse en información real (precio de salida, comparables, estado, costes, oferta y demanda), no en afirmaciones grandilocuentes. El agente puede proponer un rango de negociación basado en mandato y mercado, pero no debe crear una falsa tasación ni exponer "el mínimo" de una parte a la otra sin autorización expresa. Una concesión es un cambio que una parte acepta para acercar posiciones; debe tener motivo, valor y límite (ceder en precio a cambio de cierre de financiación, reducción de plazo, supresión de una condición, o aceptación de entrega). El plazo también es variable de valor: vendedor y comprador pueden tener necesidades incompatibles (mudanza, escolarización, obra, alquiler vigente, viaje, sucesión) y negociarlo requiere distinguir fecha objetivo, condición previa y fecha contractual.`,
      easyExplanation:
        'Cuando alguien dice "quiero 500.000 euros", eso es lo que pide, no necesariamente lo que de verdad necesita — descubrir el motivo real (una herencia, otra compra, miedo a quedarse sin nada) abre más opciones que discutir solo la cifra. Antes de negociar conviene saber qué pasaría si no hay acuerdo (tu alternativa), y cada cambio que se acepta (una concesión) debe tener un motivo y algo a cambio, nunca ser gratis ni ambiguo.',
      balearExample:
        'En Marratxí, el comprador ofrece 600.000 € por una vivienda anunciada en 690.000 €. El agente no responde "el mínimo es 650.000" sino que consulta el mandato, presenta el contexto de mercado y formula una contraoferta autorizada con condiciones de cierre claras.',
      keyConcepts: [
        "posiciones vs. intereses",
        "criterios objetivos",
        "BATNA",
        "zona de posible acuerdo",
        "anclaje",
        "concesiones",
        "registro de concesiones",
        "punto de retirada",
      ],
      frequentErrors: [
        "Usar urgencia, información confidencial o concesiones ambiguas para intentar mover una cifra.",
        "Revelar el límite privado de una parte a la otra sin autorización.",
        "Anclar un precio sin evidencia comparativa, deteriorando la negociación y la credibilidad.",
        'No registrar las concesiones, generando el conflicto de "yo entendí otra cosa".',
      ],
      examples: [
        {
          id: "m14-l3-ex1",
          title: "Interés detrás de la posición",
          scenario:
            "Vendedor necesita 30 días para comprar otra vivienda; comprador puede aceptar 45 si el precio se mantiene.",
          application:
            "Cerrar sin rebaja usando el plazo de entrega como variable de valor.",
          isBalearContext: false,
        },
        {
          id: "m14-l3-ex2",
          title: "BATNA real vs. bluffing",
          scenario:
            'Comprador ofrece por debajo de precio alegando "alternativa en otro municipio"; vendedor tiene una oferta futura incierta.',
          application:
            "El agente analiza calendario y evidencia de mercado sin revelar el límite privado de ninguna parte.",
          isBalearContext: false,
        },
        {
          id: "m14-l3-ex3",
          title: "Financiación como variable de negociación",
          scenario:
            "Oferta alta depende de una tasación por importe mínimo.",
          application:
            "El vendedor puede aceptarla si comprende la condición y el plazo, o preferir una oferta inferior con fondos propios.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l4",
      moduleId: "m14",
      title:
        "Manejo de emociones, conflictos y colaboración entre agencias",
      order: 4,
      summary:
        "Las decisiones de compraventa están cargadas de emoción y sesgos cognitivos, y el agente debe aportar estructura para reducir errores sin manipular ni presionar a personas vulnerables.",
      content: `Comprar o vender vivienda puede activar miedo, apego, duelo, urgencia, orgullo o agotamiento. Reconocer estas emociones ayuda a reducir errores, pero no autoriza a manipularlas: un vendedor puede rechazar una oferta razonable por apego; un comprador puede sobrepujar por miedo a perder. El agente aporta estructura (pausa, resumen de hechos, alternativas, coste total, plazo de reflexión y consulta cuando sea necesaria). La emoción no desaparece; se integra en una decisión consciente.

## Sesgos habituales y decisiones difíciles

Los sesgos más citados son anclaje, confirmación, escasez, coste hundido y aversión a la pérdida. Se combaten con evidencia y preguntas: "¿qué cambiaría tu decisión?", "¿qué no sabes?", "¿qué pasaría si esta operación no se firma?". El agente debe evitar frases que exploten inseguridad, como "no habrá otra oportunidad" sin base real. Antes de formalizar cualquier entrega de dinero conviene una lectura cruzada entre oferta, documento de reserva o arras, expediente del inmueble y datos de las partes, buscando inconsistencias: precio distinto, anexos que cambian, firmantes no identificados, cuenta de pago nueva, fecha imposible, condición no trasladada o inmueble descrito de forma incompleta.

## Conversaciones difíciles y conflictos

Una conversación difícil surge cuando hay mala noticia, desacuerdo, retraso o expectativa incompatible. La estructura recomendada es: hecho verificable, impacto, opciones, recomendación y siguiente paso, evitando acusar, interpretar intenciones o discutir por mensajes largos. Si el conflicto afecta a contrato, dinero, titularidad, financiación, consumo o PBC/FT, se escala a responsable o especialista antes de prometer una solución. El dinero nunca debe llegar antes que la decisión documentada: si una parte cambia de cuenta, de pagador o de fuente de fondos, esa alteración debe quedar explicada y, cuando proceda, revisada desde cumplimiento.

## Colaboración entre agencias y reparto de comisión

La colaboración entre agencias puede ampliar demanda y facilitar el cierre, pero exige reglas previas: definir quién representa a quién, qué documentación puede circular, cómo se protege la confidencialidad, y cómo se distribuye la comisión, formalizadas antes de la visita en un documento maestro. No deben compartirse datos de identidad, oferta, financiación o circunstancias personales sin base y autorización. Debe evitarse la doble intermediación opaca y presentar como "cliente propio" a alguien que ya está en el expediente de otra agencia sin aclararlo.`,
      easyExplanation:
        "Comprar o vender casa da miedo, ilusión o cansancio, y eso influye en las decisiones — el trabajo del agente es ayudar a pensar con calma, no aprovechar esas emociones para presionar. Cuando surge un problema, hay que explicarlo con hechos claros y opciones reales, no acusaciones ni discusiones eternas por WhatsApp. Y si dos agencias trabajan juntas en una operación, hace falta un acuerdo previo claro sobre quién representa a quién y cómo se reparte la comisión.",
      balearExample:
        "Una agencia de Palma comparte una vivienda con un colaborador internacional. Antes de la visita acuerdan por escrito comisión, protección del cliente, idioma de los documentos y quién coordina la reserva y la notaría, de modo que el comprador recibe una única versión de cada condición.",
      keyConcepts: [
        "sesgos cognitivos",
        "anclaje emocional",
        "coste hundido",
        "aversión a la pérdida",
        "conversaciones difíciles",
        "escalado a responsable",
        "colaboración entre agencias",
        "reparto de comisión",
      ],
      frequentErrors: [
        "Recibir dinero o anunciar un acuerdo antes de consolidar condiciones, versión y autorizaciones.",
        "Explotar el miedo o la urgencia de una persona vulnerable para forzar una decisión.",
        "Discutir un conflicto por mensajería informal sin registrar cronología ni canal formal.",
        "Compartir datos de identidad u oferta entre agencias colaboradoras sin autorización.",
      ],
      examples: [
        {
          id: "m14-l4-ex1",
          title: "Decisión emocional apresurada",
          scenario:
            "Comprador quiere reservar de inmediato por temor a perder un piso.",
          application:
            "El agente confirma documentación, presupuesto y condiciones antes de recibir dinero, proponiendo una reserva condicionada o una espera breve.",
          isBalearContext: false,
        },
        {
          id: "m14-l4-ex2",
          title: "Tasación insuficiente sin culpar",
          scenario: "La tasación sale por debajo de lo esperado.",
          application:
            "En lugar de culpar al banco o al vendedor, el agente reúne información y explica opciones (aportación adicional, renegociación, nueva entidad, desistimiento condicionado).",
          isBalearContext: false,
        },
        {
          id: "m14-l4-ex3",
          title: "Doble intermediación",
          scenario:
            "Agencia presenta a un cliente que ya figura en el expediente de otra agencia.",
          application:
            "Aclarar la situación con ambas partes antes de continuar, evitando conflicto de comisión.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l5",
      moduleId: "m14",
      title: "De la oferta escrita a la reserva y las arras",
      order: 5,
      summary:
        "La oferta escrita, la reserva y las arras son figuras jurídicas distintas con efectos diferentes, y confundirlas o usarlas sin condiciones claras genera el mayor riesgo de conflicto de todo el módulo.",
      content: `La oferta escrita convierte el interés en condiciones verificables: comprador, inmueble, precio, forma de pago, vigencia, financiación, bienes incluidos, calendario, reserva prevista y canal de aceptación. No debe ambigüedad en anexos ocultos ni en frases como "sujeta a banco" sin condición, plazo, alcance y consecuencia explícitos. Una contraoferta modifica una propuesta anterior y debe indicar qué cláusulas cambian y qué se mantiene; cuando se intercambian varias versiones por teléfono o mensajería, el riesgo es que una parte considere aceptado algo que la otra considera pendiente — la disciplina comercial exige consolidar cada versión con fecha, autor, destinatario y vigencia, y no dar por aceptado un silencio, una reacción a un mensaje o una frase ambigua.

## La reserva: propósito y límites

La reserva sirve para ordenar un periodo corto de preparación y evitar que el activo se siga ofreciendo, bajo condiciones definidas; no debe usarse como un nombre comercial vacío. Antes de recibir una cantidad debe aclararse quién paga, a quién, en qué cuenta, qué obligación asume cada parte, qué documentos faltan, cuál es el plazo para pasar a arras y qué ocurre si no se llega a ellas. Una reserva no debe sustituir a las arras cuando la operación ya necesita regular incumplimiento, financiación, cargas, posesión o condiciones complejas.

## Arras: función y tipos (art. 1454 Código Civil)

Las arras son una entrega de dinero vinculada a una compraventa futura o ya perfeccionada, que puede cumplir función confirmatoria, penal o penitencial según lo pactado y la interpretación jurídica aplicable. El Código Civil regula en su artículo 1454 las arras o señal en compraventa en términos que suelen asociarse al desistimiento, pero el efecto concreto depende del pacto y de los hechos: no basta usar la palabra "arras" para saber qué ocurre ante incumplimiento — decir que "siempre se pierde el doble" es una explicación simplista que debe remitirse a redacción clara y, en caso de complejidad, a asesoramiento jurídico.

## Condiciones suspensivas y resolutorias, documentación previa y fondos

Una condición permite que ciertos efectos dependan de un hecho futuro e incierto o de una comprobación pendiente (financiación, cancelación de carga, venta previa, obtención de documento, regularización). Una condición bien diseñada identifica quién debe hacer qué, en qué plazo, qué prueba debe aportarse y qué ocurre si se cumple o no; las condiciones vagas ("sujeto a que salga todo bien") no protegen a nadie. Antes de comprometer arras, el agente comprueba que la documentación disponible permita una decisión razonable (titularidad, cargas, comunidad, deudas, habitabilidad, situación urbanística). El circuito de fondos debe ser simple: cuenta autorizada, pagador identificado, concepto, conciliación y archivo, evitando el atajo de "primero entra el dinero y luego vemos el contrato". El dinero nunca debe llegar antes que la decisión documentada.`,
      easyExplanation:
        'Una oferta por escrito debe decir claramente precio, forma de pago, plazo y qué se incluye — nada de frases sueltas por WhatsApp que cada uno interpreta a su manera. La reserva es solo un paréntesis corto para preparar la operación, mientras que las arras (reguladas en el Código Civil) son dinero de verdad con consecuencias legales si alguien se echa atrás, y su efecto exacto depende de lo que se haya pactado por escrito, no solo del nombre "arras". Antes de que entre dinero, hay que tener claros los documentos y las condiciones.',
      balearExample:
        'Una compradora en Sant Llorenç hace una oferta de 520.000 euros "sujeta a banco". El agente convierte la frase ambigua en una condición con plazo, alcance y consecuencias concretas, evitando que vendedor y comprador entiendan cosas distintas sobre qué pasa si no se concede el préstamo.',
      keyConcepts: [
        "oferta escrita",
        "contraoferta",
        "reserva",
        "arras confirmatorias/penales/penitenciales",
        "artículo 1454 CC",
        "condición suspensiva",
        "condición resolutoria",
        "circuito de fondos",
      ],
      frequentErrors: [
        "Recibir dinero o anunciar un acuerdo antes de consolidar condiciones, versión y autorizaciones.",
        'Usar la palabra "arras" sin describir sus efectos concretos en el contrato.',
        'Redactar condiciones vagas ("sujeto a que salga todo bien") que no protegen a ninguna parte.',
        "Aceptar pagos desde cuentas o pagadores no identificados sin explicación documentada.",
      ],
      examples: [
        {
          id: "m14-l5-ex1",
          title: "Contraoferta sin versión única",
          scenario:
            'El vendedor responde "de acuerdo, salvo los muebles".',
          application:
            "El agente no lo interpreta como aceptación total; emite contraoferta con inventario excluido, nueva fecha y vigencia para aceptación expresa.",
          isBalearContext: false,
        },
        {
          id: "m14-l5-ex2",
          title: "Arras genéricas insuficientes",
          scenario:
            "Una venta depende de cancelar una hipoteca y de la financiación del comprador.",
          application:
            "Una cláusula de arras genérica no basta; el contrato debe concretar hitos, prueba de gestión y consecuencias si cada condición falla.",
          isBalearContext: false,
        },
        {
          id: "m14-l5-ex3",
          title: "Condición de financiación operativa",
          scenario:
            "Oferta condicionada a financiación de al menos 300.000 € en 25 días.",
          application:
            "El documento indica qué prueba acredita la solicitud y resolución, y qué ocurre si la solicitud se deniega pese a gestión diligente.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l6",
      moduleId: "m14",
      title:
        "Ofertas múltiples, competencia y financiación como variable",
      order: 6,
      summary:
        "Cuando existen varias ofertas o varios interesados, la agencia debe aportar más orden y trazabilidad, nunca más presión ni ventajas ocultas para unos frente a otros.",
      content: `Las ofertas múltiples exigen más orden, no más presión. La agencia debe comunicar al vendedor todas las propuestas completas y definir un proceso razonable: plazo común, criterio de evaluación, posibilidad o no de mejor y última oferta, y tratamiento de datos confidenciales. Al comprador solo se le puede informar de competencia real en términos que no revelen indebidamente detalles de otros interesados, y nunca deben inventarse ofertas o usarse información de una parte para mejorar la posición de otra sin autorización. La decisión no es automática por precio: solvencia, claridad de condiciones, entrega, contingencias y capacidad de firmar pueden modificar el resultado, y toda elección debe documentarse para evitar alegaciones de trato opaco.

## Preparar al vendedor y al comprador antes de recibir ofertas

El vendedor debe saber cómo se presentarán las ofertas y qué variables podrá evaluar: precio objetivo, margen de negociación, condiciones aceptables, bienes incluidos, plazos de firma, disponibilidad de entrega, tratamiento de cargas y derramas, reserva y comunicación con otros interesados. Esto se acuerda por escrito o de forma trazable antes de la negociación, evitando que la agencia deba improvisar frente al comprador o que el propietario reciba una oferta con expectativas irreales. El comprador, por su parte, debe entender que una oferta no es solo una cifra sino una propuesta de contrato con consecuencias: revisar el inmueble, el coste total, las condiciones de financiación, la documentación disponible, los elementos incluidos, el calendario y qué ocurrirá si no se cumplen ciertas condiciones.

## Financiación como variable de negociación

La financiación no es un detalle administrativo: afecta probabilidad de cierre, calendario y riesgo. Una oferta con préstamo debe explicar si existe preanálisis, importe estimado, tasación prevista, plazo y condición. El vendedor necesita saber si la operación depende de la entidad, de venta de otra vivienda, de avalistas o de fondos externos; el comprador necesita entender que la tasación y la evaluación de solvencia pueden modificar el resultado. El agente no debe solicitar más datos de los necesarios ni prometer que el banco aprobará, y debe coordinar el calendario con la Ley de Contratos de Crédito Inmobiliario (Ley 5/2019) y con la notaría, manteniendo separación entre mediación inmobiliaria y crédito, revisando el marco de retribución aplicable si existe canalización de financiación remunerada.

## Competencia legítima y transparencia con copropietarios

Cuando hay varios titulares (por ejemplo, copropietarios), la agencia debe comprobar que quien acepta tenga forma válida de hacerlo — una videollamada no sustituye poder o consentimiento formal si el acto lo exige, y debe prepararse aceptación trazable y coordinada con notaría. En el caso de compradores internacionales o con pagadores terceros (por ejemplo, un familiar que transfiere fondos desde otro país), debe documentarse la relación, el propósito y la cuenta del pagador tercero, sin presentar el pago como si procediera directamente del comprador.`,
      easyExplanation:
        "Si hay varias personas interesadas en la misma vivienda, el trabajo del agente es poner orden y explicar las reglas a todos por igual (plazo, cómo se evaluará cada oferta), nunca inventar competencia ni presionar para que alguien suba el precio con información falsa. La financiación de un préstamo también cuenta como parte de la oferta: no es lo mismo una oferta alta que depende de que el banco apruebe todo, que una oferta algo menor pero con el dinero ya disponible.",
      balearExample:
        'Un piso en Santa Catalina (Palma) recibe dos propuestas: una de 730.000 € a 60 días, y otra de 720.000 € de una compradora no residente que acredita fondos y solicita 20 días para due diligence. El vendedor pide conocer la cifra de la otra oferta "para ver si sube" — la agencia no revela cifras ni identidad sin autorización, y fija un plazo común de mejora si el vendedor lo autoriza.',
      keyConcepts: [
        "ofertas múltiples",
        "mejor y última oferta",
        "transparencia con el vendedor",
        "preparación del vendedor",
        "preparación del comprador",
        "financiación como variable",
        "Ley 5/2019 de crédito inmobiliario",
        "pagador tercero",
      ],
      frequentErrors: [
        "Revelar cifras, identidad o financiación de una oferta a otro comprador sin autorización.",
        "Inventar o insinuar competencia inexistente para presionar una decisión.",
        'Aceptar una oferta "más alta" sin comparar solvencia, condiciones y probabilidad real de cierre.',
        "Interpretar una conversación bancaria preliminar como aprobación definitiva de un préstamo.",
      ],
      examples: [
        {
          id: "m14-l6-ex1",
          title: "Oferta alta con tasación insuficiente",
          scenario:
            "Marta ofrece 540.000 € por una vivienda en Son Vida anunciada en 565.000, con préstamo de 405.000 €; la tasación posterior llega a 515.000 € y el banco limita el préstamo.",
          application:
            "Presentar alternativas completas (aportación adicional, ajuste de precio, cambio de entidad, revisión de mobiliario, ampliación de plazo o resolución según contrato) sin exigir al comprador una financiación que no obtiene.",
          isBalearContext: true,
        },
        {
          id: "m14-l6-ex2",
          title: "Ofertas múltiples con compra internacional",
          scenario:
            "Dos propuestas sobre un piso en Santa Catalina, una con financiación y firma a 60 días, otra de compradora no residente con fondos acreditados y necesidad de que sus padres transfieran la reserva.",
          application:
            "Verificar identidad y autoridad de copropietarios, fijar reglas comunes de mejora, no divulgar datos entre ofertas y documentar el pagador tercero.",
          isBalearContext: true,
        },
        {
          id: "m14-l6-ex3",
          title: "Preparar al vendedor antes de recibir ofertas",
          scenario:
            'Un propietario acepta verbalmente "cualquier oferta razonable".',
          application:
            "El agente convierte esa frase en criterios concretos (mínimo deseado, fecha de entrega, muebles, condición de financiación) antes de que llegue la primera propuesta.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m14-l7",
      moduleId: "m14",
      title: "Escritura, entrega, archivo y posventa",
      order: 7,
      summary:
        "El cierre notarial, la entrega de posesión y la posventa forman parte del servicio profesional: dar por terminada la operación con la firma, sin coordinar entrega y archivo, es el error final más costoso.",
      content: `Después de arras, el cierre requiere coordinación de documentación, financiación, pagos, notaría y entrega. El agente trabaja con un calendario inverso: fecha objetivo, plazo LCCI si hay préstamo, documentación pendiente del vendedor, certificados, cancelaciones, poderes, comprobaciones del comprador, instrucciones de pago y agenda de llaves. No sustituye al notario ni decide sobre la escritura; su función es detectar faltas, conseguir documentos, alinear a las partes y registrar cambios. Antes de la firma se recomienda una lista de "no salir de oficina sin confirmar": quién firma, con qué documento, qué importe se paga, desde qué cuenta, qué carga se cancela, qué certificados se han recibido, quién entrega llaves y qué ocurre si una condición no llega a tiempo.

## Renegociación antes de firma y gestión de riesgos de vivienda

La renegociación aparece cuando cambia un hecho relevante: tasación inferior, denegación parcial de préstamo, documento que revela una carga, retraso de obra, incidencia técnica, retraso de venta previa o modificación de disponibilidad. La respuesta correcta es identificar si el cambio está cubierto por el contrato, qué parte lo asume y qué alternativas existen, documentando siempre el acuerdo modificado. En paralelo, la negociación de una vivienda debe incorporar situaciones que afectan al uso y coste: arrendatarios, ocupación, contratos vigentes, derramas, obras comunitarias, restricciones estatutarias, vivienda protegida, limitaciones turísticas, ITE/IAE, certificación energética o documentación pendiente — la pregunta no es "¿se puede vender?" sino "¿qué compra exactamente el comprador, desde cuándo y con qué cargas o límites?".

## Cierre notarial y rol de la agencia

El cierre notarial formaliza una fase decisiva, pero la agencia no desaparece hasta que las partes comprenden el recorrido de pagos, documentos, posesión y próximos pasos. Antes de firma, confirma asistencia, identidad, poderes, medios de pago, datos de contacto, documentación pendiente y quién coordinará la entrega; durante la firma mantiene un rol de apoyo logístico, sin interferir en explicaciones notariales ni presionar a firmar si surge una duda sustancial. Un ejemplo del módulo: en la firma aparece una discrepancia sobre un trastero; el agente detiene la entrega de llaves, pide aclaración al notario y ayuda a documentar la solución antes de continuar.

## Entrega de posesión, posventa y archivo trazable

La escritura no sustituye el protocolo de entrega: la posesión práctica requiere llaves, mandos, códigos, suministros, inventario, estado visible, lecturas de contadores y contacto de comunidad. Se recomienda un acta simple de entrega con fotos, fecha y firmas, sin convertirla en documento técnico o jurídico fuera de alcance. La posventa no consiste en desaparecer tras cobrar: durante los días posteriores pueden surgir dudas sobre suministros, comunidad, documentación, impuestos, llaves, objetos o reparaciones — la agencia responde con plazo, responsable y evidencia, sin aceptar responsabilidad automática por cuestiones ajenas ni ignorar comunicaciones relevantes. El expediente final (archivo de la operación) debe permitir reconstruir toda la operación sin depender de la memoria de quien la llevó: encargo, identidad y representación, comunicaciones relevantes, documentación del inmueble, ofertas y contraofertas, reserva o arras, controles de PBC/FT, financiación, calendario, escritura, acta de entrega, factura y posventa, aplicando reglas de conservación, seguridad y minimización. Los indicadores de calidad de cierre deben medir causas de caída y no solo el volumen de ventas firmadas (conversión de visita a oferta, oferta a reserva, reserva a arras, arras a escritura, días por fase), para mejorar el proceso sin premiar presión comercial que genere desistimientos o reclamaciones.`,
      easyExplanation:
        "Firmar en la notaría no es el final del trabajo: hay que entregar las llaves, revisar que todo esté como se pactó, dejar constancia por escrito de lo entregado (con fotos si hace falta) y seguir disponible por si surge alguna duda después. Guardar bien todos los papeles de la operación (ofertas, contratos, entrega) protege tanto al cliente como a la agencia si algo se reclama meses después. Y medir cuántas operaciones se caen y por qué ayuda a mejorar, no solo a contar cuántas se firman.",
      balearExample:
        "En Sóller, tres hermanos venden una casa heredada; uno vive en Francia y quiere firmar mediante poder, mientras aún no hay aceptación de herencia inscrita ni certificado de deuda cero. El agente no permite avanzar a arras sin condiciones hasta comprobar titulares, herencia, cancelación registral de la hipoteca y poder internacional revisado, aunque el vendedor presione por la fecha.",
      keyConcepts: [
        "calendario inverso",
        "checklist previo a firma",
        "renegociación",
        "entrega de posesión",
        "acta de entrega",
        "posventa",
        "archivo de la operación",
        "indicadores de calidad de cierre",
      ],
      frequentErrors: [
        "Dar por terminada la operación en la escritura sin documentar posesión, tareas posteriores y archivo.",
        "Prometer una solución jurídica o financiera sin competencia ni autorización durante una renegociación.",
        "Entregar llaves o acceso antes de confirmar el hito contractual y la autorización correspondiente.",
        "Medir el éxito solo por escrituras firmadas, sin analizar causas de caída ni desistimientos.",
      ],
      examples: [
        {
          id: "m14-l7-ex1",
          title: "Discrepancia en la firma",
          scenario:
            "Aparece una duda sobre si un trastero está incluido.",
          application:
            "El agente detiene la entrega de llaves, pide aclaración al notario y documenta la solución antes de seguir.",
          isBalearContext: false,
        },
        {
          id: "m14-l7-ex2",
          title: "Vivienda con inquilino y derrama",
          scenario:
            "Comprador quiere mudarse en dos meses; el piso tiene inquilino con contrato vigente y una derrama aprobada no mencionada en el anuncio.",
          application:
            "Actualizar el dossier con la información material, definir condición de entrega y tratamiento de derrama, y derivar los aspectos jurídicos de arrendamiento con asesoramiento.",
          isBalearContext: false,
        },
        {
          id: "m14-l7-ex3",
          title: "Archivo tras la venta",
          scenario:
            "Seis meses después, un vendedor cuestiona qué se comunicó sobre una derrama.",
          application:
            "El expediente permite localizar ficha, correo de envío, oferta y acta de entrega; la agencia responde con hechos, no con recuerdos.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m14-e1",
      moduleId: "m14",
      type: "case",
      question:
        "Marta ofrece 540.000 € por una vivienda en Son Vida anunciada en 565.000, aportando 135.000 € propios y necesitando un préstamo de 405.000 €. Pide 30 días para financiación y desea incluir parte del mobiliario. El vendedor ya ha reservado otra vivienda, quiere firma rápida y afirma que no aceptará condiciones. La tasación posterior llega a 515.000 € y el banco limita el préstamo.",
      expectedAnswer:
        "Revisar qué se firmó (oferta, reserva o arras) y qué condición financiera y plazo se pactaron; presentar al vendedor alternativas completas (aportación adicional del comprador, ajuste de precio, cambio de entidad, revisión de mobiliario, ampliación de plazo o resolución según contrato); no exigir al comprador que asuma una financiación que no obtiene ni prometer que otro banco resolverá.",
      explanation:
        "Una condición financiera bien redactada evita convertir una caída de tasación en un conflicto de intenciones; precio, riesgo y tiempo deben negociarse como paquete.",
      difficulty: "medium",
    },
    {
      id: "m14-e2",
      moduleId: "m14",
      type: "case",
      question:
        'Un piso en Santa Catalina recibe dos propuestas: 730.000 € con financiación y firma a 60 días, y 720.000 € de una compradora no residente que acredita fondos, solicita 20 días de due diligence y necesita que sus padres transfieran la reserva. El vendedor pide conocer la cifra de la otra oferta para "ver si sube". Un copropietario está de viaje y solo puede aceptar por videollamada.',
      expectedAnswer:
        "Comprobar que ambas ofertas sean completas y que el copropietario tenga forma válida de aceptar; no revelar cifras, identidad ni financiación de una oferta a la otra parte sin autorización; comunicar competencia real y fijar plazo común de mejora solo si el vendedor lo autoriza; documentar identidad del comprador y de los padres pagadores, relación, cuenta, propósito y calendario; la videollamada no sustituye poder o consentimiento formal si el acto lo exige.",
      explanation:
        'La oferta "más alta" no siempre es la mejor; la decisión debe ser transparente, proporcional y defendible con condiciones completas.',
      difficulty: "advanced",
    },
    {
      id: "m14-e3",
      moduleId: "m14",
      type: "decision",
      question:
        "Durante una visita en Sant Llorenç, el interesado pregunta por una mancha de humedad visible en el techo. ¿Cuál es la respuesta profesional correcta del agente?",
      options: [
        'Minimizar diciendo que es "solo condensación sin importancia"',
        "Ignorar la pregunta y seguir con la visita",
        "Registrar la observación, indicar que se revisará documentación y se pedirá explicación al propietario, y recomendar revisión técnica si es material",
        "Prometer que el propietario bajará el precio por esa incidencia",
      ],
      expectedAnswer: "c",
      explanation:
        "No se debe fabricar diagnóstico ni minimizar una incidencia visible sin base; el agente describe lo observado, deriva a comprobación técnica y no promete descuentos que no ha autorizado el propietario.",
      difficulty: "basic",
    },
    {
      id: "m14-e4",
      moduleId: "m14",
      type: "case",
      question:
        'Un comprador quiere mudarse a Palma en dos meses. El piso tiene un inquilino con contrato vigente hasta final de año y la comunidad ha aprobado una derrama para la fachada, pagadera en dos cuotas. El anuncio no menciona ni la ocupación ni la derrama. Tras la visita, el comprador hace una oferta cercana al precio y pide entrega libre; el propietario dice "ya veré cómo hablar con el inquilino".',
      expectedAnswer:
        'Actualizar anuncio y dossier con la información material (ocupación y derrama); solicitar contrato de arrendamiento, actas y certificado de comunidad; definir condición de entrega y tratamiento de la derrama en el contrato; derivar los aspectos jurídicos de arrendamiento y posesión a asesoramiento competente; no aceptar la promesa de "vivienda libre" sin base documental.',
      explanation:
        "La posesión y la derrama son materiales porque afectan uso, coste y fecha; ocultar el dato no es una estrategia de cierre válida, crea riesgo de consumo y conflicto contractual.",
      difficulty: "advanced",
    },
    {
      id: "m14-e5",
      moduleId: "m14",
      type: "comprehension",
      question:
        "Explica la diferencia práctica entre una reserva y unas arras, incluyendo cuándo una reserva resulta insuficiente para la operación.",
      expectedAnswer:
        "La reserva ordena un periodo corto de preparación bajo condiciones definidas, sin regular necesariamente incumplimiento, financiación o cargas complejas; las arras (art. 1454 CC) son una entrega de dinero vinculada a una compraventa futura o perfeccionada que puede tener efecto confirmatorio, penal o penitencial según lo pactado, y deben usarse cuando la operación ya necesita regular incumplimiento, financiación, cargas, posesión o condiciones complejas.",
      explanation:
        "Confundir ambas figuras o usar arras genéricas sin describir sus efectos concretos es uno de los errores frecuentes señalados en el módulo.",
      difficulty: "medium",
    },
    {
      id: "m14-e6",
      moduleId: "m14",
      type: "decision",
      question:
        'Dos hermanos venden una vivienda heredada. Uno acepta verbalmente una oferta de 420.000 € pero el otro no se ha pronunciado. El comprador presiona para "cerrar ya". ¿Qué debe hacer el agente?',
      options: [
        "Comunicar al comprador que la oferta ha sido aceptada",
        'Recibir una señal del comprador para "asegurar" la operación',
        "Comunicar que la oferta está en estudio y no recibir señal hasta contar con aceptación verificable de todos los titulares o representante con facultades suficientes",
        "Pedir al hermano ausente que confirme por un mensaje informal de WhatsApp sin más comprobación",
      ],
      expectedAnswer: "c",
      explanation:
        "Cuando hay varios titulares, no se debe presentar una aceptación como final sin consentimiento del titular o representante con facultades documentadas.",
      difficulty: "medium",
    },
    {
      id: "m14-e7",
      moduleId: "m14",
      type: "balear_scenario",
      question:
        "Tres hermanos venden una casa heredada en Sóller. La nota simple sigue a nombre de la madre fallecida y muestra una hipoteca de 2008 que, según los hermanos, está pagada. Uno vive en Francia y pretende firmar mediante poder. Un comprador local ofrece 680.000 € y quiere escritura en 45 días. La agencia ha recibido una reserva, pero todavía no hay aceptación de herencia inscrita, certificado de deuda cero ni poder revisado. El vendedor presiona para mantener la fecha porque necesita la señal para otra compra.",
      expectedAnswer:
        "Explicar al comprador que existe tracto sucesorio pendiente, cancelación registral por gestionar y representación internacional por verificar; coordinar aceptación y adjudicación de herencia, certificado de deuda cero, carta de pago y escritura o cancelación de hipoteca, y poder suficiente y vigente para el hermano no residente; la reserva debe reflejar estas condiciones, la cuenta de fondos y una fecha realista; si las condiciones no se cumplen, el contrato debe prever salida o prórroga; no usar el dinero de la señal para ocultar que faltan pilares jurídicos del cierre.",
      explanation:
        "Una fecha deseada no crea capacidad de firmar; la mejor negociación explica la ruta documental antes de comprometer a las partes.",
      difficulty: "advanced",
    },
    {
      id: "m14-e8",
      moduleId: "m14",
      type: "comprehension",
      question:
        "Un comprador no residente presenta una oferta de 650.000 € por una vivienda en Palma anunciada en 690.000, depende de financiación, quiere incluir mobiliario, solicita entrega 45 días después de la escritura, y pretende que sus padres transfieran la reserva. El vendedor tiene otra oferta de 660.000 € pero sujeta a venta previa. Explica: 1) qué datos pedirías; 2) cómo estructurarías ambas ofertas; 3) qué advertencias y controles aplicarías; 4) cómo prepararías reserva, arras y firma.",
      expectedAnswer:
        "1) Identidad y autoridad de comprador y pagador tercero (padres), estado real de financiación (preanálisis, importe, plazo), inventario de mobiliario, calendario de entrega, y estado y plazo de la venta previa del otro comprador. 2) Presentar ambos paquetes completos al vendedor sin ocultar condiciones, indicando probabilidad de cierre de cada uno. 3) Verificar origen y relación del pagador tercero, no prometer aprobación bancaria, coordinar plazo LCCI, evitar aceptar dinero antes de consolidar condiciones y versión única. 4) Reserva con condiciones de financiación y venta previa explícitas, arras con condiciones suspensivas claras (financiación, venta previa) y consecuencias definidas, y calendario de firma coordinado con notaría y banco.",
      explanation:
        "Ejercicio de síntesis que integra cualificación, financiación como variable, condiciones suspensivas y trazabilidad documental.",
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m14-q1",
      question:
        'Un comprador dice "hago una oferta" pero no indica precio, financiación ni plazo. ¿Qué debe hacer el agente?',
      options: [
        "Comunicar al vendedor que existe una oferta firme",
        "Pedir precio, financiación y plazo antes de tratarla como oferta evaluable",
        "Fijar el agente mismo esas condiciones en nombre del comprador",
        "Ignorar la declaración hasta la siguiente visita",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Sin esos elementos esenciales, no existe todavía información suficiente para pasar de interés a oferta evaluable.",
      sourceModuleId: "m14",
      legalReference: "Ficha 1 / Autoevaluación pregunta 1.",
      difficulty: "basic",
    },
    {
      id: "m14-q2",
      question:
        "¿Qué diferencia hay entre una señal de interés y una oferta evaluable?",
      options: [
        "Ninguna, son equivalentes",
        "La señal de interés (segunda visita, preguntar financiación) indica avance pero no constituye una propuesta con condiciones verificables como la oferta",
        "La oferta siempre requiere arras",
        "La señal de interés solo existe en compradores internacionales",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Las señales de interés deben interpretarse con prudencia y no confundirse con un compromiso formal.",
      sourceModuleId: "m14",
      legalReference: 'Ficha 14, Ficha "Observar señales de interés y de riesgo".',
      difficulty: "basic",
    },
    {
      id: "m14-q3",
      question:
        "Según el artículo 1454 del Código Civil, ¿qué determina el efecto real de unas arras?",
      options: [
        'El título del documento ("arras")',
        "El pacto entre las partes, su contexto y la norma aplicable, no solo el nombre del documento",
        "Siempre se pierde el doble de la cantidad entregada",
        "El notario decide el efecto en el momento de la firma",
      ],
      correctAnswerIndex: 1,
      explanation:
        'No basta usar la palabra "arras" para saber qué ocurre ante incumplimiento; el efecto depende del pacto y de los hechos.',
      sourceModuleId: "m14",
      legalReference:
        'Ficha 38 "Arras: función y tipos"; Autoevaluación pregunta 3 (solución).',
      difficulty: "medium",
    },
    {
      id: "m14-q4",
      question:
        "Un copropietario acepta una oferta y el otro no se ha pronunciado. ¿Qué debe comunicar la agencia?",
      options: [
        "Que la oferta está aceptada por mayoría",
        "Que la oferta está pendiente de aceptación de todos los titulares o de quien tenga facultades suficientes",
        "Que se puede formalizar reserva igualmente",
        "Que el silencio del segundo copropietario equivale a aceptación tácita",
      ],
      correctAnswerIndex: 1,
      explanation:
        "No debe presentarse una aceptación parcial como definitiva sin consentimiento o representación de todos los titulares.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 4 "Representación, encargo y autoridad para negociar"; Autoevaluación pregunta 4.',
      difficulty: "medium",
    },
    {
      id: "m14-q5",
      question:
        "¿Qué elementos debe incluir una condición de financiación operativa en una oferta?",
      options: [
        "Solo el importe del préstamo",
        "Importe, plazo, diligencia exigida, evidencia y consecuencia si no se obtiene la financiación",
        "Únicamente el nombre de la entidad bancaria",
        "La firma del director de la sucursal",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Una condición debe identificar hecho, plazo, prueba requerida y efecto si no se cumple; de lo contrario es una condición vaga.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 39 "Condiciones suspensivas y resolutorias"; Autoevaluación pregunta 5.',
      difficulty: "medium",
    },
    {
      id: "m14-q6",
      question:
        "¿Por qué una contraoferta debe consolidarse en una versión única?",
      options: [
        "Por estética del documento",
        "Para evitar que distintas versiones intercambiadas por mensajería generen disputas sobre qué se ofreció, cambió o aceptó",
        "Porque lo exige el banco",
        "Solo aplica a compradores internacionales",
      ],
      correctAnswerIndex: 1,
      explanation:
        'Consolidar cambios y condiciones supervivientes evita el clásico conflicto de "yo entendí otra cosa".',
      sourceModuleId: "m14",
      legalReference:
        'Ficha 36 "Contraofertas y aceptación: versión única"; Autoevaluación pregunta 6.',
      difficulty: "medium",
    },
    {
      id: "m14-q7",
      question:
        "Si la tasación resulta inferior al precio pactado, ¿cuál es la actuación correcta según el módulo?",
      options: [
        "Cancelar automáticamente la operación",
        "Presentar alternativas completas (aportación adicional, ajuste de precio, cambio de entidad, revisión de mobiliario, ampliación de plazo o resolución según contrato) sin prometer que otro banco resolverá",
        "Exigir al comprador que asuma la diferencia sin negociación",
        "Ocultar el resultado de la tasación al vendedor",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Toda modificación debe considerar precio neto, tiempo y probabilidad real de cada opción como paquete.",
      sourceModuleId: "m14",
      legalReference:
        'Caso práctico 1 "Oferta financiada y tasación insuficiente"; Autoevaluación pregunta 7.',
      difficulty: "advanced",
    },
    {
      id: "m14-q8",
      question: "¿Qué debe verificar el agente antes de recibir una reserva?",
      options: [
        "Solo que el comprador tenga ganas de comprar",
        "Quién paga, a quién, en qué cuenta, qué obligación asume cada parte, qué documentos faltan y qué ocurre si no se llega a arras",
        "El precio de venta de otras viviendas similares",
        "Nada, basta con recibir el dinero y luego regularizar",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El dinero nunca debe llegar antes que la decisión documentada.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 37 "Reserva: propósito y límites"; Autoevaluación pregunta 8.',
      difficulty: "medium",
    },
    {
      id: "m14-q9",
      question:
        "Explica la diferencia práctica entre reserva y arras según el módulo.",
      options: [
        "Son sinónimos legales",
        "La reserva organiza un periodo corto de preparación; las arras pactan efectos de mayor alcance en la compraventa (confirmatorio, penal o penitencial)",
        "Las arras solo se usan en compradores extranjeros",
        "La reserva siempre implica pérdida del doble del importe",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Confundir ambas figuras genera el riesgo de conflicto más citado en el módulo.",
      sourceModuleId: "m14",
      legalReference: "Autoevaluación pregunta 9 (solución oficial del PDF).",
      difficulty: "medium",
    },
    {
      id: "m14-q10",
      question:
        "¿Qué principio de privacidad aplica al expediente de un comprador?",
      options: [
        "Recoger toda la documentación posible desde el primer contacto",
        "Minimización: solicitar solo datos necesarios para la fase actual, con acceso limitado y trazabilidad",
        "Compartir los datos con cualquier colaborador de la agencia",
        "No es necesario proteger los datos económicos del comprador",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Pedir documentación excesiva demasiado pronto daña la confianza y aumenta el riesgo de privacidad.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 8 "Expediente del comprador y minimización de datos"; Autoevaluación pregunta 10.',
      difficulty: "basic",
    },
    {
      id: "m14-q11",
      question:
        "¿Qué no puede prometer un agente sobre una hipoteca o una licencia turística?",
      options: [
        "Puede prometer libremente ambas cosas si el cliente insiste",
        "No debe afirmar que un préstamo será concedido, que una cuota será definitiva, ni que una licencia turística se obtendrá automáticamente",
        "Solo puede prometer la hipoteca, no la licencia",
        "Puede prometerlo si lo comunica de palabra, no por escrito",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El entusiasmo comercial no sustituye una estructura financiera o administrativa viable.",
      sourceModuleId: "m14",
      legalReference: "Ficha 5 y Ficha 10; Autoevaluación pregunta 11.",
      difficulty: "medium",
    },
    {
      id: "m14-q12",
      question: "¿Qué debe contener un acta de entrega de llaves?",
      options: [
        "Solo la fecha",
        "Identidad y momento autorizado de entrega, registro de llaves/mandos/códigos, lecturas e inventario cuando corresponda, y firma con archivo fotográfico",
        "Nada, basta con un mensaje de texto confirmando la entrega",
        "Únicamente la firma del comprador",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La posesión práctica requiere trazabilidad completa para evitar discusiones basadas en recuerdos.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 46 "Entrega de posesión, llaves e inventario"; Autoevaluación pregunta 12.',
      difficulty: "medium",
    },
    {
      id: "m14-q13",
      question: "¿Cómo se comunica una oferta múltiple de forma legítima?",
      options: [
        "Revelando cifras y datos de cada comprador a los demás para generar presión",
        "Confirmando que cada oferta es real y verificable, presentando paquetes completos al vendedor, definiendo plazo y reglas de mejora para todos, y sin revelar cifras o datos ajenos sin autorización",
        "Aceptando siempre la oferta más alta sin más análisis",
        "Inventando una oferta adicional para acelerar la decisión",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La legitimidad de la competencia exige reglas coherentes, veracidad, confidencialidad y trazabilidad.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 27 "Ofertas múltiples y competencia legítima"; Autoevaluación pregunta 13.',
      difficulty: "advanced",
    },
    {
      id: "m14-q14",
      question: "¿Qué papel tiene el agente en la firma notarial?",
      options: [
        "Sustituir al notario en la explicación del contrato",
        "Un rol de apoyo logístico y de comunicación: confirmar asistencia, identidad, poderes, medios de pago y documentación pendiente, sin interferir en explicaciones notariales ni presionar a firmar ante una duda sustancial",
        "Presionar a las partes para firmar rápido y cobrar antes",
        "No tiene ningún papel una vez fijada la cita",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La comisión no justifica acelerar una firma con una cuestión material sin resolver.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 45 "Cierre notarial: rol de la agencia"; Autoevaluación pregunta 14.',
      difficulty: "medium",
    },
    {
      id: "m14-q15",
      question:
        "¿Por qué es relevante el archivo de la operación tras la escritura?",
      options: [
        "Solo para justificar honorarios",
        "Porque permite reconstruir la operación (ofertas, contratos, entrega, comunicaciones) sin depender de la memoria de quien la llevó, y responder a reclamaciones o inspecciones con evidencia",
        "No es relevante una vez firmada la escritura",
        "Solo debe conservarse un año",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El expediente final protege a cliente y agencia y permite aprender de errores de proceso.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 48 "Archivo de la operación y trazabilidad"; Autoevaluación pregunta 15.',
      difficulty: "medium",
    },
    {
      id: "m14-q16",
      question:
        "¿Qué distingue a un indicador de calidad de cierre maduro de uno superficial?",
      options: [
        "Medir solo el número de escrituras firmadas",
        "Analizar conversión por fase (visita-oferta, oferta-reserva, reserva-arras, arras-escritura), causas de caída y desviación de precio, no solo el resultado final",
        "Comparar únicamente el tiempo total de cada visita",
        "Premiar al agente con más operaciones firmadas sin importar el método",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Un ratio de cierre alto puede ocultar presión o filtrado excesivo; hay que combinar volumen con calidad y revisar casos perdidos.",
      sourceModuleId: "m14",
      legalReference: 'Ficha 49 "Indicadores de calidad de cierre".',
      difficulty: "advanced",
    },
    {
      id: "m14-q17",
      question:
        'Un vendedor de un piso en Alcúdia dice a la agencia "puedes ocultar la derrama aprobada, así vendemos antes". ¿Cuál es la respuesta correcta?',
      options: [
        "Aceptar porque el cliente lo pide y es su vivienda",
        "Explicar que la derrama es información material que debe incluirse en el dossier y comunicarse antes de que el comprador entregue dinero, evitando riesgo de consumo y conflicto contractual",
        "Mencionarlo solo si el comprador pregunta directamente",
        "Incluirlo únicamente en la escritura final, no antes",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ocultar un dato material no es una estrategia de cierre válida; deriva en reclamaciones de consumo.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 42 "Gestión de riesgos de vivienda, comunidad y ocupación"; Caso práctico 3.',
      difficulty: "advanced",
    },
    {
      id: "m14-q18",
      question:
        '¿Qué debe hacer el agente si una parte introduce urgencia repentina ("necesito firmar ya por un viaje") durante la negociación?',
      options: [
        "Aceptar la urgencia como argumento decisivo sin comprobarla",
        "Preguntar qué hecho concreto fija ese plazo, incorporarlo al calendario si es real y verificable, y no convertirlo en argumento para reducir el tiempo de reflexión de la otra parte si no puede verificarse o autorizarse",
        "Ignorar la urgencia por sistema",
        "Usar la urgencia de una parte para presionar a la otra a ceder en precio",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La urgencia real se incorpora al calendario; la urgencia no verificada no debe usarse como palanca de presión.",
      sourceModuleId: "m14",
      legalReference:
        'Ficha 21 "Negociar: finalidad, ética y estructura"; Ficha 30 "Financiación como variable de negociación".',
      difficulty: "medium",
    },
  ],
};

export const m14Glossary: GlossaryItem[] = [
  {
    id: "g-m14-arras-confirmatorias",
    term: "Arras confirmatorias",
    definition:
      "Modalidad de arras cuyo efecto refuerza la existencia de un contrato ya perfeccionado, sin otorgar por sí solas derecho de desistimiento.",
    easyDefinition:
      'Una señal que confirma que ya hay acuerdo, no una "puerta de salida" pactada.',
    relatedModuleId: "m14",
  },
  {
    id: "g-m14-arras-penitenciales",
    term: "Arras penitenciales",
    definition:
      "Modalidad de arras que sí permite a las partes desistir del contrato, asumiendo la consecuencia pactada (normalmente perder la señal o devolverla duplicada), conforme a lo previsto en el artículo 1454 del Código Civil y a lo acordado.",
    easyDefinition:
      'Dinero que permite "echarse atrás" pagando el precio pactado por hacerlo.',
    relatedModuleId: "m14",
  },
  {
    id: "g-m14-batna",
    term: "BATNA (mejor alternativa a un acuerdo negociado)",
    definition:
      "La opción más favorable de la que dispone una parte si la negociación no llega a un acuerdo (buscar otro comprador, alquilar, esperar financiación, etc.).",
    easyDefinition: 'Tu "plan B" si esta venta no se cierra.',
    relatedModuleId: "m14",
  },
  {
    id: "g-m14-zona-posible-acuerdo",
    term: "Zona de posible acuerdo",
    definition:
      "El rango en el que las condiciones mínimas aceptables de comprador y vendedor se solapan y, por tanto, existe un acuerdo posible.",
    easyDefinition:
      'El espacio de precios y condiciones donde ambas partes podrían decir "sí".',
    relatedModuleId: "m14",
  },
  {
    id: "g-m14-pbc-ft",
    term: "PBC/FT",
    definition:
      "Prevención de blanqueo de capitales y de la financiación del terrorismo, marco regulado por la Ley 10/2010 y su Reglamento, que exige diligencia debida y trazabilidad de fondos en las operaciones inmobiliarias.",
    easyDefinition:
      "Los controles obligatorios para asegurar que el dinero de una compraventa tiene un origen lícito y verificable.",
    relatedModuleId: "m14",
  },
  {
    id: "g-m14-calendario-inverso",
    term: "Calendario inverso",
    definition:
      "Técnica de planificación del cierre que parte de la fecha objetivo de firma y retrocede identificando cada hito y plazo previo (financiación LCCI, documentación, cancelaciones, poderes) necesario para llegar a tiempo.",
    easyDefinition:
      "Planificar de atrás hacia adelante, desde el día de la firma hasta hoy, para no dejar nada pendiente.",
    relatedModuleId: "m14",
  },
];

export const m14Alerts: string[] = [
  'El PDF indica expresamente que las fuentes fueron revisadas a 4 de julio de 2026 y que "en una operación real prevalecen los documentos, la norma consolidada y el trámite aplicable en la fecha concreta" — el contenido del módulo es formativo y de primera orientación profesional, no sustituye la consulta de la norma vigente en el momento de cada operación.',
  "Marco normativo citado como vigente y aplicable a este módulo: Código Civil arts. 1254 y ss. (consentimiento y obligaciones), 1445 y ss. (compraventa) y 1454 (arras) — BOE-A-1889-4763; TRLGDCU (Real Decreto Legislativo 1/2007) sobre información precontractual y protección de consumidores — BOE-A-2007-20505; RD 515/1989 sobre información a suministrar en compraventa y arrendamiento de viviendas — BOE-A-1989-11181; Ley 5/2019 de contratos de crédito inmobiliario, transparencia y coordinación con notaría — BOE-A-2019-3814; Ley 10/2010 y su Reglamento sobre PBC/FT, diligencia debida y trazabilidad de operaciones — BOE-A-2010-6737 y BOE-A-2014-4742.",
  "El módulo remite además a normativa balear y local (vivienda, RAIPI, urbanismo, consumo y trámites) que debe consultarse en BOIB, CAIB, Consell de Mallorca y el ayuntamiento competente en cada caso, así como a criterios de la AEPD y autoridades sectoriales en materia de privacidad, comunicación y medidas de seguridad aplicables a expedientes y CRM.",
  "El propio módulo señala su conexión con otros módulos del programa de 19 módulos que pueden tener actualizaciones propias: M1 (titularidad y derechos), M2 (fiscal), M5 (hipoteca/cargas), M6 (consumo), M7 (urbanismo), M8 (valoración), M9 (actividad profesional y vivienda), M10 (comercialización), M13 (ética), M15 (captación — próximo módulo del programa), M16 (tecnología), M17 (promoción), M18 (PBC/FT), M19 (RAIPI) — cualquier cambio normativo en esos módulos puede afectar directamente a los procedimientos de negociación y cierre descritos aquí.",
];
