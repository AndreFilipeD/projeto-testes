var run = false

function clicar(){
    if(!run){
        run = true
        var sec = Number(window.document.getElementById('txtime').value)
        var res = window.document.querySelector('p#res')
        var cont = sec
        if(sec > 0){
            clearInterval(interval)
            res.innerHTML = cont + 's'

            var interval = setInterval(function(){
                cont--
                res.innerHTML = cont + 's'
            },1000)
            
            setTimeout(function(){
                clearInterval(interval)
                res.innerHTML = 0
                run = false
            },sec*1000)
        } else {
            window.alert('[ERRO] Valor negativo ou vazio, tente novamente.')
        }
    }
}