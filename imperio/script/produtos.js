var filtro = "Vestido";
var cont = 0
var produtosLoja = [
    //---------------------------------------------
    {img:'produtos/roupas_Teste/blusa_exemplo.png',
    alt:'Camiseta',
    nome:'Blusa de exemplo',
    info:'Blusa branca padrão feita de algodão',
    valorAntigo:'',
    valorAtual:'R$ 39,99',
    categoria:['Camisa']}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    alt:'Conjunto',
    nome:'Super conjunto social de casal para festas de exemplo',
    info:'Conjunto social de luxo para eventos de alto nivel',
    valorAntigo:'R$ 199,90',
    valorAtual:'R$ 129,90',
    categoria:['Camisa','Vestido','Calça']}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto feminino de exemplo',
    info:'Conjunto de peças feminina para o dia a dia',
    valorAntigo:'R$ 89,90',
    valorAtual:'R$ 74,49',
    categoria:['Camisa','Vestido']}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto masculino de exemplo',
    info:'Conjunto masculino leve e respirável para a prática de esporte',
    valorAntigo:'R$ 99,90',
    valorAtual:'R$ 64,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto unisex de exemplo',
    info:'Camiseta branca e calça jeans unisex padrão para uso geral',
    valorAntigo:'R$ 74,99',
    valorAtual:'R$ 69,90',
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/vestido_exemplo.png',
    alt:'Vestido',
    nome:'Vestido social de exemplo',
    info:'Vestido social embedado em joias para eventos sociais',
    valorAntigo:'',
    valorAtual:'R$ 127,89',
    categoria:['Vestido']}

]//||------||------|| FIM DOS PRODUTOS DA LOJA ||------||------||
function cleanProduct(){
    window.document.querySelector(".shopItens").innerHTML="";cont=0;
}

function loadProduct(filtroSelecionado){
    filtro=filtroSelecionado
    cleanProduct();
    for(c in produtosLoja){
        if(filtro==="none"){
            cont++
            window.document.querySelector(".shopItens").innerHTML+="<div class='shopProduct'><img src='"+produtosLoja[c].img+"' alt='"+produtosLoja[c].alt+"'><div class='descProduto'><h1 class='nomeProduto'>"+produtosLoja[c].nome+"</h1><p class='antigoProduto'>"+produtosLoja[c].valorAntigo+"</p><p class='valorProduto'>"+produtosLoja[c].valorAtual+"</p></div></div>"

            window.document.querySelector("#msgIntro").innerHTML="Seja bem vindo!"
        }else{
            //produtosLoja[c].categoria===filtro
            if(produtosLoja[c].categoria.indexOf(filtro)!=-1){
                cont++
                window.document.querySelector(".shopItens").innerHTML+="<div class='shopProduct'><img src='"+produtosLoja[c].img+"' alt='"+produtosLoja[c].alt+"'><div class='descProduto'><h1 class='nomeProduto'>"+produtosLoja[c].nome+"</h1><p class='antigoProduto'>"+produtosLoja[c].valorAntigo+"</p><p class='valorProduto'>"+produtosLoja[c].valorAtual+"</p></div></div>"

                window.document.querySelector("#msgIntro").innerHTML=`- Foram encontrado(s) ${cont} item(ns) da categoria '${filtro}'. <a href='#' onclick='loadProduct("none")'>remover filtros</a>`
            }
        }//
    }
    if(cont===0){
        window.document.querySelector(".shopItens").innerHTML="<img src='images/icons/saderror.png' alt='nãoencontrado' style='width:48px;padding-top: 100px;'>"
        window.document.querySelector("#msgIntro").innerHTML=`No momento, estamos sem itens da categoria '${filtro}' <a href='#' onclick='loadProduct("none")'>remover filtros</a>.`
    }/*else{
        window.document.querySelector("#shopContainer").innerHTML+="Encontrado "+cont+" Produtos da categoria ' "+filtro+" '."
    }*/
}loadProduct("none");
