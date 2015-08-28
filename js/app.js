var xyCoord = [];

function storePosition(event) {                
  x = event.pageX;                      
  y = event.pageY;
  xyCoord.push(x);
  xyCoord.push(y);
  console.log(xyCoord);
}

var el = document.getElementById('body');      
el.addEventListener('click', storePosition, false); 