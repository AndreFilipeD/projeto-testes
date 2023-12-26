let bola = document.getElementById('bola') // elemento bola para uso

//Variaveis para ajustar --------------------------

//divisão de força da bola: 1 = rapido, 15 = lento; padrao x=4, y=10
let xdiv = 10
let ydiv = 10 //reduza para que limite de aceleração Y seja mais efetivo
//Posição inicial da bola: padrão x=200, y=400
let x = 200
let y = 600
//Freio da aceleração x baseado na aceleração y: 10 intensa, 200 fraca; padrao=110
let energydist = 110
//Força de arremeço: 1 saitama, 50 andré; padrão=10
let strenght = 10
//limite de aceleração y: 10 molenga, 50 atleta; padrão=20
let ylim = 20
//Elasticidade da bola: 2 hyperelastica , 20 dura; padrão=3
let elastic = 3
//altura do teto: 0 limite da janela; padrão=-200
let teto = -200
//parede esquerda: 0 limite da janela; padrão=0
let paredeesq = 0
//parede direita: 700 limite de teste; padrão=700
let parededir = 1800
//chão: 800 limite de teste; padrão=800
let chao = 800

//Variaveis para não mexer ------------------------

//aceleração 
let yacel = 0 
let xacel = 0
//velocidade arremeço 
let xpower = 0 
let ypower = 0
//tempo em que a bola continua se movendo
let energy = 0
//atualização arremeço
let update = 0
//detecção de coletagem
let pressed = false;

//Inicio do programa ------------------------------

function drag(){pressed = true}//BOLA FOI COLETADA
/*function release(){}*/

window;addEventListener('mouseup', (event) =>{//AO SOLTAR A BOLA...
    if(pressed){
        pressed = false//NÃO ESTÁ MAIS SEGURANDO
        if(update!=0){
            update = 0//LIBERAR 1 ARREMEÇO
        }
    }
})
window.addEventListener('mousemove', (event) => {//EVENTO SEGUIR CURSOR

    if(pressed){//ENQUANTO CURSOR PRESSIONADO:

        bola.style.cursor='grabbing'//MUDANDO CURSOR PARA MÃOZINHA FECHADA

        x = (event.clientX - 25)//PEGANDO POSIÇÃO X DO MOUSE -25 PARA CENTRALIZAR BOLA
        y = (event.clientY - 25)//PEGANDO POSIÇÃO 7 DO MOUSE -25 PARA CENTRALIZAR BOLA

        bola.style.boxShadow='0px 0px 30px #ffffffd7'//BRILHO DA BOLA
        bola.style.border='2px solid #ffffffd7'//CONTORNO AO SEGURAR BOLA
        
    }else{
        bola.style.border='0px',//CONTORNO AO SOLTAR BOLA
        bola.style.cursor='grab'//MUDANDO CURSOR PARA MÃOZINHA ABERTA
    }
    
})

const loop = setInterval((event) => { // LOOP PRINCIPAL
    
    xpower = (x - xpower)/strenght
    ypower = (y - ypower)/strenght

    if(!pressed){
        if(y < chao){ // se não estiver tocando no chão:
            
            // Gerador de arremeço - só acontece 1 vez
            if(update == 0){
                /*window.alert('Y: '+ (-(ypower/2) )+'| X: '+ (xpower/2))*/
                yacel = -(ypower/ydiv) 
                if(yacel < -ylim){
                    yacel = -ylim
                }
                energy = -(yacel) * energydist
                // ADIÇÃO DE ACELERAÇÃO Y ARREMEÇO
                if(xpower>x){
                    xacel = -((xpower/xdiv) + -(energy)/400)
                }else{
                    xacel = ((xpower/xdiv) + -(energy)/400)  
                }
                // ADIÇÃO DE ACELERAÇÃO X ARREMEÇO
            }

            yacel += 0.025 //acresção y de aceleração gravitacional

            // colisão com as paredes
            if(x<paredeesq){xacel = -xacel}else if(x > parededir){xacel = -xacel}
            // colisão com o teto
            if(y<teto){yacel = -yacel} 
            
            y += yacel // atualização de posição y baseado na velocidade
            x += xacel // atualização de posição x baseado na velocidade
            bola.style.boxShadow='0px 15px 15px transparent'
            
        }else{ // se estiver tocando no chão:
            if(yacel < 0.2 && yacel > -0.2){ // se aceleração y for muito baixa:
                yacel = 0 // zere a aceleração
            }
            yacel = -yacel/(elastic/2) // ao pingar, inverta a aceleração y
            y += yacel * elastic     // para subir novamente
        }

        if(xacel > 0){// freio x baseado em atrito do ambiente
            /*xacel -= 0.005*/
            xacel -= xacel/energy
        }else if(xacel < 0){ // se velocidade x diferente de zero, freie
            xacel -= xacel/energy
            /*xacel += 0.005*/

        }

        if(y > 750){// efeito visual, sombra no chão
            /*bola.style.boxShadow='5px 30px 30px #0000004d'*/
            bola.style.boxShadow='5px 30px 30px #835500ea'
        }
    }

    bola.style.top = y + 'px' //incremento do px para manipular CSS
    bola.style.left = x + 'px' //incremento do px para manipular CSS

    if(update == 0){ //Faz com que aconteça 1 unico evento de impulso
        update ++
    }

    /*
    xpower = x - xpower
    ypower = y - ypower
    */
})