var produtosLoja = [
    //---------------------------------------------
    {img:'produtos/roupas_Teste/blusa_exemplo.png',
    alt:'Camiseta',
    nome:'Blusa de exemplo',
    valorAntigo:'',
    valorAtual:'R$ 39,99'},
    //---------------------------------------------
    {img:'produtos/roupas_Teste/blusa_exemplo.png',
    alt:'Camiseta',
    nome:'Camiseta Profissional',
    valorAntigo:'R$ 299,90',
    valorAtual:'R$ 159,90'}
]

    

function loadProduct(){
    for(c in produtosLoja){
        window.document.querySelector(".shopItens").innerHTML+="<div class='shopProduct'><img src='"+produtosLoja[c].img+"' alt='"+produtosLoja[c].alt+"'><div class='descProduto'><h1 class='nomeProduto'>"+produtosLoja[c].nome+"</h1><p class='antigoProduto'>"+produtosLoja[c].valorAntigo+"</p><p class='valorProduto'>"+produtosLoja[c].valorAtual+"</p></div></div>"
    }
}

loadProduct()