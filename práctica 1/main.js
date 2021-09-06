// detección de errores
var rectangulo = { altura: 10, anchura: 15 };
// const area = rectangulo.altura * rectangulo.anchuRa; Error, anchuRa no existe
// let a = (4 Error, no se ha cerrado la paréntesis
// mensaje de saludo
function saludar(nombre) {
    return 'Hola, ' + nombre;
}
console.log(saludar('Joel')); // Hola, Joel
// boolean
var esVerdadero = true;
console.log(esVerdadero); // true
// number
var entero = 6;
var hexadecimal = 0xf00d;
var binario = 10;
var octal = 484;
// comillas simples y dobles
var marca = 'toyota';
var modelo = "toyota";
// string 'template'
var nombre = 'Raul';
var apellido = 'Jimenez';
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
// arrays
var listaDeNumeros = [1, 2, 3];
// listaDeNumeros.push('a'); Error, must be only same type
var listaDeNumeros2 = [1, 2, 3];
// tuples
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El nombre es " + futbolista[0]); // El nombre es Raul Jimenez
console.log("La edad es " + futbolista[1]); // La edad es 28
// enums
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma); // 0
console.log(MarcasDeAutos[0]); // Toyota
// any
var variableSinTipo = 'hola pedrito';
variableSinTipo = 100;
// unknown
var valorDesconocido = 4;
valorDesconocido = true;
// void
function saludar2() {
    console.log('Hola mundo... Cruel');
}
saludar2(); // Hola mundo... Cruel
// null | undefined
var variableSinDefinir = undefined;
var variableNula = null;
// never
function error(mensaje) {
    throw new Error(mensaje);
}
function fallo() {
    return error('Reportar fallo');
}
function loopInfinito() {
    while (true) { }
}
// objects
// declare function crear(o: object): void;
function crear(o) {
    console.log(o);
}
crear({ prop: 0 }); // { prop: 0 }
crear(null); // null
crear(undefined); // undefined
crear([]); // []
// crear(false); Error, no se pueden tipos primitivos
// union
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1); // El id es 1
imprimirId('abc'); // El id es abc
function imprimirId2(id) {
    if (typeof id === 'string') {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirId('id'); // El id es id
imprimirId(100.99999); // El id es 100.99999
// type assertions
var algunValor = 'esto es un string';
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
// parámetros de una función
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3('Nubia'); // Hola Nubia
// tipos de valor de retorno
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado); // 100
// funciones anónimas
var nombres = ['Juan', 'Pedro', 'Luis'];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
// JUAN
// PEDRO
// LUIS
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenadas(punto) {
    console.log("La coordenada x es " + punto.x);
    console.log("La coordenada y es " + punto.y);
}
// interfaces
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: 'Esta es mi etiqueta' };
imprimirEtiqueta(miEtiqueta); // Esta es mi etiqueta
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
imprimirEtiqueta2(miEtiqueta); // Esta es mi etiqueta
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto = { x: 10, y: 20 };
// literales
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero'); // soltero
// funciones como expresiones
function saludar4(fn) {
    fn('Hola mundo');
}
function imprimirEnConsola(s) {
    console.log(s);
}
