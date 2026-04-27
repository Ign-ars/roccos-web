const products = [
  {
    id: "a",
    nombre: "Válvula Elastomérica Compuerta ",
    categoria: "Válvulas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/a.png",
    descripcionCorta:
      "Válvula de compuerta elastomérica bridada marca DICRAN para agua potable, red seca y riego.",
    descripcionLarga:
      "La Válvula de Compuerta Elastomérica Bridada marca DICRAN es utilizada para redes de agua potable, red seca y riego. Fue diseñada para eliminar al máximo la fricción en el deslizamiento, logrando una maniobra más suave y un mayor ciclo de vida.",
    especificaciones: [
      "Tipo: válvula de compuerta elastomérica bridada",
      "Medida: consulta por tus medidas especificas",
      "Uso: agua potable, red seca y riego",
      "Norma: NCH 2436 OF 1998",
      "Certificación: CESMEC",
    ],
  },
  {
    id: "b",
    nombre: "Válvula Solenoide",
    categoria: "Válvulas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/b.png",
    descripcionCorta:
      "Válvula solenoide de 1½” con diseño durable, fácil mantenimiento y operación confiable.",
    descripcionLarga:
      'Válvula solenoide con conexión rosca de 1½". La purga manual interna y externa permite una activación rápida y sencilla a nivel de la válvula. Su diseño durable con tornillos entrega máxima resistencia y su junta de diafragma con doble reborde ofrece un rendimiento superior sin pérdidas. Incorpora solenoide encapsulado de 24 V CA con émbolo cautivo para un mantenimiento sin problemas.',
    especificaciones: [
      'Conexión: rosca 1½"',
      "Rango de flujo/presión: 1.4 a 10 bar",
      "Solenoide: 24 V CA",
      "Temperatura máxima: 66 °C",
    ],
  },
  {
    id: "d",
    nombre: 'Válvula reductora Tiemme',
    categoria: "Válvulas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/d.png",
    descripcionCorta:
      "Válvula reductora de presión italiana para regulación precisa en sistemas industriales y residenciales.",
    descripcionLarga:
      'Asegura un control de presión eficiente con la Válvula Reductora de Presión 3110N 1/2" de Tiemme Italiana. Diseñada para entregar un rendimiento superior en sistemas industriales y residenciales, garantiza regulación precisa y estable. Fabricada en Italia con materiales de alta calidad, su diseño roscado facilita una instalación segura y un mantenimiento sencillo. Es ideal para sistemas de agua y otros fluidos, ofreciendo durabilidad, seguridad y fiabilidad en operación.',
    especificaciones: [
      'Medida: 1/2"',
      "Presión nominal: PN25",
      "Origen: Italia",
      "Aplicación: sistemas de agua y otros fluidos",
    ],
  },
  {
    id: "e",
    nombre: "Filtro papel plegado Vigahome",
    categoria: "Filtros",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/e.png",
    descripcionCorta:
      "Filtro lavable de papel plegado para sedimentos finos como lodo, óxido, polvo y material vegetal.",
    descripcionLarga:
      "Filtro de papel plegado lavable, cuya función principal es eliminar sedimentos finos y material vegetal. Reduce partículas como lodo, óxido y polvo, ayudando a mejorar la calidad del agua en sistemas de filtración. Presenta tono blanco y azul y un caudal aproximado de 25 litros por minuto.",
    especificaciones: [
      "Micraje: 5 micras",
      "Tipo: papel plegado lavable",
      "Caudal: 25 lt/min",
      "Color: blanco y azul",
    ],
  },
  {
    id: "f",
    nombre: 'Filtro Sedimento Polipropileno Hilado ',
    categoria: "Filtros",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/f.png",
    descripcionCorta:
      "Cartucho de repuesto para sedimentos finos, arena, lodo, óxido y material orgánico.",
    descripcionLarga:
      'Cartucho de repuesto de sedimento PP de 10 x 2.5 pulgadas, fabricado en polipropileno hilado. Está disponible en 10 y 20 micras y se utiliza para remover sedimentos finos, arena, lodo, suciedad, partículas de óxido, material orgánico y otros contaminantes presentes en el agua.',
    especificaciones: [
      'Tamaño: 10" x 2.5"',
      "Material: polipropileno hilado",
      "Micras disponibles: 10 y 20",
      "Uso: remoción de sedimentos y partículas",
    ],
  },
  {
    id: "g",
    nombre: "Filtro Flowmak malla lavable",
    categoria: "Filtros",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/g.png",
    descripcionCorta:
      "Filtro de cartucho con malla lavable de 80 micras para retención de partículas sólidas finas.",
    descripcionLarga:
      "Filtro de cartucho con malla lavable de 80 micras, diseñado para filtrar partículas sólidas de tamaño relativamente pequeño en agua u otros líquidos. Su cartucho cilíndrico incorpora una malla fina capaz de capturar partículas con un diámetro de hasta 0.08 milímetros, entregando una filtración práctica y reutilizable.",
    especificaciones: [
      "Tipo: cartucho con malla lavable",
      "Micraje: 80 micras",
      "Medida: 10 x 2,5",
      "Uso: agua y otros líquidos",
    ],
  },
  {
    id: "h",
    nombre: "Filtro de malla Flowmak plástico ",
    categoria: "Filtros",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/h.png",
    descripcionCorta:
      "Filtro plástico para agua de riego, de fácil montaje y mantenimiento, ideal para pequeños caudales.",
    descripcionLarga:
      "Filtro para agua de riego con cuerpo de polipropileno y sellos de EPDM. Soporta una presión máxima de 10 bar y es ideal para la filtración de pequeños caudales. Entrega filtración de 100 o 120 mesh (149 o 125 micras). Puede instalarse en posición horizontal o vertical y se desmonta fácilmente sin abrazaderas metálicas. Su cartucho filtrante de polipropileno es fácil de reemplazar.",
    especificaciones: [
      "Cuerpo: polipropileno",
      "Sellos: EPDM",
      "Presión máxima: 10 bar",
      "Filtración: 100 o 120 mesh",
      "Instalación: horizontal o vertical",
    ],
  },
  {
    id: "j",
    nombre: "Bomba centrífuga horizontal multietapa Ebara 2CDX-2CDXL",
    categoria: "Bombas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/j.png",
    descripcionCorta:
      "Bomba multietapa Ebara para riego, lavado, tratamiento de agua y aplicaciones generales con agua limpia.",
    descripcionLarga:
      "Bomba centrífuga horizontal multietapa modelo 2CDX - 2CDXL. Posee descarga de 1”, succión de 1-1/2” o 1-1/4” según versión, caudal máximo de 12.6 m3/h, altura máxima de 71.5 m y potencia de hasta 5.0 HP. Construida en AISI 304 y versión L en AISI 316. Su presión máxima de trabajo es de 8 bar. Está diseñada para riego de jardines a pequeña escala, lavado, tratamiento de agua, torres de enfriamiento y movimiento de agua limpia en general.",
    especificaciones: [
      "Modelo: 2CDX - 2CDXL",
      'Descarga: 1"',
      "Caudal máximo: 12.6 m3/h",
      "Altura máxima: 71.5 m",
      "Potencia: hasta 5 HP",
      "Construcción: AISI 304 / AISI 316",
    ],
  },
  {
    id: "k",
    nombre: "Bomba Serie SB-SBI verticales",
    categoria: "Bombas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/k.png",
    descripcionCorta:
      "Bombas centrífugas verticales multietapas en acero inoxidable para uso industrial y sistemas de presión.",
    descripcionLarga:
      "Serie SB-SBI de bombas centrífugas verticales multietapas construidas en acero inoxidable AISI 304. Están diseñadas para uso industrial, equipos de presión, redes de incendio, ósmosis inversa y sistemas de calefacción. Soportan una presión máxima de trabajo de 25 bar y temperatura del líquido desde -15°C hasta +120°C. El cuerpo, impulsores, difusores y todas las partes en contacto con el líquido son de acero inoxidable AISI 304. Eje en AISI 431 y sello mecánico en SiC/SiC - EPDM.",
    especificaciones: [
      "Tipo: centrífuga vertical multietapa",
      "Construcción: acero inoxidable AISI 304",
      "Presión máxima: 25 bar",
      "Temperatura: -15°C a +120°C",
      "Aplicaciones: presión, incendio, ósmosis, calefacción",
    ],
  },
  {
    id: "l",
    nombre: "Bomba de superficie Serie MH",
    categoria: "Bombas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/l.png",
    descripcionCorta:
      "Bomba multietapa Franklin Electric para aumento de presión con construcción en acero inoxidable.",
    descripcionLarga:
      "La serie MH de Franklin Electric corresponde a bombas multietapas diseñadas para aumentar la presión de agua según las necesidades del sistema. Su construcción en acero inoxidable entrega excelente rendimiento en una amplia gama de aplicaciones. Soporta una presión máxima de trabajo de 10 bar y temperaturas del líquido entre -15°C y +100°C. Incluye cuerpo, impulsores, difusores y tapa de bomba en AISI 304; soporte de bomba y carcaza del motor en aluminio; eje en AISI 304; y sello mecánico en carbón/cerámica/EPDM.",
    especificaciones: [
      "Serie: MH",
      "Marca: Franklin Electric",
      "Presión máxima: 10 bar",
      "Temperatura: -15°C a +100°C",
      "Construcción principal: AISI 304",
    ],
  },
  {
    id: "n",
    nombre: "Bomba dosificadora de cloro SEKO",
    categoria: "Bombas",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/n.png",
    descripcionCorta:
      "Bomba dosificadora de cloro SEKO con regulador de flujo y комплект de instalación incluido.",
    descripcionLarga:
      'Bomba dosificadora de cloro marca SEKO, procedencia Italia, modelo 632. Tiene un rendimiento máximo de 2 litros por hora y una presión máxima de 7 bar, entregando hasta 100 pulsos de cloro por minuto. Incorpora regulador de flujo. El producto incluye bomba dosificadora, válvula de pie, válvula inyectora de 1/2" HE, 2 metros de manguera de succión, 2 metros de manguera de descarga y todos los acoples necesarios. Para la instalación solo faltaría la tee o collarín para atornillar el inyector, además del bidón o estanque para el cloro.',
    especificaciones: [
      "Marca: SEKO",
      "Modelo: 632",
      "Caudal máximo: 2 l/h",
      "Presión máxima: 7 bar",
      "Pulsos: hasta 100 por minuto",
      "Origen: Italia",
    ],
  },
  {
    id: "p",
    nombre: "Nebulizador Fogger cruzeta 4 salidas 7800",
    categoria: "Nebulizadores",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/p.png",
    descripcionCorta:
      "Fogger para enfriamiento y humidificación con gota extra fina y alta uniformidad de cobertura.",
    descripcionLarga:
      "Nebulizador fogger diseñado para enfriamiento y humidificación de invernaderos. Entrega tamaño extra fino de gota de 55 micrones a 4,0 bar, variedad de caudales para distintas tasas de precipitación, gran uniformidad de distribución y cobertura, materiales resistentes a productos químicos, conexiones en PE y PVC y fácil instalación y servicio. Requiere filtración de 130 micrones (120 mesh). Está disponible con válvula antidrenante LPD para apertura y cierre simultáneos del sistema. Sus aplicaciones incluyen reducción de temperatura en invernaderos, aumento de humedad y propagación de plantas. Fogger armado en T.",
    especificaciones: [
      "Tipo: fogger cruzeta 4 salidas",
      "Tamaño de gota: 55 micrones @ 4,0 bar",
      "Filtración requerida: 130 micrones (120 mesh)",
      "Conexiones: PE y PVC",
      "Uso: invernaderos y humidificación",
    ],
  },
  {
    id: "r",
    nombre: "Súper fogger espiga",
    categoria: "Nebulizadores",
    precio: "Consultar",
    stock: "Consultar",
    imagen: "/productos/r.png",
    descripcionCorta:
      "Accesorio de nebulización para generar niebla fina y distribuir humedad de forma uniforme.",
    descripcionLarga:
      "El Súper Fogger Espiga 4/7 es un accesorio diseñado para sistemas de nebulización que permite generar una fina niebla de agua. Su espiga 4/7 facilita una conexión segura a mangueras de riego o sistemas de distribución de agua, asegurando una distribución uniforme de la humedad en el ambiente.",
    especificaciones: [
      "Tipo: accesorio para nebulización",
      "Conexión: espiga 4/7",
      "Uso: distribución uniforme de humedad",
    ],
  },
  {
    id: "t",
    nombre: "Boquilla nebulizador fogger",
    categoria: "Nebulizadores",
    precio: "$1.662",
    stock: "Consultar",
    imagen: "/productos/t.png",
    descripcionCorta:
      "Boquilla fogger de gota extra fina para enfriamiento, humidificación y cobertura uniforme.",
    descripcionLarga:
      "Boquilla para nebulizador fogger con tamaño extra fino de gota de 55 micrones a 4,0 bar y salida de 7 L/H. Ofrece variedad de caudales para distintas tasas de precipitación, gran uniformidad de distribución de agua y cobertura, materiales resistentes a productos químicos, conexiones en PE y PVC, y fácil instalación y servicio.",
    especificaciones: [
      "Tamaño de gota: 55 micrones @ 4,0 bar",
      "Salida: 7 L/H",
      "Conexiones: PE y PVC",
      "Uso: enfriamiento y humidificación",
    ],
  },
  {
    id: "u",
    nombre: "Cruzeta soporte Dan fogger de 2 vías",
    categoria: "Nebulizadores",
    precio: "$1.210",
    stock: "Solicitar",
    imagen: "/productos/u.png",
    descripcionCorta:
      "Soporte tipo T de 2 salidas para nebulización agrícola y ganadera.",
    descripcionLarga:
      "Tee para soporte de nebulizador FOGGER, modelo de 2 salidas, pensada para sistemas de nebulización agrícola y ganadera. Su diseño facilita el montaje de líneas de nebulización y la distribución del flujo en dos salidas.",
    especificaciones: [
      "Tipo: cruzeta / tee soporte",
      "Salidas: 2 vías",
      "Uso: nebulización agrícola y ganadera",
    ],
  },
  {
    id: "v",
    nombre: 'Dan adaptador rosca 1/2',
    categoria: "Nebulizadores",
    precio: "$932",
    stock: "Consultar",
    imagen: "/productos/v.png",
    descripcionCorta:
      "Adaptador roscado para conexión con PVC y unión de componentes de riego o nebulización.",
    descripcionLarga:
      "Adaptador de rosca de 1/2 con conexión a PVC. Sirve como interfaz para unir componentes de riego de goteo o sistemas asociados, ayudando a distribuir el agua de manera eficiente y focalizada, reduciendo el desperdicio.",
    especificaciones: [
      'Rosca: 1/2"',
      "Conexión: PVC",
      "Uso: unión de componentes de riego/nebulización",
    ],
  },
  {
    id: "x",
    nombre: "Válvula antigoteo Super LPD alta presión",
    categoria: "Nebulizadores",
    precio: "$2.420",
    stock: "Consultar",
    imagen: "/productos/x.png",
    descripcionCorta:
      "Válvula antigoteo para alta presión, fácil de limpiar y apta para conexión con PVC.",
    descripcionLarga:
      "Válvula antigoteo Super LPD de alta presión, diseñada para mantener el sistema lleno de agua a presión. Es apta para presiones altas, de fácil limpieza y mantención, y compatible con conexión a PVC. Su presión operativa mínima de apertura es de 4 bar, la mínima de cierre es de 2.4 bar y requiere una altura mínima de instalación de 1 metro.",
    especificaciones: [
      "Tipo: válvula antigoteo alta presión",
      "Presión mínima de apertura: 4 bar",
      "Presión mínima de cierre: 2.4 bar",
      "Altura mínima de instalación: 1 m",
      "Conexión: PVC",
    ],
  },
];

export default products;