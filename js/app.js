$(function() {

  var xyCoord = [];
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  function createCircle() {    
    var radius = 40;
    
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'coral';
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.fill();
    context.stroke();
  }

  function pushToCircle(returnedLetter) {
    context.font = "30px Verdana";
    context.fillStyle = "black"; 
    context.fillText(returnedLetter, xyCoord[0] - 10 , xyCoord[1] + 10);
    xyCoord.splice(0,2);
  }

  $('#circles').on('click', function(e) {
    x = e.pageX;                      
    y = e.pageY;
    xyCoord.push(x, y);
    createCircle();
  });
     
  $('#letters').on('click', function() {
    var formLetters = document.getElementById('letters').value;
    var letterArray = formLetters.split('');
    
    if(formLetters !== '') {
      returnedLetter = letterArray.shift();
      formLetters = formLetters.substr(1);
      document.getElementById('letters').value = formLetters;
      pushToCircle(returnedLetter);
    };
  });    
});