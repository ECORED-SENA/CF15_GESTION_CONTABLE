export default {
  global: {
    componenteFormativo: 'Estados financieros de propósito general',
    descripcionCurso:
      'Se desarrollarán las bases para la presentación de los estados financieros de propósito general, bajo las NIIF. Los estados financieros son el resultado de las transacciones realizadas por la empresa en un periodo determinado, los cuales se encuentran integrados por: estado de situación financiera, estado de resultados, estado de cambio en el patrimonio, estado de flujos de efectivo y notas a los estados financieros.',
    imagenBannerPrincipal: require('@/assets/curso/inicio.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-inicio.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estado de resultados integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Identificación',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principio del ente en marcha',
            hash: 't1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aspectos generales',
            hash: 't1-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Cuentas Otro Resultado Integral (ORI)',
            hash: 't1-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Estructura',
            hash: 't1-6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Forma de presentación',
            hash: 't1-7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Información a revelar',
            hash: 't1-8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estado de situación financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificación',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principio del ente en marcha',
            hash: 't2-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Distinción entre corriente y no corriente',
            hash: 't2-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Cuentas del Estado de situación financiera',
            hash: 't2-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Estructura',
            hash: 't2-6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Forma de presentación',
            hash: 't2-7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Información a revelar',
            hash: 't2-8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estado de cambios en el patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificación',
            hash: 't3-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't3-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Principio del ente en marcha',
            hash: 't3-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estructura',
            hash: 't3-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Información a revelar',
            hash: 't3-5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estado de flujos de efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Identificación',
            hash: 't4-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Periodo contable sobre el que se informa',
            hash: 't4-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Elementos para elaborar el flujo de efectivo',
            hash: 't4-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Métodos de presentación',
            hash: 't4-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Estructura',
            hash: 't4-5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Notas y revelaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (13 de julio de 2009). Ley 1314 de 2009.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1314_2009.html',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP. (2006). Norma Internacional de Contabilidad 7: Estados de flujos de efectivo.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública – CTCP. (2018). Norma Internacional de Contabilidad 1: Presentación de Estados Financieros. ',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534364977-6992',
    },
    {
      referencia:
        'Estupiñán, R. (2013). NIC / NIIF transición y adopción en la empresa. Ediciones de la U. ',
    },
    {
      referencia:
        'Estupiñán, R., y Sierra, A. (2017). Estados financieros básicos: bajo NIC / NIIF. Ecoe Ediciones.',
    },
    {
      referencia:
        'Godoy, E. (2013). Contabilidad y presentación de estados financieros. Grupo Editorial Nueva Legislación.',
    },
    {
      referencia:
        'Godoy, E. (2014) Normas Internacionales de Información Financiera NIIF. Grupo Editorial Nueva Legislación.',
    },
    {
      referencia:
        'IFRS Foundation. (2009). Módulo 5: estado del resultado integral y estado de resultados. IFRS Publications. ',
    },
    {
      referencia: 'NIC NIIF (2009). NIIF para las pymes.',
      link: 'https://www.nicniif.org/home/normas/niif-para-las-pymes.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (23 de diciembre de 2015). Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (23 de diciembre de 2015). Decreto 2496 de 2015, por medio del cual se modifica el Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (27 de marzo de 1971). Decreto-Ley 410 de 1971, por el cual se expide el Código del Comercio.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (29 de diciembre de 1993). Decreto 2649 de 1993: Reglamento General de Contabilidad.',
      link: 'https://niif.com.co/decreto-2649-1993/',
    },
    {
      referencia:
        'Pymes y autónomos (26 de septiembre de 2013). ¿Cuál es la diferencia entre liquidez y solvencia? ',
      link:
        'https://www.pymesyautonomos.com/administracion-finanzas/cual-es-la-diferencia-entre-liquidez-y-solvencia',
    },
  ],
  glosario: [
    {
      termino: 'Activo corriente',
      significado:
        'una entidad clasificará un activo como corriente cuando espera realizar el activo o tiene la intención de venderlo o consumirlo en su ciclo normal de operación; mantiene el activo principalmente con fines de negociación.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'un juego completo de estados financieros comprende un estado de situación financiera al final del periodo; un estado del resultado integral del periodo; un estado de cambios en el patrimonio del periodo; un estado de flujos de efectivo del periodo.',
    },
    {
      termino: 'Estados financieros con propósito general',
      significado:
        'son aquellos que pretenden cubrir las necesidades de usuarios que no están en condiciones de exigir informes a la medida de sus necesidades específicas de información.',
    },
    {
      termino: 'Financial Accounting Standards Board - FASB',
      significado:
        'en español traduce Misión del Concejo para los Estándares de Contaduría Financiera y es la entidad encargada de fijar los principios de contabilidad generalmente aceptados en los Estados Unidos. ',
    },
    {
      termino: 'Generally Accepted Accounting Principles – GAAP',
      significado:
        'su traducción corresponde a Principios de Contabilidad Generalmente Aceptados y son de uso general en el mundo, los USGAAP son los principios de contabilidad generalmente aceptados en Estados Unidos, mientras que los COLGAAP son los principios de contabilidad generalmente aceptados en Colombia.',
    },
    {
      termino: 'International Accounting Standard - IAS',
      significado:
        ' Norma Internacional de Contabilidad, fueron todas las normas de Contabilidad emitidas por el Comité de Normas Internacionales de Contabilidad.',
    },
    {
      termino: 'International Accounting Standards Board - IASB',
      significado:
        'en español traduce Junta de Normas Internacionales de Contabilidad, fue creada en el año 2001 para ejercer las funciones que desde 1973 y hasta el año 2001 ejerció el IASC.',
    },
    {
      termino: 'International Accounting Standards Committee - IASC',
      significado:
        'en español es el Comité de Normas Internacionales de Contabilidad, creado en Londres en 1973 con el fin de estudiar y proponer normas internacionales de información financiera internacionales y con el apoyo de 9 países (Australia, Canadá, Francia, Alemania, Japón, México, Países Bajos, Reino Unido y Estados Unidos) aunque Estados Unidos fue el único miembro de los países fundadores que decidió no utilizar las normas emitidas por el IASC en un principio.',
    },
    {
      termino: 'International Accounting Education Standard Board - IAESB',
      significado:
        'su sigla en español es IES. Calidad de la educación contable, para poder hacer paralelos en la implementación de las normas contables.',
    },
    {
      termino: 'International Financial Reporting Standards- IFRS',
      significado:
        'en español ha sido traducido como Normas Internacionales de Información Financiera (NIIF) y son las normas que ha emitido desde el 2001 la Junta de Normas Internacionales de Contabilidad.',
    },
    {
      termino: 'NIC',
      significado:
        ' Norma Internacional de Contabilidad, es la equivalencia de la sigla en inglés IAS (Institute Accounting Standard).',
    },
    {
      termino: 'NIIF',
      significado:
        ' Norma Internacional de Información Financiera, es la equivalencia de la sigla en inglés IFRS (International Financial Reporting Standard).',
    },
    {
      termino: 'Pasivo corriente',
      significado:
        'una entidad clasificará un pasivo como corriente cuando: espera liquidar el pasivo en su ciclo normal de operación; mantiene el pasivo principalmente con fines de negociación.',
    },
  ],
  complementario: [
    {
      texto:
        'Servicio Nacional de Aprendizaje, SENA. (2018). Revista Finnova: Investigación e Innovación Financiera y Organizacional.',
      tipo: 'PDF',
      link: 'downloads/finnova-v4-n6 .pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo Godoy Ramírez',
        cargo: 'Instructor',
        centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
      },
      {
        nombre: 'Patricia Mantilla Galvis',
        cargo: 'Instructora',
        centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla M.',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jesus Antonio Vecino Valero',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
