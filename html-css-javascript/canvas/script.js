var canvas = window.document.getElementById("telateste")
var ctx = canvas.getContext("2d")
var x = 10
//---------------------------------------------------------------
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(x,10,55,50);
//---------------------------------------------------------------
ctx.fillStyle = "rgba(0,0,200,0.5)";
ctx.fillRect(x+30, 30, 55, 50);
//---------------------------------------------------------------
ctx.fillRect(25+100, 25, 100, 100);
ctx.clearRect(45+100, 45, 60, 60);
ctx.strokeRect(50+100, 50, 50, 50);
//---------------------------------------------------------------
ctx.beginPath();
ctx.moveTo(75, 50+100);
ctx.lineTo(100, 75+100);
ctx.lineTo(100, 25+100);
ctx.fill();
//---------------------------------------------------------------
    ctx.beginPath();
    ctx.arc(75+250, 75, 50, 0, Math.PI * 2, true); // Círculo exterior
    ctx.moveTo(110+250, 75);
    ctx.arc(75+250, 75, 35, 0, Math.PI, false); // Boca (sentido horário)
    ctx.moveTo(65+250, 65);
    ctx.arc(60+250, 65, 5, 0, Math.PI * 2, true); // Olho esquerdo
    ctx.moveTo(95+250, 65);
    ctx.arc(90+250, 65, 5, 0, Math.PI * 2, true); // Olho direito
    ctx.stroke();
//---------------------------------------------------------------
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25+300);
    ctx.lineTo(105, 25+300);
    ctx.lineTo(25, 105+300);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125+300);
    ctx.lineTo(125, 45+300);
    ctx.lineTo(45, 125+300);
    ctx.closePath();
    ctx.stroke();
//---------------------------------------------------------------
/*
setInterval(function(){
    

    x++
},200)
*/
//---------------------------------------------------------------

