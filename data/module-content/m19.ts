import type { Module, GlossaryItem } from "@/lib/types";

export const m19Module: Module = {
  id: "m19",
  code: "M19",
  title: "ROAIIB",
  order: 19,
  description:
    "Requisitos del Registro Oficial de Agentes Inmobiliarios de les Illes Balears.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m19-l1",
      moduleId: "m19",
      title: "El marco legal del Registro y su ámbito de aplicación",
      order: 1,
      summary:
        "El Registro Oficial de Agentes Inmobiliarios de las Illes Balears (ROAIIB) es una institución administrativa pública y obligatoria, distinta del Registro de la Propiedad o de la colegiación, que ordena quién puede intermediar de forma habitual y retribuida en operaciones inmobiliarias en Baleares.",
      content: `La denominación legal vigente es "Registro Oficial de Agentes Inmobiliarios de las Illes Balears". El nombre importa porque identifica una institución administrativa concreta y distinta del Registro de la Propiedad, del Registro Mercantil, de una colegiación profesional, de una asociación empresarial o de una licencia municipal. El Registro nace para ordenar la intermediación inmobiliaria, elevar la transparencia y reforzar la protección de las personas usuarias. No convierte al Govern en garante de cada operación ni sustituye el control judicial, notarial, registral, urbanístico o fiscal; sí crea un marco verificable de requisitos, seguros, garantías, capacitación, atención y publicidad.

## Marco normativo y jerarquía de fuentes

El núcleo normativo está en la Ley 3/2024, de 3 de mayo, de medidas urgentes en materia de vivienda, concretamente en sus disposiciones adicionales decimotercera y decimocuarta, que desarrollan la previsión de la Ley 5/2018 de la vivienda de las Illes Balears. La Ley 39/2015 ordena el procedimiento administrativo (declaración responsable, subsanación, recursos); el RGPD y la Ley Orgánica 3/2018 rigen el tratamiento de datos de clientes; y la normativa de consumo (Ley 7/2014), fiscal, mercantil, laboral y sectorial completa el marco. La regla profesional es siempre consultar la versión consolidada oficial antes de dar una respuesta de cumplimiento: una nota web divulgativa, una plantilla de franquicia o el criterio de un portal inmobiliario no prevalecen sobre el texto legal ni sustituyen una comprobación de la Sede electrónica vigente.

## Ámbito de aplicación: quién queda dentro

Quedan sometidas las personas físicas o jurídicas que, de forma habitual y retribuida, prestan mediación en compraventa, opción de compra, alquiler, permuta o cesión de inmuebles, o de derechos relativos a esas operaciones. El ámbito existe si el inmueble está en Illes Balears o si la transacción se lleva a cabo en su territorio. La habitualidad se interpreta por la continuidad y organización de la actividad, no por el número exacto de anuncios; la retribución comprende honorarios, comisión, fee de captación, porcentaje de éxito o cualquier contraprestación por mediar. Llamarse "consultor", "property finder", "personal shopper" o "asesor de inversiones" no excluye la norma cuando en realidad se media de modo habitual y retribuido en la operación inmobiliaria.

## Exclusiones y fronteras con otras actividades

La norma excluye a administradores de fincas cuando se limitan a su actividad propia y no prestan servicios de mediación inmobiliaria, y a quien actúa de forma no habitual y sin retribución. Estas exclusiones son funcionales: dependen de lo que se hace de verdad, no de la profesión declarada en una tarjeta. Un administrador que gestiona una comunidad no se convierte por eso en agente inmobiliario, pero si capta un inmueble, lo publica, organiza visitas, negocia precio, recibe una señal o factura una comisión por una venta, entra en una actividad distinta que exige analizar el Registro. Lo mismo ocurre con abogados, arquitectos, gestores o empleados: la titulación principal no inmuniza frente a obligaciones por intermediación.

## Naturaleza pública, administrativa y obligatoria; funciones de la Dirección General

El Registro es público, administrativo y obligatorio. Público significa que habilita el acceso a determinados datos de contacto de los inscritos conforme a las reglas de protección de datos; administrativo significa que lo gestiona la administración competente y que sus decisiones se someten al procedimiento y a la vía de recursos; obligatorio significa que no es un distintivo opcional de calidad. La actividad es libre en el sentido de que no se reserva a una profesión colegiada concreta, pero se condiciona al cumplimiento de requisitos legales: capacitación o experiencia, establecimiento o dirección, garantías, seguro, deberes de información y declaración responsable seguida de inscripción. La inscripción tiene duración indefinida, pero no es irrevisable: mantenerla exige conservar condiciones.

La Dirección General competente en vivienda mantiene el Registro, gestiona altas, cambios, suspensiones y bajas; controla condiciones de inscripción; emite certificaciones y facilita el acceso público a los datos en los límites de la protección de datos. También fomenta códigos de conducta y deontología profesional. Para el profesional, esta función no es abstracta: define quién puede pedirte documentación, quién puede comprobar una declaración responsable y quién resuelve sobre la inscripción. La administración puede contrastar información declarada con fuentes públicas o privadas autorizadas y requerir evidencia adicional.`,
      easyExplanation:
        "El ROAIIB es un registro público obligatorio del Govern balear que controla quién puede ejercer como agente inmobiliario en las islas. No es un simple listado de nombres: exige que quien se inscribe demuestre formación o experiencia, tenga seguro y garantía, y cumpla reglas de atención al cliente. Aplica a cualquier persona o empresa que medie de forma habitual y cobrando en compraventas, alquileres o permutas de inmuebles en Baleares, sea cual sea el nombre comercial que use (\"consultor\", \"personal shopper\", etc.). Administradores de fincas, abogados o arquitectos quedan excluidos solo mientras no hagan de facto tareas de mediación inmobiliaria retribuida.",
      balearExample:
        "Un asesor con domicilio fiscal en Barcelona capta compradores para segundas residencias en Andratx y Calvià, cobrando una comisión de éxito al vendedor, sin oficina en Mallorca. Aunque no tenga local comercial en la isla, su actividad se refiere habitualmente a inmuebles baleares con retribución, por lo que debe analizar su encaje en el régimen del ROAIIB, incluida la necesidad de una dirección postal accesible en territorio balear si opera de forma exclusivamente digital.",
      keyConcepts: [
        "ROAIIB",
        "Ley 3/2024",
        "disposiciones adicionales decimotercera y decimocuarta",
        "Ley 5/2018 de la vivienda",
        "habitualidad",
        "retribución",
        "ámbito territorial",
        "exclusión funcional",
        "Dirección General de Vivienda y Arquitectura",
        "declaración responsable",
      ],
      frequentErrors: [
        "Confundir el ROAIIB con el Registro de la Propiedad, el Registro Mercantil o una colegiación profesional.",
        "Creer que cambiar el nombre comercial del servicio (\"consultor\", \"personal shopper\") excluye la aplicación de la norma.",
        "Asumir que la exclusión de administradores de fincas es un privilegio permanente y no una condición funcional que depende de la actividad real.",
        "Confiar en una página web o nota divulgativa desactualizada en lugar de consultar el texto legal consolidado vigente.",
      ],
      examples: [
        {
          id: "m19-l1-ex1",
          title: "Denominación incorrecta en publicidad",
          scenario:
            "Una agencia anuncia \"agente certificado por el Govern\" sin número de inscripción ni distintivo.",
          application:
            "El Registro acredita condiciones de ejercicio, pero no garantiza que un inmueble concreto sea legal o esté libre de cargas; la comunicación debe reproducir la condición real y comprobable de inscripción.",
          isBalearContext: false,
        },
        {
          id: "m19-l1-ex2",
          title: "Actividad híbrida de administrador de fincas",
          scenario:
            "Una administradora de comunidad publica en redes una vivienda de un propietario de la comunidad y pide \"una gratificación si se vende\".",
          application:
            "Aunque use lenguaje informal, al asumir visitas y negociación de precio, el riesgo de estar sujeta al régimen de agente inmobiliario no desaparece.",
          isBalearContext: false,
        },
        {
          id: "m19-l1-ex3",
          title: "Norma frente a fuente informativa desactualizada",
          scenario:
            "Un comercial cita una página de 2024 que califica el Registro como \"voluntario\".",
          application:
            "La ley consolidada configura el Registro como obligatorio; la web informativa no modifica una disposición legal.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m19-l2",
      moduleId: "m19",
      title: "Derechos, deberes y atención a las personas usuarias",
      order: 2,
      summary:
        "El Registro impone un catálogo recíproco de derechos y deberes entre agente y cliente, con obligaciones concretas de información, atención, resolución de conflictos e identificación visible del agente.",
      content: `El usuario tiene derecho a recibir información suficiente, veraz, comprensible, eficaz, objetiva, inequívoca y completa antes de contratar. También puede exigir documentación de los términos del servicio, justificantes de pago, calidad conforme al contrato, trato no discriminatorio, distintivos visibles, hojas de reclamación y protección de datos. Este catálogo cambia cómo se redacta un anuncio, una nota de encargo o un correo: la información debe permitir decidir, no sólo generar interés. Un inmueble anunciado con "potencial turístico", "lista para entrar" o "sin gastos" requiere una base real y un lenguaje que no silencie limitaciones relevantes. La agencia debe distinguir entre dato proporcionado por la propiedad, dato comprobado y dato pendiente de verificar. La protección del usuario no convierte al agente en garante técnico de cada hecho, pero sí obliga a no inventar, no ocultar, no usar ambigüedad para desplazar el riesgo y orientar al cliente hacia la fuente competente cuando la cuestión requiera informe o certificación.

## Deberes de la persona usuaria y colaboración documental

La persona usuaria también debe suscribir la nota de encargo, pagar los servicios pactados, respetar normas de atención y, sobre todo, aportar información suficiente y veraz sobre el inmueble, sus actuaciones y su legalidad. Debe facilitar la documentación necesaria o autorizar al agente a obtenerla ante organismos competentes. En la práctica, esta obligación protege tanto al consumidor como al profesional: un propietario que oculta una orden de restablecimiento, un embargo, una obra sin título habilitante o una deuda comunitaria puede comprometer la comercialización. La agencia no debe aceptar el silencio como solución: debe pedir documentos, registrar advertencias y limitar el alcance de la publicidad hasta que exista soporte. La colaboración documental no permite recoger datos indiscriminadamente: sólo deben solicitarse los necesarios para la finalidad de la operación.

## Resolución de conflictos, mediación y arbitraje de consumo

La norma fomenta la mediación y el arbitraje de consumo sin suprimir la libertad de acudir a la vía judicial. Las organizaciones sectoriales deben propiciar la adhesión a la Junta Arbitral de Consumo de las Illes Balears. Un sistema serio de conflictos no empieza cuando llega una demanda: empieza con una ruta de atención (recepción de queja, identificación de expediente, respuesta documentada, propuesta de corrección, registro de plazos y, si procede, derivación al canal arbitral o jurídico). No se puede forzar a un consumidor a renunciar por contrato a derechos imperativos ni usar cláusulas de "conformidad total" para encubrir información deficiente.

## Derechos y deberes generales del agente

El agente puede ejercer libremente dentro de la ley, ser informado de medidas relevantes, participar mediante colegios y asociaciones, aparecer en directorios o sistemas administrativos cuando proceda, obtener reconocimiento del cumplimiento de requisitos y acceder a la inscripción si los reúne. La libertad profesional permite organizar empresa, fijar especialización y elegir canales, pero no ampara publicidad confusa, retención de arras sin garantía, cobros no transparentes o falta de nota de encargo. Como contrapartida, el agente debe presentar declaraciones y comunicaciones exigibles, mantener seguros y garantías, exhibir distintivos, ofrecer inmuebles con información adecuada, publicar precios finales de sus servicios, suscribir nota de encargo, entregar documentos y justificantes, facturar de forma desglosada, tener hojas de reclamación y hacer público el número de Registro. Este conjunto de deberes funciona como un sistema: el encargo conecta al cliente con el inmueble y el servicio; la garantía protege dinero recibido; la factura demuestra la remuneración; y la publicidad conecta el número de Registro con la identidad de quien ofrece el servicio.

## Establecimiento, atención al cliente y distintivo

Quien presta servicio presencial debe disponer de establecimiento abierto al público en Illes Balears: domicilio profesional, local, oficina o despacho que cumpla permisos, licencias y altas fiscales. Quien presta servicios exclusivamente a distancia debe contar con una dirección postal accesible en el territorio balear. Todos los agentes, con independencia de su forma jurídica y de si operan presencialmente o telemáticamente, deben disponer de una línea telefónica y una dirección de correo electrónico de atención al cliente. El distintivo y el número de inscripción deben constar de forma visible en la ubicación de atención y en toda publicidad de las actividades. Mientras no exista número definitivo, la norma permite incorporar el número de registro de entrada otorgado al presentar la declaración responsable en el registro público.`,
      easyExplanation:
        "La ley protege al cliente exigiendo información clara y veraz antes de contratar, y al mismo tiempo exige que el cliente colabore aportando documentos reales sobre el inmueble. El agente debe tener teléfono, correo y un local o dirección accesible en Baleares, mostrar su número de Registro en toda publicidad, y disponer de hoja de reclamaciones. Si surge un conflicto, la ley favorece primero la mediación o el arbitraje de consumo antes de ir a juicio, aunque el cliente siempre puede optar por la vía judicial.",
      balearExample:
        "En Manacor, un comprador pregunta al agente si una terraza puede cerrarse con obra. El agente no responde \"seguro que sí\", sino que explica que depende de normativa de comunidad, urbanismo municipal y, en su caso, patrimonio, y documenta que ha recomendado verificación técnica antes de seguir adelante con la operación.",
      keyConcepts: [
        "derecho a la información",
        "colaboración documental",
        "Junta Arbitral de Consumo de las Illes Balears",
        "distintivo visible",
        "número de Registro",
        "establecimiento abierto al público",
        "dirección postal accesible",
        "hoja de reclamaciones",
      ],
      frequentErrors: [
        "Publicar anuncios con afirmaciones no verificadas (\"legalizado\", \"sin cargas\") sin base documental.",
        "Aceptar el silencio del propietario como excusa para no informar de riesgos conocidos.",
        "No disponer de canal de atención (teléfono/correo) realmente operativo y trazable.",
        "Ocultar el número de Registro o el distintivo en la publicidad digital.",
        "Gestionar una reclamación de forma educada pero sin revisar realmente el expediente.",
      ],
      examples: [
        {
          id: "m19-l2-ex1",
          title: "Queja por honorarios no explicados",
          scenario:
            "Una arrendataria reclama porque se le cobraron honorarios sin explicación previa.",
          application:
            "La respuesta exige revisar contrato, factura, fecha, servicio prestado y norma aplicable; no basta con contestar \"es política de empresa\".",
          isBalearContext: false,
        },
        {
          id: "m19-l2-ex2",
          title: "Trazabilidad por WhatsApp",
          scenario:
            "Un cliente informa por WhatsApp que retira una oferta; el comercial no registra el mensaje y después se discute la reserva.",
          application:
            "La trazabilidad convierte una conversación informal en evidencia operativa vinculada al expediente.",
          isBalearContext: false,
        },
        {
          id: "m19-l2-ex3",
          title: "Colaboración documental incompleta",
          scenario:
            "Un propietario pide publicar de inmediato y promete enviar después la cédula y el certificado energético.",
          application:
            "La agencia debe valorar si puede anunciar sin omitir información exigible o si debe esperar y dejar constancia de la causa del retraso.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m19-l3",
      moduleId: "m19",
      title: "La nota de encargo: función, momento y contenido mínimo",
      order: 3,
      summary:
        "La nota de encargo es el contrato base que formaliza la relación entre agente y usuario, y debe contener de forma mínima e inequívoca la identificación de las partes y del activo, la operación pactada, el tiempo de vigencia y las condiciones económicas y de garantía.",
      content: `La nota de encargo formaliza el servicio entre profesional y usuario. No es un simple formulario interno ni una autorización verbal para publicar. Define quién contrata, qué inmueble se trata, qué operación se encomienda, cuánto dura el encargo y qué remuneración corresponde. La norma exige que los contenidos mínimos se diferencien claramente de las cláusulas libremente pactadas: esta separación protege al cliente frente a contratos donde las condiciones esenciales aparecen diluidas entre penalizaciones, exclusividades, autorizaciones de datos o declaraciones genéricas. El encargo debe firmarse antes de ofrecer el inmueble, recibir fondos o formalizar precontratos en nombre de quien oferta. Si la agencia va a recibir una reserva, arras o señal, la autorización debe ser expresa y coherente con la garantía aplicable.

## Identificación de partes y del activo

El contenido mínimo incluye datos personales necesarios de quien contrata y el título que habilita a hacerlo; identificación del agente y, cuando proceda, de la empresa; número de Registro o de solicitud; e identificación del inmueble con datos registrales y referencia catastral. La exigencia evita contratos de mediación "ciegos": puede haber portales, anexos, plazas, trasteros, varias referencias o discrepancias entre Catastro y Registro. La agencia no tiene que resolver todos los desajustes antes de encargar, pero debe identificarlos y no construir una campaña sobre una superficie o titularidad no comprobada. La minimización de datos importa: no se debe copiar más información personal de la necesaria, pero sí documentar lo indispensable para comprobar capacidad, comunicación y ejecución del servicio.

## Operación encomendada, exclusividad y tiempo

La nota debe indicar la operación encomendada, si existe exclusividad, su plazo, fecha de inicio y terminación o, si es indefinida hasta revocación, el mecanismo de comunicación. También debe indicar el precio o renta solicitado por el cliente. La exclusividad no se presume y no puede redactarse de forma ambigua: debe explicar qué limita, qué ocurre con contactos previos, cómo se trata una venta directa del propietario, cómo se prorroga y qué hechos generan comisión. El plazo debe ser proporcionado a la estrategia y permitir al cliente decidir con información, no por inercia contractual. El precio solicitado no equivale siempre a valor de mercado: es una instrucción del cliente que debe contrastarse con valoración, comparables, situación legal y demanda; el agente puede aconsejar un ajuste, pero no puede modificarlo unilateralmente ni publicar un precio diferente sin autorización verificable.

## Honorarios, seguros y garantía en la nota de encargo

La nota debe reflejar los honorarios del agente, impuestos y forma de pago, así como los datos de la póliza de responsabilidad civil y del seguro de caución o fianza que garantiza la devolución de cantidades entregadas a cuenta directamente al agente. Este bloque enlaza contratación, dinero y responsabilidad. Si la agencia recibe fondos, el cliente debe poder saber bajo qué título los recibe, a quién pertenecen, qué garantía existe, cuándo se entregarán al destinatario y qué ocurre si la operación no avanza. Si la agencia no recibe fondos, el encargo debe evitar aparentar facultades que no tiene. No basta con mencionar "asegurado": debe incluir entidad, referencia o fórmula que permita identificar la cobertura, sin divulgar más datos de los necesarios. El equipo comercial debe saber que una póliza de RC y una garantía de fondos responden a riesgos distintos.`,
      easyExplanation:
        "La nota de encargo es el papel que convierte una charla informal en un contrato serio entre agencia y cliente. Debe decir claramente quién es el cliente, qué piso o casa se vende o alquila (con datos catastrales, no solo la dirección comercial), si hay exclusividad y hasta cuándo, cuánto cobra la agencia y qué seguro o garantía cubre el dinero si el agente lo recibe. Sin este documento firmado, la agencia no debería publicar el inmueble, cobrar señales ni firmar precontratos en nombre del propietario.",
      balearExample:
        "En Sóller, un piso se anuncia incluyendo una plaza de garaje, pero la plaza es en realidad una participación indivisa sin derecho de uso claramente documentado. La nota de encargo debe reflejar lo que está acreditado registral y catastralmente, no la versión comercial que dio el propietario de palabra.",
      keyConcepts: [
        "nota de encargo",
        "contenido mínimo legal",
        "exclusividad",
        "referencia catastral",
        "número de Registro",
        "honorarios desglosados",
        "seguro de caución/fianza",
        "autorización de recepción de fondos",
      ],
      frequentErrors: [
        "Publicar el inmueble o recibir dinero antes de que la nota de encargo esté firmada.",
        "Redactar la exclusividad de forma ambigua sin explicar prórroga, venta directa o hechos que generan comisión.",
        "Modificar unilateralmente el precio solicitado por el cliente sin autorización verificable.",
        "Confundir \"estar asegurado\" con identificar entidad, referencia y alcance real de la cobertura.",
        "Firmar el encargo con quien no acredita título de disposición sobre el inmueble.",
      ],
      examples: [
        {
          id: "m19-l3-ex1",
          title: "Firma sin poder acreditado",
          scenario:
            "Un hijo firma una hoja de encargo para vender la vivienda de su madre sin poder acreditado.",
          application:
            "El problema no es de diseño del documento, sino de legitimación para contratar el servicio y disponer de la operación.",
          isBalearContext: false,
        },
        {
          id: "m19-l3-ex2",
          title: "Exclusiva mal explicada",
          scenario:
            "El propietario retira el inmueble un día antes de acabar la exclusiva y lo vende seis meses después a un contacto que visitó con la agencia.",
          application:
            "La respuesta depende del contrato claro y del registro de actividad, no de una discusión genérica sobre \"quién lo enseñó\".",
          isBalearContext: false,
        },
        {
          id: "m19-l3-ex3",
          title: "Gestión de fondos sin trazabilidad",
          scenario:
            "Una agencia recibe 15.000 EUR de reserva y los ingresa en su cuenta operativa.",
          application:
            "Aunque tenga intención de transferirlos luego, el sistema es débil si no existe trazabilidad y cobertura adecuada desde el primer momento.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m19-l4",
      moduleId: "m19",
      title: "Capacitación profesional, solvencia y coberturas obligatorias",
      order: 4,
      summary:
        "Para inscribirse hay que acreditar al menos una de tres vías de capacitación (titulación, formación de 200 horas o experiencia de cuatro años), y mantener de forma continua un seguro de responsabilidad civil y una garantía de devolución de cantidades entregadas a cuenta.",
      content: `La inscripción exige acreditar al menos una vía: titulación universitaria en ciencias sociales y jurídicas, ingeniería o arquitectura; formación no universitaria de al menos 200 horas en materia inmobiliaria; o experiencia de cuatro años inmediatamente anteriores en servicios propios de agente inmobiliario. Las vías son alternativas, no acumulativas. La capacitación formal no sustituye los demás requisitos: establecimiento o dirección postal, seguro, garantía, nota de encargo, publicidad identificada, obligaciones de consumo y actualización permanente.

## La formación de 200 horas: contenidos y calidad

La formación no universitaria debe alcanzar al menos 200 horas lectivas y relacionarse con servicios de mediación, asesoramiento y gestión. La norma establece materias mínimas: propiedad, derecho inmobiliario e hipotecario, arrendamientos, urbanismo, vivienda, fiscalidad, valoraciones, promoción, marketing, consumo, derecho profesional, Registro y prevención del blanqueo. El formato puede ser presencial, a distancia o e-learning, siempre que el centro asegure tutorías, atención al alumnado, seguimiento y control del aprendizaje. El certificado debe acreditar asistencia y aprovechamiento, no sólo inscripción o interés; para evaluar un programa no basta con mirar el número de horas, hay que comprobar temario, metodología, evaluación, identidad de docentes y soporte al alumno.

## Experiencia profesional: acreditación de cuatro años

La vía de experiencia exige prestación de servicios de agente durante, al menos, los cuatro años inmediatamente anteriores a la solicitud. Puede acreditarse con informe de vida laboral que demuestre dedicación al sector, alta de autónomo o contrato de franquicia inmobiliaria vigente durante ese periodo. La experiencia debe tener correspondencia razonable con la actividad regulada: una vida laboral en empresa de construcción, administración general o turismo puede no bastar sin elementos que acrediten mediación inmobiliaria. Si existen periodos discontinuos, cambios de epígrafe, colaboración mercantil o actividad en otra empresa, conviene preparar explicación documental coherente antes de presentar la declaración; no se debe falsificar ni completar retrospectivamente la historia documental.

## Personas jurídicas: quién debe cumplir capacitación

Cuando el agente es una sociedad, los requisitos de capacitación y actuación profesional deben cumplirlos, como mínimo, una persona administradora o integrante del consejo de administración y también la persona responsable del establecimiento abierto al público. El resto de empleados no se convierte automáticamente en agente por trabajar para la empresa. En un grupo con varias oficinas, cada responsable de oficina debe acreditar capacitación individual; una cadena no puede asumir que la capacitación corporativa queda resuelta por un documento genérico. Los seguros y garantías se contratan individualmente por cada agente según aclaraciones administrativas.

## Idoneidad y antecedentes vinculados a la actividad

La norma establece que las personas físicas y jurídicas no deben tener antecedentes penales por delitos cometidos en el ejercicio de la actividad inmobiliaria. Esta regla se suma a los principios de conducta, secreto profesional, comunicaciones comerciales y transparencia en remuneraciones. En la práctica se aplica mejor mediante un código de conducta real: reglas de aceptación de encargos, autorización de precios, recepción de fondos, conflicto de interés, uso de datos, publicación, reclamaciones y escalado a dirección.

## Garantía obligatoria y seguro de responsabilidad civil

La garantía protege las cantidades que el agente recibe en ejercicio profesional hasta que se ponen a disposición de sus destinatarios: responde frente a retención o falta de devolución cuando la agencia recibe reservas, señales, arras u otras sumas ajenas. Puede contratarse directamente o colectivamente a través de colegios, asociaciones profesionales o empresariales; consiste en seguro de caución o fianza con entidad aseguradora o financiera autorizada. El importe mínimo legal es de 60.000 EUR por año de cobertura. La garantía se ejecuta por acuerdo expreso entre quien entregó la cantidad y quien la recibió, o por sentencia judicial, laudo arbitral firme o resolución administrativa firme; no se activa porque una parte lo pida unilateralmente por teléfono.

El agente debe además mantener una póliza de responsabilidad civil (RC) que cubra daños y perjuicios causados durante su actividad. La cobertura mínima por asegurado en Illes Balears es de 100.000 EUR por siniestro y 600.000 EUR por año. La RC no es una garantía de éxito comercial: cubre, dentro de condiciones y exclusiones, daños derivados de errores, omisiones o negligencias profesionales. Garantía de fondos y seguro RC no son lo mismo: la garantía cubre cantidades recibidas por la agencia hasta ponerlas a disposición de su destinatario; el seguro RC cubre daños y perjuicios causados en el ejercicio profesional. Son instrumentos complementarios, con finalidad, beneficiarios y activación distintos: una póliza de RC excelente no sustituye una garantía de fondos deficiente, y viceversa.`,
      easyExplanation:
        "Para poder inscribirse hay tres caminos posibles (título universitario, curso de al menos 200 horas, o cuatro años de experiencia real en el sector), y basta con cumplir uno. Además, siempre hay que tener contratados dos seguros distintos que cubren cosas diferentes: uno de responsabilidad civil (por errores o negligencias, mínimo 100.000 EUR por siniestro y 600.000 EUR al año) y una garantía de caución o fianza (por el dinero que la agencia recibe de clientes, mínimo 60.000 EUR al año). Si la empresa es una sociedad, al menos el administrador y el responsable de cada oficina deben cumplir personalmente estos requisitos.",
      balearExample:
        "Un aspirante en Inca combina 120 horas de formación con dos años de experiencia como comercial inmobiliario. Esa mezcla puede ser valiosa profesionalmente, pero no encaja por sí sola en ninguna de las tres vías legalmente definidas: le faltan 80 horas para la vía formativa o dos años más para la vía de experiencia.",
      keyConcepts: [
        "tres vías de capacitación",
        "formación de 200 horas",
        "experiencia de cuatro años",
        "idoneidad y antecedentes",
        "garantía de caución/fianza (60.000 EUR/año)",
        "seguro de RC (100.000 EUR/siniestro, 600.000 EUR/año)",
        "responsable de establecimiento",
        "ejecución de la garantía",
      ],
      frequentErrors: [
        "Creer que \"tener experiencia\" en general equivale a cumplir la vía legal de experiencia (que exige cuatro años inmediatamente anteriores y medios de acreditación).",
        "Presentar un curso de \"200 horas\" sin tutorías, evaluación ni certificado de aprovechamiento como si cumpliera automáticamente el requisito.",
        "Confundir el seguro de RC con la garantía de devolución de fondos, pensando que uno sustituye al otro.",
        "En sociedades con varias oficinas, no acreditar la capacitación individual del responsable de cada nueva oficina.",
        "Usar el importe mínimo legal de la garantía como argumento de que toda operación está cubierta íntegramente, sin gestionar el riesgo real de exposición.",
      ],
      examples: [
        {
          id: "m19-l4-ex1",
          title: "Expansión societaria sin capacitación individual",
          scenario:
            "Una sociedad abre una segunda oficina en Manacor y nombra responsable a un comercial sin capacitación acreditada.",
          application:
            "La expansión comercial debe acompañarse de expansión del sistema de cumplimiento, no sólo de crecimiento de ventas.",
          isBalearContext: true,
        },
        {
          id: "m19-l4-ex2",
          title: "Exposición agregada por encima del mínimo legal",
          scenario:
            "Una agencia recibe simultáneamente varias reservas elevadas y supera con facilidad el mínimo de 60.000 EUR de garantía.",
          application:
            "Debe revisar su exposición total y no actuar como cuenta puente sin control adicional.",
          isBalearContext: false,
        },
        {
          id: "m19-l4-ex3",
          title: "Conflicto de interés oculto",
          scenario:
            "Un agente recibe una oferta de comprador al tiempo que representa al vendedor y no revela su relación con el comprador.",
          application:
            "Ocultar el conflicto destruye confianza y aumenta el riesgo de reclamación, independientemente de si la operación acaba siendo válida.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m19-l5",
      moduleId: "m19",
      title: "Inscripción, modificaciones y control administrativo",
      order: 5,
      summary:
        "La inscripción se basa en una declaración responsable —individual o colectiva— tramitada electrónicamente, sujeta a comprobaciones posteriores, obligación de actualizar cambios y a un régimen sancionador que califica el ejercicio sin cumplir requisitos como oferta ilegal o intrusismo.",
      content: `La inscripción individual se apoya en declaración responsable. En ella se afirma que se dispone de establecimiento o dirección, permisos y altas, capacitación, pólizas y garantías; que se mantendrán los requisitos; que se seguirá un código de conducta; y que se autoriza la comprobación administrativa. La declaración responsable acelera el inicio administrativo, pero desplaza el peso hacia la veracidad: no es un formulario para completar "con intención de cumplir". Quien declara debe poder acreditar el contenido desde el momento de presentación; la administración puede comprobar después y exigir documentos, y una falsedad u omisión sustancial puede derivar en expediente, cancelación y sanción. Para minimizar riesgo, conviene preparar un dossier previo a la solicitud con evidencia numerada para cada afirmación del formulario.

## Inscripción individual e inscripción colectiva

La inscripción individual requiere preparar el expediente, completar el trámite electrónico, firmar mediante certificado digital, DNIe o Cl@ve permanente, adjuntar o declarar lo exigido y conservar justificante. La secuencia eficaz empieza fuera de la Sede: primero se verifica encaje de actividad, capacitación, dirección, altas y coberturas; después se reúne evidencia, se revisa la declaración y se define quién recibirá notificaciones; sólo entonces se presenta. Una vez presentado, se registra el número de entrada, que puede incorporarse a la publicidad mientras no exista número definitivo de inscripción.

La inscripción también puede tramitarse colectivamente por colegios profesionales, asociaciones profesionales o empresariales, y pueden intervenir otras entidades o asociaciones, aunque en ciertos supuestos se requieren declaraciones responsables individuales de cada persona. La vía colectiva puede estandarizar expedientes, formación y pólizas, pero no convierte a la asociación en responsable de la conducta diaria de cada agencia; debe existir relación actualizada de miembros, establecimientos y, cuando proceda, sociedades con las que operan.

## Tramitación electrónica, firma digital y comprobaciones posteriores

La Sede electrónica exige identificación suficiente para presentar el trámite mediante certificado digital, DNI electrónico o Cl@ve permanente; la persona apoderada puede actuar cuando el sistema y la representación lo permitan. La firma digital garantiza identidad, integridad y trazabilidad de la declaración; en sociedades hay que revisar quién tiene capacidad de representación y apoderamiento, porque el uso de una credencial no autorizada puede retrasar el trámite o generar un expediente sin vínculo claro con quien declara.

La presentación permite a la administración contrastar y comprobar datos declarados con información de otros organismos o entidades; los responsables del Registro pueden hacer comprobaciones posteriores sobre documentación, garantías y seguros. El expediente debe existir desde el día uno y mantenerse vivo: si cambia la aseguradora, oficina, administrador, responsable o correo de atención, el sistema debe actualizar primero el hecho, después el Registro y finalmente la publicidad.

## Modificación de datos, suspensión y cancelación

Las personas inscritas deben actualizar los datos cuando se produce una modificación (nombre o forma societaria, NIF, administradores, responsables de establecimiento, dirección, oficinas, teléfonos, correo, póliza, garantía, capacitación declarada y situación de actividad). El procedimiento de modificación opera con la misma lógica de inscripción y se realiza por vía electrónica conforme al trámite vigente.

La inscripción puede suspenderse temporalmente por inhabilitación derivada de resolución sancionadora grave o muy grave. Puede cancelarse por fallecimiento, extinción de persona jurídica o incumplimiento de requisitos, previa audiencia. La cancelación implica baja del Registro. La audiencia permite conocer hechos, aportar alegaciones y corregir errores cuando proceda, pero no debe interpretarse como permiso para operar indefinidamente sin requisitos. La cancelación administrativa puede ser el final del Registro, pero no elimina obligaciones contractuales, de consumo, fiscales o de protección de datos ya generadas.

## Actividad clandestina, oferta ilegal e intrusismo, y régimen sancionador

Realizar publicidad o actividad de agente sin haber presentado declaración responsable y obtenido inscripción, o sin cumplir exigencias legales o reglamentarias, se califica como oferta ilegal o actividad clandestina, intrusismo y competencia desleal, con apertura de expediente conforme a la Ley 5/2018. No existe una "fase de prueba" que permita comercializar como agencia sin requisitos mientras se decide si el negocio funciona; también se prohíben denominaciones que induzcan a error sobre las características de la actividad, presentarse con títulos, registros o autorizaciones inexistentes, o afirmar que una propiedad está "validada" sin explicar el alcance real de la revisión.

La Ley 5/2018 tipifica como grave, entre otras conductas, falsear, omitir o alterar aspectos sustanciales de la declaración responsable de agentes, incumplir la obligación de nota de encargo y realizar actividad sin presentar declaración responsable. Las infracciones graves se sancionan con multas entre 3.001 y 30.000 EUR; las muy graves, entre 30.001 y 90.000 EUR, sin perjuicio de la gradación y del beneficio obtenido. La calificación depende de hechos, norma aplicable, prueba, intencionalidad, perjuicio, reiteración y procedimiento; el incumplimiento de Registro, declaración y encargo no es un error administrativo menor.`,
      easyExplanation:
        "Para inscribirse hay que rellenar una declaración responsable online (con certificado digital, DNIe o Cl@ve) en la que afirmas que cumples todos los requisitos; la administración puede comprobarlo después, así que hay que tener las pruebas preparadas de antemano, no improvisarlas si te piden justificantes. Si cambias de oficina, seguro o administrador, tienes que actualizarlo en el Registro. Si pierdes un requisito (por ejemplo, se te vence el seguro) puede suspenderse o cancelarse tu inscripción. Anunciarte o actuar como agente sin haberte inscrito es una infracción grave que se sanciona con multas de hasta 90.000 EUR en los casos más graves.",
      balearExample:
        "Una sociedad inmobiliaria con sede en Palma se disuelve mientras mantiene varias reservas de clientes pendientes de devolver. La baja registral no puede dejar el dinero, la documentación y los clientes sin un responsable identificado; debe existir un plan de continuidad antes de ejecutar la disolución.",
      keyConcepts: [
        "declaración responsable",
        "inscripción individual",
        "inscripción colectiva",
        "Cl@ve permanente",
        "comprobación posterior",
        "modificación de datos",
        "suspensión de oficio",
        "cancelación",
        "oferta ilegal",
        "intrusismo",
        "régimen sancionador",
        "infracción grave/muy grave",
      ],
      frequentErrors: [
        "Presentar la declaración responsable sin tener realmente acreditados los requisitos, confiando en regularizarlos después.",
        "No actualizar el Registro tras cambios societarios, de oficina o de aseguradora, dejando una \"brecha\" entre lo publicado y lo real.",
        "Publicar y anunciar actividad de agente antes de presentar la declaración responsable, pensando que es simple marketing sin repercusión legal.",
        "Confundir el número de entrada de la solicitud con una inscripción definitiva ya consolidada.",
        "Compartir credenciales de firma digital (certificado o Cl@ve) entre empleados sin control de acceso.",
      ],
      examples: [
        {
          id: "m19-l5-ex1",
          title: "Lanzamiento simultáneo a la creación societaria",
          scenario:
            "Una agencia pretende lanzar campaña el mismo día que crea la sociedad, sin RC, caución, dirección ni formación acreditada.",
          application:
            "El problema no se resuelve con un formulario rápido; deben existir realmente todos los requisitos antes de anunciar.",
          isBalearContext: false,
        },
        {
          id: "m19-l5-ex2",
          title: "Publicidad antes de declaración responsable",
          scenario:
            "Un nuevo agente termina un curso de 200 horas y crea perfiles en redes anunciando viviendas de conocidos, sin RC ni garantía y sin haber presentado la declaración responsable.",
          application:
            "No cobrar todavía comisión no elimina el riesgo de actividad clandestina u oferta ilegal; debe retirar publicidad hasta ordenar el sistema completo.",
          isBalearContext: false,
        },
        {
          id: "m19-l5-ex3",
          title: "Falsedad detectada en comprobación posterior",
          scenario:
            "Una agencia inscrita presenta una póliza de RC vigente, pero no puede acreditar que incluyera a la sociedad en la fecha de una operación concreta.",
          application:
            "La prueba temporal importa tanto como la póliza actual: \"lo tengo ahora\" no demuestra \"lo tenía cuando actué\".",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m19-l6",
      moduleId: "m19",
      title:
        "Protección de datos, publicidad, gestión de fondos y prevención del blanqueo",
      order: 6,
      summary:
        "Más allá de la inscripción, la agencia debe operar un sistema diario de cumplimiento que combine protección de datos personales, publicidad con número de Registro visible, un circuito trazable de fondos de clientes y controles de prevención de blanqueo de capitales.",
      content: `El Registro trata datos personales bajo el RGPD y la Ley Orgánica 3/2018. La Dirección General es responsable del tratamiento y el acceso público se limita a datos de contacto de agentes. A su vez, cada agente es responsable de los datos que trata en contratos, leads, solvencia, arrendamientos y expedientes. No deben mezclarse las dos capas: que el Registro publique contacto profesional no autoriza a extraer datos para campañas indiscriminadas; que el cliente entregue un DNI o una nómina para una operación no autoriza a guardarlos sin plazo ni finalidad. El encargo debe informar sobre el tratamiento en lenguaje claro; el CRM debe limitar acceso por rol; las copias de documentos deben custodiarse, eliminarse o anonimizarse cuando termina la finalidad, salvo conservación obligatoria; los datos compartidos con propietario, aseguradora, notaría o administración necesitan base y proporcionalidad.

## Publicidad inmobiliaria y número de Registro

La obligación de incorporar el número de inscripción afecta permanentemente a todos los canales de oferta de servicios: debe integrarse en web, portales, perfiles sociales, anuncios de campaña, fichas, presentaciones, presupuestos, cartelería y, cuando corresponda, contratos y facturas. Puede resolverse mediante un pie legal estándar, un bloque de identidad o un campo de perfil; en redes de carácter efímero o formatos pequeños, conviene adoptar un patrón verificable (número en la bio, enlace a aviso legal, plantilla de cierre o recurso visual consistente). Si intervienen colaboradores, franquicias o agentes asociados, hay que definir quién publica, quién contrata, quién cobra y qué número se muestra: la ambigüedad perjudica al usuario y puede ser incumplimiento.

## Gestión de fondos de clientes: circuito operativo

Cuando la agencia está autorizada a recibir cantidades, necesita un circuito que combine contrato, garantía, cuenta, recibo, conciliación, autorización de liberación y archivo. El dinero de clientes no debe confundirse con ingreso propio ni utilizarse para cubrir gastos operativos. La práctica prudente es usar una cuenta diferenciada o un mecanismo que permita identificar origen, titular, finalidad y destino de cada importe. Todo cobro debe tener recibo con fecha, importe, medio de pago, inmueble, partes, concepto, condiciones y datos de quien recibe. Toda transferencia de salida debe apoyarse en instrucción contractual o acuerdo firmado. Debe evitarse el efectivo salvo supuestos legalmente permitidos, y nunca aceptar dinero sin análisis de límites de prevención de blanqueo (PBC/FT) y trazabilidad. Cada euro recibido debe poder responder en segundos a cinco preguntas: de quién, para qué, bajo qué contrato, dónde está y cuándo se entrega.

## Relación con la prevención de blanqueo de capitales

El Registro de Agentes y la prevención del blanqueo son sistemas distintos que se refuerzan. El primero ordena requisitos de actividad, transparencia y atención; el segundo obliga a conocer cliente, titular real, propósito y origen de fondos en operaciones sometidas. Cumplir uno no sustituye cumplir el otro: una garantía de 60.000 EUR no es un control PBC/FT; una póliza de RC no identifica titular real; una nota de encargo no reemplaza diligencia debida. Los documentos deben ser coherentes entre encargo, expediente comercial y controles de prevención. El riesgo aumenta en operaciones de alto valor, estructuras societarias complejas, compradores no residentes, pagos por terceros, urgencia sin explicación, precio incoherente, efectivo, criptoactivos o reluctancia a aportar documentos; la respuesta correcta no es acusar, sino aplicar procedimiento y pedir información proporcionada.

## Autoauditoría trimestral y plan de implantación de 30 días

La inscripción no se mantiene por inercia. Una autoauditoría trimestral detecta antes de la inspección pólizas vencidas, cambios no comunicados, publicidad sin número, encargos incompletos, fondos no conciliados o respuestas pendientes de clientes. La revisión debe ser concreta: ¿RC y caución vigentes?, ¿se mantiene dirección de atención?, ¿teléfonos y correos funcionan?, ¿todos los anuncios muestran número?, ¿las hojas de encargo nuevas contienen mínimos?, ¿hay facturas pendientes?, ¿existen fondos sin salida?, ¿los responsables siguen capacitados y vinculados?, ¿hay reclamaciones abiertas?

Para una agencia que empieza o regulariza su actividad, el objetivo de un plan de 30 días no es "tener papeles", sino construir un sistema mínimo sostenible: semana 1, definir persona/sociedad, servicios, oficinas/dirección, responsables y ruta de capacitación; semana 2, contratar RC y garantía, revisar altas/licencias y preparar código y privacidad; semana 3, crear encargo, recibos, circuito de fondos, reclamaciones y plantillas publicitarias; semana 4, presentar declaración, archivar justificante, incorporar número de entrada cuando proceda y auditar el lanzamiento.`,
      easyExplanation:
        "Además de estar inscrito, el día a día de una agencia exige cuidar los datos personales de los clientes (no reutilizarlos para otra cosa distinta de la operación), poner siempre el número de Registro en toda publicidad (web, redes, carteles), y manejar el dinero de clientes con recibos, cuenta separada y trazabilidad clara. Si hay compradores extranjeros, pagos raros o efectivo, hay que aplicar además controles de prevención de blanqueo de capitales, que son obligaciones distintas de la garantía del Registro. Conviene revisar todo esto cada trimestre con una checklist, en vez de confiar en la memoria del equipo.",
      balearExample:
        "Una sociedad extranjera quiere comprar una finca en Felanitx y pide pagar una señal desde la cuenta de un tercero no identificado en el contrato. Antes de aceptar, la agencia debe entender la relación entre las partes, verificar autorización, titularidad y riesgos de prevención de blanqueo, además de cumplir los requisitos ordinarios del Registro.",
      keyConcepts: [
        "RGPD y LO 3/2018",
        "minimización de datos",
        "número de Registro en publicidad",
        "circuito de fondos de clientes",
        "conciliación",
        "PBC/FT",
        "titular real",
        "autoauditoría trimestral",
        "plan de implantación de 30 días",
      ],
      frequentErrors: [
        "Descargar datos de clientes (nóminas, DNI) al móvil personal del comercial por comodidad, sin control ni base legal.",
        "Publicar en redes sociales sin número de Registro y reutilizar ese contenido en campañas de pago durante meses.",
        "Ingresar señales o reservas de clientes en la cuenta operativa general de la agencia en vez de un circuito segregado.",
        "Tratar la garantía de fondos y el seguro RC como si cubrieran automáticamente los riesgos de blanqueo de capitales.",
        "No revisar periódicamente pólizas, publicidad y encargos, dejando el cumplimiento a la memoria individual del equipo.",
      ],
      examples: [
        {
          id: "m19-l6-ex1",
          title: "Datos personales fuera de control",
          scenario:
            "Un comercial descarga a su móvil personal nóminas de candidatos a alquiler.",
          application:
            "La comodidad comercial no justifica pérdida de control ni uso de dispositivos no autorizados.",
          isBalearContext: false,
        },
        {
          id: "m19-l6-ex2",
          title: "Publicidad sin identificador legal",
          scenario:
            "Una agencia sube un tour virtual a redes sin número de Registro y lo reutiliza en anuncios pagados durante meses.",
          application:
            "El contenido audiovisual también es publicidad de la actividad y debe llevar el identificador legal.",
          isBalearContext: false,
        },
        {
          id: "m19-l6-ex3",
          title: "Auditoría que detecta brecha parcial",
          scenario:
            "La autoauditoría trimestral descubre que las fichas nuevas de portal tienen número de Registro, pero las landing pages antiguas no.",
          application:
            "El hallazgo debe convertirse en tarea con responsable y fecha, no en una nota informal sin seguimiento.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m19-e1",
      moduleId: "m19",
      type: "case",
      question:
        "Una sociedad de Madrid quiere intermediar de forma habitual en compraventas de viviendas en Mallorca. No tendrá local abierto al público, trabajará por videollamada y desplazará comerciales sólo para visitas puntuales.",
      expectedAnswer:
        "Debe analizar su encaje en el régimen porque el inmueble está en Illes Balears; al operar de forma exclusivamente digital, necesita una dirección postal accesible en territorio balear, identificar administradores y responsable del establecimiento/dirección que cumplan capacitación, disponer de RC y garantía, y presentar declaración responsable con documentación coherente antes de lanzar publicidad.",
      explanation:
        "El ámbito de aplicación no depende de tener oficina física sino de que el inmueble esté en las islas o la transacción se realice en su territorio; la modalidad digital no elimina la obligación de dirección accesible.",
      difficulty: "medium",
    },
    {
      id: "m19-e2",
      moduleId: "m19",
      type: "decision",
      question:
        "Una agencia inscrita recibe 12.000 EUR de señal por transferencia para \"bloquear\" una vivienda. El encargo permite recibir cantidades, pero el comercial no emite recibo y el dinero entra en la cuenta operativa general. Tres días después, vendedor y comprador discuten: uno pide transferir, el otro exige devolución.\n\nOpciones: a) Entregar el dinero a quien lo reclama primero; b) Inmovilizar la cantidad, reconstruir documentación y solicitar instrucciones acordadas o escalar a asesoramiento; c) Quedárselo como comisión adelantada; d) Devolverlo automáticamente al propietario por defecto.",
      options: [
        "Entregar el dinero a quien lo reclama primero",
        "Inmovilizar la cantidad, reconstruir documentación y solicitar instrucciones acordadas o escalar a asesoramiento",
        "Quedárselo como comisión adelantada",
        "Devolverlo automáticamente al propietario por defecto",
      ],
      expectedAnswer:
        "Inmovilizar la cantidad, reconstruir documentación y solicitar instrucciones acordadas o escalar a asesoramiento",
      explanation:
        "La garantía protege ciertas cantidades recibidas, pero no sustituye una gestión documentada del conflicto; la actuación prudente es inmovilizar, reconstruir el circuito y buscar acuerdo formal, no \"dar la razón\" a quien reclama primero.",
      difficulty: "medium",
    },
    {
      id: "m19-e3",
      moduleId: "m19",
      type: "case",
      question:
        "Una sociedad inmobiliaria tiene una administradora titulada y cinco oficinas en Mallorca, cada una con su marca. Una responsable de oficina nueva no acredita capacitación y la empresa cree que la póliza colectiva de una asociación cubre automáticamente a todas las oficinas.",
      expectedAnswer:
        "Debe regularizar el responsable de cada oficina, obtener evidencia de capacitación individual, confirmar cobertura nominativa por cada agente, revisar la relación de establecimientos comunicada al Registro y estandarizar contratos, facturas y publicidad para que el cliente sepa con quién contrata realmente.",
      explanation:
        "La capacitación y actuación profesional deben cumplirlas, como mínimo, el administrador/consejero y la persona responsable de cada establecimiento; la cobertura colectiva no se presume por pertenencia a una asociación.",
      difficulty: "advanced",
    },
    {
      id: "m19-e4",
      moduleId: "m19",
      type: "comprehension",
      question:
        "Explica con tus propias palabras la diferencia entre la garantía de devolución de cantidades y el seguro de responsabilidad civil profesional, usando un ejemplo de operación en Baleares.",
      expectedAnswer:
        "La garantía cubre el dinero que la agencia recibe de clientes (reservas, señales, arras) hasta ponerlo a disposición de su destinatario; el seguro RC cubre daños y perjuicios causados por errores, omisiones o negligencias en el ejercicio profesional. Son instrumentos complementarios con distinta finalidad, beneficiarios y mecanismo de activación.",
      explanation:
        "Confundir ambos instrumentos es uno de los errores más frecuentes señalados en el módulo; la precisión terminológica evita que el consumidor interprete una cobertura distinta de la realmente existente.",
      difficulty: "basic",
    },
    {
      id: "m19-e5",
      moduleId: "m19",
      type: "decision",
      question:
        "Un nuevo agente termina un curso de 200 horas y crea perfiles en Instagram, TikTok y un portal, anunciando \"agente inmobiliario registrado\" y publicando viviendas de conocidos para captar clientes. Aún no tiene RC ni garantía, y no ha presentado la declaración responsable. Dice que no cobrará comisión hasta cerrar la primera venta.\n\nOpciones: a) Continuar publicando porque no ha cobrado todavía; b) Retirar o pausar publicaciones que presenten actividad regulada, ordenar el sistema (dirección/atención, altas, RC, garantía, código, encargo) y después comunicar su situación real; c) Esperar a la primera venta para regularizar; d) Cambiar el texto a \"asesor\" para evitar el problema.",
      options: [
        "Continuar publicando porque no ha cobrado todavía",
        "Retirar o pausar publicaciones que presenten actividad regulada, ordenar el sistema (dirección/atención, altas, RC, garantía, código, encargo) y después comunicar su situación real",
        "Esperar a la primera venta para regularizar",
        "Cambiar el texto a \"asesor\" para evitar el problema",
      ],
      expectedAnswer:
        "Retirar o pausar publicaciones que presenten actividad regulada, ordenar el sistema (dirección/atención, altas, RC, garantía, código, encargo) y después comunicar su situación real",
      explanation:
        "No haber cobrado todavía no elimina el riesgo de actividad clandestina u oferta ilegal; la publicidad puede inducir a pensar que se cumplen requisitos públicos inexistentes.",
      difficulty: "medium",
    },
    {
      id: "m19-e6",
      moduleId: "m19",
      type: "case",
      question:
        "Un propietario en Palma encarga la venta de un ático y afirma que una terraza cerrada está \"legalizada\", sin aportar documento. Exige anunciar \"100 m² útiles y reforma integral legal\". El agente tiene número de Registro y nota de encargo firmada, pero no dispone de nota simple reciente, referencia catastral ni información urbanística.",
      expectedAnswer:
        "El agente debe reformular el anuncio, solicitar documentación (nota simple, catastro, informe técnico si procede), registrar la advertencia al propietario y no afirmar legalidad ni superficie como definitivas hasta verificar la fuente; puede publicar datos físicos con atribución prudente si no son esenciales para la decisión, o detener la campaña si el riesgo afecta la decisión del comprador.",
      explanation:
        "La inscripción no libera al agente de sus deberes de información; una afirmación no verificada del propietario no puede convertirse en un hecho publicitado como cierto.",
      difficulty: "advanced",
    },
    {
      id: "m19-e7",
      moduleId: "m19",
      type: "comprehension",
      question:
        "¿Qué documentos mínimos debería reunir un agente antes de presentar su declaración responsable de inscripción individual, y por qué conviene prepararlos antes y no después?",
      expectedAnswer:
        "Título universitario o certificado de 200 horas o vida laboral/alta de autónomo (según vía elegida), póliza de RC, póliza de garantía/caución, contrato o alta de establecimiento/dirección postal, código de conducta adoptado, y evidencia numerada para cada afirmación del formulario. Conviene prepararlos antes porque la administración puede comprobar posteriormente lo declarado, y una declaración inexacta puede derivar en expediente, cancelación o sanción.",
      explanation:
        "La declaración responsable traslada el peso al momento de la veracidad, no de la comprobación previa por la administración; el riesgo se reduce con un dossier documental completo desde el principio.",
      difficulty: "medium",
    },
    {
      id: "m19-e8",
      moduleId: "m19",
      type: "case",
      question:
        "Una sociedad se disuelve mientras mantiene varias reservas de clientes pendientes de resolución (señales recibidas, encargos activos). ¿Qué plan de continuidad mínimo debería ejecutar antes de solicitar la baja registral?",
      expectedAnswer:
        "Comunicar a la aseguradora y a la administración, informar a los clientes afectados, cerrar la cartera de encargos vigentes, conciliar y devolver o transferir según instrucciones acordadas los fondos pendientes, y dar de baja la publicidad sólo cuando no queden responsabilidades abiertas sin responsable identificado.",
      explanation:
        "La cancelación administrativa puede ser el final del Registro para la sociedad, pero no elimina las obligaciones contractuales, de consumo, fiscales o de protección de datos ya generadas frente a clientes.",
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m19-q1",
      question:
        "El Registro Oficial de Agentes Inmobiliarios de las Illes Balears es:",
      options: [
        "Un registro voluntario de calidad",
        "Un registro público, administrativo y obligatorio",
        "Un colegio profesional",
        "Un registro de la propiedad",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo define expresamente el Registro como público, administrativo y obligatorio, distinto de la colegiación y del Registro de la Propiedad.",
      sourceModuleId: "m19",
      legalReference:
        "Ley 3/2024, disposiciones adicionales decimotercera y decimocuarta; Ley 5/2018 de la vivienda de las Illes Balears.",
      difficulty: "basic",
    },
    {
      id: "m19-q2",
      question:
        "La actividad entra en el ámbito de aplicación del Registro cuando se presta de forma habitual y retribuida respecto de inmuebles:",
      options: [
        "Sólo en Palma",
        "Sólo a clientes residentes en Baleares",
        "Situados en Illes Balears o cuyas transacciones se realicen allí",
        "Exclusivamente de nueva construcción",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El ámbito existe si el inmueble está en Illes Balears o si la transacción se lleva a cabo en su territorio, con independencia de dónde tenga el domicilio el prestador.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024, disposición adicional decimotercera (Ficha 03).",
      difficulty: "basic",
    },
    {
      id: "m19-q3",
      question:
        "La garantía mínima exigida para las cantidades recibidas por el agente es:",
      options: [
        "6.000 EUR",
        "60.000 EUR por año de cobertura",
        "100.000 EUR por siniestro",
        "600.000 EUR por año",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El importe mínimo legal de la garantía de caución o fianza es de 60.000 EUR por año de cobertura.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 26).",
      difficulty: "basic",
    },
    {
      id: "m19-q4",
      question:
        "La cobertura mínima del seguro de responsabilidad civil profesional es:",
      options: [
        "60.000 EUR por año",
        "100.000 EUR por siniestro y 600.000 EUR por año",
        "600.000 EUR por siniestro",
        "Libre pacto entre las partes",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La cobertura mínima por asegurado en Illes Balears es de 100.000 EUR por siniestro y 600.000 EUR por año.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 28).",
      difficulty: "medium",
    },
    {
      id: "m19-q5",
      question:
        "La formación no universitaria para la vía de capacitación debe abarcar al menos:",
      options: [
        "50 horas",
        "100 horas",
        "200 horas relacionadas con mediación, asesoramiento y gestión inmobiliaria",
        "500 horas presenciales",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La formación no universitaria debe alcanzar al menos 200 horas lectivas relacionadas con la actividad, cubriendo materias mínimas como propiedad, derecho inmobiliario, urbanismo, fiscalidad y prevención del blanqueo.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 21).",
      difficulty: "basic",
    },
    {
      id: "m19-q6",
      question: "La experiencia como vía de acceso debe acreditarse por:",
      options: [
        "Dos años",
        "Cuatro años inmediatamente anteriores a la solicitud",
        "Cualquier periodo histórico de la carrera profesional",
        "Seis meses",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La vía de experiencia exige prestación de servicios de agente durante al menos los cuatro años inmediatamente anteriores a la solicitud, acreditable mediante vida laboral, alta de autónomo o contrato de franquicia vigente durante ese periodo.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 22).",
      difficulty: "medium",
    },
    {
      id: "m19-q7",
      question:
        "En una sociedad, deben cumplir los requisitos de capacitación y actuación como mínimo:",
      options: [
        "Todos los empleados",
        "Un administrador o miembro del consejo y la persona responsable del establecimiento",
        "Sólo el director comercial",
        "Sólo el gestor",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Cuando el agente es una sociedad, deben cumplir capacitación y actuación como mínimo una persona administradora o integrante del consejo y la persona responsable de cada establecimiento abierto al público.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 23).",
      difficulty: "medium",
    },
    {
      id: "m19-q8",
      question:
        "Mientras no existe número definitivo de inscripción, puede incorporarse en publicidad:",
      options: [
        "Ningún dato",
        "El número de entrada de la declaración responsable presentada",
        "El número mercantil",
        "Cualquier logo de asociación",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La norma permite incorporar el número de registro de entrada otorgado al presentar la declaración responsable, siempre que ésta se haya presentado y el resto de requisitos existan de verdad.",
      sourceModuleId: "m19",
      legalReference:
        "Ficha 14 y Ficha 31 del módulo (procedimiento de inscripción individual).",
      difficulty: "medium",
    },
    {
      id: "m19-q9",
      question: "La nota de encargo debe incluir necesariamente:",
      options: [
        "Referencia catastral e identificación registral del inmueble",
        "Sólo la dirección comercial",
        "Sólo fotos",
        "Únicamente el precio",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El contenido mínimo de la nota de encargo incluye la identificación del inmueble con datos registrales y referencia catastral, además de la identificación de las partes, la operación, el tiempo y las condiciones económicas.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Fichas 17-19).",
      difficulty: "basic",
    },
    {
      id: "m19-q10",
      question:
        "Una agencia que recibe una señal debe, ante instrucciones contradictorias de comprador y vendedor:",
      options: [
        "Entregarla al cliente más antiguo",
        "Inmovilizar y seguir el contrato/acuerdo o vía formal",
        "Quedársela como comisión",
        "Pagársela al propietario por defecto",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La garantía se ejecuta por acuerdo expreso entre las partes o por resolución judicial, arbitral o administrativa firme; el agente no debe actuar como juez de la disputa reteniendo fondos sin base.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 27).",
      difficulty: "medium",
    },
    {
      id: "m19-q11",
      question: "No es lo mismo garantía y RC porque:",
      options: [
        "Son idénticas",
        "La garantía protege cantidades recibidas y la RC daños profesionales",
        "Una sustituye siempre a la otra",
        "La RC cubre arras automáticamente",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Son instrumentos complementarios: la garantía cubre cantidades recibidas por la agencia hasta ponerlas a disposición de su destinatario, mientras que la RC cubre daños y perjuicios derivados del ejercicio profesional.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 29).",
      difficulty: "basic",
    },
    {
      id: "m19-q12",
      question:
        "Actividad sin declaración responsable e inscripción, o sin cumplir requisitos, puede ser calificada de:",
      options: [
        "Simple falta estética",
        "Oferta ilegal, actividad clandestina, intrusismo y competencia desleal",
        "Una operación privada sin consecuencias",
        "Sólo un retraso comercial",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Realizar publicidad o actividad de agente sin declaración responsable e inscripción, o sin cumplir exigencias legales, se califica como oferta ilegal o actividad clandestina, intrusismo y competencia desleal, con apertura de expediente.",
      sourceModuleId: "m19",
      legalReference: "Ley 5/2018 (Ficha 37).",
      difficulty: "medium",
    },
    {
      id: "m19-q13",
      question:
        "Según la Ley 5/2018, las infracciones graves se sancionan con multas comprendidas entre:",
      options: [
        "100 y 1.000 EUR",
        "3.001 y 30.000 EUR",
        "30.001 y 90.000 EUR",
        "90.001 y 300.000 EUR",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Las infracciones graves se sancionan con multas entre 3.001 y 30.000 EUR; las muy graves, entre 30.001 y 90.000 EUR, según gradación y beneficio obtenido.",
      sourceModuleId: "m19",
      legalReference: "Ley 5/2018 (Ficha 38).",
      difficulty: "medium",
    },
    {
      id: "m19-q14",
      question:
        "¿Cuál de las siguientes conductas está tipificada como infracción grave conforme a la Ley 5/2018?",
      options: [
        "Cambiar el color corporativo del logotipo",
        "Falsear u omitir aspectos sustanciales de la declaración responsable de agentes",
        "Contratar un seguro superior al mínimo legal",
        "Publicar en un idioma distinto al español",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La Ley 5/2018 tipifica como grave, entre otras conductas, falsear, omitir o alterar aspectos sustanciales de la declaración responsable, incumplir la obligación de nota de encargo y realizar actividad sin declaración responsable.",
      sourceModuleId: "m19",
      legalReference: "Ley 5/2018 (Ficha 38).",
      difficulty: "medium",
    },
    {
      id: "m19-q15",
      question:
        "La Dirección General competente en materia de vivienda, respecto al Registro, tiene entre sus funciones:",
      options: [
        "Sólo publicar un listado sin control alguno",
        "Gestionar altas, cambios, suspensiones y bajas, y controlar condiciones de inscripción",
        "Fijar los honorarios de todos los agentes",
        "Sustituir al notario en cada operación",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La Dirección General mantiene el Registro, gestiona altas, cambios, suspensiones y bajas, controla condiciones de inscripción, emite certificaciones y facilita el acceso público a los datos.",
      sourceModuleId: "m19",
      legalReference: "Ficha 06 del módulo.",
      difficulty: "basic",
    },
    {
      id: "m19-q16",
      question:
        "Respecto a la protección de datos en el Registro y en la agencia, es correcto afirmar que:",
      options: [
        "El número de Registro puede ser público, pero el expediente del cliente no",
        "Todos los datos del Registro son totalmente públicos sin límite",
        "El agente puede reutilizar libremente los datos del cliente para cualquier campaña",
        "El RGPD no aplica a la actividad inmobiliaria balear",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El Registro trata datos bajo RGPD y LO 3/2018; el acceso público se limita a datos de contacto de agentes, mientras que cada agente es responsable de proteger los datos que trata de sus clientes en el expediente.",
      sourceModuleId: "m19",
      legalReference: "RGPD (UE 2016/679), LO 3/2018 (Ficha 39).",
      difficulty: "medium",
    },
    {
      id: "m19-q17",
      question:
        "¿Qué organismo de resolución de conflictos deben propiciar las organizaciones sectoriales según el módulo?",
      options: [
        "La Junta Arbitral de Consumo de las Illes Balears",
        "Un tribunal internacional de arbitraje",
        "El Registro Mercantil",
        "La Fiscalía Provincial",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las organizaciones sectoriales deben propiciar la adhesión a la Junta Arbitral de Consumo de las Illes Balears, sin suprimir la libertad de acudir a la vía judicial.",
      sourceModuleId: "m19",
      legalReference:
        "Ley 7/2014 de protección de consumidores y usuarios de Illes Balears (Ficha 09).",
      difficulty: "medium",
    },
    {
      id: "m19-q18",
      question:
        "¿Qué establece el módulo respecto a quien presta servicios exclusivamente a distancia (modalidad digital)?",
      options: [
        "No necesita ninguna dirección en Baleares",
        "Debe contar con una dirección postal accesible en el territorio balear",
        "Sólo necesita un número de teléfono",
        "Puede operar sin cumplir ningún requisito de establecimiento",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Quien presta servicios exclusivamente a distancia debe contar con una dirección postal accesible en el territorio balear, aunque no requiera un local físico con fachada comercial.",
      sourceModuleId: "m19",
      legalReference: "Ley 3/2024 (Ficha 12).",
      difficulty: "medium",
    },
  ],
};

export const m19Glossary: GlossaryItem[] = [
  {
    id: "g-m19-declaracion-responsable",
    term: "Declaración responsable",
    definition:
      "Documento presentado por el interesado en el que manifiesta, bajo su responsabilidad, que cumple los requisitos legales para el ejercicio de la actividad, que dispone de la documentación que lo acredita y que se compromete a mantener su cumplimiento durante el ejercicio, sometiéndose a comprobación administrativa posterior.",
    easyDefinition:
      "Es un formulario donde tú afirmas que ya cumples todo lo que la ley pide, y la administración puede comprobarlo después; si mientes o falta algo importante, puede haber sanción.",
    relatedModuleId: "m19",
  },
  {
    id: "g-m19-garantia-caucion-fianza",
    term: "Garantía de caución o fianza",
    definition:
      "Instrumento financiero (seguro de caución o fianza bancaria) contratado individual o colectivamente que asegura la devolución de cantidades entregadas a cuenta que el agente recibe en el ejercicio de su actividad, hasta que se ponen a disposición de su destinatario legítimo.",
    easyDefinition:
      "Es un \"colchón de seguridad\" para el dinero que un cliente entrega al agente (una señal, una reserva), que garantiza que ese dinero se devuelve si algo sale mal.",
    relatedModuleId: "m19",
  },
  {
    id: "g-m19-nota-de-encargo",
    term: "Nota de encargo",
    definition:
      "Contrato mínimo obligatorio que formaliza la relación entre el agente y la persona usuaria, identificando partes, inmueble, operación, plazo, exclusividad, honorarios y coberturas, antes de ofrecer el inmueble o recibir fondos.",
    easyDefinition:
      "El papel que hay que firmar antes de que la inmobiliaria empiece a trabajar de verdad, donde queda claro qué se encarga y en qué condiciones.",
    relatedModuleId: "m19",
  },
  {
    id: "g-m19-comprobacion-posterior",
    term: "Comprobación posterior (carga de prueba)",
    definition:
      "Facultad de la administración de contrastar y verificar, tras la presentación de la declaración responsable, que los datos y requisitos declarados son ciertos y se mantienen vigentes, exigiendo documentación adicional cuando sea necesario.",
    easyDefinition:
      "Aunque el trámite online sea rápido, la administración puede pedirte pruebas después, así que hay que guardarlas desde el principio.",
    relatedModuleId: "m19",
  },
  {
    id: "g-m19-actividad-clandestina",
    term: "Actividad clandestina / oferta ilegal",
    definition:
      "Ejercicio de actividad de agente inmobiliario, o su publicidad, sin haber presentado declaración responsable ni obtenido inscripción, o sin cumplir las exigencias legales o reglamentarias exigidas, constituyendo intrusismo y competencia desleal.",
    easyDefinition:
      "Anunciarse o actuar como agencia sin haberte dado de alta correctamente es ilegal, aunque todavía no hayas cobrado ninguna comisión.",
    relatedModuleId: "m19",
  },
  {
    id: "g-m19-prevencion-blanqueo",
    term: "Prevención del blanqueo de capitales (PBC/FT)",
    definition:
      "Conjunto de obligaciones de diligencia debida (conocimiento del cliente, del titular real, del propósito de la operación y del origen de los fondos) aplicables a determinadas operaciones inmobiliarias, distintas y complementarias de los requisitos del Registro de Agentes.",
    easyDefinition:
      "Controles obligatorios para evitar que se use el sector inmobiliario para blanquear dinero de origen ilícito; no se cumplen automáticamente por tener el seguro o la garantía del Registro.",
    relatedModuleId: "m19",
  },
];

export const m19Alerts: string[] = [
  "El contenido base del módulo se apoya en la Ley 3/2024, de 3 de mayo, de medidas urgentes en materia de vivienda, cuyas disposiciones adicionales decimotercera y decimocuarta desarrollan por primera vez de forma específica el régimen del Registro de Agentes Inmobiliarios de las Illes Balears; el texto consolidado está publicado en el BOE y debe consultarse en su versión vigente antes de dar por definitivo cualquier requisito, ya que el propio módulo advierte que \"una nota web divulgativa... no sustituye una comprobación de la Sede electrónica vigente\".",
  "El documento fuente está fechado con contenido revisado con fuentes oficiales disponibles a 4 de julio de 2026, por lo que cualquier actualización normativa posterior (cuantías de garantía/RC, horas de formación, régimen sancionador) debe verificarse contra el texto consolidado y la Sede electrónica del Govern antes de usarse en material formativo o de examen.",
  "El módulo señala expresamente que \"mientras no existe número definitivo, la norma permite incorporar el número de registro de entrada otorgado al presentar la declaración responsable\" — un mecanismo transitorio que debe explicarse con cuidado en el contenido de la app, para no dar a entender que el número de entrada equivale a inscripción definitiva.",
  "No se identifican en el PDF fechas límite de transición o moratorias explícitas distintas del propio procedimiento de declaración responsable; el módulo remite siempre a \"el trámite activo en la Sede electrónica\" como referencia de vigencia procedimental, lo cual debe tratarse como un punto vivo a actualizar periódicamente en la app (no un dato estático).",
];
