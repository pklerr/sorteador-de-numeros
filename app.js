function sortear() {
  let sorteados = [];
  let numero;

  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let intervalo = ate - de + 1;

  if (de > ate) {
    alert(
      'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'
    );
    return;
  }

  if (quantidade > intervalo) {
    alert(
      'Campo "Quantidade de números" deve ser inferior ao intervalo de números. Verifique!'
    );
    return;
  }

  for (i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  alteraStatusDoBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraStatusDoBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  alteraStatusDoBotao();
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
}
