var jonathan = {
    nombre: "Jonathan",
    apellido: "Santana",
    edad: 23,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)//template string- permite interpolar variables

    if(persona.ingeniero){
        console.log('Ingeniero')
    }
    if(persona.drone){
        console.log('Vuela Drone')
    }
    if(persona.guitarrista){
        console.log('Soy Guitarrista')
    }
    
}

imprimirProfesiones(jonathan)

//Reto 3
function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad > 18){
        console.log(" Jonathan es mayor de edad !!")
    }else{
        console.log(" Jonathan no es mayor de edad :(")
    }

}