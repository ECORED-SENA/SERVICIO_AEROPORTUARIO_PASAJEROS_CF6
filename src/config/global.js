export default {
  global: {
    componenteFormativo: 'Registro y embarque al viajero',
    descripcionCurso:
      'La industria área requiere de procesos técnicos y normativas que hacen parte del servicio que se le presta a cada uno de los pasajeros en las diferentes terminales aéreas; para ello, se debe tener como eje principal la seguridad, eje esencial de esta industria.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Procedimientos de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Documentación migratoria',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Documentación en proceso de viaje',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Seguridad aeroportuaria',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Mercancías peligrosas en counter',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicios especiales en counter',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto, características y aplicación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Venta de servicios especiales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recepción del equipaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aceptación del pasajero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Operación del sistema',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Proceso de registro de pasajeros',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Técnicas de negociación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Compensaciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procesos de embarque',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Áreas de abordaje',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Proceso de abordaje de pasajeros',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Anuncios en sala de abordaje',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Salas VIP',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
        'Resolución 3502 de 2012. [Aeronáutica Civil de Colombia]. Por la cual se modifica la Parte Decimoséptima de los Reglamentos Aeronáuticos de Colombia. Junio 28 de 2012.',
      link:
        'https://normograma.info/migracion/docs/resolucion_aeronautica_3502_2012.htm',
    },
    {
      referencia:
        'González. A. (s.f.). Transporte Aéreo: relación con el turismo.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/77501',
    },
  ],
  glosario: [
    {
      termino: 'Ascenso',
      significado:
        'Es la posibilidad de subir de cabina, de la económica a la ejecutiva o primera clase.',
    },
    {
      termino: 'Briefing',
      significado:
        'Hacen referencia a la reunión previa a un vuelo, informativa que proporciona datos relevantes de la operación.',
    },
    {
      termino: 'CO / DG',
      significado: 'Impuestos colombianos.',
    },
    {
      termino: 'Endoso',
      significado:
        'Ceder un pasajero con una aerolínea diferente a con la que se compró un billete de vuelo, según políticas de la compañía.',
    },
    {
      termino: 'Low Cost',
      significado: 'Bajo costo.',
    },
    {
      termino: 'On Load',
      significado:
        'Es el sistema que otorga o no ascensos o asignación de sillas del sistema.',
    },
    {
      termino: 'Pasajero Elite',
      significado:
        'Es el pasajero que hace parte de los niveles Top de los programas de viajeros frecuentes de las líneas aéreas.',
    },
    {
      termino: 'Pernoctar',
      significado: 'Pasar la noche fuera de su lugar habitual.',
    },
    {
      termino: 'Prevuelo',
      significado:
        'Es la información que se debe tener organizada y diligenciada para el abordaje de un vuelo.',
    },
    {
      termino: 'Puente de Abordaje',
      significado:
        'La pasarela de acceso al avión es un puente móvil, generalmente cubierto que se extiende desde la puerta de embarque de la terminal de un aeropuerto hasta la puerta de una aeronave.',
    },
    {
      termino: 'RAC',
      significado: 'Reglamento Aeronáutico de Colombia.',
    },
    {
      termino: 'Standby',
      significado: 'Hace referencia a estar “en espera”.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Regional Distrito Capital – Centro Nacional de Hotelería Turismo y Alimentos',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Regional Distrito Capital – Centro Nacional de Hotelería Turismo y Alimentos',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
