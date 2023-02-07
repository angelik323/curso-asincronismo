/**
 * Ahora que queremos es hacer multiples llamados, ver como se muestran y como con ellos podemos trabajar.
 * */

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/**
 * Ahora lo que vamos a realizar es una función que va a recibir como argumento la url de la API que queremos llamar y esto me va a retornar
 * el llamado consecuente de fetch, que no es mas que una promesa por lo tanto vamos a poder utilizar las palabras reservadas como then -catch - finally
 */
function fetchData(urlApi) {
    return fetch(urlApi);
}

//Hacer llamado multiple
fetchData(`${API}/products`)
    .then(response => response.json()) //permite transformar lo que tenemos a un objeto json
    .then(products => { //tener los productos con la logica de lo que sería una función
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)  // quiero obtener solo el primero de los que pertenecen a ese elemento
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name); 
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));