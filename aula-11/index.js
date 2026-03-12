console.log("=== Aula 11 ===")

const novoTitulo = prompt("Digite um novo título para o artigo:")

if (novoTitulo) {
  const titulo = document.querySelector("main h1")

  if (titulo) {
    titulo.textContent = novoTitulo
  }
}
