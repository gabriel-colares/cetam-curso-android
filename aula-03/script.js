// ==========================================================
// Aula 03 — Estruturas de Controle (sem funções)
// Como usar:
// - Abra o index.html
// - Escolha um exercício no menu
// - Veja logs no Console (F12)
// ==========================================================

alert("Aula 03 — Escolha um exercício");
alert("1) Condições (OR/AND) + if aninhado");
alert("2) Par ou ímpar");
alert("3) Login simples");
alert("4) Desconto em compras (faixas)");
alert("5) Calculadora (+, -, *, /)");
alert("6) Ano bissexto");
alert("7) IMC");
alert("8) Soma dos pares (loop)");

const opcao = prompt("Digite um número de 1 a 8:");

// ==========================================================
// EXERCÍCIO 01 — Condições (OR/AND) + if aninhado
// ==========================================================
if (opcao === "1") {
  const nome = prompt("Qual o seu nome?");
  const idadeTexto = prompt("Qual sua idade?");

  if (typeof nome === "string" && typeof idadeTexto === "string") {
    const idade = Number(idadeTexto);

    if (idade !== idade) {
      alert("Idade inválida. Digite um número.");
    } else if (nome === "matheus" || nome === "Matheus" || idade >= 18) {
      console.log("Você é Matheus ou maior de 18 anos");

      if ((nome === "matheus" || nome === "Matheus") && idade >= 16) {
        console.log("Bem vindo Matheus e maiores de 18 anos");
        console.log("Você é Matheus maior de 16 anos");
      } else {
        console.log("Bem vindo maiores de 18 anos");
        console.log("Você não é o Matheus maior de 16 anos");
      }
    } else {
      console.log("Quem é você?");
    }
  }
}

// ==========================================================
// EXERCÍCIO 02 — Par ou ímpar
// ==========================================================
else if (opcao === "2") {
  const numeroTexto = prompt("Digite um número:");

  if (typeof numeroTexto === "string") {
    const numero = Number(numeroTexto);

    if (numero !== numero) {
      alert("Valor inválido. Digite um número.");
    } else if (numero % 2 === 0) {
      alert("O número " + numero + " é par.");
    } else {
      alert("O número " + numero + " é ímpar.");
    }
  }
}

// ==========================================================
// EXERCÍCIO 03 — Login simples (usuário e senha)
// ==========================================================
else if (opcao === "3") {
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  const usuario = prompt("Usuário:");
  const senha = prompt("Senha:");

  if (typeof usuario === "string" && typeof senha === "string") {
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      alert("Acesso liberado");
    } else {
      alert("Acesso negado");
    }
  }
}

// ==========================================================
// EXERCÍCIO 04 — Desconto em compras (faixas)
// ==========================================================
else if (opcao === "4") {
  const p1Texto = prompt("Valor do produto 1 (R$):");
  const p2Texto = prompt("Valor do produto 2 (R$):");
  const p3Texto = prompt("Valor do produto 3 (R$):");

  if (typeof p1Texto === "string" && typeof p2Texto === "string" && typeof p3Texto === "string") {
    const p1 = Number(p1Texto);
    const p2 = Number(p2Texto);
    const p3 = Number(p3Texto);

    if (p1 !== p1 || p2 !== p2 || p3 !== p3) {
      alert("Algum valor está inválido. Digite apenas números.");
    } else {
      const total = p1 + p2 + p3;
      let taxa = 0;

      if (total < 50) taxa = 0;
      else if (total < 100) taxa = 0.02;
      else if (total < 500) taxa = 0.05;
      else if (total < 1000) taxa = 0.1;
      else taxa = 0.15;

      const desconto = total * taxa;
      const final = total - desconto;

      alert("Total: R$ " + total);
      alert("Desconto: " + taxa * 100 + "% (R$ " + desconto + ")");
      alert("Total final: R$ " + final);
    }
  }
}

// ==========================================================
// EXERCÍCIO 05 — Calculadora (+, -, *, /)
// ==========================================================
else if (opcao === "5") {
  const n1Texto = prompt("Digite o primeiro número:");
  const n2Texto = prompt("Digite o segundo número:");
  const operacao = prompt("Qual operação? (+, -, *, /)");

  if (typeof n1Texto === "string" && typeof n2Texto === "string" && typeof operacao === "string") {
    const n1 = Number(n1Texto);
    const n2 = Number(n2Texto);

    if (n1 !== n1 || n2 !== n2) {
      alert("Algum valor está inválido. Digite apenas números.");
    } else if (operacao === "+") {
      alert("O resultado é: " + n1 + " + " + n2 + " = " + (n1 + n2));
    } else if (operacao === "-") {
      alert("O resultado é: " + n1 + " - " + n2 + " = " + (n1 - n2));
    } else if (operacao === "*") {
      alert("O resultado é: " + n1 + " * " + n2 + " = " + n1 * n2);
    } else if (operacao === "/") {
      alert("O resultado é: " + n1 + " / " + n2 + " = " + n1 / n2);
    } else {
      alert("Operação inválida");
    }
  }
}

// ==========================================================
// EXERCÍCIO 06 — Ano bissexto
// ==========================================================
else if (opcao === "6") {
  const anoTexto = prompt("Digite um ano:");

  if (typeof anoTexto === "string") {
    const ano = Number(anoTexto);

    if (ano !== ano) {
      alert("Ano inválido. Digite um número.");
    } else {
      const ehBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
      if (ehBissexto) alert("O ano " + ano + " é bissexto.");
      else alert("O ano " + ano + " não é bissexto.");
    }
  }
}

// ==========================================================
// EXERCÍCIO 07 — IMC
// ==========================================================
else if (opcao === "7") {
  const pesoTexto = prompt("Informe seu peso (kg):");
  const alturaTexto = prompt("Informe sua altura (m):");

  if (typeof pesoTexto === "string" && typeof alturaTexto === "string") {
    const peso = Number(pesoTexto);
    const altura = Number(alturaTexto);

    if (peso !== peso || altura !== altura) {
      alert("Valores inválidos. Confira peso/altura.");
    } else if (altura <= 0) {
      alert("Altura inválida. A altura deve ser maior que 0.");
    } else {
      const imc = peso / (altura * altura);

      if (imc < 18.5) alert("IMC: " + imc + " — Abaixo do peso");
      else if (imc < 24.9) alert("IMC: " + imc + " — Normal");
      else if (imc < 29.9) alert("IMC: " + imc + " — Sobrepeso");
      else alert("IMC: " + imc + " — Obesidade");
    }
  }
}

// ==========================================================
// EXERCÍCIO 08 — Soma dos pares (loop)
// ==========================================================
else if (opcao === "8") {
  const limiteTexto = prompt("Somar pares até qual número?");

  if (typeof limiteTexto === "string") {
    const limite = Number(limiteTexto);

    if (limite !== limite) {
      alert("Limite inválido. Digite um número.");
    } else {
      let acumulador = 0;

      for (let i = 0; i <= limite; i += 1) {
        if (i % 2 === 0) acumulador += i;
      }

      alert("Soma dos pares de 0 até " + limite + ": " + acumulador);
    }
  }
} else if (typeof opcao === "string") {
  alert("Opção inválida.");
}
