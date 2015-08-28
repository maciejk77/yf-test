var xyCoord = [];

function storePosition(event) {                
  x = event.pageX;                      
  y = event.pageY;
  xyCoord.push(x);
  xyCoord.push(y);
  console.log(xyCoord);
  createCircle();
}

function createCircle() {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 40;

      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.stroke();
}

var el = document.getElementById('body');      
el.addEventListener('click', storePosition, false); 