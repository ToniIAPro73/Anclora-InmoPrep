import type { Module, GlossaryItem } from "@/lib/types";

export const m02Module: Module = {
  id: "m02",
  code: "M02",
  title: "Derecho Tributario y Fiscal",
  order: 2,
  description:
    "ITPAJD balear, IVA, IRPF, IRNR, Modelo 600 ATIB y deducciones autonómicas.",
  estimatedMinutes: 55,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m02-l1",
      moduleId: "m02",
      title: "Marco tributario inmobiliario y valoración fiscal del inmueble",
      order: 1,
      summary:
        "El agente debe saber qué administración gestiona cada tributo y qué cifra de valor (precio, valor catastral o valor de referencia) es relevante en cada operación antes de estimar ningún impuesto.",
      content: `La fiscalidad inmobiliaria no es una lista de impuestos aislados: cada operación obliga a contestar una cadena de preguntas: qué se transmite o explota, quién interviene, si actúa como empresario, dónde se sitúa el inmueble, cuál es el valor fiscal relevante y qué plazo de declaración se abre. Un agente competente detecta esas preguntas y no improvisa conclusiones.

## Reparto de competencias
La Constitución reserva al Estado la competencia sobre Hacienda general, pero las comunidades autónomas gestionan y regulan aspectos de determinados tributos cedidos. Los ayuntamientos, a su vez, aprueban ordenanzas y gestionan sus tributos locales dentro de los límites estatales. En Mallorca conviven tres administraciones: la AEAT (competente en IRPF, IRNR, IVA, Impuesto sobre Sociedades y retenciones; ejemplo de actuación: Modelo 210, IVA de local, ganancia del vendedor residente), la ATIB/CAIB (competente en ITPAJD, ISD y Patrimonio, con tributos propios; ejemplo: Modelo 600, sucesión de inmueble balear) y el ayuntamiento del municipio en el que radica el inmueble (competente en IBI, IIVTNU, ICIO y tasas; ejemplo: plusvalía municipal de una venta en Palma).

Cinco principios evitan la mayoría de los errores de bulto: (1) el impuesto se devenga en una fecha concreta y una reforma posterior no suele cambiar la tributación de un hecho ya realizado; (2) no basta el precio escrito, porque en ITPAJD e ISD el valor de referencia catastral puede actuar como suelo fiscal cuando exista y sea superior al declarado; (3) el hecho imponible y el sujeto pasivo no siempre coinciden con quien soporta económicamente el coste por pacto privado; (4) las ordenanzas municipales varían por municipio y ejercicio, por lo que nunca debe copiarse una cuota de Palma a Calvià, Inca o Manacor sin comprobarla; y (5) las bonificaciones exigen requisitos y conservación del destino, de modo que una compra barata que pierde el beneficio puede acabar en complementaria, intereses y sanción.

El agente identifica, informa y coordina, pero no debe emitir una liquidación definitiva ni prometer una exención sin documentación suficiente. La frase correcta ante el cliente es: "este es el régimen probable; validemos los requisitos antes de asumirlo en el coste de operación".

## Valor fiscal: precio, valor catastral y valor de referencia
Existen tres cifras que nunca deben confundirse. El precio de compraventa sirve para el contrato, la financiación y el cálculo de ganancias, pero no sustituye automáticamente la base fiscal si existe un valor de referencia mayor. El valor catastral sirve para el IBI, la imputación de rentas y ciertos cálculos locales, pero no determina por sí solo la base de ITP o ISD. El valor de referencia es la base imponible mínima de ITPAJD/ISD cuando existe y es superior al declarado, pero no sirve para calcular el IBI ni para sustituir una tasación hipotecaria.

Desde 2022, la regla práctica en adquisiciones sujetas a ITPAJD o ISD es trabajar con el mayor entre el valor declarado, el precio/contraprestación cuando proceda y el valor de referencia catastral. Antes de fijar arras, el agente debe solicitar la referencia catastral y consultar el valor de referencia a la fecha de devengo: no hay que esperar a la escritura, porque un desfase puede romper el presupuesto del comprador. El protocolo de valoración fiscal recomendado consta de cinco pasos: obtener referencia catastral y certificación descriptiva y gráfica; consultar el valor de referencia vigente en la sede del Catastro y archivar el certificado; comparar valor de referencia, precio, valor de tasación y estado real del inmueble; si el valor de referencia supera claramente el valor de mercado por una singularidad objetiva, documentar el estado y preparar evidencia para una eventual rectificación o impugnación; y comunicar al comprador el coste fiscal calculado sobre la base más conservadora, no solo sobre el precio anunciado.`,
      easyExplanation: `Cuando alguien compra, hereda o vende una vivienda en Mallorca hay tres "cajas" que cobran impuestos: Hacienda estatal (AEAT), el Govern balear (ATIB) y el ayuntamiento. Cada una mira una cosa distinta y, además, no basta con mirar el precio que pone la escritura: el Catastro tiene un "valor de referencia" que puede ser más alto, y si lo es, se paga sobre ese valor más alto. Por eso, antes de firmar arras hay que comprobar ese dato en la web del Catastro.`,
      balearExample: `Un agente en Sóller capta una casa de campo cuyo propietario cree que "todo se paga en Palma igual". Antes de fijar el precio de arras, el agente comprueba la referencia catastral en la sede electrónica del Catastro y descubre que el valor de referencia (185.000 €) supera el precio pactado (170.000 €); avisa al comprador de que el ITPAJD balear se calculará sobre 185.000 € y no sobre el precio escrito, evitando una sorpresa en la liquidación posterior.`,
      keyConcepts: [
        "AEAT",
        "ATIB",
        "hecho imponible",
        "sujeto pasivo",
        "valor catastral",
        "valor de referencia",
        "devengo",
        "ordenanza municipal",
      ],
      frequentErrors: [
        "Calcular impuestos solo sobre el precio de compraventa sin comprobar si existe un valor de referencia superior.",
        "Copiar cuotas o bonificaciones de un municipio a otro sin revisar la ordenanza vigente.",
        "Confundir quién paga por pacto privado (sujeto económico) con el sujeto pasivo legal del impuesto.",
        "Prometer una exención o tipo reducido sin validar antes los requisitos documentales.",
        "Esperar a la firma de escritura para comprobar el valor de referencia, en vez de hacerlo antes de las arras.",
      ],
      examples: [
        {
          id: "m02-l1-ex1",
          title: "Reparto de competencias en una venta en Palma",
          scenario: "Venta de un piso usado por un particular.",
          application:
            "El ITPAJD lo gestiona la ATIB, la posible ganancia patrimonial del vendedor la gestiona la AEAT (IRPF), y la plusvalía municipal (IIVTNU) la gestiona el ayuntamiento de Palma.",
          isBalearContext: true,
        },
        {
          id: "m02-l1-ex2",
          title: "Valor de referencia superior al precio",
          scenario: "Compra en Palma por 540.000 € con valor de referencia de 575.000 €.",
          application:
            "El TPO se calcula sobre 575.000 €, no sobre 540.000 €, dando una cuota de 47.750 €.",
          isBalearContext: true,
        },
        {
          id: "m02-l1-ex3",
          title: "Ordenanza municipal distinta",
          scenario: "Coeficientes de IIVTNU.",
          application:
            "Cada ayuntamiento balear fija su propio coeficiente y tipo (máximo legal 30 %), por lo que la cuota de Palma no es extrapolable a Calvià o Inca.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l2",
      moduleId: "m02",
      title: "ITPAJD en Illes Balears: TPO y AJD",
      order: 2,
      summary:
        "El Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados (ITPAJD) tiene tres modalidades (TPO, AJD y OS) y es el tributo central en la compra de vivienda usada y nueva en Mallorca, gestionado por la ATIB.",
      content: `El Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados tiene tres modalidades: Transmisiones Patrimoniales Onerosas (TPO), Operaciones Societarias (OS) y Actos Jurídicos Documentados (AJD). Para el agente inmobiliario, TPO y AJD son las centrales, y en Illes Balears la gestión corresponde a la ATIB. La clave es la incompatibilidad: una misma transmisión no se somete a TPO y a IVA a la vez, pero una venta sujeta a IVA puede, además, devengar AJD. Por ello la pregunta decisiva es si la operación está sujeta y no exenta de IVA; si la respuesta es sí, se analiza AJD, y si es no, se analiza TPO.

Suele tributar por TPO: la vivienda usada comprada a un particular; la segunda o ulterior entrega de un inmueble efectuada por un empresario cuando está exenta de IVA y no se renuncia a la exención; la constitución o cesión de derechos reales, ciertos arrendamientos, préstamos y fianzas fuera del ámbito empresarial; y la compraventa de garaje independiente, local usado o finca rústica, salvo que concurra una operación empresarial sujeta a IVA. La regla práctica es que "usado" no significa siempre TPO y "nuevo" no significa siempre IVA: lo relevante es la naturaleza de la entrega y la condición del transmitente, ya que un inmueble puede ser físicamente antiguo y, sin embargo, estar sujeto a IVA en una primera entrega tras rehabilitación.

## Tarifa general de TPO en Illes Balears (2026)
En transmisiones onerosas de inmuebles, la tarifa general balear es progresiva por tramos sobre la base imponible (habitualmente el valor de referencia si es superior al declarado): de 0 a 400.000 € tributa al 8 %; el tramo de 400.000,01 € a 600.000 € al 9 % (con cuota previa de 32.000 €); el tramo de 600.000,01 € a 1.000.000 € al 10 % (cuota previa 50.000 €); el tramo de 1.000.000,01 € a 2.000.000 € al 12 % (cuota previa 90.000 €); y a partir de 2.000.000,01 € el tipo marginal es el 13 % (cuota previa 210.000 €). Esta progresividad explica por qué una propiedad de 1,2 millones no tributa al 12 % sobre el total: los primeros tramos conservan tipos inferiores. Ejemplo guiado del propio manual: compra de vivienda usada en Palma por un precio de 540.000 €, con un valor de referencia de 575.000 €. La base es 575.000 € por ser superior; el cálculo es 400.000 € al 8 % = 32.000 €, más 175.000 € al 9 % = 15.750 €, dando una cuota TPO de 47.750 €, importe que no incluye notaría, registro, gestoría ni otros costes de operación. No debe asumirse que cualquier plaza de garaje sigue la tarifa de la vivienda: las plazas anexas transmitidas con la vivienda, hasta dos, suelen seguir el régimen de vivienda, pero una plaza independiente puede tener reglas específicas y requiere revisar la configuración de la escritura y la liquidación en ATIB.

## Tipos reducidos y bonificaciones de vivienda habitual
La normativa balear contempla tipos reducidos y bonificaciones para adquisiciones de vivienda habitual que cumplan requisitos personales, de residencia, titularidad previa, precio y financiación. Desde el 1 de marzo de 2026 cambió el tratamiento cuando el precio supera 270.151,20 €: la reducción puede aplicarse al primer tramo y el exceso tributa al tipo general correspondiente. Los supuestos son: primera vivienda habitual con requisitos generales (4 % hasta 270.151,20 €); menor de 36 años, discapacidad o ciertos hogares familiares (2 % hasta 270.151,20 €, exceso al 8 %); menor de 30 años o discapacidad ≥33 % (bonificación del 100 % hasta 270.151,20 €, exceso al 8 % desde el 1 de marzo de 2026, exigiendo 3 años de residencia balear, ingresos, primera vivienda e hipoteca ≥60 % de la tasación); y vivienda de precio limitado (HPL), con bonificación autonómica del 50 %, sujeta a calificación HPL y documentación aplicable. Ejemplo oficial del manual: un comprador menor de 30 años que cumpla todos los requisitos compra su primera vivienda habitual por 300.000 €; la bonificación del 100 % se aplica hasta 270.151,20 € y el exceso de 29.848,80 € tributa al 8 %, dando una cuota de 2.387,90 €. El propio texto advierte de no extrapolar el ejemplo: si falta un requisito, el beneficio puede desaparecer. Antes de las arras debe pedirse: certificado de empadronamiento/residencia cuando proceda, declaración de titularidad de otras viviendas, edad/discapacidad/familia, última renta si exige límite, y documentación de la financiación, guardando copia en el expediente.

## AJD en Illes Balears
La cuota gradual de documentos notariales de AJD aparece cuando se formaliza una primera copia de escritura o acta notarial con contenido evaluable económicamente, inscribible en un registro público y no sujeta a TPO ni a Operaciones Societarias. En la práctica: compra de vivienda nueva sujeta a IVA, declaración de obra nueva, división horizontal o determinadas novaciones y garantías. Los tipos de referencia balear son: regla general de documentos notariales, 1,5 %; primera vivienda habitual, primera adquisición, hasta 270.151,20 € y con requisitos, 1,2 % (debe acreditarse el cumplimiento); inmueble de valor igual o superior a 1.000.000 €, 2 % (transmisión onerosa o derecho real no garantía); y renuncia a exención de IVA del artículo 20.2 de la Ley del IVA, 2,5 % (habitual en locales/activos con derecho a deducción). Desde la reforma estatal, en las escrituras de préstamo con garantía hipotecaria el sujeto pasivo de AJD es el prestamista, por lo que el comprador no debe incluir el AJD hipotecario como gasto propio, aunque pueda asumir otros costes contractuales legítimos. Ejemplo del manual: vivienda nueva en Palma por 305.000 €, destinada a primera vivienda habitual y con requisitos para tipo reducido; IVA 30.500 € (10 %); AJD: 1,2 % sobre 270.151,20 € = 3.241,81 €, más 1,5 % sobre 34.848,80 € = 522,73 €, dando un AJD total de 3.764,54 € y un coste fiscal de compra de 34.264,54 €, sin gastos accesorios.

## Liquidación: modelos, plazos y expediente de cierre
En Illes Balears, las autoliquidaciones de ITPAJD se canalizan, con carácter general, a través de la ATIB, mediante el Modelo 600. El plazo ordinario para autoliquidación, pago y presentación es de un mes desde la fecha del acto o contrato: una escritura firmada el 10 de abril no debe quedarse "en la gestoría" hasta junio. La documentación habitual incluye escritura o documento privado con identificación de finca y precio, referencia catastral y, cuando exista, certificado de valor de referencia, NIF/NIE de adquirente y transmitente (y representación si la hay), y justificantes de requisitos para tipos reducidos, bonificaciones o exenciones. Declarar por debajo del valor fiscal relevante no es "ahorrar impuestos": puede producir liquidación complementaria, intereses y, si hay conducta culpable, sanción.`,
      easyExplanation: `El ITPAJD es el impuesto que paga el comprador de una casa usada en Baleares (llamado TPO), y también hay una parte que se paga por la escritura notarial (AJD) cuando la compra es de vivienda nueva con IVA. En Baleares hay tramos: cuanto más caro es el piso, mayor porcentaje se paga por el tramo que excede cada umbral. Si eres joven o compras tu primera vivienda habitual, puedes pagar mucho menos o incluso nada hasta cierto precio, pero hay que demostrar con papeles que cumples los requisitos, y todo debe pagarse en el plazo de un mes desde la firma.`,
      balearExample: `Una pareja de 27 y 28 años compra su primera vivienda habitual en Manacor por 250.000 €, cumpliendo todos los requisitos (residencia balear, ingresos, hipoteca ≥60 %). Al estar bajo el umbral de 270.151,20 €, aplican la bonificación del 100 % y no pagan TPO, solo los gastos de notaría y registro; el agente les advierte que deben conservar los tres años de residencia balear exigidos, porque perder ese requisito puede generar una liquidación complementaria con intereses.`,
      keyConcepts: [
        "ITPAJD",
        "TPO",
        "AJD",
        "Operaciones Societarias",
        "tarifa progresiva",
        "bonificación vivienda habitual",
        "Modelo 600",
        "cuota gradual",
      ],
      frequentErrors: [
        "Aplicar el tipo general de TPO sobre el total del precio en vez de aplicar la escala progresiva por tramos.",
        "Suponer que toda vivienda \"nueva\" lleva IVA y toda vivienda \"usada\" lleva TPO sin comprobar quién transmite.",
        "Presentar el Modelo 600 fuera del plazo de un mes desde el acto o contrato.",
        "Cargar el AJD de la hipoteca al comprador cuando el sujeto pasivo legal es la entidad prestamista.",
        "Prometer un tipo reducido de vivienda habitual sin verificar antes edad, residencia, ingresos y financiación.",
      ],
      examples: [
        {
          id: "m02-l2-ex1",
          title: "Compra usada con tarifa progresiva",
          scenario: "Vivienda en Palma, base 575.000 €.",
          application: "Cuota TPO de 47.750 € aplicando tramos del 8 % y 9 %.",
          isBalearContext: true,
        },
        {
          id: "m02-l2-ex2",
          title: "Vivienda nueva con AJD reducido",
          scenario: "Compra de vivienda nueva en Palma por 305.000 € con requisitos de vivienda habitual.",
          application: "IVA de 30.500 € más AJD de 3.764,54 €, coste fiscal total 34.264,54 €.",
          isBalearContext: true,
        },
        {
          id: "m02-l2-ex3",
          title: "AJD de la hipoteca",
          scenario: "Escritura de préstamo hipotecario asociada a la compra.",
          application: "El sujeto pasivo del AJD es el banco prestamista, no el comprador.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l3",
      moduleId: "m02",
      title: "IVA y fiscalidad de la adquisición: primera entrega, arrendamientos e ISD",
      order: 3,
      summary:
        "El IVA grava las entregas realizadas por empresarios o profesionales y distingue primera entrega (sujeta y no exenta) de segundas entregas (normalmente exentas), mientras que el ISD grava las adquisiciones gratuitas por herencia o donación.",
      content: `El IVA recae sobre entregas realizadas por empresarios o profesionales. En inmuebles, la distinción estructural es entre primera entrega y segunda o ulterior entrega. La primera entrega de edificaciones por el promotor, una vez terminada la construcción o rehabilitación, suele estar sujeta y no exenta; las segundas y ulteriores entregas suelen estar exentas de IVA, salvo renuncia cuando se cumplan los requisitos. Los casos típicos son: promotor vende vivienda nueva terminada (sujeta y no exenta, IVA 10 % + AJD); promotor vende VPO especial o de promoción pública (sujeta y no exenta, IVA 4 % + AJD si procede); particular vende vivienda usada (no sujeta a IVA, tributa por TPO); empresario vende local usado exento sin renuncia (exenta de IVA, tributa por TPO con tipo balear especial posible); y local usado con renuncia a exención válida (IVA por inversión del sujeto pasivo + AJD del 2,5 % en Baleares). En vivienda, el IVA general es del 10 %, incluidos hasta dos garajes y anexos situados en el mismo edificio que se transmitan conjuntamente. Los solares, locales, plazas independientes y activos destinados a actividad suelen usar el tipo general del 21 %, salvo regla especial. Antes de calificar una vivienda como "nueva", el agente debe pedir licencia, final de obra, declaración de obra nueva, documentación de entrega y situación de ocupación, porque una vivienda "nueva" de anuncio puede ser jurídicamente una segunda entrega si ya fue utilizada de forma continuada durante dos años por persona distinta del adquirente.

## IVA en arrendamientos y uso turístico
El arrendamiento de vivienda para uso exclusivo de vivienda está exento de IVA, incluyendo mobiliario, garaje y trastero cuando se ceden conjuntamente como accesorios. En cambio, el arrendamiento de local, oficina, nave, plaza de garaje separada, despacho o vivienda utilizada para actividad profesional está sujeto y no exento, normalmente al 21 %. La vivienda arrendada a una empresa para empleado identificado está exenta si el usuario final concreto consta en el contrato; la vivienda arrendada a una agencia para subarrendar tributa al 21 % porque la agencia no es usuaria final de la vivienda; y el alojamiento turístico con servicios hoteleros tributa al 10 % porque puede constituir actividad empresarial. Que un alquiler esté exento de IVA por no prestar servicios hoteleros no significa que la explotación sea turística legal: debe verificarse la habilitación y el régimen de comercialización turístico por separado, ya que la fiscalidad no sustituye la normativa turística.

## Herencias y donaciones: el ISD
El Impuesto sobre Sucesiones y Donaciones grava adquisiciones gratuitas realizadas por personas físicas: herencias, legados, pactos sucesorios, donaciones y determinados seguros de vida. Para inmuebles ubicados en Illes Balears, la normativa balear es especialmente relevante aunque heredero o donatario resida fuera. En una transmisión gratuita de suelo urbano también puede existir IIVTNU municipal. En herencias, el plazo ordinario estatal es de seis meses desde el fallecimiento, con posibilidad de solicitar prórroga dentro de los cinco primeros meses; en donaciones, el plazo es mucho más breve, por lo que el profesional debe coordinar la escritura y la liquidación sin demora. El orden de trabajo en una herencia es: identificar causante, residencia habitual y títulos de los bienes; obtener certificados de defunción, últimas voluntades, testamento o declaración de herederos; valorar inmuebles, consultar valor de referencia y revisar cargas; determinar adjudicaciones y excesos de adjudicación; y liquidar ISD e IIVTNU, y después inscribir en Registro.

Las Illes Balears han configurado un régimen propio de reducciones y bonificaciones en ISD para vivienda habitual del causante y herederos de grupos cercanos, y la práctica profesional debe comprobar la versión vigente de la ATIB en la fecha de devengo, porque los beneficios pueden modificarse por ley presupuestaria o medidas fiscales. Existe reducción específica con límites y obligación de mantenimiento para la vivienda habitual del causante; bonificaciones autonómicas relevantes según requisitos para herederos de grupos cercanos; la pareja estable balear puede equipararse al cónyuge si cumple requisitos e inscripción; y el aplazamiento puede alcanzar 5 años para vivienda habitual del causante en casos previstos. La reducción por vivienda habitual exige analizar quién hereda, la convivencia cuando sea exigible, el valor y la obligación de mantenimiento: una venta temprana puede originar pérdida del beneficio y liquidación complementaria. La donación puede ser eficiente en ciertos supuestos, pero suele generar dos planos: ISD en el donatario y ganancia patrimonial en IRPF para el donante si el valor de transmisión supera su valor de adquisición, añadiendo IIVTNU si hay terreno urbano.`,
      easyExplanation: `El IVA solo lo cobra quien vende como empresario (por ejemplo, el promotor de un edificio nuevo); si te vende un particular, no hay IVA y pagas TPO en su lugar. Alquilar una vivienda para vivir es gratis de IVA, pero alquilar un local o alquilar para turismo con servicios de hotel sí lleva IVA. Cuando alguien hereda o recibe una donación de una casa, paga el ISD (impuesto de sucesiones y donaciones), que en Baleares tiene rebajas importantes si es la vivienda habitual del fallecido y el heredero es familia cercana, pero hay que guardar todos los papeles y no vender demasiado pronto.`,
      balearExample: `Una promotora en Alcúdia entrega un apartamento recién construido a su primer comprador: la operación lleva IVA al 10 % más AJD. Dos años después ese mismo comprador lo revende a un particular: esa segunda venta ya no lleva IVA, sino TPO balear. En paralelo, una familia de Inca hereda la vivienda habitual de su padre fallecido en Palma; como son hijos (grupo cercano) y la vivienda era su residencia habitual, aplican la reducción balear en el ISD, pero deben mantener la titularidad el tiempo exigido para no perder el beneficio.`,
      keyConcepts: [
        "primera entrega",
        "segunda entrega",
        "exención IVA",
        "renuncia a exención",
        "ISD",
        "plazo de seis meses",
        "reducción vivienda habitual",
        "pacto sucesorio",
      ],
      frequentErrors: [
        "Calificar una vivienda como \"nueva\" sin comprobar licencia, final de obra y uso continuado previo.",
        "Cobrar IVA en el alquiler de vivienda de uso exclusivo residencial, que está exento.",
        "Confundir \"turístico = siempre IVA al 10 %\" cuando solo aplica si hay servicios hoteleros reales.",
        "Anunciar una \"donación exenta\" o \"herencia sin impuestos\" sin validar el grupo de parentesco y los requisitos documentales.",
        "Olvidar que la donación también genera ganancia patrimonial en IRPF para el donante, además del ISD del donatario.",
      ],
      examples: [
        {
          id: "m02-l3-ex1",
          title: "Primera vs. segunda entrega",
          scenario: "Promotor vende vivienda nueva terminada en Palma.",
          application: "IVA 10 % + AJD, frente a TPO si la revende después un particular.",
          isBalearContext: true,
        },
        {
          id: "m02-l3-ex2",
          title: "IVA en alquiler turístico",
          scenario: "Apartamento turístico con servicios hoteleros (limpieza periódica, cambio de ropa de cama).",
          application: "Tributa como actividad económica con IVA al 10 %.",
          isBalearContext: false,
        },
        {
          id: "m02-l3-ex3",
          title: "Herencia de vivienda habitual en Illes Balears",
          scenario: "Hijos heredan la vivienda habitual del padre fallecido en Palma.",
          application: "Aplican reducción balear en ISD sujeta a mantenimiento de la titularidad.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l4",
      moduleId: "m02",
      title: "IRPF, IRNR y tenencia de inmuebles",
      order: 4,
      summary:
        "Según el destino del inmueble (vivienda propia, arrendada, vacía o transmitida) cambia radicalmente su tratamiento en IRPF, y cuando el propietario es no residente entra en juego el IRNR con el Modelo 210 y la retención del 3 %.",
      content: `Para una persona física residente en España, el alquiler ordinario es normalmente rendimiento del capital inmobiliario. Solo se califica como actividad económica cuando existe, como mínimo, una persona empleada con contrato laboral y a jornada completa para la ordenación de la actividad; tener varias viviendas o contratar una agencia no convierte por sí solo el alquiler en actividad económica. Los ingresos íntegros incluyen no solo la renta mensual, sino también importes repercutidos al inquilino por gastos, indemnizaciones, derechos de traspaso si proceden, intereses por retraso y cualquier contraprestación vinculada al arrendamiento; el IVA, cuando se repercute, no se integra como ingreso a efectos de IRPF. La prueba y trazabilidad recomendada incluye contrato, fianza y anexos e inventario, cobros bancarios identificables mes a mes, facturas y recibos de gastos a nombre del propietario, certificado catastral y desglose suelo/construcción para amortización, y evidencia de días arrendados y días a disposición.

## Gastos deducibles y amortización
El rendimiento neto del alquiler se obtiene restando de los ingresos los gastos necesarios para obtenerlos. Los gastos de mejora no se deducen íntegramente como reparación: suelen aumentar el valor de adquisición y se recuperan vía amortización o al calcular la ganancia futura. Son deducibles, con matices: intereses y gastos de financiación (con límites, sin confundir capital amortizado con intereses); IBI, tasas, comunidad y seguros si los paga el arrendador (conservando recibos); reparación y conservación (no si es mejora o ampliación); agencia y defensa jurídica (con factura y vínculo con el alquiler); suministros pagados por el propietario (deducibles en proporción, acreditando uso arrendado); y amortización de construcción y bienes (deducible con reglas y límites, separando el suelo, que no se amortiza). La amortización del inmueble se calcula, en general, aplicando el 3 % sobre el mayor entre coste de adquisición satisfecho de la construcción y valor catastral de la construcción, sin incluir el suelo; los bienes muebles amortizables siguen sus propias reglas. La amortización deducida también reduce el valor de adquisición a efectos de la futura ganancia patrimonial: no es un "regalo", adelanta ahorro fiscal. Caso breve del manual: renta anual de 15.600 €, gastos deducibles documentados de 11.400 € (incluidos 5.100 € de amortización), rendimiento neto de 4.200 €, sobre el que puede aplicarse, si procede, la reducción por alquiler de vivienda.

## Reducción por alquiler de vivienda
La reducción solo se aplica a rendimientos netos positivos derivados de inmuebles destinados a vivienda; no se extiende automáticamente a alquiler turístico, temporada real, local, garaje independiente o vivienda usada como despacho. Además, exige que el rendimiento se haya calculado y declarado correctamente antes del inicio de un procedimiento de comprobación que incluya esas rentas. Los porcentajes son: contrato anterior al 26-5-2023, reducción del 60 % (régimen transitorio general); desde el 26-5-2023, régimen general del 50 %; desde el 26-5-2023 con rehabilitación finalizada en los 2 años anteriores, 60 %; desde el 26-5-2023 en supuestos tasados (primer alquiler joven en zona tensionada o alquiler social), 70 %; y desde el 26-5-2023 en zona tensionada con reducción de renta superior al 5 % respecto al contrato anterior, 90 %. En Mallorca, aplicar los porcentajes vinculados a zona tensionada requiere que exista una declaración válida de zona de mercado residencial tensionado y que se cumplan todos los requisitos estatales; la presión de precios no convierte por sí sola un municipio en zona tensionada a efectos fiscales, por lo que debe verificarse siempre la resolución oficial vigente. La reducción no se aplica sobre ingresos brutos: se aplica sobre el rendimiento neto positivo después de gastos deducibles.

## Inmuebles vacíos y uso mixto: imputación de rentas
Los inmuebles urbanos que no constituyen vivienda habitual, no están afectos a actividad económica y no generan rendimientos de alquiler pueden originar imputación de renta inmobiliaria en IRPF: una renta ficticia basada en valor catastral y días de disponibilidad, frecuente en segunda residencia de costa, vivienda reservada para familiares o piso vacío entre contratos. La regla general aplica el 2 % sobre el valor catastral del IBI; si el valor catastral fue revisado en los términos legales o no existe, se aplica el 1,1 % sobre valor catastral o regla sustitutiva; y en uso parcial del año se prorratea según los días a disposición del titular. Para el ejercicio 2025, la AEAT mantiene el 1,1 % para valores catastrales revisados, modificados o determinados mediante valoración colectiva general con entrada en vigor desde el 1 de enero de 2012; para ejercicios posteriores debe comprobarse si hay prórroga o vuelta a la regla general de diez años, materia que puede cambiar por norma anual. Ejemplo del manual: segunda residencia con valor catastral de 180.000 €, a disposición durante todo el año; si aplica el 2 %, la renta imputada es 3.600 €, que se integra en la base general del IRPF (no es un pago del 2 %); si aplicara el 1,1 %, sería 1.980 €. En un inmueble alquilado once meses y vacío un mes, no se imputa el año entero: se distingue el rendimiento del alquiler por días y la imputación por el periodo de disponibilidad.

## Alquiler turístico y actividad económica
El alquiler turístico puede producir rendimiento del capital inmobiliario o rendimiento de actividad económica en IRPF, según la ordenación de medios de producción y recursos humanos. La prestación de servicios propios de la industria hotelera —por ejemplo, recepción permanente, limpieza periódica durante la estancia, cambio regular de ropa de cama o restauración— apunta a actividad económica y puede alterar también el IVA. En Illes Balears, la autorización turística, la comercialización y el régimen de estancias deben revisarse antes de tratar la fiscalidad, y se añade el Impuesto sobre Estancias Turísticas cuando proceda, que lo soporta la persona que se aloja, pero el titular o explotador puede asumir obligaciones de repercusión, declaración y pago. Un propietario que anuncia "alquiler de temporada" durante todo el año para la misma persona, sin causa temporal demostrable, puede tener un problema de calificación arrendaticia y fiscal.

## Propietarios no residentes: IRNR
Una persona no residente fiscal en España que posee un inmueble en Mallorca puede tener obligaciones por renta imputada, alquileres y ganancias de venta. El Convenio de Doble Imposición puede modular la tributación, pero los inmuebles situados en España normalmente pueden gravarse en España; no debe confundirse nacionalidad con residencia fiscal, ya que un español puede ser no residente y un extranjero puede ser residente fiscal español. Los tipos generales orientativos son: inmueble urbano a disposición, Modelo 210 y renta imputada, 19 % para residentes de la UE/EEE y 24 % para el resto; alquiler, Modelo 210 con renta y gastos según residencia, mismos tipos; venta, Modelo 210-H y ganancia, 19 % generalmente; y comprador que adquiere a un no residente, Modelo 211 con retención del 3 % como pago a cuenta. Los residentes de la UE, Islandia, Noruega y Liechtenstein pueden deducir determinados gastos directamente vinculados con los rendimientos inmobiliarios si los acreditan; para el resto de contribuyentes, la base suele ser el ingreso bruto, sin deducción de gastos. El protocolo de captación internacional recomendado es: solicitar NIE, dirección fiscal, país de residencia y certificado fiscal cuando proceda; preguntar si el inmueble se usa, se alquila o permanece vacío; añadir cláusula de retención del 3 % si el vendedor es no residente; y coordinar el cierre con un asesor que domine IRNR y Convenios.

## Venta por no residente: retención del 3 %
Cuando el vendedor es no residente fiscal en España, el comprador —sea o no residente— debe retener e ingresar el 3 % de la contraprestación acordada. La retención se ingresa mediante el Modelo 211 en el plazo de un mes desde la transmisión. Es un pago a cuenta: el vendedor no residente declarará la ganancia en Modelo 210 y podrá compensar la retención o pedir devolución si esta supera la cuota final. Ejemplo del manual: venta de 650.000 € por propietario no residente; el comprador retiene 19.500 € y paga 630.500 € al vendedor, sin perjuicio de otras retenciones o cancelaciones; si el comprador no retiene, puede responder ante Hacienda por el importe que debió ingresar. Un NIE no demuestra residencia ni no residencia fiscal: debe pedirse certificado de residencia fiscal del país correspondiente cuando la calificación sea relevante, coordinando con notaría, y en operaciones de alto valor no debe trabajarse con una mera manifestación verbal.`,
      easyExplanation: `Si alquilas una vivienda normal, Hacienda te cobra IRPF sobre lo que ganas de verdad (alquiler menos gastos), y si el contrato es reciente puedes descontarte hasta la mitad o más de ese beneficio antes de tributar, siempre que sea vivienda y no un local o un piso turístico. Si tienes una casa vacía que no es tu vivienda habitual, Hacienda "inventa" una renta pequeña (normalmente el 2 % del valor catastral) y te cobra impuestos por ella aunque no ganes nada. Si el dueño vive fuera de España, cuando vende su casa el comprador tiene que quedarse el 3 % del precio y dárselo a Hacienda como anticipo del impuesto del vendedor.`,
      balearExample: `Un matrimonio alemán no residente vende su villa en Port d'Andratx por 900.000 € a un comprador español. El comprador retiene el 3 % (27.000 €) mediante el Modelo 211 y paga 873.000 € a los vendedores; estos, en un plazo de tres meses tras el primer mes, presentan el Modelo 210 para declarar la ganancia patrimonial y compensar la retención practicada. En Sant Llorenç des Cardassar, una propietaria residente alquila su vivienda habitual desde 2025 por contrato posterior al 26-5-2023 no situado en zona tensionada; su reducción general es del 50 % sobre el rendimiento neto positivo, no sobre los ingresos brutos.`,
      keyConcepts: [
        "rendimiento del capital inmobiliario",
        "actividad económica",
        "amortización 3 %",
        "reducción por alquiler",
        "imputación de rentas",
        "IRNR",
        "Modelo 210",
        "Modelo 211",
        "retención 3 %",
      ],
      frequentErrors: [
        "Aplicar la reducción por alquiler de vivienda a un alquiler turístico, de temporada o de local.",
        "Calcular la amortización incluyendo el valor del suelo, que no es amortizable.",
        "Olvidar imputar renta en un inmueble vacío que no es vivienda habitual ni está alquilado.",
        "No retener el 3 % al comprar a un vendedor no residente, o creer que el NIE demuestra residencia fiscal.",
        "Aplicar automáticamente los porcentajes de zona tensionada sin verificar que existe declaración oficial vigente para ese municipio.",
      ],
      examples: [
        {
          id: "m02-l4-ex1",
          title: "Cálculo de rendimiento neto del alquiler",
          scenario: "Renta anual de 15.600 € con 11.400 € de gastos deducibles (incluida amortización de 5.100 €).",
          application: "Rendimiento neto de 4.200 €, sobre el que se aplica la reducción si procede.",
          isBalearContext: false,
        },
        {
          id: "m02-l4-ex2",
          title: "Imputación de renta en segunda residencia",
          scenario: "Casa de costa con valor catastral de 180.000 € a disposición todo el año.",
          application: "Renta imputada de 3.600 € (2 %) integrada en la base general del IRPF.",
          isBalearContext: true,
        },
        {
          id: "m02-l4-ex3",
          title: "Retención a vendedor no residente",
          scenario: "Venta de 650.000 € por propietario residente en el extranjero.",
          application: "El comprador retiene 19.500 € (3 %) mediante Modelo 211 y paga 630.500 € al vendedor.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l5",
      moduleId: "m02",
      title: "Tributos locales y patrimonio: IBI, IIVTNU, ICIO y Patrimonio",
      order: 5,
      summary:
        "El IBI grava la tenencia anual, la plusvalía municipal (IIVTNU) grava el incremento de valor del suelo urbano al transmitirse, el ICIO y las tasas gravan obras y trámites, y el Impuesto sobre el Patrimonio afecta a titulares de inmuebles de alto valor.",
      content: `El Impuesto sobre Bienes Inmuebles (IBI) es un tributo municipal periódico que grava la titularidad de derechos sobre inmuebles. El devengo se produce el 1 de enero de cada año; el sujeto pasivo es, en ese momento, quien sea titular del derecho correspondiente. En una compraventa de marzo, el vendedor suele aparecer como sujeto pasivo frente al ayuntamiento, aunque comprador y vendedor pueden pactar repercusión proporcional entre ellos. La base es el valor catastral (no el precio de mercado), la cuota resulta de aplicar el tipo municipal más recargos o bonificaciones, y la gestión corresponde al ayuntamiento o a la ATIB si tiene delegada la recaudación. Antes de captar un inmueble, debe solicitarse el último recibo de IBI, consultar deudas y comprobar la referencia catastral; antes de la escritura, debe pactarse con claridad el reparto del ejercicio en curso, sin dejar la frase "IBI a cargo del comprador" sin especificar fecha, cuantía estimada y forma de compensación, porque puede causar conflicto al liquidar el precio. Los tipos, bonificaciones y calendarios dependen del municipio: debe consultarse siempre la ordenanza y el calendario fiscal del ayuntamiento competente o de la ATIB para cada operación concreta.

## Plusvalía municipal (IIVTNU)
El Impuesto sobre el Incremento de Valor de los Terrenos de Naturaleza Urbana se devenga al transmitir la propiedad de un terreno urbano o constituir/transmitir determinados derechos reales. En venta onerosa, el sujeto pasivo es normalmente el vendedor; en donación, el donatario; en herencia, el heredero o legatario. No hay un sujeto pasivo único universal: debe verificarse la modalidad. Existen dos métodos de cálculo: el método objetivo (valor catastral del suelo municipal por coeficiente municipal por tipo municipal, método ordinario) y el método real (incremento real de valor del terreno en la transmisión, que puede elegirse si resulta menor); además existe el supuesto de no sujeción cuando no existe incremento de valor, que debe acreditarse. Los coeficientes máximos estatales para 2026 se actualizan, pero cada ayuntamiento fija sus propios coeficientes dentro de esos límites y su tipo, con un máximo legal del 30 %. Por eso en este módulo se enseña el método, no una cuota universal de Palma. Ejemplo didáctico del manual: valor catastral del suelo de 60.000 €, periodo de generación de 10 años; si la ordenanza aplica un coeficiente de 0,16 y un tipo del 30 %, la base es 9.600 € (60.000 × 0,16) y la cuota es 2.880 € (9.600 × 30 %); antes de cerrar, debe compararse con el incremento real y revisarse si existe pérdida, porque no puede someterse a tributación una inexistencia de incremento. En transmisiones inter vivos, la declaración o autoliquidación suele presentarse dentro de 30 días hábiles; en adquisiciones mortis causa, el plazo suele ser de 6 meses prorrogables, debiendo confirmarse el régimen local concreto.

## ICIO, IAE, tasas y otros costes locales
Las obras pueden activar el Impuesto sobre Construcciones, Instalaciones y Obras (ICIO), tasas por licencia o declaración responsable, y gestión de residuos. El ICIO se devenga al iniciar la construcción, instalación u obra que requiera licencia, declaración responsable o comunicación previa; cada ayuntamiento concreta tipo y gestión dentro del marco legal. Otros conceptos a revisar: tasa urbanística (tramitación administrativa, coste de expediente), tasa de residuos (tenencia/uso del inmueble, coste recurrente municipal), IAE (actividad empresarial o profesional, relevante para locales, sociedades y grandes operadores) y canon/tasa autonómica (usos especiales o servicios, a revisar en suelo rústico/turístico). En la captación de una finca con reforma pendiente, no debe estimarse solo el coste de obra: hay que preguntar por licencia, ICIO, arquitecto, cédula/habitabilidad, tasa de residuos y posible impacto de impuestos indirectos, porque un comprador de inversión necesita conocer la "inversión total" y no solo el precio del inmueble. Las obras de renovación y reparación en vivienda pueden aplicar IVA reducido del 10 % si se cumplen requisitos de antigüedad, destinatario, uso y composición de materiales; las obras para vivienda destinada al alquiler por el propietario pueden tener IVA del 21 % según el supuesto, por lo que no debe presupuestarse un tipo reducido sin validar el caso.

## Patrimonio y solidaridad: inmuebles de alto valor
El Impuesto sobre el Patrimonio grava el patrimonio neto de las personas físicas a 31 de diciembre. En Illes Balears existe un mínimo exento autonómico de 3.000.000 € desde 2024, según información de ATIB, sin perjuicio de reglas específicas y de la obligación de presentar declaración en determinados casos. El valor del inmueble se toma como el mayor entre valor catastral, valor comprobado o precio/valor de adquisición, con matices; las deudas hipotecarias pueden minorar patrimonio si cumplen requisitos; la vivienda habitual puede contar con exención hasta el límite estatal aplicable; los no residentes tributan por bienes y derechos situados en España; y el Impuesto Temporal de Solidaridad puede afectar patrimonios elevados, siendo necesario revisar su coexistencia y deducciones. El agente no calcula Patrimonio en una visita de captación, pero debe detectar si el cliente plantea compras de elevado volumen, titularidad compartida, estructuras societarias o cambio de residencia: es un asunto para coordinar con asesor antes de decidir si comprar como persona física, sociedad o vehículo de inversión. Decir "en Baleares no se paga Patrimonio hasta 3 millones" es incompleto: el resultado depende de base, exenciones, residencia, bienes y posible Impuesto de Solidaridad; esa cifra debe usarse solo como punto de partida para derivación a asesor fiscal.`,
      easyExplanation: `El IBI es el "recibo anual" de la vivienda, que paga quien es propietario el 1 de enero, aunque venda la casa después; por eso al vender en marzo hay que acordar quién paga qué parte. Cuando se vende una casa con terreno, el ayuntamiento cobra otro impuesto distinto llamado plusvalía municipal, que depende de cuántos años ha tenido la casa el vendedor y de un coeficiente que pone cada ayuntamiento. Si haces obras, puede haber un impuesto por hacer la obra (ICIO) además de tasas del ayuntamiento. Y si tienes un patrimonio muy grande (más de 3 millones de euros en Baleares), puede aplicarte el Impuesto sobre el Patrimonio.`,
      balearExample: `Un vendedor en Calvià firma la venta de su chalet el 15 de marzo. Como el IBI se devenga el 1 de enero, él sigue siendo el sujeto pasivo frente al ayuntamiento aunque venda en marzo; en la escritura pacta con el comprador una repercusión proporcional del recibo anual para evitar disputas posteriores. Al mismo tiempo, calcula la plusvalía municipal (IIVTNU) usando el valor catastral del suelo y el coeficiente vigente en la ordenanza de Calvià, que puede ser distinto al de Palma.`,
      keyConcepts: [
        "IBI",
        "devengo 1 de enero",
        "sujeto pasivo",
        "IIVTNU",
        "método objetivo",
        "método real",
        "ICIO",
        "IAE",
        "Impuesto sobre el Patrimonio",
        "mínimo exento",
      ],
      frequentErrors: [
        "Asignar el IBI \"por costumbre\" al comprador sin pactar por escrito fecha, cuantía y compensación.",
        "No revisar el IIVTNU en una transmisión, asumiendo que solo importa el precio de venta.",
        "Confundir el coeficiente y tipo de plusvalía de un municipio con el de otro (por ejemplo, aplicar la cuota de Palma en Calvià o Inca).",
        "Decir que \"alquiler turístico = IVA 10 %\" sin comprobar si hay servicios hoteleros reales que activen esa calificación.",
        "Simplificar \"en Baleares no se paga Patrimonio hasta 3 millones\" sin considerar deudas, exenciones y el Impuesto Temporal de Solidaridad.",
      ],
      examples: [
        {
          id: "m02-l5-ex1",
          title: "Reparto del IBI en una venta de marzo",
          scenario: "Venta de vivienda el 15 de marzo en Calvià.",
          application:
            "El vendedor es sujeto pasivo frente al ayuntamiento por ser titular a 1 de enero, pero puede pactar repercusión proporcional con el comprador.",
          isBalearContext: true,
        },
        {
          id: "m02-l5-ex2",
          title: "Cálculo de plusvalía municipal por método objetivo",
          scenario: "Valor catastral del suelo de 60.000 €, 10 años de generación, coeficiente 0,16 y tipo 30 %.",
          application: "Base de 9.600 € y cuota de 2.880 €.",
          isBalearContext: false,
        },
        {
          id: "m02-l5-ex3",
          title: "Coste total de una reforma con licencia",
          scenario: "Reforma integral en vivienda de Manacor.",
          application:
            "Además del coste de obra, hay que presupuestar ICIO, tasa urbanística, tasa de residuos y el IVA aplicable según el tipo de obra.",
          isBalearContext: true,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l6",
      moduleId: "m02",
      title: "Venta, ganancia patrimonial y estructuras de inversión",
      order: 6,
      summary:
        "La venta de un inmueble por un residente genera una ganancia patrimonial en IRPF calculada como diferencia entre valor de transmisión y de adquisición, con posibles exenciones para vivienda habitual, y comprar mediante sociedad solo tiene sentido en escenarios específicos.",
      content: `La transmisión de un inmueble por una persona física residente genera una ganancia o pérdida patrimonial: valor de transmisión menos valor de adquisición. El valor de transmisión se reduce por gastos y tributos satisfechos por el vendedor, por ejemplo honorarios de agencia o plusvalía municipal. El valor de adquisición incluye precio, gastos e impuestos de compra (ITP/IVA/AJD, notaría/registro) y mejoras acreditadas, menos amortizaciones fiscalmente deducibles; no incluye reparaciones corrientes ni el suelo, que no es amortizable. Ejemplo simplificado del manual: adquisición por 320.000 €, gastos e impuestos de compra de 32.000 €, mejora acreditada de 25.000 €, dando un valor de adquisición de 377.000 €; venta por 540.000 € con gastos de venta de 15.000 €, dando un valor de transmisión de 525.000 €; ganancia de 148.000 €, antes de compensaciones, amortizaciones pendientes y exenciones. La base del ahorro tiene tipos totales del 19 %, 21 %, 23 %, 27 % y 30 % por tramos desde 2025; la cuota exacta depende del resto de rentas del ahorro y de las compensaciones, por lo que no debe prometerse al vendedor "pagarás el 23 %", ya que ese es solo uno de los tramos.

## Exenciones y alivios en la venta de vivienda habitual
Existen varios supuestos de exención o alivio: reinversión en nueva vivienda habitual (exención total o proporcional, exige reinvertir en plazo de 2 años, antes o después de la venta); mayor de 65 años que vende vivienda habitual (ganancia exenta, debe ser vivienda habitual); dependencia severa o gran dependencia (exención análoga, con acreditación legal); mayor de 65 años que reinvierte en renta vitalicia (exención con límites, no exige que el bien vendido sea vivienda habitual); y dación o ejecución en supuestos protegidos (posibles exenciones, con requisitos estrictos). En la exención por reinversión, esta puede realizarse de una sola vez o de forma sucesiva y completarse dentro de un periodo no superior a dos años desde fecha a fecha, pudiendo ser anterior o posterior a la venta; si solo se reinvierte parte del importe obtenido, la exención es proporcional, y la hipoteca pendiente y el importe realmente reinvertido requieren cálculo cuidadoso. El checklist para comunicar una posible exención incluye: ¿era vivienda habitual en la fecha de venta o dentro del plazo legal de salida?, ¿hay prueba de residencia (padrón, suministros, domicilio fiscal)?, ¿cuánto importe neto se obtiene y cuánto se reinvierte?, ¿cuándo se compra o rehabilita la nueva vivienda?, ¿hay copropietarios con situaciones distintas? La exención de IRPF no elimina automáticamente la plusvalía municipal ni otros costes de venta: cada impuesto tiene su propia lógica.

## Inversión mediante sociedad
Comprar y explotar inmuebles mediante una sociedad puede tener sentido cuando existe actividad organizada, reinversión, socios, financiación empresarial o estrategia patrimonial compleja. Sin embargo, la sociedad añade Impuesto sobre Sociedades, contabilidad, cuentas anuales, posible tributación de dividendos, mayor rigor mercantil y reglas de operaciones vinculadas. Para una sola vivienda de uso personal, suele ser una mala simplificación: en alquiler de vivienda, la sociedad tributa por Impuesto sobre Sociedades sin la reducción IRPF de alquiler de vivienda; en uso personal del socio, existe riesgo de retribución en especie u operación vinculada; en venta con reinversión, la sociedad no tiene acceso a las exenciones de vivienda habitual de las personas físicas; el coste de gestión es mayor (contabilidad, cuentas, asesoramiento); y la financiación exige préstamo corporativo, garantías y ratios propios de empresa. El agente debe derivar a asesor fiscal cuando el cliente mencione holding, sociedad patrimonial, compra con familiares, alquiler turístico profesional, compra de varios locales o aportación no dineraria de inmueble a sociedad, porque esas decisiones pueden activar ITPAJD, IVA, plusvalías y reglas de neutralidad que exceden la gestión comercial ordinaria. La frase profesional recomendada es: "antes de decidir el titular, comparemos el uso real, número de activos, flujo de caja, horizonte de venta y coste anual de cumplimiento".`,
      easyExplanation: `Cuando vendes una casa y ganas dinero respecto a lo que pagaste (contando gastos e impuestos de compra y mejoras), Hacienda te cobra un porcentaje de esa ganancia que va del 19 % al 30 % según el importe. Si vendes tu vivienda habitual y compras otra en menos de dos años, o si tienes más de 65 años y vendes tu vivienda habitual, puedes no pagar nada de ese impuesto. Comprar una casa a través de una empresa (sociedad) en vez de a tu nombre solo suele compensar si tienes varios inmuebles o un negocio de verdad detrás; para una sola vivienda personal casi siempre complica más de lo que ayuda.`,
      balearExample: `Una jubilada de 68 años vende su vivienda habitual en Felanitx por 400.000 € tras haberla comprado hace 20 años por 150.000 €; al ser mayor de 65 años y tratarse de su vivienda habitual, toda la ganancia patrimonial queda exenta de IRPF, aunque igualmente debe liquidarse la plusvalía municipal del ayuntamiento de Felanitx, que es un impuesto distinto con su propia lógica.`,
      keyConcepts: [
        "ganancia patrimonial",
        "valor de adquisición",
        "valor de transmisión",
        "base del ahorro",
        "exención por reinversión",
        "exención mayor de 65 años",
        "sociedad patrimonial",
        "operación vinculada",
      ],
      frequentErrors: [
        "Prometer un tipo fijo (por ejemplo \"pagarás el 23 %\") sin considerar que la ganancia tributa por tramos progresivos del ahorro.",
        "Olvidar restar del valor de transmisión los gastos y tributos pagados por el vendedor (agencia, plusvalía).",
        "Asumir que la exención de IRPF por venta de vivienda habitual también elimina la plusvalía municipal.",
        "Aplicar la exención por reinversión sin comprobar el plazo de dos años ni si la reinversión fue solo parcial.",
        "Recomendar comprar mediante sociedad para una única vivienda de uso personal sin advertir de la pérdida de exenciones y el mayor coste de cumplimiento.",
      ],
      examples: [
        {
          id: "m02-l6-ex1",
          title: "Cálculo de ganancia patrimonial",
          scenario: "Compra por 320.000 € con gastos y mejoras, venta por 540.000 € con gastos de venta.",
          application: "Ganancia de 148.000 € antes de exenciones y compensaciones.",
          isBalearContext: false,
        },
        {
          id: "m02-l6-ex2",
          title: "Exención por reinversión",
          scenario: "Venta de vivienda habitual con compra de otra en el plazo de dos años.",
          application: "Exención total o proporcional según el importe reinvertido.",
          isBalearContext: false,
        },
        {
          id: "m02-l6-ex3",
          title: "Riesgo de comprar con sociedad",
          scenario: "Cliente plantea comprar una única vivienda de uso propio mediante una sociedad patrimonial.",
          application:
            "Se deriva a asesor fiscal por el riesgo de retribución en especie y la pérdida de exenciones de vivienda habitual.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
    {
      id: "m02-l7",
      moduleId: "m02",
      title: "Fiscalidad del agente, protocolo profesional y errores frecuentes",
      order: 7,
      summary:
        "Los honorarios del agente inmobiliario tributan como una prestación de servicios sujeta a IVA, y el agente debe aplicar un protocolo fiscal documental de la captación a la postventa para detectar contingencias antes de que se conviertan en coste oculto.",
      content: `La intermediación inmobiliaria es una prestación de servicios. Si el agente actúa como profesional o sociedad, sus honorarios están sujetos a IVA al tipo general del 21 %, salvo supuestos muy excepcionales. La factura debe identificar servicio, base, IVA, retención cuando proceda y datos de las partes; la forma de cobro no altera la obligación de facturar ni la tributación de la operación principal. Según el cliente: particular propietario/comprador (base + IVA 21 %, normalmente no retiene); empresa o autónomo (base + IVA 21 %, puede proceder retención profesional); arrendador de vivienda (honorarios a cargo del arrendador conforme a la Ley de Arrendamientos Urbanos, sin confundir con el impuesto del alquiler, normalmente no retiene); y promotor (base + IVA 21 %, revisar contrato marco y retenciones). El agente debe distinguir siempre los fondos de terceros de sus honorarios propios: si recibe una señal o arras en depósito, debe documentar el encargo, la custodia y el destino, sin tratar como ingreso propio un dinero que pertenece a comprador o vendedor; en operaciones sensibles, debe utilizar cuenta de cliente o el mecanismo pactado y conservar justificantes bancarios. Las buenas prácticas de factura incluyen: hoja de encargo firmada con porcentaje o cuantía y momento de devengo; factura al cliente obligado al pago según contrato y ley; separación de honorarios, suplidos reales y gastos refacturados; y archivo de facturas y cobros para IVA e IRPF/IS.

## Protocolo fiscal del agente: de la captación a la postventa
El protocolo convierte el riesgo fiscal en una lista de control con cinco fases: captación (preguntas obligatorias: ¿quién vende?, ¿residente?, ¿inmueble nuevo/usado?, ¿cargas?, ¿uso?; resultado: ficha fiscal inicial); valoración (¿valor de referencia?, ¿valor catastral?, ¿IBI?, ¿suelo urbano?; resultado: estimación de TPO/AJD/IIVTNU); arras (¿qué impuestos paga cada parte?, ¿retención NR?, ¿fecha de firma?; resultado: cláusulas y presupuesto); preescritura (¿beneficio fiscal?, ¿documentos?, ¿liquidación previa?; resultado: checklist notaría/gestoría); y postfirma (¿Modelo 600/211?, ¿IIVTNU?, ¿IBI prorrata?, ¿Registro?; resultado: cierre trazable). Se recomienda incluir una ficha de "alertas fiscales" en cada expediente: residencia fiscal del vendedor, primera/segunda entrega, valor de referencia, condición de vivienda habitual, transmisión gratuita, existencia de suelo urbano, alquiler previo, inversión o rehabilitación, posibles beneficios autonómicos y municipio. Con esa ficha, un asesor externo puede validar sin reconstruir la operación desde cero. No debe publicarse un precio "llave en mano" sin indicar qué costes incluye y qué impuestos dependen de la situación personal del comprador: la transparencia evita reclamaciones y mejora la conversión de clientes serios. Plantilla de mensaje al comprador recomendada por el manual: "Para esta vivienda, el impuesto de adquisición depende de si la entrega tributa por IVA o TPO y de tu situación como adquirente. Hemos estimado el escenario conservador con el valor fiscal disponible. Antes de arras confirmaremos valor de referencia, requisitos de beneficio autonómico y gastos de escritura."

## Errores frecuentes y cómo corregirlos
La mayoría de los errores se detecta con cinco documentos. Los errores típicos y su corrección: calcular TPO sobre el precio sin mirar el valor de referencia (falla porque puede existir una base superior; corrección: consultar certificado antes de arras); cobrar IVA en alquiler de vivienda habitual (falla porque la vivienda exclusiva está exenta; corrección: revisar uso y contrato); olvidar la retención del 3 % a no residente (riesgo del comprador frente a AEAT; corrección: certificado de residencia y modelo 211); prometer tipo reducido sin expediente (el beneficio exige requisitos; corrección: checklist documental previo); confundir reforma con mejora (la deducción IRPF es diferente; corrección: clasificar factura y obra); asignar IBI "por costumbre" (el sujeto pasivo es el titular a 1 de enero; corrección: pacto escrito de prorrata); no revisar IIVTNU (puede existir coste o no sujeción; corrección: comparar método objetivo y real); y decir que "turístico = IVA 10 %" (solo si hay servicios hoteleros; corrección: analizar servicios y licencia). La ventaja profesional del agente no está en memorizar todo el BOE: está en detectar cuándo falta información crítica. Cuando un dato no aparece —residencia fiscal, uso real, fecha de adquisición, valor del suelo, condición de promotor—, no debe suponerse: la operación se marca como pendiente de validación y se solicita el documento que falta. Si el cliente insiste en una cifra de impuesto que "le han dicho", hay que volver al hecho imponible y a los documentos: la fiscalidad inmobiliaria se decide por pruebas, no por expectativas.`,
      easyExplanation: `Cuando un agente cobra su comisión, esa comisión también lleva su propio IVA del 21 %, igual que cualquier otro servicio profesional; y el dinero de la señal o las arras del cliente nunca es "suyo", solo lo custodia. Para no meter la pata, el agente debería usar una lista de comprobación en cada fase de la venta (captar, valorar, arras, antes de escritura y después de escritura) y anotar en una "ficha de alertas" todo lo que pueda cambiar el impuesto: si el vendedor vive fuera de España, si es primera o segunda venta, si hay beneficios por ser joven o primera vivienda, etc. La regla de oro es no inventar datos que faltan, sino pedir el documento que los demuestre.`,
      balearExample: `Un agente en Sa Pobla capta una vivienda usada y, antes de fijar las arras, rellena su ficha de alertas fiscales: comprueba que el vendedor es residente en España, que es segunda entrega (no lleva IVA), que existe un valor de referencia catastral superior al precio pactado, y que el comprador no cumple los requisitos de vivienda habitual joven. Con esos datos, presupuesta el TPO sobre el valor de referencia y evita prometer un tipo reducido que el comprador no puede acreditar.`,
      keyConcepts: [
        "IVA de intermediación 21 %",
        "fondos de terceros",
        "ficha de alertas fiscales",
        "protocolo de captación a postventa",
        "checklist documental",
        "hecho imponible",
        "retención profesional",
      ],
      frequentErrors: [
        "Tratar la señal o las arras recibidas en depósito como ingreso propio del agente en vez de fondos de terceros.",
        "No emitir factura con IVA al 21 % por los honorarios de intermediación, o confundir quién debe pagarla (LAU en arrendamientos).",
        "Publicar un precio \"llave en mano\" sin desglosar qué impuestos dependen de la situación personal del comprador.",
        "Suponer un dato fiscal que falta (residencia, uso real, fecha de adquisición) en vez de solicitar el documento acreditativo.",
        "No aplicar un protocolo documental por fases (captación, valoración, arras, preescritura, postfirma), dejando huecos que generan contingencias.",
      ],
      examples: [
        {
          id: "m02-l7-ex1",
          title: "Factura de honorarios del agente",
          scenario: "Venta intermediada a particular comprador.",
          application: "El agente factura base + IVA al 21 %, normalmente sin retención.",
          isBalearContext: false,
        },
        {
          id: "m02-l7-ex2",
          title: "Ficha de alertas fiscales en captación",
          scenario: "Vivienda usada con vendedor potencialmente no residente.",
          application:
            "Se incluye en la ficha la pregunta de residencia fiscal para activar, si procede, la retención del 3 % en la venta.",
          isBalearContext: false,
        },
        {
          id: "m02-l7-ex3",
          title: "Corrección de un error frecuente",
          scenario: "Un compañero cobra IVA en el alquiler de una vivienda habitual.",
          application: "Se corrige revisando el uso y el contrato, ya que ese alquiler está exento de IVA.",
          isBalearContext: false,
        },
      ],
      completed: false,
    },
  ],
  exercises: [
    {
      id: "m02-e1",
      moduleId: "m02",
      type: "case",
      question: `Marta compra a un particular una vivienda usada en Palma. Precio: 540.000 €. Valor de referencia a la fecha de escritura: 575.000 €. No cumple ningún tipo reducido. ¿Qué impuesto principal paga y sobre qué base?`,
      expectedAnswer: `TPO balear sobre 575.000 € (el valor de referencia, por ser superior al precio), con cuota de 47.750 € (32.000 € + 15.750 €).`,
      explanation: `Al no haber IVA (venta de particular a particular), procede TPO; la base es el mayor entre precio y valor de referencia.`,
      difficulty: "medium",
    },
    {
      id: "m02-e2",
      moduleId: "m02",
      type: "calculation",
      question: `Álvaro adquiere a un promotor una vivienda nueva en Palma por 305.000 €, destinada a primera vivienda habitual, cumpliendo el requisito para AJD reducido (1,2 % hasta 270.151,20 €). Calcula el IVA y el AJD total.`,
      expectedAnswer: `IVA = 30.500 € (10 % de 305.000 €); AJD = 3.241,81 € (1,2 % de 270.151,20 €) + 522,73 € (1,5 % de 34.848,80 €) = 3.764,54 €. No procede TPO porque la operación está sujeta y no exenta de IVA.`,
      explanation: `Al tratarse de primera entrega por promotor, tributa por IVA y AJD, aplicando el tipo reducido de AJD hasta el umbral y el general al exceso.`,
      difficulty: "advanced",
    },
    {
      id: "m02-e3",
      moduleId: "m02",
      type: "comprehension",
      question: `Una sociedad vende un local usado a un autónomo que lo destinará a actividad, con renuncia válida a la exención de IVA. ¿Qué dos impuestos deben analizarse y con qué tipos orientativos?`,
      expectedAnswer: `IVA por inversión del sujeto pasivo (el autónomo autorrepercute el IVA por la renuncia a la exención) y AJD al 2,5 % en Baleares por la renuncia a la exención del art. 20.2 de la Ley del IVA.`,
      explanation: `Es la alternativa a la venta exenta sin renuncia, que tributaría por TPO en su lugar.`,
      difficulty: "advanced",
    },
    {
      id: "m02-e4",
      moduleId: "m02",
      type: "decision",
      question: `Un propietario residente alquila su vivienda habitual desde enero de 2025 por 1.300 € al mes (ingresos 15.600 €). Gastos deducibles acreditados: 11.400 €. La vivienda no está en zona tensionada ni fue rehabilitada en los dos años previos. ¿Cuál es el rendimiento neto reducido?`,
      expectedAnswer: `Rendimiento neto: 15.600 € - 11.400 € = 4.200 €. Reducción general del 50 % (contrato posterior al 26-5-2023, sin supuestos especiales): rendimiento neto reducido = 2.100 €.`,
      explanation: `La reducción se aplica sobre el rendimiento neto positivo, no sobre los ingresos brutos.`,
      difficulty: "medium",
    },
    {
      id: "m02-e5",
      moduleId: "m02",
      type: "case",
      question: `Un residente fiscal en Alemania vende una villa en Mallorca por 650.000 € a un comprador español. ¿Qué debe hacer el comprador?`,
      expectedAnswer: `Retener el 3 % (19.500 €) y pagar 630.500 € al vendedor, salvo otras partidas pactadas; presentar el Modelo 211 e ingresar la retención dentro del mes desde la transmisión; entregar el justificante al vendedor, que presentará el Modelo 210 para declarar la ganancia dentro de los tres meses tras finalizar el primer mes.`,
      explanation: `No basta con que el vendedor sea extranjero para determinar la retención: importa su residencia fiscal, no la nacionalidad ni tener NIE.`,
      difficulty: "advanced",
    },
    {
      id: "m02-e6",
      moduleId: "m02",
      type: "calculation",
      question: `Una persona vende una vivienda urbana tras 10 años de tenencia. El valor catastral del suelo es 60.000 €. La ordenanza municipal aplicable fija un coeficiente de 0,16 y un tipo del 30 %. El incremento real es superior al objetivo. Calcula la cuota de IIVTNU por método objetivo.`,
      expectedAnswer: `Base = 60.000 € × 0,16 = 9.600 €; Cuota = 9.600 € × 30 % = 2.880 €. El vendedor es el sujeto pasivo en la compraventa onerosa.`,
      explanation: `Al ser el incremento real superior al objetivo, conviene el método objetivo (el contribuyente puede elegir el menor).`,
      difficulty: "medium",
    },
    {
      id: "m02-e7",
      moduleId: "m02",
      type: "case",
      question: `Un comprador de 29 años adquiere el 22 de junio de 2026 su primera vivienda habitual en Mallorca por 300.000 € y cumple todos los requisitos de la bonificación autonómica del 100 % (menor de 30 años). ¿Cuál es el TPO?`,
      expectedAnswer: `Bonificación 100 % hasta 270.151,20 €; exceso de 29.848,80 € tributa al 8 % = 2.387,90 €. Debe conservar prueba de residencia balear, primera vivienda, ingresos y financiación exigida.`,
      explanation: `El tipo efectivo puede ser muy distinto del 8 % "general"; si la condición se incumple después, puede nacer la obligación de regularizar.`,
      difficulty: "medium",
    },
    {
      id: "m02-e8",
      moduleId: "m02",
      type: "comprehension",
      question: `Una vivienda queda vacía tres meses entre dos contratos de alquiler, sin ser vivienda habitual del propietario. ¿Qué tratamiento puede tener ese periodo en IRPF?`,
      expectedAnswer: `Imputación de renta inmobiliaria proporcional a los días en que estuvo a disposición del titular (regla general 2 % del valor catastral, o 1,1 % si aplica valor revisado), prorrateada por días.`,
      explanation: `No se imputa el año entero: se distingue el rendimiento del alquiler por días efectivamente arrendados y la imputación por el periodo de disponibilidad.`,
      difficulty: "basic",
    },
  ],
  quizQuestions: [
    {
      id: "m02-q1",
      question: "¿Qué administración gestiona el ITPAJD en Illes Balears?",
      options: ["AEAT", "ATIB", "Ayuntamiento", "Catastro"],
      correctAnswerIndex: 1,
      explanation:
        "La ATIB gestiona ITPAJD, ISD y Patrimonio; la AEAT gestiona IRPF/IRNR/IVA; el ayuntamiento gestiona IBI/IIVTNU/ICIO.",
      sourceModuleId: "m02",
      legalReference: "Reparto de competencias descrito en la Parte I del módulo (fuente ATIB).",
      difficulty: "basic",
    },
    {
      id: "m02-q2",
      question:
        "Antes de fijar arras, ¿qué cifra debe compararse con el precio para evitar sorpresas fiscales en ITPAJD/ISD?",
      options: [
        "La tasación hipotecaria",
        "El valor de referencia catastral",
        "El valor de reposición del seguro",
        "El presupuesto de reforma",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Desde 2022 la base en ITPAJD/ISD es el mayor entre el valor declarado, el precio y el valor de referencia catastral.",
      sourceModuleId: "m02",
      legalReference: "Sede electrónica del Catastro; regla práctica desde 2022 citada en el módulo.",
      difficulty: "medium",
    },
    {
      id: "m02-q3",
      question: "Una vivienda usada vendida por un particular a otro particular, ¿por qué impuesto tributa normalmente?",
      options: ["IVA al 10 %", "TPO", "AJD exclusivamente", "Impuesto sobre Sociedades"],
      correctAnswerIndex: 1,
      explanation:
        "Al no ser el vendedor empresario, la operación no está sujeta a IVA y tributa por Transmisiones Patrimoniales Onerosas.",
      sourceModuleId: "m02",
      legalReference: "ITPAJD, modalidad TPO (fuente ATIB).",
      difficulty: "basic",
    },
    {
      id: "m02-q4",
      question:
        "En la tarifa general balear de TPO 2026, ¿qué tipo marginal se aplica al tramo entre 1.000.000,01 € y 2.000.000 €?",
      options: ["9 %", "10 %", "12 %", "13 %"],
      correctAnswerIndex: 2,
      explanation:
        "La escala progresiva balear aplica 8 %, 9 %, 10 %, 12 % y 13 % por tramos sucesivos.",
      sourceModuleId: "m02",
      legalReference: "ATIB, tarifa TPO/AJD Illes Balears 2026.",
      difficulty: "medium",
    },
    {
      id: "m02-q5",
      question:
        "¿Desde qué fecha cambió el tratamiento del tipo reducido de vivienda habitual cuando el precio supera 270.151,20 €?",
      options: ["1 de enero de 2024", "1 de marzo de 2026", "26 de mayo de 2023", "4 de julio de 2026"],
      correctAnswerIndex: 1,
      explanation:
        "Desde el 1 de marzo de 2026, la reducción puede aplicarse solo al primer tramo, tributando el exceso al tipo general correspondiente.",
      sourceModuleId: "m02",
      legalReference: "ATIB, novedades de beneficios de vivienda desde 1-3-2026.",
      difficulty: "medium",
    },
    {
      id: "m02-q6",
      question:
        "En la escritura de préstamo con garantía hipotecaria, ¿quién es el sujeto pasivo del AJD desde la reforma estatal?",
      options: ["El comprador/prestatario", "El vendedor", "La entidad prestamista", "El notario"],
      correctAnswerIndex: 2,
      explanation:
        "El comprador no debe incluir el AJD hipotecario como gasto propio, ya que el sujeto pasivo legal es el banco.",
      sourceModuleId: "m02",
      legalReference: "Reforma estatal sobre AJD hipotecario, citada en la sección de AJD del módulo.",
      difficulty: "medium",
    },
    {
      id: "m02-q7",
      question: "¿Cuál es el plazo ordinario para autoliquidar y presentar el ITPAJD (Modelo 600) en Illes Balears?",
      options: [
        "15 días naturales",
        "Un mes desde el acto o contrato",
        "Tres meses desde la escritura",
        "Seis meses desde el devengo",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El plazo ordinario de autoliquidación, pago y presentación del Modelo 600 es de un mes desde la fecha del acto o contrato.",
      sourceModuleId: "m02",
      legalReference: "ATIB, plazos ITPAJD.",
      difficulty: "basic",
    },
    {
      id: "m02-q8",
      question: "¿Cuál es el tipo general de IVA aplicable a la primera entrega de una vivienda nueva (no VPO)?",
      options: ["4 %", "10 %", "21 %", "Exenta"],
      correctAnswerIndex: 1,
      explanation:
        "La primera entrega de vivienda por el promotor está sujeta y no exenta de IVA al tipo general del 10 %, más AJD.",
      sourceModuleId: "m02",
      legalReference: "AEAT, IVA en compra de vivienda.",
      difficulty: "basic",
    },
    {
      id: "m02-q9",
      question: "El arrendamiento de una vivienda para uso exclusivo de vivienda habitual, ¿cómo tributa en IVA?",
      options: ["Sujeto al 21 %", "Sujeto al 10 %", "Exento", "Sujeto al 4 %"],
      correctAnswerIndex: 2,
      explanation:
        "El arrendamiento de vivienda para uso exclusivo residencial está exento de IVA, incluyendo mobiliario y garaje/trastero accesorios.",
      sourceModuleId: "m02",
      legalReference: "AEAT, IVA en arrendamientos.",
      difficulty: "basic",
    },
    {
      id: "m02-q10",
      question: "¿Cuál es el plazo ordinario estatal para liquidar el ISD en una herencia, desde el fallecimiento?",
      options: ["Un mes", "Tres meses", "Seis meses", "Un año"],
      correctAnswerIndex: 2,
      explanation:
        "El plazo ordinario es de seis meses desde el fallecimiento, con posibilidad de solicitar prórroga dentro de los cinco primeros meses.",
      sourceModuleId: "m02",
      legalReference: "Impuesto sobre Sucesiones y Donaciones, régimen general (sección 10 del módulo).",
      difficulty: "medium",
    },
    {
      id: "m02-q11",
      question:
        "¿Qué magnitud, como mínimo, exige la ley para calificar el alquiler de inmuebles como actividad económica en IRPF?",
      options: [
        "Tener más de 3 viviendas",
        "Contratar una agencia inmobiliaria",
        "Una persona empleada con contrato laboral y jornada completa para la ordenación de la actividad",
        "Facturar más de 60.000 € al año",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Sin ese requisito mínimo, el alquiler ordinario se califica como rendimiento del capital inmobiliario, no como actividad económica.",
      sourceModuleId: "m02",
      legalReference: "AEAT, rendimientos del capital inmobiliario vs. actividad económica.",
      difficulty: "medium",
    },
    {
      id: "m02-q12",
      question: "¿Sobre qué porcentaje se calcula habitualmente la amortización deducible de un inmueble alquilado?",
      options: [
        "2 % sobre el valor catastral total",
        "3 % sobre el mayor entre coste de adquisición de la construcción y valor catastral de la construcción, sin el suelo",
        "10 % sobre el precio de compra total",
        "1,1 % sobre el valor de mercado",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El suelo no se amortiza; la amortización deducida reduce el valor de adquisición a efectos de la futura ganancia patrimonial.",
      sourceModuleId: "m02",
      legalReference: "AEAT, manual de IRPF - rendimientos del capital inmobiliario.",
      difficulty: "advanced",
    },
    {
      id: "m02-q13",
      question:
        "Un contrato de alquiler de vivienda posterior al 26-5-2023, sin supuestos especiales, ¿qué porcentaje de reducción general aplica sobre el rendimiento neto positivo?",
      options: ["90 %", "70 %", "60 %", "50 %"],
      correctAnswerIndex: 3,
      explanation:
        "El régimen general desde el 26-5-2023 es del 50 %; otros porcentajes (60 %, 70 %, 90 %) requieren supuestos específicos como rehabilitación o zona tensionada.",
      sourceModuleId: "m02",
      legalReference: "AEAT, reducciones rendimiento neto inmobiliario destinado a vivienda.",
      difficulty: "medium",
    },
    {
      id: "m02-q14",
      question: "¿Qué porcentaje debe retener el comprador al adquirir un inmueble a un vendedor no residente fiscal en España?",
      options: ["1 %", "3 %", "19 %", "24 %"],
      correctAnswerIndex: 1,
      explanation:
        "El comprador retiene e ingresa el 3 % de la contraprestación mediante el Modelo 211, como pago a cuenta de la ganancia del vendedor no residente.",
      sourceModuleId: "m02",
      legalReference: "AEAT, venta por no residente y retención (Modelos 211/210).",
      difficulty: "basic",
    },
    {
      id: "m02-q15",
      question: "¿En qué fecha se produce el devengo del IBI y se determina el sujeto pasivo?",
      options: ["31 de diciembre", "1 de enero", "Fecha de la escritura", "Fecha de inscripción registral"],
      correctAnswerIndex: 1,
      explanation:
        "El sujeto pasivo del IBI es quien sea titular del derecho a 1 de enero de cada año, con independencia de una venta posterior en el ejercicio.",
      sourceModuleId: "m02",
      legalReference: "IBI, tributo municipal periódico (sección 19 del módulo).",
      difficulty: "basic",
    },
    {
      id: "m02-q16",
      question:
        "En una venta onerosa de suelo urbano, ¿quién suele ser el sujeto pasivo de la plusvalía municipal (IIVTNU)?",
      options: ["El comprador", "El vendedor/transmitente", "El notario", "El ayuntamiento"],
      correctAnswerIndex: 1,
      explanation:
        "En venta onerosa el sujeto pasivo es normalmente el vendedor; en donación es el donatario y en herencia el heredero o legatario.",
      sourceModuleId: "m02",
      legalReference: "IIVTNU, RDL 16/2025 sobre coeficientes (BOE-A-2025-26458).",
      difficulty: "medium",
    },
    {
      id: "m02-q17",
      question: "¿Cuál es el mínimo exento autonómico del Impuesto sobre el Patrimonio en Illes Balears desde 2024?",
      options: ["700.000 €", "1.000.000 €", "2.000.000 €", "3.000.000 €"],
      correctAnswerIndex: 3,
      explanation:
        "Según información de la ATIB, el mínimo exento autonómico es de 3.000.000 € desde 2024, sin perjuicio de reglas específicas y del Impuesto Temporal de Solidaridad.",
      sourceModuleId: "m02",
      legalReference: "ATIB, Impuesto sobre Patrimonio Balear.",
      difficulty: "medium",
    },
    {
      id: "m02-q18",
      question:
        "¿A qué tipo general de IVA están sujetos los honorarios de intermediación de un agente inmobiliario profesional?",
      options: ["4 %", "10 %", "21 %", "Exento"],
      correctAnswerIndex: 2,
      explanation:
        "La intermediación inmobiliaria es una prestación de servicios sujeta al tipo general del IVA, salvo supuestos muy excepcionales.",
      sourceModuleId: "m02",
      legalReference: "Fiscalidad del agente inmobiliario y sus honorarios (sección 26 del módulo).",
      difficulty: "basic",
    },
  ],
};

export const m02Glossary: GlossaryItem[] = [
  {
    id: "g-m02-valor-de-referencia-catastral",
    term: "Valor de referencia catastral",
    definition:
      "Valor determinado por la Dirección General del Catastro a partir de los precios de compraventa comunicados por notarios y registradores, que actúa como base imponible mínima en ITPAJD e ISD cuando existe y es superior al valor declarado o al precio.",
    easyDefinition:
      "Un precio \"oficial\" que calcula el Catastro y que Hacienda usa como mínimo para cobrar impuestos, aunque tú hayas pagado menos.",
    relatedModuleId: "m02",
    balearContext:
      "En Illes Balears, este valor determina en la práctica la base real de TPO, AJD e ISD en la mayoría de operaciones desde 2022.",
  },
  {
    id: "g-m02-primera-segunda-entrega",
    term: "Primera entrega / segunda entrega (IVA inmobiliario)",
    definition:
      "Distinción que determina si una transmisión de edificación está sujeta y no exenta de IVA (primera entrega por el promotor tras construcción o rehabilitación) o exenta de IVA y sujeta a TPO (segundas y ulteriores entregas), salvo renuncia válida a la exención.",
    easyDefinition:
      "La primera vez que se vende una vivienda recién construida lleva IVA; las siguientes veces que se revenda, normalmente ya no lleva IVA sino el impuesto de transmisiones.",
    relatedModuleId: "m02",
  },
  {
    id: "g-m02-renuncia-exencion-iva",
    term: "Renuncia a la exención de IVA (art. 20.2 LIVA)",
    definition:
      "Mecanismo por el cual, en una segunda entrega exenta, el transmitente (empresario) y el adquirente (con derecho a deducción) pueden optar por sujetar la operación a IVA, produciendo inversión del sujeto pasivo y, en Illes Balears, un AJD del 2,5 %.",
    easyDefinition:
      "Un truco legal para que una compraventa de local \"de segunda mano\" entre empresas lleve IVA en vez del otro impuesto, si a ambos les interesa.",
    relatedModuleId: "m02",
    balearContext: "En Illes Balears esta renuncia activa un AJD específico del 2,5 %.",
  },
  {
    id: "g-m02-imputacion-renta-inmobiliaria",
    term: "Imputación de renta inmobiliaria",
    definition:
      "Renta ficticia que la ley atribuye a los inmuebles urbanos no arrendados, no afectos a actividad económica y distintos de la vivienda habitual, calculada aplicando el 2 % (o 1,1 % en determinados valores catastrales) sobre el valor catastral.",
    easyDefinition:
      "Hacienda te cobra impuestos por una casa vacía aunque no ganes dinero con ella, \"inventando\" una renta pequeña basada en su valor catastral.",
    relatedModuleId: "m02",
  },
  {
    id: "g-m02-metodo-objetivo-real-iivtnu",
    term: "Método objetivo / método real (IIVTNU)",
    definition:
      "Dos sistemas alternativos para calcular la base imponible de la plusvalía municipal: el objetivo (valor catastral del suelo por coeficiente municipal y tipo) y el real (incremento efectivo de valor en la transmisión), pudiendo el contribuyente optar por el que resulte menor.",
    easyDefinition:
      "Hay dos formas de calcular el impuesto de plusvalía al vender un terreno urbano, y puedes elegir la que te salga más barata si demuestras el incremento real.",
    relatedModuleId: "m02",
  },
  {
    id: "g-m02-operacion-vinculada",
    term: "Operación vinculada",
    definition:
      "Transacción entre una sociedad y sus socios, administradores o personas/entidades relacionadas, que debe valorarse a valor de mercado y puede generar ajustes fiscales, especialmente relevante cuando un socio usa personalmente un inmueble de la sociedad.",
    easyDefinition:
      "Cuando el dueño de una empresa usa gratis o casi gratis un piso que es de la empresa, Hacienda puede exigir que se declare como si se hubiera pagado un alquiler de mercado.",
    relatedModuleId: "m02",
  },
];

export const m02Alerts: string[] = [
  "Cambio en bonificaciones de vivienda habitual balear (TPO), vigente desde el 1 de marzo de 2026: cuando el precio de la vivienda habitual supera 270.151,20 €, la reducción/bonificación solo se aplica al primer tramo hasta ese importe, tributando el exceso al tipo general correspondiente (por ejemplo, 8 % para menores de 30 años/discapacidad). Antes de esta fecha el tratamiento del exceso era distinto; debe verificarse siempre la versión vigente en la ATIB a la fecha de devengo.",
  "Reforma de la reducción por alquiler de vivienda en IRPF (corte del 26 de mayo de 2023): los contratos anteriores a esa fecha mantienen un régimen transitorio del 60 %; los contratos posteriores aplican el 50 % general, con porcentajes incrementados (60 %, 70 % o 90 %) solo en supuestos tasados (rehabilitación reciente, alquiler joven en zona tensionada, alquiler social o rebaja de renta superior al 5 % en zona tensionada). La aplicación de los porcentajes de zona tensionada exige que exista una declaración oficial vigente de zona de mercado residencial tensionado para el municipio concreto.",
  "Actualización de coeficientes máximos del IIVTNU para 2026: los coeficientes máximos estatales de la plusvalía municipal se actualizan por RDL 16/2025 (BOE-A-2025-26458), pero cada ayuntamiento balear debe fijar y publicar su propio coeficiente y tipo (máximo legal 30 %) dentro de esos límites; no existe una cuota uniforme para todos los municipios de Mallorca.",
  "Impuesto sobre el Patrimonio y coexistencia con el Impuesto Temporal de Solidaridad de las Grandes Fortunas: el mínimo exento autonómico balear de 3.000.000 € (vigente desde 2024) debe analizarse junto con la posible aplicación del Impuesto Temporal de Solidaridad para patrimonios elevados, cuya interacción y deducciones pueden variar por normativa estatal.",
  "Regla del valor de referencia catastral como base mínima en ITPAJD/ISD, vigente desde 2022: el agente debe comprobar en cada operación si existe valor de referencia para la finca concreta (puede no existir) y, si existe y es superior al precio o valor declarado, usarlo como base fiscal mínima, sin perjuicio de la posibilidad de impugnación motivada por singularidades objetivas del inmueble.",
  "Nota general de vigencia: el propio módulo advierte que el contenido fiscal está \"contrastado con fuentes oficiales disponibles a 4 de julio de 2026\" y que las tablas son material de estudio, no sustituto de una liquidación individual; antes de operar debe revisarse el valor de referencia en Catastro, la tarifa y los modelos vigentes en ATIB, la ordenanza municipal de IBI/IIVTNU/ICIO, y las páginas de AEAT para IRPF, IVA e IRNR, así como el BOE para cambios normativos.",
];
