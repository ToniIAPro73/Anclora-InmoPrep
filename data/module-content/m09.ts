import type { Module, GlossaryItem } from "@/lib/types";

export const m09Module: Module = {
  id: "m09",
  code: "M09",
  title: "Derecho Profesional Inmobiliario y Vivienda",
  order: 9,
  description:
    "Ley 5/2018, Ley 3/2024, ROAIB obligatorio, derecho a la vivienda y Viviendas de Precio Limitado.",
  estimatedMinutes: 50,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m09-l1",
      moduleId: "m09",
      title: "Actividad profesional inmobiliaria, roles y jerarquía normativa",
      order: 1,
      summary:
        "Define qué es la actividad de mediación inmobiliaria en Baleares, quién interviene en una operación y qué normas aplicar según el hecho concreto.",
      content: `La Ley 5/2018 de vivienda de las Illes Balears define al agente inmobiliario como la persona física o jurídica que se dedica de manera habitual y retribuida, en el territorio autonómico, a prestar servicios de mediación en operaciones como compraventa, opción de compra, alquiler, permuta o cesión de inmuebles y de derechos relacionados. Esta definición no depende de tener un local abierto ni de la marca comercial utilizada: depende de realizar habitual y retribuidamente servicios de mediación o gestión inmobiliaria. El régimen concreto de inscripción y requisitos se desarrolla en el Módulo 19.

En la práctica, la actividad profesional se despliega en cuatro planos que no deben confundirse: mediación (poner en contacto, filtrar demanda, organizar visitas y negociar dentro del mandato, sin garantizar que la operación se cerrará ni decidir por el cliente), información (explicar documentos y datos comprobados en lenguaje claro, sin emitir dictámenes jurídicos, técnicos o fiscales definitivos), gestión (coordinar citas, documentación y plazos con notaría, banco o técnicos, sin suplantar a la parte, firmar o recibir fondos sin autorización suficiente) y comercialización (preparar publicidad veraz, ficha y plan de difusión, sin prometer usos, licencias o rentabilidades no acreditadas).

## Fuentes y jerarquía para actuar con seguridad

La actividad inmobiliaria se mueve entre Derecho civil, consumo, vivienda, urbanismo, fiscalidad, protección de datos y prevención de blanqueo. No existe una sola ley estatal que agote todas las obligaciones del agente. La respuesta correcta identifica primero el hecho (mediación, transmisión, alquiler, promoción, publicidad, financiación o tratamiento de datos), después consulta la norma que resuelve ese hecho y, por último, revisa la regulación balear, municipal o sectorial que añada requisitos.

Conviene trabajar con una matriz de cinco niveles: (1) Contrato — define encargo, precio, comisión, duración y obligaciones concretas (ejemplo: exclusiva de tres meses con servicio y salida claros); (2) Civil y registral — el Código Civil y la legislación hipotecaria determinan quién puede disponer, poder de disposición y efectos de la operación (ejemplo: herencia no inscrita exige tracto antes de vender); (3) Consumo y vivienda — el TRLGDCU y el Real Decreto 515/1989 exigen información, transparencia y protección de destinatarios (ejemplo: no ocultar que una vivienda está sujeta a precio máximo); (4) Autonómico y local — la Ley 3/2024 balear añade cédula, vivienda protegida y planeamiento (ejemplo: cédula balear o compatibilidad urbanística); (5) Sectorial — turismo, costas, patrimonio, datos o blanqueo condicionan usos y actividad.

## Roles, competencias y límites profesionales

En una compraventa intervienen con frecuencia vendedor, comprador, agente, notario, registrador, entidad financiera, tasador, arquitecto o aparejador, administrador de fincas, gestor, asesor fiscal y, en ocasiones, abogado. Cada figura aporta una garantía distinta: el notario controla legalidad formal, capacidad y voluntad en la escritura, pero no sustituye la due diligence comercial previa ni la verificación técnica de lo prometido; el Registro publica derechos inscritos, no certifica automáticamente que una construcción tenga licencia o que un uso admitido coincida con la superficie física; el técnico mide, proyecta y emite informes de su competencia, pero no decide por sí solo el contenido de una inscripción ni la tributación; la entidad financiera analiza riesgo y tasación para su préstamo, no valida para el comprador el precio de mercado; el abogado asesora estrategia y riesgos jurídicos, y el agente debe facilitarle un expediente ordenado, no sustituir su dictamen.`,
      easyExplanation: `Un agente inmobiliario en Baleares es quien conecta compradores y vendedores (o arrendadores e inquilinos) de forma habitual y a cambio de una retribución. Puede informar, gestionar papeleo y anunciar la vivienda, pero no puede hacer de notario, técnico, banco ni abogado: cuando surge una duda que requiere uno de esos perfiles, debe derivarla y no inventarse la respuesta. Para actuar con seguridad hay que mirar primero qué está pasando (vender, alquilar, publicitar...) y luego buscar la norma exacta que lo regula, empezando por el contrato y terminando por normas locales o sectoriales.`,
      balearExample: `Un agente en Manacor recibe el encargo de vender un piso heredado por tres hermanos, uno de los cuales vive en Alemania. Antes de fijar precio, el agente identifica que la herencia no está inscrita en el Registro (falta tracto), pide a los herederos que acrediten la aceptación/adjudicación y deriva la formalización a notaría, sin prometer fecha de escritura hasta que el título esté resuelto.`,
      keyConcepts: [
        "actividad de mediación habitual y retribuida",
        "Ley 5/2018 balear",
        "mediación vs información vs gestión vs comercialización",
        "matriz de fuentes normativas",
        "Código Civil y legislación hipotecaria",
        "TRLGDCU y RD 515/1989",
        "roles del notario/registrador/técnico/entidad financiera/abogado",
        "límites profesionales del agente",
      ],
      frequentErrors: [
        "Creer que la profesionalidad depende de tener oficina abierta, cuando depende de la habitualidad y retribución del servicio.",
        "Aplicar solo la norma \"cómoda\" para el encargo e ignorar capas normativas de consumo o vivienda.",
        "Confundir la certificación notarial o registral con una garantía técnica o comercial completa.",
        "Prometer resultados (uso, licencia, rentabilidad) que dependen de terceros o de comprobaciones no realizadas.",
        "Sustituir al técnico, notario o abogado en vez de coordinar la consulta correcta.",
      ],
      examples: [
        {
          id: "m09-l1-ex1",
          title: "Servicio de información vs. dictamen",
          scenario: "Un cliente pregunta si una reforma es legalizable.",
          application:
            "El agente explica documentos disponibles pero deriva la respuesta definitiva a un técnico competente.",
          isBalearContext: false,
        },
        {
          id: "m09-l1-ex2",
          title: "Matriz de fuentes en un caso de alquiler turístico",
          scenario: "Un propietario quiere anunciar su piso para turismo.",
          application:
            "El agente revisa primero el contrato/encargo, después normativa de vivienda balear y finalmente normativa turística sectorial antes de publicar.",
          isBalearContext: false,
        },
        {
          id: "m09-l1-ex3",
          title: "Rol del Registro",
          scenario: "Una finca aparece inscrita sin incidencias.",
          application:
            "El agente no asume que eso certifica que la construcción tiene licencia; verifica también con el Ayuntamiento/técnico si es relevante.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l2",
      moduleId: "m09",
      title: "El encargo, la exclusiva y la información precontractual",
      order: 2,
      summary:
        "Explica cómo debe redactarse la hoja de encargo, la exclusiva y la comisión, y qué exige la información precontractual y la publicidad antes de comercializar un inmueble.",
      content: `El contrato de mediación inmobiliaria es normalmente atípico: se apoya en la autonomía de la voluntad y en las reglas generales de contratos. Debe describir el inmueble o derecho, identificar a quien encarga, concretar el servicio, señalar el precio de salida o rango, definir la remuneración y establecer la duración, sin dejar a interpretación futura si la comisión nace por reserva, por arras, por escritura, por presentación de un interesado o por otra causa.

La hoja de encargo no es un trámite decorativo: es el documento que permite verificar si se tiene autorización para fotografiar, publicar, compartir documentos, recibir una señal o colaborar con terceros. Debe identificar al propietario, usufructuario, heredero, apoderado, representante societario o cotitular, y adjuntar la base de su poder de disposición; describir la finca con dirección, CRU si lo hay, referencia catastral, anexos y cualquier diferencia conocida entre documentos; incluir los servicios (valoración orientativa, fotos, portales, filtrado, visitas, negociación, coordinación documental y acompañamiento); indicar con precisión la comisión, el impuesto indirecto que corresponda, el momento de devengo y quién la soporta; e incorporar autorización de publicidad y reglas de protección de datos sin convertirlas en cláusulas oscuras o desproporcionadas. Regla operativa clave: no se debe cobrar ni retener una reserva por el mero hecho de "estar trabajando" si el encargo no define esa facultad — la disponibilidad de fondos exige un protocolo específico, identificación del titular y trazabilidad.

## Exclusiva, duración y remuneración

Una exclusividad puede ser útil cuando permite invertir en fotografía, información técnica, campañas, filtrado y coordinación con el vendedor, pero para ser profesional debe delimitarse: qué inmuebles abarca, durante cuánto tiempo, qué servicios se prestan, qué ocurre con un comprador presentado durante la vigencia y cómo se comunica la terminación. Una cláusula ambigua o desproporcionada frente a un consumidor puede ser cuestionada. La comisión no debe presentarse como sorpresa al final: debe fijarse en importe o porcentaje, base de cálculo, IVA aplicable, momento de exigibilidad y supuestos de desistimiento o venta a interesado aportado. Si se trabaja para ambas partes, la transparencia debe reforzarse porque cada parte debe conocer la doble intervención y la retribución que pueda afectar a la percepción de imparcialidad.

## Información precontractual, publicidad y prueba

La información precontractual debe permitir una decisión razonada. En vivienda destinada a consumidores, el Real Decreto 515/1989 y el TRLGDCU exigen especial cuidado en identidad del vendedor o promotor, descripción, superficie, precio total, pagos, cargas, condiciones de entrega y documentación disponible. El material comercial debe distinguir hechos de opiniones: "orientación sur acreditada por plano" es un hecho comprobable, mientras que "luz extraordinaria" es una valoración comercial. Afirmaciones como "rentabilidad garantizada", "posibilidad de alquiler turístico", "obra legalizada" o "vistas protegidas para siempre" son de alto riesgo si no hay título, autorización o análisis suficiente; en caso de duda, la fórmula correcta es describir la situación actual y remitir a la comprobación documental. Buena práctica: crear una carpeta de "evidencia de anuncio" con la fuente de cada dato crítico (nota simple, cédula, certificado energético, licencia, estatutos, informe técnico o respuesta municipal), guardando versión y fecha de cada anuncio, plano, memoria de calidades, fotografía y mensaje relevante.`,
      easyExplanation: `Antes de vender o alquilar una vivienda hay que dejar por escrito quién encarga el trabajo, qué se va a hacer exactamente y cuánto cobra el agente y cuándo. Si hay exclusiva, debe tener fecha de fin clara y explicar qué pasa si alguien la encuentra antes por su cuenta. Todo lo que se publique en un anuncio (metros, orientación, vistas, posibilidad de alquiler turístico) debe poder demostrarse con un documento real, no basarse en lo que "dice el vendedor" o en suposiciones.`,
      balearExample: `En Sóller, un agente firma una exclusiva de tres meses sobre una casa de pueblo. La hoja de encargo especifica: valoración orientativa, reportaje fotográfico, publicación en dos portales, comisión del 4% + IVA al formalizar arras, y que si el propietario vende directamente a un comprador presentado por el agente durante la vigencia, la comisión se devenga igualmente. Al anunciar, el agente evita escribir "vistas al puerto garantizadas" porque no tiene plano ni certificado que lo acredite y describe solo "orientación este según plano catastral adjunto".`,
      keyConcepts: [
        "hoja de encargo",
        "exclusiva",
        "comisión/devengo",
        "RD 515/1989",
        "TRLGDCU",
        "información precontractual",
        "publicidad veraz vs. valoración comercial",
        "evidencia de anuncio",
        "protocolo de disponibilidad de fondos",
      ],
      frequentErrors: [
        "Dejar la comisión en cifra o condición ambigua (\"honorarios según mercado\").",
        "Redactar exclusivas de tipo \"hasta que se venda\" sin salida ni revisión.",
        "Cobrar o retener una reserva sin que el encargo prevea esa facultad.",
        "Publicitar afirmaciones de alto riesgo (rentabilidad garantizada, obra legalizada) sin soporte documental.",
        "No guardar versión y fecha de los anuncios y materiales publicitarios.",
      ],
      examples: [
        {
          id: "m09-l2-ex1",
          title: "Cláusula de comisión sana",
          scenario: "Redacción de honorarios.",
          application: `"4% + IVA sobre precio de venta, exigible a la firma de arras o escritura, incluido el supuesto de venta a interesado presentado durante la exclusiva".`,
          isBalearContext: false,
        },
        {
          id: "m09-l2-ex2",
          title: "Anuncio con evidencia",
          scenario: "Publicar superficie de un piso.",
          application:
            "Indicar si es registral, catastral, construida o útil, y adjuntar la fuente (nota simple o certificado) en el expediente.",
          isBalearContext: false,
        },
        {
          id: "m09-l2-ex3",
          title: "Postvigencia de exclusiva",
          scenario: "Terminación del contrato.",
          application:
            "Listar interesados identificados y plazo proporcionado de postvigencia en el propio contrato, no de forma verbal.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l3",
      moduleId: "m09",
      title: "Diligencia profesional, identidad, representación y conflictos de interés",
      order: 3,
      summary:
        "Detalla el expediente de diligencia que el agente debe construir en cada operación y cómo verificar identidad, representación y gestionar conflictos de interés y doble mediación.",
      content: `Un expediente sólido reúne la documentación que permite explicar el inmueble sin inventar. Empieza por identidad y poder de disposición, continúa con situación de ocupación y contratos, incorpora habitabilidad y eficiencia cuando corresponda, y analiza restricciones de uso. Si aparece una inconsistencia, no se "soluciona" eliminándola del anuncio: se documenta, se explica y se convierte en condición de la negociación o en motivo para derivar a un especialista. La profundidad debe ser proporcional al riesgo: un piso libre recientemente inscrito no exige el mismo trabajo que una finca rústica, una herencia sin inscribir, una vivienda protegida, una promoción sobre plano, un activo ocupado o una casa cercana a costa.

El expediente se organiza por momentos: en captación se revisa identidad, título, nota simple, Catastro y cédula (para evitar captar a quien no puede disponer o prometer lo que no existe); en publicación se revisa uso, superficies, cargas y régimen protegido (para no inducir a error ni dirigir demanda equivocada); en reserva/arras se actualiza nota simple, deudas de comunidad, financiación y condiciones (para asignar riesgos y plazos antes de inmovilizar dinero); en escritura se coordinan certificados, documentos técnicos y notaría (para evitar firma sin cancelaciones o documentación esencial); y tras la firma se gestiona entrega, suministros, archivo y actualización de CRM (para cerrar trazabilidad y prevenir reclamaciones posteriores). Una discrepancia no siempre significa un "no": puede ser una cuestión corregible, pero es peligroso comercializar como si no existiera o afirmar que "no pasa nada" sin un informe que lo sostenga.

## Identidad, representación y poder de disposición

La aparente sencillez de una vivienda puede esconder estructuras de titularidad complejas: proindiviso hereditario, usufructo y nuda propiedad, sociedad con administrador, matrimonio con régimen económico relevante, apoderado, concurso, menor, incapaz con medidas de apoyo, finca de una entidad extranjera o transmisión por herederos. El agente no tiene que resolver todas las consecuencias jurídicas, pero sí debe detectar que no basta con la afirmación "soy el propietario". Para persona física conviene identificar documento, domicilio de notificaciones y relación con la finca; para sociedad, verificar denominación, NIF, cargo de quien firma y vigencia de su poder; en herencia, distinguir titular registral, herederos, aceptación/adjudicación y posibilidad de formalizar venta de forma coordinada; en usufructo, recordar que para vender pleno dominio deben intervenir quienes tengan los derechos necesarios; y en poder notarial, revisar alcance, vigencia, identidad del apoderado y si permite el acto concreto, derivando a notaría si hay dudas. La verificación de representación es también una medida contra el fraude: hay que establecer verificación reforzada cuando cambie un dato bancario o aparezca un apoderado desconocido, confirmando por canal independiente.

## Conflictos de interés y doble mediación

Representar a más de una parte no es automáticamente ilícito, pero obliga a elevar el nivel de transparencia y documentación. El conflicto aparece cuando el interés económico propio o la relación con otra parte puede afectar a la objetividad, a la negociación o a la recomendación (por ejemplo, cobrar comisión de ambas partes sin que ninguna lo sepa, tener interés personal en adquirir, o recibir incentivos ocultos de una entidad financiera o promotora). El remedio no es prometer una neutralidad imposible: es aclarar el rol por escrito, informar de roles y remuneración antes de avanzar, y limitar el servicio o derivar cuando no se pueda mantener transparencia y confidencialidad al mismo tiempo. La buena fe profesional no se presume por usar una marca conocida: se demuestra mediante información clara, ausencia de ocultación y documentación de los intereses relevantes.`,
      easyExplanation: `Antes de decir "sí, esto se puede vender", el agente debe comprobar quién es realmente el dueño y si puede firmar solo o necesita el visto bueno de otras personas (herederos, cónyuge, usufructuario...). Si el agente cobra o tiene algún interés en ambas partes de la operación (por ejemplo, representa al vendedor y también cobra del comprador), debe decirlo abiertamente y por escrito, en vez de fingir que es totalmente neutral.`,
      balearExample: `En Inca, un agente recibe un encargo de un piso que perteneció a un matrimonio ya divorciado; solo uno de los excónyuges firma la hoja de encargo. El agente pide la nota simple actualizada, confirma el régimen económico matrimonial y solicita que el otro cotitular también firme o dé su conformidad expresa, antes de aceptar reservas de compradores interesados.`,
      keyConcepts: [
        "expediente de diligencia profesional",
        "proporcionalidad al riesgo",
        "momentos del expediente (captación/publicación/reserva/escritura/postfirma)",
        "poder de disposición",
        "verificación de representación",
        "conflicto de interés",
        "doble mediación",
        "verificación reforzada antifraude",
      ],
      frequentErrors: [
        "Aceptar la palabra del cliente (\"soy el propietario\") sin comprobar título o nota simple.",
        "Publicitar o reservar sin verificar quién debe firmar realmente (cotitulares, herederos, cónyuge).",
        "Ocultar una inconsistencia detectada en el expediente en lugar de documentarla y derivarla.",
        "Cobrar comisión de ambas partes sin informar a ninguna de la doble intervención.",
        "Confiar en cambios de cuenta bancaria o instrucciones recibidas solo por correo sin verificación por canal independiente.",
      ],
      examples: [
        {
          id: "m09-l3-ex1",
          title: "Semáforo documental",
          scenario: "Organizar el expediente.",
          application:
            "Verde para documentación verificada, ámbar para pendientes con plazo, rojo para incidencias que bloquean publicidad, reserva o firma.",
          isBalearContext: false,
        },
        {
          id: "m09-l3-ex2",
          title: "Venta de nuda propiedad",
          scenario: "Propietario ofrece \"vender la vivienda\" pero solo tiene la nuda propiedad.",
          application:
            "El agente identifica que el usufructuario debe intervenir o el pleno dominio no puede transmitirse sin su concurso.",
          isBalearContext: false,
        },
        {
          id: "m09-l3-ex3",
          title: "Doble comisión transparente",
          scenario: "Agente representa al vendedor y ofrece \"gestión de comprador\".",
          application:
            "Informar por escrito de la comisión del vendedor antes de que el comprador confíe en una neutralidad inexistente.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l4",
      moduleId: "m09",
      title: "Responsabilidad profesional, colaboración, reclamaciones y protección de datos",
      order: 4,
      summary:
        "Aborda la responsabilidad civil y el seguro del agente, las reglas de colaboración entre profesionales, la gestión de quejas y las obligaciones básicas de protección de datos personales.",
      content: `La responsabilidad civil puede aparecer cuando existe daño, conducta negligente, relación causal y perjuicio acreditado. En actividad inmobiliaria los escenarios más habituales son publicidad inexacta, omisión de carga relevante, comisión no informada, entrega de señal sin reglas, promesas de uso no acreditadas, errores de superficie, falta de diligencia en la identificación del cliente o gestión deficiente de documentación. El seguro de responsabilidad civil profesional, cuando proceda, es una herramienta de protección, no un permiso para actuar con descuido: responde dentro de condiciones, límites y exclusiones, por lo que hay que conocer su cobertura, comunicar incidentes a tiempo y conservar el expediente. El Módulo 19 desarrolla los requisitos concretos ligados al Registro Oficial de Agentes Inmobiliarios de las Illes Balears. Buenas prácticas de prevención: usar checklist de captación y firma para que la comprobación no dependa de la memoria de una persona; documentar advertencias al cliente cuando decide seguir adelante pese a un riesgo identificado; no eliminar correos, mensajes o versiones de anuncio por miedo a una reclamación; separar fondos de cuentas operativas y registrar cualquier movimiento con concepto, fecha y autorización; y comunicar a la aseguradora un posible siniestro conforme a la póliza, sin esperar a tener una demanda.

## Colaboración, referidos y redes profesionales

La colaboración entre agentes puede mejorar el servicio cuando define quién capta, quién atiende al comprador, quién valida la documentación, cómo se reparte la remuneración y quién informa al propietario. Sin acuerdo, la colaboración se convierte en fuente de problemas: visitas no autorizadas, duplicidad de anuncios, datos contradictorios, pérdida de control sobre el precio o discusión sobre la comisión. Un referido es distinto de una representación: quien solo remite un cliente debe dejar claro que no asume el encargo de la operación, qué información puede compartir y si existe remuneración por referencia. Cuando se comparte información personal, se aplica el principio de minimización: solo los datos necesarios para la finalidad acordada, nunca una escritura completa, datos bancarios, DNI o solvencia de un cliente por comodidad.

## Quejas, reclamaciones y resolución temprana

El cliente puede reclamar por información, comisión, publicidad, trato, reserva o devolución de fondos. La primera regla es no discutir hechos por teléfono ni atribuir culpas sin revisar el expediente: hay que confirmar recepción, preservar documentos, identificar la pretensión y responder con cronología y pruebas. Si la reclamación afecta a consumo, conviene coordinar la respuesta con el responsable de cumplimiento o asesoramiento jurídico. Un acuerdo temprano y documentado puede ser más útil que mantener una posición rígida basada en mensajes ambiguos, aunque nunca se debe devolver una señal o comisión sin analizar el contrato, la titularidad del dinero y la instrucción de quien puede decidir.

## Datos personales y comunicación digital

Un lead de portal, una copia de DNI, una nómina, un informe de solvencia, un correo con una oferta o una imagen de una vivienda ocupada pueden contener datos personales. La finalidad de cada tratamiento debe ser legítima y comprensible: atender una consulta, valorar solvencia con proporcionalidad, preparar contrato, prevenir fraude o cumplir una obligación legal. La minimización es especialmente relevante en alquiler: pedir documentación económica puede ser razonable si se usa para analizar una candidatura, pero debe limitarse a lo pertinente y conservarse el tiempo necesario. No se deben compartir nóminas o documentos de identidad con el propietario, aseguradora o colaborador sin explicar la finalidad y contar con la base adecuada. Reglas prácticas: no publicar fotos con matrículas, documentos, menores, objetos personales o geolocalización sensible; no enviar documentación de varios candidatos en un grupo de WhatsApp ni usar listas de difusión sin control; separar consentimiento comercial de la necesidad de tratar datos para responder a una solicitud concreta; y definir quién tiene acceso al CRM, cómo se revoca cuando alguien deja el equipo y qué se exporta a un colaborador.`,
      easyExplanation: `Si algo sale mal en una operación (un error, una omisión, una promesa incumplida), el agente puede tener que responder por ello, y el seguro de responsabilidad civil ayuda pero no sustituye actuar con cuidado. Cuando se colabora con otro agente hay que dejar claro quién hace qué y cómo se reparte el cobro. Ante una queja, lo mejor es contestar con calma, revisando papeles, no por teléfono de forma improvisada. Y con los datos personales (DNI, nóminas, fotos), solo se debe pedir, guardar y compartir lo estrictamente necesario para el trabajo concreto.`,
      balearExample: `En Pollença, dos agencias colaboran en la venta de una villa: una capta y la otra trae al comprador. Antes de la primera visita conjunta, firman un acuerdo breve que fija el reparto de comisión al 50%, quién actualiza el precio si cambia y qué canal usarán para comunicar ofertas, evitando así que el propietario reciba mensajes contradictorios de ambas agencias.`,
      keyConcepts: [
        "responsabilidad civil profesional",
        "seguro de responsabilidad civil",
        "prevención mediante checklist",
        "colaboración entre agentes",
        "referido vs. representación",
        "principio de minimización de datos",
        "gestión de reclamaciones",
        "trazabilidad del expediente",
      ],
      frequentErrors: [
        "Usar una cláusula tipo \"el agente no responde de nada\" pensando que neutraliza obligaciones legales.",
        "Colaborar con otro agente sin acordar por escrito roles, comisión y canal de comunicación.",
        "Compartir documentación personal completa (DNI, nómina, escritura) por comodidad, sin necesidad ni autorización.",
        "Discutir o resolver una reclamación por teléfono sin revisar antes el expediente documental.",
        "Eliminar mensajes o versiones de anuncios por miedo a que se usen en una reclamación.",
      ],
      examples: [
        {
          id: "m09-l4-ex1",
          title: "Checklist de prevención",
          scenario: "Revisión mensual de calidad.",
          application:
            "Comprobar si hay encargo firmado, si se actualizó la nota simple, si la ficha coincide con los documentos y si la comisión está clara.",
          isBalearContext: false,
        },
        {
          id: "m09-l4-ex2",
          title: "Referido sin representación",
          scenario: "Un agente deriva un cliente a otro compañero en otra zona.",
          application:
            "Aclara por escrito que no asume el encargo, qué datos comparte y si cobrará por la referencia.",
          isBalearContext: false,
        },
        {
          id: "m09-l4-ex3",
          title: "Minimización en alquiler",
          scenario: "Varios candidatos a un piso.",
          application:
            "No enviar la documentación económica de todos los candidatos en un mismo grupo de mensajería; tratar cada candidatura de forma individual.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l5",
      moduleId: "m09",
      title: "Registro Oficial de Agentes y código de conducta profesional",
      order: 5,
      summary:
        "Sitúa el marco autonómico del Registro Oficial de Agentes Inmobiliarios de las Illes Balears y los principios de un código de conducta profesional aplicado a decisiones reales.",
      content: `La Ley 3/2024 de medidas urgentes en materia de vivienda introdujo disposiciones específicas sobre los requisitos para ejercer como agente inmobiliario y sobre la creación y funcionamiento del Registro Oficial de Agentes Inmobiliarios de las Illes Balears. El objetivo declarado es reforzar transparencia, calidad del servicio y protección de consumidores; no se trata de una simple lista voluntaria de contactos, sino de un marco de ordenación de la actividad en el territorio autonómico. En una operación real no basta con afirmar que se está inscrito o que se pertenece a una asociación: la información relevante debe ser contrastable. A medida que se dicten normas de desarrollo, formularios o actualizaciones, el profesional debe mantener la documentación de cumplimiento y exhibir los distintivos o información que la normativa exija. La inscripción no reemplaza la diligencia en cada operación, pero sí sirve como elemento de confianza y control.

Conviene distinguir con precisión registro profesional, colegiación, asociación sectorial, licencia municipal y alta fiscal, que son conceptos distintos aunque puedan solaparse. El agente debe mantener documentación de formación, seguro, establecimiento o domicilio profesional, garantías y cumplimiento que pueda ser requerida, y no debe usar sellos o distintivos que sugieran una habilitación inexistente o caducada. Debe además revisar periódicamente el canal oficial autonómico antes de comunicar que un requisito está cumplido, y recordar que cuando colabora con otro agente no delega automáticamente su propio deber de transparencia frente al cliente. Hasta que el Registro se estudie en profundidad (Módulo 19: requisitos, proceso, mantenimiento, régimen de comprobación, publicidad de la condición y consecuencias de incumplimiento), la actitud recomendada es conservadora: no presentar la inscripción, el seguro o la formación como simple formalidad, sino como elementos que aportan confianza, transparencia y capacidad de respuesta ante un consumidor.

## Código de conducta personal para el agente

Un código de conducta útil no se limita a palabras como "honestidad" o "excelencia". Debe traducirse en decisiones verificables: no ocultar un conflicto, no inflar una valoración para captar, no prometer un uso no comprobado, no cobrar cantidades sin soporte, no usar datos de un cliente para otro fin y no retrasar deliberadamente información que altera la decisión. Este estándar protege a la parte más vulnerable de la operación y también al propio profesional. La reputación inmobiliaria se construye por repetición: un buen expediente, una advertencia escrita y una explicación transparente pueden parecer lentos al inicio, pero reducen cancelaciones, reclamaciones y recomendaciones negativas. En mercados con componente internacional y alta rotación como Mallorca, la confianza es un activo económico: un cliente que entiende el proceso recomienda; un cliente sorprendido por una carga o una comisión no lo hace.

Cinco principios operativos resumen el código: veracidad (distinguir información comprobada, estimación y opinión comercial), lealtad (explicar a quién representas y qué interés económico tienes), competencia (actualizarse y derivar cuando el asunto excede tu preparación), trazabilidad (dejar constancia de decisiones, documentos, fondos y advertencias) y respeto (tratar a compradores, inquilinos, propietarios y colaboradores sin discriminación ni presión indebida). La ética se prueba en las situaciones sin testigo: cuando un propietario pide ocultar una derrama, cuando un comprador quiere presionar a una persona vulnerable, cuando un anuncio favorece una expectativa falsa o cuando el banco ofrece un incentivo por una operación poco conveniente. En esos casos el criterio debe ser estable: informar, negarse a falsear, documentar y, si es necesario, retirarse del encargo. Renunciar a una comisión puntual suele ser menos costoso que asumir una responsabilidad o dañar la reputación de forma permanente.`,
      easyExplanation: `En Baleares existe un registro específico para agentes inmobiliarios, creado por la Ley 3/2024, que busca dar más confianza y transparencia al consumidor. Estar inscrito, tener seguro o formación no es un simple papeleo: hay que poder demostrarlo y mantenerlo actualizado. Además de la ley, cada agente debería seguir un código de conducta personal: no engañar, no ocultar conflictos de interés, no inventar cifras, y ser capaz de explicar cada decisión con documentos.`,
      balearExample: `Un agente en Alcúdia recibe la petición de un propietario de "no mencionar" una derrama de comunidad aprobada recientemente porque "asusta a los compradores". Aplicando el código de conducta (veracidad y lealtad), el agente informa que la derrama debe constar en la ficha de la vivienda y explica al propietario que ocultarla generaría un riesgo mayor de reclamación tras la venta.`,
      keyConcepts: [
        "Ley 3/2024",
        "Registro Oficial de Agentes Inmobiliarios de las Illes Balears",
        "registro vs. colegiación vs. licencia municipal",
        "distintivos profesionales",
        "código de conducta",
        "veracidad/lealtad/competencia/trazabilidad/respeto",
        "reputación profesional",
      ],
      frequentErrors: [
        "Confundir estar inscrito en el Registro con estar colegiado o tener licencia municipal.",
        "Usar sellos o menciones de \"agente registrado\" caducados o no verificados.",
        "Delegar el propio deber de transparencia en el colaborador con quien se trabaja.",
        "Tratar el código de conducta como un eslogan en vez de traducirlo en decisiones concretas.",
        "No renunciar a una comisión cuando mantenerla exige ocultar información relevante.",
      ],
      examples: [
        {
          id: "m09-l5-ex1",
          title: "Verificación del registro",
          scenario: "Un cliente pregunta si el agente está inscrito.",
          application:
            "Mostrar documentación actualizada en vez de una afirmación verbal genérica.",
          isBalearContext: false,
        },
        {
          id: "m09-l5-ex2",
          title: "Código aplicado a una derrama oculta",
          scenario: "Propietario pide no mencionar un gasto comunitario.",
          application: "El agente se niega a omitirlo y lo incluye en la ficha documental.",
          isBalearContext: false,
        },
        {
          id: "m09-l5-ex3",
          title: "Distinción de conceptos",
          scenario: "Un agente pertenece a una asociación sectorial.",
          application:
            "Aclara al cliente que eso no equivale automáticamente a la inscripción en el Registro Oficial autonómico.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l6",
      moduleId: "m09",
      title: "Derecho a la vivienda: fundamento constitucional, Ley 12/2023 y zonas tensionadas",
      order: 6,
      summary:
        "Explica la base constitucional del derecho a la vivienda, el reparto competencial, el alcance real de la Ley 12/2023 y el régimen de zonas de mercado residencial tensionado y gran tenedor.",
      content: `El artículo 47 de la Constitución ordena a los poderes públicos promover las condiciones necesarias para hacer efectivo el derecho a disfrutar de una vivienda digna y adecuada, regular la utilización del suelo conforme al interés general e impedir la especulación. El artículo 33 reconoce la propiedad privada y la herencia, delimitadas por su función social. La lectura correcta no enfrenta ambos preceptos como si uno eliminara al otro: las políticas de vivienda deben convivir con el derecho de propiedad y con las garantías constitucionales. La materia se distribuye entre Estado, comunidad autónoma y ayuntamientos: el Estado dicta bases, legislación civil, consumo, legislación procesal, suelo básico y planes estatales; Illes Balears regula elementos decisivos como vivienda protegida, habitabilidad, registros, ayudas y disciplina en el marco de sus competencias; y los municipios intervienen a través de planeamiento, licencias, ordenanzas, censo y gestión de servicios. El agente debe identificar quién tiene la respuesta antes de prometer una solución: un ayuntamiento puede informar sobre compatibilidad urbanística; el Govern puede gestionar vivienda protegida; el Estado regula aspectos civiles y de consumo; y el Registro publica derechos inscritos. "Derecho a la vivienda" no equivale a un derecho automático a recibir una casa, una ayuda o una renta concreta: el acceso efectivo depende de requisitos, procedimientos, disponibilidad y resolución administrativa.

## Ley 12/2023: qué aporta y qué no debes sobredimensionar

La Ley 12/2023, de 24 de mayo, por el derecho a la vivienda, articula fines comunes de las políticas de vivienda y la protección de determinadas situaciones, regula instrumentos como las zonas de mercado residencial tensionado y el parque público de vivienda, y modifica la Ley de Arrendamientos Urbanos en materias relevantes. También ha sido objeto de pronunciamientos del Tribunal Constitucional, por lo que conviene usar siempre su texto consolidado y no resúmenes anteriores a esos cambios. Para el agente, la ley importa por tres motivos: obliga a tratar la vivienda como un bien con función social y con deberes de información; condiciona la forma de explicar alquileres, honorarios y zonas tensionadas cuando estas existan; y hace más importante comprobar si el inmueble pertenece a un parque público, está sujeto a protección o entra en un supuesto administrativo especial. La ley no permite inferir por sí sola que un municipio esté tensionado, que un precio esté limitado o que una persona sea beneficiaria de ayuda: cada uno de estos supuestos exige declaración, norma o resolución concreta.

## Zonas de mercado residencial tensionado y gran tenedor

La Ley 12/2023 permite a las administraciones competentes declarar zonas de mercado residencial tensionado cuando exista un riesgo especial de oferta insuficiente de vivienda asequible, con criterios y procedimiento. La declaración, si se activa, genera un régimen específico y obliga a analizar el ámbito territorial, la fecha de declaración, su vigencia y la condición del arrendador. No se puede trasladar automáticamente la situación de otra comunidad autónoma a Mallorca ni aplicar un límite de una zona a un municipio que no esté comprendido. La evaluación profesional debe ser documental: antes de explicar una renta inicial, una prórroga o una actualización vinculada a una zona tensionada, hay que pedir la norma o resolución oficial que identifique el ámbito, la fecha de entrada en vigor y sus efectos; si no se dispone de esa fuente, se explica la regla general aplicable al contrato y se deja constancia de que el régimen especial requiere confirmación.

La Ley 12/2023 define de forma general al gran tenedor de vivienda como la persona física o jurídica titular de más de diez inmuebles urbanos de uso residencial o de una superficie construida de más de 1.500 m² de uso residencial, excluyendo garajes y trasteros. En el marco de una zona de mercado residencial tensionado, la legislación permite que la declaración autonómica module el umbral en determinados términos. La condición puede influir en determinados deberes y medidas vinculadas a alquiler, vulnerabilidad o zonas tensionadas; no debe confundirse "gran propietario" en lenguaje comercial con la definición legal de gran tenedor, y la titularidad indirecta, sociedades del grupo, inmuebles no residenciales y derechos reales requieren análisis jurídico si son determinantes. Ficha de cliente recomendada: incluir la pregunta "¿hay algún régimen legal especial o declaración administrativa que afecte a esta operación?".

## Parques públicos, vivienda social y vivienda asequible

La Ley 12/2023 regula el parque público de vivienda y su finalidad social. En el contexto balear, el IBAVI es un actor relevante en promoción, gestión y políticas públicas de vivienda. Para el agente, esta materia importa porque un inmueble procedente de parque público, de promoción protegida o de adjudicación administrativa puede estar sujeto a restricciones de transmisión, precio, destino o tanteo. La vivienda asequible no es una sola categoría: puede aparecer como vivienda protegida, vivienda de precio limitado, alquiler social, vivienda pública, alojamiento dotacional u otras fórmulas, cada una con un régimen, una administración y una documentación propia. El expediente debe identificar la causa de cualquier limitación, revisando escritura, nota simple, calificación, expediente de vivienda, comunicaciones de administración y posibles notas marginales, y comprobando quién puede adquirir o arrendar, para qué destino, por cuánto tiempo y con qué precio o renta máximos.`,
      easyExplanation: `La Constitución dice que las administraciones deben esforzarse por facilitar el acceso a una vivienda digna, pero eso no significa que cualquier persona tenga derecho automático a recibir una vivienda o una ayuda concreta: depende de leyes, trámites y recursos disponibles. La Ley 12/2023 estatal introduce herramientas como las "zonas tensionadas" (zonas donde hay poca vivienda asequible) y el concepto de "gran tenedor" (quien tiene muchas viviendas), pero estas etiquetas solo se aplican si hay una declaración oficial que lo confirme, nunca por intuición o por lo que dice la prensa.`,
      balearExample: `En Palma, un agente recibe el encargo de un propietario con doce pisos en alquiler. Antes de asumir que es "gran tenedor" a efectos legales, el agente pide documentación de titularidad de cada inmueble (algunos son locales, no viviendas) y consulta si existe declaración de zona tensionada vigente en el barrio, en vez de asumirlo por el número aproximado de propiedades.`,
      keyConcepts: [
        "artículo 47 CE",
        "artículo 33 CE",
        "reparto competencial Estado/CCAA/municipios",
        "Ley 12/2023 de 24 de mayo",
        "zona de mercado residencial tensionado",
        "gran tenedor (>10 inmuebles o >1.500 m²)",
        "IBAVI",
        "parque público de vivienda",
        "vivienda asequible",
      ],
      frequentErrors: [
        "Afirmar que existe una zona tensionada sin localizar la declaración o publicación oficial aplicable.",
        "Asumir la condición de gran tenedor por el \"tamaño aparente\" del cliente sin analizar titularidad real.",
        "Confundir \"derecho a la vivienda\" con derecho automático a una ayuda, renta o vivienda concreta.",
        "Trasladar el régimen de otra comunidad autónoma o de otro municipio a Mallorca sin comprobación.",
        "Publicitar una vivienda de parque público como vivienda libre sin verificar su origen y condiciones.",
      ],
      examples: [
        {
          id: "m09-l6-ex1",
          title: "Reparto competencial en la práctica",
          scenario: "Duda sobre compatibilidad urbanística.",
          application: "El agente acude al ayuntamiento, no al Registro, porque esa competencia es municipal.",
          isBalearContext: false,
        },
        {
          id: "m09-l6-ex2",
          title: "Comprobación de zona tensionada",
          scenario: "Contrato de larga duración.",
          application: "Pedir la resolución/publicación oficial vigente antes de aplicar un límite de renta.",
          isBalearContext: false,
        },
        {
          id: "m09-l6-ex3",
          title: "Origen de vivienda de parque público",
          scenario: "Vivienda procedente de adjudicación administrativa.",
          application: "Solicitar el expediente de vivienda antes de anunciarla como vivienda libre.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m09-l7",
      moduleId: "m09",
      title: "Ley balear de vivienda, habitabilidad, VPO/VPL y ayudas",
      order: 7,
      summary:
        "Desarrolla la Ley 5/2018 balear, la cédula de habitabilidad, los conceptos de VPO y VPL con sus precios máximos, y el papel del IBAVI y del Plan Estatal de Vivienda.",
      content: `La Ley 5/2018 de vivienda de las Illes Balears regula, entre otros aspectos, la función social de la vivienda, competencias públicas, condiciones de calidad y habitabilidad, actuaciones de fomento, inspección y régimen sancionador; ha sido modificada en varias ocasiones, por lo que se debe consultar la versión consolidada. Para el profesional no es necesario memorizar cada artículo aislado, pero sí saber cuándo el caso entra en materia de vivienda autonómica y qué expediente o administración debe consultarse: ¿la vivienda cumple condiciones de habitabilidad?, ¿está sometida a protección?, ¿existe una obligación de información o una restricción de uso?, ¿puede haber actuación inspectora?, ¿hay un derecho de adquisición preferente de la Administración?, ¿qué efecto tendría que la vivienda esté desocupada en determinadas condiciones? La normativa balear debe aplicarse con sentido territorial: Mallorca comparte una ley autonómica con las otras islas, pero la realidad municipal, la presión de demanda, el suelo disponible, la costa y el planeamiento local cambian mucho de un municipio a otro (Palma, Calvià, Inca, Manacor, Sóller, Pollença u otro).

La legislación balear vincula el ejercicio del derecho de propiedad de una vivienda con su función social: conservación, uso adecuado, acceso a programas públicos y determinadas medidas administrativas. Esto no convierte al agente en inspector ni le permite presumir infracciones: la aplicación concreta depende de requisitos, procedimientos, notificaciones y garantías, por lo que no se debe afirmar que una vivienda "está sancionada" o "puede ser expropiada" sin expediente y fuente oficial. En la práctica, el escenario más frecuente es sencillo: una vivienda lleva tiempo vacía, tiene suministros desconectados, presenta deterioro o pertenece a un titular que no conoce sus obligaciones. El agente debe separar el estado físico, la ocupación, el régimen de vivienda y la política aplicable, sin usar "vivienda vacía" como reclamo de inversión sin comprobar estado, legalidad, posibilidad de rehabilitación y costes, y sin confundirla con vivienda de segunda residencia, inmueble en reforma o vivienda con causa justificada de no ocupación.

## Habitabilidad y cédula en Illes Balears

El Decreto 145/1997, modificado por el Decreto 20/2007 y afectado por normativa posterior, regula condiciones de dimensionamiento, higiene e instalaciones y la expedición de cédulas de habitabilidad. La cédula acredita que una vivienda cumple los requisitos exigidos en su ámbito; el agente debe conocer su función y vigencia, pero no puede certificar habitabilidad por una visita. Si la cédula falta, está caducada o no encaja con la vivienda que se anuncia, se debe evitar promesas y activar la vía de comprobación o tramitación que corresponda. Situaciones típicas: cédula vigente (incorporar fecha, número y coherencia con el inmueble); cédula caducada (solicitar renovación o informe y ajustar tiempos, sin prometer entrega o alquiler inmediato sin confirmación); no localizada (pedir copia, certificado o consulta oficial, sin inventar una vigencia); reforma/cambio de uso (derivar a técnico y ayuntamiento, sin confundir obra terminada con habitabilidad); y obra nueva (coordinar con documentación de finalización y ocupación, sin usar un "precontrato" como sustituto de habilitación).

## Calidad, eficiencia, accesibilidad y VPO/VPL

La habitabilidad convive con exigencias técnicas y energéticas: certificado energético, cédula, inspección técnica, accesibilidad, estado de instalaciones y obras comunitarias influyen en coste, confort, financiación y valor. Una etiqueta energética no garantiza por sí sola que la vivienda sea adecuada, pero su ausencia o presentación incorrecta puede afectar a la publicidad y a la confianza del comprador; la accesibilidad debe describirse con elementos verificables (ascensor a cota cero, anchura de puertas, rampa, baño adaptado) y no con adjetivos vagos.

La vivienda protegida de promoción pública o privada se somete a un régimen administrativo que puede afectar precio, destino, requisitos de acceso, transmisión, alquiler y duración de protección, impulsada en Illes Balears mediante medidas urgentes de vivienda; se caracteriza por estar sujeta a limitaciones administrativas de precio de venta y/o alquiler durante un plazo determinado y por su inscripción en el registro autonómico correspondiente. Para un agente, la diferencia entre VPO (Vivienda de Protección Oficial) y VPL (vivienda de precio limitado) tiene impacto inmediato: hay que pedir el documento de calificación, la inscripción, la resolución de descalificación si existe, el precio máximo vigente aplicable y cualquier condición de destino, nunca aceptando solo la afirmación de que "ya está liberada" o "nunca fue VPO". En Illes Balears, los precios máximos de venta y alquiler de determinadas viviendas protegidas, viviendas de precio tasado y viviendas de precio limitado se actualizan mediante acuerdos del Govern; en febrero de 2026 se aprobó una actualización de precios máximos, cuyo dato concreto debe consultarse en la publicación vigente y aplicarse según régimen, municipio, superficie y tipo de vivienda correspondiente. El Registro autonómico de viviendas de precio limitado aporta trazabilidad administrativa: situación registral, identificación de la vivienda, plazo de limitación, precio aplicable y obligaciones posteriores.

## IBAVI, ayudas y Plan Estatal de Vivienda 2026-2030

El Instituto Balear de la Vivienda (IBAVI) interviene en políticas públicas de vivienda de las Illes Balears: alquiler social, parque público, promoción, rehabilitación o acceso a vivienda. A nivel estatal, el Real Decreto 326/2026 regula el Plan Estatal de Vivienda 2026-2030, que organiza medidas y programas cuya aplicación efectiva se articula mediante gestión, convenios, convocatorias y requisitos. El agente debe evitar dar por concedida una ayuda antes de que exista resolución favorable: puede existir programa, pero depende de requisitos y resolución; una condición en arras solo debe pactarse con margen realista para solicitud, respuesta, subsanación y financiación; y una subvención para obra debe presuponer que el pago público puede producirse después de ejecutar o justificar el gasto, nunca prometiendo "apto para ayudas" o "financiable al 100%" sin especificar programa, requisitos y condición de admisión final del solicitante.`,
      easyExplanation: `En Baleares hay una ley específica de vivienda (Ley 5/2018) que regula, entre otras cosas, la "cédula de habitabilidad" (un documento que certifica que la vivienda es apta para vivir) y la vivienda protegida. Si una vivienda es VPO o de precio limitado (VPL), tiene un precio máximo fijado por la Administración y no se puede anunciar como "vivienda libre" sin comprobarlo antes. El IBAVI es el organismo balear que gestiona ayudas y vivienda pública, y existe también un Plan Estatal de Vivienda (2026-2030) con programas de ayuda, pero ninguna ayuda debe darse por segura hasta que haya una resolución oficial que la conceda.`,
      balearExample: `En Calvià, un comprador extranjero quiere adquirir un piso anunciado como "oportunidad por debajo de mercado". El agente detecta indicios de que podría estar inscrito como VPL, solicita el documento de calificación y el precio máximo vigente al Registro autonómico, y explica al comprador que no podrá pagar por encima de ese precio ni revender libremente hasta que se compruebe el régimen.`,
      keyConcepts: [
        "Ley 5/2018 balear",
        "Decreto 145/1997 y Decreto 20/2007",
        "cédula de habitabilidad",
        "certificado energético",
        "VPO",
        "VPL",
        "precio máximo",
        "Registro autonómico de viviendas de precio limitado",
        "IBAVI",
        "Real Decreto 326/2026 (Plan Estatal de Vivienda 2026-2030)",
      ],
      frequentErrors: [
        "Anunciar como vivienda libre un inmueble que en realidad es VPO/VPL sin comprobar su calificación.",
        "Confundir certificado energético con inspección técnica o con cédula de habitabilidad.",
        "Prometer entrega o alquiler inmediato de una vivienda con cédula caducada o no localizada.",
        "Dar por concedida una ayuda o subvención antes de la resolución administrativa favorable.",
        "Usar una tabla de precios máximos desactualizada o de una operación anterior sin verificar la fecha.",
      ],
      examples: [
        {
          id: "m09-l7-ex1",
          title: "Verificación de cédula caducada",
          scenario: "Vivienda con cédula vencida.",
          application:
            "Solicitar renovación o informe y ajustar el calendario de la operación, sin prometer entrega inmediata.",
          isBalearContext: false,
        },
        {
          id: "m09-l7-ex2",
          title: "Cálculo de precio máximo VPL",
          scenario: "Vivienda de precio limitado en venta.",
          application:
            "Identificar superficie computable, anexos, municipio, modalidad de alquiler o venta y coeficiente aplicable antes de fijar precio.",
          isBalearContext: false,
        },
        {
          id: "m09-l7-ex3",
          title: "Ayuda condicionada en arras",
          scenario: "Comprador joven solicita un aval o ayuda pública.",
          application: "Incluir condición suspensiva de financiación/resolución en el contrato de arras.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m09-e1",
      moduleId: "m09",
      type: "case",
      question: `Una propietaria en Palma quiere vender su piso y asegura que "siempre se ha vivido allí", pero no localiza la cédula de habitabilidad. Pide publicarlo hoy como "listo para entrar". ¿Qué debe hacer el agente?`,
      options: [
        `Publicarlo como "listo para entrar" porque la propietaria lo asegura`,
        `Negarse a captar el inmueble hasta tener la cédula`,
        `Documentar por escrito que se ha solicitado la cédula, describir el estado físico sin afirmaciones absolutas de habitabilidad e incluir condición de comprobación pendiente antes de reservar`,
        `Publicar sin mencionar la cédula porque no es obligatoria`,
      ],
      expectedAnswer: `c) Documentar por escrito que se ha solicitado la cédula, describir el estado físico sin afirmaciones absolutas de habitabilidad e incluir condición de comprobación pendiente antes de reservar.`,
      explanation: `El agente no debe afirmar que la vivienda tiene cédula vigente ni que "no existe ningún requisito pendiente". Debe clasificar el riesgo, ajustar el mensaje publicitario y condicionar la reserva a la comprobación documental.`,
      difficulty: "medium",
    },
    {
      id: "m09-e2",
      moduleId: "m09",
      type: "case",
      question: `Un inversor extranjero quiere comprar un piso anunciado como "oportunidad por debajo de mercado", pero una copia de documentación apunta a que podría estar inscrito como VPL. ¿Cuál es la actuación correcta del agente?`,
      options: [
        `Confiar en el precio bajo como prueba de que es vivienda libre`,
        `Solicitar documentación administrativa, escritura e información registral, y explicar al comprador que el régimen puede condicionar precio, transmisión, destino y requisitos antes de avanzar`,
        `Cerrar la reserva rápidamente antes de que el comprador se eche atrás`,
        `Ignorar la duda porque el anunciante ya "lo describe como libre"`,
      ],
      expectedAnswer: `b) Solicitar documentación administrativa, escritura e información registral, y explicar al comprador que el régimen puede condicionar precio, transmisión, destino y requisitos antes de avanzar.`,
      explanation: `El precio inferior no confirma ni descarta VPL; hay que verificar el régimen antes de mantener afirmaciones de "libre" o "revalorización sin límite".`,
      difficulty: "medium",
    },
    {
      id: "m09-e3",
      moduleId: "m09",
      type: "decision",
      question: `Un vendedor firma una exclusiva con un agente. Un comprador pregunta si el mismo agente puede ayudarle a negociar y financiar la operación, y el agente plantea cobrar también una "gestión de comprador". ¿Qué debe garantizar el agente?`,
      options: [
        `Ocultar al comprador que ya cobra del vendedor`,
        `Informar de la comisión del vendedor antes de que el comprador confíe en una neutralidad inexistente, y explicar qué servicio adicional se ofrece, su coste y si es opcional`,
        `Negarse a prestar cualquier servicio al comprador`,
        `Compartir con el comprador los límites de negociación del vendedor sin autorización`,
      ],
      expectedAnswer: `b) Informar de la comisión del vendedor antes de que el comprador confíe en una neutralidad inexistente, y explicar qué servicio adicional se ofrece, su coste y si es opcional.`,
      explanation: `La doble comisión no es ilícita per se, pero exige transparencia sobre roles e intereses económicos antes de que el comprador tome decisiones.`,
      difficulty: "advanced",
    },
    {
      id: "m09-e4",
      moduleId: "m09",
      type: "case",
      question: `Un banco comercializa una vivienda "con entrega prevista". El comprador quiere reservarla para mudarse en dos meses, pero en la visita se aprecia ocupación, y el comercial dice que "se solucionará pronto". ¿Cómo debe actuar un agente responsable?`,
      options: [
        `Confirmar la fecha de entrega porque lo dice el vendedor`,
        `Solicitar información documentada sobre el estado de ocupación, contratos, procedimiento y facultad de entrega, y reflejar la incertidumbre en el contrato mediante condición, fecha límite y consecuencia económica`,
        `Omitir la ocupación en el contrato para no asustar al comprador`,
        `Prometer que la vivienda estará libre en dos meses`,
      ],
      expectedAnswer: `b) Solicitar información documentada sobre el estado de ocupación, contratos, procedimiento y facultad de entrega, y reflejar la incertidumbre en el contrato mediante condición, fecha límite y consecuencia económica.`,
      explanation: `No existe disponibilidad garantizada solo porque el vendedor prevea recuperarla; la incertidumbre debe reflejarse contractualmente, no en promesas verbales.`,
      difficulty: "advanced",
    },
    {
      id: "m09-e5",
      moduleId: "m09",
      type: "calculation",
      question: `Una vivienda de precio limitado (VPL) tiene un precio máximo por m² fijado por acuerdo del Govern, superficie computable de 78 m², más un anexo de 6 m² con coeficiente reductor. ¿Qué pasos de cálculo debe seguir el agente antes de fijar el precio de venta?`,
      options: [
        `Multiplicar directamente el precio de mercado de la zona por los metros`,
        `Identificar el precio máximo vigente en la publicación oficial, aplicar la superficie computable y el coeficiente del anexo, y documentar el cálculo en el expediente antes de anunciar o reservar`,
        `Usar el precio de una operación anterior similar`,
        `Preguntar al vendedor cuál es "un precio razonable"`,
      ],
      expectedAnswer: `b) Identificar el precio máximo vigente en la publicación oficial, aplicar la superficie computable y el coeficiente del anexo, y documentar el cálculo en el expediente antes de anunciar o reservar.`,
      explanation: `El precio máximo no equivale al valor de mercado; requiere precisión numérica con datos verificados (régimen, superficie, anexos, municipio y coeficiente aplicable) y debe documentarse, no estimarse.`,
      difficulty: "advanced",
    },
    {
      id: "m09-e6",
      moduleId: "m09",
      type: "comprehension",
      question: `Explica la diferencia entre "zona de mercado residencial tensionado" declarada y una zona con precios altos según la prensa o portales inmobiliarios.`,
      expectedAnswer: `Una zona tensionada solo existe cuando hay una declaración oficial conforme al procedimiento de la Ley 12/2023, con ámbito territorial, fecha y vigencia definidos; los precios altos por sí solos, sin esa declaración, no generan el régimen especial ni deben tratarse como si lo generaran.`,
      explanation: `El error frecuente es asumir la existencia de zona tensionada por percepción de mercado sin localizar la resolución o publicación oficial aplicable.`,
      difficulty: "basic",
    },
    {
      id: "m09-e7",
      moduleId: "m09",
      type: "decision",
      question: `Un cliente con doce inmuebles en alquiler pregunta si es "gran tenedor" a efectos legales. ¿Qué debe hacer el agente?`,
      options: [
        `Confirmar que sí lo es porque tiene más de diez inmuebles`,
        `Negar que lo sea porque "parece un particular normal"`,
        `Pedir información y documentación (titularidad real, tipo de inmuebles —residenciales o no—, posibles sociedades vinculadas) y advertir que la calificación legal exige análisis jurídico si es determinante, sin certificar la condición sin base`,
        `No mencionar el tema porque no es relevante para la operación`,
      ],
      expectedAnswer: `c) Pedir información y documentación (titularidad real, tipo de inmuebles —residenciales o no—, posibles sociedades vinculadas) y advertir que la calificación legal exige análisis jurídico si es determinante, sin certificar la condición sin base.`,
      explanation: `El agente puede ordenar la información y detectar que la pregunta es relevante, pero no debe certificar sin base que un cliente "es" o "no es" gran tenedor si de ello depende un régimen legal concreto.`,
      difficulty: "medium",
    },
    {
      id: "m09-e8",
      moduleId: "m09",
      type: "case",
      question: `Redacta en máximo 450 palabras un informe inicial para un comprador que, tras detectar en una visita que la cédula de un piso en Palma está caducada, que existe una posible inscripción como vivienda de precio limitado, y que el mismo agente ofrece también "gestión de financiación" a cambio de comisión adicional, quiere decidir si reservar. Estructura el informe en: hechos confirmados, pendientes, riesgos, documentos a solicitar, papel del agente y condiciones antes de pagar una reserva.`,
      expectedAnswer: `Informe estructurado según los cinco bloques indicados, sin concluir "no comprar", explicando qué falta, por qué importa, quién debe confirmarlo y qué condición protege al comprador mientras se verifica.`,
      explanation: `El ejercicio evalúa la capacidad de priorizar lo que bloquea la operación, documentar lo que la condiciona, y proponer un siguiente paso, sin recitar normas de memoria sin aplicarlas al caso.`,
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m09-q1",
      question: `¿Cómo define la Ley 5/2018 balear al agente inmobiliario?`,
      options: [
        `Cualquier persona con local comercial abierto al público`,
        `La persona física o jurídica que se dedica de manera habitual y retribuida a prestar servicios de mediación en operaciones inmobiliarias en el territorio autonómico`,
        `Solo quien tiene título universitario en la materia`,
        `Únicamente las agencias inscritas en un colegio profesional`,
      ],
      correctAnswerIndex: 1,
      explanation: `La habitualidad y retribución del servicio, no el local ni la titulación, determinan la actividad profesional.`,
      sourceModuleId: "m09",
      legalReference: `Ley 5/2018, de vivienda de las Illes Balears.`,
      difficulty: "basic",
    },
    {
      id: "m09-q2",
      question: `La hoja de encargo debe indicar, como mínimo:`,
      options: [
        `Solo el precio`,
        `Servicio, inmueble, partes, remuneración y duración`,
        `Solo los datos del propietario`,
        `Únicamente una autorización de fotos`,
      ],
      correctAnswerIndex: 1,
      explanation: `El encargo debe describir el inmueble, identificar a quien encarga, concretar el servicio, la remuneración y la duración.`,
      sourceModuleId: "m09",
      legalReference: `Ficha 06/Ficha 39, contrato de mediación inmobiliaria (régimen general de contratos).`,
      difficulty: "basic",
    },
    {
      id: "m09-q3",
      question: `Una vivienda puede anunciarse como "uso turístico garantizado" cuando:`,
      options: [
        `Está cerca de la playa`,
        `El vendedor lo cree así`,
        `Existe habilitación/autorización acreditada y se ha verificado el régimen aplicable`,
        `Tiene tres habitaciones`,
      ],
      correctAnswerIndex: 2,
      explanation: `El uso turístico exige título, plazas, zonificación y requisitos verificados; no basta con la creencia del vendedor ni con la ubicación.`,
      sourceModuleId: "m09",
      legalReference: `Normativa sectorial turística balear y deber de veracidad publicitaria (RD 515/1989, TRLGDCU).`,
      difficulty: "medium",
    },
    {
      id: "m09-q4",
      question: `La condición de "gran tenedor" se determina:`,
      options: [
        `Por tener una vivienda cara`,
        `Por definición legal y datos de titularidad, en el contexto aplicable`,
        `Por el número de empleados`,
        `Por la nacionalidad del propietario`,
      ],
      correctAnswerIndex: 1,
      explanation: `La Ley 12/2023 define al gran tenedor por titularidad de más de 10 inmuebles urbanos residenciales o más de 1.500 m² de superficie residencial (excluyendo garajes y trasteros), pudiendo modularse en zonas tensionadas.`,
      sourceModuleId: "m09",
      legalReference: `Ley 12/2023, de 24 de mayo, por el derecho a la vivienda.`,
      difficulty: "medium",
    },
    {
      id: "m09-q5",
      question: `En una VPO/VPL, el "precio de mercado":`,
      options: [
        `Elimina siempre el precio máximo`,
        `No sustituye las limitaciones administrativas de precio, plazo y régimen`,
        `Decide el Registro`,
        `Permite omitir la información al comprador`,
      ],
      correctAnswerIndex: 1,
      explanation: `El precio máximo administrativo prevalece mientras esté vigente el régimen de protección, con independencia de valoraciones comerciales.`,
      sourceModuleId: "m09",
      legalReference: `Ley 5/2018 balear y normativa de precios máximos actualizada por acuerdo del Govern (febrero 2026).`,
      difficulty: "medium",
    },
    {
      id: "m09-q6",
      question: `La doble comisión (cobrar de vendedor y comprador):`,
      options: [
        `Nunca puede existir`,
        `Es correcta si se oculta para no complicar`,
        `Requiere transparencia sobre roles e intereses de las partes`,
        `Depende solo de la nacionalidad del cliente`,
      ],
      correctAnswerIndex: 2,
      explanation: `No es automáticamente ilícita, pero exige informar por escrito de roles y remuneración antes de avanzar en la operación.`,
      sourceModuleId: "m09",
      legalReference: `Deber general de transparencia e información en la mediación inmobiliaria (TRLGDCU; principios de conflicto de interés).`,
      difficulty: "medium",
    },
    {
      id: "m09-q7",
      question: `Una zona tensionada:`,
      options: [
        `Existe cuando hay muchas noticias sobre precios altos`,
        `Requiere declaración conforme al procedimiento aplicable de la administración competente`,
        `Se presume en toda Mallorca`,
        `Depende solo del portal inmobiliario que publica el anuncio`,
      ],
      correctAnswerIndex: 1,
      explanation: `Solo la declaración oficial, con criterios y procedimiento, activa el régimen específico de zona de mercado residencial tensionado.`,
      sourceModuleId: "m09",
      legalReference: `Ley 12/2023, de 24 de mayo, por el derecho a la vivienda.`,
      difficulty: "medium",
    },
    {
      id: "m09-q8",
      question: `El certificado energético:`,
      options: [
        `Sustituye automáticamente la cédula de habitabilidad`,
        `Acredita propiedad registral`,
        `Tiene función propia y no reemplaza otros documentos como la cédula o la inspección técnica`,
        `Garantiza calidad estructural`,
      ],
      correctAnswerIndex: 2,
      explanation: `Cada documento responde a una pregunta distinta: el certificado energético no equivale a habitabilidad, inspección técnica ni legalidad urbanística.`,
      sourceModuleId: "m09",
      legalReference: `Normativa de eficiencia energética de edificios y Decreto 145/1997 balear de habitabilidad.`,
      difficulty: "basic",
    },
    {
      id: "m09-q9",
      question: `Un agente debe derivar a un especialista cuando:`,
      options: [
        `Aparece una cuestión jurídica, técnica o fiscal determinante que excede su función`,
        `Nunca, porque debe resolverlo todo`,
        `Solo si el cliente es extranjero`,
        `Únicamente tras firmar arras`,
      ],
      correctAnswerIndex: 0,
      explanation: `El agente coordina y facilita información, pero no sustituye al notario, técnico, abogado o asesor fiscal en cuestiones que exceden su competencia.`,
      sourceModuleId: "m09",
      legalReference: `Ficha 05, roles y límites profesionales; Ficha 39, autoevaluación.`,
      difficulty: "basic",
    },
    {
      id: "m09-q10",
      question: `La mejor prevención de responsabilidad profesional es:`,
      options: [
        `Un anuncio sin advertencias`,
        `Una cláusula que elimine toda responsabilidad`,
        `Expediente, comprobaciones, advertencias y trazabilidad`,
        `No responder mensajes`,
      ],
      correctAnswerIndex: 2,
      explanation: `Una cláusula de exención genérica no neutraliza obligaciones legales; la prevención real es información verificable, expediente ordenado y comunicación documentada.`,
      sourceModuleId: "m09",
      legalReference: `Régimen general de responsabilidad civil (Código Civil) y buenas prácticas del Módulo 19 (seguro de responsabilidad civil profesional).`,
      difficulty: "medium",
    },
    {
      id: "m09-q11",
      question: `El artículo 47 de la Constitución Española establece que los poderes públicos deben:`,
      options: [
        `Garantizar una vivienda gratuita a toda la ciudadanía`,
        `Promover las condiciones necesarias para hacer efectivo el derecho a una vivienda digna y adecuada, regulando el suelo e impidiendo la especulación`,
        `Prohibir la propiedad privada de vivienda`,
        `Fijar directamente el precio de cualquier vivienda`,
      ],
      correctAnswerIndex: 1,
      explanation: `Es un mandato de promoción de condiciones, no un derecho subjetivo automático a recibir una vivienda concreta.`,
      sourceModuleId: "m09",
      legalReference: `Artículo 47 de la Constitución Española (en relación con el artículo 33 CE).`,
      difficulty: "basic",
    },
    {
      id: "m09-q12",
      question: `¿Qué organismo balear interviene en políticas públicas de vivienda como alquiler social, parque público y rehabilitación?`,
      options: [
        `El Registro de la Propiedad`,
        `El IBAVI (Institut Balear de l'Habitatge)`,
        `El Colegio Notarial`,
        `La Agencia Tributaria autonómica`,
      ],
      correctAnswerIndex: 1,
      explanation: `El IBAVI gestiona convocatorias, programas y parque público de vivienda en Illes Balears.`,
      sourceModuleId: "m09",
      legalReference: `Normativa autonómica de vivienda (Ley 5/2018 y desarrollo del IBAVI).`,
      difficulty: "basic",
    },
    {
      id: "m09-q13",
      question: `El Real Decreto 326/2026 regula:`,
      options: [
        `El Registro Oficial de Agentes Inmobiliarios`,
        `El Plan Estatal de Vivienda 2026-2030`,
        `La cédula de habitabilidad balear`,
        `La Ley 12/2023`,
      ],
      correctAnswerIndex: 1,
      explanation: `Es el marco estatal de programas y medidas de vivienda para el periodo 2026-2030, cuya aplicación depende de gestión, convenios y convocatorias.`,
      sourceModuleId: "m09",
      legalReference: `Real Decreto 326/2026, Plan Estatal de Vivienda 2026-2030.`,
      difficulty: "medium",
    },
    {
      id: "m09-q14",
      question: `¿Qué norma balear introdujo el Registro Oficial de Agentes Inmobiliarios de las Illes Balears?`,
      options: [
        `Ley 5/2018`,
        `Ley 3/2024, de medidas urgentes en materia de vivienda`,
        `Decreto 145/1997`,
        `Ley 12/2023 estatal`,
      ],
      correctAnswerIndex: 1,
      explanation: `La Ley 3/2024 introduce disposiciones específicas sobre requisitos para ejercer como agente inmobiliario y sobre el Registro autonómico.`,
      sourceModuleId: "m09",
      legalReference: `Ley 3/2024, de 3 de mayo, de medidas urgentes en materia de vivienda.`,
      difficulty: "medium",
    },
    {
      id: "m09-q15",
      question: `Si un cliente pide ocultar una derrama de comunidad aprobada para no "asustar" a compradores, el agente debe:`,
      options: [
        `Acceder porque el cliente paga la comisión`,
        `Informar de la derrama en la ficha documental y explicar el riesgo de ocultarla, aplicando el principio de veracidad y lealtad`,
        `Publicarlo sin mencionarlo y esperar que nadie pregunte`,
        `Solo mencionarlo si el comprador insiste explícitamente`,
      ],
      correctAnswerIndex: 1,
      explanation: `El código de conducta profesional exige veracidad y lealtad; ocultar información material genera mayor riesgo de reclamación futura.`,
      sourceModuleId: "m09",
      legalReference: `Ficha 18, código de conducta personal para el agente (principios de veracidad, lealtad y trazabilidad).`,
      difficulty: "medium",
    },
    {
      id: "m09-q16",
      question: `Un piso se vende ocupado sin título acreditado. ¿Cómo debe tratarlo el agente?`,
      options: [
        `Anunciarlo como "disponible para entrar a vivir"`,
        `Describir el estado de posesión de forma inequívoca en el anuncio y documentación de reserva, sin prometer disponibilidad no garantizada`,
        `Omitir el dato porque es sensible`,
        `Prometer que se resolverá en un mes`,
      ],
      correctAnswerIndex: 1,
      explanation: `No se puede anunciar como "disponible para entrar a vivir" salvo que exista base cierta y documentada; la transparencia protege especialmente a compradores no profesionales.`,
      sourceModuleId: "m09",
      legalReference: `Ficha 31, vulnerabilidad, ocupación y procedimientos; deber de información veraz (TRLGDCU).`,
      difficulty: "advanced",
    },
    {
      id: "m09-q17",
      question: `Respecto a la protección de datos personales en la actividad inmobiliaria, ¿cuál es correcta?`,
      options: [
        `Se puede compartir la documentación económica de varios candidatos a un alquiler en un mismo grupo de WhatsApp para agilizar`,
        `Debe aplicarse el principio de minimización: solo los datos necesarios para la finalidad concreta, con acceso y trazabilidad controlados`,
        `El consentimiento comercial y la necesidad de tratar datos para responder a una solicitud son lo mismo`,
        `No es necesario definir quién tiene acceso al CRM`,
      ],
      correctAnswerIndex: 1,
      explanation: `La minimización de datos exige limitar qué se pide, guarda y comparte, evitando difusión indiscriminada de documentación personal.`,
      sourceModuleId: "m09",
      legalReference: `Ficha 16, datos personales y comunicación digital (anticipo del Módulo 13 de protección de datos).`,
      difficulty: "medium",
    },
    {
      id: "m09-q18",
      question: `¿Qué distingue a una vivienda de precio limitado (VPL) de la vivienda libre?`,
      options: [
        `Nada, son sinónimos`,
        `La VPL está sujeta a limitaciones administrativas de precio de venta/alquiler durante un plazo determinado y a inscripción en el registro autonómico correspondiente`,
        `La VPL solo puede alquilarse, nunca venderse`,
        `La VPL no requiere ningún documento adicional para comercializarse`,
      ],
      correctAnswerIndex: 1,
      explanation: `La VPL tiene un régimen de precio máximo y plazo, comprobable mediante calificación, inscripción y precio vigente; no puede tratarse como vivienda libre sin verificación.`,
      sourceModuleId: "m09",
      legalReference: `Ley 5/2018 balear y actualización de precios máximos por acuerdo del Govern (febrero 2026).`,
      difficulty: "medium",
    },
  ],
};

export const m09Glossary: GlossaryItem[] = [
  {
    id: "g-m09-zona-mercado-residencial-tensionado",
    term: "Zona de mercado residencial tensionado",
    definition: `Ámbito territorial declarado por la administración competente conforme al procedimiento de la Ley 12/2023 cuando existe riesgo especial de oferta insuficiente de vivienda asequible, con efectos sobre renta, prórroga y actualización de contratos de arrendamiento vigentes en dicho ámbito.`,
    easyDefinition: `Una zona concreta donde una administración ha declarado oficialmente que hay poca vivienda asequible, activando reglas especiales para los alquileres.`,
    relatedModuleId: "m09",
  },
  {
    id: "g-m09-gran-tenedor",
    term: "Gran tenedor",
    definition: `Persona física o jurídica titular de más de diez inmuebles urbanos de uso residencial, o de una superficie construida de uso residencial superior a 1.500 m², excluyendo garajes y trasteros, con posibilidad de modulación del umbral en zonas de mercado residencial tensionado.`,
    easyDefinition: `Quien tiene muchas viviendas (más de diez) o mucha superficie de vivienda en propiedad, lo que puede activar obligaciones especiales en alquiler o zonas tensionadas.`,
    relatedModuleId: "m09",
  },
  {
    id: "g-m09-vivienda-precio-limitado",
    term: "Vivienda de precio limitado (VPL)",
    definition: `Vivienda sujeta a limitaciones administrativas de precio de venta y/o alquiler durante un plazo determinado, con inscripción en el registro autonómico correspondiente, régimen distinto de la Vivienda de Protección Oficial (VPO).`,
    easyDefinition: `Una vivienda que no puede venderse ni alquilarse por encima de un precio máximo fijado por la Administración, mientras dure ese régimen.`,
    relatedModuleId: "m09",
    balearContext: `En Illes Balears los precios máximos de VPL se actualizan mediante acuerdos del Govern (última actualización: febrero de 2026).`,
  },
  {
    id: "g-m09-cedula-habitabilidad",
    term: "Cédula de habitabilidad",
    definition: `Documento administrativo, regulado en Illes Balears por el Decreto 145/1997 (modificado por el Decreto 20/2007), que acredita que una vivienda cumple las condiciones de dimensionamiento, higiene e instalaciones exigidas en su ámbito.`,
    easyDefinition: `El "papel oficial" que certifica que una vivienda cumple los requisitos mínimos para poder habitarse.`,
    relatedModuleId: "m09",
    balearContext: `Regulación específica balear: Decreto 145/1997, modificado por el Decreto 20/2007.`,
  },
  {
    id: "g-m09-registro-oficial-agentes",
    term: "Registro Oficial de Agentes Inmobiliarios de las Illes Balears",
    definition: `Registro autonómico creado por la Ley 3/2024, de medidas urgentes en materia de vivienda, que establece requisitos para ejercer como agente inmobiliario en el territorio balear con fines de transparencia, calidad del servicio y protección de consumidores.`,
    easyDefinition: `La lista oficial en la que deben constar los agentes inmobiliarios de Baleares, distinta de estar en una asociación o colegio.`,
    relatedModuleId: "m09",
    balearContext: `Creado por la Ley 3/2024 balear; su desarrollo normativo se amplía en el Módulo 19.`,
  },
  {
    id: "g-m09-parque-publico-vivienda",
    term: "Parque público de vivienda",
    definition: `Conjunto de inmuebles y recursos afectados a políticas de vivienda con destino y gestión específicos, regulado por la Ley 12/2023, en el que interviene el IBAVI en el ámbito balear (promoción, gestión y adjudicación administrativa).`,
    easyDefinition: `Las viviendas que gestiona la Administración (no particulares) para fines sociales, con reglas propias de precio, destino y acceso.`,
    relatedModuleId: "m09",
    balearContext: `El IBAVI (Institut Balear de l'Habitatge) es el organismo balear que gestiona el parque público de vivienda.`,
  },
];

export const m09Alerts: string[] = [
  `Fecha de corte del contenido: el material fuente está contrastado a 4 de julio de 2026; toda cifra, plazo o dato de vivienda (precios máximos, zonas tensionadas, ayudas) debe verificarse en la fecha concreta del caso antes de recibir dinero, publicar o firmar.`,
  `Ley 12/2023 y Tribunal Constitucional: la Ley 12/2023 ha sido objeto de pronunciamientos del Tribunal Constitucional; se debe usar siempre el texto consolidado vigente y no resúmenes anteriores a esos cambios.`,
  `Actualización de precios máximos (VPO/VPL): en febrero de 2026 se aprobó una actualización de precios máximos de venta y alquiler de viviendas protegidas, de precio tasado y de precio limitado en Illes Balears mediante acuerdo del Govern; el dato concreto debe consultarse en la publicación vigente para cada régimen, municipio, superficie y tipo de vivienda.`,
  `Plan Estatal de Vivienda 2026-2030: aprobado por el Real Decreto 326/2026; sus programas y ayudas requieren gestión, convenios, convocatoria y resolución administrativa favorable antes de considerarse efectivos para un cliente.`,
  `Ley 3/2024 balear y Registro Oficial de Agentes: introduce requisitos para ejercer como agente inmobiliario y crea el Registro Oficial de Agentes Inmobiliarios de las Illes Balears; su desarrollo normativo (formularios, actualizaciones, régimen de comprobación) está en curso y debe revisarse periódicamente en el canal oficial autonómico — el Módulo 19 desarrolla este marco en profundidad.`,
];
