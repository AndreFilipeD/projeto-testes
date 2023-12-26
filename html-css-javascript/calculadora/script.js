var calcMode = 0 // QUAL VALUE DEVO ADCIONAR A ENTRADA
var valueA = 0 // VALUE DE ENTRADA A
var valueB = 0 // VALUE DE ENTRADA B
var usedOperator = 0 // OPERADORES, 0:n, 1:+, 2:-, 3:*, 4:/

function numberClicked(numberIs){//NUMERO PRESSIONADO
    if(calcMode===0){//CALCULADORA PRIMEIRO VALOR TOTAL
        window.document.querySelector(".calcScreen").innerHTML=numberIs
        valueA = numberIs
        calcMode = 1
    }else if(calcMode===1){//CALCULADORA PRIMEIRO VALOR CONTINUO
        window.document.querySelector(".calcScreen").innerHTML+=numberIs
        valueA = (valueA*10) + numberIs
    }else if(calcMode===2){//CALCULADORA SEGUNDO VALOR CONTINUO
        valueB = (valueB*10) + numberIs
        window.document.querySelector(".calcScreen").innerHTML+=numberIs
    }
}

function restartC(){//RESET GERAL DA CALCULADORA
    valueA = 0
    valueB = 0
    calcMode = 0
    usedOperator = 0
    window.document.querySelector(".calcScreen").innerHTML="0"
}

function operatorButton(operationIs){//OPERADOR PRESSIONADO
    valueB = 0 // resetando valor B
    calcMode = 2 // habilitando contabilização para valor B
    switch(operationIs){//desenhando operador na tela
        case 'add':usedOperator = 1
        window.document.querySelector(".calcScreen").innerHTML+="+"
            break;
        case 'sub':usedOperator = 2
        window.document.querySelector(".calcScreen").innerHTML+="-"
            break;
        case 'mul':usedOperator = 3
        window.document.querySelector(".calcScreen").innerHTML+="*"
            break;
        case 'div':usedOperator = 4
        window.document.querySelector(".calcScreen").innerHTML+="/"
            break;
    }
}

function calcResult(){//REALIZANDO CALCULO MATEMÁTICO
    switch(usedOperator){//REALIZANDO CALCULO MATEMÁTICO
        case 1://CASO OPERADOR SEJA DE SOMA
            valueA = valueA + valueB
            break;
        case 2://CASO OPERADOR SEJA DE SUBTRAÇÃO
            valueA = valueA - valueB
            break;
        case 3://CASO OPERADOR SEJA DE MULTIPLICAÇÃO
            valueA = valueA * valueB
            break;
        case 4://CASO OPERADOR SEJA DE DIVISÃO
            valueA = valueA / valueB
            break;
    }
    window.document.querySelector(".calcScreen").innerHTML=valueA
}

function showResult(){//EXIBIÇÃO DE CALCULO EM TELA
    calcResult()
    window.document.querySelector(".calcScreen").innerHTML=valueA
    calcMode = 1
}