console.log("=== Aula 10 ===")

const opcao = prompt(
  "Escolha um exercício:\n" +
  "1) Objeto pessoa (propriedades, arrays e métodos)\n" +
  "2) Posts + comentários (findIndex + push)\n"
)

if (opcao === "1") {
  console.log("=== 1) Objeto pessoa ===")

  const pessoa = {
    nome: "Gabriel",
    sobrenome: "Colares",
    profissao: "Desenvolvedor de Software",
    cpf: "01234567890",
    idade: 27,
    aindaVivo: true,
    amigos: ["João", "Maria", "Jorge", "Victoria"],
    carros: [
      { modelo: "Hilux", ano: 2015 },
      { modelo: "Civic", ano: 2020 }
    ],
    falar: function () {
      console.log("Olá meu nome é " + this.nome)
    },
    mostrarCarros: function () {
      console.log(this.carros)
    }
  }

  pessoa.falar()
  console.log(pessoa.amigos)
  pessoa.mostrarCarros()
} else if (opcao === "2") {
  console.log("=== 2) Posts + comentários ===")

  const posts = [
    {
      id: 1,
      curtidasQntd: 1200,
      comentariosQntd: 200,
      compartilhamentosQntd: 80,
      descricao: "Feliz dia das mulheres!! <3",
      criadoEm: "2026-03-07",
      publicadoEm: "2026-03-08",
      atualizadoEm: "2026-03-09",
      comentarios: [
        { username: "jorgin", comentario: "Vcs são incríveis!!" },
        { username: "Amarildo", comentario: "Tenham um dia feliz!! XD" }
      ]
    },
  ]

  function comentar(postId, username, comentario) {
    const comentarioObj = { username, comentario }

    const indice = posts.findIndex((post) => post.id === postId)

    if (indice === -1) {
      console.error("Post não encontrado.")
      return
    }

    posts[indice].comentarios.push(comentarioObj)
  }

  comentar(1, "marc4s_20", "Parabéns, lindo dia!!")
  comentar(1, "beatriz", "Feliz dia!")

  console.log(posts)
} else {
  console.log("Nenhum exercício escolhido.")
}
