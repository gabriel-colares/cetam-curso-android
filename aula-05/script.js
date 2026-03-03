// ==========================================================
// Aula 05 — Revisão de repetição + introdução a funções
// Como usar:
// - Abra o index.html no navegador
// - Abra o Console (F12) para ver os logs
// ==========================================================

// ==========================================================
// PARTE 01 — Revisão: Estruturas de repetição
// ==========================================================

// Exemplo 01: for (mostrar pares de 0 a 20)
// for (let index = 0; index <= 20; index++) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }

// Exemplo 02: while (mostrar pares de 0 a 20)
// let indice = 0;
// while (indice <= 20) {
//   if (indice % 2 === 0) {
//     console.log(indice);
//   }
//   indice++
// }

// Exemplo 03: tabuada com do...while
// let num_tabuada = parseInt(prompt("Qual tabuada deseja mostrar?"));
// let indice_tabuada = 0;
// do {
//   let resultado = num_tabuada * indice_tabuada;
//   console.log(`${num_tabuada} * ${indice_tabuada} = ${resultado}`)
//   indice_tabuada++;
// } while (indice_tabuada <= 10)

// Exemplo 04: tabuada com for (corrigido)
// let num_tabuada = parseInt(prompt("Qual tabuada deseja mostrar?"));
// for (let indice_tabuada = 0; indice_tabuada <= 10; indice_tabuada++) {
//   let resultado = num_tabuada * indice_tabuada;
//   console.log(`${num_tabuada} * ${indice_tabuada} = ${resultado}`)
// }

// Exemplo 05: tabuada com while
// let num_tabuada = parseInt(prompt("Qual tabuada deseja mostrar?"));
// let indice_tabuada = 0;
// while (indice_tabuada <= 10) {
//   let resultado = num_tabuada * indice_tabuada;
//   console.log(`${num_tabuada} * ${indice_tabuada} = ${resultado}`)
//   indice_tabuada++;
// }

// ==========================================================
// PARTE 02 — Funções (function e arrow function)
// ==========================================================

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

function calcularMedia(aluno, n1, n2, n3) {
  if (typeof (n1) !== "number" || typeof (n2) !== "number" || typeof (n3) !== "number") {
    console.error("Não é um número!!")
    return;
  }

  const resultado = (n1 + n2 + n3) / 3;
  console.log(`Ò aluno ${aluno} teve um desempenho de:`)
  console.log(`(${n1} + ${n2} + ${n3}) / 3 = ${resultado.toFixed(2)}`)

}

// ==========================================================
// CHAMADAS (execução)
// ==========================================================

ola("Mensagem vinda da turma de desenvolvimento do CETAM!")
apresentacao("Gabriel")
calcular(5, 10)
dividir(10, 2)

calcularMedia("Carlos", 7, 5, 9)
calcularMedia("Gabriel", 12, 20, 10)
calcularMedia("Souza", 2, 3, 9)
calcularMedia("Lucas", 1, 1, 4)
calcularMedia("Adalmir", 6, 3, 4)

// arrow-function
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
