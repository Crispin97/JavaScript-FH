
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

class Heroe extends Persona {
    
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los avenger'
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy Spiderman');
console.log(spiderman);
spiderman.quienSoy()