<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t5.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Notas y revelaciones

    p.mb-5 Las notas y revelaciones a los estados financieros corresponden a las descripciones detalladas y desagregadas de los elementos de los estados financieros, los complementan para la adecuada interpretación y toma de decisiones.

    .cajon.color-primario.p-4.mb-5
      p.mb-0 Estas muestran la información que, en algunos casos, no ha sido presentada en los estados financieros o que requieren explicación minuciosa de las cuentas que componen las partidas y sus valores monetarios. Por tanto, la empresa revelará la información de manera comprensible y útil, bajo las Normas Internacionales de Información Financiera, teniendo en cuenta los grupos de presentación de información financiera: para el grupo 1 (NIIF plenas) y el grupo 2 (NIIF pymes).

    .row.justify-content-center.mb-5
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t5-01.svg", alt="Texto que describa la imagen")
      .col-md
        h3.mb-4 De acuerdo con la NIC 1 (CTCP, 2020):
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            | Presentarán información acerca de las bases para la preparación de los estados financieros, y sobre las políticas contables específicas utilizadas de acuerdo con los párrafos 117 a 124.
          li
            .lista-ol--cuadro__vineta
              span b
            | Revelarán la información requerida por las NIIF que no haya sido incluida en otro lugar de los estados financieros.
          li
            .lista-ol--cuadro__vineta
              span c
            | Proporcionarán información que no se presente en ninguno de los estados financieros, pero que es relevante para entender cualquiera de ellos.

    .row.justify-content-center.mb-5
      .col-md.mb-4.mb-md-0
        h3.mb-4 La NIC 1 (CTCP, 2020), presenta ejemplos del orden de las notas teniendo en cuenta:
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            | Dar importancia a las áreas de sus actividades que la entidad considera que son más relevantes para la comprensión de su rendimiento y situación financieros, tal como agrupar información sobre actividades operativas concretas.
          li
            .lista-ol--cuadro__vineta
              span b
            | Agrupar información sobre partidas medidas de forma similar tal como activos medidos a valor razonable.
          li
            .lista-ol--cuadro__vineta
              span c
            | Seguir el orden de las partidas del estado (estados) del resultado del periodo y otro resultado integral y del estado de situación financiera, tal como: 

        ul.lista-ul--color.ps-5
          li 
            i.fas.fa-chevron-right
            | Una declaración de cumplimiento con las NIIF (véase el párrafo 16).
          li 
            i.fas.fa-chevron-right
            | (Las políticas contables significativas aplicadas (véase el párrafo 117).
          li 
            i.fas.fa-chevron-right
            | Información de apoyo para las partidas presentadas en los estados de situación financiera, el estado (estados) del resultado del periodo y otro resultado integral, y en los estados de cambios en el patrimonio y de flujos de efectivo, en el orden en que se presenta cada estado y cada partida; y otra información a revelar, incluyendo: (1) pasivos contingentes (véase la NIC 37) y compromisos contractuales no reconocidos; y (2) revelaciones de información no financiera, por ejemplo los objetivos y políticas de gestión del riesgo financiero (véase la NIIF 7).


      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t5-02.svg", alt="Texto que describa la imagen")

    p.mb-5 Teniendo en cuenta el desarrollo de las notas y revelaciones a los estados financieros, a continuación, se hace una descripción para su desarrollo: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")

      .row.justify-content-center(titulo="Nota 1: Entidad reportante")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t5-03.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-4 Se realiza la descripción de la empresa que está presentando las notas a los estados financieros; teniendo en cuenta expresar:
          ul.lista-ul--color.ps-5
            li 
              i.fas.fa-chevron-right
              | Nombre del ente económico.
            li 
              i.fas.fa-chevron-right
              | NIT.
            li 
              i.fas.fa-chevron-right
              | Domicilio.
            li 
              i.fas.fa-chevron-right
              | Forma legal de constitución.
            li 
              i.fas.fa-chevron-right
              | Responsabilidades tributarias y tarifas.
            li 
              i.fas.fa-chevron-right
              | Descripción de la naturaleza de las operaciones comerciales, incluyendo el CIIU.
            li 
              i.fas.fa-chevron-right
              | Productos y/o servicios.

      .row.justify-content-center(titulo="Nota 2: Declaración de las bases de elaboración de los estados financieros")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t5-04.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-4 Corresponde a la aplicación del marco normativo de NIIF, en la elaboración de los estados financieros. De igual forma se tiene en cuenta las bases de medición, aplicación de características fundamentales y de mejora.

      .row.justify-content-center(titulo="Nota 3: Principales políticas y prácticas contables")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t5-05.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-4 Hace referencia a la implementación de las políticas contables teniendo en cuenta los criterios de reconocimiento, medición inicial y posterior, presentación y revelación de los elementos de los estados financieros de acuerdo con los estándares internacionales y políticas diseñadas previamente.
          .cajon.color-acento-contenido.p-4
            p.mb-0 De igual manera, se revela la moneda de presentación de los estados financieros y la descripción de cada uno de los elementos, teniendo en cuenta la información de la empresa y su carácter de individual o grupal.

      .row.justify-content-center(titulo="Nota 4: Supuestos de incertidumbre en la estimación")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t5-06.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-4 Denominadas anteriormente contingencias, como son pagos por largos períodos de servicios, demandas civiles, demandas laborales.
          .cajon.color-acento-contenido.p-4
            p.mb-0 En la siguiente nota se inicia con las cuentas del activo, compuesto por el efectivo y sus equivalentes de efectivo, seguidamente se desagregan cada uno de los conceptos que hacen parte de activos, pasivos, patrimonio, ingresos y gastos, con el fin de brindar información comprensible y útil a los usuarios de la información financiera.

      .row.justify-content-center(titulo="Nota 5: Efectivo y equivalentes al efectivo")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t5-07.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-4 En esta nota se incluyen los conceptos de efectivo correspondientes al dinero en caja (general y menor) y los depósitos en cuentas bancarias, nacionales y/o extranjeras. 
          .cajon.color-acento-contenido.p-4
            p.mb-0 Adicionalmente, incluye el efectivo y los equivalentes al efectivo, representados en inversiones menores a 90 días, como pueden ser los CDT, acciones, bonos.
          h3 Ejemplo:
          p El siguiente es el detalle a 31 de diciembre de 20__ (presente año) vs. 20_(año anterior).

          figure.mb-4
            img(src="@/assets/curso/t5-tabla-01.svg", alt="Texto que describa la imagen")
            figcaption Fuente: Tomada de Godoy (2014)

          p De acuerdo con el anterior ejemplo se realizará con cada uno de los elementos de los estados financieros.

          .cajon.color-acento-contenido.p-4
            p.mb-3 Es necesario explorar las Normas Internacionales de Información Financiera para ampliar y fortalecer los conceptos y políticas establecidas para cada norma de acuerdo con el grupo de presentación de información financiera, a continuación, se encuentra el enlace de la NIC 1: 

            .text-end
              .d-inline-block
                a.anexo.shadow-sm(:href="obtenerLink('/downloads/presentacion-estados-financieros.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.text-small
                      b Anexo. 
                      | Presentación de estados financieros.

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
