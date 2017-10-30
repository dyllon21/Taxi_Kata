// module.exports = reuire('js');{
// var button = document.querySelector('#directions').innerHTML;
// var Keypress = module.exports('keypress.js');
var counter = 0;

var number = document.querySelector('.number');
number.innerHTML = counter;

function interval() {
  number.innerHTML = counter++;

  if (counter === 5) {
    this.up();
  }
}
// }
    setInterval(interval, 500);
