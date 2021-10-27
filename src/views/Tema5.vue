<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bloque-fondo-tema5.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Definición y componentes de cultura organizacional

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p El estilo de comunicación asertiva 
          strong.etiqueta es aquel donde prevalece el respeto hacia los otros y hacia uno mismo,
          | está abierto a la opinión ajena, se acepta que la postura del interlocutor no tiene que coincidir con la que tiene el emisor, se evita el conflicto, pero no deja de expresar lo que piensa abierta, directa y honesta. Por lo tanto, para mejor comprensión se invita a visualizar el siguiente video que representa la comunicación asertiva.
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5-img.png', alt='Texto que describa la imagen') 
    
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Las características de las personas que manejan el estilo de 
          strong comunicación asertiva, 
          | se clasifican en:
        ul.lista-ul--color.lista-naranja.mb-5
          li.mb-0
            i.fas.fa-dot-circle
            | Respetar los derechos de los demás y proteger los propios. 
          li.mb-0  
            i.fas.fa-dot-circle
            | Cumplir objetivos sin demeritar a otros. 
          li.mb-0  
            i.fas.fa-dot-circle
            | Tener autoconfianza.
          li.mb-0  
            i.fas.fa-dot-circle
            | Ser extrovertidos.   
          li.mb-0  
            i.fas.fa-dot-circle
            | Tomar sus propias decisiones.  
        p Algunas formas de demostrar 
          strong asertividad 
          | al momento de comunicarse son:    
        ul.lista-ul--color.lista-naranja.mb-4
          li.mb-0
            i.fas.fa-dot-circle
            | Mantener contacto visual. 
          li.mb-0  
            i.fas.fa-dot-circle
            | Postura corporal congruente con el mensaje que se quiere dar.
          li.mb-0  
            i.fas.fa-dot-circle
            | Gestos apropiados para enfatizar.
          li.mb-0  
            i.fas.fa-dot-circle
            | Tono de voz nivelado y bien modulado.  
          li.mb-0  
            i.fas.fa-dot-circle
            | Sincronizar y buscar la forma de maximizar la receptividad y el impacto en la comunicación. 
          li.mb-0  
            i.fas.fa-dot-circle
            | El cómo, cuándo y dónde se decide dar el mensaje tiene más importancia que lo que se dice.    
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5-img2.png', alt='Texto que describa la imagen') 

    p(data-aos="fade") A nivel laboral adquirir la habilidad para comunicarse de manera asertiva y efectiva, permite desarrollar otras competencias necesarias para el liderazgo y la gestión de equipos de trabajo, debido a que se mejora el desempeño laboral, se solucionan conflictos y aumenta la productividad. 

    p.mb-4(data-aos="fade") En las organizaciones cada vez es más importante aplicar este estilo de comunicación, algunas técnicas para ser asertivo en el trabajo son: 

    TabsD.color-acento-botones.mb-5(data-aos="fade-down") 
      .row.justify-content-center.py-4.py-md-5(titulo="Técnica Del Sándwich" :icono="require('@/assets/curso/tema5-ico1-a.svg')" :icono2="require('@/assets/curso/tema5-ico1-b.svg')")
        .col-md-4
          h4 Técnica Del Sándwich  
          p Es una manera de transmitir nuestra posición haciendo que la parte negativa del tema que en medio de elogios. Comienza diciendo algo positivo que sea verdadero, continua con la crítica o comentario negativo y termina con una propuesta positiva. 
          p Es una herramienta que 
            strong permite suavizar el tono negativo y facilita que la otra persona este predispuesta a aceptar y escuchar nuestro mensaje. 
          p Es la manera de lograr que los demás se coloquen de nuestra parte sin crear resistencia.
        .col-md-6
          figure.mb-4
            img(src='@/assets/curso/tema5-tab-1.svg', alt='Técnica Del Sándwich') 
          p.mb-0.p-4.bg-verde.bordes-curvos
            span <b>Ejemplo:</b> gracias por invitarme al concierto porque me encanta salir con ustedes, pero es un concierto de vallenato y a mí me gusta el rock, prefiero no ir, sin embargo, podemos programar otro día una salida a cenar.
      .row.justify-content-center.py-4.py-md-5(titulo="Técnica Disco Rayado" :icono="require('@/assets/curso/tema5-ico2-a.svg')" :icono2="require('@/assets/curso/tema5-ico2-b.svg')")
        .col-md-4
          h4 Técnica Disco Rayado 
          p Es una técnica que consiste en 
            strong mantener una postura frente a otra persona que está insistiendo en que hagamos otra cosa. 
            | La contraparte busca manipularnos para hacer algo que no podemos, la forma de evitarlo es fijar un argumento como respuesta que se repetirá una y otra vez. 
          p.mb-0.p-4.bg-verde.bordes-curvos
            span <b>Ejemplo:</b> esta semana no puedo ayudarte, ya me comprometí a realizar otro trabajo, cuando termine con mucho gusto te ayudaré.
        .col-md-6
          figure.mb-4
            img(src='@/assets/curso/tema5-tab-2.svg', alt='Técnica Disco Rayado') 
      .row.justify-content-center.py-4.py-md-5(titulo="Técnica Hablar " :icono="require('@/assets/curso/tema5-ico3-a.svg')" :icono2="require('@/assets/curso/tema5-ico3-b.svg')")
        .col-md-4
          h4 Técnica Hablar
          p Es una forma de 
            strong expresar nuestra opinión 
            | desde el punto de vista personal sin usar el “tú”, que por lo general hace que la otra persona se sienta atacada y dará una respuesta que iniciara una discusión. 
          p.mb-0.p-4.bg-verde.bordes-curvos
            span <b>Ejemplo:</b> queda poco tiempo para entregar el trabajo, ¿Por qué no le damos solución?
        .col-md-6
          figure.mb-4
            img(src='@/assets/curso/tema5-tab-3.svg', alt='Técnica Hablar')       
          
    .row.justify-content-center
      .col-md-10.bg-forma1.bg-azul.bordes-curvos.p-md-5.p-4.figuras
        img.fig-2(src='@/assets/curso/forma-2.png', alt='Forma decorativa')  
        .row
          .col-md-8.px-md-4
            h4 SÍNTESIS
            p La cultura organizacional reside en la falta de un buen proceso de comunicación y en la falta de mecanismos formales para el intercambio de ideas, restringiendo así su divulgación a todos los actores que intervienen en los procesos organizacionales. 
            p Estas formas de comunicarse pueden ser asimiladas o creadas desde su concepción de acuerdo con la manera como se maneje la información, lo que es realmente importante en estos procesos es 
              strong determinar que tipos de conductas son las más favorables, 
              | dependiendo de la información que se quiera transmitir, como se hace y la forma que afecta al colaborador o al equipo en general.
          .col-md-4
            img(src='@/assets/curso/tema5-img3.svg', alt='Técnica Hablar')  
        img.fig-3(src='@/assets/curso/forma-2.png', alt='Forma decorativa')


</template>

<script>
import TabsD from '../components/TabsD'
export default {
  name: 'Tema5',
  components: {
    TabsD,
  },
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
