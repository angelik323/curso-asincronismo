//callback
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));


/**
 * Al principio es difícil entender un callback de esta forma. Piensas, 
 * “si ya tengo la función sum, para que hacer un callback, puedo llamarla tal cual y omitir ese paso”.
Pero piensa que tienes funciones para sumar, restar, multiplicar 
…como hacer una calculadora. Las declaras todas en lista, y abajo solo 
tienes que usar un callback que va tirando una a la vez.
*/

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, miFuncion) {
    const num = sum(num1, num2);
    const r = rest(num1, num2);
    const multi = mult(num1, num2);
    return miFuncion(num, r, multi);
};

function mostrarResultado(suma, resta, multiplicar) {
    console.log(`El resultado es ${suma} ${resta} ${multiplicar}`)
}

const result = mostrarResultado(10, 20, 50);
console.log(result());

console.log(calc(2, 2, mostrarResultado));

console.log(console.log("hola mundo"))

//otro ejemplo
function mostrarNum(num) {
    console.log(num)
}

mostrarNum(10);
mostrarNum(20);
//---------------------------------------------------

//Permite ejecutar código en un tiempo determinado --> setTimeout
setTimeout(function() {
    console.log("hola mundo");
}, 6000)

//------------------------//
function gretting(name) {
    console.log(`Hola ${name}`); 
}

gretting("como estas");
setTimeout(gretting, 2000, `Angélica`);


// 1. una funcion que retorne el saludo a "Hola Angelica" reciba nombre y retorne el saludo
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Angélica");

// 2. imprima en pantalla el saludo a esa persona.
function saludar2(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar2("Juanita"));

console.log(saludar("Juanita"));
