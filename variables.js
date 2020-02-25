//variables
var nombre= 'Jonathan'
var edad= 27
edad += 1
var peso= 75
var vino = 203.33
var total= Math.round(vino*66)//para redondear
var total1= vino*66
var total2= total1.toFixed(2)//decimales a mostrar, string
var total2V= parseFloat(total2)

//funciones
function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} año`)
}
imprimirEdad(nombre,edad)

//alcance de la funcion...modificamos la var global
function imprimirNombreEnMayusculas(){
    nombre= nombre.toUpperCase()
    console.log(nombre)
}

function imprimirNombreEnMayusculasLocal(nombre){//solo local
    nombre= nombre.toUpperCase()
    console.log(nombre)
}

//OBJETOS
var jonathan = {
    apellido: 'Santana',
    nombre: 'Jonathan',
    edad: 28
}
var dario = {
    apellido: 'Guzman',
    nombre: 'Dario',
    edad: 22
}
function imprimirNombreEnMayusculasObjeto(persona){
    console.log(persona.nombre.toUpperCase())
}
function imprimirNombreEnMayusculasObjetoxVariable({ apellido }){
    console.log(apellido.toUpperCase())
}
//imprimirNombreEnMayusculasObjetoxVariable(jonathan)
//imprimirNombreEnMayusculasObjetoxVariable(dario)
//imprimirNombreEnMayusculasObjetoxVariable({apellido: 'Quispe'})//crearlo

//desestructuracion 
function imprimirNombreEnMayusculasObjetoDes(persona){
    //var nombre= persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}
//imprimirNombreEnMayusculasObjetoDes(jonathan)
function imprimirNombreYEdad(persona){//reto2
    //var nombre= persona.nombre
    var { nombre } = persona
    var { edad } = persona
    console.log('Hola me llamo ' + nombre.toUpperCase() + ' y tengo '+ edad)
}
imprimirNombreYEdad(dario)

//los objetos que se pasan por parametro se pasan por referencia
// es decir cambian de la variable original
function cumpleaños(persona){
    //persona.edad += 1 //si lo cambia
    return{
        ...persona,
        edad: persona.edad + 1
    }
    //creado un nuevo objeto mas viejo,
    //por lo que no cambia el original
}

//comparaciones
var x= 4, y = "4"
//x==y para saber si son iguales sin ver el tipo de var
//x===y para ver si son iguales con el tipo de var
//jonathan==dario //compara referencia de donde estan ubicados objetos
//por lo que dara false, porq son 100pre diferente
var santana= {
    nombre: 'jonathan'
}
//var otraPersona = jonathan
//aqui apunta a la misma variable, y si lo cambia en 
//ejecucion apuntara el cambio a la misma variable 
var otraPersona = {
    ...santana,
    nombre: 'jonathan'
}
//como es un nuevo objeto, hace otra referencia

