
const jacm = {
    nombre: 'Jesus',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad ${ this.edad }`);
    }
}

const andrea = {
    nombre: 'Andrea',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad ${ this.edad }`);
    }
}

// jacm.imprimir()
// andrea.imprimir()

function Persona(nombre, edad){
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
const andy = new Persona('Andrea', 28);
// console.log(maria);
maria.imprimir()
andy.imprimir()