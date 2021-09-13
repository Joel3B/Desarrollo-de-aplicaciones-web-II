var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, 'Paso Fino');
var miAutomovil = construirTransporte(Automovil, 'Toyota');
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi autom\u00F3vil es un " + miAutomovil.nombre);
// parámetros opcionales
function f(n) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
function f2(n) { }
function f3(n) {
    if (n === void 0) { n = 10; }
}
// parámetros opcionales en los callbacks
// como no usar parámetros opcionales
function miIterador(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
miIterador([1, 2, 3], function (a) { return console.log(a); });
miIterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function miIterador2(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
function longitud(x) {
    return x.length;
}
console.log(longitud('hola mundo'));
console.log(longitud([1, 2, 3, 4, 5]));
function calcularLongitud(x) {
    return x.length;
}
console.log(calcularLongitud('hola mundo'));
console.log(calcularLongitud([1, 2, 3, 4, 5]));
// this
var usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    }
};
console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);
// rest parameters
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));
// parameters destructuring
function sumar(num) {
    return num.a + num.b + num.c;
}
var numeros = {
    a: 1,
    b: 2,
    c: 3
};
console.log(sumar(numeros));
function sumar2(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar2(numeros));
function sumar3(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
console.log(sumar3(numeros));
// object types
function saludar(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar({ nombre: 'Luis', edad: 22 }));
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar2({ nombre: 'Elena', edad: 25 }));
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
console.log(saludar3({ nombre: 'Anabel', edad: 30 }));
function imprimir(computador) {
    console.log("\n        Sistema operativo: " + computador.os + "\n        Memoria: " + computador.memoria + "\n        Procesador: " + computador.procesador + "\n        ");
}
imprimir({
    os: 'windows',
    memoria: 8,
    procesador: 'intel'
});
var miCachorro = { raza: 'Shitzu' };
console.log("La raza de mi cachorro es: " + miCachorro.raza);
var Luis = { edad: 20 };
var Pedro = Luis;
Luis.edad++;
var macbookPro = {
    memoria: '16G',
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'Catalina',
    bateria: 'litio',
    monitor: '17 pulgadas',
    teclado: 'español'
};
var ubuntuServer = {
    memoria: '64G',
    procesador: 'intel',
    hdd: '4TB',
    so: 'ubuntu',
    version: 'trusty',
    conexion: 'ethernet'
};
var macbookPro2 = {
    memoria: '16G',
    procesador: 'intel',
    hdd: '1TB',
    so: 'osx',
    version: 'Catalina'
};
var x = {
    contenido: 'hola mundo'
};
if (typeof x.contenido === 'string') {
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleUpperCase());
function setContenido(caja, nuevoContenido) {
    caja.contenido = nuevoContenido;
}
var CajaDeString = { contenido: 'hola mundo' };
var CajaDeNumero = { contenido: 100 };
var CajaDeFecha = { contenido: new Date() };
var CajaDeString2 = { contenido: 'hola mundo' };
var CajaDeNumero2 = { contenido: 100 };
var CajaDeFecha2 = { contenido: new Date() };
// array type
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = ['levantarse', 'lavarse los dientes', 'sacar al perro'];
imprimirTareas(misTareas);
// ReadonlyArray typr
var miLista = ['a', 'b', 'c'];
// miLista.push('d'); Error, solo lectura
// const miLista2 = new ReadonlyArray('a', 'b', 'c'); Error, no existe constructor
var miLista3 = ['a', 'b', 'c'];
var prius = ['Toyota', 2015];
var civic = ['Honda', 2016];
console.log("El Prius es marca: " + prius[0] + " y modelo: " + prius[1]);
console.log("El Civic es marca: " + civic[0] + " y modelo: " + civic[1]);
var prius2 = ['Toyota', 2015];
var marca = prius2[0], modelo = prius2[1];
console.log('La marca del prius es: ', marca);
console.log('El modulo del prius es: ', modelo);
var a = ['a', 1, true, false, true];
var prius3 = ['Toyota', 2014];
// prius3[0] = 'Honda'; Error, solo lectura
