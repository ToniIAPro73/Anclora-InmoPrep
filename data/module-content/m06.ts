import type { Module, GlossaryItem } from "@/lib/types";

export const m06Module: Module = {
  id: "m06",
  code: "M06",
  title: "Derecho de Consumo Inmobiliario",
  order: 6,
  description:
    "TRLGDCU, RD 515/1989, publicidad veraz, información precontractual y reclamaciones.",
  estimatedMinutes: 40,
  difficulty: "basic",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m06-l1",
      moduleId: "m06",
      title: "Quién protege al consumidor inmobiliario y quién es \"profesional\"",
      order: 1,
      summary:
        "El Derecho de consumo inmobiliario se activa cuando un profesional (agente, promotor, empresa patrimonial) trata con una persona que actúa fuera de su actividad empresarial, y se articula en varias capas normativas (estatal, autonómica, sectorial y de datos).",
      content: `El punto de partida del módulo es una idea que aparece de forma explícita en la Ficha 01 del temario: "El consumidor no compra sólo metros: compra información, expectativas y confianza." El Derecho de consumo inmobiliario regula cómo un profesional informa, publicita, contrata y responde frente a una persona consumidora, e integra publicidad, documentos, precios, cláusulas, reclamaciones y atención al cliente. El método de trabajo que propone el temario es una secuencia: **promesa → prueba → información precontractual → aceptación → archivo**. Si falta una prueba que respalde una promesa, la promesa debe reducirse o retirarse.

## Mapa normativo de protección

La Ficha 02 organiza la protección del consumidor en cinco capas, cada una con su función y su ejemplo inmobiliario típico:

- **TRLGDCU** (Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, aprobado por RDL 1/2007): controla información, cláusulas y remedios; ejemplo típico: la reserva y el contrato.
- **RD 515/1989**: regula la información en venta y arrendamiento de vivienda; ejemplo: el dossier de vivienda entregado al comprador.
- **Publicidad y competencia**: controla los mensajes y las prácticas desleales; ejemplo: el portal inmobiliario y las redes sociales.
- **Consumo balear** (normativa autonómica): regula inspección, hojas de reclamaciones y régimen sancionador; ejemplo: la atención al cliente en la propia oficina.
- **Protección de datos** (RGPD y LOPDGDD): regula leads y tratamiento de solvencia; ejemplo: el CRM y las campañas comerciales.

El anclaje conceptual de esta ficha es explícito: "El hecho de que un contrato sea privado no permite eliminar la normativa de consumo cuando interviene un profesional frente a un consumidor." Es decir, la naturaleza de "particular a particular" de una compraventa no exime al agente inmobiliario, que actúa como profesional, de las obligaciones de consumo frente a la parte que actúa como consumidora.

## Quién es consumidor y quién es profesional

La Ficha 03 aclara que la calificación depende de la finalidad de la operación y de la posición de las partes, no de la etiqueta que ponga el contrato. Una persona física puede ser consumidora cuando actúa fuera de su actividad empresarial o profesional. El agente, el promotor, la empresa patrimonial o el profesional que ofrece servicios actúan normalmente como empresario. Un dato importante para el examen: **un inversor profesional puede no recibir el mismo tratamiento que una familia compradora**, aunque compren el mismo tipo de inmueble, porque la calificación depende del contexto de la operación. Además, una agencia debe identificar siempre a quién representa y bajo qué encargo actúa, para no generar confusión sobre su rol.

El aviso de examen de esta ficha es contundente: "No toda compraventa de inmueble es una relación de consumo, pero toda publicidad profesional debe ser veraz y no engañosa." Esto significa que aunque la operación concreta no califique como relación de consumo (por ejemplo, entre dos empresas), las obligaciones de veracidad publicitaria del profesional se mantienen siempre que actúe frente al público.

## Fuentes y actualización normativa

La Ficha 29 recopila las fuentes que sustentan todo el módulo y que deben consultarse siempre en su versión consolidada vigente: TRLGDCU / RDL 1/2007 (relación con consumidor y cláusulas), RD 515/1989 (información en venta/arrendamiento de vivienda), Ley 34/1988 y Ley 3/1991 (publicidad y competencia desleal), normativa balear de consumo (reclamaciones e inspección) y RGPD/LOPDGDD (datos de interesados). El cierre de esta ficha resume la lógica de todo el módulo: "La información comercial debe resistir la pregunta: ¿en qué documento se apoya esta promesa?"`,
      easyExplanation:
        "Cuando trabajas como agente inmobiliario, la ley te trata de forma distinta según con quién hables: si es una persona que compra o alquila para uso propio (no para su negocio), esa persona es \"consumidora\" y tiene más protección legal. Tú, como agente, siempre eres \"profesional\", así que siempre debes ser veraz. No importa que el contrato sea \"entre particulares\": si tú, como agencia, intermedias, las reglas de consumo se aplican a tu forma de informar y publicitar.",
      balearExample:
        "Una agencia de Palma capta un piso en Santa Catalina para un cliente que lo compra como segunda residencia (consumidor) y, el mismo día, otro comprador que adquiere tres pisos en el edificio de al lado para explotarlos como inversión patrimonial (posible trato distinto, a valorar según el contexto). El agente debe identificar, en cada expediente, con qué figura está tratando y qué nivel de información reforzada aplica a cada una.",
      keyConcepts: [
        "Relación de consumo",
        "Consumidor vs. profesional",
        "TRLGDCU (RDL 1/2007)",
        "RD 515/1989",
        "Normativa balear de consumo",
        "Publicidad veraz",
        "Método promesa-prueba-información-aceptación-archivo",
      ],
      frequentErrors: [
        "Asumir que un contrato \"privado\" entre particulares exime a la agencia de las reglas de consumo.",
        "Tratar a todo comprador como inversor profesional (o viceversa) sin analizar la finalidad real de la operación.",
        "No dejar constancia de a quién representa la agencia en cada operación.",
        "Prometer condiciones sin poder respaldarlas con un documento o fuente verificable.",
      ],
      examples: [
        {
          id: "m06-l1-ex1",
          title: "Familia compradora de vivienda habitual",
          scenario: "Una pareja de Inca compra su primera vivienda para residir en ella.",
          application: "Se les aplica el máximo nivel de protección de consumo (TRLGDCU, RD 515/1989).",
          isBalearContext: true,
        },
        {
          id: "m06-l1-ex2",
          title: "Sociedad patrimonial comprando en bloque",
          scenario: "Una SL adquiere 5 viviendas para arrendarlas.",
          application: "Puede no calificar como relación de consumo; aun así, la publicidad debe seguir siendo veraz.",
          isBalearContext: false,
        },
        {
          id: "m06-l1-ex3",
          title: "Identificación del representado",
          scenario: "Un cliente pregunta si el agente trabaja \"para el vendedor o para él\".",
          application: "El agente debe aclarar su rol antes de avanzar, conforme a la Ficha 03.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l2",
      moduleId: "m06",
      title: "Publicidad inmobiliaria veraz y comunicación comercial",
      order: 2,
      summary:
        "Toda pieza de comunicación comercial (fotos, vídeos, renders, redes sociales, mensajes de WhatsApp) debe reflejar el inmueble real y sus condiciones de uso sin inducir a error por acción, omisión o ambigüedad.",
      content: `La Ficha 05 fija el principio rector: "Un anuncio debe ser atractivo, pero no puede inducir a error por acción, omisión o ambigüedad." El documento considera comunicación comercial no solo los anuncios de portal, sino también fotos, vídeos, visitas virtuales, stories y mensajes de WhatsApp. Todos estos canales deben reflejar el inmueble real y sus condiciones de uso, sin exagerar superficie, vistas, licencias, rentabilidad o estado.

## Reglas concretas de publicidad veraz

El temario enumera prohibiciones explícitas y muy orientadas al mercado balear:

- No publicar "vistas al mar" si son parciales o dependientes de un futuro derribo.
- No afirmar "licencia turística" sin comprobar el título y su vigencia.
- No usar renders como si fueran obra terminada sin identificarlos.
- No ocultar derramas conocidas o cargas que afecten la decisión de compra.

Una frase útil que recoge el propio temario para piezas comerciales de obra nueva o reforma es: **"Imágenes de propuesta / render orientativo; memoria y planos sujetos a proyecto autorizado."** Esta coletilla no sustituye la obligación de veracidad, pero ayuda a contextualizar el material gráfico.

## Calidades, renders y cambios de proyecto (Ficha 12)

La imagen comercial forma parte de la expectativa legítima del consumidor y debe contextualizarse siempre. El render debe identificarse como ilustrativo (riesgo si se confunde con obra entregada); el plano debe llevar fecha y escala indicadas (riesgo si hay cambios sin aviso posterior); la memoria de calidades debe describir prestaciones verificables, no adjetivos sin precisión (riesgo de crear expectativa falsa); y el piso piloto debe explicar qué elementos no están incluidos en el precio (riesgo de generar expectativa falsa). La regla de esta ficha: **"Una modificación debe ser informada y, cuando sea sustancial, gestionada conforme al contrato y los derechos del adquirente."**

## Publicidad de rentabilidad e inversión (Ficha 20)

Cuando la publicidad se dirige a un perfil inversor, el temario advierte que "rentable" es una afirmación económica que requiere contexto, fuente y prudencia. Reglas: distinguir rentabilidad bruta, neta y estimada; no prometer alquiler turístico, ocupación o plusvalía sin base legal y económica; indicar costes, vacancia, impuestos y restricciones relevantes; y evitar simulaciones que parezcan garantía de resultado. Frase de ejemplo que aporta el temario: **"Estimación orientativa basada en datos declarados por la propiedad; requiere validación fiscal, urbanística y de mercado."**

## Casos prácticos resueltos en el propio temario

- **Caso 1 (Ficha 23):** Un piso se anuncia como "licencia turística activa" cuando el propietario solo entrega una antigua referencia de plataforma, no un título vigente. Resolución del temario: retirar la afirmación, solicitar documentación turística, comunitaria y registral; no sustituir la prueba por capturas de un portal; informar al propietario del riesgo de publicidad engañosa y sanción; reformular el anuncio como "uso residencial; posibilidad sujeta a verificación administrativa". El propio temario subraya: "La promesa turística es una de las más sensibles en Mallorca: sin prueba, no se publicita."
- **Caso 3 (Ficha 25):** Una promoción utiliza renders con piscina en cubierta, pero la memoria de calidades no la contempla. Resolución: detener o corregir la campaña de forma visible, alinear render/memoria/contrato/licencia, informar a los interesados que recibieron la pieza incorrecta y registrar la corrección y aprobación del promotor. Cita del temario: "La imagen genera expectativa. No basta con una nota mínima si el mensaje principal es engañoso."
- **Caso 6 (Ficha 37):** Las fotos de un anuncio muestran una cocina renovada, pero el inmueble ha sido alquilado y su estado actual es muy distinto. Resolución: retirar el material desactualizado de todos los canales, verificar qué prometió la agencia y qué aprobó la propiedad, informar a los interesados afectados, repetir el reportaje fotográfico y actualizar la ficha antes de reactivar la campaña. Cita: "La foto no es decoración: es una afirmación comercial sobre el estado del inmueble."`,
      easyExplanation:
        "Cualquier foto, vídeo o mensaje que uses para vender o alquilar un piso cuenta como \"publicidad\" y tiene que ser verdad. Si usas un render (imagen generada por ordenador) o una foto antigua, tienes que decirlo claramente, porque si el cliente se hace una idea equivocada del piso por tu culpa, es publicidad engañosa, aunque no lo hayas dicho con mala intención.",
      balearExample:
        "Una inmobiliaria de Sóller publica un anuncio de un ático con \"vistas al mar garantizadas\" usando una foto tomada antes de que se construyera un edificio vecino que ahora tapa parcialmente la vista. Según la Ficha 05, esto es publicidad engañosa por omisión y debe corregirse retirando la afirmación o matizándola con la situación real y actual.",
      keyConcepts: [
        "Publicidad engañosa por acción, omisión o ambigüedad",
        "Comunicación comercial (fotos, vídeo, WhatsApp, stories)",
        "Render orientativo vs. obra terminada",
        "Memoria de calidades",
        "Rentabilidad bruta/neta/estimada",
        "Licencia turística",
      ],
      frequentErrors: [
        "Publicar renders sin identificarlos como imágenes ilustrativas.",
        "Anunciar \"licencia turística\" basándose en capturas de un portal en vez de documentación oficial vigente.",
        "Reutilizar fotos antiguas tras una reforma, alquiler u obra que cambió el estado real del inmueble.",
        "Prometer rentabilidades o plusvalías como si fueran garantizadas.",
      ],
      examples: [
        {
          id: "m06-l2-ex1",
          title: "Render de proyecto en preventa",
          scenario: "Promoción en Llucmajor con imágenes 3D de una piscina.",
          application: "Debe indicarse \"render orientativo\" y comprobar que la memoria de calidades incluye realmente la piscina.",
          isBalearContext: true,
        },
        {
          id: "m06-l2-ex2",
          title: "Anuncio de rentabilidad de inversión",
          scenario: "Piso en Palma anunciado como \"rentabilidad del 8% garantizada\".",
          application: "Debe reformularse como estimación orientativa con fuente y sujeta a variables fiscales y de ocupación.",
          isBalearContext: true,
        },
        {
          id: "m06-l2-ex3",
          title: "Fotos desactualizadas tras alquiler",
          scenario: "Vivienda con fotos de cocina reformada que ya no se corresponde con el estado tras un arrendamiento.",
          application: "Repetir reportaje y retirar material de todos los canales antes de reactivar campaña.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l3",
      moduleId: "m06",
      title: "Deber de información precontractual, precio, honorarios y documentación de vivienda",
      order: 3,
      summary:
        "Antes de recibir cualquier cantidad de dinero, el consumidor tiene derecho a una información comprensible, relevante, suficiente y entregada con antelación sobre identidad, precio, características, limitaciones y condiciones del inmueble.",
      content: `La Ficha 04 recoge el deber de información precontractual con una tabla de cuatro bloques: **identidad profesional** (para saber con quién se contrata, probada con la hoja de encargo o factura), **precio y gastos** (para una decisión económica informada, probada con ficha, email o reserva), **características** (para evitar error sobre el objeto, probada con planos, nota simple y Certificado de Eficiencia Energética -CEE-) y **condiciones de reserva** (para evitar el riesgo de perder dinero, probada con un contrato claro). La regla central de esta ficha es tajante: **"El silencio sobre una limitación relevante puede ser tan problemático como una afirmación falsa."** Es decir, la omisión de información importante equivale, a efectos de protección del consumidor, a una afirmación engañosa.

## Precio, honorarios y gastos (Ficha 06)

La transparencia económica evita, según el temario, la mayoría de las reclamaciones tempranas. Debe quedar claro para cada concepto:

- **Precio de venta o renta:** importe, impuestos incluidos o no, y vigencia de la oferta.
- **Honorarios:** quién los paga, base de cálculo, IVA y momento del devengo.
- **Gastos recurrentes:** comunidad, IBI, suministros y derramas.
- **Reserva/arras:** importe, destino y condiciones de devolución.

En el caso específico de **alquiler de vivienda habitual**, el temario recuerda una regla legal importante: "los gastos de gestión inmobiliaria y formalización se rigen por la LAU; no se trasladan al inquilino lo que la norma impide repercutir." Esto conecta con la reforma de la Ley de Arrendamientos Urbanos que traslada al arrendador (y no al inquilino) los gastos de gestión inmobiliaria y de formalización del contrato cuando el arrendador es persona jurídica.

## Documentación de vivienda para consumidor: RD 515/1989 (Ficha 07)

El RD 515/1989 exige información y documentación sobre la vivienda ofrecida a consumidores. Los elementos obligatorios que recoge el temario son: identificación de promotor/vendedor profesional cuando proceda; plano, superficie, descripción y calidades de la vivienda; precio total y forma de pago (y, en promoción, garantías de las cantidades anticipadas); instrucciones de uso y conservación cuando corresponda; e información sobre comunidad, gastos, CEE y limitaciones relevantes. La advertencia disciplinaria de esta ficha: **"No entregues una ficha genérica si el inmueble tiene particularidades que cambian el uso o el coste."**

## Encargo y transparencia de representación (Ficha 30)

El consumidor debe saber si el agente actúa para el propietario, para el comprador o en un modelo de intermediación con funciones delimitadas. La falta de claridad sobre quién paga, qué servicio se presta y qué facultades tiene la agencia genera reclamaciones. El encargo debe explicar partes, inmueble, duración, honorarios, exclusividad si existe y tratamiento de datos. Reglas: indicar quién contrata el servicio y en qué condiciones; no presentar una recomendación comercial como asesoramiento independiente si no lo es; explicar cualquier conflicto de interés material; entregar copia durable de la hoja de encargo. La regla clave de esta ficha: **"La transparencia empieza antes de publicar el inmueble, no al firmar arras."**

## Información registral, urbanística y de consumo (Ficha 19)

Ocultar una carga o una limitación de uso puede constituir una omisión relevante. El temario detalla el impacto y la acción del agente para cada dato: **hipoteca/embargo** (riesgo de adquisición → informar y reflejar solución); **servidumbre** (uso y valor → explicar en lenguaje claro); **VPO/VPL** (precio y destinatario → verificar régimen); **urbanismo** (uso y obras → no prometer cambios); **comunidad** (derramas/uso turístico → entregar documentación). La regla de cierre: **"La transparencia no consiste en entregar un PDF ilegible: consiste en explicar qué cambia la decisión."**`,
      easyExplanation:
        "Antes de que un cliente te dé dinero (aunque sean 500 euros de \"reserva\"), tienes que haberle contado con claridad quién eres, cuánto cuesta realmente el piso (con todos los gastos), cómo es el piso de verdad, y si tiene algún problema (hipoteca, servidumbre, obras pendientes). Callarte algo importante cuenta legalmente casi igual que mentir.",
      balearExample:
        "En Marratxí, una agencia vende un chalet con una servidumbre de paso a favor del vecino que no aparece en el anuncio ni se menciona en la primera visita. Según la Ficha 19, esta omisión es una infracción del deber de información: el agente debe explicar la servidumbre en lenguaje claro antes de que el comprador entregue cualquier señal.",
      keyConcepts: [
        "Información precontractual",
        "RD 515/1989",
        "Honorarios y devengo de IVA",
        "LAU y gastos de gestión inmobiliaria",
        "Servidumbre, VPO/VPL, urbanismo",
        "Hoja de encargo y transparencia de representación",
      ],
      frequentErrors: [
        "Entregar una ficha genérica del inmueble sin adaptar a sus particularidades reales.",
        "No aclarar quién paga los honorarios de intermediación en un alquiler de vivienda habitual.",
        "Omitir cargas registrales (hipotecas, embargos, servidumbres) por considerarlas \"detalles técnicos\".",
        "No entregar copia durable de la hoja de encargo al cliente.",
      ],
      examples: [
        {
          id: "m06-l3-ex1",
          title: "Gastos de gestión en alquiler",
          scenario: "Un inquilino en Manacor se le exige pagar la comisión de la agencia.",
          application: "Si el arrendador es persona jurídica, la LAU impide repercutir ese gasto al inquilino.",
          isBalearContext: true,
        },
        {
          id: "m06-l3-ex2",
          title: "Carga registral oculta",
          scenario: "Vivienda con embargo pendiente no mencionado en visita.",
          application: "Debe informarse y reflejar la solución antes de avanzar en la operación.",
          isBalearContext: false,
        },
        {
          id: "m06-l3-ex3",
          title: "Hoja de encargo clara",
          scenario: "Un propietario firma un encargo sin saber si es en exclusiva.",
          application: "El documento debe explicitar duración, exclusividad y honorarios antes de publicar el inmueble.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l4",
      moduleId: "m06",
      title: "Reserva, arras y cláusulas abusivas",
      order: 4,
      summary:
        "Recibir dinero de un consumidor sin explicar con precisión su función jurídica (reserva, arras penitenciales o confirmatorias, condición suspensiva) genera casi siempre un conflicto, y cualquier cláusula desproporcionada o incomprensible puede ser nula.",
      content: `La Ficha 08 advierte que "recibir dinero sin explicar su función crea un conflicto casi asegurado." El temario distingue cuatro figuras con su función y su riesgo si se redactan mal:

- **Reserva:** retira temporalmente el inmueble del mercado; riesgo si no define la devolución.
- **Arras penitenciales:** permiten desistir con las consecuencias pactadas; riesgo de confundirlas con un depósito simple.
- **Arras confirmatorias:** funcionan como anticipo y prueba de contrato; riesgo por falta de remedios claros ante incumplimiento.
- **Condición suspensiva:** protege ante financiación o verificación pendiente; riesgo si el plazo queda ambiguo.

La regla de la ficha resume el criterio de examen: **"La cláusula debe decir qué ocurre si falla financiación, documentación, tasación, inspección o decisión de una administración."** Sin esa previsión expresa, la cláusula de reserva queda incompleta y expuesta a reclamación.

## Caso práctico de reserva con financiación (Ficha 24)

Una compradora entrega 15.000 euros en concepto de reserva. El documento firmado dice "no reembolsable", aunque la operación depende de la concesión de una hipoteca. El temario identifica el desequilibrio y la falta de una condición clara: la cláusula debe definir plazo, documentación exigida, esfuerzo razonable del comprador y efecto si el banco deniega la financiación; no debe llamarse "reserva" a lo que en realidad es una penalización absoluta sin explicación; debe conservarse prueba de la información dada y de la negociación. La resolución que aporta el propio temario: **"La condición de financiación debe ser expresa y compatible con el calendario LCCI"** — es decir, coherente con los plazos legales que impone la Ley reguladora de los Contratos de Crédito Inmobiliario para la tramitación de la hipoteca (oferta vinculante, periodo de reflexión, etc.).

## Cláusulas abusivas y desequilibrio (Ficha 09)

En contratos con consumidores se controlan tres planos: la **transparencia**, la **incorporación** y el **contenido** de las cláusulas. Penalizaciones desproporcionadas, renuncias genéricas a derechos, facultades unilaterales a favor del profesional o información incompleta pueden generar nulidad de la cláusula y reclamación. Reglas prácticas: evitar penalizaciones sin proporcionalidad ni justificación; evitar renuncias a toda reclamación o a información esencial; explicar el efecto económico de la cláusula antes de pedir la firma; conservar prueba de entrega de documentos y de aceptación informada. La advertencia de esta ficha es especialmente relevante para la práctica diaria: **"No uses plantillas sin adaptar. El formulario estándar es una herramienta, no una defensa automática."** Es decir, usar un modelo de contrato "estándar del sector" no exime de responsabilidad si contiene cláusulas abusivas o mal adaptadas al caso concreto.

## Caso práctico de comisión no explicada (Ficha 36)

Un comprador descubre en el momento de la reserva un honorario de agencia que no figuraba ni en el anuncio ni durante la visita. El temario indica revisar publicidad, hoja de información y comunicaciones previas; si la comisión no fue transparente, no tratarla como una obligación pacífica (es decir, no dar por hecho que el cliente debe pagarla sin más); corregir la práctica y documentar la solución comercial o jurídica adoptada; actualizar la ficha y el guion de visitas para evitar que se repita. La resolución subraya: **"La claridad del coste forma parte de la decisión de compra; ocultarlo en el último documento es una mala práctica."**`,
      easyExplanation:
        "Cuando un cliente te da dinero antes de firmar el contrato definitivo, tienes que explicarle exactamente qué pasa con ese dinero en cada situación posible: si se arrepiente, si no le dan la hipoteca, si algo sale mal en los papeles. Si no lo explicas, y luego hay un problema, la ley suele dar la razón al consumidor, y una cláusula \"quedará el dinero\" sin más explicación puede anularse por abusiva.",
      balearExample:
        "En Alcúdia, un comprador entrega 10.000 euros de arras para un apartamento y, dos semanas después, el banco le deniega la hipoteca. El contrato de reserva no incluía ninguna condición suspensiva de financiación. Siguiendo la Ficha 08 y el Caso 2 (Ficha 24), el agente debería haber incluido una cláusula que definiera plazo, documentación y efecto en caso de denegación bancaria, evitando así el conflicto sobre la devolución del dinero.",
      keyConcepts: [
        "Reserva vs. arras penitenciales vs. arras confirmatorias",
        "Condición suspensiva de financiación",
        "LCCI (Ley de Contratos de Crédito Inmobiliario)",
        "Cláusulas abusivas: transparencia, incorporación, contenido",
        "Nulidad de cláusula",
        "Comisión de agencia no informada",
      ],
      frequentErrors: [
        "Recibir dinero de \"reserva\" sin explicar qué figura jurídica es realmente (reserva, arras, condición suspensiva).",
        "Redactar cláusulas de \"no reembolsable\" sin prever el supuesto de denegación de financiación.",
        "Usar plantillas de contrato estándar sin adaptarlas al caso concreto.",
        "No informar de la comisión de agencia hasta el momento de la reserva.",
      ],
      examples: [
        {
          id: "m06-l4-ex1",
          title: "Arras penitenciales bien redactadas",
          scenario: "Comprador que puede desistir perdiendo el doble de la señal.",
          application: "Debe constar expresamente esa consecuencia, no darse por sobreentendida.",
          isBalearContext: false,
        },
        {
          id: "m06-l4-ex2",
          title: "Condición suspensiva de financiación",
          scenario: "Reserva de 15.000 € sujeta a hipoteca.",
          application: "Definir plazo, documentación y efecto de la denegación, conforme al calendario LCCI.",
          isBalearContext: false,
        },
        {
          id: "m06-l4-ex3",
          title: "Comisión oculta hasta el contrato",
          scenario: "Honorario de agencia que aparece solo en el documento de reserva.",
          application: "Corregir la práctica y comunicar el coste desde el primer contacto comercial.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l5",
      moduleId: "m06",
      title: "Venta sobre plano, calidades del proyecto y posventa",
      order: 5,
      summary:
        "La compra de vivienda en preventa exige información reforzada sobre memoria, licencia, plazos y garantía de cantidades anticipadas, y la relación de consumo no termina con la entrega: defectos y garantías de posventa deben canalizarse y documentarse.",
      content: `## Venta sobre plano y protección del comprador (Ficha 11)

La preventa exige información reforzada y gestión segura de las cantidades anticipadas. El temario detalla: memoria de calidades, planos, precio, plazos y modificaciones posibles; identificación de promotor, licencia o estado de tramitación, según la fase del proyecto; **garantía individual de cantidades anticipadas** cuando proceda; y la advertencia de no prometer una fecha de entrega cerrada si esta depende de hitos no controlados por el propio promotor (como licencias, financiación de obra o suministro de materiales). El anclaje de esta ficha para publicidad de promociones: **"El marketing debe coincidir con proyecto, licencia, memoria y contrato. Si cambia el producto, cambia la información."**

## Calidades, renders y cambios de proyecto (Ficha 12)

Ya descrita en la Lección 2, esta ficha es también parte central de la venta sobre plano: el render debe identificarse como ilustrativo, el plano debe llevar fecha y escala, la memoria debe describir prestaciones verificables y el piso piloto debe explicar los elementos no incluidos. Cualquier modificación sustancial del proyecto debe informarse y gestionarse conforme al contrato y a los derechos del adquirente.

## Posventa, garantías y defectos (Ficha 13)

"La entrega no termina la relación de consumo": en venta de vivienda nueva o reformada, los defectos pueden activar garantías contractuales, responsabilidades de la edificación y remedios de consumo. El temario aclara que **el agente no resuelve técnicamente el defecto**, pero debe canalizar y documentar la comunicación. Reglas: diferenciar defecto estético, falta de conformidad, vicio y daño constructivo; registrar fecha, fotos, descripción y respuesta; y no prometer reparación o plazo sin autorización del responsable real (promotor, constructor o compañía de seguro). La regla de trazabilidad de esta ficha: **"La primera respuesta debe confirmar recepción, no discutir responsabilidad sin datos."** Esto significa que, ante una queja posventa, el primer paso del agente es siempre acusar recibo, nunca entrar a valorar de quién es la culpa sin haber reunido la documentación necesaria.`,
      easyExplanation:
        "Si vendes un piso que todavía no está construido (sobre plano), tienes que explicar muy bien qué garantías protegen el dinero que el comprador va adelantando, y no prometer fechas de entrega que no dependen solo del promotor. Y cuando el piso ya está entregado, si aparece un defecto, tu trabajo no es arreglarlo tú mismo ni decidir de quién es la culpa: es anotar bien lo que pasa, avisar a quien corresponde (promotor, constructor, seguro) y no prometer nada que no puedas garantizar.",
      balearExample:
        "Una promoción en Calvià vende pisos sobre plano con \"entrega garantizada en diciembre de 2026\". A los seis meses, un retraso en la licencia de obra atrasa el proyecto. Según la Ficha 11, el agente nunca debió prometer una fecha cerrada dependiente de un hito no controlado (la licencia); ahora debe informar con transparencia a los compradores y verificar que la garantía de cantidades anticipadas sigue vigente.",
      keyConcepts: [
        "Venta sobre plano / preventa",
        "Garantía individual de cantidades anticipadas",
        "Memoria de calidades vs. render orientativo",
        "Defecto estético vs. falta de conformidad vs. vicio constructivo",
        "Trazabilidad de la reclamación posventa",
      ],
      frequentErrors: [
        "Prometer fechas de entrega cerradas dependientes de licencias o hitos externos.",
        "No verificar que existe garantía de cantidades anticipadas antes de recoger pagos a cuenta.",
        "Confundir un render o piso piloto con la obra realmente entregada.",
        "Entrar a discutir responsabilidad de un defecto constructivo sin haber reunido antes fecha, fotos y descripción.",
      ],
      examples: [
        {
          id: "m06-l5-ex1",
          title: "Garantía de cantidades anticipadas",
          scenario: "Promotor recoge pagos a cuenta antes de terminar la obra.",
          application: "Debe existir garantía individual (aval o seguro) que respalde esas cantidades.",
          isBalearContext: false,
        },
        {
          id: "m06-l5-ex2",
          title: "Cambio de memoria de calidades",
          scenario: "El promotor sustituye un suelo de la memoria por otro más económico.",
          application: "Debe informarse a los compradores y gestionarse conforme al contrato.",
          isBalearContext: false,
        },
        {
          id: "m06-l5-ex3",
          title: "Defecto posventa",
          scenario: "Aparecen humedades a los tres meses de entrega.",
          application: "El agente registra fecha, fotos y descripción, y deriva al responsable (constructor/seguro) sin prometer plazo de reparación.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l6",
      moduleId: "m06",
      title: "Contratación a distancia, desistimiento y protección de datos en la atención comercial",
      order: 6,
      summary:
        "Reservar por email, firma electrónica o plataforma digital es válido, pero exige mayor disciplina documental; el derecho de desistimiento en servicios inmobiliarios no tiene una respuesta automática; y los datos de los leads sólo pueden tratarse con base jurídica y finalidad definida.",
      content: `## Contratación a distancia y digital (Ficha 10)

La digitalización no elimina la obligación de identificar, informar y conservar evidencia. Una reserva realizada por email, firma electrónica o plataforma puede ser válida, pero exige mayor disciplina sobre identidad, documento íntegro, aceptación, fechas y comunicaciones. Reglas prácticas: conservar versión final, anexos, IP/fecha o proveedor de firma cuando proceda; no confundir una visita virtual con información completa del inmueble; explicar si existe derecho de desistimiento o excepción aplicable según el servicio contratado. La buena práctica que recoge el temario: **"El cliente debe poder descargar o recibir una copia duradera de las condiciones aceptadas."**

## Derecho de desistimiento: análisis prudente (Ficha 33)

En servicios inmobiliarios no existe una respuesta automática sobre el derecho de desistimiento. Hay que identificar quién contrata, dónde, cómo, qué se ha ejecutado ya y qué información recibió el cliente; las reglas de desistimiento dependen de si el contrato se ha celebrado a distancia, fuera de establecimiento y del tipo de servicio prestado. Reglas: no utilizar cláusulas de renuncia genérica al desistimiento; informar antes de iniciar un servicio solicitado de forma inmediata (lo que puede afectar al propio derecho); conservar el consentimiento expreso cuando sea necesario; derivar los casos dudosos a asesoramiento jurídico especializado. El aviso de examen es muy claro sobre el error más común: **"El método correcto es clasificar la contratación, no recitar '14 días' sin contexto."** Esto advierte contra la tentación de aplicar mecánicamente el plazo genérico de 14 días de desistimiento sin analizar primero el tipo de contrato y de canal de contratación.

## Protección de datos en la atención comercial (Ficha 16)

"Un lead no es una lista libre de uso; sus datos sólo pueden tratarse con base jurídica y finalidad definida." Reglas: informar de responsable del tratamiento, finalidad, conservación y derechos (arts. propios del RGPD); no enviar campañas masivas sin base jurídica válida; limitar la documentación de solvencia solicitada a lo estrictamente necesario; evitar compartir datos del interesado con el propietario sin justificación. El temario conecta explícitamente esta ficha con el resto del programa: "La protección de datos se amplía en el Módulo 16 de tecnología inmobiliaria."

## MASC, mediación y solución amistosa (Ficha 15)

Los mecanismos adecuados de solución de controversias (MASC) permiten ordenar una discusión antes de judicializarla; su aplicabilidad concreta depende de la materia, la fecha y las excepciones legales. La solución negociada no es debilidad: puede ser un requisito legal o una herramienta de ahorro de tiempo. Reglas: documentar oferta, respuesta, plazos y propuesta de solución; no presionar a un consumidor para que renuncie a derechos; distinguir una negociación comercial de una mediación formal. La regla de límite competencial de esta ficha: **"Cuando el conflicto ya es jurídico, deriva. El agente puede facilitar documentos, no sustituir defensa técnica."**`,
      easyExplanation:
        "Aunque todo el proceso de compra o alquiler se haga por email o por una plataforma digital, tienes las mismas obligaciones que si fuera en papel: identificarte, informar bien y guardar pruebas. El derecho a \"arrepentirse\" (desistimiento) de un servicio inmobiliario no siempre existe ni siempre son 14 días automáticos: depende de cómo se contrató. Y los datos de contacto de un cliente potencial (lead) no son tuyos para usar libremente: solo puedes usarlos para lo que el cliente entendió y aceptó.",
      balearExample:
        "Una agencia de Eivissa capta leads a través de un formulario web y, sin consentimiento adicional, los añade a una campaña masiva de WhatsApp sobre otras propiedades. Según la Ficha 16, esto vulnera el principio de finalidad: los datos solo pueden usarse para lo que el interesado autorizó al rellenar el formulario, no para cualquier campaña comercial posterior.",
      keyConcepts: [
        "Contratación a distancia / firma electrónica",
        "Derecho de desistimiento y excepciones",
        "Base jurídica y finalidad del tratamiento de datos",
        "Lead y campaña comercial",
        "MASC (Mecanismos Alternativos de Solución de Controversias)",
        "Copia duradera de condiciones aceptadas",
      ],
      frequentErrors: [
        "Aplicar el plazo de \"14 días de desistimiento\" sin analizar el tipo de contratación.",
        "No conservar prueba de identidad, fecha e IP en reservas realizadas digitalmente.",
        "Enviar campañas masivas a leads sin base jurídica válida para ese uso concreto.",
        "Confundir una negociación comercial informal con una mediación formal, o sustituir asesoramiento jurídico por gestión propia.",
      ],
      examples: [
        {
          id: "m06-l6-ex1",
          title: "Reserva firmada digitalmente",
          scenario: "Cliente firma con firma electrónica desde su móvil.",
          application: "Debe conservarse la versión final, el proveedor de firma y la fecha/IP.",
          isBalearContext: false,
        },
        {
          id: "m06-l6-ex2",
          title: "Desistimiento de un servicio ya iniciado",
          scenario: "Cliente pide cancelar un encargo de búsqueda de vivienda tras dos visitas ya realizadas.",
          application: "Analizar si el servicio ya ejecutado limita el derecho de desistimiento, sin recitar el plazo genérico.",
          isBalearContext: false,
        },
        {
          id: "m06-l6-ex3",
          title: "Lead reutilizado sin base",
          scenario: "Contacto captado para una vivienda concreta recibe después publicidad de otras 20 propiedades.",
          application: "Se requiere base jurídica y finalidad informada para ese nuevo uso.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m06-l7",
      moduleId: "m06",
      title: "No discriminación, solvencia, reclamaciones y control de calidad",
      order: 7,
      summary:
        "Seleccionar un cliente exige criterios objetivos y documentables —no exclusiones por atributos protegidos—, la solvencia debe pedirse de forma proporcional, y toda reclamación debe gestionarse con protocolo, trazabilidad y, cuando proceda, hoja oficial.",
      content: `## Discriminación y acceso a la vivienda (Ficha 17)

En alquiler y venta, la solvencia, la adecuación del producto y la disponibilidad pueden ser criterios legítimos de selección de un cliente. La nacionalidad, el origen, el sexo, la discapacidad, la religión u otros atributos protegidos no justifican por sí mismos un trato desfavorable. Reglas: definir criterios de selección antes de publicar el anuncio; evitar textos de anuncio excluyentes o mensajes ambiguos; documentar las decisiones de forma objetiva y proporcionada. La buena práctica de esta ficha aclara una expresión habitual en el sector: **"'Se prioriza perfil solvente' debe concretarse en requisitos financieros proporcionales, no en exclusiones personales."**

## Cliente extranjero y comprensión contractual (Ficha 18)

El idioma no elimina la obligación de información comprensible. Reglas: ofrecer un resumen claro de precio, impuestos, gastos y condiciones; identificar intérprete o traducción cuando sea necesario; no asumir que el cliente entiende prácticas locales de arras, ITP (Impuesto de Transmisiones Patrimoniales) o notaría; evitar promesas fiscales o migratorias fuera de la competencia del agente. El temario subraya el contexto balear: "El mercado internacional aumenta la necesidad de documentación bilingüe y de una cronología de operación clara."

## Solvencia en alquiler y proporcionalidad (Ficha 32)

La selección de inquilinos exige datos necesarios, criterios objetivos y respeto a la privacidad. Pedir nóminas, contratos, IRPF o informes de solvencia puede ser legítimo si es proporcional al riesgo y se informa correctamente, pero no debe convertir la selección en una recogida indiscriminada de datos. Reglas: definir umbrales razonables de esfuerzo económico; solicitar únicamente la documentación necesaria; proteger y eliminar los datos conforme a política de conservación; no discriminar por atributos personales no vinculados a la solvencia objetiva. La práctica de esta ficha marca un límite claro para el rol del agente frente al propietario: **"El propietario decide sobre su inmueble dentro de la ley; la agencia debe rechazar instrucciones discriminatorias o invasivas."**

## Casos prácticos de discriminación resueltos en el temario

- **Caso 4 (Ficha 26):** Un propietario pide descartar a determinadas nacionalidades y a familias con hijos. Resolución: rechazar el criterio discriminatorio, proponer un filtro objetivo de solvencia y adecuación al inmueble, documentar requisitos proporcionados y consistentes, y no reproducir el criterio en anuncios ni comunicaciones. Cita del temario: **"La profesionalidad incluye poner límites al encargo ilícito o discriminatorio."**

## Reclamaciones y hojas oficiales (Ficha 14)

Una reclamación bien gestionada puede evitar una inspección, un litigio o un daño reputacional. Reglas: facilitar el canal de reclamación y la hoja oficial cuando sea exigible; acusar recibo y registrar fecha, persona responsable y documentos; responder con hechos, no con excusas ni acusaciones; y, si hay riesgo jurídico, remitir al responsable y conservar evidencias. El temario recuerda de forma específica el contexto balear: **"Comprueba el régimen autonómico aplicable de hojas de reclamaciones, consumo y mediación antes de informar al cliente."**

## Protocolo de queja (Ficha 22)

El protocolo estándar tiene cinco pasos: (1) acusar recibo sin prejuzgar; (2) pedir y ordenar documentos; (3) identificar responsable y plazo interno; (4) proponer solución viable o explicar el motivo con base documental; (5) registrar cierre y medidas de mejora. La advertencia de esta ficha: **"No ignores mensajes, no culpes al cliente y no borres comunicaciones."**

## El expediente de atención al consumidor y control de calidad (Fichas 21, 35)

El expediente debe permitir reconstruir todo lo informado y aceptado: qué se hizo en captación (encargo, autorización y verificación), en publicidad (ficha aprobada, fotos y fuentes), con el lead (privacidad y comunicaciones), en la reserva (condiciones y justificante de pago), en las arras (anexos y condiciones) y en el cierre (escritura/contrato y comunicaciones). Regla de control: "Versiona las fichas. Si cambia el precio o una condición, actualiza todos los canales y guarda la fecha." Además, el control de calidad de fichas y contratos exige revisar cuatro planos antes de publicar: la ficha (¿precio, superficie y uso tienen fuente?), las fotos (¿representan el estado actual?), el contrato (¿coincide con oferta y anexos?) y la privacidad (¿solo incluye datos necesarios?). El protocolo recomienda una revisión de "cuatro ojos" cuando el activo es complejo, de alto valor, o incluye datos turísticos, urbanísticos o de promoción.`,
      easyExplanation:
        "Puedes elegir a quién alquilas o vendes según cosas objetivas (si puede pagar, si el piso le sirve, si está disponible), pero nunca por su nacionalidad, sexo, religión o si tiene hijos. Si un cliente no habla bien español, igual tienes que explicarle las cosas importantes con más cuidado (o con un intérprete), porque el idioma no te libra de informar bien. Cuando pidas nóminas o informes de solvencia, pide solo lo necesario y trata esos datos con cuidado. Y si un cliente se queja, no lo ignores: contesta rápido, con hechos, y guarda constancia de todo.",
      balearExample:
        "Un propietario en Pollença pide a la agencia que descarte inquilinos extranjeros y familias con niños pequeños. Siguiendo el Caso 4 (Ficha 26), la agencia debe rechazar ese criterio, proponer en su lugar un filtro de solvencia objetivo (por ejemplo, ingresos mínimos verificables) y no reflejar la exclusión discriminatoria en el anuncio ni en las comunicaciones con los interesados.",
      keyConcepts: [
        "Criterios objetivos de selección vs. discriminación",
        "Comprensión contractual del cliente extranjero",
        "Proporcionalidad en la solicitud de datos de solvencia",
        "Hoja oficial de reclamaciones (régimen autonómico balear)",
        "Protocolo de queja en 5 pasos",
        "Expediente de atención al consumidor y control de calidad de cuatro ojos",
      ],
      frequentErrors: [
        "Aceptar un encargo de un propietario que pide excluir clientes por nacionalidad, religión o si tienen hijos.",
        "Dar por hecho que un cliente extranjero entiende conceptos como arras, ITP o notaría sin verificarlo.",
        "Pedir más documentación de solvencia de la necesaria o no eliminarla tras su uso.",
        "Ignorar o retrasar la respuesta a una queja, o discutir la responsabilidad antes de reunir los hechos.",
      ],
      examples: [
        {
          id: "m06-l7-ex1",
          title: "Filtro de solvencia objetivo",
          scenario: "Propietario pide \"familias sin hijos\" para un piso de alquiler en Palma.",
          application: "Se sustituye por un criterio de ingresos mínimos verificables y adecuación al inmueble.",
          isBalearContext: true,
        },
        {
          id: "m06-l7-ex2",
          title: "Cliente extranjero sin resumen claro",
          scenario: "Comprador alemán firma arras sin entender bien el concepto de arras penitenciales.",
          application: "Debe ofrecerse resumen claro y, si es necesario, traducción o intérprete.",
          isBalearContext: false,
        },
        {
          id: "m06-l7-ex3",
          title: "Queja gestionada correctamente",
          scenario: "Cliente reclama por una comisión no explicada.",
          application: "Se aplica el protocolo de 5 pasos: acusar recibo, pedir documentos, identificar responsable, proponer solución, registrar cierre.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m06-e1",
      moduleId: "m06",
      type: "case",
      question:
        "Una agencia en Sóller anuncia un piso con \"vistas al mar\" usando una foto tomada hace tres años, antes de que se construyera un edificio que ahora tapa parcialmente la vista. Un cliente reserva basándose en esa foto. ¿Qué debe hacer la agencia?",
      expectedAnswer:
        "Retirar o corregir la publicidad, informar al cliente de la situación real antes de continuar la operación y documentar la corrección (Ficha 05 y Caso 6 / Ficha 37).",
      explanation:
        "La foto es una afirmación comercial sobre el estado actual del inmueble; usar material desactualizado constituye publicidad engañosa por omisión.",
      difficulty: "basic",
    },
    {
      id: "m06-e2",
      moduleId: "m06",
      type: "decision",
      question:
        "Un propietario en Pollença instruye a la agencia para que no muestre el piso en alquiler a familias con niños ni a personas de determinada nacionalidad. ¿Debe la agencia aceptar el encargo tal cual?",
      options: [
        "a) Sí, el propietario decide libremente sobre su inmueble.",
        "b) No, debe rechazar el criterio discriminatorio y proponer un filtro objetivo de solvencia.",
        "c) Sí, pero solo si se documenta por escrito.",
        "d) No es una decisión de la agencia, corresponde al portal inmobiliario.",
      ],
      expectedAnswer:
        "b) No, debe rechazar el criterio discriminatorio y proponer un filtro objetivo de solvencia.",
      explanation:
        "Según la Ficha 17 y el Caso 4 (Ficha 26), la profesionalidad incluye poner límites a un encargo discriminatorio; el propietario decide dentro de la ley, no al margen de ella.",
      difficulty: "medium",
    },
    {
      id: "m06-e3",
      moduleId: "m06",
      type: "calculation",
      question:
        "Un comprador entrega 15.000 € como \"reserva no reembolsable\" para un piso, pero la operación depende de la concesión de una hipoteca que finalmente el banco deniega. La cláusula no incluía ninguna condición suspensiva de financiación. ¿Qué defecto tiene el contrato y qué debería haber incluido?",
      expectedAnswer:
        "El contrato carece de una condición suspensiva de financiación expresa; debería haber definido plazo, documentación exigida, esfuerzo razonable del comprador y efecto de la denegación bancaria, de forma compatible con el calendario LCCI.",
      explanation:
        "La Ficha 08 y el Caso 2 (Ficha 24) señalan que llamar \"no reembolsable\" a una cantidad sujeta de hecho a financiación, sin explicarlo, genera un desequilibrio reclamable.",
      difficulty: "medium",
    },
    {
      id: "m06-e4",
      moduleId: "m06",
      type: "comprehension",
      question:
        "Explica la diferencia entre arras penitenciales y arras confirmatorias, y por qué confundirlas en un contrato genera riesgo.",
      expectedAnswer:
        "Las arras penitenciales permiten desistir del contrato asumiendo las consecuencias pactadas (normalmente pérdida o devolución doblada de la cantidad); las arras confirmatorias funcionan como anticipo y prueba del contrato, sin habilitar el desistimiento libre. Confundirlas genera riesgo porque el comprador o vendedor puede creer que tiene una facultad de desistimiento que en realidad no existe, o viceversa.",
      explanation: "Basado en la Ficha 08 (tabla de figuras, función y riesgo).",
      difficulty: "basic",
    },
    {
      id: "m06-e5",
      moduleId: "m06",
      type: "case",
      question:
        "Una promoción en Calvià publicita \"entrega garantizada en diciembre de 2026\" en pleno proceso de tramitación de licencia de obra. ¿Qué error de publicidad y de gestión de expectativas comete el promotor/agencia?",
      expectedAnswer:
        "Prometer una fecha de entrega cerrada que depende de un hito no controlado por el promotor (la licencia). Debe reformularse como fecha estimada sujeta a la obtención de la licencia y otros trámites, y verificar que existe garantía de cantidades anticipadas.",
      explanation:
        "Ficha 11 (\"no prometer fecha de entrega cerrada si depende de hitos no controlados\").",
      difficulty: "medium",
    },
    {
      id: "m06-e6",
      moduleId: "m06",
      type: "decision",
      question:
        "Un cliente pide cancelar (\"desistir\") un encargo de búsqueda de vivienda contratado por email, alegando el derecho de desistimiento de 14 días, después de que la agencia ya haya realizado dos visitas a petición expresa del cliente. ¿Cómo debe abordar el agente esta situación?",
      options: [
        "a) Aplicar automáticamente los 14 días y devolver cualquier importe.",
        "b) Negarse a cualquier desistimiento porque el contrato ya se firmó.",
        "c) Clasificar el tipo de contratación (a distancia, fuera de establecimiento) y valorar si el servicio ya ejecutado a petición expresa limita el derecho, derivando a asesoramiento si hay duda.",
        "d) Ignorar la petición hasta que el cliente presente una reclamación formal.",
      ],
      expectedAnswer:
        "c) Clasificar el tipo de contratación (a distancia, fuera de establecimiento) y valorar si el servicio ya ejecutado a petición expresa limita el derecho, derivando a asesoramiento si hay duda.",
      explanation:
        "La Ficha 33 advierte contra \"recitar 14 días sin contexto\"; el método correcto es clasificar la contratación y el grado de ejecución del servicio.",
      difficulty: "advanced",
    },
    {
      id: "m06-e7",
      moduleId: "m06",
      type: "comprehension",
      question:
        "¿Por qué la Ficha 02 afirma que \"el hecho de que un contrato sea privado no permite eliminar la normativa de consumo cuando interviene un profesional frente a un consumidor\"? Pon un ejemplo inmobiliario.",
      expectedAnswer:
        "Porque aunque la compraventa se formalice entre dos particulares, el agente o agencia que intermedia actúa como profesional frente a la parte consumidora, y por tanto las obligaciones de información, publicidad veraz y cláusulas no abusivas se mantienen. Ejemplo: una venta directa entre dos vecinos de Inca gestionada por una agencia sigue sujeta a las reglas de publicidad veraz y documentación del RD 515/1989 si uno de ellos actúa como consumidor.",
      explanation: "Basado en el \"anclaje\" conceptual de la Ficha 02.",
      difficulty: "basic",
    },
    {
      id: "m06-e8",
      moduleId: "m06",
      type: "balear_scenario",
      question:
        "Un comprador extranjero firma unas arras sin comprender bien el concepto ni las implicaciones del ITP. ¿Qué debía haber hecho la agencia según la Ficha 18?",
      expectedAnswer:
        "Ofrecer un resumen claro de precio, impuestos, gastos y condiciones; identificar intérprete o traducción si era necesario; no asumir que el cliente entendía las prácticas locales de arras, ITP o notaría; y evitar hacer promesas fiscales o migratorias fuera de su competencia.",
      explanation: "Ficha 18, \"el idioma no elimina la obligación de información comprensible\".",
      difficulty: "medium",
    },
  ],
  quizQuestions: [
    {
      id: "m06-q1",
      question:
        "Según el temario, ¿qué norma exige información y documentación sobre la vivienda ofrecida a consumidores?",
      options: ["Ley 34/1988", "RD 515/1989", "LCCI", "RGPD"],
      correctAnswerIndex: 1,
      explanation:
        "El RD 515/1989 regula específicamente la información en venta y arrendamiento de vivienda a consumidores (Ficha 07).",
      sourceModuleId: "m06",
      legalReference: "RD 515/1989",
      difficulty: "basic",
    },
    {
      id: "m06-q2",
      question:
        "¿Qué texto legal recoge de forma consolidada la relación de consumo y el régimen de cláusulas frente al consumidor?",
      options: ["TRLGDCU (RDL 1/2007)", "Ley 3/1991", "LOPDGDD", "LAU"],
      correctAnswerIndex: 0,
      explanation:
        "El Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, aprobado por RDL 1/2007, es la norma marco de consumo (Ficha 02).",
      sourceModuleId: "m06",
      legalReference: "TRLGDCU / RDL 1/2007",
      difficulty: "basic",
    },
    {
      id: "m06-q3",
      question:
        "¿Cuál de las siguientes situaciones describe correctamente a un \"consumidor\" según la Ficha 03?",
      options: [
        "Cualquier persona física, siempre.",
        "Una persona física que actúa fuera de su actividad empresarial o profesional.",
        "Solo quien compra su primera vivienda.",
        "Cualquier comprador residente en Baleares.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La calificación de consumidor depende de la finalidad de la operación, no de la etiqueta del contrato.",
      sourceModuleId: "m06",
      legalReference: "Ficha 03 (marco TRLGDCU)",
      difficulty: "basic",
    },
    {
      id: "m06-q4",
      question:
        "Un anuncio muestra renders de una piscina que finalmente no figura en la memoria de calidades del proyecto. ¿Qué principio se infringe?",
      options: [
        "Ninguno, el render es solo estético.",
        "El principio de publicidad veraz, por generar expectativa engañosa.",
        "Solo afecta al contrato, no a la publicidad.",
        "Se infringe la LOPDGDD.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Caso 3 (Ficha 25): \"La imagen genera expectativa. No basta con una nota mínima si el mensaje principal es engañoso.\"",
      sourceModuleId: "m06",
      legalReference: "Ley 34/1988 (publicidad) y TRLGDCU",
      difficulty: "medium",
    },
    {
      id: "m06-q5",
      question:
        "En el alquiler de vivienda habitual, ¿quién debe asumir los gastos de gestión inmobiliaria y de formalización del contrato cuando el arrendador es persona jurídica?",
      options: [
        "El inquilino siempre.",
        "Se reparten al 50%.",
        "El arrendador, conforme a la LAU.",
        "Depende del acuerdo verbal entre las partes.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Ficha 06: \"los gastos de gestión inmobiliaria y formalización se rigen por la LAU; no se traslada al inquilino lo que la norma impide repercutir.\"",
      sourceModuleId: "m06",
      legalReference: "LAU (Ley de Arrendamientos Urbanos)",
      difficulty: "medium",
    },
    {
      id: "m06-q6",
      question:
        "¿Qué figura permite desistir del contrato asumiendo las consecuencias económicas pactadas (pérdida o devolución doblada de la señal)?",
      options: ["Arras confirmatorias", "Arras penitenciales", "Condición suspensiva", "Reserva simple"],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 08: las arras penitenciales \"permiten desistir con las consecuencias pactadas\".",
      sourceModuleId: "m06",
      legalReference: "Ficha 08 (doctrina civil de arras)",
      difficulty: "basic",
    },
    {
      id: "m06-q7",
      question:
        "Una cláusula de reserva dice \"no reembolsable\" pero la operación depende de una hipoteca. ¿Qué defecto tiene, según el Caso 2 (Ficha 24)?",
      options: [
        "Ninguno, es una cláusula habitual y válida.",
        "Falta de condición suspensiva de financiación expresa y compatible con el calendario LCCI.",
        "Excede el importe máximo permitido de reserva.",
        "Se trata de una arras confirmatoria válida sin más requisitos.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La condición de financiación debe ser expresa y compatible con el calendario de la LCCI; de lo contrario genera desequilibrio reclamable.",
      sourceModuleId: "m06",
      legalReference: "LCCI (Ley de Contratos de Crédito Inmobiliario)",
      difficulty: "advanced",
    },
    {
      id: "m06-q8",
      question: "¿Qué tres planos controla el análisis de cláusulas abusivas según la Ficha 09?",
      options: [
        "Precio, plazo y forma.",
        "Transparencia, incorporación y contenido.",
        "Publicidad, contrato y postventa.",
        "Consumidor, profesional y administración.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "\"En contratos con consumidores se controlan transparencia, incorporación y contenido\" de las cláusulas.",
      sourceModuleId: "m06",
      legalReference: "TRLGDCU (control de cláusulas abusivas)",
      difficulty: "medium",
    },
    {
      id: "m06-q9",
      question: "¿Qué actitud recomienda el temario respecto al uso de contratos \"estándar del sector\"?",
      options: [
        "Usarlos siempre sin modificar, porque están validados legalmente.",
        "No usarlos nunca.",
        "No usarlos sin adaptar, porque el formulario estándar es una herramienta, no una defensa automática.",
        "Solo usarlos si el cliente es extranjero.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Ficha 09: \"No uses plantillas sin adaptar. El formulario estándar es una herramienta, no una defensa automática.\"",
      sourceModuleId: "m06",
      legalReference: "Ficha 09",
      difficulty: "medium",
    },
    {
      id: "m06-q10",
      question:
        "¿Qué plazo de desistimiento debe aplicarse \"de forma automática\" en cualquier contratación inmobiliaria a distancia, según el temario?",
      options: [
        "Siempre 14 días naturales, sin excepción.",
        "No existe una respuesta automática: depende de cómo, dónde y qué se contrató.",
        "Siempre 30 días naturales.",
        "Nunca existe derecho de desistimiento en servicios inmobiliarios.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 33: \"El método correcto es clasificar la contratación, no recitar '14 días' sin contexto.\"",
      sourceModuleId: "m06",
      legalReference: "Normativa de contratos a distancia y de servicios (análisis caso a caso)",
      difficulty: "advanced",
    },
    {
      id: "m06-q11",
      question:
        "Un lead capta datos para una vivienda concreta y después recibe una campaña masiva sobre otras 20 propiedades sin nuevo consentimiento. ¿Qué principio se vulnera?",
      options: [
        "Principio de proporcionalidad urbanística.",
        "Principio de finalidad del tratamiento de datos.",
        "Principio de veracidad publicitaria únicamente.",
        "Ninguno, si el lead dio su email es suficiente.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 16: \"Un lead no es una lista libre de uso; sus datos sólo pueden tratarse con base jurídica y finalidad definida.\"",
      sourceModuleId: "m06",
      legalReference: "RGPD y LOPDGDD",
      difficulty: "medium",
    },
    {
      id: "m06-q12",
      question:
        "¿Qué debe hacer un agente ante un propietario que exige excluir a inquilinos por nacionalidad o por tener hijos?",
      options: [
        "Aceptar el encargo, ya que el propietario decide libremente sobre su inmueble.",
        "Rechazar el criterio discriminatorio y proponer un filtro objetivo de solvencia y adecuación.",
        "Aceptarlo solo si se pacta por escrito con el propietario.",
        "Consultarlo directamente con el portal inmobiliario antes de publicar.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Caso 4 (Ficha 26): \"La profesionalidad incluye poner límites al encargo ilícito o discriminatorio.\"",
      sourceModuleId: "m06",
      legalReference: "Normativa de no discriminación en el acceso a la vivienda",
      difficulty: "medium",
    },
    {
      id: "m06-q13",
      question: "¿Qué debe verificarse antes de anunciar un piso como \"con licencia turística activa\"?",
      options: [
        "Basta con una captura de un portal donde figuraba anteriormente.",
        "Documentación turística, comunitaria y registral vigente.",
        "La palabra del propietario es prueba suficiente.",
        "No es necesario verificar nada si el piso está en zona turística.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Caso 1 (Ficha 23): \"La promesa turística es una de las más sensibles en Mallorca: sin prueba, no se publicita.\"",
      sourceModuleId: "m06",
      legalReference: "Ley 34/1988 y normativa balear de consumo/turismo",
      difficulty: "medium",
    },
    {
      id: "m06-q14",
      question: "¿Cuál es el primer paso correcto del protocolo de gestión de una queja, según la Ficha 22?",
      options: [
        "Determinar de inmediato quién tiene la culpa.",
        "Acusar recibo sin prejuzgar.",
        "Ignorar el mensaje hasta que se calme el cliente.",
        "Ofrecer una compensación económica inmediata.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El protocolo de queja empieza siempre por \"acusar recibo sin prejuzgar\" antes de pedir documentos e identificar al responsable.",
      sourceModuleId: "m06",
      legalReference: "Ficha 22 (protocolo interno)",
      difficulty: "basic",
    },
    {
      id: "m06-q15",
      question:
        "¿Qué debe comprobarse siempre antes de informar a un cliente sobre el canal de reclamación, según la Ficha 14?",
      options: [
        "El régimen autonómico balear aplicable de hojas de reclamaciones, consumo y mediación.",
        "El idioma preferido del cliente.",
        "El precio final de la operación.",
        "Si el cliente ya ha dejado una reseña online.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "\"Comprueba el régimen autonómico aplicable de hojas de reclamaciones, consumo y mediación antes de informar al cliente.\"",
      sourceModuleId: "m06",
      legalReference: "Normativa balear de consumo",
      difficulty: "medium",
    },
    {
      id: "m06-q16",
      question:
        "¿Qué solicitud de documentación de solvencia a un candidato a inquilino sería contraria a la Ficha 32?",
      options: [
        "Solicitar nómina reciente y contrato laboral.",
        "Solicitar de forma indiscriminada todo tipo de datos personales sin relación con la solvencia ni política de conservación definida.",
        "Solicitar el último IRPF si el arrendador lo requiere razonablemente.",
        "Solicitar un informe de solvencia proporcional al riesgo, con información al candidato.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "\"Pedir... puede ser legítimo si es proporcional al riesgo y se informa correctamente\" — pero no debe convertirse en \"recogida indiscriminada de datos\".",
      sourceModuleId: "m06",
      legalReference: "RGPD/LOPDGDD y Ficha 32",
      difficulty: "medium",
    },
    {
      id: "m06-q17",
      question:
        "¿Qué papel tiene el agente inmobiliario ante un defecto constructivo detectado tras la entrega de una vivienda nueva?",
      options: [
        "Resolver técnicamente el defecto por su cuenta.",
        "Canalizar y documentar la comunicación, sin prometer reparación o plazo sin autorización del responsable.",
        "Ignorarlo porque la relación de consumo terminó con la entrega.",
        "Negociar directamente una indemnización sin consultar al promotor o constructor.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ficha 13: \"El agente no resuelve técnicamente el defecto, pero debe canalizar y documentar la comunicación.\"",
      sourceModuleId: "m06",
      legalReference: "Normativa de garantías de edificación y consumo",
      difficulty: "medium",
    },
    {
      id: "m06-q18",
      question:
        "¿Qué revisión adicional recomienda la Ficha 35 cuando el activo es complejo, de alto valor o incluye datos turísticos, urbanísticos o de promoción?",
      options: [
        "Revisión de un solo responsable comercial.",
        "Revisión de \"cuatro ojos\".",
        "Ninguna revisión adicional es necesaria.",
        "Solo revisión notarial en el momento de la firma.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "\"Aplica revisión de cuatro ojos cuando el activo sea complejo, de alto valor o incluya datos turísticos, urbanísticos o de promoción.\"",
      sourceModuleId: "m06",
      legalReference: "Ficha 35 (protocolo interno de control de calidad)",
      difficulty: "medium",
    },
  ],
};

export const m06Glossary: GlossaryItem[] = [
  {
    id: "g-m06-trlgdcu",
    term: "TRLGDCU (Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios)",
    definition:
      "Norma marco estatal (RDL 1/2007) que regula la relación de consumo, la información precontractual y el control de cláusulas abusivas.",
    easyDefinition:
      "La \"ley general\" que protege a cualquier persona que compra o contrata como particular frente a un profesional.",
    relatedModuleId: "m06",
  },
  {
    id: "g-m06-rd-515-1989",
    term: "RD 515/1989",
    definition:
      "Real Decreto que exige a los profesionales (promotores, vendedores) entregar información y documentación específica sobre la vivienda ofrecida a consumidores (plano, superficie, precio, calidades, garantías de cantidades anticipadas).",
    easyDefinition:
      "La norma que obliga a dar al comprador una \"ficha completa\" del piso antes de que pague nada.",
    relatedModuleId: "m06",
  },
  {
    id: "g-m06-lcci",
    term: "LCCI (Ley reguladora de los Contratos de Crédito Inmobiliario)",
    definition:
      "Ley que regula el proceso y los plazos de concesión de hipotecas (oferta vinculante, periodo de reflexión).",
    easyDefinition:
      "La ley que marca los pasos y tiempos que el banco debe seguir para darte una hipoteca, y con la que debe encajar cualquier cláusula de \"condición de financiación\" en un contrato de reserva.",
    relatedModuleId: "m06",
  },
  {
    id: "g-m06-condicion-suspensiva-financiacion",
    term: "Condición suspensiva de financiación",
    definition:
      "Cláusula que supedita la eficacia de una reserva o arras a la obtención de un préstamo hipotecario, definiendo plazo, documentación y efecto si el banco deniega la financiación.",
    easyDefinition:
      "Un \"por si acaso\" pactado en el contrato: si al final no te dan la hipoteca, se explica qué pasa con el dinero entregado.",
    relatedModuleId: "m06",
    balearContext:
      "Especialmente relevante en reservas de vivienda en Mallorca sujetas a hipoteca, como el caso de Alcúdia descrito en la Ficha 24.",
  },
  {
    id: "g-m06-base-juridica-finalidad-tratamiento",
    term: "Base jurídica y finalidad del tratamiento (RGPD/LOPDGDD)",
    definition:
      "Requisito para tratar datos personales (como los de un lead o candidato a inquilino) solo para el propósito informado y con un fundamento legal válido (consentimiento, interés legítimo, etc.).",
    easyDefinition:
      "Solo puedes usar los datos de un cliente para lo que el cliente sabía y aceptó, no para cualquier otra cosa.",
    relatedModuleId: "m06",
  },
  {
    id: "g-m06-masc",
    term: "MASC (Mecanismos Alternativos de Solución de Controversias)",
    definition:
      "Vías de resolución de conflictos (negociación, mediación, arbitraje) previas o alternativas a la vía judicial.",
    easyDefinition:
      "Formas de resolver un problema hablando o mediando, antes de ir a juicio.",
    relatedModuleId: "m06",
  },
  {
    id: "g-m06-falta-conformidad-vicio-constructivo",
    term: "Falta de conformidad / vicio constructivo",
    definition:
      "Categorías distintas de defecto en una vivienda entregada: la falta de conformidad se refiere a que el bien no coincide con lo pactado, y el vicio constructivo a un defecto técnico de la edificación que puede activar garantías legales de la construcción.",
    easyDefinition:
      "No es lo mismo que \"el color no es el que esperabas\" (defecto estético) que \"hay una grieta estructural\" (vicio constructivo) — cada uno tiene remedios legales distintos.",
    relatedModuleId: "m06",
  },
];

export const m06Alerts: string[] = [
  "El temario está expresamente fechado como \"Contenido revisado con fuentes oficiales disponibles a 4 de julio de 2026\" y advierte de forma reiterada: \"Consulta siempre la versión consolidada y la regulación autonómica vigente\" (Ficha 29) — es decir, el propio documento fuente pide verificar la vigencia de TRLGDCU, RD 515/1989, Ley 34/1988, Ley 3/1991, normativa balear de consumo y RGPD/LOPDGDD antes de aplicarlas en un caso real, dado el ritmo de actualización normativa.",
  "Se destaca de forma expresa la necesidad de comprobar el régimen autonómico balear aplicable de hojas de reclamaciones, consumo y mediación antes de informar a un cliente sobre cómo reclamar (Ficha 14) — el temario no fija un procedimiento único, sino que remite a la normativa balear vigente en cada momento.",
  "Se menciona el calendario LCCI como referencia obligada para cualquier cláusula de condición suspensiva de financiación (Ficha 08 y Caso 2/Ficha 24), lo que implica revisar los plazos vigentes de esa ley al redactar cláusulas de reserva o arras ligadas a hipoteca.",
  "Se señala una conexión explícita con otro módulo del curso: \"La protección de datos se amplía en el Módulo 16 de tecnología inmobiliaria\" (Ficha 16), lo que sugiere que el contenido de protección de datos de este módulo es introductorio y se profundiza más adelante en el temario completo.",
];
