# Aula 03 — Estruturas de Controle (JavaScript)

Nesta aula o foco foi praticar **tomada de decisão** e **fluxo de execução** com JavaScript no navegador, usando `prompt`, `alert` e `console.log`.

## Materiais

- Slides/apoio: [aula-03-estruturas-de-controle.pdf](./aula-03-estruturas-de-controle.pdf)
- Arquivos da aula:
  - [index.html](./index.html)
  - [script.js](./script.js)
  - [index.js](./index.js)

## Como executar os exemplos

Os exercícios desta aula usam `prompt()` e `alert()`, então devem ser executados **no navegador**.

- Abra o arquivo [index.html](./index.html) no navegador (Chrome/Edge)
- O navegador vai carregar o [script.js](./script.js) e mostrar os prompts/alerts
- Para ver logs, abra o DevTools:
  - Windows/Linux: `F12` ou `Ctrl + Shift + I`
  - Aba: Console

## Conteúdo visto

- Comparações e operadores lógicos
  - `===`, `!==`, `>`, `>=`, `<`, `<=`
  - `&&` (E), `||` (OU), `!` (NÃO)
- Condicionais
  - `if`, `else if`, `else`
  - Condição aninhada (um `if` dentro de outro)
- Entrada e saída no browser
  - `prompt()` para entrada
  - `alert()` e `console.log()` para saída
- Conversão de tipos
  - `Number()` para transformar texto em número antes de calcular

## Exemplos (modelo)

### 1) Par ou ímpar

Enunciado:

- Peça um número via `prompt()`
- Converta com `Number()`
- Mostre no `alert()` se é par ou ímpar

Exemplo:

```js
const numero = Number(prompt("Digite um número:"));
const ehPar = numero % 2 === 0;

if (ehPar) {
  alert(`O número ${numero} é par.`);
} else {
  alert(`O número ${numero} é ímpar.`);
}
```

### 2) Login simples (usuário e senha)

Enunciado:

- Defina `usuarioCorreto` e `senhaCorreta` no código
- Peça usuário e senha via `prompt()`
- Se os dois estiverem corretos, mostrar “Acesso liberado”, senão “Acesso negado”

Exemplo:

```js
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

const usuario = prompt("Usuário:");
const senha = prompt("Senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  alert("Acesso liberado");
} else {
  alert("Acesso negado");
}
```

### 3) Desconto em compras (por faixa)

Atividade baseada no arquivo [script.js](./script.js).

Enunciado (mais claro):

- Peça 3 valores via `prompt()` e converta com `Number()`
- Some para obter `total`
- Aplique a regra de desconto:
  - total < 50: 0%
  - 50 ≤ total < 100: 2%
  - 100 ≤ total < 500: 5%
  - 500 ≤ total < 1000: 10%
  - total ≥ 1000: 15%
- Exiba:
  - total
  - porcentagem aplicada
  - valor do desconto
  - valor final

Exemplo (versão organizada por taxa):

```js
const p1 = Number(prompt("Valor do produto 1:"));
const p2 = Number(prompt("Valor do produto 2:"));
const p3 = Number(prompt("Valor do produto 3:"));

const total = p1 + p2 + p3;
let taxa = 0;

if (total < 50) {
  taxa = 0;
} else if (total < 100) {
  taxa = 0.02;
} else if (total < 500) {
  taxa = 0.05;
} else if (total < 1000) {
  taxa = 0.1;
} else {
  taxa = 0.15;
}

const desconto = total * taxa;
const final = total - desconto;

alert(`Total: R$ ${total.toFixed(2)}`);
alert(`Desconto: ${(taxa * 100).toFixed(0)}% (R$ ${desconto.toFixed(2)})`);
alert(`Total final: R$ ${final.toFixed(2)}`);
```

## Atividade (trabalho remoto)

Enunciado: calculadora de dois dígitos (baseado no [index.js](./index.js))

- Receba 2 números via `prompt()`
- Converta com `Number()`
- Pergunte a operação via `prompt()` usando um destes símbolos: `+`, `-`, `*`, `/`
- Calcule o resultado e mostre no `alert()` no formato:
  - `O resultado é: 2 + 5 = 7`

Sugestão de solução:

```js
const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const op = prompt("Qual operação? (+, -, *, /)");

let resultado;

if (op === "+") {
  resultado = n1 + n2;
} else if (op === "-") {
  resultado = n1 - n2;
} else if (op === "*") {
  resultado = n1 * n2;
} else if (op === "/") {
  resultado = n1 / n2;
} else {
  alert("Operação inválida");
}

if (resultado !== undefined) {
  alert(`O resultado é: ${n1} ${op} ${n2} = ${resultado}`);
}
```

## Links úteis

- MDN — Condicionais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
- MDN — Operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
- MDN — `prompt()`: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt
- MDN — `alert()`: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert
- JavaScript.info — If/Else: https://javascript.info/ifelse
- JavaScript.info — Loops (para reforço): https://javascript.info/while-for
- Excalidraw (desenhos/fluxograma): https://excalidraw.com/

### Plataformas para praticar

- Beecrowd (iniciante): https://www.beecrowd.com.br/
- Codewars (katas): https://www.codewars.com/
- HackerRank (algoritmos): https://www.hackerrank.com/
