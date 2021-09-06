// detección de errores
const rectangulo = { altura: 10, anchura: 15 };
// const area = rectangulo.altura * rectangulo.anchuRa; Error, anchuRa no existe

// let a = (4 Error, no se ha cerrado la paréntesis

// mensaje de saludo
function saludar(nombre) {
    return 'Hola, ' + nombre;
}

console.log(saludar('Joel')); // Hola, Joel

// boolean
let esVerdadero = true;
console.log(esVerdadero); // true

// number
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// comillas simples y dobles
let marca: string = 'toyota';
let modelo: string = "toyota";

// string 'template'
let nombre: string = 'Raul';
let apellido: string = 'Jimenez';
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

// arrays
let listaDeNumeros: number[] = [1, 2, 3];
// listaDeNumeros.push('a'); Error, must be only same type
let listaDeNumeros2: Array<number> = [1, 2, 3];

// tuples
let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28];
console.log(`El nombre es ${futbolista[0]}`); // El nombre es Raul Jimenez
console.log(`La edad es ${futbolista[1]}`); // La edad es 28

// enums
enum MarcasDeAutos {
    Toyota,
    Chevrolet,
    Ford,
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;
console.log(tacoma); // 0
console.log(MarcasDeAutos[0]); // Toyota

// any
let variableSinTipo: any = 'hola pedrito';
variableSinTipo = 100;

// unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;

// void
function saludar2(): void {
    console.log('Hola mundo... Cruel');
}
saludar2(); // Hola mundo... Cruel

// null | undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

// never
function error(mensaje: string): never {
    throw new Error(mensaje);
}

function fallo(): never {
    return error('Reportar fallo');
}

function loopInfinito(): never {
    while (true) {}
}

// objects
// declare function crear(o: object): void;
function crear(o: object): void {
    console.log(o);
}

crear({ prop: 0 }); // { prop: 0 }
crear(null); // null
crear(undefined); // undefined
crear([]); // []
// crear(false); Error, no se pueden tipos primitivos

// union
function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
}

imprimirId(1); // El id es 1
imprimirId('abc'); // El id es abc

function imprimirId2(id: number | string) {
    if (typeof id === 'string') {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirId('id'); // El id es id
imprimirId(100.99999); // El id es 100.99999

// type assertions
let algunValor: unknown = 'esto es un string';
let longitudDelString: number = (algunValor as string).length;
let longitudDelString2: number = (<string>algunValor).length;

// parámetros de una función
function saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludar3('Nubia'); // Hola Nubia

// tipos de valor de retorno
function elevarAlCuadrado(base: number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado); // 100

// funciones anónimas
const nombres = ['Juan', 'Pedro', 'Luis'];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
// JUAN
// PEDRO
// LUIS

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});
// JUAN
// PEDRO
// LUIS

// aliases

type Punto = {
    x: number;
    y: number;
};

function imprimirCoordenadas(punto: Punto) {
    console.log(`La coordenada x es ${punto.x}`);
    console.log(`La coordenada y es ${punto.y}`);
}

// interfaces
function imprimirEtiqueta(etiqueta: { label: string }) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: 'Esta es mi etiqueta' };
imprimirEtiqueta(miEtiqueta); // Esta es mi etiqueta

interface Etiqueta {
    label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

imprimirEtiqueta2(miEtiqueta); // Esta es mi etiqueta

// propiedades opcionales de las interfaces
interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}

crearCuadrado({ ancho: 10 });

// propiedades de solo lectura de las interfaces
interface Punto2 {
    readonly x: number;
    readonly y: number;
}

let punto: Punto2 = { x: 10, y: 20 };
// punto.x = 20; Error, es solo lectura

// interfaces vs types
interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
};

// extendiendo una interface
interface Auto extends Transporte {
    ruedas: number;
}

// extendiendo un type
type Cuadrado2 = Figura & {
    lados: 4;
};

// literales
function imprimir(estadoCivil: 'soltero' | 'casado') {
    console.log(estadoCivil);
}

imprimir('soltero'); // soltero

// funciones como expresiones
function saludar4(fn: (a: string) => void) {
    fn('Hola mundo');
}

function imprimirEnConsola(s: string) {
    console.log(s);
}
