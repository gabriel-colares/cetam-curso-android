// ==========================================================
// Aula 07 — Arrays + callbacks (forEach / find) + revisão
// Como usar:
// - Abra o index.html no navegador
// - Abra o Console (F12) para ver os logs
// ==========================================================

console.log("=== Aula 07 ===")

const opcao = prompt(
  "Escolha um exercício:\n" +
  "1) Aprovação/Reprovação (arrays + function)\n" +
  "2) Preencher array com forEach (prompt)\n" +
  "3) Buscar item em array com find\n" +
  "4) Buscar número no array com find\n" +
  "5) Dobrar valores em índices pares (for)\n"
)

// ==========================================================
// Funções (revisão)
// ==========================================================

function aprovadoOuReprovado(nome, media) {
  if (media >= 6) {
    console.log(`O aluno ${nome} com média ${media} foi APROVADO!`)
  } else {
    console.log(`O aluno ${nome} com média ${media} foi REPROVADO!`)
  }
}

// ==========================================================
// Exercícios
// ==========================================================

if (opcao === "1") {
  console.log("=== 1) Aprovação/Reprovação ===")

  const alunos = ["Gabriel", "Junior", "Marcus", "Vinicius"]
  const medias = [8, 9, 10, 3]

  for (let i = 0; i < alunos.length; i++) {
    aprovadoOuReprovado(alunos[i], medias[i])
  }
} else if (opcao === "2") {
  console.log("=== 2) Preencher array com forEach ===")

  const carros = [null, null, null, null]

  carros.forEach((_, index) => {
    const entrada = prompt(`Digite um valor para a posição ${index}`)
    carros[index] = entrada
  })

  console.log(carros)
} else if (opcao === "3") {
  console.log("=== 3) Buscar item com find ===")

  const carros = ["Civic", "Corolla", "Hilux", "Ferrari", "Avião", "Palio 2015"]
  const termo = prompt("Digite o item para buscar (ex.: Avião)")

  const valorEncontrado = carros.find((valor) => valor === termo)

  if (valorEncontrado !== undefined) {
    console.log(`Encontramos: ${valorEncontrado}`)
  } else {
    console.log("Não encontramos nenhum item.")
  }
} else if (opcao === "4") {
  console.log("=== 4) Buscar número com find ===")

  const numeros = [2, 2, 6, 2, 5, 8, 6, 78, 12]
  const buscar = Number(prompt("Pesquise um número:"))

  if (buscar !== buscar) {
    console.error("Você não digitou um número válido.")
  } else {
    const encontrado = numeros.find((valor) => valor === buscar)

    if (encontrado !== undefined) {
      console.log(`O valor encontrado foi: ${encontrado}`)
    } else {
      console.error("Não encontrado! 404 :/")
    }
  }
} else if (opcao === "5") {
  console.log("=== 5) Dobrar valores em índices pares ===")

  const numeros = [1, 2, 6, 3, 4, 8, 6, 9, 12]

  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
      numeros[i] = numeros[i] * 2
    }
  }

  console.log(numeros)
} else {
  console.log("Nenhum exercício escolhido.")
}

