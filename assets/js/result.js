// const variables = window.location.href.split('?')[1].split('&')
// const mood = variables[0].split('=')[1]
// const cuisine = variables[1].split('=')[1]

const cuisine = "indian restaurant";
var map;
var service;
var result

function initMap() {
  var adelaide = new google.maps.LatLng(-34.928654, 138.59989);
  console.log(adelaide);

  map = new google.maps.Map(document.getElementById("maps"), {
    center: adelaide,
    zoom: 15,
  });

  var request = {
    query: cuisine,
    openNow: true,
    type: ["restaurant"],
    fields: ['photos', 'name', 'formatted_address', 'rating']
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      result = results
      console.log(result[0].geometry.location)
      map = new google.maps.Map(document.getElementById("maps"), {
        center: result[0].geometry.location,
        zoom: 15,
      });
      console.log(result[0].photos)
      new google.maps.Marker({map, draggable: false, position: result[0].geometry.location});
  }
}
