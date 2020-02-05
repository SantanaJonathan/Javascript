
var nombre,apellido

nombre= 'Jonathan'
apellido= 'Santana'

var nombreM= nombre.toUpperCase()
var apellidoM= apellido.toLowerCase()
var apellidoLetraDelNombre= nombre.charAt(0);
var cantidadDeLetrasDelNombre= nombre.length
//para concatenar
var nombreCompleto= `${nombre} ${apellido.toUpperCase()}`

//pequeño string
var str= nombre.charAt(1)+nombre.charAt(2)
var str1= nombre.substr(1,2)

console.log('Hola ' +  nombreM+' ' + apellidoM)
