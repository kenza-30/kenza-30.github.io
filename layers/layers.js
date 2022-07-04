ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([342812.333581, 6771742.960835, 685886.023451, 7080068.029384]);
var wms_layers = [];

var format_msPerimetre_DTA_0 = new ol.format.GeoJSON();
var features_msPerimetre_DTA_0 = format_msPerimetre_DTA_0.readFeatures(json_msPerimetre_DTA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_msPerimetre_DTA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_msPerimetre_DTA_0.addFeatures(features_msPerimetre_DTA_0);
var lyr_msPerimetre_DTA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_msPerimetre_DTA_0, 
                style: style_msPerimetre_DTA_0,
                interactive: true,
                title: '<img src="styles/legend/msPerimetre_DTA_0.png" /> ms:Perimetre_DTA'
            });

lyr_msPerimetre_DTA_0.setVisible(true);
var layersList = [lyr_msPerimetre_DTA_0];
lyr_msPerimetre_DTA_0.set('fieldAliases', {});
lyr_msPerimetre_DTA_0.set('fieldImages', {});
lyr_msPerimetre_DTA_0.set('fieldLabels', {});
lyr_msPerimetre_DTA_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});