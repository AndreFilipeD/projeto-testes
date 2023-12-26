var botao = window.document.getElementById('botao');
var size = 75;

botao.addEventListener("click", crescer);

function crescer(){
    size+=10;
    botao.style='width:'+(size/1.5)+'px;height:'+size+'px;border-radius:'+(size*2)+'px;'
}
