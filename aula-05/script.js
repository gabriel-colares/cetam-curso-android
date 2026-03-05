// ==========================================================
// Aula 05 — Revisão de repetição + introdução a funções
// Como usar:
// - Abra o index.html no navegador
// - Abra o Console (F12) para ver os logs
// ==========================================================

// ==========================================================
// PARTE 01 — Revisão: Estruturas de repetição
// ==========================================================

const exemploRepeticao = prompt(
  "PARTE 01 — Escolha um exemplo de repetição:\n" +
  "1) for (pares 0..20)\n" +
  "2) while (pares 0..20)\n" +
  "3) tabuada (do...while)\n" +
  "4) tabuada (for)\n" +
  "5) tabuada (while)\n"
)

if (exemploRepeticao === "1") {
  console.log("=== Exemplo 01 — for (pares 0..20) ===")
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
} else if (exemploRepeticao === "2") {
  console.log("=== Exemplo 02 — while (pares 0..20) ===")
  let i = 0
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i)
    }
    i++
  }
} else if (exemploRepeticao === "3") {
  console.log("=== Exemplo 03 — tabuada (do...while) ===")
  const textoNumeroTabuada = prompt("Qual tabuada deseja mostrar?")
  const numeroTabuada = parseInt(textoNumeroTabuada)

  if (numeroTabuada !== numeroTabuada) {
    console.error("Você não digitou um número válido.")
  } else {
    let i = 0
    do {
      const resultado = numeroTabuada * i
      console.log(`${numeroTabuada} * ${i} = ${resultado}`)
      i++
    } while (i <= 10)
  }
} else if (exemploRepeticao === "4") {
  console.log("=== Exemplo 04 — tabuada (for) ===")
  const textoNumeroTabuada = prompt("Qual tabuada deseja mostrar?")
  const numeroTabuada = parseInt(textoNumeroTabuada)

  if (numeroTabuada !== numeroTabuada) {
    console.error("Você não digitou um número válido.")
  } else {
    for (let i = 0; i <= 10; i++) {
      const resultado = numeroTabuada * i
      console.log(`${numeroTabuada} * ${i} = ${resultado}`)
    }
  }
} else if (exemploRepeticao === "5") {
  console.log("=== Exemplo 05 — tabuada (while) ===")
  const textoNumeroTabuada = prompt("Qual tabuada deseja mostrar?")
  const numeroTabuada = parseInt(textoNumeroTabuada)

  if (numeroTabuada !== numeroTabuada) {
    console.error("Você não digitou um número válido.")
  } else {
    let i = 0
    while (i <= 10) {
      const resultado = numeroTabuada * i
      console.log(`${numeroTabuada} * ${i} = ${resultado}`)
      i++
    }
  }
} else {
  console.log("Nenhum exemplo de repetição escolhido.")
}

// ==========================================================
// PARTE 02 — Funções (function e arrow function)
// ==========================================================

// ----------------------------------------------------------
// 2.1 Funções básicas (parâmetros)
// ----------------------------------------------------------
function ola(msg) {
  console.log(msg)
}

function apresentacao(nome) {
  console.log(`Olá meu nome é ${nome}`)
}

function calcular(num1, num2) {
  const resultado = num1 + num2;
  console.log(resultado)
}

// ----------------------------------------------------------
// 2.2 Funções de cálculo (ex.: multiplicar, dividir)
// ----------------------------------------------------------
function multiplicar(a, b) {
  console.log(a * b)
}

function dividir(a, b) {
  if (typeof (a) !== "number" || typeof (b) !== "number") {
    console.error("O argumento passado não é um número!!")
    return;
  }
  if (b === 0) {
    console.error("Não é possivel dividir por zero!!!!")
    return null;
  }
  console.log(a / b)
}

// ----------------------------------------------------------
// 2.3 Função com regra de negócio (média)
// ----------------------------------------------------------
function calcularMedia(aluno, n1, n2, n3) {
  if (typeof (n1) !== "number" || typeof (n2) !== "number" || typeof (n3) !== "number") {
    console.error("Não é um número!!")
    return;
  }

  const resultado = (n1 + n2 + n3) / 3;
  console.log(`O aluno ${aluno} teve um desempenho de:`)
  console.log(`(${n1} + ${n2} + ${n3}) / 3 = ${resultado.toFixed(2)}`)

}

// ==========================================================
// CHAMADAS (execução)
// ==========================================================

console.log("=== Aula 05: Funções ===")
ola("Mensagem vinda da turma de desenvolvimento do CETAM!")
apresentacao("Gabriel")
calcular(5, 10)
multiplicar(6, 7)
dividir(10, 2)

calcularMedia("Carlos", 7, 5, 9)
calcularMedia("Gabriel", 12, 20, 10)
calcularMedia("Souza", 2, 3, 9)
calcularMedia("Lucas", 1, 1, 4)
calcularMedia("Adalmir", 6, 3, 4)

// ----------------------------------------------------------
// 2.4 Arrow Function (tabuada)
// ----------------------------------------------------------
const tabuada = (numero = 5, start = 0, end = 10) => {
  if (typeof (numero) !== "number") {
    console.error("Não é um número!!!")
    return;
  }

  for (let index = start; index <= end; index++) {
    const resultado = numero * index;
    console.log(`${numero} * ${index} = ${resultado}`)
  }
}

tabuada(7, 0, 10)

// Runner.prototype.gameOver = () => {}
