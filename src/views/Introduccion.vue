<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.fondo-video.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      figure.mb-5
        img(src='@/assets/curso/intro-banner.png', alt='Texto que describa la imagen')

      p.mb-5(data-aos="fade") La comunicación en la cultura organizacional es un fenómeno que se da naturalmente en toda organización, siendo un eje primordial en que una organización sea más productiva y competitiva en el mercado. Se invita a ver el video introductorio a este componente:

      .row.justify-content-center.mb-5(data-aos="fade-down") 
        .col-md-10
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
