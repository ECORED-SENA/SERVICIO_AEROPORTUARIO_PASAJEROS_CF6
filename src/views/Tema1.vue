<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Componentes electrónicos
    figure.mt-4
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    p.mt-5 La seguridad tiene como objetivo la prevención de actos de interferencia ilícita, evitando que viajen en las aeronaves objetos o personas que puedan constituir una amenaza para el vuelo, es por esto que la OACI (Organización de Aviación Civil Internacional) bajo el Anexo 17 del convenio de Chicago establece las normas y métodos recomendados para la industria y regula el tránsito aéreo internacional, estableciendo procedimientos tales como:
    .row.mt-5
      .col-10.bg-amarillo-claro.borde-izq-secundario-19.px-5.py-4
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-1-2.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Todos los pasajeros y miembros de las tripulaciones, así como la totalidad de los equipajes, deben ser controlados antes del embarque, la carga, el correo y las provisiones de abordo también deben inspeccionarse antes de subirlos a bordo.
      .col-10.offset-2.bg-amarillo-claro.borde-der-secundario-19.px-5.py-4.mt-5
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Cada empleado aeronáutico es responsable de mantener la seguridad aérea internacional, de cumplir y hacer cumplir las normas establecidas.
    .row.mt-5
      .col-10.bg-amarillo-claro.borde-izq-secundario-19.px-5.py-4
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-1-4.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Todo pasajero deberá cumplir con la respectiva documentación de ingreso al país o países específicos de la ruta seleccionada y es responsabilidad de las compañías aéreas validar la autenticidad, vigencia y de los mismos junto con las autoridades migratorias. 
      .col-10.offset-2.bg-amarillo-claro.borde-der-secundario-19.px-5.py-4.mt-5
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Cada agente de servicio que cumpla la labor de registro de pasajeros debe ejercer control absoluto de los usuarios y contraseñas empleadas en el sistema de documentación de pasajeros y en caso de encontrar cualquier anomalía deberá ser notificada.
    p.mt-5 Estos y otros apartes hacen parte de seguridad de la aviación civil, siendo las normas que cada operador aéreo debe cumplir para operar en la aviación civil de manera segura, teniendo en cuenta que el incumplimiento de estas normas acarreará multas millonarias e incluso puede llegar a perder la licencia de navegación aérea en un país.

    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Documentación migratoria
    .row.mt-3
      .col-12.col-lg-8
        p Entendiendo que documentación es el conjunto de documentos generalmente oficiales, con que se aprueba o acredita un proceso de migración que se genera cuando hay desplazamiento de un individuo o población de un lugar de origen o residencia a otro con fines turísticos, laborales o residenciales; se puede deducir entonces que la documentación migratoria es el conjunto de documentos requeridos para poder desplazarse de un punto de origen a un destino final, esta migración puede ser interna; es decir, dentro de un mismo país o externa (internacional).
        p.mt-3 La autoridad aeronáutica de cada país es la encargada de regular la documentación requerida para vuelos nacionales e internacionales; para Colombia es la UAEAC (Unidad Administrativa Especial Aeronáutica Civil de Colombia), que  a través de la circular reglamentaria NID: 4302082.10.12, dan a conocer los documentos válidos para pasajeros en vuelos nacionales e internacionales que están contemplados en el reglamento aeronáutico de Colombia en la Resolución 3502 del 28 de junio del 2012, en el capítulo V e indica lo siguiente:
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
    .h4.mt-4 “Para vuelos nacionales los pasajeros deberán presentar:
    .row.mt-4
      .col-12.col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Cédula de Ciudadanía, Cédula de Extranjería o Pasaporte original.
          li 
            i.fas.fa-angle-right
            | En caso de no tener alguno de los documentos anteriormente mencionados se puede presentar documentos supletorios tales como la contraseña de la Registraduría Nacional del Estado Civil, Libreta Militar o la Licencia de Conducción expedida en Colombia.
          li 
            i.fas.fa-angle-right
            | También podrán utilizarse como documento de identificación los carnés expedidos en las entidades oficiales y privadas, siempre y cuando tengan la fotografía y demás datos de la persona.
          li 
            i.fas.fa-angle-right
            | Los menores de edad se identifican con el Registro Civil de Nacimiento o la Tarjeta de Identidad o la certificación de que dicho documento está en trámite, expedido por la Registraduría Nacional del Estado Civil.
          li 
            i.fas.fa-angle-right
            | El único documento válido para identificación en vuelos nacionales de pasajeros extranjeros es el Pasaporte o la Cédula de Extranjería, salvo que sus países de nacionalidad tengan vigentes con la República de Colombia convenios bilaterales o multilaterales que contemplen la validez de documentos de sus países de origen para identificación en el transporte aéreo”. 
      .col-2.offset-0.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
    figure.mt-5
      img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
    p.mt-5 Adicional a estos documentos, algunas regiones en Colombia como San Andrés Islas y Amazonas podrán solicitar un documento adicional que permite la entrada y salida desde y hacia el territorio nacional, conocido como tarjeta de turismo. 
    .col-10.col-lg-8.offset-1.offset-lg-2
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-3.mt-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/template/tema-1-9.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En el caso de vuelos internacionales el único documento válido para abordar una aeronave es el #[strong pasaporte], el cual es un documento internacional expedido por las autoridades de su respectivo país que acredita un permiso u autorización legal para que salga o ingrese del mismo. A continuación se ve lo referente al tema:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mt-5 Aunque el pasaporte es el documento requerido para circular de un país a otro, existen países a los cuales se puede ingresar con el documento nacional de identificación DNI o cédula en caso de los colombianos y esto es gracias a los tratados internacionales.
    .row.mt-5
      .col-12.borde-gris.rounded-20.p-4
        .row
          .col-3.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-9
            .h4 Tratados internacionales
            p.mt-3 Un tratado internacional es un término que designa los acuerdos jurídicos entre diferentes estados o entre el Estado y un organismo internacional, estableciendo compromisos que faciliten las relaciones bilaterales entre naciones a nivel económico, político, cultural o científico y son regidos por las normativas jurídicas del derecho internacional.
            p.mt-3 Estos tratados pueden ser de diferentes tipos, según la materia pueden ser tratados comerciales, políticos, económicos, fiscales, sociales y humanitarios; en la actualidad Colombia cuenta con 16 tratados vigentes con diferentes países, entre ellos Mercosur y Comunidad Andina CAN, los cuales intervienen directamente en la documentación migratoria.  A continuación se ve más detalladamente:
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Comunidad Andina CAN " :icono="require('@/assets/template/tema-1-98.svg')")
        .row
          .col-12.col-lg-9
            .h4 Comunidad Andina CAN 
            p.mt-3 La comunidad andina es hoy un organismo subregional con personería jurídica internacional integrada por Bolivia, Colombia, Ecuador y Perú; que le ha otorgado la condición de país miembro asociado a Chile y a los estados parte de Mercosur y tiene como propósito mejorar el nivel de vida y desarrollo equilibrado de los países miembros.
            p.mt-3 En consecuencia, el propósito de este organismo es que los ciudadanos andinos tengan derecho a ingresar a otro país miembro de la comunidad andina en calidad de turistas sin necesidad de pasaporte o visa, es decir, con el documento de identificación nacional o cédula; cabe aclarar que cada estado puede solicitar acciones, documentos o normas adicionales, como, por ejemplo: 
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                | Que solo se realizará en calidad de turismo, participación de actos culturales o deportivos por un periodo inferior a 90 días.
              li.mt-4 
                i.fas.fa-angle-right
                | Bolivia, indica que para el caso de menores de edad es obligatorio que el menor tenga pasaporte vigente y en caso de no viajar con los padres, permiso de salida y entrada del país.
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
          
      .py-4.py-md-5(titulo="Mercosur" :icono="require('@/assets/template/tema-1-99.svg')")
        .row
          .col-12.col-lg-9
            .h4 Mercosur
            p.mt-3 El mercado común del sur o MERCOSUR es un mecanismo de integración económico y comercial creado en 1991 y modificado en 1994; está compuesto por Argentina, Paraguay, Uruguay y Brasil, contando como estados asociados a Chile, Colombia, Ecuador, Guyana, Perú, Surinam y Bolivia quien en el 2015 solicitó su incorporación como estado miembro y no asociado. 
            p.mt-3 Por lo tanto y al igual que para los ciudadanos miembros de la comunidad andina, los ciudadanos miembros de Mercosur (Argentina, Paraguay, Uruguay y Brasil) cuentan con el derecho de ingresar a otro país miembro de este tratado o de la comunidad andina con su documento de identidad en calidad de turista o para eventos culturales o deportivos por un periodo inferior a 90 días.     
          .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-1-12.png", alt="Texto que describa la imagen")
    .h4.mt-5 Unión Europea
    .row.mt-4
      .col-12.col-lg-9
        p La UE (Unión Europea) es una entidad geopolítica que cubre gran parte del continente europeo, entró en vigencia en 1993 con el objetivo de promover el progreso científico y tecnológico y establecer una unión económica y monetaria de los 27 estados miembros, contando con una moneda, bandera e himno único.
        p.mt-3 Dentro de la Unión Europea y ante la necesidad de abolir fronteras interiores con otras naciones miembros para la libre circulación de personas, bienes, servicios y capital, surge el espacio Schengen conformado por 26 de las 27 naciones europeas desde 1995. Los países miembros del Espacio Schengen son:
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-13.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-5.offset-2.offset-md-2.offset-lg-2
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            .col-6
              p.mb-0 Austria
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 2
            .col-6
              p.mb-0 Bélgica
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 3
            .col-6
              p.mb-0 Republica Checa
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 4
            .col-6
              p.mb-0 Dinamarca
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 5
            .col-6
              p.mb-0 Estonia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 6
            .col-6
              p.mb-0 Finlandia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 7
            .col-6
              p.mb-0 Francia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-20.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 8
            .col-6
              p.mb-0 Alemania
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-21.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 9
            .col-6
              p.mb-0 Grecia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-22.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 10
            .col-6
              p.mb-0 Hungría
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-23.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 11
            .col-6
              p.mb-0 Islandia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-24.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 12
            .col-6
              p.mb-0 Italia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-25.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 13
            .col-6
              p.mb-0 Letonia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-26.svg", alt="Texto que describa la imagen")
      .col-4
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 14
            .col-6
              p.mb-0 Lituania
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 15
            .col-6
              p.mb-0 Luxemburgo
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-28.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 16
            .col-6
              p.mb-0 Malta
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-29.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 17
            .col-6
              p.mb-0 Países Bajos
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-30.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 18
            .col-6
              p.mb-0 Noruega
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-31.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 19
            .col-6
              p.mb-0 Polonia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-32.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 20
            .col-6
              p.mb-0 Portugal
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-33.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 21
            .col-6
              p.mb-0 Eslovaquia 
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-34.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 22
            .col-6
              p.mb-0 Eslovenia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-35.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 23
            .col-6
              p.mb-0 España
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-36.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 24
            .col-6
              p.mb-0 Suecia
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-37.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 25
            .col-6
              p.mb-0 Suiza
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-38.svg", alt="Texto que describa la imagen")
          li 
            .lista-ol--cuadro__vineta
              span 26
            .col-6
              p.mb-0 Liechtenstein 
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-39.svg", alt="Texto que describa la imagen")
    p.mt-5 No pertenecen a los estados Schengen: Irlanda, Rumania, Bulgaria, Croacia, Gran Bretaña y Chipre.
    p.mt-5 Algunos de las condiciones de entrada y documentos para ingresar a Europa son:
    .row.mt-5
      .col-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Visa")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-40.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Schengen (Reino Unido e Irlanda).
          .row(numero="2" titulo="Pasaporte")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-41.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Válido y vigente.
          .row(numero="3" titulo="Tiquetes")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-42.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Aéreos que confirmen el regreso al país de procedencia.
          .row(numero="4" titulo="Justificación")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-43.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Del motivo de la estancia prevista.
          .row(numero="5" titulo="Comprobación")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-44.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small De medios de subsistencia tanto para la permanencia en los estados miembros del acuerdo como para el regreso.
      .col-6
        LineaTiempoD.color-primario               
          .row(numero="6" titulo="No estar reportado")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-45.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small En el sistema de alertas de inadmisión emitidas por el Sistema de Información Schengen.
          .row(numero="7" titulo="No ser considerado una amenaza ")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-46.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Para el orden público, la seguridad interior, la salud pública o las relaciones internacionales de cualquiera de los Estados Miembros.
          .row(numero="8" titulo="Reserva")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-47.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small De alojamiento válida y vigente o carta de invitación.
          .row(numero="9" titulo="Documento justificativo")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-48.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Del propósito del viaje (asistencia a eventos, conferencias, reuniones, entre otros).
          .row(numero="10" titulo="Certificado")
            .col-2.mx-3
              figure
                img(src="@/assets/template/tema-1-49.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small  De cursos cortos en caso de inscripción a estudios.
    .row.mt-5
      .col-12.col-lg-9
        p En caso de que el motivo de viaje no sea turismo, el pasajero deberá solicitar una visa de trabajo o estudio ante el consulado o embajada del estado en el que quiera desempeñar la labor o estudio. 
        p.mt-3 A partir del 2015 la Comisión Europea y el Ministerio de Relaciones Exteriores firmaron el acuerdo de exención del visado para algunos países de Europa, el cual permitirá a los colombianos viajar, sin necesidad de solicitar una Visa Schengen para turismo o cursos cortos por un tiempo máximo de 90 días continuos o no dentro de un periodo de 180 días. Estos países son: Alemania, Austria, Bélgica, Bulgaria, Croacia, Chipre, República Checa, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Grecia, Hungría, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, Rumania, Suecia, Dinamarca, Francia, Suiza, Liechtenstein, Noruega, Islandia.
        p.mt-3 A pesar de esto, Reino Unido e Irlanda solicitan visado a los colombianos, lo cual puede ser de diversos tipos:
      .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-50.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-8.offset-2
        .row
          .col-4.p-0
            figure
              img(src="@/assets/template/tema-1-51.png", alt="Texto que describa la imagen")
          .col-8.border-amarillo-noizq.rounded-der-20.px-4
            .h4.mt-4 TIPO A
            p.mt-4 Visa de tránsito aeroportuario, no podrán salir del aeropuerto.
        .row.mt-4
          .col-4.p-0
            figure
              img(src="@/assets/template/tema-1-52.png", alt="Texto que describa la imagen")
          .col-8.border-amarillo-op50-noizq.rounded-der-20.px-4
            .h4.mt-4 TIPO C
            p.mt-4 Visa de Turismo y requiere de un tiquete de salida o de reagrupación familiar que no requiere tiquete de salida.
        .row.mt-4
          .col-4.p-0
            figure
              img(src="@/assets/template/tema-1-53.png", alt="Texto que describa la imagen")
          .col-8.border-amarillo-op25-noizq.rounded-der-20.px-4
            .h4.mt-4 TIPO D
            p.mt-4 Residencia temporal, larga o de estudio.
    .row.mt-5
      .col-8.offset-2
        .cajon.color-acento-botones.p-4.mb-4
          .row
            .col-3.d-none.d-lg-block.mx-4
              figure
                img(src="@/assets/template/tema-1-54.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.text-small En caso de viajar en tránsito por Inglaterra se debe tener en cuenta que si el tránsito es considerado #[strong AIRSIDE]; es decir, que ingresan y salen de este país el mismo día que tiene los documentos en regla para el siguiente destino y que el tránsito se realizará dentro del mismo aeropuerto este tipo de tránsito solo se permite en los aeropuertos Gatwick, Manchester y London Heathrow.
    .row.mt-5
      .col-8.offset-2
        .cajon.color-acento-contenido.p-4.mb-4.bg-morado-claro
          .row
            .col-3.d-none.d-lg-block.mx-4
              figure
                img(src="@/assets/template/tema-1-55.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.text-small Si se debe cambiar de aeropuerto para realizar la conexión se trata de un tránsito #[strong LANDSIDE] y solo se podrá realizar dicho tránsito si el vuelo a realizar es antes de las 23:59 del siguiente día, además debe contar con una visa válida para: Australia, Canadá, Nueva Zelanda, Estados Unidos, Suiza o Comunidad Europea.
    p.mt-5 Como se ve los requisitos internacionales, varían de acuerdo con el país que se visite y la visa o visado es uno de los más comunes.
    .row.mt-5
      .col-12.borde-gris.rounded-20.p-4
        .row
          .col-3.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-1-56.png", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-9
            .h4 Visado
            p.mt-3 O visa, es una autorización condicionada que otorga un país a un ciudadano extranjero para entrar y permanecer temporalmente en dicho país. Los países que actualmente solicitan visa a los colombianos son: Afganistán, Angola, Arabia Saudita, Argelia, Australia, Bangladesh, Cabo Verde, Camboya, China, Congo, Costa de Marfil, Costa Rica, Egipto, Emiratos Árabes, Estados Unidos, Etiopía, Guinea, Haití, India, Indonesia, Irán, Iraq, Irlanda, Japón, Kenia, Líbano, Liberia, Libia, Malasia, Marruecos, Nueva Zelanda, Reino Unido, Senegal, Siria, Sudáfrica, Tailandia, Túnez, Vietnam, entre otros.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-1-57.svg").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Visa
                  p.text-small Con el fin de reforzar este tema, se puede consultar el siguiente documento:  
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/relacion_de_paises_que_exigen_o_no_visas_a_colombianos_17-04-2020_0.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mt-5 El visado puede ser obtenido para diferentes actividades y esta debe estar descrita en el visado otorgado. Algunos tipos de visado son:
    SlyderB.mb-5(:datos="datosSlyder").mt-5
    p.mt-5 Estados Unidos es un país que cuenta con múltiples documentos migratorios y diversidad de visas, algunas de ellas son:
    .row.mt-4
      .col-12.col-lg-7
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            | Turismo y negocios (B1/B2).
          li 
            i.fas.fa-brain
            | Estudios en los estados unidos (f&M).
          li 
            i.fas.fa-brain
            | Programas de intercambio- Au Pairs, trabajo de verano, profesores Bilingües, etc. (J).
          li 
            i.fas.fa-brain
            | Trabajadores temporales (H, L, O, P).
          li 
            i.fas.fa-brain
            | Trabajadores religiosos (R).
          li 
            i.fas.fa-brain
            | Empleados domésticos (B1, A-3, G-5).
          li 
            i.fas.fa-brain
            | Miembros de tripulación (C1, D).
          li 
            i.fas.fa-brain
            | Inversionistas (E1, E2). 
          li 
            i.fas.fa-brain
            | Prensa y medios de comunicación (I).
          li 
            i.fas.fa-brain
            | Diplomáticos y oficiales (A, G, C-3).
          li 
            i.fas.fa-brain
            | Tráfico de personas y víctimas de crímenes (S, T, &U).
      .col-6.col-lg-5
        figure
          img(src="@/assets/template/tema-1-63.png")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Aunque a la mayoría de países se les solicita visa para el ingreso a este país, Estados Unidos cuenta con el #[strong Waiver Program] o programa de exención de visas y permite a los nacionales o ciudadanos de los 39 países miembros, viajar a los estados unidos por turismo o negocios para una estadía mínima de 90 días sin necesidad de obtener visa. En su lugar deben solicitar una autorización de viaje a través del sistema electrónico conocido como #[strong Código ESTÁ “Electronic System for Travel Authorization”], por sus siglas en inglés; este documento debe estar vigente al momento del viaje y tener una validez de 6 meses.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-64.svg", alt="Texto que describa la imagen")
    p.mt-5 Los países autorizados son:
    p.mt-5 Andorra, Alemania, Australia, Austria, Bélgica, Brunei, Chile, Corea del Sur, Dinamarca, Eslovenia, Eslovaquia, España, Estonia, Finlandia, Francia, Grecia, Holanda, Hungría, Islandia, Irlanda, Italia, Japón, Letonia, Liechtenstein, Lituania, Luxemburgo, Malta, Noruega, Nueva Zelanda, Principado de Mónaco, Polonia, Portugal, República Checa, San Marino, Singapur, Suecia.
    p.mt-5 Pero estos no son los únicos documentos válidos para viajar internacionalmente; también  se encuentran
    .tabla-a.color-acento-botones.mt-5 
      table
        thead
          tr
            th Tarjeta de Residencia o Resident Card
            th Parole Migratorio
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-101.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-100.svg", alt="Texto que describa la imagen")
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-102.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-103.svg", alt="Texto que describa la imagen")
          tr
            td.p-4 La cual le es otorgada a los ciudadanos de otras nacionalidades que han solicitado su residencia y han cumplido con los requerimientos para poder adquirirla, esta puede otorgarse de carácter temporal o indefinido; en caso de que la residencia permanente se encuentre vencida el ciudadano puede solicitar una notificación de acción, el cual es un documento conocido como Notice of Action I-797C, este revalida la residencia a partir de la fecha de vencimiento y otorga una extensión de la misma, pero siempre debe ir acompañada de la tarjeta de residencia o I-551.
            td.p-4 Se trata de un permiso de permanencia temporal en los EE.UU otorgado por razones de beneficio público, significativo o humanitario, el cual le permite al portador permanecer temporalmente en dicho país.
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Documentación en proceso de viaje
    .row.mt-5
      .col-10.offset-1
        .row
          .col-2.align-self-center
            figure.position-relative
              img(src="@/assets/template/tema-1-67.png", alt="Texto que describa la imagen").margin-left-50
          .col-10.rounded-20.bg-amarillo-claro
            p.py-4.px-5 Adicional a los documentos migratorios ya antes mencionados, los países pueden solicitar documentación adicional para el ingreso a su nación, entre ellos se encuentran requisitos de salud como lo es la #[strong vacuna de la fiebre amarilla] (esta fiebre se propaga mediante una especie de mosquito común en ciertas áreas de África y América del sur y por lo tanto es necesario vacunarse antes de viajar a ciertas regiones).
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-morado-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-1-68.png").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h3.mb-1 Vacuna fiebre amarilla
                  p.text-small Con el fin de conocer los países que exigen la vacuna de la fiebre amarilla, descargue el siguiente documento: 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/Vacuna_fiebre_amarila.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mt-5 Siguiendo con los requisitos internacionales, los documentos de viaje para poder seguir con el proceso de vuelo son: 
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Vacuna de la Fiebre Amarilla")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-69.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small Esta vacuna es necesaria para zonas selváticas y es requisito obligatorio estar vacunado contra la fiebre amarilla para todos los viajeros mayores a nueve (9) meses de edad; el pasajero debe portar el certificado internacional de vacunación vigente y presentarlo al momento de registrarse y abordar a la aeronave.
          .row(numero="2" titulo="Pasabordo o Pase de Abordar")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-70.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small Documento requerido para el ingreso a salas de abordaje de los pasajeros, este es entregado por el agente de servicios aeroportuarios al cliente, también puede ser emitido en la página web de la compañía de manera virtual o por medio de los dispositivos de autoservicio que se encuentran en los diferentes aeropuertos. 
          .row(numero="3" titulo="Etiqueta de Equipaje")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-71.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small Dentro de los diferentes documentos que el cliente requiere cuando realiza un vuelo, se encuentra la etiqueta automatizada de equipaje, por regulación OACI, en el manual de seguridad de aviación civil AVSEC nos indica que todo equipaje al ser transportado en las bodegas de una aeronave debe estar sistematizado y contener como mínimo: El nombre del pasajero, vuelos, aeropuertos involucrados y peso registrado; la misma debe quedar asociada al PNR (Passenger Name Record) o reserva del viajero.
              p.text-small.mt-3 Existen diferentes tipos de etiquetas, entre las cuales podemos encontrar etiquetas de manejo y etiquetas de manipulación.
          .row(numero="4" titulo="Etiquetas de Manejo")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-72.png", alt="Texto que describa la imagen")
            .col-8 
              p.text-small #[strong Priority:] Esta etiqueta identifica a los equipajes de pasajeros viajando en clase ejecutiva, miembros del programa de lealtad de alto nivel y personal de la alta gerencia de la empresa.
          .row(numero="5" titulo="Identificación de equipaje")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-73.png", alt="Texto que describa la imagen")
            .col-8 
              p.text-small #[strong Stanby/Wait List:] Etiqueta para identificar los equipajes de los clientes que no tengan silla confirmada en la aeronave a causa de una sobre reserva del vuelo o por ser pasaje de colaborador.
          .row(numero="6" titulo="Etiquetas no cumplimiento")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-74.png", alt="Texto que describa la imagen")
            .col-8 
              p.text-small #[strong Stanby / Condicional:] Etiqueta que identifica los equipajes que no cumplan con la política de equipaje permitido de la compañía y son aceptados, pero sujetos a espacio en la aeronave por lo tanto la compañía puede disponer de un tiempo establecido bajo sus políticas para enviarla al aeropuerto de destino sin generar ningún gasto. 
          .row(numero="7" titulo="Etiquetas conexión estrecha")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-75.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small #[strong Conexión Estrecha:] Se ubicará todo el equipaje que tenga un menor tiempo de conexión al designado por la compañía aérea con el fin de que estos equipajes sean ubicados de forma estratégica para cumplir con la conexión. 
          .row(numero="8" titulo="Etiquetas servicios especiales")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-76.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small #[strong Servicios Especiales:] Etiqueta que identifica el equipaje de personas viajando con algún servicio especial como menor recomendado o silla de ruedas.
          .row(numero="9" titulo="Etiquetas de Manipulación")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-77.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small #[strong Heavy:] Etiqueta que identifica los equipajes que tengan un peso mayor de 23 Kilos y hasta 45 Kilos.
          .row(numero="10" titulo="Etiquetas de animal vivo")
            .col-3.mx-3
              figure
                img(src="@/assets/template/tema-1-78.png", alt="Texto que describa la imagen")
            .col-8
              p.text-small #[strong Animal Vivo:] Identifica los huacales y contenedores de animales vivos en bodega.

    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Seguridad aeroportuaria
    figure.mt-4
      img(src="@/assets/template/tema-1-79.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-10
        p La seguridad aeroportuaria son los medios, recursos y el personal capacitado para dar cumplimiento a la normativa internacional de seguridad y control de accesos aeroportuarios; según el Anexo 17 emitido el 22 de Marzo de 1974 acerca de seguridad de la aviación (AVSEC; Aviation Security) de la OACI, en el capítulo 4 (medidas preventivas de seguridad, aparte 4,2 medidas relativas al control de acceso) se incorporan las normas y recomendaciones en materia de seguridad que deben aplicarse en la aviación para garantizar un medio de transporte confiable para los pasajeros, incluyendo la protección de la aviación civil en contra de actos de interferencia ilícita.
      .col-2.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-1-80.svg", alt="Texto que describa la imagen")    
    .h4.mt-5 Actos de Interferencia Ilícita
    p.mt-5 Actos o tentativas destinados a comprometer la seguridad de la aviación civil y del transporte aéreo, tales como:
    .row.mt-5
      .col-12.col-lg-7
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            | Apoderamiento Ilícito de aeronaves en vuelo.
          li 
            i.fas.fa-brain
            | Apoderamiento Ilícito de aeronaves en tierra.
          li 
            i.fas.fa-brain
            | Toma de rehenes a bordo de aeronaves o aeródromos.
          li 
            i.fas.fa-brain
            | Intrusión por la fuerza a bordo de aeronaves o aeródromos.
          li 
            i.fas.fa-brain
            | Introducción a bordo de una aeronave o en un aeropuerto de armas o de artefactos (o sustancias) peligrosos con fines criminales.
          li 
            i.fas.fa-brain
            | Comunicación de información falsa que compromete la seguridad de una aeronave en vuelo o en tierra o la seguridad de los pasajeros, tripulación, personal de tierra y público en un aeropuerto o en el recinto de una instalación de aviación civil.
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-81.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Para garantizar dicha seguridad los aeropuertos cuentan con personal calificado y capacitado para realizar inspecciones al equipaje con artículos prohibidos, pasajeros y tripulación de aeronaves, quienes realizan recorridos en las diferentes áreas aeroportuarias, además de puntos de inspección mecánicos (Rayos X) para los equipajes facturados y equipaje de mano. Es importante resaltar que todo el material relacionado con la seguridad de la aviación es considerado información sensitiva de seguridad.
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-82.svg", alt="Texto que describa la imagen")
    .h4.mt-5 Información SSI: Información sensible de seguridad (Sensitive Security Information)  
    p.mt-4 La información SSI o Sensitive Security Information, debe ser protegida contra accesos no autorizados y la empresa aérea para la cual labore debe diseñar un plan de sanciones en contra de aquellas personas que compartan o divulguen información que lleven o faciliten un acto de interferencia ilícita.
    figure.mt-4
      img(src="@/assets/template/tema-1-83.png" , alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  Mercancías peligrosas en counter
    .row.mt-5
      .col-12
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-84.svg", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p La reglamentación de mercancías peligrosas de la IATA, está basada en las instrucciones técnicas de la organización de aviación civil internacional OACI, dicho manual incorpora requerimientos operacionales adicionales que proveen a los operadores un sistema armonizado para la aceptación y el transporte de mercancías peligrosas en forma segura y eficiente.
                p.mt-3 La reglamentación incluye una lista detallada de artículos y sustancias individuales especificando la clasificación de las naciones unidas de cada artículo o sustancia y su aceptación para el transporte aéreo, así como las condiciones para su transporte.
    .h4.mt-5 Base de la Reglamentación de Mercancías Peligrosas
    p.mt-5 La información SSI o Sensitive Security Information, debe ser protegida contra accesos no autorizados y la empresa aérea para la cual labore debe diseñar un plan de sanciones en contra de aquellas personas que compartan o divulguen información que lleven o faciliten un acto de interferencia ilícita.
    .row.mt-5
      .col-12.col-lg-7
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            .col-12
              p Comité de expertos de las Naciones Unidas (COE), desarrolla los procedimientos recomendados para el transporte de todo tipo de mercancías peligrosas, excepto el material radioactivo.
          li 
            .lista-ol--cuadro__vineta
              span 2
            .col-12
              p La Agencia Internacional de Energía Atómica (IAEA), desarrolla los procedimientos recomendados para el transporte seguro de materiales radioactivos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            .col-12
              p La Organización de Aviación Civil Internacional (OACI), ha utilizado estas recomendaciones como base para preparar la reglamentación para el transporte sin riesgo de mercancías peligrosas por vía aérea. La reglamentación de OACI está codificada en el anexo 18 al convenio internacional de aviación civil y sus instrucciones técnicas para el transporte sin riesgo de mercancías peligrosas por vía aérea (documento 9284-AN/905 con sus enmiendas). 
          li 
            .lista-ol--cuadro__vineta
              span 4
            .col-12
              p La reglamentación de IATA sobre mercancías peligrosas contiene todos los requisitos de las instrucciones técnicas. Además, IATA, ha incluido requisitos adicionales que son más restrictivos que las instrucciones técnicas y refleja las prácticas normales de la industria o consideraciones operacionales.
      .col-6.col-lg-5.offset-3.offset-lg-0.px-5
        figure
          img(src="@/assets/template/tema-1-85.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-8.offset-2
        figure
          img(src="@/assets/template/tema-1-86.png", alt="Texto que describa la imagen")
    .h4.mt-5 Clasificación
    p.mt-5 Las mercancías peligrosas se clasifican en:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-amarillo")
      .row(titulo="Clase 1: Explosivos")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-87.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Artículos y sustancias que presentan un riesgo de explosión masiva. 	
            li.mt-3 
              i.fas.fa-angle-right
              | Artículos y sustancias que presentan riesgo de proyección, pero no-explosión 	masiva. 
            li.mt-3 
              i.fas.fa-angle-right
              | Artículos y sustancias que presentan riesgo de incendio, riesgo de que se produzcan pequeños efectos de onda explosiva y/o un pequeño riesgo de explosión masiva. 
            li.mt-3 
              i.fas.fa-angle-right
              | Artículos y sustancias que no presentan ningún riesgo considerable. 	
            li.mt-3 
              i.fas.fa-angle-right
              | Sustancias muy poco sensibles que presentan riesgo de explosión masiva. 
            li.mt-3 
              i.fas.fa-angle-right
              | Sustancia extremadamente insensible que no presenta riesgo de	explosión masiva. 
      div(titulo="Clase 2: Gas").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-88.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Gas inflamable.  
            li.mt-3 
              i.fas.fa-angle-right
              | Gas no inflamable, no tóxico. 
            li.mt-3 
              i.fas.fa-angle-right
              | Gas tóxico.
      div(titulo="Clase 3: Líquidos inflamables").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-89.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            p Algunos se derivan del petróleo  otros de procesos naturales o industriales, algunas moléculas se mueven con una velocidad que puede crear vapores y llegar al espacio aéreo, estos al mezclarse con el aire dentro de los  límites explosivos para el material particular se quemará o explotará al prenderse lo cual atenta contra la seguridad del vuelo.
      div(titulo="Clase 4: Sólidos inflamables").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-90.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Sólido Inflamable.
            li 
              i.fas.fa-angle-right
              | Sustancia que presentan riesgo de combustión espontánea.
            li 
              i.fas.fa-angle-right
              | Sustancia que en contacto con el agua emite gases inflamables. 
      div(titulo="Clase 5: Sustancias comburentes y peróxidos orgánicos ").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-91.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Comburentes.
            li 
              i.fas.fa-angle-right
              | Peróxidos orgánicos
      div(titulo="Clase 6: Sustancias tóxicas e infecciosas ").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-92.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Sustancias tóxicas.
            li 
              i.fas.fa-angle-right
              | Sustancias infecciosas. 
      div(titulo="Clase 7: Material radioactivo").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-93.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Contienen átomos que cambian su estructura de forma libre cada cierto periodo de tiempo, esto emite una radiación que causa radiación ionizante de cambio químico o biológico.  Esta es peligrosa para el ser humano, dependiendo de la radiación, la dosis,  y la duración de la explosión. Para este caso existen embalajes que son seguros de manipular y transportar ya que este mismo actúa como embalaje. 
      div(titulo="Clase 8: Corrosivos").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-94.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Puedes ser ácidos o alcalinos, estos son corrosivos para la piel, los ojos y las membranas mucosas. Los Corrosivos se clasifican en grupos de embalajes dependiendo de su capacidad para destruir.
      div(titulo="Clase 9: Mercancías peligrosas diversas").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-1-95.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Por sus propiedades no se pueden incluir en los demás grupos, existen subgrupos que se revisan desde el punto de vista medioambiental.
    p.mt-5 El operador o su agente de servicio al pasajero y el administrador del aeropuerto deben garantizar que no se transporten estos elementos en un avión; por lo tanto, es importante realizar la entrevista de seguridad. 
    p.mt-5 Este es un ejemplo de cómo se puede realizar:
    .row.mt-5
      .col-12.col-lg-8
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | ¿Lleva algún artículo cuyo contenido no conoce? 
          li 
            i.fas.fa-angle-right
            | ¿Ha perdido de vista su equipaje en algún momento? 
          li 
            i.fas.fa-angle-right
            | ¿Lleva algún tipo de batería, artículo o sustancia inflamable, tóxica, explosiva o corrosiva?
        p.mt-4 Es decir, aquellas que puedan: explotar, reaccionar peligrosamente, producir llamas, evolución peligrosa de calor, gases o vapores tóxicos, corrosivos o inflamables. 
        p.mt-3 Estos artículos suelen transportarse como mercancía peligrosa oculta, por lo tanto, cuando un cliente registre artículos como: cajas de herramientas, mochilas de acampar, mochilas de rescate, artículos de aseo para el hogar, etc.        
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-96.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mb-4.bg-amarillo-claro.py-4.px-5
          .h5.mb-0 Es importante que se permanezca actualizado sobre este tema, así que a investigar al respecto.
    p.mt-5 Cuando el pasajero presente un embalaje o producto con los pictogramas del SGA (Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos), se debe verificar su contenido y la hoja de datos de seguridad Safety Data Sheet (SDS); este no podrá ser aceptado pues puede contener residuos de material peligroso para las aeronaves. Se encuentran pictogramas como:
    .row.mt-5
      .col-8.offset-2
        figure
          img(src="@/assets/template/tema-1-97.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Sistema globalmente armonizado de clasificación y etiquetado de productos químicos


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Visa de Turismo',
        texto:
          'Como su nombre lo indica es exclusiva para realizar actividades relacionadas con turismo, por los tanto no es permitido hacer negocios o realizar una labor remunerada, el país que otorgue la visa será el encargado de indicarle la duración de este.',
        imagen: require('@/assets/template/tema-1-58.png'),
      },
      {
        titulo: 'Visa Transito',
        texto:
          'Se expide específicamente para realizar escalas de máximo tres (3) días entre un país y otro.',
        imagen: require('@/assets/template/tema-1-59.png'),
      },
      {
        titulo: 'Visa de Trabajo',
        texto:
          'Su propósito es realizar actividades tales como negocios en el extranjero o labores remuneradas, esta visa por lo general es renovable y es requisito para solicitarla presentar contrato laboral o carta empresarial.',
        imagen: require('@/assets/template/tema-1-60.png'),
      },
      {
        titulo: 'Visa de Estudiante',
        texto:
          'Este documento es específico para estudiar en el extranjero. Para solicitarla, la persona debe estar matriculada en la universidad, colegio o instituto del país extranjero.',
        imagen: require('@/assets/template/tema-1-61.png'),
      },
      {
        titulo: 'Visa Diplomática',
        texto:
          'Visa exclusiva para personas con cargos diplomáticos y que se dirijan al extranjero en asuntos diplomáticos, visitas a embajadas, etc.',
        imagen: require('@/assets/template/tema-1-62.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
