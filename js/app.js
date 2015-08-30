var xyCoord = [];

function storePosition(event) {                
  x = event.pageX;                      
  y = event.pageY;
  xyCoord.push(x, y);
  createCircle();
}

function createCircle() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var radius = 40;
  
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'coral';
  context.strokeStyle = 'red';
  context.lineWidth = 1;
  context.stroke();
  context.fill();
}

function replaceLetters() {
  var formLetters = document.getElementById('letters').value;
  var lettersArray = formLetters.split('');  
  
  if(formLetters !== '') {
    returnedLetter = lettersArray.shift();
    formLetters = formLetters.substr(1);
    document.getElementById('letters').value = formLetters;
    pushToCircle(returnedLetter);
  }
}

function pushToCircle(returnedLetter) {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext("2d");
  
  ctx.font = "30px Verdana";
  ctx.fillStyle = "black"; 
  ctx.fillText(returnedLetter, xyCoord[0] - 10 , xyCoord[1] + 10);
  xyCoord.splice(0,2);
}

var el1 = document.getElementById('circles');      
el1.addEventListener('click', storePosition, false); 

var el2 = document.getElementById('letters');      
el2.addEventListener('click', replaceLetters, false); 
