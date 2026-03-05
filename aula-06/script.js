// ==========================================================
// Aula 06 — Arrays, laços e revisão de funções
// Como usar:
// - Abra o index.html no navegador
// - Abra o Console (F12) para ver os logs
// ==========================================================

console.log("=== Aula 06 ===")

const opcao = prompt(
  "Escolha um bloco para executar:\n" +
  "1) Funções: média + situação do aluno\n" +
  "2) Triângulo: tipo do triângulo\n" +
  "3) Triângulo: validar se existe\n" +
  "4) Arrays + for: percorrer e alterar carros\n" +
  "5) Arrays + for + if/else: aprovação por média\n"
)

// ==========================================================
// PARTE 01 — Funções (revisão)
// ==========================================================

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3
}

function alunoPassou(media) {
  if (media >= 0 && media < 5) {
    return "reprovado"
  } else if (media >= 5 && media < 7) {
    return "recuperação"
  } else if (media >= 7 && media <= 10) {
    return "aprovado"
  }
}

// ==========================================================
// PARTE 02 — Booleana e condições (triângulo)
// ==========================================================

function tipoDoTriangulo(A, B, C) {
  if (A === B && B === C) {
    return "equilátero"
  } else if (A !== B && B !== C && A !== C) {
    return "escaleno"
  } else {
    return "isósceles"
  }
}

function ehTriangulo(A, B, C) {
  return (A + B > C) && (A + C > B) && (B + C > A)
}

// ==========================================================
// Execução (um bloco por vez)
// ==========================================================

if (opcao === "1") {
  console.log("=== 1) Funções: média + situação ===")

  const media1 = calcularMedia(10, 9, 3)
  const media2 = calcularMedia(7, 10, 4)
  const media3 = calcularMedia(3, 9, 5)
  const media4 = calcularMedia(2, 8.5, 3)
  const media5 = calcularMedia(4.6, 7, 8)
  const media6 = calcularMedia(2, 10, 7)
  const media7 = calcularMedia(9, 9, 10)

  const medias = [media1, media2, media3, media4, media5, media6, media7]

  for (let i = 0; i < medias.length; i++) {
    console.log(`Aluno ${i + 1}: média=${medias[i].toFixed(2)} → ${alunoPassou(medias[i])}`)
  }
} else if (opcao === "2") {
  console.log("=== 2) Triângulo: tipo ===")

  const A = 10
  const B = 15
  const C = 25

  if (ehTriangulo(A, B, C)) {
    console.log(`Lados: ${A}, ${B}, ${C} → ${tipoDoTriangulo(A, B, C)}`)
  } else {
    console.log(`Lados: ${A}, ${B}, ${C} → não forma triângulo`)
  }
} else if (opcao === "3") {
  console.log("=== 3) Triângulo: validar existência ===")

  const A = 7
  const B = 10
  const C = 12

  console.log(`Lados: ${A}, ${B}, ${C}`)
  console.log(ehTriangulo(A, B, C) ? "Forma triângulo" : "Não forma triângulo")
} else if (opcao === "4") {
  console.log("=== 4) Arrays + for: carros ===")

  const carros = ["Civic", "Porsche", "Hilux", "Gol", "Fiat Uno", "Celta", "Kwid"]

  console.log("Lista original:")
  for (let i = 0; i < carros.length; i++) {
    console.log(carros[i])
  }

  for (let i = 0; i < carros.length; i++) {
    if (i % 2 === 0) {
      carros[i] = "PAR"
    }
  }

  console.log("Lista alterada (índices pares viraram 'PAR'):")
  console.log(carros)
} else if (opcao === "5") {
  console.log("=== 5) Arrays + for + if/else: aprovação ===")

  const alunos = ["Gabriel", "Mario", "Julia"]
  const medias = [8, 5, 9.5]

  for (let i = 0; i < medias.length; i++) {
    if (medias[i] < 6) {
      console.log(`O aluno ${alunos[i]} REPROVOU com uma média de ${medias[i]}`)
    } else {
      console.log(`O aluno ${alunos[i]} PASSOU com uma média de ${medias[i]}`)
    }
  }
} else {
  console.log("Nenhum bloco escolhido.")
}
