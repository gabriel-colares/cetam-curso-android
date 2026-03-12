console.log("=== Aula 08 ===")

const opcao = prompt(
  "Escolha um tópico:\n" +
  "1) push/pop + for (lista de frutas)\n" +
  "2) map (identificar frutas)\n" +
  "3) filter/forEach (carros)\n" +
  "4) Objetos (post e método)\n" +
  "5) Array de objetos (pessoas: map/filter)\n"
)

if (opcao === "1") {
  console.log("=== 1) push/pop + for (frutas) ===")

  const frutas = ["Maçã", "Laranja", "Uva"]

  for (let i = 0; i < 3; i++) {
    const entrada = prompt("Digite uma fruta:")

    if (!entrada) {
      console.log("Entrada vazia, parando.")
      break
    }

    frutas.push(entrada)
  }

  console.log(frutas)
} else if (opcao === "2") {
  console.log("=== 2) map (identificar frutas) ===")

  const frutas = ["Maçã", "Laranja", "Uva"]

  const frutasIdentificadas = frutas.map((valor, indice) => {
    if (indice % 2 === 0) {
      return `Fazenda 1 - ${valor}`
    }
    return `Fazenda 2 - ${valor}`
  })

  console.log(frutasIdentificadas)
} else if (opcao === "3") {
  console.log("=== 3) filter/forEach (carros) ===")

  const carros = ["Civic", "Corolla", "Hilux", "Ferrari", "Avião", "Palio 2015"]

  carros.forEach((valor, index) => {
    console.log(index, valor)
  })

  const carrosFiltrados = carros.filter((valor) => valor === "Hilux" || valor === "Avião")
  console.log(carrosFiltrados)
} else if (opcao === "4") {
  console.log("=== 4) Objetos (post e método) ===")

  const post = {
    likes: 2500,
    descricao: "Lorem ipsum dolor sit amet",
    status: "Publicado",
    comentarios: [
      {
        avatarURL: "https://placeholder.com",
        comentario: "Eu gostei do post!",
        likes: 200,
        username: "jorgin"
      },
      {
        avatarURL: "https://placeholder.com",
        comentario: "Muito bom!",
        likes: 120,
        username: "claudin"
      }
    ],
    curtir: function (username) {
      console.log(username + " curtiu esse post!")
    }
  }

  console.log(post)
  console.log(post.status)
  console.log(post.comentarios)
  post.curtir("gcolares.me")
} else if (opcao === "5") {
  console.log("=== 5) Array de objetos (pessoas) ===")

  const pessoas = [
    { nome: "Gabriel", sobrenome: "Soares Colares", idade: 26 },
    { nome: "Jorge", sobrenome: "Bento Portela", idade: 32 },
    { nome: "Julia", sobrenome: "Alencar Flores", idade: 54 },
    { nome: "Avilá", sobrenome: "Silva Côrtez", idade: 17 },
    { nome: "Mario", sobrenome: "Bragão da Silva", idade: 22 },
  ]

  let maioresIdade = 0

  pessoas.forEach((pessoa) => {
    if (pessoa.idade >= 18) {
      maioresIdade++
    }
  })

  const pessoasDesativadas = pessoas.map((pessoa) => {
    if (pessoa.idade < 18) {
      return { nome: "INATIVO", sobrenome: "DESATIVADO", idade: 0 }
    }
    return pessoa
  })

  const pessoasFinais = pessoasDesativadas.filter((pessoa) => pessoa.nome !== "INATIVO")

  console.log(pessoasFinais)
  console.log("Existem", maioresIdade, "maiores de idade")
} else {
  console.log("Nenhum tópico escolhido.")
}
