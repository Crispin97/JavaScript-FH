
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre= 'Sin nombre', codigo = 'Sin código', frase='Sin frase'){
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }



    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi nombre es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy()
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy Spiderman');
const ironman = new Persona('Tony Stark', 'Iron man', 'Soy Iron man');

// console.log(ironman);

spiderman.miFrase();
// ironman.miFrase()

spiderman.setComidaFavorita = 'El pay de cereza de la tía May'
// spiderman.nemesis = 'Duende verde'

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo'
console.log(Persona.propiedadExterna);
console.log(Persona);