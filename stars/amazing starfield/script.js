var stars = []//Espaço de memória das estrelas

var outfieldMove = 1000 // (100) muito | (1000) pouco
//O quando as estrelas fogem do campo de visão baseado nos angulos de saida
var maxSize = 35 //(10) pequeno | (50) grande
//Tamanho máximo da estrela até que ela suma da tela
var grownFrame = 0.1 //(0.1) pouco | (1) muito
//O quando a estrela cresce por frame
var frameUpdateTime = 100 //(16) Rapido | (200) Lentidão
//Delay de atualização de quadros

var alt = window.innerHeight //Captura de Altura inicial da tela
var larg = window.innerWidth //Captura de Largura inicial da tela
var canvas = window.document.getElementById("starfield")//Coletando Canvas
var ctx = canvas.getContext("2d")//Coletando contexto 2D do Canvas
var canvElement = window.document.getElementById("canvEl")//Coletando Body para atualizar canvas via HTML

function canvaUpdate(){//Atualiza o canvas para a area de exibição do navegador
    alt = window.innerHeight//Atualização altura da tela
    larg = window.innerWidth//Atualização largura da tela
    canvElement.innerHTML='<canvas id="starfield" width="'+larg+'" height="'+alt+'"></canvas>'//Canvas
    canvas = window.document.getElementById("starfield")//Coletando novo Canvas
    ctx = canvas.getContext("2d")//Coletando novo Contexto 2D
}

function forgeStar(){//Forjando Estrelas
    for(let i=0;i<1000;i++){
        let x = Math.random() * larg
        let y = Math.random() * alt
        stars.push({"x":x,"y":y,"mx":(x - (larg/2))/outfieldMove,"my":(y - (larg/2))/outfieldMove, "s":Math.random()*maxSize})
    }
}
forgeStar()//Forjando as Estrelas

function refreshField(){//Atualização das estrelas
        canvaUpdate()
        for(let i=0;i<stars.length;i++){
            /*
            x = Math.floor(Math.random() * larg)
            y = Math.floor(Math.random() * alt)*/
           if(stars[i].s>maxSize){
                stars[i].s=0
                stars[i].x=Math.random() * larg
                stars[i].y=Math.random() * alt
                stars[i].mx=(stars[i].x - (larg/2))/outfieldMove
                stars[i].my=(stars[i].y - (alt/2))/outfieldMove
           }else{
                stars[i].s+=0.1
                stars[i].x+=stars[i].mx * (stars[i].s)*(stars[i].s)
                stars[i].y+=stars[i].my * (stars[i].s)*(stars[i].s)

                ctx.beginPath();//Grafico das estrelas
                ctx.arc(stars[i].x, stars[i].y, stars[i].s, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
           }
            
        }
}

refreshField()
const loop = setInterval((event) => {//Loop de atualização
    refreshField()
},frameUpdateTime)
