//window.document.getElementById('showProduct').style="display:none;"
var unitMonetaria = "R$ "
var sliderPage = window.document.getElementById('mainSlider')
var filtro = "none";
var cont = 0
var antigoval = 0
var atualval = 0
var produtosLoja = [

    //---------------------------------------------
    {indice:0, alt:'Camiseta',
    img:'produtos/roupas_Teste/blusa_exemplo.png',
    nome:'Blusa de exemplo',
    info:'Blusa branca padrão feita de algodão',
    peso:'198g',tamanho:'M',material:'algodão',
    valorAntigo:'',
    valorAtual:'39,99',
    categoria:['Camisa']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    nome:'Super conjunto social de casal para festas de exemplo',
    info:'Conjunto social de luxo para eventos de alto nivel',
    peso:'853g',tamanho:'M, P, G',material:'algodão, poliester e nanofibras',
    valorAntigo:'199,90',
    valorAtual:'129,90',
    categoria:['Camisa','Vestido','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    nome:'Conjunto feminino de exemplo',
    info:'Conjunto de peças feminina para o dia a dia',
    peso:'378g',tamanho:'M',material:'algodão e poliester',
    valorAntigo:'89,90',
    valorAtual:'74,49',
    categoria:['Camisa','Vestido']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    nome:'Conjunto masculino de exemplo',
    info:'Conjunto masculino leve e respirável para a prática de esporte',
    peso:'328g',tamanho:'M',material:'Poliester',
    valorAntigo:'99,90',
    valorAtual:'64,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Conjunto',
    img:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    nome:'Conjunto unisex de exemplo',
    info:'Camiseta branca e calça jeans unisex padrão para uso geral',
    peso:'521g',tamanho:'M',material:'algodão e Jeans',
    valorAntigo:'74,99',
    valorAtual:'69,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {indice:0, alt:'Vestido',
    img:'produtos/roupas_Teste/vestido_exemplo.png',
    nome:'Vestido social de exemplo',
    info:'Vestido social embedado em joias para eventos sociais',
    peso:'679g',tamanho:'M',material:'nanofibras e zircônio',
    valorAntigo:'9999,00',
    valorAtual:'378,89',
    categoria:['Vestido']}

]//||------||------|| FIM DOS PRODUTOS DA LOJA ||------||------||

function startIndice(){// ATRIBUI O INDICE DE CADA ITEM AUTOMATICAMENTE
    for(c in produtosLoja){
        produtosLoja[c].indice=Number(c)}
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
            window.document.querySelector(".shopItens").innerHTML+=`<div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})"><img src="${produtosLoja[c].img}" alt="${produtosLoja[c].alt}"><div class='descProduto'><h1 class='nomeProduto'>${produtosLoja[c].nome}</h1><p class='antigoProduto'>${Number.parseFloat(produtosLoja[c].valorAntigo) > 0 ? unitMonetaria+produtosLoja[c].valorAntigo : ""}</p><p class='valorProduto'>${unitMonetaria+produtosLoja[c].valorAtual}</p></div></div>`

            window.document.querySelector("#msgIntro").innerHTML="Seja bem vindo!"
        }else if(produtosLoja[c].categoria.indexOf(filtro)!=-1){
                cont++
                window.document.querySelector(".shopItens").innerHTML+=`<div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})"><img src="${produtosLoja[c].img}" alt="${produtosLoja[c].alt}"><div class='descProduto'><h1 class='nomeProduto'>${produtosLoja[c].nome}</h1><p class='antigoProduto'>${Number.parseFloat(produtosLoja[c].valorAntigo) > 0 ? unitMonetaria+produtosLoja[c].valorAntigo : ""}</p><p class='valorProduto'>${unitMonetaria+produtosLoja[c].valorAtual}</p></div></div>`

                window.document.querySelector("#msgIntro").innerHTML=`- Foram encontrado(s) ${cont} item(ns) da categoria '${filtro}'. <a href='#' onclick='loadProduct("none")'>remover filtros</a>`
        }
    }
    if(cont===0){
        window.document.querySelector(".shopItens").innerHTML="<img src='images/icons/saderror.png' alt='nãoencontrado' style='width:48px;padding-top: 100px;'>"
        window.document.querySelector("#msgIntro").innerHTML=`No momento, estamos sem itens da categoria '${filtro}' <a href='#' onclick='loadProduct("none")' style="padding:2px;">remover filtros</a>.`
    }/*else{
        window.document.querySelector("#shopContainer").innerHTML+="Encontrado "+cont+" Produtos da categoria ' "+filtro+" '."
    }*/
}loadProduct("none");// padrão "none" Sem filtro

function showProduct(showIs){// APRESENTA PRODUTO SELECIONADO NO MOSTRUÁRIO
    if(showIs === -1){
        window.document.getElementById('showProduct').style="display:none;"
        window.document.querySelector("#mainSlider").style="display: block;"
    }else{
        window.document.querySelector("#mainSlider").style="display: none;"
        //Rola a tela até o topo
        window.scrollTo(0,0)
        //Habilita visualização do mostruário
        window.document.getElementById('showProduct').style="display:grid;"
        //Atualiza NOME do produto selecionado
        window.document.querySelector(".pshowName").innerHTML=produtosLoja[showIs].nome
        //Atualiza PESO, TAMANHO, MATERIAL e INFORMAÇÃO
        //.pshowCartadd
        //window.document.querySelector(".pshowDef").
        window.document.querySelector(".pshowCartadd").innerHTML=`<strong>Peso:</strong> ${produtosLoja[showIs].peso}<br><strong>Tamanho:</strong> ${produtosLoja[showIs].tamanho}<br><strong>Material:</strong> ${produtosLoja[showIs].material}<br><br><hr><strong>Descrição do produto<br></strong>${produtosLoja[showIs].info}`
        //AtualizaCart -TA UMA BAGUNÇA PROMETO ARRUMAR
        window.document.querySelector(".pshowDef").innerHTML=`<strong class="olderPrice">R$ ${produtosLoja[showIs].valorAntigo}</strong><br><strong class="actualPrice">R$ ${produtosLoja[showIs].valorAtual}</strong><div class="cartButton">Adicionar ao carrinho</div>`
        //Atualiza IMAGEM PRINCIPAL produto selecionado
        window.document.querySelector(".pshowMainimage").setAttribute('src',produtosLoja[showIs].img)
        //Atualiza IMAGENS SEGUNDARIAS prod.selecionado
        window.document.querySelector(".SecimgA").setAttribute('src',produtosLoja[showIs].img)
        window.document.querySelector(".SecimgB").setAttribute('src',produtosLoja[showIs].img)
        window.document.querySelector(".SecimgC").setAttribute('src',produtosLoja[showIs].img)
        //Atualiza DESCONTO PORCENTAGEM produto selecionado
        antigoval = Number.parseFloat(produtosLoja[showIs].valorAntigo)
        atualval = Number.parseFloat(produtosLoja[showIs].valorAtual)
        if(antigoval > atualval){
            window.document.querySelector(".pshowPromo").style="display: absolute;"
            window.document.querySelector(".pshowPromo").innerHTML=`${Math.round(((100/antigoval)*atualval)-100)}% OFF`
        }else{
            window.document.querySelector(".pshowPromo").style="display: none;"
        }
        //Atualiza o preço
        
    }
}