<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t3.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estado de cambios en el patrimonio

    
    .bloque-texto-b.color-primario.p-4.mb-4
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        h2.mb-0 El estado de cambios en el patrimonio presenta el resultado del periodo sobre el que se informa de una entidad, las partidas de ingresos y gastos reconocidas en el otro resultado integral para el periodo, los efectos de los cambios en políticas contables y las correcciones de errores reconocidos en el periodo, y los importes de las inversiones hechas, y los dividendos y otras distribuciones recibidas, durante el periodo por los inversores en patrimonio.
        i.fas.fa-quote-right
      .bloque-texto-b__autor.position-relative
        p.mb-0.text-end (CTCP, 2020, p. 9).

    p.mb-5 Respecto al estado de cambio en el patrimonio la Norma Internacional de Contabilidad (NIC) 1 determina que: 
      br
      br
      | Una entidad presentará un estado de cambios en el patrimonio tal como se requiere en el párrafo 10. El estado de cambios en el patrimonio incluye la siguiente información: 

    .row.justify-content-center.mb-5
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t3-01.svg", alt="Texto que describa la imagen")
        
      .col-md
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            | El resultado integral total del periodo, mostrando de forma separada los importes totales atribuibles a los propietarios de la controladora y los atribuibles a las participaciones no controladoras.
          li
            .lista-ol--cuadro__vineta
              span b
            | Para cada componente de patrimonio, los efectos de la aplicación retroactiva o la reexpresión retroactiva reconocidos según la NIC 8.
          li
            .lista-ol--cuadro__vineta
              span c
            | [eliminado].
          li
            .lista-ol--cuadro__vineta
              span d
            | Para cada componente del patrimonio, una conciliación entre los importes en libros, al inicio y al final del periodo, revelando por separado (como mínimo) los cambios resultantes de:  

        ul.lista-ul--color.ps-5
          li 
            i.fas.fa-chevron-right
            | El resultado del periodo.
          li 
            i.fas.fa-chevron-right
            | Otro resultado integral.
          li 
            i.fas.fa-chevron-right
            | Transacciones con los propietarios en su calidad de tales, mostrando por separado las contribuciones realizadas por los propietarios y las distribuciones a éstos y los cambios en las participaciones de propiedad en subsidiarias que no den lugar a una pérdida de control (CTCP, 2020).

    .cajon.color-primario.p-4
      p.mb-0 Es de resaltar que este estado financiero básico cambió radicalmente con relación al que se presentaba en el pasado. Se presenta un comparativo año anterior vs. presente año. Esto es una característica bien marcada en las NIIF. Adicionalmente, se presenta cada uno de los componentes del patrimonio de manera vertical.

    Separador

    #t3-1.titulo-segundo
      h2 3.1 Identificación

    .row.justify-content-center.mb-5
      .col-md.mb-4.mb-md-0
        p.mb-4 Informa los valores registrados en el patrimonio, como son:

        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Saldo total del documento anterior.
          li 
            i.fas.fa-chevron-right
            | Variaciones en el patrimonio neto por operaciones con socios o propietarios de la empresa.
          li 
            i.fas.fa-chevron-right
            | Otras variaciones (reservas, utilidades).


      .col-6.col-md-3
        img(src="@/assets/curso/t3-02.svg", alt="Texto que describa la imagen")

    p.mb-5 El estado de cambios en el patrimonio debe ser identificable y comprensible para la adecuada toma de decisiones, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información:

    .row.justify-content-center
      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-01.svg' alt='Texto que describa la imagen' style="max-width: 80px")
            p.mb-0.text-center Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.

      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-02.svg' alt='Texto que describa la imagen' style="max-width: 80px")
            p.mb-0.text-center Expresar si el estado financiero pertenece a una entidad individual o a un grupo.

      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-03.svg' alt='Texto que describa la imagen' style="max-width: 80px")
            p.mb-0.text-center Fecha del cierre del periodo sobre el que se informa.

      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-04.svg' alt='Texto que describa la imagen' style="max-width: 80px")
            p.mb-0.text-center Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.

      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-05.svg' alt='Texto que describa la imagen' style="max-width: 80px")
            p.mb-0.text-center El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos (CTCP, 2020).

    Separador

    #t3-2.titulo-segundo
      h2 3.2 Periodo contable sobre el que se informa

    .bloque-texto-a.color-primario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-around
        .col-lg-2.mb-4.mb-lg-0
          img(src="@/assets/curso/t3-03.svg", alt="Texto que describa la imagen")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Acorde a las disposiciones contables y/o fiscales, el Estado de cambio en el patrimonio neto se presenta cada mes acorde a las disposiciones de la empresa y por lo menos una vez al año con corte a 31 de diciembre de cada año.

    Separador

    #t3-3.titulo-segundo
      h2 3.3 Principio del ente en marcha

    .bloque-texto-a.reverse.color-primario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-around
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Denominado también hipótesis de empresa en funcionamiento, este es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa y su intención en ningún momento es liquidar o recortar la escala de sus operaciones. Es importante recalcar que en Colombia desde el mismo momento que se registra una empresa en la Cámara de Comercio o en notaría se estipula cuándo inicia y cuándo termina sus actividades. 
        .col-lg-2
          img(src="@/assets/curso/t3-04.svg", alt="Texto que describa la imagen")

    Separador

    #t3-4.titulo-segundo
      h2 3.4 Estructura

    .row.justify-content-center.mb-5
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t3-05.svg", alt="Texto que describa la imagen")
        
      .col-md
        p.mb-4 El estado de cambios en el patrimonio neto muestra las variaciones que sufren los diferentes elementos que componen el patrimonio de la empresa en determinado periodo, que puede ser mensual, bimestral, trimestral, cuatrimestral, semestral y por lo menos una vez al año con corte al año a 31 de diciembre.

        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-3 Las empresas presentarán del estado de cambio en el patrimonio neto comparado a los usuarios internos y/o externos según el caso: 
          .text-end
            .d-inline-block
              a.anexo.shadow-sm(:href="obtenerLink('/downloads/estructura-estado-cambio-patrimonio.xls')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-xls.svg")
                .anexo__texto
                  p.text-small
                    b Anexo. 
                    | Estructura del estado de cambio en el patrimonio.

    .row.justify-content-center.mb-5
      .col-md.mb-4.mb-lg-0
        p.mb-4 Este estado financiero básico está compuesto por: 
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Saldo al comienzo del ejercicio anterior del año anterior.
          li 
            i.fas.fa-chevron-right
            | Corrección de errores de ejercicios anteriores.
          li 
            i.fas.fa-chevron-right
            | Impacto del cambio de las políticas contables.
          li 
            i.fas.fa-chevron-right
            | Saldo reexpresado al comienzo del ejercicio del año anterior.
          li 
            i.fas.fa-chevron-right
            | Ganancias del periodo.
          li 
            i.fas.fa-chevron-right
            | Transacciones con los propietarios, registradas directamente con el patrimonio.
          li 
            i.fas.fa-chevron-right
            | Contribuciones y distribuciones a los propietarios.
          li 
            i.fas.fa-chevron-right
            | Acciones propias adquiridas.
          li 
            i.fas.fa-chevron-right
            | Dividendos.
          li 
            i.fas.fa-chevron-right
            | Transacciones de pago basadas en acciones.
          li 
            i.fas.fa-chevron-right
            | Saldo reexpresado a 31 de diciembre del año anterior.
          li 
            i.fas.fa-chevron-right
            | Saldo al comienzo del presente ejercicio.
          li 
            i.fas.fa-chevron-right
            | Ajustes por valorizaciones al valor razonable y otros que afectan directamente al patrimonio.
          li 
            i.fas.fa-chevron-right
            | Activos materiales e inmateriales.
          li 
            i.fas.fa-chevron-right
            | Instrumentos financieros.
          li 
            i.fas.fa-chevron-right
            | Diferencias en cambios.
          li 
            i.fas.fa-chevron-right
            | Resultado global del ejercicio.


      .col-6.col-md-5
        img(src="@/assets/curso/t3-06.svg", alt="Texto que describa la imagen")
        
    .h3 Ejemplo:

    .row.justify-content-center
      .col-md-9
        figure
          img(src="@/assets/curso/t3-tabla-01.svg", alt="Texto que describa la imagen")
          figcaption.mt-1 Fuente: Tomada de Estupiñán (2017).

    Separador

    #t3-5.titulo-segundo
      h2 3.5 Información a revelar

    .row.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t3-07.svg", alt="Texto que describa la imagen")
        
      .col-md
        p.mb-4 Según la NIC 1 se debe presentar la siguiente información (CTCP, 2020):

        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            | El resultado integral total del periodo, mostrando de forma separada los importes totales atribuibles a los propietarios de la controladora y los atribuibles a las participaciones no controladoras.
          li
            .lista-ol--cuadro__vineta
              span b
            | Para cada componente de patrimonio, los efectos de la aplicación retroactiva o la reexpresión retroactiva reconocidos según la NIC 8.
          li
            .lista-ol--cuadro__vineta
              span c
            | Para cada componente del patrimonio, una conciliación entre los importes en libros, al inicio y al final del periodo, revelando por separado (como mínimo) los cambios resultantes de: 

        ul.lista-ul--color.ps-5
          li 
            i.fas.fa-chevron-right
            | El resultado del periodo.
          li 
            i.fas.fa-chevron-right
            | Otro resultado integral.
          li 
            i.fas.fa-chevron-right
            | Transacciones con los propietarios en su calidad de tales, mostrando por separado las contribuciones realizadas por los propietarios y las distribuciones a éstos y los cambios en las participaciones de propiedad en subsidiarias que no den lugar a una pérdida de control. Información para presentar en el estado de cambios en el patrimonio o en las notas. (NIC 1. 106).
 
</template>

<script>
export default {
  name: 'Tema3',
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
