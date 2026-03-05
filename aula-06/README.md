# Aula 06 — Arrays, laços e revisão de funções (JavaScript)

Nesta aula continuamos a prática com **condicionais** e **laços** e começamos a trabalhar com **arrays** (listas) para guardar dados e percorrer com `for`.

## Materiais

- Arquivos da aula:
  - [index.html](./index.html)
  - [script.js](./script.js)

## Como executar

- Abra o arquivo [index.html](./index.html) no navegador (Chrome/Edge)
- Abra o DevTools:
  - Windows/Linux: `F12` ou `Ctrl + Shift + I`
  - Aba: Console

## O que tem no script

O [script.js](./script.js) tem vários blocos de estudo (alguns estão comentados) e um trecho final ativo com arrays + `for`.

### 1) Funções (revisão)

Trechos de prática (comentados no script):

- `calcularMedia(n1, n2, n3)` retornando a média
- `alunoPassou(media)` classificando em reprovado / recuperação / aprovado

### 2) Lógica booleana (revisão)

Trechos de prática (comentados no script):

- Operadores: `&&`, `||`, `!`, `!==`
- Exercício de triângulo:
  - `tipoDoTriangulo(A, B, C)` (equilátero, escaleno, isósceles)
  - `ehTriangulo(A, B, C)` (regras de existência de triângulo)

### 3) Arrays + laço `for` (parte ativa)

No final do script existe um exemplo com:

- `alunos` (array com nomes e outros valores)
- `medias` (array com notas)
- Um `for` que percorre as médias e imprime se “PASSOU” ou “REPROVOU” usando `if/else`

## Atividades sugeridas

- Ajustar o array `alunos` para ter só nomes (strings) e alinhar com `medias`
- Fazer o `for` usar `medias.length` ao invés de número fixo
- Descomentar e testar `calcularMedia` e `alunoPassou` no Console
