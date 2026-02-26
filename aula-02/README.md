# 📘 Anotações da Aula — JavaScript (Variáveis, Console, Operadores, Prompt)

## 1) 🧩 Variáveis (const / let)

- **const** → valor não muda (use por padrão)
- **let** → valor pode mudar

```js
// Declaração de variáveis
const nome = "Gabriel";
let idade = 28;
const isStudent = true;

// Exibindo os valores no console
console.log("Meu nome é:", nome);
console.log("Idade:", idade);
console.log("É estudante?", isStudent);
```

---

## 2) 🧮 Notas → Média → Aprovado

📌 Fórmula:
- `media = (nota1 + nota2 + nota3) / 3`

```js
const nota1 = 8.5;
const nota2 = 7.0;
const nota3 = 9.0;

const media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é:", media);

const isAprovado = media >= 6;
console.log("O aluno está aprovado?", isAprovado);
```

---

## 3) ✅ Operadores lógicos (AND / OR / NOT)

### Resumo rápido
- **AND (`&&`)** → só é `true` se **tudo** for `true`
- **OR (`||`)** → `true` se **pelo menos um** for `true`
- **NOT (`!`)** → inverte (`true` ↔ `false`)

```js
console.log(true && true);   // true
console.log(true && false);  // false

console.log(true || false);  // true
console.log(false || false); // false

console.log(!true);          // false
console.log(!false);         // true
```

---

## 4) 🍕🥪🍰 Exercício: Quem fica feliz?

### Requisitos
- **Maria** gosta de **merenda**, **não** gosta de **pizza**, e **adora sobremesa**.
- **João** gosta de **pizza**, **não** gosta de **merenda**, e **não se importa** com sobremesa.
- **Ana** gosta de **merenda e pizza**, mas **não** gosta de **sobremesa**.

### Modelo (usando booleanos)

⚠️ Observação importante:
- `merendaEPizza` significa “tem merenda **e** pizza ao mesmo tempo”.
- Se você quer representar “pizza”, o ideal seria ter uma variável separada (`pizza`).
- Aqui vou manter o seu modelo, mas organizado.

```js
const aluno1 = "Maria";
const aluno2 = "João";
const aluno3 = "Ana";

const merenda = true;
const merendaEPizza = false;
const temSobremesa = true;

// Maria: merenda ✅ | merenda e pizza ❌ | sobremesa ✅
const mariaFeliz = merenda === true && merendaEPizza === false && temSobremesa === true;

// João: merenda ❌ | merenda e pizza ✅ (representando pizza) | sobremesa (irrelevante)
const joaoFeliz = merendaEPizza === true && merenda === false;

// Ana: merenda ✅ | merenda e pizza ✅ | sobremesa ❌
const anaFeliz = merenda === true && merendaEPizza === true && temSobremesa === false;

console.log("Maria está feliz?", mariaFeliz);
console.log("João está feliz?", joaoFeliz);
console.log("Ana está feliz?", anaFeliz);
```

---

## 5) 🧑‍💻 Entrada de dados com `prompt` (nome e idade)

```js
const nome = prompt("Digite seu nome:");
const anoNascimento = prompt("Digite seu ano de nascimento:");

const anoAtual = 2026;
const idade = anoAtual - Number(anoNascimento);

console.log("Seja bem-vindo(a)", nome);
console.log("Você nasceu em:", anoNascimento);
console.log("Sua idade é:", idade);
```

---

## 6) 🚗🍺🗳️ Desafio: Pode dirigir, beber e votar?

### Regras
- **Dirigir:** precisa **ter CNH** e **idade >= 18**
- **Beber:** precisa **idade >= 18**
- **Votar:** precisa **ter título** e **idade >= 16**

```js
const cnh = prompt("Você tem CNH? (sim/não)");
const rg = prompt("Você tem RG? (sim/não)");
const cpf = prompt("Você tem CPF? (sim/não)");
const tituloEleitor = prompt("Você tem título de eleitor? (sim/não)");
const anoNascimento = prompt("Digite seu ano de nascimento:");

const temCNH = cnh === "sim";
const temRG = rg === "sim";
const temCPF = cpf === "sim";
const temTituloEleitor = tituloEleitor === "sim";

const idade = 2026 - Number(anoNascimento);

const podeDirigir = temCNH === true && idade >= 18;
const podeBeber = idade >= 18;
const podeVotar = temTituloEleitor === true && idade >= 16;

console.log("Tem RG?", temRG);
console.log("Tem CPF?", temCPF);

console.log("Pode dirigir?", podeDirigir);
console.log("Pode beber?", podeBeber);
console.log("Pode votar?", podeVotar);
```

---

## ✅ Mini checklist do que você aprendeu aqui
- `const` / `let`
- `console.log()`
- cálculos com números (média)
- comparação (`>=`)
- boolean (`true/false`)
- operadores lógicos (`&&`, `||`, `!`)
- entrada de dados com `prompt()`
- conversão com `Number()`