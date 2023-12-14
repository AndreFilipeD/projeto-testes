var storage = [
    {nome:'foguete',
    peso:100,itemis:0,
    itens:['asa','janela','cone']},
    {nome:'urso',
    peso:200,itemis:0,
    itens:['gravata','algodão']},
    {nome:'carro',
    peso:400,itemis:0,
    itens:['roda','retrovisor','motor','farol']},
    {nome:'heroi',
    peso:125,itemis:0,
    itens:['laser']},
    {nome:'boneca',
    peso:180,itemis:0,
    itens:['pente','vestido','bolsa','maquiagem','espelho']}
]
var stored = []
var counter = 0

function numberChange(){
    counter > 4 ? counter = 0 : counter ++
    window.document.querySelector(".hea").innerHTML="ARRAY OBJECTS TEST<br>pointer: "+counter
    loadToys()
}

function loadToys(){
    window.document.querySelector(".left").innerHTML=`<p>Lenght:${storage.length}</p>`
    for(c in storage){
        window.document.querySelector(".left").innerHTML+=`<div class="leftObject" onclick="addObject(${c})"><strong>Nome: </strong>${storage[c].nome}<br><strong>Peso: </strong>${storage[c].peso}<br><strong>selectedItem:</strong> ${storage[c].itemis}<br><strong>TodosItens: </strong>${storage[c].itens}<br><strong>Resultado: </strong>${storage[c].itens[storage[c].itemis]}</div>`
    }
}
//DESAFIO SUPERADO! DESAFIO SUPERADO! DESAFIO SUPERADO

//Object.assign({},storage[selectedIs])
//Maneira correta de clonar, conforme pode ver em unshift abaixo
//dentro dos {} pode definir novas propriedades para o objeto clonado
//caso necessário, ex: {bateria: 5000}, e o novo objeto clonado terá
//essas propriedades
function addObject(selectedIs){
    stored.unshift(Object.assign({},storage[selectedIs]))
    stored[0].itemis = counter
    window.document.querySelector(".right").innerHTML=`<p>Lenght:${stored.length}</p>`
    for(c in stored){
        window.document.querySelector(".right").innerHTML+=`<div class="rightObject"><strong>Nome: </strong>${stored[c].nome}<br><strong>Peso: </strong>${stored[c].peso}<br><strong>selectedItem:</strong> ${stored[c].itemis}<br><strong>TodosItens: </strong>${stored[c].itens}<br><strong>Resultado: </strong>${stored[c].itens[stored[c].itemis]}</div>`
    }
}

loadToys()