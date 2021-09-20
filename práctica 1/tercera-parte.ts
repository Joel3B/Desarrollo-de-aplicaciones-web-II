// clases
class Punto {
    x: number;
    y: number;
}

const miPunto = new Punto();
miPunto.x = 0;
miPunto.y = 0;

// por defecto son any
class Punto2 {
    x; // any
    y; // any
}

// inferencia
class Punto3 {
    x = 0; // number
    y = 0; // number
}

class Saludo {
    readonly nombre: string = 'mundo';

    constructor(nuevoNombre: string) {
        if (!!nuevoNombre) {
            this.nombre = nuevoNombre;
        }
    }

    asignarNuevoNombre(nuevoNombre: string) {
        // this.nombre = nuevoNombre; // error, no se puede asginar fuera del constructor
    }
}

const miNombre = new Saludo('Elio');
// miNombre.nombre = 'Alejandro' // error, no se puede asginar fuera del constructor

// constructores
class Punto4 {
    x: number;
    y: number;

    constructor(x = 10, y = 10) {
        this.x = x;
        this.y = y;
    }
}

let miPunto2 = new Punto4();
console.log(miPunto2.x);
console.log(miPunto2.y);

// sobrecarga del constructor
class Punto5 {
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number) {}
}

// super
class Figura {
    lados = 0;
}

class Circulo extends Figura {
    constructor() {
        // this.lados = 2; // error,
        super();
        // a partir de aquí se puede utilizar this
    }
}

// methods
class Video {
    titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    reproducir(): void {
        console.log(`${this.titulo} se está reproduciendo`);
    }
}

const miVideo = new Video('año nuevo');
miVideo.reproducir();

let titulo = 'mi graduación'; // (1)
class Video2 {
    titulo: string; // (2)

    asignarTitulo(nuevoTitulo: string) {
        titulo = nuevoTitulo; // hace referencia a (1)
        this.titulo = nuevoTitulo; // hace referencia a (2)
    }
}

// setters y getters
class Desfile {
    private _participantes = 0;

    get participantes(): number {
        return this._participantes;
    }

    set participantes(v: number) {
        this._participantes = v;
    }
}

const desfileHoy = new Desfile();
desfileHoy.participantes = 100;
console.log(desfileHoy.participantes); // 100

// herencia
interface Encendible {
    encender(): void;
}

// class Television implements Encendible {} // error, no se está implementando la interface

class Television implements Encendible {
    encender(): void {
        console.log('El televisor se ha encendido');
    }
}

// una interface solo verifica que la clase sea equivalente, no cambia tipos
interface Verificable {
    verificar(nombre: string): boolean;
}

class NombreVerificable implements Verificable {
    verificar(nombre): boolean {
        // nombre será tipo any
        return nombre.toLowerCase();
    }
}

// extends
class Animal {
    moverse() {
        console.log('El animal se mueve');
    }
}

class Perro extends Animal {
    ladrar() {
        console.log('El perr ladra');
    }
}

const miPerro = new Perro();
miPerro.moverse();
miPerro.ladrar();

// sobrecarga
class Padre {
    saludar() {
        console.log('Hola');
    }
}

class Hijo extends Padre {
    saludar(nombre?: string) {
        if (!!nombre) {
            console.log(`Hola ${nombre}`);
        } else {
            super.saludar();
        }
    }
}

const hijo = new Hijo();
hijo.saludar();
hijo.saludar('Luis');

// se debe seguir las bases de la clase superior
const h: Padre = new Hijo();

class Definicion {
    nombre = 'definicion';
    constructor() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

// orden de inicialización de las clases
class Implementacion extends Definicion {}

const imp = new Implementacion();

// visibilidad pública
class Saludo2 {
    public saludar() {
        console.log('Saludar!');
    }
}

const inst = new Saludo2();
inst.saludar();

// visibilidad protegida
class Saludo3 {
    protected getDestinatario() {
        return 'amigos';
    }
}

class SaludoEspecial extends Saludo3 {
    saludar() {
        console.log(`Hola ${this.getDestinatario()}`);
    }
}

const saludo: SaludoEspecial = new SaludoEspecial();
saludo.saludar();
// saludo.getDestinatario(); // error, no es pública

// usar métodos protegidos
class Base {
    protected m = 10;
}

class Derivada extends Base {
    m = 15;
}

const der = new Derivada();
console.log(der.m);

// cross-hierarchy protected access
class Base2 {
    protected x: number = 1;
}

class Derivada2 extends Base2 {
    protected x: number = 5;
}

class Derivada3 extends Base2 {
    imprimirX(c1: Derivada3) {
        console.log(c1.x);
    }
}
// si se reemplaza Derivada3 por Derivada2, dará error por no estar en su scope

// visibilidad privada
class Base3 {
    private x = 0;
}

class Derivada4 extends Base3 {
    imprimirX() {
        // console.log(this.x) // error, x es privada
    }
}

const base = new Base3();
// console.log(base.x) // error, x es privada

// cross-hierarchy private access
class A {
    private x = 10;

    public imprimirX(otra: A) {
        console.log(otra.x);
    }
}

const b = new A();
b.imprimirX(new A());

// static members
class MiClase {
    static x = 10;

    static imprimirX() {
        console.log(`El valor de x es: ${this.x}`);
    }

    imprimirX() {
        console.log(`El valor de x en una instancia es: ${MiClase.x}`);
    }
}

MiClase.imprimirX();

console.log(`El valor obtenido de x: ${MiClase.x}`);

const miClase = new MiClase();
miClase.imprimirX();

// los miembros estáticos pueden ser public, protected y private
class MiClase2 {
    private static x = 10;
}

// console.log(MiClase2.x) // error, x es privada

// los métodos estáticos también se heredan
class Base4 {
    static saludar() {
        console.log('Hola mundo');
    }
}

class Derivada5 extends Base4 {}

Derivada5.saludar();

// palabras reservadas en clases
class Base5 {
    // static name = 's!' // palabra reservada
}

// generics
class Caja<T> {
    contenido: T;

    constructor(value: T) {
        this.contenido = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string;
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({ nombre: 'Pelita' });
misJuguetes.push({ nombre: 'Consola' });

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes);

type Maquillaje = {
    nombre: string;
};

const miMaquillaje: Maquillaje[] = [];
miMaquillaje.push({ nombre: 'Sombras' });
miMaquillaje.push({ nombre: 'Labial' });

const miCajaDeMaquillaje: Caja<Maquillaje[]> = new Caja(miMaquillaje);

// this types
class Caja2 {
    contenido = '';

    set(valor: string) {
        this.contenido = valor;
        return this;
    }
}

const miCaja: Caja2 = new Caja2();
const valorRetornado = miCaja.set('Joyas');
console.log(miCaja); // instancia, contenido ''
console.log(valorRetornado); // instancia, contenido 'Joyas'

class Caja3 {
    contenido = '';

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    igualQue(otro: this) {
        return otro.contenido === this.contenido;
    }
}

const caja1 = new Caja3('joyas');
const caja2 = new Caja3('joyas');
const caja3 = new Caja3('maquillaje');

console.log(caja1.igualQue(caja2));
console.log(caja1.igualQue(caja3));

// solo se aceptan instancias derivadas de la misma clase
class Caja4 {
    contenido = '';

    igualQue(otro: this) {
        // return otro.contenido === otraInstancia.contenido;
    }
}

class CajaDerivada extends Caja4 {
    otroContenido = '';
}

const base2 = new Caja4();
const derivada = new CajaDerivada();
// derivada.igualQue(base) // error, la base no se extiende de derivada

// parameter properties
class Video3 {
    constructor(
        public readonly nombre:string,
        public readonly duracion:number,
        public readonly formato:'mp4'|'mkv'|'web',
    ) {}
}

const miVideo2: Video3 = new Video3('vacaciones', 60, 'mp4');

console.log(`Mi video de: ${miVideo2.nombre}`);
console.log(`Tiene una duración de: ${miVideo2.duracion} segundos`);
console.log(`Y el formato es: ${miVideo2.formato}`);

// class expressions
const miClase2 = class<T> {
    contenido: T;

    constructor(v: T) {
        this.contenido = v;
    }
};

const miInstancia = new miClase2('Un video de 12 minutos');
console.log(`El contenido del video es: ${miInstancia.contenido}`);
