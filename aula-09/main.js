console.log("=== Aula 09 — Pré-avaliação (diagnóstica) ===")

const iniciar = prompt("Digite 1 para iniciar a pré-avaliação:")

if (iniciar !== "1") {
  console.log("Pré-avaliação não iniciada.")
} else {
  const perguntas = [
    {
      enunciado: "1) Qual operador representa 'E' lógico em JavaScript?",
      opcoes: ["A) ||", "B) &&", "C) !"],
      correta: "B"
    },
    {
      enunciado: "2) Qual laço é mais comum para contar de 0 até 9?",
      opcoes: ["A) for", "B) switch", "C) try/catch"],
      correta: "A"
    },
    {
      enunciado: "3) Qual método adiciona um item no final do array?",
      opcoes: ["A) pop()", "B) shift()", "C) push()"],
      correta: "C"
    },
    {
      enunciado: "4) O que 'find' retorna quando não encontra um item?",
      opcoes: ["A) -1", "B) undefined", "C) null"],
      correta: "B"
    },
    {
      enunciado: "5) Qual opção descreve melhor uma função?",
      opcoes: ["A) Um valor fixo", "B) Um bloco reutilizável", "C) Um tipo de array"],
      correta: "B"
    }
  ]

  let acertos = 0

  for (let i = 0; i < perguntas.length; i++) {
    const p = perguntas[i]
    const resposta = prompt(p.enunciado + "\n" + p.opcoes.join("\n") + "\nDigite A, B ou C:")

    if (resposta && resposta.toUpperCase() === p.correta) {
      acertos++
    }
  }

  console.log("Acertos:", acertos, "de", perguntas.length)
  console.log("Percentual:", Math.round((acertos / perguntas.length) * 100) + "%")
}
