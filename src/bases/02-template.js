

const nombre = "daBiD "
const apellido = "eRnandes"



const nombreCompleto = `${nombre} ${apellido}`

// console.log(`Resultado: ${1 + 5}`)

function getSaludo( nombre ) {
    return "hola" + nombre
}


console.log(`Este es un texto: ${ getSaludo(nombre) }`)