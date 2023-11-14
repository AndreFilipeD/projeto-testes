var conteuda = window.document.querySelector('.a')
var conteudb = window.document.querySelector('.b')
var conteudc = window.document.querySelector('.c')
var conteudd = window.document.querySelector('.d')
var cleaner
var select = 1

function start(){
    conteudb.style='display: none'
    conteudc.style='display: none'
    conteudd.style='display: none'
    clean()
}
function conta(){
    conteuda.style='display: block'
    conteudb.style='display: none'
    conteudc.style='display: none'
    conteudd.style='display: none'
    select = 1
    clean()
}
function contb(){
    conteuda.style='display: none'
    conteudb.style='display: block'
    conteudc.style='display: none'
    conteudd.style='display: none'
    select = 2
    clean()
}
function contc(){
    conteuda.style='display: none'
    conteudb.style='display: none'
    conteudc.style='display: block'
    conteudd.style='display: none'
    select = 3
    clean()
}
function contd(){
    conteuda.style='display: none'
    conteudb.style='display: none'
    conteudc.style='display: none'
    conteudd.style='display: block'
    select = 4
    clean()
}

function clean(){
    cleaner = window.document.querySelector('.one')
    cleaner.style='background-color: transparent'
    cleaner = window.document.querySelector('.two')
    cleaner.style='background-color: transparent'
    cleaner = window.document.querySelector('.three')
    cleaner.style='background-color: transparent'
    cleaner = window.document.querySelector('.four')
    cleaner.style='background-color: transparent'
    if(select==1){
        cleaner = window.document.querySelector('.one')
    }else if(select==2){
        cleaner = window.document.querySelector('.two')
    }else if(select==3){
        cleaner = window.document.querySelector('.three')
    }else{
        cleaner = window.document.querySelector('.four')
    }
    cleaner.style='background-color: var(--selected)'
}