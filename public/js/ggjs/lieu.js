map = new google.maps.Map(document.getElementById("map_canvas"), {
	zoom: 15,
	center: new google.maps.LatLng(48.8010123, 2.4258678),
	mapTypeId: google.maps.MapTypeId.ROADMAP
});

 var mairie = new google.maps.Marker({
    position: {lat: 48.801073, lng: 2.430706},
    map: map,
    title: 'mairie'
  });


   var eglise = new google.maps.Marker({
    position: {lat: 48.801002, lng: 2.432945},
    map: map,
    title: 'eglise'
  });



var tier = document.body.clientHeight/3;
tier =  Math.ceil( tier ); 
tier = tier+'px';
console.log(tier);
$('#map_canvas').css('height',tier);