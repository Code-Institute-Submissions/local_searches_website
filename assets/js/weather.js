// var apiKey  = 804ff9591cf3f58dd01ceea9f8c58e20;  

var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Dublin,Ireland&804ff9591cf3f58dd01ceea9f8c58e20', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
        console.log('error');
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();