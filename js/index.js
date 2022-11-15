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

listaVitrine(data)
console.log(arrAcessorio)
console.log(arrJogos)
console.log(arrConsoles)


let product1 = document.querySelector('.products-1');
let product2 = document.querySelector('.products-2');
let product3 = document.querySelector('.products-3');

for (let i = 0; i < arrAcessorio.length; i++){
    let liDocumento = document.createElement('li');
    liDocumento.classList.add('card');

    let imagemProduto = document.createElement('img')
    imagemProduto.src = `${arrAcessorio[i].img}`

    let pTag = document.createElement('p');
    pTag.innerHTML = `${arrAcessorio[i].tag[0]}`
    pTag.classList.add('tag');

    let titulo3 = document.createElement('h3')
    titulo3.innerText = `${arrAcessorio[i].nameItem}`
    console.log(titulo3)

    let descricao = document.createElement('p');
    descricao.innerText = `${arrAcessorio[i].description}`
    
    let valor = document.createElement('p');
    valor.innerText = `R$ ${arrAcessorio[i].value.toFixed(2)}`

    let addcarinho = document.createElement('a');
    addcarinho.innerText = `${arrAcessorio[i].addCart}`

    liDocumento.append(imagemProduto ,pTag, titulo3, descricao, valor, addcarinho);

    product1.appendChild(liDocumento)
}

for (let i = 0; i < arrJogos.length; i++){
    let liDocumento = document.createElement('li');
    liDocumento.classList.add('card');

    let imagemProduto = document.createElement('img')
    imagemProduto.src = `${arrJogos[i].img}`

    let pTag = document.createElement('p');
    pTag.innerHTML = `${arrJogos[i].tag[0]}`
    pTag.classList.add('tag');

    let titulo3 = document.createElement('h3')
    titulo3.innerText = `${arrJogos[i].nameItem}`
    console.log(titulo3)

    let descricao = document.createElement('p');
    descricao.innerText = `${arrJogos[i].description}`
    
    let valor = document.createElement('p');
    valor.innerText = `R$ ${arrAcessorio[i].value.toFixed(2)}`

    let addcarinho = document.createElement('a');
    addcarinho.innerText = `${arrJogos[i].addCart}`

    liDocumento.append(imagemProduto ,pTag, titulo3, descricao, valor, addcarinho);

    product2.appendChild(liDocumento)
}





