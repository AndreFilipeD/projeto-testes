let pessoas = []

class person{
    age = 10
    steps = 0

    constructor(nome){
        this.name = nome
    }

    takeAstep(){
        this.steps++
    }
    
}

function create(){
    pessoas.push(new person(window.document.querySelector('#texti').value));
    send();
}

function send(){
    pessoas[0].takeAstep(); //aumenta steps 1 pessoa

    window.document.querySelector("#bod").innerHTML=''
    for(c in pessoas){
        window.document.querySelector("#bod").innerHTML+='<h1 class="button">' + pessoas[c].name + ' [' +pessoas[c].steps + '] ' + 'age: '+pessoas[c].age+' ||</h1><hr>';
    }
}

