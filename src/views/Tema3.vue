<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bloque-fondo-tema3.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Estilos de comunicación

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p La comunicación en las empresas es un proceso complejo que va determinado por su estructura organizacional, por las personas que la integran y por sus necesidades, desde este punto de vista cada organización necesita un tipo de comunicación que tome en cuenta el 
          strong.etiqueta objetivo del mensaje que se quiere dar. 
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3-img.png', alt='Texto que describa la imagen') 
    
    p(data-aos="fade") Los estilos clásicos que predominan al dar un mensaje en las organizaciones son: 

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bg-verde2.p-5
        .row.justify-content-center.mb-4
          .col-11
            figure
              img(src='@/assets/curso/tema3-tarj1.svg', alt='Texto que describa la imagen')
        h4.text-center Comunicación formal
        p.text-center Tiene un emisor y un destinatario definidos, se transmite por medio de los canales y los medios ya establecidos para este propósito, entre los recursos utilizados se encuentran:
        p.text-center.mb-0
          strong Memorandos.
        p.text-center.mb-0  
          strong Boletín informativo.
        p.text-center.mb-0  
          strong Circulares.
        p.text-center.mb-0
          strong Correo electrónico.
        p.text-center.mb-0  
          strong Reuniones.
      .col-md.tarjeta.bg-azul2.p-5
        .row.justify-content-center.mb-4
          .col-7
            figure
              img(src='@/assets/curso/tema3-tarj2.svg', alt='Texto que describa la imagen')
        h4.text-center Comunicación informal
        p.text-center Se produce entre los empleados de una empresa de manera libre y espontánea, no hay emisor ni destinatario definidos.
        p.text-center El medio más conocido en este tipo de comunicación es el rumor DONDE no hay confirmación de la fuente ni de su veracidad. 

    p.mb-4(data-aos="fade") Al comunicarse con otras personas, cada uno de ellos tiene diferentes formas de expresar su mensaje. A continuación, se mencionan los estilos de transmisión de los mensajes corporativos.

    TabsD.color-acento-botones.mb-5(data-aos="fade-down")
      .row.justify-content-center.py-4.py-md-5(titulo="Estilo Asertivo" :icono="require('@/assets/curso/tema3-ico1-a.svg')" :icono2="require('@/assets/curso/tema3-ico1-b.svg')")
        .col-md-5
          h4 Estilo Asertivo  
          p Es abierto, equilibrado, se basa en el respeto a los demás, los emisores se expresan de manera clara sin vulnerar a aquellos que se encuentran a su alrededor.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema3-tab-1.png', alt='Estilo Asertivo')
      .row.justify-content-center.py-4.py-md-5(titulo="Estilo Pasivo" :icono="require('@/assets/curso/tema3-ico2-a.svg')" :icono2="require('@/assets/curso/tema3-ico2-b.svg')")
        .col-md-5
          h4 Estilo Pasivo 
          p Es inhibido, las personas temen ser rechazadas u ofender a los demás, optan por no mostrar lo que sienten ni lo que piensan, prefieren que las cosas sigan su curso.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema3-tab-2.png', alt='Estilo Pasivo')      
      .row.justify-content-center.py-4.py-md-5(titulo="Estilo Agresivo" :icono="require('@/assets/curso/tema3-ico3-a.svg')" :icono2="require('@/assets/curso/tema3-ico3-b.svg')")
        .col-md-5
          h4 Estilo Agresivo 
          p Carece de empatía, el emisor sobrevalora sus pensamientos y emociones, se impone sin tener en cuenta el punto de vista de los demás, lo que se decide se convierte en una orden que los demás deben acoger.
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema3-tab-3.png', alt='Estilo Agresivo')

    Separador


    // 3.1
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h2 3.1  Elementos en un proceso comunicativo

    p.mb-4(data-aos="fade") Los elementos de un proceso de comunicación son todos aquellos factores que intervienen para el envío y la recepción de un mensaje. Estos son:

    AcordeonB.mb-4(tipo="a" clase-tarjeta="tarjeta bg-verde")
      .row(titulo="Emisor")
        .col-md-8.mb-4.mb-md-0
          p Es quien transmite el mensaje, la persona que inicia la comunicación.      
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord1.svg', alt='Emisor')
      .row(titulo="Receptor")
        .col-md-8.mb-4.mb-md-0
          p Es quien recibe el mensaje, puede participar activamente en el proceso comunicativo o tener un papel incidental.     
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord2.svg', alt='Receptor')
      .row(titulo="Código o lenguaje")
        .col-md-8.mb-4.mb-md-0
          p Es el conjunto de signos usados para transmitir un mensaje. 
          ul.lista-ul--color.lista-naranja
            li
              i.fas.fa-dot-circle
              | Los códigos lingüísticos se clasifican en orales (lengua o idioma) y escritos que necesitan destrezas de lecto-escritura. 
            li.mb-0  
              i.fas.fa-dot-circle
              | Los códigos no lingüísticos pueden ser señales como las de tránsito.      
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord3.svg', alt='Código o lenguaje')
      .row(titulo="Mensaje")
        .col-md-8.mb-4.mb-md-0
          p Lo conforman las ideas, conceptos o informaciones que se quieren comunicar, usando para ello un sistema de signos que es común tanto para el emisor como para el receptor.      
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord4.svg', alt='Mensaje')
      .row(titulo="Canal de comunicación")
        .col-md-8.mb-4.mb-md-0
          p Es el medio utilizado para transmitir el mensaje.     
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord5.svg', alt='Canal de comunicación')
      .row(titulo="Ruido")
        .col-md-8.mb-4.mb-md-0
          p Es todo aquello que distorsiona el mensaje original que se quiere comunicar.       
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord6.svg', alt='Ruido')
      .row(titulo="Retroalimentación o feedback")
        .col-md-8.mb-4.mb-md-0
          p Es el mecanismo de control que tiene el emisor para comprobar si el mensaje fue recibido e interpretado de forma correcta.      
        .col-md-4
          figure
            img(src='@/assets/curso/tema3-acord7.svg', alt='Retroalimentación o feedback')

    p.mb-4(data-aos="fade") El diagrama como resultado del proceso de los elementos de la comunicación, se visibiliza en la siguiente figura 5.

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 5.</b> Elementos de la comunicación
        figure
          img(src='@/assets/curso/tema3-figura.svg', alt='Elementos de la comunicación')
        figcaption Nota: Elementos de la comunicación. Adaptado de Santos (2012).

    Separador


    // 3.2
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h2 3.2  Ejemplos de los tipos de comunicación

    p.mb-4(data-aos="fade") A continuación, ver figura 6 y tabla 5, se muestran algunos ejemplos como resultados de los diferentes tipos de comunicación.

    .row.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        p.mb-0 <b>Figura 6.</b> Ejemplos tipos de comunicación
      .tarjeta--container.row.mb-3
        .col-md.tarjeta.bg-azul2.p-5
          .row.justify-content-center.mb-4
            .col-10
              figure
                img(src='@/assets/curso/tema3-fig6-1.svg', alt='Texto que describa la imagen')
          h4.text-center Comunicación verbal
          p.text-center Conversación telefónica y escritura de una carta.
        .col-md.tarjeta.bg-verde2.p-5
          .row.justify-content-center.mb-4
            .col-11
              figure
                img(src='@/assets/curso/tema3-fig6-2.svg', alt='Texto que describa la imagen')
          h4.text-center Comunicación publicitaria
          p.text-center Publicidad impresa.
        .col-md.tarjeta.bg-azul2.p-5
          .row.justify-content-center.mb-4
            .col-md-12.col-11
              figure
                img(src='@/assets/curso/tema3-fig6-3.svg', alt='Texto que describa la imagen')
          h4.text-center Comunicación organizacional
          ul.lista-ul--color.lista-naranja
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-2
                strong Comunicación interna: 
                | Reuniones, 
                italic Intranet, 
                | videoconferencias y boletines internos.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Comunicación externa: 
                | Redes sociales, página 
                italic web, newsletters, 
                | notas de prensa y publicidad en redes sociales.    
      .row
        figcaption Nota. Adaptado de Irusta (2019).

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Tabla 5.</b> Ejemplos de los tipos de comunicación
        figure
          img.mb-3(src='@/assets/curso/tema3-tabla.svg', alt='Ejemplos de los tipos de comunicación')
        figcaption Nota. Adaptado de Irusta (2019).




</template>

<script>
import TabsD from '../components/TabsD'
import AcordeonB from '../components/AcordeonB'
export default {
  name: 'Tema3',
  components: {
    TabsD,
    AcordeonB,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
