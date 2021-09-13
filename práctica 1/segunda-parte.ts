// constructor signature
interface Transporte {
    nombre: string;
}

class Caballo implements Transporte {
    constructor(public nombre: string) {}
}

class Automovil implements Transporte {
    constructor(public nombre: string) {}
}
type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, 'Paso Fino');
const miAutomovil = construirTransporte(Automovil, 'Toyota');

console.log(`Mi caballo se llama ${miCaballo.nombre}`);
console.log(`Mi automóvil es un ${miAutomovil.nombre}`);

// parámetros opcionales
function f(n: number) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}

function f2(n?: number) {}
function f3(n = 10) {}

// parámetros opcionales en los callbacks
// como no usar parámetros opcionales
function miIterador(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

miIterador([1, 2, 3], (a) => console.log(a));
miIterador([1, 2, 3], (a, i) => console.log(a, i));

function miIterador2(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// overload

function longitud(x: any[]): number;
function longitud(x: string): number;
function longitud(x: any): number {
    return x.length;
}
console.log(longitud('hola mundo'));
console.log(longitud([1, 2, 3, 4, 5]));

function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(calcularLongitud('hola mundo'));
console.log(calcularLongitud([1, 2, 3, 4, 5]));

// this
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

// rest parameters

function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));

// parameters destructuring
function sumar(num: { a: number; b: number; c: number }): number {
    return num.a + num.b + num.c;
}

const numeros = {
    a: 1,
    b: 2,
    c: 3,
};

console.log(sumar(numeros));

function sumar2({ a, b, c }) {
    return a + b + c;
}

console.log(sumar2(numeros));

function sumar3({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c;
}

console.log(sumar3(numeros));

// object types
function saludar(persona: { nombre: string; edad: number }) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar({ nombre: 'Luis', edad: 22 }));

// como interfaz
interface Persona {
    nombre: string;
    edad: number;
}

function saludar2(persona: Persona) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar2({ nombre: 'Elena', edad: 25 }));

// como alias
type Persona2 = {
    nombre: string;
    edad: number;
};

function saludar3(persona: Persona2) {
    return `Hola ${persona.nombre}`;
}

console.log(saludar3({ nombre: 'Anabel', edad: 30 }));

// propiedades opcionales
interface Computadora {
    os: 'windows' | 'linux' | 'mac';
    monitor?: 'crt' | 'led';
    memoria: number;
    procesador: 'intel' | 'amd';
}

function imprimir(computador: Computadora) {
    console.log(
        `
        Sistema operativo: ${computador.os}
        Memoria: ${computador.memoria}
        Procesador: ${computador.procesador}
        `
    );
}

imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel',
});

// readonly properties
interface Perro {
    readonly raza: string;
}

const miCachorro: Perro = { raza: 'Shitzu' };
console.log(`La raza de mi cachorro es: ${miCachorro.raza}`);
// miCachorro.raza = 'pitbull'; Error, Propiedad de solo lectura

interface Persona3 {
    edad: number;
}

interface EdadNoEscribible {
    readonly edad: number;
}

const Luis: Persona3 = { edad: 20 };
const Pedro: EdadNoEscribible = Luis;
Luis.edad++;
// Pedro.edad++; Error, propiedad de solo lectura

// extender tipos
interface Direccion {
    nombre: string;
    calle: string;
    numero: number;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeDepartamento {
    nombre: string;
    calle: string;
    numero: number;
    unidad: string;
    ciudad: string;
    pais: string;
    codigoPostal: string;
}

interface DireccionDeUnDepartamento extends Direccion {
    unidad: string;
}

// extender múltiples tipos
interface Computadora2 {
    memoria: string;
    procesador: string;
    hdd: string;
}

interface SistemaOperativo {
    so: string;
    version: string;
}

interface Portatil extends Computadora2, SistemaOperativo {
    bateria: string;
    monitor: string;
    teclado: string;
}

interface Servidor extends Computadora2, SistemaOperativo {
    conexion: string;
}

const macbookPro: Portatil = {
    memoria: '16G',
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'Catalina',
    bateria: 'litio',
    monitor: '17 pulgadas',
    teclado: 'español',
};

const ubuntuServer: Servidor = {
    memoria: '64G',
    procesador: 'intel',
    hdd: '4TB',
    so: 'ubuntu',
    version: 'trusty',
    conexion: 'ethernet',
};

// intersection types
type Portatil2 = Computadora2 & SistemaOperativo;

const macbookPro2: Portatil2 = {
    memoria: '16G',
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'Catalina',
};

// object types, generics
interface Caja {
    contenido: any;
}

interface Caja2 {
    contenido: unknown;
}

let x: Caja2 = {
    contenido: 'hola mundo',
};

if (typeof x.contenido === 'string') {
    console.log(x.contenido.toLocaleLowerCase());
}

console.log((x.contenido as string).toLocaleUpperCase());

interface CajaNumber {
    contenido: number;
}

interface CajaString {
    contenido: string;
}

interface CajaBoolean {
    contenido: boolean;
}

function setContenido(caja: CajaNumber, nuevoContenido: string): void;
function setContenido(caja: CajaNumber, nuevoContenido: number): void;
function setContenido(caja: CajaNumber, nuevoContenido: boolean): void;
function setContenido(caja: { contenido: any }, nuevoContenido: any) {
    caja.contenido = nuevoContenido;
}

// generics
interface Caja3<T> {
    contenido: T;
}

let CajaDeString: Caja3<string> = { contenido: 'hola mundo' };
let CajaDeNumero: Caja3<number> = { contenido: 100 };
let CajaDeFecha: Caja3<Date> = { contenido: new Date() };

type Caja4<T> = {
    contenido: T;
};

let CajaDeString2: Caja4<string> = { contenido: 'hola mundo' };
let CajaDeNumero2: Caja4<number> = { contenido: 100 };
let CajaDeFecha2: Caja4<Date> = { contenido: new Date() };

// array type
const imprimirTareas = (v: Array<string>) => {
    v.forEach(() => {
        console.log(v);
    });
};

const misTareas: string[] = ['levantarse', 'lavarse los dientes', 'sacar al perro'];

imprimirTareas(misTareas);

// ReadonlyArray typr
const miLista: ReadonlyArray<string> = ['a', 'b', 'c'];
// miLista.push('d'); Error, solo lectura

// const miLista2 = new ReadonlyArray('a', 'b', 'c'); Error, no existe constructor

const miLista3: ReadonlyArray<string> = ['a', 'b', 'c'];

// tuples
type Auto = [string, number];

const prius: Auto = ['Toyota', 2015];
const civic: Auto = ['Honda', 2016];

console.log(`El Prius es marca: ${prius[0]} y modelo: ${prius[1]}`);
console.log(`El Civic es marca: ${civic[0]} y modelo: ${civic[1]}`);

const prius2: [string, number] = ['Toyota', 2015];

const [marca, modelo] = prius2;

console.log('La marca del prius es: ', marca);
console.log('El modulo del prius es: ', modelo);

// rest tuples
type StringNumberBoolean = [string, number, ...boolean[]];
const a: StringNumberBoolean = ['a', 1, true, false, true];

// readonly tuples
type Auto2 = readonly [string, number];

const prius3: Auto2 = ['Toyota', 2014];
// prius3[0] = 'Honda'; Error, solo lectura
