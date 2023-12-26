//var number = 11968513316 //suporte
var number = 19997597681 //imperio
var texto = encodeURIComponent(`🦒Olá, Império!
Acabei de montar meu carrinho! 💖

  • *Camisa listrada social* - 1 un [R$ ${60}]
  • *Vestido cigana pink* - 1 un [R$ ${120}]
  • *Calça Jeans* - 1 un [R$ ${80}]
  
Fico no aguardo de seu atendimento.`
)
//window.document.querySelector('#zap').setAttribute("href","https://wa.me/?"+number+"text="+texto)
window.document.querySelector('#zap').setAttribute("href","https://api.whatsapp.com/send/?phone="+number+"&text="+texto)