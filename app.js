const amigos = [];

function adicionarAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.value;

    if(nome === ""){
        alert("Por Favor, insira um Nome!");
        return;
    }

    amigos.push(nome);

    const listaAmigos = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nome;
    item.className = "name-item";
    listaAmigos.appendChild(item);

    input.value = "";
    input.focus();
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("A lista está vazia. Adicione um nome.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class= "result-item"> O Amigo sorteado é: <strong>${amigoSorteado}</strong></li>`
}