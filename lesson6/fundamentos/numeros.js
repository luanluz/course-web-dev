// Irá entender somente como '1'
const peso1 = 1.0

// Irá entender como '1.5'
const peso2 = 1.5

// Transformar string para número
const peso3 = Number('2.0')

console.log(peso1, peso2)

// Retorna um boolean, caso o peso1 seja
// inteiro
console.log(Number.isInteger(peso1))

// Dará preferência para a string e irá concatenar 
const peso4 = '3.0'
console.log(peso1 + peso4)


const nota1 = 7.548
const nota2 = 8.934

const total = nota1*peso1 + nota2*peso2
console.log(total)

const media = total / (peso1 + peso2)
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString)
console.log(media.toString(2))
console.log(typeof media)


const raio = 6.5
const area = Math.PI * Math.pow(radio, 2)
console.log(area)
console.log(typeof Math)