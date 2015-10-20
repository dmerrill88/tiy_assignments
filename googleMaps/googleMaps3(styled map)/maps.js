

      function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(30.2268505,-97.7603832),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP

        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        map.set('styles', [
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#ff0000" }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      { "hue": "#ffc300" }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#0008ff" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#ff00e6" }
    ]
  },{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#2200ff" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "hue": "#00ff19" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "hue": "#fff700" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "geometry",
    "stylers": [
      { "hue": "#00f6ff" }
    ]
  }
]);

      }
      google.maps.event.addDomListener(window, 'load', initialize);








// [
//   {
//     "featureType": "landscape.man_made",
//     "elementType": "labels",
//     "stylers": [
//       { "visibility": "on" },
//       { "hue": "#ff0008" }
//     ]
//   },

//   {
//     "featureType": "landscape.natural.terrain",
//     "stylers": [
//       { "hue": "#08ff00" }
//     ]
//   },
  
//   {
//     "featureType": "landscape.natural.landcover",
//     "stylers": [
//       { "hue": "#00ffdd" }
//     ]
//   },{
//   }
// ]