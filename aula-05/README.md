# Aula 05 — Revisão de repetição + introdução a funções (JavaScript)

Nesta aula fizemos uma revisão de **estruturas de repetição** e depois iniciamos **funções** (declaração, parâmetros e validação simples com `typeof`).

## Materiais

- Arquivos da aula:
  - [index.html](./index.html)
  - [script.js](./script.js)

## Como executar

Os exemplos usam `console.log()` e alguns trechos podem usar `prompt()`, então execute **no navegador**:

- Abra o arquivo [index.html](./index.html) no navegador (Chrome/Edge)
- Abra o DevTools:
  - Windows/Linux: `F12` ou `Ctrl + Shift + I`
  - Aba: Console

## Organização do script

O [script.js](./script.js) está dividido em:

- PARTE 01 — Revisão: estruturas de repetição (exemplos comentados para você descomentar)
- PARTE 02 — Funções (declarações + chamadas no final do arquivo)

## Conteúdo visto

### 1) Estruturas de repetição (revisão)

No [script.js](./script.js) você encontra exemplos separados por comentários:

- Exemplo 01 — `for` (pares de 0 a 20)
- Exemplo 02 — `while` (pares de 0 a 20)
- Exemplo 03 — tabuada com `do...while`
- Exemplo 04 — tabuada com `for`
- Exemplo 05 — tabuada com `while`

### 2) Funções

No [script.js](./script.js) você encontra exemplos de:

- 2.1 Funções básicas com parâmetros: `ola`, `apresentacao`, `calcular`
- 2.2 Funções de cálculo: `multiplicar`, `dividir`
- 2.3 Função com regra de negócio: `calcularMedia`
- 2.4 Arrow function: `tabuada`

## Atividades sugeridas

- Descomentar os exemplos de repetição e testar no Console (um por vez)
- Ajustar a tabuada para receber o número via `prompt()`
- Criar uma função `subtrair(a, b)` e uma `somar(a, b)`
- Melhorar `calcularMedia` para imprimir “aprovado/reprovado”

## Curiosidade: `Runner.prototype.gameOver`

No final do [script.js](./script.js) tem um trecho comentado:

```js
Runner.prototype.gameOver = () => {}
```

Isso é um “hack” comum do **jogo do dinossauro do Chrome** (o jogo offline). A ideia é sobrescrever o método `gameOver` do objeto `Runner` (o “motor” do jogo) por uma função vazia. Assim, quando o jogo tenta chamar `gameOver()` ao bater em um obstáculo, ele não faz nada e o jogo não finaliza.

Obs.: Esse código só funciona se você rodar no **Console** enquanto o jogo do dinossauro estiver carregado, porque é lá que existe o `Runner`.
