let slide = 1;
window.document.getElementById("sliderbtn1").checked = true

setInterval(function(){
    nextImage()
},5000)

function clickslide(is){
    slide = is
}
function nextImage(){
    if(slide>3){slide=1}else{slide++}
    window.document.getElementById("sliderbtn"+slide).checked = true
}
