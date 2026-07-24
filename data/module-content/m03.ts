import type { Module, GlossaryItem } from "@/lib/types";

export const m03Module: Module = {
  id: "m03",
  code: "M03",
  title: "Ley de Arrendamientos Urbanos",
  order: 3,
  description: "Contratos de vivienda, temporada, habitaciones, fianza en IBAVI y límites de uso turístico.",
  estimatedMinutes: 45,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m03-l1",
      moduleId: "m03",
      title: "Clasificación del contrato y régimen temporal aplicable",
      order: 1,
      summary:
        "La finalidad real del uso — no el título del contrato ni su duración nominal — determina si se aplica la LAU de vivienda, el régimen de temporada, el Código Civil o queda excluido por completo.",
      content: `Antes de redactar cualquier contrato de arrendamiento en Mallorca, el agente debe responder cuatro preguntas: ¿qué se cede?, ¿para qué se usa realmente?, ¿por cuánto tiempo y con qué prueba?, y ¿qué norma y administración intervienen? Etiquetar un contrato como "de temporada" no cambia su naturaleza jurídica si los hechos acreditan una necesidad permanente de vivienda.

## Criterios de clasificación

Según el art. 2 de la Ley 29/1994 de Arrendamientos Urbanos (LAU), se considera arrendamiento de vivienda el que recae sobre una edificación habitable cuyo destino primordial sea satisfacer la necesidad permanente de vivienda del arrendatario. Si en cambio existe una causa temporal concreta y acreditable (trabajo, estudios, tratamiento médico, obra, desplazamiento), el contrato se clasifica como arrendamiento para uso distinto del de vivienda por temporada, regulado por el art. 3 LAU y sujeto principalmente a la voluntad de las partes. Si se arrienda solo una habitación de una vivienda ocupada, se aplica el Código Civil y los pactos, sin las garantías imperativas de la LAU. Si predomina la explotación agrícola, ganadera o forestal de una finca con o sin casa-habitación, el régimen aplicable es la Ley 49/2003 de Arrendamientos Rústicos (LAR), y el arrendamiento queda excluido de la LAU (art. 5).

## La prueba que evita conflictos

El documento insiste en que un contrato de 11 meses sin causa temporal real puede ser recalificado como vivienda habitual, porque "la causa, no el número de meses, es la que sostiene la temporalidad". Para blindar la clasificación conviene acreditar: destino declarado coherente con la realidad (domicilio habitual, matrícula, contrato temporal, desplazamiento o actividad), fecha cierta de inicio y fin (sin usar duraciones "mágicas" como sustituto de la causa), inventario de dependencias y ocupantes, y comunicación clara al cliente sobre los riesgos de recalificación y la responsabilidad del intermediario.

## Régimen temporal según fecha de firma

El régimen jurídico aplicable a un contrato de vivienda no se actualiza automáticamente con cada reforma legal: depende de la fecha de firma. El módulo distingue seis tramos:

- Antes del 9-5-1985: LAU 1964 / renta antigua, con régimen transitorio y posibles subrogaciones que deben revisarse caso a caso.
- 1-1-1995 a 5-6-2013: LAU 1994 original, prórroga mínima de 5 años más 3 años de prórroga tácita.
- 6-6-2013 a 18-12-2018: Ley 4/2013, mínimo de 3 años más 1 de prórroga tácita.
- 19-12-2018 a 23-1-2019: Real Decreto-ley 21/2018, régimen a revisar caso por caso.
- 24-1-2019 a 5-3-2019: Real Decreto-ley 7/2019 (régimen 2019), 3 años más 1.
- Desde el 6-3-2019: 5 años (arrendador persona física) o 7 años (persona jurídica) de prórroga obligatoria, más hasta 3 años de prórroga tácita.
- Desde el 26-5-2023 (Ley 12/2023): se añade el Índice de Referencia de Arrendamientos de Vivienda (IRAV) para actualización de renta y las reglas propias de vivienda de dicha ley.

El método de examen recomendado: ante cualquier supuesto práctico, anotar primero la fecha de firma, si el arrendador es persona física o jurídica, el destino real declarado, la duración pactada y si existe una zona de mercado tensionado declarada. Con esos cuatro datos se resuelve la mayor parte del caso.`,
      easyExplanation:
        "Lo que importa para saber qué ley se aplica a un alquiler no es cómo se titula el contrato (ni si dice \"temporada\" o \"habitual\"), sino para qué se usa realmente la vivienda y desde cuándo. Si alguien vive allí de forma permanente, es vivienda habitual aunque el papel diga \"11 meses\". Además, la fecha en que se firmó el contrato determina qué normas concretas (duración mínima, forma de subir la renta) se aplican, porque la ley ha cambiado varias veces desde 1985.",
      balearExample:
        "Una propietaria de Palma quiere alquilar un piso a una enfermera con plaza fija en el Hospital Universitario Son Espases y le propone un \"contrato de temporada renovable\" de 11 meses para evitar la prórroga obligatoria de 5 años. Como la enfermera va a residir allí de forma permanente, no existe una causa temporal real: el contrato debe clasificarse como vivienda habitual conforme al art. 2 LAU, con prórrogas legales y fianza de una mensualidad, independientemente de cómo se titule el documento.",
      keyConcepts: [
        "clasificación por finalidad real",
        "vivienda habitual (art. 2 LAU)",
        "arrendamiento de temporada (art. 3 LAU)",
        "normas imperativas (art. 4 LAU)",
        "régimen transitorio por fecha de firma",
        "LAR (Ley 49/2003)",
        "recualificación del contrato",
        "prórroga obligatoria y tácita"
      ],
      frequentErrors: [
        "Usar la palabra \"temporada\" en el título del contrato sin que exista una causa temporal acreditada.",
        "Asumir que un contrato de 11 meses evita automáticamente el régimen de vivienda habitual.",
        "No comprobar la fecha de firma antes de aplicar el régimen de duración o actualización vigente.",
        "Confundir \"duración pactada corta\" con \"temporalidad real\"."
      ],
      examples: [
        {
          id: "m03-l1-ex1",
          title: "Contrato \"de temporada\" para residente permanente",
          scenario: "Un propietario redacta un contrato de temporada para un inquilino que se empadrona y reside todo el año.",
          application: "Riesgo de recalificación como vivienda habitual; se debe documentar la causa real antes de firmar.",
          isBalearContext: false
        },
        {
          id: "m03-l1-ex2",
          title: "Contrato firmado en 2015",
          scenario: "Un agente debe informar de la duración mínima aplicable a un contrato de vivienda firmado el 10-3-2015.",
          application: "Se aplica la Ley 4/2013 (mínimo 3 años + 1 de prórroga tácita), no el régimen actual de 5/7 años.",
          isBalearContext: false
        },
        {
          id: "m03-l1-ex3",
          title: "Finca rústica con vivienda accesoria",
          scenario: "Se arrienda una finca con casa pero la explotación agraria es la finalidad principal.",
          application: "Se aplica la LAR, no la LAU, aunque exista una vivienda dentro de la finca.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m03-l2",
      moduleId: "m03",
      title: "Vivienda habitual: alcance, expediente previo, duración y extinción",
      order: 2,
      summary:
        "La LAU protege la continuidad de la vivienda habitual con prórrogas obligatorias y causas de extinción tasadas, pero exige un expediente documental completo antes de publicitar el inmueble.",
      content: `La LAU considera vivienda la edificación habitable destinada primordialmente a satisfacer la necesidad permanente del arrendatario (art. 2 LAU). Quedan incluidos la vivienda y, si los cede el mismo arrendador, sus accesorios (mobiliario, trastero, garaje, espacios y servicios), así como la residencia de cónyuge no separado o hijos dependientes cuando la ley lo contempla. Una ocupación no diaria no excluye el régimen de vivienda si el inmueble sigue siendo el centro estable de vida del arrendatario. En cambio, no convierte por sí solo el contrato en vivienda: que la dirección aparezca en el padrón sin que los hechos acrediten una estancia temporal auténtica, que el contrato diga "temporal" sin causa, o que se cobre la renta por meses o se use un modelo descargado de Internet. El art. 4 LAU refuerza que sus normas son imperativas y no pueden empeorarse por contrato en perjuicio del arrendatario.

## Expediente antes de publicitar (Mallorca)

Antes de anunciar una vivienda en Mallorca, el agente debe reunir: identidad y título (titularidad, usufructo, poderes, cargas, para saber quién puede arrendar y con qué límites), habitabilidad (cédula o título equivalente vigente, uso residencial y capacidad), certificado de eficiencia energética (CEE) registrado con la etiqueta correcta, documentación de comunidad (estatutos, acuerdos, deudas, reglas de convivencia) y un inventario (fotos, electrodomésticos, estado y llaves) como prueba de entrega y de fianza. Conviene solicitar nota simple actualizada, referencia catastral y documento de identidad; los casos de usufructuario, apoderado, comunidad de bienes o herencia pendiente de adjudicación requieren análisis específico. En vivienda turística, la cédula de habitabilidad o título equivalente es solo una pieza del expediente: no sustituye licencias, plazas, zonificación, consentimiento comunitario ni el registro estatal.

## Duración, prórrogas y extinción

La duración se pacta libremente, pero la LAU protege la continuidad de la vivienda habitual: si el arrendador es persona física, existen prórrogas obligatorias hasta 5 años; si es persona jurídica, hasta 7 años. Sin plazo o con plazo indeterminado se entiende un año, con derecho a prórrogas legales. Tras el mínimo legal, sin preaviso, la prórroga es anual hasta un máximo de 3 años más, y el arrendatario dispone de 1 mes de preaviso para no renovar. El preaviso del arrendador para no renovar es de 4 meses; el del arrendatario, de 2 meses.

Cuatro situaciones frecuentes de extinción anticipada: la necesidad del arrendador de recuperar la vivienda solo procede si es persona física, tras el primer año, si se hizo constar expresamente en el contrato, con un preaviso mínimo de 2 meses; el desistimiento del inquilino es posible desde los 6 meses con 30 días de preaviso, pudiendo pactarse una indemnización con límite legal; en divorcio o nulidad, quien recibe la atribución de uso de la vivienda puede continuar el contrato si lo notifica en plazo; en la venta de la vivienda arrendada, el adquirente se subroga durante el periodo legal mínimo, debiendo revisarse los derechos de tanteo y retracto. La necesidad de recuperar la vivienda no es una cláusula decorativa: si el arrendador persona física quiere conservar esa posibilidad, debe constar con precisión desde la firma.

Sobre venta de vivienda arrendada: el tanteo y el retracto tienen un plazo de 30 días naturales desde la notificación fehaciente de precio y condiciones esenciales (tanteo) o desde la notificación fehaciente de la venta si faltó o fue defectuosa la comunicación (retracto); la notificación de venta caduca a los 180 días; puede pactarse la renuncia, comunicando igualmente la intención de vender con 30 días de antelación. Casos como VPO, ventas de edificio completo o contratos de renta antigua exigen revisión jurídica específica.`,
      easyExplanation:
        "Una vivienda habitual es la casa donde alguien vive de forma estable, no de paso. La ley obliga a que el contrato dure un mínimo (5 años si el propietario es una persona, 7 si es una empresa) salvo excepciones muy concretas, como que el propietario necesite la vivienda para él mismo y lo haya avisado desde el principio. Antes de anunciar un piso hay que comprobar papeles reales (quién es el dueño, si tiene cédula de habitabilidad, si la comunidad tiene deudas), no fiarse de lo que diga el propietario de palabra.",
      balearExample:
        "Un arrendador de Manacor pacta con su inquilino, desde la firma del contrato, una cláusula de necesidad para recuperar la vivienda destinada a su hija cuando esta termine sus estudios en 2 años. Transcurrido el primer año del contrato, notifica con 2 meses de antelación su intención de recuperar la vivienda; al no cumplirse finalmente ese uso, el inquilino podría reclamar reingreso o indemnización, por lo que el agente debe advertir del riesgo antes de aceptar el encargo.",
      keyConcepts: [
        "vivienda habitual",
        "expediente documental previo",
        "cédula de habitabilidad",
        "certificado de eficiencia energética (CEE)",
        "prórroga obligatoria 5/7 años",
        "prórroga tácita",
        "necesidad del arrendador (art. 9.3 LAU)",
        "tanteo y retracto en venta"
      ],
      frequentErrors: [
        "Publicitar una vivienda sin comprobar habitabilidad, título y estado de comunidad.",
        "Prometer al propietario que \"recuperará en un año\" una vivienda habitual solo porque el contrato se firmó por 12 meses.",
        "No pactar expresamente la cláusula de necesidad del arrendador desde la firma, pretendiendo invocarla después.",
        "Confundir la cédula de habitabilidad con una licencia turística."
      ],
      examples: [
        {
          id: "m03-l2-ex1",
          title: "Comunidad con deudas ocultas",
          scenario: "Se descubre tras la firma que la comunidad tenía cuotas impagadas.",
          application: "El expediente previo (estatutos, acuerdos, deudas) debe revisarse antes de publicitar, no después.",
          isBalearContext: false
        },
        {
          id: "m03-l2-ex2",
          title: "Persona jurídica arrendadora",
          scenario: "Una SL es propietaria del piso arrendado.",
          application: "La prórroga obligatoria es de hasta 7 años, no de 5.",
          isBalearContext: false
        },
        {
          id: "m03-l2-ex3",
          title: "Venta con inquilino dentro",
          scenario: "El propietario vende el piso arrendado sin avisar al inquilino con 30 días.",
          application: "El plazo de retracto se activa por notificación defectuosa; puede reclamar en 30 días naturales.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m03-l3",
      moduleId: "m03",
      title: "Renta, actualización, fianza IBAVI y garantías adicionales",
      order: 3,
      summary:
        "La renta se pacta libremente salvo en zonas tensionadas declaradas, la actualización exige cláusula expresa e índice correcto, y la fianza legal debe depositarse ante el IBAVI en Illes Balears.",
      content: `Conforme al art. 17 LAU, fuera de los límites que procedan en una zona de mercado tensionado declarada, la renta inicial se pacta libremente entre las partes. Salvo pacto en contrario, se paga mensualmente dentro de los siete primeros días y no puede exigirse el pago anticipado de más de una mensualidad. Cuando existe una zona tensionada declarada puede operar el límite de la última renta de vivienda habitual vigente en los últimos cinco años, actualizada conforme al contrato anterior; en determinados casos de gran tenedor o vivienda sin alquiler habitual previo puede actuar el sistema estatal de índices de referencia; no pueden introducirse en el nuevo contrato gastos o cuotas que el contrato anterior no repercutía al arrendatario. La declaración de zona tensionada tiene ámbito y vigencia concretos: no debe presuponerse por municipio, noticia de prensa o percepción de precio elevado; antes de dar una cifra final hay que comprobar la declaración autonómica aplicable, la fecha de contratación anterior, la condición de gran tenedor y la evidencia de gastos repercutidos.

## Actualización de renta

La actualización no es automática: requiere una cláusula contractual y debe hacerse en el aniversario del contrato con el dato publicado que corresponda. Para contratos firmados desde el 26-5-2023, el IRAV (Índice de Referencia de Arrendamientos de Vivienda) opera como límite de referencia, aplicando el dato vigente en el aniversario; para contratos firmados antes de esa fecha rige el índice pactado, y sin pacto expreso no hay actualización; en contratos de temporada, habitación o local rige lo pactado y su régimen propio, sin trasladar mecánicamente el IRAV. El procedimiento correcto: identificar fecha de firma, aniversario y cláusula exacta; consultar el último índice disponible a esa fecha (el IRAV de mayo de 2026 publicado por el INE fue del 2,48% según el ejemplo del módulo); calcular renta actual × porcentaje, conservando fuente, cálculo y fecha; notificar por escrito, exigiéndose la nueva renta desde el mes siguiente, sin retroactividad. Ejemplo del módulo: renta de 1.200 EUR con IRAV del 2,48% da un incremento máximo de 29,76 EUR, resultando una nueva renta de 1.229,76 EUR, exigible desde el mes posterior a la notificación.

## Fianza legal y depósito en el IBAVI

La fianza es obligatoria: en vivienda habitual, 1 mensualidad; en uso distinto (local o temporada), 2 mensualidades. No se actualiza durante los primeros 5 años (7 si el arrendador es persona jurídica); se adapta al régimen y contratos posteriores; devenga interés legal si pasa 1 mes desde la entrega de llaves sin devolución. En Illes Balears, el arrendador debe además registrar y depositar la fianza ante el IBAVI (Institut Balear de l'Habitatge), a través de la Sede CAIB (Código SIA 208139). El arrendador cuenta con 30 días hábiles desde la formalización y entrada en vigor para depositar la fianza; conviene guardar el justificante de registro y depósito en el expediente, porque el inquilino puede necesitarlo para tramitar ayudas o deducciones. A la extinción se utiliza el trámite de cancelación/devolución con la documentación requerida; la liquidación final debe justificarse con acta, fotos, facturas y lectura de suministros.

## Garantías adicionales, pago y gastos

La garantía adicional en vivienda habitual no puede convertirse en una barrera ilimitada: tiene un máximo de 2 mensualidades mientras dure el periodo protegido (5/7 años); en uso distinto hay libertad de pactos con control de abusividad y consumo. El aval bancario o personal debe cuantificarse y limitarse con claridad. El seguro de impago normalmente lo contrata el arrendador; no es una "fianza extra" del inquilino, y hay que revisar cobertura, carencia y exclusiones. Debe pedirse solvencia de forma proporcional (ingresos, estabilidad, referencias económicas suficientes), evitando recabar datos irrelevantes o categorías sensibles, en coordinación con protección de datos. Es fuente de conflicto y puede ser abusivo solicitar simultáneamente varios meses de depósito, aval abierto, seguro y pagos anticipados sin base legal clara. En cuanto a gastos, los suministros individualizados los paga el arrendatario si existe contador individual; comunidad, IBI, tasas y otros generales solo si se pactan por escrito y se determina su importe anual a la fecha del contrato; los gastos de gestión inmobiliaria y de formalización corren a cargo del arrendador en vivienda, conforme al art. 20.1 LAU (cobrar la comisión de agencia al inquilino por la gestión y formalización del contrato de vivienda es una respuesta incorrecta en el examen); las reparaciones por uso indebido corresponden al arrendatario, sin confundirlas con la conservación necesaria.`,
      easyExplanation:
        "El precio del alquiler normalmente se pacta libremente, salvo que la vivienda esté en una \"zona tensionada\" declarada oficialmente, donde hay límites. Para subir la renta cada año hace falta que el contrato lo diga expresamente y usar el índice correcto (el IRAV desde 2023), nunca un porcentaje inventado. La fianza (una mensualidad en vivienda) hay que depositarla obligatoriamente en el IBAVI, el organismo balear que la gestiona, en un plazo de 30 días hábiles. Y ojo: en Baleares es el propietario quien paga la comisión de la inmobiliaria por gestionar y formalizar el alquiler de una vivienda, no el inquilino.",
      balearExample:
        "Un agente de Sóller firma un contrato de vivienda habitual el 15 de abril de 2024 con una renta de 1.100 EUR y una cláusula que dice \"se actualizará conforme al IPC\". En abril de 2026 el arrendador pide aplicar un IPC del 3,2%. Como el contrato se firmó tras la entrada en vigor de la Ley 12/2023, el límite de referencia aplicable es el IRAV (no el IPC, aunque el texto lo mencione), así que el agente debe consultar el IRAV vigente en el aniversario (2,48% en el ejemplo del módulo) y calcular: 1.100 × 0,0248 = 27,28 EUR, resultando una renta de 1.127,28 EUR, exigible desde el mes siguiente a la notificación por escrito.",
      keyConcepts: [
        "renta pactada libremente (art. 17 LAU)",
        "zona de mercado tensionado",
        "IRAV",
        "actualización de renta (art. 18 LAU)",
        "fianza legal",
        "IBAVI",
        "garantía adicional",
        "gastos de gestión inmobiliaria (art. 20.1 LAU)"
      ],
      frequentErrors: [
        "Aplicar el IPC en lugar del IRAV en contratos firmados desde el 26-5-2023.",
        "No depositar la fianza ante el IBAVI en el plazo de 30 días hábiles.",
        "Cobrar al inquilino la comisión de gestión y formalización del contrato de vivienda.",
        "Acumular depósito, aval, seguro de impago y pagos anticipados sin base legal, generando abusividad.",
        "Presuponer que un municipio entero es zona tensionada sin comprobar la declaración autonómica vigente."
      ],
      examples: [
        {
          id: "m03-l3-ex1",
          title: "Cálculo de actualización",
          scenario: "Renta de 1.200 EUR, IRAV 2,48%.",
          application: "Incremento máximo 29,76 EUR; nueva renta 1.229,76 EUR desde el mes siguiente a la notificación.",
          isBalearContext: false
        },
        {
          id: "m03-l3-ex2",
          title: "Fianza no depositada",
          scenario: "El arrendador olvida depositar la fianza en el IBAVI tras 45 días.",
          application: "Incumplimiento del plazo de 30 días hábiles; riesgo de sanción y de que el inquilino no pueda acreditar el depósito para ayudas.",
          isBalearContext: false
        },
        {
          id: "m03-l3-ex3",
          title: "Comisión de agencia",
          scenario: "La inmobiliaria pretende cobrar la comisión de formalización al inquilino de un piso en Inca.",
          application: "Conforme al art. 20.1 LAU, en vivienda esos gastos son a cargo del arrendador.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m03-l4",
      moduleId: "m03",
      title: "Conservación, cesión, subarriendo, resolución y desahucio",
      order: 4,
      summary:
        "El reparto de obligaciones de conservación, las reglas de cesión y subarriendo, y el procedimiento previo obligatorio de negociación (MASC) marcan los límites de actuación del agente ante un incumplimiento.",
      content: `En materia de conservación y obras, la pregunta relevante no es "quién vive dentro" sino qué tipo de reparación es, por qué ocurre y qué exige la habitabilidad. La conservación necesaria corresponde al arrendador, que debe mantener la habitabilidad sin elevar la renta. La pequeña reparación por desgaste ordinario corresponde al arrendatario, de forma proporcional y ligada al uso normal. El daño por uso indebido o negligencia también corresponde al arrendatario, requiriendo prueba, fotos y presupuesto. Una obra que altera la configuración del inmueble requiere consentimiento escrito del arrendador; hacerla sin permiso puede dar lugar a reposición o resolución del contrato. El art. 24 LAU permite al arrendatario con discapacidad o mayor de 70 años realizar adaptaciones interiores, con notificación previa y dentro de los límites de seguridad y elementos comunes.

## Cesión, subarriendo y convivencia

En vivienda habitual, el inquilino no puede convertir la vivienda en un activo de reventa sin consentimiento escrito del arrendador. Las reglas de la LAU son claras: la cesión necesita consentimiento escrito del arrendador; el subarriendo de vivienda solo puede ser parcial y también requiere consentimiento escrito; el precio del subarriendo no puede exceder del que corresponda al arrendamiento principal; el derecho del subarrendatario se extingue cuando termina el contrato principal; la cesión o el subarriendo no consentidos son causa de resolución del contrato. Conviene concretar por contrato: ocupantes autorizados, domicilio de notificaciones, mascotas, uso profesional, cesión de llaves y prohibición de uso turístico, así como normas comunitarias aplicables y obligación de evitar actividades molestas, insalubres, nocivas, peligrosas o ilícitas. Permitir a un familiar convivir no equivale necesariamente a subarrendar, pero cobrar una renta, ceder la posesión o explotar habitaciones sí exige análisis.

## Resolución, desahucio y cobro de rentas

El agente debe prevenir y documentar; la dirección del procedimiento judicial corresponde a profesionales jurídicos. Pueden justificar la resolución: el impago de renta, fianza o cantidades asumidas contractualmente; el subarriendo o la cesión sin consentimiento cuando sea exigible; los daños dolosos y las obras no autorizadas o actividades prohibidas; y los incumplimientos del arrendador, como falta de conservación o perturbación del uso. Ante un impago, el protocolo inicial es: confirmar importe, vencimiento y medio de pago (no actuar por rumor); contactar con respeto y dejar constancia escrita de la propuesta de regularización; nunca cambiar cerraduras, cortar suministros ni retirar bienes (sería una vía de hecho); derivar cuanto antes a requerimiento formal, negociación y análisis procesal. El módulo advierte expresamente contra prometer fechas de lanzamiento, ya que dependen de la respuesta del deudor, la agenda judicial, la vulnerabilidad y los requisitos procesales aplicables.

## MASC (medios adecuados de solución de controversias)

Desde abril de 2025, con carácter general en el orden civil, existe un requisito de actividad negociadora previa antes de ciertas demandas, conforme a la Ley Orgánica 1/2025 de medidas en materia de eficiencia del Servicio Público de Justicia (arts. 5 y 10), con excepciones legales. La negociación previa debe tener el mismo objeto que el litigio y quedar documentada; puede articularse por negociación, mediación, conciliación u otros medios adecuados previstos por la ley; la documentación debe reflejar invitación, respuesta o falta de comparecencia, y buena fe cuando proceda. En desahucios de vivienda habitual, la Ley 12/2023 añadió controles sobre vulnerabilidad y condición de gran tenedor en los supuestos previstos por la Ley de Enjuiciamiento Civil (LEC). El agente no debe diseñar por su cuenta un "MASC" como si fuera una formalidad: debe conservar la comunicación, no prometer su validez procesal, y remitir al abogado la estrategia, especialmente si hay menores, vulnerabilidad o gran tenedor implicados.`,
      easyExplanation:
        "Si algo se rompe por el uso normal (una lavadora vieja), lo paga el inquilino; si hay que arreglar algo estructural para que la vivienda siga siendo habitable, lo paga el propietario. El inquilino no puede subalquilar toda la vivienda ni cederla a otra persona sin permiso escrito del dueño. Si hay un impago, el agente no puede tomarse la justicia por su mano (cortar la luz, cambiar la cerradura): debe documentar todo y derivar a un abogado, porque desde 2025 existe la obligación de intentar negociar antes de demandar.",
      balearExample:
        "En un piso de Felanitx, el inquilino instala una climatización que exige perforar una pared de carga sin avisar al propietario. El agente debe advertir de que se trata de una obra que altera la configuración del inmueble y requiere consentimiento escrito previo (no es una \"pequeña reparación\"); sin ese consentimiento, el propietario puede exigir la reposición del estado original o, en casos graves, la resolución del contrato.",
      keyConcepts: [
        "conservación necesaria vs. pequeña reparación",
        "obras con consentimiento escrito",
        "art. 24 LAU (accesibilidad)",
        "cesión y subarriendo",
        "causas de resolución",
        "MASC (Ley Orgánica 1/2025)",
        "vulnerabilidad y gran tenedor (Ley 12/2023)"
      ],
      frequentErrors: [
        "Confundir el desgaste ordinario (a cargo del inquilino) con la conservación necesaria (a cargo del arrendador).",
        "Permitir obras que alteran la configuración de la vivienda sin exigir consentimiento escrito.",
        "Actuar de hecho ante un impago (cortar suministros, cambiar cerraduras) en vez de derivar al procedimiento formal.",
        "Prometer fechas concretas de lanzamiento judicial.",
        "Ignorar el requisito de negociación previa (MASC) antes de demandar, vigente desde abril de 2025."
      ],
      examples: [
        {
          id: "m03-l4-ex1",
          title: "Persiana rota por uso",
          scenario: "Una persiana se rompe por uso ordinario en un piso de Manacor.",
          application: "Se trata de una pequeña reparación a cargo del arrendatario, con prueba fotográfica y presupuesto.",
          isBalearContext: true
        },
        {
          id: "m03-l4-ex2",
          title: "Subarriendo no autorizado",
          scenario: "El inquilino de un piso en Palma empieza a cobrar por habitaciones sin avisar al propietario.",
          application: "Es causa de resolución del contrato por cesión/subarriendo no consentido.",
          isBalearContext: true
        },
        {
          id: "m03-l4-ex3",
          title: "Impago de tres mensualidades",
          scenario: "Un inquilino de Inca deja de pagar la renta durante tres meses.",
          application: "El agente documenta el impago y deriva a requerimiento formal y negociación previa (MASC) antes de cualquier demanda.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m03-l5",
      moduleId: "m03",
      title: "Arrendamiento de temporada y Registro Único de Arrendamientos",
      order: 5,
      summary:
        "El arrendamiento de temporada exige una causa real y acreditada distinta de la vivienda habitual, y desde 2025 los alquileres de corta duración deben contar con número del Registro Único estatal.",
      content: `La temporada es un régimen distinto al de vivienda: su temporalidad la define la causa acreditada, no la duración nominal ni el nombre puesto al contrato. Causas típicas y su prueba: un proyecto laboral temporal se acredita con contrato, carta de desplazamiento y duración; un curso o máster, con matrícula y calendario académico; un tratamiento médico, con justificación suficiente y sin recabar datos sensibles innecesarios; una obra en vivienda habitual, con contrato de obra, dirección facultativa y fechas. El riesgo si la causa no existe: recualificación como vivienda habitual, riesgo especial en contratos de 11 meses artificiales, o uso permanente encubierto.

Blindaje razonable para el agente: identificar la residencia habitual del inquilino en otro lugar (solo con información necesaria), vincular la fecha de fin a la causa y no a una renovación automática indefinida, explicar que el contrato no tiene las prórrogas de vivienda habitual, y revisar el registro estatal si el anuncio entra en el ámbito del alquiler de corta duración en plataformas online. Advertencia de conducta profesional: si el encargo busca "evitar los 5 años" para una persona que residirá permanentemente, el agente debe rechazar la estructura y dejar constancia de la advertencia.

## Registro Único de Arrendamientos y Ventanilla Digital

El Real Decreto 1312/2024 crea el registro único y la ventanilla digital para servicios de alquiler de corta duración, incluidos los de finalidad turística o no cuando entren en su ámbito. Datos clave: el Real Decreto entró en vigor el 2 de enero de 2025 y desplegó efectos desde el 1 de julio de 2025; el número de registro se tramita ante el Registro de la Propiedad o de Bienes Muebles competente; las plataformas en línea deben comprobar los datos y pueden recibir órdenes de retirada o inhabilitación de anuncios sin número válido; el alquiler de larga duración del art. 2 LAU puede solicitar número con carácter voluntario, no como regla general obligatoria. Checklist antes de publicar un anuncio: identificar la categoría real de la oferta, verificar el título del arrendador, existencia de licencia turística si la finalidad lo requiere, reglas comunitarias, número de registro, URL del anuncio y conservación del expediente completo. Advertencia central del módulo: el número estatal no convierte un alquiler en turístico ni sustituye la normativa balear, municipal o comunitaria — es un requisito adicional, no una licencia.`,
      easyExplanation:
        "Un alquiler \"de temporada\" solo es legal como tal si hay un motivo real y demostrable (trabajo temporal, estudios, obra, tratamiento médico); si en realidad la persona va a vivir allí siempre, no vale con poner \"temporada\" en el contrato. Además, desde julio de 2025, cualquier alquiler de corta duración anunciado en plataformas online necesita un número de un registro estatal nuevo — pero tener ese número no significa tener licencia turística ni cumplir con las normas de Baleares.",
      balearExample:
        "Un profesor visitante contratado por un centro educativo de Palma durante un curso académico solicita un piso en alquiler de temporada, aportando su contrato laboral con fecha de inicio y fin coincidente con el curso escolar. El agente vincula la fecha de finalización del contrato a la fecha de fin del curso (no a una renovación automática) y conserva copia del contrato laboral como prueba de la causa temporal real.",
      keyConcepts: [
        "arrendamiento de temporada (art. 3 LAU)",
        "causa temporal acreditada",
        "recualificación como vivienda habitual",
        "Registro Único de Arrendamientos",
        "Real Decreto 1312/2024",
        "Ventanilla Digital",
        "alquiler de corta duración"
      ],
      frequentErrors: [
        "Redactar un contrato de temporada sin ninguna causa temporal documentada.",
        "Encadenar contratos de temporada sucesivos para el mismo residente permanente.",
        "Confundir el número del Registro Único estatal con una licencia turística.",
        "No comprobar si el anuncio entra en el ámbito de alquiler de corta duración en plataformas online."
      ],
      examples: [
        {
          id: "m03-l5-ex1",
          title: "Curso de máster en Palma",
          scenario: "Un estudiante de máster de 9 meses solicita piso de temporada.",
          application: "Se acredita con matrícula y calendario académico; la fecha de fin se vincula al curso, no a una renovación indefinida.",
          isBalearContext: true
        },
        {
          id: "m03-l5-ex2",
          title: "Anuncio sin número de registro",
          scenario: "Una plataforma detecta un anuncio de corta duración sin número válido.",
          application: "La plataforma puede ordenar la retirada o inhabilitación del anuncio desde julio de 2025.",
          isBalearContext: false
        },
        {
          id: "m03-l5-ex3",
          title: "\"Evitar los 5 años\"",
          scenario: "Un propietario pide estructurar el contrato como temporada para una persona que residirá de forma permanente.",
          application: "El agente debe rechazar la estructura y dejar constancia escrita de la advertencia.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m03-l6",
      moduleId: "m03",
      title: "Habitaciones, vivienda turística, uso distinto, local de negocio y fiscalidad",
      order: 6,
      summary:
        "Fuera de la vivienda habitual existen regímenes distintos y a menudo superpuestos — habitaciones, vivienda turística, propiedad horizontal, uso distinto, local de negocio y fiscalidad — que exigen un análisis territorial y documental propio en cada operación.",
      content: `El arrendamiento de habitación no cede una vivienda completa: se rige principalmente por el Código Civil y lo que se pacte, sin los controles imperativos de la LAU sobre consumo, convivencia y habitabilidad. El contrato debe incluir identificación de la habitación, espacios comunes, mobiliario y personas autorizadas; renta, suministros, internet, limpieza, garantía, duración, preavisos y reglas de convivencia; prohibición o condiciones para subarriendo, turismo, visitas, teletrabajo, animales y fumar; inventario individual, llaves entregadas, fotos y procedimiento de devolución. En Mallorca, hay que respetar la ocupación razonable y las condiciones de habitabilidad, y nunca presentar habitaciones como alojamiento turístico de forma individual sin que la normativa sectorial y el título habilitante lo permitan; que no haya prórroga LAU no autoriza cláusulas abusivas, discriminación o desalojo de hecho.

## Vivienda turística en Illes Balears: varias capas de control

La vivienda turística queda fuera de la LAU si reúne los elementos del art. 5.e LAU, pero queda sometida a normativa turística sectorial. En Mallorca el análisis es siempre territorial y documental, con cuatro capas: turismo (modalidad, plazas, título habilitante, vigencia, declaración responsable y registro insular), territorio y municipio (zonificación, usos, restricciones y posibles moratorias o limitaciones vigentes), propiedad horizontal (estatutos y acuerdo comunitario previo cuando corresponda) y registro estatal (número para alquiler de corta duración en plataformas dentro del RD 1312/2024). El Consorci Borsa d'Allotjaments Turístics del Consell de Mallorca gestiona las plazas turísticas: nunca debe anunciarse "licencia obtenible" o "apto para turístico" sin expediente específico y vigente; la rentabilidad estimada de uso turístico no debe incorporarse a la valoración comercial como un hecho si la operación carece de habilitación completa.

Desde el 3 de abril de 2025, quien quiera iniciar la actividad turística del art. 5.e LAU en régimen de propiedad horizontal debe obtener aprobación expresa de la comunidad, en los términos de la Ley de Propiedad Horizontal (LPH). El acuerdo para aprobar, limitar, condicionar o prohibir la actividad turística requiere 3/5 del total de propietarios y cuotas, según el art. 17.12 LPH. Los estatutos inscritos pueden prohibir o limitar el uso y condicionar el acceso al registro de alquiler de corta duración. La existencia de una licencia o declaración administrativa no elimina la necesidad de comprobar estatutos y acuerdos comunitarios; las actividades iniciadas antes de la entrada en vigor de la Ley Orgánica 1/2025 tienen su propio régimen transitorio y no presumen efectos sin revisión.

## Uso distinto de vivienda y local de negocio

La categoría de uso distinto engloba temporada y actividades industriales, comerciales, artesanales, profesionales, recreativas, asistenciales, culturales o docentes. En uso distinto rige primero la voluntad de las partes; en su defecto, el Título III LAU y, supletoriamente, el Código Civil. Precisamente por esa libertad, un contrato pobre deja los problemas sin respuesta. Pactos que no deben faltar: objeto, destino autorizado, actividad, licencias y reparto de responsabilidad administrativa; duración, carencia, renovaciones, desistimiento y penalización proporcionada; renta, IVA/retención cuando proceda, obras, restitución, cesión, subarriendo, seguro, daños y garantías; causas de resolución, comunicaciones y entrega final. La fianza legal en uso distinto es de dos mensualidades; el alquiler de local normalmente está sujeto a IVA y puede requerir retención, por lo que conviene coordinar con asesoría fiscal.

En el alquiler de un local de negocio, la operación se negocia alrededor de la actividad (uso exacto, licencias, horarios, residuos, terrazas, música, accesibilidad y obras); la duración (obligado cumplimiento, salida anticipada, traspaso y renovación); la renta (base, IVA, retención, carencias, actualización y gastos repercutidos); la cesión/subarriendo (régimen del art. 32 LAU o exclusión/modulación expresa); y la clientela (indemnización del art. 34 LAU: analizar si aplica y si se pacta renuncia válida). Antes de publicitar un local como "apto para X" hay que verificar compatibilidad urbanística, comunidad, licencia de actividad y condiciones físicas del local.

## Fiscalidad esencial del alquiler

El agente explica el mapa básico, pero no liquida ni interpreta situaciones fiscales complejas sin asesoramiento especializado. El alquiler de vivienda está exento de IVA si se destina exclusivamente a vivienda; el arrendador declara los rendimientos según su situación fiscal. El alquiler de local normalmente está sujeto a IVA y puede llevar retención; requiere factura. La fianza no es renta, se deposita ante el IBAVI y se liquida al final. En arrendador no residente se aplica el IRNR y el convenio aplicable, con derivación obligatoria al especialista. La Ley 12/2023 modificó la reducción de rendimientos netos en nuevos contratos de vivienda: no deben prometerse porcentajes sin comprobar la fecha del contrato, el destino, la zona declarada y los requisitos del contribuyente.`,
      easyExplanation:
        "Fuera del alquiler \"normal\" de vivienda hay otros mundos con reglas propias: alquilar una habitación se rige más por acuerdo entre partes que por la LAU; alquilar para turismo necesita licencia turística Y, si el edificio tiene comunidad de vecinos, desde abril de 2025 también necesita que 3 de cada 5 vecinos lo aprueben; alquilar un local de negocio depende sobre todo de lo que se pacte sobre la actividad que se va a desarrollar. Y en fiscalidad: alquilar vivienda no lleva IVA, alquilar un local normalmente sí.",
      balearExample:
        "Un propietario de un piso en un edificio plurifamiliar de Alcúdia quiere alquilarlo por semanas a turistas. No aporta título turístico ni acuerdo de comunidad, y afirma que \"en los portales aparece como temporada\". El agente debe detener la publicación: la denominación \"temporada\" no sustituye el análisis de finalidad, y sin modalidad, plazas, título habilitante, zonificación, estatutos y acuerdo comunitario verificados, no puede afirmarse que el piso es apto para turismo; la rentabilidad no es una autorización.",
      keyConcepts: [
        "arrendamiento de habitación (Código Civil)",
        "vivienda turística (art. 5.e LAU)",
        "acuerdo comunitario 3/5 (art. 17.12 LPH)",
        "uso distinto de vivienda (Título III LAU)",
        "local de negocio",
        "indemnización por clientela (art. 34 LAU)",
        "IVA en alquiler de local",
        "IRNR"
      ],
      frequentErrors: [
        "Anunciar una vivienda como turística sin licencia ni acuerdo comunitario vigente.",
        "Asumir que la LAU protege al arrendatario de habitación igual que al de vivienda.",
        "Redactar un contrato de local usando el mismo modelo que uno de vivienda habitual.",
        "Prometer porcentajes de reducción fiscal en IRPF sin comprobar fecha, destino y zona del contrato.",
        "Confundir el registro estatal de corta duración con la licencia turística balear."
      ],
      examples: [
        {
          id: "m03-l6-ex1",
          title: "Comunidad sin acuerdo",
          scenario: "Un propietario en propiedad horizontal en Cala Millor quiere iniciar actividad turística sin acuerdo comunitario.",
          application: "Necesita aprobación de 3/5 de propietarios y cuotas conforme al art. 17.12 LPH desde el 3-4-2025.",
          isBalearContext: true
        },
        {
          id: "m03-l6-ex2",
          title: "Local de restauración",
          scenario: "Se alquila un local en Manacor para un restaurante.",
          application: "El contrato debe fijar licencia de actividad, horarios, terrazas, IVA aplicable y régimen de cesión/traspaso.",
          isBalearContext: true
        },
        {
          id: "m03-l6-ex3",
          title: "No residente fiscal",
          scenario: "Un arrendador residente en Alemania alquila su vivienda en Sóller.",
          application: "Se deriva a especialista en IRNR y convenio de doble imposición aplicable.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m03-l7",
      moduleId: "m03",
      title: "Arrendamientos rústicos (LAR): complemento territorial en Mallorca",
      order: 7,
      summary:
        "Cuando predomina el aprovechamiento agrícola, ganadero o forestal de una finca, se aplica la Ley 49/2003 de Arrendamientos Rústicos (LAR) y no la LAU, con reglas propias de forma, duración, inventario y transmisión.",
      content: `La LAR regula la cesión temporal de una finca o explotación para su aprovechamiento agrícola, ganadero o forestal a cambio de precio. El criterio decisivo no es la apariencia de la finca, sino el aprovechamiento económico principal que realmente se arrienda: una finca con casa pero finalidad agraria principal se rige por la LAR (la casa es accesoria a la explotación); una vivienda con huerto accesorio se rige por la LAU si la finalidad principal es residencial; una explotación completa exige LAR más inventario de elementos; caza, pastos secundarios, rastrojeras o campaña corta pueden quedar excluidos o exceptuados de la LAR; agroturismo o estancia turística no nace del arrendamiento agrario y requiere su propio título. En Mallorca no debe asumirse que una finca rústica permite vivienda, eventos, restauración, turismo o subdivisión sin más: hay que verificar planeamiento, disciplina territorial, agua, servidumbres, caminos y títulos sectoriales.

## Forma, duración y renta del contrato rústico

El contrato rústico debe constar por escrito; si se arrienda una explotación, el inventario no es opcional en la práctica, y las partes pueden exigirse documento público e inventario de maquinaria, ganado, plantaciones, estado y elementos de producción. La duración mínima es de 5 años; cualquier cláusula inferior es nula. El preaviso del arrendador para recuperar la finca al final del plazo es de 1 año; si no se preavisa, hay prórroga de 5 años más. La renta es libre en dinero; si se pacta en especie, debe convertirse a dinero. La actualización solo procede si se pacta; en defecto de pacto se fija el Índice de Garantía de Competitividad (IGC). El pago sigue lo pactado; en defecto, se atiende a usos y vencidos y recibo.

## Explotación, mejoras, seguros y transmisión

El arrendatario puede determinar el tipo de cultivo, con la obligación de devolver la finca conforme al contrato y las reglas de mejoras pactadas; el arrendador asume obras y reparaciones necesarias para conservar la finca apta para el aprovechamiento pactado; el arrendatario asume las reparaciones, mejoras e inversiones propias del empresario agrario en su actividad normal; la modernización de regadío, obligaciones administrativas y fuerza mayor requieren lectura específica de la LAR y del contrato; puede contratarse seguro de producción, documentando quién lo paga, qué cubre y cómo se reparte la prima. Conviene definir en el contrato agua, pozo, comunidad de regantes, electricidad, seguros, poda, fitosanitarios, certificaciones, acceso, mantenimiento de muros y responsabilidad por incendios o daños a terceros; una finca con pozo no equivale a un derecho ilimitado de agua, por lo que debe comprobarse la concesión, autorización y estado de las instalaciones.

En transmisión, el arrendamiento rústico puede sobrevivir a la venta y genera derechos de adquisición preferente que afectan a la operación: la cesión/subarriendo exige consentimiento expreso, con la totalidad de finca/explotación, plazo restante y renta no superior; existe una excepción familiar que puede no requerir consentimiento a favor de cónyuge o descendiente, con notificación fehaciente en plazo legal; el arrendatario tiene derechos preferentes en transmisiones onerosas en los términos del art. 22 LAR (tanteo/retracto); la escritura de venta debe expresar si la finca está arrendada, para poder inscribirla. La terminación se produce por expiración, pérdida, expropiación, mutuo acuerdo, desistimiento, muerte, resolución del derecho o incumplimiento. Para el intermediario: no publicar suelo rústico sin preguntar si está arrendado; solicitar contrato, inventario, recibos, arrendatario, cultivos, ayudas y comunicaciones de preaviso; un comprador debe conocer qué posesión recibe y cuándo; los derechos de arrendatario rústico y el retracto de colindantes pueden coexistir, por lo que se debe derivar antes de firmar arras.

También existen la aparcería (el titular cede temporalmente uso, disfrute o elementos de la explotación y las partes se reparten productos en proporción a sus aportaciones, rigiendo en defecto de pacto las normas de aparcería y, supletoriamente, determinadas normas de arrendamientos rústicos; si el aparcero aporta solo trabajo personal y capital muy limitado, pueden activarse reglas laborales y de Seguridad Social) y la integración de derechos de producción y ayudas de la Política Agrícola Común (PAC) en el contenido del contrato, que exige analizar agricultor activo, explotación, SIGPAC, cesión de derechos y solicitud de la campaña concreta. En Mallorca, en fincas con olivar, almendro, viña, ganadería o regadío conviene preguntar siempre por ayudas, arrendamientos previos, comunidades de regantes y contratos de suministro.`,
      easyExplanation:
        "Si lo que de verdad se alquila es una finca para cultivarla o criar animales (aunque tenga una casa dentro), no se aplica la ley normal de alquileres de vivienda, sino una ley distinta para el campo (la LAR), con su propia duración mínima (5 años) y sus propias reglas sobre quién arregla qué. Tener un pozo en la finca no significa tener derecho ilimitado a usar el agua: hay que comprobar los permisos. Y si se vende una finca arrendada, el comprador hereda ese contrato y hay que avisar con tiempo al inquilino agrícola.",
      balearExample:
        "Se arrienda una finca con almendros, un almacén y una casa en Porreres para que un agricultor gestione la producción durante seis años; existe además una comunidad de regantes y derechos de ayuda PAC asociados. Como la finalidad principal es agraria, se aplica la LAR: el contrato debe ser escrito, con inventario de la explotación y duración mínima de 5 años; la casa no convierte el contrato en vivienda mientras siga siendo accesoria a la explotación. Si el propietario vende la finca al año siguiente sin mencionar el contrato, la escritura debe expresar si está arrendada y deben revisarse los derechos de adquisición preferente antes de comercializar.",
      keyConcepts: [
        "Ley 49/2003 de Arrendamientos Rústicos (LAR)",
        "finalidad agraria principal",
        "duración mínima 5 años",
        "inventario de explotación",
        "Índice de Garantía de Competitividad (IGC)",
        "tanteo/retracto rústico (art. 22 LAR)",
        "aparcería",
        "PAC y SIGPAC"
      ],
      frequentErrors: [
        "Asumir que una finca rústica con casa permite uso residencial, eventos o turismo sin verificar planeamiento y títulos sectoriales.",
        "Pactar una duración inferior a 5 años en un contrato rústico (la cláusula es nula).",
        "Confundir tener un pozo con tener derecho ilimitado al agua.",
        "No comprobar si la finca está arrendada antes de publicitar su venta.",
        "Omitir el inventario de explotación al arrendar una finca completa."
      ],
      examples: [
        {
          id: "m03-l7-ex1",
          title: "Finca con vivienda accesoria",
          scenario: "Casa dentro de una finca cuya explotación agrícola es la actividad principal.",
          application: "Se aplica la LAR completa; la vivienda es accesoria y no genera régimen de vivienda habitual.",
          isBalearContext: false
        },
        {
          id: "m03-l7-ex2",
          title: "Venta de finca arrendada",
          scenario: "Un comprador de suelo rústico en Sant Llorenç des Cardassar no pregunta si está arrendado.",
          application: "Riesgo de adquirir con un arrendamiento rústico vigente que sobrevive a la venta; debe revisarse antes de firmar arras.",
          isBalearContext: true
        },
        {
          id: "m03-l7-ex3",
          title: "Aparcería en olivar",
          scenario: "Un propietario de olivar en Sóller cede la explotación a cambio de repartir la cosecha.",
          application: "Se aplican las normas de aparcería y, supletoriamente, las de arrendamientos rústicos.",
          isBalearContext: true
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m03-e1",
      moduleId: "m03",
      type: "case",
      question:
        "Una propietaria de Palma pide un \"contrato de temporada renovable\" de 11 meses para una enfermera con plaza fija en Son Espases.",
      expectedAnswer: "El contrato debe clasificarse como vivienda habitual, no de temporada.",
      explanation:
        "La causa determinante es la necesidad de ocupación permanente (art. 2 LAU), no la duración pactada ni el nombre del contrato; procede aplicar prórrogas legales, fianza de 1 mensualidad y régimen de actualización de vivienda.",
      difficulty: "basic"
    },
    {
      id: "m03-e2",
      moduleId: "m03",
      type: "calculation",
      question:
        "Un contrato de vivienda firmado el 15-4-2024 tiene una renta de 1.100 EUR y cláusula \"se actualizará conforme al IPC\". En abril de 2026 el arrendador pide aplicar un IPC del 3,2%. Calcula la renta actualizada correctamente.",
      expectedAnswer: "1.127,28 EUR (1.100 × 0,0248 = 27,28 EUR de incremento).",
      explanation:
        "El contrato se firmó tras la Ley 12/2023, por lo que el límite de referencia aplicable es el IRAV (2,48% en el ejemplo), no el IPC mencionado en el texto contractual; la nueva renta se exige desde el mes siguiente a la notificación.",
      difficulty: "medium"
    },
    {
      id: "m03-e3",
      moduleId: "m03",
      type: "decision",
      question:
        "Un propietario en un edificio plurifamiliar de Alcúdia quiere alquilar su piso por semanas a turistas, sin título turístico ni acuerdo comunitario, y afirma que \"en los portales aparece como temporada\". ¿Publicitas el anuncio?",
      expectedAnswer: "No; se detiene la publicación hasta completar el expediente.",
      explanation:
        "La denominación \"temporada\" no sustituye el análisis de finalidad real; si se ofrece para vacaciones, entra la normativa turística sectorial y, desde abril de 2025, requiere acuerdo de comunidad de 3/5 (art. 17.12 LPH) además de título habilitante y registro estatal.",
      difficulty: "medium"
    },
    {
      id: "m03-e4",
      moduleId: "m03",
      type: "comprehension",
      question:
        "¿Quién paga la comisión de gestión y formalización de un contrato de arrendamiento de vivienda habitual conforme a la LAU?",
      expectedAnswer: "El arrendador.",
      explanation:
        "El art. 20.1 LAU atribuye estos gastos al arrendador en el arrendamiento de vivienda; cobrárselos al inquilino es una respuesta incorrecta a efectos de examen.",
      difficulty: "basic"
    },
    {
      id: "m03-e5",
      moduleId: "m03",
      type: "case",
      question:
        "Se arrienda una finca con almendros, almacén y casa en Porreres para que un agricultor gestione la producción durante seis años; el propietario pretende vender al año siguiente sin mencionar el contrato. Identifica el régimen aplicable y los riesgos de la venta.",
      expectedAnswer:
        "Se aplica la LAR (finalidad agraria principal); la escritura de venta debe expresar si la finca está arrendada, y deben revisarse los derechos de adquisición preferente antes de comercializar.",
      explanation:
        "El criterio decisivo es el aprovechamiento económico principal, no la existencia de una casa; el arrendamiento rústico puede sobrevivir a la venta y genera derechos de tanteo/retracto (art. 22 LAR).",
      difficulty: "advanced"
    },
    {
      id: "m03-e6",
      moduleId: "m03",
      type: "calculation",
      question:
        "¿Cuántas mensualidades de fianza legal corresponden a un arrendamiento de vivienda y cuántas a un arrendamiento de uso distinto (local)?",
      expectedAnswer: "1 mensualidad en vivienda; 2 mensualidades en uso distinto.",
      explanation:
        "Regla general de fianza legal de la LAU, obligatoria en ambos casos, con depósito ante el IBAVI en Illes Balears.",
      difficulty: "basic"
    },
    {
      id: "m03-e7",
      moduleId: "m03",
      type: "decision",
      question:
        "Un inquilino de un piso en Palma deja de pagar la renta durante tres meses. El propietario quiere que el agente corte los suministros para forzar la salida. ¿Qué haces?",
      expectedAnswer:
        "Rechazar la actuación de hecho; documentar el impago y derivar a requerimiento formal, negociación previa (MASC) y análisis procesal jurídico.",
      explanation:
        "Cortar suministros o cambiar cerraduras es una vía de hecho prohibida; desde abril de 2025 además existe el requisito de negociación previa (Ley Orgánica 1/2025, arts. 5 y 10) antes de demandar.",
      difficulty: "medium"
    },
    {
      id: "m03-e8",
      moduleId: "m03",
      type: "comprehension",
      question:
        "¿El número del Registro Único de Arrendamientos (RD 1312/2024) equivale a tener licencia turística?",
      expectedAnswer: "No.",
      explanation:
        "El número estatal es un requisito adicional para plataformas de corta duración; no sustituye la normativa turística balear, municipal o comunitaria ni convierte un alquiler en turístico.",
      difficulty: "basic"
    }
  ],
  quizQuestions: [
    {
      id: "m03-q1",
      question: "¿Qué determina si un contrato se clasifica como vivienda habitual conforme a la LAU?",
      options: [
        "El título del contrato",
        "La finalidad real y permanente del uso",
        "El número de meses pactado",
        "Que el inquilino pague mensualmente"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El art. 2 LAU exige que la edificación se destine primordialmente a satisfacer la necesidad permanente de vivienda; el título o la duración no cambian la naturaleza jurídica.",
      sourceModuleId: "m03",
      legalReference: "Art. 2 LAU",
      difficulty: "basic"
    },
    {
      id: "m03-q2",
      question: "Un contrato de vivienda habitual firmado por un arrendador persona física tiene una prórroga obligatoria mínima de:",
      options: ["3 años", "5 años", "7 años", "10 años"],
      correctAnswerIndex: 1,
      explanation:
        "Si el arrendador es persona jurídica, la prórroga obligatoria es de hasta 7 años; si es persona física, hasta 5 años.",
      sourceModuleId: "m03",
      legalReference: "LAU, régimen vigente desde el 6-3-2019",
      difficulty: "basic"
    },
    {
      id: "m03-q3",
      question: "¿Ante quién debe registrarse y depositarse la fianza legal de un arrendamiento en Illes Balears?",
      options: ["Ante el Ayuntamiento", "Ante el IBAVI", "Ante la Agencia Tributaria", "No es obligatorio depositarla"],
      correctAnswerIndex: 1,
      explanation:
        "El IBAVI (Institut Balear de l'Habitatge) gestiona el registro y depósito de fianzas de alquiler en Illes Balears, con 30 días hábiles desde la formalización.",
      sourceModuleId: "m03",
      legalReference: "Sede CAIB / IBAVI, Código SIA 208139",
      difficulty: "basic"
    },
    {
      id: "m03-q4",
      question: "¿Qué índice se aplica como límite de referencia para actualizar la renta en un contrato de vivienda firmado el 26-5-2023 o después?",
      options: ["El IPC general", "El IRAV", "El Euríbor", "El IGC"],
      correctAnswerIndex: 1,
      explanation:
        "La Ley 12/2023 introdujo el IRAV (Índice de Referencia de Arrendamientos de Vivienda) como límite de actualización para contratos posteriores a esa fecha.",
      sourceModuleId: "m03",
      legalReference: "Ley 12/2023, arts. relativos a actualización de renta",
      difficulty: "medium"
    },
    {
      id: "m03-q5",
      question: "En un contrato de vivienda con renta de 1.200 EUR e IRAV del 2,48%, ¿cuál es la nueva renta actualizada?",
      options: ["1.200,00 EUR", "1.212,48 EUR", "1.229,76 EUR", "1.248,00 EUR"],
      correctAnswerIndex: 2,
      explanation:
        "1.200 × 0,0248 = 29,76 EUR de incremento; nueva renta 1.229,76 EUR, exigible desde el mes siguiente a la notificación.",
      sourceModuleId: "m03",
      legalReference: "Ejemplo de cálculo del módulo (Ficha 10)",
      difficulty: "medium"
    },
    {
      id: "m03-q6",
      question: "¿Cuántas mensualidades de fianza legal corresponden a un arrendamiento de uso distinto de vivienda (por ejemplo, un local)?",
      options: ["1 mensualidad", "2 mensualidades", "3 mensualidades", "No se exige fianza"],
      correctAnswerIndex: 1,
      explanation:
        "La fianza legal en uso distinto de vivienda es de dos mensualidades, frente a una mensualidad en vivienda habitual.",
      sourceModuleId: "m03",
      legalReference: "LAU, régimen de fianzas",
      difficulty: "basic"
    },
    {
      id: "m03-q7",
      question: "¿Quién asume, según la LAU, los gastos de gestión inmobiliaria y formalización del contrato en un arrendamiento de vivienda?",
      options: ["El arrendatario", "El arrendador", "Se reparten al 50%", "La comunidad de propietarios"],
      correctAnswerIndex: 1,
      explanation:
        "El art. 20.1 LAU atribuye estos gastos al arrendador en vivienda; cobrárselos al inquilino es incorrecto.",
      sourceModuleId: "m03",
      legalReference: "Art. 20.1 LAU",
      difficulty: "medium"
    },
    {
      id: "m03-q8",
      question:
        "¿Qué plazo tiene el arrendatario para ejercer el tanteo tras la notificación fehaciente de precio y condiciones esenciales de venta de la vivienda arrendada?",
      options: ["15 días naturales", "30 días naturales", "60 días naturales", "180 días naturales"],
      correctAnswerIndex: 1,
      explanation:
        "El tanteo debe ejercerse en 30 días naturales desde la notificación fehaciente; la notificación de venta caduca a los 180 días.",
      sourceModuleId: "m03",
      legalReference: "LAU, régimen de tanteo y retracto",
      difficulty: "medium"
    },
    {
      id: "m03-q9",
      question:
        "Desde el 3 de abril de 2025, ¿qué mayoría comunitaria se requiere para aprobar, limitar o prohibir la actividad turística en un edificio en propiedad horizontal?",
      options: ["Unanimidad", "Mayoría simple", "3/5 de propietarios y cuotas", "No requiere acuerdo comunitario"],
      correctAnswerIndex: 2,
      explanation:
        "El art. 17.12 LPH exige 3/5 del total de propietarios y cuotas para regular la actividad turística del art. 5.e LAU.",
      sourceModuleId: "m03",
      legalReference: "Art. 17.12 LPH; Ley Orgánica 1/2025",
      difficulty: "advanced"
    },
    {
      id: "m03-q10",
      question: "¿Qué régimen se aplica a una finca con casa cuando la finalidad principal es la explotación agrícola?",
      options: [
        "LAU de vivienda habitual",
        "LAU de uso distinto",
        "Ley 49/2003 de Arrendamientos Rústicos (LAR)",
        "Código Civil sin ley especial"
      ],
      correctAnswerIndex: 2,
      explanation:
        "La LAR se aplica cuando predomina el aprovechamiento agrícola, ganadero o forestal; la vivienda es accesoria a la explotación.",
      sourceModuleId: "m03",
      legalReference: "Ley 49/2003 LAR; art. 5 LAU (exclusión)",
      difficulty: "medium"
    },
    {
      id: "m03-q11",
      question: "¿Cuál es la duración mínima de un contrato de arrendamiento rústico conforme a la LAR?",
      options: ["1 año", "3 años", "5 años", "10 años"],
      correctAnswerIndex: 2,
      explanation: "La duración mínima es de 5 años; cualquier cláusula que fije un plazo inferior es nula.",
      sourceModuleId: "m03",
      legalReference: "Ley 49/2003 LAR",
      difficulty: "medium"
    },
    {
      id: "m03-q12",
      question: "¿Desde qué fecha existe con carácter general el requisito de actividad negociadora previa (MASC) antes de ciertas demandas civiles?",
      options: ["Enero de 2023", "Abril de 2025", "Julio de 2025", "Enero de 2026"],
      correctAnswerIndex: 1,
      explanation:
        "La Ley Orgánica 1/2025 de medidas en materia de eficiencia del Servicio Público de Justicia introduce este requisito desde abril de 2025 (arts. 5 y 10), con excepciones legales.",
      sourceModuleId: "m03",
      legalReference: "Ley Orgánica 1/2025, arts. 5 y 10",
      difficulty: "advanced"
    },
    {
      id: "m03-q13",
      question: "¿Qué establece el Real Decreto 1312/2024 respecto a los alquileres de corta duración?",
      options: [
        "Fija la renta máxima",
        "Crea el Registro Único de Arrendamientos y la Ventanilla Digital",
        "Sustituye la licencia turística autonómica",
        "Regula solo los arrendamientos rústicos"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El RD 1312/2024, en vigor desde el 2-1-2025 con efectos desde el 1-7-2025, crea el registro único estatal y la ventanilla digital, pero no sustituye la normativa turística balear.",
      sourceModuleId: "m03",
      legalReference: "Real Decreto 1312/2024",
      difficulty: "medium"
    },
    {
      id: "m03-q14",
      question: "¿Qué situación permite al arrendador persona física recuperar la vivienda arrendada por necesidad, conforme a la LAU?",
      options: [
        "En cualquier momento sin condiciones",
        "Solo tras el primer año, si consta expresamente en el contrato, con preaviso mínimo de 2 meses",
        "Solo si el arrendador es persona jurídica",
        "Nunca, la LAU no lo permite"
      ],
      correctAnswerIndex: 1,
      explanation:
        "La necesidad del arrendador (art. 9.3 LAU) exige que sea persona física, que se haya pactado expresamente desde la firma, que haya transcurrido el primer año, y un preaviso mínimo de 2 meses.",
      sourceModuleId: "m03",
      legalReference: "Art. 9.3 LAU",
      difficulty: "medium"
    },
    {
      id: "m03-q15",
      question: "¿Qué mensualidades de garantía adicional como máximo puede exigirse en un arrendamiento de vivienda habitual mientras dure el periodo protegido?",
      options: ["1 mensualidad", "2 mensualidades", "4 mensualidades", "Sin límite, se pacta libremente"],
      correctAnswerIndex: 1,
      explanation:
        "La garantía adicional en vivienda habitual tiene un máximo de 2 mensualidades mientras dure el periodo protegido de 5/7 años; en uso distinto hay libertad de pactos con control de abusividad.",
      sourceModuleId: "m03",
      legalReference: "LAU, régimen de garantías adicionales",
      difficulty: "medium"
    },
    {
      id: "m03-q16",
      question: "¿Qué diferencia principal existe entre un arrendamiento de temporada y una vivienda turística en Illes Balears?",
      options: [
        "No hay diferencia, son lo mismo",
        "La temporada exige causa temporal real y se rige por el art. 3 LAU; la vivienda turística queda fuera de la LAU y se rige por normativa turística sectorial",
        "La vivienda turística siempre es más barata",
        "La temporada no requiere contrato escrito"
      ],
      correctAnswerIndex: 1,
      explanation: "El elemento determinante es la finalidad y el marco sectorial aplicable, no la duración del contrato.",
      sourceModuleId: "m03",
      legalReference: "Art. 3 LAU; art. 5.e LAU (exclusión turística)",
      difficulty: "medium"
    },
    {
      id: "m03-q17",
      question: "¿Qué organismo gestiona las plazas turísticas en el ámbito de Mallorca según el módulo?",
      options: [
        "El IBAVI",
        "El Consorci Borsa d'Allotjaments Turístics del Consell de Mallorca",
        "La Agencia Tributaria de las Illes Balears (ATIB)",
        "El Registro de la Propiedad"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El Consorci Borsa d'Allotjaments Turístics del Consell de Mallorca gestiona las plazas turísticas insulares; el IBAVI gestiona fianzas de alquiler, no plazas turísticas.",
      sourceModuleId: "m03",
      legalReference: "Ficha 22 del módulo",
      difficulty: "medium"
    },
    {
      id: "m03-q18",
      question: "¿Qué régimen fiscal aplica, con carácter general, al alquiler de vivienda destinado exclusivamente a ese uso?",
      options: ["Sujeto a IVA al tipo general", "Exento de IVA", "Sujeto a IVA reducido", "Sujeto a ITP siempre"],
      correctAnswerIndex: 1,
      explanation:
        "El alquiler de vivienda está exento de IVA si se destina exclusivamente a vivienda; el alquiler de local normalmente sí está sujeto a IVA.",
      sourceModuleId: "m03",
      legalReference: "Ficha 27 del módulo",
      difficulty: "medium"
    }
  ]
};

export const m03Glossary: GlossaryItem[] = [
  {
    id: "g-m03-irav",
    term: "IRAV (Índice de Referencia de Arrendamientos de Vivienda)",
    definition:
      "Índice estatal publicado por el INE que opera como límite de referencia para la actualización de renta en contratos de vivienda firmados desde el 26-5-2023, conforme a la Ley 12/2023.",
    easyDefinition:
      "El número oficial que marca cuánto como máximo se puede subir el alquiler cada año en los contratos más recientes.",
    relatedModuleId: "m03"
  },
  {
    id: "g-m03-ibavi",
    term: "IBAVI (Institut Balear de l'Habitatge)",
    definition:
      "Organismo de la Comunidad Autónoma de las Illes Balears competente para el registro y depósito de fianzas de arrendamiento urbano, gestionado a través de la Sede CAIB (Código SIA 208139).",
    easyDefinition: "La oficina balear donde el propietario tiene que depositar obligatoriamente la fianza del alquiler.",
    relatedModuleId: "m03",
    balearContext:
      "Trámite obligatorio en Illes Balears, con 30 días hábiles desde la formalización y entrada en vigor del contrato."
  },
  {
    id: "g-m03-masc",
    term: "MASC (Medios Adecuados de Solución de Controversias)",
    definition:
      "Requisito de actividad negociadora previa, con el mismo objeto que el litigio y debidamente documentada, exigido con carácter general en el orden civil desde abril de 2025 antes de ciertas demandas, conforme a los arts. 5 y 10 de la Ley Orgánica 1/2025.",
    easyDefinition:
      "Paso obligatorio de intentar negociar o mediar antes de poder demandar a alguien, salvo excepciones legales.",
    relatedModuleId: "m03"
  },
  {
    id: "g-m03-zona-tensionada",
    term: "Zona de mercado tensionado",
    definition:
      "Área declarada oficialmente por la administración competente conforme a la Ley 12/2023, en la que pueden aplicarse límites a la renta inicial (por ejemplo, referencia a la última renta vigente en los últimos cinco años) y reglas especiales para grandes tenedores.",
    easyDefinition:
      "Zona donde, por declaración oficial, hay topes especiales al precio del alquiler; no se presupone por el nombre del municipio ni por percepción de precios altos.",
    relatedModuleId: "m03"
  },
  {
    id: "g-m03-registro-unico",
    term: "Registro Único de Arrendamientos",
    definition:
      "Registro estatal creado por el Real Decreto 1312/2024, en vigor desde el 2-1-2025 con efectos desde el 1-7-2025, exigible para servicios de alquiler de corta duración anunciados en plataformas en línea, tramitado ante el Registro de la Propiedad o de Bienes Muebles competente.",
    easyDefinition: "Número obligatorio para anunciar alquileres cortos en portales online; no es una licencia turística.",
    relatedModuleId: "m03",
    balearContext:
      "En Mallorca no sustituye la licencia turística, la zonificación municipal ni el acuerdo comunitario de la propiedad horizontal."
  },
  {
    id: "g-m03-aparceria",
    term: "Aparcería",
    definition:
      "Contrato agrario en el que el titular cede temporalmente el uso, disfrute o elementos de una explotación, repartiéndose las partes los productos en proporción a sus aportaciones, regido en defecto de pacto por las normas de aparcería y, supletoriamente, por determinadas normas de arrendamientos rústicos.",
    easyDefinition:
      "Acuerdo en el que el dueño de una finca y quien la trabaja se reparten la cosecha en vez de pagar un alquiler fijo.",
    relatedModuleId: "m03"
  }
];

export const m03Alerts: string[] = [
  "MASC obligatorio desde abril de 2025: con carácter general en el orden civil, existe el requisito de actividad negociadora previa antes de ciertas demandas (Ley Orgánica 1/2025, arts. 5 y 10), con excepciones legales; afecta directamente a la gestión de impagos y desahucios.",
  "Acuerdo comunitario para actividad turística desde el 3 de abril de 2025: en propiedad horizontal, iniciar la actividad turística del art. 5.e LAU exige aprobación expresa de 3/5 de propietarios y cuotas (art. 17.12 LPH); las actividades iniciadas antes de la LO 1/2025 tienen régimen transitorio propio, sin efectos presumidos sin revisión.",
  "Registro Único de Arrendamientos y Ventanilla Digital: el Real Decreto 1312/2024 entró en vigor el 2 de enero de 2025 y desplegó efectos desde el 1 de julio de 2025 para alquileres de corta duración en plataformas; las plataformas pueden recibir órdenes de retirada o inhabilitación de anuncios sin número válido.",
  "Reforma de zonas tensionadas y actualización de renta (Ley 12/2023, vigente desde 26-5-2023): introduce el IRAV como límite de referencia de actualización y las reglas de zona de mercado tensionado; también modificó la reducción de rendimientos netos en IRPF para nuevos contratos de vivienda.",
  "Advertencia expresa del propio módulo: el documento formativo fue revisado a 4 de julio de 2026 y advierte que no incorpora ningún límite extraordinario de 2026 que no pueda verificarse en el BOE; para cualquier revisión de renta debe utilizarse la norma vigente y el índice publicado a la fecha del aniversario, verificando siempre el dato concreto en fuente oficial antes de asesorar en una operación real."
];
