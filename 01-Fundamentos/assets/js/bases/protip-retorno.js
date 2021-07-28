// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona('Jesus', 'Crispin')
console.log(persona)

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(edad);
    // console.log(args);
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Jesus', 'Hola');
console.log({casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona('Jesus', 'Crispin')
console.log({nuevoApellido});


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
// TODO: Deestructuraión de un objeto en la función
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );