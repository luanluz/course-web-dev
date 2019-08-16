Number.prototype.entre = function(inicio, fim)
{
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota)
{
    if (nota.entre(9,10))
    {
        console.log("Muito bom.")
    }
    else if(nota.entre(7,8.9))
    {
        console.log("Bom.")
    }
    else if(nota.entre(5, 6.9))
    {
        console.log("Regular")
    }
    else if(nota.entre(0, 4.9))
    {
        console.log("Ruim")
    }
    else
    {
        console.log("Nota inválida.")
    }
}


imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(6);
imprimirResultado(100);