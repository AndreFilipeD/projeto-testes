let slide = 1;
var widthis;
var mslider = window.document.getElementById("mainSlider");
window.document.getElementById("sliderbtn1").checked = true;

var sliderloop = setInterval(function(){nextImage()}, 6000)// Atualização automatica do Slider.

function clickslide(is){//Atualização manual do Slider
  slide = is
  clearInterval(sliderloop);/*Reinicializador de tempo após clicar manualmente*/
  sliderloop = setInterval(function(){nextImage()}, 6000);
}

function nextImage(){
    if(slide>3){slide=1}else{slide++}//funçao automatica do Slider
    window.document.getElementById("sliderbtn"+slide).checked = true;
}

function clickthrow(valbutton){
  if(valbutton===0){
    window.document.getElementById("htmlSet").style.overflowY = "scroll";
    window.document.querySelector(".shadowBox").style="display: none;"
    window.document.querySelector(".left_menuBar").style="animation-name: menuClose;"
    /*"display: none;"*/
  }else if(valbutton===1){
    window.document.getElementById("htmlSet").style.overflowY = "hidden";
    window.document.querySelector(".shadowBox").style="display: absolute;"
    window.document.querySelector(".left_menuBar").style="animation-name: menuOpen;"/*"display: absolute;margin-left: 100px;"*/
  }
    /*window.document.getElementById("mainSlider").src='slides/slidemob.html'
    document.getElementById('elementID').click();*/
}

function widthResizer(){
    
}
  // Coleta width da tela ao carregar
  widthResizer()
  
  // Coleta o width da tela ao ser redimensionada
window.addEventListener('resize', widthResizer)