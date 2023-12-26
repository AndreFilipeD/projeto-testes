var icon = window.document.querySelector('.intbox')

icon.style.transform='rotate(45deg)'

function testy(){
    window.alert(window.scrollY)
}

const loop = setInterval(()=>{
    icon.style.transform= 'rotate('+window.scrollY+'deg)'
    /*icon.transition = 'transform: rotate(45deg);'*/
})

