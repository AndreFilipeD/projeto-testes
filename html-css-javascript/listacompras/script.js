var shopList = window.document.querySelector('#right')
var shopItem = []
var shopCounter = 0
var seletor
shopItem[shopCounter] = window.document.createElement('div')

shopItem.setAttribute('class','shopject')

function create(item){
 switch(item){
    case 0:
        shopCounter++
        shopItem[shopCounter] = window.document.createElement('div')
        shopItem[shopCounter].setAttribute('class','shopject')
        shopItem[shopCounter].innerHTML="item "+shopCounter+" criado!!"
        shopList.appendChild(shopItem[shopCounter])
        break;
    case 1:
        shopItem[shopCounter].parentNode.removeChild(shopItem[shopCounter])
        shopCounter--
        break;
    }
}