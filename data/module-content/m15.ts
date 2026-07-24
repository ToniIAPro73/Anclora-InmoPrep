import type { Module, GlossaryItem } from "@/lib/types";

export const m15Module: Module = {
  id: "m15",
  code: "M15",
  title: "La Captación Inmobiliaria",
  order: 15,
  description: "Prospección, nota de encargo, exclusiva, comprobación documental y precio.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m15-l1",
      moduleId: "m15",
      title: "Prospección, ciclo de venta y ética del primer contacto",
      order: 1,
      summary:
        "Cómo diseñar un sistema de prospección basado en un área de influencia real, inteligencia de mercado y contacto ético, evitando presión, invasión o promesas vacías.",
      content: `La captación no es un evento puntual sino la fase inicial de un ciclo de venta completo que empieza mucho antes de la primera visita de un comprador. El propietario puede querer vender rápido, maximizar el precio, resolver una herencia, liberar una hipoteca, cambiar de ciudad o separar una copropiedad; comprender esa motivación no significa explotar la urgencia, sino diseñar una estrategia realista. Una agencia debe distinguir entre tres tipos de relación: un **contacto** (persona que deja sus datos, interés identificado sin promesa), una **oportunidad** (inmueble con necesidad potencial y acceso al decisor) y una **captación activa** (inmueble con encargo firmado, documentación mínima, precio consensuado, condiciones de publicidad y responsable interno asignado). Mezclar estas tres fases produce inventario ficticio y discusiones sobre comisiones que no deberían producirse.

## Definir el área de influencia

La prospección efectiva se construye sobre un territorio y un perfil de cliente concreto. Intentar captar "en toda Mallorca y todo tipo de inmueble" produce mensajes genéricos y conocimiento superficial. El área de influencia se define por capacidad real de servicio: municipios, barrios, tipologías, idiomas, rango de precios y tiempos de desplazamiento. En Palma puede tener sentido separar barrios consolidados, zonas de rehabilitación y producto de inversión; en municipios costeros, distinguir primera línea, interior y áreas con restricciones de uso; en rústico, limitar la actuación a zonas donde se pueda coordinar apoyo técnico y documental. El perfil del propietario importa tanto como la finca: un residente local, un heredero que vive fuera, una sociedad patrimonial, un inversor extranjero o un propietario de segunda residencia requieren ritmos, idiomas y evidencias diferentes, pero nunca deben segmentarse por prejuicios de nacionalidad, edad u origen — solo por necesidades y condiciones de operación.

## Investigación previa como hipótesis de trabajo

Antes de contactar con un propietario se necesita una hipótesis de mercado, no una tasación cerrada: señales de demanda y oferta, anuncios activos y retirados, rango de precios, superficie, estado, tipología, tiempo de exposición y absorción. Es esencial distinguir precio pedido, precio anunciado, precio de cierre y valor fiscal, porque cada dato responde a una pregunta distinta y ninguno permite prometer el resultado de una venta concreta. La investigación cruza CRM, registros de visitas, consultas de compradores, estadísticas de transacciones cuando estén disponibles y conocimiento directo de la zona; en mercados con producto escaso, la ausencia de comparables exige más prudencia, no menos.

## Canales de prospección y su disciplina ética

El módulo describe varios canales: prospección ética y protección de la reputación (no usar herencias, divorcios, impagos o fallecimientos como excusa para un contacto invasivo); referidos y recomendaciones (confirmar quién es el decisor, qué relación existe con el recomendante y qué información fue ya transmitida, sin asumir que el referido ha pedido vender); captación digital inbound (web, contenido, formularios que no prometan "valor exacto en 30 segundos" y que recojan solo los datos necesarios); prospección directa y llamadas (guion con presentación identificable, motivo específico, propuesta limitada y pregunta abierta, sin afirmar que existe comprador sin poder identificar una necesidad real); y networking local con administradores de fincas, notarios, arquitectos, abogados, asesores fiscales, bancos e interioristas, evitando remuneraciones opacas o recomendaciones condicionadas por comisiones no comunicadas.

## Control y registro

En cada canal, la agencia debe registrar origen, fecha y base de cada contacto en el CRM, eliminar o bloquear comunicaciones cuando exista oposición o falta de finalidad, y evitar que el registro se convierta en una lista eterna de personas que nunca solicitaron servicios. La prueba de calidad de una campaña de prospección es sencilla: el mensaje debe poder mostrarse públicamente sin avergonzar a la persona que lo recibió.`,
      easyExplanation:
        "Antes de tocar la puerta de un propietario, el agente tiene que saber en qué zonas y con qué tipo de vivienda puede trabajar bien, y tener una idea aproximada de precios basada en datos reales, no en intuición. Contactar a alguien está bien si se hace con respeto: sin presionar, sin usar información sensible (una herencia, un divorcio) como excusa, y dejando siempre claro quién eres y para qué llamas. Cada contacto se anota para no repetir errores ni molestar a quien ya dijo que no.",
      balearExample:
        "Una agencia de Manacor decide especializarse en dos microzonas: el casco antiguo (viviendas de reforma, comunidad de vecinos, comprador local) y las urbanizaciones cercanas a Porto Cristo (segunda residencia, comprador alemán y británico, necesidad de material bilingüe). Al recibir un referido de un administrador de fincas sobre un piso en el casco antiguo, el agente llama primero para confirmar quién decide vender realmente —el hijo que vive en Palma, no el administrador— y solo entonces ofrece una revisión de documentación, sin mencionar en detalle al administrador sin su permiso.",
      keyConcepts: [
        "contacto vs. oportunidad vs. captación activa",
        "área de influencia",
        "precio pedido / anunciado / de cierre / valor fiscal",
        "prospección ética",
        "referido y recomendación",
        "captación digital inbound",
        "networking local y prescriptores",
        "CRM de prospección"
      ],
      frequentErrors: [
        "Mezclar contactos, oportunidades y captaciones activas en el mismo listado, generando inventario ficticio",
        "Usar herencias, separaciones o impagos como gancho de contacto invasivo",
        "Prometer una cita o un comprador sin haber verificado interés real",
        "Tratar un referido como si ya hubiera aceptado vender o hubiera autorizado compartir información",
        "Segmentar el área de influencia por nacionalidad o edad en lugar de por necesidades y condiciones de operación"
      ],
      examples: [
        {
          id: "m15-l1-ex1",
          title: "Llamada de prospección directa",
          scenario: "El agente telefonea a un propietario de un piso publicado hace tiempo en otro portal",
          application:
            "Se identifica, explica el motivo (analizar la demanda de esa calle), y si el propietario dice que no quiere vender, pregunta si desea un informe o si existe una fecha de posible cambio, sin forzar una cita.",
          isBalearContext: false
        },
        {
          id: "m15-l1-ex2",
          title: "Formulario de valoración online",
          scenario: "Un propietario rellena un formulario pidiendo una estimación de precio de su vivienda",
          application:
            "El formulario solo pide dirección, tipología, superficie aproximada y plazo; se explica que es una estimación automatizada y se invita a una revisión presencial antes de hablar de precio de salida.",
          isBalearContext: false
        },
        {
          id: "m15-l1-ex3",
          title: "Referido de un notario",
          scenario: "Un notario menciona a un cliente que conoce una agencia seria",
          application:
            "El agente pide permiso antes de mencionar al notario en detalle y no convierte la referencia en una obligación de contratar.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l2",
      moduleId: "m15",
      title: "La primera entrevista y el diagnóstico documental del propietario",
      order: 2,
      summary:
        "Cómo estructurar la entrevista inicial con el propietario y comprobar quién puede vender realmente antes de hablar de precio o publicidad.",
      content: `La entrevista inicial con el propietario es una fase de diagnóstico, no una demostración de servicios. Debe estructurarse en orden: primero se escucha el objetivo y el plazo; después se comprende la historia del inmueble; luego se revisa titularidad, ocupación, comunidad, cargas, precio esperado y condiciones de venta. Empezar enseñando una presentación de servicios sin entender el problema hace que la propuesta parezca genérica y que cualquier precio ofrecido sea una negociación sin base. Las preguntas deben ser verificables: quién figura como titular, si existe hipoteca, si todos los copropietarios están de acuerdo, si hay arrendatario, si hay obras recientes, qué documentación se conserva y qué gastos quedan pendientes. Si el propietario no sabe responder algo, se registra la duda y quién puede confirmarla; la entrevista no es un interrogatorio, y el resultado debe ser un resumen de hechos, pendientes, riesgos y una propuesta de siguiente paso — nunca un compromiso de precio obtenido por presión.

## Quién puede vender: identidad, titularidad y capacidad

Antes de hablar de marketing o precio hay que confirmar quién puede contratar a la agencia y quién podrá firmar una reserva, unas arras o la escritura. La nota simple y la documentación identificativa sirven para una primera comprobación. El agente debe detectar si quien contacta es titular, cotitular, usufructuario, nudo propietario, heredero, apoderado, administrador societario o simple familiar que ayuda — cada posición tiene límites distintos, y vivir en la vivienda, pagar sus gastos o tener llaves no acredita por sí solo facultad de disposición. En un matrimonio, una pareja o una comunidad de bienes o herencia, no debe presuponerse que basta una firma: si hay copropietarios, hay que explicar desde el inicio que el encargo y la estrategia requieren coordinación; si hay vivienda habitual familiar o titularidad ganancial, se identifica el alcance del consentimiento necesario con el asesoramiento jurídico o notarial correspondiente. No es necesario resolver todos los conflictos civiles para captar, pero sí evitar anunciar como disponible una finca cuya venta depende de decisiones no adoptadas; cuando exista desacuerdo entre titulares, herencia no adjudicada, incapacidad, poder dudoso o embargo, se debe limitar o rechazar el encargo hasta tener una estructura clara.

## Copropiedad, herencias, sociedades y representación

Los expedientes con varios titulares requieren más coordinación, no más promesas. En copropiedad hay que identificar cuotas, derechos de uso, posibles retractos, acuerdos internos y voluntad de todos los titulares; en herencias, distinguir expectativa de heredar, aceptación, adjudicación y posterior inscripción — no debe anunciarse "listo para escriturar" sin comprobarlo. En sociedades hay que pedir información suficiente sobre denominación, NIF, administrador o apoderado y poder de representación vigente; si existe cadena societaria compleja o titularidad real no clara, procede un control reforzado de prevención de blanqueo. Cuando interviene un apoderado, no basta con la foto de un poder antiguo: hay que comprobar vigencia, alcance y posibilidad de autocontrato; si el propietario actúa desde el extranjero, conviene anticipar apostilla, traducción y coordinación con notaría, porque la previsión evita retrasos costosos en reservas y firmas.

## Documentación mínima y diagnóstico físico antes de anunciar

Una ficha de captación debe contener documentación suficiente para describir el activo con prudencia y detectar pendientes críticos antes de invertir presupuesto de marketing. El núcleo suele incluir: escritura o título, nota simple reciente, referencia catastral y certificación descriptiva y gráfica, recibo de IBI, certificado de eficiencia energética cuando corresponda, información de comunidad, planos disponibles, cédula o título de habitabilidad en Baleares cuando proceda, y documentación de cargas, licencias u obras si afectan a la comercialización. No todos los documentos tienen el mismo valor: la nota simple informa de titularidad y cargas inscritas pero no sustituye la comprobación física o urbanística; el Catastro describe una realidad administrativa pero no asegura por sí solo que una construcción esté legalizada; un certificado energético informa sobre eficiencia, no acredita habitabilidad ni ausencia de patologías. El diagnóstico físico compara escritura, nota simple, Catastro, plano y realidad visible, prestando atención a cerramientos, ampliaciones, terrazas cerradas, anexos, piscinas, cambios de uso, placas solares, pozos, almacenes, ocupación de elementos comunes y obras recientes; una discrepancia no significa automáticamente ilegalidad, pero sí una cuestión que debe analizarse antes de afirmar que el inmueble tiene determinada superficie o posibilidad de uso.`,
      easyExplanation:
        "Antes de fijar un precio o hacer un cartel, el agente tiene que averiguar de quién es realmente la vivienda y si esa persona puede venderla sola o necesita el acuerdo de más gente (hermanos, cónyuge, otros herederos). También hay que reunir los papeles básicos —escritura, nota simple, catastro, certificado energético— y comparar lo que dicen esos papeles con lo que se ve en la vivienda, porque un papel no dice toda la verdad por sí solo.",
      balearExample:
        "En Sóller, tres hermanos heredan el piso de su madre fallecida. Uno vive en Alemania, otro usa la vivienda varios meses al año y el tercero insiste en anunciarla ya \"porque está todo hablado\". El agente pide el testamento o declaración de herederos, la aceptación y adjudicación, y explica que no puede publicar el inmueble como listo para escritura hasta que la cadena de titularidad permita inscribirla, proponiendo mientras tanto un borrador de encargo condicionado.",
      keyConcepts: [
        "entrevista de diagnóstico",
        "titular / cotitular / usufructuario / nudo propietario",
        "poder de representación y vigencia",
        "copropiedad y herencia no adjudicada",
        "documentación mínima del inmueble",
        "nota simple vs. Catastro vs. certificado energético",
        "diagnóstico físico y coherencia documental",
        "cédula/título de habitabilidad en Baleares"
      ],
      frequentErrors: [
        "Empezar la reunión presentando servicios antes de entender la situación del propietario",
        "Presuponer que basta una firma cuando hay copropietarios o cónyuges",
        "Aceptar un poder sin comprobar su vigencia y alcance",
        "Anunciar el inmueble como 'listo para escriturar' con una herencia sin adjudicar",
        "Confundir un dato del Catastro o un certificado energético con una garantía de legalidad o habitabilidad"
      ],
      examples: [
        {
          id: "m15-l2-ex1",
          title: "Reunión inicial bien estructurada",
          scenario: "Primera visita a un propietario en Palma",
          application:
            "El agente pregunta primero por objetivo y plazo, después reconstruye la historia del inmueble y solo al final pide documentación, explicando por qué se necesita cada papel.",
          isBalearContext: true
        },
        {
          id: "m15-l2-ex2",
          title: "Poder desde el extranjero",
          scenario: "Un propietario reside en Reino Unido y apodera a un familiar en Mallorca",
          application:
            "Se comprueba vigencia y alcance del poder, se anticipa la necesidad de apostilla y traducción, y se coordina con la notaría antes de fijar fecha de firma.",
          isBalearContext: true
        },
        {
          id: "m15-l2-ex3",
          title: "Discrepancia de superficie",
          scenario: "El Catastro indica 120 m² pero la escritura y el plano muestran 95 m²",
          application:
            "El agente no anuncia ninguna cifra sin aclarar la discrepancia y explica al propietario que se debe verificar antes de publicar.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l3",
      moduleId: "m15",
      title: "Valoración de captación, motivación del propietario y propuesta de valor",
      order: 3,
      summary:
        "Cómo construir un rango de precio defendible, entender la motivación real del propietario y transformar ambos en una propuesta de servicio personalizada.",
      content: `La valoración inicial de captación es una recomendación comercial, no una tasación hipotecaria, pericial ni fiscal, y debe apoyarse en datos, explicar su alcance y distinguirse claramente de esos otros valores. Parte de comparables y se ajusta por factores relevantes: superficie útil y construida, planta, ascensor, estado, orientación, luz, terraza, plaza de garaje, trastero, gastos comunitarios, eficiencia, vistas, ubicación, ocupación, cargas, necesidad de reforma, tipología y uso permitido. Usar solo el precio por metro cuadrado puede ocultar diferencias esenciales entre activos. La propuesta correcta presenta un rango y una estrategia: el rango muestra incertidumbre razonable; la estrategia explica precio de lanzamiento, umbral de revisión, perfil de demanda y acciones a adoptar según la respuesta del mercado. Cuando el propietario pide un precio incompatible, no basta con decir "no se venderá": hay que demostrar el efecto de la sobreexposición, la pérdida de novedad y la comparación con alternativas reales, guardando la muestra, las fechas, las exclusiones y las hipótesis utilizadas, porque nunca se promete que el inmueble se venderá por la cifra propuesta ni que el comprador obtendrá financiación — esos resultados dependen de factores externos.

## Motivación, plazo y escenarios de salida

El precio no se decide de forma aislada del plazo. Dos propietarios con el mismo inmueble pueden necesitar estrategias diferentes si uno debe cerrar en tres meses y otro puede esperar un año. El agente explora la motivación sin invadir: cambio de residencia, compra vinculada, liberación de deuda, reparto hereditario, separación, inversión o simplemente oportunidad. Preguntar qué ocurrirá si no se vende en el plazo esperado, si existe otra vivienda, si hay financiación asociada y quién toma la decisión ayuda a definir condiciones sin presionar al propietario. Estas respuestas se convierten en tres escenarios: venta rápida, venta equilibrada y venta de exposición prolongada, cada uno con precio, público objetivo, inversión comercial y margen de negociación explicados. Este mapa de escenarios reduce conflictos posteriores porque el propietario entiende que precio y plazo son variables conectadas, no promesas independientes; las prioridades declaradas (fecha, privacidad, permanencia temporal, venta con muebles, necesidad de alquiler posterior, condición de compra o reserva mínima) deben documentarse y, si cambian, el encargo y el plan deben actualizarse de forma expresa.

## Diseñar la propuesta de valor de captación

La propuesta de valor no es una lista de portales ni una promesa de "vender más caro": debe explicar qué trabajo realizará la agencia, qué decisiones acompañará y qué evidencia entregará. Se describe el servicio por fases —diagnóstico, documentación, valoración, puesta a punto, producción de contenido, publicación, cualificación de interesados, visitas, ofertas, coordinación de firma y posventa— indicando para cada fase responsables, entregables, dependencias y límites. La personalización debe responder al activo y al cliente sin inventar servicios: una vivienda vacía puede beneficiarse de reportaje, plano y visita flexible; una vivienda ocupada requiere protocolo de privacidad y horarios; una finca rústica necesita más documentación técnica; una propiedad de alto valor puede exigir distribución internacional y material multilingüe. La propuesta incluye también el valor de decir "no": si el inmueble no puede anunciarse aún, la propuesta puede ser una fase previa de regularización documental o preparación de mercado, y aceptar un encargo para publicarlo inmediatamente cuando faltan elementos esenciales crea un conflicto futuro y degrada el servicio.`,
      easyExplanation:
        "El precio de salida no es un número mágico: se calcula comparando la vivienda con otras parecidas y ajustando por sus características (estado, luz, vistas, gastos). Hay que preguntarle al propietario con calma para qué necesita vender y en qué plazo, porque eso cambia la estrategia de precio y de publicidad. Y la propuesta que se le entrega no puede ser solo \"la publicamos en varios portales\": tiene que explicar paso a paso qué va a hacer la agencia y qué recibirá el propietario a cambio.",
      balearExample:
        "Un matrimonio en Pollença necesita vender su casa en cuatro meses para comprar otra vivienda vinculada a esa venta. El agente presenta un rango de precio con tres escenarios: uno agresivo con alto riesgo de no cerrar a tiempo, uno equilibrado con probabilidad razonable de cierre en el plazo, y uno de exposición prolongada con mejor precio pero riesgo de no cumplir el plazo. Se documenta la prioridad declarada (plazo antes que precio máximo) y se ajusta la propuesta de marketing a ese objetivo.",
      keyConcepts: [
        "valoración de captación vs. tasación hipotecaria/pericial/fiscal",
        "rango de precio y estrategia de lanzamiento",
        "comparables ajustados por factores relevantes",
        "motivación del propietario y plazo real",
        "escenarios de venta rápida/equilibrada/prolongada",
        "propuesta de valor por fases",
        "el valor de decir no"
      ],
      frequentErrors: [
        "Prometer que el inmueble se venderá por la cifra propuesta o que el comprador obtendrá financiación",
        "Valorar solo con el precio por metro cuadrado sin ajustar por factores relevantes",
        "Ignorar el plazo real del propietario al diseñar la estrategia de precio",
        "Presentar la propuesta de captación como una simple lista de portales sin fases ni responsables",
        "Aceptar publicar de inmediato un inmueble al que le faltan elementos documentales esenciales"
      ],
      examples: [
        {
          id: "m15-l3-ex1",
          title: "Rango de precio defendible",
          scenario: "Comparables de un apartamento en Palma",
          application:
            "Se presenta un rango con fechas y exclusiones de la muestra utilizada, en lugar de una cifra única, y se programa una revisión de precio basada en señales de mercado, no en opiniones aisladas.",
          isBalearContext: true
        },
        {
          id: "m15-l3-ex2",
          title: "Tres escenarios de venta",
          scenario: "Propietario indeciso sobre plazo",
          application:
            "El agente explica precio, público objetivo e inversión comercial para venta rápida, equilibrada y de exposición prolongada, dejando que el propietario decida con esa información.",
          isBalearContext: false
        },
        {
          id: "m15-l3-ex3",
          title: "Propuesta de valor personalizada",
          scenario: "Finca rústica con vivienda y anexos",
          application:
            "La propuesta incluye una fase previa de documentación técnica antes de publicitar, en lugar de anunciar de inmediato.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l4",
      moduleId: "m15",
      title: "La hoja de encargo, la exclusividad y las condiciones económicas",
      order: 4,
      summary:
        "Qué debe contener una hoja de encargo, cuándo la exclusividad aporta valor real y cómo comunicar honorarios de forma transparente.",
      content: `La hoja de encargo organiza la relación profesional entre agencia y propietario y debe reducir ambigüedades sobre inmueble, representación, precio, honorarios, plazo y uso de la información. Aunque la contratación puede tener libertad de forma (principio de libertad de pactos del Código Civil), trabajar por escrito identifica a las partes y su capacidad, describe el inmueble con datos verificables, señala si existe exclusividad, fija el precio de comercialización, define honorarios e impuestos, regula duración y terminación, autoriza los tratamientos necesarios de datos y establece cómo se comunicarán ofertas y modificaciones. El encargo de intermediación no debe confundirse con una garantía de venta ni con una autorización ilimitada: salvo poder expreso, la agencia no firma ni acepta en nombre del propietario. Los anexos permiten actualizar datos sin reescribir todo el contrato: lista documental, autorización de fotografías y llaves si procede, inventario de mobiliario, declaración de información facilitada y plan de precio, dando trazabilidad a cambios relevantes. Una plantilla debe adaptarse a la titularidad, el uso y las condiciones concretas del inmueble; usarla sin adaptar es una fuente habitual de fricción cuando aparece la primera oferta o la primera discrepancia.

## Exclusividad: cuándo aporta valor y cómo se justifica

La exclusiva es una forma de organizar responsabilidad, inversión y comunicación — no una obligación moral del propietario ni una excusa para limitar su libertad sin contraprestación clara. Puede ser razonable cuando la agencia asume un plan identificable: preparación documental, contenido profesional, inversión publicitaria, coordinación de visitas, reporting y seguimiento. El propietario debe comprender qué recibe a cambio, cuánto dura el compromiso, cómo puede revisarse el precio y qué ocurre si encuentra comprador por su cuenta o decide retirar la propiedad. La exclusiva funciona mal si se firma solo para "bloquear" inventario sin actividad, si la duración es desproporcionada, si no existe canal de comunicación o si la cláusula de comisión se explica después de la firma. Se revisa en hitos: primera semana, primer mes, recepción de feedback, cambios de mercado y revisión de precio; si la agencia no cumple el plan acordado, el propietario debe tener una vía clara de comunicación y solución.

## Sin exclusiva, colaboración entre agencias y cartera compartida

Un encargo abierto puede ser adecuado, pero requiere más control de información, precio y relación con otros profesionales. Cuando varios agentes comercializan la misma vivienda, aumenta el riesgo de anuncios incoherentes, precios distintos, promesas contradictorias y confusión sobre quién representa a quién. La colaboración profesional necesita reglas: identidad de las partes, reparto de honorarios, confidencialidad, reconocimiento de la fuente del comprador, comunicación de visitas, protección de datos y mecanismo de resolución de conflictos; no debe enviarse toda la documentación de un propietario a un tercero sin base ni autorización. Una cartera compartida puede mejorar el alcance en Mallorca, especialmente con comprador internacional o producto singular, pero el propietario tiene derecho a saber si habrá otros agentes y qué calidad de información recibirán, y la agencia principal conserva el deber de coordinación si así se ha pactado.

## Honorarios, gastos y transparencia económica

La comisión debe ser comprensible antes de que el propietario se comprometa; la ambigüedad sobre quién paga, cuándo se devenga y qué incluye es una de las causas más evitables de reclamación. Debe explicarse el importe o porcentaje, impuestos aplicables, base de cálculo, momento de devengo, servicios incluidos, gastos extraordinarios, condiciones de colaboración y efectos de retirada o venta a un interesado ya presentado. No debe plantearse la retribución como una garantía de resultado si no lo es, ni ocultarse que un servicio adicional tiene coste, ni mezclar fondos del cliente con honorarios o gastos de la agencia. La transparencia no consiste en una tarifa larga, sino en que el cliente pueda contestar cuatro preguntas: cuánto, por qué, cuándo y qué pasa si la venta no llega a firmarse; si no puede responderlas después de la reunión, la explicación no fue suficiente.

## Privacidad, llaves, fotografías y autorización de uso

La captación genera datos, imágenes, planos, llaves y hábitos de vida del propietario. Tratarlo como simple material de marketing expone tanto al cliente como a la agencia. Debe determinarse qué datos son necesarios para ejecutar el encargo, limitar el acceso por rol, y no compartir carpetas completas por mensajería abierta. Una fotografía puede revelar objetos personales, rutinas, dispositivos de seguridad, menores o información patrimonial y debe revisarse antes de publicar. La autorización de imágenes y marketing debe describir finalidad, canales, plazo razonable, uso de planos, vídeos o tours virtuales y protocolo de retirada; si el inmueble está ocupado, se coordina con quienes viven allí y se acuerdan horarios y zonas excluidas. Las llaves requieren registro de entrega, duplicado, devolución y acceso, y nunca deben circular sin control en el equipo.`,
      easyExplanation:
        "La hoja de encargo es el papel que fija las reglas del juego entre el propietario y la agencia: qué se vende, a qué precio, cuánto cobra la agencia y durante cuánto tiempo. Firmar en exclusiva solo tiene sentido si la agencia realmente hace un trabajo extra a cambio (fotos profesionales, publicidad, informes); si no hay ese servicio, no debería pedirse exclusividad. Los honorarios deben explicarse con claridad total antes de firmar: cuánto, cuándo se cobra y qué pasa si la venta no se cierra. Y todo lo que se genera durante la venta —fotos, llaves, datos— hay que tratarlo con cuidado porque puede ser información muy personal.",
      balearExample:
        "Un propietario en Calvià acepta una exclusiva de seis meses después de que la agencia le explique por escrito el plan: fotografía profesional, plano, publicación en tres portales, visitas coordinadas y un informe quincenal. A los tres meses se revisa el precio en un hito acordado porque el número de visitas es bajo; el propietario, al entender el plan desde el inicio, acepta ajustar el precio sin sentirse presionado.",
      keyConcepts: [
        "hoja de encargo y sus bloques esenciales",
        "libertad de pactos (Código Civil)",
        "exclusividad vs. encargo abierto",
        "colaboración entre agencias y cartera compartida",
        "honorarios: importe, devengo y condiciones",
        "autorización de imágenes y datos",
        "registro y control de llaves"
      ],
      frequentErrors: [
        "Usar una plantilla de encargo sin adaptarla a la titularidad, uso y condiciones reales del inmueble",
        "Firmar una exclusiva para 'bloquear' el inventario sin ofrecer un plan de trabajo medible",
        "Explicar la cláusula de comisión después de que el propietario ya haya firmado",
        "Compartir toda la documentación de un propietario con otro agente sin autorización",
        "Publicar fotografías sin revisar si muestran objetos personales, menores o elementos de seguridad"
      ],
      examples: [
        {
          id: "m15-l4-ex1",
          title: "Revisión de exclusiva por hitos",
          scenario: "Exclusiva de cuatro meses en un piso en Palma",
          application:
            "Se acuerdan revisiones en la primera semana, el primer mes y ante cambios de mercado, documentando cada decisión de mantener o ajustar el precio.",
          isBalearContext: true
        },
        {
          id: "m15-l4-ex2",
          title: "Colaboración entre agencias",
          scenario: "Dos agencias comercializan el mismo inmueble sin exclusiva",
          application:
            "Se firma un acuerdo de colaboración que fija reparto de honorarios, reconocimiento de la fuente del comprador y protocolo de visitas antes de compartir cualquier documento.",
          isBalearContext: false
        },
        {
          id: "m15-l4-ex3",
          title: "Explicación de honorarios",
          scenario: "Reunión de cierre de encargo",
          application:
            "El agente entrega por escrito el importe, el momento de devengo, los gastos extraordinarios y qué ocurre si el propietario retira el inmueble antes de la firma.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l5",
      moduleId: "m15",
      title: "Publicidad, lanzamiento y gestión activa de la cartera",
      order: 5,
      summary:
        "Cómo preparar la salida al mercado, informar al propietario durante la comercialización, gestionar precio y sostener indicadores de calidad de la cartera.",
      content: `Antes de publicar, el propietario y la agencia deben acordar qué se ofrece, con qué condiciones y qué información debe aparecer o no puede omitirse. Esa información comercial forma parte del expediente: precio, anexos, mobiliario, disponibilidad, ocupación, visitas, necesidad de financiación, cargas que se cancelarán, comunidad, eficiencia energética, condición de vivienda protegida si existe, y cualquier limitación de uso relevante. Un anuncio no necesita reproducir toda la escritura, pero no puede construir una expectativa incompatible con el inmueble: expresiones como "turístico", "ampliable", "vistas garantizadas" o "libre de cargas" requieren soporte documental. En vivienda de consumo, el Real Decreto 515/1989 y el marco general de consumo refuerzan la exigencia de información veraz y suficiente, y la Ley 12/2023, por el derecho a la vivienda, reconoce el derecho a recibir información completa, objetiva, veraz, clara, comprensible y accesible sobre la vivienda; en una captación, ese estándar se traduce en disciplina documental antes del marketing.

## Preparar la salida al mercado

El lanzamiento debe ser el resultado de un expediente listo, no el momento en que se descubren sus carencias. Antes de publicar se revisa título, precio, texto, etiqueta energética cuando corresponda, anexo de gastos, disponibilidad de visitas, estrategia de respuesta y responsable de actualización; si una plataforma obliga a campos que no pueden confirmarse, se usa la opción prudente o se espera a tener documentación. Se prepara una carpeta de respuesta para compradores cualificados —nota simple o información registral tratada con prudencia, planos, gastos, información energética, comunidad, reformas, cédula cuando proceda, inventario y explicaciones de limitaciones— sin entregar documentos sensibles a cualquier curioso. Se define también un protocolo de visita desde el inicio: franjas horarias, aviso previo, acompañamiento, registro de asistentes, reglas para fotografías, mascotas, menores, llaves, seguridad y feedback, porque un lanzamiento organizado reduce cancelaciones y protege al propietario que continúa viviendo en la vivienda.

## Reporting, revisión de estrategia y gestión de precio

El propietario no necesita recibir una lista de acciones sin contexto; necesita entender qué está ocurriendo, qué se ha aprendido y qué decisión se recomienda. Un informe útil combina actividad y calidad: canales activos, consultas, visitas, perfil de interesados, preguntas repetidas, objeciones, comparación con competencia, evolución de precio, documentos solicitados, feedback y acciones para la siguiente etapa, distinguiendo datos observados de interpretación profesional (una visita no equivale a una oferta; muchas visitas sin avance pueden indicar precio, producto o presentación). La cadencia puede ser semanal al lanzamiento y quincenal durante la estabilización, con frecuencia extraordinaria ante oferta, incidencia documental o cambio de mercado. Un precio de salida no es una sentencia: revisar precio no significa simplemente bajarlo, puede implicar corregir datos, mejorar presentación, ajustar condiciones de venta, separar anexos, resolver documentación, modificar el canal o reconsiderar el plazo; una reducción sin estrategia puede transmitir debilidad sin aumentar conversión, pero tampoco conviene prolongar la exposición si el mercado muestra de forma consistente que el precio no atrae al público objetivo. Si el propietario se niega a cualquier revisión razonable, la agencia explica hechos, escenario y consecuencias, documenta la decisión y, si el anuncio se vuelve perjudicial para la imagen de la agencia o induce a error, propone retirada o terminación conforme al encargo.

## Propietarios difíciles, KPIs, CRM y cierre del encargo

La captación exige saber gestionar el desacuerdo sin perder el respeto: un propietario puede estar emocionalmente vinculado al inmueble, condicionado por un vecino, una compra futura o una necesidad económica, y la respuesta correcta es escuchar la expectativa, mostrar datos y establecer límites profesionales ante instrucciones incompatibles con consumo, legalidad o ética. Un CRM de captación bien diseñado usa estados claros (contacto, oportunidad, visita de captación, documentación solicitada, valoración en preparación, propuesta entregada, encargo pendiente, captación activa, pausada, retirada, vendida o no captada), con fecha, responsable y motivo en cada cambio, permitiendo así medir conversiones y proteger la privacidad mediante permisos por rol. Los KPIs no son "administración": controlan el embudo (contactos por fuente, conversaciones cualificadas, citas de captación, propuestas entregadas, encargos firmados, porcentaje de exclusivas, tiempo hasta lanzamiento, expedientes completos, revisión de precio, visitas, ofertas, retiradas y cierres) y también riesgos (propiedades anunciadas sin documento clave, discrepancias de superficie, cambios de precio no aprobados, duplicidad de anuncios, quejas, leads tratados sin base clara). Al finalizar cualquier encargo, se confirma fecha, motivo, estado de honorarios, devolución de llaves, retirada de anuncios, archivos compartidos y acceso a tours, fotografías y datos de interesados, informando al propietario de lo que se conservará por obligación o defensa de derechos y de lo que se eliminará conforme a la política aplicable; la calidad se demuestra precisamente cuando la relación termina, ya sea con venta o sin ella.`,
      easyExplanation:
        "Antes de publicar un anuncio hay que tener todos los papeles listos y estar seguro de que lo que se escribe es verdad (no prometer \"vistas garantizadas\" si no es cierto). Durante la venta, hay que mandarle al propietario informes regulares que expliquen qué está pasando, no solo un listado de tareas. Bajar el precio no es un fracaso: a veces hay que corregir información o mejorar las fotos en lugar de bajar el número. Y cuando la relación termina —con venta o sin ella— hay que cerrarla bien: devolver llaves, quitar anuncios y explicar qué datos se guardan y cuáles se borran.",
      balearExample:
        "En Manacor, una finca rústica con almacén, piscina y varios cerramientos se anuncia con el propietario pidiendo el texto \"finca ampliable, ideal para turismo y eventos\". El agente rechaza esa redacción porque no hay licencia ni informe técnico que la respalde, y propone en su lugar \"sujeto a comprobación técnica y administrativa\" hasta resolver la discrepancia documental con Catastro.",
      keyConcepts: [
        "Real Decreto 515/1989",
        "Ley 12/2023 (derecho a la vivienda)",
        "condiciones de comercialización y límites del anuncio",
        "protocolo de visitas",
        "reporting periódico",
        "gestión de precio (reposicionamiento vs. retirada)",
        "CRM con estados y trazabilidad",
        "KPIs de captación",
        "cierre y checklist de retirada del encargo"
      ],
      frequentErrors: [
        "Publicar superficies, anexos o usos sin identificar su fuente documental",
        "Usar superlativos legales, turísticos o técnicos sin respaldo ('libre de cargas', 'ampliable')",
        "Reducir el precio por nerviosismo tras pocos días sin analizar datos",
        "Prolongar la exposición cuando el mercado muestra de forma consistente que el precio no funciona",
        "Cerrar un encargo sin checklist de devolución de llaves, retirada de anuncios y archivo de documentos"
      ],
      examples: [
        {
          id: "m15-l5-ex1",
          title: "Carpeta de respuesta para compradores",
          scenario: "Lanzamiento de un piso en Palma",
          application:
            "Se prepara nota simple tratada con prudencia, planos, gastos e información energética, entregable solo a interesados cualificados, no a cualquier curioso.",
          isBalearContext: true
        },
        {
          id: "m15-l5-ex2",
          title: "Informe quincenal de captación",
          scenario: "Mes de estabilización tras el lanzamiento",
          application:
            "El informe distingue visitas de ofertas reales y explica por qué se mantiene el precio pese a pocas ofertas, evitando presión innecesaria.",
          isBalearContext: false
        },
        {
          id: "m15-l5-ex3",
          title: "Cierre de un encargo no vendido",
          scenario: "El propietario retira la propiedad tras seis meses",
          application:
            "Se sigue un checklist de retirada: llaves, anuncios, archivos compartidos y comunicación clara de qué datos se conservan y cuáles se eliminan.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l6",
      moduleId: "m15",
      title: "Particularidades de Mallorca, propietario no residente y prevención de blanqueo",
      order: 6,
      summary:
        "Factores territoriales propios de Mallorca, gestión reforzada con propietarios no residentes y primer filtro de prevención de blanqueo en la captación.",
      content: `Captar en Mallorca exige anticipar factores que en otros mercados pueden aparecer más tarde: producto internacional, costa, rústico, estacionalidad, régimen de comunidad y heterogeneidad municipal. No debe tratarse la isla como un relato uniforme: una vivienda en Palma, una finca en el Pla, un apartamento en Calvià, una casa en la Serra o un activo en un núcleo costero tienen perfiles de demanda, regulación y costes distintos. El diagnóstico debe incluir municipio, planeamiento, acceso, servicios, movilidad, comunidad, agua, estado de conservación y sensibilidad ambiental cuando pueda afectar a la decisión. Los compradores internacionales pueden requerir material bilingüe, visita remota y coordinación de NIF, cuentas, financiación, fiscalidad y firma, pero eso no significa que la agencia deba prometer asesoramiento integral sin equipo propio: la buena práctica es explicar qué puede asumir la agencia y qué debe resolver notaría, abogado, asesor fiscal, entidad financiera o técnico. La comercialización turística, el suelo rústico, las piscinas, anexos, terrazas y la costa requieren una cautela especial: no deben aceptarse frases como "ideal Airbnb", "finca legalizable", "ampliable" o "vistas eternas" sin soporte, porque en Mallorca ese lenguaje puede activar expectativas que dependen de múltiples capas administrativas y comunitarias. El conocimiento local se demuestra en las preguntas que se hacen antes de anunciar, no en repetir nombres de playas o municipios.

## Captación de propietario no residente

Un propietario no residente necesita más visibilidad y más control, porque la distancia amplifica el riesgo de malentendidos sobre estado, acceso, llaves, ofertas, gastos y firma. Debe acordarse un canal principal de comunicación, zona horaria, idioma, frecuencia de reporte, persona de contacto local, custodia de llaves y un sistema de aprobaciones que evite una cadena de mensajes contradictorios; no debe darse por válida una instrucción económica relevante recibida desde un correo nuevo o un mensaje informal sin verificación adicional, porque los fraudes de cambio de cuenta y suplantación aprovechan precisamente relaciones a distancia. Debe explicarse la documentación que se necesitará para vender: identificación, titularidad, representación si firma otra persona, certificados, información fiscal y coordinación con notaría; si el propietario reside fuera de España, se advierte de que puede necesitar apoyo fiscal y de que ciertos trámites exigen anticipación. La visita remota no sustituye una inspección profesional del estado del inmueble: se usa vídeo con fecha, inventario, registro de incidencias y, cuando proceda, apoyo de técnico o administrador, informando siempre con imagen fiel aunque eso implique informar de humedad, obras cercanas o necesidad de limpieza antes del lanzamiento. La distancia se gestiona con más evidencia, no con más mensajes: un propietario no residente compra tranquilidad mediante proceso.

## Prevención de blanqueo: primer filtro en captación

La captación es un punto temprano de prevención en materia de blanqueo de capitales. La agencia debe conocer a quién representa y, cuando corresponda, a quién actúa por cuenta de otro o controla una sociedad, comprobando coherencia entre titularidad registral, documentación, representación, precio, cuenta de destino y motivo de la venta. Una sociedad sin actividad clara, un poder complejo, urgencia extrema, pagos a terceros o instrucciones de confidencialidad inusuales no prueban por sí solas una irregularidad, pero justifican una revisión proporcional. El análisis se basa en riesgo objetivo y evidencia, no debe convertirse en una discriminación por origen, nacionalidad o patrimonio; en producto de alto valor o estructura compleja, se coordina con el responsable interno de prevención de blanqueo de capitales y financiación del terrorismo (PBC/FT), conforme a la Ley 10/2010, y se solicita la información necesaria antes de aceptar fondos, firmar reservas o comprometer una operación. Debe explicarse al cliente que ciertos documentos son parte de la relación profesional y que la agencia no puede aceptar instrucciones de pago opacas, manteniendo confidencialidad sobre controles internos y evitando comunicar que una operación está siendo objeto de análisis o reporte cuando la ley lo prohíbe.`,
      easyExplanation:
        "En Mallorca cada zona es distinta: no es lo mismo captar en Palma que en una finca rústica de Manacor o un apartamento junto al mar en Calvià, así que hay que adaptar preguntas y documentación a cada caso, sin prometer usos turísticos o ampliaciones sin comprobarlo. Si el propietario vive fuera de España, hay que ser más cuidadoso todavía: comprobar por un canal seguro cualquier cambio de cuenta bancaria y no fiarse de un correo nuevo sin verificarlo, porque ahí es donde ocurren las estafas. Y desde el primer contacto, el agente tiene que fijarse en señales raras (sociedades sin actividad, prisa excesiva, pagos a terceros) que podrían indicar un intento de blanquear dinero, sin por ello sospechar de alguien solo por su nacionalidad.",
      balearExample:
        "Una propietaria británica de una segunda residencia en Calvià firma el encargo a distancia. Días después llega un correo desde una dirección parecida a la suya pidiendo cambiar la cuenta bancaria para cualquier señal o precio, y solicitando que las visitas se hagan con una llave dejada a un vecino. El agente activa verificación independiente por el canal previamente acordado, no responde al mismo correo, y no entrega la llave sin registro formal, evitando así una posible suplantación.",
      keyConcepts: [
        "heterogeneidad territorial de Mallorca",
        "producto internacional y material bilingüe",
        "propietario no residente: canal, huso horario, aprobaciones",
        "verificación independiente de cambios de cuenta",
        "Ley 10/2010 de prevención de blanqueo de capitales",
        "PBC/FT: señales de riesgo objetivo",
        "titularidad real y estructura societaria compleja"
      ],
      frequentErrors: [
        "Tratar toda Mallorca como un mercado uniforme sin adaptar documentación a municipio y tipología",
        "Aceptar 'ideal Airbnb' o 'finca legalizable' sin soporte documental",
        "Dar por válido un cambio de cuenta bancaria comunicado solo por correo electrónico",
        "Entregar llaves sin registro ni responsable claro cuando el propietario reside en el extranjero",
        "Convertir la prevención de blanqueo en una sospecha basada en nacionalidad o patrimonio en lugar de en riesgo objetivo"
      ],
      examples: [
        {
          id: "m15-l6-ex1",
          title: "Adaptación al municipio",
          scenario: "Captación de una finca en el Pla de Mallorca frente a un piso en Palma",
          application:
            "Se ajusta el checklist documental y las preguntas de diagnóstico a la tipología (rústico vs. urbano) en lugar de aplicar el mismo guion en ambos casos.",
          isBalearContext: true
        },
        {
          id: "m15-l6-ex2",
          title: "Verificación de cambio de cuenta",
          scenario: "Correo sospechoso pidiendo nueva cuenta para señal",
          application:
            "El agente llama por el canal acordado inicialmente para confirmar la instrucción antes de aceptar cualquier pago o señal.",
          isBalearContext: false
        },
        {
          id: "m15-l6-ex3",
          title: "Señal de riesgo en captación",
          scenario: "Sociedad patrimonial sin actividad clara ofrece un inmueble de alto valor con urgencia extrema",
          application:
            "El agente escala la revisión al responsable interno de PBC/FT antes de aceptar fondos o firmar una reserva.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m15-l7",
      moduleId: "m15",
      title: "Herramientas de captación, checklist operativo y preparación al examen",
      order: 7,
      summary:
        "Herramientas prácticas para decidir, documentar y cerrar una captación, y cómo prepararse para las preguntas de examen sobre el módulo.",
      content: `El checklist operativo sirve para decidir si se acepta, se condiciona o se rechaza una oportunidad de captación, sin pretender sustituir los controles técnicos o jurídicos necesarios. Se organiza en cuatro bloques: primero, cliente (identidad, calidad en que actúa, titulares, decisores, motivo, plazo y canal de instrucciones); segundo, inmueble (dirección, referencia catastral, título, nota simple, ocupación, estado, anexos, comunidad, uso y documentos básicos); tercero, negocio (precio esperado, comparables, gastos, financiación, cargas, condiciones de venta y remuneración); cuarto, riesgo (pendiente registral, urbanístico, técnico, fiscal, consumo, PBC/FT o de datos). No se usa el checklist para aparentar que todo está resuelto: su valor es señalar huecos. Cada "no disponible" debe generar una acción, un responsable y una fecha; cuando el pendiente impide anunciar, se etiqueta como bloqueo, y cuando no lo impide pero debe informarse, se etiqueta como advertencia. Esta clasificación organiza tanto el expediente como el discurso comercial, y la decisión final debe ser una de tres: aceptar, aceptar condicionado o no aceptar — lo demás es dejar el riesgo sin dueño.

## Plantilla de reunión de captación y estructura de la hoja de encargo

Una reunión ordenada evita que información importante se pierda en la memoria. El acta de visita incluye fecha, asistentes, inmueble, objetivo declarado, plazo, precio esperado, ocupación, documentación mostrada, observaciones físicas, anexos, estado de comunidad, cargas conocidas, reformas, decisiones pendientes y autorizaciones iniciales, separando expresamente dato aportado por el propietario, documento visto y dato por confirmar; esa clasificación protege a ambas partes. El acta no es un contrato, pero crea una base objetiva para la propuesta posterior, y se envía tras la visita para confirmación, sin pedir una firma inmediata si la persona necesita revisar lo hablado. En paralelo, la hoja de encargo robusta se organiza en seis bloques: (1) identificación y capacidad de las partes; (2) descripción del inmueble, anexos, fuentes de superficie, situación de ocupación y documentación; (3) objeto del encargo, representación, precio y estrategia; (4) duración, exclusividad, colaboración, honorarios, gastos y devengo; (5) marketing, llaves, visitas, datos, fotografías, documentación y confidencialidad; (6) terminación, retirada de anuncios, devolución de llaves, tratamiento posterior de datos y resolución de incidencias. Antes de firmar, conviene repasar el contrato verbalmente preguntando al propietario qué entiende por exclusiva, cuándo cree que se cobra la comisión y qué información se publicará; si las respuestas muestran confusión, se corrige antes de obtener la firma, porque esa comprobación es más útil que una cláusula en letra pequeña. Una hoja de encargo sólida se puede explicar sin leerla; si no puede explicarse en lenguaje claro, debe simplificarse antes de usarla.

## Autoevaluación, resumen ejecutivo y fuentes de estudio

El módulo cierra con una batería de autoevaluación que exige identificar la decisión, el documento o la conducta profesional adecuada, no solo repetir una definición: entre otras, qué verificación falta antes de encargar la venta de una vivienda pedida por un familiar, qué tres datos deben diferenciarse al describir superficie, por qué un encargo abierto con varios agentes necesita control reforzado de precio y anuncios, qué debe incluir una propuesta de captación además de portales y fotografías, qué decisión procede cuando el propietario exige anunciar como turístico un inmueble sin título o habilitación confirmada, la diferencia entre valor de mercado, valor de referencia y tasación hipotecaria, qué cuatro preguntas debe poder responder el propietario sobre los honorarios, qué información debe quedar en un registro de llaves, cómo se gestiona un cambio de cuenta comunicado por correo de un propietario no residente, y un ejercicio de redacción de una advertencia prudente para un propietario que desea publicar una finca rústica como "ampliable y apta para eventos" sin informe técnico. La respuesta sólida sigue siempre la misma secuencia: identificar, comprobar, informar, documentar y decidir. El resumen ejecutivo del módulo recuerda que la captación profesional empieza con la selección del encargo, no con la firma: identifica decisores, comprende objetivo y plazo, verifica documentación, compara realidad y mercado, propone precio con método, define servicio y honorarios, regula autorización de marketing y conserva evidencia. Las fuentes de estudio y contraste citadas son: Código Civil (libertad de pactos, compraventa, arras y tradición); Real Decreto Legislativo 1/2007, texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios; Real Decreto 515/1989, sobre información en compraventa y arrendamiento de viviendas; Ley 12/2023, por el derecho a la vivienda; Ley 5/2018, de la vivienda de las Illes Balears; Ley Hipotecaria y fuentes del Colegio de Registradores; Consejo General del Notariado; RGPD, LOPDGDD y AEPD; y Ley 10/2010, de prevención de blanqueo de capitales. En una operación real siempre debe utilizarse la versión consolidada vigente de cada norma y verificar ordenanzas, planeamiento, Registro, Catastro y documentación técnica aplicables al inmueble concreto; este módulo es material de estudio y de primera orientación profesional, no sustituye el asesoramiento jurídico, fiscal, técnico o notarial.`,
      easyExplanation:
        "El checklist es una herramienta para decidir si aceptas, aceptas con condiciones, o rechazas una captación; si algo falta, se anota como \"bloqueo\" (impide anunciar) o \"advertencia\" (hay que avisar pero no impide seguir). La reunión con el propietario se resume en un acta que separa claramente lo que el propietario ha dicho de lo que hay documentado y de lo que falta por confirmar. Y antes de firmar el encargo, conviene preguntarle al propietario qué entiende él de la exclusiva y de la comisión: si no lo tiene claro, hay que explicarlo mejor antes de la firma, no después.",
      balearExample:
        "En Inca, un agente utiliza el checklist tras una primera visita y detecta que el inmueble tiene una piscina no reflejada en el Catastro (advertencia, no bloqueo) y una hipoteca no cancelada pendiente de confirmar (bloqueo hasta comprobar el importe pendiente). Documenta ambos puntos en el acta de visita, asigna responsable y fecha a cada uno, y solo entonces decide aceptar el encargo de forma condicionada.",
      keyConcepts: [
        "checklist de aceptación: cliente, inmueble, negocio, riesgo",
        "bloqueo vs. advertencia",
        "acta de visita: hecho / documento visto / pendiente",
        "estructura de seis bloques de la hoja de encargo",
        "repaso verbal antes de firmar",
        "resumen ejecutivo de la captación profesional",
        "fuentes normativas del módulo"
      ],
      frequentErrors: [
        "Usar el checklist para aparentar que todo está resuelto en lugar de para señalar huecos",
        "No asignar responsable y fecha a cada pendiente detectado",
        "Pedir la firma del acta de visita de forma inmediata sin dar tiempo a revisar lo hablado",
        "No repasar verbalmente con el propietario qué entiende por exclusiva y comisión antes de firmar",
        "Sustituir el asesoramiento jurídico, fiscal o técnico por la propia interpretación del agente"
      ],
      examples: [
        {
          id: "m15-l7-ex1",
          title: "Checklist con bloqueo y advertencia",
          scenario: "Visita de captación con hipoteca pendiente de cancelar",
          application:
            "Se etiqueta como bloqueo hasta confirmar importe pendiente y como advertencia la piscina no reflejada en Catastro, con responsable y fecha para cada punto.",
          isBalearContext: true
        },
        {
          id: "m15-l7-ex2",
          title: "Repaso verbal antes de firmar",
          scenario: "Cierre de la reunión de encargo",
          application:
            "El agente pregunta al propietario qué entiende por exclusiva y cuándo cree que se cobra la comisión; al detectar confusión, aclara antes de firmar.",
          isBalearContext: false
        },
        {
          id: "m15-l7-ex3",
          title: "Pregunta de autoevaluación aplicada",
          scenario: "Un familiar pide anunciar la vivienda de su madre 'porque ella está de acuerdo'",
          application:
            "El agente identifica que falta verificar la capacidad y titularidad reales antes de encargar la venta, siguiendo la secuencia identificar-comprobar-informar-documentar-decidir.",
          isBalearContext: false
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m15-e1",
      moduleId: "m15",
      type: "case",
      question:
        "Un propietario contacta indicando que quiere vender el piso de su madre fallecida \"porque está todo hablado con sus hermanos\". ¿Qué haces antes de aceptar el encargo?",
      expectedAnswer:
        "Solicitar testamento o declaración de herederos, aceptación y adjudicación; identificar a todos los decisores (hermanos); no anunciar el inmueble como disponible hasta comprobar la cadena de titularidad; proponer, si procede, un encargo condicionado.",
      explanation:
        "La captación en herencias no adjudicadas exige verificar quién puede realmente disponer del bien antes de comprometer precio o publicidad.",
      difficulty: "medium"
    },
    {
      id: "m15-e2",
      moduleId: "m15",
      type: "decision",
      question:
        "Un propietario exige anunciar su finca rústica como \"ampliable y apta para eventos\" sin informe técnico ni licencia. ¿Aceptas el encargo tal cual, lo condicionas o lo rechazas?",
      options: [
        "Aceptar tal cual porque el propietario insiste",
        "Condicionar el encargo a la verificación técnica y modificar el texto del anuncio",
        "Rechazar todo tipo de relación con el propietario"
      ],
      expectedAnswer: "b",
      explanation:
        "La agencia puede aceptar con condiciones (verificación documental) pero no puede publicitar afirmaciones sin soporte; rechazar totalmente no es necesario si el propietario acepta corregir el anuncio.",
      difficulty: "medium"
    },
    {
      id: "m15-e3",
      moduleId: "m15",
      type: "comprehension",
      question:
        "Explica la diferencia entre precio pedido, precio anunciado, precio de cierre y valor fiscal.",
      expectedAnswer:
        "Precio pedido es la expectativa inicial del propietario; precio anunciado es el que figura en publicidad; precio de cierre es el finalmente pactado en la operación; valor fiscal es una referencia administrativa (p. ej., para impuestos) que no equivale a valor de mercado.",
      explanation:
        "Confundir estos conceptos lleva a promesas de venta incompatibles con la realidad del mercado.",
      difficulty: "basic"
    },
    {
      id: "m15-e4",
      moduleId: "m15",
      type: "balear_scenario",
      question:
        "Una propietaria no residente en Reino Unido recibe, tras firmar el encargo, un correo desde una dirección parecida a la suya pidiendo cambiar la cuenta bancaria para cobrar cualquier señal, y solicita dejar una llave con un vecino. ¿Qué haces?",
      expectedAnswer:
        "Verificar la instrucción por el canal previamente acordado (no responder al mismo correo); no aceptar el cambio de cuenta sin confirmación independiente; no entregar la llave sin registro formal y responsable identificado.",
      explanation:
        "Los fraudes de suplantación y cambio de cuenta se aprovechan de la distancia; la seguridad exige verificación independiente, no desconfianza genérica.",
      difficulty: "advanced"
    },
    {
      id: "m15-e5",
      moduleId: "m15",
      type: "decision",
      question:
        "Un propietario pide una exclusiva de doce meses sin que la agencia ofrezca ningún servicio adicional identificable (sin fotografía profesional, sin plan de contenido, sin reporting). ¿Qué recomiendas?",
      options: [
        "Firmar igualmente porque el propietario lo pide",
        "No firmar la exclusiva en esas condiciones y ofrecer un encargo abierto o replantear el servicio con un plan medible",
        "Firmar la exclusiva pero sin comunicar la duración real"
      ],
      expectedAnswer: "b",
      explanation:
        "La exclusiva solo se justifica cuando existe una contraprestación de servicio identificable y medible; sin ella, imponerla sin explicación daña la relación y la reputación.",
      difficulty: "medium"
    },
    {
      id: "m15-e6",
      moduleId: "m15",
      type: "comprehension",
      question:
        "¿Qué cuatro preguntas debe poder responder el propietario después de que se le expliquen los honorarios?",
      expectedAnswer:
        "Cuánto se cobra, por qué se cobra esa cantidad, cuándo se devenga el pago, y qué ocurre si la venta no llega a firmarse.",
      explanation:
        "Estas cuatro preguntas son el estándar de transparencia económica exigido por el módulo antes de la firma del encargo.",
      difficulty: "basic"
    },
    {
      id: "m15-e7",
      moduleId: "m15",
      type: "case",
      question:
        "Durante el diagnóstico documental de un piso en Palma, el Catastro indica 120 m² pero la escritura y el plano muestran 95 m². El propietario insiste en anunciar 120 m² \"porque así lo dice el Catastro\".",
      expectedAnswer:
        "Explicar que el Catastro describe una realidad administrativa que no garantiza superficie real ni legalidad; no anunciar ninguna cifra sin resolver la discrepancia; documentar la diferencia y derivar a comprobación técnica si es necesario.",
      explanation:
        "Ningún documento por sí solo (nota simple, Catastro, certificado energético) sustituye la comprobación física y documental cruzada.",
      difficulty: "advanced"
    },
    {
      id: "m15-e8",
      moduleId: "m15",
      type: "decision",
      question:
        "Una sociedad patrimonial sin actividad económica clara ofrece en venta, con urgencia extrema, un inmueble de alto valor y pide que el pago de la señal se realice a una cuenta de un tercero no identificado en la operación. ¿Qué procede?",
      options: [
        "Aceptar la operación porque el precio es atractivo",
        "Escalar la revisión al responsable interno de PBC/FT y solicitar información adicional antes de aceptar fondos o firmar reserva",
        "Rechazar automáticamente por la nacionalidad de los socios"
      ],
      expectedAnswer: "b",
      explanation:
        "Las señales objetivas (sociedad sin actividad, urgencia, pago a tercero no identificado) justifican una revisión proporcional de prevención de blanqueo, sin recurrir a discriminación por origen o nacionalidad.",
      difficulty: "advanced"
    }
  ],
  quizQuestions: [
    {
      id: "m15-q1",
      question:
        "¿Cuál es la diferencia esencial entre un \"contacto\", una \"oportunidad\" y una \"captación activa\" según el módulo?",
      options: [
        "Son sinónimos usados indistintamente en el CRM",
        "Un contacto es una persona con datos e interés sin promesa; una oportunidad es un inmueble con necesidad potencial y acceso al decisor; una captación activa tiene encargo, documentación mínima y precio consensuado",
        "Solo la captación activa debe registrarse en el CRM",
        "La oportunidad siempre implica que existe ya un encargo firmado"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo distingue estas tres fases para evitar inventario ficticio y mezcla de fases (Ficha 02).",
      sourceModuleId: "m15",
      difficulty: "basic"
    },
    {
      id: "m15-q2",
      question:
        "¿Qué documento NO sustituye por sí solo a la comprobación física o urbanística de un inmueble?",
      options: [
        "Solo la nota simple",
        "Solo el Catastro",
        "La nota simple, el Catastro y el certificado energético, cada uno por separado",
        "Ninguno de los anteriores; basta con cualquiera de ellos"
      ],
      correctAnswerIndex: 2,
      explanation:
        "Cada documento responde a una pregunta distinta (titularidad y cargas, descripción administrativa, eficiencia energética) y ninguno acredita legalidad o habitabilidad por sí solo (Ficha 13-14).",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q3",
      question: "Según el módulo, ¿cuándo aporta valor real la exclusividad?",
      options: [
        "Siempre que el propietario lo solicite",
        "Cuando la agencia asume un plan identificable de preparación documental, contenido, inversión publicitaria, coordinación de visitas y seguimiento",
        "Únicamente en inmuebles de alto valor",
        "Nunca, la exclusividad no debe ofrecerse en Mallorca"
      ],
      correctAnswerIndex: 1,
      explanation:
        "La exclusiva es un pacto de responsabilidad compartida, no una obligación moral (Ficha 19).",
      sourceModuleId: "m15",
      difficulty: "basic"
    },
    {
      id: "m15-q4",
      question:
        "¿Qué normativa reconoce el derecho a recibir información completa, objetiva, veraz, clara, comprensible y accesible sobre la vivienda?",
      options: [
        "Ley Hipotecaria",
        "Ley 12/2023, por el derecho a la vivienda",
        "Ley 10/2010, de prevención de blanqueo de capitales",
        "RGPD"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Citada expresamente en la Ficha 23 junto con el Real Decreto 515/1989 sobre información en compraventa de viviendas.",
      sourceModuleId: "m15",
      legalReference: "Ley 12/2023",
      difficulty: "medium"
    },
    {
      id: "m15-q5",
      question:
        "¿Qué se debe hacer ante un cambio de cuenta bancaria comunicado por correo electrónico por un propietario no residente?",
      options: [
        "Aceptarlo de inmediato para no retrasar la operación",
        "Verificarlo por el canal de comunicación previamente acordado, sin responder al mismo correo",
        "Pedir solo el DNI escaneado como prueba",
        "Ignorarlo y mantener siempre la cuenta original sin comprobar nada"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Los fraudes de suplantación aprovechan la distancia; la verificación independiente es el estándar de cuidado (Ficha 36).",
      sourceModuleId: "m15",
      difficulty: "advanced"
    },
    {
      id: "m15-q6",
      question: "¿Cuáles son los cuatro bloques del checklist operativo antes de aceptar una captación?",
      options: [
        "Precio, plazo, publicidad y comisión",
        "Cliente, inmueble, negocio y riesgo",
        "Portal, fotografía, texto y vídeo",
        "Notaría, Registro, Catastro y Ayuntamiento"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 38 estructura el checklist en estos cuatro bloques, con la clasificación adicional de bloqueo vs. advertencia.",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q7",
      question:
        "En materia de prevención de blanqueo de capitales durante la captación, ¿qué establece el módulo?",
      options: [
        "Debe rechazarse cualquier operación con comprador o vendedor extranjero",
        "Las señales de riesgo (sociedad sin actividad, urgencia extrema, pagos a terceros) justifican revisión proporcional, sin convertirse en discriminación por origen o nacionalidad",
        "La prevención de blanqueo solo aplica a operaciones de más de un millón de euros",
        "No es responsabilidad de la agencia inmobiliaria"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 33, en aplicación de la Ley 10/2010 y el criterio de riesgo objetivo y evidencia.",
      sourceModuleId: "m15",
      legalReference: "Ley 10/2010",
      difficulty: "advanced"
    },
    {
      id: "m15-q8",
      question:
        "¿Qué diferencia existe entre la valoración inicial de captación y una tasación hipotecaria, pericial o fiscal?",
      options: [
        "Son equivalentes y pueden usarse indistintamente ante el propietario",
        "La valoración de captación es una recomendación comercial basada en comparables y debe distinguirse expresamente de esos otros valores más formales",
        "La valoración de captación tiene siempre carácter vinculante para el precio final",
        "Solo la tasación hipotecaria puede realizarla un agente inmobiliario"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 15 subraya que no debe confundirse ni presentarse como equivalente a una tasación formal.",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q9",
      question:
        "¿Qué debe hacer el agente cuando detecta que un poder de representación aportado por el propietario es antiguo?",
      options: [
        "Aceptarlo si tiene foto legible",
        "Comprobar vigencia, alcance y posibilidad de autocontrato antes de aceptarlo",
        "Rechazar automáticamente cualquier operación con poderes",
        "Delegar la comprobación en el comprador"
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 12 indica expresamente que no basta una foto de un poder antiguo.",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q10",
      question:
        "¿Qué información NO debería omitirse ni contradecirse en un anuncio de captación, según el módulo?",
      options: [
        "El nombre completo del propietario",
        "Precio, anexos, mobiliario, disponibilidad, ocupación, cargas que se cancelarán y limitaciones de uso relevantes",
        "El historial familiar del propietario",
        "El motivo personal de la venta"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 23 detalla los elementos que deben quedar claros en la información comercial del expediente.",
      sourceModuleId: "m15",
      difficulty: "basic"
    },
    {
      id: "m15-q11",
      question:
        "En un encargo sin exclusividad con varias agencias implicadas, ¿qué riesgo se menciona expresamente?",
      options: [
        "Ausencia de comisión para cualquiera de las agencias",
        "Anuncios incoherentes, precios distintos, promesas contradictorias y confusión sobre representación",
        "Obligación legal de repartir honorarios al 50%",
        "Imposibilidad de captar en Mallorca sin exclusiva"
      ],
      correctAnswerIndex: 1,
      explanation: "Ficha 20 describe estos riesgos como motivo para reforzar reglas de colaboración.",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q12",
      question:
        "¿Cuál es la clasificación que usa el checklist operativo para un pendiente que \"impide anunciar\" el inmueble?",
      options: ["Advertencia", "Bloqueo", "Riesgo menor", "Nota informativa"],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 38 distingue bloqueo (impide anunciar) de advertencia (debe informarse pero no impide anunciar).",
      sourceModuleId: "m15",
      difficulty: "basic"
    },
    {
      id: "m15-q13",
      question:
        "¿Qué debe hacer la agencia si el propietario se niega a cualquier revisión razonable de precio y el anuncio se vuelve perjudicial para la imagen de la agencia o induce a error?",
      options: [
        "Continuar publicando sin cambios indefinidamente",
        "Explicar hechos y consecuencias, documentar la decisión y proponer retirada o terminación conforme al encargo",
        "Bajar el precio unilateralmente sin informar al propietario",
        "Denunciar al propietario ante consumo"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 26 establece esta secuencia de actuación profesional ante negativa a revisar el precio.",
      sourceModuleId: "m15",
      difficulty: "advanced"
    },
    {
      id: "m15-q14",
      question: "¿Qué papel juega el acta de visita de captación respecto a la hoja de encargo?",
      options: [
        "Sustituye legalmente a la hoja de encargo",
        "No es un contrato, pero crea una base objetiva para la propuesta posterior",
        "Debe firmarse obligatoriamente en el momento de la visita",
        "Solo es necesaria si existe exclusividad"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 39 aclara la función y el momento de envío del acta (tras la visita, sin exigir firma inmediata).",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q15",
      question:
        "¿Qué normativa se cita como referencia de protección de datos en el tratamiento de información generada durante la captación (fotografías, llaves, datos de interesados)?",
      options: ["Ley Hipotecaria", "RGPD, LOPDGDD y AEPD", "Real Decreto 515/1989", "Código Civil"],
      correctAnswerIndex: 1,
      explanation: "Fichas 22 y 42 hacen referencia a este marco de protección de datos.",
      sourceModuleId: "m15",
      legalReference: "RGPD / LOPDGDD",
      difficulty: "medium"
    },
    {
      id: "m15-q16",
      question:
        "Un propietario declara que necesita vender en tres meses porque la venta está vinculada a la compra de otra vivienda. ¿Qué debe hacer el agente con esa información?",
      options: [
        "Ignorarla porque no afecta al precio",
        "Convertirla en una variable documentada del plan de venta, ajustando escenarios de precio y estrategia sin usarla como presión sobre el propietario",
        "Usarla para presionar al propietario a aceptar cualquier oferta rápidamente",
        "Comunicarla públicamente en el anuncio para generar urgencia en compradores"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 16 indica que la motivación y el plazo deben documentarse y usarse para definir condiciones, no para presionar.",
      sourceModuleId: "m15",
      difficulty: "medium"
    },
    {
      id: "m15-q17",
      question:
        "¿Qué elemento NO forma parte de los seis bloques de una hoja de encargo robusta según la Ficha 40?",
      options: [
        "Identificación y capacidad de las partes",
        "Duración, exclusividad, colaboración, honorarios y devengo",
        "Historial médico o familiar detallado del propietario",
        "Terminación, retirada de anuncios y tratamiento posterior de datos"
      ],
      correctAnswerIndex: 2,
      explanation:
        "Los seis bloques cubren identificación, inmueble, objeto/precio, duración/economía, marketing/datos y terminación; no incluyen información médica o familiar irrelevante para el encargo.",
      sourceModuleId: "m15",
      difficulty: "basic"
    },
    {
      id: "m15-q18",
      question:
        "¿Qué debe hacer el agente si una plataforma de publicación exige un campo (por ejemplo, superficie exacta) que aún no puede confirmarse documentalmente?",
      options: [
        "Rellenar con una estimación aproximada sin advertirlo",
        "Usar la opción prudente disponible o esperar a tener la documentación antes de publicar",
        "Dejar el anuncio sin publicar de forma indefinida sin informar al propietario",
        "Inventar un dato razonable basado en inmuebles similares"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 24 indica expresamente esta conducta ante campos obligatorios sin confirmación documental.",
      sourceModuleId: "m15",
      difficulty: "medium"
    }
  ]
};

export const m15Glossary: GlossaryItem[] = [
  {
    id: "g-m15-encargo-de-intermediacion",
    term: "Encargo de intermediación",
    definition:
      "Contrato (con libertad de forma según el Código Civil, aunque se recomienda por escrito) mediante el cual el propietario autoriza a la agencia a gestionar la comercialización del inmueble, sin que ello implique una autorización ilimitada para decidir en su nombre.",
    easyDefinition:
      "El papel que dice que la agencia puede vender la casa en tu nombre, pero solo para lo que tú autorices, no para todo.",
    relatedModuleId: "m15"
  },
  {
    id: "g-m15-pbc-ft",
    term: "PBC/FT (Prevención de Blanqueo de Capitales y Financiación del Terrorismo)",
    definition:
      "Conjunto de obligaciones, derivadas principalmente de la Ley 10/2010, que exigen a la agencia identificar al cliente, comprobar el origen y coherencia de la operación y escalar señales de riesgo objetivas antes de aceptar fondos o firmar reservas.",
    easyDefinition:
      "Las comprobaciones que debe hacer la agencia para asegurarse de que el dinero de una venta no proviene de actividades ilegales.",
    relatedModuleId: "m15"
  },
  {
    id: "g-m15-cedula-titulo-habitabilidad",
    term: "Cédula o título de habitabilidad",
    definition:
      "Documento (exigible en Baleares cuando proceda) que acredita que una vivienda reúne condiciones mínimas para ser habitada; no equivale a legalidad urbanística completa ni sustituye otros controles técnicos.",
    easyDefinition:
      "El papel que certifica que una vivienda se puede habitar, aunque no garantiza que todo en ella esté legalizado.",
    relatedModuleId: "m15",
    balearContext: "Documento propio del régimen de habitabilidad de las Illes Balears."
  },
  {
    id: "g-m15-titularidad-real",
    term: "Titularidad real",
    definition:
      "Concepto usado en prevención de blanqueo para identificar a la persona física que, más allá de una sociedad o estructura formal, controla realmente un inmueble o una operación.",
    easyDefinition:
      "Quién manda de verdad detrás de una empresa o sociedad que aparece como dueña de una propiedad.",
    relatedModuleId: "m15"
  },
  {
    id: "g-m15-diagnostico-documental",
    term: "Diagnóstico documental",
    definition:
      "Proceso de comparar escritura, nota simple, Catastro, plano y realidad física visible de un inmueble para detectar discrepancias antes de anunciarlo o fijar un precio.",
    easyDefinition:
      "Comprobar que lo que dicen los papeles de la vivienda coincide con lo que se ve al visitarla.",
    relatedModuleId: "m15"
  },
  {
    id: "g-m15-encargo-condicionado",
    term: "Encargo condicionado",
    definition:
      "Aceptación de una captación sujeta a que se resuelvan determinados pendientes (documentales, de titularidad o técnicos) antes de publicitar o comprometer el precio final.",
    easyDefinition:
      "Decir \"sí, pero\" a un encargo, aceptándolo solo si antes se solucionan ciertos problemas detectados.",
    relatedModuleId: "m15"
  }
];

export const m15Alerts: string[] = [
  "El módulo indica expresamente que debe utilizarse siempre la versión consolidada vigente de cada norma citada, ya que el contenido puede quedar desactualizado tras publicarse (Ficha 42).",
  "Contenido contrastado con fuentes oficiales a 4 de julio de 2026; conviene revisar si ha habido modificaciones posteriores a esa fecha en Ley 12/2023 (derecho a la vivienda), Ley 5/2018 (vivienda de las Illes Balears), Ley 10/2010 (prevención de blanqueo) y normativa de protección de datos (RGPD/LOPDGDD).",
  "El módulo recuerda que su contenido es material de estudio y de primera orientación profesional y no sustituye el asesoramiento jurídico, fiscal, técnico o notarial en una operación real (Ficha 42).",
  "Se insiste en verificar, para cada operación concreta, ordenanzas municipales, planeamiento, Registro de la Propiedad, Catastro y documentación técnica aplicable, dado que estos elementos varían por municipio y no quedan cubiertos por el temario general.",
  "No se detectan en el documento anuncios de cambios legislativos 'próximos' o plazos límite específicos más allá de la recomendación general de comprobar la vigencia de las normas citadas."
];
