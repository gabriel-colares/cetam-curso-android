# Aula 07 — Arrays (forEach / find) e revisão (JavaScript)

Nesta aula praticamos **arrays** e formas de percorrer/buscar valores usando:

- `for` (laço tradicional)
- `forEach` (callback para iterar um array)
- `find` (buscar o primeiro item que atende uma condição)

## Materiais

- Arquivos da aula:
  - [index.html](./index.html)
  - [main.js](./main.js)

## Como executar

- Abra o arquivo [index.html](./index.html) no navegador (Chrome/Edge)
- Abra o DevTools:
  - Windows/Linux: `F12` ou `Ctrl + Shift + I`
  - Aba: Console

## Organização do script

O [main.js](./main.js) mostra um menu com `prompt()` para você escolher **um exercício por vez**, evitando conflitos e deixando a execução mais organizada.

## Exercícios no menu

### 1) Aprovação/Reprovação (arrays + function)

- Arrays: `alunos` e `medias`
- Laço `for` para percorrer os arrays
- Função `aprovadoOuReprovado(nome, media)` para imprimir a situação

### 2) Preencher array com `forEach` (prompt)

- Array com posições vazias (começa com `null`)
- `forEach((_, index) => { ... })` para pedir um valor por posição e salvar no array

### 3) Buscar item em array com `find`

- Array de `carros` (strings)
- `find((valor) => valor === termo)` para localizar o item buscado

### 4) Buscar número em array com `find`

- Array numérico `numeros`
- `find` para encontrar o número digitado no `prompt()`

### 5) Dobrar valores em índices pares (for)

Atividade de manipulação do array:

- Percorrer o array numérico com `for`
- Se o índice for par (`i % 2 === 0`), dobrar o valor e atualizar:
  - `numeros[i] = numeros[i] * 2`
