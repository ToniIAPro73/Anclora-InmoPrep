import type { Module, GlossaryItem } from "@/lib/types";

export const m16Module: Module = {
  id: "m16",
  code: "M16",
  title: "Tecnología Inmobiliaria",
  order: 16,
  description: "CRM, firma digital, IA con revisión humana, RGPD y LOPDGDD.",
  estimatedMinutes: 40,
  difficulty: "medium",
  status: "not_started",
  progressPercentage: 0,
  score: null,
  lessons: [
    {
      id: "m16-l1",
      moduleId: "m16",
      title: "Fundamentos tecnológicos y arquitectura mínima de la agencia",
      order: 1,
      summary:
        "La tecnología inmobiliaria organiza captación, análisis, comercialización, contratación y posventa alrededor de un CRM y un modelo de datos fiable, no de la moda del software.",
      content: `La tecnología inmobiliaria —PropTech, CRM, gestión documental, portales, automatización, datos, IA, firma y ciberseguridad— organiza el ciclo completo de un activo. La pregunta correcta ante cualquier herramienta no es "qué software está de moda", sino "qué riesgo, coste o retraso reduce y qué evidencia deja". Un software puede mostrar una alerta de precio, pero no conoce por sí solo una servidumbre, una limitación de uso turístico o un defecto urbanístico: la interfaz no sustituye la comprobación de fuentes.

## El ecosistema PropTech por capas

Conviene ordenar el ecosistema en capas para no mezclar herramientas con funciones distintas. La capa de relación incluye CRM, centralita, mensajería y agenda. La capa de inventario reúne fichas, documentación, fotografías, planos y datos registrales. La capa de mercado agrupa portales, estadísticas, comparables y analítica. La capa de transacción gestiona reservas, firma, pagos, verificación e informes. La capa técnica integra BIM, sensores, mantenimiento, eficiencia y gestión de edificios. Finalmente, la capa de inteligencia usa modelos analíticos e IA para clasificar, resumir, recomendar o generar contenidos. Mezclar estas capas sin arquitectura provoca duplicidades y datos contradictorios entre sistemas.

## Diagnóstico de madurez digital

La madurez de una agencia no se mide por el número de aplicaciones instaladas, sino por la consistencia del proceso, la calidad del dato, la seguridad y la capacidad de aprendizaje. Existen cinco niveles: inicial (archivos dispersos en WhatsApp, Excel aislado), repetible (plantillas básicas), definido (proceso y CRM formalizados), medible (KPIs y automatizaciones controladas) y adaptable (mejora continua, gobierno de datos y seguridad integrada). No es necesario llegar al último nivel para trabajar bien, pero sí es necesario abandonar la improvisación.

## Arquitectura tecnológica mínima viable

Una configuración mínima razonable para un profesional inmobiliario incluye dominio y correo corporativo, CRM, almacenamiento empresarial, calendario, teléfono o centralita, gestor de contraseñas, autenticación multifactor (MFA), firma electrónica, contabilidad o facturación, web y analítica. La sofisticación llega después. La regla operativa clave es que, si dos sistemas registran el mismo inmueble, debe decidirse cuál es la fuente maestra y cómo se sincroniza; y que los datos de solvencia, identidad o titular real nunca deben alojarse en herramientas de marketing ni en cuentas personales de los comerciales.

## El CRM como sistema operativo comercial

El CRM inmobiliario no es una agenda de contactos: es la memoria trazable de la agencia, capaz de convertir conversaciones dispersas en una relación gestionable y auditable. Debe permitir identificar el origen del lead, la necesidad, el presupuesto, el consentimiento, el inmueble de interés, el estado, las interacciones, las tareas, los documentos y el responsable de cada actuación. También debe separar los roles de prospecto, cliente, propietario, arrendatario, comprador, proveedor y colaborador para evitar registros retrospectivos que dependen de la memoria individual de un comercial.

## Modelo de datos y calidad

Una ficha de inmueble debe evitar nombres libres como "Piso centro 2" y usar identificadores estables: ID interno, dirección normalizada, referencia catastral, número de finca, planta, puerta y anexos. En Baleares es frecuente que existan discrepancias entre Registro, Catastro y realidad física, especialmente en rústico, anexos, trasteros y construcciones antiguas; el sistema debe permitir registrar la discrepancia y la acción pendiente, no forzar una cifra única para "hacer cuadrar" el anuncio. La calidad del dato se trabaja en cuatro dimensiones: exactitud (coincide con la fuente fiable), completitud (contiene lo necesario para la fase), consistencia (no se contradice entre portal, web, CRM y contrato) y actualidad (se revisa según el riesgo de la operación).`,
      easyExplanation:
        "La tecnología en una inmobiliaria no sirve para automatizar más pasos, sino para tener siempre claro qué dato es correcto, quién lo verificó y desde cuándo. Antes de contratar cualquier software hay que decidir qué sistema es la \"fuente maestra\" para cada dato (por ejemplo, el CRM para el estado del lead, el Registro/Catastro para la superficie). Un CRM bien montado sustituye el \"lo llevamos en la cabeza\" por un proceso que cualquier compañero puede continuar. La arquitectura mínima (correo corporativo, CRM, contraseñas seguras, firma electrónica, backup) es más importante que tener veinte aplicaciones distintas.",
      balearExample:
        "Una agencia de cuatro personas en Palma tenía los contactos repartidos entre teléfonos personales, un Excel, el correo y WhatsApp. Dos comerciales llamaban al mismo propietario sin saber qué documentos ya se le habían pedido. Al implantar un CRM, primero se inventariaron las fuentes existentes y se restringieron altas nuevas fuera del sistema; después se migró solo la cartera activa (no todo el histórico) y se archivó el resto según una política de conservación, evitando duplicados y pérdida de información.",
      keyConcepts: [
        "PropTech",
        "CRM",
        "arquitectura tecnológica mínima viable",
        "fuente maestra del dato",
        "madurez digital",
        "calidad del dato (exactitud/completitud/consistencia/actualidad)",
        "identificador estable de inmueble",
        "discrepancia Registro-Catastro-realidad"
      ],
      frequentErrors: [
        "Elegir el software \"de moda\" sin definir antes qué proceso real debe resolver.",
        "Usar el CRM únicamente como agenda de contactos, sin registrar origen del lead, consentimiento ni estado verificable.",
        "Migrar todo el histórico sin depurar duplicados ni clasificar qué datos son sensibles.",
        "Dejar que dos sistemas (CRM y portal, por ejemplo) contengan la misma información sin decidir cuál manda.",
        "Confundir digitalizar un formulario con mejorar una decisión: primero se estandariza el proceso, después se automatiza."
      ],
      examples: [
        {
          id: "m16-l1-ex1",
          title: "Discrepancia catastral en finca rústica de Sóller",
          scenario:
            "Una ficha muestra superficie catastral distinta a la del Registro en una finca rústica de Sóller.",
          application:
            "El sistema debe permitir registrar la discrepancia visible y la acción pendiente (verificación técnica), no publicar una cifra única para \"cuadrar\" el anuncio.",
          isBalearContext: true
        },
        {
          id: "m16-l1-ex2",
          title: "Demo de plataforma integral",
          scenario: "Un proveedor ofrece una \"plataforma integral\" en una demo de diez minutos.",
          application:
            "La decisión no debe adoptarse por la demo, sino tras probar un flujo completo real: captación, documentación, comercialización y cierre, verificando qué sistema es realmente la fuente maestra de cada dato.",
          isBalearContext: false
        },
        {
          id: "m16-l1-ex3",
          title: "Transformación digital inicial en Manacor",
          scenario: "Una agencia pequeña de Manacor empieza su transformación digital.",
          application:
            "Prioriza dominio corporativo, CRM, gestor de contraseñas, MFA y copias de seguridad antes de considerar IA o automatización avanzada.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m16-l2",
      moduleId: "m16",
      title: "Gestión documental, expediente digital y calidad del dato en el proceso comercial",
      order: 2,
      summary:
        "El expediente digital y la due diligence tecnológica convierten documentos sueltos en pruebas trazables que sostienen cada decisión comercial.",
      content: `Un expediente digital bien diseñado permite reconstruir quién hizo qué, con qué documento y bajo qué autorización. Debe separar documento de trabajo, documento recibido, documento firmado y evidencia de verificación, con una estructura estable: identificación y encargo; titularidad y cargas; urbanismo y técnico; comercialización; ofertas y negociación; contrato y firma; fiscalidad y cierre; posventa. Los archivos deben nombrarse de forma homogénea (por ejemplo, fecha_versión_tipo_activo) y nunca debe sustituirse un documento firmado por una versión nueva sin conservar el historial.

## Permisos, integridad y retención

Los permisos deben configurarse por necesidad real: el equipo comercial puede consultar ficha y materiales; dirección puede ver indicadores; administración ve facturación; solo los roles autorizados acceden a identidad, solvencia, blanqueo de capitales o documentación bancaria. Los enlaces externos deben caducar y estar limitados a una carpeta o documento concreto. El almacenamiento "en la nube" no equivale por sí solo a orden, seguridad ni cumplimiento normativo si no existen permisos definidos, control de versiones y un protocolo de salida cuando termina la relación con el proveedor.

## Due diligence digital: de checklist a prueba

La revisión digital de un inmueble no consiste en acumular PDFs, sino en convertir documentos en preguntas resueltas, riesgos registrados y decisiones condicionadas. Una due diligence mínima combina Registro, Catastro, realidad física, comunidad, urbanismo, habitabilidad, eficiencia energética, fiscalidad y, cuando corresponda, turismo, costas, patrimonio o rústico. Cada control debe tener un estado: pendiente, recibido, verificado, discrepante o derivado a un técnico. Cerrar una incidencia solo porque el vendedor "diga que siempre ha sido así" no es aceptable: hay que registrar la manifestación, pero separar el hecho acreditado de la simple declaración.

## Portales, sindicación y contenido visual

La sindicación de inventario permite enviar datos desde un CRM a portales, web y redes, pero crea riesgo si el dato cambia y no se propaga correctamente. Debe definirse qué campos viajan, cuáles se editan solo en el sistema maestro y quién aprueba una publicación. No deben anunciarse afirmaciones de alto riesgo —"turístico", "segregable", "con licencia", "obra nueva" o "con vistas garantizadas"— salvo que estén verificadas y bloqueadas como campos de alto riesgo. En cuanto al contenido visual, la fotografía, el vídeo, el tour 3D y el plano interactivo deben mejorar la comprensión del inmueble sin alterar su realidad, escala o condiciones de uso; hay que distinguir imagen real, render o visualización, y contenido de contexto, etiquetando cada uno y evitando exponer datos personales, rostros, matrículas o elementos de seguridad (cerraduras, alarmas, planos con accesos).

## Contratación digital y firma electrónica

Digitalizar una reserva o una hoja de encargo exige más que enviar un PDF por correo: hay que conservar la versión final, la identidad declarada, el método de autenticación, el momento de aceptación, el texto íntegro, los anexos y la trazabilidad de modificaciones posteriores. El marco europeo eIDAS y la Ley 6/2020 de servicios electrónicos de confianza distinguen tres niveles de firma electrónica: simple, avanzada y cualificada. La firma cualificada tiene un efecto jurídico reforzado equivalente a la firma manuscrita en el ámbito previsto por eIDAS; la avanzada está vinculada de forma única al firmante y detecta cambios posteriores; la simple puede ser válida como prueba pero es más débil. Un "ok" por WhatsApp puede tener valor probatorio según el contexto, pero es una evidencia más débil que un flujo diseñado para fijar identidad, contenido e intención.`,
      easyExplanation:
        "El expediente digital de un inmueble tiene que poder demostrar, para cada documento, quién lo subió, cuándo y con qué autorización, sin que nadie pueda \"editar\" un documento firmado sin dejar rastro. La due diligence digital no es tener muchos PDFs guardados, sino que cada control (Registro, Catastro, comunidad, urbanismo...) tenga un estado claro y una prueba asociada. Al publicar en portales, cualquier afirmación arriesgada (\"con licencia turística\", \"vistas garantizadas\") debe estar comprobada antes de escribirla, y las fotos o vídeos no pueden hacer parecer el inmueble distinto de como es en realidad. La firma electrónica no es una tecnología única: hay niveles distintos (simple, avanzada, cualificada) y cada tipo de documento requiere un nivel proporcional.",
      balearExample:
        "En una finca rústica en Sóller, un asistente de IA generó una ficha con frases como \"posibilidad de licencia vacacional\", \"ampliable\" y \"vistas protegidas\", basándose solo en fotos, superficie catastral y el texto de un anuncio antiguo. El equipo detectó que todas esas afirmaciones eran de alto riesgo (turismo, ampliación, servidumbres, rentabilidad) y las retiró del borrador antes de publicar, etiquetando los campos críticos como pendientes hasta contar con documentación verificada.",
      keyConcepts: [
        "expediente digital",
        "due diligence digital",
        "sindicación de portales",
        "campos de alto riesgo",
        "eIDAS",
        "Ley 6/2020 de servicios electrónicos de confianza",
        "firma electrónica simple/avanzada/cualificada",
        "trazabilidad documental"
      ],
      frequentErrors: [
        "Sustituir un documento firmado por una versión nueva sin conservar el historial.",
        "Anunciar en portales condiciones no verificadas (licencia turística, superficie, uso) por comodidad comercial.",
        "Tratar cualquier firma electrónica como equivalente, sin ajustar el nivel (simple/avanzada/cualificada) al riesgo del acto.",
        "Cerrar una incidencia de due diligence solo por la palabra del vendedor, sin documento que la respalde.",
        "Compartir enlaces de documentación sensible sin caducidad ni control de acceso."
      ],
      examples: [
        {
          id: "m16-l2-ex1",
          title: "Superficie discrepante entre portal y CRM",
          scenario: "Un portal publica una superficie distinta a la del CRM.",
          application:
            "Se detiene la difusión, se identifica la fuente correcta, se corrige el sistema maestro, se sincronizan los canales y se documenta la revisión.",
          isBalearContext: false
        },
        {
          id: "m16-l2-ex2",
          title: "Reserva aceptada por WhatsApp",
          scenario: "Una reserva se acepta mediante un simple mensaje de WhatsApp.",
          application:
            "Se evalúa si el acto requiere firma avanzada o cualificada según su relevancia jurídica y económica, en lugar de asumir que cualquier aceptación informal es suficiente.",
          isBalearContext: false
        },
        {
          id: "m16-l2-ex3",
          title: "Deudas de comunidad no declaradas en Calvià",
          scenario: "Una vivienda en una comunidad de propietarios en Calvià tiene deudas no declaradas.",
          application:
            "La due diligence digital marca el control de \"estatutos y deudas de comunidad\" como discrepante hasta recibir certificado, y condiciona la reserva o las arras a la resolución de esa incidencia.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m16-l3",
      moduleId: "m16",
      title: "Comunicaciones, contratación, pagos e integraciones tecnológicas",
      order: 3,
      summary:
        "El flujo digital de reserva, arras y cierre solo es seguro cuando comunicaciones, pagos e integraciones entre sistemas mantienen evidencia y verificación en cada paso.",
      content: `Correo, WhatsApp, SMS, plataforma y videollamada producen todos algún tipo de evidencia; la diferencia entre ellos es cuánto control y contexto se conserva. Una agencia debe usar canales corporativos para decisiones importantes: oferta, aceptación, instrucciones de pago, envío de documentación, cambios de precio, confirmación de visitas y avisos de riesgo. Los mensajes instantáneos son útiles para coordinación, pero no deben sustituir el expediente: la política de "canal oficial" establece que el CRM o expediente guarda el resumen y los documentos, el correo corporativo envía instrucciones, la firma gestiona la aceptación, y cualquier llamada o videollamada relevante se documenta mediante una nota de conversación.

## Videollamada e identidad digital en visitas remotas

La videollamada puede filtrar demanda, explicar documentación, enseñar distribución y coordinar una visita física posterior, pero no equivale a una comprobación técnica ni sustituye la necesidad de validar identidad y consentimiento. Si se graba, debe informarse de ello y definirse finalidad, acceso y conservación. No debe pedirse mediante vídeo documentación de identidad o datos financieros sin una plataforma segura; la confianza generada por una videollamada no sustituye a la identificación formal exigible en contrato, prevención de blanqueo de capitales (PBC/FT), notaría o firma.

## Flujo de reserva, arras y cierre

Un flujo digital seguro conecta CRM, expediente, firma, agenda, pagos y notaría. Antes de una reserva debe verificarse qué se ofrece, quién dispone del inmueble, precio y condiciones. Antes de las arras, debe actualizarse la nota simple y documentarse cargas, financiación, plazos y condición suspensiva si procede. Antes de la escritura, se revisa certificado de comunidad, cancelación de hipoteca, información notarial y documentos pactados. Cada fase puede automatizarse en tareas, pero requiere un responsable humano que autorice el paso: "no enviar contrato" si faltan campos críticos, "no marcar cobrado" sin conciliación, "no lanzar firma" sin versión aprobada.

## Pagos, conciliación y verificación antifraude

Los pagos inmobiliarios pueden incluir reservas, provisiones, honorarios, gastos y cantidades a cuenta. Debe definirse cuentas autorizadas, titularidad, referencia de operación y conciliación bancaria. Un cambio de IBAN recibido por correo nunca debe aceptarse como suficiente: hay que llamar a un teléfono verificado previamente o utilizar un portal seguro con registro del cambio. El fraude de suplantación suele explotar cambios urgentes de cuenta o instrucciones de pago; ningún mensaje aislado debe bastar para mover dinero, y ante una urgencia se activa revisión, no obediencia.

## Integraciones e interoperabilidad (APIs)

Una API permite que dos sistemas intercambien datos, pero no elimina la responsabilidad sobre lo que se envía, recibe o conserva. Cada integración (CRM y portal, CRM y firma, gestión documental y contabilidad) abre preguntas: qué dato se transmite, con qué frecuencia, quién puede modificarlo, qué ocurre si falla y cómo se revoca. Deben usarse APIs oficiales y credenciales segregadas, evitando automatizaciones que dependan de cuentas personales o extracción no autorizada de sitios web. Antes de conectar un proveedor conviene revisar exportación, límites, registros, ubicación de los datos y contrato de encargo si se tratan datos personales, empezando con una integración pequeña y medible.

## Automatización de tareas y analítica

Automatizar no significa delegar criterio: una buena regla ejecuta lo repetible y eleva a una persona lo excepcional. Son ejemplos sanos crear tareas tras una visita, recordar la caducidad de una nota simple o avisar de falta de documentación; son peligrosos automatizar la aceptación de ofertas, el cálculo de impuestos definitivos o el envío de información sensible sin revisión. La analítica útil mide el embudo completo (origen del lead, tiempo de respuesta, ratio contacto-visita, visita-oferta, oferta-reserva, días en mercado, reducción de precio, margen de honorarios) segmentado por tipología, zona, canal y periodo, evitando construir paneles con datos que el equipo no entiende ni puede corregir.`,
      easyExplanation:
        "No todos los canales de comunicación valen igual para decisiones importantes: para instrucciones de pago o cambios de precio hay que usar canales corporativos que dejen rastro, no un mensaje suelto de WhatsApp. Antes de cerrar una reserva o unas arras, cada paso (documentos, pagos, firma) debe tener un responsable que apruebe, y nunca se debe aceptar un cambio de cuenta bancaria solo porque llegó por correo: siempre hay que verificar por un segundo canal ya conocido. Automatizar tareas repetitivas está bien, pero decisiones como aceptar una oferta o calcular impuestos siempre necesitan que una persona lo revise.",
      balearExample:
        "Un correo aparentemente enviado por un vendedor en Pollença indicaba que la cuenta para recibir las arras había cambiado, con firma habitual y exigiendo transferencia antes de las 16:00 porque \"hay otro comprador\". El comercial, siguiendo el protocolo, no procesó el cambio por correo: llamó al vendedor con el número registrado antes de la operación, confirmó que el correo era fraudulento y avisó al comprador de no transferir hasta recibir instrucción oficial verificada.",
      keyConcepts: [
        "canal oficial de comunicación",
        "videollamada e identidad digital",
        "flujo de reserva-arras-cierre",
        "conciliación bancaria",
        "fraude de cambio de cuenta (phishing/fraude de CEO)",
        "API y webhook",
        "automatización con excepción definida",
        "analítica por embudo comercial"
      ],
      frequentErrors: [
        "Aceptar un cambio de IBAN recibido solo por correo o mensaje, sin verificación por segundo canal.",
        "Usar mensajería instantánea como único archivo de decisiones importantes, sin resumen en el expediente.",
        "Conectar un proveedor externo (integración/API) sin revisar exportación de datos, contrato de encargo y control de errores.",
        "Automatizar acciones que impliquen aceptar ofertas, calcular impuestos o enviar información sensible sin revisión humana.",
        "Construir paneles de KPIs que el equipo no entiende ni sabe corregir, incentivando comportamientos incorrectos (por ejemplo, cerrar leads antes de tiempo para \"limpiar\" el CRM)."
      ],
      examples: [
        {
          id: "m16-l3-ex1",
          title: "Cliente exige identificación por videollamada",
          scenario:
            "Un cliente exige recibir documentación de identidad y financiera por videollamada antes de la reserva.",
          application:
            "Se explica que la videollamada sirve para informar y cualificar, pero la identificación formal se realiza por un canal seguro (firma electrónica cualificada, notaría, PBC/FT).",
          isBalearContext: false
        },
        {
          id: "m16-l3-ex2",
          title: "Integración CRM-portal mediante API",
          scenario: "Se integra el CRM con un portal inmobiliario mediante API.",
          application:
            "Se prueba primero en un entorno limitado (sandbox), se minimizan los campos transmitidos y se documenta el responsable y el plan de reversión antes de ampliar la integración.",
          isBalearContext: false
        },
        {
          id: "m16-l3-ex3",
          title: "Caída de visitas en Alcúdia",
          scenario: "Una agencia en Alcúdia detecta que las visitas caen un mes concreto.",
          application:
            "La analítica combina dato y narrativa: se revisa si el precio, el anuncio, la estacionalidad turística o la calidad del lead explican el cambio, en lugar de limitarse a mirar el número.",
          isBalearContext: true
        }
      ],
      completed: false
    },
    {
      id: "m16-l4",
      moduleId: "m16",
      title: "Ciberseguridad, privacidad y protección de datos (RGPD y LOPDGDD)",
      order: 4,
      summary:
        "La seguridad y la privacidad no son un aviso legal de relleno: obligan a decidir qué datos se piden, quién los ve, cuánto tiempo se conservan y cómo se reacciona ante un incidente.",
      content: `Una agencia debe identificar qué quiere proteger, quién puede atacarla y qué controles reducen el daño, en lugar de perseguir una seguridad abstracta. Los activos críticos son datos de identidad, documentación de titularidad, información bancaria, credenciales, expedientes de prevención de blanqueo de capitales (PBC/FT), contratos, comunicaciones, dispositivos y reputación. Las amenazas habituales incluyen phishing, fraude de CEO, robo de cuenta, ransomware, pérdida de móvil, acceso de un ex empleado, enlace público indebido y proveedor comprometido. El riesgo más frecuente no es un ataque sofisticado: es una credencial reutilizada, un enlace compartido sin control o una instrucción de pago no verificada.

## Identidad, contraseñas y autenticación multifactor

Cada usuario debe tener cuenta personal, no compartida, y permisos mínimos. Se recomienda gestor de contraseñas, contraseñas únicas, autenticación multifactor (MFA) preferiblemente con aplicación o llave física, recuperación protegida y cierre de sesiones en dispositivos perdidos. Los administradores necesitan cuentas separadas para uso diario y para tareas de administración. Compartir claves de portal, CRM o nube por WhatsApp es uno de los errores más caros; si un proveedor exige una clave compartida, debe buscarse integración o cuenta nominal, y la revocación de acceso debe producirse el mismo día que un comercial deja la empresa, no "cuando haya tiempo".

## Cloud, copias de seguridad y continuidad de negocio

La nube no elimina la necesidad de copias de seguridad: un error de sincronización, un borrado accidental o un ransomware puede propagarse también al almacenamiento cloud. El backup debe diseñarse con diversidad: copia principal en el sistema de trabajo y copia separada con retención y prueba de restauración periódica. No basta con que "el proveedor haga copias": hay que consultar alcance, plazo, procedimiento de recuperación y responsabilidad. Deben documentarse el RPO (cuánta información puede perderse) y el RTO (cuánto tiempo puede estar parada la operación) de forma proporcional al tamaño de la agencia. La continuidad de negocio incluye también teléfonos alternativos, acceso a contactos y un procedimiento manual mínimo para operar si los sistemas fallan.

## Phishing, movilidad BYOD y respuesta ante incidentes

El phishing suplanta entidades o personas para robar credenciales, provocar pagos o instalar malware, imitando al director, banco, notaría, proveedor, propietario o comprador mediante hilos de correo reales comprometidos, dominios parecidos y presión temporal. La defensa combina medidas técnicas (MFA, filtros, actualizaciones) y conductuales (formación y una regla de confirmación por canal independiente). En movilidad, el móvil concentra correo, CRM, cámara, mensajería y documentos; si se permite BYOD (uso del dispositivo personal para trabajo), deben definirse bloqueo de pantalla, cifrado, actualización, no compartir el dispositivo y capacidad de borrado corporativo cuando sea viable. Ante un incidente (cuenta comprometida, enlace público indebido, pérdida de móvil, malware, acceso de ex empleado o fraude de pago), el plan debe fijar fases: detección, clasificación, contención, análisis, recuperación, comunicación y aprendizaje; para datos personales, debe evaluarse si existe una brecha de seguridad y si procede notificación a la autoridad de control o a las personas afectadas dentro de los plazos aplicables.

## RGPD y LOPDGDD aplicados a la actividad inmobiliaria

La protección de datos no es un aviso legal, sino que obliga a decidir qué datos se piden, para qué, quién los ve y cuánto tiempo se conservan. El Reglamento (UE) 2016/679 (RGPD) y su desarrollo español mediante la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) aplican los principios de licitud, lealtad, transparencia, minimización, exactitud, limitación del plazo de conservación, integridad y responsabilidad proactiva. Una agencia trata datos de contacto, identidad, interés de compra, situación familiar, solvencia, documentación, imágenes, comunicaciones y, en algunos casos, datos especialmente sensibles que no deberían solicitarse sin base adecuada. Antes de crear un campo en el CRM debe preguntarse: ¿es necesario para esta finalidad concreta? Deben separarse finalidades —gestionar el encargo, atender una consulta, evaluar solvencia cuando proceda, cumplir PBC/FT, enviar marketing y gestionar la posventa— porque cada una puede tener base jurídica y plazo de conservación distintos; el consentimiento no es la solución universal, y puede no ser apropiado cuando la base real es el contrato, una obligación legal o un interés legítimo bien ponderado.

## Encargados del tratamiento y comunicaciones comerciales

Cuando un proveedor tecnológico (CRM, firma, nube, centralita, herramienta de IA) trata datos por cuenta de la agencia, actúa como encargado del tratamiento y la relación no se resuelve aceptando unos términos sin leerlos: hay que conocer qué datos trata, dónde los aloja, qué medidas ofrece, si usa subencargados, cómo notifica incidentes y cómo devuelve o borra los datos al terminar el contrato, revisando además si existen transferencias internacionales. En cuanto a comunicaciones comerciales, tener el teléfono de un cliente no autoriza automáticamente a enviarle campañas: deben registrarse origen del lead, preferencias y fecha, ofrecer un mecanismo simple de baja y respetar la oposición en todos los canales, sin usar listas compradas ni bases de terceros sin diligencia suficiente.`,
      easyExplanation:
        "La ciberseguridad no requiere un departamento de TI enorme, pero sí una persona responsable, cuentas individuales con doble verificación (MFA), copias de seguridad probadas de verdad (no solo \"creer\" que existen) y un protocolo para cuando llegue un correo raro pidiendo cambiar una cuenta bancaria. El RGPD y la LOPDGDD obligan a pensar, antes de pedir cualquier dato a un cliente, si realmente lo necesitas para lo que estás haciendo en ese momento (por ejemplo, no pedir el DNI o la nómina \"por si acaso\"). Cuando contratas un CRM, una nube o una herramienta de IA, esa empresa trata datos en tu nombre, así que hay que revisar sus condiciones, no solo aceptar y ya está.",
      balearExample:
        "En una agencia de Palma, un comercial compartió por enlace de nube una carpeta con DNI, nóminas, extractos y contrato de trabajo de un candidato a arrendatario, para que el propietario los revisara. El enlace no caducaba, permitía descarga y se reenvió por error a un tercero. La agencia revocó el enlace, cambió el acceso de la carpeta, contactó a los destinatarios para pedir la eliminación, documentó el incidente y evaluó con su DPO si la brecha exigía notificación, cambiando el protocolo para exigir en adelante carpetas nominativas, acceso de solo lectura y caducidad.",
      keyConcepts: [
        "modelo de amenaza",
        "MFA (autenticación multifactor)",
        "RPO/RTO",
        "phishing y fraude de CEO",
        "BYOD",
        "RGPD (Reglamento UE 2016/679)",
        "LOPDGDD (Ley Orgánica 3/2018)",
        "encargado del tratamiento",
        "minimización de datos"
      ],
      frequentErrors: [
        "No probar nunca una restauración real de las copias de seguridad (\"una copia que nunca se ha restaurado es una suposición, no un control\").",
        "Compartir contraseñas de portales, CRM o nube por WhatsApp en lugar de usar cuentas individuales.",
        "Recopilar DNI, nómina o información bancaria \"por si acaso\", sin base jurídica ni finalidad concreta.",
        "No revocar accesos el mismo día que un comercial o colaborador deja la agencia.",
        "Aceptar condiciones de un proveedor (encargado del tratamiento) sin revisar dónde aloja los datos ni cómo los devuelve al finalizar el contrato."
      ],
      examples: [
        {
          id: "m16-l4-ex1",
          title: "Correo urgente pidiendo cambiar la cuenta de comisión",
          scenario: "Llega un correo urgente pidiendo cambiar la cuenta de una comisión antes de las 16:00.",
          application:
            "Se detiene, no se responde ni se hace clic, se reporta, se verifica el origen del hilo por un canal alternativo y se escala antes de actuar.",
          isBalearContext: false
        },
        {
          id: "m16-l4-ex2",
          title: "Pérdida de móvil corporativo en Manacor",
          scenario: "Un comercial en Manacor pierde el móvil con correo, CRM y mensajería abiertos.",
          application:
            "Se bloquean sesiones remotamente, se revocan accesos temporales, se notifica al responsable de seguridad y se documenta el incidente como posible brecha de datos personales.",
          isBalearContext: true
        },
        {
          id: "m16-l4-ex3",
          title: "Newsletter a toda la base del CRM",
          scenario: "La agencia quiere enviar una newsletter de novedades a toda su base de contactos del CRM.",
          application:
            "Se revisa qué contactos dieron consentimiento o tienen base jurídica de marketing, se excluyen los que se opusieron y se ofrece baja fácil en cada envío.",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m16-l5",
      moduleId: "m16",
      title: "Inteligencia artificial aplicada al negocio inmobiliario",
      order: 5,
      summary:
        "La IA puede resumir, clasificar, sugerir y automatizar contenido y procesos, pero no debe presentarse nunca como una fuente jurídica, técnica o financiera independiente ni sustituir la supervisión humana.",
      content: `En una agencia, los usos de menor riesgo de la inteligencia artificial suelen ser borradores de anuncios con revisión posterior, resumen de llamadas, clasificación de correos, extracción de campos de documentos no sensibles, traducción asistida, generación de checklists, búsqueda interna y análisis de feedback. Los usos de mayor riesgo incluyen decisión de solvencia, selección de inquilinos, valoración determinante del precio, recomendación financiera, identificación biométrica o cualquier perfilado que afecte significativamente a una persona. Cada caso de uso necesita una ficha que documente objetivo, dato de entrada, modelo o proveedor, salida, revisión humana, riesgo, base jurídica si hay datos personales, retención y métrica de éxito.

## IA generativa para contenidos inmobiliarios

La IA generativa acelera borradores de títulos, descripciones, guiones, correos, traducciones y resúmenes, pero el anuncio final sigue siendo una declaración comercial de la agencia y del anunciante. El riesgo aparece cuando el modelo completa huecos con supuestos: expresiones como "licencia turística", "vistas al mar", "a cinco minutos", "reforma integral", "rentabilidad garantizada" o "sin gastos" pueden ser falsas o incompletas si no están verificadas. Debe establecerse una plantilla de revisión que obligue a basarse solo en la ficha aprobada y a marcar los datos faltantes, e imágenes generadas deben etiquetarse como visualización cuando no representen el inmueble real; nunca debe usarse IA para falsificar elementos constructivos o presentar una reforma no ejecutada como existente.

## IA en valoración, lead scoring y recomendación

Un algoritmo puede estimar precio, probabilidad de venta, respuesta a una campaña o prioridad de un lead usando datos históricos, pero sus resultados dependen de la calidad, cobertura y contexto de esos datos. Un mercado con poca muestra, fincas singulares, zona costera, rústico, protección pública o cambios regulatorios recientes puede quedar mal representado por el modelo. En selección de clientes, una puntuación (score) puede discriminar indirectamente por zona, nacionalidad, edad, origen o características socioeconómicas si no se controla; no debe usarse un score para rechazar automáticamente a una persona en un alquiler o asignarle condiciones sin intervención humana, y hay que explicar a equipo y cliente qué variables se usan, auditar resultados por grupos y conservar la trazabilidad del criterio aplicado.

## Agentes de IA con capacidad de actuar

Un agente de IA puede encadenar tareas y usar herramientas —consultar el CRM, preparar informes, crear tareas, enviar borradores, extraer datos o coordinar agenda—, por lo que necesita límites de autoridad, registros y mecanismos de parada más estrictos que un simple chatbot. Cuanto mayor acceso tiene, mayor es el riesgo de filtración, acción errónea o pérdida de control, por lo que no deben otorgarse permisos de escritura o envío externo en la primera fase: se empieza con lectura limitada y propuestas que una persona aprueba. La Agencia Española de Protección de Datos (AEPD) ha publicado orientaciones específicas sobre IA agéntica y protección de datos en 2026; para una agencia, la regla es definir tratamiento, datos, herramientas, instrucciones, supervisión y registro antes de activar cualquier autonomía, y un agente no debe cargar documentos sensibles en servicios externos ni contactar directamente a clientes sin supervisión.

## RAG, gobierno de IA y calendario del AI Act

Un sistema de recuperación aumentada por generación (RAG) busca fragmentos relevantes de un repositorio propio y los entrega al modelo para redactar respuestas, útil para manuales de proceso, modelos de contrato, políticas o documentación técnica; solo funciona bien si la base documental está limpia, versionada y con permisos, separada del expediente de cliente, y debe obligar al asistente a citar el documento y la fecha, y a reconocer cuándo no encuentra evidencia. El Reglamento (UE) 2024/1689, conocido como AI Act, contiene obligaciones que se despliegan de forma gradual: en la fecha de edición de este módulo (4 de julio de 2026) la aplicación general está prevista para el 2 de agosto de 2026, mientras que algunas disposiciones —como las prohibiciones y la alfabetización en IA— ya se aplican desde febrero de 2025. No todo uso inmobiliario de IA es automáticamente de alto riesgo, pero no debe asumirse que queda fuera de la norma sin analizar finalidad, impacto y proveedor. La transparencia y la supervisión humana exigen informar con claridad sobre la naturaleza y límites del sistema, evitar criterios discriminatorios ocultos en variables aparentemente neutras, y habilitar una revisión humana real, capaz de cambiar el resultado, no una validación formal de pulsar "aceptar" sin leer.`,
      easyExplanation:
        "La IA puede ahorrar mucho tiempo redactando anuncios, resumiendo llamadas o traduciendo textos, pero nunca debe \"inventar\" datos que no están comprobados, como una licencia turística o una rentabilidad garantizada. Si usas IA para calcular un precio o puntuar a un inquilino, siempre debe haber una persona que pueda revisar y corregir ese resultado, porque el algoritmo puede fallar más en fincas singulares o zonas poco frecuentes. Un \"agente de IA\" que puede enviar correos o borrar archivos automáticamente es mucho más peligroso que un simple chatbot, así que hay que empezar dándole permisos mínimos. Además, la nueva normativa europea de IA (el AI Act) ya obliga a formar al equipo en el uso responsable de estas herramientas, aunque su aplicación completa llegue en agosto de 2026.",
      balearExample:
        "Un asistente de IA generó automáticamente la ficha de una finca en Sóller con frases como \"posibilidad de licencia vacacional\", \"ampliable\" y \"vistas protegidas\", partiendo solo de fotos, la superficie catastral y el texto de un anuncio antiguo. El equipo revisó el borrador, retiró todas las afirmaciones no verificadas de alto riesgo (uso turístico, ampliación, servidumbres, rentabilidad) y estableció que la plantilla de IA debía citar siempre la fuente interna o marcar el dato como pendiente, en lugar de completar huecos con lenguaje persuasivo.",
      keyConcepts: [
        "IA generativa",
        "lead scoring",
        "sesgo algorítmico",
        "agente de IA (IA agéntica)",
        "RAG (recuperación aumentada por generación)",
        "AI Act (Reglamento UE 2024/1689)",
        "alfabetización en IA",
        "supervisión humana efectiva"
      ],
      frequentErrors: [
        "Confiar en que un texto generado por IA es exacto solo porque suena fluido y convincente.",
        "Usar un score de IA para rechazar automáticamente a un candidato de alquiler sin revisión humana.",
        "Dar a un agente de IA permisos de escritura, envío o borrado desde el primer momento, sin fase de prueba con permisos mínimos.",
        "Subir documentación de identidad, solvencia o PBC/FT a una herramienta de IA generativa o de colaboración sin evaluar antes sus condiciones de tratamiento de datos.",
        "Anunciar una herramienta como \"cumplidora del AI Act\" sin haber documentado ni analizado su uso concreto."
      ],
      examples: [
        {
          id: "m16-l5-ex1",
          title: "Rentabilidad garantizada en descripción generada por IA",
          scenario: "Una IA redacta la descripción de un chalet e incluye \"rentabilidad garantizada\".",
          application:
            "Se corrige la afirmación antes de publicar porque ninguna rentabilidad puede garantizarse sin base documental verificable; el texto se marca como borrador sujeto a revisión.",
          isBalearContext: false
        },
        {
          id: "m16-l5-ex2",
          title: "Lead scoring sesgado por zona en Palma",
          scenario: "Un modelo de lead scoring prioriza automáticamente a los leads de una zona concreta de Palma.",
          application:
            "Se audita si la variable de zona está actuando como proxy discriminatorio de nacionalidad o nivel socioeconómico, y se ajusta o retira el modelo si pierde fiabilidad o equidad.",
          isBalearContext: true
        },
        {
          id: "m16-l5-ex3",
          title: "Agente de IA con acceso al CRM",
          scenario: "Se plantea dar a un agente de IA acceso al CRM para responder automáticamente a clientes.",
          application:
            "Se limita inicialmente a lectura y generación de borradores que un comercial aprueba, con registro de cada acción y posibilidad de desactivación inmediata (kill switch).",
          isBalearContext: false
        }
      ],
      completed: false
    },
    {
      id: "m16-l6",
      moduleId: "m16",
      title: "Implantación, cambio tecnológico y verificación de fuentes en Mallorca",
      order: 6,
      summary:
        "La transformación digital de una agencia se ejecuta con una hoja de ruta de 90 días por fases pequeñas, formación práctica y verificación reforzada de fuentes en el mercado balear.",
      content: `La compra de software debe ser una decisión de proceso, seguridad y salida, no solo de precio mensual o apariencia de la interfaz. Un proveedor debe evaluarse en seis dimensiones: funcionalidad, usabilidad, seguridad, privacidad, integración y continuidad. Conviene solicitar demostración con casos propios, no solo datos de ejemplo, y preguntar por soporte, exportación de datos, acuerdos de nivel de servicio (SLA), copias de seguridad, MFA, roles, registros, ubicación de los datos, subencargados, formación, contratos y qué ocurre si el proveedor deja de operar. Un CRM barato que no permite exportar datos, gestionar permisos o registrar la fuente de cada dato puede costar más que una herramienta más sólida; conviene evitar contratos largos antes de probar la adopción real, pilotar con un equipo pequeño y definir un criterio de éxito (reducción de duplicados, mejora del tiempo de respuesta, ahorro de tiempo o calidad del expediente).

## Hoja de ruta de implantación en 90 días

La transformación digital se ejecuta por fases pequeñas, con un responsable, un indicador y una revisión periódica, no con una migración heroica que paraliza la agencia. Un plan de 90 días puede dividirse en tres oleadas: días 1-30, limpieza de datos, inventario de cuentas, activación de MFA, repositorio documental y definición del pipeline comercial; días 31-60, implantación de CRM, plantillas, checklist de expediente, roles y primera automatización; días 61-90, integración con portales o firma electrónica, dashboard de indicadores, formación del equipo y primera auditoría. Esta secuencia estabiliza primero lo básico (seguridad, datos, proceso) antes de añadir IA, agentes automatizados o analítica avanzada. Es esencial comunicar por qué cambia cada hábito: si el equipo entiende que registrar el origen de un lead protege la comisión y evita duplicados, la adopción mejora; si solo se dice "hay que usar el CRM", aparecerá resistencia y trabajo en paralelo con hojas sueltas.

## Formación, adopción y cambio de hábitos

Una herramienta no se implanta cuando se activa una licencia, sino cuando el equipo incorpora un hábito verificable y conoce la razón de hacerlo. La formación debe ser práctica y diferenciada por rol: el equipo comercial necesita CRM, procedimiento de visita, documentación básica y reconocimiento de phishing; dirección necesita KPIs, permisos, aprobaciones y auditoría; administración necesita facturación, expediente, firma y archivo. Es preferible combinar microformación, guías breves de una página, sesiones sobre casos reales, soporte continuo y revisión de errores sin humillación, en lugar de una única sesión de tres horas seguida de la expectativa de adopción inmediata. La adopción se mide con señales sanas —tareas registradas, fichas completas, uso de plantillas, incidencias reportadas y tiempos de respuesta—, nunca solo con el número de clics.

## Mallorca: mercado internacional y verificación de fuentes

El mercado insular combina cliente local, segunda residencia, comprador extranjero, fincas rústicas, costa y producto singular de fuerte atractivo turístico, lo que exige materiales multilingües de calidad, agenda remota, expedientes claros y verificación territorial reforzada. Una plataforma de traducción puede traducir rápido, pero no interpreta por sí sola un estatuto, una servidumbre de costas, una cédula de habitabilidad o una limitación de VPO o VPL (vivienda protegida o de protección limitada). En clientes internacionales debe explicarse de forma transparente el proceso —NIE, cuenta bancaria, notaría, impuestos, representación y límites de la actuación de la agencia— y usarse siempre fuentes oficiales y fecha de consulta en las fichas internas; ante afirmaciones críticas, se añade "sujeto a verificación" y se deriva a un técnico, abogado o la administración competente cuando corresponda. No debe traducirse "posibilidad de alquiler turístico" como una promesa comercial: esa frase exige una cadena de comprobaciones autonómicas, insulares, municipales y comunitarias antes de poder afirmarse.

## Auditoría final de operación digital

Una operación termina correctamente cuando el inmueble fue despublicado o actualizado, las versiones firmadas están archivadas, los accesos compartidos se cerraron, los documentos se conservan según su finalidad y los pagos se han conciliado, reflejando el CRM el resultado real. La auditoría final también identifica la causa de éxito o pérdida de una operación (precio, captación, documentación, canal, tiempo de respuesta, financiación, condiciones o experiencia del cliente), permitiendo pedir reseña de forma legítima, programar la posventa, entregar un dossier al cliente y registrar recomendaciones. Una agencia profesional no pierde la historia de una operación al cerrar la pestaña del CRM: revoca accesos, cierra enlaces temporales y conserva la evidencia necesaria eliminando lo que ya no debe guardarse según la política de retención.`,
      easyExplanation:
        "Cambiar de herramientas o digitalizar una agencia no se hace de golpe: se planifica en fases de 30, 60 y 90 días, empezando siempre por seguridad y datos, después el CRM y el proceso, y solo al final integraciones e IA avanzada. La formación no puede ser una charla única de tres horas: hay que enseñar por rol (comercial, dirección, administración) y con casos reales, y medir si el equipo realmente usa bien las herramientas, no solo cuántos clics hace. En Mallorca, por el peso del mercado internacional y turístico, hay que ser especialmente cuidadoso con traducciones y afirmaciones sobre licencias o usos turísticos: siempre hay que verificar en fuentes oficiales antes de prometer nada. Y cuando se cierra una operación, no basta con \"cerrar la pestaña\": hay que revocar accesos, archivar documentos firmados y conciliar los pagos.",
      balearExample:
        "Una agencia pequeña decide implantar tecnología en 90 días: en los primeros 30 días activa MFA, limpia el inventario de cuentas y crea el repositorio documental; en los siguientes 30 días despliega el CRM, las plantillas y el checklist de expediente; en los últimos 30 días integra el CRM con los portales y realiza la primera auditoría. Un comprador extranjero interesado en una finca en Sóller recibe la documentación traducida, pero la agencia marca como \"sujeto a verificación\" cualquier afirmación sobre posibilidad de uso turístico, derivando la consulta a la administración competente antes de confirmarlo.",
      keyConcepts: [
        "matriz de evaluación de proveedores",
        "hoja de ruta de 90 días",
        "RPO/RTO aplicados a implantación",
        "adopción y cambio de hábitos",
        "verificación de fuentes oficiales",
        "NIE y cliente internacional",
        "VPO/VPL",
        "auditoría final de operación"
      ],
      frequentErrors: [
        "Contratar software solo por precio o apariencia, sin evaluar seguridad, exportación de datos y continuidad ante el cese del proveedor.",
        "Intentar migrar todo el histórico de datos sin criterio, sin depurar duplicados ni clasificar lo que hay que archivar o eliminar.",
        "Dar una única sesión de formación y asumir que el equipo adoptará la herramienta sin refuerzo posterior.",
        "Traducir automáticamente términos jurídicos o urbanísticos delicados (\"holiday rental\", \"building land\", \"sea view\") sin validación humana.",
        "Cerrar una operación sin revocar accesos compartidos ni conciliar los pagos, perdiendo trazabilidad para la posventa."
      ],
      examples: [
        {
          id: "m16-l6-ex1",
          title: "Proveedor de CRM sin exportación de datos",
          scenario: "Un proveedor de CRM ofrece un precio muy bajo pero no permite exportar datos fácilmente.",
          application:
            "Se descarta o se negocia cláusula de exportación y continuidad antes de firmar, evaluando también seguridad y permisos, no solo el precio.",
          isBalearContext: false
        },
        {
          id: "m16-l6-ex2",
          title: "Cierre de venta en Calvià",
          scenario: "Tras cerrar una venta en Calvià, el comercial considera el trabajo terminado.",
          application:
            "Se ejecuta la auditoría final: se despublica el inmueble, se archivan las versiones firmadas, se revocan accesos compartidos, se concilian los pagos y se documenta la lección aprendida.",
          isBalearContext: true
        },
        {
          id: "m16-l6-ex3",
          title: "Traducción automática de ficha para clientes internacionales",
          scenario:
            "Una web ofrece traducción automática de la ficha de una vivienda a varios idiomas para clientes internacionales.",
          application:
            "Se revisa manualmente cualquier término jurídico o urbanístico sensible antes de publicar, evitando que la traducción convierta una posibilidad en una promesa comercial.",
          isBalearContext: false
        }
      ],
      completed: false
    }
  ],
  exercises: [
    {
      id: "m16-e1",
      moduleId: "m16",
      type: "case",
      question:
        "Una agencia de cuatro personas en Palma tiene contactos repartidos entre teléfonos personales, Excel, correo y WhatsApp. Dos comerciales llaman al mismo propietario sin saber qué documentación se le pidió ya. La dirección quiere implantar un CRM en una semana, migrando todo sin depurar.",
      expectedAnswer:
        "El problema no es elegir una marca de CRM, sino la ausencia de fuente maestra, roles, política de contacto y calidad de datos. Debe migrarse solo la cartera activa, restringir altas nuevas fuera del CRM, crear un modelo mínimo (contacto, inmueble, origen, etapa, responsable, consentimiento/preferencia, próxima tarea) y archivar el resto según política de conservación, revisando duplicados durante dos semanas.",
      explanation:
        "El valor de la tecnología no está en automatizar más pasos, sino en dejar menos decisiones importantes sin prueba, revisión humana y control de acceso.",
      difficulty: "medium"
    },
    {
      id: "m16-e2",
      moduleId: "m16",
      type: "decision",
      question:
        "El comercial de una operación en Baleares está fuera de la oficina cuando recibe un correo, aparentemente del vendedor y con firma habitual, que indica que la cuenta para las arras ha cambiado y exige transferencia antes de las 16:00 porque \"hay otro comprador\".",
      options: [
        "Realizar la transferencia inmediatamente para no perder la operación",
        "Reenviar el correo al comprador y esperar su confirmación",
        "Detener la confirmación, llamar al vendedor con el número registrado antes de la operación y validar por un segundo canal antes de actuar",
        "Aceptar el cambio si el correo incluye la firma habitual del vendedor"
      ],
      expectedAnswer:
        "Detener la confirmación, llamar al vendedor con el número registrado antes de la operación y validar por un segundo canal antes de actuar",
      explanation:
        "La urgencia, el cambio de IBAN y la aparente autoridad son tres señales combinadas de fraude; ningún mensaje aislado debe bastar para mover dinero, y siempre debe verificarse por un canal independiente y previamente conocido.",
      difficulty: "basic"
    },
    {
      id: "m16-e3",
      moduleId: "m16",
      type: "comprehension",
      question:
        "Explica la diferencia entre fuente maestra, integración y copia de seguridad, y pon un ejemplo inmobiliario de cada una.",
      expectedAnswer:
        "La fuente maestra decide cuál es la versión oficial de un dato (por ejemplo, el CRM decide el estado del lead); la integración mueve el dato entre sistemas con controles (por ejemplo, sindicar el inventario del CRM a un portal); la copia de seguridad permite recuperar información tras una pérdida o corrupción (por ejemplo, restaurar el expediente completo tras un borrado accidental).",
      explanation:
        "Confundir estos tres conceptos provoca datos contradictorios entre sistemas y falsa sensación de seguridad si nunca se prueba la restauración.",
      difficulty: "basic"
    },
    {
      id: "m16-e4",
      moduleId: "m16",
      type: "case",
      question:
        "Un asistente de IA generó automáticamente la ficha de una finca rústica en Sóller a partir solo de fotos, la superficie catastral y el texto de un anuncio antiguo, incluyendo \"posibilidad de licencia vacacional\", \"ampliable\" y \"vistas protegidas\".",
      expectedAnswer:
        "Se elimina el borrador de publicación y se vuelve a la ficha validada. Se etiquetan como campos críticos: uso turístico, urbanismo, superficie, legalidad de construcciones, costas y servidumbres, y rentabilidad. La plantilla de IA pasa a exigir \"no inventar; marcar como pendiente; citar fuente interna\". Un responsable aprueba cualquier texto antes de publicación, y el expediente conserva versión y fuentes.",
      explanation:
        "Publicar el texto sin revisión sería publicidad potencialmente engañosa y una mala práctica profesional; la IA acelera borradores pero no sustituye la verificación documental.",
      difficulty: "advanced"
    },
    {
      id: "m16-e5",
      moduleId: "m16",
      type: "decision",
      question:
        "Un comercial comparte por enlace de nube una carpeta con documentos de identidad, nóminas, extractos bancarios y contrato de trabajo de un candidato a arrendatario para que el propietario los revise. El enlace no caduca, permite descarga y se reenvía por error a un tercero.",
      options: [
        "No hacer nada porque el error fue involuntario",
        "Revocar el enlace, cambiar el acceso, contactar a los destinatarios, documentar el incidente y evaluar con el DPO si procede notificación",
        "Eliminar solo el correo del reenvío erróneo",
        "Pedir al propietario que borre los documentos por su cuenta"
      ],
      expectedAnswer:
        "Revocar el enlace, cambiar el acceso, contactar a los destinatarios, documentar el incidente y evaluar con el DPO si procede notificación",
      explanation:
        "Existe una exposición de datos personales de alto impacto potencial; la reacción debe ser rápida y documentada, y hay que evaluar formalmente si constituye una brecha que exige notificación conforme al RGPD.",
      difficulty: "advanced"
    },
    {
      id: "m16-e6",
      moduleId: "m16",
      type: "comprehension",
      question:
        "¿Qué elementos probatorios mínimos debería exigir una agencia a un proveedor de firma electrónica antes de usarlo para formalizar reservas?",
      expectedAnswer:
        "Auditoría de evidencias: identidad del firmante, IP y dispositivo cuando corresponda, OTP (código de un solo uso), sello de tiempo, hash del documento, certificados, anexos, log de eventos y posibilidad de descargar el certificado de firma.",
      explanation:
        "La fuerza probatoria de la firma electrónica depende de cómo se vincula a la persona, al documento y a la integridad de la evidencia conservada, no solo de la imagen de una rúbrica.",
      difficulty: "medium"
    },
    {
      id: "m16-e7",
      moduleId: "m16",
      type: "case",
      question:
        "Una agencia pequeña de tres personas quiere digitalizarse pero teme \"romper\" su operación actual con una migración completa e inmediata.",
      expectedAnswer:
        "Se recomienda una hoja de ruta de 90 días: días 1-30, limpieza de datos, MFA, repositorio documental; días 31-60, CRM, plantillas, checklist de expediente y primera automatización; días 61-90, integración con portales o firma, dashboard y auditoría. Se prioriza siempre seguridad y datos antes que IA o automatización avanzada.",
      explanation:
        "La transformación digital se ejecuta por fases pequeñas con responsable, indicador y revisión, no con una migración heroica que paraliza la agencia.",
      difficulty: "medium"
    },
    {
      id: "m16-e8",
      moduleId: "m16",
      type: "decision",
      question:
        "Un modelo de lead scoring de una agencia prioriza sistemáticamente a los leads de determinadas zonas de Mallorca frente a otras con perfiles similares de interés y presupuesto.",
      options: [
        "Mantener el modelo porque mejora la eficiencia comercial",
        "Auditar si la variable de zona actúa como proxy discriminatorio de nacionalidad, origen o nivel socioeconómico, y ajustar o retirar el modelo si pierde fiabilidad o equidad",
        "Ignorar el problema porque la IA \"no discrimina\"",
        "Aumentar el peso de la variable de zona para mejorar la conversión"
      ],
      expectedAnswer:
        "Auditar si la variable de zona actúa como proxy discriminatorio de nacionalidad, origen o nivel socioeconómico, y ajustar o retirar el modelo si pierde fiabilidad o equidad",
      explanation:
        "Un score puede discriminar indirectamente por zona, nacionalidad, edad, origen o características socioeconómicas si no se controla; debe explicarse el criterio, auditarse por grupos y mantener trazabilidad, sin usarlo nunca para decidir automáticamente sin intervención humana.",
      difficulty: "advanced"
    }
  ],
  quizQuestions: [
    {
      id: "m16-q1",
      question:
        "¿Cuál es la pregunta correcta que debe hacerse ante cualquier herramienta tecnológica inmobiliaria, según el criterio del módulo?",
      options: [
        "Qué herramienta está de moda entre otras agencias",
        "Qué riesgo, coste o retraso reduce y qué evidencia deja",
        "Cuántas funciones ofrece en total",
        "Cuánto cuesta la licencia mensual"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El criterio profesional exige evaluar la utilidad real (riesgo, coste, evidencia), no la popularidad o el precio como únicos factores.",
      sourceModuleId: "m16",
      legalReference: "Principio general del módulo (buenas prácticas profesionales PropTech)",
      difficulty: "basic"
    },
    {
      id: "m16-q2",
      question:
        "En el modelo de datos inmobiliario, ¿qué debe hacerse ante una discrepancia entre la superficie del Registro, el Catastro y la realidad física de una finca rústica?",
      options: [
        "Usar siempre la cifra del Catastro por ser la más oficial",
        "Elegir la cifra que más beneficie a la comercialización",
        "Registrar la discrepancia y la acción pendiente, sin forzar una cifra única",
        "Ignorar la discrepancia si el vendedor confirma la superficie verbalmente"
      ],
      correctAnswerIndex: 2,
      explanation:
        "El sistema debe permitir registrar visiblemente la incidencia hasta que sea resuelta o explicada mediante verificación técnica.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de calidad del dato y due diligence documental",
      difficulty: "medium"
    },
    {
      id: "m16-q3",
      question:
        "¿Qué nivel de firma electrónica tiene, según eIDAS, un efecto jurídico equivalente a la firma manuscrita en el ámbito previsto por el reglamento?",
      options: [
        "Firma electrónica simple",
        "Firma electrónica avanzada",
        "Firma electrónica cualificada",
        "Aceptación por WhatsApp con doble check azul"
      ],
      correctAnswerIndex: 2,
      explanation:
        "La firma cualificada, regulada por eIDAS y complementada por la Ley 6/2020 de servicios electrónicos de confianza, tiene el efecto jurídico reforzado equiparable a la manuscrita.",
      sourceModuleId: "m16",
      legalReference: "Reglamento eIDAS; Ley 6/2020, de servicios electrónicos de confianza",
      difficulty: "medium"
    },
    {
      id: "m16-q4",
      question:
        "¿Cuál de las siguientes es la reacción correcta ante un correo que solicita cambiar la cuenta bancaria para el pago de unas arras, alegando urgencia?",
      options: [
        "Procesarlo si el mensaje incluye la firma habitual del remitente",
        "Detener la operación y verificar por un canal independiente y previamente conocido antes de actuar",
        "Consultarlo únicamente con el comprador antes de decidir",
        "Aceptarlo si se recibe también una captura de pantalla del supuesto justificante de pago"
      ],
      correctAnswerIndex: 1,
      explanation:
        "La urgencia, el cambio de cuenta y la aparente autoridad son señales combinadas de fraude; ningún mensaje aislado, ni siquiera con captura de pantalla, debe bastar para mover dinero.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas antifraude / INCIBE, Protege tu Empresa",
      difficulty: "medium"
    },
    {
      id: "m16-q5",
      question:
        "Según los principios del RGPD aplicados a la actividad inmobiliaria, ¿qué debe preguntarse una agencia antes de crear un nuevo campo en el CRM?",
      options: [
        "Si el campo mejora la apariencia del sistema",
        "Si el proveedor del CRM lo permite técnicamente",
        "Si ese dato es necesario para una finalidad concreta (principio de minimización)",
        "Si otros competidores ya recopilan ese dato"
      ],
      correctAnswerIndex: 2,
      explanation:
        "El principio de minimización del RGPD exige limitar los datos tratados a los adecuados, pertinentes y necesarios para la finalidad concreta perseguida.",
      sourceModuleId: "m16",
      legalReference: "Reglamento (UE) 2016/679 (RGPD), art. 5.1.c) — principio de minimización de datos",
      difficulty: "medium"
    },
    {
      id: "m16-q6",
      question:
        "¿Qué norma española desarrolla y complementa al RGPD en materia de protección de datos y garantía de derechos digitales?",
      options: [
        "Ley 6/2020, de servicios electrónicos de confianza",
        "Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)",
        "Reglamento (UE) 2024/1689 (AI Act)",
        "Ley de Ordenación de la Edificación"
      ],
      correctAnswerIndex: 1,
      explanation:
        "La LOPDGDD es la norma española que adapta y desarrolla el RGPD en el ordenamiento interno, incluyendo garantía de derechos digitales.",
      sourceModuleId: "m16",
      legalReference: "Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD)",
      difficulty: "basic"
    },
    {
      id: "m16-q7",
      question:
        "¿Cuándo tiene prevista su aplicación general el Reglamento (UE) 2024/1689 (AI Act), según la fecha de edición del módulo (4 de julio de 2026)?",
      options: [
        "Ya está plenamente en vigor desde 2024",
        "El 2 de agosto de 2026",
        "No tiene fecha prevista todavía",
        "Solo aplicará a partir de 2030"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Aunque algunas disposiciones (prohibiciones y alfabetización en IA) ya se aplican desde febrero de 2025, la aplicación general del AI Act está prevista para el 2 de agosto de 2026.",
      sourceModuleId: "m16",
      legalReference: "Reglamento (UE) 2024/1689 (AI Act) — calendario de aplicación",
      difficulty: "advanced"
    },
    {
      id: "m16-q8",
      question:
        "¿Qué disposiciones del AI Act ya se aplicaban antes de la aplicación general del reglamento, según el módulo?",
      options: [
        "Todas las obligaciones de auditoría de sistemas de alto riesgo",
        "Las prohibiciones y la alfabetización en IA, desde febrero de 2025",
        "Solo las sanciones económicas",
        "Ninguna disposición se aplica hasta agosto de 2026"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El AI Act se despliega de forma gradual; las prohibiciones de ciertos usos y la obligación de alfabetización en IA ya son exigibles desde febrero de 2025.",
      sourceModuleId: "m16",
      legalReference: "Reglamento (UE) 2024/1689 (AI Act) — disposiciones de aplicación anticipada",
      difficulty: "advanced"
    },
    {
      id: "m16-q9",
      question:
        "¿Cuál es el papel de un CRM, proveedor de firma electrónica o herramienta de IA que trata datos de clientes por cuenta de la agencia, según el RGPD?",
      options: [
        "Responsable del tratamiento, con obligaciones idénticas a la agencia",
        "Encargado del tratamiento, sujeto a instrucciones documentadas de la agencia",
        "Tercero ajeno a cualquier obligación de protección de datos",
        "Interesado, con derechos sobre los datos tratados"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El proveedor actúa como encargado del tratamiento, tratando los datos según instrucciones documentadas, con obligaciones sobre subencargados, incidentes y devolución o borrado de datos al finalizar el contrato.",
      sourceModuleId: "m16",
      legalReference: "Reglamento (UE) 2016/679 (RGPD), art. 28 — encargado del tratamiento",
      difficulty: "medium"
    },
    {
      id: "m16-q10",
      question:
        "¿Qué debe evitarse al usar IA generativa para redactar una descripción inmobiliaria, según el módulo?",
      options: [
        "Usar cualquier plantilla de revisión antes de publicar",
        "Completar huecos de información con afirmaciones no verificadas como \"licencia turística\" o \"rentabilidad garantizada\"",
        "Traducir el texto a varios idiomas",
        "Generar varios títulos alternativos para el anuncio"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El riesgo principal de la IA generativa aparece cuando completa huecos con supuestos no verificados; toda afirmación de alto riesgo debe basarse en la ficha aprobada o marcarse como pendiente.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de publicidad inmobiliaria y AI Act (transparencia)",
      difficulty: "basic"
    },
    {
      id: "m16-q11",
      question:
        "Ante un modelo de IA usado para lead scoring que podría discriminar indirectamente por zona o nacionalidad, ¿qué medida es correcta?",
      options: [
        "Aumentar el peso de esa variable si mejora la conversión",
        "Auditar resultados por grupos, verificar variables proxy y mantener trazabilidad del criterio, sin decidir automáticamente",
        "Eliminar cualquier dato de zona del sistema sin analizar el impacto",
        "Delegar la decisión final de aceptación al modelo sin revisión"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Debe garantizarse explicabilidad, auditoría por grupos y supervisión humana, evitando que un score discrimine indirectamente por variables sensibles.",
      sourceModuleId: "m16",
      legalReference: "AI Act (Reglamento UE 2024/1689) — no discriminación y supervisión humana; RGPD, principio de licitud",
      difficulty: "advanced"
    },
    {
      id: "m16-q12",
      question:
        "¿Qué requisito mínimo debe cumplir un agente de IA con capacidad de actuar (por ejemplo, enviar correos o modificar el CRM) en su primera fase de implantación?",
      options: [
        "Acceso total de lectura y escritura desde el inicio para maximizar eficiencia",
        "Permisos de mínimo privilegio, lectura limitada y propuestas que una persona aprueba, con registro y posibilidad de parada",
        "Ninguna supervisión, ya que la IA es más precisa que una persona",
        "Autorización solo del proveedor tecnológico, sin intervención de la agencia"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Cuanto mayor es el acceso de un agente de IA, mayor el riesgo de filtración o acción errónea; debe empezarse con permisos mínimos, sandbox, lista de acciones prohibidas y aprobación humana.",
      sourceModuleId: "m16",
      legalReference: "Orientaciones de la AEPD sobre IA agéntica y protección de datos (2026); AI Act — supervisión humana",
      difficulty: "advanced"
    },
    {
      id: "m16-q13",
      question:
        "¿Qué elemento NO debe faltar en un plan de continuidad de negocio frente a un incidente de ciberseguridad como un ransomware?",
      options: [
        "Copia de seguridad separada, con retención y prueba periódica de restauración",
        "Confiar únicamente en que \"el proveedor de la nube ya hace copias\"",
        "Un procedimiento manual mínimo únicamente para el departamento de IT",
        "Ignorar el RPO y el RTO por considerarse términos exclusivamente técnicos"
      ],
      correctAnswerIndex: 0,
      explanation:
        "La nube no elimina la necesidad de copias de seguridad diversificadas y probadas; una copia nunca restaurada es una suposición, no un control.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de ciberseguridad / INCIBE, Protege tu Empresa",
      difficulty: "medium"
    },
    {
      id: "m16-q14",
      question:
        "¿Qué principio de calidad del dato exige que un mismo dato (por ejemplo, la superficie de un inmueble) no se contradiga entre el portal, la web, el CRM y el contrato?",
      options: ["Exactitud", "Consistencia", "Completitud", "Actualidad"],
      correctAnswerIndex: 1,
      explanation:
        "La consistencia exige que el mismo dato esencial coincida en todos los canales públicos y documentos de la operación.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de gestión documental y calidad del dato",
      difficulty: "basic"
    },
    {
      id: "m16-q15",
      question:
        "En el flujo digital de reserva, arras y cierre, ¿qué debe ocurrir antes de \"marcar cobrado\" un pago en el sistema?",
      options: [
        "Recibir una captura de pantalla del comprobante de pago",
        "Realizar la conciliación bancaria del pago recibido",
        "Confiar en la palabra del comercial que gestionó la operación",
        "Esperar a que el cliente lo confirme por WhatsApp"
      ],
      correctAnswerIndex: 1,
      explanation:
        "El sistema debe configurarse con \"gates\" que impidan marcar un pago como cobrado sin conciliación bancaria efectiva, evitando aceptar como prueba una simple captura de pantalla.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de pagos, conciliación y verificación antifraude",
      difficulty: "medium"
    },
    {
      id: "m16-q16",
      question: "¿Cuál de las siguientes prácticas de movilidad (BYOD) es incorrecta según el módulo?",
      options: [
        "Definir bloqueo de pantalla, cifrado y actualización obligatoria del dispositivo",
        "Permitir capacidad de borrado corporativo remoto cuando sea viable",
        "Guardar en la galería o en apps personales del móvil una carpeta permanente con DNI, extractos bancarios y expedientes completos",
        "Establecer un procedimiento claro ante la pérdida o robo del dispositivo"
      ],
      correctAnswerIndex: 2,
      explanation:
        "Un comercial no debe llevar en su móvil personal una carpeta permanente con documentación sensible; el dispositivo móvil debe tratarse como parte del perímetro de seguridad de la agencia.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de ciberseguridad y protección de datos en movilidad (RGPD, seguridad del tratamiento)",
      difficulty: "medium"
    },
    {
      id: "m16-q17",
      question:
        "¿Qué elemento distingue una integración por API bien gestionada de una automatización de riesgo, según el módulo?",
      options: [
        "El uso de credenciales personales para conectar cualquier proveedor",
        "El uso de APIs oficiales, credenciales segregadas, minimización de campos y prueba en entorno controlado (sandbox) antes de ampliar el alcance",
        "La velocidad con la que se implementa la integración",
        "El número de sistemas que se conectan simultáneamente"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Antes de conectar un proveedor debe evaluarse exportación, límites, registros, ubicación de los datos y contrato, empezando con una integración pequeña y medible en sandbox.",
      sourceModuleId: "m16",
      legalReference: "Buenas prácticas de integraciones e interoperabilidad; RGPD (encargados y subencargados del tratamiento)",
      difficulty: "medium"
    },
    {
      id: "m16-q18",
      question:
        "En el contexto del mercado inmobiliario balear, ¿qué debe hacerse antes de afirmar en un anuncio la \"posibilidad de alquiler turístico\" de una vivienda?",
      options: [
        "Publicarlo directamente si el propietario lo asegura verbalmente",
        "Verificar la cadena de comprobaciones autonómicas, insulares, municipales y comunitarias aplicables antes de afirmarlo",
        "Usar la traducción automática de un anuncio similar de otra zona",
        "Añadir la coletilla \"consultar condiciones\" sin verificación adicional"
      ],
      correctAnswerIndex: 1,
      explanation:
        "Esa afirmación exige verificación en múltiples niveles administrativos (autonómico, insular, municipal y comunitario) antes de poder comunicarse como un hecho, no una promesa comercial sin base.",
      sourceModuleId: "m16",
      legalReference:
        "Buenas prácticas de verificación de fuentes en el mercado balear; normativa turística y urbanística aplicable (BOE/BOIB)",
      difficulty: "advanced"
    }
  ]
};

export const m16Glossary: GlossaryItem[] = [
  {
    id: "g-m16-rpo",
    term: "RPO (Recovery Point Objective)",
    definition:
      "Cantidad máxima de información (medida en tiempo) que una organización puede permitirse perder en caso de incidente, antes de recuperar desde una copia de seguridad.",
    easyDefinition:
      "Es \"cuánta información como máximo puedes permitirte perder\" si algo falla; por ejemplo, si tu RPO es de 24 horas, como mucho perderías lo trabajado en el último día.",
    relatedModuleId: "m16"
  },
  {
    id: "g-m16-rto",
    term: "RTO (Recovery Time Objective)",
    definition:
      "Tiempo máximo asumible que una organización puede estar sin operar un sistema tras un incidente, antes de que la interrupción sea inaceptable para el negocio.",
    easyDefinition:
      "Es \"cuánto tiempo como máximo puedes estar parado\" antes de que el problema sea grave para la agencia.",
    relatedModuleId: "m16"
  },
  {
    id: "g-m16-encargado-tratamiento",
    term: "Encargado del tratamiento",
    definition:
      "Persona física o jurídica (por ejemplo, un proveedor de CRM, firma electrónica o nube) que trata datos personales por cuenta y siguiendo instrucciones del responsable del tratamiento (la agencia), conforme al artículo 28 del RGPD.",
    easyDefinition:
      "Es la empresa externa (CRM, nube, firma) que guarda o procesa los datos de tus clientes en tu nombre, y con la que debes tener un contrato claro.",
    relatedModuleId: "m16"
  },
  {
    id: "g-m16-rag",
    term: "RAG (Retrieval-Augmented Generation / recuperación aumentada por generación)",
    definition:
      "Técnica de IA que busca fragmentos relevantes en un repositorio documental propio antes de generar una respuesta, citando la fuente utilizada.",
    easyDefinition:
      "Es un asistente de IA que primero busca en tus propios documentos (manuales, plantillas, políticas) y luego responde basándose en lo que encontró, no inventándoselo.",
    relatedModuleId: "m16"
  },
  {
    id: "g-m16-ia-agentica",
    term: "IA agéntica (agente de IA)",
    definition:
      "Sistema de inteligencia artificial capaz de encadenar tareas y usar herramientas de forma autónoma (consultar sistemas, generar documentos, enviar mensajes) con menor intervención humana directa que un chatbot tradicional.",
    easyDefinition:
      "Es una IA que no solo responde preguntas, sino que puede \"hacer cosas\" por sí sola (como enviar un correo o modificar el CRM), por lo que necesita límites y supervisión más estrictos.",
    relatedModuleId: "m16"
  },
  {
    id: "g-m16-eidas",
    term: "eIDAS",
    definition:
      "Reglamento europeo (UE) 910/2014 que regula la identificación electrónica y los servicios de confianza para las transacciones electrónicas en el mercado interior, base del marco de firma electrónica (simple, avanzada y cualificada) desarrollado en España por la Ley 6/2020.",
    easyDefinition:
      "Es la norma europea que dice qué validez legal tiene firmar un documento de forma digital, y por qué no todas las \"firmas electrónicas\" valen lo mismo.",
    relatedModuleId: "m16"
  }
];

export const m16Alerts: string[] = [
  "AI Act — calendario de aplicación gradual: El Reglamento (UE) 2024/1689 (AI Act) no entra en vigor de una sola vez. Las prohibiciones de ciertos usos y la obligación de alfabetización en IA ya son exigibles desde febrero de 2025. La aplicación general del reglamento está prevista para el 2 de agosto de 2026. Las agencias deben revisar qué obligaciones les afectan según la fecha, sin asumir que su actividad queda automáticamente fuera de la norma ni que \"ya cumplen\" sin haber documentado el análisis de uso concreto.",
  "AEPD — orientaciones sobre IA agéntica (2026): La Agencia Española de Protección de Datos ha publicado en 2026 orientaciones específicas sobre IA agéntica (agentes de IA con capacidad de actuar) y protección de datos. Las agencias que utilicen o planeen utilizar agentes de IA con acceso a CRM, correo o documentación deben definir tratamiento, datos, herramientas, instrucciones, supervisión y registro antes de activar cualquier autonomía.",
  "Fuentes oficiales sujetas a revisión continua: El propio módulo advierte (nota de actualización, página final) que \"la tecnología, los proveedores y los marcos aplicables evolucionan. Para operaciones reales, valida la versión vigente de la norma, los términos del proveedor y el flujo concreto de datos antes de activar una automatización o un sistema de IA.\" Esto aplica en particular a: Reglamento (UE) 2024/1689 (AI Act), Ley 6/2020 de servicios electrónicos de confianza, Reglamento (UE) 2016/679 (RGPD) y guías de la AEPD e INCIBE.",
  "Verificación reforzada en Mallorca (mercado turístico/internacional): Ninguna plataforma de traducción o herramienta de IA interpreta por sí sola un estatuto, una servidumbre de costas, una cédula de habitabilidad o una limitación de VPO/VPL. Cualquier afirmación relativa a \"posibilidad de alquiler turístico\" o uso turístico de un inmueble en Baleares exige verificación en fuentes oficiales autonómicas, insulares, municipales y comunitarias antes de publicarse, dada la evolución frecuente de la normativa turística y urbanística balear.",
  "Fecha de referencia del contenido: Todo el contenido de este módulo está revisado a fecha 4 de julio de 2026; cualquier referencia normativa debe contrastarse con la versión BOE/BOIB/EUR-Lex vigente en el momento de uso real, especialmente en materia de IA, protección de datos y servicios de confianza, por tratarse de marcos en evolución activa."
];
