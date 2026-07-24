import type { Module, GlossaryItem } from "@/lib/types";

export const m18Module: Module = {
  id: "m18",
  code: "M18",
  title: "Prevención del Blanqueo de Capitales y FT",
  order: 18,
  description: "Ley 10/2010, RD 304/2014, KYC, titular real, SEPBLAC y operaciones sospechosas.",
  estimatedMinutes: 55,
  difficulty: "advanced",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m18-l1",
      moduleId: "m18",
      title: "Perímetro, sujeto obligado y marco normativo de la PBC/FT",
      order: 1,
      summary: `Define qué es la prevención del blanqueo de capitales y de la financiación del terrorismo (PBC/FT), por qué el agente inmobiliario es sujeto obligado, el marco legal aplicable y el modelo basado en riesgo que sustenta todo el sistema.`,
      content: `La prevención del blanqueo de capitales y de la financiación del terrorismo (PBC/FT) no convierte al agente inmobiliario en policía, fiscal o analista financiero. Le exige, en cambio, comprender quién es el cliente, para quién actúa, qué operación pretende, qué fondos utiliza y si el conjunto resulta coherente. El objetivo profesional es impedir que el mercado inmobiliario se utilice para introducir, ocultar, transformar o disfrutar capitales de origen delictivo, o para canalizar recursos destinados al terrorismo. No basta con "pedir papeles": hay que poder explicar por qué los papeles permiten entender la operación.

## El agente inmobiliario como sujeto obligado

La Ley 10/2010, de 28 de abril, de prevención del blanqueo de capitales y de la financiación del terrorismo, incluye como sujetos obligados a promotores y a quienes ejercen profesionalmente actividades de agencia, comisión o intermediación en compraventas de inmuebles. También abarca los arrendamientos de inmuebles que impliquen una renta total anual igual o superior a 120.000 euros, o una renta mensual igual o superior a 10.000 euros. La sujeción nace por la actividad efectiva que se desarrolla, no por pertenecer o no a un colegio profesional. En una agencia pequeña, la obligación recae sobre la persona física o jurídica que desarrolla realmente la intermediación: delegar una visita, trabajar con un colaborador o externalizar el CRM no desplaza automáticamente la responsabilidad. No es correcto afirmar que la agencia solo "pone en contacto" y que por ello queda fuera del perímetro: la intermediación profesional en compraventas está expresamente incluida.

## Marco normativo que debe manejarse

La arquitectura normativa combina la Ley 10/2010, su Reglamento aprobado por Real Decreto 304/2014, la regulación sobre titularidad real (Real Decreto 609/2023, de 11 de julio, del Registro Central de Titularidades Reales) y las directrices e instrucciones del SEPBLAC. Además, la limitación de pagos en efectivo (Ley 7/2012, artículo 7, modificado por la Ley 11/2021) tiene una base tributaria propia y no debe confundirse con la diligencia debida PBC/FT. A partir del 10 de julio de 2027 operará con carácter general el Reglamento (UE) 2024/1624, con aplicación directa y ajustes transitorios: el marco europeo no elimina de un día para otro la necesidad de aplicar el marco español vigente; en 2026 debe cumplirse la Ley 10/2010 y su Reglamento. La respuesta de examen sólida distingue tres capas: (1) obligaciones de diligencia y comunicación; (2) control interno y archivo; y (3) reglas sobre pagos, sanciones, privacidad y autoridades. Esta separación también evita que la agencia use una plantilla fiscal para resolver un riesgo PBC/FT.

## Modelo basado en riesgo

El modelo legal no exige aplicar la misma intensidad a todos los clientes. Exige aplicar las medidas de diligencia debida y graduar la profundidad de comprobación sobre titular real, propósito y seguimiento conforme al riesgo. La clave es poder justificar por qué una operación es ordinaria, elevada o inaceptable. El riesgo nunca se reduce solo porque el cliente tenga buena apariencia, nacionalidad conocida o sea recomendado por alguien. Un comprador local que financia con un banco español puede requerir un expediente más simple que una estructura societaria de varias jurisdicciones, pero ambos deben estar identificados y entendidos. Un perfil bajo no autoriza a no preguntar; un perfil alto no significa que exista delito.

## Mapa de riesgos de Mallorca

Mallorca combina mercado internacional, segunda residencia, patrimonio familiar, sociedades extranjeras, inmuebles de alto valor, inversión turística, rústico y operaciones a distancia. Ninguna de estas características es ilícita por sí sola; sí elevan la necesidad de entender el origen de los fondos, la estructura de control, el propósito y la trazabilidad del pago. La insularidad y el valor de activos singulares hacen especialmente relevante no basar el expediente en una conversación informal. La práctica local debe vigilar estructuras con sociedades de distintas jurisdicciones, compras rápidas con liquidez no explicada, pagos desde cuentas no vinculadas, descuentos o sobreprecios sin lógica, representantes que evitan identificar al titular real, y compra de fincas rústicas con un proyecto económico incoherente. La conducta, la estructura y la falta de coherencia importan más que el pasaporte: un enfoque discriminatorio por nacionalidad es ilegal y además detecta mal el riesgo real.

## Gobierno de PBC/FT y manual de admisión

El cumplimiento eficaz empieza por asignar responsabilidades. El órgano de administración o el profesional titular debe aprobar políticas, recursos y una política de admisión de clientes. Las tareas pueden repartirse entre comerciales, coordinación, dirección y asesor externo, pero la agencia debe saber quién valida identidad, quién revisa alertas, quién decide abstenerse y quién conserva la evidencia. El comercial no debe "resolver" una alerta para cerrar una reserva: su función es recopilar y escalar; la decisión debe quedar documentada. La Ley exige políticas y procedimientos escritos y una política expresa de admisión de clientes que distinga clientes aceptables, aceptables con medidas reforzadas y no aceptables por falta de identificación o explicación suficiente. Un manual útil baja a frases operativas: "no se recibe efectivo", "no se publica sin identificar titular", "no se tramitan arras con pagador no justificado", "un poder extranjero se revisa antes de comprometer fecha de firma".`,
      easyExplanation: `Si te dedicas profesionalmente a vender, alquilar (por encima de ciertos importes) o intermediar en inmuebles en España, la ley te obliga a comprobar quién es realmente tu cliente, de dónde sale el dinero y si todo tiene sentido económico, antes de cerrar la operación. Cuanto más raro o complejo sea el caso (sociedades extranjeras, pagos de terceros, prisas injustificadas), más preguntas y documentos debes exigir. No se trata de sospechar de todo el mundo, sino de poder explicar por qué aceptaste cada operación.`,
      balearExample: `Una agencia de Palma recibe el encargo de vender un ático de 1,8 millones de euros. El propietario delega toda la gestión en un familiar que dice tener "un poder amplio". Antes de publicar el anuncio, la agencia exige el poder notarial concreto, comprueba que autoriza la venta de ese inmueble en particular y confirma quién cobrará el precio; solo entonces acepta el encargo y documenta la decisión en el expediente.`,
      keyConcepts: [
        `Ley 10/2010 de prevención del blanqueo de capitales y de la financiación del terrorismo`,
        `Real Decreto 304/2014 (Reglamento de la Ley 10/2010)`,
        `Sujeto obligado`,
        `Perímetro de actividad (compraventa e intermediación; arrendamientos ≥120.000€/año o ≥10.000€/mes)`,
        `Enfoque basado en riesgo`,
        `Política de admisión de clientes`,
        `Reglamento (UE) 2024/1624 (aplicable desde el 10 de julio de 2027)`,
        `Gobierno del cumplimiento PBC/FT`
      ],
      frequentErrors: [
        `Creer que "solo poner en contacto" excluye del perímetro de sujeto obligado.`,
        `Confundir la buena apariencia, nacionalidad o recomendación personal con bajo riesgo automático.`,
        `Aplicar un enfoque discriminatorio por nacionalidad en vez de basado en factores objetivos de riesgo.`,
        `Dejar que el comercial cierre o "resuelva" una alerta sin escalarla al responsable designado.`,
        `Anticipar el Reglamento europeo 2024/1624 como si ya fuera exigible antes de su fecha de aplicación (10/07/2027).`
      ],
      examples: [
        {
          id: "m18-l1-ex1",
          title: `Delegación de la intermediación`,
          scenario: `Una pequeña agencia de Manacor externaliza la atención de visitas a un colaborador autónomo.`,
          application: `La obligación de sujeto obligado sigue recayendo en la agencia; debe definir por escrito quién valida identidad y quién conserva el expediente, aunque el colaborador haga las visitas.`,
          isBalearContext: true
        },
        {
          id: "m18-l1-ex2",
          title: `Comprador local con financiación bancaria`,
          scenario: `Un comprador residente en Mallorca financia el 80% del precio con un banco español y aporta el 20% con ahorros propios.`,
          application: `Puede bastar un expediente estándar (medidas normales), siempre que la fuente de la aportación propia quede identificada y sea coherente.`,
          isBalearContext: true
        },
        {
          id: "m18-l1-ex3",
          title: `Renta de alquiler elevada`,
          scenario: `Un piso de temporada en Mallorca se alquila por 12.000 €/mes durante el verano.`,
          application: `Al superar el umbral de 10.000 €/mes, la operación entra en el perímetro de la Ley 10/2010 y exige aplicar diligencia debida al arrendatario.`,
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m18-l2",
      moduleId: "m18",
      title: "Diligencia debida — identidad, representación y titular real",
      order: 2,
      summary: `Explica cómo identificar formalmente a personas físicas y jurídicas, verificar representantes y poderes, y llegar al titular real, incluyendo estructuras complejas, trusts y fiduciarios.`,
      content: `La identificación formal exige comprobar la identidad antes de establecer la relación de negocio o ejecutar operaciones, mediante documentos fehacientes. En una agencia, esto implica identificar al propietario, comprador, arrendador de alto valor, arrendatario de alto valor, representante, apoderado y cualquier persona que actúe por cuenta de otra. Debe conservarse copia conforme al sistema de archivo y asegurarse de que el documento esté vigente y sea coherente con el expediente. No basta fotografiar un pasaporte por WhatsApp sin contexto: hay que saber quién envía el documento, en qué calidad actúa, si coincide con la persona que firma y si existen signos de manipulación. La videollamada puede ayudar a verificar, pero no sustituye la necesidad de un procedimiento documentado. Nunca debe usarse la foto de un documento de un tercero como prueba suficiente de identidad sin relación verificable con el titular y la operación.

## Representantes, poderes y capacidad de actuar

En inmuebles es frecuente que alguien actúe por poder, como administrador, tutor, albacea, representante de heredero o empleado de una sociedad. Identificar al representante no elimina la obligación de identificar a la persona o entidad por cuya cuenta actúa. Debe revisarse la cadena: quién firma, con qué poder, para quién y con qué límites. Un poder amplio no equivale automáticamente a autorización para vender un inmueble concreto o disponer de fondos. En operaciones internacionales, la traducción, apostilla o legalización puede exigir revisión notarial. El agente no califica jurídicamente el poder, pero sí detecta que el expediente no permite avanzar con seguridad y lo deriva. El error clásico es tratar al apoderado como cliente final: el titular real y el propósito siguen siendo necesarios.

## Identificación de personas jurídicas y titular real

Cuando el cliente es una sociedad, el expediente debe explicar su identidad legal, domicilio, actividad, administradores, representación y titularidad real. La sociedad no es un bloque opaco: se debe saber qué hace, de dónde obtiene sus recursos y por qué adquiere o vende el inmueble. Un certificado registral, escritura o documento corporativo puede ser necesario según el caso. El titular real es la persona física por cuya cuenta se establece la relación u operación, o quien en último término posee o controla una persona jurídica o estructura. La agencia debe llegar a personas físicas concretas, no detenerse en una sociedad, fiduciario, administrador profesional o cadena de holdings. La declaración del cliente es importante, pero debe contrastarse con información independiente (Registro Central de Titularidades Reales u otras fuentes habilitadas) cuando el riesgo lo requiera. No se acepta "es una sociedad familiar" como explicación completa: la titularidad y el origen de fondos deben poder documentarse.

## Estructuras complejas, trusts y fiduciarios

Las estructuras fiduciarias, trusts y vehículos de inversión pueden ser legítimos, especialmente en patrimonio internacional. El tratamiento correcto no es rechazarlos automáticamente, sino identificar a las personas relevantes: constituyente, fiduciario, protector, beneficiarios y cualquier persona que ejerza control efectivo, según la estructura. En Mallorca son habituales compradores que usan compañías holding, family offices o trusts. El agente debe pedir una explicación escrita de la estructura, identificar qué entidad firma, qué cuenta paga y qué persona recibe el beneficio económico. Si no se logra, no se puede completar la diligencia. No debe confundirse confidencialidad con opacidad: la privacidad legítima no impide revelar al sujeto obligado la información que exige la ley.

## Propósito y origen de fondos

Conocer el propósito significa entender qué servicio pide el cliente y qué pretende conseguir económicamente. Conocer la índole significa situar la operación dentro de su actividad, patrimonio y perfil: no basta "comprar una casa", hay que distinguir vivienda propia, segunda residencia, inversión de alquiler, sede de actividad, promoción, reventa o adquisición familiar. El origen de fondos explica de dónde procede el dinero concreto usado en la operación (transferencia, préstamo bancario, venta previa, dividendo, herencia, actividad profesional o préstamo intragrupo); el origen de patrimonio explica cómo el cliente acumuló riqueza suficiente para disponer de esos fondos. En riesgo alto, ambos planos deben entenderse. "El banco ya lo ha revisado" no exime a la agencia: puede ser un elemento de contexto, pero no sustituye su propia diligencia ni su expediente.`,
      easyExplanation: `No basta con tener un DNI o pasaporte del cliente: hay que comprobar que la persona que firma es quien dice ser, que si actúa con un poder ese poder realmente le permite hacer lo que va a hacer, y que si hay una sociedad detrás, tú puedes llegar a la persona física real que la controla y se beneficia de la operación. Además, hay que entender de dónde sale el dinero y cómo esa persona llegó a tenerlo, con más detalle cuanto más raro o grande sea el caso.`,
      balearExample: `En Pollença, una sociedad registrada en otra jurisdicción compra una villa de 3,2 millones de euros. El administrador local dice actuar por poder pero se niega a aportar el organigrama alegando "información confidencial". La agencia exige poder suficiente, organigrama hasta personas físicas, declaración y contraste de titular real, y justificación de fondos antes de continuar; si no se aclara, no se completa la diligencia.`,
      keyConcepts: [
        `Identificación formal mediante documentos fehacientes`,
        `Representante y apoderado vs. representado`,
        `Titular real (persona física que posee o controla)`,
        `Registro Central de Titularidades Reales (RD 609/2023)`,
        `Trusts, fiduciarios y estructuras societarias complejas`,
        `Propósito e índole de la relación de negocio`,
        `Origen de fondos vs. origen de patrimonio`
      ],
      frequentErrors: [
        `Tratar al apoderado como cliente final sin identificar al representado ni al titular real.`,
        `Aceptar "es una sociedad familiar" o "es confidencial" como justificación suficiente de titularidad.`,
        `Confiar en una foto de documento de identidad enviada por WhatsApp sin verificación adicional.`,
        `Rechazar automáticamente trusts o estructuras extranjeras en lugar de exigir documentación que las explique.`,
        `No distinguir entre origen de fondos (operación concreta) y origen de patrimonio (riqueza acumulada).`
      ],
      examples: [
        {
          id: "m18-l2-ex1",
          title: `Poder amplio pero insuficiente`,
          scenario: `Un administrador presenta un poder general de representación de una sociedad para "actos de administración y disposición".`,
          application: `La agencia revisa si el poder cubre específicamente la venta del inmueble concreto y la disposición de los fondos, no lo asume por ser "amplio".`,
          isBalearContext: false
        },
        {
          id: "m18-l2-ex2",
          title: `Estructura con family office`,
          scenario: `Un comprador opera a través de un family office con sede en otra jurisdicción.`,
          application: `Se solicita organigrama, identificación de beneficiarios finales y explicación de la fuente de fondos del vehículo inversor.`,
          isBalearContext: false
        },
        {
          id: "m18-l2-ex3",
          title: `Venta previa como origen de fondos`,
          scenario: `Un cliente financia la compra con el importe de la venta de un inmueble anterior.`,
          application: `Se solicita escritura de venta previa y se concilia el importe recibido con el aportado a la nueva operación.`,
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m18-l3",
      moduleId: "m18",
      title: "Riesgos específicos — PEP, geografía, pagos, efectivo, terceros y criptoactivos",
      order: 3,
      summary: `Analiza los factores de riesgo elevado más frecuentes en intermediación inmobiliaria: personas con responsabilidad pública, jurisdicciones de riesgo, límite legal de efectivo, pagos de terceros, criptoactivos e información pública negativa.`,
      content: `La clasificación del riesgo permite decidir qué medidas aplicar, no asignar una etiqueta moral al cliente. Se usan factores relacionados con la persona, la geografía, el producto, el canal, el pago y la conducta. Un sistema útil deja evidencia de qué factor elevó o redujo el riesgo y permite revisarlo cuando cambian hechos relevantes. En una agencia conviene tener tres niveles simples: estándar, reforzado y no admisible por imposibilidad de diligencia. El nivel "reforzado" no significa detener la operación; significa pedir más evidencia, aprobar por una persona distinta al comercial, revisar pagos y monitorizar hitos. No se debe "rebajar" el riesgo para complacer al propietario o al banco: la evidencia debe llevar a la clasificación, no al revés.

## Personas con responsabilidad pública (PEP)

Las personas con responsabilidad pública y sus familiares o allegados requieren medidas reforzadas cuando la normativa lo establece. La condición PEP no equivale a culpabilidad ni impide operar; exige comprender con especial rigor el origen de patrimonio y fondos, obtener la aprobación adecuada y aplicar seguimiento reforzado. La condición puede mantenerse durante un periodo tras el cese según el análisis de riesgo. En Mallorca puede aparecer en operaciones de alto valor, compras internacionales, patrimonio familiar o estructuras societarias. La forma correcta de tratar el caso es discreta, profesional y no estigmatizante: se verifica con fuentes fiables y se solicita documentación adicional proporcional. Nunca debe comunicarse a un cliente que ha sido "marcado" por un sistema como sospechoso; se explica de manera neutral que la normativa exige comprobaciones adicionales.

## Jurisdicciones de riesgo, sanciones y listas

El riesgo geográfico se analiza con fuentes actualizadas: listas de la Unión Europea, Naciones Unidas, autoridades nacionales, decisiones de la Comisión Europea y otras fuentes oficiales relevantes. No basta con usar listas antiguas ni con etiquetar países enteros como prohibidos. Debe distinguirse entre jurisdicción con deficiencias estratégicas, país sujeto a sanciones, país de residencia, país de fondos y país de la estructura. El control debe hacerse antes de aceptar la operación o los pagos, y repetirse si cambian partes o pagos. Un resultado positivo de screening no es una conclusión definitiva: puede ser homónimo; hay que validar identidad con fecha de nacimiento, nacionalidad, cargo, domicilio y documentos. Una simple búsqueda web no sustituye una comprobación fiable y documentada.

## Límite legal de pagos en efectivo

La limitación de pagos en efectivo y la prevención PBC/FT son regímenes distintos que se refuerzan mutuamente. Cuando una de las partes actúa como empresario o profesional, no pueden pagarse en efectivo operaciones por importe igual o superior a 1.000 euros (artículo 7 de la Ley 7/2012, modificado por la Ley 11/2021). El umbral asciende a 10.000 euros si quien paga es una persona física no residente fiscal en España y no actúa como empresario o profesional. Los fraccionamientos se suman. En una agencia inmobiliaria la regla operativa es más estricta: no aceptar efectivo para reservas, arras, honorarios o gastos, salvo que el procedimiento interno, la normativa y la justificación lo permitan claramente. No debe confundirse el límite de efectivo con una "cantidad permitida sin preguntas": incluso un importe bajo puede ser indicador si encaja con otros riesgos.

## Pagos de terceros, canal de pago y criptoactivos

Los pagos de terceros son una de las alertas más frecuentes en intermediación. Pueden tener explicación legítima (padres que ayudan a un hijo, préstamo documentado, sociedad del grupo, apoderado, cuenta conjunta), pero deben identificarse: pagador, vínculo con el comprador, documento que explique la operación y coherencia fiscal/jurídica. Una operación segura tiene una ruta de pago clara: quién paga, desde qué cuenta, a quién, con qué concepto y en qué momento; contrato de arras, escritura, factura de honorarios y cierre deben ser coherentes. La presencia de criptoactivos no convierte una operación en ilegal, pero suele elevar la necesidad de entender el origen y la conversión de los fondos: extractos del proveedor regulado, historial de conversión a moneda fiduciaria, titularidad de cuenta y explicación de adquisición. La agencia no debe recibir ni custodiar criptoactivos para facilitar la operación, ni convertirse en asesor de inversión.

## Información negativa, contraste abierto y protección de datos

La información pública negativa puede servir como indicador, pero debe manejarse con prudencia: una noticia, un procedimiento civil, una mención en redes o un resultado de buscador no prueban por sí solos blanqueo. Sí pueden justificar preguntas adicionales cuando se relacionan con corrupción, fraude, sanciones, insolvencia simulada, delitos financieros o incoherencia patrimonial. El cumplimiento PBC/FT exige tratar datos personales sensibles desde el punto de vista práctico; la base jurídica principal es la obligación legal, no el consentimiento. Eso no autoriza a recopilar todo: se aplica minimización, acceso restringido, seguridad, información al cliente y conservación con plazos específicos. No debe pedirse consentimiento para "blindar" una obligación legal: se explica la obligación y se protegen los datos con controles reales.`,
      easyExplanation: `Hay clientes y operaciones que requieren más atención: personas con cargos públicos importantes, dinero que viene de países con más riesgo de blanqueo, pagos en efectivo por encima de ciertos límites, pagos hechos por alguien distinto al comprador, o pagos con criptomonedas. Ninguno de estos factores es en sí mismo prueba de delito, pero todos requieren que la agencia pida explicaciones claras y las documente antes de seguir adelante con la operación.`,
      balearExample: `Una persona con cargo público relevante en otro país quiere comprar una segunda residencia en Pollensa. Aporta pasaporte, contrato de préstamo de un banco europeo y escritura de venta de un inmueble anterior. Se incomoda porque se le piden comprobaciones adicionales, pero la agencia le explica de forma neutral que la ley exige medidas reforzadas para su condición, verifica coherencia entre préstamo, venta previa y aportación propia, y continúa la operación con seguimiento reforzado.`,
      keyConcepts: [
        `PEP (persona con responsabilidad pública)`,
        `Listas de sanciones y jurisdicciones de riesgo (UE, ONU)`,
        `Límite de pagos en efectivo (art. 7 Ley 7/2012, mod. Ley 11/2021): 1.000€ / 10.000€`,
        `Pagos de terceros`,
        `Trazabilidad bancaria y canal de pago`,
        `Criptoactivos y conversión a moneda fiduciaria`,
        `Información pública negativa (adverse media)`,
        `Minimización de datos y base jurídica de obligación legal`
      ],
      frequentErrors: [
        `Etiquetar países enteros como "prohibidos" en vez de distinguir tipos de riesgo geográfico.`,
        `Confundir el límite legal de efectivo (Ley 7/2012) con el análisis de riesgo PBC/FT completo.`,
        `Normalizar pagos de terceros sin identificar al pagador ni su vínculo con el comprador.`,
        `Usar una valoración comercial o una búsqueda web genérica como prueba de blanqueo.`,
        `Pedir consentimiento de protección de datos en vez de explicar la obligación legal que ampara el tratamiento.`
      ],
      examples: [
        {
          id: "m18-l3-ex1",
          title: `Pago de arras por un familiar no identificado`,
          scenario: `Una pareja compra un piso en Palma por 460.000 euros; las arras de 46.000 euros llegan desde la cuenta de una persona que no figura en la reserva ("un tío que le ayuda").`,
          application: `La agencia identifica al ordenante, pide explicación firmada de su vínculo y documento que refleje préstamo o donación, sin normalizar el pago opaco.`,
          isBalearContext: true
        },
        {
          id: "m18-l3-ex2",
          title: `Fondos de origen cripto`,
          scenario: `Un comprador declara que parte del precio procede de la venta de criptoactivos.`,
          application: `Se solicitan extractos del proveedor regulado, prueba de titularidad y trazabilidad hasta la cuenta bancaria de destino.`,
          isBalearContext: false
        },
        {
          id: "m18-l3-ex3",
          title: `Intento de pago fraccionado en efectivo`,
          scenario: `Un cliente propone pagar la señal en varios pagos en efectivo de 900 euros cada uno.`,
          application: `Se identifica el fraccionamiento como indicador de elusión del límite legal y se documenta el rechazo de la política "sin efectivo".`,
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m18-l4",
      moduleId: "m18",
      title: "Del seguimiento continuo al examen especial y la comunicación al SEPBLAC",
      order: 4,
      summary: `Describe el seguimiento continuo de la relación de negocio, los indicadores inmobiliarios de alerta, el examen especial, la abstención de ejecución, la comunicación por indicio, la prohibición de revelación (tipping off) y la comunicación sistemática.`,
      content: `La diligencia no termina al abrir el expediente. La Ley exige seguimiento continuo para comprobar que operaciones y cambios encajan con el perfil conocido y que documentación e información están actualizadas. En una agencia, los hitos más relevantes son modificación de precio, cambio de comprador, cambio de pagador, nueva sociedad, aparición de representante, financiación diferente, cesión de posición o reventa rápida. El seguimiento debe ser práctico: alertas de CRM, revisión antes de arras, actualización antes de escritura y cierre documentado. Un cambio de pagador o de precio puede modificar por completo el riesgo aunque el cliente sea el mismo.

## Indicadores inmobiliarios de alerta

En inmobiliario, una alerta puede aparecer en precio manifiestamente desalineado, urgencia injustificada, compra sin visita ni interés por características, sucesivos cambios de condiciones, renuncia a financiación racional, sobreprecio sin explicación, interés por pagar a terceros o voluntad de cerrar sin documentación. Ninguno de estos factores prueba delito; su valor está en la combinación y ausencia de explicación. Las señales de estructura incluyen sociedades creadas poco antes de la compra sin actividad aparente, cambios frecuentes de administrador, titular real no identificable, uso de nominados, poderes amplios sin propósito, titular formal que no conoce detalles y cadenas societarias sin función económica visible. También merecen atención las compraventas entre partes vinculadas a valores no justificados. En pagos, debe observarse efectivo, fraccionamientos, terceros sin vínculo, préstamos privados sin condiciones, transferencias múltiples sin concepto, dinero procedente de cuentas de jurisdicciones ajenas al cliente, remesas rápidas, pagos anticipados inusuales y cambios de cuenta justo antes de escritura.

## Coordinación con notaría y banco

La notaría, la entidad financiera y la agencia pueden aplicar sus propias obligaciones PBC/FT. Esa coexistencia no elimina las obligaciones de la agencia. El notario controla forma pública y legalidad; el banco evalúa su relación financiera; la agencia conoce la génesis comercial, las visitas, las negociaciones, los cambios de parte y las reservas: cada uno ve información distinta. "El banco lo acepta" no significa que la agencia pueda ignorar un pagador distinto, un poder opaco o una explicación incoherente.

## Examen especial

El examen especial es el proceso estructurado para analizar hechos u operaciones que presentan indicios o incoherencias. No equivale a acusar al cliente. Es una investigación interna proporcionada: ordenar información, formular hipótesis, pedir aclaraciones legítimas, contrastar fuentes y decidir si existe justificación económica, profesional o de negocio suficiente. Un examen especial bien hecho explica qué alertó, qué se comprobó, qué respondió el cliente, qué fuentes independientes se consultaron, qué contradicciones persisten y qué decisión se tomó. No se redacta "parece sospechoso" sin hechos: se describen señales concretas, respuesta recibida y por qué no resuelven la incoherencia.

## Abstención de ejecución

Cuando una operación se encuentra en el supuesto de comunicación por indicio, la regla es abstenerse de ejecutarla. La Ley prevé excepciones si abstenerse no es posible o puede dificultar la investigación, en cuyo caso puede ejecutarse y comunicarse inmediatamente con justificación. Para una agencia, la prudencia es no emitir reservas, no recibir fondos, no organizar pagos y no facilitar pasos que consoliden la operación mientras se decide. Abstenerse no significa acusar: significa no convertir una alerta fundada en una operación irreversible antes de cumplir el deber legal.

## Comunicación por indicio al SEPBLAC

Tras un examen especial, si existen indicios, certeza o motivos razonables para sospechar relación con blanqueo o financiación del terrorismo, la Ley exige comunicar por iniciativa propia al SEPBLAC incluso las tentativas. La comunicación debe ser objetiva, estructurada y basada en hechos: intervinientes, operación, cronología, documentos, alertas, análisis y motivo por el que no existe justificación suficiente. No hay una cantidad mínima que convierta una operación en comunicable o no comunicable: importa el indicio tras el análisis.

## Prohibición de revelación (tipping off) y comunicación sistemática

La Ley prohíbe revelar al cliente o a terceros que se ha comunicado información al SEPBLAC, o que una operación está siendo o podría ser examinada por posible blanqueo o financiación del terrorismo. La confidencialidad protege la investigación y a las personas que comunican. Debe aplicarse también a chats, CRM, correos internos, comentarios en visitas y conversaciones con colaboradores; el riesgo operativo no suele estar en una carta formal, sino en frases como "el banco ha detectado algo" o "tenemos que informar a prevención". La comunicación sistemática, distinta de la comunicación por indicio, consiste en remitir periódicamente al SEPBLAC determinadas operaciones reguladas; no debe asumirse que todas las categorías de sujetos obligados tienen el mismo catálogo de operaciones o periodicidad, por lo que la agencia debe revisar su obligación concreta en la normativa y en las instrucciones vigentes.`,
      easyExplanation: `Si algo no encaja en una operación (precio raro, prisas sin motivo, pagos de desconocidos, sociedades sin actividad real), la agencia abre una investigación interna breve para entender qué pasa. Si tras analizarlo sigue sin haber explicación razonable, hay que avisar al SEPBLAC (el organismo español que vigila el blanqueo de capitales) y, mientras tanto, no seguir adelante con la operación. Y nunca, bajo ningún concepto, se le puede decir al cliente que se ha avisado o que se está investigando su caso.`,
      balearExample: `Un inversor pide comprar una finca rústica en el interior de Mallorca mediante contrato privado, con parte del precio en efectivo y parte "ajustada" fuera de escritura, diciendo que no le importa pagar una penalización si la agencia cobra rápido y evita pedir documentación bancaria. La agencia rechaza cualquier instrucción de manipular el contrato o canalizar efectivo, abre examen especial, mantiene confidencialidad y, si procede tras el análisis, comunica al SEPBLAC sin dar ninguna pista al cliente de que existe una sospecha.`,
      keyConcepts: [
        `Seguimiento continuo de la relación de negocio`,
        `Indicadores inmobiliarios (precio, urgencia, estructura, fondos)`,
        `Examen especial`,
        `Abstención de ejecución`,
        `Comunicación por indicio al SEPBLAC`,
        `Prohibición de revelación (tipping off)`,
        `Comunicación sistemática`
      ],
      frequentErrors: [
        `Resolver una alerta con una llamada telefónica en vez de un examen especial documentado.`,
        `Comunicar de forma explícita o implícita al cliente que se ha informado al SEPBLAC.`,
        `Ejecutar la operación (firmar reserva, recibir fondos) mientras la alerta está pendiente de resolución.`,
        `Confundir la comunicación por indicio (basada en sospecha concreta) con la comunicación sistemática (periódica y reglada).`,
        `No revisar el seguimiento continuo cuando cambia el pagador, el precio o la estructura societaria a mitad de operación.`
      ],
      examples: [
        {
          id: "m18-l4-ex1",
          title: `Cambio de cuenta antes de escritura`,
          scenario: `Días antes de la firma, el comprador solicita cambiar la cuenta de pago a una entidad distinta y no vinculada previamente.`,
          application: `Se reabre el análisis de riesgo, se identifica el nuevo ordenante y se documenta la justificación antes de aceptar el cambio.`,
          isBalearContext: false
        },
        {
          id: "m18-l4-ex2",
          title: `Petición de cerrar "sin rastro"`,
          scenario: `Un cliente pide dividir el precio entre contrato privado y escritura para reducir impuestos y pagar parte en efectivo.`,
          application: `Se rechaza la instrucción, se abre examen especial y, si persisten los indicios, se procede a abstención y comunicación al SEPBLAC.`,
          isBalearContext: false
        },
        {
          id: "m18-l4-ex3",
          title: `Coordinación con notaría`,
          scenario: `La notaría solicita a la agencia el certificado bancario de origen de fondos antes de la firma.`,
          application: `La agencia coordina el envío de la documentación pertinente sin compartir datos de un examen especial en curso ni revelar sospechas.`,
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m18-l5",
      moduleId: "m18",
      title: "Archivo, control interno, formación, proveedores e inspección",
      order: 5,
      summary: `Detalla las obligaciones de conservación documental, la estructura de control interno, la formación continua, la gestión de proveedores externos y el régimen de inspecciones, infracciones y sanciones.`,
      content: `El cumplimiento se prueba cuando otra persona puede reconstruir la operación sin depender de la memoria del comercial. Roles, registros, controles, formación y archivo deben funcionar incluso si cambia el equipo o el proveedor tecnológico.

## Archivo, conservación y disponibilidad

La Ley exige conservar durante diez años la documentación que formaliza el cumplimiento de obligaciones y, en particular, la identificación, los documentos o registros de operaciones, intervinientes y relaciones de negocio. Tras cinco años, el acceso se limita a control interno y, en su caso, defensa legal. El archivo debe permitir localizar y reconstruir una operación concreta. Para una agencia, un archivo útil vincula cliente, inmueble, encargo, documentos de identidad, titularidad real, origen de fondos, contratos, pagos, alertas y decisiones. El reto no es almacenar más, sino conservar de forma íntegra, segura, indexada y disponible ante requerimiento. Guardar documentos en correos personales o dispositivos sin inventario no es archivo PBC/FT: impide demostrar qué se hizo y cuándo.

## Control interno, representante y órganos

La Ley prevé políticas, procedimientos, manual, formación, órgano de control interno y representante ante el SEPBLAC, con determinadas excepciones reglamentarias en función de la categoría del sujeto obligado. La agencia debe confirmar qué estructura le es exigible y no copiar sin adaptar el modelo de una entidad bancaria. Un diseño proporcional puede centralizar tareas en dirección y asesor externo, pero debe asegurar independencia mínima, recursos, registro de decisiones y capacidad de responder a requerimientos. Un "responsable" sin tiempo, acceso a expedientes ni autoridad real es una designación vacía y un riesgo en inspección.

## Formación de empleados, directivos y agentes

La formación permanente es una obligación práctica: quien capta, agenda, recibe documentos, gestiona reservas o atiende a un cliente debe saber reconocer alertas, proteger información y escalar. No se prueba con una presentación genérica; necesita contenido adaptado al puesto, evaluación, asistencia acreditada y actualización. En inmobiliario deben entrenarse situaciones reales: pagador diferente, sociedad extranjera, propietario ausente, efectivo, urgencia no explicada, cambio de comprador, poder dudoso, cliente PEP, documentación manipulada y mensajes que evitan el tipping off. No debe concentrarse la formación en el responsable PBC/FT: el primer indicador suele verlo quien habla con el cliente.

## Examen externo y revisión independiente

El examen externo valora las medidas y órganos de control interno y propone mejoras. Su aplicabilidad concreta puede variar por categoría y excepción reglamentaria, por lo que la agencia debe confirmar su situación y no asumir que por ser pequeña está dispensada de todo. Incluso cuando exista exención, una revisión independiente periódica es una buena práctica sólida: ¿se identifica titular real?, ¿se justifican riesgos?, ¿se almacenan documentos?, ¿hay trazabilidad de alertas?, ¿el personal sabe escalar?, ¿se conserva privacidad? Un informe de experto que se archiva sin corregir fallos no reduce el riesgo; puede demostrar que la agencia conocía las deficiencias.

## Proveedores, franquicias y externalización

Externalizar software, screening, archivo, formación o apoyo de cumplimiento no elimina la responsabilidad del sujeto obligado. La agencia debe elegir proveedores con garantías de seguridad, confidencialidad, continuidad y capacidad para devolver o eliminar datos. En franquicias o redes, la homogeneidad ayuda, pero cada entidad debe saber qué expediente controla, qué sistema común utiliza y quién puede acceder. El contrato con el proveedor debe contemplar tratamiento de datos, medidas de seguridad, soporte ante requerimientos y prohibición de uso comercial de documentación PBC/FT. No deben cargarse pasaportes ni extractos bancarios en herramientas de IA o nube sin revisar finalidad, residencia de datos, retención y controles contractuales.

## Inspecciones, requerimientos, infracciones y sanciones

El SEPBLAC y las autoridades competentes pueden requerir documentación e información. Una agencia preparada no improvisa al recibir una solicitud: verifica legitimidad, registra entrada, activa al responsable, preserva el expediente, responde dentro de plazo y controla qué se entrega. No debe contestarse desde un correo personal ni reenviarse expedientes sin control: la cadena de custodia también protege a la agencia. El incumplimiento de diligencia debida, titular real, propósito, seguimiento, comunicación, secreto, archivo, manual, control interno o formación puede constituir infracción. Las sanciones pueden afectar a la entidad y a personas responsables, además del daño reputacional, pérdida de socios comerciales y exposición civil o contractual. La sanción no suele venir de una sola errata: llega cuando se detecta ausencia sostenida de sistema, evidencia y supervisión. La prevención eficaz cuesta menos que corregir un expediente débil durante una inspección.

## Transición al Reglamento AMLR de 2027

El Reglamento (UE) 2024/1624 será aplicable con carácter general desde el 10 de julio de 2027. Su objetivo es armonizar normas de PBC/FT en la Unión. Para una agencia inmobiliaria, la preparación razonable no es rehacer el sistema antes de tiempo, sino diseñarlo ya con enfoque de riesgo, evidencia digital, titularidad real, gobernanza y capacidad de actualización. El marco europeo puede traer nuevas reglas técnicas, listas, guías y cambios de detalle; conviene mantener una hoja de ruta 2026-2027: inventario de políticas, brechas, actualización de formación, proveedores, titularidad real de entidades extranjeras e interoperabilidad de archivo. No debe presentarse la normativa europea futura como una obligación española ya aplicable si su fecha de aplicación no ha llegado.`,
      easyExplanation: `La agencia debe guardar toda la documentación de cada operación durante diez años, tener a alguien concreto encargado de vigilar el cumplimiento (con tiempo y autoridad real para hacerlo), formar periódicamente a todo el equipo (no solo al responsable) con casos reales, y elegir con cuidado a los proveedores externos (software, IA) que manejan esos datos. Si el SEPBLAC pide información, hay que responder de forma ordenada y dentro de plazo. Además, ya hay un nuevo reglamento europeo que empezará a aplicarse en julio de 2027, así que conviene ir preparándose sin adelantar obligaciones que aún no son exigibles.`,
      balearExample: `Una agencia con oficinas en Palma e Inca forma parte de una franquicia. Antes de contratar una herramienta de inteligencia artificial para clasificar documentos de clientes, revisa dónde se almacenan los datos, si el proveedor puede eliminar el expediente cuando termine el contrato y si existe un acuerdo de tratamiento de datos que impida el uso comercial de pasaportes y extractos bancarios de sus clientes.`,
      keyConcepts: [
        `Conservación documental (10 años; acceso restringido tras 5 años)`,
        `Control interno y órgano de control`,
        `Representante ante el SEPBLAC`,
        `Formación continua adaptada al puesto`,
        `Examen externo / revisión independiente`,
        `Externalización y proveedores tecnológicos`,
        `Infracciones y sanciones (Ley 10/2010)`,
        `Reglamento (UE) 2024/1624 (AMLR, aplicable desde 10/07/2027)`
      ],
      frequentErrors: [
        `Guardar documentación PBC/FT en correos personales o dispositivos sin inventario.`,
        `Nombrar un responsable de cumplimiento sin tiempo, acceso ni autoridad real.`,
        `Concentrar toda la formación en el responsable PBC/FT y no en quien atiende directamente al cliente.`,
        `Cargar documentos sensibles (pasaportes, extractos) en herramientas de IA sin revisar retención y seguridad contractual.`,
        `Presentar el Reglamento (UE) 2024/1624 como ya exigible en 2026, antes de su fecha de aplicación general.`
      ],
      examples: [
        {
          id: "m18-l5-ex1",
          title: `Requerimiento del SEPBLAC`,
          scenario: `La agencia recibe una solicitud formal de documentación sobre una operación cerrada hace dos años.`,
          application: `Verifica la legitimidad de la solicitud, activa al responsable designado, localiza el expediente archivado y responde dentro del plazo sin usar canales personales.`,
          isBalearContext: false
        },
        {
          id: "m18-l5-ex2",
          title: `Externalización del CRM`,
          scenario: `La agencia contrata un proveedor de CRM en la nube para gestionar los expedientes de clientes.`,
          application: `Firma un contrato que incluye tratamiento de datos, medidas de seguridad, soporte ante requerimientos y plan de salida con exportación de expedientes.`,
          isBalearContext: false
        },
        {
          id: "m18-l5-ex3",
          title: `Formación con casos reales`,
          scenario: `El equipo comercial recibe formación anual sobre PBC/FT.`,
          application: `La sesión incluye simulaciones de pagador distinto, sociedad extranjera y cliente PEP, con evaluación posterior y registro de asistencia.`,
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m18-l6",
      moduleId: "m18",
      title: "Protocolo integral de la operación y casos prácticos aplicados",
      order: 6,
      summary: `Integra todo el ciclo PBC/FT en el flujo comercial real de una operación inmobiliaria en Mallorca, desde la captación hasta el cierre, con casos prácticos resueltos y un checklist de implementación en 90 días.`,
      content: `Un protocolo eficaz incorpora PBC/FT desde la captación hasta el cierre, no como un trámite final. Antes de anunciar, se identifica al propietario, la representación y el titular real si existe sociedad, y se comprueba la coherencia del encargo. Antes de la oferta, se identifica al comprador y su propósito. Antes de las arras, se documentan fondos, pagador y forma de pago. Antes de la escritura, se actualiza el screening, los cambios y la trazabilidad. Tras la firma, se archiva y se programa la conservación. La ventaja es comercial además de legal: evita que un cliente descubra en la notaría que falta un poder, que el pago proviene de una cuenta no aceptada o que la sociedad no tiene titular real acreditado. Un expediente ordenado reduce retrasos, disputa y frustración. PBC/FT no es un anexo al final: si se deja para la semana de la escritura, se convierte en un freno operativo y reputacional.

## Checklist de implementación en 90 días

La mejor forma de implantación es gradual. Primer mes: diagnóstico de servicios, riesgos, roles, sistemas y expedientes existentes. Segundo mes: manual, política de admisión, formularios, CRM y archivo, y formación. Tercer mes: piloto con operaciones reales, simulación de alerta, revisión de proveedor y correcciones. El objetivo no es una certificación estética, sino que el equipo pueda actuar de forma consistente. Para una agencia de Mallorca con componente internacional, conviene añadir revisión bilingüe de formularios, procedimiento para poderes extranjeros, traducciones, clientes no residentes, transferencias internacionales y coordinación notarial. No se debe intentar implantar cincuenta herramientas a la vez: un expediente coherente y un canal de escalado claro valen más que software sin proceso.

## Caso práctico 1: la sociedad extranjera que compra sin financiación

Una sociedad registrada fuera de España quiere comprar una villa en el suroeste de Mallorca por 3,2 millones de euros. El administrador local dice actuar por poder. La sociedad se constituyó hace tres meses y la compra se pagará desde una cuenta de una empresa vinculada en otra jurisdicción. El administrador solicita rapidez y rechaza aportar organigrama porque "es información confidencial". La operación reúne factores acumulativos: sociedad reciente, estructura internacional, pagador distinto, poder y resistencia a explicar titularidad. La clave no es "sociedad extranjera = sospecha", sino imposibilidad o no de identificar, entender y documentar la operación. La agencia identifica al administrador y a la sociedad; exige poder suficiente, organigrama hasta personas físicas, declaración y contraste de titular real, fuente de fondos y relación entre pagador y compradora. Aplica diligencia reforzada, aprobación de dirección y revisión de listas. Si la documentación explica una estructura de inversión real, con fondos de venta de activos y préstamo intragrupo documentado, la operación puede continuar con controles; si la titularidad real o el origen de fondos no se aclaran, no se completa la diligencia y se aplican examen especial y, según resultados, abstención/comunicación.

## Caso práctico 2: el pago de arras por un familiar no identificado

Una pareja compra un piso en Palma por 460.000 euros. Las arras de 46.000 euros llegan desde la cuenta de una persona que no figura en la reserva. El comprador explica por teléfono que es "un tío que le ayuda", pero no quiere aportar nada más porque la operación es "familiar". El pago de terceros puede ser legítimo, pero no debe normalizarse. La agencia identifica al ordenante, pide explicación firmada de su vínculo, documento que refleje préstamo o donación, justificación de titularidad de cuenta y coherencia de origen de fondos. Ajusta el contrato para no afirmar falsamente que los compradores entregaron por sí mismos una cantidad que fue aportada por tercero. Si el ordenante se niega a identificarse o el comprador no puede explicar la causa económica, o aparecen pagos fraccionados, el riesgo aumenta. La agencia no liquida impuestos de donación ni asesora sobre el préstamo, pero sí evita que un pago relevante quede opaco y debe escalar si la diligencia no puede completarse.

## Caso práctico 3: cliente PEP, origen de fondos coherente y trato no discriminatorio

Una persona con cargo público relevante en otro país quiere adquirir una segunda residencia en Pollensa. Aporta pasaporte, contrato de préstamo de banco europeo, extracto de aportación propia y escritura de venta de un inmueble anterior. Se incomoda porque se le solicitan comprobaciones adicionales. La condición PEP exige medidas reforzadas, no rechazo automático. La agencia verifica la condición mediante fuente fiable, obtiene aprobación interna, entiende el origen de patrimonio y fondos, comprueba coherencia entre préstamo, venta previa y aportación propia, y refuerza el seguimiento hasta el cierre, explicando de forma objetiva que las comprobaciones derivan de obligaciones legales. Discriminar por cargo, nacionalidad o perfil sin análisis individual sería incorrecto; ignorar la condición PEP también lo sería.

## Caso práctico 4: el cliente que pide cerrar "sin rastro"

Un inversor pide comprar una finca rústica mediante contrato privado, con parte del precio en efectivo y parte "ajustada" fuera de escritura, y dice que no le importa pagar una penalización si la agencia cobra rápido y evita pedir documentación bancaria. El planteamiento concentra ilegalidad y riesgo: efectivo potencialmente prohibido por la limitación de pagos, ocultación del precio, fraude fiscal y ausencia de trazabilidad. La agencia rechaza cualquier instrucción de manipular el contrato o canalizar efectivo, abre examen especial, mantiene confidencialidad y activa el procedimiento de escalado y, si procede tras el análisis, la comunicación al SEPBLAC. No se negocia una "solución intermedia": si la diligencia no es posible o la operación implica una conducta ilícita, se termina la relación y se aplica el procedimiento PBC/FT.`,
      easyExplanation: `PBC/FT no es un papeleo que se hace al final antes de firmar en la notaría: hay que aplicarlo desde el primer contacto con el propietario hasta el cierre de la operación, en cada paso (captación, oferta, arras, escritura). Los casos reales muestran que sociedades extranjeras, pagos de familiares o personas con cargos públicos no son automáticamente sospechosos, pero sí requieren explicaciones documentadas; en cambio, pedir cerrar "sin dejar rastro" con efectivo y contratos paralelos es una señal clara de que algo va mal y debe frenarse.`,
      balearExample: `Una agencia de Sóller implementa un protocolo de 90 días: el primer mes revisa qué operaciones y riesgos maneja, el segundo mes redacta su manual y política de admisión y forma al equipo, y el tercer mes prueba el sistema con operaciones reales, incluida una simulación de alerta por pago de tercero, antes de darlo por operativo.`,
      keyConcepts: [
        `Protocolo integral captación-oferta-arras-escritura-cierre`,
        `Checklist de operación inmobiliaria PBC/FT`,
        `Plan de implementación en 90 días`,
        `Casos prácticos: estructura societaria, pago de tercero, PEP, efectivo/contrato paralelo`,
        `Coherencia documental y económica`
      ],
      frequentErrors: [
        `Dejar la aplicación de PBC/FT para la última semana antes de la escritura.`,
        `Rechazar automáticamente a compradores extranjeros o PEP sin análisis individualizado.`,
        `Aceptar explicaciones verbales de pagos de terceros sin documento de soporte.`,
        `Negociar una "solución intermedia" cuando el cliente propone efectivo y contrato paralelo.`,
        `Implantar muchas herramientas tecnológicas sin un proceso y canal de escalado claros.`
      ],
      examples: [
        {
          id: "m18-l6-ex1",
          title: `Checklist en captación`,
          scenario: `Alta de un nuevo encargo de venta de un chalet en Andratx.`,
          application: `Se verifica identidad y titularidad del propietario, representación si aplica, titular real si hay sociedad, y finalidad del encargo antes de publicar el anuncio.`,
          isBalearContext: true
        },
        {
          id: "m18-l6-ex2",
          title: `Checklist antes de arras`,
          scenario: `Comprador confirma interés y se prepara el contrato de arras.`,
          application: `Se documenta pagador, medio de pago, cuenta y condiciones de devolución antes de firmar; no se acepta efectivo salvo análisis legal estricto.`,
          isBalearContext: false
        },
        {
          id: "m18-l6-ex3",
          title: `Checklist antes de escritura`,
          scenario: `Faltan tres días para la firma ante notario.`,
          application: `Se actualizan cambios de representación, titulares reales y alertas pendientes, y se coordina de forma neutral con la notaría.`,
          isBalearContext: false
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m18-e1",
      moduleId: "m18",
      type: "case",
      question: `Una sociedad constituida hace tres meses en otra jurisdicción quiere comprar una vivienda de alto valor en Mallorca pagando desde una cuenta de una empresa vinculada, y el administrador se niega a aportar el organigrama alegando confidencialidad. ¿Qué haces?`,
      expectedAnswer: `No rechazar automáticamente por ser extranjera; exigir poder suficiente, organigrama hasta personas físicas, declaración y contraste de titular real, origen de fondos y relación pagador-compradora; aplicar diligencia reforzada y aprobación de dirección; si no se aclara, no completar la diligencia y valorar examen especial.`,
      explanation: `El caso reproduce el Caso Práctico 1 del módulo: la clave es la imposibilidad de identificar, entender y documentar, no la nacionalidad.`,
      difficulty: "advanced"
    },
    {
      id: "m18-e2",
      moduleId: "m18",
      type: "decision",
      question: `Recibes unas arras de 46.000 euros desde la cuenta de una persona que no figura en la reserva; el comprador dice por teléfono que es "un familiar que ayuda" pero no quiere dar más datos. ¿Aceptas la operación tal cual?`,
      expectedAnswer: `No. Se debe identificar al ordenante, pedir explicación firmada del vínculo y documento de préstamo/donación, y comprobar coherencia de origen de fondos antes de continuar.`,
      explanation: `Reproduce el Caso Práctico 2; el pago de terceros no debe normalizarse sin documentación.`,
      difficulty: "medium"
    },
    {
      id: "m18-e3",
      moduleId: "m18",
      type: "comprehension",
      question: `¿Qué diferencia existe entre origen de fondos y origen de patrimonio?`,
      expectedAnswer: `El origen de fondos explica el dinero concreto utilizado en la operación (transferencia, préstamo, venta previa, herencia); el origen de patrimonio explica cómo el cliente acumuló la riqueza que le permite disponer de esos fondos.`,
      explanation: `Distinción recogida literalmente en la Ficha 14 del PDF y en las respuestas de autoevaluación.`,
      difficulty: "basic"
    },
    {
      id: "m18-e4",
      moduleId: "m18",
      type: "decision",
      question: `Un cliente con cargo público relevante en otro país se incomoda porque le pides documentación adicional de origen de fondos. ¿Cómo actúas?`,
      expectedAnswer: `Explicar de forma neutral que las comprobaciones derivan de una obligación legal aplicada de forma objetiva por su condición PEP; verificar origen de patrimonio y fondos, obtener aprobación interna y aplicar seguimiento reforzado, sin rechazar ni discriminar automáticamente.`,
      explanation: `La condición PEP exige rigor y proporcionalidad, no rechazo automático ni trato ofensivo.`,
      difficulty: "medium"
    },
    {
      id: "m18-e5",
      moduleId: "m18",
      type: "case",
      question: `Un inversor propone comprar una finca rústica con contrato privado, parte del precio en efectivo y parte "ajustada" fuera de escritura, y acepta pagar penalización con tal de que la agencia no pida documentación bancaria. ¿Qué procedimiento aplicas?`,
      expectedAnswer: `Rechazar cualquier instrucción de manipular el contrato o canalizar efectivo; abrir examen especial; mantener confidencialidad (no tipping off); si procede tras el análisis, aplicar abstención y comunicar al SEPBLAC; no negociar soluciones intermedias.`,
      explanation: `Reproduce el Caso Práctico 4; concentra indicadores de efectivo prohibido, ocultación de precio y fraude fiscal.`,
      difficulty: "advanced"
    },
    {
      id: "m18-e6",
      moduleId: "m18",
      type: "comprehension",
      question: `¿Cuál es el límite general de pago en efectivo cuando interviene un empresario o profesional, y cuándo se eleva a 10.000 euros?`,
      expectedAnswer: `1.000 euros con carácter general; se eleva a 10.000 euros cuando quien paga es una persona física no residente fiscal en España y no actúa como empresario o profesional.`,
      explanation: `Artículo 7 de la Ley 7/2012, modificado por la Ley 11/2021.`,
      difficulty: "basic"
    },
    {
      id: "m18-e7",
      moduleId: "m18",
      type: "decision",
      question: `Un compañero comercial te dice en el chat interno de la agencia "el banco ha detectado algo raro en esta operación, tenemos que informar a prevención". ¿Qué riesgo identificas y qué haces?`,
      expectedAnswer: `Riesgo de tipping off (revelación indebida) incluso en canales internos informales; se debe limitar la información a quienes necesitan conocerla (need-to-know), usar guiones neutros hacia el exterior y evitar que el mensaje llegue al cliente o a personal sin acceso autorizado.`,
      explanation: `La prohibición de revelación se aplica también a chats, CRM y comentarios internos, no solo a comunicaciones formales.`,
      difficulty: "medium"
    },
    {
      id: "m18-e8",
      moduleId: "m18",
      type: "balear_scenario",
      question: `Diseña, en no más de 500 palabras (resumen aquí en bullets), el protocolo de admisión y control que aplicarías a una compra de 1,2 millones de euros por una sociedad extranjera, sin financiación bancaria, cuyo pagador final todavía no está confirmado.`,
      expectedAnswer: `Debe incluir: identificación de la sociedad y representante; determinación de titular real; formulario de propósito e índole; solicitud de origen de fondos y patrimonio; clasificación de riesgo (probablemente reforzado); aprobación por persona distinta al comercial; revisión de listas/sanciones; condición de no avanzar a arras sin confirmar pagador; plan de escalado a examen especial si persisten incoherencias.`,
      explanation: `Ejercicio basado en el "Ejercicio de desarrollo" de la Autoevaluación del PDF (página 52).`,
      difficulty: "advanced"
    }
  ],
  quizQuestions: [
    {
      id: "m18-q1",
      question: `¿Qué norma española regula con carácter general la prevención del blanqueo de capitales y de la financiación del terrorismo?`,
      options: [`Ley 10/2010, de 28 de abril`, `Ley 7/2012, de 29 de octubre`, `Real Decreto 609/2023`, `Reglamento (UE) 2024/1624`],
      correctAnswerIndex: 0,
      explanation: `La Ley 10/2010 es la norma base; el resto son normas complementarias o de otro ámbito.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, de 28 de abril`,
      difficulty: "basic"
    },
    {
      id: "m18-q2",
      question: `¿Qué reglamento desarrolla la Ley 10/2010?`,
      options: [`Real Decreto 609/2023`, `Real Decreto 304/2014`, `Ley 11/2021`, `Reglamento (UE) 2024/1624`],
      correctAnswerIndex: 1,
      explanation: `El Real Decreto 304/2014 es el Reglamento de desarrollo de la Ley 10/2010.`,
      sourceModuleId: "m18",
      legalReference: `RD 304/2014, de 5 de mayo`,
      difficulty: "basic"
    },
    {
      id: "m18-q3",
      question: `¿A partir de qué renta anual o mensual de un arrendamiento entra la operación en el perímetro de la Ley 10/2010?`,
      options: [`60.000€/año o 5.000€/mes`, `120.000€/año o 10.000€/mes`, `100.000€/año o 8.000€/mes`, `No existe umbral, todo arrendamiento está incluido`],
      correctAnswerIndex: 1,
      explanation: `La Ley 10/2010 fija ese umbral para arrendamientos como actividad sujeta.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, ámbito de sujetos obligados`,
      difficulty: "medium"
    },
    {
      id: "m18-q4",
      question: `¿Qué caracteriza al modelo basado en riesgo?`,
      options: [`Aplicar la misma intensidad de diligencia a todos los clientes`, `Graduar las medidas de diligencia según el riesgo de cada cliente/operación`, `Basar el riesgo únicamente en la nacionalidad del cliente`, `Eliminar la necesidad de identificar al titular real en operaciones de bajo riesgo`],
      correctAnswerIndex: 1,
      explanation: `El enfoque basado en riesgo exige justificar por qué una operación es ordinaria, elevada o inaceptable, sin depender de un solo factor como la nacionalidad.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, art. sobre enfoque basado en riesgo; Ficha 04 del módulo`,
      difficulty: "basic"
    },
    {
      id: "m18-q5",
      question: `¿Quién es el titular real según el módulo?`,
      options: [`El administrador formal de la sociedad`, `La persona física por cuya cuenta se establece la relación u operación, o quien en último término posee o controla la persona jurídica`, `Cualquier apoderado que firme el contrato`, `El notario que autoriza la escritura`],
      correctAnswerIndex: 1,
      explanation: `El titular real es siempre una persona física identificable, no un cargo formal.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, concepto de titular real; RD 609/2023`,
      difficulty: "basic"
    },
    {
      id: "m18-q6",
      question: `¿Qué registro permite contrastar la titularidad real declarada por el cliente?`,
      options: [`Registro Mercantil Central exclusivamente`, `Registro Central de Titularidades Reales (RD 609/2023)`, `Registro de la Propiedad`, `Catastro Inmobiliario`],
      correctAnswerIndex: 1,
      explanation: `El RD 609/2023 crea el Registro Central de Titularidades Reales como fuente de contraste.`,
      sourceModuleId: "m18",
      legalReference: `RD 609/2023, de 11 de julio`,
      difficulty: "medium"
    },
    {
      id: "m18-q7",
      question: `¿La condición de persona con responsabilidad pública (PEP) implica prohibición automática de operar?`,
      options: [`Sí, siempre se debe rechazar la operación`, `No, exige medidas reforzadas: aprobación adecuada, origen de patrimonio/fondos y seguimiento reforzado`, `Solo si el PEP es de nacionalidad extracomunitaria`, `Solo si la operación supera 5 millones de euros`],
      correctAnswerIndex: 1,
      explanation: `La normativa exige rigor y proporcionalidad, no rechazo automático.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, régimen de PEP`,
      difficulty: "medium"
    },
    {
      id: "m18-q8",
      question: `¿Cuál es el límite general de pago en efectivo cuando interviene un empresario o profesional?`,
      options: [`500 euros`, `1.000 euros`, `2.500 euros`, `10.000 euros`],
      correctAnswerIndex: 1,
      explanation: `El límite general es 1.000 euros; se eleva a 10.000 euros para personas físicas no residentes fiscales que no actúen como empresarios o profesionales.`,
      sourceModuleId: "m18",
      legalReference: `Ley 7/2012, art. 7, modificado por Ley 11/2021`,
      difficulty: "basic"
    },
    {
      id: "m18-q9",
      question: `¿La limitación de pagos en efectivo (Ley 7/2012) es lo mismo que la diligencia debida PBC/FT?`,
      options: [`Sí, son el mismo régimen legal`, `No, son regímenes distintos que se refuerzan mutuamente`, `Sí, ambos regulan exclusivamente el blanqueo de capitales`, `No, la limitación de efectivo deroga la diligencia debida`],
      correctAnswerIndex: 1,
      explanation: `Tienen base y finalidad distintas (tributaria vs. prevención de blanqueo), aunque se complementan.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 03 y Ficha 20 del módulo`,
      difficulty: "medium"
    },
    {
      id: "m18-q10",
      question: `¿Qué debe hacer la agencia ante un pago de un tercero no identificado en la reserva?`,
      options: [`Aceptarlo sin más si el importe es bajo`, `Identificar al pagador, su vínculo y solicitar documento que explique la operación (préstamo/donación)`, `Rechazar automáticamente cualquier operación con pago de tercero`, `Pedir solo un correo electrónico de confirmación verbal`],
      correctAnswerIndex: 1,
      explanation: `El pago de terceros puede ser legítimo pero exige identificación y documentación, no normalización automática.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 21 del módulo; Caso Práctico 2`,
      difficulty: "medium"
    },
    {
      id: "m18-q11",
      question: `¿Qué debe hacer la agencia si detecta que los fondos de una operación proceden en parte de criptoactivos?`,
      options: [`Rechazar automáticamente la operación`, `Custodiar los criptoactivos hasta que se convierta el pago`, `Solicitar extractos del proveedor regulado, historial de conversión y trazabilidad hasta cuenta bancaria`, `Asesorar al cliente sobre cómo convertir sus criptoactivos`],
      correctAnswerIndex: 2,
      explanation: `La agencia no custodia cripto ni asesora inversión; exige documentación de trazabilidad.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 22 del módulo`,
      difficulty: "medium"
    },
    {
      id: "m18-q12",
      question: `¿Qué es el examen especial?`,
      options: [`Un trámite fiscal previo a la escritura`, `Un proceso estructurado para analizar hechos u operaciones con indicios o incoherencias`, `Una auditoría anual obligatoria del SEPBLAC`, `Un formulario que rellena el notario`],
      correctAnswerIndex: 1,
      explanation: `Es una investigación interna proporcionada, no una acusación ni un trámite fiscal.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 26 del módulo`,
      difficulty: "basic"
    },
    {
      id: "m18-q13",
      question: `¿Qué debe hacer la agencia mientras una operación está bajo el supuesto de comunicación por indicio?`,
      options: [`Ejecutar la operación con normalidad para no perder al cliente`, `Abstenerse de ejecutarla, salvo excepciones legales, y no facilitar pasos que la consoliden`, `Comunicar al cliente que existe una sospecha para que se explique`, `Cerrar la operación con una cláusula de exoneración de responsabilidad`],
      correctAnswerIndex: 1,
      explanation: `La regla general es la abstención de ejecución, con excepciones tasadas si abstenerse dificulta la investigación.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, régimen de abstención; Ficha 32 del módulo`,
      difficulty: "medium"
    },
    {
      id: "m18-q14",
      question: `¿Qué prohíbe la regla de no revelación (tipping off)?`,
      options: [`Comunicar internamente cualquier información sobre el cliente`, `Revelar al cliente o a terceros que se ha comunicado información al SEPBLAC o que una operación está siendo examinada`, `Compartir datos con la notaría en el marco de la operación`, `Formar al personal sobre indicadores de riesgo`],
      correctAnswerIndex: 1,
      explanation: `La prohibición de tipping off protege la confidencialidad de la investigación y de quien comunica.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, deber de confidencialidad; Ficha 33`,
      difficulty: "basic"
    },
    {
      id: "m18-q15",
      question: `¿Durante cuánto tiempo debe conservarse la documentación PBC/FT según la Ley 10/2010?`,
      options: [`5 años con acceso libre todo el periodo`, `10 años, con acceso limitado a control interno tras los primeros 5 años`, `3 años renovables`, `Indefinidamente sin restricción de acceso`],
      correctAnswerIndex: 1,
      explanation: `El plazo general de conservación es de diez años, con acceso restringido pasados cinco años.`,
      sourceModuleId: "m18",
      legalReference: `Ley 10/2010, obligación de conservación; Ficha 35`,
      difficulty: "medium"
    },
    {
      id: "m18-q16",
      question: `¿La externalización de servicios (software, screening, formación) elimina la responsabilidad PBC/FT de la agencia?`,
      options: [`Sí, la responsabilidad pasa íntegramente al proveedor`, `No, la agencia sigue siendo responsable y debe elegir proveedores con garantías adecuadas`, `Solo si el proveedor está certificado ISO`, `Solo en operaciones de bajo riesgo`],
      correctAnswerIndex: 1,
      explanation: `La responsabilidad del sujeto obligado no se transfiere al externalizar tareas.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 39 del módulo`,
      difficulty: "medium"
    },
    {
      id: "m18-q17",
      question: `¿Desde qué fecha será aplicable con carácter general el Reglamento (UE) 2024/1624?`,
      options: [`1 de enero de 2026`, `10 de julio de 2027`, `31 de diciembre de 2027`, `Ya es aplicable en 2026`],
      correctAnswerIndex: 1,
      explanation: `El Reglamento AMLR será aplicable con carácter general desde el 10 de julio de 2027, sin perjuicio de ajustes transitorios.`,
      sourceModuleId: "m18",
      legalReference: `Reglamento (UE) 2024/1624`,
      difficulty: "basic"
    },
    {
      id: "m18-q18",
      question: `¿Qué distingue a la comunicación sistemática de la comunicación por indicio?`,
      options: [`Son sinónimos, ambas se activan por sospecha`, `La comunicación sistemática es periódica y reglada según categoría de operaciones; la comunicación por indicio surge de un examen especial ante sospecha concreta`, `La comunicación sistemática solo aplica a entidades bancarias`, `La comunicación por indicio no requiere análisis previo`],
      correctAnswerIndex: 1,
      explanation: `Son mecanismos distintos: uno periódico y catalogado, otro basado en indicios tras análisis.`,
      sourceModuleId: "m18",
      legalReference: `Ficha 34 del módulo`,
      difficulty: "advanced"
    }
  ]
};

export const m18Glossary: GlossaryItem[] = [
  {
    id: "g-m18-sujeto-obligado",
    term: `Sujeto obligado`,
    definition: `Persona física o jurídica que, conforme al artículo 2 de la Ley 10/2010, queda sometida a las obligaciones de prevención del blanqueo de capitales y financiación del terrorismo por razón de la actividad profesional efectiva que desarrolla (incluye agentes, promotores e intermediarios inmobiliarios).`,
    easyDefinition: `Es quien, por su trabajo (como vender o alquilar pisos de forma profesional), está obligado por ley a vigilar el blanqueo de capitales, sin importar si pertenece a un colegio profesional.`,
    relatedModuleId: "m18"
  },
  {
    id: "g-m18-titular-real",
    term: `Titular real (beneficial owner)`,
    definition: `Persona física por cuya cuenta se establece una relación de negocios u operación, o que en último término posee o controla, directa o indirectamente, un porcentaje o los derechos de voto o propiedad de una persona jurídica o estructura, conforme a la Ley 10/2010 y el RD 609/2023.`,
    easyDefinition: `La persona de carne y hueso que realmente se beneficia o controla una sociedad, aunque en el papel aparezcan otras personas o empresas.`,
    relatedModuleId: "m18"
  },
  {
    id: "g-m18-comunicacion-por-indicio",
    term: `Comunicación por indicio`,
    definition: `Obligación del sujeto obligado, tras examen especial, de comunicar por iniciativa propia al SEPBLAC cualquier hecho u operación respecto al que exista indicio o certeza de que está relacionado con el blanqueo de capitales o la financiación del terrorismo, incluidas las tentativas.`,
    easyDefinition: `Avisar al organismo oficial (SEPBLAC) cuando, tras investigar internamente, sigues sospechando que una operación puede estar relacionada con dinero ilegal.`,
    relatedModuleId: "m18"
  },
  {
    id: "g-m18-tipping-off",
    term: `Tipping off (prohibición de revelación)`,
    definition: `Prohibición legal de revelar al cliente o a terceros que se ha remitido información al SEPBLAC, o que una operación está siendo o podría ser objeto de examen por blanqueo de capitales o financiación del terrorismo.`,
    easyDefinition: `Nunca puedes decirle al cliente (ni a nadie fuera del equipo autorizado) que has avisado a las autoridades o que sospechas de él.`,
    relatedModuleId: "m18"
  },
  {
    id: "g-m18-medidas-simplificadas-reforzadas",
    term: `Medidas simplificadas y reforzadas de diligencia debida`,
    definition: `Graduación de la intensidad de las medidas de identificación, comprobación de titular real, propósito y seguimiento en función del nivel de riesgo acreditado; las medidas simplificadas solo son aceptables cuando el riesgo reducido está justificado y documentado, y las reforzadas se aplican ante mayor riesgo por naturaleza de la operación, cliente o geografía.`,
    easyDefinition: `No a todos los clientes se les pide lo mismo: si el riesgo es bajo y está justificado, se piden menos cosas; si el riesgo es alto, se piden más pruebas y más control.`,
    relatedModuleId: "m18"
  }
];

export const m18Alerts: string[] = [
  `El documento fue publicado como Módulo 18 del programa ampliado a 19 módulos y sustituye y deja sin efecto cualquier versión preliminar identificada erróneamente como "módulo 14" antes de la consolidación del temario.`,
  `El Reglamento (UE) 2024/1624 (AMLR) será aplicable con carácter general desde el 10 de julio de 2027, con ajustes transitorios; no debe presentarse como obligación ya exigible en 2026 — en 2026 sigue rigiendo la Ley 10/2010 y su Reglamento (RD 304/2014).`,
  `El Registro Central de Titularidades Reales fue creado por el Real Decreto 609/2023, de 11 de julio, como mecanismo de contraste de la titularidad real declarada por los clientes.`,
  `La limitación de pagos en efectivo del artículo 7 de la Ley 7/2012 fue modificada por la Ley 11/2021; el umbral general es 1.000 euros y se eleva a 10.000 euros para personas físicas no residentes fiscales que no actúen como empresarios o profesionales.`,
  `Las listas de sanciones, jurisdicciones de riesgo y las instrucciones del SEPBLAC son dinámicas: el módulo advierte expresamente verificar siempre la versión consolidada de la norma, la fuente oficial del listado aplicable y las instrucciones vigentes del SEPBLAC antes de cualquier operación real, dado que este material formativo no sustituye un manual implantado ni el asesoramiento de un profesional especializado.`
];
