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

//OBJETOS -- clase 8
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

/**Clase 9 - desestructuracion
 **/ 
function imprimirNombreEnMayusculasObjetoDes(persona){
    //var nombre= persona.nombre
    var { nombre } = persona //se declara la variable nombre referenciando a la persona.nombre
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


/**Clase 10 - los objetos que se pasan por parametro se pasan por referencia
es decir, si cambiamos un objeto dentro de un metodo, la variable original si cambia**/
/**function cumpleaños(edad){
    edad += 1
}
cumpleaños(dario.edad)//no se ve afectado el objeto
**/
function cumpleaños(persona){
    //persona.edad += 1 //si lo cambia
    return{
        ...persona,
        edad: persona.edad + 1
    }
    //creado un nuevo objeto de persona "mas viejo",
    //por lo que no cambia el original
}

/** Clase 11 - comparaciones
**/
var x= 4, y = '4'
//x==y para saber si son iguales sin ver el tipo de variable
//x===y para ver si son iguales con el tipo de variable
//jonathan==/===dario //compara referencia de donde estan ubicados los objetos
//por lo que dara false, porq son 100pre diferente
var santana= {
    nombre: 'jonathan'
}
var otraPersona1 = {      //santana nunca es igual a otraPersona1 por que son
                          //distinta ubicacion de memoria 
    nombre: 'jonathan'
}
var otraPersona2 = santana //aqui apunta a la misma variable, y si lo cambia en 
                             //ejecucion apuntara el cambio a la misma variable 
                            // si cambia otraPersona2 o santana se reflejara, por el
                            //paso de referencia, osea cambiara en donde se lo modifique.
var otraPersona3 = {
    ...santana, //-> desglosamos el objeto santana
    nombre: 'jonathan'
}
//como es un nuevo objeto, hace otra referencia

