<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estado de resultados integral

    p.mb-4 El estado de resultados es el primer estado a desarrollar por cuanto el producto resultante, hace parte del estado de situación financiera (antes balance general). Se encuentra integrado por las partidas de ingresos, costos y gastos, las cuales determinan la utilidad o pérdida neta del periodo y se registran de acuerdo con la estructura y políticas de la empresa.
  
    .cajon.color-primario.p-4.mb-4
      p.mb-0 Cabe resaltar que también se representa gráficamente por medio de barras; si la barra está posicionada hacia arriba es utilidad, y si la barra está posicionada hacia abajo es pérdida, como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-md-9
        img(src="@/assets/curso/t1-01.svg", alt="Texto que describa la imagen")

    h5 Los elementos del estado de resultados son: 

    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/t1-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ingresos
        p.mb-0 Son los incrementos en los beneficios económicos durante el periodo contable, susceptibles de aumentar el patrimonio.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/t1-03.svg', alt='Texto que describa la imagen')
          
        h2.text-center Costos y gastos
        p.mb-0 Decrementos de los beneficios económicos relativos con las salidas de dinero por las actividades de operación, los cuales se encuentran asociados con los ingresos.


    .titulo-segundo
      h2 Identificación

    .row.justify-content-center
      .col-md-8
        p El estado de resultados pertenece al grupo de los estados financieros básicos. Representa información relevante, como el resultado de los ingresos y egresos de la empresa, acorde con las operaciones desarrolladas por la entidad del 1 de enero a 31 de diciembre de cada año. Las cuentas que se relacionan en este se denominan nominales o de resultado.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Después del cierre contable a 31 de diciembre del periodo analizado, se registra el resultado de las operaciones de ingresos y gastos como una utilidad y/o pérdida del ejercicio en el estado de situación financiera.

      .col-6.col-md-4
        img(src='@/assets/curso/t1-04.svg', alt='Texto que describa la imagen')

    p El estado de resultados se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información (CTCP, 2020):



    .row.justify-content-center
      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-01.svg' alt='Texto que describa la imagen' style="max-width: 80px")

            p.mb-0.text-center.text-small Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.



      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-02.svg' alt='Texto que describa la imagen' style="max-width: 80px")

            p.mb-0.text-center.text-small Expresar si el estado financiero pertenece a una entidad individual o a un grupo.



      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-03.svg' alt='Texto que describa la imagen' style="max-width: 80px")

            p.mb-0.text-center.text-small Fecha del cierre del periodo sobre el que se informa.



      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-04.svg' alt='Texto que describa la imagen' style="max-width: 80px")

            p.mb-0.text-center.text-small Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.



      .col-sm-6.col-md-4.col-xl.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.py-3
            .tarjeta-b__content__img.mb-3
              img(src='@/assets/curso/t1-ico-05.svg' alt='Texto que describa la imagen' style="max-width: 80px")

            p.mb-0.text-center.text-small El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos.




















</template>

<script>
export default {
  name: 'Tema1',
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
