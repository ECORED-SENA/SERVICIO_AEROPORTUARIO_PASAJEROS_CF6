<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Aceptación del pasajero 
    .row.mt-4
      .col-12.col-lg-8
        p Durante el proceso de r s es necesario saber que toda persona que desee tomar un vuelo ya sea doméstica (dentro del país) o internacional, el pasajero es responsable de informarse referente a la documentación necesaria para tomar dicho vuelo; más es responsabilidad del Agente de Servicio al pasajero validar que cumpla con la misma para iniciar el proceso de registro.
        p.mt-3 Las aerolíneas emplean diferentes tipos de software para realizar el proceso de registro de pasajeros, el cual debe tener estándares de seguridad bastante estrictos y por lo tanto a cada colaborador le es entregado un usuario y password, este es de carácter personal e intransferible y no debe ser compartido con terceros, ya que hace parte de los métodos recomendados entregados por la OACI en el anexo 17 para mantener y preservar la seguridad aérea
      .col-4.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_3_1.h4 3.1  Operación del sistema
    figure.mt-4
      img(src="@/assets/template/tema-3-2.png", alt="Texto que describa la imagen")
    p.mt-5 Uno de los sistemas más empleados para el proceso de viaje es:
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        .col-12
          p.mb-0 Amadeus Altéa Departure Control CM (Customer Management) Software, desarrollado por la compañía SITA y empleado por reconocidas aerolíneas a nivel mundial.
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-3.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-10
        p Para iniciar debe colocar el usuario y contraseña, entregado por el empleador (recuerde cambiar la clave de acceso periódicamente) y allí es empezará a descubrir las diferentes aplicabilidades que tiene este sistema.
        p.mt-3 Ya estando en el sistema, se mostrarán 5 viñetas que son desplegables y le permitirá ver el menú de cada una de ellas iniciando por Applications, En este módulo encontrará el 100 % de las actividades que se realizan para la atención de pasajeros en el aeropuerto y al desplegar su menú cada uno de los procesos junto con la entrada rápida en el teclado.
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
      .col-10.offset-1.mt-5
        figure
          img(src="@/assets/template/tema-3-5.png", alt="Texto que describa la imagen")
    p.mt-5 Por lo tanto, las aplicaciones que más se emplean para el registro de pasajeros son: 
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 2
        .col-12
          p.mb-0 #[strong Customer: Ctrl + H], ubicación de la información de los pasajeros que han reservado con la compañía.
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 3
        .col-12
          p.mb-0 #[strong Flight: Ctrl + F], información acerca de los vuelos de llegada y salida (itinerario, capacidad, estado y peso).
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta
          span 4
        .col-12
          p.mb-0 #[strong Reservations: Ctrl + R], ventana críptica que permite visualizar información referente a vuelos, frecuencias, reservas de pasajeros, tiquetes aéreos, codificar y decodificar destinos, moneda, aeropuertos, ciudades, países y demás temas relacionados.
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-8.png", alt="Texto que describa la imagen")
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .titulo-segundo.mt-5
      #t_3_2.h4 3.2  Proceso de registro de pasajeros
    figure.mt-5
      img(src='@/assets/template/tema-3-9.png', alt="Texto que describa la imagen")
    p.mt-5 Para iniciar el registro de un pasajero, es necesario realizar un check list de atención a pasajeros así:
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 1
    .tabla-b.color-acento-contenido.mb-5
      table.borde-gris-1
        tr.bg-gris
          th.borde-gris-1(rowspan='4') Saludo
          td.borde-gris-1 Buenos (días, tardes, noches)
        tr.bg-gris
          td.borde-gris-1 Bienvenido a XXXXXX (nombre de la aerolínea)
        tr.bg-gris
          td.borde-gris-1 Mi nombre es
        tr.bg-gris
          td.borde-gris-1 ¿Hacia dónde viaja?
        tr.bg-blanco
          th.borde-gris-1(rowspan='2') Documentos
          td.borde-gris-1 Me permite sus documentos por favor
        tr.bg-blanco
          td.borde-gris-1 Verifico documentos de acuerdo con el destino
        tr.bg-gris
          th.borde-gris-1(rowspan='1') Tarjeta viajero frecuente
          td.borde-gris-1 ¿Señor (Apellido) Acumula millas con XX (aerolínea)?
        tr.bg-blanco
          th.borde-gris-1(rowspan='1') Tiquete electrónico
          td.borde-gris-1 De acuerdo con el destino verifico si tiene tiquete de regreso o salida del país, verificar su nacionalidad. Recuerda verificar en el timatic que necesita el pasajero
        tr.bg-gris
          th.borde-gris-1(rowspan='1') Impuestos
          td.borde-gris-1 Verifico CO y DG (fecha de entrada a COL) si aplica cobro realizar el cobro por Fee Manager, sino aplica colocar comentario por Add Service EXTO nacionalidad y fecha de ingreso a CO
        tr.bg-blanco
          th.borde-gris-1(rowspan='2') Equipaje
          td.borde-gris-1 ¿Señor (Apellido), lleva equipaje?
        tr.bg-blanco
          td.borde-gris-1 Colóquelo sobre la báscula por favor
        tr.bg-gris
          th.borde-gris-1(rowspan='1') Equipaje de mano
          td.borde-gris-1 ¿Señor (Apellido) lleva equipaje de mano? (verifico equipaje de mano)
        tr.bg-blanco
          th.borde-gris-1(rowspan='1') Preguntas de seguridad
          td.borde-gris-1 Realizo las preguntas de seguridad, Señor (Apellido) le voy a realizar unas preguntas de seguridad
        tr.bg-gris
          th.borde-gris-1(rowspan='1') Pregunta
          td.borde-gris-1 ¿Señor (Apellido) necesita que le colabore en algo más?
        tr.bg-blanco
          th.borde-gris-1(rowspan='1') Entrega de documentos
          td.borde-gris-1 Señor (Apellido) le devuelvo su documento (nombre el documento pasaporte, cedula, identificación nacional, etc.)
        tr.bg-gris
          th.borde-gris-1(rowspan='1') Entrega de pasabordo
          td.borde-gris-1 Señor (Apellido) (doy las indicaciones) No. De Vuelo, hora en la que debe estar el pasajero en sala, hora de salida del vuelo, sala de embarque, silla asignada, grupo, puerta de embarque.
        tr.bg-blanco
          th.borde-gris-1(rowspan='1') Despedida
          td.borde-gris-1 Señor (Apellido) le deseo un buen viaje, gracias por volar con XX(nombre de la aerolínea) o gracias por preferirnos
    .titulo-segundo.mt-5
      #t_3_3.h4 3.3  Técnicas de negociación
    figure.mt-5
      img(src='@/assets/template/tema-3-10.png', alt="Texto que describa la imagen")
    p.mt-5 Negociar es un proceso muy parecido a vender y puede llegar a producir la ruptura de las relaciones comerciales y lo ideal es que ambas partes queden satisfechas. Las fases de la negociación son muy parecidas a las de la venta, el conocimiento y dominio de estas fases va a depender en gran medida del éxito o fracaso en la negociación, por lo que es importante tener en cuenta lo siguiente:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Preparación")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Defina el objetivo y la manera de conseguirlo, evalúe la necesidad del cliente y hasta dónde es posible ceder. Es muy importante tratar de descubrir los objetivos del contrario.
          .row(numero="2" titulo="Conversación")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-3-12.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small En esta fase empieza el proceso de intercambio o presentación, tratando de quitar agresividad al vocablo de discusión y se les da determinación a las necesidades del cliente
          .row(numero="3" titulo="Propuestas ")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-3-13.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Las propuestas pueden ser objeto de discusión, es decir, es una oferta o petición diferente de la posición inicial y deben evitarse en las primeras propuestas las ofertas arriesgadas, debiendo ser estas cautelosas y exploratorias pues en todo caso se desarrollarán más adelante y es probable que sean aceptadas.  
          .row(numero="4" titulo="El cierre y el acuerdo")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-3-14.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small La finalidad del cierre es llegar a un acuerdo y debe hacerse en forma segura y con firmeza y para que sea aceptado, debe satisfacer un número suficiente de las necesidades de la otra parte.
    .titulo-segundo.mt-5
      #t_3_4.h4 3.4  Compensaciones
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p En el proceso aeroportuario se pueden presentar irregularidades en la prestación del servicio que conlleven a la realización de una compensación a los pasajeros, estas compensaciones son entregadas de acuerdo con el tipo de irregularidad y al tipo de pasajero. Acorde a la Aeronáutica Civil sus derechos como pasajero están plasmados en varios convenios internacionales como el Sistema Varsovia/29, La Haya/55, Montreal/99 o Decisión 619 de la Comunidad Andina, que se aplican a todas las compañías aéreas de transporte internacional y en los que se indican su derecho a las indemnizaciones previstas en el Código de Comercio en caso de pérdida, retraso, saqueo o daño. Se ve con mayor detalle esto:
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-15.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Demora de vuelo")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-16.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p De acuerdo con lo estipulado en el Artículo 1882 del Código de Comercio, cuando un viaje no pueda iniciarse en las condiciones establecidas o se retrase su iniciación por causa de fuerza mayor o por razones meteorológicas que afecten su seguridad, el transportador quedará liberado de responsabilidad devolviendo el precio del billete. 
      div(titulo="Cancelaciones de vuelo").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-17.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Cuando el vuelo es cancelado por causas imputables a la aerolínea, el pasajero debe ser embarcado en un tiempo máximo de 3 (tres) horas, de lo contrario el usuario puede quejarse formalmente. En caso de que no se le haya reintegrado el precio del pasaje conforme lo establece la norma se le sufragará al pasajero los gastos de hospedaje (si no se encuentra en su lugar de residencia) y gastos de traslado entre el aeropuerto y el lugar de hospedaje y viceversa.
      div(titulo="Sobreventas").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-18.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Ocurre cuando el pasajero se presenta al vuelo y teniendo reserva confirmada, no puede abordar el avión porque su silla ha sido ocupada. En este caso también se puede quejar oficialmente ante la Superintendencia de Industria y Comercio. Si el embarque es denegado por sobreventa o por cualquier otro motivo imputable a la aerolínea teniendo el pasajero reserva hecha y habiéndose presentado oportunamente en el aeropuerto, la aerolínea está en la obligación de proporcionar el viaje del pasajero a su destino final en el siguiente vuelo disponible de la propia empresa, en la misma fecha y en la misma ruta. 
      div(titulo="Irregularidades con el equipaje").row
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-19.png", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          p Cuando el equipaje presenta demora en la entrega, avería o saqueo, la aerolínea está en la obligación de abrir un reporte y realizar la búsqueda del equipaje y en caso de pérdida realizar el pago del mismo. 
    p.mt-5 En el RAC (Reglamento Aeronáutico de Colombia), se establece que en caso de pérdida, saqueo, destrucción total o parcial o avería del equipaje el pasajero puede presentar la queja a más tardar en un plazo de 7 días a partir de la fecha de su recibo o de la fecha en que dicho equipaje debió llegar a su destino. En caso de retraso la queja deberá hacerse a más tardar dentro de los 21 días a partir de la fecha en que el equipaje debió llegar a su destino.
    p.mt-4 Basado en lo anterior, los métodos de compensación más empleados por las empresas aéreas son:
    .row.mt-5
      .col-4.rounded-izq-20.bg-amarillo-oscuro.text-center
        figure.mt-4
          img(src="@/assets/template/tema-3-20.png", alt="Texto que describa la imagen").w-50.margin-0-auto.p-3
        .h4.mt-4 EMD (Electronic Miscellaneous Document)
        p.mt-4 Trata de un documento valor que expide la compañía por un valor especifico el cual puede emplear el cliente en productos de la misma empresa.
      .col-4.bg-amarillo-mas-oscuro.text-center
        figure.mt-4
          img(src="@/assets/template/tema-3-21.png", alt="Texto que describa la imagen").w-50.margin-0-auto.p-3
        .h4.mt-4 Millas 
        p.mt-4 Puntos dentro del programa de lealtad de la empresa que le permitirá al cliente adquirir productos o beneficios inscritos en el programa.
      .col-4.rounded-der-20.bg-amarillo-oscuro.text-center
        figure.mt-4
          img(src="@/assets/template/tema-3-22.png", alt="Texto que describa la imagen").w-50.margin-0-auto.p-3
        .h4.mt-4 Efectivo 
        p.mt-4.pb-5.mb-5 Dinero en efectivo el cual se entrega según la afectación y tipo de pasajero en la moneda local. 



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
