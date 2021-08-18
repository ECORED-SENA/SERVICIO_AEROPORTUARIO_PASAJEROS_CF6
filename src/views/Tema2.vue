<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Servicios especiales en counter
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las empresas aéreas por ser empresas de servicio deben considerar manejar una serie de servicios especiales, los cuales constituyen un manejo preferente para los pasajeros que requieran una atención especial, ya sea por su condición física, psicológica o social.
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1  Concepto, características y aplicación
    p.mt-5 Aquí se encontrarán algunos conceptos sobre los servicios especiales que se pueden solicitar como viajero, sus características y en qué momento se aplican; esto es:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Venta de servicios especiales 
    figure.mt-4
      img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")  
    p.mt-5 Dentro del proceso en mostradores en aeropuerto, los servicios especiales pueden llegar a generar un valor extra para el pasajero según lo disponga la compañía aérea, algunos de estos servicios son:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Menor sin Acompañante")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-3.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Para realizar su cobro ingrese el servicio UMNR.
          .row(numero="2" titulo="Equipaje Sobredimensionado")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-4.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small El valor se cobrará según la franquicia de equipaje de la aerolínea.
          .row(numero="3" titulo="Equipaje con Sobrepeso")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-5.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small El valor se genera según la franquicia de equipaje de la aerolínea.
          .row(numero="4" titulo="Piezas Adicionales")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-6.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small 
          .row(numero="5" titulo="Transporte de Mascotas en cabina")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-7.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small El valor y la prestación de este servicio lo indica la aerolínea.
          .row(numero="6" titulo="Transporte de Armas")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-8.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small No todas las aerolíneas las transportan y son manejadas en compañía de la autoridad local.
          .row(numero="7" titulo="Maletines para mascotas en cabina de pasajeros")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-9.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Algunas empresas personalizan los maletines para mascotas y generan un ingreso extra.
          .row(numero="8" titulo="Equipo deportivo")
            .col-1.mx-3
              figure
                img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen")
            .col-9
              p.text-small Los equipos deportivos tales como bicicletas, equipos de buceo, tablas, equipo de golf se deben ingresar con la sigla SPEQ para generar el cobro.
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3  Recepción del equipaje
    .row.mt-5
      .col-12.col-lg-10
        p En el proceso de aceptación de equipaje se deben tener en cuenta las diferentes etiquetas que pueden llegar a ser necesarias para la efectiva documentación de equipaje.
        p.mt-3 En caso de que el cliente registre equipaje, se debe solicitar que lo ubique sobre la báscula y se le debe entregar la etiqueta de identificación; luego, se debe realizar lo siguiente:
      .col-2.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4.py-4.px-5.bg-morado-60
          .row
            .col-6.col-lg-4.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.mb-0.text-small Un recorrido visual de 360° al equipaje, tratando de identificar que el mismo no se encuentre en mal estado, no tenga elementos expuestos y no destile líquidos; en caso de tener algún daño preexistente, se debe solicitar al cliente firmar la responsabilidad limitada para la aceptación del equipaje y dejar un comentario en el sistema.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4.py-4.px-5.bg-morado-40
          .row
            .col-6.col-lg-4.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.mb-0.text-small Realizar una entrevista de seguridad acerca del contenido del mismo, con el fin de identificar que el cliente no lleve artículos peligrosos para el transporte por vía aérea; iniciar preguntando: #[strong “¿En su equipaje lleva artículos inflamables, corrosivos, tóxicos, explosivos, radioactivos tales como: aerosoles, insecticidas, limpiadores (cloro), thiner, varsol, acetona(quitaesmalte), baterías de litio: como bancos de poder, pilas de computador, cigarrillos electrónicos?”]
              p.mb-0.mt-3.text-small En caso de recibir una respuesta positiva, se debe solicitar al cliente retirar el elemento, ya que son prohibidos para el transporte por vía aérea: en caso de que la respuesta sea negativa continuar con el registro del equipaje.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4.py-4.px-5.bg-morado-30
          .row
            .col-6.col-lg-4.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.mb-0.text-small Ingresar el peso al sistema, en la misma ventana de customer al digitar #[strong proceed], le realizará la pregunta de si el cliente registra o no equipaje, al digitar #[strong (yes)] el sistema le habilitará la opción de colocar el peso y de manera automática le va a emitir una etiqueta al equipaje, la cual contiene los datos del cliente y del equipaje, la misma debe colocarse en el equipaje, identificando el destino de la maleta.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4.py-4.px-5.bg-morado-20
          .row
            .col-6.col-lg-4.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-2-15.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.mb-0.text-small Asegurarse que el equipaje ingrese al sistema de bandas del aeropuerto.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4.py-4.px-5.bg-morado-10
          .row
            .col-6.col-lg-4.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-2-16.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p.mb-0.text-small Indagar sobre si lleva equipaje de mano y validar que cumpla con las políticas en peso y dimensiones de la compañía y entregar al pasajero la etiqueta de identificación de equipaje de mano.











</template>

<script>
export default {
  name: 'Tema2',
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
