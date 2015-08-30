$(function() {

  var xyCoord = [];
  var canvas = document.getElementById('myCanvas');

  function createCircle() {
    var context = canvas.getContext('2d');
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
    var ctx = canvas.getContext("2d");
    
    ctx.font = "30px Verdana";
    ctx.fillStyle = "black"; 
    ctx.fillText(returnedLetter, xyCoord[0] - 10 , xyCoord[1] + 10);
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