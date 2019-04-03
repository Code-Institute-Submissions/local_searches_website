 function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.350140, lng: -6.266155},
          zoom: 13,
          mapTypeId: 'roadmap',
          // Map Styles
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
          // Map Styles end
        });

        // Search box and attach to UI .
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        
        // Connect SearchBox results and current map.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired and retrieve more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out old markers
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // Get the icon, name and location for each place.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };


            const placeMarker = new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            });
      
            // infowindows on markers
            const placeHtmlAttribution = place.photos[0].html_attributions[0];
            const infoWindowContent = (
              `<div><b>${place.name}</b></div>
              <div>${place.formatted_address}</div>
              <div><span>Is it open?: </span>${place.opening_hours.open_now}</div>
              <div><span>Users Rating: </span>${place.rating}</div>
              <div><span>Some photos by users: </span>${placeHtmlAttribution}</div>`
            );
            const infoWindow = new google.maps.InfoWindow({
              content: infoWindowContent
            });
            google.maps.event.addListener(placeMarker, 'click', function () {
              infoWindow.open(map, placeMarker);
            });

            // Marker creation for every place.
            markers.push(placeMarker);

            if (place.geometry.viewport) {
              // Viewport for geocodes.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
         
          map.fitBounds(bounds);
        });
      }