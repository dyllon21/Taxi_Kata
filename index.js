var taxi = new Taxi();
var body = document.querySelector("body");

body.onkeydown = function(e) {

  if (e.keyCode === 39) {
    var robots = taxi.closestTrafficLight();
    if (robots.currentColor() !== "red") {
      taxi.forward();
    }
  }
  if (e.keyCode === 37) {
    var robots = taxi.closestTrafficLight();
    if (robots.currentColor() !== "red") {
      taxi.reverse();
    }
  }

   else if (e.keyCode === 38) {
    var robots = taxi.closestTrafficLight();

    if (robots.currentColor() === "green") {
      robots.makeOrange();
    } else if (robots.currentColor() === "orange") {
      robots.makeRed();
    }
    else {
      robots.makeGreen();
  }
}
  else if (e.keyCode === 40) {
    var robots = taxi.closestTrafficLight();
    if (robots.currentColor() === "red") {
      robots.makeGreen();
    }else if(robots.currentColor() === "green"){
      robots.makeOrange();
    }else{
      robots.makeRed();
    }
  }
}
