<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición y componentes de cultura organizacional

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p
          strong.etiqueta La cultura organizacional
          | es un eje primordial en el logro de hacer competitiva a una organización, esto proviene de la forma en que los miembros que la integran piensan, sienten y actúan frente al entorno y a sucesos internos; la cultura se transfiere en el tiempo y se adapta a la dinámica organizacional del momento, por lo tanto, se convierte en algo único que es propio, donde el talento humano comparte un sistema de creencias y valores que va cambiando y que se hace más complejo. 
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-img.png', alt='Texto que describa la imagen') 


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
