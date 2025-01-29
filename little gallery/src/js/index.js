/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
 -passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
 -passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
  -passo 3 - fazer aparecer o próximo cartão da lista
  - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
 - passo 1 -dar um jeito de pegar o elemento HTML da seta voltar
 - passo 2 -dar um jeito de identificar o clique do usuário na seta voltar
 - passo 3 - fazer aparecer o cartão anterior da lista
  - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const pinturas = document.querySelectorAll(".pintura");
let pinturaAtual = 0;

//-passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  if (pinturaAtual === pinturas.length - 1) return;

  //- passo 4 - buscar o cartão que esta selecionado e esconder
  esconderPinturaSelecionado();

  // -passo 3 - fazer aparecer o próximo cartão da lista
  pinturaAtual++;
  mostrarPintura(pinturaAtual);
});

btnVoltar.addEventListener("click", function () {
  if (pinturaAtual === 0) return;

  esconderPinturaSelecionado();

  pinturaAtual--;
  mostrarPintura(pinturaAtual);
});

function mostrarPintura(cartaoAtual) {
  pinturas[pinturaAtual].classList.add("selecionado");
}

function esconderPinturaSelecionado() {
  const pinturaSelecionado = document.querySelector(".selecionado");
  pinturaSelecionado.classList.remove("selecionado");
}
