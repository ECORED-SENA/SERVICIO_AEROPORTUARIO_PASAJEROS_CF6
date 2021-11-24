<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Procesos de embarque
    .row.mt-5
      .col-12.col-lg-9
        p Luego de culminar el proceso de registro de un pasajero, este debe dirigirse a la sala de abordaje asignada y allí estar atento a los llamados de abordaje del respectivo vuelo.
        p.mt-3 Es importante que el pasajero tenga en cuenta la información que se le brindó al momento del registro, datos como el número de la sala; la hora de presentación en sala de abordaje son de suma importancia, ya que de esto depende que el proceso de embarque se lleve a tiempo y lo más importante, que el pasajero pueda tomar su vuelo sin contratiempos.
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_4_1.h4 4.1  Áreas de abordaje
    figure.mt-4
      img(src="@/assets/template/tema-4-2.png", alt="Texto que describa la imagen")
    p.mt-5 En el proceso de abordaje intervienen áreas que son importantes para el inicio del viaje, tanto de seguridad para garantizar un vuelo seguro y sin novedades, como las que intervienen en el proceso de embarque. Dentro de estas se tienen:
    SlyderB.mb-5(:datos="datosSlyder").mt-5
    .titulo-segundo.mt-5
      #t_4_2.h4 4.2  Proceso de abordaje de pasajeros
    .row.mt-4
      .col-12.col-lg-9
        p Todo vuelo que sea despachado debe concordar en número de clientes, equipajes e información requerida por migración local o destino, en el caso de vuelos internacionales la tripulación debe estar en el General Declaration y presentar su identificación para abordar la aeronave, en el caso de los pasajeros que viajen hacia los Estados Unidos deben estar verificados por la TSA (Transportation Security Administration); por estas razones principalmente el agente de salas deberá presentarse 60 minutos antes de la salida del vuelo para cumplir con los procesos de recepción y despacho del mismo.
        p.mt-3 Durante la preparación del abordaje se debe asegurar que todos los materiales de trabajo estén disponibles para la realización de la misma, esto es:
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-7.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Asistir al Briefing")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-8.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Allí se realiza un breve resumen de la operación y de los acuerdos realizados durante el turno.
          .row(numero="2" titulo="Preparar el abordaje")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-24.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Para garantizar el desarrollo del abordaje se debe contar con: mecanismos de comunicación, formatos de apertura y cierre de vuelo, General Declaration, pasabordos, etiquetas manuales, papel para impresora.
          .row(numero="3" titulo="Briefing tripulantes")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-9.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Se informarán novedades y requerimientos especiales para el abordaje del vuelo, hora estimada de salida, temas de interés, tales como posibles demoras o interrupciones de vuelo. 
          .row(numero="4" titulo="Verificar filas de abordaje e indicadores")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-10.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Verificar que se encuentren delimitadas las filas para el abordaje de los pasajeros.
          .row(numero="5" titulo="Verificar el equipo de trabajo")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-11.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Identificar el grupo de trabajo y repartir tareas en donde se debe validar que el sistema funcione adecuadamente y todas las herramientas tecnológicas como lectores e impresoras sirvan adecuadamente.
          .row(numero="6" titulo="Verificar el sistema de anuncios")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-12.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Se debe verificar que los micrófonos estén funcionando en forma correcta.
          .row(numero="7" titulo="Verificar el puente de abordaje")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-4-13.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small El agente de salas debe verificar que el puente de abordaje opere adecuadamente y en caso de no estar en una posición de contacto debe coordinar con el líder de rampa una escalera de des abordaje.
    p.mt-5 Ya validando que se cuentan con todas las herramientas necesarias para realizar el abordaje de un vuelo llega el momento de iniciar el proceso de atención en salas a los pasajeros, para ello lo primero que se debe realizar es un prevuelo como se verá a continuación:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Atender al pasajero")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-14.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Los agentes desde el ingreso a sala deben estar disponibles para cualquier solicitud de los pasajeros en sala.
          .row(numero="2" titulo="Mantenga un canal de comunicación disponible")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-15.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Es necesario mantener comunicación constante con las áreas involucradas en el proceso de despacho del vuelo.
          .row(numero="3" titulo="Grupo de trabajo")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-16.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Verifique quién es el líder de rampa asignado al vuelo y deje la información en el banner del vuelo, al igual de quién es el encargado del despacho de este.
          .row(numero="4" titulo="Estado del vuelo")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-17.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Verifique el estatus del vuelo y la cantidad de pasajeros y peso de la aeronave.
          .row(numero="5" titulo="Alertas")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-18.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Verifique las alertas asociadas al vuelo.
          .row(numero="6" titulo="Listas")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-19.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Verifique las listas de vuelo indicando cantidad de pasajeros en lista de espera, staff, niños recomendados, sillas de ruedas, pasajeros que continúen en conexión.
          .row(numero="7" titulo="En el caso de vuelos internacionales")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-20.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Verifique que no falte el ingreso de la información de documentación.          
          .row(numero="8" titulo="Solucionar pasajeros inelegibles")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-37.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Estos pasajeros son aquellos que por alguna razón el sistema o en algún punto de atención les colocaba una alerta con el fin de realizarle una verificación antes del abordaje, las alertas pueden llegar a ser por: cambios de silla, cobros pendientes, errores del sistema, documentación migratoria o procesos de seguridad.
          .row(numero="9" titulo="Verificar equipaje de mano")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-21.png", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Identificando coches, equipajes de mano y equipos ortopédicos que se requieran enviar por bodega.
          .row(numero="10" titulo="Verificar documento de información")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-33.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Revise el de los tripulantes según lo indicado en el General Declaration.

          .row(numero="11" titulo="Realizar la entrega de documentación")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-34.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Entregue la respectiva información del vuelo a la tripulación atendiendo el General Declaration.
          .row(numero="12" titulo="Realizar briefing")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-35.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Se realiza con la tripulación y se informa novedades del vuelo.
          .row(numero="13" titulo="Realice los cambios de sillas")
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-36.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Se cambian con el fin de dar cumplimiento a las normas y políticas de distribución de pasajeros por equipos.
    figure.mt-5
      img(src="@/assets/template/tema-4-22.png", alt="Texto que describa la imagen")
    p.mt-5 Posterior al prevuelo viene el proceso de abordaje, a continuación se verá:
    .h4.mt-5 Pasos de abordaje    
    .row.mt-5
      .col-10.col-lg-5.offset-1
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-25.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Abra el abordaje 60 minutos antes de la salida del vuelo.
      .col-10.col-lg-5.mx-4
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-29.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Imprima los pases de abordar de aquellos pasajeros que deben cambiar de silla por un ascenso o reasignación de sillas.
    .row.mt-5
      .col-10.col-lg-5.offset-1
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-26.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Solucione las alertas que identificó en el prevuelo.
      .col-10.col-lg-5.mx-4  
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-30.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Realice los anuncios de abordaje.
    .row.mt-5
      .col-10.col-lg-5.offset-1  
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-27.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Active el OnLoad, le servirá para manejar las solicitudes de ascenso de cabina.
      .col-10.col-lg-5.mx-4  
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-31.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Coordine el ingreso de servicios especiales.
    .row.mt-5
      .col-10.col-lg-5.offset-1.borde-gris-2-bot   
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-28.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Actualice el estado de equipaje Standby.
      .col-10.col-lg-5.mx-4.borde-gris-2-bot    
        .row.py-4.borde-gris-2-top
          .col-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-32.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-9.pt-4
            p.mb-0 Inicie el abordaje, para ello deberá iniciar abordando servicios especiales o personas en condiciones jurídicas especiales seguido de aquellas familias viajando con niños, después pasajeros viajando en clase ejecutiva, pasajeros elite y demás pasajeros.

    .titulo-segundo.mt-5
      #t_4_3.h4 4.3  Anuncios en sala de abordaje
    figure.mt-5
      img(src="@/assets/template/tema-4-23.png", alt="Texto que describa la imagen")
    p.mt-5 En el proceso de abordaje se pueden encontrar varios anuncios asociados al proceso, algunos de ellos son con sus respectivos ejemplos:
    .row.mt-5
      .col-8.offset-2
        .cajon.color-secundario.p-4.mb-4.py-4.px-4.bg-amarillo-50
          .row        
            .h4.mb-0 Saludo
            p.mb-0.text-small Buenos Días, tardes, noches; este es un anuncio informativo de su vuelo SENA001 con destino a Madrid y sus conexiones. Yo soy Claudia Ávila y junto con mi compañera Lida Guanumen; estamos en la sala número S30 para ayudarlos en lo que necesiten. 
    .row
      .col-8.offset-2
        .cajon.color-secundario.p-4.mb-4.py-4.px-4.bg-amarillo-35
          .row        
            .h4.mb-0 Inicio de abordaje
            p.mb-0.text-small Anunciamos la salida de nuestro vuelo SENA001 con destino a Madrid les informamos que el abordaje se hará por filas, la cual podrá visualizar en su pase de abordar la silla asignada; el abordaje se realizará de atrás hacia adelante y de ventana hacia pasillo.
    .row
      .col-8.offset-2
        .cajon.color-secundario.p-4.mb-4.py-4.px-4.bg-amarillo-20
          .row        
            .h4.mb-0 Ejemplo de abordaje en la aeronave A321
            p.mb-0.text-small Bienvenidos a pasar a bordo los pasajeros con asignación de silla 38,37,36. 
            p.mb-0.text-small Pasajeros con asignación 35, 34,33.
    .row
      .col-8.offset-2
        .cajon.color-secundario.p-4.mb-4.py-4.px-4.bg-amarillo-10
          .row        
            .h4.mb-0 Ya finalizando el proceso de abordaje se deben realizar anuncios de finalización con el fin de notificar a aquellos pasajeros que aún no hayan abordado el vuelo
            p.mb-0.text-small Último llamado para abordar el vuelo SENA001 con destino a la ciudad de Madrid si aún se encuentra en sala de abordaje son bienvenidos a abordar de inmediato por la puerta de embarque número S30.
            p.mt-3.mb-0.text-small #[strong Nota:] Tener en cuenta que los anuncios de abordaje pueden variar en forma según la empresa y su filosofía de servicio.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Filtro de seguridad',
        texto:
          'Al iniciar el proceso de ingreso a salas de abordaje el pasajero y todo su equipaje de mano debe realizar una inspección de seguridad en los diferentes puntos determinados por los aeropuertos.',
        imagen: require('@/assets/template/tema-4-3.png'),
      },
      {
        titulo: 'Salas de abordaje',
        texto:
          'Luego de culminar el proceso de seguridad, el pasajero debe esperar en la sala asignada para el embarque del vuelo, los vuelos nacionales inician su proceso de abordaje con 35 minutos de anterioridad y los internacionales con 2 horas de anterioridad.',
        imagen: require('@/assets/template/tema-4-4.png'),
      },
      {
        titulo: 'Módulo de abordaje',
        texto:
          'Área destinada para el personal de la aerolínea, en donde se realiza el proceso de pre vuelo, abordaje y cierre del vuelo asignado.',
        imagen: require('@/assets/template/tema-4-5.png'),
      },
      {
        titulo: 'Puente de abordaje',
        texto:
          'Brazo o muelle mecánico que permite el desplazamiento del cliente desde la sala de abordaje hasta la aeronave.',
        imagen: require('@/assets/template/tema-4-6.png'),
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
