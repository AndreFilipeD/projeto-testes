var shopList = window.document.querySelector('#right')
var shopItem = []
var shopCounter = 0
var clone
shopItem[shopCounter] = window.document.createElement('div')

shopItem.setAttribute('class','shopject')

function create(item){
 switch(item){
    case 0:
        shopItem[shopCounter] = window.document.createElement('div')
        shopItem[shopCounter].setAttribute('class','shopject')
        shopItem[shopCounter].innerHTML="item "+shopCounter+" criado!!"
        shopList.appendChild(shopItem[shopCounter])
        shopCounter++
        break;
    case 1:
        clone = window.document.querySelector('.applet').cloneNode(true)
        shopList.appendChild(clone)
        shopCounter++
}
}