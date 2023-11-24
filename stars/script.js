var x = 0
var y = 0
var stars = []
var alt = window.innerHeight
var larg = window.innerWidth
var canvas = window.document.getElementById("starfield")
var ctx = canvas.getContext("2d")
var canvElement = window.document.getElementById("canvEl")

function canvaUpdate(){
    alt = window.innerHeight
    larg = window.innerWidth
    ("starfield")
    canvElement.innerHTML='<canvas id="starfield" width="'+larg+'" height="'+alt+'"></canvas>'
    canvas = window.document.getElementById("starfield")
    ctx = canvas.getContext("2d")
    window.alert('Atualizado')
}
//criar o canvas via javascript!
//window.alert("ALTURA:"+alt+"LARGURA"+larg)

for(var i=0; i<30000; i++){

    if(i===0){canvaUpdate()}

    x = Math.floor(Math.random() * larg)
    y = Math.floor(Math.random() * alt)
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x+1, y+1)
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}
