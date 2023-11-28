var produtosLoja = [
    //---------------------------------------------
    {img:'produtos/roupas_Teste/blusa_exemplo.png',
    alt:'Camiseta',
    nome:'Blusa de exemplo',
    valorAntigo:'',
    valorAtual:'R$ 39,99'}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    alt:'Conjunto',
    nome:'Super conjunto social de casal para festas de exemplo',
    valorAntigo:'R$ 199,90',
    valorAtual:'R$ 129,90'}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto feminino de exemplo',
    valorAntigo:'R$ 89,90',
    valorAtual:'R$ 74,49'}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto masculino de exemplo',
    valorAntigo:'R$ 99,90',
    valorAtual:'R$ 64,90'}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    alt:'Conjunto',
    nome:'Conjunto unisex de exemplo',
    valorAntigo:'R$ 74,99',
    valorAtual:'R$ 69,90'}
    ,//---------------------------------------------
    {img:'produtos/roupas_Teste/vestido_exemplo.png',
    alt:'Vestido',
    nome:'Vestido social de exemplo',
    valorAntigo:'',
    valorAtual:'R$ 127,89'}
]//||------||------|| FIM DOS PRODUTOS DA LOJA ||------||------||

    

function loadProduct(){
    for(c in produtosLoja){
        window.document.querySelector(".shopItens").innerHTML+="<div class='shopProduct'><img src='"+produtosLoja[c].img+"' alt='"+produtosLoja[c].alt+"'><div class='descProduto'><h1 class='nomeProduto'>"+produtosLoja[c].nome+"</h1><p class='antigoProduto'>"+produtosLoja[c].valorAntigo+"</p><p class='valorProduto'>"+produtosLoja[c].valorAtual+"</p></div></div>"
    }
}

loadProduct()