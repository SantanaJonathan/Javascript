var jonathan = {
    nombre: "Jonathan",
    apellido: "Santana",
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true,
    peso : 75

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
    if (esMayorDeEdad(persona)){//------------------------------
        //console.log(" Jonathan es mayor de edad !!")          |
        console.log(` ${persona.nombre} es mayor de edad !`)//  |
    }else{                                                  //  |
        console.log(` ${persona.nombre} es menor de edad !`)//  |
    }
}

/**
Clase 13 - valores que retornan valores booleanos
**/
const MAYORIA_DE_EDAD = 18 //CONSTANTE
//function esMayorDeEdad(persona){
//    return persona.edad >= MAYORIA_DE_EDAD
//}                                                         //  |
                                                            //  |  
/**Clase 14 - Arrow functions                                   v
se asigna a una variable la funcion
**/
//const esMayorDeEdad = function (persona){//se agrega const, entender es una funcion y no una var 
//        return persona.edad >= MAYORIA_DE_EDAD
//}

//funcion equivalente a la de arriba
//const esMayorDeEdad = persona => // persona=>, entender es una funcion y no una var 
//    persona.edad >= MAYORIA_DE_EDAD

// de forma des-estructurado el objeto
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD//se dirige a la edad del objeto a pasar
function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    }
}
/** Reto 4
const MAYORIA_DE_EDAD = 18
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD//se dirige a la edad del objeto a pasar
function imprimirSiEsMayorDeEdad(persona){
    if(!esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es Mayor de Edad.`)
    }else{
        console.log(`${persona.nombre} es Menor de edad.`)
    }
}
**/

/**
 * Clase 15/16 - for/while-debbuger
 */
console.log(`Al inicio del año ${jonathan.nombre} pesa ${jonathan.peso} Kg`)
//recordar cuando es un objeto si es modificado en una funcion, se vera modificado fuera de la funcion tambien
//arrow function
const INCREMENTO_PESO = 0.3 //gramos
const DIAS_DEL_AÑO = 365
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO

/** 
for(var i= 1; i < DIAS_DEL_AÑO; i++){
    var random = Math.random() //entre 0-1

    if( random < 0.25){
        //aumentar de peso
        aumentarPeso(jonathan)
    }else if (random < 0.5){
        //bajar de peso
        adelgazarPeso(jonathan)
    }
}
console.log(`Al final del año ${jonathan.nombre} pesa ${jonathan.peso.toFixed(2)} Kg`)
**/
const META = jonathan.peso - 3
const comeMucho = () => Math.random() < 0.3 // 30% de los dias
const realizaDeporte = () => Math.random() < 0.4 // de los dias
var dias = 0

while (jonathan.peso > META){
    //debugger
    if(comeMucho()){
        aumentarPeso(jonathan)
    }
    if(realizaDeporte()){
        adelgazarPeso(jonathan)
    }
    dias += 1
}
console.log(`Pasaron ${dias} días hasta que ${jonathan.nombre} adelgazó 3 Kg`)
/**
 * 
 */
