var taxi = new Taxi();
var body = document.querySelector("body");

body.onkeydown = function(e) {

  if (e.keyCode == 39) {
    var robots = taxi.closestTrafficLight();

    if (robots.currentColor() == 'green') {

      taxi.forward();
    }
  }

}
