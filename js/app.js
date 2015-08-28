var xyCoord = [];

function storePosition(event) {                
  x = event.pageX;                      
  y = event.pageY;
  xyCoord.push(x);
  xyCoord.push(y);
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
  context.fillStyle = 'coral';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'red';
  context.stroke();
}

function replaceLetters() {
  var entryChars = document.getElementById('letters').value;
  if(entryChars !== '') {
    var letterArray = entryChars.split('')
    returnedLetter = letterArray.shift();
    var text = document.getElementById('letters').value;  
    text = text.substr(1);
    document.getElementById('letters').value = text;
    pushToCircle(returnedLetter);
  }
}

function pushToCircle(returnedLetter) {
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext("2d");
  ctx.font = "30px Verdana black";
  ctx.fillStyle = "black"; 
  ctx.fillText(returnedLetter, xyCoord[0] - 10 , xyCoord[1] + 10);
  xyCoord.shift();
  xyCoord.shift();
}

var el1 = document.getElementById('circles');      
el1.addEventListener('click', storePosition, false); 

var el2 = document.getElementById('letters');      
el2.addEventListener('click', replaceLetters, false); 

