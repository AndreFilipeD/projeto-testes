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
    canvElement.innerHTML='<canvas id="starfield" width="'+larg+'" height="'+alt+'"></canvas>'
    canvas = window.document.getElementById("starfield")
    ctx = canvas.getContext("2d")
    //window.alert('Atualizado')
}
//criar o canvas via javascript!
//window.alert("ALTURA:"+alt+"LARGURA"+larg)
function refreshField(){
    for(var i=0; i<(alt*larg)/50; i++){

        if(i===0){canvaUpdate()}

        x = Math.floor(Math.random() * larg)
        y = Math.floor(Math.random() * alt)
        /*
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.strokeStyle = '#ffffff';
        ctx.fill();
        */

        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x+1, y+1)
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    }
}
refreshField()
const loop = setInterval((event) => {
    refreshField()
},16)
