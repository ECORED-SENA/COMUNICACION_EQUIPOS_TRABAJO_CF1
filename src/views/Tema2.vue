<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bloque-fondo-tema2.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Proceso comunicativo
    
    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p
          strong.etiqueta La comunicación es un proceso en el que participan un receptor y un emisario que usan un código común para crear un intercambio de información,
          | deriva del latín <em>communication</em>, cuyo significado es compartir, poner en común o participar en algo. 
        p La comunicación en las organizaciones es una herramienta que permite el cumplimiento de sus objetivos y apalanca el desarrollo del talento humano para asumir los retos y las necesidades del entorno, esto demuestra que el proceso comunicativo es el factor central en las empresas para lograr objetivos por su capacidad de conexión e integración. 
        p Es así como el proceso de comunicación es el compendio de acciones que se realizan para transmitir de forma eficiente un mensaje entre una o varias personas.
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-img.png', alt='Texto que describa la imagen') 

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h2 2.1  Metodología en un proceso comunicativo

    p(data-aos="fade") Se define como la estrategia a seguir y las tácticas a emplear, para hacer llegar el mensaje de lo que se requiere de las diferentes audiencias involucradas para dar cumplimiento a los objetivos estratégicos de la organización.

    p.mb-4(data-aos="fade") Los pasos para la ejecución del plan de comunicaciones son los siguientes (Gálvez y Vives, 2011): 

    TabsC.color-acento-botones.mb-5
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Ejecución plan de comunicaciones")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab1.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Ejecución plan de comunicaciones
          ul.lista-ul--color.lista-naranja
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Visión: 
                | ¿qué se busca con él?
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Misión: 
                | ¿cómo se va a comunicar lo que la organización requiere?
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Objetivos: 
                | se establecen tiempos, medidas y actores involucrados.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Estrategias: 
                | se definen en función de los objetivos del plan.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Tácticas: 
                | se definen en función de las estrategias planteadas.
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Alineación del plan estratégico")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab2.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Alineación del plan estratégico
          ul.lista-ul--color.lista-naranja
            li.mb-0
              i.fas.fa-dot-circle
              | Definir el alcance del plan hasta qué punto va a llevar a cabo.
            li.mb-0
              i.fas.fa-dot-circle
              | Revisar que los objetivos estratégicos del plan de comunicaciones sean congruentes con el de la organización para verificar que apunten al mismo norte.
            li.mb-0
              i.fas.fa-dot-circle
              | Revisar las fases, componentes y recursos del plan como los recursos disponibles, medios a utilizar, listas de chequeo, actores involucrados, cronogramas de trabajo y previsión e imprevistos.
            li.mb-0
              i.fas.fa-dot-circle
              | Elaborar las rutas para ejecutar el plan.    
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Criterios para seleccionar medios")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab3.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Criterios para seleccionar medios
          p Los puntos a tener en cuenta para seleccionar los medios son:  tipo de mensaje, características de las audiencias y del emisor, costos junto con las características de los medios (grado de participación, oportunidad y permanencia).
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Características de los medios")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab4.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Características de los medios
          p Los medios se clasifican en: interpersonales, sonoros, visuales y audiovisuales los cuales se complementan con unas características, recursos, ventajas y limitaciones, generando los contenidos de un proceso comunicativo; así mismo contiene unos factores los cuales se clasifican en:
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Factores
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Logística producción de medios")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab5.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Logística producción de medios
          ul.lista-ul--color.lista-naranja
            li.mb-0
              i.fas.fa-dot-circle
              | Cronograma de actividades.
            li.mb-0
              i.fas.fa-dot-circle
              | Responsables.
            li.mb-0
              i.fas.fa-dot-circle
              | Tiempos, lugares y plazo.
            li.mb-0
              i.fas.fa-dot-circle
              | Indicadores.
            li.mb-0
              i.fas.fa-dot-circle
              | Presupuesto.        
      .row.justify-content-center.tarjeta.bg-azul3.p-4(titulo="Herramientas de información")
        .col-md-2
          img(src='@/assets/curso/tema2-1-tab6.svg', alt='Texto que describa la imagen') 
        .col-md-9
          h4 Herramientas de información
          p La fuerte y gradual competencia que se perciben en el mercado hacen que las empresas busquen estar a la vanguardia en el uso de nuevas herramientas de información para mantenerse competitivas, algunas de ellas se mencionan a continuación.       
          a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
            span Factores
            i.fas.fa-chevron-right
            .indicador--click(v-if="mostrarIndicador")

    ModalA.modal-1(:abrir-modal.sync="modal1")
      .row.text-white
        .col-md-6.mb-4.mb-md-0
          h4 Factores para seleccionar los medios.
          ul.lista-ul--color.lista-verde
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Receptores:  
                | conocimiento de la población objetivo.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Emisores:  
                | recurso humano y material a utilizar.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Medios:  
                | análisis del costo – beneficio.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Objetivos:  
                | actividades que el usuario debe realizar para acceder al medio y entender el mensaje.
            li.mb-0
              i.fas.fa-dot-circle
              p.mb-0
                strong Contenidos vistos:  
                | tema a tratar.                
        .col-md-6
          h4 Factores para la elaboración de mensajes.
          p Conceptos que se quieren transmitir. Se toman en cuenta los siguientes aspectos: 
          ul.lista-ul--color.lista-verde
            li.mb-0
              i.fas.fa-dot-circle
              | Diseño del mensaje de acuerdo con las audiencias.
            li.mb-0
              i.fas.fa-dot-circle
              | Preparación del mensaje.
            li.mb-0
              i.fas.fa-dot-circle
              | Escoger el lenguaje ideal que cautive al público objetivo.    
    ModalA.modal-1(:abrir-modal.sync="modal2")
      .row.text-white
        .col-md-6.mb-4.mb-md-0
          h4 Publicaciones internas.
          ul.lista-ul--color.lista-verde
            li.mb-0
              i.fas.fa-dot-circle 
              | Carta al personal.
            li.mb-0
              i.fas.fa-dot-circle 
              | Cartelera.
            li.mb-0
              i.fas.fa-dot-circle 
              | Intranet.
            li.mb-0
              i.fas.fa-dot-circle 
              | Periódico interno.
            li.mb-0
              i.fas.fa-dot-circle 
              | Publicaciones de control.
        .col-md-6
          h4 Herramientas de comunicación formal e informal.
          ul.lista-ul--color.lista-verde
            li.mb-0
              i.fas.fa-dot-circle
              | Entrevistas.
            li.mb-0
              i.fas.fa-dot-circle 
              | Grupos de trabajo.
            li.mb-0
              i.fas.fa-dot-circle 
              | Reuniones.
            li.mb-0
              i.fas.fa-dot-circle 
              | Celebraciones.
            li.mb-0
              i.fas.fa-dot-circle 
              | Correo electrónico.
            li.mb-0
              i.fas.fa-dot-circle 
              | Videoconferencias.

    p.mb-4(data-aos="fade") Por lo anterior, se invita a visualizar siguiente tabla, la cual profundiza sobre los conceptos del análisis general de los medios, ver tabla 3.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 3.</b> Análisis general de medios
    .tabla-a.color-acento-contenido 
      table.tabla-2
        caption Nota. Análisis general de medios. Adaptado de Ocampo (2011).
        thead
          tr
            th MEDIOS
            th CARACTERÍSTICAS
            th RECURSOS
            th VENTAJAS
            th LIMITACIONES
        tbody
          tr
            td.text-center 
              strong INTERPERSONALES
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Comunicación directa. 
                li.mb-0
                  i.fas.fa-dot-circle
                  | No es masiva.
            td Personas enteradas.  
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Información de retorno inmediata. 
                li.mb-0
                  i.fas.fa-dot-circle
                  | Efectividad máxima.
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Poca cobertura.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Comunicación lenta.    
                li.mb-0
                  i.fas.fa-dot-circle
                  | No permanente.      
          tr
            td.text-center 
              strong SONOROS
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Comunicación indirecta.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Pública y masiva.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Fugaz. 
            td Equipos de producción y de recepción. 
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Gran cobertura. 
                li.mb-0
                  i.fas.fa-dot-circle
                  | Rapidez.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Eficacia.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Autoridad.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Credibilidad.      
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Requiere medios.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Complementarios para retroalimentar.    
                li.mb-0
                  i.fas.fa-dot-circle
                  | Costos de producción.  
          tr
            td.text-center 
              strong VISUALES
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Comunicación personal.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Puede ser masiva.
            td Producción adaptada al receptor.
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Alta permanencia.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Se puede retomar la información.
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Feed back lento.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Requiere niveles de alfabetización.     
          tr
            td.text-center 
              strong AUDIOVISUALES
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Comunicación indirecta.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Pública y masiva.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Involucra al receptor.
            td Equipos de producción y de recepción.
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Gran emotividad. 
                li.mb-0
                  i.fas.fa-dot-circle
                  | Credibilidad.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Autoridad.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Gran cobertura.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Demostraciones.     
            td
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-0
                  i.fas.fa-dot-circle
                  | Feed back lento.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Costos de producción.
    
    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2  Tipos de comunicación y sus características

    p.mb-4(data-aos="fade") La comunicación hace parte del día a día que toda persona vive, es una constante correspondencia entre un acto que se hace y una acción que lo antecede. A partir de este punto, se puede decir que hay muchas formas de comunicar y se emplean varios tipos: 

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10.botones
        img(src='@/assets/curso/tema2-2-fondo-botones.svg', alt='Texto que describa la imagen')
        a.boton.botones__btn.spin.btn1.indicador__container.p-md-3(@click="modal3 = true")
          h5.mb-1 Mensaje verbal o no verbal
          i.fas.fa-chevron-right
          .indicador--click(v-if="mostrarIndicador")
        a.boton.botones__btn.spin.btn2.p-md-3(@click="modal4 = true")
          h5.mb-1 Comunicación interpersonal directa (bidireccional)
          i.fas.fa-chevron-right
        a.boton.botones__btn.spin.btn3.p-md-3(@click="modal5 = true")
          h5.mb-1 Comunicación interpersonal a distancia (bidireccional)
          i.fas.fa-chevron-right
        a.boton.botones__btn.spin.btn4.p-md-3(@click="modal6 = true")
          h5.mb-1 Comunicación de difusión
          i.fas.fa-chevron-right     
          
    ModalA.modal-2(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4 Mensaje verbal o no verbal
          p Es un proceso de comunicación que se muestra a través de gestos, expresiones o movimientos corporales.
          .titulo-sexto.color-acento-contenido.mb-2
            h5.mb-0 COMUNICACIÓN VERBAL
          ul.lista-ul--color.lista-naranja.mb-5
            li.mb-0
              i.fas.fa-dot-circle
              | Se usan las palabras para la interacción entre el emisor y el receptor.
            li.mb-0
              i.fas.fa-dot-circle
              | Puede ser oral con el uso de signos hablados.
            li.mb-0
              i.fas.fa-dot-circle
              | También puede ser escrita mediante códigos escritos. 
          .titulo-sexto.color-acento-contenido.mb-2
            h5.mb-0 COMUNICACIÓN NO VERBAL
          ul.lista-ul--color.lista-naranja
            li.mb-0
              i.fas.fa-dot-circle
              | Se usan las palabras para la interacción entre el emisor y el receptor.
            li.mb-0
              i.fas.fa-dot-circle
              | Puede ser oral con el uso de signos hablados.
            li.mb-0
              i.fas.fa-dot-circle
              | También puede ser escrita mediante códigos escritos.    
        .col-md-4
          img(src='@/assets/curso/tema2-2-modal1.svg', alt='Texto que describa la imagen')
    
    ModalA.modal-2(:abrir-modal.sync="modal4")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4  Comunicación interpersonal directa (bidireccional)
          p Son mensajes que recibe el receptor de una forma clara y evidente por parte del emisor.
          ul.lista-ul--color.lista-naranja.mb-5
            li.mb-0
              i.fas.fa-dot-circle
              | Los mensajes son próximos.
            li.mb-0
              i.fas.fa-dot-circle  
              | Feedback. 
        .col-md-3
          img(src='@/assets/curso/tema2-2-modal2.svg', alt='Texto que describa la imagen')
    
    ModalA.modal-2(:abrir-modal.sync="modal5")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4 Comunicación interpersonal a distancia (bidireccional)
          p Son los mensajes que recibe el receptor a distancia utilizando diferentes medios.
          ul.lista-ul--color.lista-naranja.mb-5
            li.mb-0
              i.fas.fa-dot-circle
              | Los mensajes son próximos.
            li.mb-0
              i.fas.fa-dot-circle  
              | Feedback. 
        .col-md-3
          img(src='@/assets/curso/tema2-2-modal3.svg', alt='Texto que describa la imagen')

    ModalA.modal-2(:abrir-modal.sync="modal6")
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4  Comunicación de difusión
          p Es el mensaje que se quiere trasmitir a través de los diferentes medios como televisión, radio e internet entre otros.
          ul.lista-ul--color.lista-naranja.mb-5
            li.mb-0
              i.fas.fa-dot-circle
              | Los mensajes son lejanos.
            li.mb-0
              i.fas.fa-dot-circle  
              | Reacciones.
        .col-md-3
          img(src='@/assets/curso/tema2-2-modal4.svg', alt='Texto que describa la imagen')      

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        .bloque-texto-b.bloque-sin.color-secundario
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5 Los tipos de comunicación son las diferentes formas que se tienen de transmitir un mensaje, según los ámbitos o situaciones.
            i.fas.fa-quote-right.comilla-final
        p - Costa, J. (2010)
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2-2-img.svg', alt='Texto que describa la imagen')       

    p.mb-4(data-aos="fade") Sin embargo, la comunicación verbal y no verbal son dos de las más importantes, pero no podemos desconocer otros tipos de comunicación que forman parte de nuestro día a día y que es conveniente tenerlos en cuenta como, se menciona a continuación, ver tabla 4.

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 4.</b> Otros tipos de comunicación
    .tabla-a.color-acento-contenido 
      table.tabla-2
        caption Nota. Elaboración propia a partir de Irusta (2019).
        thead
          tr
            th Dependiendo de
            th Tipo de comunicación
            th Característica
        tbody.text-center
          tr
            td(rowspan="5") 
              strong Número de participantes
            td Individual.
            td Interacción entre un emisor y un receptor.
          tr
            td Colectiva.
            td Más de dos personas intercambian mensajes.
          tr
            td Intrapersonal.
            td Comunicación consigo mismo.
          tr
            td Intragrupal.
            td Dos o más personas del mismo colectivo se comunican entre si.
          tr
            td Masiva.
            td Comunicación entre un emisor y una audiencia.   
          tr
            td(rowspan="4") 
              strong Canal sensorial
            td Visual.
            td Mensajes percibidos a través de la vista.
          tr
            td Gustativa.
            td Información enviada por medio del gusto.
          tr
            td Olfativa.
            td El mensaje se recibe a través del olfato.
          tr
            td Táctil.
            td La información se transmite por medio del tacto.
          tr
            td(rowspan="4") 
              strong Finalidad o el uso 
            td Educativa.
            td Comunicación entre profesores y alumnos.
          tr
            td Periodística.
            td Se realiza a través de los medios de comunicación para mantener informados a los receptores.
          tr
            td Publicitaria.
            td Comunicación para dar a conocer una marca o producto, dirigida a un público objetivo.
          tr
            td Política.
            td Información de tipo político, con carga ideológica
          tr
            td(rowspan="3") 
              strong Canal o medio tecnológico
            td Telefónica.
            td La comunicación se establece a través de teléfono fijo o celular.
          tr
            td Televisiva.
            td La comunicación se da a través del televisor.
          tr
            td Virtual o digital.
            td Comunicación dada entre las personas que están conectadas utilizando internet.
          tr
            td(rowspan="4") 
              strong Organizacional
            td Vertical.
            td Se da entre los diferentes niveles jerárquicos de la organización.
          tr
            td Horizontal.
            td Ocurre dentro del mismo nivel de la organización.
          tr
            td Formal.
            td Es la que se da entre diferentes rangos de una organización.
          tr
            td Informal.
            td Comunicación dada entre los empleados de una organización de manera espontánea.  
   




</template>

<script>
import TabsC from '../components/TabsC'
export default {
  name: 'Tema2',
  components: {
    TabsC,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
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
