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

/**
 * Clase 50 - Closures de JS
 * 
 */
function crearSaludo(finalDeFrase){//creadora d e otras funciones
    return function(nombre){//funcion anonima el cual recuerda el parametro finalDfrase
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}
//otra forma
// const saludar = (saludo) => (nombre) => 
// console.log(`${saludo} ${nombre}`)

// const saludando = saludar('Hola q tal')
// saludando('Jonathan')

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Jonathan')
saludoMexicano('Jonathan')
saludoColombiano('Jonathan')

/**
 * Clase 51 - Estructura de datos Inmutables
 * Las estructuras de datos inmutables forman parte de los principios
 * de la Programación Funcional y nos permiten evitar tener efectos 
 * colaterales en los datos. En otras palabras, que hayan modificaciones
 * en las variables sin nuestro consentimiento, produciendo comportamientos
 * inesperados en el programa.
 */
//como en const se puede modificar, entonces en un objeto tambien es posible
const jonathan1 = {
    nombre: 'Jonathan',
    apellido: 'Santana',
    edad: 24
}
//arrow function, el cual modifica al objeto jonathan1
//const cumpleaños = persona =>  persona.edad++

const cumpleañosInmutable = persona => ({//creando un nuevo objeto en memoria
    ...persona, //desglosando al objeto, por lo que no modificara el objeto que se le  pasa
    edad: persona.edad + 1
})
//entonces hay que definir variables para guardar el objeto con edad mas vieja
//const jonathan25 = cumpleañosInmutable(jonathan1)...etc

/**
 * Clase 52 - cambiando el contexto-alcance al llamr a una funcion
 * en ciertos casos, cuando intentamos referirnos a this en alguna parte del
 * código, es posible que tengamos un comportamiento inesperado, porque el
 * contexto quizás no sea el que esperamos.
Existen al menos tres maneras de cambiar el contexto de una función.
Usando el método .bind, enviamos la referencia a la función sin ejecutarla, pasando el contexto como parámetro (osea el objeto- bind(objeto)).
Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado
Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
 */
const yesika = {
    nombre: 'Jesika',
    apellido: 'Cortez'
}
function saludar(saludo = 'Hola'){//crea por defecto un saludo
    console.log(`${saludo}, mi nombre es ${this.nombre}`)//out -> undefinide(hace referencia a window)
}
// por defecto vendria siendo una funcion, llamar saludarAJonathan()
// const saludarAJonathan = saludar.bind(jonathan1)//tienen el this atado al objeto
// const saludarAJesika = saludar.bind(yesika)
//                                 //parametro pasado a la funcion
// setTimeout(saludar.bind(jonathan, 'Hola che'),1000)//lo imprime y se ve por un rato que atamos el this con el objeto

saludar.call(jonathan1, 'Hola che')//llama la funcion y lo ejecuta
saludar.apply(jonathan1, ['Hola che'])// lo mismo que el call pero con [array]
//Nota -> hay siempre aegurarse a quien se dirige el this, por lo que todo es asincrono

/**
 * Clase 53 - (;) en JS
 * opcional -> o
 * obligatorio -> a
 * inecesario -> i
 */
alert('Hola'); //o
function saludando(){
    console.log("Hola")
};  //i

for(var i = 0; i < 2 ; i++){
}; //i

//cuando empezamos con una nueva linea, luego con un array
console.log('Hola mi nombre es Jonathan'); //a
[1, 2, 3].forEach( n => console.log (n*2))

const nombre = 'Jonathan'
console.log('Hola mi nombre es Jonathan'); //a
`${nombre} es un desarrollador`

function calcularDoble(numero){
    //return//error -> lo que q JS por cada Enter lo hace ver como un ; 
    return{
        original: numero, doble: numero * 2
    }
}




