// https://jsonplaceholder.typicode.com/posts
let cont = 0;
window.document.querySelector("#update").addEventListener('click',()=>{
    updateContent()
})

function updateContent(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
            return response.json()
    })
    .then((data)=>{
        cont = 0
        window.document.querySelector("#space").innerHTML=""
        for(c in data){
            window.document.querySelector("#space").innerHTML+=`<div class="element">Titulo: ${data[c].title}|ID:${data[c].id}|USERID:${data[c].userId}|BODY:${data[c].body}</div>`
            cont++
        }window.document.querySelector("#update").innerHTML=`Encontrado ${cont} Arquivos.`;
    }).catch(()=>{
        window.alert('Algo de errado não esta certo');
    }).finally(()=>{
        window.alert('Fim do processo.');
    })
}