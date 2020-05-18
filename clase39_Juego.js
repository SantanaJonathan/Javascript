/**
 * Clase 39 - Juego
 * comenzando el juego.html
 * 
 * Clase 40 - generando una secuencias de numeros
 * 
 * Clase 41 - Iluminando secuencias de colores
 * 
 * diferencia entre el uso de let y var para la declaración de variables y cómo esta diferencia afecta el alcance de la variable dentro de un ciclo for. Se recomienda siempre el uso de let cuando se trata de estructuras for, ya que al usar var, el valor de dicha variable se va a remplazar cada vez con la última asignación que se haga, mientras que con let, conservará su valor dentro de cada iteración.
 * Siempre que sea posible debemos usar const sobre let, y let sobre var.
 * 
 * Clase 42 - Obteniendo el input del usuario
 * comentar con Ctrl + boton(] } `)
 * //bind -> atar al juego
 * 
 * Clase 43 - Agregando verificacion del color elegido
 * POr cada eventMouse ir a target y luego a dataset, que aparecera el color y cada elemento
 * que agregue de la sgte forma: data-color:... / data-nombre:... etc
 * <div id="celeste" class="color celeste left" data-color="celeste"></div>
 * 
 * Clase 44 - Agregando los estados finales del juego
 * 
 * Clase 45 - Culminacion del juego
 */

 /**
  * Clase 46 - var,let y const (diferencias)
  */

  var jonathan = {
      nombre: 'Jonathan',
      apellido: 'Santana',
      edad: 24
  }
  function esMayorDeEdad(persona){
      //declarar var como hoshtin, es decir declarado arriba
      //por defecto lo declara asi javascript
    //  var mensaje 
    // if(persona.edad > 18){
    //     mensaje = 'Es mayor de edad'
    // }else{
    //     mensaje = 'Es menor de edad'
    // }
    
    //lo normal q hacemos y que javascript lo declara arriba
    // if(persona.edad > 18){
    //     var mensaje = 'Es mayor de edad'
    // }else{
    //     var mensaje = 'Es menor de edad'
    // }

    //el alcance de let es dentro del bloque del codigo
    // if(persona.edad > 18){
    //     let mensaje = 'Es mayor de edad'
    // }else{
    //     let mensaje = 'Es menor de edad'
    // }

    //por lo que deberia ser asi
    let mensaje
    if(persona.edad > 18){
        mensaje = 'Es mayor de edad'
    }else{
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
  }
  esMayorDeEdad(jonathan)
  //con CONST es una constante que no es modificada, solo inicializada
//   ejemplo:
//   const numeros =[1,2,3,4,5,6]
//   numeros = [1,2] x
//   numeros.push(7)
//   numeros -> [1,2,3,4,5,6,7]
//   *si podemos modificar la variables pero no reasignar

for(let i =0; i < 10 ; i++){//como vimos el alcance del let es solo dentro del bloque 
    console.log(i)
}
//console.log(`termino el for, el valor de i es ${i}`)

/**
 * Clase 47 - Hace cuantos dias naciste (Calculo de fechas)
 */
function diasEntreFechas(fecha1, fecha2){
    const unDia= 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)//retorna la diferencia en milisegundos
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1996, 4, 10)
const años = diasEntreFechas(hoy, nacimiento) / 365
console.log(`Jonathan tienes ${años} de vida!`)

/**
 * Clase 48 - Funciones recursivas
 * Se necesita un caso base
 * y un caso recursivo
 */
 /*
 13 / 4
13 - 4 = 9    1
9 - 4 = 5     1
5 - 4 = 1     1
1 - 4 = -3    0
quiere decir q la division entera es 3/ q el dividendo sea mayor q el divisor
 */

function divisionEntera( dividendo, divisor){
    if(dividendo < divisor ){
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor , divisor)//aqui se va sumando
 }

/**
 * Clase 49 - Memrorización/ ahorrando computo
 * guardar resultados para una busqueda
 */

/*
!6 = 6 * 5 * 4 * 3 * 2 * 1
!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/
// cada funcion puede guardar atributos internos
function factorial(n){

    if(!this.cache){
        this.cache = {}//se crea la cache, como vacio
    }
    debugger
     if(this.cache[n]){//la primera vez es undefined
         return this.cache[n]
     }

    if(n===1){
        return 1
    }
    //return n * factorial(n-1)
    //6*factorial(5)
    //6 * 5 factorial (4) ...etc
    this.cache[n] = n * factorial(n-1)//guardando en la cachet
    //!6 va ser -> lo q esta arriba
    debugger
    return this.cache[n]

}



