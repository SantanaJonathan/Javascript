/**
 * Clase 27 - clases en JS
 * se borra la funcion heredaDe
 * //las clase en el fondo son prototipos
 */
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre= nombre
        this.apellido= apellido
        this.altura= altura
    }

    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        //es equivalente a:
        var {nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){//null/0 es false, {}/[]/'' van a salir verdadero
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
//lo que se llama herencia, aca se llama extension
}


class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)//accede a los atributos del padre

    }

    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        //es equivalente a:
        var {nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a `)
        if(fn){//null/0 es false, {}/[]/'' van a salir verdadero
            fn(nombre, apellido, true)
        }
    }

}

/**
 * Clase 28 - Funciones como parametros
*/
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah mira! no sabia que eras desarrollador`)
    }  
}

var jonathan = new Persona('jonathan', 'santana', 1.78)
var erika = new Persona('erika', 'santiana', 1.8)
var arturo = new Desarrollador('arturo', 'samaniego', 1.55)

jonathan.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
/**
 * Clase 29 - Asincronismo (CallBacks - funcion q ejecuta -> Respuesta del servidor)
 */
// Javascrip solo ejecuta una tarea (Modelo de concurrencia se llama eventLoop -> no bloquearlo), no es multitrea
//JS tiene una cola de tareas, que se van agregando mientras los callbacks van llegando
//Solo cuando ya no hay mas funciones a ejecutar recibe el CallBack

/**
 * Clase 30 - Como funciona el tiempo en JavaScript -> TiempoJS.html
 */

 /**
  * Clase 31 - CallBacks
  * Se busca jquery para extraer datos de un api con 
  * CDNs (Content Libraries Network) -> servidor q va servir nuestro archivo, 
  * desde la locacion en el planeta mas cercano
  */
/**
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" 
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
        crossorigin="anonymous"></script>
 */
//utilizado en TiempoJS.html y clases.html Jquery y para confirmar se pone $ en Inspeccionar 
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
//para hacer un request - $get del jquery
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true }

/*
Un callback (se ejecuta a lo q se termina) es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.
*/
const onPeopleResponse =  function(people){
    //console.log(arguments)
    console.log(`Hola yo soy ${people.name}`)
}
//$.get(lukeUrl, opts,onPeopleResponse)//luke

/**
 * Clase 32 - Multiples request
 */

/*function obtenerPersonaje(id, callback){
    console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, opts,function(people){
        console.log(`Hola yo soy ${people.name}`)
        if(callback){
            callback()
        }
    })
    
}
*/
//los resultados son asincronicos depende del servidor y de cada uno de los request
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)
//obtenerPersonaje(4)//Dart Vader

/**
 * Clase 33 - Manejando el orden y el asincronismo
 */
//llamadas a los callbacks
//obtenerPersonaje(1, obtenerPersonaje(2))// no se coloca asi porque inmediatamente se invoca
                                        //siempre se invoca la fucion 2

//callbaks hell
//obtenerPersonaje(1,function(){
//    obtenerPersonaje(2,function(){
//        obtenerPersonaje(3)
//    })
//})

/**
 * Clase 34 - Manejo de errores con callbacks
 */
/*
function obtenerPersonaje(id, callback){
    console.log(id)
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(URL, opts, callback)
    .fail(()=>{
        console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })   
}
*/
/*
obtenerPersonaje(1, function(personaje){
    console.log(`Hola yo soy ${personaje.name}`)

    obtenerPersonaje(2,function(personaje){
        console.log(`Hola yo soy ${personaje.name}`)

        obtenerPersonaje(3,function(personaje){
            console.log(`Hola yo soy ${personaje.name}`)

            obtenerPersonaje(4,function(personaje){
                console.log(`Hola yo soy ${personaje.name}`)

                obtenerPersonaje(5,function(personaje){
                console.log(`Hola yo soy ${personaje.name}`)
                })   
            })
        })
    })
})
*/
/**
 * Clase 35 - Promesas
que son hay valores que aun no conocemos. Las promesas tienen tres estados:
pending -> 1er estado de la promesa/ si se resuelve, pasa a la siguiente
fullfilled -> si ocurre algun error en el asincronismo, pasa al sgt estado
.then(val => ..)
rejected -> y si ocurre un error
.catch(err => ..)
Las promesas se invocan de la siguiente forma: 
new Promise ((resolve, reject) => {
    if(todoOK){
        resolve()
    }else{
        reject()
    }
})
*/

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {
        console.log(id)
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(URL, opts, function(data){
            resolve(data)//se ejecuta siempre y cuando se ejecuta el get
        })
        .fail( ()=> reject(id)//rechazar la promesa
        ) 
    })    
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}
/*
obtenerPersonaje(2)
    .then(function (personaje){//.then obtener el valor de la promesa (personaje es igual a la data)
        console.log(`EL personaje 1 es ${personaje.name}`)
    })
    .catch(function(id){//err-> id de personaje/ o tambien .catch(onError)
        onError(id)
    })
*/
/**
 * Clases 36 - Promesas Encadenadas
 */
/*
obtenerPersonaje(1)
    .then(personaje => {//.then obtener el valor de la promesa (personaje es igual a la data)
        console.log(`EL personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then( personaje => {
    console.log(`EL personaje 2 es ${personaje.name}`)
    return obtenerPersonaje(3)
    })
    .then( personaje => {
        console.log(`EL personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then( personaje => {
        console.log(`EL personaje 4 es ${personaje.name}`)
    })
    .catch(onError)
*/
/**
 * Clase 37 - Multiples promesas en paralelo
 */
//guardar en un arryas los id de personajes
//var ids = [1,2,3,4,5]
//recorrere un array y retornar un array de promesas
//var promesas = ids.map(function(id){
//    return obtenerPersonaje(id)
//})
/*
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)//llamar las promesas para que se resuelvan
    .then(personajes => console.log(personajes))
    .catch(onError)
*/
/**
 * Clase 38 - Async-await (lo ultimo asincronismo)
 * se debe utilizar juntos el Async con await
 * await es el que detiene la ejecucion cuando traiga todas las promesas
 * Este metodo clarifica los metodos antes usado
 * No todo los navegadores los soporta esto
 */
async function obtenerPersonajes(){
    var ids = [1,2,3,4,5]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas) //guardar todas las promesas en una variables
        console.log(personajes)
    }catch(id){
        onError(id)
    }
}
obtenerPersonajes()

