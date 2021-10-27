<template lang="pug">
.tabs-b
  .tabs-b__header.row.m-0
    .col-6.col-sm-4.col-lg.tabs-b__tab(
      v-for="(elm,index) of elements"
      :key="'tabs-b-menu-'+elm.id"
      :class="{'tabs-b__tab--active' : selected === elm.id}"
      @click="selected = elm.id"
      @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
    )
      .indicador__container(v-if="mostrarIndicador && index === 1")
        .indicador--click
      .tabs-b__tab__icon(v-if="elm.icono")(v-else="elm.icono2")
        .img2
          img(:src="elm.icono2")
        .img1
          img(:src="elm.icono")
      .tabs-b__tab__title
        span(v-html="elm.titulo")

  .tabs-b__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-child="elm.elm"
  )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'TabsD',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass">
.tabs-b
  .img2
    display: none
  border-bottom: 2px solid #1D7E96
  &__header
  &__tab
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px
    background-color: #F2FFFE
    border-right: 2px solid #1D7E96
    border-bottom: 0px
    cursor: pointer

    &:active, &:focus, &:hover
      background-color: $color-sistema-f
      .img1
        display: none
      .img2
        display: block

    &:last-child
      border-right: none
    &__icon
      width: 60px
      height: 60px
      margin-bottom: 10px
    &__title
      text-align: center
      font-size: $h6-font-size
      line-height: 1.1em
      display: flex
      height: 100%
      align-items: center

    &--active
      .img1
        display: none
      .img2
        display: block
      background-color: $white
      border-top: 5px solid !important
      border-bottom: none
      &:active, &:focus, &:hover
        background-color: $white
      .tabs-b__tab__title
        font-weight: $base-bold-font-weight

    @media (min-width: $bp-min-sm) and (max-width: $bp-max-md)
      border-top: 2px solid #AFAFAF
      &:first-child
        border-left: 2px solid #AFAFAF
      &:last-child
        border-right: 2px solid #AFAFAF
      &:nth-child(4)
        border-left: 2px solid #AFAFAF
      &:nth-child(n+4)
        border-top: none
      &--active
        &:nth-child(-n+3)
          border-bottom: 2px solid #AFAFAF

    @media (max-width: $bp-max-xs)
      &:last-child
        border-right: 2px solid #AFAFAF
      &:nth-child(-n+2)
        border-top: 2px solid #AFAFAF
      &:nth-child(odd)
        border-left: 2px solid #AFAFAF

  &__content-item
    background-color: $white
  &.color-primario
    .tabs-b__tab--active
      border-top-color: $color-primario !important
  &.color-secundario
    .tabs-b__tab--active
      border-top-color: $color-secundario !important
  &.color-acento-contenido
    .tabs-b__tab--active
      border-top-color: $color-acento-contenido !important
  &.color-acento-botones
    .tabs-b__tab--active
      border-top-color: $color-acento-botones !important
</style>
