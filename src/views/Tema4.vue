<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bloque-fondo-tema4.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Comunicación no verbal

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p Es el proceso de comunicación que se emplea para transmitir información sin usar ningún tipo de palabra ya sea oral o escrita, lo que se expresa se hace por medio de posturas, gestos, movimientos corporales, sonidos y comportamientos que facilitan el entendimiento del mensaje, estos códigos no verbales apoyan la comunicación no verbal. 
        p Para afianzar los conocimientos en la comunicación no verbal, se invita visitar y escuchar el podcast 
          strong.etiqueta La comunicación no verbal,
          | el cual se encuentra en el material complementario. 
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-img.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") En las organizaciones se utiliza la comunicación no verbal utilizando expresiones mediante 
      strong.etiqueta gestos, contacto visual, lenguaje corporal, apariencia y tacto, pero sin utilizar palabras.
      | Se invita a ver la siguiente ilustración para afianzar conocimientos.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4(data-aos="fade") Entre las características de este tipo de comunicación se encuentran:

    .bloque-texto-a.color-primario.bg-forma3.p-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.px-md-4(src='@/assets/curso/tema4-cajon.svg', alt='Texto que describa la imagen') 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            ul.lista-ul--color.lista-naranja
              li
                i.fas.fa-dot-circle
                p.mb-2
                  strong Predominio de las expresiones: 
                  | ayudan a denotar el estado en que se encuentra una persona.
              li
                i.fas.fa-dot-circle
                p.mb-2
                  strong Información emitida de manera no verbal: 
                  | no se puede controlar ni disimular.
              li.mb-0
                i.fas.fa-dot-circle
                p.mb-0
                  strong Siempre está presente: 
                  | se comunica incluso con el silencio.   

    p.mb-4(data-aos="fade") A nivel empresarial, es una habilidad muy importante cuando se trata de ocupar cargos que estén relacionados con liderazgo y manejo de equipos de trabajo.

    .row.justify-content-center.mb-4
      .col-md-10.bg-forma1.bg-azul.bordes-curvos.p-md-5.p-4.figuras
        img.fig-2(src='@/assets/curso/forma-2.png', alt='Forma decorativa')  
        .row
          .col-md-7.px-md-4
            p Se puede así concluir que los tipos de comunicación no verbal son aquellas donde se transmite información a otra persona sin utilizar ningún tipo de palabra, y dentro de ella se encuentran: 
            ul.lista-ul--color.lista-naranja
              li.mb-0
                i.fas.fa-dot-circle
                p.mb-0
                  strong La kinésica: 
                  | lenguaje corporal.
              li.mb-0
                i.fas.fa-dot-circle
                p.mb-0
                  strong La proxémica: 
                  | uso que se hace del espacio personal.
              li.mb-0
                i.fas.fa-dot-circle
                p.mb-0
                  strong La paralingüística:  
                  | expresiones de sonido sin usar palabras. 
          .col-md-5
            img(src='@/assets/curso/tema4-img2.svg', alt='Técnica Hablar')  
        img.fig-3(src='@/assets/curso/forma-2.png', alt='Forma decorativa')

    p.mb-4(data-aos="fade") La siguiente figura 7 presenta la clasificación de este tipo de comunicación.

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 7.</b> Tipos de comunicación no verbal
        figure
          img(src='@/assets/curso/tema4-figura.svg', alt='Tipos de comunicación no verbal')

    Separador


    // 4.1
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h2 4.1  Elementos de la comunicación no verbal

    p.mb-4(data-aos="fade") Los elementos son importantes para mantener una comunicación adecuada en cualquier entorno en que se encuentre una persona. Algunos de ellos son (Pradas, 2018):

    .row(data-aos="fade-down")
      .col-lg-4.mb-3
        .contenedor-curva.p-4
          h1 Elementos de la comunicación no verbal
          .rectangulo.mt-2
      .col-lg-4.mb-3
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema4-1-hover2.svg", alt="Gestos")
          .text.p-md-4
            p.mb-3.h4 
              strong Gestos
            p Están siempre presentes en una conversación, ayudan a comprender como es el estado emocional de una persona en un momento determinado. Ejemplo:  Movimiento de manos.
            .rectangulo.mt-3
      .col-lg-4.mb-3
        .nav-holder
          img(src="@/assets/curso/tema4-1-hover3.svg", alt="Expresiones faciales")
          .text.p-md-4
            p.mb-3.h4 
              strong Expresiones faciales
            p Ayudan a determinar el estado de ánimo de una persona. Ejemplos:  Sonreír, mantener contacto visual.
            .rectangulo.mt-3
      .col-lg-4.mb-3
        .nav-holder
          img(src="@/assets/curso/tema4-1-hover4.svg", alt="Posición del cuerpo")
          .text.p-md-4
            p.mb-3.h4 
              strong Posición del cuerpo
            p Indica la actitud que tiene una persona cuando esta interactuando o conversando. Ejemplo:  Cruzar los brazos puede significar que se está colocando una barrera a lo que está comentando un interlocutor.
            .rectangulo.mt-2
      .col-lg-4.mb-3
        .nav-holder(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema4-1-hover5.svg", alt="Apariencia física")
          .text.p-md-4
            p.mb-3.h4 
              strong Apariencia física
            p Permite establecer la condición social, origen, edad, entre otras cosas de las personas, facilita que se cree un sentimiento de pertenencia a algún grupo. Ejemplo:  código de vestimenta para asistir a una entrevista de trabajo. 
            .rectangulo.mt-2
      .col-lg-4.mb-3
        .nav-holder
          img(src="@/assets/curso/tema4-1-hover6.svg", alt="Paralenguaje o sonidos")
          .text.p-md-4
            p.mb-3.h4 
              strong Paralenguaje o sonidos
            p Tono de voz, volumen y velocidad del habla, utilizándolos de diferente manera pueden cambiar el sentido del mensaje.
            .rectangulo.mt-3

    Separador


    // 4.2
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h2 4.2  Lenguaje corporal

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p Es una forma de comunicación no verbal en la que se interactúa por medio de movimientos, gestos, postura corporal y expresiones faciales, delatando cómo se sienten las personas o la intención que tienen, y puede hacer que se cambie la percepción de las personas con las que se está hablando; si hay divergencias entre lo que se dice y el lenguaje corporal puede provocar en el otro confusión o irritación. 
        p Así mismo la disciplina que permite conocer a las personas por medio de su lenguaje corporal se llama 
          strong.etiqueta sinergología,
          | donde la disciplina y el método de análisis de interpretar gestos, micro movimientos y actitudes corporales que no son ejecutados de forma consciente, pero que juega un papel importante en la comunicación entre los individuos.  
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4-2-img.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") Algunos ejemplos de lenguaje corporal son: 

    .fig-verde.p-4
      h3 Expresión facial

    p.mb-4(data-aos="fade") Es el reflejo de nuestras emociones como felicidad, ira, miedo, sorpresa, desprecio, tristeza y asco. En gran parte son transmitidas a través de los ojos, las otras facciones de la cara sólo intensifican lo que se está sintiendo:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bordes-curvos.bg-slides
        SlyderA.py-md-5.py-4.px-md-0.px-3
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Interés – curiosidad
              p Ojos abiertos, despiertos, con mirada tranquila hacia el interlocutor.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide1-1.png', alt='Interés – curiosidad')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Desinterés
              p No hay concentración, se mira hacia diferentes partes del lugar donde se encuentra y a otras personas. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide1-2.png', alt='Desinterés') 
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Sorpresa
              p Ojos abiertos de repente y cejas desplazadas hacia arriba. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide1-3.png', alt='Sorpresa')      
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Ira – enfado
              p Ojos entrecerrados, cejas juntas y frente fruncida.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide1-4.png', alt='Ira – enfado')      
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Duda
              p Mirada concentrada pero los ojos están inquietos, se debe a que la persona que oye está reflexionando si puede creer o no en lo que le están diciendo. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide1-5.png', alt='Duda')                             

    .fig-verde.p-4
      h3 Gestos

    p.mb-4(data-aos="fade") Se usan para establecer referencias, ordenar pensamientos y recordar de manera correcta.  Algunos gestos que ayudan a reafirmar las expresiones orales son: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bordes-curvos.bg-slides
        SlyderA.py-md-5.py-4.px-md-0.px-3
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Bienvenida
              p Brazos desplegados de manera generosa que pueden llevar a un abrazo o un saludo con la mano.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide2-1.png', alt='Bienvenida')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Defensa
              p Brazos cruzados con las palmas elevadas y dirigidas hacia la amenaza.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide2-2.png', alt='Defensa') 
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Ira
              p Puño cerrado. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide2-3.png', alt='Ira') 
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Calmar situaciones
              p Brazos como en posición de defensa, pero no cruzados.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide2-4.png', alt='Ira') 
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Impotencia – desconocimiento
              p Hombros encogidos repetidamente.  
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide2-5.png', alt='Ira')             


    .fig-verde.p-4
      h3 Postura corporal y movimiento:

    p.mb-4(data-aos="fade") Indican con claridad el estado emocional de las personas. Ejemplos: 
  
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.bordes-curvos.bg-slides
        SlyderA.py-md-5.py-4.px-md-0.px-3
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Tristeza
              p Hombros encogidos, cabeza baja y caminar arrastrando los pies.
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide3-1.png', alt='Bienvenida')
          .row.justify-content-center
            .col-md-4.mb-4.mb-md-0
              h4 Autoconfianza
              p Pasos amplios, barbilla levantada y pecho hinchado. 
            .col-md-6
              figure
                img(src='@/assets/curso/tema4-2-slide3-2.png', alt='Defensa') 


</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
