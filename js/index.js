let arrAcessorio = []
let arrJogos = []
let arrConsoles = []

function listaVitrine(data) {
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].tag.length; j++)
            if (data[i].tag[j] == "Acessorios") {
            arrAcessorio.push(data[i])
            } else if (data[i].tag[j] == "Jogos") {
                arrJogos.push(data[i])
            } else if (data[i].tag[j] == "Console") {
                arrConsoles.push(data[i])
        }
    }
}
let product1 = document.querySelector('.product-1');
let product2 = document.querySelector('.product-2');
let product3 = document.querySelector('.product-3');


function adicionaCard(lista, section){
    for (let i = 0; i < lista.length; i++){
        
    }
}





listaVitrine(data)
console.log(arrAcessorio)
console.log(arrJogos)
console.log(arrConsoles)
