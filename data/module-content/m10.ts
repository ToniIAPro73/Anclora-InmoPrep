import type { Module, GlossaryItem } from "@/lib/types";

export const m10Module: Module = {
  id: "m10",
  code: "M10",
  title: "Marketing y Comercialización Inmobiliaria",
  order: 10,
  description:
    "Captación, cualificación de compradores, portales y ficha técnica verificada.",
  estimatedMinutes: 35,
  difficulty: "basic",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m10-l1",
      moduleId: "m10",
      title: "Fundamentos del marketing inmobiliario y método de trabajo",
      order: 1,
      summary:
        "El marketing inmobiliario reduce incertidumbre y cualifica demanda mediante un método verificable, no mediante creatividad sin control documental.",
      content: `Marketing inmobiliario no es "hacer ruido": es reducir incertidumbre, cualificar demanda y facilitar decisiones informadas. El módulo enseña a convertir un inmueble verificado en una propuesta comercial clara, partiendo de la documentación y no de la creatividad. En un examen, una respuesta sólida explica qué se ofrece, a quién, por qué canal, con qué evidencia y cómo se mide el resultado; en una operación real, el mismo método evita promesas que después no pueden sostenerse ante el comprador, el arrendatario o la Administración.

## Los cinco bloques del método

El temario organiza el trabajo comercial en cinco bloques con un resultado a dominar en cada uno: Estrategia (definir público, alternativa de mercado y propuesta de valor sin inventar atributos), Producto y mensaje (transformar documentos, datos técnicos y experiencia de uso en información comercial verificable), Distribución (escoger web, portal, contenido, publicidad pagada, email, WhatsApp o aliados según la etapa del embudo), Conversión (organizar el contacto, la cualificación, la visita, el feedback y el reporte al propietario) y Control (medir coste, velocidad, calidad del lead, visitas, ofertas, absorción y reputación).

La secuencia base siempre es la misma: encargo y verificación → producto y precio → mensaje → activos de venta → distribución → respuesta y cualificación → visita → oferta → seguimiento. Si faltan datos en la primera fase, el problema no se corrige con una campaña más agresiva.

## Aplicación operativa

En la práctica, este método se traduce en una reunión inicial de 45 minutos con la propiedad para decidir qué se sabe, qué falta y qué no debe publicarse. El resultado se resume en una hoja de lanzamiento: objetivo, precio, documentos recibidos, riesgos, público, mensaje, responsables y fecha de revisión. No se debe confundir rapidez con improvisación: una ficha mal lanzada genera después llamadas, rectificaciones y explicaciones que consumen más tiempo que una buena preparación. El plan comercial debe poder ser leído por otro compañero sin perder contexto; esa trazabilidad es la diferencia entre un equipo que aprende y un equipo que repite errores.

## Mapa de conexiones entre módulos

El marketing concentra toda la información de la operación, pero no sustituye al técnico, al abogado ni al notario. El Módulo 14 desarrolla la negociación y el cierre; el Módulo 15 profundiza en la captación de propietarios; el Módulo 16 aborda tecnología y automatización. Cada bloque temático del marketing (producto, precio, publicidad, datos y CRM, conversión, promoción) tiene una pregunta de control y una conexión expresa con otros módulos (M1 propiedad, M4 técnica, M7 urbanismo, M8 valoración, M6 consumo, M9 profesional y vivienda, M13 protección de datos, M16 tecnología, M12 arquitectura, M17 promoción).

En Mallorca la frontera entre disciplinas es especialmente intensa: una frase sobre alquiler turístico, vistas, reforma, piscina, costa o rusticidad puede activar cuestiones urbanísticas, comunitarias, sectoriales y fiscales. Por eso, en materiales comerciales de alto riesgo debe constar la fuente del dato y, cuando proceda, una advertencia clara de que la comprobación final corresponde a la documentación técnica o administrativa aplicable.

## Qué es marketing y qué no es

Marketing inmobiliario es el sistema mediante el que una agencia identifica una necesidad, define un público objetivo, presenta una solución verificable, reduce fricción y conduce una conversación hacia una decisión informada. No se limita a redes sociales ni a portales; incluye investigación, estrategia de precio, producción de activos, distribución, gestión de relaciones y análisis de resultados. Es esencial distinguir cuatro actividades con límites propios: marketing (atrae atención y hace comprensible el producto, pero no certifica legalidad, rentabilidad ni derechos no comprobados), venta (ordena necesidades, visita, oferta y decisión, pero no puede presionar ni ocultar información relevante), asesoramiento (detecta riesgos, compara alternativas y deriva, pero no sustituye dictamen jurídico, técnico o fiscal) y publicidad (promueve contratación en cualquier soporte, pero debe ser clara, veraz, trazable y no omitir datos fundamentales).

No existe un "canal inocente": un vídeo corto, una historia de Instagram, un anuncio de portal, una ficha PDF o una respuesta por WhatsApp son todos comunicación comercial. Si contienen atributos de la vivienda, precio, disponibilidad, rentabilidad o uso, deben sostenerse con documentos, fuentes internas y aprobación del responsable de la operación.`,
      easyExplanation:
        "Vender bien un inmueble no es hacer publicidad bonita, es organizar información verificada para que el cliente decida con seguridad. Todo mensaje comercial (un vídeo, un WhatsApp, un anuncio) cuenta como publicidad y debe poder demostrarse con documentos. Existe un método de cinco pasos: primero verificar el producto, luego fijar precio y mensaje, después distribuirlo, gestionar respuestas y medir resultados. La creatividad llega después de comprobar qué se puede publicar, nunca antes.",
      balearExample:
        "Una agencia de Manacor recibe el encargo de comercializar una casa de pueblo. Antes de fotografiarla, dedica 45 minutos con el propietario para revisar nota simple, cédula de habitabilidad y estado de la cubierta. Detecta que la cédula está caducada; bloquea la publicación de \"vivienda lista para entrar a vivir\" hasta obtener el documento actualizado, evitando una reclamación posterior.",
      keyConcepts: [
        "propuesta de valor",
        "cualificación de demanda",
        "embudo comercial",
        "trazabilidad documental",
        "límite profesional",
        "comunicación comercial",
        "hoja de lanzamiento",
        "canal de distribución",
      ],
      frequentErrors: [
        "Empezar por la campaña de fotos y redes antes de auditar la documentación del inmueble.",
        "Confundir marketing (atraer y explicar) con asesoramiento (certificar legalidad o rentabilidad).",
        "Publicar en cualquier canal sin considerarlo \"comunicación comercial\" sujeta a las mismas reglas.",
        "No dejar constancia escrita de quién aprueba precio, fotos, texto y cambios de campaña.",
      ],
      examples: [
        {
          id: "m10-l1-ex-a",
          title: "Reunión de lanzamiento de 45 minutos",
          scenario: "Nuevo encargo de venta",
          application:
            "Resumir objetivo, precio, documentos recibidos, riesgos, público, mensaje, responsables y fecha de revisión antes de producir cualquier activo.",
          isBalearContext: false,
        },
        {
          id: "m10-l1-ex-b",
          title: "Las cinco preguntas antes de publicar",
          scenario: "Ficha o anuncio a punto de salir",
          application:
            "Contestar ¿qué sé con evidencia?, ¿qué no sé todavía?, ¿a quién sirve este activo?, ¿qué promesa es segura?, ¿qué siguiente acción quiero que realice el interesado?",
          isBalearContext: false,
        },
        {
          id: "m10-l1-ex-c",
          title: "Tabla de dependencias entre módulos",
          scenario: "Campaña que menciona reforma o financiación",
          application:
            "Vincular el mensaje al Módulo 4 (técnica) o al Módulo 5 (hipoteca) para no prometer una viabilidad que no ha sido validada.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l2",
      moduleId: "m10",
      title: "Mallorca, segmentación de clientes y propuesta de valor",
      order: 2,
      summary:
        "El mercado balear exige comprobar variables locales (costa, rústico, estacionalidad, cliente internacional) y traducirlas en una propuesta de valor verificable para cada perfil de comprador.",
      content: `Mallorca combina vivienda habitual, segunda residencia, cliente internacional, producto de alta gama, fincas rústicas, rehabilitación urbana y activos sometidos a regulación turística. Esto hace que dos inmuebles con superficie similar tengan narrativas comerciales y riesgos muy distintos. El mensaje útil no es "ideal inversión"; es explicar qué demanda atiende, qué uso actual acredita, qué costes asume y qué condicionantes deben comprobarse.

## Variables locales que hay que comprobar

El temario identifica cinco variables que condicionan cualquier mensaje comercial en la isla: municipio y barrio (accesos, servicios, ruido, movilidad, temporada, obra pública — comunicar con datos concretos, evitando "siempre tranquilo"), costa y paisaje (costas, vistas, exposición, mantenimiento, comunidad — describir el estado presente, sin prometer vistas permanentes), suelo rústico (uso, edificaciones, agua, linderos, legalidad y accesos — nunca anunciar ampliación, segregación o uso turístico sin soporte documental), cliente internacional (idioma, distancia, fiscalidad, financiación, visita remota — explicar proceso, documentos y plazos con material bilingüe) y estacionalidad (tráfico, accesibilidad, alquiler y actividad del entorno — presentar ventajas e inconvenientes con lenguaje equilibrado).

El enfoque correcto es experiencial pero verificable: se puede explicar cómo se vive un barrio o la luz de una estancia si se delimitan los datos, pero no se puede convertir una expectativa en garantía. Expresiones como "posibilidad de licencia", "rentabilidad asegurada" o "Airbnb viable" exigen una base documental que, normalmente, excede la simple visita comercial. Para cada municipio o microzona con la que se trabaje conviene preparar una ficha de contexto revisable (accesos, servicios, tipo de demanda, estacionalidad, restricciones habituales), porque un comprador de segunda residencia necesita conocer la operativa fuera de temporada, una familia residente prioriza otros elementos y un inversor debe entender que la regulación del uso no se deduce de una foto ni de la cercanía a la costa.

## Segmentación por situación de compra

Segmentar no es etiquetar por edad o nacionalidad: es identificar una necesidad, una capacidad de decisión y un criterio de compra. El mismo inmueble puede interesar a públicos distintos que no deben recibir el mismo mensaje. El comprador residente busca habitabilidad, movilidad, coste recurrente y estabilidad, y el error de comunicación típico es hablar solo de estética o de turismo. El comprador de segunda residencia valora comodidad, mantenimiento y conexión, y el error es ocultar la estacionalidad y el mantenimiento real. El inversor necesita claridad sobre uso legal, demanda y costes (no promesas de rentabilidad), y el error es prometer rentabilidad o uso no acreditado. El cliente internacional necesita un proceso documental comprensible a distancia, y el error es asumir que comprende prácticas locales sin explicarlas.

Conviene trabajar con una ficha de buyer persona operativa (situación de partida, motivación, presupuesto total incluido coste de compra, plazo, financiación, no negociables, preferidos, decisión compartida y riesgo de bloqueo) que se actualiza tras cada visita. Segmentar por situación de compra, no por estereotipo, disminuye la ansiedad del cliente porque muestra que se entiende su problema; una segmentación pobre solo manda más anuncios irrelevantes. El perfil nunca justifica discriminación: sirve para adaptar argumento y canal, nunca para excluir arbitrariamente a personas de una vivienda o servicio.

## Propuesta de valor y posicionamiento

Una propuesta de valor inmobiliaria combina activo verificable, consecuencia práctica y público al que beneficia. "Piso luminoso" es un adjetivo; "orientación sur, ventilación cruzada y estancia principal con luz de tarde" es una afirmación que puede contrastarse, es más defendible ante una reclamación y ayuda a decidir. Cada afirmación de posicionamiento debe superar tres preguntas: ¿qué existe y se puede probar? (el activo), ¿qué problema resuelve para ese público? (el beneficio) y ¿qué documento, imagen o medición lo sustenta? (la prueba). El posicionamiento no tiene que ser grandilocuente: en un inmueble complejo puede ser precisamente la claridad (una finca rústica con información completa, un piso de VPO con requisitos transparentes). Cuando el atributo es subjetivo hay que reconocer su carácter ("sensación de amplitud", "ambiente tranquilo") en vez de convertirlo en una garantía.`,
      easyExplanation:
        "En Mallorca no todos los compradores quieren lo mismo: un residente busca vivir bien y gastar poco, un comprador de segunda residencia busca comodidad de temporada, un inversor quiere saber qué uso es legal y un cliente extranjero necesita que le expliquen el proceso en su idioma. Antes de prometer \"vistas al mar\" o \"ideal para invertir\" hay que comprobar que ese dato es real y documentado, sobre todo en costa, rústico o alquiler turístico. La propuesta de valor debe combinar un dato real, el beneficio para ese cliente concreto y la prueba (documento, foto, medición) que lo sostiene.",
      balearExample:
        "Una promotora comercializa una finca rústica en Felanitx. Al segmento inversor le interesa la rentabilidad de explotación agrícola; al segmento de segunda residencia, la tranquilidad y el paisaje. El agente prepara dos fichas de mensaje distintas: para el inversor detalla uso permitido, edificaciones registradas y linderos; para la segunda residencia describe accesos, mantenimiento y luz de las estancias, sin mencionar \"posibilidad de uso turístico\" porque no está acreditada.",
      keyConcepts: [
        "buyer persona",
        "segmentación por situación de compra",
        "propuesta de valor",
        "posicionamiento",
        "variable local",
        "ficha de contexto",
        "cliente internacional",
        "estacionalidad",
      ],
      frequentErrors: [
        "Usar \"ideal inversión\" o \"rentabilidad asegurada\" sin base documental.",
        "Comunicar suelo rústico como si admitiera ampliación, segregación o uso turístico sin comprobarlo.",
        "Segmentar por edad o nacionalidad en vez de por necesidad y capacidad de decisión.",
        "Ocultar la estacionalidad o el mantenimiento real ante un comprador de segunda residencia.",
      ],
      examples: [
        {
          id: "m10-l2-ex-a",
          title: "Ficha de contexto municipal",
          scenario: "Trabajar de forma recurrente en un barrio o pueblo",
          application:
            "Documentar accesos, servicios, tipo de demanda, estacionalidad y riesgos recurrentes antes de redactar cualquier anuncio de esa zona.",
          isBalearContext: true,
        },
        {
          id: "m10-l2-ex-b",
          title: "Buyer persona operativa",
          scenario: "Captación de un inmueble con público diverso",
          application:
            "Actualizar tras cada visita la ficha de situación de partida, motivación, presupuesto, plazo y no negociables del interesado.",
          isBalearContext: false,
        },
        {
          id: "m10-l2-ex-c",
          title: "Prueba de la propuesta de valor",
          scenario: "Redacción de un titular comercial",
          application:
            "Contrastar cada frase con \"¿puedo enseñarla?, ¿puedo medirla?, ¿puedo atribuirla a una fuente?\" antes de publicarla.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l3",
      moduleId: "m10",
      title: "Auditoría de producto, estrategia de precio y plan de marketing",
      order: 3,
      summary:
        "Antes de comunicar hay que auditar documentalmente el inmueble, fijar una estrategia de precio basada en comparables reales y redactar un plan con objetivos, calendario y criterios de corrección.",
      content: `La auditoría de producto reúne los datos que convierten una captación en material comercial seguro. No es necesario resolver personalmente todas las dudas técnicas, pero sí identificar las ausencias y bloquear las promesas correspondientes hasta que se documenten. El expediente debe tener responsable, fecha de revisión y una versión controlada de la ficha.

## Las cinco áreas de la auditoría

Titularidad y cargas (nota simple, título, cuotas, hipoteca, servidumbres — evitar "libre de cargas" sin confirmación actual), superficie y distribución (Registro, Catastro, plano, medición y anexos — indicar la fuente del m² y no mezclar superficie útil, construida y terraza), uso y habitabilidad (cédula o título equivalente, uso, comunidad, licencias — no prometer conversión, alquiler o explotación sin prueba), eficiencia y estado (CEE, instalaciones, reforma, ITE/IEE si procede — incluir la etiqueta energética y explicaciones no técnicas) y costes (IBI, comunidad, basuras, derramas, seguros, suministros — dar el coste recurrente cuando sea relevante para decidir).

Conviene convertir la auditoría en una rutina de semáforo: verde (dato verificado y publicable), ámbar (dato recibido pero pendiente de contraste) y rojo (dato dudoso, sensible o prohibido para publicar). El equipo puede trabajar creativamente sobre el verde, preparar preguntas sobre el ámbar y detener el rojo. No se debe fijar la fecha de lanzamiento hasta que el expediente haya pasado el filtro documental: publicar primero y corregir después deja rastro, confunde al mercado y deteriora la negociación.

## Estrategia de precio y análisis comparativo

La valoración comercial no es una tasación hipotecaria ni un valor fiscal. Para fijar precio se necesitan comparables reales, pero también entender su calidad (fecha, estado, planta, orientación, reforma, anexos, comunidad, vistas, liquidez y régimen de uso). Un portal aporta oferta, no prueba precio de cierre; el análisis comparativo debe distinguir entre precio pedido, precio negociado y evidencia de transacción cuando sea accesible.

El proceso tiene cuatro pasos: definir el activo (delimitar tipología, m², estado y uso), seleccionar comparables (mismo micromercado, fecha reciente y situación similar — una muestra razonada, no una lista extensa), homogeneizar (ajustar por planta, estado, exterior, garaje, reforma, cargas) y elegir estrategia (precio de prueba, competitivo, premium o venta acelerada, con calendario de revisión y gatillos definidos). El precio debe ir acompañado de una regla de corrección: por ejemplo, si en 21 días no se superan determinados contactos cualificados, visitas útiles y ratios de guardado, se revisa exposición, mensaje y precio. La conversación de precio debe tener un componente técnico (comparables, ajustes, calidad de la muestra y rango) y otro comercial (qué ocurrirá si el mercado no valida la hipótesis, presentando escenarios de precio competitivo, precio de prueba y precio premium).

## El plan de marketing inmobiliario

El plan se redacta después de la auditoría y antes de producir los activos. Define el objetivo de negocio, el público primario, los mensajes, los soportes, el presupuesto, la frecuencia de seguimiento y los criterios de corrección. Cada acción debe tener una finalidad en el embudo: descubrimiento, consideración, visita, oferta o fidelización. El contenido mínimo por bloque es: objetivo (venta, alquiler, promoción, lista de espera o captación de demanda, con plazo), público (perfil principal, secundario y exclusiones justificadas por producto), mensaje (promesa principal, pruebas y objeciones previsibles), canales (web, portal, SEO, red, pago, email, alianzas, con papel de cada uno) y medición (KPIs, frecuencia de reporte y decisión correctiva).

En un inmueble residencial estándar el plan puede ser de cuatro semanas; en producto singular, costa, rústico o promoción debe ampliarse con materiales técnicos, mercado internacional y validaciones previas. Un plan de marketing no es una promesa de vender en un plazo determinado: es una promesa de ejecutar acciones medibles, interpretar la respuesta del mercado y recomendar cambios con criterio. Es fundamental definir desde el inicio quién aprueba precio, fotos, texto y cambios de campaña; la falta de una cadena de aprobación es una causa frecuente de anuncios contradictorios y retrasos.`,
      easyExplanation:
        "Antes de publicar nada hay que revisar cinco áreas del inmueble (propiedad, superficie, uso, estado energético y gastos) y clasificar cada dato como listo, pendiente o prohibido de publicar. El precio de salida se calcula comparando inmuebles reales similares, ajustando por diferencias, y se fija una regla de revisión si en unas semanas no hay suficientes contactos o visitas. Después se escribe un plan con objetivo, público, mensaje, canales y forma de medir resultados, y se define quién autoriza cada cambio.",
      balearExample:
        "En un chalet en Andratx, el agente detecta en la auditoría que la certificación energética está caducada (rojo) y que la superficie de la terraza no coincide entre el plano y el Catastro (ámbar). Bloquea el lanzamiento hasta renovar el CEE y aclarar la superficie con el propietario, evitando anunciar \"180 m² de vivienda más terraza\" de forma ambigua.",
      keyConcepts: [
        "auditoría de producto",
        "matriz publicable/pendiente/no publicable",
        "comparables homogeneizados",
        "precio de prueba",
        "regla de corrección",
        "plan de marketing",
        "cadena de aprobación",
        "embudo comercial",
      ],
      frequentErrors: [
        "Publicar la ficha antes de completar la auditoría documental (\"publicar primero, corregir después\").",
        "Mezclar superficie útil, construida y de terraza sin indicar la fuente.",
        "Fijar un precio sin definir de antemano cuándo y cómo se revisará si no funciona.",
        "Redactar un plan de marketing sin cadena de aprobación clara para precio, fotos y textos.",
      ],
      examples: [
        {
          id: "m10-l3-ex-a",
          title: "Semáforo documental",
          scenario: "Expediente recién recibido del propietario",
          application:
            "Clasificar cada dato (titularidad, superficie, uso, eficiencia, costes) en verde, ámbar o rojo antes de aprobar cualquier pieza comercial.",
          isBalearContext: false,
        },
        {
          id: "m10-l3-ex-b",
          title: "Regla de corrección a 21 días",
          scenario: "Vivienda recién lanzada al mercado",
          application:
            "Si no se alcanzan los contactos cualificados y visitas esperadas en 21 días, revisar exposición, mensaje y precio de forma documentada.",
          isBalearContext: false,
        },
        {
          id: "m10-l3-ex-c",
          title: "Plan proporcional al activo",
          scenario: "Finca rústica de alto valor frente a piso estándar",
          application:
            "Ampliar el plan con dossier técnico, ruta de visita y coordinación con técnicos cuando el activo lo requiera, en vez de aplicar el mismo plan de cuatro semanas a todo.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l4",
      moduleId: "m10",
      title: "Publicidad inmobiliaria y marco de cumplimiento normativo",
      order: 4,
      summary:
        "La publicidad de vivienda y las comunicaciones comerciales están reguladas: no pueden inducir a error, deben poder demostrarse con documentos y deben respetar las normas sobre comunicaciones electrónicas y alquiler de corta duración.",
      content: `El Real Decreto 515/1989 exige que la oferta, promoción y publicidad de venta o arrendamiento de viviendas no induzca ni pueda inducir a error y no silencie datos fundamentales que alteren la decisión económica. Esta regla alcanza al anuncio breve, a la ficha extensa, a la conversación por mensaje y al contenido audiovisual. El Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios completa el marco de prácticas comerciales e información de oferta.

## Cuándo es segura una afirmación

El temario clasifica afirmaciones habituales según su nivel de riesgo: "vivienda reformada" es segura si la reforma está identificada y el estado actual es coherente (no implica legalización de obras ni cumplimiento de normativa); "lista para entrar a vivir" es segura si es una apreciación comercial razonable y el estado lo permite (evitar usarla con déficits graves, ocupación u obras pendientes); "vistas al mar" es segura cuando las vistas existen desde el inmueble a la fecha (no prometer conservación futura de la vista); "ideal inversión" solo es admisible como perfil posible, sin promesa económica (no garantizar rendimiento, alquiler turístico o revalorización). El lenguaje prudente no es débil: debe combinar precisión y contexto ("vivienda actualmente destinada a uso residencial, disponible para consulta" es mejor que "perfecta para alquiler turístico"). Si existe una limitación conocida (derrama, ocupación, calificación protegida, uso restringido o discrepancia de superficie), debe gestionarse en la información precontractual y no esconderse detrás de una foto atractiva. El problema publicitario no está solo en la mentira directa: también puede existir por omisión, ambigüedad o acumulación de mensajes que llevan al cliente a una conclusión errónea. "Premium", "lujo", "exclusivo" o "único" pueden ser valoración comercial, pero todo dato objetivo asociado debe ser verificable.

## La ficha de anuncio: datos, fuentes y advertencias

Una ficha sólida organiza la información en capas: esencial visible, detalle disponible a petición y documentación previa a reserva. No es necesario publicar todo en un portal, pero sí evitar la ambigüedad interesada. En viviendas debe incluirse la etiqueta energética en la oferta, promoción y publicidad de venta o alquiler conforme al Real Decreto 390/2021. Cada dato relevante (superficie, precio, anexos, estado, uso/régimen, energía) debe expresarse de forma correcta ("xx m² construidos según Catastro" o "según escritura") y tener una fuente preferente identificada (documento, fecha de consulta, hoja de encargo, escritura, nota simple, plano, visita, facturas, declaración del propietario, certificado). Es imprescindible un control de versión: fecha de última actualización, responsable y enlace al expediente. Si un dato cambia (precio, disponibilidad, derrama, licencia, ocupación o estado de obras), deben actualizarse todos los canales de forma coordinada; el desfase entre web, portal y respuesta telefónica es un riesgo comercial y de consumo. Conviene crear una sección interna "no publicar" para datos sensibles que sí deben aparecer en la conversación o documentación previa (identidad del propietario, informe completo, claves, alarmas, datos de ocupantes o documentos no anonimizados).

## Publicidad de pago, email, WhatsApp y comunicaciones comerciales

Pagar por alcance solo tiene sentido si se sabe a qué acción conduce y qué dato demuestra que el coste se recupera. Antes de invertir en publicidad de pago hay que definir objetivo, audiencia, mensaje, activo creativo, página de destino, medición y umbral de calidad; el presupuesto debe incluir producción, distribución, gestión, herramientas y tiempo humano, y no se debe microsegmentar sobre atributos sensibles ni usar datos inferidos innecesarios.

El correo y WhatsApp son herramientas de seguimiento, no una licencia para enviar campañas indiscriminadas. La Ley 34/2002 (LSSICE) prohíbe, con carácter general, comunicaciones publicitarias por correo electrónico u otros medios equivalentes cuando no hayan sido solicitadas o expresamente autorizadas, con matices vinculados a relaciones previas y productos o servicios similares. En cualquier caso, debe facilitarse una vía sencilla y gratuita para oponerse o darse de baja. Es esencial separar mensajes transaccionales (confirmar una visita) de mensajes promocionales (enviar una ficha solicitada es distinto de mandar semanalmente ofertas); el mensaje comercial debe identificar al remitente, explicar por qué llega al destinatario y permitir dejar de recibirlo sin fricción. Tener un teléfono o correo no equivale a tener permiso para nutrirlo comercialmente: la base de datos debe reflejar origen, finalidad, canal y preferencia de cada contacto.

## Marketing de alquiler y alojamientos de corta duración

Para alquiler residencial la comunicación debe explicar destino, renta, gastos, fianza, disponibilidad y condiciones relevantes sin inducir a error. Para temporada debe existir una causa temporal real y acreditable; no basta con llamarlo "11 meses" o "corta estancia". Para habitación, se debe describir qué se cede y qué zonas se comparten. Para alojamiento turístico o de corta duración, la regulación estatal, autonómica, insular, municipal y comunitaria puede ser determinante. El marco del registro único y de la Ventanilla Única Digital de Arrendamientos ha sido objeto de litigios y pronunciamientos en 2026; por ello, el requisito de número o registro debe tratarse como una comprobación "viva": verificar el texto vigente en el BOE, la situación administrativa aplicable y, en Mallorca, el régimen turístico, municipal e insular antes de anunciar. No se deben copiar reglas de un anuncio antiguo. "Ideal para Airbnb" es una afirmación de alto riesgo que debe sustituirse por información acreditada sobre el uso actual y la necesidad de comprobar requisitos antes de cualquier explotación.`,
      easyExplanation:
        "Todo lo que se publica sobre un inmueble (anuncio, ficha, vídeo o mensaje) debe ser cierto y no puede esconder datos importantes: esto lo exige el Real Decreto 515/1989. Frases como \"vistas al mar\" o \"reformado\" solo son seguras si son ciertas y comprobables en el momento del anuncio, y frases como \"ideal para inversión\" o \"ideal para Airbnb\" son peligrosas si no hay documentos que las respalden. Además, no se puede mandar publicidad por email o WhatsApp a quien no lo ha pedido o autorizado (Ley 34/2002), y siempre hay que dar una forma fácil de darse de baja. En alquiler turístico o de corta duración hay que comprobar la normativa vigente antes de anunciar, porque cambia con frecuencia.",
      balearExample:
        "Un piso en Palma se anuncia como \"ideal para alquiler turístico, gran rentabilidad\". Antes de publicarlo, el agente comprueba que el edificio no dispone de título habilitante vigente para uso turístico y corrige el anuncio a \"vivienda residencial; cualquier explotación turística requiere verificación previa de la normativa insular y municipal aplicable\", evitando publicidad engañosa y riesgo regulatorio.",
      keyConcepts: [
        "RD 515/1989",
        "RD 390/2021 (CEE)",
        "Ley 34/2002 (LSSICE)",
        "TRLGDCU",
        "comunicación comercial no solicitada",
        "ficha de anuncio por capas",
        "control de versión",
        "registro de alquiler turístico",
      ],
      frequentErrors: [
        "Publicar \"ideal para Airbnb\" o \"rentabilidad garantizada\" sin comprobar la normativa turística vigente.",
        "No incluir la etiqueta de eficiencia energética en la oferta, promoción o publicidad del inmueble.",
        "Enviar promociones por WhatsApp o email a contactos antiguos sin verificar su consentimiento o relación previa.",
        "Dejar desactualizado un canal (portal, web, teléfono) tras un cambio de precio o disponibilidad.",
      ],
      examples: [
        {
          id: "m10-l4-ex-a",
          title: "Clasificación de afirmaciones de riesgo",
          scenario: "Redacción de un anuncio de venta",
          application:
            "Usar la tabla afirmación/cuándo es segura/qué puede exigir revisión antes de aprobar cualquier frase comercial.",
          isBalearContext: false,
        },
        {
          id: "m10-l4-ex-b",
          title: "Plantillas por situación de contacto",
          scenario: "Gestión de WhatsApp y email comercial",
          application:
            "Definir plantilla para respuesta a solicitud de ficha, confirmación de visita, resumen posterior y baja de comunicaciones, cada una con su propio nivel de personalización.",
          isBalearContext: false,
        },
        {
          id: "m10-l4-ex-c",
          title: "Comprobación viva del registro turístico",
          scenario: "Anuncio de un alojamiento de corta duración en Mallorca",
          application:
            "Verificar el texto vigente en el BOE/BOIB y la normativa insular y municipal antes de anunciar, sin reutilizar textos de anuncios anteriores.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l5",
      moduleId: "m10",
      title:
        "Marca, contenido y canales digitales (fotografía, vídeo, web, SEO, portales y redes)",
      order: 5,
      summary:
        "Cada canal digital cumple una función distinta en el embudo comercial y exige criterios de calidad y de riesgo propios, desde la fotografía hasta el SEO local y las redes sociales.",
      content: `La marca inmobiliaria útil no es un logotipo: es la consistencia entre lo que se promete, cómo se atiende y qué se entrega. La marca condiciona la percepción de riesgo; si una agencia comunica precisión, debe demostrarla con fichas completas, respuesta puntual y materiales actualizados. Conviene construir una biblioteca de mensajes aprobados ("ubicación y conectividad", "vida exterior", "producto para reforma", "segunda residencia", "inversión con comprobación previa" o "promoción sobre plano"), cada uno con ejemplos de frases seguras, frases vetadas y documentos mínimos, para evitar que cada comercial improvise promesas.

## Fotografía, vídeo y contenido inmersivo

La fotografía es la primera visita: debe representar distribución, luz, estado, contexto y escala sin ocultar elementos relevantes. Antes de la sesión se prepara el inmueble, se define el recorrido visual, se retira información sensible y se confirma con la propiedad qué objetos se conservarán. La edición puede corregir exposición, color o verticales, pero no debe eliminar defectos materiales, añadir vistas inexistentes ni modificar dimensiones de forma que induzca a error. Una buena serie organiza una visita mental: abre con el atributo principal, continúa con la distribución y termina con anexos y entorno. Si una vivienda tiene una reforma pendiente, fotografiar solo las mejores estancias puede crear una impresión descompensada; si una imagen se ha generado, reconstruido virtualmente o muestra una propuesta de reforma, debe indicarse de forma visible que es una recreación.

El vídeo inmobiliario debe responder a una ruta (llegada, contexto, acceso, distribución, atributo principal y llamada a la acción) sin "teletransportar" entre estancias ocultando una mala circulación o un desnivel. El tour virtual 360° exige control adicional porque puede exponer objetos privados, datos del entorno o patrones de seguridad; el dron es útil para mostrar entorno, parcela, accesos y costa, pero no puede sobrevolar o filmar sin la habilitación correspondiente ni sugerir que una parcela incluye zonas fuera de sus linderos. Deben asegurarse las autorizaciones de imagen, música, locución, obra gráfica y dron: el uso comercial requiere poder acreditar licencia y alcance de cada recurso.

## Redacción comercial, web y SEO local

El copy inmobiliario sigue una jerarquía: primero una frase de posicionamiento, después los datos que hacen viable la visita (ubicación, tipología, superficie con fuente, distribución, estado, anexos, costes y régimen de uso) y finalmente los elementos de contexto y una llamada a la acción concreta. En Mallorca, el idioma debe conservar el sentido jurídico y comercial, no solo las palabras: hay que evitar traducciones automáticas de términos como "finca", "vivienda habitual", "holiday rental" o "building plot" sin validación, y conviene crear un glosario de términos aprobados, especialmente para superficies, cargas, calificación y costes.

La web es el canal que la agencia controla: un portal presta audiencia, una red presta alcance, pero la web puede articular la ficha completa, la captación de datos, los recursos descargables, las preguntas frecuentes y la analítica. Cada inmueble relevante debería tener una página propia, indexable si procede, con contenido suficiente y una vía clara para solicitar información o visita; el mejor formulario no es el que obtiene más contactos, sino el que obtiene datos suficientes para iniciar una conversación proporcional y útil. El SEO inmobiliario no consiste en repetir palabras clave: consiste en responder mejor que otros a una búsqueda concreta y demostrar autoridad local, distinguiendo páginas de inventario, guías de zona, contenidos de proceso y preguntas frecuentes, cada una con intención clara. No debe convertirse el SEO en una fuente de afirmaciones arriesgadas: una guía puede explicar que una materia requiere comprobación, pero no dictaminar que un inmueble concreto es legalizable o explotable.

## Portales inmobiliarios y redes sociales

Los portales aportan alcance, pero también exponen el anuncio a comparación inmediata; el diferencial está en la calidad de la ficha y de la respuesta. Antes de publicar hay que adaptar el inventario al formato del portal sin perder precisión, verificar que la superficie coincide con la ficha interna, que el mapa no revela información sensible y que precio, servicios, gastos y anexos están descritos de forma consistente. Si la propiedad pide duplicar el anuncio con distintas agencias, conviene explicar el riesgo de sobreexposición: la multiplicación de anuncios puede aumentar alcance, pero también transmitir desorden, precios diferentes y falta de control.

El contenido inmobiliario en redes debe equilibrar tres capas: inventario (activos, para despertar interés cualificado), conocimiento local (zona, para construir autoridad) y proceso (para reducir miedo y objeciones), además de prueba social bien gestionada (testimonios autorizados, casos anonimizados, entrega de llaves sin datos sensibles). Una cuenta que solo publica fotos de propiedades depende del algoritmo y no desarrolla audiencia propia. No se deben publicar nombres, planos completos, matrículas, documentos, localizaciones exactas, horarios de ausencia o datos de clientes sin una base y autorización adecuadas.`,
      easyExplanation:
        "Cada canal digital sirve para algo distinto: las fotos y el vídeo son la primera visita y no pueden engañar sobre lo que realmente se verá; la web es el escaparate que controla la agencia; el SEO ayuda a que te encuentren cuando alguien busca algo concreto en una zona; los portales dan alcance pero exponen a comparación directa; y las redes sociales sirven para generar confianza a largo plazo, no solo para enseñar pisos. En todos los canales aplica la misma regla: no mostrar ni prometer nada que no se pueda demostrar, y proteger datos privados (planos completos, matrículas, nombres) al publicar.",
      balearExample:
        "Una inmobiliaria de Sóller graba un vídeo con dron de una finca rústica para mostrar el entorno y el acceso. Antes de publicarlo revisa que el vuelo cuenta con la habilitación necesaria y recorta las tomas para no sugerir que la parcela incluye una zona colindante que no forma parte de los linderos registrados.",
      keyConcepts: [
        "biblioteca de mensajes aprobados",
        "staging fotográfico",
        "tour virtual 360°",
        "SEO local",
        "landing page",
        "formulario de cualificación",
        "sobreexposición de portales",
        "prueba social",
      ],
      frequentErrors: [
        "Editar fotografías eliminando defectos materiales o añadiendo vistas inexistentes.",
        "Grabar con dron o tour 360° sin controlar la exposición de datos privados o de seguridad.",
        "Publicar el mismo anuncio en múltiples portales con precios o datos inconsistentes.",
        "Usar el SEO o las redes para afirmar viabilidad legal o urbanística de un inmueble sin comprobación.",
      ],
      examples: [
        {
          id: "m10-l5-ex-a",
          title: "Checklist antes de la sesión fotográfica",
          scenario: "Preparación de un reportaje de vivienda",
          application:
            "Fijar fecha, clima, hora de luz, estancias clave, orden de fotos, objetos que deben aparecer y elementos que requieren advertencia.",
          isBalearContext: false,
        },
        {
          id: "m10-l5-ex-b",
          title: "Tres versiones de un mismo vídeo",
          scenario: "Producción de contenido audiovisual para un inmueble",
          application:
            "Diseñar una versión de 30 segundos, una de 90 segundos y un recorrido completo para el interesado ya cualificado.",
          isBalearContext: false,
        },
        {
          id: "m10-l5-ex-c",
          title: "Matriz de tipos de página SEO",
          scenario: "Planificación de contenido web",
          application:
            "Diferenciar páginas de inventario, guías de zona, guías de proceso y artículos técnicos, cada una con intención y fuente propia.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l6",
      moduleId: "m10",
      title: "Conversión, CRM, visitas y relación con el cliente",
      order: 6,
      summary:
        "La conversión comercial depende de cualificar bien los contactos, gestionar la relación con un CRM trazable, ejecutar visitas ordenadas y convertir el feedback en decisiones documentadas.",
      content: `Un CRM inmobiliario debe registrar la historia mínima de la relación: origen del lead, inmueble o necesidad, fecha, responsable, consentimiento o base de contacto, presupuesto, zona, plazo, financiación, visitas, feedback, ofertas, documento compartido y siguiente acción. Su finalidad no es vigilar al cliente; es evitar que repita datos, que un lead quede abandonado o que dos personas le den información contradictoria. El embudo del CRM avanza por etapas: nuevo (contacto recibido con solicitud u origen), contactado (se ha intentado o producido comunicación útil), cualificado (presupuesto, motivación y decisión suficientemente entendidos), visita (confirmada o realizada), oferta/reserva (intención económica documentada) y nurturing (interés legítimo gestionable sin compra inmediata). Debe limitarse el acceso a expedientes y documentos sensibles por rol: un CRM no justifica que toda la organización pueda leer nóminas, contratos, pasaportes o información financiera.

## Cualificación de leads y primera conversación

La cualificación reduce visitas improductivas y mejora la experiencia; debe ser proporcional: en una solicitud inicial bastan pocas preguntas abiertas, en una operación avanzada se profundiza en financiación, poder de decisión, documentación y calendario. Las preguntas clave son: qué mueve a la persona a buscar ahora (motivación y urgencia), qué debe tener sí o sí (criterios no negociables), qué presupuesto total maneja (viabilidad económica y costes), quién participa en la decisión (proceso y agenda) y en qué plazo necesita resolverlo (prioridad real). Un guion flexible de tres pasos funciona bien: confirmar la solicitud, explorar la necesidad y proponer una siguiente acción concreta. La primera conversación debe dejar una sensación de ayuda, no de examen; si el lead no encaja, hay que ofrecer una alternativa razonable o mantener la relación con una frecuencia proporcionada, respetando siempre la preferencia de contacto de la persona.

## Visitas y coordinación de la oferta

Cada visita se prepara con ruta, ficha actualizada y objetivo; antes de abrir la puerta se comprueba disponibilidad, estado, presencia de ocupantes, mascotas y normas de la comunidad. Durante la visita se guía sin monopolizar, permitiendo observar y aclarando qué datos son objetivos y cuáles requieren verificación posterior. Después, se responde pronto con una recapitulación breve (qué vio, documentos solicitados, dudas pendientes y próximo paso), traduciendo el feedback a patrones (precio, planta, accesibilidad, ruido, distribución, comunidad o falta de pruebas) en vez de trasladar comentarios personales sin utilidad a la propiedad. Nunca debe promoverse urgencia artificial durante una visita: se puede informar de interés real documentado, pero no inventar ofertas, plazos o disponibilidad para forzar la decisión.

Cuando una visita avanza hacia una oferta, la función del comercial es organizar información, no precipitar el cierre: confirmar qué documentos se han entregado, qué condiciones son esenciales, quién decide y qué plazo es viable. Una señal como "pide segunda visita" indica interés real pero falta de un dato o decisión (se invita a decisores y se prepara información precisa); "pregunta por gastos" indica que evalúa coste total (se envía cuadro de costes con fuentes); "pide documentos" indica que necesita reducir riesgo (se comparte expediente proporcional y se registra la entrega); "hace oferta verbal" indica intención sin condiciones (se pasa a oferta escrita estructurada). El material de marketing debe desaparecer cuando empieza la fase de decisión jurídica: una ficha bonita no sustituye nota simple, certificado de comunidad, documentación de habitabilidad, información urbanística o contrato, y nunca debe utilizarse información de otros interesados, ofertas o circunstancias personales para presionar sin autorización o sin una base veraz.

## Feedback, reporting y KPIs

Tras cada contacto relevante se registra respuesta, objeción, comparación y siguiente paso; el propietario necesita saber si la demanda entiende el producto, qué frena la visita, qué elemento genera valor y si el precio compite. Un reporte efectivo distingue hechos (impresiones, consultas, visitas, ofertas y competencia), interpretación (qué patrón aparece y qué no se puede concluir todavía) y recomendación (mantener, cambiar mensaje, resolver incidencia, ajustar canal o revisar precio); esta separación evita discusiones emocionales con la propiedad. Ocultar feedback incómodo para "mantener contento" al cliente retrasa la corrección: la función profesional es interpretar el mercado, no confirmar deseos.

El cuadro de mando comercial se organiza por embudo: arriba, atención y demanda (impresiones, alcance, tráfico, consultas); en el centro, calidad (contactos efectivos, cualificación, visitas y asistencia); abajo, resultado (ofertas, reservas, ventas, precio de cierre, días de mercado y coste de adquisición); y calidad de servicio (tiempo de respuesta, satisfacción, incidencias y cumplimiento de actualización). Fórmulas simples permiten monitorizar el proceso: tasa de contacto (contactos efectivos / leads recibidos), lead cualificado (leads cualificados / leads recibidos), visita efectiva (visitas realizadas / visitas confirmadas), conversión a oferta (ofertas / visitas realizadas) y absorción (días hasta reserva/venta). Los KPIs son útiles cuando conectan el rendimiento actual con el diseño del siguiente proceso comercial, no como una colección de cifras para un informe bonito.`,
      easyExplanation:
        "El CRM es la memoria organizada de cada contacto: quién es, qué necesita, qué se le ha dicho y qué falta por hacer; no sirve para acumular datos innecesarios ni para que cualquiera en la oficina lea información sensible. Antes de invitar a alguien a visitar hay que hacer unas pocas preguntas para saber si de verdad encaja (presupuesto, plazo, quién decide). Durante y después de la visita se recoge feedback honesto (qué gustó, qué no, qué objeciones hubo) y se traduce en decisiones: cambiar el mensaje, ajustar el precio o resolver una incidencia documental. Los indicadores (visitas, ofertas, tiempo de respuesta) solo sirven si ayudan a decidir algo, no solo a rellenar un informe.",
      balearExample:
        "Una agencia en Inca detecta en su CRM que un piso de tres dormitorios recibe muchas consultas por WhatsApp pero solo dos visitas en 18 días, y ninguna solicitud de la ficha completa. En vez de aumentar el presupuesto publicitario como pide el propietario, revisa la ficha, añade la fuente de metros cuadrados, indica si tiene ascensor y aclara los gastos de comunidad; solo si tras una semana la conversión sigue baja, discute con el propietario un ajuste de precio.",
      keyConcepts: [
        "CRM inmobiliario",
        "etapas del embudo (nuevo-contactado-cualificado-visita-oferta-nurturing)",
        "cualificación proporcional",
        "recapitulación post-visita",
        "tasa de contacto",
        "coste por resultado",
        "absorción de mercado",
        "gobernanza de acceso a datos",
      ],
      frequentErrors: [
        "Dejar que el CRM acumule datos sensibles innecesarios o que todo el equipo acceda a ellos sin control por rol.",
        "Aumentar el presupuesto publicitario ante un problema de conversión sin antes revisar ficha, mensaje o precio.",
        "Confundir \"pide segunda visita\" u \"oferta verbal\" con un cierre, sin pasar a documentación formal.",
        "Ocultar al propietario feedback negativo para no incomodarlo, retrasando la corrección de estrategia.",
      ],
      examples: [
        {
          id: "m10-l6-ex-a",
          title: "Etapas del embudo en el CRM",
          scenario: "Gestión diaria de contactos entrantes",
          application:
            "Mover cada lead de nuevo a contactado, cualificado, visita, oferta/reserva o nurturing según criterios de entrada objetivos.",
          isBalearContext: false,
        },
        {
          id: "m10-l6-ex-b",
          title: "Guion de cualificación en tres pasos",
          scenario: "Primera llamada tras una solicitud de información",
          application:
            "Confirmar la solicitud, explorar la necesidad real y proponer una siguiente acción concreta (enviar ficha, agendar visita).",
          isBalearContext: false,
        },
        {
          id: "m10-l6-ex-c",
          title: "Reporte hechos-interpretación-recomendación",
          scenario: "Informe quincenal al propietario",
          application:
            "Separar impresiones/visitas/ofertas (hechos) de las hipótesis sobre por qué ocurre (interpretación) y de la acción propuesta (recomendación).",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m10-l7",
      moduleId: "m10",
      title:
        "Colaboración, reputación, tecnología responsable, ética y planificación de campañas",
      order: 7,
      summary:
        "La comercialización profesional también exige reglas claras de colaboración entre agencias, gestión de la reputación, uso responsable de la IA y del marketing internacional, un plan de lanzamiento estructurado y un marco ético e inclusivo.",
      content: `La colaboración profesional entre agencias, MLS y referidos puede mejorar el resultado para la propiedad y el comprador, pero debe estar documentada. Antes de compartir un inmueble hay que definir quién representa a quién, qué información puede difundirse, qué comisión se reparte y qué sucede si intervienen varios contactos, protegiendo la confidencialidad. El acuerdo mínimo cubre inventario (ficha única, precio único, fotos y datos actualizados), clientes (registro de introducción y protección temporal del lead), comisión (porcentaje, devengo, impuestos y pagos), documentos (qué se comparte y con qué nivel de anonimización) y comunicación (quién responde, visita y reporta). Una colaboración termina mal cuando la comisión importa más que la información: la regla debe ser que la protección del cliente y la trazabilidad prevalecen sobre la velocidad de publicar.

## Reputación y prueba social

Una reseña útil surge de una experiencia ordenada: expectativas claras, información fiable, trato correcto, seguimiento y cierre documentado. Se debe pedir testimonio cuando el cliente pueda explicar un resultado concreto (rapidez de respuesta, claridad del proceso, capacidad de resolver un problema), evitando incentivar reseñas de forma que distorsione su autenticidad o presione a clientes vulnerables. Ante una reseña negativa, la respuesta correcta reconoce la experiencia, evita datos del expediente y ofrece continuar por canal privado; nunca se deben publicar datos personales, contenido contractual o de terceros para "defenderse". La reputación también se gestiona antes de que exista una reseña: un email de bienvenida, un calendario de pasos y un informe de situación disminuyen la ansiedad y previenen críticas basadas en malentendidos. La métrica no debe limitarse a las estrellas: hay que medir recomendación, repetición, referencias recibidas y causas de insatisfacción.

## Marketing internacional, IA generativa y ética

La comercialización internacional exige un recorrido documental más visible: el comprador puede no conocer la diferencia entre Registro y Catastro, el papel del notario, el calendario fiscal, las arras o las limitaciones de una finca rústica. El material debe presentar el inmueble y también explicar el proceso de decisión y las comprobaciones que se realizarán antes de comprometer fondos; la traducción debe ser funcional (conservar cifras, unidades, fuentes y advertencias) y no aproximar conceptos jurídicos sin avisar.

En marketing inmobiliario, la IA generativa puede ayudar a resumir notas de visita, proponer versiones de un texto, traducir un borrador, estructurar un informe, clasificar preguntas frecuentes o preparar un calendario de contenido, pero el resultado siempre exige revisión humana: ningún sistema debe generar una afirmación sobre usos, licencias, rentabilidad, superficie o disponibilidad sin una fuente identificada. Conviene un protocolo con fuente de entrada, herramienta aprobada, tipo de dato permitido, revisión humana, versión final y responsable; toda salida generada debe llevar una etiqueta interna (borrador, verificado o aprobado), y si un error generado por una herramienta llega al cliente, la responsabilidad recae en quien publicó el contenido, no en el software.

La comunicación inmobiliaria debe evitar expresiones que excluyan o estigmaticen por origen, edad, género, discapacidad, situación familiar, religión u otras circunstancias personales. La selección en alquiler puede requerir análisis de solvencia, pero debe ser proporcional, coherente y vinculado al riesgo económico, no a estereotipos; la accesibilidad importa igual (textos legibles, imágenes descriptivas, contrastes, canales alternativos). El marketing ético no reduce la conversión, la mejora: filtra por encaje objetivo, demuestra profesionalidad y disminuye reclamaciones.

## Plan de lanzamiento en 30 días y casos prácticos

Un lanzamiento ordenado evita la fatiga de mercado: días 1-5 auditoría, precio, propuesta de valor y aprobaciones (entregable: expediente publicable y plan firmado); días 6-10 fotografía, vídeo, plano, ficha, web y preparación de canales (activos y versiones listas); días 11-15 lanzamiento en web, base autorizada, portales y contenido (primera lectura de demanda y respuesta); días 16-21 visitas, retargeting, alianzas y reporte de objeciones (ajustes de mensaje, canal o agenda); días 22-30 revisión de precio/estrategia según datos y oferta (decisión documentada con propiedad). El plan debe dejar margen para el aprendizaje: si surge una incidencia documental, se pausa la afirmación afectada sin esperar a tener una solución definitiva, y se comunica a la propiedad qué se ha detenido y por qué.

Los cuatro casos prácticos del módulo ilustran errores recurrentes con lecciones aplicables: (1) un chalet de costa en Calvià donde el propietario exige el titular "Luxury villa with guaranteed holiday income" sin que la explotación turística esté acreditada — la lección es que la narrativa premium no autoriza a prometer más, y en producto de alto valor la precisión documental es parte del lujo; (2) un piso de tres dormitorios en Palma con tráfico alto pero solo dos visitas en 18 días porque la ficha no aclara superficie, ascensor ni gastos — la lección es que el gasto publicitario no corrige una propuesta incompleta, primero se repara la información, luego se mide y después se escala; (3) un propietario en Palma que quiere anunciar una vivienda amueblada mezclando alquiler de temporada y estancias turísticas cortas sin acreditar causa temporal ni título habilitante — la lección es que la clasificación jurídica es parte del marketing, y comunicar un uso equivocado multiplica el riesgo; (4) una agencia con 4.500 teléfonos históricos que quiere enviar una promoción masiva por WhatsApp sin registrar preferencia de canal ni mecanismo de baja — la lección es que una base de datos es un activo solo cuando se puede explicar de dónde procede, qué espera la persona y cuándo debe dejar de recibir mensajes.`,
      easyExplanation:
        "Colaborar con otras agencias funciona si antes se acuerda por escrito quién representa a quién, qué comisión se reparte y qué información se comparte. Las reseñas se ganan dando un buen servicio, no pidiéndolas de forma forzada, y ante una crítica negativa se responde con calma y sin airear datos privados. La inteligencia artificial puede ayudar a redactar o traducir borradores, pero una persona siempre debe revisar y aprobar antes de publicar, porque la responsabilidad legal es de la agencia, no de la herramienta. El marketing debe tratar a todas las personas por igual, sin frases discriminatorias, y un lanzamiento de campaña se planifica en fases de 30 días con revisión de resultados en cada etapa.",
      balearExample:
        "En un chalet de costa en Calvià, el propietario insiste en anunciar \"garantía de renta turística\". El agente rechaza ese titular porque la explotación turística no está acreditada, y propone en su lugar \"villa de costa con piscina, vistas parciales y vida exterior\", documentando por escrito la negativa y el motivo ante el propietario.",
      keyConcepts: [
        "acuerdo de colaboración/MLS",
        "gestión de reseñas",
        "protocolo de uso de IA generativa",
        "marketing ético e inclusivo",
        "marketing internacional",
        "plan de lanzamiento de 30 días",
        "etiquetado de contenido IA (borrador/verificado/aprobado)",
      ],
      frequentErrors: [
        "Compartir un inmueble con otra agencia sin acordar por escrito comisión, información y responsable de comunicación.",
        "Publicar contenido generado por IA sin revisión humana ni verificación de la fuente del dato.",
        "Responder a una reseña negativa exponiendo datos del expediente o del cliente.",
        "Escalar presupuesto de campaña en lugar de corregir primero la ficha o el mensaje que no convierte.",
      ],
      examples: [
        {
          id: "m10-l7-ex-a",
          title: "Acuerdo mínimo de colaboración en una página",
          scenario: "Antes de compartir un inmueble con otra agencia o MLS",
          application:
            "Fijar qué se puede publicar, cómo se reconoce la introducción del cliente, cuándo se comparte documentación y qué canal se usa para resolver conflictos.",
          isBalearContext: false,
        },
        {
          id: "m10-l7-ex-b",
          title: "Protocolo de IA con etiquetado",
          scenario: "Uso de IA para redactar o traducir una ficha",
          application:
            "Marcar cada salida como borrador, verificado o aprobado, y vincular los borradores aprobados a la fuente documental original.",
          isBalearContext: false,
        },
        {
          id: "m10-l7-ex-c",
          title: "Calendario de lanzamiento de 30 días",
          scenario: "Nueva captación que necesita salir al mercado de forma ordenada",
          application:
            "Repartir auditoría, producción de activos, lanzamiento, visitas/ajustes y revisión de estrategia en los cinco tramos de cinco a diez días definidos por el módulo.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m10-e1",
      moduleId: "m10",
      type: "case",
      question:
        "Un propietario en Calvià pide que el anuncio de su chalet de costa incluya \"garantía de renta turística de 30.000 €/año\". La explotación turística no está acreditada documentalmente. ¿Qué haces?",
      expectedAnswer:
        "Rechazar la frase, explicar por escrito al propietario que no se puede publicar una promesa de rentabilidad sin base documental, y proponer una alternativa verificable (descripción de atributos reales: piscina, vistas parciales, vida exterior) indicando que cualquier explotación turística requiere verificación previa.",
      explanation:
        "El RD 515/1989 prohíbe publicidad que induzca a error o silencie datos fundamentales; \"premium\" no exime de que los datos objetivos asociados sean verificables (Ficha 35).",
      difficulty: "medium",
    },
    {
      id: "m10-e2",
      moduleId: "m10",
      type: "decision",
      question:
        "Un anuncio en Palma recibe muchas consultas pero solo dos visitas en 18 días, y el propietario propone doblar el presupuesto de publicidad. ¿Es la decisión correcta?",
      expectedAnswer:
        "No. Primero hay que revisar la ficha (superficie, ascensor, gastos, fotos) y el mensaje antes de aumentar el gasto, porque el problema es de conversión, no de alcance.",
      explanation:
        "\"El gasto no corrige una propuesta incompleta. Primero repara la información; luego mide; después escala\" (Ficha 36).",
      difficulty: "basic",
    },
    {
      id: "m10-e3",
      moduleId: "m10",
      type: "comprehension",
      question:
        "Explica la diferencia entre marketing, venta, asesoramiento y publicidad según el módulo, con un ejemplo de límite profesional de cada uno.",
      expectedAnswer:
        "Marketing atrae y hace comprensible el producto pero no certifica legalidad ni rentabilidad; venta ordena necesidades y conduce a decisión pero no puede presionar u ocultar información; asesoramiento detecta riesgos y deriva pero no sustituye dictamen jurídico/técnico/fiscal; publicidad promueve la contratación pero debe ser clara, veraz y trazable.",
      explanation: "Ficha 03 establece estos cuatro límites como base de toda la disciplina.",
      difficulty: "basic",
    },
    {
      id: "m10-e4",
      moduleId: "m10",
      type: "balear_scenario",
      question:
        "Un propietario en Palma quiere anunciar su vivienda amueblada como disponible para \"11 meses, ideal estudiantes, teletrabajo o turismo\", alternando alquiler de temporada y estancias cortas en verano, sin acreditar causa temporal ni título turístico. ¿Cómo procedes?",
      expectedAnswer:
        "Rechazar la campaña híbrida; pedir al propietario que defina un único producto (vivienda habitual, temporada o corta duración), que aporte la documentación correspondiente y que permita publicar condiciones coherentes con ese producto.",
      explanation:
        "\"La denominación del contrato no altera su naturaleza... la clasificación jurídica es parte del marketing\" (Ficha 37).",
      difficulty: "advanced",
    },
    {
      id: "m10-e5",
      moduleId: "m10",
      type: "decision",
      question:
        "Una agencia dispone de 4.500 teléfonos de personas que en los últimos cinco años preguntaron por inmuebles, sin registro de preferencia de canal ni consentimiento explícito para promociones. El director comercial quiere lanzar una promoción masiva por WhatsApp. ¿Qué decides?",
      expectedAnswer:
        "No lanzar el envío masivo sin revisar base y soporte legal; usar WhatsApp solo para conversaciones iniciadas o autorizadas; diseñar en su lugar una campaña de reactivación limitada a contactos con base y mecanismo de baja, o una landing con solicitud expresa.",
      explanation:
        "La Ley 34/2002 exige solicitud o autorización expresa para comunicaciones comerciales; una relación previa antigua no equivale a autorización ilimitada (Ficha 38).",
      difficulty: "advanced",
    },
    {
      id: "m10-e6",
      moduleId: "m10",
      type: "case",
      question:
        "Durante una visita, el interesado pregunta si hay otras ofertas sobre el inmueble para presionar la negociación. ¿Puedes usar esa información de otros interesados?",
      expectedAnswer:
        "No, salvo que exista interés real documentado que se pueda comunicar de forma veraz; nunca se debe inventar urgencia, plazos u ofertas inexistentes, ni usar circunstancias personales de otros interesados sin autorización.",
      explanation:
        "\"Nunca utilices información de otros interesados, ofertas o circunstancias personales para presionar sin autorización o sin una base veraz\" (Ficha 26).",
      difficulty: "medium",
    },
    {
      id: "m10-e7",
      moduleId: "m10",
      type: "comprehension",
      question:
        "¿Qué debe incluir como mínimo un CRM inmobiliario y por qué no debe accederse a él sin control por rol?",
      expectedAnswer:
        "Debe incluir origen del lead, necesidad, fecha, responsable, consentimiento/base de contacto, presupuesto, zona, plazo, financiación, visitas, feedback, ofertas, documento compartido y siguiente acción; el acceso debe limitarse por rol porque contiene datos sensibles (financieros, identificativos) que no todo el equipo necesita ver.",
      explanation: "Ficha 22, principio de gobernanza de datos.",
      difficulty: "medium",
    },
    {
      id: "m10-e8",
      moduleId: "m10",
      type: "case",
      question:
        "Un cliente pide staging virtual para mostrar una propuesta de reforma en las fotos del anuncio. ¿Cómo se debe presentar esa imagen?",
      expectedAnswer:
        "Indicando de manera visible que la imagen es una recreación o propuesta de reforma, no el estado real actual del inmueble; nunca presentarla como si fuera una fotografía real sin aclaración.",
      explanation:
        "\"Si una foto se ha generado, reconstruido virtualmente o muestra una propuesta de reforma, indícalo de manera visible\" (Ficha 13).",
      difficulty: "basic",
    },
  ],
  quizQuestions: [
    {
      id: "m10-q1",
      question:
        "¿Cuál es la secuencia correcta antes de lanzar una campaña según el método del módulo?",
      options: [
        "Fotos → portal → precio",
        "Auditoría → propuesta → activos → distribución",
        "Redes → visita → documentación",
        "Precio → anuncio → análisis",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El método exige auditar el producto y fijar precio/propuesta antes de producir activos y distribuir (Fichas 01 y 40).",
      sourceModuleId: "m10",
      legalReference: "Ficha 01, Ficha 40",
      difficulty: "basic",
    },
    {
      id: "m10-q2",
      question: "La etiqueta de eficiencia energética debe aparecer en:",
      options: [
        "Solo la escritura",
        "Solo el contrato de arrendamiento",
        "La oferta, promoción y publicidad de venta o arrendamiento",
        "Solo anuncios de obra nueva",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El RD 390/2021 exige incluir la etiqueta CEE en la oferta, promoción y publicidad de venta o alquiler de viviendas.",
      sourceModuleId: "m10",
      legalReference: "Real Decreto 390/2021, Ficha 11 y 40",
      difficulty: "basic",
    },
    {
      id: "m10-q3",
      question: "Un comparativo de precio de salida debe distinguir, al menos, entre:",
      options: [
        "Seguidores y visitas",
        "Precio pedido, precio negociado y evidencia de transacción",
        "Color de marca y plano",
        "Foto interior y exterior",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Un portal aporta oferta, no prueba precio de cierre; hay que distinguir precio pedido, negociado y evidencia de transacción cuando sea accesible.",
      sourceModuleId: "m10",
      legalReference: "Ficha 08",
      difficulty: "medium",
    },
    {
      id: "m10-q4",
      question: "Ante un lead recibido por WhatsApp, lo más correcto es:",
      options: [
        "Añadirlo a todas las campañas",
        "Responder la solicitud y registrar preferencia antes de nutrirlo",
        "Reenviar su número a colaboradores",
        "Pedir documentos financieros de inmediato",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Un contacto se responde sobre lo consultado y se registra su preferencia; tener el teléfono no equivale a autorización para nutrirlo comercialmente.",
      sourceModuleId: "m10",
      legalReference: "Ficha 21",
      difficulty: "medium",
    },
    {
      id: "m10-q5",
      question: "\"Ideal para Airbnb\" es seguro cuando:",
      options: [
        "La vivienda tiene terraza",
        "El propietario lo afirma verbalmente",
        "Se han comprobado los requisitos aplicables y el mensaje se limita a lo acreditado",
        "El anuncio se publica en inglés",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Solo es seguro afirmar uso turístico cuando se ha verificado la normativa vigente y el mensaje se ciñe a lo que consta acreditado, no a una expectativa.",
      sourceModuleId: "m10",
      legalReference: "Ficha 28, Ficha 40",
      difficulty: "advanced",
    },
    {
      id: "m10-q6",
      question: "Si un anuncio recibe muchas consultas pero pocas visitas, lo primero es:",
      options: [
        "Duplicar presupuesto",
        "Revisar ficha, datos esenciales, precio, respuesta y objeciones",
        "Cambiar de logo",
        "Ocultar gastos",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El problema típico es de conversión (información ambigua), no de alcance; el gasto no corrige una ficha incompleta.",
      sourceModuleId: "m10",
      legalReference: "Ficha 36",
      difficulty: "medium",
    },
    {
      id: "m10-q7",
      question: "Una imagen de reforma virtual debe:",
      options: [
        "Parecer real sin aclaración",
        "Indicar que es una propuesta o recreación",
        "Eliminar defectos del inmueble",
        "Sustituir al plano",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Toda imagen generada, reconstruida o de propuesta de reforma debe declararse como tal de forma visible.",
      sourceModuleId: "m10",
      legalReference: "Ficha 13",
      difficulty: "basic",
    },
    {
      id: "m10-q8",
      question: "El CRM debe incluir, como mínimo:",
      options: [
        "Nombre y teléfono",
        "Origen, necesidad, estado, responsable, siguiente acción y trazabilidad proporcional",
        "Todas las redes sociales de la persona",
        "Documentos personales de todos los leads",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El CRM registra la historia mínima necesaria para gestionar la relación de forma trazable, sin acumular datos sensibles innecesarios.",
      sourceModuleId: "m10",
      legalReference: "Ficha 22, Ficha 39",
      difficulty: "medium",
    },
    {
      id: "m10-q9",
      question:
        "Según el Real Decreto 515/1989, la publicidad de venta o arrendamiento de viviendas:",
      options: [
        "Puede omitir datos si son técnicos",
        "No debe inducir a error ni silenciar datos fundamentales",
        "Solo aplica a anuncios impresos",
        "No incluye las conversaciones por mensaje",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El RD 515/1989 exige que oferta, promoción y publicidad no induzcan ni puedan inducir a error, y alcanza a cualquier soporte, incluida la conversación por mensaje.",
      sourceModuleId: "m10",
      legalReference: "RD 515/1989, Ficha 10",
      difficulty: "basic",
    },
    {
      id: "m10-q10",
      question:
        "La Ley 34/2002 (LSSICE) respecto a comunicaciones publicitarias por correo electrónico:",
      options: [
        "Las permite siempre si el remitente es una empresa",
        "Las prohíbe con carácter general si no han sido solicitadas o autorizadas, salvo matices por relación previa",
        "Solo se aplica a empresas extranjeras",
        "No exige mecanismo de baja",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La LSSICE exige solicitud o autorización expresa, con matices vinculados a relaciones previas y productos similares, y siempre una vía sencilla de oposición o baja.",
      sourceModuleId: "m10",
      legalReference: "Ley 34/2002, Ficha 21",
      difficulty: "medium",
    },
    {
      id: "m10-q11",
      question: "En la auditoría de producto, un dato \"ámbar\" significa:",
      options: [
        "Dato verificado y publicable",
        "Dato recibido pero pendiente de contraste",
        "Dato dudoso, sensible o prohibido de publicar",
        "Dato irrelevante para el marketing",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El sistema de semáforo clasifica verde (publicable), ámbar (pendiente) y rojo (prohibido); solo sobre el ámbar se preparan preguntas, no se publica.",
      sourceModuleId: "m10",
      legalReference: "Ficha 07",
      difficulty: "basic",
    },
    {
      id: "m10-q12",
      question: "Para clientes internacionales, el material comercial debe:",
      options: [
        "Traducir literalmente los conceptos jurídicos",
        "Explicar proceso, documentos y plazos con material bilingüe y traducción funcional",
        "Omitir el calendario fiscal por ser complejo",
        "Evitar mencionar el papel del notario",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La traducción debe ser funcional (conservar cifras, fuentes, advertencias) y explicar el recorrido documental completo, no aproximar conceptos jurídicos sin avisar.",
      sourceModuleId: "m10",
      legalReference: "Ficha 04, Ficha 27",
      difficulty: "medium",
    },
    {
      id: "m10-q13",
      question: "Antes de aprobar contenido generado por IA para un anuncio, se debe:",
      options: [
        "Publicarlo directamente si suena natural",
        "Revisarlo humanamente y vincularlo a una fuente verificada, etiquetándolo como borrador/verificado/aprobado",
        "Dejar que el sistema decida la disponibilidad del inmueble",
        "Usarlo para traducir conceptos jurídicos sin revisión",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ningún sistema de IA debe generar afirmaciones sobre usos, licencias, rentabilidad o disponibilidad sin fuente identificada y revisión humana.",
      sourceModuleId: "m10",
      legalReference: "Ficha 32",
      difficulty: "advanced",
    },
    {
      id: "m10-q14",
      question:
        "En una colaboración entre agencias (MLS o referidos), el acuerdo mínimo debe cubrir:",
      options: [
        "Solo el reparto de comisión",
        "Inventario, clientes, comisión, documentos y comunicación",
        "Solo quién publica el anuncio primero",
        "Nada, basta la confianza mutua",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Sin estos cinco puntos documentados, la colaboración se convierte en duplicación de anuncios y conflicto de atribución.",
      sourceModuleId: "m10",
      legalReference: "Ficha 29",
      difficulty: "medium",
    },
    {
      id: "m10-q15",
      question:
        "Respecto al lenguaje inclusivo en anuncios de alquiler, el módulo indica que:",
      options: [
        "Es aceptable pedir \"solo parejas\" o \"sin niños\" si lo pide el propietario",
        "La selección debe basarse en solvencia proporcional y objetiva, no en estereotipos personales",
        "La accesibilidad no es relevante para el marketing",
        "Basta con cumplir el lenguaje legal mínimo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La comunicación debe evitar exclusiones no justificadas y basar la selección en criterios de riesgo económico coherentes y proporcionales.",
      sourceModuleId: "m10",
      legalReference: "Ficha 33",
      difficulty: "medium",
    },
    {
      id: "m10-q16",
      question: "En el plan de lanzamiento de 30 días, ¿qué ocurre en los días 22-30?",
      options: [
        "Auditoría inicial del producto",
        "Producción de fotografía y vídeo",
        "Revisión de precio/estrategia según datos y oferta, con decisión documentada",
        "Lanzamiento inicial en web y portales",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El tramo final del plan revisa la estrategia con base en los datos recogidos en las semanas previas y documenta la decisión con la propiedad.",
      sourceModuleId: "m10",
      legalReference: "Ficha 34",
      difficulty: "basic",
    },
    {
      id: "m10-q17",
      question:
        "¿Qué distingue a un \"reporte efectivo\" según la ficha de feedback y reporting?",
      options: [
        "Solo debe mostrar cifras de impresiones",
        "Separar hechos, interpretación y recomendación",
        "Ocultar objeciones para no preocupar al propietario",
        "Presentar solo buenas noticias",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Esta separación evita discusiones emocionales y permite decisiones basadas en evidencia, no en percepciones.",
      sourceModuleId: "m10",
      legalReference: "Ficha 25",
      difficulty: "medium",
    },
    {
      id: "m10-q18",
      question:
        "Sobre el marco regulatorio de alquiler de corta duración en Mallorca en 2026, el módulo recomienda:",
      options: [
        "Copiar el texto de anuncios anteriores para ahorrar tiempo",
        "Tratar el requisito de registro como una comprobación \"viva\", verificando BOE/BOIB y normativa insular/municipal vigente",
        "Ignorar la normativa mientras no haya sanciones",
        "Asumir que toda vivienda con terraza puede anunciarse como turística",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El marco del registro único y la Ventanilla Única Digital ha sido objeto de litigios en 2026; la vigencia de requisitos debe verificarse de forma inmediata antes de cada anuncio.",
      sourceModuleId: "m10",
      legalReference: "Ficha 28, Ficha 40",
      difficulty: "advanced",
    },
  ],
};

export const m10Glossary: GlossaryItem[] = [
  {
    id: "g-m10-ficha-de-contexto-municipal",
    term: "Ficha de contexto municipal",
    definition:
      "Documento interno que resume accesos, servicios, tipo de demanda, estacionalidad y riesgos recurrentes de una zona o municipio, usado para calibrar el mensaje comercial.",
    easyDefinition:
      "Una chuleta sobre cómo es vivir en un barrio o pueblo concreto, para no inventar frases genéricas.",
    relatedModuleId: "m10",
  },
  {
    id: "g-m10-matriz-publicable-pendiente-no-publicable",
    term: "Matriz publicable / pendiente / no publicable",
    definition:
      "Sistema de clasificación (semáforo verde/ámbar/rojo) de los datos de un inmueble según su nivel de verificación documental antes de aprobar material comercial.",
    easyDefinition:
      "Una lista de semáforos que dice qué datos ya se pueden anunciar, cuáles hay que comprobar y cuáles están prohibidos.",
    relatedModuleId: "m10",
  },
  {
    id: "g-m10-ventanilla-unica-digital-de-arrendamientos",
    term: "Ventanilla Única Digital de Arrendamientos",
    definition:
      "Mecanismo estatal de registro de arrendamientos y alojamientos de corta duración, cuyo marco normativo ha sido objeto de litigios y pronunciamientos en 2026 y debe verificarse de forma actualizada antes de anunciar.",
    easyDefinition:
      "El sistema oficial donde debería quedar registrado un alquiler turístico o de corta duración, y que hay que comprobar porque las reglas están cambiando.",
    relatedModuleId: "m10",
    balearContext:
      "En Mallorca, el requisito de número o registro debe tratarse como una comprobación \"viva\": verificar el texto vigente en BOE/BOIB y la normativa insular y municipal antes de cada anuncio.",
  },
  {
    id: "g-m10-coste-por-resultado",
    term: "Coste por resultado",
    definition:
      "Indicador del cuadro de mando comercial que relaciona el gasto de marketing con el resultado obtenido (lead, visita, oferta), usado para justificar o frenar la inversión en publicidad de pago.",
    easyDefinition:
      "Cuánto cuesta conseguir cada contacto o visita útil con el dinero invertido en publicidad.",
    relatedModuleId: "m10",
  },
  {
    id: "g-m10-base-de-contacto-trazable",
    term: "Base de contacto trazable",
    definition:
      "Registro que documenta el origen, la finalidad, el canal y la preferencia de cada persona en la base de datos comercial, exigido antes de cualquier comunicación promocional.",
    easyDefinition:
      "Saber de dónde salió cada teléfono o email, para qué se puede usar y si esa persona quiere seguir recibiendo mensajes.",
    relatedModuleId: "m10",
  },
  {
    id: "g-m10-etiquetado-de-contenido-ia",
    term: "Etiquetado de contenido IA (borrador/verificado/aprobado)",
    definition:
      "Protocolo interno que marca cada pieza generada con inteligencia artificial según su nivel de revisión humana antes de publicarse.",
    easyDefinition:
      "Poner una etiqueta a cada texto o imagen hecho con IA para saber si ya lo ha revisado una persona o todavía es solo un borrador.",
    relatedModuleId: "m10",
  },
];

export const m10Alerts: string[] = [
  "Real Decreto 515/1989 (información al consumidor en compraventa y arrendamiento de viviendas): base normativa de todo el módulo; toda afirmación comercial debe poder sostenerse sin inducir a error ni silenciar datos fundamentales.",
  "Real Decreto 390/2021 (certificación de eficiencia energética): la etiqueta CEE es obligatoria en la oferta, promoción y publicidad de venta o alquiler de viviendas.",
  "Ley 34/2002 (LSSICE): regula las comunicaciones comerciales por email y medios equivalentes; exige solicitud o autorización previa (con matices por relación previa) y una vía sencilla de baja.",
  "Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios (Real Decreto Legislativo 1/2007): completa el marco de prácticas comerciales e información de oferta.",
  "Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018: protección de datos aplicable al CRM, bases de contacto y uso de IA con información personal.",
  "Ley 29/1994 de Arrendamientos Urbanos: normativa de referencia para marketing de alquiler residencial y de temporada.",
  "Marco de alquiler turístico/corta duración (registro único, Ventanilla Única Digital de Arrendamientos, normativa insular y municipal balear): el propio módulo señala que este marco \"ha sido objeto de litigios y pronunciamientos en 2026\" y que el requisito de número o registro debe tratarse como una comprobación \"viva\" — verificar el texto vigente en BOE/BOIB y la normativa insular y municipal antes de cada anuncio, sin reutilizar textos de campañas anteriores.",
  "El PDF está fechado como \"revisado con fuentes oficiales disponibles a 4 de julio de 2026\" y recomienda consultar siempre la versión consolidada del BOE y BOIB, las normas insulares o municipales aplicables y la documentación del expediente antes de publicitar, dado el ritmo de cambios regulatorios y judiciales recientes en esta materia.",
];
