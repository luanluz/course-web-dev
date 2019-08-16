const produto =
[
    { nome: 'Notebok', preco: 3000, fragil: true },
    { nome: 'iPad', preco: 5000, fragil: true },
    { nome: 'Copa de Vidro', preco: 5, fragil: true },
    { nome: 'Copa de Metal', preco: 12, fragil: false }
]

// Jeito tradicional
let maiorPreco = -300;
let menorPreco = 300;

for(let i=0; i<produto.length; i++)
{
    if(produto[i].preco > maiorPreco)
    {
        maiorPreco = produto[i].preco
    }

    if(produto[i].preco < menorPreco)
    {
        menorPreco = produto[i].preco
    }
}

 console.log(maiorPreco)
 console.log(menorPreco)


// Jeito novo
console.log(produto.filter(
        function(p)
        {
            return false
        }
    )
)

const fragil = produto => produto.fragil
const barato = produto => produto.preco <= 12

console.log(produto.filter(barato))