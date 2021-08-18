<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figure.mt-4
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    p.mt-4 Desde tiempos inmemoriales el ser humano ha sido admirador del vuelo de las aves anhelando algún día imitarlos, pero es solo hasta 1903 y gracias al vuelo realizado por los hermanos Wright, que este anhelo se materializa y avanza en la historia.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
