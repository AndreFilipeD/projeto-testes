let slide = 1;
var widthis
var mslider = window.document.getElementById("mainSlider")
window.document.getElementById("sliderbtn1").checked = true

setInterval(function(){nextImage()},5000)// Atualização automatica do Slider.
function clickslide(is){slide = is}//Atualização manual do Slider
function nextImage(){
    if(slide>3){slide=1}else{slide++}//funçao automatica do Slider
    window.document.getElementById("sliderbtn"+slide).checked = true
}

function clickthrow(){
    //window.document.getElementById("mainSlider").src='slides/slidemob.html'
    document.getElementById('elementID').click();
}

function widthResizer(){
    widthis = window.innerWidth
    
    if(widthis>700){
        mslider.src='../slides/slidedes.html'
        window.alert('deskver')
    }else{
        mslider.src='../slides/slidemob.html'
        window.alert('mobver')
    }

}
  // Coleta width da tela ao carregar
  widthResizer()
  
  // Coleta o width da tela ao ser redimensionada
  setInterval(function(){widthResizer()},1000)
  //window.addEventListener('resize', widthResizer)