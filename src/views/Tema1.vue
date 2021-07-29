<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estado de resultados integral

    p.mb-4 El estado de resultados es el primer estado a desarrollar por cuanto el producto resultante, hace parte del estado de situación financiera (antes balance general). Se encuentra integrado por las partidas de ingresos, costos y gastos, las cuales determinan la utilidad o pérdida neta del periodo y se registran de acuerdo con la estructura y políticas de la empresa.
  
    .cajon.color-primario.p-4.mb-5
      p.mb-0 Cabe resaltar que también se representa gráficamente por medio de barras; si la barra está posicionada hacia arriba es utilidad, y si la barra está posicionada hacia abajo es pérdida, como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-md-0
        img(src="@/assets/curso/t1-01-a.svg", alt="Texto que describa la imagen")
      .col-md-5
        img(src="@/assets/curso/t1-01-b.svg", alt="Texto que describa la imagen")

    h5 Los elementos del estado de resultados son: 

    .tarjeta--container.tarjetas-claras.row
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

    Separador

    .titulo-segundo
      h2 1.1 Identificación

    .row.justify-content-center.mb-4
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

    Separador

    .titulo-segundo
      h2 1.2 Período contable sobre el que se informa

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-around
        .col-lg-2.mb-4.mb-lg-0
          img(src="@/assets/curso/t1-05.svg", alt="Texto que describa la imagen")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Acorde con las disposiciones contables y/o fiscales, el Estado de resultados integral se presenta cada mes de acuerdo con las políticas de la empresa y por lo menos una vez al año con corte a 31 de diciembre teniendo en cuenta el periodo contable de la empresa.

    Separador

    .titulo-segundo
      h2 1.3 Principio del ente en marcha

    .bloque-texto-a.reverse.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-around
        .col-lg-9.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p Denominado también como hipótesis de empresa en funcionamiento. Este es un principio del marco conceptual bajo las Normas Internacionales de Información Financiera (NIIF), el cual hace referencia a la continuidad de la empresa. Su intención en ningún momento es liquidar o recortar la escala de sus operaciones. Es importante recalcar que en Colombia desde el mismo momento que se registra una empresa en la cámara de comercio o en notaría se estipula cuándo inicia y cuándo termina sus actividades, en dado caso que se haya registrado una fecha de vigencia puede ser prorrogable en el tiempo (NIC/NIIF, 2020).
        .col-lg-2
          img(src="@/assets/curso/t1-06.svg", alt="Texto que describa la imagen")

    Separador

    .titulo-segundo
      h2 1.4 Aspectos generales

    .row.align-items-center.justify-content-around
      .col-6.col-md-3
        img(src="@/assets/curso/t1-07.svg", alt="Texto que describa la imagen")

      .col-md-8
        p.mb-4 El Estado de resultados es muy importante en la organización teniendo en cuenta que refleja el resultado final en un periodo determinado. En la elaboración de este, se puede presentar utilidad o pérdida del ejercicio, una vez se hayan restado los costos y gastos de los ingresos generados por la empresa.
          br
          br
          | Por otro, para su elaboración se tiene en cuenta el cálculo del impuesto de renta y reservas obligatorias, de acuerdo con el tipo de empresa y el grupo de presentación de información financiera. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 Es importante tener en cuenta que los ingresos son producto de la venta o prestación del servicio. Los costos reflejan la inversión que realiza la empresa para comercializar y producir el bien o prestar el servicio y, finalmente, los gastos que contribuyen al buen funcionamiento de la empresa, los cuales pueden ser administrativos, de ventas y financieros (NIC/NIIF, 2020).

    Separador

    .titulo-segundo
      h2 1.5 Cuentas Otro Resultado Integral (ORI) 

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-8
        p.mb-4 En la sección 5 de la Norma NIIF para pymes (pequeñas y medianas empresas) del grupo 2 de presentación de información financiera, se hace énfasis en el reconocimiento de los tipos de otros resultados integrales (NIC/NIIF, 2020):

        .row.mx-0.align-items-center.mb-4
          .col-2.col-sm-1.px-0
            img(src="@/assets/curso/t1-ico-06.svg", alt="Texto que describa la imagen")
          .col
            .tarjeta.color-gris-claro.p-4
              p.mb-0 Algunas ganancias y pérdidas que surjan de la conversión de los estados financieros de un negocio en el extranjero (véase la Sección 30 Conversión de Moneda Extranjera).

        .row.mx-0.align-items-center.mb-4
          .col-2.col-sm-1.px-0
            img(src="@/assets/curso/t1-ico-07.svg", alt="Texto que describa la imagen")
          .col
            .tarjeta.color-gris-claro.p-4
              p.mb-0 Algunas ganancias y pérdidas actuariales (véase la Sección 28 Beneficios a los Empleados).

        .row.mx-0.align-items-center.mb-4
          .col-2.col-sm-1.px-0
            img(src="@/assets/curso/t1-ico-08.svg", alt="Texto que describa la imagen")
          .col
            .tarjeta.color-gris-claro.p-4
              p.mb-0 Algunos cambios en los valores razonables de los instrumentos de cobertura (véase la Sección 12 Otros Temas relacionados con los Instrumentos Financieros).
      .col-6.col-lg-4
        img(src="@/assets/curso/t1-08.svg", alt="Texto que describa la imagen")

    .row.mb-5
      .col-4.d-none.d-lg-block
        img(src="@/assets/curso/t1-09.svg", alt="Texto que describa la imagen")
      .col
        p.mb-0 De igual forma:

        .bloque-texto-b.color-primario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Si una entidad no tiene partidas de otro resultado integral en ninguno de los periodos para los que se presentan estados financieros, puede presentar solo un estado de resultados o un estado del resultado integral en el que la última línea se denomine resultado 
            i.fas.fa-quote-right
          .bloque-texto-b__autor.position-relative
            p.mb-0.text-end (NIC/NIIF, 2020, p. 29)


        p.mb-3 Para profundizar sobre la temática, se recomienda explorar el siguiente enlace:

        .row.justify-content-end
          .col-sm-8
            a.anexo.mb-4.mb-lg-0(href="https://www.nicniif.org/home/normas/niif-para-las-pymes.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 
                  b Enlace web. 
                  | NIIF para las PYMES

    p En la Norma Internacional de Contabilidad (NIC) 1, aplicable al grupo 1 (NIIF plenas) de presentación de información financiera, se determina que (CTCP, 2020).

    .row.align-items-center.justify-content-around
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 Los componentes de otro resultado integral incluyen: 
        .tarjeta.color-gris-claro.p-4
          LineaTiempoC.color-acento-contenido
            div(titulo="A")
              p.mb-0 cambios en el superávit de revaluación (véase la NIC 16 Propiedades, Planta y Equipo y la NIC 38 Activos Intangibles);
            div(titulo="B")
              p.mb-0 nuevas mediciones de los planes de beneficios definidos (véase la NIC 19 Beneficios a los Empleados);
            div(titulo="C")
              p.mb-0 ganancias y pérdidas producidas por la conversión de los estados financieros de un negocio en el extranjero (véase la NIC 21 Efectos de la Variación en las Tasas de Cambio de la Moneda Extranjera);'
            div(titulo="D")
              p.mb-0 las ganancias y pérdidas procedentes de inversiones en instrumentos de patrimonio designados a valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 5.7.5 de la NIIF 9 Instrumentos Financieros; (da) las ganancias y pérdidas sobre activos financieros medidos al valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 4.1.2A de la NIIF 9;
            div(titulo="E")
              p.mb-0 la parte efectiva de las ganancias y pérdidas de los instrumentos de cobertura en una cobertura de flujos de efectivo y las ganancias y pérdidas de los instrumentos de cobertura que cubren inversiones en instrumentos de patrimonio medidos a valor razonable con cambios en otro resultado integral de acuerdo con el párrafo 5.7.5 de NIIF 9 (véase el Capítulo 6 de la NIIF 9);
            div(titulo="F")
              p.mb-0 para pasivos particulares designados como a valor razonable con cambios en resultados, el importe del cambio en el valor razonable que sea atribuible a cambios en el riesgo de crédito del pasivo (véase el párrafo 5.7.7 de la NIIF 9);
            div(titulo="G")
              p.mb-0 os cambios en el valor temporal de las opciones al separar el valor intrínseco y el valor temporal de un contrato de opción y la designación como el instrumento de cobertura solo de los cambios en el valor intrínseco (véase el Capítulo 6 de la NIIF 9); y 
            div(titulo="H")
              p.mb-0 los cambios en el valor de los elementos a término de contratos a término al separar el elemento a término y el elemento al contado de un contrato a término y la designación como el instrumento de cobertura solo de los cambios en el elemento al contado, y los cambios en el valor del diferencial de la tasa de cambio de la moneda extranjera de un instrumento financiero al excluirlo de la designación de ese instrumento financiero como el instrumento de cobertura (véase el Capítulo 6 de la NIIF 9).

      .col-6.col-lg-4
        img.mb-4(src="@/assets/curso/t1-10.svg", alt="Texto que describa la imagen")

        a.anexo.mb-4(:href="obtenerLink('/downloads/tabla-resultado-integral-ORI.xls')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p.text-small
              b Anexo. 
              | Tabla resultado integral ORI

    Separador

    .titulo-segundo
      h2 1.6 Estructura

    p Hace referencia al contenido y forma de presentación del estado de resultados integral.

    h3.mb-4 Estructura del Estado de resultados Integral

    .row.align-items-center.justify-content-center.mb-5
      .col-4.mb-4.mb-md-0
        img(src="@/assets/curso/t1-11.svg", alt="Texto que describa la imagen")
      .col-md
        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b + Grupo 41 
              | Ingresos operacionales (actividades ordinarias)
              br
              | (-) Costos o gastos operativos.

        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b + Grupo 42 
              | Ingresos NO operacionales 
              br
              | Gastos operacionales

        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b (-) Grupo 51
              | (administración)

        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b (-) Grupo 52 
              | (de ventas)

        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b (-) Grupo 53 
              | Gastos NO operacionales 

        .tarjeta-icono-a.color-gris.mb-4
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b (-) Otros gastos ___________________________________
              br
              | = Ganancia: 

        .tarjeta-icono-a.color-gris
          .tarjeta-icono-a__img
            img(src="@/assets/curso/t1-ico-09.svg", alt="Texto que describa la imagen")
          .tarjeta-icono-a__texto.px-3.py-2
            p.mb-0
              b = Ganancias
              br
              | (pérdida)

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Según las Normas Internacionales de Información Financiera (NIIF), no se maneja el concepto de costo de venta o de producción, teniendo en cuenta que estos se relacionan entre los gastos. También, se registra el resultado en el grupo 59, reflejando utilidad o ganancias cuando los ingresos son mayores que los gastos (crédito) o pérdida cuando los ingresos son menores que los gastos (débito).

    .row.align-items-center.justify-content-center
      .col-md-7.mb-4.mb-md-0
        p De acuerdo con la NIC 1, el estado de resultados presenta las siguientes partidas (CTCP, 2020):

        ul.lista-ul--color.ps-4
          li 
            i.fas.fa-chevron-right
            | Ingresos de actividades ordinarias.
          li 
            i.fas.fa-chevron-right
            | Ganancias y pérdidas, resultados de la baja de cuentas de activos financieros medidos al costo amortizado.
          li 
            i.fas.fa-chevron-right
            | Costos financieros.
          li 
            i.fas.fa-chevron-right
            | Pérdidas por deterioro.
          li 
            i.fas.fa-chevron-right
            | Participación en el resultado del periodo de las asociadas y negocios conjuntos que se contabilicen por el método de la participación.
          li 
            i.fas.fa-chevron-right
            | Impuestos.
          li 
            i.fas.fa-chevron-right
            | Resultado de ejercicio.
        p Se invita a revisar los siguientes enlaces para ampliar los conceptos: 

        a.anexo.mb-3(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              | Diferencias entre el estado de resultados y el estado del resultado integral: Estándar para Pymes

        a.anexo(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              | Formas de presentación del estado de resultados

      .col-6.col-md-5
        img(src="@/assets/curso/t1-12.svg", alt="Texto que describa la imagen")

    Separador

    .titulo-segundo
      h2 1.7 Forma de presentación

    p Está compuesto por el encabezado, cuerpo del informe y la parte jurídica, a saber:

    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Encabezado")
            img.mb-4(src="@/assets/curso/t1-tabla-01.svg", alt="Texto que describa la imagen")
            
            ul.lista-ul--color.ps-4
              li 
                i.fas.fa-chevron-right
                | Razón social (nombre de la empresa). 
              li 
                i.fas.fa-chevron-right
                | Nombre del Informe (Estado de resultado integral) Individual (cuando hace referencia a una empresa sola).
              li 
                i.fas.fa-chevron-right
                | Consolidado: hace referencia a si son matriz filial o subsidiaria.
              li 
                i.fas.fa-chevron-right
                | Fecha o período de presentación (se determina desde el 1 de enero de 20_ año) hasta el periodo que desee presentarlos (a 31 de enero a 28 de febrero, a 31 de marzo, o 30 de abril, o 31 de mayo, o 30 de junio, o 31 de julio o 31 de agosto, o 30 de septiembre, o 31 de octubre, o 30 de noviembre, o 31 de diciembre).
              li 
                i.fas.fa-chevron-right
                | Moneda funcional (expresado en $ colombianos o US$ o euros). 
          
          div(numero="2" titulo="Cuerpo del informe") 
            img.mb-4(src="@/assets/curso/t1-tabla-02.svg", alt="Texto que describa la imagen")
            .row.mb-4
              .col-lg-6.mb-4.mb-lg-0
                .cajon.color-primario.p-4.h-100
                  p.mb-4 Seguidamente se presenta el cuerpo del informe, teniendo en cuenta la información que recopila el estado de resultado integral, compuestos por:

                  ul.lista-ul--color.ps-4
                    li 
                      i.fas.fa-chevron-right
                      | Cuentas de ingresos, las cuentas 41 y 42.
                    li 
                      i.fas.fa-chevron-right
                      | Cuentas de gastos, de la 51, 52 y 53.
                    li 
                      i.fas.fa-chevron-right
                      | La ganancia (utilidad) del ejercicio, o 
                    li 
                      i.fas.fa-chevron-right
                      | La ganancia o pérdida.
              .col-lg-6
                .cajon.color-primario.p-4.h-100
                  p.mb-4 Cabe resaltar que en cada cuenta se relaciona:

                  ul.lista-ul--color.ps-4
                    li 
                      i.fas.fa-chevron-right
                      | Nombre de los ítems. 
                    li 
                      i.fas.fa-chevron-right
                      | Valores.
                    li 
                      i.fas.fa-chevron-right
                      | Sumas (valores).
                
            .row.justify-content-end
              .col-md-6
                a.anexo(:href="obtenerLink('/downloads/estructura-general-estado.xls')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-xls.svg")
                  .anexo__texto
                    p.text-small
                      b Anexo. 
                      | Estructura general del estado de resultados por naturaleza de los gastos

          div(numero="3" titulo="Parte júridica")
            img.mb-4(src="@/assets/curso/t1-tabla-03.svg", alt="Texto que describa la imagen")
            p.mb-0 En la presentación de esta sección, se tiene en cuenta la parte jurídica acorde con los lineamientos del Código de Comercio, asimismo con la Ley 222 de 1995, específicamente en los artículos 37 y 38. 
          
          div(numero="4" titulo="Estado de resultado integral por función de los gastos")
            p.mb-4 De acuerdo con las Normas Internacionales de Información Financiera (NIIF), este método presenta de forma discriminada en el ámbito local (Colombia) los ingresos ordinarios, costos de venta y costos de administración. De igual forma, se presentan los ingresos financieros, los gastos financieros, las diferencias de cambio en moneda extranjera, revelando así los registros contables que hacen parte de este estado de resultado integral por función.

            .cajon.color-primario.p-4.h-100.mb-4
              .row.justify-content-end
                .col-md
                  p.mb-0 Para esto se considera la dimensión jurídica acorde con los lineamientos del Código de Comercio (Congreso de la República de Colombia, 2020).
                .col-md-6
                  a.anexo(:href="obtenerLink('/downloads/estructura-general-estado.xls')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-xls.svg")
                    .anexo__texto
                      p.text-small
                        b Anexo. 
                        | Estructura general del estado de resultados por naturaleza de los gastos


            .row.justify-content-center.align-items-center.mb-4
              .col-6.col-md-4.mb-4.mb-md-0
                img(src="@/assets/curso/t1-13.svg", alt="Texto que describa la imagen")
              .col-md
                p Para realizar el estado de resultados es importante haber surtido el proceso del ciclo contable, donde se tiene en cuenta: el registro de los hechos económicos con base a los soportes contables originados en la transacción, seguidamente el registro en los libros de contabilidad, el balance de comprobación, ajustes y, finalmente, el comprobante de cierre para empezar a elaborar los estados financieros.
                  br
                  br
                  | El primer estado que se debe elaborar es el estado de resultados, teniendo en cuenta los saldos presentados en las cuentas de ingresos, gastos y costos y la estructura elegida para su presentación. Al final se obtiene el resultado, que puede ser ganancia o pérdida.

            img(src="@/assets/curso/t1-tabla-04.svg", alt="Texto que describa la imagen")

    Separador

    .titulo-segundo
      h2 1.8 Información a revelar

    p.mb-4 En el evento que las partidas tanto de ingresos como de gastos tengan importancia relativa, su naturaleza y valor se revelarán por separado. 

    .row.align-items-center.mb-5
      .col-md-6
        .cajon.color-primario.p-4
          p.mb-0 Las revelaciones separadas de los valores de ingresos y/o egresos, se expresan en las NIIF para pymes (NIC NIIF, 2020):
      .col-md-6
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Una entidad revelará por separado las siguientes partidas en el estado del resultado integral como distribuciones para el periodo:
            i.fas.fa-quote-right


    .tarjeta--container.tarjetas-claras.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/t1-14.svg', alt='Texto que describa la imagen')
          
        h2.text-center El resultado<br/>del periodo atribuible a:
        .row.justify-content-center
          .col-auto
            ul.lista-ul--color.ps-4
              li 
                i.fas.fa-chevron-right
                | La participación no controladora.
              li 
                i.fas.fa-chevron-right
                | Los propietarios de la controladora.

      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/t1-15.svg', alt='Texto que describa la imagen')
          
        h2.text-center El resultado integral total<br/>del periodo atribuible a:

        .row.justify-content-center
          .col-auto
            ul.lista-ul--color.ps-4
              li 
                i.fas.fa-chevron-right
                | La participación no controladora.
              li 
                i.fas.fa-chevron-right
                | Los propietarios de la controladora. 

    .row.justify-content-center.mb-5
      .col-md-8
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Una entidad presentará un desglose de gastos, utilizando una clasificación basada en la naturaleza o en la función de los gastos dentro de la entidad, lo que proporcione una información que sea fiable y más relevante
            i.fas.fa-quote-right
          .bloque-texto-b__autor.position-relative
            p.mb-0.text-end (NIC NIIF, 2020).

    .row.justify-content-center
      .col-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/t1-16.svg', alt='Texto que describa la imagen')
      .col-md
        LineaTiempoD.color-acento-contenido
          .p-3(numero="1" titulo="Desglose por naturaleza de los gastos")
            ol.lista-ol--cuadro.mb-0
              li.mb-0
                .lista-ol--cuadro__vineta
                  span a
                | Según este método de clasificación, los gastos se agruparán en el estado del resultado integral de acuerdo con su naturaleza (por ejemplo, depreciación, compras de materiales, costos de transporte, beneficios a los empleados y costos de publicidad d) y no se redistribuirán entre las diferentes funciones dentro de la entidad (NIC NIIF, 2020).

          .p-3(numero="2" titulo="Desglose por función de los gastos")
            ol.lista-ol--cuadro.mb-4
              li.mb-0
                .lista-ol--cuadro__vineta
                  span b
                | Según este método de clasificación, los gastos se agruparán de acuerdo con su función como parte del costo de las ventas o, por ejemplo, de los costos de actividades de distribución o administración. Como mínimo una entidad revelará, según este método, su costo de ventas de forma separada de otros gastos (NIC NIIF, 2020).
                br
                br
                | Una entidad revelará el importe del impuesto a las ganancias relativo a cada partida de otro resultado integral, incluyendo los ajustes por reclasificación, en el estado del resultado del periodo y otro resultado integral o en las notas (CTCP, 2020).

            ul.lista-ul--color.ps-5.mb-4
              li 
                i.fas.fa-chevron-right
                | La rebaja de los inventarios hasta su valor neto realizable, o de los elementos de propiedades, planta y equipo hasta su importe recuperable, así como la reversión de tales rebajas.
              li 
                i.fas.fa-chevron-right
                | La reestructuración de las actividades de una entidad y la reversión de cualquier provisión para hacer frente a los costos de ella. 
              li 
                i.fas.fa-chevron-right
                | La disposición de partidas de propiedades, planta y equipo
              li 
                i.fas.fa-chevron-right
                | Las disposiciones de inversiones.
              li 
                i.fas.fa-chevron-right
                | Las operaciones discontinuadas.
              li 
                i.fas.fa-chevron-right
                | Cancelaciones de pagos por litigios. 
              li 
                i.fas.fa-chevron-right
                | Otras reversiones de provisiones.

            p Para ampliar la información, se invita a revisar el siguiente libro en la biblioteca SENA: Estupiñán, R., y Sierra, A. (2017). Estados financieros básicos: bajo NIC /NIIF. Ecoe Ediciones.
              br
              br
              | Así mismo, revisar:

            a.anexo(:href="obtenerLink('/downloads/NIC-1-presentacion-estados-financieros.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.text-small
                  b Anexo. 
                  | Norma Internacional de Contabilidad (NIC) 1
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
