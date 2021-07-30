<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t2.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estado de situación financiera

    .row.justify-content-center.mb-5
      .col-4.mb-4.mb-md-0
        img(src="@/assets/curso/t2-01.svg", alt="Texto que describa la imagen")
      .col-md-8
        p.mb-4 Es un estado que representa la situación financiera de la empresa a una fecha determinada con el propósito de poder indicar el grado de liquidez, solvencia y rentabilidad de esta.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Para la presentación del estado de situación financiera es importante tener en cuenta la ecuación contable, la cual se expresa de la siguiente manera: 
        .text-center
          .tarjeta.d-inline-block.p-5(style="background-color:#AED3F2")
            h2.mb-0.text-center Activo = Pasivo + Patrimonio

    p.mb-0 En el activo se revelará de qué manera se ha invertido los fondos de la empresa, obtenidos de sus acreedores (pasivos) y de sus asociados (socios), correspondiente al denominado capital o patrimonio. 

    Separador

    #t2-1.titulo-segundo
      h2 2.1 Identificación

    p.mb-4 El estado de situación financiera se presenta de forma comprensible y debe ser identificable, teniendo en cuenta los estándares internacionales, el cual reflejará la siguiente información según CTCP (2020):


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
            p.mb-0.text-center.text-small El nivel de redondeo de las cifras de los estados financieros en millones y miles de pesos. (Norma Internacional de Contabilidad (NIC) 1).

    Separador

    #t2-2.titulo-segundo
      h2 2.2 Período contable sobre el que se informa

    .bloque-texto-a.color-primario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-around
        .col-lg-2.mb-4.mb-lg-0
          img(src="@/assets/curso/t2-02.svg", alt="Texto que describa la imagen")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Se presenta mensual, bimestral, trimestral, semestral y, como mínimo, anual de acuerdo con los requerimientos de la empresa, las políticas implementadas y los entes de control. 

    Separador

    #t2-3.titulo-segundo
      h2 2.3 Principio del ente en marcha

    .bloque-texto-a.reverse.color-primario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-around
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p También denominado hipótesis de empresa en funcionamiento, es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa y su intención en ningún momento es liquidar o recortar la escala de sus operaciones. En Colombia desde el mismo momento que se registra una empresa en la Cámara de Comercio o en notaría se estipula cuándo inicia y cuándo termina sus actividades. 
        .col-lg-2
          img(src="@/assets/curso/t2-03.svg", alt="Texto que describa la imagen")

    Separador

    #t2-4.titulo-segundo
      h2 2.4 Distinción entre corriente y no corriente

    p.mb-4 La entidad presentará la información corriente o no corriente, determinado por el periodo sujeto a verificación y análisis.

    .row.mb-5.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t2-04.svg", alt="Texto que describa la imagen")

      .col-md
        p Según la NIC 1 Activos corrientes, una entidad clasificará un activo como corriente cuando:

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta
              span a
            | Espera realizar el activo, o tiene la intención de venderlo o consumirlo en su ciclo normal de operación.
          li
            .lista-ol--cuadro__vineta
              span b
            | Mantiene el activo principalmente con fines de negociación.
          li
            .lista-ol--cuadro__vineta
              span c
            | Espera realizar el activo dentro de los doce meses siguientes al periodo sobre el que se informa.
          li
            .lista-ol--cuadro__vineta
              span d
            | El activo es efectivo o equivalente al efectivo (como se define en la NIC 7), a menos que este se encuentre restringido y no pueda ser intercambiado ni utilizado para cancelar un pasivo por un ejercicio mínimo de doce meses después del ejercicio sobre el que se informa. Una entidad clasificará todos los demás activos como no corrientes (CTCP, 2020).


    .row.justify-content-center
      .col-md
        p En la NIC 1, se presentan las características de los pasivos corrientes considerando que: 

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta
              span a
            | Espera liquidar el pasivo en su ciclo normal de operación.
          li
            .lista-ol--cuadro__vineta
              span b
            | Mantiene el pasivo principalmente con fines de negociación.
          li
            .lista-ol--cuadro__vineta
              span c
            | El pasivo debe liquidarse dentro de los doce meses siguientes a la fecha del periodo sobre el que se informa.
          li
            .lista-ol--cuadro__vineta
              span d
            | No tiene un derecho incondicional para aplazar la cancelación del pasivo durante, al menos, los doce meses siguientes a la fecha del periodo sobre el que se informa (véase el párrafo 73). Las condiciones de un pasivo que puedan dar lugar, a elección de la otra parte, a su liquidación mediante la emisión de instrumentos de patrimonio, no afectan a su clasificación. Una entidad clasificará todos los demás pasivos como no corrientes (CTCP, 2020).

      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t2-05.svg", alt="Texto que describa la imagen")

    Separador

    #t2-5.titulo-segundo
      h2 2.5 Cuentas del Estado de situación financiera

    .row.justify-content-center
      .col-6.col-md-4.mb-4.mb-md-0
        img(src="@/assets/curso/t2-06.svg", alt="Texto que describa la imagen")
      .col-md
        LineaTiempoD.color-acento-contenido
          .p-3(numero="1" titulo="Activo")
            p.mb-4 Es un recurso controlado por la empresa como resultado de sucesos pasados, del que la empresa espera obtener, en el futuro, beneficios económicos (CTCP, 2020).
              br
              br
              | Está determinado por las siguientes cuentas (CTCP, 2020):
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-chevron-right
                | Efectivo y equivalentes al efectivo.
              li 
                i.fas.fa-chevron-right
                | Cuentas comerciales por cobrar y otras cuentas no corrientes.
              li 
                i.fas.fa-chevron-right
                | Cuentas comerciales por cobrar y otras.
              li 
                i.fas.fa-chevron-right
                | Cuentas por cobrar corrientes. 
              li 
                i.fas.fa-chevron-right
                | Inventarios corrientes.
              li 
                i.fas.fa-chevron-right
                | Inventarios corrientes que surgen de actividades de extracción.
              li 
                i.fas.fa-chevron-right
                | Activos financieros no corrientes al valor razonable con cambios en resultados.
              li 
                i.fas.fa-chevron-right
                | Anticipos corrientes.
              li 
                i.fas.fa-chevron-right
                | Inversiones contabilizadas utilizando el método de la participación. 
              li 
                i.fas.fa-chevron-right
                | Propiedades, planta y equipo.
              li 
                i.fas.fa-chevron-right
                | Método de depreciación, propiedades, planta y equipo. 
              li 
                i.fas.fa-chevron-right
                | Información para revelar sobre deterioro de valor de activos. 
              li 
                i.fas.fa-chevron-right
                | Gastos diferidos.
              li 
                i.fas.fa-chevron-right
                | Intangibles.
              li 
                i.fas.fa-chevron-right
                | Activos intangibles distintos de la plusvalía.
              li 
                i.fas.fa-chevron-right
                | Activos biológicos no corrientes.

          .p-3(numero="2" titulo="Pasivo")
            p.mb-4 Es una obligación presente de la entidad surgida a raíz de sucesos pasados al vencimiento de la cual, para cancelarla, la entidad espera desprenderse de recursos que incorporen beneficios económicos. Se encuentran (CTCP, 2020):
            
            ul.lista-ul--color.ps-3
              li 
                i.fas.fa-chevron-right
                | Obligaciones financieras.
              li 
                i.fas.fa-chevron-right
                | Proveedores. 
              li 
                i.fas.fa-chevron-right
                | Cuentas comerciales por pagar y otras cuentas por pagar no corrientes. 
              li 
                i.fas.fa-chevron-right
                | Provisiones. 
              li 
                i.fas.fa-chevron-right
                | Información que revelar sobre beneficios a los empleados. 
              li 
                i.fas.fa-chevron-right
                | Información que revelar sobre derechos de reembolso. 
              li 
                i.fas.fa-chevron-right
                | La determinación de los pagos.

          .p-3(numero="3" titulo="Patrimonio")
              p.mb-4 Es la parte residual de los activos de la entidad, una vez deducidos todos los pasivos. Las principales cuentas son (CTCP, 2020):
              
              ul.lista-ul--color.ps-3
                li 
                  i.fas.fa-chevron-right
                  | Capital.
                li 
                  i.fas.fa-chevron-right
                  | Capital emitido.
                li 
                  i.fas.fa-chevron-right
                  | Reserva de capital.
                li 
                  i.fas.fa-chevron-right
                  | Ganancias acumuladas.
                li 
                  i.fas.fa-chevron-right
                  | Otro resultado integral acumulado.
                li 
                  i.fas.fa-chevron-right
                  | Participaciones no controladoras.

    Separador

    #t2-6.titulo-segundo
      h2 2.6 Estructura

    .bloque-texto-a.reverse.color-primario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-around
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Hace referencia al contenido del estado financiero teniendo en cuenta las directrices de elaboración, este se presenta por liquidez o solvencia, el cual se explicará a continuación en la forma de presentación y se diferenciará.
        .col-lg-2
          img(src="@/assets/curso/t2-07.svg", alt="Texto que describa la imagen")

    Separador

    #t2-7.titulo-segundo
      h2 2.7 Forma de presentación

    p.mb-4 Lo determina el encabezado, cuerpo del informe y la parte jurídica de la siguiente manera:

    .row.mb-4.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t2-08.svg", alt="Texto que describa la imagen")
      .col-md
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Encabezado.
          li 
            i.fas.fa-chevron-right
            | Razón social (nombre de la empresa).
          li 
            i.fas.fa-chevron-right
            | Nombre del Informe (Estado de situación financiera). Individual (cuando hace referencia a una empresa sola) o Consolidado (hace referencia cuando son matriz filial o subsidiaria).
          li 
            i.fas.fa-chevron-right
            | Fecha o período de presentación (se determina desde enero de 20__(año), febrero de 20__(año), marzo de 20__(año), abril de 20__(año), mayo de 20__(año), junio de 20__(año), julio de 20__(año), agosto de 20__(año), septiembre de 20__(año), octubre de 20__(año), noviembre de 20__(año), o diciembre de 20__(año). 

    p.mb-4 Luego se relaciona el cuerpo del informe con las cuentas que lo componen: 

    .row
      .col-md-6.col-lg-4.mb-4
        .tarjeta-especial-a
          .tarjeta-especial-a__header.p-3
            h4.mb-0.text-center Cuentas del activo
          .tarjeta-especial-a__content.py-3.px-5
            ol.lista-ol
              li 
                span.text-bold.me-4 11
                | Efectivo y equivalentes al efectivo. 
              li 
                span.text-bold.me-4 12
                | Activos financieros. 
              li 
                span.text-bold.me-4 13
                | Cuentas comerciales por cobrar. 
              li 
                span.text-bold.me-4 14
                | Inventarios. 
              li 
                span.text-bold.me-4 15
                | Propiedades, planta y equipo.
              li 
                span.text-bold.me-4 16
                | Activos intangibles y plusvalía (crédito mercantil).
              li 
                span.text-bold.me-4 17
                | Activos por impuestos corrientes.
              li 
                span.text-bold.me-4 18
                | Propiedades de inversión.
              li 
                span.text-bold.me-4 19
                | Propiedades de inversión.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-especial-a
          .tarjeta-especial-a__header.p-3
            h4.mb-0.text-center Cuentas del pasivo
          .tarjeta-especial-a__content.py-3.px-5
            ol.lista-ol
              li 
                span.text-bold.me-4 21
                | Obligaciones financieras e instrumentos derivados.
              li 
                span.text-bold.me-4 22
                | Cuentas comerciales por pagar y cuentas por pagar. 
              li 
                span.text-bold.me-4 23
                | Pasivos por impuestos corrientes.
              li 
                span.text-bold.me-4 24
                | Obligaciones laborales y de seguridad social.
              li 
                span.text-bold.me-4 25
                | Provisiones.
              li 
                span.text-bold.me-4 26
                | Ingresos diferidos.
              li 
                span.text-bold.me-4 27
                | Pasivos incluidos en grupos de activos para su disposición clasificados como mantenidos para la venta. 
              li 
                span.text-bold.me-4 28
                | Otros pasivos.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-especial-a
          .tarjeta-especial-a__header.p-3
            h4.mb-0.text-center Cuentas del patrimonio
          .tarjeta-especial-a__content.py-3.px-5
            ol.lista-ol
              li 
                span.text-bold.me-4 31
                | Capital social.
              li 
                span.text-bold.me-4 32
                | Superávit de capital.
              li 
                span.text-bold.me-4 33
                | Reservas.
              li 
                span.text-bold.me-4 34
                | Dividendos y participaciones.
              li 
                span.text-bold.me-4 35
                | Resultados del ejercicio.
              li 
                span.text-bold.me-4 36
                | Resultado del ejercicio anteriores.

    h3.mb-4 Aspectos jurídicos

    .row.justify-content-center.mb-4
      .col-md.mb-4.mb-md-0
        p.mb-4 Dentro de las disposiciones legales aplicables a los Estados financieros se encuentran: 
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Firma del Representante Legal.
          li 
            i.fas.fa-chevron-right
            | Firma del Contador Público con número de la tarjeta profesional TP N°.__ T (titulado) o A (aceptado) son personas que estudian y luego se presentan a la junta central contadores para desarrollar un examen (son para personas empíricas) y,
          li 
            i.fas.fa-chevron-right
            | Firma de Revisor Fiscal con número de tarjeta profesional, quien da fe pública de las cifras allí registradas en los Estados Financieros en este caso el Estado de Resultado Integral, emitiendo un dictamen. Acogiéndose a las normas colombianas: Ley 222 de 1995, artículos 37 y 38 y el Decreto 2649 de 1993, artículo 33.

      .col-6.col-md-3
        img(src="@/assets/curso/t2-09.svg", alt="Texto que describa la imagen")

    h3.mb-4 Formas de presentación

    p.mb-4 El Estado de situación financiera se puede presentar por “liquidez” o “solvencia”. Se detallarán a continuación (Pymes y Autónomos, 2020): 

    .row.justify-content-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t2-10.svg", alt="Texto que describa la imagen")
      .col-md
        LineaTiempoD.color-acento-contenido
          .p-3(numero="1" titulo="Por liquidez")
            p Es una cualidad que tienen los activos que figuran en el estado de situación financiera de un ente económico para convertirse en dinero de forma fácil. El estado se presenta de la siguiente forma:

            .text-end
              .d-inline-block
                a.anexo.shadow-sm(:href="obtenerLink('/downloads/presentacion-por-liquidez.xls')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p.text-small
                      b Anexo. 
                      | Presentación por liquidez

          .p-3(numero="2" titulo="Por solvencia")
            p.mb-4 La solvencia es la capacidad de un individuo o empresa para atender sus compromisos de pago con los acreedores, es decir, sus deudas.
              br
              br
              | Se identifica de la siguiente manera:

            .text-end
              .d-inline-block.mb-4
                a.anexo.shadow-sm(:href="obtenerLink('/downloads/presentacion-por-solvencia.xls')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p.text-small
                      b Anexo. 
                      | Presentación por solvencia

            .cajon.color-acento-contenido.p-4.mb-4
              h4 No olvidar que…
              p.mb-0 La estructura por liquidez es igual a las normas colombianas anteriores en relación con el Decreto 2649 de 1993 (NIIF, 2020), y se evidencia al compararlo con el de solvencia.

            p.mb-4 Una vez realizado el estado de resultados, se procede a elaborar el estado de situación financiera, teniendo en cuenta registrar los saldos obtenidos en las cuentas de activo, pasivo y patrimonio. También, se traslada el valor del impuesto, reservas, utilidad o pérdida determinada en el estado de resultados.

            h4.mb-0 Ejemplo:

            .text-end
              .d-inline-block
                a.anexo.shadow-sm(:href="obtenerLink('/downloads/ejemplo-estado-situacion-financiera.xls')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p.text-small
                      b Anexo. 
                      | Estado de situación financiera 

    Separador

    #t2-8.titulo-segundo
      h2 2.8 Información a revelar

    .row.justify-content-center
      .col-md.mb-4.mb-md-0
        p De acuerdo con la clasificación y relevancia la empresa revelará la siguiente información en el estado de situación financiera o en las notas:

        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Los conceptos de propiedades, planta y equipo de forma discriminada teniendo en cuenta la NIC 16.
          li 
            i.fas.fa-chevron-right
            | Las cuentas deudoras de acuerdo con su naturaleza.
          li 
            i.fas.fa-chevron-right
            | La clasificación de los inventarios según la NIC 2.
          li 
            i.fas.fa-chevron-right
            | Las provisiones, teniendo en cuenta separar los beneficios a empleado de los demás.
          li 
            i.fas.fa-chevron-right
            | El capital, reservas y primas de emisión (NIC1 .78).

      .col-6.col-md-3
        img(src="@/assets/curso/t2-11.svg", alt="Texto que describa la imagen")













</template>

<script>
export default {
  name: 'Tema2',
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
