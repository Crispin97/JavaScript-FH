
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!!false);// false

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log('=========');
console.log(regresaFalse() && regresaTrue());

console.log('=========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

//Ya no sigue ejecutando el codigo cuando el primero valor de la condición es false
console.log('==== && ====');
regresaFalse() && regresaTrue()

console.log('4 condiciones', true && true && true && false);//false


console.log('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones', true || true || true || false);// true



console.warn('Asignaciones')
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// const a1 = true && 'Hola Mundo' && 150;
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy de nuevo falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy de nuevo falso';

console.log({a1, a2, a3, a4, a5});