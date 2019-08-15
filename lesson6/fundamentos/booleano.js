let texto = false

console.log(texto)

console.log(" ")
console.log('Elementos VERDADEIROS: ')
console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})

console.log(" ")
console.log('Elementos FALSOS: ')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)


// diferença entre null e undefined
console.log(" ")
let vnull = null
let vundefined
console.log(vnull)
console.log(vundefined)

console.log(" ")
console.log('Testando "ou"')
console.log(!!('' || null || undefined || " "))
console.log('Testando "e"')
console.log(!!('' && null && undefined ))