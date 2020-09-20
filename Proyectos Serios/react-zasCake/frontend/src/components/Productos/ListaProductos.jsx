import React, { Fragment, useState } from "react";
import Producto from "./Producto";
const ListaProductos = () => {
  const [productos, guardarProductos] = useState([
    {
      _id: { $oid: "5f587f3fff8e2842a4d5789e" },
      id_producto: "6480",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-03 16:54:37",
      nombre: "ICING WHITENER 25GR.",
      referencia: "RD00409",
      descripcion:
        "Rainbow Dust Icing whitener se puede simplemente mezclar con pasta de az�car o crema de mantequilla para lograr un acabado m�s blanco. BOX: 10 UDS.",
      descripcion_html:
        "Ingredientes Di�xido de titanio (E171). Almacenamiento Almacenar a temperatura ambiente. Informaci�n nutricional (por 100g) N / A",
      divisa: "EUR",
      precio_distribuidores: "1.70",
      precio_neto: "1.89",
      iva: "10.00",
      precio_bruto: "2.08",
      envio: "9.00",
      disponibilidad: "0",
      hay_stock: "0",
      stock_disponible: "0",
      categoria_principal: "ALIMENTACION",
      product_url: "https://www.pastkolor.es/icing-whitener-25gr-p-1-50-6480",
      marca: "RAINBOW DUST",
      ean: "5060197930412",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_3511_c1250bfd7e829880fec2c9d93e1609dc_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_3511_c1250bfd7e829880fec2c9d93e1609dc_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "RAINBOW DUST",
      xml_info_peso: "",
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones: "",
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases: "",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[5060197930412]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="31" ref="010501"><![CDATA[ALIMENTACION|INGREDIENTES|BASICOS]]></category></categories>',
      xml_info_otros_idiomas: " <internationalization></internationalization>",
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_3511_c1250bfd7e829880fec2c9d93e1609dc_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.89",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d5789f" },
      id_producto: "7496",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-02 12:52:48",
      nombre: "ESPATULA PASTELERA LISA N1",
      referencia: "SWK0543",
      descripcion:
        "Hoja de acero inoxidable y mango de madera. Ideal para alisar, extender, rellenar y cubrir nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">La esp&aacute;tula pastelera es un utensilio b&aacute;sico en la reposter&iacute;a. Su hoja larga y estrecha abarca la superficie ideal para lograr,&nbsp;de forma precisa y c&oacute;moda:&nbsp;<strong>extender</strong>, <strong>rellenar, alisar</strong>&nbsp;y <strong>cubrir</strong> tartas, y otras elaboraciones con masas ligeras como cremas, chocolate o confituras. </span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Tambi&eacute;n se utiliza para despegar las elaboraciones cuando salen del horno. Para&nbsp;desmoldar, levantar e incluso para servir. </span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Hoja fabricada en <strong>acero inoxidable</strong> y mango de <strong>madera</strong> para m&aacute;s durabilidad. </span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><strong>Medidas</strong>: Largo&nbsp;210 mm -&nbsp;Ancho 20 mm - <u>Hoja</u> 110 x 20 mm</span></span></p>',
      divisa: "EUR",
      precio_distribuidores: "1.04",
      precio_neto: "1.15",
      iva: "21.00",
      precio_bruto: "1.39",
      envio: "9.00",
      disponibilidad: "0",
      hay_stock: "0",
      stock_disponible: "0",
      categoria_principal: "BASICOS DE REPOSTERIA",
      product_url:
        "https://www.pastkolor.es/espatula-pastelera-lisa-n1-p-1-50-7496",
      marca: "SWEETKOLOR",
      ean: "8436550051278",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_4300_a4fa3e272f70385328f1966141f85c34_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_4300_a4fa3e272f70385328f1966141f85c34_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "SWEETKOLOR",
      xml_info_peso: "",
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones: "",
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases: "",
      xml_info_codigos_barras:
        '<barcodes><barcode type="EAN-13"><![CDATA[8436550051278]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="7" ref="02"><![CDATA[BASICOS DE REPOSTERIA]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="fr-FR"><![CDATA[SPATULE DE P�TISSERIE LISSE N1]]></value><value lang="de-DE"><![CDATA[GLATTER GEB�CKSPACHTEL]]></value><value lang="pt-PT"><![CDATA[ESP�TULA LISA DE PASTELARIA N1]]></value></title><description><value lang="fr-FR"><![CDATA[Lame en acier inoxydable et manche en bois. Id�al pour lisser, �taler, remplir et recouvrir nos cr�ations.]]></value><value lang="de-DE"><![CDATA[Edelstahlklinge und Holzgriff. Ideal um Ihre Kreationen zu gl�tten, Verteilen, F�llen und Abdecken.]]></value><value lang="pt-PT"><![CDATA[L�mina de a�o inoxid�vel e cabo de madeira. Ideal para alisar, espalhar, encher e cobrir nossas cria��es.]]></value></description><html_description><value lang="fr-FR"><![CDATA[<p>&nbsp;</p><p><span style="font-size:14px;">La spatule est un ustensile de base en p&acirc;tisserie. Sa lame longue et &eacute;troite recouvre la surface id&eacute;ale pour r&eacute;aliser, pr&eacute;cis&eacute;ment et confortablement:<strong> &eacute;taler, remplir, lisser et recouvrir </strong>des g&acirc;teaux, et autres &eacute;laborations avec des p&acirc;tes l&eacute;g&egrave;res telles que cr&egrave;mes, chocolat ou conserves.</span></p><p><span style="font-size:14px;">Il sert &eacute;galement &agrave; d&eacute;coller les &eacute;laborations &agrave; la sortie du four. D&eacute;mouler, soulever et m&ecirc;me servir.</span></p><p><span style="font-size:14px;">Lame en <strong>acier inoxydable</strong> et manche en<strong> bois </strong>pour plus de durabilit&eacute;.</span></p><p><span style="font-size:14px;"><strong>Dimensions</strong>: Longueur 210 mm - Largeur 20 mm - Feuille 110 x 20 mm</span></p>]]></value><value lang="de-DE"><![CDATA[<p><span style="font-size:14px;"><span style="color:#000000;">Der glatte Geb&auml;ckspachtel ist das Standardger&auml;t und der Backwelt. Die lange und schmale Klinge bedeckt ideal mit Pr&auml;zision und Komfort&nbsp;Ihre Oberfl&auml;chen, Kucken und andere Kreationen mit leichten Teigen (wie Cremes, Pralinen oder Konfit&uuml;ren).&nbsp;<br />Es wird auch verwendet und die Backwaren aus der Form oder vom Blech zu l&ouml;sen, um zu heben und sogar zum Servieren.&nbsp;</span></span></p><p><span style="font-size:14px;"><span style="color:#000000;">Klinge aus Edelstahl und holzgriff f&uuml;r meh Haltbarkeit.</span></span></p><p><span style="font-size:14px;"><span style="color:#000000;"><strong>Gr&ouml;&szlig;e</strong>: 210 mm lang - 20 mm breit- Klinge 110 mm x 20 mm.</span></span></p><p>&nbsp;</p>]]></value><value lang="pt-PT"><![CDATA[<p>&nbsp;</p><p><span style="font-size:14px;">A esp&aacute;tula de pastelaria &eacute; um utens&iacute;lio b&aacute;sico de cozimento. Sua l&acirc;mina longa e estreita cobre a superf&iacute;cie ideal para a confec&ccedil;&atilde;o, de forma precisa e confort&aacute;vel:<strong> espalhar, encher, alisar e cobrir</strong> bolos e outras prepara&ccedil;&otilde;es com massas leves, como cremes, chocolates ou conservas.</span></p><p><span style="font-size:14px;">Tamb&eacute;m &eacute; usado para tirar os preparativos depois de sair do forno. Desenforme, levante e at&eacute; sirva.</span></p><p><span style="font-size:14px;">L&acirc;mina de <strong>a&ccedil;o inoxid&aacute;vel </strong>e cabo de <strong>madeira</strong> para maior durabilidade.</span></p><p><span style="font-size:14px;"><strong>Dimens&otilde;es</strong>: Comprimento 210 mm - Largura 20 mm - Folha 110 x 20 mm</span></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_4300_a4fa3e272f70385328f1966141f85c34_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.15",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a0" },
      id_producto: "7497",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-02 12:52:48",
      nombre: "ESPATULA PASTELERA LISA N2",
      referencia: "SWK0544",
      descripcion:
        "Hoja de acero inoxidable y mango de madera. Ideal para alisar, extender, rellenar y cubrir nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="font-size:14px;"><span style="color:#000000;"><span style="font-kerning: none">La esp&aacute;tula pastelera es un utensilio b&aacute;sico en la reposter&iacute;a. Su hoja larga y estrecha abarca la superficie ideal para lograr, de forma precisa y c&oacute;moda: extender, rellenar y cubrir tartas, y otras elaboraciones con masas ligeras como cremas, chocolate o confituras.&nbsp;</span></span></span></p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="font-size:14px;"><span style="color:#000000;"><span style="font-kerning: none">Tambi&eacute;n se utiliza para despegar las elaboraciones cuando salen del horno. Para desmoldar, levantar e incluso para servir.&nbsp;</span></span></span></p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="font-size:14px;"><span style="color:#000000;"><span style="font-kerning: none">Hoja fabricada en <b>acero inoxidable</b> y mango de <b>madera</b> para m&aacute;s durabilidad.&nbsp;</span></span></span></p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="font-size:14px;"><span style="color:#000000;"><span style="font-kerning: none"><b>Medidas</b>:&nbsp;</span>Largo 270 mm - Ancho 35 mm - <u>Hoja</u> 150 x 35 mm</span></span></p>',
      divisa: "EUR",
      precio_distribuidores: "1.35",
      precio_neto: "1.50",
      iva: "21.00",
      precio_bruto: "1.82",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "73",
      categoria_principal: "BASICOS DE REPOSTERIA",
      product_url:
        "https://www.pastkolor.es/espatula-pastelera-lisa-n2-p-1-50-7497",
      marca: "SWEETKOLOR",
      ean: "8436550051285",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_4301_3e5b3d435131a9a043a8e3942b71fe36_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_4301_3e5b3d435131a9a043a8e3942b71fe36_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "SWEETKOLOR",
      xml_info_peso: "",
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones: "",
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases: "",
      xml_info_codigos_barras:
        '<barcodes><barcode type="EAN-13"><![CDATA[8436550051285]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="7" ref="02"><![CDATA[BASICOS DE REPOSTERIA]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="fr-FR"><![CDATA[SPATULE DE P�TISSERIE LISSE N2]]></value><value lang="de-DE"><![CDATA[GLATTER GEB�CKSPACHTEL]]></value><value lang="pt-PT"><![CDATA[ESP�TULA LISA DE PASTELARIA N2]]></value></title><description><value lang="fr-FR"><![CDATA[Lame en acier inoxydable et manche en bois. Id�al pour lisser, �taler, remplir et recouvrir nos cr�ations.]]></value><value lang="de-DE"><![CDATA[Edelstahlklinge und Holzgriff. Ideal um Ihre Kreationen zu gl�tten, Verteilen, F�llen und Abdecken.]]></value><value lang="pt-PT"><![CDATA[L�mina de a�o inoxid�vel e cabo de madeira. Ideal para alisar, espalhar, encher e cobrir nossas cria��es.]]></value></description><html_description><value lang="fr-FR"><![CDATA[<p>&nbsp;</p><p><span style="font-size: 14px;">La spatule est un ustensile de base en p&acirc;tisserie. Sa lame longue et &eacute;troite recouvre la surface id&eacute;ale pour r&eacute;aliser, pr&eacute;cis&eacute;ment et confortablement:<strong>&nbsp;&eacute;taler, remplir, lisser et recouvrir&nbsp;</strong>des g&acirc;teaux, et autres &eacute;laborations avec des p&acirc;tes l&eacute;g&egrave;res telles que cr&egrave;mes, chocolat ou conserves.</span></p><p><span style="font-size: 14px;">Il sert &eacute;galement &agrave; d&eacute;coller les &eacute;laborations &agrave; la sortie du four. D&eacute;mouler, soulever et m&ecirc;me servir.</span></p><p><span style="font-size: 14px;">Lame en&nbsp;<strong>acier inoxydable</strong>&nbsp;et manche en<strong>&nbsp;bois&nbsp;</strong>pour plus de durabilit&eacute;.</span></p><p><span style="font-size: 14px;"><strong>Dimensions</strong>: Longueur 270 mm - Largeur 35&nbsp;mm - Feuille 150 x 35&nbsp;mm</span></p>]]></value><value lang="de-DE"><![CDATA[<p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);">Der glatte Geb&auml;ckspachtel ist das Standardger&auml;t und der Backwelt. Die lange und schmale Klinge bedeckt ideal mit Pr&auml;zision und Komfort&nbsp;Ihre Oberfl&auml;chen, Kucken und andere Kreationen mit leichten Teigen (wie Cremes, Pralinen oder Konfit&uuml;ren).&nbsp;<br />Es wird auch verwendet und die Backwaren aus der Form oder vom Blech zu l&ouml;sen, um zu heben und sogar zum Servieren.&nbsp;</span></span></p><p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);">Klinge aus Edelstahl und holzgriff f&uuml;r meh Haltbarkeit.</span></span></p><p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><strong>Gr&ouml;&szlig;e</strong>: 270&nbsp;mm lang - 35&nbsp;mm breit- Klinge 150&nbsp;mm x 35&nbsp;mm.</span></span></p><div>&nbsp;</div>]]></value><value lang="pt-PT"><![CDATA[<p>&nbsp;</p><p><span style="font-size: 14px;">A esp&aacute;tula de pastelaria &eacute; um utens&iacute;lio b&aacute;sico de cozimento. Sua l&acirc;mina longa e estreita cobre a superf&iacute;cie ideal para a confec&ccedil;&atilde;o, de forma precisa e confort&aacute;vel:<strong>&nbsp;espalhar, encher, alisar e cobrir</strong>&nbsp;bolos e outras prepara&ccedil;&otilde;es com massas leves, como cremes, chocolates ou conservas.</span></p><p><span style="font-size: 14px;">Tamb&eacute;m &eacute; usado para tirar os preparativos depois de sair do forno. Desenforme, levante e at&eacute; sirva.</span></p><p><span style="font-size: 14px;">L&acirc;mina de&nbsp;<strong>a&ccedil;o inoxid&aacute;vel&nbsp;</strong>e cabo de&nbsp;<strong>madeira</strong>&nbsp;para maior durabilidade.</span></p><p><span style="font-size: 14px;"><strong>Dimens&otilde;es</strong>: Comprimento 270 mm - Largura 35&nbsp;mm - Folha 150&nbsp;x 35&nbsp;mm</span></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_4301_3e5b3d435131a9a043a8e3942b71fe36_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.50",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a6" },
      id_producto: "16617",
      fecha_alta: "2020-08-02",
      fecha_ultima_modificacion: "2020-09-08 10:19:38",
      nombre:
        "AROMA CONCENTRADO MAGIC COLOURS - BANANA AFRICANA / AFRICAN BANANA 60 ML",
      referencia: "MC0187",
      descripcion:
        "Extracto de sabor y aroma de alta concentraci�n, derivado de ingredientes naturales.",
      descripcion_html:
        '<p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(0, 0, 0); min-height: 17px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;">Extracto de sabor y aroma de <b>alta concentraci&oacute;n</b>, derivado de <b>ingredientes naturales</b>. &iexcl;S&oacute;lo necesitas una o dos gotas para obtener resultados &uacute;nicos y emocionales!</span></p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(0, 0, 0); min-height: 17px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;">Las pociones de sabor de Magic Colours son perfectas para a&ntilde;adir algunas r&aacute;fagas de sabor a tus cremas de mantequilla, mezclas para pasteles, pasta de az&uacute;car, chocolate y mucho m&aacute;s.&nbsp;</span></p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(0, 0, 0); min-height: 17px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;">Adecuado para cualquier confiter&iacute;a y decoraci&oacute;n de pasteles, as&iacute; como para hornear.</span></p>',
      divisa: "EUR",
      precio_distribuidores: "3.20",
      precio_neto: "3.56",
      iva: "10.00",
      precio_bruto: "3.92",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "20",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-magic-colours--banana-africana--african-banana-60-ml-p-1-50-16617",
      marca: "MAGIC COLOURS",
      ean: "7290015718769",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_11821_74f78a8b077b42daef20cbb2f95c46b9_1.png",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_11821_74f78a8b077b42daef20cbb2f95c46b9_1.png",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2020-08-02",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "MAGIC COLOURS",
      xml_info_peso: "",
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones: "",
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad:
        '<new value="1"><start_date>2020-07-28</start_date><end_date>2020-09-28</end_date></new>',
      xml_info_envases: "",
      xml_info_codigos_barras:
        '<barcodes><barcode type="EAN-13"><![CDATA[7290015718769]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[CONCENTRATED AROMA MAGIC COLOURS AFRICAN BANANA 60 ML]]></value><value lang="de-DE"><![CDATA[KONZENTRIERTES AROMA MAGIC COLORS AFRIKANISCHE BANANE 60 ML]]></value></title><description><value lang="en-UK"><![CDATA[Highly concentrated flavour and aroma extract, derived from natural ingredients.]]></value><value lang="de-DE"><![CDATA[Hochkonzentrierter Geschmacks- und Aromaextrakt, der aus nat�rlichen Inhaltsstoffen hergestellt wird.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;"><strong>Highly concentrated flavour</strong>&nbsp;and&nbsp;<strong>aroma</strong>&nbsp;extract, derived from natural ingredients, you only need one or two drops to obtain unique and sensational results!</span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;">Magic Colours&#39; flavour potions are perfect for adding a few bursts of flavour to your butter creams, cake mixes, sugar paste, chocolate and much more.&nbsp;</span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;">Suitable for any confectionery and cake decoration, as well as baking.</span></span></p>]]></value><value lang="de-DE"><![CDATA[<p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;"><strong>Hochkonzentrierter Geschmacks</strong>- und&nbsp;<strong>Aromaextrakt</strong>, der aus nat&uuml;rlichen Inhaltsstoffen gewonnen wird, Sie ben&ouml;tigen nur ein oder zwei Tropfen f&uuml;r einzigartige&nbsp;Ergebnisse!</span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;">Magic Colours Geschmackstr&auml;nke eignen sich perfekt, um Ihren Buttercremes, Kuchenmischungen, Zuckerpaste, Schokolade und mehr ein paar Geschmacksspritzer hinzuzuf&uuml;gen.&nbsp;</span></span></p><p><span style="color: rgb(0, 0, 0);"><span style="font-size: 14px;">Geeignet f&uuml;r jede Konditorei- und Kuchendekoration sowie zum Backen.</span></span></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_11821_74f78a8b077b42daef20cbb2f95c46b9_1.png",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "3.56",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a8" },
      id_producto: "4802",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-08 08:38:17",
      nombre: "AROMA CONCENTRADO CHEFDELICE - LIMON 10 ML",
      referencia: "CH1001",
      descripcion:
        "Aroma alimentario superconcentrado que aporta un delicioso sabor a nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">Aroma hidrosoluble.&nbsp;</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline"><b>Dosis recomendada:</b></span></span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">A&ntilde;adir 1 g de aroma por 1 kg de masa a aromatizar.</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><i>1 g de aroma equivale, aproximadamente, a 20&nbsp;gotas.</i></span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Dispone de tap&oacute;n con gotero obturador para f&aacute;cil dosificaci&oacute;n.</span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline; font-family: Helvetica;">No ingerir directamente.</span></span></span></p><div>&nbsp;</div>',
      divisa: "EUR",
      precio_distribuidores: "1.16",
      precio_neto: "1.29",
      iva: "10.00",
      precio_bruto: "1.42",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "39",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-chefdelice--limon-10-ml-p-1-50-4802",
      marca: "CHEFDELICE",
      ean: "82010010",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "CHEFDELICE",
      xml_info_peso: '<shipping_weight unit="g">40</shipping_weight>',
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones:
        '<size unit="mm"><width>25</width><height>25</height><depth>65</depth></size>',
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases:
        "<containers><container><name><![CDATA[caja aroma liquido 10ml ch]]></name><units>9</units></container></containers>",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[82010010]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="11" ref="010102"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[LEMON FLAVOUR 10 ML]]></value><value lang="fr-FR"><![CDATA[AR�ME CITRON 10 ML]]></value><value lang="de-DE"><![CDATA[ZITRONEN AROMA 10 ML]]></value><value lang="pt-PT"><![CDATA[AROMA CONCENTRADO LIM�O 10 ML]]></value></title><description><value lang="en-UK"><![CDATA[This super-concentrated food aroma  brings a delicious taste to your creations.]]></value><value lang="fr-FR"><![CDATA[Ar�me alimentaire super concentr�, id�al pour aromatiser les g�teaux, madeleines, muffins, cupcakes, fondants, frostings, biscuits, milkshakes, glaces.\n\nDisponible en r�cipient de 10 ml. et bouteille d�un litre.]]></value><value lang="de-DE"><![CDATA[Ein superkonzentriertes Lebensmittelaroma, das Ihren Kreationen einen k�stlichen Geschmack verleiht.]]></value><value lang="pt-PT"><![CDATA[Aroma superconcentrado alimentar, proporciona um sabor delicioso em bolachas, muffins, cupcakes, fondant, glac�, biscoitos, smoothies, sorvetes ...\n\nDispon�vel em recipiente de 10 ml e frasco de 1 kg.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Water-soluble aroma.&nbsp;</span></span></p><p><em><strong><span style="color:#000000;"><span style="font-size:14px;">Recommended dose:</span></span></strong></em></p><p><span style="color:#000000;"><span style="font-size:14px;">Add 1 g of aroma per 1 kg of mass to be flavoured.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g of aroma is equivalent to approximately 20&nbsp;drops.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">It has a stopper with a shutting dropper for easy dosage.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Do not ingest directly.</span></span></u></p>]]></value><value lang="fr-FR"><![CDATA[<p>Les ar&ocirc;mes superconcentr&eacute;s de Chefdel&iacute;ce sont des ar&ocirc;mes de haute qualit&eacute;, adapt&eacute;s &agrave; la p&acirc;tisserie, &agrave; la cr&egrave;me glac&eacute;e et aux smoothies. Ils donnent aux pr&eacute;parations une saveur &quot;ronde&quot; avec tr&egrave;s peu de quantit&eacute; ajout&eacute;e.</p><p><strong>DOSAGE RECOMMAND&Eacute;:</strong> ajoutez 1 gramme d&rsquo;ar&ocirc;me par kilo de masse &agrave; aromatiser, un gramme &eacute;quivaut &agrave; environ 20 gouttes.</p><p>Il dispose d&#39;un bouchon avec un goutteur d&#39;obturateur pour un dosage facile.</p><p>Ar&ocirc;me non soluble dans l&#39;eau.</p><p>Disponible &agrave; la vente en ligne dans les formats suivants:</p><p>- R&eacute;cipient en verre avec 10 ml. Bo&icirc;tes&nbsp;de 9 unit&eacute;s avec pr&eacute;sentoir.</p><p>- Bouteille en plastique avec 1 kg net.</p><p><strong>Consultez les prix pour les grandes quantit&eacute;s ou dans d&#39;autres formats.</strong></p>]]></value><value lang="de-DE"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Wasserl&ouml;sliches Aroma.&nbsp;</span></span></p><p><u><strong><span style="color:#000000;"><span style="font-size:14px;">Empfohlene Dosis:</span></span></strong></u></p><p><span style="color:#000000;"><span style="font-size:14px;">1 g Aroma pro 1 kg der zu aromatisierenden Masse hinzuf&uuml;gen.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g des Aromas entspricht etwa 20&nbsp;Tropfen.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">Es hat einen Deckel mit einem verschlie&szlig;baren Tropfer, zur einfachen Dosierung.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Nicht direkt einnehmen.</span></span></u></p>]]></value><value lang="pt-PT"><![CDATA[<p>Os aromas superconcentrados Chefdel&iacute;ce s&atilde;o aromas de alta qualidade, adequados para pastelaria, gelados e batidos. Eles fornecem um sabor &quot;redondo&quot; para as prepara&ccedil;&otilde;es com muito pouca quantidade adicionada.</p><p><strong>DOSAGEM RECOMENDADA:</strong> adicionar 1 grama de aroma por quilo de massa a ser aromatizada, 1&nbsp;grama &eacute; aproximadamente 20 gotas.</p><p>Ele tem um plugue com gotejador obturador para facilitar a dosagem.</p><p>Aroma n&atilde;o sol&uacute;vel em &aacute;gua.</p><p>Dispon&iacute;vel para venda online nos seguintes formatos:</p><p>- Recipiente de vidro com 10 ml. Embalagem de 9 unidades com caixa de exposi&ccedil;&atilde;o.</p><p>- Garrafa de pl&aacute;stico com 1 kg de l&iacute;quido.</p><p><strong>Consulte os pre&ccedil;os para grandes quantidades ou em outros formatos.</strong></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.29",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a8" },
      id_producto: "4802",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-08 08:38:17",
      nombre: "AROMA CONCENTRADO CHEFDELICE - LIMON 10 ML",
      referencia: "CH1001",
      descripcion:
        "Aroma alimentario superconcentrado que aporta un delicioso sabor a nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">Aroma hidrosoluble.&nbsp;</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline"><b>Dosis recomendada:</b></span></span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">A&ntilde;adir 1 g de aroma por 1 kg de masa a aromatizar.</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><i>1 g de aroma equivale, aproximadamente, a 20&nbsp;gotas.</i></span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Dispone de tap&oacute;n con gotero obturador para f&aacute;cil dosificaci&oacute;n.</span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline; font-family: Helvetica;">No ingerir directamente.</span></span></span></p><div>&nbsp;</div>',
      divisa: "EUR",
      precio_distribuidores: "1.16",
      precio_neto: "1.29",
      iva: "10.00",
      precio_bruto: "1.42",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "39",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-chefdelice--limon-10-ml-p-1-50-4802",
      marca: "CHEFDELICE",
      ean: "82010010",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "CHEFDELICE",
      xml_info_peso: '<shipping_weight unit="g">40</shipping_weight>',
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones:
        '<size unit="mm"><width>25</width><height>25</height><depth>65</depth></size>',
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases:
        "<containers><container><name><![CDATA[caja aroma liquido 10ml ch]]></name><units>9</units></container></containers>",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[82010010]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="11" ref="010102"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[LEMON FLAVOUR 10 ML]]></value><value lang="fr-FR"><![CDATA[AR�ME CITRON 10 ML]]></value><value lang="de-DE"><![CDATA[ZITRONEN AROMA 10 ML]]></value><value lang="pt-PT"><![CDATA[AROMA CONCENTRADO LIM�O 10 ML]]></value></title><description><value lang="en-UK"><![CDATA[This super-concentrated food aroma  brings a delicious taste to your creations.]]></value><value lang="fr-FR"><![CDATA[Ar�me alimentaire super concentr�, id�al pour aromatiser les g�teaux, madeleines, muffins, cupcakes, fondants, frostings, biscuits, milkshakes, glaces.\n\nDisponible en r�cipient de 10 ml. et bouteille d�un litre.]]></value><value lang="de-DE"><![CDATA[Ein superkonzentriertes Lebensmittelaroma, das Ihren Kreationen einen k�stlichen Geschmack verleiht.]]></value><value lang="pt-PT"><![CDATA[Aroma superconcentrado alimentar, proporciona um sabor delicioso em bolachas, muffins, cupcakes, fondant, glac�, biscoitos, smoothies, sorvetes ...\n\nDispon�vel em recipiente de 10 ml e frasco de 1 kg.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Water-soluble aroma.&nbsp;</span></span></p><p><em><strong><span style="color:#000000;"><span style="font-size:14px;">Recommended dose:</span></span></strong></em></p><p><span style="color:#000000;"><span style="font-size:14px;">Add 1 g of aroma per 1 kg of mass to be flavoured.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g of aroma is equivalent to approximately 20&nbsp;drops.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">It has a stopper with a shutting dropper for easy dosage.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Do not ingest directly.</span></span></u></p>]]></value><value lang="fr-FR"><![CDATA[<p>Les ar&ocirc;mes superconcentr&eacute;s de Chefdel&iacute;ce sont des ar&ocirc;mes de haute qualit&eacute;, adapt&eacute;s &agrave; la p&acirc;tisserie, &agrave; la cr&egrave;me glac&eacute;e et aux smoothies. Ils donnent aux pr&eacute;parations une saveur &quot;ronde&quot; avec tr&egrave;s peu de quantit&eacute; ajout&eacute;e.</p><p><strong>DOSAGE RECOMMAND&Eacute;:</strong> ajoutez 1 gramme d&rsquo;ar&ocirc;me par kilo de masse &agrave; aromatiser, un gramme &eacute;quivaut &agrave; environ 20 gouttes.</p><p>Il dispose d&#39;un bouchon avec un goutteur d&#39;obturateur pour un dosage facile.</p><p>Ar&ocirc;me non soluble dans l&#39;eau.</p><p>Disponible &agrave; la vente en ligne dans les formats suivants:</p><p>- R&eacute;cipient en verre avec 10 ml. Bo&icirc;tes&nbsp;de 9 unit&eacute;s avec pr&eacute;sentoir.</p><p>- Bouteille en plastique avec 1 kg net.</p><p><strong>Consultez les prix pour les grandes quantit&eacute;s ou dans d&#39;autres formats.</strong></p>]]></value><value lang="de-DE"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Wasserl&ouml;sliches Aroma.&nbsp;</span></span></p><p><u><strong><span style="color:#000000;"><span style="font-size:14px;">Empfohlene Dosis:</span></span></strong></u></p><p><span style="color:#000000;"><span style="font-size:14px;">1 g Aroma pro 1 kg der zu aromatisierenden Masse hinzuf&uuml;gen.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g des Aromas entspricht etwa 20&nbsp;Tropfen.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">Es hat einen Deckel mit einem verschlie&szlig;baren Tropfer, zur einfachen Dosierung.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Nicht direkt einnehmen.</span></span></u></p>]]></value><value lang="pt-PT"><![CDATA[<p>Os aromas superconcentrados Chefdel&iacute;ce s&atilde;o aromas de alta qualidade, adequados para pastelaria, gelados e batidos. Eles fornecem um sabor &quot;redondo&quot; para as prepara&ccedil;&otilde;es com muito pouca quantidade adicionada.</p><p><strong>DOSAGEM RECOMENDADA:</strong> adicionar 1 grama de aroma por quilo de massa a ser aromatizada, 1&nbsp;grama &eacute; aproximadamente 20 gotas.</p><p>Ele tem um plugue com gotejador obturador para facilitar a dosagem.</p><p>Aroma n&atilde;o sol&uacute;vel em &aacute;gua.</p><p>Dispon&iacute;vel para venda online nos seguintes formatos:</p><p>- Recipiente de vidro com 10 ml. Embalagem de 9 unidades com caixa de exposi&ccedil;&atilde;o.</p><p>- Garrafa de pl&aacute;stico com 1 kg de l&iacute;quido.</p><p><strong>Consulte os pre&ccedil;os para grandes quantidades ou em outros formatos.</strong></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.29",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a8" },
      id_producto: "4802",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-08 08:38:17",
      nombre: "AROMA CONCENTRADO CHEFDELICE - LIMON 10 ML",
      referencia: "CH1001",
      descripcion:
        "Aroma alimentario superconcentrado que aporta un delicioso sabor a nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">Aroma hidrosoluble.&nbsp;</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline"><b>Dosis recomendada:</b></span></span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">A&ntilde;adir 1 g de aroma por 1 kg de masa a aromatizar.</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><i>1 g de aroma equivale, aproximadamente, a 20&nbsp;gotas.</i></span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Dispone de tap&oacute;n con gotero obturador para f&aacute;cil dosificaci&oacute;n.</span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline; font-family: Helvetica;">No ingerir directamente.</span></span></span></p><div>&nbsp;</div>',
      divisa: "EUR",
      precio_distribuidores: "1.16",
      precio_neto: "1.29",
      iva: "10.00",
      precio_bruto: "1.42",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "39",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-chefdelice--limon-10-ml-p-1-50-4802",
      marca: "CHEFDELICE",
      ean: "82010010",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "CHEFDELICE",
      xml_info_peso: '<shipping_weight unit="g">40</shipping_weight>',
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones:
        '<size unit="mm"><width>25</width><height>25</height><depth>65</depth></size>',
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases:
        "<containers><container><name><![CDATA[caja aroma liquido 10ml ch]]></name><units>9</units></container></containers>",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[82010010]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="11" ref="010102"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[LEMON FLAVOUR 10 ML]]></value><value lang="fr-FR"><![CDATA[AR�ME CITRON 10 ML]]></value><value lang="de-DE"><![CDATA[ZITRONEN AROMA 10 ML]]></value><value lang="pt-PT"><![CDATA[AROMA CONCENTRADO LIM�O 10 ML]]></value></title><description><value lang="en-UK"><![CDATA[This super-concentrated food aroma  brings a delicious taste to your creations.]]></value><value lang="fr-FR"><![CDATA[Ar�me alimentaire super concentr�, id�al pour aromatiser les g�teaux, madeleines, muffins, cupcakes, fondants, frostings, biscuits, milkshakes, glaces.\n\nDisponible en r�cipient de 10 ml. et bouteille d�un litre.]]></value><value lang="de-DE"><![CDATA[Ein superkonzentriertes Lebensmittelaroma, das Ihren Kreationen einen k�stlichen Geschmack verleiht.]]></value><value lang="pt-PT"><![CDATA[Aroma superconcentrado alimentar, proporciona um sabor delicioso em bolachas, muffins, cupcakes, fondant, glac�, biscoitos, smoothies, sorvetes ...\n\nDispon�vel em recipiente de 10 ml e frasco de 1 kg.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Water-soluble aroma.&nbsp;</span></span></p><p><em><strong><span style="color:#000000;"><span style="font-size:14px;">Recommended dose:</span></span></strong></em></p><p><span style="color:#000000;"><span style="font-size:14px;">Add 1 g of aroma per 1 kg of mass to be flavoured.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g of aroma is equivalent to approximately 20&nbsp;drops.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">It has a stopper with a shutting dropper for easy dosage.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Do not ingest directly.</span></span></u></p>]]></value><value lang="fr-FR"><![CDATA[<p>Les ar&ocirc;mes superconcentr&eacute;s de Chefdel&iacute;ce sont des ar&ocirc;mes de haute qualit&eacute;, adapt&eacute;s &agrave; la p&acirc;tisserie, &agrave; la cr&egrave;me glac&eacute;e et aux smoothies. Ils donnent aux pr&eacute;parations une saveur &quot;ronde&quot; avec tr&egrave;s peu de quantit&eacute; ajout&eacute;e.</p><p><strong>DOSAGE RECOMMAND&Eacute;:</strong> ajoutez 1 gramme d&rsquo;ar&ocirc;me par kilo de masse &agrave; aromatiser, un gramme &eacute;quivaut &agrave; environ 20 gouttes.</p><p>Il dispose d&#39;un bouchon avec un goutteur d&#39;obturateur pour un dosage facile.</p><p>Ar&ocirc;me non soluble dans l&#39;eau.</p><p>Disponible &agrave; la vente en ligne dans les formats suivants:</p><p>- R&eacute;cipient en verre avec 10 ml. Bo&icirc;tes&nbsp;de 9 unit&eacute;s avec pr&eacute;sentoir.</p><p>- Bouteille en plastique avec 1 kg net.</p><p><strong>Consultez les prix pour les grandes quantit&eacute;s ou dans d&#39;autres formats.</strong></p>]]></value><value lang="de-DE"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Wasserl&ouml;sliches Aroma.&nbsp;</span></span></p><p><u><strong><span style="color:#000000;"><span style="font-size:14px;">Empfohlene Dosis:</span></span></strong></u></p><p><span style="color:#000000;"><span style="font-size:14px;">1 g Aroma pro 1 kg der zu aromatisierenden Masse hinzuf&uuml;gen.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g des Aromas entspricht etwa 20&nbsp;Tropfen.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">Es hat einen Deckel mit einem verschlie&szlig;baren Tropfer, zur einfachen Dosierung.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Nicht direkt einnehmen.</span></span></u></p>]]></value><value lang="pt-PT"><![CDATA[<p>Os aromas superconcentrados Chefdel&iacute;ce s&atilde;o aromas de alta qualidade, adequados para pastelaria, gelados e batidos. Eles fornecem um sabor &quot;redondo&quot; para as prepara&ccedil;&otilde;es com muito pouca quantidade adicionada.</p><p><strong>DOSAGEM RECOMENDADA:</strong> adicionar 1 grama de aroma por quilo de massa a ser aromatizada, 1&nbsp;grama &eacute; aproximadamente 20 gotas.</p><p>Ele tem um plugue com gotejador obturador para facilitar a dosagem.</p><p>Aroma n&atilde;o sol&uacute;vel em &aacute;gua.</p><p>Dispon&iacute;vel para venda online nos seguintes formatos:</p><p>- Recipiente de vidro com 10 ml. Embalagem de 9 unidades com caixa de exposi&ccedil;&atilde;o.</p><p>- Garrafa de pl&aacute;stico com 1 kg de l&iacute;quido.</p><p><strong>Consulte os pre&ccedil;os para grandes quantidades ou em outros formatos.</strong></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.29",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a8" },
      id_producto: "4802",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-08 08:38:17",
      nombre: "AROMA CONCENTRADO CHEFDELICE - LIMON 10 ML",
      referencia: "CH1001",
      descripcion:
        "Aroma alimentario superconcentrado que aporta un delicioso sabor a nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">Aroma hidrosoluble.&nbsp;</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline"><b>Dosis recomendada:</b></span></span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">A&ntilde;adir 1 g de aroma por 1 kg de masa a aromatizar.</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><i>1 g de aroma equivale, aproximadamente, a 20&nbsp;gotas.</i></span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Dispone de tap&oacute;n con gotero obturador para f&aacute;cil dosificaci&oacute;n.</span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline; font-family: Helvetica;">No ingerir directamente.</span></span></span></p><div>&nbsp;</div>',
      divisa: "EUR",
      precio_distribuidores: "1.16",
      precio_neto: "1.29",
      iva: "10.00",
      precio_bruto: "1.42",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "39",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-chefdelice--limon-10-ml-p-1-50-4802",
      marca: "CHEFDELICE",
      ean: "82010010",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "CHEFDELICE",
      xml_info_peso: '<shipping_weight unit="g">40</shipping_weight>',
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones:
        '<size unit="mm"><width>25</width><height>25</height><depth>65</depth></size>',
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases:
        "<containers><container><name><![CDATA[caja aroma liquido 10ml ch]]></name><units>9</units></container></containers>",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[82010010]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="11" ref="010102"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[LEMON FLAVOUR 10 ML]]></value><value lang="fr-FR"><![CDATA[AR�ME CITRON 10 ML]]></value><value lang="de-DE"><![CDATA[ZITRONEN AROMA 10 ML]]></value><value lang="pt-PT"><![CDATA[AROMA CONCENTRADO LIM�O 10 ML]]></value></title><description><value lang="en-UK"><![CDATA[This super-concentrated food aroma  brings a delicious taste to your creations.]]></value><value lang="fr-FR"><![CDATA[Ar�me alimentaire super concentr�, id�al pour aromatiser les g�teaux, madeleines, muffins, cupcakes, fondants, frostings, biscuits, milkshakes, glaces.\n\nDisponible en r�cipient de 10 ml. et bouteille d�un litre.]]></value><value lang="de-DE"><![CDATA[Ein superkonzentriertes Lebensmittelaroma, das Ihren Kreationen einen k�stlichen Geschmack verleiht.]]></value><value lang="pt-PT"><![CDATA[Aroma superconcentrado alimentar, proporciona um sabor delicioso em bolachas, muffins, cupcakes, fondant, glac�, biscoitos, smoothies, sorvetes ...\n\nDispon�vel em recipiente de 10 ml e frasco de 1 kg.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Water-soluble aroma.&nbsp;</span></span></p><p><em><strong><span style="color:#000000;"><span style="font-size:14px;">Recommended dose:</span></span></strong></em></p><p><span style="color:#000000;"><span style="font-size:14px;">Add 1 g of aroma per 1 kg of mass to be flavoured.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g of aroma is equivalent to approximately 20&nbsp;drops.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">It has a stopper with a shutting dropper for easy dosage.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Do not ingest directly.</span></span></u></p>]]></value><value lang="fr-FR"><![CDATA[<p>Les ar&ocirc;mes superconcentr&eacute;s de Chefdel&iacute;ce sont des ar&ocirc;mes de haute qualit&eacute;, adapt&eacute;s &agrave; la p&acirc;tisserie, &agrave; la cr&egrave;me glac&eacute;e et aux smoothies. Ils donnent aux pr&eacute;parations une saveur &quot;ronde&quot; avec tr&egrave;s peu de quantit&eacute; ajout&eacute;e.</p><p><strong>DOSAGE RECOMMAND&Eacute;:</strong> ajoutez 1 gramme d&rsquo;ar&ocirc;me par kilo de masse &agrave; aromatiser, un gramme &eacute;quivaut &agrave; environ 20 gouttes.</p><p>Il dispose d&#39;un bouchon avec un goutteur d&#39;obturateur pour un dosage facile.</p><p>Ar&ocirc;me non soluble dans l&#39;eau.</p><p>Disponible &agrave; la vente en ligne dans les formats suivants:</p><p>- R&eacute;cipient en verre avec 10 ml. Bo&icirc;tes&nbsp;de 9 unit&eacute;s avec pr&eacute;sentoir.</p><p>- Bouteille en plastique avec 1 kg net.</p><p><strong>Consultez les prix pour les grandes quantit&eacute;s ou dans d&#39;autres formats.</strong></p>]]></value><value lang="de-DE"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Wasserl&ouml;sliches Aroma.&nbsp;</span></span></p><p><u><strong><span style="color:#000000;"><span style="font-size:14px;">Empfohlene Dosis:</span></span></strong></u></p><p><span style="color:#000000;"><span style="font-size:14px;">1 g Aroma pro 1 kg der zu aromatisierenden Masse hinzuf&uuml;gen.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g des Aromas entspricht etwa 20&nbsp;Tropfen.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">Es hat einen Deckel mit einem verschlie&szlig;baren Tropfer, zur einfachen Dosierung.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Nicht direkt einnehmen.</span></span></u></p>]]></value><value lang="pt-PT"><![CDATA[<p>Os aromas superconcentrados Chefdel&iacute;ce s&atilde;o aromas de alta qualidade, adequados para pastelaria, gelados e batidos. Eles fornecem um sabor &quot;redondo&quot; para as prepara&ccedil;&otilde;es com muito pouca quantidade adicionada.</p><p><strong>DOSAGEM RECOMENDADA:</strong> adicionar 1 grama de aroma por quilo de massa a ser aromatizada, 1&nbsp;grama &eacute; aproximadamente 20 gotas.</p><p>Ele tem um plugue com gotejador obturador para facilitar a dosagem.</p><p>Aroma n&atilde;o sol&uacute;vel em &aacute;gua.</p><p>Dispon&iacute;vel para venda online nos seguintes formatos:</p><p>- Recipiente de vidro com 10 ml. Embalagem de 9 unidades com caixa de exposi&ccedil;&atilde;o.</p><p>- Garrafa de pl&aacute;stico com 1 kg de l&iacute;quido.</p><p><strong>Consulte os pre&ccedil;os para grandes quantidades ou em outros formatos.</strong></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.29",
      xml_info_pack: "",
    },
    {
      _id: { $oid: "5f587f3fff8e2842a4d578a8" },
      id_producto: "4802",
      fecha_alta: "2017-09-08",
      fecha_ultima_modificacion: "2020-09-08 08:38:17",
      nombre: "AROMA CONCENTRADO CHEFDELICE - LIMON 10 ML",
      referencia: "CH1001",
      descripcion:
        "Aroma alimentario superconcentrado que aporta un delicioso sabor a nuestras creaciones.",
      descripcion_html:
        '<p>&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">Aroma hidrosoluble.&nbsp;</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline"><b>Dosis recomendada:</b></span></span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;">A&ntilde;adir 1 g de aroma por 1 kg de masa a aromatizar.</span></span></p><p style="margin: 0px; font-stretch: normal; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38); min-height: 16px;">&nbsp;</p><p style="margin: 0px; font-stretch: normal; font-size: 14px; line-height: normal; font-family: Helvetica; color: rgb(38, 38, 38);"><span style="color:#000000;"><span style="font-size:14px;"><i>1 g de aroma equivale, aproximadamente, a 20&nbsp;gotas.</i></span></span></p><p><span style="color:#000000;"><span style="font-size:14px;">Dispone de tap&oacute;n con gotero obturador para f&aacute;cil dosificaci&oacute;n.</span></span></p><p><span style="color:#000000;"><span style="font-size:14px;"><span style="text-decoration: underline; font-family: Helvetica;">No ingerir directamente.</span></span></span></p><div>&nbsp;</div>',
      divisa: "EUR",
      precio_distribuidores: "1.16",
      precio_neto: "1.29",
      iva: "10.00",
      precio_bruto: "1.42",
      envio: "9.00",
      disponibilidad: "1",
      hay_stock: "1",
      stock_disponible: "39",
      categoria_principal: "ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS",
      product_url:
        "https://www.pastkolor.es/aroma-concentrado-chefdelice--limon-10-ml-p-1-50-4802",
      marca: "CHEFDELICE",
      ean: "82010010",
      plazo_de_entrega: "24-48 horas",
      tipo_promocion: "",
      url_imagen_principal:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      url_imagen_principal_grande:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      min_uds_por_pedido: "1",
      max_uds_por_pedido: "99999999",
      min_importe_por_pedido: "0",
      max_importe_por_pedido: "99999999",
      unidad_medida: "units",
      fecha_lanzamiento: "2017-09-08",
      con_numeros_serie: "0",
      reserva_prepago: "0",
      en_liquidacion: "0",
      jerarquia_marca: "CHEFDELICE",
      xml_info_peso: '<shipping_weight unit="g">40</shipping_weight>',
      xml_info_oferta: '<sale value="0" />',
      xml_info_dimensiones:
        '<size unit="mm"><width>25</width><height>25</height><depth>65</depth></size>',
      xml_info_refrigerado: '<refrigerated value="0" />',
      xml_info_novedad: '<new value="0" />',
      xml_info_envases:
        "<containers><container><name><![CDATA[caja aroma liquido 10ml ch]]></name><units>9</units></container></containers>",
      xml_info_codigos_barras:
        '<barcodes><barcode type="CODE128"><![CDATA[82010010]]></barcode></barcodes>',
      xml_info_familias:
        '<categories><category gesioid="11" ref="010102"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS]]></category><category gesioid="9" ref="0101"><![CDATA[ALIMENTACION|AROMAS Y CONCENTRADOS]]></category><category gesioid="6" ref="01"><![CDATA[ALIMENTACION]]></category></categories>',
      xml_info_otros_idiomas:
        ' <internationalization><title><value lang="en-UK"><![CDATA[LEMON FLAVOUR 10 ML]]></value><value lang="fr-FR"><![CDATA[AR�ME CITRON 10 ML]]></value><value lang="de-DE"><![CDATA[ZITRONEN AROMA 10 ML]]></value><value lang="pt-PT"><![CDATA[AROMA CONCENTRADO LIM�O 10 ML]]></value></title><description><value lang="en-UK"><![CDATA[This super-concentrated food aroma  brings a delicious taste to your creations.]]></value><value lang="fr-FR"><![CDATA[Ar�me alimentaire super concentr�, id�al pour aromatiser les g�teaux, madeleines, muffins, cupcakes, fondants, frostings, biscuits, milkshakes, glaces.\n\nDisponible en r�cipient de 10 ml. et bouteille d�un litre.]]></value><value lang="de-DE"><![CDATA[Ein superkonzentriertes Lebensmittelaroma, das Ihren Kreationen einen k�stlichen Geschmack verleiht.]]></value><value lang="pt-PT"><![CDATA[Aroma superconcentrado alimentar, proporciona um sabor delicioso em bolachas, muffins, cupcakes, fondant, glac�, biscoitos, smoothies, sorvetes ...\n\nDispon�vel em recipiente de 10 ml e frasco de 1 kg.]]></value></description><html_description><value lang="en-UK"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Water-soluble aroma.&nbsp;</span></span></p><p><em><strong><span style="color:#000000;"><span style="font-size:14px;">Recommended dose:</span></span></strong></em></p><p><span style="color:#000000;"><span style="font-size:14px;">Add 1 g of aroma per 1 kg of mass to be flavoured.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g of aroma is equivalent to approximately 20&nbsp;drops.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">It has a stopper with a shutting dropper for easy dosage.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Do not ingest directly.</span></span></u></p>]]></value><value lang="fr-FR"><![CDATA[<p>Les ar&ocirc;mes superconcentr&eacute;s de Chefdel&iacute;ce sont des ar&ocirc;mes de haute qualit&eacute;, adapt&eacute;s &agrave; la p&acirc;tisserie, &agrave; la cr&egrave;me glac&eacute;e et aux smoothies. Ils donnent aux pr&eacute;parations une saveur &quot;ronde&quot; avec tr&egrave;s peu de quantit&eacute; ajout&eacute;e.</p><p><strong>DOSAGE RECOMMAND&Eacute;:</strong> ajoutez 1 gramme d&rsquo;ar&ocirc;me par kilo de masse &agrave; aromatiser, un gramme &eacute;quivaut &agrave; environ 20 gouttes.</p><p>Il dispose d&#39;un bouchon avec un goutteur d&#39;obturateur pour un dosage facile.</p><p>Ar&ocirc;me non soluble dans l&#39;eau.</p><p>Disponible &agrave; la vente en ligne dans les formats suivants:</p><p>- R&eacute;cipient en verre avec 10 ml. Bo&icirc;tes&nbsp;de 9 unit&eacute;s avec pr&eacute;sentoir.</p><p>- Bouteille en plastique avec 1 kg net.</p><p><strong>Consultez les prix pour les grandes quantit&eacute;s ou dans d&#39;autres formats.</strong></p>]]></value><value lang="de-DE"><![CDATA[<p><br /><span style="color:#000000;"><span style="font-size:14px;">Wasserl&ouml;sliches Aroma.&nbsp;</span></span></p><p><u><strong><span style="color:#000000;"><span style="font-size:14px;">Empfohlene Dosis:</span></span></strong></u></p><p><span style="color:#000000;"><span style="font-size:14px;">1 g Aroma pro 1 kg der zu aromatisierenden Masse hinzuf&uuml;gen.</span></span></p><p><em><span style="color:#000000;"><span style="font-size:14px;">1 g des Aromas entspricht etwa 20&nbsp;Tropfen.</span></span></em></p><p>&nbsp;</p><p><span style="color:#000000;"><span style="font-size:14px;">Es hat einen Deckel mit einem verschlie&szlig;baren Tropfer, zur einfachen Dosierung.</span></span></p><p><u><span style="color:#000000;"><span style="font-size:14px;">Nicht direkt einnehmen.</span></span></u></p>]]></value><value lang="pt-PT"><![CDATA[<p>Os aromas superconcentrados Chefdel&iacute;ce s&atilde;o aromas de alta qualidade, adequados para pastelaria, gelados e batidos. Eles fornecem um sabor &quot;redondo&quot; para as prepara&ccedil;&otilde;es com muito pouca quantidade adicionada.</p><p><strong>DOSAGEM RECOMENDADA:</strong> adicionar 1 grama de aroma por quilo de massa a ser aromatizada, 1&nbsp;grama &eacute; aproximadamente 20 gotas.</p><p>Ele tem um plugue com gotejador obturador para facilitar a dosagem.</p><p>Aroma n&atilde;o sol&uacute;vel em &aacute;gua.</p><p>Dispon&iacute;vel para venda online nos seguintes formatos:</p><p>- Recipiente de vidro com 10 ml. Embalagem de 9 unidades com caixa de exposi&ccedil;&atilde;o.</p><p>- Garrafa de pl&aacute;stico com 1 kg de l&iacute;quido.</p><p><strong>Consulte os pre&ccedil;os para grandes quantidades ou em outros formatos.</strong></p>]]></value></html_description></internationalization>',
      csv_imagenes:
        "https://www.pastkolor.es/productos/imagenes/img_66_7093394589b82d300b8a04249aa2d66b_1.jpg",
      xml_info_tallas_colores: "",
      precio_neto_recomendado: "1.29",
      xml_info_pack: "",
    },
  ]);
  return (
    <Fragment>
      <div className="col-12">
        <h1>Desde lista de productos</h1>
      </div>
      <div className="row justify-content-between align-items-center">
        {productos.map((producto) => (
          <Producto producto={producto}></Producto>
        ))}
      </div>
    </Fragment>
  );
};

export default ListaProductos;
