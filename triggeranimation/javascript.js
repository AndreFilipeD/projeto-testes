var obj = window.document.querySelector("#block")
var turnm = true

function anim(){
    turnm = !turnm
    if(turnm){
        obj.style="animation-name: turna;"
    }else{
        obj.style="animation-name: turnb;"
    }
}