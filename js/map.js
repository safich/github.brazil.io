window.initialize = function(){

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var isDraggable = w > 640 ? true : false;

var styles = [
    {
      stylers: [
        { hue: "#000" },
        { saturation: -100 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 10 },
        { visibility: "simplified" }
      ]
    }
  ];

var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

var myLatlng = new google.maps.LatLng(55.865215,49.110414);
var pos1 = new google.maps.LatLng(55.865215,49.110414);
var mapOptions = {
  zoom: 16,
  center: myLatlng,
  draggable: isDraggable,
	scrollwheel: false,
	disableDoubleClickZoom: true,
	mapTypeControlOptions: {
  mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
var map = new google.maps.Map(document.getElementById('map-markers'), mapOptions);
 
var image = 'images/marker.png';
 
var marker = new google.maps.Marker({
      position: pos1,
      map: map,
	  icon: image,
      title: 'ТатхимПласт'
  });
  window.google.maps.event.addListener(marker, 'click', function() {
                               window.open('https://www.google.ru/maps/place/%D0%A2%D0%B0%D1%82%D1%85%D0%B8%D0%BC%D0%9F%D0%BB%D0%B0%D1%81%D1%82/@55.8652182,49.1082258,17z/data=!3m1!4b1!4m2!3m1!1s0x41594d7327c1dddf:0xdac85e75b1ef0a2', '_blank');});
  
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
          
}
google.maps.event.addDomListener(window, 'load', initialize);