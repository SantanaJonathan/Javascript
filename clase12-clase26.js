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
    peso : 75,
    altura: 1.59,
    cantidadDeLibros: 12

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
const comeMucho = () => Math.random() < 0.3 // 30% de los dias - Arrow function
const realizaDeporte = () => Math.random() < 0.4 // de los dias - arrow function
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
 * Clase 17 - 
 */
var contador = 0
const llueve = () => Math.random() < 0.25
do {
    contador++
}while(!llueve()){
    if (contador===1)    
        console.log(`Fui a ver si llovia ${contador} vez`)        
    else
        console.log(`Fui a ver si llovia ${contador} veces`)
}
//2da forma
/**do {
    contador++
}while(!llueve())
    const vezOVeces = () => 
        {
            if (contador===1){    
                return ('vez') 
            }else{
                return ('veces')
            }
        }
console.log(`Fui a ver llovia ${contador} ${vezOVeces()}`)
//3era form
do {
    contador++
}while(!llueve())
console.log(`Fuí a ver si llovía
 ${contador} ${contador > 1 ? 'veces':'vez'} `)
**/

/**
 * Clase 18 - switch
 */

 var signo = prompt('Cual es tu signo')//para peguntar al usuario
switch (signo){
    case 'acuario':
        console.log(`****** ${signo} *******`)
        break;
    case 'piscis':
        console.log(`****** ${signo} *******`)
        break;
    case 'cáncer':
    case 'cancer':
        console.log(`****** ${signo} *******`)
        break;
    case 'tauro':
        console.log(`Si eres de los que ama el arte, la expresión y el color, serás un coleccionista de las cosas que vas juntando en tus viajes.`)
        break;
    default:
        console.log('Este es un signo peculiar y extraño, lo que te hace único')
}
 
/**
 * Clase 19/20 - Arrays/filtrar
 */
var dario = {
    nombre: 'dario',
    apellido: 'guzman',
    altura: 1.55,
    cantidadDeLibros: 20
}
var edison = {
    nombre: 'edison',
    apellido: 'santana',
    altura: 1.89,
    cantidadDeLibros: 34
}
var jesus = {
    nombre: 'jesus',
    apellido: 'quispillo',
    altura: 1.8,
    cantidadDeLibros: 3
}

var personas = [jonathan, dario, edison, jesus]
//personas[0].altura/personas[0]['altura'] - acceder a la altura del 1er elemento
for(var i= 0; i< personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}
//filtrar persona altas
//const esAlta = persona => persona.altura >= 1.8 //arrow function
const esBaja = ({altura}) => altura < 1.8 //arrow function
var personasBajas = personas.filter(esBaja)//condicion debe ser una funcion, y devuelve un nuevo array 
                                           //y no modifica el original
console.log(` Peronas bajas son : ${personasBajas}`)
//var personasAltas = personas.filter(function (persona) {
//    return persona.altura >= 1.8
//})//funcion anonima

/**
 * Clase 21 - transformar un array
 */
/**
 * Se modifica el objeto original lo que se pasara al map a crear un nuevo array
 const pasarAlturaACms = persona => {
    persona.altura *= 100
    return persona 
}
 
 * Nomenclatura completa
const pasarAlturaACms = persona => {
    return {//devolvemos un nuevo objeto, para q no altere al original
        ...persona,
        altura: persona.altura * 100
    }
}
**/
//Nomenclatura simplificada
const pasarAlturaACms = persona => ({//arrow function seguido de () retorna algo nuevo
        ...persona,
        altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)//map, devuelve un nuevo array 
                                                //y modifica el original solo si la
                                                //arrow function modifica el obejto tambien
console.log(personasCms)

/**
 * Clase 22 - Reducir un Array
 */
//var acum = 0
//for (var i=0; i < personas.length; i++){
//    acum = acum + personas[i].cantidadDeLibros
//}
//metodo reducer equivalente a lo de arriba
//const reducer = (acum, personas) => {
//    return acum + persona.cantidadDeLibros
//}//equivalente al de abajo
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)//reduce empleada para utilizar reducer
console.log (`En total todos tienen ${totalDeLibros} libros`)

/**
 * Clase 23 - clases en javascrip
 */
function heredaDe(prototipoHijo,prototipoPadre){
    var fn = function () {//function anonima
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn //decir al proto hijo quien va ser su padre
    prototipoHijo.prototype.constructor = prototipoHijo //*ojo
    }
} 
 //Clase-Objeto
function Persona(nombre, apellido, altura){//similar al constructor
    //asignacion con this
    this.nombre = nombre
    this.apellido = apellido
    this.altura= altura
}

//funcion saludar -> para llamarlo es "persona.saludar()"
Persona.prototype.saludar = function () {//arrowFunction
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

//Tarea
Persona.prototype.soyAlto = function(){
    if (this.altura >= 1.8)
        console.log('Soy alto')
    else
        console.log('No soy alto')
}
//var jonathanObjeto= new Persona('Jonathan', 'Santana',1.89) //instacia de objeto
//nota -> siempre definir la funciones y clase primero, antes que la instancia

/**
 * Clase 24 - Modificando prototipo
 */
//ejemplo de la tarea anterior
Persona.prototype.soyAltoB = function(){
    return this.altura > 1.8
}
//Persona.prototype.soyAltoB = () => this.altura > 1.8 //arrowFunction -> this hace referencia a window
//por lo tanto sale undefined porque apunta a un this en el exterior y no al objeto
//"this === window -> true"
//var erika = new Persona('Erika', 'Luna', 1.56)
//var arturo = new Persona('Arturo', 'Sanchez', 1.82)

/** Clase 26
 * JS no soporta la herencia, porque no soporta las clase
 * Hay objeto, prototipos que si los reconoce -> herencia prototipal  
 */
//function heredaDe(prototipoHijo,prototipoPadre){
//} "esta escrita arriba de Persona"

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)//anteponerse de los metodos de Desarrollador

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
}










