<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estado de flujos efectivo

    p.mb-4 Es el estado financiero básico que muestra cómo se genera el efectivo utilizado en las actividades de operación, inversión y financiación. Este informe debe proporcionar información sobre la capacidad de la empresa para generar el efectivo y/o equivalentes al efectivo.
      br
      br
      | De acuerdo con la NIC 7 (CTCP, 2020), se establece lo siguiente: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")

      .row.justify-content-center(titulo="Objetivo")
        .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t4-01.svg", alt="Texto que describa la imagen")
        .col-md
          p.mb-0 La información acerca de los flujos de efectivo de una entidad es útil porque suministra a los usuarios de los estados financieros las bases para evaluar la capacidad que tiene la entidad para generar efectivo y equivalentes al efectivo, así como las necesidades que esta tiene de utilizar dichos flujos de efectivo. Para tomar decisiones económicas, los usuarios deben evaluar la capacidad que la entidad tiene de generar efectivo y equivalentes al efectivo, así como las fechas en que se producen y el grado de certidumbre relativa de su aparición. El objetivo de esta Norma es requerir el suministro de información sobre los cambios históricos en el efectivo y equivalentes al efectivo de una entidad mediante un estado de flujos de efectivo en el que los flujos de fondos del período se clasifiquen según si proceden de actividades de operación, de inversión o de financiación. 
          
      div(titulo="Alcance")
        .row.justify-content-center.mb-4
          .col-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/t4-02.svg", alt="Texto que describa la imagen")
          .col-md
            
            .row.mx-0.mb-4
              .col-2.col-sm-1.px-0
                img(src="@/assets/curso/t1-ico-06.svg", alt="Texto que describa la imagen")
              .col
                .tarjeta.tarjeta--blanca.p-4
                  p.mb-0 Una entidad prepara un estado de flujos de efectivo, de acuerdo con los requerimientos de esta Norma, y lo presentará como parte integrante de sus estados financieros para cada periodo en que sea obligatoria la presentación de éstos. 

            .row.mx-0.mb-4
              .col-2.col-sm-1.px-0
                img(src="@/assets/curso/t1-ico-07.svg", alt="Texto que describa la imagen")
              .col
                .tarjeta.tarjeta--blanca.p-4
                  p.mb-0 Esta Norma sustituye a la antigua NIC 7 Estado de Cambios en la Posición Financiera, aprobada en julio de 1977. 

            .row.mx-0.mb-4
              .col-2.col-sm-1.px-0
                img(src="@/assets/curso/t1-ico-08.svg", alt="Texto que describa la imagen")
              .col
                .tarjeta.tarjeta--blanca.p-4
                  p.mb-0 Los usuarios de los estados financieros están interesados en saber cómo la entidad genera y utiliza el efectivo y los equivalentes al efectivo. Esta necesidad es independiente de la naturaleza de las actividades de la entidad, incluso cuando el efectivo pueda ser considerado como el producto de la entidad en cuestión, como puede ser el caso de las entidades financieras. Básicamente, las entidades necesitan efectivo por las mismas razones, por muy diferentes que sean las actividades que constituyen su principal fuente de ingresos. En efecto, todas ellas necesitan efectivo para llevar a cabo sus operaciones, pagar sus obligaciones y suministrar rendimientos a sus inversores. Por consiguiente, esta Norma requiere que todas las entidades presenten un estado de flujos de efectivo. 
            
        .cajon.color-acento-contenido.p-4
          p.mb-3 Es importante profundizar la norma, por tanto, se invita a explorar el siguiente enlace de la NIC 7:
          .text-end
            .d-inline-block
              a.anexo.shadow-sm(:href="obtenerLink('/downloads/norma-internacional-contabilidad-7-estado-flujos-efectivo.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.text-small
                    b Anexo. 
                    | Estado de Flujos de Efectivo 1

    Separador

    .titulo-segundo
      h2 4.1 Identificación

    p.mb-5 El estado de flujos de efectivo se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual refleja la siguiente información (CTCP, 2020):

    .row.justify-content-center.mb-5
      .col-6.col-md-3.mb-4.mb-md-0
          img(src="@/assets/curso/t4-03.svg", alt="Texto que describa la imagen")
        
      .col-md
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Nombre de la empresa o razón social y los cambios presentados en el periodo anterior respecto a dicha información.
          li 
            i.fas.fa-chevron-right
            | Expresar si el estado financiero pertenece a una entidad individual o a un grupo.
          li 
            i.fas.fa-chevron-right
            | Fecha del cierre del periodo sobre el que se informa.
          li 
            i.fas.fa-chevron-right
            | Moneda de presentación de acuerdo con las bases establecidas en la NIC 21.
          li 
            i.fas.fa-chevron-right
            | El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos.
 
    h3.mb-5 Flujos de efectivo en moneda extranjera

    p.mb-5 Para la presentación del flujo de efectivo en moneda extranjera es importante tener en cuenta las directrices establecidas en la NIC 7 (CTCP, 2020):  


    .row.justify-content-center
      .col-sm-6.col-md-4.col-lg-3.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.pb-3
            .tarjeta-b__content__img.tarjeta-b__content__img--lg
              img(src='@/assets/curso/t4-ico-01.svg' alt='Texto que describa la imagen')
            p.mb-0.text-center.text-small 
              b 25. 
              | Los flujos de efectivo procedentes de transacciones en moneda extranjera se convertirán a la moneda funcional de la entidad aplicando al importe en moneda extranjera la tasa de cambio entre ambas monedas en la fecha en que se produjo cada flujo en cuestión. 

      .col-sm-6.col-md-4.col-lg-3.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.pb-3
            .tarjeta-b__content__img.tarjeta-b__content__img--lg
              img(src='@/assets/curso/t4-ico-02.svg' alt='Texto que describa la imagen')
            p.mb-0.text-center.text-small 
              b 26. 
              | Los flujos de efectivo de una subsidiaria extranjera se convertirán utilizando la tasa de cambio entre la moneda funcional y la moneda extranjera, en la fecha en que se produjo cada flujo en cuestión. 

      .col-sm-6.col-md-4.col-lg-3.mb-4
        .tarjeta-b.color-gris
          .tarjeta-b__punta
            img(src='@/assets/curso/punta-tarjeta.svg')
          .tarjeta-b__content.px-4.pb-3
            .tarjeta-b__content__img.tarjeta-b__content__img--lg
              img(src='@/assets/curso/t4-ico-03.svg' alt='Texto que describa la imagen')
            p.mb-0.text-center.text-small 
              b 27. 
              | Los flujos de efectivo en moneda extranjera se presentarán de acuerdo con la NIC 21 Efectos de las Variaciones en las Tasas de Cambio de la Moneda Extranjera.

    Separador

    .titulo-segundo
      h2 4.2 Período contable sobre el que se informa

    .bloque-texto-a.reverse.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-around
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p El estado de flujos de efectivo se presenta de acuerdo con los requerimientos normativos en el periodo contable previsto, donde se incorporan las actividades de inversión, de financiación y de operación. 
        .col-lg-2
          img(src="@/assets/curso/t4-04.svg", alt="Texto que describa la imagen")

    Separador

    .titulo-segundo
      h2 4.3 Elementos para elaborar el flujo de efectivo

    p.mb-5 Para realizar el estado de flujos de efectivo, es importante identificar claramente los elementos con el fin de proceder con su correcta clasificación y, posteriormente, elaboración. Las actividades que se presentan son (CTCP, 2020):

    .row.justify-content-center.mb-4
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t4-05.svg", alt="Texto que describa la imagen")
        
      .col-md
        
        LineaTiempoD.color-acento-contenido.mb-5
          .p-3(numero="1" titulo="Actividades de operación")
            p.mb-0 Son las actividades relacionadas con el objeto social de la empresa, resultado de las actividades operacionales de activos y pasivos corrientes, excepto obligaciones financieras.

          .p-3(numero="2" titulo="Actividades de inversión")
            p.mb-0 Son los cambios presentados en los activos no corrientes, relacionados con inversiones permanentes y propiedades, planta y equipo.

          .p-3(numero="3" titulo="Actividades de financiación")
            p.mb-0 Son las variaciones presentadas en el capital y obligaciones financieras.

        .cajon.color-primario.p-4
          p.mb-0 Es importante considerar que, para iniciar el proceso de elaboración, se requieren dos estados de situación financiera de periodos consecutivos y un estado de resultados, con el fin de determinar las entradas y salidas de efectivo.

    Separador

    .titulo-segundo
      h2 4.4 Métodos de presentación

    p.mb-5 En la elaboración y presentación del estado de flujos de efectivo se tienen en cuenta los siguientes métodos (CTCP, 2020):

    h3.mb-4 Objetivo

    p.mb-5 Este presenta de forma separada las entradas y salidas de efectivo, teniendo en cuenta la clasificación de las actividades de operación, de inversión y financiación. En este estado se rehace el estado de resultados utilizando el método de caja para determinar las entradas y salidas de las actividades de operación. 

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Por ejemplo: se inicia con el estado de resultados donde se identifican los ingresos ordinarios. Luego, se procede a revisar el estado de situación financiera para relacionarlo con la cuenta que determina la entrada de efectivo por concepto de dichos ingresos, en este caso, la cuenta clientes (cuentas por cobrar). El objetivo es determinar el efectivo generado por este concepto, al finalizar la unidad temática observe el ejemplo para realizar el cálculo de las actividades. Está compuesto por las siguientes actividades:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.mb-4.mb-md-0
        h3 Actividades de operación
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Efectivo cobrado a los clientes.
          li 
            i.fas.fa-chevron-right
            | Efectivo recibido por intereses, dividendos y sobre inversiones.
          li 
            i.fas.fa-chevron-right
            | Otros cobros de operación operacional o no operacional.
          li 
            i.fas.fa-chevron-right
            | Efectivo pagado tanto a empleados como a proveedores.
          li 
            i.fas.fa-chevron-right
            | Pagos por impuestos corrientes y/o no corrientes.

      .col-6.col-md-3
        img(src="@/assets/curso/t4-06.svg", alt="Texto que describa la imagen")


    .row.align-items-center.justify-content-center.mb-4
      .col-6.col-md-3.mb-4.mb-md-0.d-none.d-md-block
        img(src="@/assets/curso/t4-07.svg", alt="Texto que describa la imagen")

      .col-md-6
        h3 Actividades de inversión
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Flujos de efectivo procedentes de la pérdida de control de subsidiarias y otros negocios. 
          li 
            i.fas.fa-chevron-right
            | Importes procedentes de la venta de propiedades, planta y equipo.
          li 
            i.fas.fa-chevron-right
            | Compra de propiedades planta y equipo.
          li 
            i.fas.fa-chevron-right
            | Compra de activos intangibles.
          li 
            i.fas.fa-chevron-right
            | Importes procedentes de subvenciones del Gobierno.
          li 
            i.fas.fa-chevron-right
            | Anticipos de efectivo y préstamos concedidos a terceros.
          li 
            i.fas.fa-chevron-right
            | Intereses pagados.
          li 
            i.fas.fa-chevron-right
            | Intereses recibidos.

      .col-6.col-md-3.mb-4.mb-md-0.d-md-none
        img(src="@/assets/curso/t4-07.svg", alt="Texto que describa la imagen")

    .row.align-items-center.justify-content-center.mb-4
      .col-md-6.mb-4.mb-md-0
        h3 Actividades de financiación
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Importes procedentes de la emisión de acciones.
          li 
            i.fas.fa-chevron-right
            | Cobros procedentes de la emisión de obligaciones sin garantía, préstamos, bonos, cédulas hipotecarias y otros fondos tomados en préstamo, ya sea a largo o a corto plazo.
          li 
            i.fas.fa-chevron-right
            | Pagos por adquirir o rescatar las acciones de la entidad.
          li 
            i.fas.fa-chevron-right
            | Reembolsos de préstamos. 

      .col-6.col-md-3
        img(src="@/assets/curso/t4-08.svg", alt="Texto que describa la imagen")

    h3.mb-5 Método indirecto

    .row.align-items-center.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t4-09.svg", alt="Texto que describa la imagen")
        
      .col-md.col-lg-6
        p.mb-4 Es una conciliación entre las ganancias acumuladas y el flujo efectivo de las actividades de operación, inversión y financiación.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Tienen la misma composición que el método directo solo que se empieza con la ganancia acumulada, teniendo en cuenta las partidas no monetarias como depreciaciones, amortizaciones y reservas. Este cambio se genera solamente en las actividades de operación, lo que compete a las actividades de inversión y financiación permanecen igual al método anterior (CTCP, 2020).
        
    Separador

    .titulo-segundo
      h2 4.5 Estructura

    .row.justify-content-center.mb-5
      .col-md.col-lg-6.mb-4.mb-md-0
        ul.lista-ul--color.ps-3.mb-4
          li 
            i.fas.fa-chevron-right
            | Actividades de operación
          li 
            i.fas.fa-chevron-right
            | Actividades de inversión
          li 
            i.fas.fa-chevron-right
            | Actividades de financiación
          li 
            i.fas.fa-chevron-right
            | Saldo Año Anterior (de caja, caja menor, bancos, corporaciones de ahorro e inversiones temporales que son los CDT del año anterior)
          li 
            i.fas.fa-chevron-right
            | Saldo Presente Año (de caja, caja menor, bancos, corporaciones de ahorro e inversiones temporales que son los CDT del presente año)

        .cajon.color-primario.p-4.mb-5
          p.mb-3 A continuación, observa la estructura de cada uno de los métodos analizados anteriormente:
          .text-end
            .d-inline-block
              a.anexo.shadow-sm(:href="obtenerLink('/downloads/estado-flujos-efectivo-directo-indirecto.xls')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-xls.svg")
                .anexo__texto
                  p.text-small
                    b Anexo. 
                    | Estado de flujos de efectivo - método directo e indirecto

      .col-6.col-md-3
        img(src="@/assets/curso/t4-10.svg", alt="Texto que describa la imagen")

    h3.mb-4 Ejemplo:

    p.mb-5 Con el fin de comprender la anterior información, se presenta un ejemplo práctico con la cuenta de ingresos y clientes. 

    h3.mb-4 procedimiento

    .row.justify-content-end
      .col-lg-10
        LineaTiempoD.color-acento-contenido.mb-5
          .p-3(numero="1" titulo="Paso 1")
            h3.mb-5 En los estados financieros se presenta la siguiente información de las actividades de operación:
            .row.justify-content-center.mb-5
              .col-md-10
                img(src="@/assets/curso/t4-tabla-01.svg", alt="Texto que describa la imagen")

            p.mb-4 Para calcular el recaudo de cliente se tiene en cuenta la información de los estados financieros:

            .row.align-items-center.justify-content-center.mb-5
              .col-6.col-md-3.mb-4.mb-md-0
                img(src="@/assets/curso/t4-11.svg", alt="Texto que describa la imagen")
                
              .col-md-auto
                ul.lista-ul--color.ps-3.mb-0
                  li 
                    i.fas.fa-chevron-right
                    p.mb-0
                      b Estado de resultados
                      br
                      | Ingresos ordinarios: $12.000.000
                  li.mb-0
                    i.fas.fa-chevron-right
                    p.mb-0
                      b Estado de Situación financiera
                      br
                      | Saldo final año 1 clientes: $5.000.000
                      br
                      | Saldo final año 2 clientes: $7.000.000
            
            p.mb-4 Para calcular el efectivo recaudado de los clientes, resultados de las ventas generadas (ingresos ordinarios) se realiza el siguiente proceso:

            .row.justify-content-center.mb-4
              .col-sm-6.col-md-4.col-lg-3.mb-4
                .tarjeta-b.color-gris
                  .tarjeta-b__punta
                    img(src='@/assets/curso/punta-tarjeta.svg')
                  .tarjeta-b__content.px-4.p-3
                    .tarjeta-b__content__img.mb-3
                      img(src='@/assets/curso/t4-ico-04.svg' alt='Texto que describa la imagen')
                    p.mb-0.text-center.text-small Se registra el valor de los ingresos

              .col-sm-6.col-md-4.col-lg-3.mb-4
                .tarjeta-b.color-gris
                  .tarjeta-b__punta
                    img(src='@/assets/curso/punta-tarjeta.svg')
                  .tarjeta-b__content.px-4.p-3
                    .tarjeta-b__content__img.mb-3
                      img(src='@/assets/curso/t4-ico-05.svg' alt='Texto que describa la imagen')
                    p.mb-0.text-center.text-small Se suman el valor de clientes del año 1

              .col-sm-6.col-md-4.col-lg-3.mb-4
                .tarjeta-b.color-gris
                  .tarjeta-b__punta
                    img(src='@/assets/curso/punta-tarjeta.svg')
                  .tarjeta-b__content.px-4.p-3
                    .tarjeta-b__content__img.mb-3
                      img(src='@/assets/curso/t4-ico-06.svg' alt='Texto que describa la imagen')
                    p.mb-0.text-center.text-small Se resta el valor de clientes del año 2
            
            .row.justify-content-center.mb-5
              .col-md-8
                img(src="@/assets/curso/t4-tabla-02.svg", alt="Texto que describa la imagen")

            .cajon.color-acento-contenido.p-4
              p.mb-0 El proceso anterior aplica para las actividades de operación por el método directo. Por tanto, se debe verificar la información suministrada en los estados financieros y determinar las respectivas variaciones de cada una de las cuentas presentadas.

          .p-3(numero="2" titulo="Paso 2")
            h3.mb-5 Para calcular las actividades de inversión se presenta la siguiente información:
            .row.justify-content-center.mb-5
              .col-md-8
                img(src="@/assets/curso/t4-tabla-02.svg", alt="Texto que describa la imagen")

            .cajon.color-acento-contenido.p-4
              p.mb-0 Los valores relacionados anteriormente se obtienen de la diferencia entre al año 1 y 2 del estado de situación financiera y las notas, donde se observa los conceptos que implican entradas y salidas de dinero por concepto de inversiones. 

          .p-3(numero="3" titulo="Paso 3")
            h3.mb-5 Luego, se determinan las variaciones de las actividades de financiación, relacionadas con el capital y obligaciones financieras. Para ello, se presenta la siguiente información:
            
            .row.justify-content-center.mb-5
              .col-md-8
                img(src="@/assets/curso/t4-tabla-03.svg", alt="Texto que describa la imagen")

            .cajon.color-acento-contenido.p-4
              p.mb-0 Para calcular los saldos anteriores, se revisaron los estados financieros y las notas, con el fin de determinar los aumentos y disminuciones de las cuentas involucradas en las actividades de financiación.


          .p-3(numero="4" titulo="Paso 4")
            h3.mb-5 Para comprobar que el estado de flujos de efectivo se haya realizado correctamente es importante revisar el efectivo y los equivalentes de efectivo de los dos años, con el fin de constatar con el efectivo generado en el estado de flujos de efectivo.
            
            .row.justify-content-center.mb-5
              .col-md-8
                img(src="@/assets/curso/t4-tabla-04.svg", alt="Texto que describa la imagen")

            .cajon.color-acento-contenido.p-4
              p.mb-3 A continuación, observa un ejemplo por el método directo, donde se presenta la estructura y variaciones de las actividades de operación, inversión y financiación.

              .text-end
                .d-inline-block
                  a.anexo.shadow-sm(:href="obtenerLink('/downloads/estados-flujo.xls')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-xls.svg")
                    .anexo__texto
                      p.text-small
                        b Anexo. 
                        | Estado de flujos de efectivo por los años terminados en diciembre 31


























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
