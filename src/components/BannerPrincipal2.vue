<template lang="pug">
.banner-principal
  
  .container.degrade.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          img.banner-img1(:src="globalData.imagenBannerPrincipal")
          img.banner-img2(:src="globalData.imagenBannerPrincipal2")
          .imagen_flotante.imagen_flotante_1: img(src="@/assets/curso/flotante-1.svg")
          .imagen_flotante.imagen_flotante_2: img(src="@/assets/curso/flotante-2.svg")
          .imagen_flotante.imagen_flotante_3: img(src="@/assets/curso/flotante-3.svg")
          .imagen_flotante.imagen_flotante_4: img(src="@/assets/curso/flotante-4.svg")
          
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-img1
  position: absolute
  top 0%
  -webkit-backface-visibility: hidden
  animation: fade 10s linear infinite
@keyframes fade
  0%
    opacity: 1
  33%
    opacity: 0
  66%
    opacity: 1
  100%
    opacity: 0
.banner-img2
  -webkit-backface-visibility: hidden
  animation: fade2 10s linear infinite
@keyframes fade2
  0%
    opacity: 0
  33%
    opacity: 1
  66%
    opacity: 0
  100%
    opacity: 1


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.contenedor-imagenes
  position: relative

.imagen_flotante
  &_1
    animation: float1 5s ease-in-out infinite
    position: absolute
    top: 26%
    left: 9%
    width: 75px
  &_2
    animation: float2 5s ease-in-out infinite
    position: absolute
    top: 12%
    left: 73%
    width: 75px
  &_3
    animation: float2 5s ease-in-out infinite
    position: absolute
    top: 70%
    left: 19%
    width: 75px
  &_4
    animation: float3 5s ease-in-out infinite
    position: absolute
    top: 62%
    left: 73%
    width: 75px
@keyframes float1
	0%
  	transform: translatex(20px)
	50%
		transform: translatex(0px)
	100%
		transform: translatex(20px)
@keyframes float2
	0%
  	transform: translatey(0px)
	50%
		transform: translatey(-20px)
	100%
		transform: translatey(s0px)
@keyframes float3
	0%
  	transform: translatex(0px)
	50%
		transform: translatex(-20px)
	100%
		transform: translatex(s0px)
</style>
