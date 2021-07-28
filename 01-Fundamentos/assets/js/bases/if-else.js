let a = 5;


if ( a >= 10 ) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}


// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}



// Sin usar If Else, o Switch, únicamente objetos
dia = 4; // 0:domingo, 1: lunes....

const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};

const diaSemana2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

console.log(diaSemana[dia] || 'Dia no definido');