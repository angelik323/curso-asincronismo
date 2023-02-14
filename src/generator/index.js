/**
 * Implementar funciones que van a hacer un llamado, iterar por algunos elementos según sea la necesidad obtenerlos
 * en el flujo de nuestra operación.}
 * 
 * Nos va a permitir crear una función que podemos usar para controlar ese iterador, lo que nos va a permitir 
 * a nosotros pausar o retomar lo que se quiere en cualquier momento.
 */

// yield es una palabra reservada, en este ejemplo de valor numérico, y lo que sequiere es poder utilizarlos y llamarlos.
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


//yield es una palabra reservada, en este ejemplo con un array
function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Amll', 'Hmna', 'Gjlg', 'Lall']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);




