<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bloque-fondo-tema1.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Definición y componentes de cultura organizacional

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p
          strong.etiqueta La cultura organizacional
          | es un eje primordial en el logro de hacer competitiva a una organización, esto proviene de la forma en que los miembros que la integran piensan, sienten y actúan frente al entorno y a sucesos internos; la cultura se transfiere en el tiempo y se adapta a la dinámica organizacional del momento, por lo tanto, se convierte en algo único que es propio, donde el talento humano comparte un sistema de creencias y valores que va cambiando y que se hace más complejo. 
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-img.png', alt='Texto que describa la imagen') 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-a.color-primario.bg-forma3.p-4.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3 Hernández (2011), define la cultura organizacional como: 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .bloque-texto-b.bloque-sin.color-secundario.p-3
                  .bloque-texto-b__texto
                    i.fas.fa-quote-left
                    p.mb-0 Un conjunto de conductas o comportamientos; una colección de creencias, hábitos, prácticas y tradiciones compartidas por un grupo de personas (sociedad), y sucesivamente aprendidos por los nuevos miembros que ingresan a ella. (p.102).
                    i.fas.fa-quote-right

    p.mb-4(data-aos="fade") De acuerdo con Robbins y Coulter (2010), hay <b>tres aspectos</b> en la definición de cultura que identifican y distinguen a una organización de otras, los cuales son:

    .row.mb-4(data-aos="fade-down")
      .col-lg-4.mb-3
        .tarjeta-hover.bg-secundario.borde-curvo
          .front-1
            .row.justify-content-center
              .col-md-6
                h3.numero 01  
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico1-a.svg', alt='Icono decorativo')
              .col-md-10
                h2.titulo Es una percepción
                .rectangulo.mt-4
          .front-2
            .row.justify-content-center
              .col-md-6
                h3.numero 01
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico1-b.svg', alt='Icono decorativo') 
              .col-md-11
                h4.mb-0.text-center Es una percepción
                p.mb-0.text-center Cada persona percibe la organización conforme a las experiencias que ha vivido al interior de esta.    
      .col-lg-4.mb-3.h-100
        .tarjeta-hover.bg-secundario.borde-curvo(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .front-1
            .row.justify-content-center
              .col-md-6
                h3.numero 02
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico2-a.svg', alt='Icono decorativo')
              .col-md-10
                h2.titulo Es descriptiva
                .rectangulo.mt-4
          .front-2
            .row.justify-content-center
              .col-md-6
                h3.numero 02
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico2-b.svg', alt='Icono decorativo') 
              .col-md-11
                h4.mb-0.text-center Es descriptiva
                p.mb-0.text-center Percepción conjunta de los empleados de la organización, independiente de si es positiva o negativa.    
      .col-lg-4.mb-3.h-100
        .tarjeta-hover.bg-secundario.borde-curvo
          .front-1
            .row.justify-content-center
              .col-md-6
                h3.numero 03
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico3-a.svg', alt='Icono decorativo')
              .col-md-10
                h2.titulo Es compartida
                .rectangulo.mt-4    
          .front-2
            .row.justify-content-center
              .col-md-6
                h3.numero 03
              .col-md-4  
                img(src='@/assets/curso/tarjea-ico3-b.svg', alt='Icono decorativo') 
              .col-md-11
                h4.mb-0.text-center Es compartida
                p.mb-0.text-center El conjunto de empleados describen la cultura de su organización de manera análoga sin tomar en cuenta el cargo o las experiencias vividas.    


    p.mb-4(data-aos="fade") Así las cosas, se define la cultura organizacional de la siguiente manera:

    .row.justify-content-center.mb-4
      .col-md-10.bg-forma1.bg-azul.bordes-curvos.p-md-5.p-4.figuras
        img.fig-2(src='@/assets/curso/forma-2.png', alt='Forma decorativa')  
        .row.justify-content-center
          .col-md-7.px-md-3
            p.mb-0 Componente estratégico de la identidad de la empresa y, por eso mismo, un factor de gestión, o de cambio y también de diferenciación, tanto en el interior de la organización entre grupos, como en el exterior entre la empresa, el mercado y la sociedad. (Costa, 2010, p.132)             
          .col-md-4
            img(src='@/assets/curso/tema1-img2.svg', alt='Técnica Hablar')  
        img.fig-3(src='@/assets/curso/forma-2.png', alt='Forma decorativa')

    p.mb-4(data-aos="fade") A su vez, la cultura organizacional es un indicador que permite lograr la situación de negocios deseada, ver figura1:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        p <b>Según Fernández (2016) los motivos son:</b>
        .bloque-texto-b.bloque-sin.color-secundario.p-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            ul.lista-ul--color.lista-naranja
              li.px-md-4
                i.fas.fa-dot-circle
                | El comportamiento de los trabajadores y de todos los que están comprometidos con la entidad parte de la configuración cultural.
              li.px-md-4
                i.fas.fa-dot-circle
                | El comportamiento de los empleados dentro del sistema social de la entidad emana de la cultura organizacional que ejerce como efecto conductor.
              li.px-md-4.mb-0
                i.fas.fa-dot-circle
                | La forma en que se actúa dentro de la organización se determina por las normas de comportamiento aceptadas como obligatorias.   
            i.fas.fa-quote-right.comilla-final

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Figura 1.</b> Cultura organizacional
    .row(data-aos="fade-down") 
      .col-md-5.mb-4
        figure
          img(src='@/assets/curso/tema1-fig1.svg', alt='Cultura organizacional')
      .col-md-7.mb-4  
        .row.justify-content-center.bordes-curvos.bg-shadow.bg-secundario.py-4
          .col-md-2.col-4.mb-3.mb-md-0 
            img(src='@/assets/curso/tema1-ico1.svg', alt='Cultura organizacional')
          .col-md-8
            h4 Nota
            p El comportamiento de los empleados basado en la cultura organizacional es un indicador para el logro de objetivos. 

    p.mb-4(data-aos="fade") La cultura organizacional tiene objetivos que son importantes y que van determinados por su conocimiento, estudio y profundización, algunos de ellos son (Hernández, 2011):

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10.bordes-curvos.borde-naranja.p-4.p-md-5
        ul.lista-ul--color.lista-naranja.mb-0
          li.mb-0
            i.fas.fa-dot-circle
            | Lograr la perdurabilidad en el tiempo del cambio planeado.
          li.mb-0
            i.fas.fa-dot-circle
            | Institucionalizar en la organización el mejoramiento continuo.
          li.mb-0
            i.fas.fa-dot-circle
            | Permitir que el autoconocimiento sea la base para el cambio de metodología y estilos de la organización.
          li.mb-0
            i.fas.fa-dot-circle
            | Implementar nuevas habilidades y cambios de conducta.      
          li.mb-0
            i.fas.fa-dot-circle
            | Ejercer mayor control de los recursos de la organización.
          li.mb-0
            i.fas.fa-dot-circle
            | Lograr que los empleados identifiquen problemas y generen soluciones.
          li.mb-0
            i.fas.fa-dot-circle
            | Mejorar el trabajo individual y de equipo.
          li.mb-0
            i.fas.fa-dot-circle
            | Permitir la autonomía en la elaboración de diagnósticos y diseños de estrategia empresarial posteriores.      

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-b.bloque-sin.color-secundario
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5 La cultura organizacional cuenta con variables que se definen a partir de dos dimensiones, la primera es simbólica, conformada por lo intangible que cuenta con un mensaje compartido y la segunda es manifiesta, es visible y se percibe en el día a día de la organización. Se detallan a continuación en la tabla 1, las variables de la cultura organizacional.
            i.fas.fa-quote-right.comilla-final
        p - Llanos, 2018, p.26    

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 1.</b> Variables de la cultura organizacional
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Adaptado de Llanos, 2018.
        thead
          tr
            th Dimensión
            th Variable
            th Definición
        tbody
          tr
            td.text-center(rowspan="3") 
              strong Simbólica
            td.text-center Imagen Corporativa
            td Símbolos que se perciben en el entorno: vestimenta, logotipos, distribución de espacios e historias.
          tr
            td.text-center Filosofía Institucional
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-1
                  i.fas.fa-dot-circle
                  | Misión.
                li.mb-1
                  i.fas.fa-dot-circle
                  | Visión.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Valores.
          tr
            td.text-center Normas, reglamentos y políticas
            td Modo en que se hacen las cosas, límites en las relaciones interpersonales y responsabilidad de cargos en cualquier nivel.  
          tr
            td.text-center(rowspan="3") 
              strong Manifiesta
            td.text-center Liderazgo
            td 
              p <b>Tipos:</b>
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-1
                  i.fas.fa-dot-circle
                  | Paternalista.
                li.mb-1
                  i.fas.fa-dot-circle
                  | Exigente. 
                li.mb-1
                  i.fas.fa-dot-circle
                  | Integrativo.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Apático.
          tr
            td.text-center Comunicación
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-1
                  i.fas.fa-dot-circle
                  | Sistemas de información.
                li.mb-1
                  i.fas.fa-dot-circle
                  | Tipos de comunicación y procedimientos. 
                li.mb-1
                  i.fas.fa-dot-circle
                  | Congruencia entre lo que se comunica y lo que se hace.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Importancia y utilidad de lo que se comunica a los miembros de la organización.
          tr
            td.text-center Relaciones Interpersonales
            td 
              ul.lista-ul--color.lista-naranja.mb-0
                li.mb-1
                  i.fas.fa-dot-circle
                  | Reuniones formales o informales.
                li.mb-1
                  i.fas.fa-dot-circle
                  | Protocolos y ceremonias.
                li.mb-0
                  i.fas.fa-dot-circle
                  | Nivel de participación de los miembros de la organización.

    p.mb-4(data-aos="fade") En síntesis, cada organización establece una serie de parámetros que guían el comportamiento de los que allí trabajan, los cuales son aprendidos desde el proceso de inducción junto con la observación y la imitación, donde se genera una conciencia colectiva y se espera que se actúe de manera similar que los demás en todos los aspectos de la dinámica organizacional. Todo parte de la influencia que tienen los líderes y/o fundadores de la empresa que tienen una ideología y una visión a seguir, junto con los valores que causan una serie de creencias de lo que es correcto o no y que son la guía para que los empleados cumplan con los objetivos establecidos. Ver figura 2.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 2.</b> Influencias de la cultura organizacional
        figure
          img(src='@/assets/curso/tema1-fig2.svg', alt='Influencias de la cultura organizacional')

    .row.justify-content-center
      .col-md-8
        .row.justify-content-center.bordes-curvos.bg-secundario.bg-shadow.py-4
          .col-md-2.col-4.mb-3.mb-md-0 
            img.px-md-2.p-0(src='@/assets/curso/tema1-ico1.svg', alt='Cultura organizacional')
          .col-md-8
            h4 Nota
            p Los fundadores y/o líderes junto con los valores, influencian la cultura organizacional. Adaptado de Méndez (2019)

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1  Elementos de la cultura organizacional

    p.mb-4(data-aos="fade") La cultura organizacional brinda diferentes formas determinadas de pensamiento, emociones y reacciones que conllevan a una adecuada toma de decisiones. Existen dos clases de elementos: 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10.pb-5.bg-cuadro-verde
        .row.justify-content-center.tarjetas-iconos
          .col-md-5.bg-azul3.borde-curvo.bg-tarjeta1.bg-shadow.mx-2.p-4
            img.mb-4(src='@/assets/curso/tema1-1-ico1.svg', alt='Icono decorativo')
            p.text-center Los ocultos, que no se observan con claridad y que se pueden inferir a partir de aquellos que son visibles.
          .col-md-5.bg-azul4.borde-curvo.bg-tarjeta2.bg-shadow.mx-2.p-4
            img.mb-4(src='@/assets/curso/tema1-1-ico2.svg', alt='Icono decorativo')
            p.text-center Los observables, son todos aquellos que se pueden analizar, contemplar, palpar. 
    
    p.mb-4(data-aos="fade") Se invita a analizar la siguiente tabla, donde se presentan los elementos de la cultura organizacional. (Hellriegel et al., 2017, p. 596-600):

    .titulo-sexto.color-acento-contenido
      p.mb-0 <b>Tabla 2.</b> Elementos de la cultura organizacional
    .tabla-a.color-acento-contenido 
      table.tabla-2
        caption Nota. Adaptado de Llanos, 2018.
        thead
          tr
            th Clase
            th Elementos
            th Definición
        tbody
          tr
            td.text-center(rowspan="3") 
              strong OCULTOS
            td.text-center Premisas
            td Ideas y sentimientos que se consideran ciertos y se dan por sentado.
          tr
            td.text-center Valores
            td Creencias básicas e importantes, tienen sentido y son estables en el tiempo.
          tr
            td.text-center Normas
            td Reglas a seguir por los diferentes equipos de la organización.   
          tr
            td.text-center(rowspan="5") 
              strong OBSERVABLES
            td.text-center Socialización
            td Proceso establecido para adaptar a los nuevos integrantes a la cultura de la entidad.
          tr
            td.text-center Símbolos
            td Objeto visible que se utiliza para visibilizar un valor abstracto o significado especial.
          tr
            td.text-center Lenguaje
            td Sistema utilizado para transmitir significados especiales: sonidos vocales, signos escritos y gestos compartidos.
          tr
            td.text-center Relatos
            td Todo aquello que muestra los logros obtenidos por los líderes de la organización a lo largo del tiempo: leyendas, mitos, hazañas y casos.
          tr
            td.text-center Prácticas
            td 
              ul.lista-ul--color.lista-naranja
                li
                  i.fas.fa-dot-circle
                  p.mb-0
                    strong Tabúes: 
                    | Toda conducta que prohíbe por la cultura.     
                li
                  i.fas.fa-dot-circle
                  p.mb-0
                    strong Ceremonias: 
                    | Actividades formales que generan sentimientos fuertes.

    Separador


    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2  Técnicas de segmentación

    .row
      .col-md-7.bloque-fondo-figura.mb-4(data-aos="fade-right")
        p Es un reto atraer el mejor talento y retenerlo, por lo tanto, es 
          strong.etiqueta importante buscar la satisfacción y el bienestar de los empleados
          | que, al estar alineados con el sentir de la organización, darán como resultado mayor productividad y la prestación de un servicio de calidad. Desde este punto de vista, es fundamental que se cuente con una propuesta de valor llamativa para el cliente interno que contemple su ciclo de vida en la empresa en especial en las etapas de desarrollo y retención.
      .col-md-5.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1-2-img.png', alt='Texto que describa la imagen') 

    p.mb-4(data-aos="fade") Para poder llegar a una propuesta de valor, primero se deben tomar en cuenta las características de la cultura organizacional que son primordiales al momento de medir el rendimiento individual y colectivo del talento humano en una organización. Estas características son, ver figura 3:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 3.</b> Características de la cultura organizacional
        .row.justify-content-center
          .col-md-8
            figure
              img.mb-2(src='@/assets/curso/tema1-2-figura3.svg', alt='Tipos de comunicación no verbal')
            figcaption Nota. Características de la cultura organizacional. Adaptado de Robbins y Judge (2009).

    p(data-aos="fade") Ya con un contexto de la organización, se hace más claro realizar una segmentación acertada para que los empleados respondan como se espera que lo hagan. 

    p(data-aos="fade") Para afianzar los conocimientos en establecer las características de la cultura organizacional en la empresa, se  puede revisar en el material complementario, el video 
      strong.etiqueta ¿Qué es cultura organizacional y cómo se crea? 

    p.mb-4(data-aos="fade") Entre las técnicas de segmentación se encuentra:

    .fig-verde.p-4
      h3 El análisis RFM

    .row
      .col-md-6.mb-4(data-aos="fade-right")
        p Es una técnica de <em>marketing</em> que sirve para determinar cuáles son los mejores clientes o a nivel interno, empleados. Las variables utilizadas para hacer la medición son:
        ul.lista-ul--color.lista-naranja
          li.mb-1
            i.fas.fa-dot-circle
            p.mb-0
              strong R: Recency = 
              | recencia
          li.mb-1
            i.fas.fa-dot-circle
            p.mb-0
              strong F: Frequency = 
              | frecuencia
          li.mb-1
            i.fas.fa-dot-circle
            p.mb-0
              strong M: Monetary =  
              | monetización        
      .col-md-6.mb-4.bg-forma5.bg-verde.bordes-curvos.bg-shadow.py-4.px-5.figuras(data-aos="fade-left")
        img.fig-2(src='@/assets/curso/forma-4.png', alt='Forma decorativa')  
        .row.justify-content-center
          .col-md-11.px-md-2
            p.mb-0 Esta técnica funciona como una instantánea del comportamiento que tienen los clientes internos a la fecha, permite tener una visión de la dinámica organizacional, tomar mejores decisiones desde la perspectiva actual y crear ventajas competitivas conforme a las tendencias del mercado.
        img.fig-3(src='@/assets/curso/forma-4.png', alt='Forma decorativa')

    p(data-aos="fade") Es necesario realizar el análisis RFM en diferentes etapas y usar los resultados para lograr un histórico que permita ver la tendencia de cada empleado.

    p(data-aos="fade") Con la información obtenida, se segmentan a los empleados en categorías afines que sirven para definir qué acciones de fidelización se han de tomar y que sean adaptables a cada grupo. 

    p.mb-4(data-aos="fade") Los beneficios que trae el análisis son:

    .row.justify-content-center.tarjetas-iconos.mb-4(data-aos="fade-down") 
      .col-md-3.bg-azul3.borde-curvo.bg-tarjeta1.p-4
        img.mb-4(src='@/assets/curso/tema1-2-tarj1.svg', alt='Icono decorativo')
        h4.text-center Una mayor retención de empleados.
      .col-md-3.bg-azul4.bg-tarjeta2.p-4
        img.mb-4(src='@/assets/curso/tema1-2-tarj2.svg', alt='Icono decorativo')
        h4.text-center Incremento en la tasa de respuesta. 
      .col-md-3.bg-azul3.bg-tarjeta1.p-4
        img.mb-4(src='@/assets/curso/tema1-2-tarj3.svg', alt='Icono decorativo')
        h4.text-center Aumento en la tasa de conversión.
      .col-md-3.bg-azul4.borde-curvo-abajo.bg-tarjeta2.p-4
        img.mb-4(src='@/assets/curso/tema1-2-tarj4.svg', alt='Icono decorativo')
        h4.text-center Incremento de los ingresos.

    p.mb-4(data-aos="fade") En la siguiente figura 4 se visualiza un ejemplo del análisis RFM aplicado al área de ventas para los asesores comerciales, con el propósito de aplicar un nuevo plan de compensaciones económicas, de acuerdo con el cumplimiento de metas y establecer un plan de capacitaciones personalizadas.
    
    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Figura 4.</b> Análisis RFM
      .col-md-10
        .row.justify-content-center.fondo-figura4.p-md-5.p-3
          h4.text-center MODELO RFM
          .col-md-10
            figure
              img(src='@/assets/curso/tema1-2-figu4.svg', alt='MODELO RFM')
            figcaption Nota. Factores a tener en cuenta en el análisis RFM para asesores comerciales. Adaptado de Valencia y Cabañas (2017).


  
</template>

<script>
export default {
  name: 'Tema1',
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
