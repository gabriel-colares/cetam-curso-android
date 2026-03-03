// ==========================================================
// Aula 04 — Exercícios (condicionais e laços)
// Como usar:
// - Abra o index.html no navegador
// - Escolha um exercício no prompt
// - Use o Console (F12) para ver console.log()
// ==========================================================

const exercicio = prompt(
  "Aula 04 — Escolha um exercício:\n" +
    "1) Ano bissexto\n" +
    "2) IMC\n" +
    "3) Soma dos pares (0 a 1000)\n" +
    "\n" +
    "Digite 1, 2 ou 3:"
);

// ==========================================================
// EXERCÍCIO 01 — Ano bissexto
// Regras:
// - Divisível por 400: é bissexto
// - OU divisível por 4 e NÃO divisível por 100: é bissexto
// ==========================================================
if (exercicio === "1") {
  const anoTexto = prompt("Digite um ano:");

  if (typeof anoTexto === "string") {
    const ano = Number(anoTexto);

    if (ano !== ano) {
      alert("Ano inválido. Digite um número.");
    } else {
      const ehBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);

      if (ehBissexto) {
        alert("O ano " + ano + " é bissexto!");
      } else {
        alert("O ano " + ano + " não é bissexto!");
      }
    }
  }
}

// ==========================================================
// EXERCÍCIO 02 — Calcular IMC
// Fórmula: peso / (altura * altura)
// Classificação:
// - < 18.5: Abaixo do peso
// - < 24.9: Normal
// - < 29.9: Sobrepeso
// - >= 30: Obesidade
// ==========================================================
else if (exercicio === "2") {
  const pesoTexto = prompt("Informe seu peso (kg):");
  const alturaTexto = prompt("Informe sua altura (m):");

  if (typeof pesoTexto === "string" && typeof alturaTexto === "string") {
    const peso = Number(pesoTexto);
    const altura = Number(alturaTexto);

    if (peso !== peso || altura !== altura) {
      alert("Valores inválidos. Digite apenas números.");
    } else if (altura <= 0) {
      alert("Altura inválida. A altura deve ser maior que 0.");
    } else {
      const imc = peso / (altura * altura);

      let classificacao = "";
      if (imc < 18.5) classificacao = "Abaixo do peso";
      else if (imc < 24.9) classificacao = "Normal";
      else if (imc < 29.9) classificacao = "Sobrepeso";
      else classificacao = "Obesidade";

      alert("Seu IMC é: " + imc.toFixed(2));
      alert("Classificação: " + classificacao);
    }
  }
}

// ==========================================================
// EXERCÍCIO 03 — Soma dos pares (0 a 1000)
// Objetivo:
// - Percorrer de 0 até 1000 com for
// - Somar apenas os números pares (i % 2 === 0)
// ==========================================================
else if (exercicio === "3") {
  let acumulador = 0;

  for (let i = 0; i <= 1000; i += 1) {
    if (i % 2 === 0) {
      acumulador = acumulador + i;
    }
  }

  alert("Soma dos pares de 0 até 1000: " + acumulador);
} else if (typeof exercicio === "string") {
  alert("Opção inválida.");
}
