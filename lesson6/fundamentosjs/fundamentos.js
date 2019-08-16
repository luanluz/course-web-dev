// JavaScript permite execução de uma mesma instrução
// em linhas separadas
console.
log("LUAN")

{
    {
        // No JS existem instruções (linhas) e blocos 
        console.log("outra instrução")
    }
}

// Permite dupla declaração da mesma variavel, permite alterar o valor
// e não tem o escopo limitado, pois pode ser acessado fora de um bloco de
// instrução
var x = "texto"

// Não permite dupla declaração, somente alterar o valor e tem
// o escopo limitado.
let y = "outro texto"

console.log(x, y)

// Constante não permite a alteração do valor,
// permite somente uma declaração
const z = 5;

