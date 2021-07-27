<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    


    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/intro-01.svg", alt="Texto que describa la imagen")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Los estados financieros de propósito general reflejan la situación financiera y el desempeño de la empresa en un periodo determinado, además de los flujos de efectivo; dichos estados son una herramienta administrativa que contribuye a la adecuada toma de decisiones.


    .row.justify-content-center.alig-items-center.mb-5
      .col-md-7
        p Cabe resaltar que los elementos de los estados financieros son: activo, pasivo, patrimonio, ingresos y gastos. El conjunto de estos se encuentra integrado por:
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Estado de situación financiera.
          li 
            i.fas.fa-chevron-right
            | Estados de resultados integral.
          li 
            i.fas.fa-chevron-right
            | Estado de cambio en el patrimonio.
          li 
            i.fas.fa-chevron-right
            | Estado de flujos de efectivo.
          li 
            i.fas.fa-chevron-right
            | Notas a los estados financieros.

        p.mb-4 Los estados financieros se deben presentar por lo menos una vez al año, y en caso de requerirse en períodos intermedios, es importante informar el periodo en el cual se está desarrollando. Al respecto, y de acuerdo con el Consejo Técnico de la Contaduría Pública - CTCP- (2020) en la NIC 1:

        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Una entidad presentará, como mínimo, dos estados de situación financiera, dos estados del resultado y otro resultado integral del periodo, dos estados del resultado del periodo separados (si los presenta), dos estados de flujos de efectivo y dos estados de cambios en el patrimonio, y notas relacionadas (p. 7). 
      .col-6.col-md-5
        img(src="@/assets/curso/intro-02.svg", alt="Texto que describa la imagen")
            

    h3.titulo-tercero Características

    p.mb-5 Para la elaboración y presentación de los estados financieros es importante tener en cuenta las siguientes características.

    .row.justify-content-between.mb-5
      .col.d-md-none
      .col-6.col-md-4.mb-4.mb-md-0
        img(src="@/assets/curso/intro-03.svg", alt="Texto que describa la imagen")
      .col.d-md-none
      .col-md-7
        LineaTiempoD.color-acento-contenido
          p.text-small.mb-0(numero="1" titulo="Presentación razonable") es la presentación fidedigna de los estados financieros, teniendo en cuenta los criterios establecidos en las NIIF.
          
          p.text-small.mb-0(numero="2" titulo="Negocio en marcha") indica que la empresa debe tener continuidad en el tiempo y, por ende, la contabilidad debe reflejar el flujo de sus operaciones.
          
          p.text-small.mb-0(numero="3" titulo="Base de acumulación") hace referencia al reconocimiento de los hechos económicos, los cuales se realizan en el momento que suceden.
          
          p.text-small.mb-0(numero="4" titulo="Importancia relativa") también denominada materialidad, hace énfasis en el reconocimiento, o no, de un hecho económico. Puede tener un efecto significativo en el proceso contable y en la toma de decisiones.

          p.text-small.mb-0(numero="5" titulo="Compensación") una entidad no compensará activos con pasivos o ingresos con gastos a menos que así lo requiera o permita una NIIF.

          p.text-small.mb-0(numero="6" titulo="Información comparativa") se realiza el análisis con respecto al periodo anterior. Debe incluir tanto datos cuantitativos como información cualitativa. 

          p.text-small.mb-0(numero="7" titulo="Uniformidad") hace referencia a la aplicación de normas, políticas y principios en el reconocimiento de hechos económicos.


    .row.align-items-center.mb-4
      .col-md-6
        .cajon.color-primario.p-4.mb-4
          h3.mb-0 La Norma Internacional de Contabilidad (NIC) 1 Presentación de Estados Financieros (CTCP, 2020), indica lo siguiente:
      .col-md-6
        h4 Ojetivo
        p.mb-0 Esta norma establece las bases de la presentación de los estados financieros de propósito general, para asegurar que los mismos sean comparables, tanto con los estados financieros de la misma entidad correspondientes a periodos anteriores, como con los de otras entidades. Se establecen requerimientos generales con miras a la presentación de los estados financieros, guías para determinar su estructura y requisitos mínimos sobre su contenido. 

    h4.titulo-cuarto Alcance

    p Una entidad aplicará esta norma al preparar y presentar estados financieros de propósito de información general conforme a las Normas Internacionales de Información Financiera (NIIF).
    

    .d-inline
      .cajon.color-acento-contenido.p-4.mb-4
        p.mb-0 Es de anotar que en otras NIIF se establecen los requerimientos de reconocimiento, medición e información a revelar para transacciones y otros sucesos.
     
    img.d-inline.img-text-01.me-4.mb-2(src="@/assets/curso/intro-05.svg", alt="Texto que describa la imagen")

    p Esta norma no es pertinente para la estructura y contenido de los estados financieros intermedios condensados que se elaboren de acuerdo con la NIC 34 Información Financiera Intermedia; sin embargo, los párrafos 15 a 35 se aplicarán a estos estados financieros. Esta NIC 1 se usará de la misma forma en todas las entidades, incluyendo las que presentan estados financieros consolidados de acuerdo con la NIIF 10 Estados Financieros Consolidados y las que presentan estados financieros separados, de acuerdo con la NIC 27 Estados Financieros Separados.
    
    img.d-inline.img-text-02.ms-4.mt-4(src="@/assets/curso/intro-04.svg", alt="Texto que describa la imagen")
    
    p.mb-4 Además, dicha norma utiliza terminología propia de las entidades con ánimo de lucro, incluyendo las pertenecientes al sector público. Si las entidades con actividades sin fines de lucro del sector privado o del sector público aplican esta, podrían verse obligadas a modificar las descripciones utilizadas para partidas específicas de los estados financieros, e incluso para éstos. 
     br
     br
     | Similarmente, las entidades que carecen de patrimonio, tal como se define en la NIC 32 Instrumentos Financieros: Presentación (por ejemplo, algunos fondos de inversión colectiva), y las entidades cuyo capital en acciones no es patrimonio (por ejemplo, algunas entidades cooperativas) podrían tener la necesidad de adaptar la presentación en los estados financieros de las participaciones de sus miembros o participantes.
    
    .cajon.color-primario.p-4
      .row.align-items-center.justify-content-around
        .col-6.col-sm-3.col-md-2.mb-4.mb-sm-0
          img(src="@/assets/curso/intro-06.svg", alt="Texto que describa la imagen")
        .col-sm-9
          p.mb-0
            b Nota aclaratoria: 
            | las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia, salvo donde se indique lo contrario.

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
.img-text-01, .img-text-02
  width: 30%
  float: left
.img-text-02
  float: right
</style>
