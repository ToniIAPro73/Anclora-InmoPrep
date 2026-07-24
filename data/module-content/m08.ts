import type { Module, GlossaryItem } from "@/lib/types";

export const m08Module: Module = {
  id: "m08",
  code: "M08",
  title: "Valoraciones Inmobiliarias",
  order: 8,
  description: "Métodos de comparación, coste, renta y residual aplicados al mercado insular.",
  estimatedMinutes: 55,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m08-l1",
      moduleId: "m08",
      title: "Fundamentos de la valoración, encargo y evidencia mínima",
      order: 1,
      summary: "Antes de dar una cifra hay que definir qué derecho se valora, para qué finalidad, en qué fecha y con qué documentación, y comprobarlo mediante inspección disciplinada.",
      content: `Valorar un inmueble significa construir una conclusión razonada sobre un derecho concreto, en una fecha concreta y para una finalidad concreta. El precio que desea el propietario, el valor fiscal, la tasación hipotecaria y el rango comercial pueden ser distintos entre sí sin que ninguno sea necesariamente un error: cada uno responde a una pregunta diferente. El método sirve para explicar por qué difieren y qué decisión permite tomar cada uno. La secuencia profesional correcta es: finalidad -> fecha -> derecho valorado -> documentos -> visita -> mercado -> método -> rango -> límites -> comunicación escrita. Antes de dar cifra alguna, el agente debe determinar qué derecho se transmite (pleno dominio, nuda propiedad, usufructo, cuota indivisa, derecho de superficie, finca arrendada o activo con cargas), para qué se necesita el valor (captación, financiación, herencia, partición, inversión, seguro, pleito o fiscalidad) y cuál es la fecha de valor (fecha de inspección, de oferta, de devengo fiscal, de herencia o de firma prevista). Actualizar un precio antiguo por un porcentaje genérico no es válido: primero se verifica si la muestra y el activo siguen siendo comparables.

## Principios de valoración
Los principios que ordenan los métodos —recogidos en el marco de la Orden ECO/805/2003 para finalidades financieras— son finalidad, sustitución, prudencia, probabilidad, temporalidad, transparencia, mayor y mejor uso, y, desde la actualización normativa de 2025, sostenibilidad de forma expresa, exigiendo considerar indicadores de efecto ambiental y climático cuando corresponda. El principio de "mayor y mejor uso" no permite valorar por un uso imaginario: debe ser legalmente posible, físicamente viable y razonablemente realizable.

## El encargo de valoración
Todo encargo de valoración, aunque sea un correo o una hoja de trabajo, debe identificar el inmueble, el derecho valorado, la finalidad, la fecha, los destinatarios, las fuentes recibidas y las limitaciones, siguiendo cinco pasos: identificación (referencia, dirección, CRU si existe, anexos, participación, derecho y estado de ocupación), finalidad, fuentes (distinguiendo información verificada de no verificada, sin presentar una declaración del vendedor como hecho técnico), conclusión (expresando un rango y una estrategia cuando la incertidumbre sea significativa) y trazabilidad (guardando versión, fecha y aprobación del cliente). Una estimación comercial no debe presentarse nunca como informe pericial, tasación hipotecaria o asesoramiento fiscal.

## Reparto de roles
En el reparto de roles, el agente inmobiliario aporta mercado, demanda, estrategia, comparables y comunicación (puede elaborar un análisis comparativo de mercado, pero no disfrazarlo de tasación oficial); el técnico aporta medición, diagnóstico y viabilidad; el tasador habilitado o la sociedad de tasación interviene cuando la finalidad exige un informe sujeto a normativa específica; y la entidad financiera decide el crédito según solvencia, endeudamiento y política de riesgo (marco de la LCCI, Ley 5/2019) — una tasación elevada no garantiza el importe del préstamo. El expediente documental mínimo debe permitir contrastar qué se transmite, cómo está descrito, qué se puede hacer y qué costes o derechos de terceros existen: nota simple y título, certificación catastral y planos, licencias/cédula/CEE, contrato de alquiler, certificado de comunidad y actas, e información urbanística. En Mallorca es habitual que existan diferencias entre el relato comercial, la superficie real, el Catastro, el Registro y la documentación de obras; esa diferencia no debe esconderse dentro de un promedio de euros por metro cuadrado.

## La inspección
Finalmente, la inspección debe ser sistemática (acceso y entorno, edificio, vivienda, anexos y riesgo visible) y disciplinada en el lenguaje: no se declara "sin humedades" o "instalación nueva" solo por haber visto el inmueble; se usan fórmulas como "sin perjuicio de comprobación técnica, durante la visita se observa...". Una visita no convierte al agente en perito, pero sí permite detectar incoherencias que cambian el precio, el riesgo o la estrategia.`,
      easyExplanation: `Antes de decir cuánto vale un piso hay que aclarar de qué estamos hablando exactamente: qué parte de la propiedad se vende, para qué se quiere ese valor (venderlo, pedir una hipoteca, repartir una herencia) y en qué fecha. No es lo mismo el precio que pide el dueño, el valor que usa Hacienda o el que da el banco para el préstamo. El agente pide papeles clave (nota simple, Catastro, licencias, contrato de alquiler si lo hay) y visita el inmueble anotando lo que ve, sin inventar diagnósticos técnicos que no puede certificar.`,
      balearExample: `Un agente en Manacor recibe el encargo de valorar un piso por correo electrónico ("valóralo para vender"). Antes de dar cifra, pregunta si hay hipoteca pendiente, si el piso está alquilado, pide la nota simple y la referencia catastral, y descubre que el Registro dice 85 m² pero el Catastro refleja 90 m² por un anexo no escriturado. Documenta la discrepancia por escrito antes de fijar cualquier rango.`,
      keyConcepts: [
        "pleno dominio",
        "finalidad de la valoración",
        "fecha de valor",
        "principio de sustitución",
        "mayor y mejor uso",
        "trazabilidad",
        "Orden ECO/805/2003",
        "expediente documental mínimo",
      ],
      frequentErrors: [
        "Confundir precio pactado, valor de mercado, valor fiscal y tasación hipotecaria como si fueran sinónimos.",
        "Actualizar un precio antiguo aplicando un porcentaje genérico sin comprobar si el activo y el mercado siguen siendo comparables.",
        "Presentar una estimación comercial como informe pericial o tasación oficial.",
        `Declarar diagnósticos técnicos ("sin humedades", "obra legal") solo por haber hecho una visita.`,
        "No documentar las fuentes recibidas ni distinguir lo verificado de lo no verificado.",
      ],
      examples: [
        {
          id: "m08-l1-ex1",
          title: "Encargo verbal mal definido",
          scenario: `Un cliente pide "valorar mi casa" sin más detalle.`,
          application: "El agente exige por escrito derecho, finalidad, fecha y documentos antes de trabajar cifra alguna.",
          isBalearContext: false,
        },
        {
          id: "m08-l1-ex2",
          title: "Discrepancia Catastro-Registro",
          scenario: "85 m² en Registro frente a 90 m² en Catastro.",
          application: "Se documenta la diferencia y se advierte al cliente antes de fijar precio.",
          isBalearContext: true,
        },
        {
          id: "m08-l1-ex3",
          title: "Visita sin diagnóstico",
          scenario: "Se observan manchas de humedad en un techo.",
          application: `Se anota "posible patología, sin perjuicio de comprobación técnica" en vez de afirmar una causa.`,
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m08-l2",
      moduleId: "m08",
      title: "Delimitación del mercado, comparables y método de comparación",
      order: 2,
      summary: "El método comparativo solo funciona si el agente delimita correctamente el segmento de mercado, depura la muestra y homogeneiza los comparables de forma justificada.",
      content: `La delimitación de mercado combina espacio, producto, público y fecha. Dos viviendas a pocos minutos en una ciudad como Palma pueden pertenecer a segmentos distintos por tipo de edificio, ruido, vistas, estado, aparcamiento o demanda internacional; en la costa, la estacionalidad y proximidad real al mar modifican el segmento; en rústico, el agua, el acceso, la legalidad o las vistas protegidas son las variables clave. Los cinco pasos para delimitar son tipología (producto: piso, ático, casa, unifamiliar, finca, solar, promoción, derecho real o inmueble arrendado), demanda (segmento: primer comprador, familia local, segunda residencia, inversor, mercado internacional o explotación), ubicación (barrio, subzona, radio, eje de movilidad, litoral o núcleo rural), fecha (ventana temporal; ofertas muy antiguas no describen la competencia actual) y variables clave (ascensor, parking, exterioridad, terraza, reforma, vistas, licencia o rendimiento). Un error frecuente es comparar un piso reformado con ascensor y garaje con una vivienda sin ascensor usando solo euros por m² construidos: el número parece objetivo, pero el comparable no lo es.

## Fuentes de mercado y depuración
Las fuentes de mercado —oferta de portal, operación propia, colaboración profesional, datos públicos/estadísticos y tasación o informe técnico— tienen ventajas y riesgos distintos: la oferta de portal actualiza competencia visible pero puede tener precio de salida, duplicidad o ficha desactualizada; la operación propia aporta negociación real pero muestra pequeña; nunca debe declararse un dato de cierre si solo es una oferta. Depurar significa retirar duplicados, detectar anuncios reciclados, normalizar superficies y separar inmuebles con condiciones no equivalentes; si la muestra queda corta, no se fuerza precisión: se amplía el radio con justificación, se usa un método complementario o se concluye que el mercado es escaso y el rango debe ser más amplio.

## Superficie como variable de comparación
La superficie es una variable de comparación, no una licencia para sumar espacios distintos con el mismo valor unitario: útil, construida, construida con comunes, terraza/jardín y anexo (garaje, trastero) responden a finalidades distintas y no suelen coincidir con Registro o Catastro. Un ejemplo de ponderación orientativo es: superficie equivalente = interior + (terraza x coeficiente justificado) + (anexo x coeficiente justificado); el coeficiente no es universal y, si no puede justificarse, se usan ajustes cualitativos explicando el límite. En Mallorca este punto es crítico para áticos, plantas bajas con jardín, casas con porches y fincas con construcciones auxiliares.

## Homogeneización y conclusión
La homogeneización transforma una muestra heterogénea en una referencia útil: ajustes cuantitativos, ponderaciones cualitativas o una combinación de ambos, siempre pocos, relevantes y coherentes (una tabla con veinte ajustes puede ocultar más juicio subjetivo que conocimiento de mercado). Los factores típicos son ubicación micro, estado, altura/ascensor, anexos, exterioridad/terraza y ocupación/alquiler. Si tras ajustar un comparable mediocre "se vuelve perfecto", probablemente se eligió mal el comparable: es mejor descartarlo que forzarlo. El proceso completo del método comparativo sigue cinco pasos: definición del objeto y segmento, muestra depurada, depuración (normalizar fecha, superficie, planta, estado, parking, terraza, gastos y régimen jurídico), homogeneización comparable a comparable, y conclusión con un rango que no dependa de un único comparador ni de la media aritmética de anuncios desiguales. La fórmula de referencia es: rango defendible = intervalo de comparables homogeneizados +/- incertidumbre material, que aumenta cuando la muestra es escasa, el activo es singular, faltan documentos, hay mercado estacional o existen limitaciones de uso.`,
      easyExplanation: `Comparar pisos no es buscar tres anuncios parecidos en el mismo código postal. Hay que asegurarse de que el comprador realmente vería esos pisos como alternativas entre sí (misma zona, tipo, estado, fecha) y luego ajustar las diferencias reales (ascensor, terraza, reforma) de forma explicada, no con porcentajes inventados. Si la muestra de comparables es pequeña o poco fiable, el precio final debe expresarse como un rango más amplio, no como una cifra falsamente precisa.`,
      balearExample: `En Sóller se quiere valorar una casa de pueblo de 110 m² sin ascensor (no aplica) con patio de 20 m². Los únicos "comparables" en portales son chalets con piscina en las afueras. El agente amplía la búsqueda a casas de pueblo similares en Fornalutx y Deià, ajusta por patio con un coeficiente justificado y descarta los chalets por no ser sustitutos reales.`,
      keyConcepts: [
        "delimitación de mercado",
        "depuración de la muestra",
        "superficie útil vs. construida",
        "homogeneización",
        "ajuste cualitativo vs. cuantitativo",
        "rango defendible",
        "incertidumbre material",
      ],
      frequentErrors: [
        "Comparar viviendas con diferencias reales (ascensor, garaje) usando solo el precio por m² construido.",
        `Declarar un anuncio de portal como "dato de cierre" sin confirmar que la operación se realizó.`,
        "Mezclar superficie útil, construida y con anexos en un mismo promedio sin aclararlo.",
        `Aplicar más de una decena de ajustes hasta que un comparable mediocre parezca "perfecto".`,
        "Forzar precisión con una muestra escasa en vez de ampliar el rango o el radio de búsqueda.",
      ],
      examples: [
        {
          id: "m08-l2-ex1",
          title: "Ático singular fuera de la media",
          scenario: "Un ático con vistas privilegiadas se sitúa muy por encima de la media de la muestra.",
          application: "No se fuerza a la media, se documenta su singularidad.",
          isBalearContext: false,
        },
        {
          id: "m08-l2-ex2",
          title: "Superficie mezclada",
          scenario: "Anuncios con útil y construida mezclados.",
          application: "Se normaliza a un único criterio antes de comparar.",
          isBalearContext: false,
        },
        {
          id: "m08-l2-ex3",
          title: "Mercado escaso en rústico",
          scenario: "Solo dos fincas comparables disponibles en el radio.",
          application: "Se amplía el radio y se combina con método de coste o renta.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m08-l3",
      moduleId: "m08",
      title: "Métodos económicos — coste, capitalización de rentas y DCF",
      order: 3,
      summary: "Cuando el método comparativo no es suficiente, el coste, la renta capitalizada o el descuento de flujos de caja permiten construir o contrastar el valor con otra lógica económica.",
      content: `El método del coste estima cuánto costaría reproducir o reemplazar el activo, con ajustes por terreno, antigüedad, obsolescencia y utilidad. Es especialmente útil en inmuebles singulares, edificios de reciente construcción, activos con poca muestra o casos donde el valor de reposición ayuda a contrastar la conclusión comparativa; no significa que todo inmueble valga "lo que costó construir", porque el mercado puede pagar menos o más según localización, demanda, diseño, riesgo y liquidez. Sus componentes son valor del suelo (sin usar edificabilidad no confirmada), coste de construcción (actualizado por fecha, calidad, tipología y complejidad), gastos indirectos (honorarios, licencias, seguros, OCT, tasas, financiación) y depreciación (física, funcional y externa). El esquema es: valor por coste = valor del suelo + coste de reemplazamiento depreciado + elementos accesorios razonables. En Mallorca, el coste puede verse afectado por accesos, logística insular, protección patrimonial, coste de adaptación energética, disponibilidad de mano de obra y restricciones ambientales, pero solo si se apoyan en información concreta del proyecto, no por una prima genérica de "isla".

## Depreciación física, funcional y externa
La depreciación no es un porcentaje automático por antigüedad: la física se relaciona con el estado y vida útil de elementos constructivos (cubierta con filtraciones, instalaciones al final de su vida útil); la funcional aparece cuando el diseño ya no satisface la demanda (piso grande con distribución ineficiente, vivienda sin ascensor en mercado envejecido); la externa procede del entorno (nueva vía, servidumbre, inundabilidad, pérdida de atractivo por regulación); y la energética se relaciona con envolvente ineficiente o climatización antigua sin plan de mejora. Una reforma estética no elimina una obsolescencia de fondo: pintar o cambiar una cocina no resuelve falta de ascensor, mala distribución, humedades estructurales o una limitación legal.

## Capitalización de rentas
El método de capitalización de rentas valora el inmueble de inversión por su capacidad de generar flujos, no por la renta anunciada multiplicada sin control. La renta bruta debe depurarse por vacancia, impago, periodos de comercialización, gastos de comunidad no repercutibles, mantenimiento, seguros, gestión, tributos, reposiciones y coste de adecuación, para obtener el ingreso operativo neto (NOI = rentas efectivas - gastos operativos del propietario - reserva razonable de mantenimiento; la cuota hipotecaria se analiza después, al medir el cash flow del inversor, no antes). Después se aplica una tasa coherente con el riesgo, liquidez, ubicación, contrato, duración y calidad del arrendatario: capitalización directa = ingreso operativo neto anual / tasa de capitalización. Ejemplo orientativo del propio módulo: un ingreso neto de 18.000 EUR y una tasa del 5% dan 360.000 EUR; la tasa no se "elige", se justifica mediante mercado y riesgo. El método se vuelve delicado en vivienda habitada, locales con carencias, alquileres con prórrogas, rentas antiguas o usos turísticos sujetos a licencias: en esos casos se separa renta contractual, renta de mercado y escenario de reversión.

## Descuento de flujos de caja (DCF)
El descuento de flujos de caja (DCF) modeliza cobros y pagos por periodos y es más transparente que una capitalización simple cuando hay carencias, reformas, ocupación progresiva, vencimientos contractuales o una venta al final del horizonte; a cambio, es más sensible a sus hipótesis (renta, vacancia, coste, plazo, tasa de descuento o valor de salida). Debe definirse el horizonte (años y fecha de salida), ingresos (renta contractual, renta de mercado, revisiones, ocupación, cobros extraordinarios), gastos (operación, mantenimiento, reposición, gestión, seguros, tributos, obras, distinguiendo capex de gasto corriente), tasa (riesgo, inflación esperada, liquidez, contrato, mercado) y valor terminal (venta o capitalización al final, sin asumir revalorización sin soporte). La fórmula es: valor DCF = suma de flujos netos descontados + valor terminal descontado; el modelo no elimina el riesgo, lo hace visible mediante análisis de sensibilidad de las hipótesis que más mueven la conclusión.`,
      easyExplanation: `Si no hay suficientes pisos parecidos para comparar, se puede calcular el valor de otras dos formas: viendo cuánto costaría construir algo igual (método del coste, restando el desgaste por los años) o viendo cuánto dinero neto genera el inmueble si se alquila y dividiendo esa renta entre una tasa de rentabilidad exigida (capitalización). Para inversiones más complejas, con reformas o alquileres que cambian con el tiempo, se proyectan los ingresos y gastos año a año y se traen a valor de hoy (DCF).`,
      balearExample: "Un local comercial en Inca se alquila por 1.500 EUR/mes. Tras descontar gastos de comunidad no repercutibles, seguros y una reserva de mantenimiento, el ingreso neto anual es de 15.000 EUR. Aplicando una tasa de capitalización del 6% razonada por el riesgo del sector y la ubicación, el valor estimado es 250.000 EUR (15.000 / 0,06).",
      keyConcepts: [
        "valor de reposición",
        "depreciación física/funcional/externa",
        "ingreso operativo neto (NOI)",
        "tasa de capitalización",
        "descuento de flujos de caja (DCF)",
        "valor terminal",
        "capex vs. gasto corriente",
      ],
      frequentErrors: [
        "Asumir que el valor de un inmueble es igual a lo que costó construirlo, ignorando la demanda de mercado.",
        "Capitalizar la renta bruta anunciada sin descontar vacancia, impagos ni gastos operativos.",
        "Mezclar la cuota de la hipoteca del propietario con los gastos operativos al calcular el NOI.",
        `Aplicar una tasa de capitalización "de internet" sin comparar activo, plazo y riesgo real.`,
        "Asumir una revalorización del valor terminal en un DCF sin ningún soporte documental.",
      ],
      examples: [
        {
          id: "m08-l3-ex1",
          title: "Vivienda con reforma parcial",
          scenario: "Cocina y baños reformados pero sin ascensor.",
          application: "La reforma estética no elimina la obsolescencia funcional de la falta de ascensor.",
          isBalearContext: false,
        },
        {
          id: "m08-l3-ex2",
          title: "Local con carencias de renta",
          scenario: "Contrato con meses de carencia inicial.",
          application: "Se usa DCF en vez de capitalización directa por la variabilidad del flujo.",
          isBalearContext: false,
        },
        {
          id: "m08-l3-ex3",
          title: "Cálculo de capitalización directa",
          scenario: "NOI de 18.000 EUR, tasa 5%.",
          application: "Valor = 18.000 / 0,05 = 360.000 EUR.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m08-l4",
      moduleId: "m08",
      title: "Método residual, activos especiales, derechos reales y cargas",
      order: 4,
      summary: "El suelo, las fincas rústicas, los derechos reales limitados y las cargas exigen ajustar el objeto valorado antes de aplicar cualquier fórmula, y el método residual permite valorar suelo sin convertir el potencial en certeza.",
      content: `El método residual se utiliza para suelo, promociones, rehabilitaciones, cambios de uso y activos donde el valor depende de una futura transformación. El punto crítico no es la fórmula sino la hipótesis de producto: si el planeamiento, la licencia, el proyecto o la demanda no están confirmados, el residual debe reflejar esa incertidumbre y no convertirse en una prima de expectativa. Deben confirmarse el producto final (tipología, superficies, anexos, precio y velocidad de venta —no aplicar precio de ático a todo el edificio), el aprovechamiento (planeamiento, ordenanza, parcela, retranqueos, alturas, cesiones y afecciones —no valorar edificabilidad que no corresponde), los costes (construcción, urbanización, honorarios, tasas, comercialización, contingencia —sin omitir costes indirectos ni sobrecostes de plazo), el plazo (licencia, obra, comercialización, entrega y cobro —incorporando coste financiero y riesgo temporal) y el beneficio/riesgo del promotor. El esquema residual estático es: valor residual del suelo = valor de venta final - costes totales - margen de promoción; en el residual dinámico cada flujo se ubica en el tiempo y se descuenta, y cuanto mayor la incertidumbre y el plazo, más importante es el descuento. El régimen estatal de valoraciones urbanísticas (Real Decreto Legislativo 7/2015, texto refundido de la Ley de Suelo y Rehabilitación Urbana, y Real Decreto 1492/2011, Reglamento de valoraciones de la Ley de Suelo) responde a finalidades específicas —especialmente suelo y expropiación— y no equivale automáticamente al precio de mercado libre de una promoción.

## Suelo rústico
El suelo rústico en Mallorca exige separar terreno, edificaciones, explotaciones, derechos de agua, acceso, servidumbres, construcciones auxiliares y posibilidades de uso; una edificación existente no acredita que se pueda ampliar, alquilar turísticamente, segregar o cambiar de uso. Nunca debe valorarse una finca rústica por "posibilidad de construir" o "licencia fácil": la afirmación segura es la que resulta de planeamiento, informe técnico y documentación concreta (agua por pozo/red/comunidad de regantes, edificaciones constando en Registro/Catastro con antigüedad y licencia, título habilitante turístico con requisitos civiles, insulares y registrales).

## Derechos reales, cargas y ocupación
No siempre se vende pleno dominio: cuando existe usufructo, nuda propiedad, derecho de uso, habitación, superficie, servidumbre, opción, arrendamiento o cuota indivisa, se valora el derecho concreto, no una vivienda libre imaginaria. En herencias es habitual confundir la valoración fiscal del usufructo (que sirve para liquidar determinados impuestos) con el precio de venta real de una nuda propiedad, que depende de demanda, horizonte, gastos y riesgo de un comprador real. Las cargas y la ocupación —hipoteca no cancelada, embargo, anotación de demanda, afección fiscal, deuda comunitaria, ocupación sin título o derrama prevista— reducen la liquidez antes que el metro cuadrado: la valoración debe separar importe conocido, procedimiento de cancelación y efecto en liquidez, y nunca "compensarse" simplemente diciendo que el piso está barato.

## Valor catastral, valor de referencia, precio y valor de mercado
Es fundamental no confundir cuatro valores distintos: el valor catastral (fuente Catastro, usado para IBI y otras reglas fiscales), el valor de referencia (determinado anualmente por la Dirección General del Catastro a partir del análisis de compraventas, con efectos en ITPAJD e ISD; si existe valor de referencia y el declarado o precio es superior, se toma la magnitud superior para esos impuestos; no afecta al valor catastral ni al IBI), el valor declarado/precio y el valor de mercado (análisis de transacción probable entre partes independientes). Para finalidades financieras, la tasación se sujeta al marco técnico aplicable (Orden ECO/805/2003, con última actualización publicada en junio de 2025 y efectos desde agosto de 2025) y se realiza por entidades o profesionales habilitados según corresponda; la Ley 5/2019 (LCCI) incorpora obligaciones de transparencia y evaluación de solvencia en el crédito inmobiliario, de modo que el banco puede prestar menos que un porcentaje de tasación, o incluso denegar el crédito aunque el inmueble tenga una valoración alta. Nunca debe afirmarse "la tasación cubre el 80%" como garantía: tasación, loan-to-value y solvencia son tres decisiones relacionadas pero distintas.`,
      easyExplanation: `No todo lo que se vende es "una vivienda entera y libre de cargas": puede haber un usufructo, un alquiler en vigor, una hipoteca sin pagar o un terreno rústico donde no está claro si se puede construir. Antes de dar un valor hay que aclarar exactamente qué derecho se transmite y qué limitaciones o deudas lo acompañan. Además, hay que distinguir el valor catastral (para el IBI), el valor de referencia (para impuestos de compraventa o herencia) y el valor de mercado real: no son lo mismo y confundirlos es un error tanto de examen como de la vida real.`,
      balearExample: `En una herencia en Felanitx, dos hermanos heredan una casa con usufructo vitalicio a favor de la madre. Uno de ellos quiere vender su nuda propiedad y pide "el valor de la casa". El agente explica que debe valorarse la nuda propiedad concreta —no la vivienda libre— considerando la edad de la usufructuaria, la renta que no se percibe y la baja liquidez de este derecho en el mercado.`,
      keyConcepts: [
        "método residual",
        "valor de reposición del suelo",
        "usufructo y nuda propiedad",
        "valor catastral",
        "valor de referencia",
        "LCCI (Ley 5/2019)",
        "loan to value",
        "Reglamento de valoraciones del suelo (RD 1492/2011)",
      ],
      frequentErrors: [
        "Valorar una finca rústica asumiendo que se podrá construir o ampliar sin confirmación urbanística.",
        "Confundir el valor fiscal del usufructo con el precio de venta real de una nuda propiedad.",
        "Usar el valor catastral como si fuera el valor de mercado o la base de referencia fiscal.",
        `Afirmar que "la tasación cubre el 80% del préstamo" como si fuera una garantía automática.`,
        "Tratar el método residual estático como una certeza sin analizar sensibilidad a precio, coste y plazo.",
      ],
      examples: [
        {
          id: "m08-l4-ex1",
          title: "Cálculo residual estático",
          scenario: "Venta final estimada 1.200.000 EUR, costes totales 700.000 EUR, margen de promoción exigido 150.000 EUR.",
          application: "Valor residual del suelo = 1.200.000 - 700.000 - 150.000 = 350.000 EUR.",
          isBalearContext: false,
        },
        {
          id: "m08-l4-ex2",
          title: "Finca rústica con expectativa turística",
          scenario: `Propietario afirma que es "ideal para agroturismo".`,
          application: "Se exige título habilitante y normativa antes de incorporar esa prima al valor.",
          isBalearContext: true,
        },
        {
          id: "m08-l4-ex3",
          title: "Discrepancia de valores",
          scenario: "Cliente confunde el valor catastral con el precio de venta.",
          application: "Se explican las cuatro magnitudes (catastral, referencia, declarado, mercado) y su uso correcto.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m08-l5",
      moduleId: "m08",
      title: "Sostenibilidad, especificidades de Mallorca y VPO/promociones",
      order: 5,
      summary: "La sostenibilidad y el riesgo climático forman ya parte de los principios de valoración, y Mallorca añade capas de verificación en costa, turismo, mercado internacional, estacionalidad y vivienda protegida.",
      content: `Desde la actualización de la Orden ECO en 2025, la sostenibilidad tiene un lugar expreso entre los principios de valoración cuando corresponda. La eficiencia energética, la calidad de la envolvente, el sistema de climatización, la exposición a calor, inundación, escasez de agua, erosión o el coste asegurador pueden afectar gasto, confort, demanda y liquidez. Esto no significa que una etiqueta energética determine por sí sola un precio, ni que todo riesgo climático se traduzca en un porcentaje fijo: significa que el valorador debe considerarlo cuando resulte relevante y explicarlo si altera hipótesis de uso o coste. Los factores a vigilar son el certificado energético (gasto esperado, atractivo, rehabilitación futura —comparando activos equivalentes, sin prometer ahorro no cuantificado), inundabilidad/costa (asegurabilidad, mantenimiento, obras y percepción de riesgo —revisando cartografía e informes sectoriales), agua/calor (uso de la finca, habitabilidad práctica, costes de adaptación), materiales e instalaciones (vida útil, reposición, coste de mantenimiento) y normativa futura (rehabilitación, eficiencia o uso permitido, sin especular). En Mallorca estos factores aparecen especialmente en primera línea, zonas inundables, rústico, viviendas antiguas, edificios sin rehabilitación, activos con consumo elevado y ubicaciones con condicionantes de acceso.

## Especificidades de Mallorca
Mallorca combina vivienda habitual, segunda residencia, inversión, producto turístico regulado, costa, fincas rústicas y mercado internacional, lo que amplía la demanda en algunos activos pero también multiplica las capas de verificación necesarias: una vivienda no gana valor por la palabra "turístico" si no existe título habilitante; una vista no es permanente si depende de una parcela edificable; una finca no gana prima por "posibilidad de ampliar" sin soporte urbanístico; y una cercanía a playa puede verse compensada por accesos, ruido, costes, servidumbres o riesgos. Los elementos locales a explicar son la costa (distancia real, acceso, vistas, servidumbres, exposición y normativa —no vender primera línea sin revisar límites y afecciones), el turismo (título habilitante, comunidad, plazas, registro y normativa aplicable —no capitalizar renta turística no autorizada), el mercado internacional (idioma, fiscalidad, financiación, visita remota y tiempos de decisión —no asumir que todo comprador extranjero paga una prima) y la estacionalidad (tráfico, servicios, ruido, ocupación y liquidez por periodo —no extrapolar el verano a demanda anual sin base).

## VPO, VPL y promociones
La vivienda protegida (VPO), la vivienda de precio limitado (VPL) y otros regímenes de intervención requieren revisar calificación, precio máximo, duración de la protección, requisitos del comprador, autorizaciones, derechos de tanteo y condiciones de transmisión: no deben usarse comparables de vivienda libre para fijar un precio protegido sin revisar primero el régimen aplicable. En promoción sobre plano, el valor depende además de licencia/título habilitante, proyecto, memoria, garantía de cantidades entregadas a cuenta y calendario; en rehabilitación, se separa el valor actual del valor tras obra y coste-riesgo; en cambio de uso, no se incorpora el uso futuro como consolidado hasta su confirmación. Para una promoción, el método residual y el análisis de absorción suelen ser más útiles que repetir el precio por metro cuadrado de producto terminado, porque el valor final depende de que el producto sea realizable, financiable y vendible dentro del calendario previsto.

## Comunicación del valor
Finalmente, un informe de valoración —aunque sea una propuesta comercial breve— debe permitir a un tercero entender qué activo se analizó, qué documentos se revisaron, qué datos proceden de la visita y cuáles fueron declarados, cuál es el mercado de referencia, qué método se aplicó, cuáles son los comparables, qué limitaciones existen y qué rango se recomienda; no debe esconder advertencias relevantes en una nota al pie. La comunicación correcta no dice "vale 500.000 EUR", sino algo como "con la información revisada, el rango razonable es 480.000-510.000 EUR; propongo salida en 505.000 EUR y revisión en 30 días si no se alcanzan X visitas cualificadas". La revisión de la estrategia de precio se justifica por evidencia (impresiones, consultas cualificadas, visitas, ofertas, tiempo de mercado frente a competencia), no porque "hayan pasado dos semanas".`,
      easyExplanation: `Cosas como el gasto de calefacción, el riesgo de inundación o si la vivienda está bien aislada ya influyen oficialmente en cómo se valora un inmueble, no solo su tamaño y ubicación. En Mallorca hay que tener especial cuidado con la palabra "turístico" (solo vale si hay licencia real), con vender "vistas al mar" que dependen de que no se construya al lado, y con no confundir el ambiente veraniego con la demanda de todo el año. Para pisos de precio protegido (VPO) no vale comparar con pisos libres del barrio: primero hay que mirar las reglas de ese régimen.`,
      balearExample: `Un apartamento en primera línea de Cala Millor se anuncia como "ideal para alquiler turístico" y con "vistas al mar garantizadas". El agente comprueba que no existe registro de plazas turísticas a nombre del propietario y que hay una parcela edificable justo delante; en el informe indica que la renta turística no puede capitalizarse sin título habilitante y que la vista no es permanente, proponiendo un rango condicionado a la aclaración de ambos puntos.`,
      keyConcepts: [
        "principio de sostenibilidad",
        "riesgo climático",
        "VPO/VPL",
        "título habilitante turístico",
        "estacionalidad",
        "análisis de absorción",
        "prima de Mallorca",
        "rango condicionado",
      ],
      frequentErrors: [
        "Asumir que una etiqueta energética alta o baja determina automáticamente un porcentaje de precio.",
        "Capitalizar renta turística sin comprobar la existencia de título habilitante y registro.",
        `Vender "vistas garantizadas" sin comprobar si depende de una parcela edificable colindante.`,
        "Comparar vivienda protegida (VPO/VPL) con comparables de vivienda libre sin revisar el régimen.",
        "Extrapolar la demanda o los precios de temporada alta a todo el año sin base de datos.",
      ],
      examples: [
        {
          id: "m08-l5-ex1",
          title: "Vivienda sin rehabilitar en zona inundable",
          scenario: "Casa antigua cerca de un torrente.",
          application: "Se revisa cartografía de riesgo y se explica el efecto en asegurabilidad y liquidez.",
          isBalearContext: true,
        },
        {
          id: "m08-l5-ex2",
          title: "Promoción sobre plano",
          scenario: "Comprador quiere valorar un piso antes de escriturar.",
          application: "Se revisa licencia, memoria de calidades y garantía de cantidades entregadas a cuenta.",
          isBalearContext: false,
        },
        {
          id: "m08-l5-ex3",
          title: "Informe con rango condicionado",
          scenario: "Cliente exige una única cifra de venta.",
          application: "Se comunica un rango con condiciones y plan de revisión en 30 días.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m08-l6",
      moduleId: "m08",
      title: "Casos prácticos, ejercicios de aplicación y guía de fórmulas",
      order: 6,
      summary: `Cuatro casos prácticos (piso urbano con derrama, inversión con arrendamiento, finca rústica con expectativa turística y solar con método residual) consolidan la aplicación conjunta de documentación, método y comunicación del valor.`,
      content: `El primer caso práctico analiza un piso de 92 m² construidos en Palma, tercera planta con ascensor, terraza de 12 m², garaje y trastero, que el propietario quiere anunciar a 540.000 EUR porque un ático cercano se anunció por esa cifra. El Catastro refleja 96 m² frente a la superficie declarada, y la comunidad ha aprobado una derrama de fachada aún no exigible. La resolución razonada sigue cinco pasos: no usar el ático como comparable principal (producto distinto por altura, terraza y escasez); alinear la superficie explicando el criterio usado y sin mezclar la cifra catastral con la del anuncio; incorporar el estado real del inmueble (una actualización parcial no equivale a una reforma integral); pedir presupuesto y calendario de la derrama e incorporarla como coste o condicionante de negociación; y concluir con un rango y una estrategia de salida, separando escenarios "as is" y "tras reforma" si el precio objetivo depende de obra. La lección clave: una cifra de portal no vale por estar cerca; el comparable debe responder a la pregunta "¿un comprador de este piso lo consideraría realmente una alternativa?".

## Caso 2: inversión con arrendamiento vigente
El segundo caso plantea una vivienda de 70 m² en Calvià con contrato de arrendamiento de vivienda habitual firmado hace dos años, con renta mensual inferior a los anuncios actuales del entorno; el vendedor afirma que "en cuanto compre, sube la renta a mercado". La resolución exige leer el contrato completo (fecha, destino, duración, prórrogas, actualización pactada, gastos, subrogación, desistimiento y derechos de adquisición preferente), separar renta contractual de renta de mercado (durante la vigencia el comprador se subroga en la posición arrendadora y no puede tratar la vivienda como libre), calcular el ingreso operativo neto (NOI = rentas efectivas - gastos operativos del propietario - reserva de mantenimiento, sin incluir la financiación como gasto operativo), definir un escenario de reversión hacia renta de mercado con sus riesgos normativos y contractuales, y presentar dos valores: inversión con contrato vigente y valor potencial libre (solo si este último es legal y alcanzable), explicando que la diferencia no es "margen gratis" sino que responde a plazo y riesgo.

## Caso 3: finca rústica con expectativa turística
El tercer caso trata una finca rústica en el interior de Mallorca con vivienda, almacén, piscina, bancales y pozo, publicitada históricamente como "perfecta para agroturismo" y "ampliable"; la nota simple recoge una servidumbre de paso; Catastro y Registro difieren en superficie; el almacén y la piscina requieren comprobación; y no se aporta título turístico ni informe urbanístico. La resolución valora primero el activo existente y documentado (terreno, vivienda, derecho de paso, accesos, agua y edificaciones acreditadas), evita incorporar prima de agroturismo o alquiler turístico sin comprobar título habilitante, encarga comprobación técnica de superficies, analiza la servidumbre (trayecto, uso, frecuencia y afectación a privacidad y acceso) y comunica un rango condicionado, descontando liquidez si la documentación no permite confirmar el conjunto. En rústico, la diferencia entre una finca atractiva y una inversión defendible suele estar en los documentos de uso, agua, acceso, edificaciones y disciplina, no en el número de fotos.

## Caso 4: solar urbano y método residual
El cuarto caso analiza un solar urbano en un municipio mallorquín donde el vendedor afirma que se pueden promover ocho viviendas y estima un precio final basado en un edificio nuevo de otra zona, sin aportar consulta urbanística, estudio geotécnico, proyecto, cargas de urbanización ni cálculo de costes, mientras el comprador pretende cerrar rápido mediante una opción de compra. La resolución razonada suspende la conclusión de valor final hasta comprobar clasificación, condiciones de la parcela, edificabilidad, alturas, retranqueos, aparcamiento, cesiones y afecciones (planeamiento); construye un escenario conservador de ingresos con comparables equivalentes y velocidad de absorción realista; incluye todos los costes (construcción, urbanización, honorarios, licencias, seguros, financiación, comercialización, contingencia y margen de promoción); calcula sensibilidad ante caída de precio, subida de coste o retraso de licencia; y propone una opción de compra con condiciones de due diligence, urbanismo y financiación, ya que "comprar tiempo" reduce el riesgo de pagar por un potencial no comprobado. La fórmula de sensibilidad es: residual ajustado = residual base - impacto de precio - impacto de coste - impacto de plazo.

## Cierre del módulo y fuentes esenciales
La ficha de cierre del módulo resume las cinco herramientas que deben dominarse —comparación (rango de comparables homogeneizados, para vivienda terminada con muestra suficiente), coste (suelo + reemplazamiento depreciado, para activo singular, nuevo o de contraste), capitalización (NOI / tasa de capitalización, para activo que genera renta estable y analizable), DCF (flujos descontados + terminal, para ingresos/costes variables en el tiempo) y residual (valor final - costes - margen, para suelo, promoción, rehabilitación o cambio de uso)— junto con las fuentes esenciales para comprobar datos vivos: BOE (Orden ECO/805/2003, con última actualización de junio de 2025 y efectos desde agosto de 2025; RDL 7/2015; RD 1492/2011; Ley 5/2019 LCCI), la Dirección General del Catastro (Sede Electrónica para valor catastral, referencia catastral, certificados y valor de referencia), el Banco de España (registros de entidades y sociedades/servicios de tasación homologados, guías de financiación hipotecaria) y el BOIB junto con el planeamiento municipal y el PTI de Mallorca (ordenanzas, uso, suelo, licencia y afecciones territoriales). El cierre del módulo resume la filosofía del bloque: un buen valor no es la cifra más alta ni la más baja, es la conclusión que se puede explicar, documentar, revisar y defender sin ocultar los límites.`,
      easyExplanation: `Estos casos muestran, con ejemplos concretos de Mallorca, cómo se aplica todo lo anterior en la práctica: un piso con una obra pendiente de pagar (derrama), un piso alquilado que vale distinto según si sigue alquilado o se vende libre, una finca de campo que promete "posibilidad de turismo" sin papeles que lo respalden, y un solar donde el vendedor promete más viviendas de las que quizá se puedan construir. En todos los casos la lección es la misma: no fiarse de lo que "se dice" sin comprobarlo con documentos, y explicar el valor como un rango razonado, no como una cifra mágica.`,
      balearExample: `Un comprador en Llucmajor quiere adquirir en dos semanas un solar "para ocho viviendas" mediante una opción de compra, presionado por el vendedor que dice tener "otro interesado". El agente recomienda condicionar la opción a comprobar el planeamiento municipal y la edificabilidad real antes de comprometer el precio final.`,
      keyConcepts: [
        "opción de compra condicionada",
        "derrama de comunidad",
        `escenario "as is" vs. "tras reforma"`,
        "NOI y subrogación arrendaticia",
        "servidumbre de paso",
        "sensibilidad del residual",
        "absorción del producto",
      ],
      frequentErrors: [
        `Fijar el precio de venta de un piso basándose en un único comparable "de lujo" cercano (ático).`,
        `Ignorar una derrama aprobada por considerarla "todavía no exigible".`,
        `Prometer al comprador que "en cuanto compre" podrá subir la renta de un alquiler vigente.`,
        "Capitalizar la posibilidad de agroturismo o construcción sin título ni consulta urbanística.",
        "Cerrar una operación de solar con opción de compra sin condicionarla a due diligence urbanística.",
      ],
      examples: [
        {
          id: "m08-l6-ex1",
          title: "Rango con escenarios",
          scenario: "Piso en Palma con derrama pendiente.",
          application: `Se presentan dos valores, "as is" y "tras obra", en vez de una única cifra.`,
          isBalearContext: true,
        },
        {
          id: "m08-l6-ex2",
          title: "Doble valor de inversión",
          scenario: "Vivienda en Calvià arrendada por debajo de mercado.",
          application: "Se presentan valor con contrato vigente y valor potencial libre, con el riesgo de reversión explicado.",
          isBalearContext: true,
        },
        {
          id: "m08-l6-ex3",
          title: "Suspensión de conclusión",
          scenario: "Solar sin consulta urbanística.",
          application: "Se pospone el valor final hasta confirmar edificabilidad, y se propone opción de compra condicionada.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m08-e1",
      moduleId: "m08",
      type: "calculation",
      question: "Un local se alquila por 1.250 EUR/mes. Tras descontar gastos operativos del propietario (2.000 EUR/año) y una reserva de mantenimiento (1.000 EUR/año), calcula el NOI anual. Si la tasa de capitalización de mercado justificada es del 6%, ¿cuál es el valor por capitalización directa?",
      expectedAnswer: "NOI = (1.250 x 12) - 2.000 - 1.000 = 15.000 - 3.000 = 12.000 EUR; Valor = 12.000 / 0,06 = 200.000 EUR.",
      explanation: `Se depura la renta bruta antes de capitalizar y la tasa se justifica por riesgo y mercado, no se "elige" libremente.`,
      difficulty: "medium",
    },
    {
      id: "m08-e2",
      moduleId: "m08",
      type: "calculation",
      question: "Un promotor estima vender un edificio terminado por 1.500.000 EUR. Los costes totales (construcción, urbanización, honorarios, licencias, financiación y comercialización) ascienden a 900.000 EUR y el margen de promoción exigido es de 200.000 EUR. Calcula el valor residual estático del suelo.",
      expectedAnswer: "1.500.000 - 900.000 - 200.000 = 400.000 EUR.",
      explanation: "El residual estático resta del valor de venta final todos los costes y el margen del promotor, exigiendo que producto, costes y plazo estén confirmados.",
      difficulty: "medium",
    },
    {
      id: "m08-e3",
      moduleId: "m08",
      type: "decision",
      question: "Un cliente pide anunciar su piso a 540.000 EUR porque un ático cercano se vendió por esa cifra, pero su piso no tiene terraza ni las mismas vistas y la comunidad tiene una derrama aprobada. ¿Qué haces?",
      expectedAnswer: `No usar el ático como comparable principal, buscar comparables de tipología y estado equivalentes, incorporar el coste/condicionante de la derrama y proponer un rango con escenarios "as is" y "tras obra".`,
      explanation: "El comparable debe responder a si un comprador real vería ambos inmuebles como alternativas equivalentes.",
      difficulty: "basic",
    },
    {
      id: "m08-e4",
      moduleId: "m08",
      type: "decision",
      question: `Un propietario de una vivienda arrendada como residencia habitual te dice: "en cuanto se venda, el nuevo propietario puede subir la renta a precio de mercado". ¿Es correcto presentarlo así al comprador?`,
      expectedAnswer: "No; el comprador se subroga en el contrato vigente y debe respetar duración, prórrogas y condiciones pactadas; hay que presentar valor con contrato vigente y valor potencial libre por separado, explicando el escenario de reversión y sus riesgos.",
      explanation: "La renta contractual es una limitación legal del comprador durante la vigencia del contrato.",
      difficulty: "medium",
    },
    {
      id: "m08-e5",
      moduleId: "m08",
      type: "calculation",
      question: "Estás valorando un local por el método del coste. El valor del suelo es 150.000 EUR, el coste de reemplazamiento del edificio (sin depreciar) es 300.000 EUR, y estimas una depreciación acumulada del 20% por antigüedad y estado. Calcula el valor final por coste.",
      expectedAnswer: "Coste depreciado = 300.000 x (1 - 0,20) = 240.000 EUR; Valor final = 150.000 + 240.000 = 390.000 EUR.",
      explanation: "El valor por coste suma el suelo al coste de reemplazamiento ya depreciado, sin asumir que el mercado pagará necesariamente esa cifra.",
      difficulty: "medium",
    },
    {
      id: "m08-e6",
      moduleId: "m08",
      type: "comprehension",
      question: "Explica la diferencia entre valor catastral, valor de referencia y valor de mercado, y en qué operación se usa cada uno.",
      expectedAnswer: "El valor catastral (Catastro) se usa para IBI y otras reglas fiscales; el valor de referencia lo fija anualmente la Dirección General del Catastro a partir de compraventas y sirve de base en ITPAJD e ISD (si el precio declarado es superior, prevalece este); el valor de mercado es la estimación de transacción probable entre partes independientes y no tiene una fuente administrativa fija.",
      explanation: "Confundir estos tres valores es un error frecuente tanto en el examen como en la práctica profesional.",
      difficulty: "basic",
    },
    {
      id: "m08-e7",
      moduleId: "m08",
      type: "balear_scenario",
      question: `Un vendedor de una finca rústica en el interior de Mallorca la anuncia como "perfecta para agroturismo y ampliable", pero no aporta título turístico, y Catastro y Registro difieren en superficie. ¿Cómo procedes antes de dar un rango de valor?`,
      expectedAnswer: "Valorar primero el activo documentado (terreno, vivienda, agua, accesos, edificaciones acreditadas), no incorporar prima de agroturismo sin título habilitante, encargar comprobación técnica de superficies, analizar servidumbres y comunicar un rango condicionado descontando liquidez por la incertidumbre documental.",
      explanation: "El atractivo comercial no convierte una expectativa turística o urbanística en valor consolidado.",
      difficulty: "advanced",
    },
    {
      id: "m08-e8",
      moduleId: "m08",
      type: "calculation",
      question: "Un solar tiene un residual base de 400.000 EUR. Un análisis de sensibilidad muestra que una caída de precio de venta reduce el residual en 60.000 EUR, una subida de costes de construcción lo reduce en 40.000 EUR y un retraso de licencia añade un impacto de 30.000 EUR por coste financiero. Calcula el residual ajustado.",
      expectedAnswer: "400.000 - 60.000 - 40.000 - 30.000 = 270.000 EUR.",
      explanation: "El residual ajustado muestra qué palancas (precio, coste, plazo) pueden destruir el margen del promotor antes de comprometer una compra.",
      difficulty: "advanced",
    },
  ],
  quizQuestions: [
    {
      id: "m08-q1",
      question: "¿Cuál es la diferencia fundamental entre precio y valor de mercado?",
      options: [
        "Son sinónimos y se usan indistintamente",
        "El precio es lo pactado por partes concretas; el valor de mercado es una estimación razonada para una fecha y condiciones definidas",
        "El precio siempre es superior al valor de mercado",
        "El valor de mercado solo aplica a viviendas nuevas",
      ],
      correctAnswerIndex: 1,
      explanation: "El precio puede verse afectado por urgencia, relación familiar o condiciones singulares; el valor de mercado busca la cifra más probable en condiciones normales.",
      sourceModuleId: "m08",
      legalReference: "Ficha 03 del temario (conceptos de valor y precio); principios generales de valoración.",
      difficulty: "basic",
    },
    {
      id: "m08-q2",
      question: "¿Por qué una tasación hipotecaria no garantiza el importe del préstamo?",
      options: [
        "Porque la tasación nunca es vinculante para el banco",
        "Porque la concesión de crédito depende también de solvencia, endeudamiento, documentación y política de riesgo de la entidad",
        "Porque las tasaciones caducan a los 15 días",
        "Porque el valor catastral siempre prevalece sobre la tasación",
      ],
      correctAnswerIndex: 1,
      explanation: "El loan-to-value, la solvencia del cliente y la política de riesgo del banco son decisiones relacionadas pero distintas de la tasación.",
      sourceModuleId: "m08",
      legalReference: "Ley 5/2019 (LCCI); Orden ECO/805/2003.",
      difficulty: "medium",
    },
    {
      id: "m08-q3",
      question: "¿Qué tres elementos deben constar siempre en una conclusión de valoración?",
      options: [
        "Precio de portal, comisión y plazo de venta",
        "Objeto/derecho valorado, fecha de valoración y finalidad",
        "Nombre del propietario, dirección y teléfono de contacto",
        "Superficie construida únicamente",
      ],
      correctAnswerIndex: 1,
      explanation: "Además debe indicarse el método, las fuentes y las limitaciones aplicadas.",
      sourceModuleId: "m08",
      legalReference: `Ficha 05 del temario, "encargo de valoración".`,
      difficulty: "basic",
    },
    {
      id: "m08-q4",
      question: "¿Cuándo es peligroso usar el precio por metro cuadrado como indicador principal?",
      options: [
        "Nunca, es siempre el indicador más fiable",
        "Cuando se mezclan superficies, anexos, estados, alturas, derechos u ofertas no equivalentes",
        "Solo en viviendas de más de 200 m²",
        "Únicamente en fincas rústicas",
      ],
      correctAnswerIndex: 1,
      explanation: "El euro por m² puede engañar si no se define primero qué superficie se usa y si los comparables son realmente equivalentes.",
      sourceModuleId: "m08",
      legalReference: `Ficha 11 del temario, "la superficie".`,
      difficulty: "basic",
    },
    {
      id: "m08-q5",
      question: "¿Qué norma regula, en el ámbito de su aplicación, la valoración de bienes inmuebles y determinados derechos para finalidades financieras?",
      options: [
        "Ley 5/2019 (LCCI)",
        "Orden ECO/805/2003",
        "Real Decreto Legislativo 7/2015",
        "Real Decreto 1492/2011",
      ],
      correctAnswerIndex: 1,
      explanation: "La Orden ECO/805/2003 regula normas de valoración de bienes inmuebles y de determinados derechos para ciertas finalidades financieras, con última actualización publicada en junio de 2025 y efectos desde agosto de 2025.",
      sourceModuleId: "m08",
      legalReference: "BOE, Orden ECO/805/2003.",
      difficulty: "medium",
    },
    {
      id: "m08-q6",
      question: "¿Qué principio de valoración incorporó de forma expresa la actualización normativa de 2025?",
      options: ["Sustitución", "Sostenibilidad", "Temporalidad", "Prudencia"],
      correctAnswerIndex: 1,
      explanation: "Desde 2025 debe considerarse, cuando corresponda, indicadores de efecto ambiental y climático sobre el inmueble.",
      sourceModuleId: "m08",
      legalReference: "Orden ECO/805/2003 (actualización de 2025).",
      difficulty: "medium",
    },
    {
      id: "m08-q7",
      question: "¿Qué organismo determina anualmente el valor de referencia utilizado como base en ITPAJD e ISD?",
      options: [
        "El Banco de España",
        "La Dirección General del Catastro",
        "El Ayuntamiento de cada municipio",
        "El Registro de la Propiedad",
      ],
      correctAnswerIndex: 1,
      explanation: "El valor de referencia se determina anualmente por la Dirección General del Catastro a partir del análisis de compraventas y tiene efectos en dichos impuestos, sin afectar al valor catastral ni al IBI.",
      sourceModuleId: "m08",
      legalReference: "Normativa de Catastro y valor de referencia (ITPAJD/ISD).",
      difficulty: "medium",
    },
    {
      id: "m08-q8",
      question: "Si el valor de referencia es inferior al precio o contraprestación declarada en una compraventa, ¿qué magnitud se toma para el impuesto correspondiente?",
      options: [
        "Siempre el valor de referencia, aunque sea inferior",
        "La magnitud superior entre valor de referencia y precio/contraprestación declarada",
        "La media entre ambos valores",
        "El valor catastral",
      ],
      correctAnswerIndex: 1,
      explanation: "La regla es tomar la magnitud superior para efectos de esos impuestos.",
      sourceModuleId: "m08",
      legalReference: "Normativa de valor de referencia catastral (ITPAJD/ISD).",
      difficulty: "advanced",
    },
    {
      id: "m08-q9",
      question: "¿Qué método puede ser más útil para valorar un local arrendado con renta estable y previsible, y por qué?",
      options: [
        "El método de comparación, porque siempre hay muchos locales comparables",
        "El método de capitalización de rentas, porque el valor depende de flujos netos sostenibles y del riesgo del contrato",
        "El método del coste, porque el local es un activo reciente",
        "El método residual, porque el local podría rehabilitarse",
      ],
      correctAnswerIndex: 1,
      explanation: "La capitalización valora la capacidad de generar renta neta y sostenible, aplicando una tasa coherente con el riesgo.",
      sourceModuleId: "m08",
      legalReference: `Ficha 16 del temario, "método de capitalización de rentas".`,
      difficulty: "medium",
    },
    {
      id: "m08-q10",
      question: "¿Por qué el método residual exige comprobar el planeamiento antes de valorar un solar?",
      options: [
        "Porque el planeamiento determina automáticamente el precio de venta",
        "Porque producto, edificabilidad, plazo y costes dependen de lo que la normativa permite realmente",
        "Porque el planeamiento nunca cambia y da seguridad total",
        "Porque no es necesario, basta con el precio de solares similares",
      ],
      correctAnswerIndex: 1,
      explanation: "Sin confirmar clasificación, edificabilidad, alturas y cesiones, el residual puede convertir una expectativa en una prima injustificada.",
      sourceModuleId: "m08",
      legalReference: "Real Decreto Legislativo 7/2015; Real Decreto 1492/2011.",
      difficulty: "medium",
    },
    {
      id: "m08-q11",
      question: "¿Qué norma regula específicamente las obligaciones de transparencia y evaluación de solvencia en los contratos de crédito inmobiliario?",
      options: [
        "Orden ECO/805/2003",
        "Ley 5/2019 (LCCI)",
        "Real Decreto Legislativo 7/2015",
        "Reglamento de valoraciones del suelo (RD 1492/2011)",
      ],
      correctAnswerIndex: 1,
      explanation: "La Ley 5/2019, reguladora de los contratos de crédito inmobiliario, incorpora estas obligaciones y regula la relación entre financiación, solvencia y tasación.",
      sourceModuleId: "m08",
      legalReference: "BOE, Ley 5/2019 (LCCI).",
      difficulty: "medium",
    },
    {
      id: "m08-q12",
      question: "¿Qué documento debe revisarse para evaluar si una vivienda tiene título habilitante para alquiler turístico?",
      options: [
        "Solo el certificado energético",
        "El registro de plazas turísticas y la normativa/autorización aplicable, junto con la comunidad y estatutos si procede",
        "Basta con la existencia física de una piscina",
        "La cédula de habitabilidad es suficiente por sí sola",
      ],
      correctAnswerIndex: 1,
      explanation: "No se puede capitalizar renta turística sin título habilitante, registro y normativa aplicable comprobados.",
      sourceModuleId: "m08",
      legalReference: `Ficha 26 y 27 del temario, "Mallorca: turismo" y "VPO/VPL, promociones y activos con precio o destino limitado".`,
      difficulty: "medium",
    },
    {
      id: "m08-q13",
      question: "En vivienda protegida (VPO/VPL), ¿qué debe revisarse antes de fijar un precio?",
      options: [
        "Solo comparables de vivienda libre en la misma zona",
        "Calificación, precio máximo, duración de la protección, requisitos del comprador y derechos de tanteo",
        "Únicamente el año de construcción",
        "El precio que pida el propietario, sin más",
      ],
      correctAnswerIndex: 1,
      explanation: "El mercado libre puede no ser la referencia utilizable en un régimen de vivienda protegida.",
      sourceModuleId: "m08",
      legalReference: `Ficha 27 del temario, "VPO, VPL, promociones y activos con precio o destino limitado".`,
      difficulty: "basic",
    },
    {
      id: "m08-q14",
      question: "¿Qué elemento reduce la liquidez de un inmueble antes que sus características físicas, según el temario?",
      options: [
        "El color de la fachada",
        "Cargas como hipoteca no cancelada, embargo, deuda comunitaria u ocupación sin título",
        "La orientación de las ventanas",
        "El número de anuncios en portales",
      ],
      correctAnswerIndex: 1,
      explanation: "La valoración incorpora lo que el comprador podrá hacer y cuánto tardará en poder hacerlo, no solo las características físicas.",
      sourceModuleId: "m08",
      legalReference: `Ficha 22 del temario, "cargas, ocupación y riesgo".`,
      difficulty: "medium",
    },
    {
      id: "m08-q15",
      question: "Al aplicar el método de capitalización, ¿qué gasto NO debe incluirse en el cálculo del ingreso operativo neto (NOI)?",
      options: [
        "La vacancia estimada",
        "La cuota de la hipoteca del propietario (financiación)",
        "Los gastos de comunidad no repercutibles",
        "La reserva de mantenimiento",
      ],
      correctAnswerIndex: 1,
      explanation: "El NOI es la base para capitalización; la cuota hipotecaria se analiza después, al medir el cash flow del inversor, no al calcular el ingreso operativo.",
      sourceModuleId: "m08",
      legalReference: "Ficha 16 y 31 del temario, fórmula NOI.",
      difficulty: "medium",
    },
    {
      id: "m08-q16",
      question: "¿Qué distingue la depreciación funcional de la depreciación física en el método del coste?",
      options: [
        "No hay diferencia, ambas se calculan igual",
        "La física se relaciona con el estado y desgaste material; la funcional aparece cuando el diseño ya no satisface la demanda actual (por ejemplo, falta de ascensor)",
        "La funcional solo aplica a fincas rústicas",
        "La física siempre es mayor que la funcional",
      ],
      correctAnswerIndex: 1,
      explanation: "Una reforma estética no elimina una obsolescencia de fondo, como la falta de ascensor o una mala distribución.",
      sourceModuleId: "m08",
      legalReference: `Ficha 15 del temario, "depreciación y obsolescencia".`,
      difficulty: "medium",
    },
    {
      id: "m08-q17",
      question: "En el caso práctico del solar urbano con método residual, ¿qué debe hacer el agente ante la falta de consulta urbanística y estudio geotécnico?",
      options: [
        "Aceptar la estimación del vendedor y anunciar el precio final directamente",
        "Suspender la conclusión de valor final hasta comprobar clasificación, edificabilidad y condiciones de la parcela",
        "Multiplicar el precio de un edificio de otra zona por la superficie del solar",
        "Firmar la compraventa inmediatamente para no perder la operación",
      ],
      correctAnswerIndex: 1,
      explanation: "El residual se rompe si el producto final, el plazo o los costes se tratan como certezas sin soporte documental.",
      sourceModuleId: "m08",
      legalReference: `Ficha 33 del temario, "caso práctico 4: solar urbano y método residual".`,
      difficulty: "advanced",
    },
    {
      id: "m08-q18",
      question: "¿Qué fuente institucional debe consultarse para verificar el planeamiento municipal, ordenanzas y afecciones territoriales en Mallorca?",
      options: [
        "Únicamente portales inmobiliarios privados",
        "BOIB, planeamiento municipal y PTI de Mallorca",
        "El Banco de España",
        "La Dirección General del Catastro exclusivamente",
      ],
      correctAnswerIndex: 1,
      explanation: "El BOIB junto con el planeamiento municipal y el Plan Territorial Insular (PTI) de Mallorca son las fuentes esenciales para uso, suelo, licencia y afecciones territoriales.",
      sourceModuleId: "m08",
      legalReference: `Ficha 35 del temario, "fuentes esenciales para comprobar datos vivos".`,
      difficulty: "medium",
    },
  ],
};

export const m08Glossary: GlossaryItem[] = [
  {
    id: "g-m08-noi",
    term: "Ingreso operativo neto (NOI)",
    definition: "Rentas efectivas menos gastos operativos del propietario menos reserva razonable de mantenimiento, excluyendo la financiación, utilizado como base para la capitalización directa de rentas.",
    easyDefinition: "Es el dinero que realmente le queda al propietario de un alquiler después de pagar gastos, sin contar la hipoteca.",
    relatedModuleId: "m08",
  },
  {
    id: "g-m08-valor-referencia",
    term: "Valor de referencia",
    definition: "Magnitud determinada anualmente por la Dirección General del Catastro a partir del análisis de compraventas, utilizada como base en ITPAJD e ISD cuando es superior al precio declarado; no modifica el valor catastral ni el IBI.",
    easyDefinition: "Es la cifra que usa Hacienda para calcular ciertos impuestos de compraventa o herencia, distinta del valor catastral y del precio real de venta.",
    relatedModuleId: "m08",
  },
  {
    id: "g-m08-metodo-residual",
    term: "Método residual",
    definition: "Técnica de valoración que obtiene el valor del suelo o de una actuación restando del valor de venta final estimado los costes totales y el margen de promoción exigible, empleada en suelo, promociones, rehabilitaciones y cambios de uso.",
    easyDefinition: "Sirve para calcular cuánto vale un terreno antes de construir, restando al precio de venta futuro todos los gastos y el beneficio del promotor.",
    relatedModuleId: "m08",
  },
  {
    id: "g-m08-obsolescencia-funcional",
    term: "Obsolescencia funcional",
    definition: "Pérdida de valor derivada de que el diseño, distribución o instalaciones del inmueble ya no satisfacen la demanda actual (por ejemplo, ausencia de ascensor o distribución poco práctica), distinta de la depreciación física o externa.",
    easyDefinition: `Un piso puede estar en buen estado pero "quedarse anticuado" por su diseño, como no tener ascensor en un edificio de varias plantas.`,
    relatedModuleId: "m08",
  },
  {
    id: "g-m08-ltv",
    term: "Loan to value (LTV)",
    definition: "Relación entre el importe del préstamo concedido y el valor de referencia bancaria (tasación), que junto con la evaluación de solvencia exigida por la LCCI determina el importe final del crédito.",
    easyDefinition: "Es el porcentaje del valor de tasación que el banco está dispuesto a prestar, que puede ser menor si el comprador no cumple los requisitos de solvencia.",
    relatedModuleId: "m08",
  },
  {
    id: "g-m08-homogeneizacion",
    term: "Homogeneización",
    definition: "Proceso de ajuste cuantitativo o ponderación cualitativa de una muestra de comparables para hacerlos comparables entre sí respecto al inmueble objeto, evitando ajustes excesivos que oculten juicio subjetivo.",
    easyDefinition: `Es "igualar" los pisos que se comparan ajustando sus diferencias reales (terraza, ascensor, estado) de forma explicada, no con porcentajes inventados.`,
    relatedModuleId: "m08",
  },
];

export const m08Alerts: string[] = [
  "Actualización de la Orden ECO/805/2003 (2025): última actualización publicada en junio de 2025, con efectos desde agosto de 2025. Incorpora de forma expresa el principio de sostenibilidad entre los principios de valoración, exigiendo considerar indicadores de efecto ambiental y climático sobre el inmueble cuando corresponda (eficiencia energética, envolvente, exposición a riesgos climáticos). Los agentes deben actualizar sus informes y comunicaciones para reflejar este principio cuando sea relevante.",
  "Valor de referencia catastral: se determina anualmente por la Dirección General del Catastro; los agentes deben verificar cada año la cifra vigente en la Sede Electrónica del Catastro antes de asesorar sobre impuestos de compraventa (ITPAJD) o sucesiones/donaciones (ISD), ya que puede diferir del valor catastral y del precio declarado.",
  "Ley 5/2019 (LCCI): marco vigente de transparencia y evaluación de solvencia en créditos inmobiliarios; recordar a los clientes que la concesión de crédito no depende solo del valor de tasación, sino también de solvencia, endeudamiento y política de riesgo de la entidad.",
  "Fuentes oficiales a verificar antes de cada valoración (recomendación del propio temario, con datos vivos que cambian): BOE (Orden ECO/805/2003, RDL 7/2015, RD 1492/2011, Ley 5/2019), Dirección General del Catastro (valor catastral, referencia catastral, certificados), Banco de España (registro de tasadoras homologadas), BOIB y planeamiento municipal/PTI de Mallorca (uso, suelo, licencia, afecciones territoriales). El contenido del módulo está contrastado con fuentes oficiales disponibles a 4 de julio de 2026 y advierte explícitamente que no sustituye la tasación habilitada, los informes técnicos ni el asesoramiento jurídico o fiscal del caso concreto.",
];
