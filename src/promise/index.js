/**
 * Una promesa tiene 3 estados:
 *  - Pendiente (cuando se está ejecutando)
 *  - Cumplido (cuando ha regresado la información deseada)
 *  - Rechazada (Cuando quiero que nos se cumpla)
 */

//Construir promesa con la palabra reservada Promise
const promise = new Promise(function(resolve, reject) {
    resolve('Hey!');
})

/**
 * Vamos a crear una promesa con una constante que nos va a permitir tener el valor de vacas
 * Cauántas vaquitas tenemos y si podemos contarlas y según el caso del número de vacas
 * entonces cuantas podemos ordeñar y cumplir con un número de litros de leche o si no podemos cumplir con el numero de litros que piden
 */
const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }else {
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally')
}) 