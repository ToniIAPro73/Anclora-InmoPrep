import type { Module, GlossaryItem } from "@/lib/types";

export const m01Module: Module = {
  id: "m01",
  code: "M01",
  title: "Derecho de la Propiedad",
  order: 1,
  description: "Titularidad, derechos reales, propiedad horizontal, usufructos, alodios y Derecho Civil Balear.",
  estimatedMinutes: 50,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m01-l1",
      moduleId: "m01",
      title: "El dominio, sus facultades y su función social",
      order: 1,
      summary: "La propiedad es el derecho pleno de gozar y disponer de un bien dentro de los límites legales y con función social, no un poder absoluto.",
      content: `El punto de partida es el artículo 348 del Código Civil, que define la propiedad como "el derecho de gozar y disponer de una cosa, sin más limitaciones que las establecidas en las leyes", añadiendo que el propietario tiene acción para reivindicar la cosa frente al tenedor o poseedor que no tenga derecho a conservarla. A este marco se suma el artículo 33 de la Constitución Española, que reconoce la propiedad privada y la herencia, pero delimita su contenido por la función social, exigiendo para la expropiación causa de utilidad pública o interés social y la correspondiente indemnización.

## Las cuatro facultades del propietario
El temario distingue cuatro facultades básicas, cada una con ejemplo inmobiliario asociado:
- Uso y disfrute: percibir frutos naturales, industriales o civiles (ejemplo: cobrar la renta de un alquiler o explotar un local).
- Disposición: vender, donar, hipotecar, gravar o transformar el bien dentro de los límites legales (ejemplo: constituir una hipoteca o una servidumbre).
- Exclusión: impedir ocupaciones o intromisiones sin título (ejemplo: cerrar una finca o exigir el cese de una actividad indebida).
- Reivindicación: recuperar la cosa de quien la posee sin derecho (ejemplo: acción contra quien retiene una finca sin título o tras extinguirse su derecho).

## Cómo se manifiesta la función social en la práctica
La función social no es una idea abstracta: opera a través de cuatro vías concretas que el agente debe reconocer en cada operación: el urbanismo (el planeamiento decide qué se puede construir, reformar o implantar), la vivienda (la ley establece deberes de información, conservación y límites a determinadas prácticas), costas y patrimonio (el interés público puede imponer servidumbres y autorizaciones), y las relaciones de vecindad en propiedad horizontal (el derecho privativo convive con el interés y la seguridad del edificio).

## Aplicación práctica en Mallorca
El temario insiste en varios ejemplos reales de la isla: una vivienda en costa puede estar sometida a servidumbres administrativas aunque sea de propiedad privada; una finca rústica puede ser propiedad del cliente pero tener un uso residencial, turístico o edificatorio severamente limitado; una vivienda en propiedad horizontal puede ser privativa y, al mismo tiempo, estar condicionada por estatutos, acuerdos de junta y cuotas comunitarias; y el derecho civil balear puede ser relevante en la titularidad matrimonial, sucesiones, alodios y derechos de habitación propios.

## La regla profesional que evita errores de comercialización
El temario marca una regla de oro que conecta esta lección con toda la due diligence del módulo: nunca traducir "es titular" como "puede hacer lo que quiera". La respuesta útil al cliente es "es titular, pero antes de comprometerse debemos revisar las limitaciones de uso, disposición y transmisión". Confundir una limitación legal general (por ejemplo, una norma urbanística) con una carga singular (por ejemplo, una servidumbre inscrita) es señalado expresamente como error frecuente: la norma urbanística es un límite genérico, mientras que la servidumbre es una limitación concreta que debe explicarse individualmente al comprador.`,
      easyExplanation: "Ser propietario de una vivienda no significa poder hacer absolutamente lo que uno quiera con ella. La ley te da cuatro poderes básicos —usarla, disponer de ella, excluir a otros y recuperarla si te la quitan sin derecho— pero todos ellos están limitados por el interés general: normas urbanísticas, protección de costas, reglas de la comunidad de vecinos, etc. Como agente, tu trabajo es distinguir entre \"esto lo limita la ley para todos\" y \"esto es una carga concreta de esta finca en particular\", y explicárselo siempre al comprador antes de que se comprometa.",
      balearExample: "Un cliente en Sóller quiere comprar una finca rústica con una caseta antigua para uso residencial permanente. El agente debe advertir que, aunque el vendedor es pleno propietario, el uso residencial en suelo rústico está limitado por el planeamiento municipal y puede no estar autorizado, con independencia de que la escritura no mencione ninguna carga específica.",
      keyConcepts: ["dominio", "función social", "art. 348 CC", "art. 33 CE", "uso y disfrute", "disposición", "exclusión", "reivindicación", "límite legal vs. limitación singular"],
      frequentErrors: [
        "Confundir una limitación legal general (urbanismo) con una carga singular (servidumbre inscrita).",
        "Presentar la propiedad como un derecho absoluto e ilimitado ante el cliente.",
        "Omitir en la publicidad aspectos esenciales de la realidad jurídica del inmueble.",
        "No verificar la normativa aplicable antes de prometer usos (construir, alquilar turísticamente, segregar, reformar fachada)."
      ],
      examples: [
        { id: "m01-l1-ex1", title: "Alquiler turístico", scenario: "Propietario pleno de un piso quiere explotarlo en plataformas turísticas.", application: "Debe verificarse la normativa turística y comunitaria antes de confirmar que puede hacerlo.", isBalearContext: true },
        { id: "m01-l1-ex2", title: "Reforma de fachada", scenario: "Propietario de un ático quiere modificar la fachada.", application: "Aunque es dueño del piso, la fachada es elemento común y está sujeta a normativa y acuerdos de comunidad.", isBalearContext: false },
        { id: "m01-l1-ex3", title: "Segregación de finca rústica", scenario: "Propietario quiere dividir su finca para vender una parte.", application: "La segregación está condicionada por la normativa urbanística y agraria aplicable, no solo por la voluntad del titular.", isBalearContext: true }
      ],
      completed: false
    },
    {
      id: "m01-l2",
      moduleId: "m01",
      title: "Límites, limitaciones, cargas y relaciones de vecindad",
      order: 2,
      summary: "Distinguir con precisión entre límite legal, limitación singular y carga es la base de cualquier informe de riesgos inmobiliario.",
      content: `El temario dedica una ficha completa a fijar tres conceptos que se confunden constantemente en la práctica comercial. Un límite es una frontera legal general del dominio (ejemplos: planeamiento, distancias, costas, convivencia), y lo que hay que revisar es la normativa aplicable y las licencias. Una limitación es una reducción singular del dominio (ejemplos: usufructo, servidumbre, prohibición de disponer), y lo que hay que revisar es la nota simple, la escritura y la licencia. Una carga es una obligación o responsabilidad vinculada al bien o a su titular (ejemplos: hipoteca, afección fiscal, cuotas comunitarias), y lo que hay que revisar son certificados, recibos y el estado de deudas.

## Método para explicarlo al comprador
El temario propone un protocolo de cuatro pasos: (1) describir el hecho con lenguaje claro —"la finca soporta un paso de terceros", nunca simplemente "hay una servidumbre"—; (2) aclarar la fuente —ley, Registro, comunidad, licencia o contrato—; (3) explicar el impacto en uso, valor, financiación, gastos o riesgo de litigio; y (4) proponer la comprobación o la condición suspensiva necesaria antes de reservar. La regla de publicidad comercial es tajante: debe reflejar los aspectos esenciales de la realidad jurídica del inmueble, y si una carga o limitación afecta a la decisión económica del comprador, no debe ocultarse ni relegarse a la escritura.

## Relaciones de vecindad
Un bloque específico trata los conflictos de vecindad, muy frecuentes en fincas rústicas, áticos y viviendas turísticas: (1) Aguas — el predio inferior debe recibir las aguas que naturalmente desciendan del superior, sin que el superior agrave artificialmente la servidumbre; (2) Luces y vistas — el Código Civil fija distancias mínimas para abrir vistas rectas u oblicuas sobre finca ajena, y antes de vender una reforma reciente hay que verificar licencia y respeto de linderos; (3) Plantaciones — existen distancias mínimas para árboles y arbustos, salvo ordenanzas o costumbres aplicables; (4) Inmisiones — ruidos, vibraciones, humos, olores, vertidos o usos molestos pueden generar responsabilidad y acciones de cese; (5) Deslinde — cuando la linde es dudosa, el Catastro no basta por sí solo, hay que contrastar título, registro, representación gráfica y realidad física.

## Caso de captación típico
Una vivienda anuncia "vistas despejadas" y el vecino afirma tener derecho a levantar un cerramiento. El temario advierte que no debe confirmarse la promesa comercial hasta revisar servidumbres, distancias, acuerdos y planeamiento: la vista no es un derecho adquirido salvo que exista una servidumbre de luces y vistas debidamente constituida.

## Acciones de protección del dominio
Sin necesidad de litigar personalmente, el agente debe reconocer cuatro acciones: reivindicatoria (recuperar la cosa, requiere dominio probado y posesión ajena sin título), declarativa (que se declare el dominio, requiere interés legítimo y controversia jurídica), negatoria (negar una carga o derecho real ajeno alegado, requiere prueba de inexistencia del gravamen) y deslinde y amojonamiento (fijar linderos, requiere confusión objetiva de linderos). La regla de prudencia es explícita: un conflicto judicial, una anotación de demanda o un deslinde pendiente no significa que la compraventa sea imposible, sino que el comprador debe entender el riesgo y que precio, arras y escritura deben estructurarse con asesoramiento jurídico. Además, el temario advierte: nunca afirmar que una finca "está libre de problemas" porque el vendedor lo diga; la diligencia se apoya en documentos recientes y comprobaciones, no en declaraciones verbales.`,
      easyExplanation: "No es lo mismo un límite (una regla general que afecta a todo el mundo, como no poder construir más de tres plantas), que una limitación (algo específico de esa finca, como que el vecino tenga derecho a pasar por ella) o una carga (una deuda o responsabilidad pegada al inmueble, como una hipoteca pendiente). Como agente debes explicar siempre de dónde viene cada restricción, qué documento la prueba y qué efecto tiene en el precio o la financiación, en vez de limitarte a decir \"hay una servidumbre\" sin más contexto.",
      balearExample: "En Deià, una casa se anuncia con \"vistas despejadas al mar\". El vecino colindante afirma tener derecho a levantar un muro que las bloquearía. El agente no debe confirmar la promesa comercial hasta comprobar si existe una servidumbre de luces y vistas inscrita, las distancias legales aplicables y el planeamiento municipal, porque la vista en sí no es un derecho adquirido.",
      keyConcepts: ["límite", "limitación", "carga", "servidumbre de aguas", "distancias de luces y vistas", "inmisiones", "deslinde y amojonamiento", "acción reivindicatoria", "acción negatoria"],
      frequentErrors: [
        "Confundir un límite legal general con una carga singular concreta.",
        "Prometer \"vistas garantizadas\" sin verificar servidumbres de luces y vistas.",
        "Usar el Catastro como única fuente para resolver una duda de deslinde.",
        "Afirmar que una finca \"está libre de problemas\" basándose solo en la palabra del vendedor.",
        "Ocultar en publicidad comercial una carga que afecta a la decisión económica del comprador."
      ],
      examples: [
        { id: "m01-l2-ex1", title: "Servidumbre de aguas", scenario: "Finca rústica en ladera recibe agua de la parcela superior.", application: "El predio inferior debe tolerarlo salvo agravación artificial por el superior.", isBalearContext: false },
        { id: "m01-l2-ex2", title: "Deslinde dudoso", scenario: "Linde entre dos fincas rústicas no coincide entre título y Catastro.", application: "Se requiere contrastar título, Registro, representación gráfica y realidad física, no solo Catastro.", isBalearContext: false },
        { id: "m01-l2-ex3", title: "Anotación de demanda", scenario: "Finca con litigio judicial en curso sobre su titularidad.", application: "La compraventa no es imposible, pero exige asesoramiento jurídico y estructurar precio/arras/escritura conforme al riesgo.", isBalearContext: false }
      ],
      completed: false
    },
    {
      id: "m01-l3",
      moduleId: "m01",
      title: "Modos de adquirir la propiedad, título y modo, y contratos privados",
      order: 3,
      summary: "La propiedad no se transmite solo con el contrato: se requiere título válido más modo o tradición, y los documentos privados deben reflejar la situación jurídica real de la finca.",
      content: `El artículo 609 del Código Civil reúne el mapa general de los modos de adquirir la propiedad: ley (la propiedad nace por mandato legal, ejemplo: adjudicación legal o efectos de ciertos regímenes, advertencia: no presuponer el título sin documento); donación (transmisión gratuita con requisitos formales, ejemplo: padres donan una vivienda a un hijo, advertencia: revisar fiscalidad y reserva de usufructo); sucesión (transmisión por fallecimiento, ejemplo: heredero vende inmueble heredado, advertencia: comprobar aceptación, adjudicación y titularidad registral); contrato + tradición (el acuerdo necesita entrega para transmitir, ejemplo: compraventa con escritura y entrega, advertencia: el contrato privado no equivale siempre a transmisión); y prescripción (adquisición por posesión en el tiempo, ejemplo: usucapión alegada sobre finca rústica, advertencia: requiere análisis jurídico y, normalmente, soporte judicial para Registro). La ocupación opera solo sobre bienes apropiables sin dueño y, en la práctica inmobiliaria, no es una vía ordinaria para adquirir inmuebles: la falta de uso no elimina automáticamente la titularidad de una finca.

## La teoría del título y el modo
La compraventa obliga a vender y comprar, pero la transmisión de la propiedad exige además tradición o entrega. El título es el negocio jurídico válido con finalidad transmisiva (prueba habitual: contrato privado, escritura, adjudicación hereditaria o donación) y el modo es el acto de entrega o tradición que atribuye la posesión (prueba habitual: entrega material, escritura pública o forma equivalente). El temario detalla las formas de tradición relevantes: tradición real (entrega material de la posesión, normalmente llaves y control efectivo del inmueble), tradición instrumental (el otorgamiento de escritura pública equivale a entrega salvo que de la propia escritura resulte lo contrario, art. 1462 CC), tradición simbólica (entrega de elementos que representan la posesión, cuando sea jurídicamente válida y coherente con el caso), y constitutum possessorium (el transmitente deja de poseer como dueño y sigue ocupando por un título distinto, por ejemplo como arrendatario). Es precisión clave que la escritura es la vía habitual de tradición, pero no la única: debe evitarse la frase absoluta "sin escritura nunca se transmite", porque depende de si existe una tradición válida.

## Contratos privados, reservas y arras
Estos documentos son herramientas comerciales útiles, pero deben encajar con la situación jurídica real de la finca y nunca sustituir una due diligence. El temario distingue: reserva (retirar temporalmente el inmueble del mercado, riesgo: condiciones, plazo, devolución y documentación pendiente), arras confirmatorias (anticipo y prueba del contrato, riesgo: no dan por sí solas derecho automático a desistir perdiendo o duplicando), arras penitenciales (facultan desistimiento si se pactan expresamente bajo el art. 1454 CC, riesgo: redacción inequívoca, importe y efectos), y arras penales (refuerzan el cumplimiento con penalización, riesgo: no confundirlas con las penitenciales). El contenido mínimo de una reserva profesional debe incluir: identificación exacta de partes e inmueble (dirección, referencia catastral y, si es posible, CRU); precio, forma de pago, plazo y destino de las cantidades entregadas; documentación que debe verificarse entre arras y escritura; y condiciones suspensivas relevantes (financiación, cargas, licencia, comunidad, ocupación, titularidad o derecho de adquisición preferente). Regla explícita: no usar una "reserva estándar" para una finca con usufructo, proindiviso, ocupante, heredero no inscrito o servidumbre pendiente; en esos casos la documentación manda sobre la velocidad comercial.

## Donación, herencia y adquisición familiar
La donación de inmuebles requiere escritura pública para ser válida; hay que comprobar si el donante conserva capacidad y si existen derechos de terceros que condicionen la transmisión, y nunca presentar la donación como "venta barata" porque tiene fiscalidad propia y puede afectar a legítimas y a futuras transmisiones. En herencias, la sucesión se abre por el fallecimiento, pero antes de vender se debe acreditar quién hereda y quién puede disponer mediante certificado de defunción, últimas voluntades, testamento o declaración de herederos, aceptación y adjudicación; si hay varios herederos, pueden estar en comunidad hereditaria (no confundir una cuota hereditaria con una finca individual adjudicada), y una venta con cadena registral pendiente puede ser viable pero requiere coordinación notarial y plazos realistas. Principio rector: la persona que firma como vendedor debe tener capacidad y poder de disposición; "es hijo del propietario" o "lo gestionaba él" no es título suficiente.`,
      easyExplanation: "Firmar un contrato de compraventa no significa que ya seas el dueño: hace falta además que te \"entreguen\" la propiedad, normalmente mediante escritura pública o la entrega física de las llaves. Si el vendedor firma un contrato privado pero muere antes de la escritura y sin haberte entregado la posesión, tú solo tienes derecho a exigir que se cumpla el contrato, no a decir que ya eres el dueño. Por eso las reservas y arras son útiles para \"aparcar\" una operación, pero nunca sustituyen a comprobar quién es realmente el titular y qué cargas tiene la finca.",
      balearExample: "En Cala Millor, Alicia firma un contrato privado de compraventa de un apartamento, paga parte del precio y pacta escritura dentro de dos meses. El vendedor conserva las llaves, sigue ocupando el inmueble y no le entrega la posesión. Antes de la escritura, el vendedor fallece. Alicia tiene título (el contrato) pero no modo (no hubo tradición), por lo que solo ostenta un derecho de crédito frente a los herederos, no la propiedad ya adquirida; la operación debe reconducirse con documentación sucesoria y coordinación notarial.",
      keyConcepts: ["art. 609 CC", "título y modo", "tradición real", "tradición instrumental", "art. 1462 CC", "arras confirmatorias", "arras penitenciales", "art. 1454 CC", "comunidad hereditaria"],
      frequentErrors: [
        "Afirmar que la propiedad \"ya está transmitida\" por el mero hecho de firmar un contrato privado.",
        "Usar una reserva estándar para fincas con usufructo, proindiviso o herederos no inscritos.",
        "Confundir arras confirmatorias con penitenciales, asumiendo un derecho automático a desistir.",
        "Presentar una donación como \"venta barata\" ignorando su fiscalidad y efecto en legítimas.",
        "Aceptar como vendedor a quien no acredita capacidad y poder de disposición (\"lo gestionaba él\")."
      ],
      examples: [
        { id: "m01-l3-ex1", title: "Escritura como tradición instrumental", scenario: "Comprador y vendedor otorgan escritura pública de compraventa.", application: "El otorgamiento equivale a entrega salvo que de la propia escritura resulte lo contrario.", isBalearContext: false },
        { id: "m01-l3-ex2", title: "Arras penitenciales mal redactadas", scenario: "Contrato de arras no menciona expresamente la facultad de desistir.", application: "Sin pacto expreso conforme al art. 1454 CC, no puede presumirse el derecho de desistimiento con pérdida/duplicación.", isBalearContext: false },
        { id: "m01-l3-ex3", title: "Venta con cadena hereditaria pendiente", scenario: "Heredero quiere vender un piso heredado antes de inscribir la adjudicación.", application: "Es viable pero exige coordinar notaría, acreditar aceptación/adjudicación y ajustar plazos realistas.", isBalearContext: false }
      ],
      completed: false
    },
    {
      id: "m01-l4",
      moduleId: "m01",
      title: "Accesión, posesión y usucapión",
      order: 4,
      summary: "Construir sobre suelo ajeno, poseer sin ser dueño y adquirir por el paso del tiempo son tres mecanismos con reglas y plazos muy distintos que el agente debe saber diferenciar.",
      content: `## Accesión y construcción sobre suelo
Como regla general, el propietario del suelo hace suyo lo que se incorpora al mismo (obras, ampliaciones, piscinas, muros, casetas o invasiones de linde), y esta regla debe analizarse con cuidado en cada operación. El temario distingue cuatro situaciones: obra en suelo propio con materiales ajenos (el dueño del suelo adquiere la obra e indemniza materiales en los términos legales; revisar licencias, facturas, pactos y posibles reclamaciones); construcción de buena fe en suelo ajeno (el dueño del suelo puede optar entre adquirir lo construido indemnizando u obligar a comprar el suelo, conforme al art. 361 CC; revisar linde real, buena fe, valor relativo y negociación); construcción de mala fe en suelo ajeno (el constructor puede perder lo construido sin indemnización; revisar fecha y conocimiento del linde); y extralimitación parcial (la jurisprudencia puede aplicar accesión invertida en supuestos muy tasados; requiere informe técnico y asesoramiento jurídico especializado). Advertencia explícita del temario: "la caseta lleva 20 años ahí" no prueba propiedad, licencia ni prescripción — hay que identificar primero suelo, construcción, título, permisos y posesión por separado.

## Posesión: concepto y efectos
La posesión es un poder de hecho sobre un bien que puede existir sin propiedad y, aun así, producir consecuencias jurídicas relevantes. El temario clasifica la posesión en: natural (mera tenencia o poder físico, no basta para usucapir), civil (tenencia con intención de comportarse como titular, puede ser relevante para prescripción si concurren requisitos), en concepto de dueño (se actúa como propietario, es requisito central para la usucapión), en concepto distinto (se posee reconociendo derecho ajeno, ejemplo: arrendatario, precarista o depositario), y de buena o mala fe (según haya conocimiento o ignorancia del vicio, afecta a frutos, gastos y responsabilidad), además de mediata/inmediata (titular indirecto frente a quien ocupa físicamente, ejemplo: propietario arrendador e inquilino). Efectos que hay que reconocer: la posesión merece tutela frente a despojos o perturbaciones sin que el procedimiento decida siempre la propiedad definitiva; el poseedor de buena fe puede tener derechos sobre frutos y gastos según el régimen de liquidación posesoria; y la posesión prolongada puede llevar a usucapión, pero no por el mero paso del tiempo ni contra toda evidencia documental.

## Usucapión: requisitos y plazos
La prescripción adquisitiva es excepcional en la intermediación, pero crítica en fincas rústicas, cerramientos históricos y propiedades familiares. Los requisitos comunes exigen que la posesión sea en concepto de dueño, pública, pacífica y no interrumpida; no basta con residir, cultivar de forma tolerada o pagar ciertos recibos si la posesión reconoce que el dominio pertenece a otro. Los plazos para inmuebles son: usucapión ordinaria (requiere además buena fe y justo título, plazo de 10 años entre presentes y 20 años entre ausentes) y usucapión extraordinaria (no exige justo título ni buena fe, plazo de 30 años sin interrupción). El protocolo de actuación cuando un vendedor dice "esto es mío por usucapión" es: (1) solicitar la historia de posesión, títulos, testigos, recibos, planos y referencias catastrales; (2) revisar si existe titular registral distinto y si hay oposición de herederos o colindantes; (3) no anunciar como dominio consolidado sin informe jurídico, ya que para inscribir frente a un titular registral puede ser necesaria una resolución judicial o el procedimiento adecuado; y (4) ajustar precio y calendario, porque la incertidumbre de dominio afecta a financiación y comprador objetivo.`,
      easyExplanation: "Si alguien construye en un terreno que no es suyo, la ley decide en general que el dueño del suelo se queda con lo construido, aunque en algunos casos deba indemnizar. La posesión (tener físicamente algo) no es lo mismo que la propiedad: puedes vivir 20 años en una casa sin ser su dueño legal, y esos 20 años no bastan por sí solos para convertirte en propietario salvo que cumplas requisitos muy concretos de tiempo (10, 20 o 30 años según el caso) y de comportamiento (actuar públicamente como dueño, sin ocultarlo y sin reconocer que es de otro). Nunca hay que dar por buena la frase \"esto es mío desde hace años\" sin comprobar documentos.",
      balearExample: "En una finca rústica de Sencelles, el propietario asegura que una caseta de aperos \"lleva 20 años ahí\" y por tanto es suya por usucapión, aunque la nota simple no la menciona y el linde con la parcela vecina es dudoso. El agente no debe anunciar la finca como \"libre de discusión\" sin antes identificar quién construyó, con qué título, si hubo permisos y si la posesión ha sido pública y pacífica durante el plazo legal.",
      keyConcepts: ["accesión", "art. 361 CC", "buena/mala fe constructiva", "posesión natural y civil", "posesión en concepto de dueño", "usucapión ordinaria", "usucapión extraordinaria", "plazos de 10/20/30 años"],
      frequentErrors: [
        "Asumir que una construcción antigua (\"lleva 20 años ahí\") prueba propiedad, licencia o prescripción.",
        "Confundir posesión con propiedad y presentar a un mero poseedor como titular pleno.",
        "Anunciar un dominio como \"consolidado por usucapión\" sin informe jurídico previo.",
        "No distinguir entre los plazos de usucapión ordinaria (10/20 años) y extraordinaria (30 años).",
        "Ignorar la necesidad de resolución judicial o procedimiento adecuado para inscribir frente a titular registral distinto."
      ],
      examples: [
        { id: "m01-l4-ex1", title: "Construcción de buena fe en suelo ajeno", scenario: "Un vecino construye un muro creyendo erróneamente que el suelo es suyo.", application: "El dueño del suelo puede optar entre indemnizar y quedarse la obra, u obligar al constructor a comprar el suelo (art. 361 CC).", isBalearContext: false },
        { id: "m01-l4-ex2", title: "Usucapión ordinaria", scenario: "Posesión en concepto de dueño, con buena fe y justo título, durante 12 años entre presentes.", application: "Se cumple el plazo de 10 años exigido para la usucapión ordinaria entre presentes.", isBalearContext: false },
        { id: "m01-l4-ex3", title: "Posesión en concepto distinto", scenario: "Un arrendatario ocupa una vivienda durante 25 años pagando renta.", application: "No puede usucapir porque posee reconociendo el derecho ajeno del propietario, no en concepto de dueño.", isBalearContext: false }
      ],
      completed: false
    },
    {
      id: "m01-l5",
      moduleId: "m01",
      title: "Ocupación ilegal, usufructo, uso, habitación y derecho de superficie",
      order: 5,
      summary: "Existen derechos reales limitados (usufructo, uso, habitación, superficie) que desdoblan las facultades del dominio, y situaciones de ocupación ilegal que exigen un protocolo profesional muy delimitado.",
      content: `## Ocupación ilegal y protección de la posesión
Es una materia sensible en la que hay que evitar mitos, no recomendar vías de hecho y separar el diagnóstico penal, civil y operativo. Conceptos básicos: el allanamiento de morada es la entrada o permanencia no consentida en la morada ajena, y su calificación depende de hechos concretos y corresponde a las autoridades y tribunales; la usurpación es la ocupación de un inmueble que no constituye morada, también con requisitos y procedimientos propios; existe además la vía civil (tutela posesoria, precario u otras acciones según la relación entre ocupante y titular); y la Ley 5/2018 introdujo un cauce civil específico para la recuperación inmediata de la posesión en determinados supuestos por personas físicas, entidades sin ánimo de lucro y entidades públicas propietarias o poseedoras legítimas. El protocolo de agencia establece: antes de visitar, confirmar quién tiene llaves y quién ocupa, nunca organizar una visita sin control posesorio; si hay ocupación o conflicto, parar la comercialización ordinaria y derivar a abogado, sin prometer plazos de desalojo; recomendar prevención legal (alarmas, revisiones, documentación ordenada, suministros y reacción temprana ante incidencias); y no aconsejar cortes de suministros, cambios de cerradura o desalojo por cuenta propia. Límite profesional explícito: el agente identifica el riesgo y documenta la situación; la estrategia judicial y penal debe ser definida por profesionales habilitados.

## Usufructo y nuda propiedad
Una vivienda puede tener dos titulares con facultades distintas: vender el pleno dominio exige que comparezcan quienes ostentan los derechos necesarios. El usufructo es el derecho a disfrutar bienes ajenos conservando su forma y sustancia, y puede nacer por ley, contrato, testamento o prescripción; el usufructuario suele asumir gastos y reparaciones ordinarias, mientras que el nudo propietario asume las extraordinarias, con los matices del título y del Código Civil; el usufructo puede ser vitalicio en personas físicas y tiene límite temporal en personas jurídicas; y el usufructuario puede arrendar, pero el contrato no puede prolongar sus efectos más allá de la extinción del usufructo en los términos legales. La nuda propiedad es el dominio desprovisto temporalmente de la facultad de disfrute; la venta de nuda propiedad permite al vendedor monetizar el bien reservándose el usufructo, pero el comprador debe saber que no obtiene posesión ni uso inmediato. Dato de valoración fiscal citado en el temario: para ciertos impuestos, el usufructo vitalicio se valora habitualmente como 89 menos la edad del usufructuario, con límites de 10 % y 70 % — es una regla fiscal, no una tasación de mercado automática.

## Uso, habitación y "estatge" balear
Son derechos personalísimos que pueden hacer inviable una entrega inmediata de posesión aunque el inmueble se pueda transmitir. El uso permite percibir los frutos suficientes para las necesidades del usuario y su familia, limitando el disfrute del propietario. La habitación permite ocupar las piezas necesarias en casa ajena, pudiendo impedir la entrega de vivienda libre. El "estatge" balear es un derecho consuetudinario personalísimo e intransmisible a habitar gratuitamente en la casa, con uso de dependencias comunes, regulado por la Compilación balear como variedad consuetudinaria propia, que debe detectarse en títulos, sucesiones o pactos familiares y no debe tratarse como un simple alquiler ni como un usufructo sin leer el título. Qué hay que comprobar en todos estos derechos: si el derecho está inscrito, si consta en escritura o si deriva de una sucesión o acuerdo familiar; quién ocupa efectivamente y desde cuándo (un inmueble "con derecho de habitación" no equivale a un inmueble libre); duración, causas de extinción, reparto de gastos y posibilidad de renuncia; y si el comprador adquiere pleno dominio, nuda propiedad o un bien gravado con derecho de uso.

## Derecho de superficie
Permite separar temporalmente la propiedad del suelo y la de lo construido, siendo frecuente en vivienda asequible y promociones sobre suelo público (regulado en los arts. 53 y 54 del Real Decreto Legislativo 7/2015). Reglas esenciales: el superficiario puede construir en rasante, vuelo o subsuelo ajeno y mantener temporalmente la propiedad de lo edificado; también puede constituirse sobre construcciones ya existentes (viviendas, locales o elementos privativos); su válida constitución exige escritura pública e inscripción en el Registro de la Propiedad (es una de las excepciones clásicas en las que la inscripción tiene carácter constitutivo); la duración debe fijarse y no puede superar los 99 años; y al expirar el plazo, el dueño del suelo adquiere lo edificado salvo pacto de liquidación, sin indemnización por defecto. Pregunta obligatoria al comprador: ¿está comprando pleno dominio o un derecho temporal de superficie? El precio, la financiación, la reventa y la herencia pueden diferir de forma relevante.`,
      easyExplanation: "No siempre quien vive en una casa o la disfruta es su dueño pleno: puede haber alguien con usufructo (disfruta pero no es dueño del todo), con derecho de uso o habitación (solo puede vivir ahí, sin poder alquilarlo ni venderlo), o con un derecho de superficie (es dueño de lo construido pero no del suelo, y solo durante un tiempo limitado, máximo 99 años). Cuando compras \"nuda propiedad\" no vas a poder entrar a vivir mientras el usufructuario esté vivo. Y si aparece alguien ocupando ilegalmente, como agente nunca debes aconsejar tomarte la justicia por tu mano: cortar la luz o cambiar la cerradura por tu cuenta no es tu papel, hay que derivar a un abogado.",
      balearExample: "En Inca, tras una herencia, la madre de 74 años tiene el usufructo vitalicio de una vivienda y sus dos hijos poseen la nuda propiedad por mitades. Quieren vender \"la vivienda libre\" por 300.000 euros, pero para transmitir el pleno dominio deben intervenir tanto la usufructuaria como los nudos propietarios; si solo venden los hijos, el comprador adquiere nuda propiedad, sin uso ni posesión mientras subsista el usufructo.",
      keyConcepts: ["usufructo", "nuda propiedad", "regla fiscal 89-edad", "uso", "habitación", "estatge balear", "derecho de superficie", "arts. 53-54 RDL 7/2015", "allanamiento de morada", "Ley 5/2018"],
      frequentErrors: [
        "Anunciar una vivienda \"libre\" cuando en realidad está gravada con usufructo, uso o habitación.",
        "Tratar el \"estatge\" balear como un simple alquiler o como un usufructo sin revisar el título.",
        "Confundir la valoración fiscal del usufructo (regla 89-edad) con el precio de mercado real.",
        "Aconsejar al propietario cortar suministros o cambiar la cerradura ante una ocupación ilegal.",
        "Prometer plazos de desalojo en casos de ocupación sin que exista resolución judicial."
      ],
      examples: [
        { id: "m01-l5-ex1", title: "Venta de nuda propiedad", scenario: "Comprador adquiere solo la nuda propiedad de un piso con usufructuario vitalicio de 74 años.", application: "El valor fiscal orientativo del usufructo se calcula con la regla 89-edad (15% a los 74 años), dentro de los límites del 10-70%, pero el precio de mercado no tiene por qué replicar esa cifra fiscal.", isBalearContext: false },
        { id: "m01-l5-ex2", title: "Derecho de superficie en vivienda asequible", scenario: "Promoción sobre suelo público con derecho de superficie a 75 años.", application: "El comprador no adquiere el suelo, solo lo edificado durante el plazo pactado; al expirar, el dueño del suelo lo adquiere salvo pacto de liquidación.", isBalearContext: false },
        { id: "m01-l5-ex3", title: "Ocupación ilegal detectada en visita", scenario: "Agente descubre que la vivienda a comercializar está ocupada sin consentimiento del propietario.", application: "Debe parar la comercialización ordinaria, no organizar visitas sin control posesorio y derivar el caso a abogado, sin prometer plazos de desalojo.", isBalearContext: false }
      ],
      completed: false
    },
    {
      id: "m01-l6",
      moduleId: "m01",
      title: "Servidumbres, derechos de adquisición preferente y comunidad de bienes (proindiviso)",
      order: 6,
      summary: "Las servidumbres, los derechos de tanteo/retracto/opción y la comunidad de bienes son mecanismos que pueden desplazar o condicionar al comprador aparente si no se respetan sus requisitos.",
      content: `## Servidumbres: mapa conceptual y tipos privados de mayor impacto
Una servidumbre grava un predio en beneficio de otro y puede afectar acceso, vistas, agua, instalaciones y valor. Sus elementos son: predio dominante (finca que recibe la utilidad), predio sirviente (finca que soporta el gravamen), titulares distintos (la servidumbre predial requiere fincas de diferente dueño) y utilidad objetiva (debe beneficiar la finca, no solo a una persona concreta). Se clasifican en continuas o discontinuas (según se usen sin acto humano o requieran intervención), aparentes o no aparentes (según tengan señales exteriores visibles), positivas o negativas (obligan a tolerar/hacer o impiden un uso al predio sirviente), y legales o voluntarias (nacen de la ley o de negocio jurídico) y prediales o personales (no confundir una carga real de finca con un mero permiso personal). En Mallorca son especialmente relevantes las servidumbres de paso (acceso de finca enclavada a camino público, con indemnización si procede; verificar trazado, ancho, titularidad, vehículos y mantenimiento), luces y vistas (limitaciones o derechos sobre huecos y vistas; verificar distancia, antigüedad, licencia y apariencia) y de acueducto e instalaciones (conducción de agua por finca ajena, o paso de cableado y saneamiento; verificar título, caudal, titular responsable y coste de reparación). Extinción: las servidumbres pueden extinguirse, entre otras causas, por no uso durante veinte años, por consolidación, renuncia o pérdida de la finca; el cómputo y la prueba dependen de la clase de servidumbre. Error frecuente señalado expresamente: cerrar un paso porque "nunca lo usa nadie" — si la servidumbre existe y no ha prescrito, el cierre puede generar reclamación y afectar a la venta.

## Servidumbres administrativas y límites públicos
La propiedad privada convive con potestades públicas y en zonas sensibles la due diligence debe empezar antes de publicar. Ámbitos: costas (protección, tránsito, acceso al mar e influencia; comprobación mediante deslinde, nota registral y autorizaciones), carreteras (zonas de dominio público, servidumbre y afección; comprobación mediante titular de la vía, planos y distancias), y aguas (cauces, zonas inundables, servidumbres de paso y concesiones; comprobación mediante visores hidráulicos y títulos de aprovechamiento). Regla de trabajo específica sobre costas: la Ley 22/1988 de Costas establece, con carácter general, una servidumbre de protección de 100 metros desde la ribera del mar, con regímenes transitorios y excepciones que obligan a revisar cada tramo; también existe zona de tránsito. No debe fijarse una cifra operativa definitiva sin consultar el deslinde y el régimen transitorio aplicable a la finca concreta. Regla "primera línea": "está cerca del mar" activa una revisión reforzada: deslinde, servidumbres, concesiones, autorización de obras y posible discrepancia entre realidad, Catastro y Registro.

## Tanteo, retracto y opción de compra
Los derechos de adquisición preferente pueden desplazar al comprador elegido si no se respetan los requisitos y plazos. El tanteo opera antes de transmitir (ejemplos: arrendatario o Administración en supuestos legales; control mediante notificación fehaciente de precio y condiciones); el retracto opera después de transmitir (ejemplos: comuneros, colindantes, arrendatario; control mediante plazo breve y reembolso de precio/gastos); y la opción de compra deja que el optante decida si compra dentro de plazo (ejemplos: inversión, alquiler con opción; control mediante precio, plazo, prima e inscripción si interesa). Retractos civiles a memorizar: entre comuneros (cuando se vende a un extraño la cuota de otro copropietario), entre colindantes (en venta de finca rústica de cabida no superior a una hectárea, con excepciones), y el plazo común del retracto legal del Código Civil de nueve días desde la inscripción, o desde el conocimiento si no hubo inscripción; el retracto de comuneros excluye al de colindantes. Regla operativa: en proindivisos no hay que buscar primero un tercero comprador; hay que identificar a los comuneros, documentar la comunicación y explicar al potencial inversor el riesgo de retracto.

## Comunidad de bienes: el proindiviso
Varios titulares son dueños de cuotas ideales, no de una parte física determinada, salvo que exista división o uso válido. Reglas del Código Civil: las cuotas se presumen iguales si no se prueba otra proporción; cada comunero puede usar la cosa según su destino sin perjudicar a los demás; la alteración y disposición de la cosa común exige unanimidad, con los matices legales; cada comunero puede disponer de su cuota propia, sujeta a retractos legales; y nadie está obligado a permanecer en comunidad, salvo pactos temporales admisibles. Consecuencias comerciales: no anunciar una cuota indivisa como "una mitad de la vivienda" si no existe división física o asignación jurídicamente eficaz; revisar pactos de uso, contratos de arrendamiento, ocupantes, cargas y voluntad de los demás comuneros; y un comprador de cuota adquiere una posición potencialmente conflictiva, el precio debe reflejar liquidez, control y salida posibles. Frase útil citada: "se vende el 50% proindiviso" no equivale a "se vende el piso de abajo" — solo sería equivalente si hay una estructura jurídica y registral que lo respalde.

## Extinción de condominio y división
En una vivienda indivisible, la salida típica no es "partirla": es adjudicar a uno compensando a los demás, o vender y repartir. Opciones habituales: adjudicación a uno o varios comuneros con compensación económica al resto; venta a tercero y reparto del precio conforme a cuotas; venta de cuota individual, con riesgo de retracto y menor valor de mercado; y pacto temporal de indivisión (puede evitar una división inmediata dentro de los límites legales, pero debe documentarse bien). La fiscalidad de la extinción de condominio tiene tratamiento propio y depende de indivisibilidad, adjudicación proporcional, excesos de adjudicación y compensación; como agente, hay que identificar la alternativa y derivar el cálculo a asesoría fiscal antes de presentar un "ahorro garantizado". Checklist de venta de proindiviso: título de origen, cuotas, herencias pendientes y estado registral; comunicaciones a comuneros y análisis de retracto; posibilidad urbanística de dividir o de propiedad horizontal, si se ofrece como alternativa; y valor de la cuota frente a valor del pleno dominio y coste de salida judicial. Criterio: la mediación puede aportar una solución, pero nunca hay que ocultar que una venta de cuota puede acabar en división judicial si no hay acuerdo.`,
      easyExplanation: "Una servidumbre es un derecho que tiene otra finca sobre la tuya (por ejemplo, pasar por tu terreno para llegar a la carretera), y hay que comprobar quién la usa, por dónde y con qué frecuencia, no basta con que la nota simple la mencione de pasada. Si tu finca está cerca del mar, hay que revisar especialmente la franja de 100 metros de servidumbre de costas. Además, en ciertas ventas otras personas (un vecino colindante, un copropietario, un inquilino) tienen derecho a \"colarse\" en la compra en tu lugar si no se les avisa correctamente y respetan los plazos (normalmente 9 días). Y si compras solo \"una parte\" de una finca que pertenece a varios dueños (proindiviso), no estás comprando un piso concreto, sino un porcentaje de todo, con todo lo que eso implica de complicación para venderlo después.",
      balearExample: "En Pollença, un chalet sobre finca rústica tiene una nota simple que menciona una servidumbre de paso y la finca está afectada por un deslinde de costas en tramitación; el propietario asegura que \"no afecta a nada\". El agente debe averiguar a favor de qué finca existe la servidumbre, su recorrido y uso efectivo, y consultar el expediente de deslinde de costas en fuentes oficiales antes de publicitar la finca como \"privacidad total\" o \"ampliable\".",
      keyConcepts: ["predio dominante y sirviente", "servidumbre de paso", "servidumbre de costas (100 m)", "tanteo", "retracto de comuneros y colindantes", "plazo de 9 días", "comunidad de bienes/proindiviso", "extinción de condominio"],
      frequentErrors: [
        "Cerrar un paso servidumbre porque \"nunca lo usa nadie\", sin comprobar si ha prescrito.",
        "Fijar una cifra operativa de servidumbre de costas sin consultar el deslinde y régimen transitorio de la finca concreta.",
        "Buscar un comprador externo para una cuota indivisa antes de identificar a los comuneros y su derecho de retracto.",
        "Anunciar una cuota proindivisa como si fuera una parte física determinada del inmueble (\"la mitad de abajo\").",
        "Presentar la extinción de condominio como un \"ahorro fiscal garantizado\" sin derivar el cálculo a asesoría especializada."
      ],
      examples: [
        { id: "m01-l6-ex1", title: "Servidumbre de paso enclavada", scenario: "Finca rústica sin salida directa a camino público, con servidumbre de paso sobre finca vecina.", application: "Verificar trazado, ancho, titularidad y si el paso sigue siendo efectivamente usado antes de anunciar el acceso.", isBalearContext: false },
        { id: "m01-l6-ex2", title: "Retracto de colindantes", scenario: "Venta de finca rústica de menos de una hectárea a un comprador ajeno a la zona.", application: "El colindante puede ejercer retracto en el plazo de 9 días desde la inscripción, salvo excepciones legales.", isBalearContext: false },
        { id: "m01-l6-ex3", title: "Venta de cuota proindivisa", scenario: "Tres hermanos son copropietarios de una vivienda en Manacor y uno quiere vender su tercio a un inversor externo.", application: "El comprador adquiere una cuota ideal, con riesgo de retracto de los otros comuneros y posible salida por división judicial si no hay acuerdo.", isBalearContext: true }
      ],
      completed: false
    },
    {
      id: "m01-l7",
      moduleId: "m01",
      title: "Propiedad horizontal, complejos inmobiliarios y derecho civil balear",
      order: 7,
      summary: "La propiedad horizontal combina elementos privativos y comunes regidos por título, estatutos y mayorías específicas, y en Mallorca se suma la singularidad del derecho civil balear (alodios, laudemio, \"estatge\").",
      content: `## Propiedad horizontal: estructura básica
Cada propietario tiene una finca privativa y una cuota de participación inseparable sobre los elementos comunes; el edificio funciona con reglas propias reguladas en la Ley 49/1960 de Propiedad Horizontal. Elementos básicos: elemento privativo (piso, local, plaza o trastero delimitado, con uso y disposición propios dentro de límites legales y comunitarios), elemento común (suelo, estructura, fachadas, cubiertas, escaleras e instalaciones generales, que no se pueden alterar libremente), cuota de participación (porcentaje fijado en el título constitutivo que determina gastos, votos y valor en la comunidad) y título constitutivo y estatutos (describen el edificio y sus elementos y regulan usos, prohibiciones, gastos y reglas especiales, vinculando a terceros si están inscritos). Primera regla para el agente: no asumir que todo lo que está dentro de una vivienda es privativo — terrazas, cubiertas, patios, fachadas, conductos, muros y elementos estructurales pueden ser comunes, comunes de uso exclusivo o privativos según título y estatutos. Antes de prometer uso, reforma o actividad hay que pedir título constitutivo, estatutos, últimas actas y certificado de deudas.

## Órganos de gobierno, juntas y mayorías
La comunidad toma decisiones por la junta; actas y convocatorias son documentos de due diligence, no simple burocracia. Órganos principales: la junta de propietarios (órgano de decisión; aprueba cuentas, presupuesto, obras y acuerdos), el presidente (representa legalmente a la comunidad y ejecuta su voluntad dentro de sus funciones), y secretario y administrador y vicepresidentes (pueden ser el propio presidente o profesionales; custodian documentación, certifican y gestionan, o apoyan/sustituyen al presidente conforme a ley y acuerdos). Qué leer en actas recientes: derramas aprobadas o previstas, obras pendientes y litigios; morosidad significativa que pueda afectar caja y futuras cuotas; acuerdos sobre uso turístico, ruidos, mascotas, obras o actividades; e impugnaciones de acuerdos o falta de quórum/documentación. Advertencia de diligencia: el certificado de deudas no sustituye a las actas — puede estar al día y, aun así, existir una derrama futura ya aprobada o un problema estructural conocido.

Las mayorías combinan unanimidad, mayorías reforzadas, mayoría simple, acuerdos obligatorios y simples comunicaciones: título constitutivo/estatutos (unanimidad como regla general, revisar excepción legal aplicable); obras necesarias de conservación/seguridad (obligatorias en supuestos legales, no siempre exigen acuerdo previo de junta); accesibilidad y eficiencia energética (reglas específicas que pueden ser obligatorias o requerir mayoría doble según el caso, con límites de repercusión económica — ver Ley Orgánica 1/2025, disposición final cuarta); infraestructura de telecomunicaciones/renovables (mayorías específicas, a menudo un tercio para ciertos acuerdos, no todos los propietarios quedan obligados al coste); y uso turístico del art. 5.e LAU (3/5 de propietarios y cuotas, exige acuerdo expreso previo de junta desde abril de 2025). Regla práctica: no confirmar una mayoría por intuición, hay que identificar el acuerdo concreto, su base legal, si afecta al título/estatutos y cómo se computan propietarios y cuotas.

## Deudas comunitarias, afección real y uso turístico
La compraventa de un piso exige mirar el presente, pero también las deudas y acuerdos que pueden seguir al inmueble. El adquirente de una vivienda o local en propiedad horizontal responde con el propio inmueble de determinadas deudas comunitarias: la anualidad corriente y los tres años naturales anteriores. Por eso el vendedor debe aportar certificado de deudas emitido por secretario con el visto bueno del presidente, salvo exoneración expresa del comprador. La comunidad debe mantener un fondo de reserva de al menos el 10% de su último presupuesto ordinario; no es un indicador absoluto de salud financiera, pero una dotación inexistente o insuficiente es una señal para revisar el estado del edificio. Uso turístico desde el 3 de abril de 2025: el propietario que quiera realizar la actividad del artículo 5.e LAU debe obtener aprobación expresa de la comunidad; la aprobación, limitación, condicionamiento o prohibición exige 3/5 de propietarios y cuotas; las actividades ya acogidas a la normativa sectorial antes de la entrada en vigor mantienen su régimen según la disposición adicional; y el acuerdo civil de comunidad no sustituye licencia, inscripción, zonificación ni demás requisitos turísticos.

## Complejos inmobiliarios privados
Las urbanizaciones con varios edificios o fases pueden tener una "comunidad de comunidades" y obligaciones adicionales, reguladas en el artículo 24 de la Ley de Propiedad Horizontal, que pueden integrar edificios, parcelas, viales, instalaciones o servicios comunes. Riesgos en una compraventa: puede haber dos o más cuotas (una de subcomunidad/edificio y otra de entidad urbanística o supracomunidad); las normas de uso de piscina, seguridad, viales, zonas verdes y alquiler pueden venir de órganos distintos; las derramas pueden aprobarse en órganos distintos, hay que pedir actas y certificados de todas las entidades que afecten a la finca; y no basta con que el administrador del bloque diga "está al corriente" si existe una comunidad general independiente. Pregunta de captación: "¿qué comunidades paga esta finca?" debe contestarse con documentos, no con una cifra mensual aislada; hay que solicitar recibos, certificados y estatutos de cada nivel de comunidad. Es especialmente útil en residenciales turísticos, complejos costeros y urbanizaciones con servicios compartidos.

## Derecho civil balear: por qué importa y alodios/laudemio
No todo inmueble situado en Mallorca queda sujeto automáticamente al régimen civil balear; la ley aplicable depende, entre otros factores, de la vecindad civil y de las reglas de derecho internacional privado. Fuentes: la Compilación del Derecho Civil de las Illes Balears (Decreto Legislativo 79/1990, modificada entre otras por Ley 7/2017) y la normativa autonómica civil aplicable; la costumbre y los principios generales del derecho civil propio; y de forma supletoria, el Código Civil estatal cuando no sea contrario a los principios del derecho civil balear. Para el régimen económico matrimonial, la Compilación prevé como régimen supletorio la separación de bienes cuando resulte aplicable el derecho civil balear; no basta con que la vivienda esté en Mallorca, hay que verificar vecindad civil, capitulaciones y ley aplicable al matrimonio, porque la vivienda habitual requiere atención especial al consentimiento de ambos cónyuges aunque sea de titularidad individual.

Los alodios y censos se regulan en la Compilación balear y son la singularidad mallorquina más específica del temario: pueden constar como derecho del dominio directo frente al dominio útil de la finca; en una transmisión onerosa puede devengarse laudemio, y si no consta cantidad pactada, la Compilación fija el 0,5% del valor de la finca calculado según su régimen específico (el temario señala expresamente esta como corrección respecto de una cifra de referencia anterior del 1%, aclarando que el cálculo depende del título y la norma aplicable); el alodio puede extinguirse por prescripción de cinco años desde la inscripción de la última transmisión onerosa, o desde el conocimiento, si no hubo reclamación, pago o reconocimiento; y es redimible en los términos de la Compilación, dependiendo el cálculo concreto de título, valor aplicable y circunstancias de la finca. Protocolo si aparece un alodio en la nota simple: identificar el título del alodio y al eventual titular del dominio directo; solicitar cálculo de laudemio, recibos, reclamaciones y cualquier escritura de redención o cancelación; informar por escrito a vendedor y comprador de coste, plazo y alternativa de redimir/cancelar antes de la venta; y coordinar con notaría y asesoría, sin asumir que "ya no se cobra" sin prueba.

## Due diligence de propiedad: protocolo integral de agencia
El temario cierra con una ficha que convierte todo el módulo en una lista de trabajo real antes de firmar un encargo o publicar un inmueble, con cinco fases: titularidad (quién es titular, cuotas, estado civil y facultad de disponer; documentos: nota simple, escritura, DNI, poderes, régimen matrimonial), inmueble (descripción, cabida, linderos, uso, construcciones; documentos: Registro, Catastro, planos, visita y técnico si hay duda), cargas (hipoteca, embargo, usufructo, servidumbre, alodio, opción; documento: nota simple actualizada), límites (costas, urbanismo, patrimonio, carreteras, rústico; documentos: visores, planeamiento, certificado/consulta municipal) y posesión (ocupante, arrendamiento, precario, llaves y entrega; documentos: contrato, acta, visita y suministros). Regla de "tres momentos": repetir la nota simple y controles críticos al captar, al firmar arras y antes de escritura, porque los problemas pueden nacer entre una fase y otra.`,
      easyExplanation: "En un edificio de pisos, cada uno es dueño de su vivienda pero comparte con los demás vecinos las zonas comunes (fachada, escalera, tejado) según un porcentaje fijado en la escritura. Para tomar decisiones importantes hacen falta ciertas mayorías (a veces todos de acuerdo, a veces 3/5, a veces solo la mayoría simple), y desde abril de 2025 alquilar turísticamente un piso necesita el visto bueno expreso de 3/5 de la comunidad. Si compras un piso, respondes también de las deudas comunitarias de hasta 3 años atrás, así que siempre hay que pedir el certificado de deudas. Y en Mallorca hay una particularidad histórica única: algunas fincas antiguas tienen un \"alodio\", un derecho de un tercero sobre la finca que puede obligar a pagar un pequeño porcentaje (el \"laudemio\") cuando se vende, salvo que ya haya prescrito o se redima.",
      balearExample: "En Palma, un inversor quiere comprar un piso para explotarlo en plataformas de alquiler turístico. Los estatutos no prohíben esa actividad y no existe acuerdo de junta específico sobre ello. Desde el 3 de abril de 2025, la actividad turística del artículo 5.e LAU exige aprobación expresa previa de la comunidad con 3/5 de propietarios y cuotas (art. 17.12 LPH); el silencio de los estatutos no sustituye ese acuerdo, y la aprobación comunitaria tampoco sustituye las licencias urbanísticas, insulares o municipales necesarias.",
      keyConcepts: ["propiedad horizontal", "elemento privativo/común", "cuota de participación", "título constitutivo y estatutos", "mayoría 3/5 art. 5.e LAU", "afección real (3 años)", "fondo de reserva 10%", "complejo inmobiliario (art. 24 LPH)", "alodio y laudemio", "vecindad civil balear"],
      frequentErrors: [
        "Asumir que terrazas, fachadas o cubiertas son elementos privativos sin revisar título y estatutos.",
        "Confirmar una mayoría comunitaria \"por intuición\" sin identificar la base legal del acuerdo concreto.",
        "Confundir el certificado de deudas al día con la ausencia de derramas futuras o problemas estructurales.",
        "Anunciar actividad turística en un piso solo porque hay otros anuncios similares en el edificio (\"se puede hacer Airbnb\").",
        "Asumir que un alodio \"ya no se cobra\" sin comprobar prescripción, redención o cancelación documentada.",
        "En complejos inmobiliarios, aceptar la palabra del administrador de un bloque sin comprobar si existe una comunidad general independiente."
      ],
      examples: [
        { id: "m01-l7-ex1", title: "Certificado de deudas comunitarias", scenario: "Comprador de un piso en Manacor pide el estado de cuentas de la comunidad.", application: "Debe solicitarse certificado de deudas de la anualidad corriente y los tres años naturales anteriores, ya que el inmueble responde de esas deudas.", isBalearContext: true },
        { id: "m01-l7-ex2", title: "Complejo inmobiliario con doble comunidad", scenario: "Urbanización en la costa con edificios, piscina y viales compartidos, además de comunidades de cada bloque.", application: "Hay que solicitar actas, recibos y certificados de todas las entidades (subcomunidad y comunidad general/supracomunidad) antes de confirmar \"qué comunidades paga esta finca\".", isBalearContext: true },
        { id: "m01-l7-ex3", title: "Alodio detectado en nota simple", scenario: "Finca antigua en Mallorca con mención de dominio directo y laudemio pendiente de cálculo.", application: "Identificar al titular del dominio directo, solicitar cálculo de laudemio (0,5% del valor salvo pacto), verificar prescripción de 5 años y coordinar con notaría antes de escriturar.", isBalearContext: true }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m01-e1",
      moduleId: "m01",
      type: "case",
      question: "Alicia firma un contrato privado de compraventa de un apartamento en Cala Millor, paga parte del precio y pacta escritura dentro de dos meses. El vendedor conserva las llaves, sigue ocupando el inmueble y no le entrega la posesión. Antes de la escritura, el vendedor fallece. ¿Ha adquirido Alicia la propiedad del apartamento?",
      expectedAnswer: "No. Existe título (el contrato privado) pero no modo/tradición (no hubo entrega de llaves ni posesión), por lo que Alicia solo tiene un derecho de crédito para exigir el cumplimiento frente a los herederos del vendedor.",
      explanation: "La transmisión de la propiedad exige título más modo (art. 609 y 1462 CC). El contrato obliga, pero no transmite por sí solo si no hubo tradición real, instrumental o simbólica.",
      difficulty: "medium"
    },
    {
      id: "m01-e2",
      moduleId: "m01",
      type: "decision",
      question: "Un inversor quiere comprar un piso en Palma para explotarlo en Airbnb. Los estatutos de la comunidad no prohíben expresamente esa actividad y no hay acuerdo de junta al respecto. El agente, ¿puede confirmar que el inversor \"puede hacer Airbnb sin más trámite\"?",
      options: [
        "Sí, porque los estatutos no lo prohíben",
        "No, porque desde el 3 de abril de 2025 la actividad del art. 5.e LAU exige aprobación expresa previa de la comunidad con 3/5 de propietarios y cuotas",
        "Sí, porque hay otros pisos del edificio anunciados en plataformas turísticas",
        "No, porque la actividad turística está siempre prohibida en propiedad horizontal"
      ],
      expectedAnswer: "No, porque desde el 3 de abril de 2025 la actividad del art. 5.e LAU exige aprobación expresa previa de la comunidad con 3/5 de propietarios y cuotas",
      explanation: "El silencio estatutario no sustituye el acuerdo expreso exigido por el art. 17.12 LPH; la legalidad de la actividad no se presume por tolerancia o por la existencia de otros anuncios.",
      difficulty: "medium"
    },
    {
      id: "m01-e3",
      moduleId: "m01",
      type: "calculation",
      question: "Una vivienda tiene un usufructo vitalicio a favor de una persona de 74 años. Calcula el valor fiscal orientativo del usufructo según la regla mencionada en el temario, sobre un valor de finca de 300.000 euros.",
      expectedAnswer: "89 - 74 = 15%. 15% de 300.000 € = 45.000 € (valor fiscal orientativo del usufructo; la nuda propiedad se valoraría orientativamente en el 85%, es decir 255.000 €).",
      explanation: "El temario cita la regla fiscal \"89 menos la edad del usufructuario\", con límites del 10% y el 70%, como referencia orientativa para ciertos impuestos, no como tasación de mercado.",
      difficulty: "medium"
    },
    {
      id: "m01-e4",
      moduleId: "m01",
      type: "comprehension",
      question: "Explica la diferencia entre un \"límite\", una \"limitación\" y una \"carga\" sobre un inmueble, con un ejemplo de cada uno.",
      expectedAnswer: "Límite: frontera legal general del dominio (ej. normativa urbanística). Limitación: reducción singular del dominio (ej. usufructo o servidumbre). Carga: obligación o responsabilidad vinculada al bien (ej. hipoteca o cuotas comunitarias impagadas).",
      explanation: "Distinguir estos tres conceptos evita errores frecuentes al informar al comprador sobre el estado jurídico de la finca.",
      difficulty: "basic"
    },
    {
      id: "m01-e5",
      moduleId: "m01",
      type: "balear_scenario",
      question: "Un chalet sobre finca rústica en Pollença tiene una servidumbre de paso mencionada en la nota simple y está afectado por un deslinde de costas en tramitación. El propietario asegura que \"no afecta a nada\". ¿Qué debe hacer el agente antes de publicitar la finca?",
      expectedAnswer: "Investigar a favor de qué finca existe la servidumbre y su uso efectivo; consultar el expediente de deslinde de costas en fuentes oficiales (no basta la nota simple); revisar legalidad urbanística de las construcciones; y no anunciar \"privacidad total\" ni \"ampliable\" sin prueba documental.",
      explanation: "Refleja el caso práctico del temario: combina servidumbre privada, límite público (costas) y comprobaciones técnicas antes de comercializar.",
      difficulty: "advanced"
    },
    {
      id: "m01-e6",
      moduleId: "m01",
      type: "decision",
      question: "Tres hermanos son copropietarios en proindiviso de una vivienda en Manacor. Uno de ellos quiere vender su tercera parte a un inversor externo sin avisar a sus hermanos. ¿Es esto correcto?",
      options: [
        "Sí, cada comunero puede vender su cuota libremente y sin ningún trámite adicional",
        "No, debe respetarse el posible derecho de retracto de los demás comuneros y notificar la venta",
        "No, la venta de una cuota proindivisa está prohibida por ley",
        "Sí, pero solo si los tres hermanos son mayores de edad"
      ],
      expectedAnswer: "No, debe respetarse el posible derecho de retracto de los demás comuneros y notificar la venta",
      explanation: "Cada comunero puede disponer de su cuota, pero esa disposición está sujeta a los retractos legales de comuneros, que exigen notificación y respetar plazos.",
      difficulty: "medium"
    },
    {
      id: "m01-e7",
      moduleId: "m01",
      type: "calculation",
      question: "Un comprador adquiere un piso en propiedad horizontal. ¿De qué periodo de deudas comunitarias responde el propio inmueble, según el temario?",
      expectedAnswer: "De la anualidad corriente y los tres años naturales anteriores (es decir, hasta 4 periodos anuales en total), salvo exoneración expresa del comprador acreditada mediante certificado de deudas.",
      explanation: "Es la llamada afección real de la vivienda a las deudas comunitarias; por eso es imprescindible el certificado de deudas emitido por el secretario con visto bueno del presidente.",
      difficulty: "medium"
    },
    {
      id: "m01-e8",
      moduleId: "m01",
      type: "case",
      question: "Un vendedor afirma que una caseta agrícola en su finca de Sencelles \"lleva 20 años ahí\" y por tanto es suya por usucapión, aunque la nota simple no la menciona. ¿Es esto suficiente para confirmarlo?",
      expectedAnswer: "No. Hay que identificar por separado suelo, construcción, título, permisos y posesión; comprobar si la posesión ha sido en concepto de dueño, pública, pacífica e ininterrumpida durante el plazo legal (10/20 años ordinaria con buena fe y justo título, o 30 años extraordinaria); y verificar si existe titular registral distinto y posible oposición de herederos o colindantes antes de anunciar el dominio como consolidado.",
      explanation: "El mero paso del tiempo no basta por sí solo; se requiere informe jurídico y, normalmente, soporte judicial para inscribir frente a un titular registral distinto.",
      difficulty: "advanced"
    }
  ],
  quizQuestions: [
    {
      id: "m01-q1",
      question: "¿Qué artículo del Código Civil define la propiedad como el derecho de gozar y disponer de una cosa dentro de los límites legales?",
      options: ["Art. 33 CE", "Art. 348 CC", "Art. 609 CC", "Art. 1462 CC"],
      correctAnswerIndex: 1,
      explanation: "El artículo 348 CC define la propiedad y añade la acción reivindicatoria frente al tenedor sin derecho a conservar la cosa.",
      sourceModuleId: "m01",
      legalReference: "Art. 348 CC",
      difficulty: "basic"
    },
    {
      id: "m01-q2",
      question: "¿Qué artículo constitucional reconoce la propiedad privada delimitada por su función social?",
      options: ["Art. 33 CE", "Art. 24 CE", "Art. 47 CE", "Art. 128 CE"],
      correctAnswerIndex: 0,
      explanation: "El art. 33 CE reconoce propiedad privada y herencia, delimitadas por la función social, y exige causa e indemnización en caso de expropiación.",
      sourceModuleId: "m01",
      legalReference: "Art. 33 CE",
      difficulty: "basic"
    },
    {
      id: "m01-q3",
      question: "¿Cuáles son las cuatro facultades del propietario según el temario?",
      options: ["Uso, disfrute, hipoteca y venta", "Uso y disfrute, disposición, exclusión y reivindicación", "Posesión, tradición, título y modo", "Goce, arriendo, cesión y prescripción"],
      correctAnswerIndex: 1,
      explanation: "El temario estructura las facultades del dominio en estas cuatro categorías, cada una con ejemplo inmobiliario asociado.",
      sourceModuleId: "m01",
      legalReference: "Art. 348 CC",
      difficulty: "basic"
    },
    {
      id: "m01-q4",
      question: "Un vendedor afirma \"esta finca es mía, puedo hacer lo que quiera\". ¿Cuál es la respuesta profesional correcta según el temario?",
      options: ["Confirmarlo sin más", "\"Es titular, pero antes de comprometerse debemos revisar las limitaciones de uso, disposición y transmisión\"", "Pedir que lo demuestre en notaría", "No es relevante para la venta"],
      correctAnswerIndex: 1,
      explanation: "El temario marca explícitamente que nunca debe traducirse \"es titular\" como \"puede hacer lo que quiera\".",
      sourceModuleId: "m01",
      legalReference: "Función social del art. 33 CE / art. 348 CC",
      difficulty: "basic"
    },
    {
      id: "m01-q5",
      question: "¿Qué diferencia existe entre un \"límite\" y una \"limitación\" del dominio?",
      options: ["Son sinónimos", "El límite es una frontera legal general, la limitación es una reducción singular del dominio", "El límite afecta solo a fincas rústicas", "La limitación siempre es de origen legal, el límite siempre voluntario"],
      correctAnswerIndex: 1,
      explanation: "El límite nace de la ley con carácter general (urbanismo, costas); la limitación es singular y suele requerir título o hecho concreto (usufructo, servidumbre).",
      sourceModuleId: "m01",
      legalReference: "Ficha 04 del temario",
      difficulty: "medium"
    },
    {
      id: "m01-q6",
      question: "¿Qué elementos exige el artículo 609 del Código Civil para adquirir la propiedad por contrato?",
      options: ["Solo el contrato privado", "Contrato más tradición o modo", "Solo la escritura pública", "Contrato más inscripción registral obligatoria"],
      correctAnswerIndex: 1,
      explanation: "El art. 609 CC exige título (negocio jurídico válido) y modo (tradición o entrega) para transmitir la propiedad por contrato.",
      sourceModuleId: "m01",
      legalReference: "Art. 609 CC",
      difficulty: "medium"
    },
    {
      id: "m01-q7",
      question: "Según el art. 1462 CC, ¿qué efecto tiene el otorgamiento de escritura pública en la compraventa?",
      options: ["Nunca equivale a entrega", "Equivale a entrega salvo que de la propia escritura resulte lo contrario", "Solo equivale a entrega si se paga el precio íntegro", "Requiere siempre entrega material adicional de llaves"],
      correctAnswerIndex: 1,
      explanation: "Es la llamada tradición instrumental; el temario advierte que no debe usarse la frase absoluta \"sin escritura nunca se transmite\".",
      sourceModuleId: "m01",
      legalReference: "Art. 1462 CC",
      difficulty: "medium"
    },
    {
      id: "m01-q8",
      question: "¿Qué diferencia hay entre arras confirmatorias y arras penitenciales?",
      options: ["Son lo mismo", "Las penitenciales facultan el desistimiento si se pactan expresamente (art. 1454 CC), las confirmatorias no dan por sí solas ese derecho automático", "Las confirmatorias siempre implican penalización doble", "Las penitenciales solo existen en compraventas de finca rústica"],
      correctAnswerIndex: 1,
      explanation: "Las arras penitenciales requieren pacto expreso conforme al art. 1454 CC; las confirmatorias son solo anticipo y prueba del contrato.",
      sourceModuleId: "m01",
      legalReference: "Art. 1454 CC",
      difficulty: "medium"
    },
    {
      id: "m01-q9",
      question: "¿Cuáles son los plazos de la usucapión ordinaria de inmuebles según el temario?",
      options: ["5 años entre presentes, 10 entre ausentes", "10 años entre presentes, 20 entre ausentes", "15 años en todos los casos", "30 años siempre"],
      correctAnswerIndex: 1,
      explanation: "La usucapión ordinaria exige además buena fe y justo título, con plazo de 10 años entre presentes y 20 entre ausentes; la extraordinaria exige 30 años sin esos requisitos.",
      sourceModuleId: "m01",
      legalReference: "Arts. 1957 y ss. CC (usucapión, citados como 1930 y ss. en el temario)",
      difficulty: "advanced"
    },
    {
      id: "m01-q10",
      question: "¿Qué establece el art. 361 CC sobre construcción de buena fe en suelo ajeno?",
      options: ["El constructor siempre pierde lo construido sin indemnización", "El dueño del suelo puede optar entre adquirir lo construido indemnizando u obligar a comprar el suelo", "El constructor adquiere automáticamente el suelo", "Se aplica solo a construcciones ilegales"],
      correctAnswerIndex: 1,
      explanation: "Es la regla de accesión con construcción de buena fe en suelo ajeno; distinta de la de mala fe, donde el constructor puede perder lo construido sin indemnización.",
      sourceModuleId: "m01",
      legalReference: "Art. 361 CC",
      difficulty: "medium"
    },
    {
      id: "m01-q11",
      question: "¿Qué tipo de posesión es requisito central para la usucapión?",
      options: ["Posesión natural", "Posesión mediata", "Posesión en concepto de dueño", "Posesión en concepto distinto (como arrendatario)"],
      correctAnswerIndex: 2,
      explanation: "Solo la posesión en concepto de dueño, pública, pacífica y no interrumpida puede llevar a la usucapión; la posesión en concepto distinto (arrendatario, precarista) no basta.",
      sourceModuleId: "m01",
      legalReference: "Arts. 1941 y ss. CC",
      difficulty: "medium"
    },
    {
      id: "m01-q12",
      question: "¿Qué límite temporal máximo tiene el derecho de superficie según el temario?",
      options: ["30 años", "50 años", "75 años", "99 años"],
      correctAnswerIndex: 3,
      explanation: "La duración del derecho de superficie debe fijarse y no puede superar los 99 años; al expirar, el dueño del suelo adquiere lo edificado salvo pacto de liquidación.",
      sourceModuleId: "m01",
      legalReference: "Arts. 53 y 54 RDL 7/2015",
      difficulty: "medium"
    },
    {
      id: "m01-q13",
      question: "¿Cómo se calcula orientativamente el valor fiscal del usufructo vitalicio según el temario?",
      options: ["100 menos la edad del usufructuario", "89 menos la edad del usufructuario, con límites del 10% y 70%", "Siempre el 50% del valor de la finca", "Depende solo de la esperanza de vida media nacional"],
      correctAnswerIndex: 1,
      explanation: "Es una regla fiscal orientativa para ciertos impuestos, no una tasación de mercado automática.",
      sourceModuleId: "m01",
      legalReference: "Normativa fiscal de transmisiones (referencia orientativa del temario)",
      difficulty: "medium"
    },
    {
      id: "m01-q14",
      question: "¿Qué es el \"estatge\" balear?",
      options: ["Un tipo de hipoteca balear", "Un derecho consuetudinario personalísimo e intransmisible a habitar gratuitamente en la casa, regulado en la Compilación balear", "Un impuesto local sobre segunda residencia", "Sinónimo de usufructo vitalicio"],
      correctAnswerIndex: 1,
      explanation: "El \"estatge\" es una variedad consuetudinaria propia del derecho civil balear, distinta del usufructo y del simple alquiler.",
      sourceModuleId: "m01",
      legalReference: "Compilación del Derecho Civil de las Illes Balears (Decreto Legislativo 79/1990)",
      difficulty: "advanced"
    },
    {
      id: "m01-q15",
      question: "Desde el 3 de abril de 2025, ¿qué mayoría exige la comunidad para aprobar la actividad turística del art. 5.e LAU?",
      options: ["Unanimidad", "Mayoría simple", "3/5 de propietarios y cuotas", "1/3 de propietarios"],
      correctAnswerIndex: 2,
      explanation: "El art. 17.12 LPH exige acuerdo expreso previo de la comunidad con 3/5 de propietarios y cuotas para aprobar, limitar o prohibir la actividad turística.",
      sourceModuleId: "m01",
      legalReference: "Art. 17.12 LPH; art. 5.e LAU",
      difficulty: "advanced"
    },
    {
      id: "m01-q16",
      question: "¿De qué deudas comunitarias responde el propio inmueble en propiedad horizontal?",
      options: ["Solo de la anualidad corriente", "De todas las deudas desde la constitución de la comunidad", "De la anualidad corriente y los tres años naturales anteriores", "De ninguna, siempre responde solo el vendedor personalmente"],
      correctAnswerIndex: 2,
      explanation: "Es la llamada afección real del inmueble; el certificado de deudas del secretario con visto bueno del presidente acredita la situación, salvo exoneración expresa del comprador.",
      sourceModuleId: "m01",
      legalReference: "Ley 49/1960 de Propiedad Horizontal",
      difficulty: "medium"
    },
    {
      id: "m01-q17",
      question: "¿Qué porcentaje de laudemio fija la Compilación balear cuando no consta cantidad pactada, según la corrección señalada en el temario?",
      options: ["1% del valor de la finca", "0,5% del valor de la finca", "5% del valor de la finca", "10% del valor de la finca"],
      correctAnswerIndex: 1,
      explanation: "El temario corrige expresamente una cifra de referencia anterior del 1%, fijando el 0,5% como cifra vigente en defecto de pacto, calculado según el régimen específico de la finca.",
      sourceModuleId: "m01",
      legalReference: "Compilación del Derecho Civil de las Illes Balears",
      difficulty: "advanced"
    },
    {
      id: "m01-q18",
      question: "¿Qué cauce introdujo la Ley 5/2018 en relación con la ocupación ilegal de viviendas?",
      options: ["Un procedimiento penal específico único", "Un cauce civil para la recuperación inmediata de la posesión en determinados supuestos por personas físicas, entidades sin ánimo de lucro y entidades públicas", "La obligación de indemnizar siempre al ocupante", "La prohibición total de desahucios"],
      correctAnswerIndex: 1,
      explanation: "La Ley 5/2018 modificó la LEC para introducir este cauce civil de recuperación inmediata de la posesión, complementario a las vías penal y de tutela posesoria ordinaria.",
      sourceModuleId: "m01",
      legalReference: "Ley 5/2018 de modificación de la LEC",
      difficulty: "advanced"
    }
  ]
};

export const m01Glossary: GlossaryItem[] = [
  {
    id: "g-m01-constitutum-possessorium",
    term: "Constitutum possessorium",
    definition: "Forma de tradición en la que el transmitente deja de poseer como dueño y continúa ocupando el bien por un título distinto (por ejemplo, como arrendatario), sin que exista una nueva entrega material.",
    easyDefinition: "El vendedor sigue viviendo en la casa después de venderla, pero ahora como inquilino en vez de como dueño.",
    relatedModuleId: "m01"
  },
  {
    id: "g-m01-traditio-brevi-manu",
    term: "Traditio brevi manu",
    definition: "Forma de tradición en la que quien ya posee el bien por otro título lo adquiere en propiedad sin necesidad de una nueva entrega material, al cambiar el título en cuya virtud posee.",
    easyDefinition: "El inquilino que ya vive en el piso lo compra y pasa a ser dueño sin tener que \"recibir\" físicamente las llaves de nuevo.",
    relatedModuleId: "m01"
  },
  {
    id: "g-m01-afeccion-real",
    term: "Afección real (en propiedad horizontal)",
    definition: "Vinculación legal del inmueble al pago de determinadas deudas comunitarias (la anualidad corriente y los tres años naturales anteriores), de forma que el nuevo adquirente puede responder de ellas con el propio inmueble.",
    easyDefinition: "Si compras un piso con deudas de comunidad de los últimos años, puede que tengas que pagarlas tú aunque no las hayas generado.",
    relatedModuleId: "m01"
  },
  {
    id: "g-m01-accesion-invertida",
    term: "Accesión invertida",
    definition: "Construcción de aplicación jurisprudencial, en supuestos muy tasados, mediante la cual quien construye extralimitándose parcialmente sobre suelo ajeno puede llegar a adquirir dicho suelo, invirtiendo la regla general de que lo accesorio sigue a lo principal.",
    easyDefinition: "En casos muy concretos, si construyes invadiendo un poco el terreno del vecino, un tribunal puede decidir excepcionalmente que te quedas también con ese trozo de terreno, indemnizando al vecino.",
    relatedModuleId: "m01"
  },
  {
    id: "g-m01-fondo-de-reserva",
    term: "Fondo de reserva (comunidad de propietarios)",
    definition: "Partida obligatoria que debe dotar la comunidad de propietarios, de cuantía mínima del 10% de su último presupuesto ordinario, destinada a atender obras de conservación y reparación del inmueble.",
    easyDefinition: "Es el \"colchón de ahorro\" obligatorio de la comunidad de vecinos para imprevistos y reparaciones; que sea bajo o inexistente es una señal de alerta sobre el estado del edificio.",
    relatedModuleId: "m01"
  },
  {
    id: "g-m01-vecindad-civil",
    term: "Vecindad civil",
    definition: "Circunstancia personal que determina qué derecho civil (común o foral/autonómico, como el balear) resulta aplicable a una persona en materias como régimen matrimonial o sucesiones, con independencia del lugar donde esté situado el inmueble.",
    easyDefinition: "Que una vivienda esté en Mallorca no significa automáticamente que se le aplique el derecho balear; depende de la \"nacionalidad civil\" de sus propietarios.",
    relatedModuleId: "m01",
    balearContext: "Es la puerta de entrada al Derecho Civil Balear en materia matrimonial y sucesoria: hay que verificarla antes de asumir que aplica la Compilación balear a una finca situada en Mallorca."
  }
];

export const m01Alerts: string[] = [
  "Uso turístico en propiedad horizontal (art. 5.e LAU / art. 17.12 LPH): desde el 3 de abril de 2025 es exigible acuerdo expreso previo de la comunidad, con mayoría de 3/5 de propietarios y cuotas, para aprobar, limitar, condicionar o prohibir la actividad turística en un elemento privativo. Las actividades ya acogidas a la normativa sectorial antes de esa fecha mantienen su régimen conforme a la disposición adicional correspondiente.",
  "Mayorías de accesibilidad (Ley Orgánica 1/2025, disposición final cuarta): introduce o modifica reglas de mayoría relacionadas con obras de accesibilidad en propiedad horizontal; el temario advierte revisar el matiz de repercusión económica y no confirmar la mayoría aplicable \"por intuición\".",
  "Corrección del temario original sobre laudemio: la cifra de referencia vigente en defecto de pacto es del 0,5% del valor de la finca, no del 1% como figuraba en una versión anterior del temario; el cálculo y la redención requieren revisar el título y la norma aplicable en cada caso.",
  "Servidumbre de protección de costas: la Ley 22/1988 de Costas fija con carácter general 100 metros desde la ribera del mar, pero existen regímenes transitorios y excepciones que obligan a revisar cada tramo concreto; no debe fijarse una cifra operativa definitiva sin consultar el deslinde vigente.",
  "Advertencia general de vigencia (cierre del temario): el propio documento fuente advierte que es material formativo y que, antes de asesorar o firmar, debe confirmarse la redacción vigente de la norma, la situación registral y la normativa territorial aplicable al inmueble concreto — es decir, el contenido de este módulo debe tratarse como base pedagógica sujeta a verificación normativa continua, no como asesoramiento jurídico definitivo."
];
