import type { Module, GlossaryItem } from "@/lib/types";

export const m13Module: Module = {
  id: "m13",
  code: "M13",
  title: "Ética y Buenas Prácticas Inmobiliarias",
  order: 13,
  description: "Código de conducta, transparencia y prevención de conflictos de interés.",
  estimatedMinutes: 35,
  difficulty: "basic",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m13-l1",
      moduleId: "m13",
      title: "Ética, deontología y conflictos de interés",
      order: 1,
      summary:
        "Distingue los tres niveles de exigencia profesional (ética, deontología, cumplimiento) y enseña a identificar y gestionar conflictos de interés antes de que contaminen una recomendación.",
      content: `## Método de decisión en cinco preguntas

El módulo arranca con un método repetible para no depender de la improvisación: ante cualquier situación aplica cinco preguntas: ¿qué sé y qué no sé?, ¿a quién represento?, ¿qué interés puede quedar perjudicado?, ¿qué información es esencial para decidir?, ¿qué evidencia dejaré de mi actuación? Este orden reduce las improvisaciones y evita que la urgencia comercial sustituya al criterio profesional. La ética no obliga a revelar información confidencial de un cliente; obliga a no mentir, a no ocultar datos esenciales y a no usar la confidencialidad para obtener una ventaja indebida.

## Tres niveles: ética, deontología y cumplimiento

El documento separa con precisión tres planos que suelen confundirse. La **ética** es el juicio sobre lo correcto ante situaciones en las que la norma no ofrece una respuesta completa: aparece cuando hay presión para silenciar una restricción, usar una foto engañosa, favorecer una oferta por interés propio o aprovechar la urgencia de una parte vulnerable. La **deontología** reúne los deberes propios de la profesión —integridad, lealtad, diligencia, competencia, confidencialidad, independencia y respeto a la libre decisión— y puede estar recogida en códigos profesionales, contratos internos y protocolos de agencia. El **cumplimiento** es la parte verificable: documentos, plazos, licencias, información precontractual, protección de datos, publicidad y registros. Cumplir no agota la ética, pero una ética que no se documenta suele fallar cuando cambia el equipo o aparece una reclamación. La regla de examen es explicar siempre la diferencia entre obligación legal, deber profesional y recomendación de calidad, ya que esa jerarquía evita respuestas genéricas.

## Fundamentos de integridad: buena fe, diligencia y lealtad

La **buena fe objetiva** procede del Código Civil, que exige que los derechos se ejerzan conforme a las exigencias de la buena fe y que los contratos obliguen también a las consecuencias coherentes con ella (artículos 7 y 1258 CC). En la práctica inmobiliaria significa no construir una expectativa falsa mediante silencios, medias verdades o cambios de criterio no comunicados. La **diligencia profesional** no se mide por el resultado de la operación sino por el proceso seguido: pedir documentación, contrastar fuentes, identificar límites, avisar por escrito, conservar evidencias y no asumir competencias ajenas; es proporcional al riesgo y al conocimiento que el agente afirma tener. La **lealtad** exige priorizar el interés legítimo del cliente dentro del encargo, pero sin perjudicar ilícitamente a la otra parte ni ocultarle información que resulte esencial: ser leal al vendedor no autoriza a engañar al comprador, y ser útil al comprador no permite revelar instrucciones confidenciales del vendedor.

## Competencia profesional y límites del asesoramiento

El agente aporta conocimiento de mercado y proceso, pero no debe presentarse como abogado, arquitecto, tasador homologado, asesor fiscal o entidad financiera. Exigen derivación técnica cuestiones como interpretación jurídica compleja, diagnóstico de patologías, legalización urbanística, cálculo fiscal definitivo, tasación hipotecaria, valoración pericial, estructura societaria, blanqueo de capitales, conflicto sucesorio o negociación de financiación con condiciones particulares. Derivar bien exige explicar por escrito qué cuestión debe revisar el especialista, por qué es relevante, qué documento debe aportar y qué decisión queda condicionada; nunca recomendar a un profesional a cambio de una contraprestación no comunicada.

## Independencia y conflictos de interés

Un conflicto de interés existe cuando un incentivo personal, económico o relacional puede afectar —o parecer que afecta— a la neutralidad de una recomendación. Los conflictos típicos incluyen representar a vendedor y comprador sin claridad, recibir comisión de un proveedor recomendado, priorizar un inmueble propio, favorecer al cliente que paga una comisión superior, usar una oferta para presionar a otro interesado o tener una relación personal con una de las partes. El deber de revelación exige identificar el conflicto antes de que influya en la decisión, explicarlo de forma comprensible y obtener una aceptación informada cuando la representación pueda continuar; si no se puede preservar la imparcialidad mínima, debe rechazarse o limitarse el encargo. Un conflicto bien gestionado no es el que desaparece del expediente, sino el que aparece identificado, explicado y controlado.`,
      easyExplanation:
        "Antes de actuar, pregúntate qué sabes, a quién representas y qué interés podría salir perjudicado; así separas lo que dice la ley (cumplimiento) de lo que exige ser un buen profesional (deontología) y de lo que simplemente está bien (ética). Un conflicto de interés no es un pecado, es una situación que hay que declarar y gestionar con transparencia. Ser leal al cliente no significa mentir a la otra parte, y ser diligente no significa acertar siempre, sino documentar el proceso seguido.",
      balearExample:
        "Un agente de Sóller capta en exclusiva una vivienda cuyo propietario es primo suyo. Antes de aceptar visitas, el agente declara el vínculo familiar por escrito en el expediente, asigna a un compañero para negociar directamente con los interesados y se limita él mismo a tareas administrativas, evitando así que su relación personal condicione precio o condiciones.",
      keyConcepts: [
        "ética",
        "deontología",
        "cumplimiento",
        "buena fe objetiva",
        "diligencia profesional",
        "lealtad",
        "conflicto de interés",
        "deber de revelación",
      ],
      frequentErrors: [
        'Confundir "es legal" con "es ético" y responder solo con el mínimo normativo.',
        "No declarar un conflicto de interés hasta que ya ha influido en la negociación.",
        "Presentarse como experto en materias que exigen derivación (fiscal, jurídica, técnica).",
        'Ocultar un incentivo económico (comisión de un proveedor) alegando que "no afecta a nada".',
      ],
      examples: [
        {
          id: "m13-l1-ex-a",
          title: "El agente-comprador",
          scenario: "un agente quiere comprar para sí mismo un piso que tiene en cartera.",
          application:
            "debe declararlo al propietario antes de negociar y, si sigue interviniendo, limitar su rol o derivar la operación a otro compañero.",
          isBalearContext: false,
        },
        {
          id: "m13-l1-ex-b",
          title: "La comisión oculta del reformista",
          scenario: "el agente recomienda a un reformista que le paga una comisión por cliente derivado.",
          application:
            "debe comunicar la existencia y naturaleza del incentivo aunque no revele la cifra exacta, para que el cliente decida con información completa.",
          isBalearContext: false,
        },
        {
          id: "m13-l1-ex-c",
          title: "Doble representación sin declarar",
          scenario: "el mismo agente representa a vendedor y comprador sin advertirlo.",
          application:
            "debe declarar la doble intervención, limitar el intercambio de información sensible y documentar el reparto de funciones.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l2",
      moduleId: "m13",
      title: "El encargo profesional, la información precontractual y la igualdad de trato",
      order: 2,
      summary:
        "Explica cómo convertir instrucciones verbales en un encargo verificable, entregar información completa antes de cobrar, fijar precios responsables y garantizar un trato no discriminatorio.",
      content: `## El encargo profesional como contrato de confianza

La hoja de encargo convierte una expectativa comercial en un marco de trabajo verificable; sin ella, los malentendidos se convierten en conflictos sobre precio, exclusividad, información y comisión. Antes de aceptar, hay que comprobar quién encarga, qué relación tiene con el inmueble y si puede autorizar la comercialización: un copropietario, usufructuario, heredero aparente, administrador o apoderado no siempre puede obligar a todos los titulares. El encargo debe definir si incluye valoración, marketing, visitas, filtrado de interesados, negociación, reserva, coordinación de firma o posventa, alineando instrucciones de precio, mínimos, plazos, autorización para publicar y límites de acceso a la vivienda. El precio, las instrucciones o las condiciones de negociación deben actualizarse por un canal verificable: un WhatsApp puede servir como evidencia operativa si se conserva correctamente, pero para cambios relevantes conviene una adenda o confirmación inequívoca. Cuanto más singular, caro o complejo sea el inmueble, más detallado debe ser el encargo y más pronto deben aparecer las condiciones suspensivas.

## Información precontractual: el dato correcto antes de recibir dinero

La información no es un folleto para entregar al final; debe llegar a tiempo para permitir una decisión informada antes de la reserva, las arras o cualquier entrega a cuenta. El contenido mínimo incluye identidad del oferente, titularidad o legitimación, situación de cargas conocida, superficie y fuente del dato, estado de ocupación, precio total y conceptos incluidos, gastos previsibles, situación urbanística, eficiencia energética, condiciones de uso y cualquier limitación significativa. La Ley 12/2023, por el derecho a la vivienda, reconoce la información completa, objetiva, veraz, clara, comprensible y accesible en operaciones de vivienda; el Real Decreto 515/1989 exige que la publicidad no induzca a error ni silencie datos fundamentales. Un cliente que firma tras recibir información incompleta no pierde por ello su derecho a reclamar.

## Transparencia en honorarios y precio responsable

El cliente debe comprender qué servicio contrata, cuánto paga, cuándo nace el derecho a cobro y qué ocurre si la operación no se perfecciona. El contenido mínimo del pacto de honorarios identifica a las partes, el inmueble o la búsqueda, el alcance del servicio, la duración, la exclusividad si existe, el porcentaje o importe, impuestos aplicables, hitos de devengo, gastos adicionales, sistema de desistimiento o resolución y canal de reclamaciones; no debe presuponerse que una visita, una reserva o la firma de arras equivalen siempre a comisión devengada. En materia de precio, hay que separar valor de mercado, precio de salida, valor fiscal, tasación hipotecaria y expectativa del propietario, y evitar el "precio anzuelo": anunciar un precio que no se pretende respetar o usar una oferta artificial para desviar al interesado hacia otro producto, práctica que además de dañar la reputación puede encajar en prácticas comerciales desleales.

## Igualdad de trato y clientes vulnerables

La elección de inquilino o comprador puede basarse en criterios legítimos de solvencia, compatibilidad con la operación y capacidad jurídica, pero nunca en origen, nacionalidad, sexo, identidad o expresión de género, orientación sexual, religión, discapacidad, edad, situación familiar o embarazo. El diseño del proceso debe usar el mismo cuestionario para casos comparables y documentar la causa objetiva de cualquier decisión que pueda generar controversia. Para clientes en situación de vulnerabilidad económica, digital, lingüística, cognitiva o temporal, la respuesta profesional exige explicar en lenguaje sencillo, entregar documentación con antelación, ofrecer un canal no digital cuando sea posible y evitar transformar la urgencia en una ventaja económica, sin que ello convierta al agente en trabajador social ni le obligue a ignorar riesgos reales.`,
      easyExplanation:
        "El encargo por escrito es el contrato que evita discusiones sobre quién debía hacer qué y por cuánto. Antes de que alguien pague nada, tiene que saber toda la información relevante del inmueble, no solo la parte bonita. Los honorarios deben quedar claros desde el principio: qué se cobra, cuándo y qué pasa si la venta no se cierra. Y elegir a un comprador o inquilino solo puede basarse en cosas objetivas como la solvencia, nunca en prejuicios.",
      balearExample:
        "En Manacor, un propietario encarga verbalmente la venta de una finca rústica a un agente y, meses después, discute si debía pagar comisión tras una visita que no llegó a reserva. Como no existía hoja de encargo firmada que especificara el hito de devengo, el agente no puede acreditar el derecho de cobro y debe renegociar el pago basándose solo en la prueba parcial de los mensajes de WhatsApp conservados.",
      keyConcepts: [
        "hoja de encargo",
        "poder de disposición",
        "información precontractual",
        "precio anzuelo",
        "devengo de comisión",
        "condición suspensiva",
        "igualdad de trato",
        "cliente vulnerable",
      ],
      frequentErrors: [
        "Aceptar un encargo verbal sin comprobar quién tiene poder real de disposición sobre el inmueble.",
        "Entregar la información esencial del inmueble después de cobrar la reserva o las arras.",
        'Usar fórmulas vagas como "gastos según costumbre" u "honorarios a determinar".',
        "Aceptar instrucciones del propietario que excluyan candidatos por criterios discriminatorios.",
      ],
      examples: [
        {
          id: "m13-l2-ex-a",
          title: "El copropietario que no representa a todos",
          scenario: "un hermano firma el encargo de venta de un piso heredado por tres hermanos.",
          application:
            "el agente debe pedir soporte documental de la representación de los otros dos antes de publicar el inmueble.",
          isBalearContext: false,
        },
        {
          id: "m13-l2-ex-b",
          title: "El precio anzuelo en Portocolom",
          scenario:
            "se anuncia un chalet a un precio muy bajo para generar contactos, sin intención real de vender a ese precio.",
          application:
            "el agente debe fijar un precio de salida real y documentado, evitando estrategias de captación de leads mediante precios ficticios.",
          isBalearContext: true,
        },
        {
          id: "m13-l2-ex-c",
          title: "El propietario que pide excluir familias con niños",
          scenario: 'en un alquiler en Inca, el propietario solicita enseñar el piso solo a "parejas sin hijos".',
          application:
            "el agente debe rechazar el criterio discriminatorio y aplicar solo criterios objetivos de solvencia y compatibilidad con la vivienda.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l3",
      moduleId: "m13",
      title: "Confidencialidad, protección de datos y comunicación digital",
      order: 3,
      summary:
        "Enseña a proteger la información sensible del cliente sin dejar de informar a la otra parte, y a gestionar CRM, mensajería y RGPD con criterios de minimización.",
      content: `## Confidencialidad y secreto profesional operativo

La confidencialidad protege negociaciones, datos personales, instrucciones de precio, necesidades familiares, ofertas alternativas, documentos financieros y circunstancias que podrían perjudicar al cliente si se divulgan; deben reservarse el precio mínimo aceptable, la urgencia de venta, la oferta alternativa, la solvencia, los conflictos familiares, los litigios en curso no publicados, los datos de menores, informes, claves, códigos de alarma, la agenda de ausencias y la ubicación exacta de objetos valiosos. Sin embargo, la confidencialidad no justifica ocultar al adquirente los datos esenciales del inmueble o de la operación que deben ser transparentes: el criterio es separar información privada del cliente de información material para la decisión de la otra parte. La organización interna debe definir permisos en el CRM, limitar el acceso a carpetas, evitar reenviar documentación sensible por grupos de mensajería, usar enlaces con caducidad cuando sea posible y revisar antes de compartir con un proveedor externo qué papel y qué fundamento tiene la comunicación. Nunca debe usarse la urgencia, la capacidad financiera o la oferta confidencial de un cliente para favorecer a otro sin autorización, y la documentación debe destruirse o archivarse siguiendo plazos y criterios de conservación, porque acumular archivos sin propósito también es un riesgo.

## Protección de datos: minimización, finalidad y seguridad

La agencia trata datos personales desde el primer contacto, y el dato útil no es siempre el dato que conviene pedir. La minimización exige solicitar únicamente la información necesaria para la finalidad concreta: para una primera visita normalmente bastan datos de contacto y preferencias básicas, mientras que nóminas, declaraciones, documentos de identidad completos o datos de salud requieren una necesidad real, un momento adecuado y medidas de seguridad reforzadas. Cada tratamiento debe tener una finalidad y base explicadas al cliente: responder una solicitud, gestionar un encargo, preparar un contrato, evaluar solvencia con consentimiento cuando proceda, cumplir obligaciones legales o enviar comunicaciones si existe base válida; no debe reutilizarse un documento recibido para un objetivo nuevo sin análisis. La seguridad implica cuentas individuales, autenticación reforzada, cifrado o enlaces seguros cuando el riesgo lo exija, bloqueo de dispositivos, copias de seguridad y control de incidentes; la protección por defecto implica que el CRM, los formularios y la mensajería estén configurados para tratar el mínimo dato y durante el mínimo tiempo necesario. El RGPD y la Ley Orgánica 3/2018 exigen, según recuerda la AEPD, registros de actividades de tratamiento y protección de datos por defecto, basada en la minimización, el acceso limitado y la conservación restringida. No debe pedirse una fotocopia completa del DNI por rutina si basta con comprobar identidad o anotar un dato necesario, y las conversaciones de WhatsApp pueden contener datos personales que no deben exportarse, reenviarse o almacenarse sin criterio.

## CRM ético y comunicación digital responsable

Un CRM bien diseñado ordena oportunidades y protege la continuidad del servicio; mal usado, se convierte en un archivo de información privada sin finalidad clara. El diseño de campos debe registrar la fuente del contacto, el interés declarado, el presupuesto aproximado si se facilita, el tipo de inmueble, el estado del proceso, el consentimiento o base de contacto, las preferencias y los próximos pasos, evitando campos subjetivos o estigmatizantes como "cliente difícil" o comentarios personales irrelevantes. El acceso debe limitarse por rol: un comercial no necesita ver documentos de solvencia de todos los contactos, y un colaborador no necesita el historial completo de un cliente que no gestiona. Deben definirse plazos de revisión y eliminación, ya que un lead inactivo no justifica conservar durante años documentos financieros o copias de identidad. En la comunicación digital, la rapidez exige disciplina: la mensajería sirve para coordinación simple, pero las condiciones relevantes deben formalizarse por un medio que permita identificar versión, fecha, remitente y aceptación; nunca deben entregarse documentos sensibles por grupos, mensajes efímeros o cuentas personales no controladas. Toda conversación digital relevante debe acabar con un resumen claro de acuerdos, pendientes, responsable y próxima fecha, porque un "ok" por mensaje puede tener valor probatorio pero no sustituye la revisión formal de un contrato o de una reserva.`,
      easyExplanation:
        "Guarda en secreto lo que el cliente te confía en privado (precio mínimo, urgencia, problemas personales) pero nunca ocultes a la otra parte datos que necesita para decidir bien. Pide solo los datos que realmente necesitas en cada momento, no acumules documentos \"por si acaso\". El CRM debe ayudarte a dar mejor servicio, no convertirse en un archivo de vigilancia. Y cualquier acuerdo importante por WhatsApp debe acabar resumido y confirmado, no quedar solo en un mensaje suelto.",
      balearExample:
        'Una agencia de Palma recibe una solicitud de compra de un interesado que revela por WhatsApp que "puede llegar hasta 450.000 euros aunque el anuncio pone 400.000". El agente no debe compartir ese dato con el vendedor para presionar al alza sin autorización del comprador; su margen es comunicar ofertas y condiciones objetivas, no revelar información confidencial de capacidad económica para maximizar el precio.',
      keyConcepts: [
        "confidencialidad",
        "secreto profesional",
        "minimización de datos",
        "finalidad del tratamiento",
        "RGPD",
        "protección de datos por defecto",
        "CRM ético",
        "trazabilidad digital",
      ],
      frequentErrors: [
        "Pedir documentación excesiva (nóminas, extractos, redes sociales) para una primera visita.",
        "Reenviar documentación sensible por grupos de mensajería sin control de acceso.",
        "Usar datos confidenciales de un cliente para presionar o favorecer a otro sin autorización.",
        "Conservar datos personales indefinidamente en el CRM sin plazos de revisión ni eliminación.",
      ],
      examples: [
        {
          id: "m13-l3-ex-a",
          title: "El dato de capacidad económica filtrado",
          scenario: "un comprador revela en privado su presupuesto máximo real.",
          application: "el agente no debe trasladar esa cifra al vendedor para forzar una oferta más alta.",
          isBalearContext: false,
        },
        {
          id: "m13-l3-ex-b",
          title: "El CRM con campos estigmatizantes",
          scenario: 'un comercial etiqueta a un contacto como "cliente conflictivo" en el CRM compartido.',
          application:
            "debe sustituirse por hechos objetivos verificables, no por juicios de valor que condicionen a otros compañeros.",
          isBalearContext: false,
        },
        {
          id: "m13-l3-ex-c",
          title: "El acuerdo cerrado por WhatsApp",
          scenario: "cliente y agente pactan una rebaja de precio por mensaje.",
          application:
            "el acuerdo debe resumirse en un documento formal o confirmación inequívoca antes de continuar con arras o contrato.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l4",
      moduleId: "m13",
      title: "Publicidad, imagen digital e IA generativa en la comercialización",
      order: 4,
      summary:
        "Fija el estándar de veracidad en fotografía, vídeo, drones e inteligencia artificial aplicados a la promoción de inmuebles, evitando que la tecnología reduzca la exigencia de honestidad.",
      content: `## Publicidad inmobiliaria ética: precisión antes que persuasión

La publicidad puede ser atractiva sin ser ambigua. El estándar no es "que nadie haya preguntado", sino que una persona razonable no sea inducida a una decisión económica por una impresión falsa. Las promesas que requieren evidencia incluyen superficie, vistas, distancia, uso, rentabilidad, licencia, posibilidad de reforma, plaza de garaje, piscina, orientación, primera línea, edificio rehabilitado, gastos, disponibilidad inmediata, libre de cargas, ocupación y eficiencia; cada una debe apoyarse en una fuente identificable. Entre las prácticas de riesgo están las fotografías antiguas o retocadas sin explicación, los renders que parecen realidad, los anuncios de "ideal Airbnb" sin título habilitante, precios sin aclarar gastos esenciales, la omisión de que la vivienda está alquilada u ocupada, prometer segregaciones no aprobadas o describir una construcción como legal sin respaldo. Cuando se descubre un error, la corrección debe hacerse en todos los canales, registrando la fecha y avisando directamente a quien esté en una fase avanzada; ocultar la corrección porque "ya hay interés" agrava el riesgo y convierte un error inicial en una conducta consciente.

## Fotografía, renders, home staging virtual e IA generativa

La fotografía profesional puede corregir luz, encuadre o color, pero no debe eliminar defectos relevantes, añadir vistas, modificar superficies, ocultar construcciones colindantes o representar una estancia de manera incompatible con su uso real; el objetivo es mostrar bien, no transformar el activo. Los renders y el home staging virtual pueden ayudar a identificar una imagen de proyecto, propuesta o decoración virtual, pero nunca deben presentarse como estado actual; si se simula una reforma, hay que aclarar que requiere viabilidad técnica, licencia, presupuesto y autorización que no están garantizados por la imagen. La IA generativa puede ayudar a resumir, traducir o preparar un guion, pero el agente mantiene la responsabilidad sobre el resultado: no deben introducirse en herramientas sin revisar condiciones de datos documentos sensibles, ni dejar que un sistema invente metros, licencias, comparables o respuestas jurídicas. Toda imagen debe responder a una pregunta simple: ¿un comprador reconocerá el inmueble al visitarlo sin sentir que fue inducido a error?

## Urbanismo, turismo y vivienda protegida: no vender expectativas como derechos

En Mallorca, el uso permitido suele ser tan importante como la ubicación. Una licencia pasada, una obra existente o una referencia catastral no prueban por sí solas que todo esté conforme al planeamiento vigente; la conducta ética es explicar el alcance de los documentos disponibles y solicitar informe o verificación técnica cuando el uso futuro dependa de ello. No debe describirse una vivienda como "ideal para Airbnb" o "con licencia turística" sin comprobar título habilitante, modalidad, plazas, inscripción, normativa insular y municipal, comunidad de propietarios y situación actual, ya que una licencia o autorización puede no ser transferible o no cubrir el uso anunciado. Las viviendas protegidas o de precio limitado (VPO/VPL) pueden tener precio máximo, requisitos de adquirente, destino y limitaciones de transmisión y registro, y no deben anunciarse como vivienda libre sin confirmar el régimen y sin entregar información clara sobre sus consecuencias. La frase "posibilidad de" debe ir siempre acompañada de la autoridad competente, el trámite necesario y la advertencia de que no está garantizado.`,
      easyExplanation:
        'Las fotos y vídeos pueden mejorar la luz, pero no pueden inventar metros, vistas o piscinas que no existen. Un render de una reforma futura debe decir claramente que es una simulación, no la realidad actual. Si usas inteligencia artificial para redactar o retocar, sigues siendo tú quien responde de lo que publicas: revisa siempre que no haya inventado datos. Y nunca anuncies "licencia turística" o "vivienda libre" sin comprobar antes toda la documentación real.',
      balearExample:
        'En un anuncio de un apartamento en Alcúdia, un comercial usa IA para eliminar una carretera visible en la foto, añadir una piscina y escribir "licencia turística disponible" porque el propietario dice que "se puede tramitar sin problema". El agente debe retirar la imagen alterada, usar fotografías fieles y verificar la normativa insular y municipal antes de afirmar la disponibilidad de la licencia, ya que ambas conductas pueden inducir a error a un comprador.',
      keyConcepts: [
        "publicidad engañosa",
        "precio anzuelo",
        "render",
        "home staging virtual",
        "IA generativa",
        "licencia turística",
        "VPO/VPL",
        "planeamiento urbanístico",
      ],
      frequentErrors: [
        "Publicar fotos retocadas o antiguas sin indicar que no reflejan el estado actual.",
        'Anunciar "licencia turística" sin verificar título habilitante, modalidad y normativa municipal.',
        "Presentar un render de reforma futura como si fuera el estado real del inmueble.",
        "Confiar en el texto generado por IA sin revisión humana de datos técnicos o legales.",
      ],
      examples: [
        {
          id: "m13-l4-ex-a",
          title: "El solar colindante que no se menciona",
          scenario:
            'un propietario en Sóller pide anunciar "vistas despejadas permanentes" ocultando un solar colindante con planeamiento que permite edificar.',
          application:
            "el agente describe la vista actual con precisión, sin garantizar permanencia, y deja constancia por escrito del riesgo urbanístico.",
          isBalearContext: true,
        },
        {
          id: "m13-l4-ex-b",
          title: 'El apartamento "ideal Airbnb" sin licencia',
          scenario: "un piso en Palma se anuncia con alta rentabilidad turística sin comprobar la existencia de licencia.",
          application:
            "el agente debe verificar título habilitante, plazas autorizadas y normativa municipal antes de anunciar el uso turístico.",
          isBalearContext: true,
        },
        {
          id: "m13-l4-ex-c",
          title: "El render de piscina inexistente",
          scenario: "una promoción en Calvià usa una imagen generada por IA que muestra una piscina no construida.",
          application:
            'debe etiquetarse como "propuesta no ejecutada, sujeta a licencia y presupuesto", nunca como estado actual.',
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l5",
      moduleId: "m13",
      title: "Due diligence, custodia de fondos y gestión ética de la negociación",
      order: 5,
      summary:
        "Detalla cómo investigar sin prometer certificaciones que no corresponden, custodiar llaves y dinero con trazabilidad, y negociar ofertas de forma honesta.",
      content: `## Due diligence ética: investigar sin prometer lo que no puedes certificar

La debida diligencia no consiste en acumular documentos, sino en identificar qué puede impedir, encarecer o cambiar materialmente la decisión del cliente. La matriz mínima incluye titularidad y poder de disposición, Registro y cargas, Catastro y realidad física, situación urbanística, habitabilidad, comunidad, ocupación, eficiencia, fiscalidad básica, uso turístico o protegido y costes conocidos; el nivel de profundidad aumenta con el riesgo de la operación. Cada dato debe llevar anotado de dónde sale: nota simple, certificado, informe técnico, escritura, declaración del propietario, consulta municipal, administrador, Catastro o inspección visual, evitando convertir un comentario informal en una conclusión. Una advertencia útil no es una cláusula genérica que dice "el comprador conoce el estado", sino que debe señalar el dato concreto, su impacto probable, la comprobación pendiente, quién debe realizarla y cómo se reflejará en reserva, arras o escritura. No debe comercializarse como "regularizado" un inmueble porque el propietario afirme que "siempre ha estado así", y la inspección visual sirve para detectar señales, no para certificar patologías, legalidad o superficies.

## Custodia de llaves, visitas y seguridad física

Custodiar llaves y organizar visitas implica acceso a una vivienda, posibles bienes personales y datos sobre hábitos de sus ocupantes. La cadena de custodia debe registrar entrega de llaves, número de copias, fecha, persona responsable y devolución, sin etiquetar llaves con dirección completa; debe mantenerse un protocolo para pérdidas, cambios de cerradura, alarmas y autorizaciones de acceso. En las visitas hay que verificar identidad de forma razonable, acompañar al visitante, respetar horarios y convivencia, evitar fotografías de documentos, objetos personales o sistemas de seguridad, y si el inmueble está ocupado, coordinar expresamente la visita con quien tenga derecho de uso. No deben entregarse llaves a un interesado "para que mire tranquilo" sin autorización expresa, identificación y un procedimiento que cubra la responsabilidad.

## Reservas, arras y cantidades entregadas: custodia y claridad

Recibir dinero crea una responsabilidad inmediata: la cantidad no debe circular sin saber qué contrato la sostiene, qué condición la afecta y qué ocurrirá si algo falla. Antes de cobrar, hay que identificar al pagador, verificar a quién representa, entregar información relevante, explicar destino del importe, cuenta receptora, concepto, plazo, condiciones suspensivas, devolución, penalización y quién custodia; cuando la operación dependa de financiación, documentación o regularización, deben evitarse cláusulas que hagan perder dinero de forma desproporcionada. Debe usarse cuentas de empresa identificables, evitar efectivo salvo supuestos legales y protocolizados, emitir recibo inmediato y vincular cada movimiento al expediente, sin mezclar fondos de cliente con gastos operativos ni aceptar instrucciones de pago opacas. Una reserva debe decir si retira el inmueble del mercado, durante cuánto tiempo, bajo qué condiciones y qué información se entregará antes de pasar a arras; las arras deben identificar modalidad, consecuencias, precio, plazo, cargas, financiación y distribución de riesgos. Cada euro debe tener origen, concepto, autorización, justificante, cuenta, condición de devolución y responsable identificados.

## Gestión ética de ofertas y negociación

La negociación no es manipulación: es un proceso para alinear precio, condiciones, plazos, riesgos y expectativas mediante información honesta y decisiones libres. La recepción de ofertas debe registrar fecha, identidad, importe, condiciones, financiación, plazos, bienes incluidos y vigencia, trasladando al cliente las ofertas de forma fiel, sin alterar condiciones para hacerlas más o menos competitivas; si una oferta no se traslada, debe dejarse una razón objetiva y autorizada. No deben inventarse ofertas competidoras ni revelarse el contenido confidencial de una propuesta para provocar una sobrepuja, aunque puede informarse de que existen otros interesados si es cierto y relevante. En una contraoferta, hay que asegurar que el cliente comprende qué cambia realmente: un precio más alto puede ser peor si elimina financiación, adelanta una fecha imposible o reduce garantías; la función del agente es ordenar el conjunto, no celebrar únicamente el importe. No debe prometerse "lo tienes cerrado" hasta que exista aceptación clara y se hayan cumplido las condiciones necesarias.`,
      easyExplanation:
        "Investigar bien un inmueble no significa acumular papeles, sino saber de dónde sale cada dato y advertir por escrito de lo que falta comprobar. Las llaves y el dinero del cliente son responsabilidades serias: hay que registrar quién las tiene y por qué, y cada euro cobrado debe tener origen, destino y condición de devolución claros. Al negociar, cuenta siempre todas las ofertas de forma fiel, sin inventar competencia ni prometer un cierre que aún no existe.",
      balearExample:
        'En Felanitx, un comercial recibe 3.000 euros como señal de reserva de un chalet en efectivo, sin recibo ni cuenta identificable, "para agilizar". Esta práctica incumple el protocolo de custodia: el dinero debe recibirse en cuenta de empresa identificable, con recibo inmediato que indique concepto, condición de devolución y vinculación al expediente de la operación.',
      keyConcepts: [
        "debida diligencia",
        "matriz de riesgo",
        "cadena de custodia de llaves",
        "cuenta receptora",
        "condición suspensiva",
        "arras",
        "reserva",
        "negociación honesta",
      ],
      frequentErrors: [
        "Aceptar dinero en efectivo sin recibo ni cuenta de empresa identificable.",
        'Certificar informalmente que un inmueble "está regularizado" sin documento que lo respalde.',
        "Entregar llaves a un interesado sin autorización expresa ni registro de responsable.",
        "Inventar ofertas competidoras o presión temporal ficticia para forzar una decisión.",
      ],
      examples: [
        {
          id: "m13-l5-ex-a",
          title: "La reserva sin condición de devolución",
          scenario:
            "un comprador entrega 2.000 euros de reserva sin que quede claro qué pasa si no obtiene la hipoteca.",
          application:
            "el agente debe redactar la reserva especificando la condición suspensiva de financiación y el destino del importe si no se cumple.",
          isBalearContext: false,
        },
        {
          id: "m13-l5-ex-b",
          title: "La oferta no trasladada",
          scenario: "llega una oferta inferior a la esperada y el comercial decide no comunicarla al propietario.",
          application:
            "debe trasladarse igualmente o documentar una razón objetiva y autorizada para no hacerlo.",
          isBalearContext: false,
        },
        {
          id: "m13-l5-ex-c",
          title: 'Las llaves "para mirar tranquilo"',
          scenario: "un interesado pide quedarse con las llaves de una finca en Artà para enseñarla a un familiar.",
          application:
            "el agente debe negarse sin autorización expresa del propietario y un procedimiento de responsabilidad documentado.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l6",
      moduleId: "m13",
      title: "Colaboración entre agencias, arrendamientos, sostenibilidad e IA responsable",
      order: 6,
      summary:
        "Regula el trabajo conjunto entre agencias, la clasificación correcta de los arrendamientos, la comunicación ambiental y territorial veraz, y el uso responsable de la inteligencia artificial en la actividad comercial.",
      content: `## Colaboración entre agencias y reparto de honorarios

La colaboración amplía mercado y puede mejorar el servicio, pero sin reglas genera conflictos sobre exclusividad, datos, ofertas, visitas y remuneración. El acuerdo previo debe definir quién representa a quién, acceso a documentación, autorización para publicar, reglas de visita, protección del cliente aportado, reparto de honorarios, impuestos, exclusividad, duración, cancelación y resolución de conflictos, sin dar por hecho lo que resuelve un mensaje informal. Debe compartirse lo necesario para la operación, no la base completa de datos ni estrategias internas, y el colaborador debe conocer límites de uso de fotos, documentos, dirección, datos de contacto y comunicaciones con el propietario o comprador. Debe reconocerse la aportación real de cada parte, evitando captar directamente al cliente del colaborador vulnerando el acuerdo, y cualquier afirmación publicitaria debe basarse en la ficha aprobada, ya que la reputación compartida se pierde cuando uno publica lo que el otro no ha verificado.

## Arrendamientos responsables: clasificación, selección y trato justo

El alquiler combina expectativas intensas, vulnerabilidad posible y una normativa de detalle; la actuación ética empieza por clasificar el uso real antes de elegir el contrato: vivienda habitual, temporada, habitación, uso distinto y rústico según finalidad real y norma aplicable, sin usar "11 meses", "temporal" o "servicios incluidos" para encubrir una vivienda habitual o evitar derechos imperativos. La selección de inquilino puede evaluar solvencia de forma proporcional y documentada, evitando requisitos excesivos, discriminatorios o inconsistentes, y explicando qué datos se piden, para qué, durante cuánto tiempo se conservan y qué ocurre si no son suficientes. En arrendamientos de vivienda, la normativa aplicable atribuye al arrendador los gastos de gestión inmobiliaria y formalización del contrato; la agencia debe separar este régimen de otros servicios auténticamente voluntarios y no convertir una prohibición en un cargo con otro nombre. Debe informarse del reparto legal de gastos, de la fianza, de garantías adicionales y del depósito ante el organismo competente cuando corresponda; la mejor prevención de impago y conflicto es una clasificación correcta, documentación clara, inventario firmado y comunicación temprana.

## Sostenibilidad, territorio y responsabilidad social

La ética inmobiliaria en Mallorca incluye la forma en que se presenta el territorio: costa, agua, suelo rústico, movilidad, energía y vivienda asequible no son solo argumentos de marketing. No deben afirmarse eficiencia, ahorro energético, autosuficiencia, vista permanente, acceso a playa o resiliencia climática sin soporte; debe comunicarse el certificado energético, la situación de instalaciones, necesidades de rehabilitación, riesgo de inundación o afecciones conocidas cuando resulten relevantes. No deben promocionarse usos que tensionen la convivencia o el entorno sin verificar habilitación: una finca rústica no se convierte en negocio turístico por tener encanto; una vivienda de costa no queda libre de servidumbres por tener acceso directo; una piscina no es legal por estar construida. La vivienda tiene una función social y un impacto comunitario; la buena práctica considera residentes, comunidad, accesibilidad, ruido, movilidad y destino real, sin resolver los problemas de vivienda pero evitando agravarlos con información falsa o prácticas excluyentes. En activos de costa, rústicos o turísticos, la cautela ambiental y territorial es una ventaja competitiva que reduce expectativas inviables y mejora la confianza de compradores informados.

## Uso responsable de IA y automatización comercial

La inteligencia artificial puede acelerar tareas, pero no desplaza la responsabilidad humana; en inmobiliario es especialmente sensible porque combina datos personales, precios, vivienda y decisiones con impacto real. Los usos razonables incluyen borradores de textos, traducciones revisadas, resúmenes de documentación no sensible, clasificación interna de tareas, guiones de visita, propuestas de estructura y apoyo a la organización, siempre con revisión humana y contraste de fuentes oficiales cuando el contenido sea jurídico, técnico o fiscal. Los usos de riesgo incluyen generar imágenes que alteren la realidad sin identificarlo, estimar valor con datos no representativos, puntuar perfiles de inquilinos de manera opaca, inferir solvencia o características sensibles, o responder automáticamente a preguntas legales o cargar documentos con datos sensibles en herramientas no evaluadas. La gobernanza mínima define herramientas autorizadas, datos prohibidos, revisión humana, registro de versiones, aviso de contenido generado o simulado cuando pueda inducir a error, responsable de aprobación y procedimiento de corrección. Una IA no sustituye la visita, la nota simple, el certificado técnico ni el criterio de un profesional competente; si un resultado no puede explicarse al cliente, no debe decidir por él.`,
      easyExplanation:
        'Cuando dos agencias colaboran en una operación, deben pactar por escrito quién representa a quién y cómo se reparte la comisión, para no discutirlo a mitad de proceso. Al alquilar, hay que clasificar correctamente el tipo de contrato (vivienda habitual, temporada, etc.) y no disfrazarlo para saltarse derechos del inquilino. Presume con datos reales, no con "greenwashing": si dices que algo es eficiente o sostenible, debes poder demostrarlo con un certificado. Y la IA puede ayudarte a redactar o traducir, pero tú sigues siendo responsable de lo que publicas o afirmas.',
      balearExample:
        "Dos agencias de Ciutadella colaboran en la venta de una casa de campo: una capta al vendedor y otra aporta al comprador. Sin acuerdo previo firmado sobre reparto de honorarios y protección del cliente aportado, la agencia captadora intenta cerrar directamente con el comprador aportado, incumpliendo el acuerdo tácito y dañando la relación de colaboración y la reputación de ambas.",
      keyConcepts: [
        "acuerdo de colaboración",
        "arrendamiento de vivienda habitual",
        "gastos de gestión inmobiliaria",
        "greenwashing",
        "función social de la vivienda",
        "gobernanza de IA",
        "revisión humana",
        "uso de riesgo de IA",
      ],
      frequentErrors: [
        "No firmar un acuerdo de colaboración antes de compartir cliente o documentación con otra agencia.",
        'Redactar un contrato de "temporada" para encubrir en realidad una vivienda habitual.',
        "Anunciar eficiencia energética o sostenibilidad sin certificado ni dato verificable.",
        "Publicar contenido generado por IA sin revisión humana ni aviso cuando pueda inducir a error.",
      ],
      examples: [
        {
          id: "m13-l6-ex-a",
          title: 'El alquiler "de temporada" disfrazado',
          scenario:
            'en Palma, un propietario pide contrato de "temporada de 11 meses" para un inquilino que en realidad fijará allí su residencia habitual.',
          application:
            "la agencia debe clasificar el contrato según el uso real, no según lo que evite obligaciones legales.",
          isBalearContext: true,
        },
        {
          id: "m13-l6-ex-b",
          title: 'La finca rústica anunciada como "negocio de eventos"',
          scenario: "una possessió en Sencelles se promociona para bodas sin verificar habilitación de uso.",
          application:
            "el agente debe confirmar la normativa municipal e insular aplicable antes de anunciar ese uso.",
          isBalearContext: true,
        },
        {
          id: "m13-l6-ex-c",
          title: "El chatbot que responde dudas legales",
          scenario: "una agencia automatiza respuestas sobre plazos de desistimiento con IA sin supervisión.",
          application:
            "debe limitarse a información general y derivar a un profesional o a revisión humana para cuestiones jurídicas concretas.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m13-l7",
      moduleId: "m13",
      title: "Gobernanza, reclamaciones, control de calidad y casos prácticos",
      order: 7,
      summary:
        "Explica cómo la agencia gestiona errores, canales internos de consulta, auditorías e incentivos éticos, y aplica el método de decisión a cinco casos prácticos reales del sector.",
      content: `## Protocolo de reclamaciones, errores y rectificación

Los errores ocurren; la diferencia profesional está en detectarlos pronto, contener el daño, informar con honestidad y aprender del incidente. En la recepción, hay que acusar recibo, identificar el expediente, preservar la información relevante y evitar respuestas defensivas improvisadas, escuchando la reclamación completa antes de concluir y distinguiendo entre una duda, una solicitud de documentación, una discrepancia de interpretación y una reclamación formal. El análisis debe revisar encargo, publicidad, mensajes, documentos entregados, fuentes, cronología y personas implicadas, identificando si hubo error de hecho, fallo de comunicación, incumplimiento de proceso, información incompleta, conducta del cliente o cuestión técnica que exige experto. La respuesta debe explicar hechos verificables, reconocer el error si existe, proponer corrección proporcionada y fijar plazos, sin prometer compensaciones, responsabilidades o soluciones jurídicas sin autorización o asesoramiento; deben documentarse medidas como rectificación de anuncio, devolución, entrega de documento, cambio de interlocutor o derivación. No deben borrarse registros para "limpiar" un error, porque la trazabilidad permite resolverlo y demuestra buena fe; una rectificación rápida puede evitar que una información incorrecta se convierta en un perjuicio mayor.

## Canal interno de consulta y cultura de hablar claro

Los equipos éticos no dependen de personas heroicas: crean un entorno donde es posible detener una operación, pedir ayuda o reconocer una duda sin miedo a perder una comisión. Debe designarse un canal de consulta —un responsable, correo o reunión breve— donde el equipo pueda plantear dudas sobre publicidad, conflicto de interés, documentación, tratamiento de datos, presión comercial o instrucciones del cliente, accesible, confidencial y orientada a resolver antes de publicar o firmar. Nadie debe ser penalizado por escalar un riesgo razonable, pedir una segunda revisión o negarse a realizar una conducta que considere ilícita o engañosa; la dirección debe premiar la detección temprana, no solo los cierres. Las dudas frecuentes deben registrarse de forma agregada y convertirse en fichas, checklists y sesiones prácticas, para que el conocimiento de un caso complejo no quede en el móvil de una persona, sino que mejore el estándar de la organización.

## Control de calidad, auditoría y liderazgo ético

La revisión periódica convierte la ética en una práctica medible: no basta con confiar en que cada comercial recuerde todos los controles. La auditoría debe revisar cada mes o trimestre una selección de captaciones, anuncios, reservas, alquileres y cierres, comprobando encargo, documentación, aprobación de precio, fuente de superficies, CEE cuando corresponda, tratamiento de datos, comunicaciones, recibos, advertencias y cambios de versión, usando indicadores como porcentaje de fichas con documentación completa, anuncios corregidos, operaciones con advertencia por escrito, reclamaciones por información, tiempo de respuesta, leads sin base de contacto, documentos de solvencia conservados en exceso y devoluciones de fondos dentro de plazo. La auditoría no debe buscar culpables por defecto, sino identificar fallos de sistema: plantilla incompleta, proceso confuso, formación insuficiente, carga de trabajo, incentivo comercial o falta de supervisión. Sobre el liderazgo, los incentivos muestran qué conducta valora de verdad una empresa: si solo se premia el cierre, aumenta la probabilidad de ocultar riesgos, presionar clientes o competir internamente de forma destructiva; deben combinarse objetivos de volumen con calidad de expediente, satisfacción, cumplimiento de tiempos, colaboración, formación y ausencia de incidencias graves, dando feedback basado en hechos concretos y no en moralina genérica. Una ficha solo está "lista para publicar" cuando el control documental y comercial da resultado satisfactorio, no cuando el texto suena bien.

## Cuatro casos prácticos resueltos

**Caso 1 — La captación con un defecto que "no se menciona":** un propietario quiere anunciar una vivienda con "vistas despejadas permanentes" pese a que existe un solar colindante con planeamiento que permite edificar, e insiste en que no se diga nada porque "ahora no hay obra". La actuación correcta es revisar la fuente urbanística disponible, explicar por escrito al propietario que no puede garantizarse una vista futura y redactar una ficha que describa la situación actual sin adjetivos absolutos, incorporando si el riesgo es relevante una nota de información o entregando documentación de entorno a interesados cualificados. No debe editarse la fotografía para ocultar el solar ni responder "no se puede construir" sin verificación.

**Caso 2 — Doble representación y oferta confidencial:** la agencia tiene un encargo de venta en exclusiva y una pareja que ya trabajaba con otro comercial de la misma agencia presenta una oferta; el vendedor pide que se revele cuánto más podría subir la pareja "porque tú sabes su presupuesto". Existe doble representación y un dato de capacidad económica confidencial; la agencia puede facilitar la negociación pero no usar información privada para beneficiar a una parte. La actuación correcta informa al vendedor de la oferta completa (precio, plazos, financiación y condiciones), indica que la agencia puede trasladar una contraoferta o preguntar si la parte interesada desea mejorar, pero no revelará datos privados.

**Caso 3 — Alquiler, selección y datos excesivos:** un propietario pide que solo se enseñe su vivienda a "parejas españolas sin niños y con nómina fija", además de solicitar DNI completo, tres nóminas, vida laboral, extractos bancarios y redes sociales de todos los interesados antes de una primera visita. La instrucción introduce criterios discriminatorios y la recopilación es desproporcionada para la fase inicial; la actuación correcta rechaza los criterios basados en nacionalidad o situación familiar sin justificación objetiva, diseña un filtro común (fecha de entrada, número de ocupantes compatible, ingresos acreditables en fase posterior, estabilidad o garantías aceptables) y solicita para la visita inicial solo datos de contacto y necesidades relevantes.

**Caso 4 — IA, foto simulada y licencia turística:** para mejorar un anuncio, un comercial usa IA para eliminar una carretera visible, añadir una piscina y escribir "licencia turística disponible" porque el propietario dice que se puede tramitar sin problema. La imagen altera atributos materiales del inmueble y el texto presenta una posibilidad no verificada como derecho disponible. La actuación correcta retira o identifica claramente las imágenes de propuesta, usa fotografías fieles, verifica cualquier afirmación de turismo con documentos y normativa aplicable, y si existe una hipótesis de uso futuro, la indica como sujeta a consulta y no la usa como argumento principal de rentabilidad.`,
      easyExplanation:
        'Cuando algo sale mal, reconoce el error rápido, corrígelo en todos los canales y no borres el rastro: eso demuestra buena fe. Cualquier persona del equipo debe poder pedir ayuda o parar una operación dudosa sin miedo a perder su comisión. Revisar expedientes de forma periódica ayuda a detectar fallos del sistema, no a buscar culpables. Y los cuatro casos prácticos del módulo (vista falsa, doble representación, discriminación en alquiler, foto e IA engañosas) muestran que la solución casi nunca es "seguir la orden del cliente" sino aclarar, advertir, documentar o rechazar.',
      balearExample:
        "En una agencia de Palma con sucursales en Inca y Manacor, el responsable de calidad audita trimestralmente una muestra de 20 expedientes de alquiler y detecta que en el 30% falta el recibo de fianza depositado ante el organismo competente. En vez de sancionar a los comerciales, rediseña la plantilla de cierre de alquiler para que el depósito de fianza sea un paso obligatorio antes de marcar la operación como cerrada.",
      keyConcepts: [
        "protocolo de reclamaciones",
        "canal de consulta interno",
        "no represalias",
        "auditoría de expedientes",
        "indicadores de calidad",
        "incentivos éticos",
        "doble representación",
        "criterios discriminatorios",
      ],
      frequentErrors: [
        "Responder a una reclamación de forma defensiva o improvisada antes de revisar el expediente completo.",
        'Borrar o "limpiar" registros para ocultar un error en lugar de documentar la corrección.',
        "Diseñar incentivos comerciales que premian solo el cierre rápido, ignorando calidad e incidencias.",
        "Aplicar instrucciones discriminatorias del propietario sin cuestionarlas ni ofrecer alternativa legal.",
      ],
      examples: [
        {
          id: "m13-l7-ex-a",
          title: "El anuncio corregido tarde",
          scenario: "se detecta un error de superficie en un anuncio activo desde hace semanas.",
          application:
            "debe corregirse en todos los canales y avisarse directamente a los interesados en fase avanzada, no solo en la próxima actualización.",
          isBalearContext: false,
        },
        {
          id: "m13-l7-ex-b",
          title: "La comisión que premia solo el cierre",
          scenario: "un director paga bonus únicamente por número de ventas cerradas, sin mirar calidad del expediente.",
          application:
            "debe rediseñar el incentivo combinando volumen con cumplimiento documental y ausencia de reclamaciones.",
          isBalearContext: false,
        },
        {
          id: "m13-l7-ex-c",
          title: "El filtro de alquiler discriminatorio",
          scenario: "un propietario en Manacor exige excluir solicitantes extranjeros.",
          application:
            "el agente debe rechazar el criterio y aplicar solo solvencia y compatibilidad objetivas, comunicando al propietario que la agencia no ejecutará instrucciones contrarias a la normativa.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m13-e1",
      moduleId: "m13",
      type: "case",
      question:
        'Un comercial descubre, revisando el Registro, que la vivienda que va a anunciar tiene una carga no declarada por el propietario. El propietario insiste en publicar el anuncio "ya, que hay prisa".',
      expectedAnswer:
        'El agente debe informar por escrito al propietario del hallazgo, explicar el impacto en la operación y en la información precontractual, y no publicar el anuncio como "libre de cargas" hasta aclarar o reflejar la situación real.',
      explanation:
        "La diligencia profesional exige contrastar fuentes antes de publicar, y la información precontractual debe ser veraz y completa antes de recibir dinero.",
      difficulty: "medium",
    },
    {
      id: "m13-e2",
      moduleId: "m13",
      type: "decision",
      question:
        "Un cliente comprador le pide al agente, en confianza, cuál es el precio mínimo que aceptaría el vendedor, información que el agente conoce por el encargo.",
      expectedAnswer:
        "El agente debe negarse a revelar el precio mínimo confidencial del vendedor, explicando que puede facilitar la negociación pero no romper la confidencialidad de una de las partes.",
      explanation:
        "El precio mínimo aceptable es uno de los datos expresamente reservados según la ficha de confidencialidad del módulo.",
      difficulty: "basic",
    },
    {
      id: "m13-e3",
      moduleId: "m13",
      type: "comprehension",
      question:
        'Explica con tus propias palabras la diferencia entre "ética", "deontología" y "cumplimiento" según el módulo, dando un ejemplo inmobiliario de cada nivel.',
      expectedAnswer:
        "Cumplimiento = mínimo legal verificable (ej. entregar CEE); deontología = deber profesional (ej. lealtad al cliente); ética = juicio ante zona gris no regulada (ej. no aprovechar la urgencia de un vendedor vulnerable).",
      explanation:
        "El módulo insiste en separar estos tres niveles para evitar respuestas genéricas en el examen.",
      difficulty: "basic",
    },
    {
      id: "m13-e4",
      moduleId: "m13",
      type: "case",
      question:
        'Una agencia recibe una reserva de 3.000 € en efectivo de un comprador que insiste en no dejar rastro documental "por rapidez".',
      expectedAnswer:
        "El agente debe rechazar el efectivo no protocolizado, exigir el uso de cuenta de empresa identificable y emitir recibo inmediato vinculado al expediente, explicando el motivo al cliente.",
      explanation:
        "El protocolo de custodia de fondos exige trazabilidad y evitar efectivo salvo supuestos legales y protocolizados.",
      difficulty: "medium",
    },
    {
      id: "m13-e5",
      moduleId: "m13",
      type: "decision",
      question:
        'Un propietario en un alquiler pide expresamente excluir a solicitantes con hijos pequeños "para evitar ruido".',
      expectedAnswer:
        "El agente debe rechazar el criterio por ser discriminatorio (situación familiar), aplicando solo criterios legítimos de solvencia y compatibilidad con la vivienda.",
      explanation:
        "La situación familiar es un criterio expresamente prohibido según la ficha de igualdad de trato.",
      difficulty: "basic",
    },
    {
      id: "m13-e6",
      moduleId: "m13",
      type: "case",
      question:
        'Un comercial usa IA para redactar la descripción de un chalet y el sistema "inventa" una piscina climatizada que no existe. El anuncio se publica sin revisión.',
      expectedAnswer:
        "El error debe corregirse de inmediato en todos los canales, avisando directamente a interesados en fase avanzada, y debe implementarse revisión humana obligatoria antes de publicar contenido generado por IA.",
      explanation:
        "El módulo establece que la IA no exime de responsabilidad humana y que la corrección debe llegar antes de que la información incorrecta llegue a más personas.",
      difficulty: "advanced",
    },
    {
      id: "m13-e7",
      moduleId: "m13",
      type: "comprehension",
      question:
        'Qué diferencia existe entre un "precio de mercado", un "precio de salida" y un "precio anzuelo"?',
      expectedAnswer:
        "El precio de mercado es una estimación objetiva basada en comparables; el precio de salida es la cifra elegida comercialmente por el propietario, normalmente algo superior; el precio anzuelo es una cifra irreal que no se pretende respetar, usada para captar contactos de forma desleal.",
      explanation:
        "Distinguir estos conceptos evita respuestas genéricas y prácticas comerciales desleales.",
      difficulty: "medium",
    },
    {
      id: "m13-e8",
      moduleId: "m13",
      type: "balear_scenario",
      question:
        "Dos agencias colaboran en la venta de una finca en Ciutadella sin haber firmado acuerdo de colaboración. Una de ellas intenta cerrar directamente con el comprador aportado por la otra.",
      expectedAnswer:
        "Debe reconocerse el incumplimiento del deber de colaboración leal, formalizar a posteriori el acuerdo con reparto de honorarios claro, y establecer como norma futura firmar el acuerdo antes de cualquier intercambio de cliente o documentación.",
      explanation:
        "El módulo exige un acuerdo previo por escrito que defina representación, reparto de honorarios y protección del cliente aportado.",
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m13-q1",
      question:
        "Según el módulo, ¿cuál es el orden correcto del método de decisión ante una situación éticamente compleja?",
      options: [
        "Firmar rápido para no perder al cliente",
        "Identificar el hecho, localizar la fuente, explicar el impacto por escrito y registrar el resultado",
        "Consultar solo si hay riesgo legal directo",
        "Aplicar siempre el criterio del compañero con más experiencia",
      ],
      correctAnswerIndex: 1,
      explanation:
        'La "secuencia práctica y evidencia" se repite en todas las fichas: identificar, localizar fuente, explicar por escrito y registrar el resultado.',
      sourceModuleId: "m13",
      legalReference: "Ficha 01, Método de decisión",
      difficulty: "basic",
    },
    {
      id: "m13-q2",
      question:
        '¿Qué nivel de exigencia profesional es "la parte verificable" mediante documentos, plazos y licencias?',
      options: ["Ética", "Deontología", "Cumplimiento", "Reputación"],
      correctAnswerIndex: 2,
      explanation:
        "El cumplimiento es la parte documentable y verificable, distinta de la ética (juicio) y la deontología (deberes profesionales).",
      sourceModuleId: "m13",
      legalReference: "Ficha 02, Ética, deontología y cumplimiento",
      difficulty: "basic",
    },
    {
      id: "m13-q3",
      question:
        "¿En qué artículos del Código Civil se basa la buena fe objetiva citada en el módulo?",
      options: [
        "Artículos 1 y 2",
        "Artículos 7 y 1258",
        "Artículos 33 y 47",
        "Artículos 609 y 1091",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo cita expresamente los artículos 7 y 1258 del Código Civil como fundamento de la buena fe objetiva y sus consecuencias contractuales.",
      sourceModuleId: "m13",
      legalReference: "Ficha 03, Fundamentos de integridad",
      difficulty: "medium",
    },
    {
      id: "m13-q4",
      question:
        "¿Cuál de las siguientes cuestiones exige derivación obligatoria a un profesional especializado según el módulo?",
      options: [
        "Explicar el proceso ordinario de compraventa",
        "Coordinar la firma",
        "Cálculo fiscal definitivo de una operación",
        "Resumir información de una fuente oficial",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El cálculo fiscal definitivo, junto con interpretación jurídica compleja o tasación hipotecaria, exige derivación técnica según la ficha de competencia profesional.",
      sourceModuleId: "m13",
      legalReference: "Ficha 04, Competencia profesional y límites del asesoramiento",
      difficulty: "medium",
    },
    {
      id: "m13-q5",
      question: "Un conflicto de interés bien gestionado, según el módulo, es aquel que:",
      options: [
        "No aparece nunca en el expediente",
        "Se resuelve siempre rechazando el encargo",
        "Aparece identificado, explicado y controlado",
        "Solo se declara si el cliente lo pregunta",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La ficha de independencia y conflictos de interés concluye que un conflicto bien gestionado es el que queda identificado, explicado y controlado, no el que desaparece del expediente.",
      sourceModuleId: "m13",
      legalReference: "Ficha 05, Independencia y conflictos de interés",
      difficulty: "basic",
    },
    {
      id: "m13-q6",
      question: "En materia de honorarios, ¿qué presunción debe evitarse según el módulo?",
      options: [
        "Que el cliente conoce el porcentaje de comisión",
        "Que una visita, reserva o firma de arras equivale siempre a comisión devengada",
        "Que existen impuestos aplicables a la comisión",
        "Que el pacto de honorarios debe ser por escrito",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo advierte explícitamente que no debe presuponerse que una visita, reserva o firma de arras equivalen siempre a comisión devengada.",
      sourceModuleId: "m13",
      legalReference: "Ficha 06, Transparencia en honorarios y remuneración",
      difficulty: "medium",
    },
    {
      id: "m13-q7",
      question:
        "¿Qué normativa reconoce el derecho a información completa, objetiva, veraz, clara, comprensible y accesible en operaciones de vivienda, según el módulo?",
      options: [
        "Real Decreto 515/1989",
        "Ley 12/2023, por el derecho a la vivienda",
        "RGPD",
        "Ley 5/2018 de vivienda de Illes Balears",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo cita expresamente la Ley 12/2023 como fuente de este derecho de información en vivienda.",
      sourceModuleId: "m13",
      legalReference: "Ficha 08, Información precontractual",
      difficulty: "medium",
    },
    {
      id: "m13-q8",
      question:
        "¿Cuál de estos criterios es legítimo para seleccionar inquilino o comprador según el módulo?",
      options: [
        "Nacionalidad",
        "Situación familiar",
        "Solvencia evaluada de forma proporcional",
        "Religión",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La ficha de igualdad de trato indica que solo son legítimos criterios de solvencia, compatibilidad con la operación y capacidad jurídica, evaluados proporcionalmente.",
      sourceModuleId: "m13",
      legalReference: "Ficha 11, Igualdad de trato, no discriminación e inclusión",
      difficulty: "basic",
    },
    {
      id: "m13-q9",
      question:
        "¿Qué dato NO debe reservarse como confidencial según la ficha de confidencialidad del módulo?",
      options: [
        "Precio mínimo aceptable del vendedor",
        "Urgencia de venta",
        "Información esencial del inmueble que afecta la decisión del comprador",
        "Conflictos familiares del propietario",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La información esencial del inmueble debe ser transparente hacia la otra parte; la confidencialidad no puede usarse para ocultar datos materiales de la operación.",
      sourceModuleId: "m13",
      legalReference: "Ficha 13, Confidencialidad y secreto profesional operativo",
      difficulty: "medium",
    },
    {
      id: "m13-q10",
      question:
        "Según la ficha de protección de datos, ¿qué principio exige pedir solo la información necesaria para la finalidad concreta?",
      options: ["Finalidad", "Minimización", "Seguridad", "Portabilidad"],
      correctAnswerIndex: 1,
      explanation:
        "La minimización es el principio expresamente descrito para limitar la recogida de datos a lo estrictamente necesario en cada fase.",
      sourceModuleId: "m13",
      legalReference: "Ficha 14, Protección de datos: minimización, finalidad y seguridad",
      difficulty: "basic",
    },
    {
      id: "m13-q11",
      question:
        "¿Qué autoridad recuerda en el módulo la exigencia de registros de actividades de tratamiento y protección de datos por defecto?",
      options: [
        "El Registro de la Propiedad",
        "La AEPD",
        "El Catastro",
        "La Dirección General de Vivienda del Govern",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo cita explícitamente a la AEPD como fuente de esta exigencia bajo RGPD y LO 3/2018.",
      sourceModuleId: "m13",
      legalReference: "Ficha 14, Protección de datos",
      difficulty: "medium",
    },
    {
      id: "m13-q12",
      question: "¿Qué práctica de publicidad es considerada de riesgo según el módulo?",
      options: [
        "Indicar el certificado energético del inmueble",
        'Anunciar "ideal Airbnb" sin comprobar título habilitante',
        "Explicar el estado de ocupación",
        "Detallar gastos previsibles",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Anunciar aptitud turística sin verificar el título habilitante es una práctica de riesgo expresamente señalada.",
      sourceModuleId: "m13",
      legalReference: "Ficha 09, Publicidad inmobiliaria ética",
      difficulty: "basic",
    },
    {
      id: "m13-q13",
      question: "¿Qué recuerda el módulo sobre los renders y el home staging virtual?",
      options: [
        "Deben presentarse siempre como el estado actual del inmueble",
        "No requieren aclaración si son de buena calidad",
        "Nunca deben presentarse como estado actual, y deben aclarar si requieren licencia",
        "Solo pueden usarse en promociones de obra nueva",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El módulo exige identificar los renders como propuesta y aclarar que la reforma simulada requiere viabilidad técnica, licencia, presupuesto y autorización.",
      sourceModuleId: "m13",
      legalReference: "Ficha 17, Fotografía, vídeo, drone e inteligencia artificial",
      difficulty: "medium",
    },
    {
      id: "m13-q14",
      question:
        "En el marco balear, ¿qué ley regula las medidas urgentes en materia de vivienda que incluyen el Registro Oficial de Agentes Inmobiliarios?",
      options: [
        "Ley 5/2018",
        "Ley 3/2024",
        "Ley 12/2023",
        "Real Decreto 515/1989",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo cita la Ley 3/2024, de medidas urgentes en materia de vivienda, que incluye disposiciones sobre requisitos y el Registro Oficial de Agentes Inmobiliarios, con sede en la Dirección General de Vivienda del Govern de les Illes Balears.",
      sourceModuleId: "m13",
      legalReference: "Ficha 39, Fuentes oficiales y protocolo de actualización",
      difficulty: "advanced",
    },
    {
      id: "m13-q15",
      question:
        "¿Qué debe hacer un agente si detecta que una vivienda protegida (VPO/VPL) se está anunciando como vivienda libre?",
      options: [
        "Publicarla igualmente si el propietario lo autoriza",
        "Confirmar el régimen aplicable y entregar información clara sobre precio máximo y limitaciones",
        "Ignorar el régimen si no hay reclamaciones previas",
        "Anunciarla como libre y aclarar el régimen solo si el comprador pregunta",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo exige confirmar el régimen de VPO/VPL y comunicar sus consecuencias antes de anunciar, no esperar a que el comprador pregunte.",
      sourceModuleId: "m13",
      legalReference: "Ficha 20, Urbanismo, turismo y vivienda protegida",
      difficulty: "medium",
    },
    {
      id: "m13-q16",
      question:
        "Según la ficha de reservas y arras, ¿qué debe evitarse absolutamente en la gestión de fondos de clientes?",
      options: [
        "Emitir recibo inmediato",
        "Mezclar fondos de cliente con gastos operativos",
        "Usar cuentas de empresa identificables",
        "Vincular el movimiento al expediente",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo prohíbe expresamente mezclar fondos de cliente con gastos operativos o aceptar instrucciones de pago opacas.",
      sourceModuleId: "m13",
      legalReference: "Ficha 23, Reservas, arras y cantidades entregadas",
      difficulty: "basic",
    },
    {
      id: "m13-q17",
      question: "¿Qué recomienda el módulo sobre el diseño de incentivos comerciales en la agencia?",
      options: [
        "Premiar exclusivamente el volumen de cierres",
        "Combinar volumen con calidad de expediente, cumplimiento de tiempos, colaboración y ausencia de incidencias graves",
        "No establecer ningún tipo de incentivo",
        "Basar el incentivo solo en la satisfacción declarada por el cliente",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El módulo advierte que premiar solo el cierre aumenta el riesgo de ocultar riesgos o presionar clientes, y recomienda incentivos combinados.",
      sourceModuleId: "m13",
      legalReference: "Ficha 32, Liderazgo ético, incentivos y presión comercial",
      difficulty: "advanced",
    },
    {
      id: "m13-q18",
      question:
        "En el caso práctico de la doble representación con oferta confidencial, ¿cuál es la actuación correcta?",
      options: [
        'Revelar el presupuesto máximo del comprador al vendedor porque "ya se sabe"',
        "Informar al vendedor de la oferta completa sin revelar datos privados de capacidad económica",
        "Rechazar automáticamente cualquier doble representación",
        "Dejar que las partes negocien directamente sin intervención de la agencia",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El caso práctico 2 establece que la agencia puede facilitar la negociación con la oferta completa, pero no revelará datos privados como el presupuesto confidencial.",
      sourceModuleId: "m13",
      legalReference: "Ficha 34, Caso práctico 2",
      difficulty: "advanced",
    },
  ],
};

export const m13Glossary: GlossaryItem[] = [
  {
    id: "g-m13-cadena-de-custodia-de-llaves",
    term: "Cadena de custodia (de llaves)",
    definition:
      "Registro documentado de cada entrega, copia, fecha, persona responsable y devolución de las llaves de un inmueble.",
    easyDefinition:
      "Un cuaderno que dice quién tiene las llaves de una vivienda en cada momento y por qué.",
    relatedModuleId: "m13",
  },
  {
    id: "g-m13-precio-anzuelo",
    term: "Precio anzuelo",
    definition:
      "Práctica de anunciar un precio que no se pretende respetar, o una oferta artificial, para atraer contactos y desviar al interesado hacia otro producto.",
    easyDefinition:
      "Poner un precio muy bajo solo para que la gente llame, sin intención real de vender a ese precio.",
    relatedModuleId: "m13",
  },
  {
    id: "g-m13-condicion-suspensiva",
    term: "Condición suspensiva",
    definition:
      "Cláusula que hace depender la eficacia de un contrato (reserva, arras) del cumplimiento de un hecho futuro, como obtener financiación.",
    easyDefinition:
      'Una condición que dice "esto solo se cumple si pasa tal cosa antes", como conseguir la hipoteca.',
    relatedModuleId: "m13",
  },
  {
    id: "g-m13-minimizacion-de-datos",
    term: "Minimización de datos",
    definition:
      "Principio de protección de datos que exige recoger solo la información estrictamente necesaria para la finalidad concreta del tratamiento.",
    easyDefinition:
      "Pedir solo los datos que realmente necesitas en cada momento, no todo lo que se te ocurra por si acaso.",
    relatedModuleId: "m13",
  },
  {
    id: "g-m13-doble-representacion",
    term: "Doble representación",
    definition:
      "Situación en la que una misma agencia o agente interviene simultáneamente en nombre de vendedor y comprador (o arrendador y arrendatario) en una misma operación.",
    easyDefinition:
      "Cuando la misma inmobiliaria trabaja a la vez para el que vende y para el que compra, lo que exige más cuidado con la información privada de cada uno.",
    relatedModuleId: "m13",
  },
  {
    id: "g-m13-home-staging-virtual",
    term: "Home staging virtual",
    definition:
      "Técnica de decoración o ambientación de un inmueble mediante imágenes digitales que muestran una propuesta de diseño, sin que refleje el estado físico real.",
    easyDefinition:
      'Una foto "decorada" por ordenador que muestra cómo podría quedar la casa, no cómo está ahora.',
    relatedModuleId: "m13",
  },
];

export const m13Alerts: string[] = [
  "Fecha de corte del contenido: el propio módulo indica que su contenido jurídico y operativo está revisado con fuentes oficiales disponibles a 4 de julio de 2026; cualquier actualización posterior debe verificarse contra fuente oficial antes de usarse en la app.",
  "Ley 3/2024 (Illes Balears), de medidas urgentes en materia de vivienda: incluye disposiciones sobre requisitos y el Registro Oficial de Agentes Inmobiliarios, con sede en la Dirección General de Vivienda del Govern de les Illes Balears — normativa relativamente reciente que debe destacarse como marco balear específico.",
  "Ley 12/2023, por el derecho a la vivienda: citada como fuente del derecho a información completa, objetiva, veraz, clara, comprensible y accesible en operaciones de vivienda.",
  "Protocolo de actualización recomendado por el propio módulo: actualizar cada seis meses normativa, modelos de encargo, aviso de privacidad, protocolos de anuncios, cuadro de honorarios, control de reservas y formación del equipo; el documento advierte expresamente que no debe usarse como asesoramiento individual, sino como checklist para decidir qué comprobar y a quién derivar.",
  "RGPD y LO 3/2018: el módulo remite a guías, modelos y criterios de la AEPD sobre responsabilidad proactiva, registro de actividades y protección de datos por defecto — área de cumplimiento sujeta a actualización frecuente por parte de la AEPD.",
];
