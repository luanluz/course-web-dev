// Concatenação do jeito tradicional
const nome = 'Luan'
const concatenacao = nome + ' Luz'
console.log(concatenacao)

// Concatenação de uma forma mais moderna
const template = `${nome} Luz`
console.log(template)
console.log(`10 + 15 = ${10+15}`)

// Função arrow
const caixa = texto => texto.toUpperCase()
console.log(`Olá, ${caixa('luan')}`)