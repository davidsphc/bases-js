

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    direccion: {
        ciudad: "New York",
        zip: 354059734503745690876,
        lat: 4230947823,
        lng: 1243092348 // cambio
    }
}



const persona2 = { ...persona }

persona2.nombre = "Peter"

console.log(persona)
console.log(persona2)