var xyCoord = [];

function storePosition(event) {                
  x = event.pageX;                      
  y = event.pageY;
  xyCoord.push(x);
  xyCoord.push(y);
  // console.log(xyCoord);
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

function displayLetters() {
  var entryChars = document.getElementById('letters').value;
  console.log(entryChars)
}

function replaceLetters() {
  var entryChars = document.getElementById('letters').value;
  if(entryChars === '') {
    console.log('first click');
  } else {
  var letterArray = entryChars.split('')
  returnedLetter = letterArray.shift();

  var text = document.getElementById('letters').value;  
  text = text.substr(1);
  document.getElementById('letters').value = text;

  pushToCircle(returnedLetter);
  }
  // console.log(returnedLetter);
  // console.log(letterArray);
  
}

function pushToCircle(returnedLetter) {
  console.log(returnedLetter);

  var c = document.getElementById('myCanvas');
  var ctx = c.getContext("2d");
  ctx.font = "30px Verdana black";
  ctx.fillStyle = "black"; 
  ctx.fillText(returnedLetter, 100, 100);
}

var el = document.getElementById('circles');      
el.addEventListener('click', storePosition, false); 

var eln = document.getElementById('letters');      
eln.addEventListener('keyup', displayLetters, false); 

var elb = document.getElementById('letters');      
elb.addEventListener('click', replaceLetters, false); 