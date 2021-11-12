export default {
  global: {
    componenteFormativo: 'La comunicación en la cultura organizacional',
    descripcionCurso:
      'Este componente formativo se propone para que las organizaciones formulen estrategias y canales de comunicación asertivos que propicien mejores resultados en productividad, calidad en sus bienes y servicios ofertados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-1.png'),
    imagenBannerPrincipal2: require('@/assets/curso/banner-principal-2.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Definición y componentes de cultura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos de la cultura organizacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de segmentación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso comunicativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodología en un proceso comunicativo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de comunicación y sus características',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estilos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Elementos de un proceso comunicativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ejemplos de los tipos de comunicación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comunicación no verbal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos de la comunicación no verbal',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Lenguaje corporal',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Comunicación asertiva y efectiva',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        'Costa, J. (2010). El Dircom hoy. Dirección y Gestion de la Comunicación en la nueva economía. (2a. ed.). Costa Punto Com Editor',
    },
    {
      referencia:
        'Irusta, P. (2019, marzo, 12). 30 tipos de comunicación y sus principales características [web log post]. Blogspot.  ',
      link:
        'https://pedroirustamendieta.com/es/tipos-comunicacion-caracteristicas/',
    },
    {
      referencia:
        'Llanos, M. (2018). Modelo De Cultura Organizacional Para El Desarrollo De La Calidad En Instituciones De Educación Superior. Universidad Ecotec',
    },
    {
      referencia:
        'Lenguaje corporal: la forma más importante de la comunicación no verbal (2020). Startup Guide IONOS. ',
      link:
        'https://www.ionos.es/startupguide/productividad/lenguaje-corporal/',
    },
    {
      referencia:
        'Mendez, C. (2019). Elementos para la relación entre cultura organizacional y estrategia. Universidad & Empresa, 21(37), p.136-169. ',
      link: 'https://doi.org/10.12804/revistas.urosario.edu.co/empresa/a.7681',
    },
    {
      referencia:
        'Pérez, A. (2016, marzo, 4). ¿Cuáles son los tipos de comunicación más habituales en una empresa? [web log post]. Blogspot. ',
      link:
        'https://www.obsbusiness.school/blog/cuales-son-los-estilos-de-comunicacion-mas-habituales-en-una-empresa',
    },
    {
      referencia:
        'Pradas, C. (2018, junio, 12). Tipos de comunicación no verbal: definición y ejemplos [web log post]. Blogspot. ',
      link:
        'https://www.psicologia-online.com/tipos-de-comunicacion-no-verbal-definicion-y-ejemplos-3898.html',
    },
    {
      referencia:
        'Robbins, S. y Coulter, M. (2010). Administración (10ma ed.). Pearson Educación ',
    },
    {
      referencia:
        'Santos, D. (2012). Fundamentos de la comunicación. Red Tercer Milenio ',
    },
  ],
  glosario: [
    {
      termino: 'Cultura Organizacional',
      significado:
        'Un conjunto de conductas o comportamientos; una colección de creencias, hábitos, prácticas y tradiciones compartidas por un grupo de personas (sociedad), y sucesivamente aprendidos por los nuevos miembros que ingresan a ella.',
    },
    {
      termino: 'Emisor',
      significado:
        'Es quien transmite el mensaje, la persona que inicia la comunicación.',
    },
    {
      termino: 'Feedback',
      terminoHtml: '<em>Feedback </em>',
      significado:
        'Es el mecanismo de control que tiene el emisor para comprobar si el mensaje fue recibido e interpretado de forma correcta. ',
    },
    {
      termino: 'Háptica ',
      significado: 'Hace referencia al contacto físico.',
    },
    {
      termino: 'Normas',
      significado:
        'Reglas a seguir por los diferentes equipos de la organización.',
    },
    {
      termino: 'Proxémica',
      significado: 'Uso que se hace del espacio personal.',
    },
    {
      termino: 'Paralingüística',
      significado: 'Expresiones de sonido sin usar palabras.',
    },
    {
      termino: 'Receptor',
      significado:
        'Es quien recibe el mensaje, puede participar activamente en el proceso comunicativo o tener un papel incidental.',
    },
    {
      termino: 'Valores',
      significado:
        'Creencias básicas e importantes, tienen sentido y son estables en el tiempo.',
    },
  ],
  complementario: [
    {
      texto:
        'Méndez, C. (2019). Elementos para la relación entre cultura organizacional y estrategia. Universidad & Empresa, 21(37), p.136-169. ',
      tipo: 'Revista',
      link:
        'https://revistas.urosario.edu.co/index.php/empresa/article/view/7681',
    },
    {
      texto:
        'Guzmán, Diaz, Rivera. (2021). ¿Qué es cultura organizacional? ¿Cómo se crea? (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9kGWg2gDtwY',
    },
    {
      texto:
        'Irusta, P. (2019, marzo, 12). 30 tipos de comunicación y sus principales características. [Web log post].',
      tipo: 'Blog',
      link:
        'https://pedroirustamendieta.com/es/tipos-comunicacion-caracteristicas/',
    },
    {
      texto: 'Populux. (s.f.). La comunicación no verbal.',
      tipo: 'Podcast',
      link:
        'https://podcasts.apple.com/us/podcast/55-comunicaci%C3%B3n-la-comunicaci%C3%B3n-no-verbal/id1528135771?i=1000523251780',
    },
    {
      texto:
        'La forma más importante de la comunicación no verbal. (2020). Startup Guide IONOS.',
      tipo: 'Página Web',
      link:
        'https://www.ionos.es/startupguide/productividad/lenguaje-corporal/',
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
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Neira Patricia Gamboa Suarez',
        cargo: 'Experto temático',
        centro:
          'Centro de servicios empresariales y turísticos <br>Regional Santander',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
