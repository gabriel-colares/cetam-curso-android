console.log("=== Aula 09 — Git e GitHub ===")

const opcao = prompt(
  "Escolha um tópico:\n" +
  "1) Fluxo básico (init/add/commit/push)\n" +
  "2) Branch (criar e trocar)\n" +
  "3) Checklist do dia\n"
)

if (opcao === "1") {
  console.log("=== 1) Fluxo básico ===")
  console.log("git init")
  console.log("git status")
  console.log("git add .")
  console.log("git commit -m \"mensagem\"")
  console.log("git push -u origin main")
} else if (opcao === "2") {
  console.log("=== 2) Branch ===")
  console.log("git branch")
  console.log("git checkout -b minha-feature")
  console.log("git checkout main")
} else if (opcao === "3") {
  console.log("=== 3) Checklist ===")
  console.log("- confirmar remoto: git remote -v")
  console.log("- ver mudanças: git status")
  console.log("- revisar diff: git diff")
  console.log("- adicionar e commitar: git add . / git commit -m")
  console.log("- enviar: git push")
} else {
  console.log("Nenhum tópico escolhido.")
}
