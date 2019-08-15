const valores = [10, 5, 9.3, 8]
console.log(valores[0])

valores[100] = 100
console.log(valores[100])
console.log(valores.length)

valores.push('teste')
console.log(valores.length)
console.log(valores[101])
console.log(valores.pop())
console.log(valores[101])

console.log(typeof valores)