var slot = [0,0,0,0,0,0,0,0,0] // TABULEIRO
var place // ESPAÇO SELECIONADO DO TABULEIRO
var turn = true // ALTERNADOR DE TURNOS
var win = false // VERIFICADOR DE VITÓRIA OCORRIDA
var title = window.document.getElementById('title') // TITULO PARA MANIPULAÇÃO
var cont = 0 // CONTADOR DE TURNOS PARA DAR EMPATE

function selected(n){// FUNÇÃO LOGICA DO JOGO - BASEADA EM TURNOS DE CLIQUES

        // ATRIBUIÇÃO DE ESPAÇO DO TABULEIRO NA VARIAVEL PLACE PARA MANIPULAÇÃO

        if(n==0){place = window.document.querySelector('div#a > p')}
        else if(n==1){place = window.document.querySelector('div#b > p')}
        else if(n==2){place = window.document.querySelector('div#c > p')}
        else if(n==3){place = window.document.querySelector('div#d > p')}
        else if(n==4){place = window.document.querySelector('div#e > p')}
        else if(n==5){place = window.document.querySelector('div#f > p')}
        else if(n==6){place = window.document.querySelector('div#g > p')}
        else if(n==7){place = window.document.querySelector('div#h > p')}
        else if(n==8){place = window.document.querySelector('div#i > p')}

        // RESTART AUTOMATICO DO JOGO APÓS ACABAR

        if(win==true){
            slot = [0,0,0,0,0,0,0,0,0]// zerando tabuleiro
            win=false
            cont = 0
            title.innerHTML = 'tictactoe'// voltando ao titulo normal
            title.style.color='rgb(22, 236, 111)'
            for(c in slot){// percorrendo cada espaço e limpando o "X" e "O"
                restart(c)
                place.innerHTML = '.'
                place.style.color='transparent'
            }

            // CONTROLADOR DE REGRAS E VISUAIS

        }else{
            if(place.innerHTML!='.'){// VERIFCAÇÃO DE ESPAÇO OCUPADO + ALERTA
                window.alert('[ERRO] Espaço já selecionado.')
            } else{
                cont++
                if(turn){//VEZ DO JOGADOR X
                    slot[n] = 1
                    title.innerHTML = 'tictactoe: O'
                    title.style.color = 'rgb(0, 247, 255)'
                    place.innerHTML = 'X'
                    place.style.color='rgb(22, 236, 111)'
                    turn = false
                }else{// ALTERNADOR DE TURNO + ATUALIZAÇÃO VISUAL DO JOGO
                    slot[n] = 2
                    title.innerHTML = 'tictactoe: X'
                    title.style.color = 'rgb(22, 236, 111)'
                    place.innerHTML = 'O'
                    place.style.color='rgb(0, 247, 255)'
                    turn = true
                }//VEZ DO JOGADOR O
            }
        }

        // VERIFIDOR DE VITÓRIA

        // VITORIA POR LINHAS HORIZONTAIS
        if((slot[0]==1 && slot[1] == 1 && slot[2] == 1)||(slot[0]==2 && slot[1] == 2 && slot[2] == 2)){
            win=true
        }else if((slot[3]==1 && slot[4] == 1 && slot[5] == 1)||(slot[3]==2 && slot[4] == 2 && slot[5] == 2)){
            win=true
        }else if((slot[6]==1 && slot[7] == 1 && slot[8] == 1)||(slot[6]==2 && slot[7] == 2 && slot[8] == 2)){
            win=true
        }// VITORIA POR LINHAS VERTICAIS
        else if((slot[0]==1 && slot[3] == 1 && slot[6] == 1)||(slot[0]==2 && slot[3] == 2 && slot[6] == 2)){
            win=true
        }else if((slot[1]==1 && slot[4] == 1 && slot[7] == 1)||(slot[1]==2 && slot[4] == 2 && slot[7] == 2)){
            win=true
        }else if((slot[2]==1 && slot[5] == 1 && slot[8] == 1)||(slot[2]==2 && slot[5] == 2 && slot[8] == 2)){
            win=true
        }// VITORIA POR LINHAS DIAGONAIS
        else if((slot[0]==1 && slot[4] == 1 && slot[8] == 1)||(slot[0]==2 && slot[4] == 2 && slot[8] == 2)){
            win=true
        }else if((slot[2]==1 && slot[4] == 1 && slot[6] == 1)||(slot[2]==2 && slot[4] == 2 && slot[6] == 2)){
            win=true
        }

        if(win){// ATUALIZAÇÃO VISUAL DE VITÓRIA
            if(turn){
                title.innerHTML = 'O VENCEU'
                title.style.color = 'rgb(0, 247, 255)'
            }else{
                title.innerHTML = 'X VENCEU'
                title.style.color = 'rgb(22, 236, 111)'
            }
        }else if(cont == 9){
            title.innerHTML = 'EMPATE!'
            title.style.color = 'rgb(255, 255, 255)'
            win = true
        }
}

function restart(n){// FUNÇÃO QUE AUXILIA NA LIMPEZA DOS BLOCOS VISUAIS PARA REJOGAR
    if(n==0){place = window.document.querySelector('div#a > p')}
    else if(n==1){place = window.document.querySelector('div#b > p')}
    else if(n==2){place = window.document.querySelector('div#c > p')}
    else if(n==3){place = window.document.querySelector('div#d > p')}
    else if(n==4){place = window.document.querySelector('div#e > p')}
    else if(n==5){place = window.document.querySelector('div#f > p')}
    else if(n==6){place = window.document.querySelector('div#g > p')}
    else if(n==7){place = window.document.querySelector('div#h > p')}
    else if(n==8){place = window.document.querySelector('div#i > p')}
}//FIM DO PROGRAMA - 109 LINHAS.