//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("Para poder realizar o sorteio, é preciso ter três amigos ou mais.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];

  document.getElementById("listaAmigos").style.display = "none";

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;
}

