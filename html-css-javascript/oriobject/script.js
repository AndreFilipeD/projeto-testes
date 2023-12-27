let pessoas = []

class person{
    constructor(nome, idade){
        this.name = nome
        this.age = idade
    }
}

function create(){
    pessoas.push(new person(window.document.querySelector('#texti').value, pessoas.length))
    send()
}

function send(){
    window.document.querySelector("#bod").innerHTML=''
    for(c in pessoas){
        window.document.querySelector("#bod").innerHTML+='<h1 class="button">' + pessoas[c].name + ' [' +pessoas[c].age + '] ' + '</h1><hr>'
    }
}

