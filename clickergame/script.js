var points = 0
var clickpower = 1
var priceclickpower = 10;
var show = window.document.querySelector(".message")
var clickpowerbutton = window.document.querySelector(".clickpowerup")

function take(){
    points+=clickpower
    show.innerHTML=points
}

function upgradeclickpower(){
    if(points >= priceclickpower){
        points-=priceclickpower
        priceclickpower = (priceclickpower+2) * 2
        clickpowerbutton.innerHTML="Upgrade click "+priceclickpower
        show.innerHTML=points
        clickpower++
    }
}