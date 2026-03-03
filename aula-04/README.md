# Aula 04 — Exercícios (condicionais e laços)

Nesta aula foi feito um reforço com **condicionais** e **laços de repetição** no JavaScript, usando `prompt()`, `alert()` e `console.log()`.

## Materiais

- Arquivos da aula:
  - [index.html](./index.html)
  - [script.js](./script.js)

## Como executar

- Abra o arquivo [index.html](./index.html) no navegador (Chrome/Edge)
- O navegador vai carregar o [script.js](./script.js) e pedir para escolher o exercício em um `prompt()`
- Para ver logs, abra o DevTools:
  - Windows/Linux: `F12` ou `Ctrl + Shift + I`
  - Aba: Console

## Exercícios no script

O [script.js](./script.js) está separado por comentários e possui um menu simples:

- 1) Ano bissexto
- 2) IMC
- 3) Soma dos pares (0 a 1000)

### 1) Ano bissexto

Enunciado:

- Peça um ano via `prompt()`
- Converta com `Number()`
- Mostre no `alert()` se o ano é bissexto ou não

Regra:

- Divisível por 400: bissexto
- OU divisível por 4 e NÃO divisível por 100: bissexto

### 2) IMC

Enunciado:

- Peça `peso` e `altura` via `prompt()`
- Converta com `Number()`
- Calcule: `peso / (altura * altura)`
- Mostre o IMC e a classificação no `alert()`

Classificação:

- IMC < 18.5: Abaixo do peso
- IMC < 24.9: Normal
- IMC < 29.9: Sobrepeso
- IMC >= 30: Obesidade

### 3) Soma dos pares (0 a 1000)

Enunciado:

- Use um `for` para percorrer de 0 até 1000
- Some apenas os números pares (`i % 2 === 0`)
- Mostre o resultado no `alert()`
