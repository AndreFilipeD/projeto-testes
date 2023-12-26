var bacor = window.document.querySelector("#bag")
var subta = window.document.querySelector(".titleb")
var subtb = window.document.querySelector(".titled")
var subtc = window.document.querySelector(".titlef")
var girafea = window.document.querySelector("#imagea")
var girafeb = window.document.querySelector("#imageb")
var girafec = window.document.querySelector("#imagec")
var bora = window.document.querySelector(".bordaa")
var borb = window.document.querySelector(".bordab")
var borc = window.document.querySelector(".bordac")

var selcor = window.document.querySelector("#ichange").value
var selgicor = window.document.querySelector("#igiracolor").value
var selgisat = window.document.querySelector("#igirasat").value
var selgibri = window.document.querySelector("#igirabri").value
var selbor = window.document.querySelector("#bordaset").value

var circ = window.document.querySelector("#circle")
var hori = window.document.querySelector("#horiz")
var vert = window.document.querySelector("#vertic")


function aplicor(){
    selcor = window.document.querySelector("#ichange").value
    selgicor = window.document.querySelector("#igiracolor").value
    selgisat = window.document.querySelector("#igirasat").value
    selgibri = window.document.querySelector("#igirabri").value
    selbor = window.document.querySelector("#bordaset").value
    applyChanges()
}

function displate(n){
    switch(n){
        case 1:
            circ.style="display:block"
            vert.style="display:none"
            hori.style="display:none"
            break;
        case 2:
            circ.style="display:none"
            vert.style="display:block"
            hori.style="display:none"
            break;
        case 3:
            circ.style="display:none"
            vert.style="display:none"
            hori.style="display:block"
            break;
    }
}

function reset(){
    displate(1)
    selcor='#883636';
    selgicor='0';
    selgisat='100';
    selgibri='100';
    selbor='6';
    applyChanges()
}

function applyChanges(){
    /*window.alert('Selcor:'+selcor+'selgicor:'+selgicor+'selgisat:'+selgisat+'selgibri:'+selgibri) DEBUG*/
    bacor.style='background-color:'+selcor+';'
    girafea.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    girafeb.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    girafec.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    subta.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    subtb.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    subtc.style="filter: brightness("+selgibri+"%) saturate("+selgisat+"%) hue-rotate("+selgicor+"deg);"
    bora.style="border:"+(selbor-1)+"px dotted black;"
    borb.style="border-top:"+(selbor-2)+"px dotted black;border-bottom:"+(selbor-2)+"px dotted black;"
    borc.style="border-top:"+(selbor-2)+"px dotted black;border-bottom:"+(selbor-2)+"px dotted black;"
}
