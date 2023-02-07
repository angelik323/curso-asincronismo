/**
 * Ahora que se entiende cuales son las promesas y palabras reservadas que se pueden utilizar 
 * Llegó el momento de llamra a nuestra API, mostrar la información que estamos mostrando que sería el primer producto
 * llamar al primer producto y obtener esta información en una segunda solicitud y nuevamente llamar a la categoría a la
 * que pertenece este elemento pero ahora con promesas.
 * */

// Para poder trabajar con Fetch hay que instalarlo por consola
   //npm i node-fetch

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/**
 * Ahora lo que vamos a realizar es una función que va a recibir como argumento la url de la API que queremos llamar y esto me va a retornar
 * el llamado consecuente de fetch, que no es mas que una promesa por lo tanto vamos a poder utilizar las palabras reservadas como then -catch - finally
 */
function fetchData(urlApi) {
    return fetch(urlApi);
}

fetchData(`${API}/products`)
    .then(response => response.json()) //utilizo elemento then para saber que hay en su respuesta y luego transformar la data a un objeto json
    .then(products => {
        console.log(products); //vamos a traer los productos para verlos de manera correcta
    })
    .then(() => {
        console.log('hola') //simplemente quiero ver un hola
    })
    .catch(error => console.log(error)); //en dado caso de recibir un error poderlo mostrar en la consola
