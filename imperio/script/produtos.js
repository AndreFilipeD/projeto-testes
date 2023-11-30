//window.document.getElementById('showProduct').style="display:none;"

var sliderPage = window.document.getElementById('mainSlider')
var filtro = "none";
var cont = 0
var produtosLoja = [
    //---------------------------------------------
    {indice:0, alt:'Camiseta',
    img:'produtos/roupas_Teste/blusa_exemplo.png',
    nome:'Blusa de exemplo',
    info:'Blusa branca padrão feita de algodão',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'',
    valorAtual:'R$ 39,99',
    categoria:['Camisa']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    nome:'Super conjunto social de casal para festas de exemplo',
    info:'Conjunto social de luxo para eventos de alto nivel',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'R$ 199,90',
    valorAtual:'R$ 129,90',
    categoria:['Camisa','Vestido','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    nome:'Conjunto feminino de exemplo',
    info:'Conjunto de peças feminina para o dia a dia',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'R$ 89,90',
    valorAtual:'R$ 74,49',
    categoria:['Camisa','Vestido']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    nome:'Conjunto masculino de exemplo',
    info:'Conjunto masculino leve e respirável para a prática de esporte',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'R$ 99,90',
    valorAtual:'R$ 64,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    nome:'Conjunto unisex de exemplo',
    info:'Camiseta branca e calça jeans unisex padrão para uso geral',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'R$ 74,99',
    valorAtual:'R$ 69,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Vestido',
    img:'produtos/roupas_Teste/vestido_exemplo.png',
    nome:'Vestido social de exemplo',
    info:'Vestido social embedado em joias para eventos sociais',
    peso:'200g',tamanho:'M',material:'algodão',
    valorAntigo:'',
    valorAtual:'R$ 110,89',
    categoria:['Vestido']}

]//||------||------|| FIM DOS PRODUTOS DA LOJA ||------||------||

function startIndice(){// ATRIBUI O INDICE DE CADA ITEM AUTOMATICAMENTE
    for(c in produtosLoja){
        produtosLoja[c].indice=Number(c)+1}
}startIndice()

function cleanProduct(){// REMOVE TODOS OS PRODUTOS DO SITE PARA ATUALIZAÇÃO
    window.document.querySelector(".shopItens").innerHTML="";cont=0;
}

function loadProduct(filtroSelecionado){// CARREGA E FILTRA PRODUTOS SE NECESSÁRIO
    filtro=filtroSelecionado // LINHA DISPENSAVEL?
    cleanProduct();
    for(c in produtosLoja){
        if(filtro==="none"){
            cont++
            window.document.querySelector(".shopItens").innerHTML+=`<div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})"><img src="${produtosLoja[c].img}" alt="${produtosLoja[c].alt}"><div class='descProduto'><h1 class='nomeProduto'>${produtosLoja[c].nome}</h1><p class='antigoProduto'>${produtosLoja[c].valorAntigo}</p><p class='valorProduto'>${produtosLoja[c].valorAtual}</p></div></div>`

            window.document.querySelector("#msgIntro").innerHTML="Seja bem vindo!"
        }else if(produtosLoja[c].categoria.indexOf(filtro)!=-1){
                cont++
                window.document.querySelector(".shopItens").innerHTML+=`<div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})"><img src="${produtosLoja[c].img}" alt="${produtosLoja[c].alt}"><div class='descProduto'><h1 class='nomeProduto'>${produtosLoja[c].nome}</h1><p class='antigoProduto'>${produtosLoja[c].valorAntigo}</p><p class='valorProduto'>${produtosLoja[c].valorAtual}</p></div></div>`

                window.document.querySelector("#msgIntro").innerHTML=`- Foram encontrado(s) ${cont} item(ns) da categoria '${filtro}'. <a href='#' onclick='loadProduct("none")'>remover filtros</a>`
        }
    }
    if(cont===0){
        window.document.querySelector(".shopItens").innerHTML="<img src='images/icons/saderror.png' alt='nãoencontrado' style='width:48px;padding-top: 100px;'>"
        window.document.querySelector("#msgIntro").innerHTML=`No momento, estamos sem itens da categoria '${filtro}' <a href='#' onclick='loadProduct("none")' style="padding:2px;">remover filtros</a>.`
    }/*else{
        window.document.querySelector("#shopContainer").innerHTML+="Encontrado "+cont+" Produtos da categoria ' "+filtro+" '."
    }*/
}loadProduct("none");

function showProduct(showIs){// APRESENTA PRODUTO SELECIONADO NO MOSTRUÁRIO
    if(showIs === 0){
        window.document.getElementById('showProduct').style="display:none;"
    }else{
        window.document.getElementById('showProduct').style="display:flex;"
        window.document.getElementById('showProduct').innerHTML+=`${showIs}`
    }
}