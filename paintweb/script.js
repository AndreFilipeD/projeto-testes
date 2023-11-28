var canvas = window.document.querySelector("#canvasArea")
var cpx = canvas.getContext("2d")
var e = window.event;
var x = e.clientX;
var y = e.clientY
var mousePosText = window.document.querySelector("#txtis")
var mousePos={x:0,y:0}
    
window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    mousePosText.innerHTML = `(${mousePos.x}, ${mousePos.y})`;
});

function drawn(){

    cpx.beginPath()
    cpx.moveTo(x,y)

    cpx.stroke()
}