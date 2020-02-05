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
imprimirNombreEnMayusculasLocal(nombre)


