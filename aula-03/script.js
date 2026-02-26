// 3° Desconto em compras
// Usando campos coletados usando o prompt você irá checar 3 produtos
// produto1 + produto2 + produto3
// Caso ele for inferior à $50 sem desconto < 50
// Caso ele for maior ou igual a $50 aplicar desconto de 2% 50 < x < 100
// Caso ele for maior ou igual a $100 aplicar desconto de 5% 100 < x < 500
// Caso ele for maior ou igual a $500 aplicar desconto de 10% 500 < x < 100  500 - 50
// Caso ele for maior ou igual a $1000 aplicar desconto de 15%
// Output: Sua compra no total de $500 teve um desconto de 10% em torno de 50$ e ficou por $450

const p1 = Number(prompt("Valor do produto 1"))
const p2 = Number(prompt("Valor do produto 2"))
const p3 = Number(prompt("Valor do produto 3"))

const valorTotalProdutos = p1 + p2 + p3;
let valorDescontado = 0;
let desconto = "10%"

if (valorTotalProdutos < 50) {
  alert(`Você não têm desconto, o valor da compra foi de ${valorTotalProdutos}`)

} else if (valorTotalProdutos >= 50 && valorTotalProdutos < 100) {
  let valorDescontado = valorTotalProdutos * 0.02;
  alert(`Sua compra no total de ${valorTotalProdutos}`);
  alert(`Teve um desconto de 2% em torno de ${valorDescontado}`);
  alert(`Ficou por ${valorTotalProdutos - valorDescontado}`);

} else if (valorTotalProdutos >= 100 && valorTotalProdutos < 500) {
  let valorDescontado = valorTotalProdutos * 0.05;
  alert(`Sua compra no total de ${valorTotalProdutos}`);
  alert(`Teve um desconto de 5% em torno de ${valorDescontado}`);
  alert(`Ficou por ${valorTotalProdutos - valorDescontado}`);

} else if (valorTotalProdutos >= 500 && valorTotalProdutos < 1000) {
  let valorDescontado = valorTotalProdutos * 0.10;
  alert(`Sua compra no total de ${valorTotalProdutos}`);
  alert(`Teve um desconto de 10% em torno de ${valorDescontado}`);
  alert(`Ficou por ${valorTotalProdutos - valorDescontado}`);

} else {
  let valorDescontado = valorTotalProdutos * 0.15;
  alert(`Sua compra no total de ${valorTotalProdutos}`);
  alert(`Teve um desconto de 15% em torno de ${valorDescontado}`);
  alert(`Ficou por ${valorTotalProdutos - valorDescontado}`);
}
